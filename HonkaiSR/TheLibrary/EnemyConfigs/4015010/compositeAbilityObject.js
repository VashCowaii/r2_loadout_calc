const entityPageType = "enemy"
const compositeAbilityObject = {
  "fullCharacterName": 4015010,
  "trimCharacterName": 4015010,
  "abilityList": [
    "4015010_Modifiers",
    "4015010_Monster_W4_DawnsEye_PassiveAbility_InsertMainStory",
    "4015010_Monster_W4_DawnsEye_MainStoryOpeningPhase03",
    "4015010_Monster_W4_DawnsEye_MainStoryOpeningPhase02",
    "4015010_Monster_W4_DawnsEye_MainStoryOpeningPhase01",
    "4015010_BattleEventAbility_W4_DawnsEye_SummonMonster",
    "4015010_BattleEventAbility_W4_DawnsEye_RainSKill04Result",
    "4015010_BattleEventAbility_W4_DawnsEye_RainKillSummon",
    "4015010_BattleEventAbility_W4_DawnsEye_RainChargeBreak",
    "4015010_Monster_W4_DawnsEye_PassiveAbilityInitiate5",
    "4015010_Monster_W4_DawnsEye_PassiveAbilityInitiate4",
    "4015010_Monster_W4_DawnsEye_PassiveAbilityInitiate3",
    "4015010_Monster_W4_DawnsEye_PassiveAbilityInitiate2",
    "4015010_Monster_W4_DawnsEye_PassiveAbilityInitiate",
    "4015010_Monster_W4_DawnsEye_RainThunder_Part02",
    "4015010_Monster_W4_DawnsEye_RainThunder_Part01",
    "4015010_Monster_W4_DawnsEye_PassiveAbility_Insert",
    "4015010_Monster_W4_DawnsEye_Ability05P2_Part02",
    "4015010_Monster_W4_DawnsEye_Ability05P2_Part01",
    "4015010_Monster_W4_DawnsEye_Ability05P1_Part02",
    "4015010_Monster_W4_DawnsEye_Ability05_Part01",
    "4015010_Monster_W4_DawnsEye_Ability04P2_Part02",
    "4015010_Monster_W4_DawnsEye_Ability04P2_Part01",
    "4015010_Monster_W4_DawnsEye_Ability04_Part02",
    "4015010_Monster_W4_DawnsEye_Ability04_Part01",
    "4015010_Monster_W4_DawnsEye_Ability03P2_Part02",
    "4015010_Monster_W4_DawnsEye_Ability03P2_Part01",
    "4015010_Monster_W4_DawnsEye_Ability03_Part02",
    "4015010_Monster_W4_DawnsEye_Ability03_Part01",
    "4015010_Monster_W4_DawnsEye_Ability02P2_Part02",
    "4015010_Monster_W4_DawnsEye_Ability02P2_Part01",
    "4015010_Monster_W4_DawnsEye_Ability02_Part02",
    "4015010_Monster_W4_DawnsEye_Ability02_Part01",
    "4015010_Monster_W4_DawnsEye_Ability01P2_Part02",
    "4015010_Monster_W4_DawnsEye_Ability01P2_Part01",
    "4015010_Monster_W4_DawnsEye_Ability01_Part02",
    "4015010_Monster_W4_DawnsEye_Ability01_Part01",
    "4015010_BattleEventAbility_Monster_DawnEye_01_RognarokTrigger",
    "4015010_Functions",
    "4015010_BE_BattleEvents",
    "4015010_Handling"
  ],
  "abilityObject": {
    "4015010_Modifiers": {
      "fileName": "4015010_Modifiers",
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
          "for": "<a class=\"gModGreen\" id=\"mod__1480712068\">W4_DawnsEye_BattleScore3</a>",
          "execute": [
            {
              "eventTrigger": "Ability Use [Owner]: Start",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Skill Name",
                        "skillName": "Skill04P3"
                      },
                      {
                        "name": "Compare: Variable",
                        "value1": "TotalDamageRatio",
                        "compareType": "=",
                        "value2": {
                          "displayLines": "UnusedUnderThisBase_11764"
                        }
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "value": 1,
                      "variableName": "MDF_isSkill04"
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
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value1": "MDF_isSkill04",
                        "compareType": "=",
                        "value2": 1
                      },
                      {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value1": "MDF_isTriggerDeath",
                        "compareType": "=",
                        "value2": 0
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Achievement",
                      "relatedAchievements": [
                        {
                          "title": "Divine Retribution from Up Above",
                          "desc": "When the Decimator, Karma of Daythunder, Eye of Twilight's \"Black Tide Sync Rate\" reaches the maximum, endure the attack of \"Unmaking Ashes: Godsfall\" with no ally character being knocked down",
                          "rarity": "Low",
                          "type": "Hidden until Completion"
                        }
                      ]
                    }
                  ]
                },
                {
                  "name": "Define Custom Variable",
                  "value": 0,
                  "variableName": "MDF_isSkill04"
                },
                {
                  "name": "Define Custom Variable",
                  "value": 0,
                  "variableName": "MDF_isTriggerDeath"
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
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value1": "MDF_isSkill04",
                        "compareType": "=",
                        "value2": 1
                      },
                      {
                        "name": "Modifier Was",
                        "modifier": "<a class=\"gModGreen\" id=\"-1488863445\">Modifier_Monster_W4_DawnsEye_01_MuteSpeed</a>[<span class=\"descriptionNumberColor\">Tide-Corrosion</span>]"
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "value": 1,
                      "variableName": "MDF_isTriggerDeath"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1497489687\">W4_DawnsEye_BattleScore2</a>",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Achievement",
                  "relatedAchievements": [
                    {
                      "title": "Battle for Dominion Over Lightning",
                      "desc": "In the battle against Sublime, Radiant, Avatar of the Sky, interrupt the enemy's \"Thunderclap, Quake of Mount and Seas\" by seizing all \"Thunderclouds\"",
                      "rarity": "Low"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1514267306\">W4_DawnsEye_BattleScore1</a>",
          "modifierFlags": [
            "RemoveWhenCasterDead"
          ],
          "variableValueChange": [
            {
              "name": "Variable Value Changes",
              "variableName": "Sunny_Temperature",
              "scope": "ContextOwner",
              "valueRanges": [
                {
                  "name": "Variable Value Range Conditions",
                  "minValue": 0,
                  "maxValue": 999,
                  "includeMaxValueInRange": true,
                  "onChange": [
                    {
                      "name": "Define Custom Variable with Changes to Stats",
                      "variableName": "MDF_TemperatureChangeDelta"
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value1": "MDF_TemperatureChangeDelta",
                        "compareType": "<=",
                        "value2": 0
                      },
                      "passed": [
                        {
                          "name": "Define Custom Variable with Added Value",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "variableName": "MDF_TemperatureChangeTotal",
                          "value": {
                            "displayLines": "(0 - MDF_TemperatureChangeDelta)"
                          },
                          "max": 999
                        },
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Compare: Variable",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            },
                            "value1": "MDF_TemperatureChangeTotal",
                            "compareType": ">=",
                            "value2": 30
                          },
                          "passed": [
                            {
                              "name": "Achievement",
                              "relatedAchievements": [
                                {
                                  "title": "Rage Against the Dying Light",
                                  "desc": "In the battle against Sublime, Radiant, Avatar of the Sky, lower \"Temperature\" by #1",
                                  "rarity": "Low",
                                  "params": [
                                    30
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
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__185030676\">Enemy_W4_DawnsEye_ThunderAttackPhase02</a>",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier"
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__357250261\">Enemy_W4_DawnsEye_Part02Effect</a>",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Compare: Variable",
                        "value1": "HP_Bars_Remaining",
                        "compareType": ">=",
                        "value2": 2
                      },
                      {
                        "name": "Check Boolean Value",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        "variableName": "Dawnseye_AllPhase",
                        "invertCondition": true
                      }
                    ]
                  }
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-484779713\">Enemy_W4_DawnsEye_Ability05_HitTag</a>"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1526533181\">Enemy_W4_DawnsEye_Ability01_HitTag</a>"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__155112882\">Enemy_W4_DawnsEye_Ability02_EnhanceMessage</a>",
          "modifierFlags": [
            "RemoveWhenCasterDead"
          ],
          "execute": [
            {
              "eventTrigger": "Action End [Owner]",
              "execute": [
                "Modifier Deletes Itself"
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-122136541\">Enemy_W4_DawnsEye_MainBlock</a>",
          "modifierFlags": [
            "STAT_AITargetLowerPriority",
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
          "for": "<a class=\"gModGreen\" id=\"mod__1128353279\">Enemy_W4_DawnsEye_PartBlock</a>[<span class=\"descriptionNumberColor\">Marine Layer</span>]",
          "modifierFlags": [
            "RemoveWhenCasterDead"
          ],
          "description": "Currently unselectable.",
          "type": "Other",
          "statusName": "Marine Layer",
          "execute": [
            {
              "eventTrigger": "When Modifier Destroyed/Removed",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Enemy ID",
                    "ID": 401501,
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "characterName": null,
                    "isCompareUniqueID": true
                  },
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Check Boolean Value",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "variableName": "MonsterType_W4_BossPartLeft"
                      }
                    }
                  ]
                },
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
                  "name": "IF",
                  "conditions": {
                    "name": "Enemy ID",
                    "ID": 401501,
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "characterName": null,
                    "isCompareUniqueID": true
                  },
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Check Boolean Value",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "variableName": "MonsterType_W4_BossPartLeft"
                      }
                    }
                  ]
                },
                "Mark Entity as Non-Target(Unselectable)",
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
          "for": "<a class=\"gModGreen\" id=\"mod__-1716068014\">Enemy_W4_DawnsEye_PartHP</a>[<span class=\"descriptionNumberColor\">All As One</span>]",
          "stackType": "Replace",
          "modifierFlags": [
            "RemoveWhenCasterDead",
            "KeepOnDeathrattle"
          ],
          "description": "When receiving DMG, \"Sublime, Radiant, Avatar of the Sky\" loses an equal amount of HP.",
          "type": "Other",
          "statusName": "All As One",
          "execute": [
            {
              "eventTrigger": "When Modifier Destroyed/Removed"
            },
            {
              "eventTrigger": "Being Limbo [Owner]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "OR",
                    "conditionList": [
                      {
                        "name": "Check Boolean Value",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "variableName": "MonsterType_W4_BossPartP3"
                      },
                      {
                        "name": "Check Boolean Value",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "variableName": "MonsterType_W4_BossPart"
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
                          "target": "{{Caster}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"-39064349\">Modifier_Monster_W4_DawnsEye_WheaterSunny</a>"
                      },
                      "passed": [
                        {
                          "name": "Define Custom Variable",
                          "value": {
                            "displayLines": "Sunny_Temperature"
                          },
                          "variableName": "MDF_SunnyBreakColdFinal"
                        },
                        {
                          "name": "Define Custom Variable",
                          "value": {
                            "displayLines": "&nbsp;<span class=\"descriptionFunctionColor\">FLOOR</span>((MDF_SunnyBreakColdFinal * MDF_SunnyBreakColdRatio))"
                          },
                          "variableName": "MDF_SunnyBreakColdFinal"
                        },
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Compare: Variable",
                            "value1": "MDF_SunnyBreakColdFinal",
                            "compareType": ">=",
                            "value2": {
                              "displayLines": "MDF_SunnyBreakCold"
                            }
                          },
                          "passed": [
                            {
                              "name": "Define Custom Variable with Added Value",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Caster}}"
                              },
                              "variableName": "Sunny_Temperature",
                              "context": "TargetEntity",
                              "value": {
                                "displayLines": "(0 - MDF_SunnyBreakColdFinal)"
                              },
                              "max": 999
                            }
                          ],
                          "failed": [
                            {
                              "name": "Define Custom Variable with Added Value",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Caster}}"
                              },
                              "variableName": "Sunny_Temperature",
                              "context": "TargetEntity",
                              "value": {
                                "displayLines": "(0 - MDF_SunnyBreakCold)"
                              },
                              "max": 999
                            }
                          ]
                        },
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"735847061\">Modifier_Monster_W4_DawnsEye_WheaterSunnyUIController</a>",
                          "casterAssign": "TargetSelf"
                        }
                      ],
                      "failed": [
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
                                "modifier": "<a class=\"gModGreen\" id=\"1923265590\">Modifier_Monster_W4_DawnsEye_WheaterRain</a>"
                              }
                            ]
                          },
                          "passed": [
                            {
                              "name": "Define Custom Variable",
                              "value": {
                                "displayLines": "(Thunder_CountLight + Thunder_CountDark)"
                              },
                              "variableName": "MDF_CountTotal"
                            },
                            {
                              "name": "IF",
                              "conditions": {
                                "name": "Has Modifier",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Caster}}"
                                },
                                "modifier": "<a class=\"gModGreen\" id=\"-1414068042\">Modifier_Monster_W4_DawnsEye_WheaterMarkAbility04</a>[<span class=\"descriptionNumberColor\">Ionization</span>]"
                              },
                              "passed": [
                                {
                                  "name": "Define Custom Variable with Added Value",
                                  "target": {
                                    "name": "Target Name",
                                    "target": "{{Caster}}"
                                  },
                                  "variableName": "Thunder_CountLight",
                                  "context": "TargetEntity",
                                  "value": {
                                    "displayLines": "{[SkillP02[4]]}"
                                  },
                                  "max": {
                                    "displayLines": "MDF_CountTotal"
                                  }
                                },
                                {
                                  "name": "Define Custom Variable with Added Value",
                                  "target": {
                                    "name": "Target Name",
                                    "target": "{{Caster}}"
                                  },
                                  "variableName": "Thunder_CountDark",
                                  "context": "TargetEntity",
                                  "value": {
                                    "displayLines": "(0 - {[SkillP02[4]]})"
                                  },
                                  "max": {
                                    "displayLines": "MDF_CountTotal"
                                  }
                                },
                                {
                                  "name": "Add Events/Bonuses",
                                  "to": {
                                    "name": "Target Name",
                                    "target": "{{Caster}}"
                                  },
                                  "modifier": "<a class=\"gModGreen\" id=\"-2093876840\">Modifier_Monster_W4_DawnsEye_WheaterRainUIController</a>"
                                },
                                {
                                  "name": "IF",
                                  "conditions": {
                                    "name": "Compare: Variable",
                                    "value1": "Thunder_CountDark",
                                    "compareType": "=",
                                    "value2": 0
                                  },
                                  "passed": [
                                    {
                                      "name": "Define Custom Variable with Stat",
                                      "variableName": "MDF_BreakStance",
                                      "readTarget": {
                                        "name": "Target Name",
                                        "target": "{{Caster}}"
                                      },
                                      "value": "&nbsp;<span class=\"descriptionNumberColor\">CurrentToughness</span>&nbsp;"
                                    },
                                    {
                                      "name": "IF",
                                      "conditions": {
                                        "name": "Has Modifier",
                                        "target": {
                                          "name": "Target Name",
                                          "target": "{{Caster}}"
                                        },
                                        "modifier": "<a class=\"gModGreen\" id=\"-122136541\">Enemy_W4_DawnsEye_MainBlock</a>"
                                      },
                                      "passed": [
                                        {
                                          "name": "Remove Events/Bonuses",
                                          "to": {
                                            "name": "Target Name",
                                            "target": "{{Caster}}"
                                          },
                                          "modifier": "<a class=\"gModGreen\" id=\"-122136541\">Enemy_W4_DawnsEye_MainBlock</a>"
                                        },
                                        {
                                          "name": "Trigger 0-Toughness",
                                          "target": {
                                            "name": "Target Name",
                                            "target": "{{Caster}}"
                                          },
                                          "bypassBreakMute": true
                                        },
                                        {
                                          "name": "Add Events/Bonuses",
                                          "to": {
                                            "name": "Target Name",
                                            "target": "{{Caster}}"
                                          },
                                          "modifier": "<a class=\"gModGreen\" id=\"-122136541\">Enemy_W4_DawnsEye_MainBlock</a>"
                                        }
                                      ],
                                      "failed": [
                                        {
                                          "name": "Trigger 0-Toughness",
                                          "target": {
                                            "name": "Target Name",
                                            "target": "{{Caster}}"
                                          },
                                          "bypassBreakMute": true
                                        }
                                      ]
                                    },
                                    {
                                      "name": "Add Events/Bonuses",
                                      "to": {
                                        "name": "Target Name",
                                        "target": "{{Caster}}"
                                      },
                                      "modifier": "<a class=\"gModGreen\" id=\"1497489687\">W4_DawnsEye_BattleScore2</a>"
                                    }
                                  ]
                                }
                              ],
                              "failed": [
                                {
                                  "name": "IF",
                                  "conditions": {
                                    "name": "Compare: Variable",
                                    "value1": "Thunder_CountDark",
                                    "compareType": ">=",
                                    "value2": 1
                                  },
                                  "passed": [
                                    {
                                      "name": "Define Custom Variable",
                                      "value": {
                                        "displayLines": "(ThunderKillCount + 1)"
                                      },
                                      "variableName": "ThunderKillCount"
                                    },
                                    {
                                      "name": "Inject Ability Use",
                                      "condition": {
                                        "name": "Insert Ability Condition",
                                        "type": "AbilityOwnerInsertUnusedCount",
                                        "typeValue": 1
                                      },
                                      "conditionActive": {
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
                                            "value1": "ThunderKillCount",
                                            "compareType": ">=",
                                            "value2": 1
                                          },
                                          {
                                            "name": "Compare: Variable",
                                            "value1": "Thunder_CountDark",
                                            "compareType": ">=",
                                            "value2": 1
                                          }
                                        ]
                                      },
                                      "abilityName": "BattleEventAbility_W4_DawnsEye_RainKillSummon",
                                      "abilitySource": {
                                        "name": "Target Name",
                                        "target": "{{Caster}}"
                                      },
                                      "abilityTarget": {
                                        "name": "Target Name",
                                        "target": "{{Caster}}"
                                      },
                                      "priorityTag": "EnemyDeathEffect",
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
                    "name": "OR",
                    "conditionList": [
                      {
                        "name": "Compare: Variable",
                        "value1": "HP_Bars_Remaining",
                        "compareType": "=",
                        "value2": 3
                      },
                      {
                        "name": "Enemy ID",
                        "ID": 401502,
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        "characterName": null,
                        "isCompareUniqueID": true
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Update Modifier Description",
                      "popUpText": "When receiving DMG, \"Decimator, Karma of Daythunder, Eye of Twilight\" loses equal amount of HP."
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
                    "value1": "ParameterValue",
                    "compareType": "<",
                    "value2": 0
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable with Changes to Stats",
                      "variableName": "PartLoseHpValue",
                      "scope": "ContextModifier"
                    },
                    {
                      "name": "Consume",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "sourceTarget": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "flatConsume": {
                        "displayLines": "(0 - PartLoseHpValue)"
                      }
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Was HP Overkilled [Owner]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Check Boolean Value",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "variableName": "MonsterType_W4_BossSummon"
                  },
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "ParameterValue",
                        "compareType": "<",
                        "value2": 0
                      },
                      "passed": [
                        {
                          "name": "Define Custom Variable with Changes to Stats",
                          "variableName": "PartHPOverflow",
                          "scope": "ContextModifier"
                        },
                        {
                          "name": "Consume",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "sourceTarget": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "flatConsume": {
                            "displayLines": "(0 - PartHPOverflow)"
                          }
                        }
                      ]
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
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "OR",
                        "conditionList": [
                          {
                            "name": "Check Boolean Value",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            },
                            "variableName": "MonsterType_W4_BossPartP3"
                          },
                          {
                            "name": "Check Boolean Value",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            },
                            "variableName": "MonsterType_W4_BossPart"
                          }
                        ]
                      },
                      {
                        "name": "Modifier Was",
                        "modifier": "<a class=\"gModGreen\" id=\"1128353279\">Enemy_W4_DawnsEye_PartBlock</a>[<span class=\"descriptionNumberColor\">Marine Layer</span>]"
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
                          "target": "{{Caster}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"-39064349\">Modifier_Monster_W4_DawnsEye_WheaterSunny</a>"
                      },
                      "passed": [
                        {
                          "name": "Define Custom Variable",
                          "value": {
                            "displayLines": "Sunny_Temperature"
                          },
                          "variableName": "MDF_SunnyBreakColdFinal"
                        },
                        {
                          "name": "Define Custom Variable",
                          "value": {
                            "displayLines": "&nbsp;<span class=\"descriptionFunctionColor\">FLOOR</span>((MDF_SunnyBreakColdFinal * MDF_SunnyBreakColdRatio))"
                          },
                          "variableName": "MDF_SunnyBreakColdFinal"
                        },
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Compare: Variable",
                            "value1": "MDF_SunnyBreakColdFinal",
                            "compareType": ">=",
                            "value2": {
                              "displayLines": "MDF_SunnyBreakCold"
                            }
                          },
                          "passed": [
                            {
                              "name": "Define Custom Variable with Added Value",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Caster}}"
                              },
                              "variableName": "Sunny_Temperature",
                              "context": "TargetEntity",
                              "value": {
                                "displayLines": "(0 - MDF_SunnyBreakColdFinal)"
                              },
                              "max": 999
                            }
                          ],
                          "failed": [
                            {
                              "name": "Define Custom Variable with Added Value",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Caster}}"
                              },
                              "variableName": "Sunny_Temperature",
                              "context": "TargetEntity",
                              "value": {
                                "displayLines": "(0 - MDF_SunnyBreakCold)"
                              },
                              "max": 999
                            }
                          ]
                        },
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"735847061\">Modifier_Monster_W4_DawnsEye_WheaterSunnyUIController</a>",
                          "casterAssign": "TargetSelf"
                        }
                      ],
                      "failed": [
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
                                "modifier": "<a class=\"gModGreen\" id=\"1923265590\">Modifier_Monster_W4_DawnsEye_WheaterRain</a>"
                              },
                              {
                                "name": "Has Modifier",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Caster}}"
                                },
                                "modifier": "<a class=\"gModGreen\" id=\"-1414068042\">Modifier_Monster_W4_DawnsEye_WheaterMarkAbility04</a>[<span class=\"descriptionNumberColor\">Ionization</span>]"
                              }
                            ]
                          },
                          "passed": [
                            {
                              "name": "Define Custom Variable",
                              "value": {
                                "displayLines": "(Thunder_CountLight + Thunder_CountDark)"
                              },
                              "variableName": "MDF_CountTotal"
                            },
                            {
                              "name": "Define Custom Variable with Added Value",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Caster}}"
                              },
                              "variableName": "Thunder_CountLight",
                              "context": "TargetEntity",
                              "value": {
                                "displayLines": "{[SkillP02[4]]}"
                              },
                              "max": {
                                "displayLines": "MDF_CountTotal"
                              }
                            },
                            {
                              "name": "Define Custom Variable with Added Value",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Caster}}"
                              },
                              "variableName": "Thunder_CountDark",
                              "context": "TargetEntity",
                              "value": {
                                "displayLines": "(0 - {[SkillP02[4]]})"
                              },
                              "max": {
                                "displayLines": "MDF_CountTotal"
                              }
                            },
                            {
                              "name": "Add Events/Bonuses",
                              "to": {
                                "name": "Target Name",
                                "target": "{{Caster}}"
                              },
                              "modifier": "<a class=\"gModGreen\" id=\"-2093876840\">Modifier_Monster_W4_DawnsEye_WheaterRainUIController</a>"
                            },
                            {
                              "name": "IF",
                              "conditions": {
                                "name": "Compare: Variable",
                                "value1": "Thunder_CountDark",
                                "compareType": "=",
                                "value2": 0
                              },
                              "passed": [
                                {
                                  "name": "Define Custom Variable with Stat",
                                  "variableName": "MDF_BreakStance",
                                  "readTarget": {
                                    "name": "Target Name",
                                    "target": "{{Caster}}"
                                  },
                                  "value": "&nbsp;<span class=\"descriptionNumberColor\">CurrentToughness</span>&nbsp;"
                                },
                                {
                                  "name": "IF",
                                  "conditions": {
                                    "name": "Has Modifier",
                                    "target": {
                                      "name": "Target Name",
                                      "target": "{{Caster}}"
                                    },
                                    "modifier": "<a class=\"gModGreen\" id=\"-122136541\">Enemy_W4_DawnsEye_MainBlock</a>"
                                  },
                                  "passed": [
                                    {
                                      "name": "Remove Events/Bonuses",
                                      "to": {
                                        "name": "Target Name",
                                        "target": "{{Caster}}"
                                      },
                                      "modifier": "<a class=\"gModGreen\" id=\"-122136541\">Enemy_W4_DawnsEye_MainBlock</a>"
                                    },
                                    {
                                      "name": "Trigger 0-Toughness",
                                      "target": {
                                        "name": "Target Name",
                                        "target": "{{Caster}}"
                                      },
                                      "bypassBreakMute": true
                                    },
                                    {
                                      "name": "Add Events/Bonuses",
                                      "to": {
                                        "name": "Target Name",
                                        "target": "{{Caster}}"
                                      },
                                      "modifier": "<a class=\"gModGreen\" id=\"-122136541\">Enemy_W4_DawnsEye_MainBlock</a>"
                                    }
                                  ],
                                  "failed": [
                                    {
                                      "name": "Trigger 0-Toughness",
                                      "target": {
                                        "name": "Target Name",
                                        "target": "{{Caster}}"
                                      },
                                      "bypassBreakMute": true
                                    }
                                  ]
                                },
                                {
                                  "name": "Add Events/Bonuses",
                                  "to": {
                                    "name": "Target Name",
                                    "target": "{{Caster}}"
                                  },
                                  "modifier": "<a class=\"gModGreen\" id=\"1497489687\">W4_DawnsEye_BattleScore2</a>"
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
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1514798128\">Enemy_W4_DawnsEye_SummonController</a>",
          "modifierFlags": [
            "RemoveWhenCasterDead"
          ],
          "execute": [
            {
              "eventTrigger": "Action End [Owner]",
              "execute": [
                {
                  "name": "Define Custom Variable with Added Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "variableName": "CountDown",
                  "value": -1,
                  "max": 100
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "CountDown",
                    "compareType": "=",
                    "value2": 0
                  },
                  "passed": [
                    "Modifier Deletes Itself"
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
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "CountDown",
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
                      "scope": "TargetEntity",
                      "value": 2,
                      "variableName": "AIFlag"
                    },
                    "Modifier Deletes Itself"
                  ],
                  "failed": [
                    {
                      "name": "Define Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "scope": "TargetEntity",
                      "value": 1,
                      "variableName": "AIFlag"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1807935838\">Enemy_W4_DawnsEye_PartController</a>",
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
                    "modifier": "<a class=\"gModGreen\" id=\"-460192420\">Enemy_W4_DawnsEye_DamageTakenUp</a>",
                    "invertCondition": true
                  },
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "AND",
                        "conditionList": [
                          {
                            "name": "Is Part Of Team Location",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            },
                            "team": "Enemy Team",
                            "stateType": "Left"
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
                            "name": "Is Part Of Team Location",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            },
                            "team": "Enemy Team",
                            "stateType": "Right"
                          }
                        ]
                      }
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier"
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1414068042\">Modifier_Monster_W4_DawnsEye_WheaterMarkAbility04</a>[<span class=\"descriptionNumberColor\">Ionization</span>]",
          "stackType": "Replace",
          "description": "Uses \"Wrath, Rend of Eternal Sky\" in the next action and additionally deals DMG based on the number of Thunderclouds possessed. Current Thundercloud(s): <span class=\"descriptionNumberColor\">MDF_ThunderDark</span>.",
          "type": "Buff",
          "statusName": "Ionization",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier"
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-526594563\">Modifier_Monster_W4_DawnsEye_WheaterRainChargeBreak</a>",
          "stackType": "Replace",
          "execute": [
            {
              "eventTrigger": "Being Weakness Broken: End [Owner]",
              "execute": [
                {
                  "name": "Inject Ability Use",
                  "condition": {
                    "name": "Insert Ability Condition",
                    "type": "AbilityOwnerInsertUnusedCount",
                    "typeValue": 1
                  },
                  "conditionActive": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Compare: Variable",
                        "value1": "HP_Bars_Remaining",
                        "compareType": "=",
                        "value2": 2
                      },
                      {
                        "name": "OR",
                        "conditionList": [
                          {
                            "name": "Compare: Variable",
                            "value1": "Thunder_CountLight",
                            "compareType": ">=",
                            "value2": 1
                          },
                          {
                            "name": "Compare: Variable",
                            "value1": "Thunder_CountDark",
                            "compareType": ">=",
                            "value2": 1
                          }
                        ]
                      }
                    ]
                  },
                  "abilityName": "BattleEventAbility_W4_DawnsEye_RainChargeBreak",
                  "abilityTarget": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "priorityTag": "EnemyChangeState",
                  "canHitNonTargets": true,
                  "allowAbilityTriggers": false
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1525188531\">Modifier_Monster_W4_DawnsEye_WheaterRainSubMark</a>",
          "modifierFlags": [
            "RemoveWhenCasterDead",
            "KeepOnDeathrattle"
          ],
          "execute": [
            {
              "eventTrigger": "Attack Action Completed [Anyone]",
              "execute": [
                "Modifier Deletes Itself"
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1586907692\">Modifier_Monster_W4_DawnsEye_WheaterRainSub</a>",
          "execute": [
            {
              "eventTrigger": "Deal Damage End [Owner]: Hit",
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
                          "target": "{{Caster}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"-1414068042\">Modifier_Monster_W4_DawnsEye_WheaterMarkAbility04</a>[<span class=\"descriptionNumberColor\">Ionization</span>]"
                      },
                      {
                        "name": "Is Part Of Team",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "team": "Enemy Team",
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
                      "modifier": "<a class=\"gModGreen\" id=\"-1525188531\">Modifier_Monster_W4_DawnsEye_WheaterRainSubMark</a>"
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Got a Kill [Owner]"
            },
            {
              "eventTrigger": "Attack DMG End [Owner]",
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
                          "target": "{{Caster}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"-1414068042\">Modifier_Monster_W4_DawnsEye_WheaterMarkAbility04</a>[<span class=\"descriptionNumberColor\">Ionization</span>]"
                      },
                      {
                        "name": "Is Part Of Team",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "team": "Enemy Team",
                        "invertCondition": true
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable with Team Count",
                      "variableName": "MDF_Count",
                      "readTarget": {
                        "name": "Target Name",
                        "target": "{{Enemy Team All}}"
                      },
                      "conditions": {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"-1525188531\">Modifier_Monster_W4_DawnsEye_WheaterRainSubMark</a>"
                      }
                    },
                    {
                      "name": "Define Custom Variable",
                      "value": {
                        "displayLines": "(Thunder_CountLight + Thunder_CountDark)"
                      },
                      "variableName": "MDF_CountTotal"
                    },
                    {
                      "name": "Define Custom Variable with Added Value",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "variableName": "Thunder_CountLight",
                      "context": "TargetEntity",
                      "value": {
                        "displayLines": "MDF_Count"
                      },
                      "max": {
                        "displayLines": "MDF_CountTotal"
                      }
                    },
                    {
                      "name": "Define Custom Variable with Added Value",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "variableName": "Thunder_CountDark",
                      "context": "TargetEntity",
                      "value": {
                        "displayLines": "(0 - MDF_Count)"
                      },
                      "max": {
                        "displayLines": "MDF_CountTotal"
                      }
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-2093876840\">Modifier_Monster_W4_DawnsEye_WheaterRainUIController</a>"
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "Thunder_CountDark",
                        "compareType": "=",
                        "value2": 0
                      },
                      "passed": [
                        {
                          "name": "Define Custom Variable with Stat",
                          "variableName": "MDF_BreakStance",
                          "readTarget": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "value": "&nbsp;<span class=\"descriptionNumberColor\">CurrentToughness</span>&nbsp;"
                        },
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Has Modifier",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Caster}}"
                            },
                            "modifier": "<a class=\"gModGreen\" id=\"-122136541\">Enemy_W4_DawnsEye_MainBlock</a>"
                          },
                          "passed": [
                            {
                              "name": "Remove Events/Bonuses",
                              "to": {
                                "name": "Target Name",
                                "target": "{{Caster}}"
                              },
                              "modifier": "<a class=\"gModGreen\" id=\"-122136541\">Enemy_W4_DawnsEye_MainBlock</a>"
                            },
                            {
                              "name": "Trigger 0-Toughness",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Caster}}"
                              },
                              "bypassBreakMute": true
                            },
                            {
                              "name": "Add Events/Bonuses",
                              "to": {
                                "name": "Target Name",
                                "target": "{{Caster}}"
                              },
                              "modifier": "<a class=\"gModGreen\" id=\"-122136541\">Enemy_W4_DawnsEye_MainBlock</a>"
                            }
                          ],
                          "failed": [
                            {
                              "name": "Trigger 0-Toughness",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Caster}}"
                              },
                              "bypassBreakMute": true
                            }
                          ]
                        },
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"1497489687\">W4_DawnsEye_BattleScore2</a>"
                        }
                      ]
                    },
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Enemy Team All}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-1525188531\">Modifier_Monster_W4_DawnsEye_WheaterRainSubMark</a>"
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "When Stacking Modifier Instance [Owner]"
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-961317684\">Enemy_W4_DawnsEye_SummonLimboMark</a>"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1862939413\">Modifier_Monster_W4_DawnsEye_WheaterRainTriggerBreak</a>",
          "stackType": "Replace",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"-122136541\">Enemy_W4_DawnsEye_MainBlock</a>"
                  },
                  "passed": [
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-122136541\">Enemy_W4_DawnsEye_MainBlock</a>"
                    },
                    {
                      "name": "Trigger 0-Toughness",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "bypassBreakMute": true
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-122136541\">Enemy_W4_DawnsEye_MainBlock</a>"
                    }
                  ],
                  "failed": [
                    {
                      "name": "Trigger 0-Toughness",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "bypassBreakMute": true
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
          "for": "<a class=\"gModGreen\" id=\"mod__1412292158\">Modifier_Monster_W4_DawnsEye_WheaterRainDeathrattle</a>",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Lock HP",
                  "threshold": 0.00010000006
                }
              ]
            },
            {
              "eventTrigger": "Locked HP Floor Reached [Owner]",
              "execute": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-961317684\">Enemy_W4_DawnsEye_SummonLimboMark</a>"
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-2093876840\">Modifier_Monster_W4_DawnsEye_WheaterRainUIController</a>",
          "stackType": "Replace",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"-1414068042\">Modifier_Monster_W4_DawnsEye_WheaterMarkAbility04</a>[<span class=\"descriptionNumberColor\">Ionization</span>]"
                  },
                  "passed": [
                    {
                      "name": "Set Aquila UI Data"
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-1414068042\">Modifier_Monster_W4_DawnsEye_WheaterMarkAbility04</a>[<span class=\"descriptionNumberColor\">Ionization</span>]",
                      "valuePerStack": {
                        "MDF_ThunderDark": {
                          "displayLines": "Thunder_CountDark"
                        }
                      }
                    }
                  ],
                  "failed": [
                    {
                      "name": "Set Aquila UI Data"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1923265590\">Modifier_Monster_W4_DawnsEye_WheaterRain</a>",
          "subModList": [
            {
              "name": "Add Sub-Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Player Team All(with Unselectable)V2}}.[[removeBattleEvents]]"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1586907692\">Modifier_Monster_W4_DawnsEye_WheaterRainSub</a>",
              "haloStatus": true
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
                    "target": "{{Player & Enemy Team All(with Unselectable)}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1586907692\">Modifier_Monster_W4_DawnsEye_WheaterRainSub</a>"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-2093876840\">Modifier_Monster_W4_DawnsEye_WheaterRainUIController</a>"
                }
              ]
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Define Custom Variable",
                  "value": 0,
                  "variableName": "Thunder_CountDark"
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-2093876840\">Modifier_Monster_W4_DawnsEye_WheaterRainUIController</a>"
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1229754990\">Modifier_Monster_W4_DawnsEye_WheaterSunnySubMark</a>",
          "modifierFlags": [
            "KeepOnDeathrattle"
          ],
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
          "for": "<a class=\"gModGreen\" id=\"mod__181367335\">Modifier_Monster_W4_DawnsEye_WheaterSunnySub</a>",
          "execute": [
            {
              "eventTrigger": "Deal Damage End [Owner]: Hit",
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
                          "target": "{{Caster}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"-1737251406\">Enemy_W4_DawnsEye_Ability04_SunnyChargeHeat</a>[<span class=\"descriptionNumberColor\">Helium Flash</span>]"
                      },
                      {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"-1229754990\">Modifier_Monster_W4_DawnsEye_WheaterSunnySubMark</a>",
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
                      "modifier": "<a class=\"gModGreen\" id=\"-1229754990\">Modifier_Monster_W4_DawnsEye_WheaterSunnySubMark</a>"
                    },
                    {
                      "name": "Define Custom Variable with Added Value",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "variableName": "MDF_Count",
                      "value": 1,
                      "max": 100
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Attack Action Completed [Owner]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"-1737251406\">Enemy_W4_DawnsEye_Ability04_SunnyChargeHeat</a>[<span class=\"descriptionNumberColor\">Helium Flash</span>]"
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable with Added Value",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "variableName": "Skill04P1SunnyHeat",
                      "context": "TargetEntity",
                      "value": {
                        "displayLines": "(0 - (MDF_Count * MDF_Skill04SunnyHeatColdDown))"
                      },
                      "min": {
                        "displayLines": "{[Skill04P1[3]]}"
                      },
                      "max": {
                        "displayLines": "{[Skill04P1[0]]}"
                      }
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-1737251406\">Enemy_W4_DawnsEye_Ability04_SunnyChargeHeat</a>[<span class=\"descriptionNumberColor\">Helium Flash</span>]",
                      "valuePerStack": {
                        "MDF_Ability04P1SunnyHeat": {
                          "displayLines": "Skill04P1SunnyHeat"
                        }
                      }
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"735847061\">Modifier_Monster_W4_DawnsEye_WheaterSunnyUIController</a>"
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "Skill04P1SunnyHeat",
                        "compareType": "=",
                        "value2": {
                          "displayLines": "{[Skill04P1[3]]}"
                        }
                      }
                    },
                    {
                      "name": "Define Custom Variable",
                      "value": 0,
                      "variableName": "MDF_Count"
                    },
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Enemy Team All}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-1229754990\">Modifier_Monster_W4_DawnsEye_WheaterSunnySubMark</a>"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1201435172\">Enemy_W4_DawnsEye_Ability04_SunnyChargeHeatStatus</a>",
          "stackType": "Replace"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1737251406\">Enemy_W4_DawnsEye_Ability04_SunnyChargeHeat</a>[<span class=\"descriptionNumberColor\">Helium Flash</span>]",
          "stackType": "Replace",
          "stackData": [
            "MDF_Skill04P1SunnyHeat"
          ],
          "description": "Uses \"Fury, Incineration of Dawn and Dusk\" on all targets in the next action and increases the Temperature by <span class=\"descriptionNumberColor\">MDF_Skill04P1SunnyHeat</span>.",
          "type": "Buff",
          "statusName": "Helium Flash",
          "execute": [
            {
              "eventTrigger": "When Modifier Destroyed/Removed",
              "execute": [
                {
                  "name": "Define Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "value": 0,
                  "variableName": "Skill04P1SunnyHeat"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1201435172\">Enemy_W4_DawnsEye_Ability04_SunnyChargeHeatStatus</a>"
                }
              ]
            },
            {
              "eventTrigger": "Being Limbo [Owner]",
              "execute": [
                "Modifier Deletes Itself"
              ]
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier"
            },
            {
              "eventTrigger": "Being Weakness Broken: End [Owner]",
              "execute": [
                "Modifier Deletes Itself"
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__299637479\">Modifier_Monster_W4_DawnsEye_WheaterSunnyChange</a>",
          "stackType": "Replace",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Level Entity}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-39064349\">Modifier_Monster_W4_DawnsEye_WheaterSunny</a>",
                  "valuePerStack": {
                    "Weather_SunnyChange": {
                      "displayLines": "Weather_SunnyChange"
                    }
                  },
                  "casterAssign": "CasterSelf"
                },
                "Modifier Deletes Itself"
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__55187290\">Enemy_Monster_W4_DawnsEye_WheaterSunnyAllDamageTypeAddedRatioSub</a>",
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
                  "propertyName": "&nbsp;<span class=\"descriptionNumberColor\">DamageAll</span>&nbsp;",
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
          "for": "<a class=\"gModGreen\" id=\"mod__1769039176\">Enemy_Monster_W4_DawnsEye_WheaterSunnyAllDamageTypeAddedRatio</a>[<span class=\"descriptionNumberColor\">DMG Boost</span>]",
          "stackType": "Replace",
          "modifierFlags": [
            "CanBeAddedToServant"
          ],
          "description": "DMG dealt increases by <span class=\"descriptionNumberColor\">MDF_AllDamageTypeAddedRatioCurrent</span>.",
          "type": "Buff",
          "statusName": "DMG Boost",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Define Custom Variable with Copy",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "variable": "Sunny_Temperature",
                  "target2": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "variable2": "Weather_SunnyHeat"
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "Weather_SunnyHeat",
                    "compareType": ">",
                    "value2": {
                      "displayLines": "Weather_SunnyHeatInitial"
                    }
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "value": {
                        "displayLines": "(MDF_AllDamageTypeAddedRatio * ((Weather_SunnyHeat - Weather_SunnyHeatInitial) + 10))"
                      },
                      "variableName": "MDF_AllDamageTypeAddedRatioCurrent"
                    }
                  ],
                  "failed": [
                    {
                      "name": "Define Custom Variable",
                      "value": {
                        "displayLines": "(MDF_AllDamageTypeAddedRatio * 10)"
                      },
                      "variableName": "MDF_AllDamageTypeAddedRatioCurrent"
                    }
                  ]
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"55187290\">Enemy_Monster_W4_DawnsEye_WheaterSunnyAllDamageTypeAddedRatioSub</a>",
                  "valuePerStack": {
                    "MDF_PropertyValue": {
                      "displayLines": "MDF_AllDamageTypeAddedRatioCurrent"
                    }
                  }
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
                    "modifier": "<a class=\"gModGreen\" id=\"735847061\">Modifier_Monster_W4_DawnsEye_WheaterSunnyUIController</a>"
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable with Copy",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "variable": "Sunny_Temperature",
                      "target2": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "variable2": "Weather_SunnyHeat"
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value1": "Weather_SunnyHeat",
                        "compareType": ">",
                        "value2": {
                          "displayLines": "Weather_SunnyHeatInitial"
                        }
                      },
                      "passed": [
                        {
                          "name": "Define Custom Variable",
                          "value": {
                            "displayLines": "(MDF_AllDamageTypeAddedRatio * ((Weather_SunnyHeat - Weather_SunnyHeatInitial) + 10))"
                          },
                          "variableName": "MDF_AllDamageTypeAddedRatioCurrent"
                        }
                      ],
                      "failed": [
                        {
                          "name": "Define Custom Variable",
                          "value": {
                            "displayLines": "(MDF_AllDamageTypeAddedRatio * 10)"
                          },
                          "variableName": "MDF_AllDamageTypeAddedRatioCurrent"
                        }
                      ]
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"55187290\">Enemy_Monster_W4_DawnsEye_WheaterSunnyAllDamageTypeAddedRatioSub</a>",
                      "valuePerStack": {
                        "MDF_PropertyValue": {
                          "displayLines": "MDF_AllDamageTypeAddedRatioCurrent"
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
          "for": "<a class=\"gModGreen\" id=\"mod__1383289356\">Enemy_Monster_W4_DawnsEye_WheaterSunnyBurn</a>[<span class=\"descriptionNumberColor\">Solar Storm</span>]",
          "stackType": "Replace",
          "lifeCyclePhaseAllowed": "ModifierPhase1End",
          "modifierFlags": [
            "STAT_DOT",
            "STAT_DOT_Burn",
            "CanBeAddedToServant"
          ],
          "useEntitySnapshot": true,
          "description": "Takes Fire DMG based on the current Temperature at the start of each turn.",
          "type": "Other",
          "effectName": "Solar Storm",
          "statusName": "Solar Storm",
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier",
              "execute": [
                {
                  "name": "IF",
                  "conditions": "Is NOT in Auto-Battle State"
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Target",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "target2": {
                      "name": "Target Name",
                      "target": "{{Level Entity}}"
                    },
                    "invertCondition": true
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable with Stat",
                      "variableName": "MDF_BaseAttack",
                      "readTarget": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "value": "&nbsp;<span class=\"descriptionNumberColor\">ATKBase</span>&nbsp;"
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Turn [Owner]: Pre-action Phase",
              "execute": [
                {
                  "name": "Define Custom Variable with Copy",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "variable": "Sunny_Temperature",
                  "target2": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "variable2": "Weather_SunnyHeat"
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "Weather_SunnyHeat",
                    "compareType": ">",
                    "value2": {
                      "displayLines": "Weather_SunnyHeatInitial"
                    }
                  },
                  "passed": [
                    {
                      "name": "ATK Scaling DMG",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "AttackScaling": {
                        "DamageType": "Fire",
                        "DamageFlat": {
                          "displayLines": "((Modifier_Burn_DamagePercentage * ((Weather_SunnyHeat - Weather_SunnyHeatInitial) + 10)) * MDF_BaseAttack)"
                        },
                        "cantKill": true,
                        "Toughness": null,
                        "Tags": [
                          "Burn"
                        ],
                        "attackType": "DOT"
                      }
                    }
                  ],
                  "failed": [
                    {
                      "name": "ATK Scaling DMG",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "AttackScaling": {
                        "DamageType": "Fire",
                        "DamageFlat": {
                          "displayLines": "((Modifier_Burn_DamagePercentage * 10) * MDF_BaseAttack)"
                        },
                        "cantKill": true,
                        "Toughness": null,
                        "Tags": [
                          "Burn"
                        ],
                        "attackType": "DOT"
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
                    "name": "Compare: Target",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "target2": {
                      "name": "Target Name",
                      "target": "{{Level Entity}}"
                    }
                  },
                  "passed": [
                    {
                      "name": "Find New Target",
                      "from": {
                        "name": "Target Sequence",
                        "TargetList": [
                          {
                            "name": "Target Name",
                            "target": "{{Enemy Team All}}"
                          },
                          {
                            "name": "Sort by Monster Rank",
                            "sortByHighest": true
                          }
                        ]
                      },
                      "maxTargets": 1,
                      "ifTargetFound": [
                        {
                          "name": "Define Custom Variable with Stat",
                          "variableName": "MDF_BaseAttack",
                          "readTarget": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "value": "&nbsp;<span class=\"descriptionNumberColor\">ATKBase</span>&nbsp;"
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Custom Event",
              "execute": [
                {
                  "name": "Define Custom Variable with Copy",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "variable": "Sunny_Temperature",
                  "target2": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "variable2": "Weather_SunnyHeat"
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "Weather_SunnyHeat",
                    "compareType": ">",
                    "value2": {
                      "displayLines": "Weather_SunnyHeatInitial"
                    }
                  },
                  "passed": [
                    {
                      "name": "ATK Scaling DMG",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "AttackScaling": {
                        "DamageType": "Fire",
                        "DamageFlat": {
                          "displayLines": "((Modifier_Burn_DamagePercentage * ((Weather_SunnyHeat - Weather_SunnyHeatInitial) + 10)) * MDF_BaseAttack)"
                        },
                        "cantKill": true,
                        "Toughness": null,
                        "Tags": [
                          "Burn"
                        ],
                        "attackType": "DOT"
                      }
                    }
                  ],
                  "failed": [
                    {
                      "name": "ATK Scaling DMG",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "AttackScaling": {
                        "DamageType": "Fire",
                        "DamageFlat": {
                          "displayLines": "((Modifier_Burn_DamagePercentage * 10) * MDF_BaseAttack)"
                        },
                        "cantKill": true,
                        "Toughness": null,
                        "Tags": [
                          "Burn"
                        ],
                        "attackType": "DOT"
                      }
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
                    "name": "Compare: Target",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "target2": {
                      "name": "Target Name",
                      "target": "{{Level Entity}}"
                    }
                  },
                  "passed": [
                    {
                      "name": "Find New Target",
                      "from": {
                        "name": "Target Sequence",
                        "TargetList": [
                          {
                            "name": "Target Name",
                            "target": "{{Enemy Team All}}"
                          },
                          {
                            "name": "Sort by Monster Rank",
                            "sortByHighest": true
                          }
                        ]
                      },
                      "maxTargets": 1,
                      "ifTargetFound": [
                        {
                          "name": "Define Custom Variable with Stat",
                          "variableName": "MDF_BaseAttack",
                          "readTarget": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "value": "&nbsp;<span class=\"descriptionNumberColor\">ATKBase</span>&nbsp;"
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
          "for": "<a class=\"gModGreen\" id=\"mod__735847061\">Modifier_Monster_W4_DawnsEye_WheaterSunnyUIController</a>",
          "stackType": "Replace",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"-1737251406\">Enemy_W4_DawnsEye_Ability04_SunnyChargeHeat</a>[<span class=\"descriptionNumberColor\">Helium Flash</span>]"
                  },
                  "passed": [
                    {
                      "name": "Set Aquila UI Data"
                    },
                    {
                      "name": "Update Displayed Energy Bar",
                      "value": {
                        "displayLines": "Skill04P1SunnyHeat"
                      },
                      "entityClass": "Enemy",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "maximum": {
                        "displayLines": "{[Skill04P1[0]]}"
                      },
                      "assignState": "True"
                    }
                  ],
                  "failed": [
                    {
                      "name": "Set Aquila UI Data"
                    },
                    {
                      "name": "Update Displayed Energy Bar",
                      "entityClass": "Enemy",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "assignState": "False"
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Target",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        "target2": {
                          "name": "Target Name",
                          "target": "{{Level Entity}}"
                        }
                      },
                      "passed": [
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Compare: Variable",
                            "value1": "Sunny_Temperature",
                            "compareType": ">=",
                            "value2": {
                              "displayLines": "(Weather_SunnyHeatInitial + 20)"
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
          "for": "<a class=\"gModGreen\" id=\"mod__1232483013\">Modifier_Monster_W4_DawnsEye_WheaterSunnyHeatAddPerAct</a>",
          "stackType": "Replace",
          "execute": [
            {
              "eventTrigger": "Turn [Owner]: Pre-action Phase",
              "priorityLevel": -10,
              "execute": [
                {
                  "name": "Define Custom Variable with Copy",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "variable": "Sunny_Temperature",
                  "target2": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "variable2": "Weather_SunnyHeat"
                },
                {
                  "name": "Define Custom Variable",
                  "value": {
                    "displayLines": "(Weather_SunnyHeat + Weather_HeatAddPerAction)"
                  },
                  "variableName": "Weather_SunnyHeat"
                },
                {
                  "name": "Define Custom Variable",
                  "value": {
                    "displayLines": "Weather_SunnyHeat"
                  },
                  "variableName": "Sunny_Temperature"
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"735847061\">Modifier_Monster_W4_DawnsEye_WheaterSunnyUIController</a>",
                  "casterAssign": "TargetSelf"
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1982815636\">Modifier_Monster_W4_DawnsEye_WheaterSunnyForLevel</a>",
          "subModList": [
            {
              "name": "Add Sub-Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Player Team All(Exclude Netherwing)}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1383289356\">Enemy_Monster_W4_DawnsEye_WheaterSunnyBurn</a>[<span class=\"descriptionNumberColor\">Solar Storm</span>]",
              "haloStatus": true,
              "valuePerStack": {
                "Modifier_Burn_DamagePercentage": {
                  "displayLines": "Weather_HeatDamage"
                },
                "Weather_SunnyHeat": {
                  "displayLines": "Sunny_Temperature"
                },
                "Weather_SunnyHeatInitial": {
                  "displayLines": "Weather_SunnyHeatInitial"
                },
                "MDF_BaseAttack": {
                  "displayLines": "ENEMIES_OBJECT_UNUSED__163"
                },
                "MDF_AllDamageTypeAddedRatio": {
                  "displayLines": "Weather_AllDamageTypeAddedRatio"
                }
              }
            },
            {
              "name": "Add Sub-Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Player Team All(Exclude Netherwing)}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1769039176\">Enemy_Monster_W4_DawnsEye_WheaterSunnyAllDamageTypeAddedRatio</a>[<span class=\"descriptionNumberColor\">DMG Boost</span>]",
              "haloStatus": true,
              "valuePerStack": {
                "Weather_SunnyHeat": {
                  "displayLines": "Sunny_Temperature"
                },
                "Weather_SunnyHeatInitial": {
                  "displayLines": "Weather_SunnyHeatInitial"
                },
                "MDF_AllDamageTypeAddedRatio": {
                  "displayLines": "Weather_AllDamageTypeAddedRatio"
                }
              }
            },
            {
              "name": "Add Sub-Events/Bonuses",
              "to": {
                "name": "Join Targets",
                "TargetList": [
                  {
                    "name": "Target Name",
                    "target": "{{Player & Enemy Team All}}"
                  },
                  {
                    "name": "Target Sequence",
                    "TargetList": [
                      {
                        "name": "Target Name",
                        "target": "{{All Unselectable Targets}}"
                      },
                      {
                        "name": "Target Filter",
                        "conditions": {
                          "name": "Is Entity a Battle Event/Summon",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "invertCondition": true
                        }
                      }
                    ]
                  }
                ]
              },
              "modifier": "<a class=\"gModGreen\" id=\"1232483013\">Modifier_Monster_W4_DawnsEye_WheaterSunnyHeatAddPerAct</a>",
              "haloStatus": true,
              "valuePerStack": {
                "Weather_HeatAddPerAction": {
                  "displayLines": "Weather_HeatAddPerAction"
                }
              }
            }
          ],
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
                      "target": "{{Level Entity}}"
                    },
                    "value1": "Sunny_Temperature",
                    "compareType": "=",
                    "value2": 0,
                    "contextScope": "TargetEntity"
                  },
                  "passed": [
                    {
                      "name": "Declare Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Level Entity}}"
                      },
                      "variableName": "Sunny_Temperature",
                      "scope": "TargetEntity"
                    }
                  ]
                },
                {
                  "name": "Define Custom Variable",
                  "value": {
                    "displayLines": "Weather_SunnyHeatInitial"
                  },
                  "variableName": "Sunny_Temperature"
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"735847061\">Modifier_Monster_W4_DawnsEye_WheaterSunnyUIController</a>",
                  "valuePerStack": {
                    "Weather_SunnyHeatInitial": {
                      "displayLines": "Weather_SunnyHeatInitial"
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
                    "target": "{{Player & Enemy Team All(with Unselectable)}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1383289356\">Enemy_Monster_W4_DawnsEye_WheaterSunnyBurn</a>[<span class=\"descriptionNumberColor\">Solar Storm</span>]"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Player & Enemy Team All(with Unselectable)}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1769039176\">Enemy_Monster_W4_DawnsEye_WheaterSunnyAllDamageTypeAddedRatio</a>[<span class=\"descriptionNumberColor\">DMG Boost</span>]"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Player & Enemy Team All(with Unselectable)}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"55187290\">Enemy_Monster_W4_DawnsEye_WheaterSunnyAllDamageTypeAddedRatioSub</a>"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Player & Enemy Team All(with Unselectable)}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1232483013\">Modifier_Monster_W4_DawnsEye_WheaterSunnyHeatAddPerAct</a>"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"735847061\">Modifier_Monster_W4_DawnsEye_WheaterSunnyUIController</a>"
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
                    "team": "Enemy Team"
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable with Added Value",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "variableName": "Sunny_Temperature",
                      "value": {
                        "displayLines": "(0 - Weather_HeatCountDown)"
                      },
                      "max": 999
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"735847061\">Modifier_Monster_W4_DawnsEye_WheaterSunnyUIController</a>"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-39064349\">Modifier_Monster_W4_DawnsEye_WheaterSunny</a>",
          "stackData": [
            "Weather_SunnyChange"
          ],
          "subModList": [
            {
              "name": "Add Sub-Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Player Team All}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1383289356\">Enemy_Monster_W4_DawnsEye_WheaterSunnyBurn</a>[<span class=\"descriptionNumberColor\">Solar Storm</span>]",
              "haloStatus": true,
              "conditions": {
                "name": "Compare: Variable",
                "target": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}"
                },
                "value1": "isDev",
                "compareType": "=",
                "value2": 0
              },
              "valuePerStack": {
                "Modifier_Burn_DamagePercentage": {
                  "displayLines": "Weather_HeatDamage"
                },
                "Weather_SunnyHeat": {
                  "displayLines": "Sunny_Temperature"
                },
                "Weather_SunnyHeatInitial": {
                  "displayLines": "Weather_SunnyHeatInitial"
                },
                "MDF_AllDamageTypeAddedRatio": {
                  "displayLines": "Weather_AllDamageTypeAddedRatio"
                }
              }
            },
            {
              "name": "Add Sub-Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Player Team All}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1769039176\">Enemy_Monster_W4_DawnsEye_WheaterSunnyAllDamageTypeAddedRatio</a>[<span class=\"descriptionNumberColor\">DMG Boost</span>]",
              "haloStatus": true,
              "valuePerStack": {
                "Weather_SunnyHeat": {
                  "displayLines": "Sunny_Temperature"
                },
                "Weather_SunnyHeatInitial": {
                  "displayLines": "Weather_SunnyHeatInitial"
                },
                "MDF_AllDamageTypeAddedRatio": {
                  "displayLines": "Weather_AllDamageTypeAddedRatio"
                }
              }
            },
            {
              "name": "Add Sub-Events/Bonuses",
              "to": {
                "name": "Join Targets",
                "TargetList": [
                  {
                    "name": "Target Name",
                    "target": "{{Player & Enemy Team All}}"
                  },
                  {
                    "name": "Target Sequence",
                    "TargetList": [
                      {
                        "name": "Target Name",
                        "target": "{{All Unselectable Targets}}"
                      },
                      {
                        "name": "Target Filter",
                        "conditions": {
                          "name": "Is Entity a Battle Event/Summon",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "invertCondition": true
                        }
                      }
                    ]
                  }
                ]
              },
              "modifier": "<a class=\"gModGreen\" id=\"1232483013\">Modifier_Monster_W4_DawnsEye_WheaterSunnyHeatAddPerAct</a>",
              "haloStatus": true,
              "valuePerStack": {
                "Weather_HeatAddPerAction": {
                  "displayLines": "Weather_HeatAddPerAction"
                }
              }
            },
            {
              "name": "Add Sub-Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Player Team All(with Unselectable)V2}}.[[removeBattleEvents]]"
              },
              "modifier": "<a class=\"gModGreen\" id=\"181367335\">Modifier_Monster_W4_DawnsEye_WheaterSunnySub</a>",
              "haloStatus": true,
              "valuePerStack": {
                "MDF_Ability04SunnyHeatColdDown": {
                  "displayLines": "MDF_Skill04SunnyHeatColdDown"
                }
              }
            }
          ],
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier",
              "execute": [
                {
                  "name": "Define Custom Variable",
                  "value": {
                    "displayLines": "Weather_SunnyHeatInitial"
                  },
                  "variableName": "Sunny_Temperature"
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"735847061\">Modifier_Monster_W4_DawnsEye_WheaterSunnyUIController</a>",
                  "valuePerStack": {
                    "Weather_SunnyHeatInitial": {
                      "displayLines": "Weather_SunnyHeatInitial"
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
                    "target": "{{Player & Enemy Team All(with Unselectable)}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1383289356\">Enemy_Monster_W4_DawnsEye_WheaterSunnyBurn</a>[<span class=\"descriptionNumberColor\">Solar Storm</span>]"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Player & Enemy Team All(with Unselectable)}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1769039176\">Enemy_Monster_W4_DawnsEye_WheaterSunnyAllDamageTypeAddedRatio</a>[<span class=\"descriptionNumberColor\">DMG Boost</span>]"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Player & Enemy Team All(with Unselectable)}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"181367335\">Modifier_Monster_W4_DawnsEye_WheaterSunnySub</a>"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Player & Enemy Team All(with Unselectable)}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"55187290\">Enemy_Monster_W4_DawnsEye_WheaterSunnyAllDamageTypeAddedRatioSub</a>"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Player & Enemy Team All(with Unselectable)}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1232483013\">Modifier_Monster_W4_DawnsEye_WheaterSunnyHeatAddPerAct</a>"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"735847061\">Modifier_Monster_W4_DawnsEye_WheaterSunnyUIController</a>"
                }
              ]
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier"
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1803162686\">Enemy_W4_DawnsEye_SoundController</a>",
          "execute": [
            {
              "eventTrigger": "Enter Battle"
            },
            {
              "eventTrigger": "Leave Battle"
            },
            {
              "eventTrigger": "Enemy HP Phased",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "HP_Bars_Remaining",
                    "compareType": "=",
                    "value2": 2
                  },
                  "failed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "HP_Bars_Remaining",
                        "compareType": "=",
                        "value2": 3
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
          "for": "<a class=\"gModGreen\" id=\"mod__-283400185\">Enemy_W4_DawnsEye_DisableLookAt</a>",
          "execute": [
            {
              "eventTrigger": "Turn [Anyone]: Start"
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__694258822\">Enemy_W4_DawnsEye_BreakMuteSpeed</a>",
          "modifierFlags": [],
          "execute": [
            {
              "eventTrigger": "When Modifier Destroyed/Removed",
              "execute": [
                {
                  "name": "Change Entity Turn-State",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "phase": "Default"
                }
              ]
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Change Entity Turn-State",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "phase": "Phase1"
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-440353918\">Enemy_W4_DawnsEye_BreakController</a>",
          "modifierFlags": [
            "ForceHitH"
          ],
          "execute": [
            {
              "eventTrigger": "When Modifier Destroyed/Removed",
              "execute": [
                {
                  "name": "Force Entity Death",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster's Minions}}"
                  }
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
                        "name": "OR",
                        "conditionList": [
                          {
                            "name": "Check Boolean Value",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Parameter Target}}"
                            },
                            "variableName": "MonsterType_W4_BossPart"
                          },
                          {
                            "name": "Check Boolean Value",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Parameter Target}}"
                            },
                            "variableName": "MonsterType_W4_BossPartP3"
                          }
                        ]
                      },
                      {
                        "name": "Compare: Variable",
                        "value1": "HP_Bars_Remaining",
                        "compareType": "<=",
                        "value2": 3
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
                          "target": "{{Caster}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"-122136541\">Enemy_W4_DawnsEye_MainBlock</a>"
                      },
                      "passed": [
                        {
                          "name": "Remove Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"-122136541\">Enemy_W4_DawnsEye_MainBlock</a>"
                        },
                        {
                          "name": "Deal Toughness DMG",
                          "value": {
                            "displayLines": "StanceDamage"
                          },
                          "defender": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "forceReduction": true,
                          "canDelay": true,
                          "ToughnessDMGType": "Null Type"
                        },
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"-122136541\">Enemy_W4_DawnsEye_MainBlock</a>"
                        }
                      ],
                      "failed": [
                        {
                          "name": "Deal Toughness DMG",
                          "value": {
                            "displayLines": "StanceDamage"
                          },
                          "defender": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "forceReduction": true,
                          "canDelay": true,
                          "ToughnessDMGType": "Null Type"
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
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Enemy Team All(with Unselectable)}}"
                  },
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Check Boolean Value",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "variableName": "MonsterType_W4_BossPartLeft"
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
                        "modifier": "<a class=\"gModGreen\" id=\"1128353279\">Enemy_W4_DawnsEye_PartBlock</a>[<span class=\"descriptionNumberColor\">Marine Layer</span>]"
                      },
                      "passed": [
                        {
                          "name": "Remove Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"1128353279\">Enemy_W4_DawnsEye_PartBlock</a>[<span class=\"descriptionNumberColor\">Marine Layer</span>]"
                        },
                        {
                          "name": "Find New Target",
                          "from": {
                            "name": "Target Name",
                            "target": "{{Enemy Team All}}"
                          },
                          "maxTargets": 1,
                          "conditions": {
                            "name": "AND",
                            "conditionList": [
                              {
                                "name": "Check Boolean Value",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Parameter Target}}"
                                },
                                "variableName": "MonsterType_W4_BossPartP3"
                              },
                              {
                                "name": "Is Part Of Team Location",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Parameter Target}}"
                                },
                                "team": "Enemy Team"
                              }
                            ]
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
                      "modifier": "<a class=\"gModGreen\" id=\"694258822\">Enemy_W4_DawnsEye_BreakMuteSpeed</a>"
                    }
                  ]
                },
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Enemy Team All(with Unselectable)}}"
                  },
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Check Boolean Value",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "variableName": "MonsterType_W4_BossPartRight"
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
                        "modifier": "<a class=\"gModGreen\" id=\"1128353279\">Enemy_W4_DawnsEye_PartBlock</a>[<span class=\"descriptionNumberColor\">Marine Layer</span>]"
                      },
                      "passed": [
                        {
                          "name": "Remove Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"1128353279\">Enemy_W4_DawnsEye_PartBlock</a>[<span class=\"descriptionNumberColor\">Marine Layer</span>]"
                        },
                        {
                          "name": "Find New Target",
                          "from": {
                            "name": "Target Name",
                            "target": "{{Enemy Team All}}"
                          },
                          "maxTargets": 1,
                          "conditions": {
                            "name": "AND",
                            "conditionList": [
                              {
                                "name": "Check Boolean Value",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Parameter Target}}"
                                },
                                "variableName": "MonsterType_W4_BossPartP3"
                              },
                              {
                                "name": "Is Part Of Team Location",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Parameter Target}}"
                                },
                                "team": "Enemy Team",
                                "stateType": "Max"
                              }
                            ]
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
                      "modifier": "<a class=\"gModGreen\" id=\"694258822\">Enemy_W4_DawnsEye_BreakMuteSpeed</a>"
                    }
                  ]
                },
                {
                  "name": "Declare Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "variableName": "AIFlag",
                  "resetValue": 1,
                  "scope": "TargetEntity"
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"883139622\">OneMorePerTurn</a>"
                }
              ]
            },
            {
              "eventTrigger": "End Broken State [Owner]",
              "execute": [
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Enemy Team All(with Unselectable)}}"
                  },
                  "searchRandom": true,
                  "conditions": {
                    "name": "Check Boolean Value",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "variableName": "MonsterType_W4_BossPart"
                  },
                  "ifTargetFound": [
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"694258822\">Enemy_W4_DawnsEye_BreakMuteSpeed</a>"
                    },
                    {
                      "name": "Remove Modifier Behavior Flag(s)",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      }
                    },
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
                          "name": "Reset Toughness",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          }
                        },
                        {
                          "name": "Exit Broken-State",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          }
                        }
                      ]
                    }
                  ]
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
                    "modifier": "<a class=\"gModGreen\" id=\"1128353279\">Enemy_W4_DawnsEye_PartBlock</a>[<span class=\"descriptionNumberColor\">Marine Layer</span>]"
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
                        "modifier": "<a class=\"gModGreen\" id=\"-122136541\">Enemy_W4_DawnsEye_MainBlock</a>"
                      },
                      "passed": [
                        {
                          "name": "Remove Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"-122136541\">Enemy_W4_DawnsEye_MainBlock</a>"
                        },
                        {
                          "name": "Deal Toughness DMG",
                          "value": {
                            "displayLines": "StanceDamage"
                          },
                          "defender": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "forceReduction": true,
                          "canDelay": true,
                          "ToughnessDMGType": "Null Type"
                        },
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"-122136541\">Enemy_W4_DawnsEye_MainBlock</a>"
                        }
                      ],
                      "failed": [
                        {
                          "name": "Deal Toughness DMG",
                          "value": {
                            "displayLines": "StanceDamage"
                          },
                          "defender": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "forceReduction": true,
                          "canDelay": true,
                          "ToughnessDMGType": "Null Type"
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
          "for": "<a class=\"gModGreen\" id=\"mod__1987146522\">Enemy_W4_DawnsEye_PartController</a>",
          "counter": 1,
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
                  "variableName": "ChangePhase_InsertController",
                  "scope": "TargetEntity"
                }
              ]
            },
            {
              "eventTrigger": "Waiting in Limbo [Owner]",
              "priorityLevel": -90,
              "execute": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1514267306\">W4_DawnsEye_BattleScore1</a>"
                },
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Join Targets",
                    "TargetList": [
                      {
                        "name": "Target Sequence",
                        "TargetList": [
                          {
                            "name": "Target Name",
                            "target": "{{Enemy Team All(with Unselectable)}}"
                          },
                          {
                            "name": "Target Filter",
                            "conditions": {
                              "name": "OR",
                              "conditionList": [
                                {
                                  "name": "Enemy ID",
                                  "ID": {
                                    "displayLines": "PartEntity1_MonsterID"
                                  },
                                  "target": {
                                    "name": "Target Name",
                                    "target": "{{Parameter Target}}"
                                  },
                                  "characterName": null
                                },
                                {
                                  "name": "Enemy ID",
                                  "ID": {
                                    "displayLines": "PartEntity3_MonsterID"
                                  },
                                  "target": {
                                    "name": "Target Name",
                                    "target": "{{Parameter Target}}"
                                  },
                                  "characterName": null
                                }
                              ]
                            }
                          }
                        ]
                      },
                      {
                        "name": "Target Sequence",
                        "TargetList": [
                          {
                            "name": "Target Name",
                            "target": "{{Enemy Team All(with Unselectable)}}"
                          },
                          {
                            "name": "Target Filter",
                            "conditions": {
                              "name": "Enemy ID",
                              "ID": {
                                "displayLines": "SummonedMonsterID"
                              },
                              "target": {
                                "name": "Target Name",
                                "target": "{{Parameter Target}}"
                              },
                              "characterName": null
                            }
                          }
                        ]
                      }
                    ]
                  },
                  "ifTargetFound": [
                    {
                      "name": "Force Entity Death",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      }
                    },
                    {
                      "name": "Mark Entity For Immediate Death",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
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
                    "value1": "ChangePhase_InsertController",
                    "compareType": "=",
                    "value2": 0,
                    "contextScope": "TargetEntity"
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
                        "value1": "CurrentHP",
                        "compareType": "<=",
                        "value2": 0
                      },
                      "passed": [
                        {
                          "name": "Declare Custom Variable",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "variableName": "ChangePhase_InsertController",
                          "resetValue": 1,
                          "scope": "TargetEntity"
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
                          "name": "Set Enemy Phase",
                          "mode": "Inc"
                        },
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Compare: Variable",
                            "value1": "HP_Bars_Remaining",
                            "compareType": "=",
                            "value2": 3
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
                                "target": "{{Caster's Minions}}"
                              }
                            }
                          ]
                        },
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Has Modifier",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            },
                            "modifier": "<a class=\"gModGreen\" id=\"2022265091\">Enemy_W4_DawnsEye_MainStory</a>"
                          },
                          "passed": [
                            {
                              "name": "Inject Ability Use",
                              "abilityName": "Monster_W4_DawnsEye_PassiveAbility_InsertMainStory",
                              "priorityTag": "EnemyPhaseChange",
                              "ownerState": "Mask_AliveOrLimbo",
                              "targetState": "Mask_AliveOrLimbo",
                              "canHitNonTargets": true,
                              "showInActionOrder": true,
                              "allowAbilityTriggers": false
                            }
                          ],
                          "failed": [
                            {
                              "name": "Inject Ability Use",
                              "abilityName": "Monster_W4_DawnsEye_PassiveAbility_Insert",
                              "priorityTag": "EnemyPhaseChange",
                              "ownerState": "Mask_AliveOrLimbo",
                              "targetState": "Mask_AliveOrLimbo",
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
      ],
      "references": []
    },
    "4015010_Monster_W4_DawnsEye_PassiveAbility_InsertMainStory": {
      "fileName": "4015010_Monster_W4_DawnsEye_PassiveAbility_InsertMainStory",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Dispel Debuffs",
          "target": {
            "name": "Target Name",
            "target": "{{Enemy Team All(with Unselectable)}}"
          },
          "silent": true
        },
        {
          "name": "Use Custom Character Function",
          "functionName": "<a class=\"gTempYellow\" id=\"542143301\">Monster_ChangePhase</a>"
        },
        {
          "name": "Inject Ability Use",
          "abilityName": "Monster_W4_DawnsEye_PassiveAbility_Insert",
          "priorityTag": "EnemyPhaseChange",
          "ownerState": "Mask_AliveOrLimbo",
          "targetState": "Mask_AliveOrLimbo",
          "canHitNonTargets": true,
          "showInActionOrder": true,
          "allowAbilityTriggers": false
        }
      ],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      },
      "references": []
    },
    "4015010_Monster_W4_DawnsEye_MainStoryOpeningPhase03": {
      "fileName": "4015010_Monster_W4_DawnsEye_MainStoryOpeningPhase03",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        "Deleted bullshit",
        {
          "name": "Reset Toughness",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          }
        },
        {
          "name": "Exit Broken-State",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          }
        },
        {
          "name": "Remove Modifier Behavior Flag(s)",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          }
        }
      ],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      },
      "references": []
    },
    "4015010_Monster_W4_DawnsEye_MainStoryOpeningPhase02": {
      "fileName": "4015010_Monster_W4_DawnsEye_MainStoryOpeningPhase02",
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
          "modifier": "<a class=\"gModGreen\" id=\"1917665447\">Enemy_W4_DawnsEye_Part2LockHP</a>"
        }
      ],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      },
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1917665447\">Enemy_W4_DawnsEye_Part2LockHP</a>",
          "execute": [
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
                  "name": "Inject Ability Use",
                  "condition": {
                    "name": "Insert Ability Condition",
                    "type": "AbilityOwnerInsertUnusedCount",
                    "typeValue": 1
                  },
                  "abilityName": "Monster_W4_DawnsEye_MainStoryOpeningPhase03",
                  "priorityTag": "EnemyDeathEffect",
                  "ownerState": "Mask_AliveOrLimbo",
                  "targetState": "Mask_AliveOrLimbo",
                  "canHitNonTargets": true,
                  "showInActionOrder": true,
                  "allowAbilityTriggers": false
                }
              ]
            }
          ]
        }
      ]
    },
    "4015010_Monster_W4_DawnsEye_MainStoryOpeningPhase01": {
      "fileName": "4015010_Monster_W4_DawnsEye_MainStoryOpeningPhase01",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Player Team All}}"
          },
          "maxTargets": 1,
          "conditions": {
            "name": "Character ID",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "characterID": "1409 (Hyacine)"
          }
        }
      ],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      },
      "references": []
    },
    "4015010_BattleEventAbility_W4_DawnsEye_SummonMonster": {
      "fileName": "4015010_BattleEventAbility_W4_DawnsEye_SummonMonster",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Enemy Team All}}"
          },
          "searchRandom": true,
          "maxTargets": 1,
          "conditions": {
            "name": "AND",
            "conditionList": [
              {
                "name": "Check Boolean Value",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "variableName": "MonsterType_W4_BossPartP3"
              },
              {
                "name": "Is Part Of Team Location",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "team": "Enemy Team",
                "stateType": "Left"
              }
            ]
          },
          "noTargetFound": [
            {
              "name": "Create Enemies",
              "delayPercent": {
                "displayLines": "{[SkillP03[2]]}"
              },
              "refreshPositions": false,
              "enemyList": [
                {
                  "name": "Enemy Entry",
                  "enemyID": {
                    "displayLines": "SummonedMonsterID"
                  },
                  "locationType": "First"
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
              "failed": [
                {
                  "name": "Set Enemy Phase",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Recently Summoned Enemies}}"
                  },
                  "phase": 2
                }
              ]
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Recently Summoned Enemies}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1716068014\">Enemy_W4_DawnsEye_PartHP</a>[<span class=\"descriptionNumberColor\">All As One</span>]",
              "valuePerStack": {
                "MDF_SunnyBreakCold": {
                  "displayLines": "{[SkillP01[3]]}"
                },
                "MDF_SunnyBreakColdRatio": {
                  "displayLines": "{[SkillP01[2]]}"
                }
              },
              "casterAssign": "CasterSelf"
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Recently Summoned Enemies}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-136554165\">Standard_Servant</a>[<span class=\"descriptionNumberColor\">Self-Destruct</span>]"
            }
          ]
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Enemy Team All}}"
          },
          "maxTargets": 1,
          "conditions": {
            "name": "AND",
            "conditionList": [
              {
                "name": "Check Boolean Value",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "variableName": "MonsterType_W4_BossPartP3"
              },
              {
                "name": "Is Part Of Team Location",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "team": "Enemy Team",
                "stateType": "Right"
              }
            ]
          },
          "noTargetFound": [
            {
              "name": "Create Enemies",
              "delayPercent": {
                "displayLines": "{[SkillP03[3]]}"
              },
              "enemyList": [
                {
                  "name": "Enemy Entry",
                  "enemyID": {
                    "displayLines": "SummonedMonsterID"
                  },
                  "locationType": "Last"
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
              "failed": [
                {
                  "name": "Set Enemy Phase",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Recently Summoned Enemies}}"
                  },
                  "phase": 2
                }
              ]
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Recently Summoned Enemies}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1716068014\">Enemy_W4_DawnsEye_PartHP</a>[<span class=\"descriptionNumberColor\">All As One</span>]",
              "valuePerStack": {
                "MDF_SunnyBreakCold": {
                  "displayLines": "{[SkillP01[3]]}"
                },
                "MDF_SunnyBreakColdRatio": {
                  "displayLines": "{[SkillP01[2]]}"
                }
              },
              "casterAssign": "CasterSelf"
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Recently Summoned Enemies}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-136554165\">Standard_Servant</a>[<span class=\"descriptionNumberColor\">Self-Destruct</span>]"
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
        }
      ],
      "targetObjectData": {
        "primaryTarget": "Inherent Target"
      },
      "references": []
    },
    "4015010_BattleEventAbility_W4_DawnsEye_RainSKill04Result": {
      "fileName": "4015010_BattleEventAbility_W4_DawnsEye_RainSKill04Result",
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
            "modifier": "<a class=\"gModGreen\" id=\"2022265091\">Enemy_W4_DawnsEye_MainStory</a>"
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"185030676\">Enemy_W4_DawnsEye_ThunderAttackPhase02</a>"
            }
          ]
        },
        "Deleted bullshit",
        {
          "name": "Define Custom Variable",
          "value": {
            "displayLines": "Thunder_CountLight"
          },
          "variableName": "Thunder_CountTotal"
        },
        {
          "name": "Change Entity Turn-State",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "phase": "Thunder"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "Thunder_CountLight",
            "compareType": ">",
            "value2": 5
          },
          "passed": [
            {
              "name": "Looped Event",
              "maxLoops": 3,
              "execute": [
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "AttackScaling": {
                    "DamageType": "Thunder",
                    "Damage": {
                      "displayLines": "({[SkillP02[1]]} * (Thunder_CountTotal / 6))"
                    },
                    "dmgFormula": "Max HP Scaling",
                    "dmgFormulaFinal": "Converted DMG Base",
                    "Toughness": null,
                    "Tags": null,
                    "attackType": "Basic ATK"
                  }
                }
              ]
            },
            {
              "name": "Looped Event",
              "maxLoops": 3,
              "execute": [
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "AttackScaling": {
                    "DamageType": "Thunder",
                    "Damage": {
                      "displayLines": "({[SkillP02[1]]} * (Thunder_CountTotal / 6))"
                    },
                    "dmgFormula": "Max HP Scaling",
                    "dmgFormulaFinal": "Converted DMG Base",
                    "Toughness": null,
                    "Tags": null,
                    "attackType": "Basic ATK"
                  }
                }
              ]
            }
          ],
          "failed": [
            {
              "name": "Looped Event",
              "maxLoops": 3,
              "execute": [
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "AttackScaling": {
                    "DamageType": "Thunder",
                    "Damage": {
                      "displayLines": "(({[SkillP02[1]]} * Thunder_CountLight) / 3)"
                    },
                    "dmgFormula": "Max HP Scaling",
                    "dmgFormulaFinal": "Converted DMG Base",
                    "Toughness": null,
                    "Tags": null,
                    "attackType": "Basic ATK"
                  }
                }
              ]
            }
          ]
        },
        "Trigger: Attack End",
        {
          "name": "Change Entity Turn-State",
          "target": {
            "name": "Target Name",
            "target": "{{Modifier Holder}}"
          },
          "phase": "Default"
        },
        {
          "name": "Define Custom Variable",
          "value": 0,
          "variableName": "Thunder_CountLight"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1414068042\">Modifier_Monster_W4_DawnsEye_WheaterMarkAbility04</a>[<span class=\"descriptionNumberColor\">Ionization</span>]"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-2093876840\">Modifier_Monster_W4_DawnsEye_WheaterRainUIController</a>"
        }
      ],
      "targetObjectData": {
        "primaryTarget": "Inherent Target"
      },
      "references": []
    },
    "4015010_BattleEventAbility_W4_DawnsEye_RainKillSummon": {
      "fileName": "4015010_BattleEventAbility_W4_DawnsEye_RainKillSummon",
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
            "modifier": "<a class=\"gModGreen\" id=\"2022265091\">Enemy_W4_DawnsEye_MainStory</a>"
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"185030676\">Enemy_W4_DawnsEye_ThunderAttackPhase02</a>"
            }
          ]
        },
        "Deleted bullshit",
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "Thunder_CountDark",
            "compareType": ">",
            "value2": {
              "displayLines": "(ThunderKillCount * {[SkillP02[4]]})"
            }
          },
          "passed": [
            {
              "name": "Looped Event",
              "maxLoops": 3,
              "execute": [
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "AttackScaling": {
                    "DamageType": "Thunder",
                    "Damage": {
                      "displayLines": "({[SkillP02[1]]} * ((ThunderKillCount * {[SkillP02[4]]}) / 3))"
                    },
                    "dmgFormula": "Max HP Scaling",
                    "dmgFormulaFinal": "Converted DMG Base",
                    "Toughness": null,
                    "Tags": null,
                    "attackType": "Basic ATK"
                  }
                }
              ]
            }
          ],
          "failed": [
            {
              "name": "Looped Event",
              "maxLoops": 3,
              "execute": [
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "AttackScaling": {
                    "DamageType": "Thunder",
                    "Damage": {
                      "displayLines": "(({[SkillP02[1]]} * Thunder_CountDark) / 3)"
                    },
                    "dmgFormula": "Max HP Scaling",
                    "dmgFormulaFinal": "Converted DMG Base",
                    "Toughness": null,
                    "Tags": null,
                    "attackType": "Basic ATK"
                  }
                }
              ]
            }
          ]
        },
        "Trigger: Attack End",
        {
          "name": "Define Custom Variable with Added Value",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "variableName": "Thunder_CountDark",
          "value": {
            "displayLines": "(0 - (ThunderKillCount * {[SkillP02[4]]}))"
          },
          "max": 999
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-2093876840\">Modifier_Monster_W4_DawnsEye_WheaterRainUIController</a>"
        },
        {
          "name": "Define Custom Variable",
          "value": 0,
          "variableName": "ThunderKillCount"
        }
      ],
      "targetObjectData": {
        "primaryTarget": "Inherent Target"
      },
      "references": []
    },
    "4015010_BattleEventAbility_W4_DawnsEye_RainChargeBreak": {
      "fileName": "4015010_BattleEventAbility_W4_DawnsEye_RainChargeBreak",
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
            "modifier": "<a class=\"gModGreen\" id=\"2022265091\">Enemy_W4_DawnsEye_MainStory</a>"
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"185030676\">Enemy_W4_DawnsEye_ThunderAttackPhase02</a>"
            }
          ]
        },
        "Deleted bullshit",
        {
          "name": "Define Custom Variable",
          "value": {
            "displayLines": "(Thunder_CountLight + Thunder_CountDark)"
          },
          "variableName": "Thunder_CountDark"
        },
        {
          "name": "Define Custom Variable",
          "value": {
            "displayLines": "Thunder_CountDark"
          },
          "variableName": "Thunder_TempCount"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-526594563\">Modifier_Monster_W4_DawnsEye_WheaterRainChargeBreak</a>"
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
          "name": "Looped Event",
          "maxLoops": 3,
          "execute": [
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "AttackScaling": {
                "DamageType": "Thunder",
                "Damage": {
                  "displayLines": "({[SkillP02[1]]} * (Thunder_TempCount / 6))"
                },
                "dmgFormula": "Max HP Scaling",
                "dmgFormulaFinal": "Converted DMG Base",
                "Toughness": null,
                "Tags": null,
                "attackType": "Basic ATK"
              }
            }
          ]
        },
        {
          "name": "Looped Event",
          "maxLoops": 3,
          "execute": [
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "AttackScaling": {
                "DamageType": "Thunder",
                "Damage": {
                  "displayLines": "({[SkillP02[1]]} * (Thunder_TempCount / 6))"
                },
                "dmgFormula": "Max HP Scaling",
                "dmgFormulaFinal": "Converted DMG Base",
                "Toughness": null,
                "Tags": null,
                "attackType": "Basic ATK"
              }
            }
          ]
        },
        "Trigger: Attack End",
        {
          "name": "Define Custom Variable",
          "value": 0,
          "variableName": "Thunder_CountDark"
        },
        {
          "name": "Define Custom Variable",
          "value": 0,
          "variableName": "Thunder_CountLight"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1414068042\">Modifier_Monster_W4_DawnsEye_WheaterMarkAbility04</a>[<span class=\"descriptionNumberColor\">Ionization</span>]"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-2093876840\">Modifier_Monster_W4_DawnsEye_WheaterRainUIController</a>"
        }
      ],
      "targetObjectData": {
        "primaryTarget": "Inherent Target"
      },
      "references": []
    },
    "4015010_Monster_W4_DawnsEye_PassiveAbilityInitiate5": {
      "fileName": "4015010_Monster_W4_DawnsEye_PassiveAbilityInitiate5",
      "skillTrigger": "SkillP05",
      "abilityType": "Talent",
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      },
      "realTargetData": {
        "primaryTarget": "{{Caster}}"
      },
      "references": []
    },
    "4015010_Monster_W4_DawnsEye_PassiveAbilityInitiate4": {
      "fileName": "4015010_Monster_W4_DawnsEye_PassiveAbilityInitiate4",
      "skillTrigger": "SkillP04",
      "abilityType": "Talent",
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      },
      "realTargetData": {
        "primaryTarget": "{{Caster}}"
      },
      "references": []
    },
    "4015010_Monster_W4_DawnsEye_PassiveAbilityInitiate3": {
      "fileName": "4015010_Monster_W4_DawnsEye_PassiveAbilityInitiate3",
      "skillTrigger": "SkillP03",
      "abilityType": "Talent",
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      },
      "realTargetData": {
        "primaryTarget": "{{Caster}}"
      },
      "references": []
    },
    "4015010_Monster_W4_DawnsEye_PassiveAbilityInitiate2": {
      "fileName": "4015010_Monster_W4_DawnsEye_PassiveAbilityInitiate2",
      "skillTrigger": "SkillP02",
      "abilityType": "Talent",
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      },
      "realTargetData": {
        "primaryTarget": "{{Caster}}"
      },
      "references": []
    },
    "4015010_Monster_W4_DawnsEye_PassiveAbilityInitiate": {
      "fileName": "4015010_Monster_W4_DawnsEye_PassiveAbilityInitiate",
      "childAbilityList": [
        "4015010_Monster_W4_DawnsEye_PassiveAbility_Insert"
      ],
      "skillTrigger": "SkillP01",
      "abilityType": "Talent",
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Create Enemy as Body Part",
          "partName": "Gun_L",
          "value": {
            "displayLines": "PartEntity1_MonsterID"
          },
          "offset": 1,
          "linkHitByPart": true
        },
        {
          "name": "Create Enemy as Body Part",
          "partName": "Gun_R",
          "value": {
            "displayLines": "PartEntity3_MonsterID"
          },
          "offset": -1,
          "type": 3,
          "linkHitByPart": true
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1166907060\">Enemy_Standard_MuteHitFly</a>"
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "variableName": "AIFlag",
          "resetValue": 1,
          "scope": "TargetEntity"
        },
        {
          "name": "Set Enemy Phase"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1987146522\">Enemy_W4_DawnsEye_PartController</a>"
        },
        {
          "name": "Boss Bar Display",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "show": true
        },
        {
          "name": "Create Enemies",
          "delayPercent": {
            "displayLines": "{[SkillP03[0]]}"
          },
          "refreshPositions": false,
          "enemyList": [
            {
              "name": "Enemy Entry",
              "enemyID": {
                "displayLines": "SummonedMonsterID"
              },
              "locationType": "First"
            }
          ]
        },
        {
          "name": "Create Enemies",
          "delayPercent": {
            "displayLines": "{[SkillP03[1]]}"
          },
          "refreshPositions": false,
          "enemyList": [
            {
              "name": "Enemy Entry",
              "enemyID": {
                "displayLines": "SummonedMonsterID"
              },
              "locationType": "Last"
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "target": {
              "name": "Target Name",
              "target": "{{Level Entity}}"
            },
            "value1": "PauseLevelForCameraPerform",
            "compareType": "=",
            "value2": 1,
            "contextScope": "TargetEntity"
          }
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster's Minions}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1716068014\">Enemy_W4_DawnsEye_PartHP</a>[<span class=\"descriptionNumberColor\">All As One</span>]",
          "valuePerStack": {
            "MDF_SunnyBreakCold": {
              "displayLines": "{[SkillP01[3]]}"
            },
            "MDF_SunnyBreakColdRatio": {
              "displayLines": "{[SkillP01[2]]}"
            }
          },
          "casterAssign": "CasterSelf"
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Enemy Team All(with Unselectable)}}"
          },
          "conditions": {
            "name": "Check Boolean Value",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "variableName": "MonsterType_W4_BossPart"
          },
          "ifTargetFound": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1807935838\">Enemy_W4_DawnsEye_PartController</a>",
              "valuePerStack": {
                "MDF_SunnyBreakCold": {
                  "displayLines": "{[SkillP01[3]]}"
                }
              },
              "casterAssign": "CasterSelf"
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1128353279\">Enemy_W4_DawnsEye_PartBlock</a>[<span class=\"descriptionNumberColor\">Marine Layer</span>]"
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1716068014\">Enemy_W4_DawnsEye_PartHP</a>[<span class=\"descriptionNumberColor\">All As One</span>]",
              "valuePerStack": {
                "MDF_SunnyBreakCold": {
                  "displayLines": "{[SkillP01[3]]}"
                },
                "MDF_SunnyBreakColdRatio": {
                  "displayLines": "{[SkillP01[2]]}"
                }
              },
              "casterAssign": "CasterSelf"
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-136554165\">Standard_Servant</a>[<span class=\"descriptionNumberColor\">Self-Destruct</span>]"
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
          "name": "IF",
          "conditions": {
            "name": "Stage ID",
            "compareType": "=",
            "stageID": 2145
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-39064349\">Modifier_Monster_W4_DawnsEye_WheaterSunny</a>",
              "valuePerStack": {
                "Weather_SunnyHeatInitial": {
                  "displayLines": "{[SkillP05[1]]}"
                },
                "Weather_SunnyHeat": {
                  "displayLines": "{[SkillP05[1]]}"
                },
                "Weather_SunnyChange": 0,
                "Weather_HeatDamage": {
                  "displayLines": "{[SkillP04[0]]}"
                },
                "Weather_Delay": {
                  "displayLines": "{[Skill03P1[2]]}"
                },
                "MDF_Ability04SunnyHeatInit": {
                  "displayLines": "{[Skill04P1[0]]}"
                },
                "MDF_Ability04SunnyHeatColdDown": {
                  "displayLines": "{[Skill04P1[1]]}"
                },
                "MDF_HeatMin": {
                  "displayLines": "{[Skill04P1[3]]}"
                },
                "Weather_HeatAddPerAction": {
                  "displayLines": "{[SkillP04[1]]}"
                },
                "Weather_AllDamageTypeAddedRatio": {
                  "displayLines": "{[SkillP04[2]]}"
                },
                "isDev": 1
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
              "modifier": "<a class=\"gModGreen\" id=\"-39064349\">Modifier_Monster_W4_DawnsEye_WheaterSunny</a>",
              "valuePerStack": {
                "Weather_SunnyHeatInitial": {
                  "displayLines": "{[SkillP05[1]]}"
                },
                "Weather_SunnyHeat": {
                  "displayLines": "{[SkillP05[1]]}"
                },
                "Weather_SunnyChange": 0,
                "Weather_HeatDamage": {
                  "displayLines": "{[SkillP04[0]]}"
                },
                "Weather_Delay": {
                  "displayLines": "{[Skill03P1[2]]}"
                },
                "MDF_Ability04SunnyHeatInit": {
                  "displayLines": "{[Skill04P1[0]]}"
                },
                "MDF_Ability04SunnyHeatColdDown": {
                  "displayLines": "{[Skill04P1[1]]}"
                },
                "MDF_HeatMin": {
                  "displayLines": "{[Skill04P1[3]]}"
                },
                "Weather_HeatAddPerAction": {
                  "displayLines": "{[SkillP04[1]]}"
                },
                "Weather_AllDamageTypeAddedRatio": {
                  "displayLines": "{[SkillP04[2]]}"
                },
                "isDev": 0
              }
            }
          ]
        },
        {
          "name": "Define Custom Variable with Stat",
          "variableName": "BaseAttack",
          "readTarget": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "value": "&nbsp;<span class=\"descriptionNumberColor\">ATKBase</span>&nbsp;"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-440353918\">Enemy_W4_DawnsEye_BreakController</a>",
          "valuePerStack": {
            "StanceDamage": {
              "displayLines": "{[SkillP01[5]]}"
            }
          }
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Stage ID",
            "compareType": "=",
            "stageID": 2145
          },
          "passed": [
            {
              "name": "Action Advance/Delay",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "advanceType": "Delay",
              "multiAdd": 1
            },
            {
              "name": "Action Advance/Delay",
              "target": {
                "name": "Target Name",
                "target": "{{All Team Members(Exclude Self)}}"
              },
              "advanceType": "Delay",
              "multiAdd": 99
            }
          ],
          "failed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"883139622\">OneMorePerTurn</a>"
            }
          ]
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-283400185\">Enemy_W4_DawnsEye_DisableLookAt</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1803162686\">Enemy_W4_DawnsEye_SoundController</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1514267306\">W4_DawnsEye_BattleScore1</a>"
        }
      ],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      },
      "realTargetData": {
        "primaryTarget": "{{Caster}}"
      },
      "references": []
    },
    "4015010_Monster_W4_DawnsEye_RainThunder_Part02": {
      "fileName": "4015010_Monster_W4_DawnsEye_RainThunder_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        "Trigger: Ability End"
      ],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      },
      "references": []
    },
    "4015010_Monster_W4_DawnsEye_RainThunder_Part01": {
      "fileName": "4015010_Monster_W4_DawnsEye_RainThunder_Part01",
      "childAbilityList": [
        "4015010_Monster_W4_DawnsEye_RainThunder_Part01",
        "4015010_Monster_W4_DawnsEye_RainThunder_Part02"
      ],
      "skillTrigger": "RainThunder",
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
          "ability": "Monster_W4_DawnsEye_RainThunder_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      },
      "realTargetData": {
        "primaryTarget": "{{Caster}}"
      },
      "references": []
    },
    "4015010_Monster_W4_DawnsEye_PassiveAbility_Insert": {
      "fileName": "4015010_Monster_W4_DawnsEye_PassiveAbility_Insert",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Dispel Debuffs",
          "target": {
            "name": "Target Name",
            "target": "{{Enemy Team All(with Unselectable)}}"
          },
          "silent": true
        },
        {
          "name": "Update Displayed Energy Bar",
          "entityClass": "Enemy",
          "assignState": "False"
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
            "Change Character Model",
            {
              "name": "Change Battle Arena",
              "arenaID": 2043102
            }
          ],
          "failed": [
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"357250261\">Enemy_W4_DawnsEye_Part02Effect</a>"
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"2111915075\">Enemy_W4_DawnsEye_Ability4P2Effect</a>"
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-526594563\">Modifier_Monster_W4_DawnsEye_WheaterRainChargeBreak</a>"
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1414068042\">Modifier_Monster_W4_DawnsEye_WheaterMarkAbility04</a>[<span class=\"descriptionNumberColor\">Ionization</span>]"
            },
            "Change Character Model",
            {
              "name": "Change Battle Arena",
              "status": "Inactive",
              "arenaID": 2043102
            },
            {
              "name": "Change Battle Arena",
              "arenaID": 2043202
            },
            {
              "name": "Change Character UI",
              "characterName": "Decimator, Karma of Daythunder, Eye of Twilight",
              "icon": "Monster_4015020.png"
            }
          ]
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
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "HP_Bars_Remaining",
            "compareType": "<=",
            "value2": 2
          },
          "passed": [
            {
              "name": "Declare Custom Variable",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "variableName": "AIFlag",
              "resetValue": 1,
              "scope": "TargetEntity"
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"357250261\">Enemy_W4_DawnsEye_Part02Effect</a>"
            },
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Enemy Team All(with Unselectable)}}"
              },
              "maxTargets": 1,
              "conditions": {
                "name": "Enemy ID",
                "ID": {
                  "displayLines": "PartEntity1_MonsterID"
                },
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "characterName": null
              },
              "ifTargetFound": [
                {
                  "name": "Use Custom Character Function",
                  "functionName": "<a class=\"gTempYellow\" id=\"-1902031976\">Monster_ChangePhase_ParamEntity</a>"
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1128353279\">Enemy_W4_DawnsEye_PartBlock</a>[<span class=\"descriptionNumberColor\">Marine Layer</span>]"
                }
              ],
              "noTargetFound": [
                {
                  "name": "Create Enemy as Body Part",
                  "partName": "Gun_L",
                  "value": {
                    "displayLines": "PartEntity1_MonsterID"
                  },
                  "offset": 1,
                  "linkHitByPart": true
                },
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Enemy Team All}}"
                  },
                  "maxTargets": 1,
                  "conditions": {
                    "name": "Enemy ID",
                    "ID": {
                      "displayLines": "PartEntity1_MonsterID"
                    },
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "characterName": null
                  },
                  "ifTargetFound": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-1807935838\">Enemy_W4_DawnsEye_PartController</a>",
                      "valuePerStack": {
                        "MDF_SunnyBreakCold": {
                          "displayLines": "{[SkillP01[3]]}"
                        }
                      },
                      "casterAssign": "CasterSelf"
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-1716068014\">Enemy_W4_DawnsEye_PartHP</a>[<span class=\"descriptionNumberColor\">All As One</span>]",
                      "valuePerStack": {
                        "MDF_SunnyBreakCold": {
                          "displayLines": "{[SkillP01[3]]}"
                        },
                        "MDF_SunnyBreakColdRatio": {
                          "displayLines": "{[SkillP01[2]]}"
                        }
                      },
                      "casterAssign": "CasterSelf"
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"1128353279\">Enemy_W4_DawnsEye_PartBlock</a>[<span class=\"descriptionNumberColor\">Marine Layer</span>]"
                    },
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
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Enemy Team All(with Unselectable)}}"
              },
              "maxTargets": 1,
              "conditions": {
                "name": "Enemy ID",
                "ID": {
                  "displayLines": "PartEntity3_MonsterID"
                },
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "characterName": null
              },
              "ifTargetFound": [
                {
                  "name": "Use Custom Character Function",
                  "functionName": "<a class=\"gTempYellow\" id=\"-1902031976\">Monster_ChangePhase_ParamEntity</a>"
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1128353279\">Enemy_W4_DawnsEye_PartBlock</a>[<span class=\"descriptionNumberColor\">Marine Layer</span>]"
                }
              ],
              "noTargetFound": [
                {
                  "name": "Create Enemy as Body Part",
                  "partName": "Gun_R",
                  "value": {
                    "displayLines": "PartEntity3_MonsterID"
                  },
                  "offset": -1,
                  "type": 3,
                  "linkHitByPart": true
                },
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Enemy Team All}}"
                  },
                  "maxTargets": 1,
                  "conditions": {
                    "name": "Enemy ID",
                    "ID": {
                      "displayLines": "PartEntity3_MonsterID"
                    },
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "characterName": null
                  },
                  "ifTargetFound": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-1807935838\">Enemy_W4_DawnsEye_PartController</a>",
                      "valuePerStack": {
                        "MDF_SunnyBreakCold": {
                          "displayLines": "{[SkillP01[3]]}"
                        }
                      },
                      "casterAssign": "CasterSelf"
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-1716068014\">Enemy_W4_DawnsEye_PartHP</a>[<span class=\"descriptionNumberColor\">All As One</span>]",
                      "valuePerStack": {
                        "MDF_SunnyBreakCold": {
                          "displayLines": "{[SkillP01[3]]}"
                        },
                        "MDF_SunnyBreakColdRatio": {
                          "displayLines": "{[SkillP01[2]]}"
                        }
                      },
                      "casterAssign": "CasterSelf"
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"1128353279\">Enemy_W4_DawnsEye_PartBlock</a>[<span class=\"descriptionNumberColor\">Marine Layer</span>]"
                    },
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
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Enemy Team All}}"
              },
              "maxTargets": 1,
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Check Boolean Value",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "variableName": "MonsterType_W4_BossPartP3"
                  },
                  {
                    "name": "Is Part Of Team Location",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "team": "Enemy Team",
                    "stateType": "Left"
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
                  "modifier": "<a class=\"gModGreen\" id=\"-1785279589\">Enemy_W4_DawnsEye_WeatherEnhanced</a>[<span class=\"descriptionNumberColor\">Wingbeats</span>]"
                }
              ],
              "noTargetFound": [
                {
                  "name": "Create Enemies",
                  "delayPercent": {
                    "displayLines": "{[SkillP03[0]]}"
                  },
                  "refreshPositions": false,
                  "enemyList": [
                    {
                      "name": "Enemy Entry",
                      "enemyID": {
                        "displayLines": "SummonedMonsterID"
                      },
                      "locationType": "First"
                    }
                  ]
                },
                {
                  "name": "Set Enemy Phase",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Recently Summoned Enemies}}"
                  },
                  "phase": 2
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Recently Summoned Enemies}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1716068014\">Enemy_W4_DawnsEye_PartHP</a>[<span class=\"descriptionNumberColor\">All As One</span>]",
                  "valuePerStack": {
                    "MDF_SunnyBreakCold": {
                      "displayLines": "{[SkillP01[3]]}"
                    },
                    "MDF_SunnyBreakColdRatio": {
                      "displayLines": "{[SkillP01[2]]}"
                    }
                  },
                  "casterAssign": "CasterSelf"
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Recently Summoned Enemies}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-136554165\">Standard_Servant</a>[<span class=\"descriptionNumberColor\">Self-Destruct</span>]"
                }
              ]
            },
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Enemy Team All}}"
              },
              "maxTargets": 1,
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Check Boolean Value",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "variableName": "MonsterType_W4_BossPartP3"
                  },
                  {
                    "name": "Is Part Of Team Location",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "team": "Enemy Team",
                    "stateType": "Right"
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
                  "modifier": "<a class=\"gModGreen\" id=\"-1785279589\">Enemy_W4_DawnsEye_WeatherEnhanced</a>[<span class=\"descriptionNumberColor\">Wingbeats</span>]"
                }
              ],
              "noTargetFound": [
                {
                  "name": "Create Enemies",
                  "delayPercent": {
                    "displayLines": "{[SkillP03[1]]}"
                  },
                  "refreshPositions": false,
                  "enemyList": [
                    {
                      "name": "Enemy Entry",
                      "enemyID": {
                        "displayLines": "SummonedMonsterID"
                      },
                      "locationType": "Last"
                    }
                  ]
                },
                {
                  "name": "Set Enemy Phase",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Recently Summoned Enemies}}"
                  },
                  "phase": 2
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Recently Summoned Enemies}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1716068014\">Enemy_W4_DawnsEye_PartHP</a>[<span class=\"descriptionNumberColor\">All As One</span>]",
                  "valuePerStack": {
                    "MDF_SunnyBreakCold": {
                      "displayLines": "{[SkillP01[3]]}"
                    },
                    "MDF_SunnyBreakColdRatio": {
                      "displayLines": "{[SkillP01[2]]}"
                    }
                  },
                  "casterAssign": "CasterSelf"
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Recently Summoned Enemies}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-136554165\">Standard_Servant</a>[<span class=\"descriptionNumberColor\">Self-Destruct</span>]"
                }
              ]
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-122136541\">Enemy_W4_DawnsEye_MainBlock</a>"
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-39064349\">Modifier_Monster_W4_DawnsEye_WheaterSunny</a>"
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1923265590\">Modifier_Monster_W4_DawnsEye_WheaterRain</a>",
              "valuePerStack": {
                "Weather_Thunder": 0,
                "Weather_ThunderChange": 0,
                "Weather_ThunderDamageLight": {
                  "displayLines": "{[SkillP02[0]]}"
                },
                "Weather_ThunderDamageDark": {
                  "displayLines": "{[SkillP02[1]]}"
                },
                "Weather_ThunderCount": {
                  "displayLines": "{[SkillP02[3]]}"
                },
                "Weather_ThunderChance": {
                  "displayLines": "{[SkillP02[2]]}"
                },
                "Weather_ThunderKillCount": {
                  "displayLines": "{[SkillP02[4]]}"
                },
                "Weather_Ability05MaxCount": {
                  "displayLines": "{[Skill05P2[1]]}"
                }
              }
            }
          ],
          "failed": [
            {
              "name": "Declare Custom Variable",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "variableName": "AIFlag",
              "resetValue": 1,
              "scope": "TargetEntity"
            },
            {
              "name": "Define Custom Variable",
              "value": {
                "displayLines": "ENEMIES_OBJECT_UNUSED__160"
              },
              "variableName": "PartEntity1_MonsterID"
            },
            {
              "name": "Define Custom Variable",
              "value": {
                "displayLines": "ENEMIES_OBJECT_UNUSED__159"
              },
              "variableName": "PartEntity3_MonsterID"
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-459185506\">Enemy_W4_DawnsEye_01_StandbyEffect</a>"
            },
            {
              "name": "Create Enemy as Body Part",
              "partName": "Head_R",
              "value": {
                "displayLines": "PartEntity1_MonsterID"
              },
              "offset": -2,
              "linkHitByPart": true
            },
            {
              "name": "Create Enemy as Body Part",
              "partName": "Head_L",
              "value": {
                "displayLines": "PartEntity3_MonsterID"
              },
              "offset": 2,
              "type": 3,
              "linkHitByPart": true
            },
            {
              "name": "Use Custom Character Function",
              "functionName": "<a class=\"gTempYellow\" id=\"-1186573263\">W4_DawnsEye_01_TargetChange</a>"
            },
            {
              "name": "Add Battle Event",
              "teamName": "Enemy Team",
              "eventID": 20015,
              "variables": {
                "BaseAttack": {
                  "displayLines": "BaseAttack"
                }
              },
              "whenCreated": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"428140510\">Enemy_W4_DawnsEye_01_BESpeed</a>",
                  "valuePerStack": {
                    "MDF_Speed": {
                      "displayLines": "UnusedUnderThisBase_11700"
                    }
                  }
                },
                {
                  "name": "Action Advance/Delay",
                  "advanceType": "Set",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "multiBase": {
                    "displayLines": "UnusedUnderThisBase_11762"
                  }
                },
                {
                  "name": "Assign Unique Name",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "identifier": "RagBattleEvent"
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-355315499\">Modifier_Monster_W4_DawnsEye_01_WheaterRognarokTotalDamageActionListener</a>",
                  "valuePerStack": {
                    "MDF_TotalDamageRatioAdd": {
                      "displayLines": "UnusedUnderThisBase_11723"
                    },
                    "MDF_TotalDamageRatioCut": 0
                  },
                  "casterAssign": "CasterSelf"
                }
              ]
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-2100215981\">Modifier_Monster_W4_DawnsEye_01_WheaterRognarokTotalDamage</a>[<span class=\"descriptionNumberColor\">Black Tide Sync Rate</span>]",
              "valuePerStack": {
                "MDF_TotalDamageRatio": {
                  "displayLines": "UnusedUnderThisBase_11709"
                },
                "MDF_TotalDamageRatioMin": {
                  "displayLines": "UnusedUnderThisBase_11709"
                },
                "MDF_TotalDamageRatioMax": {
                  "displayLines": "UnusedUnderThisBase_11764"
                },
                "MDF_BaseAttack": {
                  "displayLines": "BaseAttack"
                }
              }
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-355315499\">Modifier_Monster_W4_DawnsEye_01_WheaterRognarokTotalDamageActionListener</a>",
              "valuePerStack": {
                "MDF_TotalDamageRatioAdd": {
                  "displayLines": "UnusedUnderThisBase_11723"
                },
                "MDF_TotalDamageRatioCut": 0
              }
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1480712068\">W4_DawnsEye_BattleScore3</a>"
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-122136541\">Enemy_W4_DawnsEye_MainBlock</a>"
            },
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Enemy Team All(with Unselectable)}}"
              },
              "conditions": {
                "name": "Check Boolean Value",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "variableName": "MonsterType_W4_BossPart"
              },
              "ifTargetFound": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1807935838\">Enemy_W4_DawnsEye_PartController</a>",
                  "casterAssign": "CasterSelf"
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1128353279\">Enemy_W4_DawnsEye_PartBlock</a>[<span class=\"descriptionNumberColor\">Marine Layer</span>]"
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1716068014\">Enemy_W4_DawnsEye_PartHP</a>[<span class=\"descriptionNumberColor\">All As One</span>]",
                  "casterAssign": "CasterSelf"
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-355315499\">Modifier_Monster_W4_DawnsEye_01_WheaterRognarokTotalDamageActionListener</a>",
                  "valuePerStack": {
                    "MDF_TotalDamageRatioAdd": 0,
                    "MDF_TotalDamageRatioCut": {
                      "displayLines": "UnusedUnderThisBase_11725"
                    }
                  },
                  "casterAssign": "CasterSelf"
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-136554165\">Standard_Servant</a>[<span class=\"descriptionNumberColor\">Self-Destruct</span>]"
                }
              ]
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Check Boolean Value",
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "variableName": "MonsterType_W4_BossSummon",
                "invertCondition": true
              },
              "passed": [
                {
                  "name": "Add Battle Event",
                  "teamName": "Player Team",
                  "eventID": 60029,
                  "variables": {
                    "BaseAttack": {
                      "displayLines": "BaseAttack"
                    }
                  },
                  "whenCreated": [
                    {
                      "name": "Update Energy",
                      "on": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "value": -200,
                      "isFixed": "* ERR"
                    },
                    {
                      "name": "Assign Unique Name",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "identifier": "HealBattleEvent"
                    },
                    {
                      "name": "Update Energy",
                      "on": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "value": {
                        "displayLines": "UnusedUnderThisBase_11714"
                      },
                      "isFixed": "* ERR"
                    }
                  ]
                }
              ],
              "failed": [
                {
                  "name": "Add Battle Event",
                  "teamName": "Player Team",
                  "eventID": 60037,
                  "variables": {
                    "BaseAttack": {
                      "displayLines": "BaseAttack"
                    }
                  },
                  "whenCreated": [
                    {
                      "name": "Assign Unique Name",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "identifier": "HealBattleEvent"
                    },
                    {
                      "name": "Action Advance/Delay",
                      "advanceType": "Set",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "multiBase": 1
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
              "modifier": "<a class=\"gModGreen\" id=\"1923265590\">Modifier_Monster_W4_DawnsEye_WheaterRain</a>"
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1313380500\">Modifier_Monster_W4_DawnsEye_01_WheaterRognarok</a>",
              "valuePerStack": {
                "MDF_DirtyHPBase": {
                  "displayLines": "UnusedUnderThisBase_11707"
                },
                "MDF_BaseAttack": {
                  "displayLines": "BaseAttack"
                },
                "MDF_DeathSPAdd": {
                  "displayLines": "UnusedUnderThisBase_11718"
                }
              }
            },
            {
              "name": "Add Stage Ability",
              "abilityName": "BattleEventAbility_Monster_DawnEye_01_RognarokTrigger"
            },
            {
              "name": "Add Stage Ability",
              "abilityName": "Monster_W4_DawnsEye_01_Rognarok_Camera"
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-440353918\">Enemy_W4_DawnsEye_BreakController</a>"
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1259657295\">Enemy_W4_DawnsEye_01_BreakController</a>",
              "valuePerStack": {
                "StanceDamage": {
                  "displayLines": "UnusedUnderThisBase_11721"
                }
              }
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Check Boolean Value",
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "variableName": "Dawnseye_AllPhase",
            "invertCondition": true
          },
          "passed": [
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1987146522\">Enemy_W4_DawnsEye_PartController</a>"
            }
          ],
          "failed": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "HP_Bars_Remaining",
                "compareType": "=",
                "value2": 3
              },
              "passed": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1987146522\">Enemy_W4_DawnsEye_PartController</a>"
                }
              ]
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Stage ID",
            "compareType": "=",
            "stageID": 2145
          },
          "failed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"883139622\">OneMorePerTurn</a>"
            }
          ]
        },
        {
          "name": "Define Custom Variable",
          "scope": "TargetEntity",
          "value": 0,
          "variableName": "ChangePhase_InsertController"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"2022265091\">Enemy_W4_DawnsEye_MainStory</a>"
          },
          "passed": [
            {
              "name": "Inject Ability Use",
              "condition": {
                "name": "Insert Ability Condition",
                "type": "AbilityOwnerInsertUnusedCount",
                "typeValue": 1
              },
              "abilityName": "Monster_W4_DawnsEye_MainStoryOpeningPhase02",
              "abilitySource": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "abilityTarget": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "priorityTag": "EnemyChangeState",
              "canHitNonTargets": true,
              "allowAbilityTriggers": false
            }
          ]
        },
        {
          "name": "Reset Toughness",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          }
        },
        {
          "name": "Define Toughness Value",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          }
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "HP_Bars_Remaining",
            "compareType": "=",
            "value2": 3
          }
        }
      ],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      },
      "references": []
    },
    "4015010_Monster_W4_DawnsEye_Ability05P2_Part02": {
      "fileName": "4015010_Monster_W4_DawnsEye_Ability05P2_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        "Ability Start",
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"2111915075\">Enemy_W4_DawnsEye_Ability4P2Effect</a>"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"2022265091\">Enemy_W4_DawnsEye_MainStory</a>"
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1205772152\">Enemy_W4_DawnsEye_Ability05Phase02</a>"
            }
          ]
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "canPhase": true,
          "AttackScaling": {
            "DamageType": "Thunder",
            "Damage": {
              "displayLines": "{[Skill05P2[0]]}"
            },
            "HitSplit": 0.2,
            "Toughness": null,
            "Tags": null,
            "EnergyGainPercent": "100%"
          }
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "canPhase": true,
          "AttackScaling": {
            "DamageType": "Thunder",
            "Damage": {
              "displayLines": "{[Skill05P2[0]]}"
            },
            "HitSplit": 0.2,
            "Toughness": null,
            "Tags": null,
            "EnergyGainPercent": "100%"
          }
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "canPhase": true,
          "AttackScaling": {
            "DamageType": "Thunder",
            "Damage": {
              "displayLines": "{[Skill05P2[0]]}"
            },
            "HitSplit": 0.6,
            "Toughness": null,
            "Tags": null,
            "EnergyGainPercent": "100%"
          }
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "Thunder_CountDark",
            "compareType": ">",
            "value2": {
              "displayLines": "{[Skill05P2[1]]}"
            }
          },
          "passed": [
            {
              "name": "Define Custom Variable",
              "value": {
                "displayLines": "{[Skill05P2[1]]}"
              },
              "variableName": "Thunder_CountTotal"
            }
          ],
          "failed": [
            {
              "name": "Define Custom Variable",
              "value": {
                "displayLines": "Thunder_CountDark"
              },
              "variableName": "Thunder_CountTotal"
            }
          ]
        },
        {
          "name": "Define Custom Variable with Team Count",
          "variableName": "CurrentLightTeamCount",
          "readTarget": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "living": true
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "CurrentLightTeamCount",
            "compareType": ">",
            "value2": 0
          },
          "passed": [
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Hostile Entities(AOE)}}"
              },
              "AttackScaling": {
                "DamageType": "Thunder",
                "DamageFlat": {
                  "displayLines": "((({[SkillP02[0]]} * BaseAttack) * Thunder_CountTotal) / CurrentLightTeamCount)"
                },
                "dmgFormulaFinal": "Converted DMG Base",
                "Toughness": null,
                "Tags": null,
                "attackType": "Basic ATK"
              }
            },
            {
              "name": "Define Custom Variable with Added Value",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "variableName": "Thunder_CountDark",
              "value": {
                "displayLines": "(0 - Thunder_CountTotal)"
              },
              "max": 999
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-2093876840\">Modifier_Monster_W4_DawnsEye_WheaterRainUIController</a>"
            }
          ]
        },
        "Trigger: Attack End",
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Player Team All}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-484779713\">Enemy_W4_DawnsEye_Ability05_HitTag</a>"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-526594563\">Modifier_Monster_W4_DawnsEye_WheaterRainChargeBreak</a>"
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
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Enemy Team All(with Unselectable)}}"
          },
          "maxTargets": 1,
          "conditions": {
            "name": "Enemy ID",
            "ID": {
              "displayLines": "PartEntity1_MonsterID"
            },
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "characterName": null
          },
          "ifTargetFound": [
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1128353279\">Enemy_W4_DawnsEye_PartBlock</a>[<span class=\"descriptionNumberColor\">Marine Layer</span>]"
            },
            {
              "name": "Remove Modifier Behavior Flag(s)",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              }
            },
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
                  "name": "Reset Toughness",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  }
                },
                {
                  "name": "Exit Broken-State",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
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
            "target": "{{Enemy Team All(with Unselectable)}}"
          },
          "maxTargets": 1,
          "conditions": {
            "name": "Enemy ID",
            "ID": {
              "displayLines": "PartEntity3_MonsterID"
            },
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "characterName": null
          },
          "ifTargetFound": [
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1128353279\">Enemy_W4_DawnsEye_PartBlock</a>[<span class=\"descriptionNumberColor\">Marine Layer</span>]"
            },
            {
              "name": "Remove Modifier Behavior Flag(s)",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              }
            },
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
                  "name": "Reset Toughness",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  }
                },
                {
                  "name": "Exit Broken-State",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
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
            "value1": "Thunder_CountLight",
            "compareType": ">",
            "value2": 0
          },
          "passed": [
            {
              "name": "Inject Ability Use",
              "condition": {
                "name": "Insert Ability Condition",
                "type": "AbilityOwnerInsertUnusedCount",
                "typeValue": 1
              },
              "conditionActive": {
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
                    "value1": "Thunder_CountLight",
                    "compareType": ">=",
                    "value2": 1
                  }
                ]
              },
              "abilityName": "BattleEventAbility_W4_DawnsEye_RainSKill04Result",
              "abilitySource": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "abilityTarget": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "priorityTag": "EnemyChangeState",
              "canHitNonTargets": true,
              "allowAbilityTriggers": false
            }
          ],
          "failed": [
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1414068042\">Modifier_Monster_W4_DawnsEye_WheaterMarkAbility04</a>[<span class=\"descriptionNumberColor\">Ionization</span>]"
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-2093876840\">Modifier_Monster_W4_DawnsEye_WheaterRainUIController</a>"
            }
          ]
        },
        "Trigger: Ability End"
      ],
      "targetObjectData": {
        "primaryTarget": "{{Hostile Entities(AOE)}}"
      },
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1205772152\">Enemy_W4_DawnsEye_Ability05Phase02</a>",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier"
            }
          ]
        }
      ]
    },
    "4015010_Monster_W4_DawnsEye_Ability05P2_Part01": {
      "fileName": "4015010_Monster_W4_DawnsEye_Ability05P2_Part01",
      "childAbilityList": [
        "4015010_Monster_W4_DawnsEye_Ability05P2_Camera",
        "4015010_Monster_W4_DawnsEye_Ability05P2_Part01",
        "4015010_Monster_W4_DawnsEye_Ability05P2_Part02"
      ],
      "skillTrigger": "Skill05P2",
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
          "ability": "Monster_W4_DawnsEye_Ability05P2_Part02",
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
    "4015010_Monster_W4_DawnsEye_Ability05P1_Part02": {
      "fileName": "4015010_Monster_W4_DawnsEye_Ability05P1_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        "Ability Start",
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-936361058\">Enemy_W4_DawnsEye_Ability4P1Effect</a>"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1701351944\">Enemy_W4_DawnsEye_Ability4P1Effect02</a>"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"2022265091\">Enemy_W4_DawnsEye_MainStory</a>"
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1155439295\">Enemy_W4_DawnsEye_Ability05Phase01</a>"
            }
          ]
        },
        {
          "name": "Define Custom Variable",
          "scope": "TargetEntity",
          "value": {
            "displayLines": "({[Skill05P1[0]]} * Skill04P1SunnyHeat)"
          },
          "variableName": "Skill05P1TotalDamage"
        },
        {
          "name": "Define Custom Variable with Team Count",
          "variableName": "CurrentLightTeamCount",
          "readTarget": {
            "name": "Target Name",
            "target": "{{Player Team All}}"
          },
          "living": true
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "canPhase": true,
          "AttackScaling": {
            "DamageType": "Fire",
            "Damage": {
              "displayLines": "(Skill05P1TotalDamage / CurrentLightTeamCount)"
            },
            "HitSplit": 0.1,
            "Toughness": null,
            "Tags": null,
            "EnergyGainPercent": "100%"
          }
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "canPhase": true,
          "AttackScaling": {
            "DamageType": "Fire",
            "Damage": {
              "displayLines": "(Skill05P1TotalDamage / CurrentLightTeamCount)"
            },
            "HitSplit": 0.1,
            "Toughness": null,
            "Tags": null,
            "EnergyGainPercent": "100%"
          }
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "canPhase": true,
          "AttackScaling": {
            "DamageType": "Fire",
            "Damage": {
              "displayLines": "(Skill05P1TotalDamage / CurrentLightTeamCount)"
            },
            "HitSplit": 0.1,
            "Toughness": null,
            "Tags": null,
            "EnergyGainPercent": "100%"
          }
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "canPhase": true,
          "AttackScaling": {
            "DamageType": "Fire",
            "Damage": {
              "displayLines": "(Skill05P1TotalDamage / CurrentLightTeamCount)"
            },
            "HitSplit": 0.1,
            "Toughness": null,
            "Tags": null,
            "EnergyGainPercent": "100%"
          }
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "canPhase": true,
          "AttackScaling": {
            "DamageType": "Fire",
            "Damage": {
              "displayLines": "(Skill05P1TotalDamage / CurrentLightTeamCount)"
            },
            "HitSplit": 0.1,
            "Toughness": null,
            "Tags": null,
            "EnergyGainPercent": "100%"
          }
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "canPhase": true,
          "AttackScaling": {
            "DamageType": "Fire",
            "Damage": {
              "displayLines": "(Skill05P1TotalDamage / CurrentLightTeamCount)"
            },
            "HitSplit": 0.1,
            "Toughness": null,
            "Tags": null,
            "EnergyGainPercent": "100%"
          }
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "canPhase": true,
          "AttackScaling": {
            "DamageType": "Fire",
            "Damage": {
              "displayLines": "(Skill05P1TotalDamage / CurrentLightTeamCount)"
            },
            "HitSplit": 0.4,
            "Toughness": null,
            "Tags": null,
            "EnergyGainPercent": "100%"
          }
        },
        "Trigger: Attack End",
        {
          "name": "Define Custom Variable with Added Value",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "variableName": "Sunny_Temperature",
          "value": {
            "displayLines": "Skill04P1SunnyHeat"
          },
          "max": 999
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1737251406\">Enemy_W4_DawnsEye_Ability04_SunnyChargeHeat</a>[<span class=\"descriptionNumberColor\">Helium Flash</span>]"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"735847061\">Modifier_Monster_W4_DawnsEye_WheaterSunnyUIController</a>"
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
          "name": "Define Custom Variable",
          "value": 0,
          "variableName": "Skill04P1SunnyHeat"
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Enemy Team All(with Unselectable)}}"
          },
          "maxTargets": 1,
          "conditions": {
            "name": "Enemy ID",
            "ID": {
              "displayLines": "PartEntity1_MonsterID"
            },
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "characterName": null
          },
          "ifTargetFound": [
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1128353279\">Enemy_W4_DawnsEye_PartBlock</a>[<span class=\"descriptionNumberColor\">Marine Layer</span>]"
            },
            {
              "name": "Remove Modifier Behavior Flag(s)",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              }
            },
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
                  "name": "Reset Toughness",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  }
                },
                {
                  "name": "Exit Broken-State",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
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
            "target": "{{Enemy Team All(with Unselectable)}}"
          },
          "maxTargets": 1,
          "conditions": {
            "name": "Enemy ID",
            "ID": {
              "displayLines": "PartEntity3_MonsterID"
            },
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "characterName": null
          },
          "ifTargetFound": [
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1128353279\">Enemy_W4_DawnsEye_PartBlock</a>[<span class=\"descriptionNumberColor\">Marine Layer</span>]"
            },
            {
              "name": "Remove Modifier Behavior Flag(s)",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              }
            },
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
                  "name": "Reset Toughness",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  }
                },
                {
                  "name": "Exit Broken-State",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  }
                }
              ]
            }
          ]
        },
        "Trigger: Ability End"
      ],
      "targetObjectData": {
        "primaryTarget": "{{Hostile Entities(AOE)}}"
      },
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1155439295\">Enemy_W4_DawnsEye_Ability05Phase01</a>",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier"
            }
          ]
        }
      ]
    },
    "4015010_Monster_W4_DawnsEye_Ability05_Part01": {
      "fileName": "4015010_Monster_W4_DawnsEye_Ability05_Part01",
      "childAbilityList": [
        "4015010_Monster_W4_DawnsEye_Ability05P1_Camera",
        "4015010_Monster_W4_DawnsEye_Ability05_Part01",
        "4015010_Monster_W4_DawnsEye_Ability05P1_Part02"
      ],
      "skillTrigger": "Skill05P1",
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
          "ability": "Monster_W4_DawnsEye_Ability05P1_Part02",
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
    "4015010_Monster_W4_DawnsEye_Ability04P2_Part02": {
      "fileName": "4015010_Monster_W4_DawnsEye_Ability04P2_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        "Ability Start",
        {
          "name": "IF",
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"2022265091\">Enemy_W4_DawnsEye_MainStory</a>"
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1839713758\">Enemy_W4_DawnsEye_MainStoryAbility04P2</a>"
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1604668536\">Enemy_W4_DawnsEye_Ability4P2Tutorial</a>"
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "target": {
                  "name": "Target Name",
                  "target": "{{Level Entity}}"
                },
                "value1": "WeatherPhase02Flag",
                "compareType": "=",
                "value2": 0
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
          "modifier": "<a class=\"gModGreen\" id=\"763823194\">OneMore</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"2111915075\">Enemy_W4_DawnsEye_Ability4P2Effect</a>"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"1923265590\">Modifier_Monster_W4_DawnsEye_WheaterRain</a>"
          },
          "passed": [
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"883139622\">OneMorePerTurn</a>"
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-526594563\">Modifier_Monster_W4_DawnsEye_WheaterRainChargeBreak</a>"
            },
            {
              "name": "Define Custom Variable",
              "value": {
                "displayLines": "(Thunder_CountDark + {[Skill04P2[0]]})"
              },
              "variableName": "Thunder_CountDark"
            },
            {
              "name": "Define Custom Variable",
              "value": {
                "displayLines": "Thunder_CountDark"
              },
              "variableName": "Thunder_CountTotal"
            },
            {
              "name": "Define Custom Variable",
              "value": 0,
              "variableName": "Thunder_CountLight"
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1414068042\">Modifier_Monster_W4_DawnsEye_WheaterMarkAbility04</a>[<span class=\"descriptionNumberColor\">Ionization</span>]",
              "valuePerStack": {
                "MDF_ThunderDark": {
                  "displayLines": "Thunder_CountDark"
                }
              }
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-2093876840\">Modifier_Monster_W4_DawnsEye_WheaterRainUIController</a>"
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Target Count",
            "target": {
              "name": "Target Sequence",
              "TargetList": [
                {
                  "name": "Target Name",
                  "target": "{{Enemy Team All(with Unselectable)}}"
                },
                {
                  "name": "Target Filter",
                  "conditions": {
                    "name": "Check Boolean Value",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "variableName": "MonsterType_W4_BossPartP3"
                  }
                }
              ]
            },
            "compareType": "<",
            "value2": 2
          },
          "passed": [
            {
              "name": "Inject Ability Use",
              "condition": {
                "name": "Insert Ability Condition",
                "type": "AbilityOwnerInsertUnusedCount",
                "typeValue": 1
              },
              "conditionActive": {
                "name": "Compare: Variable",
                "value1": "HP_Bars_Remaining",
                "compareType": "=",
                "value2": 2
              },
              "abilityName": "BattleEventAbility_W4_DawnsEye_SummonMonster",
              "abilitySource": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "abilityTarget": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "priorityTag": "EnemyChangeState",
              "canHitNonTargets": true,
              "allowAbilityTriggers": false
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
                "target": {
                  "name": "Target Name",
                  "target": "{{Level Entity}}"
                },
                "value1": "WeatherPhase02Flag",
                "compareType": "=",
                "value2": 0
              },
              {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"2022265091\">Enemy_W4_DawnsEye_MainStory</a>"
              }
            ]
          }
        },
        "Trigger: Ability End"
      ],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      },
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1604668536\">Enemy_W4_DawnsEye_Ability4P2Tutorial</a>",
          "stackType": "Replace",
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
                      "target": "{{Level Entity}}"
                    },
                    "value1": "WeatherPhase02Flag",
                    "compareType": "=",
                    "value2": 0,
                    "contextScope": "TargetEntity"
                  },
                  "passed": [
                    {
                      "name": "Declare Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Level Entity}}"
                      },
                      "variableName": "WeatherPhase02Flag",
                      "scope": "TargetEntity"
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Action Phase Start [Anyone][?]",
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
                        "team": "Player Team"
                      },
                      {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value1": "HP_Bars_Remaining",
                        "compareType": "=",
                        "value2": 2
                      },
                      {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Level Entity}}"
                        },
                        "value1": "WeatherPhase02Flag",
                        "compareType": "=",
                        "value2": 0
                      },
                      {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"-1414068042\">Modifier_Monster_W4_DawnsEye_WheaterMarkAbility04</a>[<span class=\"descriptionNumberColor\">Ionization</span>]"
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
                      "value": 1,
                      "variableName": "WeatherPhase02Flag"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__2111915075\">Enemy_W4_DawnsEye_Ability4P2Effect</a>",
          "latentQueue": [
            "WeatherPhase02Flag"
          ],
          "execute": [
            {
              "eventTrigger": "When Modifier Destroyed/Removed"
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier"
            },
            {
              "eventTrigger": "Being Weakness Broken: End [Owner]",
              "execute": [
                "Modifier Deletes Itself"
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1839713758\">Enemy_W4_DawnsEye_MainStoryAbility04P2</a>",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier"
            }
          ]
        }
      ]
    },
    "4015010_Monster_W4_DawnsEye_Ability04P2_Part01": {
      "fileName": "4015010_Monster_W4_DawnsEye_Ability04P2_Part01",
      "childAbilityList": [
        "4015010_Monster_W4_DawnsEye_Ability04P2_Camera",
        "4015010_Monster_W4_DawnsEye_Ability04P2_Part01",
        "4015010_Monster_W4_DawnsEye_Ability04P2_Part02"
      ],
      "skillTrigger": "Skill04P2",
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
          "ability": "Monster_W4_DawnsEye_Ability04P2_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      },
      "realTargetData": {
        "primaryTarget": "{{Caster}}"
      },
      "references": []
    },
    "4015010_Monster_W4_DawnsEye_Ability04_Part02": {
      "fileName": "4015010_Monster_W4_DawnsEye_Ability04_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        "Ability Start",
        {
          "name": "IF",
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"2022265091\">Enemy_W4_DawnsEye_MainStory</a>"
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1856491377\">Enemy_W4_DawnsEye_MainStoryAbility04P1</a>"
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"308966909\">Enemy_W4_DawnsEye_Ability4P1Tutorial</a>"
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "target": {
                  "name": "Target Name",
                  "target": "{{Level Entity}}"
                },
                "value1": "WeatherPhase01Flag",
                "compareType": "=",
                "value2": 0
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
          "modifier": "<a class=\"gModGreen\" id=\"763823194\">OneMore</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1701351944\">Enemy_W4_DawnsEye_Ability4P1Effect02</a>"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"-39064349\">Modifier_Monster_W4_DawnsEye_WheaterSunny</a>"
          }
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"-39064349\">Modifier_Monster_W4_DawnsEye_WheaterSunny</a>"
          },
          "passed": [
            {
              "name": "Define Custom Variable",
              "value": {
                "displayLines": "{[Skill04P1[0]]}"
              },
              "variableName": "Skill04P1SunnyHeat"
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1737251406\">Enemy_W4_DawnsEye_Ability04_SunnyChargeHeat</a>[<span class=\"descriptionNumberColor\">Helium Flash</span>]",
              "valuePerStack": {
                "MDF_Ability04P1SunnyHeat": {
                  "displayLines": "{[Skill04P1[0]]}"
                }
              }
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"735847061\">Modifier_Monster_W4_DawnsEye_WheaterSunnyUIController</a>"
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"883139622\">OneMorePerTurn</a>"
            }
          ]
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-936361058\">Enemy_W4_DawnsEye_Ability4P1Effect</a>"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Target Count",
            "target": {
              "name": "Target Sequence",
              "TargetList": [
                {
                  "name": "Target Name",
                  "target": "{{Enemy Team All(with Unselectable)}}"
                },
                {
                  "name": "Target Filter",
                  "conditions": {
                    "name": "Check Boolean Value",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "variableName": "MonsterType_W4_BossPartP3"
                  }
                }
              ]
            },
            "compareType": "<",
            "value2": 2
          },
          "passed": [
            {
              "name": "Inject Ability Use",
              "condition": {
                "name": "Insert Ability Condition",
                "type": "AbilityOwnerInsertUnusedCount",
                "typeValue": 1
              },
              "conditionActive": {
                "name": "Compare: Variable",
                "value1": "HP_Bars_Remaining",
                "compareType": "=",
                "value2": 1
              },
              "abilityName": "BattleEventAbility_W4_DawnsEye_SummonMonster",
              "abilitySource": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "abilityTarget": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "priorityTag": "EnemyChangeState",
              "canHitNonTargets": true,
              "allowAbilityTriggers": false
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
                "target": {
                  "name": "Target Name",
                  "target": "{{Level Entity}}"
                },
                "value1": "WeatherPhase01Flag",
                "compareType": "=",
                "value2": 0
              },
              {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"2022265091\">Enemy_W4_DawnsEye_MainStory</a>"
              }
            ]
          }
        },
        "Trigger: Ability End"
      ],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      },
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__308966909\">Enemy_W4_DawnsEye_Ability4P1Tutorial</a>",
          "stackType": "Replace",
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
                      "target": "{{Level Entity}}"
                    },
                    "value1": "WeatherPhase01Flag",
                    "compareType": "=",
                    "value2": 0,
                    "contextScope": "TargetEntity"
                  },
                  "passed": [
                    {
                      "name": "Declare Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Level Entity}}"
                      },
                      "variableName": "WeatherPhase01Flag",
                      "scope": "TargetEntity"
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Action Phase Start [Anyone][?]",
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
                        "team": "Player Team"
                      },
                      {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value1": "HP_Bars_Remaining",
                        "compareType": "=",
                        "value2": 1
                      },
                      {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Level Entity}}"
                        },
                        "value1": "WeatherPhase01Flag",
                        "compareType": "=",
                        "value2": 0
                      },
                      {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"-1737251406\">Enemy_W4_DawnsEye_Ability04_SunnyChargeHeat</a>[<span class=\"descriptionNumberColor\">Helium Flash</span>]"
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
                      "value": 1,
                      "variableName": "WeatherPhase01Flag"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1701351944\">Enemy_W4_DawnsEye_Ability4P1Effect02</a>",
          "latentQueue": [
            "WeatherPhase01Flag"
          ],
          "execute": [
            {
              "eventTrigger": "When Modifier Destroyed/Removed"
            },
            {
              "eventTrigger": "Being Limbo [Owner]",
              "execute": [
                "Modifier Deletes Itself"
              ]
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier"
            },
            {
              "eventTrigger": "Being Weakness Broken: End [Owner]",
              "execute": [
                "Modifier Deletes Itself"
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-936361058\">Enemy_W4_DawnsEye_Ability4P1Effect</a>",
          "latentQueue": [
            "WeatherPhase01Flag"
          ],
          "execute": [
            {
              "eventTrigger": "When Modifier Destroyed/Removed"
            },
            {
              "eventTrigger": "Being Limbo [Owner]",
              "execute": [
                "Modifier Deletes Itself"
              ]
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier"
            },
            {
              "eventTrigger": "Being Weakness Broken: End [Owner]",
              "execute": [
                "Modifier Deletes Itself"
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1856491377\">Enemy_W4_DawnsEye_MainStoryAbility04P1</a>",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier"
            }
          ]
        }
      ]
    },
    "4015010_Monster_W4_DawnsEye_Ability04_Part01": {
      "fileName": "4015010_Monster_W4_DawnsEye_Ability04_Part01",
      "childAbilityList": [
        "4015010_Monster_W4_DawnsEye_Ability04P1_Camera",
        "4015010_Monster_W4_DawnsEye_Ability04_Part01",
        "4015010_Monster_W4_DawnsEye_Ability04_Part02"
      ],
      "skillTrigger": "Skill04P1",
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
          "ability": "Monster_W4_DawnsEye_Ability04_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      },
      "realTargetData": {
        "primaryTarget": "{{Caster}}"
      },
      "references": []
    },
    "4015010_Monster_W4_DawnsEye_Ability03P2_Part02": {
      "fileName": "4015010_Monster_W4_DawnsEye_Ability03P2_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        "Ability Start",
        {
          "name": "IF",
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"1923265590\">Modifier_Monster_W4_DawnsEye_WheaterRain</a>"
          },
          "passed": [
            {
              "name": "Define Custom Variable",
              "value": {
                "displayLines": "(Thunder_CountDark + {[Skill03P2[1]]})"
              },
              "variableName": "Thunder_CountDark"
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-2093876840\">Modifier_Monster_W4_DawnsEye_WheaterRainUIController</a>"
            }
          ]
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "canPhase": true,
          "AttackScaling": {
            "DamageType": "Thunder",
            "Damage": {
              "displayLines": "{[Skill03P2[0]]}"
            },
            "HitSplit": 0.2,
            "Toughness": null,
            "Tags": null,
            "EnergyGainPercent": "100%"
          }
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "canPhase": true,
          "AttackScaling": {
            "DamageType": "Thunder",
            "Damage": {
              "displayLines": "{[Skill03P2[0]]}"
            },
            "HitSplit": 0.2,
            "Toughness": null,
            "Tags": null,
            "EnergyGainPercent": "100%"
          }
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "canPhase": true,
          "AttackScaling": {
            "DamageType": "Thunder",
            "Damage": {
              "displayLines": "{[Skill03P2[0]]}"
            },
            "HitSplit": 0.2,
            "Toughness": null,
            "Tags": null,
            "EnergyGainPercent": "100%"
          }
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "canPhase": true,
          "AttackScaling": {
            "DamageType": "Thunder",
            "Damage": {
              "displayLines": "{[Skill03P2[0]]}"
            },
            "HitSplit": 0.2,
            "Toughness": null,
            "Tags": null,
            "EnergyGainPercent": "100%"
          }
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "canPhase": true,
          "AttackScaling": {
            "DamageType": "Thunder",
            "Damage": {
              "displayLines": "{[Skill03P2[0]]}"
            },
            "HitSplit": 0.2,
            "Toughness": null,
            "Tags": null,
            "EnergyGainPercent": "100%"
          }
        },
        "Trigger: Attack End",
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Enemy Team All(with Unselectable)}}"
          },
          "maxTargets": 1,
          "conditions": {
            "name": "Enemy ID",
            "ID": {
              "displayLines": "PartEntity1_MonsterID"
            },
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "characterName": null
          },
          "ifTargetFound": [
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1128353279\">Enemy_W4_DawnsEye_PartBlock</a>[<span class=\"descriptionNumberColor\">Marine Layer</span>]"
            },
            {
              "name": "Remove Modifier Behavior Flag(s)",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              }
            },
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
                  "name": "Reset Toughness",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  }
                },
                {
                  "name": "Exit Broken-State",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
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
            "target": "{{Enemy Team All(with Unselectable)}}"
          },
          "maxTargets": 1,
          "conditions": {
            "name": "Enemy ID",
            "ID": {
              "displayLines": "PartEntity3_MonsterID"
            },
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "characterName": null
          },
          "ifTargetFound": [
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1128353279\">Enemy_W4_DawnsEye_PartBlock</a>[<span class=\"descriptionNumberColor\">Marine Layer</span>]"
            },
            {
              "name": "Remove Modifier Behavior Flag(s)",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              }
            },
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
                  "name": "Reset Toughness",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  }
                },
                {
                  "name": "Exit Broken-State",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  }
                }
              ]
            }
          ]
        },
        "Trigger: Ability End"
      ],
      "targetObjectData": {
        "primaryTarget": "{{Hostile Entities(AOE)}}"
      },
      "references": []
    },
    "4015010_Monster_W4_DawnsEye_Ability03P2_Part01": {
      "fileName": "4015010_Monster_W4_DawnsEye_Ability03P2_Part01",
      "childAbilityList": [
        "4015010_Monster_W4_DawnsEye_Ability03P2_Camera",
        "4015010_Monster_W4_DawnsEye_Ability03P2_Part01",
        "4015010_Monster_W4_DawnsEye_Ability03P2_Part02"
      ],
      "skillTrigger": "Skill03P2",
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
          "ability": "Monster_W4_DawnsEye_Ability03P2_Part02",
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
    "4015010_Monster_W4_DawnsEye_Ability03_Part02": {
      "fileName": "4015010_Monster_W4_DawnsEye_Ability03_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        "Ability Start",
        {
          "name": "IF",
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"-39064349\">Modifier_Monster_W4_DawnsEye_WheaterSunny</a>"
          },
          "passed": [
            {
              "name": "Define Custom Variable with Added Value",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "variableName": "Sunny_Temperature",
              "value": {
                "displayLines": "{[Skill03P1[3]]}"
              },
              "max": 999
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"735847061\">Modifier_Monster_W4_DawnsEye_WheaterSunnyUIController</a>"
            },
            {
              "name": "Define Custom Variable",
              "value": {
                "displayLines": "((Sunny_Temperature - {[SkillP05[1]]}) + 10)"
              },
              "variableName": "DamageAddHeat"
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "DamageAddHeat",
                "compareType": "<=",
                "value2": 10
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "value": 10,
                  "variableName": "DamageAddHeat"
                }
              ]
            }
          ]
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "canPhase": true,
          "AttackScaling": {
            "DamageType": "Fire",
            "Damage": {
              "displayLines": "({[Skill03P1[0]]} + ({[Skill03P1[1]]} * DamageAddHeat))"
            },
            "HitSplit": 0.2,
            "Toughness": null,
            "Tags": null,
            "EnergyGainPercent": "100%"
          }
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "canPhase": true,
          "AttackScaling": {
            "DamageType": "Fire",
            "Damage": {
              "displayLines": "({[Skill03P1[0]]} + ({[Skill03P1[1]]} * DamageAddHeat))"
            },
            "HitSplit": 0.2,
            "Toughness": null,
            "Tags": null,
            "EnergyGainPercent": "100%"
          }
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "canPhase": true,
          "AttackScaling": {
            "DamageType": "Fire",
            "Damage": {
              "displayLines": "({[Skill03P1[0]]} + ({[Skill03P1[1]]} * DamageAddHeat))"
            },
            "HitSplit": 0.2,
            "Toughness": null,
            "Tags": null,
            "EnergyGainPercent": "100%"
          }
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "canPhase": true,
          "AttackScaling": {
            "DamageType": "Fire",
            "Damage": {
              "displayLines": "({[Skill03P1[0]]} + ({[Skill03P1[1]]} * DamageAddHeat))"
            },
            "HitSplit": 0.2,
            "Toughness": null,
            "Tags": null,
            "EnergyGainPercent": "100%"
          }
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "canPhase": true,
          "AttackScaling": {
            "DamageType": "Fire",
            "Damage": {
              "displayLines": "({[Skill03P1[0]]} + ({[Skill03P1[1]]} * DamageAddHeat))"
            },
            "HitSplit": 0.2,
            "Toughness": null,
            "Tags": null,
            "EnergyGainPercent": "100%"
          }
        },
        "Trigger: Attack End",
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "target": {
              "name": "Target Name",
              "target": "{{Modifier Holder}}"
            },
            "value1": "Sunny_Temperature",
            "compareType": ">",
            "value2": {
              "displayLines": "{[SkillP05[1]]}"
            }
          },
          "passed": [
            {
              "name": "Action Advance/Delay",
              "target": {
                "name": "Target Name",
                "target": "{{Player Team All}}"
              },
              "advanceType": "Set",
              "add": {
                "displayLines": "({[Skill03P1[2]]} * ((Sunny_Temperature - {[SkillP05[1]]}) + 10))"
              }
            }
          ],
          "failed": [
            {
              "name": "Action Advance/Delay",
              "target": {
                "name": "Target Name",
                "target": "{{Player Team All}}"
              },
              "advanceType": "Set",
              "add": {
                "displayLines": "({[Skill03P1[2]]} * 10)"
              }
            }
          ]
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Enemy Team All(with Unselectable)}}"
          },
          "maxTargets": 1,
          "conditions": {
            "name": "Enemy ID",
            "ID": {
              "displayLines": "PartEntity1_MonsterID"
            },
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "characterName": null
          },
          "ifTargetFound": [
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1128353279\">Enemy_W4_DawnsEye_PartBlock</a>[<span class=\"descriptionNumberColor\">Marine Layer</span>]"
            },
            {
              "name": "Remove Modifier Behavior Flag(s)",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              }
            },
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
                  "name": "Reset Toughness",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  }
                },
                {
                  "name": "Exit Broken-State",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
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
            "target": "{{Enemy Team All(with Unselectable)}}"
          },
          "maxTargets": 1,
          "conditions": {
            "name": "Enemy ID",
            "ID": {
              "displayLines": "PartEntity3_MonsterID"
            },
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "characterName": null
          },
          "ifTargetFound": [
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1128353279\">Enemy_W4_DawnsEye_PartBlock</a>[<span class=\"descriptionNumberColor\">Marine Layer</span>]"
            },
            {
              "name": "Remove Modifier Behavior Flag(s)",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              }
            },
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
                  "name": "Reset Toughness",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  }
                },
                {
                  "name": "Exit Broken-State",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  }
                }
              ]
            }
          ]
        },
        "Trigger: Ability End"
      ],
      "targetObjectData": {
        "primaryTarget": "{{Hostile Entities(AOE)}}"
      },
      "references": []
    },
    "4015010_Monster_W4_DawnsEye_Ability03_Part01": {
      "fileName": "4015010_Monster_W4_DawnsEye_Ability03_Part01",
      "childAbilityList": [
        "4015010_Monster_W4_DawnsEye_Ability03P1_Camera",
        "4015010_Monster_W4_DawnsEye_Ability03_Part01",
        "4015010_Monster_W4_DawnsEye_Ability03_Part02"
      ],
      "skillTrigger": "Skill03P1",
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
          "ability": "Monster_W4_DawnsEye_Ability03_Part02",
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
    "4015010_Monster_W4_DawnsEye_Ability02P2_Part02": {
      "fileName": "4015010_Monster_W4_DawnsEye_Ability02P2_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        "Ability Start",
        {
          "name": "IF",
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"1923265590\">Modifier_Monster_W4_DawnsEye_WheaterRain</a>"
          },
          "passed": [
            {
              "name": "Define Custom Variable",
              "value": {
                "displayLines": "(Thunder_CountDark + {[Skill02P2[1]]})"
              },
              "variableName": "Thunder_CountDark"
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-2093876840\">Modifier_Monster_W4_DawnsEye_WheaterRainUIController</a>"
            }
          ]
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "canPhase": true,
          "AttackScaling": {
            "DamageType": "Thunder",
            "Damage": {
              "displayLines": "{[Skill02P2[0]]}"
            },
            "HitSplit": 0.25,
            "Toughness": null,
            "Tags": null,
            "EnergyGainPercent": "100%"
          }
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "canPhase": true,
          "AttackScaling": {
            "DamageType": "Thunder",
            "Damage": {
              "displayLines": "{[Skill02P2[0]]}"
            },
            "HitSplit": 0.25,
            "Toughness": null,
            "Tags": null,
            "EnergyGainPercent": "100%"
          }
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "canPhase": true,
          "AttackScaling": {
            "DamageType": "Thunder",
            "Damage": {
              "displayLines": "{[Skill02P2[0]]}"
            },
            "HitSplit": 0.25,
            "Toughness": null,
            "Tags": null,
            "EnergyGainPercent": "100%"
          }
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "canPhase": true,
          "AttackScaling": {
            "DamageType": "Thunder",
            "Damage": {
              "displayLines": "{[Skill02P2[0]]}"
            },
            "HitSplit": 0.25,
            "Toughness": null,
            "Tags": null,
            "EnergyGainPercent": "100%"
          }
        },
        "Trigger: Attack End",
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Enemy Team All(with Unselectable)}}"
          },
          "maxTargets": 1,
          "conditions": {
            "name": "Enemy ID",
            "ID": {
              "displayLines": "PartEntity1_MonsterID"
            },
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "characterName": null
          },
          "ifTargetFound": [
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1128353279\">Enemy_W4_DawnsEye_PartBlock</a>[<span class=\"descriptionNumberColor\">Marine Layer</span>]"
            },
            {
              "name": "Remove Modifier Behavior Flag(s)",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              }
            },
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
                  "name": "Reset Toughness",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  }
                },
                {
                  "name": "Exit Broken-State",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  }
                }
              ]
            }
          ]
        },
        "Trigger: Ability End"
      ],
      "targetObjectData": {
        "primaryTarget": "{{Hostile Entities(AOE)}}"
      },
      "references": []
    },
    "4015010_Monster_W4_DawnsEye_Ability02P2_Part01": {
      "fileName": "4015010_Monster_W4_DawnsEye_Ability02P2_Part01",
      "childAbilityList": [
        "4015010_Monster_W4_DawnsEye_Ability02P2_Camera",
        "4015010_Monster_W4_DawnsEye_Ability02P2_Part01",
        "4015010_Monster_W4_DawnsEye_Ability02P2_Part02"
      ],
      "skillTrigger": "Skill02P2",
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
          "ability": "Monster_W4_DawnsEye_Ability02P2_Part02",
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
    "4015010_Monster_W4_DawnsEye_Ability02_Part02": {
      "fileName": "4015010_Monster_W4_DawnsEye_Ability02_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        "Ability Start",
        {
          "name": "IF",
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"-39064349\">Modifier_Monster_W4_DawnsEye_WheaterSunny</a>"
          },
          "passed": [
            {
              "name": "Define Custom Variable with Added Value",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "variableName": "Sunny_Temperature",
              "value": {
                "displayLines": "{[Skill02P1[2]]}"
              },
              "max": 999
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"735847061\">Modifier_Monster_W4_DawnsEye_WheaterSunnyUIController</a>"
            },
            {
              "name": "Define Custom Variable",
              "value": {
                "displayLines": "((Sunny_Temperature - {[SkillP05[1]]}) + 10)"
              },
              "variableName": "DamageAddHeat"
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "DamageAddHeat",
                "compareType": "<=",
                "value2": 10
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "value": 10,
                  "variableName": "DamageAddHeat"
                }
              ]
            }
          ]
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "AttackScaling": {
            "DamageType": "Fire",
            "Damage": {
              "displayLines": "({[Skill02P1[0]]} + ({[Skill02P1[1]]} * DamageAddHeat))"
            },
            "HitSplit": 0.25,
            "Toughness": null,
            "Tags": null,
            "EnergyGainPercent": "100%"
          }
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "AttackScaling": {
            "DamageType": "Fire",
            "Damage": {
              "displayLines": "({[Skill02P1[0]]} + ({[Skill02P1[1]]} * DamageAddHeat))"
            },
            "HitSplit": 0.25,
            "Toughness": null,
            "Tags": null,
            "EnergyGainPercent": "100%"
          }
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "AttackScaling": {
            "DamageType": "Fire",
            "Damage": {
              "displayLines": "({[Skill02P1[0]]} + ({[Skill02P1[1]]} * DamageAddHeat))"
            },
            "HitSplit": 0.25,
            "Toughness": null,
            "Tags": null,
            "EnergyGainPercent": "100%"
          }
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "AttackScaling": {
            "DamageType": "Fire",
            "Damage": {
              "displayLines": "({[Skill02P1[0]]} + ({[Skill02P1[1]]} * DamageAddHeat))"
            },
            "HitSplit": 0.25,
            "Toughness": null,
            "Tags": null,
            "EnergyGainPercent": "100%"
          }
        },
        "Trigger: Attack End",
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Enemy Team All(with Unselectable)}}"
          },
          "maxTargets": 1,
          "conditions": {
            "name": "Enemy ID",
            "ID": {
              "displayLines": "PartEntity1_MonsterID"
            },
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "characterName": null
          },
          "ifTargetFound": [
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1128353279\">Enemy_W4_DawnsEye_PartBlock</a>[<span class=\"descriptionNumberColor\">Marine Layer</span>]"
            },
            {
              "name": "Remove Modifier Behavior Flag(s)",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              }
            },
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
                  "name": "Reset Toughness",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  }
                },
                {
                  "name": "Exit Broken-State",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  }
                }
              ]
            }
          ]
        },
        "Trigger: Ability End"
      ],
      "targetObjectData": {
        "primaryTarget": "{{Hostile Entities(AOE)}}"
      },
      "references": []
    },
    "4015010_Monster_W4_DawnsEye_Ability02_Part01": {
      "fileName": "4015010_Monster_W4_DawnsEye_Ability02_Part01",
      "childAbilityList": [
        "4015010_Monster_W4_DawnsEye_Ability02_Camera",
        "4015010_Monster_W4_DawnsEye_Ability02_Part01",
        "4015010_Monster_W4_DawnsEye_Ability02_Part02"
      ],
      "skillTrigger": "Skill02P1",
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
          "ability": "Monster_W4_DawnsEye_Ability02_Part02",
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
    "4015010_Monster_W4_DawnsEye_Ability01P2_Part02": {
      "fileName": "4015010_Monster_W4_DawnsEye_Ability01P2_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        "Ability Start",
        {
          "name": "IF",
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"1923265590\">Modifier_Monster_W4_DawnsEye_WheaterRain</a>"
          },
          "passed": [
            {
              "name": "Define Custom Variable",
              "value": {
                "displayLines": "(Thunder_CountDark + {[Skill01P2[1]]})"
              },
              "variableName": "Thunder_CountDark"
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-2093876840\">Modifier_Monster_W4_DawnsEye_WheaterRainUIController</a>"
            }
          ]
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Player Team All(Left to Right)}}"
          },
          "maxTargets": 1,
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"-1526533181\">Enemy_W4_DawnsEye_Ability01_HitTag</a>",
            "invertCondition": true
          },
          "ifTargetFound": [
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "canPhase": true,
              "AttackScaling": {
                "DamageType": "Thunder",
                "Damage": {
                  "displayLines": "{[Skill01P2[0]]}"
                },
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
              "modifier": "<a class=\"gModGreen\" id=\"-1526533181\">Enemy_W4_DawnsEye_Ability01_HitTag</a>"
            }
          ],
          "noTargetFound": [
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Player Team All}}"
              },
              "searchRandom": true,
              "maxTargets": 1,
              "ifTargetFound": [
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "canPhase": true,
                  "AttackScaling": {
                    "DamageType": "Thunder",
                    "Damage": {
                      "displayLines": "{[Skill01P2[0]]}"
                    },
                    "Toughness": null,
                    "Tags": null,
                    "EnergyGainPercent": "100%"
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
            "target": "{{Player Team All(Left to Right)}}"
          },
          "maxTargets": 1,
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"-1526533181\">Enemy_W4_DawnsEye_Ability01_HitTag</a>",
            "invertCondition": true
          },
          "ifTargetFound": [
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "canPhase": true,
              "AttackScaling": {
                "DamageType": "Thunder",
                "Damage": {
                  "displayLines": "{[Skill01P2[0]]}"
                },
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
              "modifier": "<a class=\"gModGreen\" id=\"-1526533181\">Enemy_W4_DawnsEye_Ability01_HitTag</a>"
            }
          ],
          "noTargetFound": [
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Player Team All}}"
              },
              "searchRandom": true,
              "maxTargets": 1,
              "ifTargetFound": [
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "canPhase": true,
                  "AttackScaling": {
                    "DamageType": "Thunder",
                    "Damage": {
                      "displayLines": "{[Skill01P2[0]]}"
                    },
                    "Toughness": null,
                    "Tags": null,
                    "EnergyGainPercent": "100%"
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
            "target": "{{Player Team All(Left to Right)}}"
          },
          "maxTargets": 1,
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"-1526533181\">Enemy_W4_DawnsEye_Ability01_HitTag</a>",
            "invertCondition": true
          },
          "ifTargetFound": [
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "canPhase": true,
              "AttackScaling": {
                "DamageType": "Thunder",
                "Damage": {
                  "displayLines": "{[Skill01P2[0]]}"
                },
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
              "modifier": "<a class=\"gModGreen\" id=\"-1526533181\">Enemy_W4_DawnsEye_Ability01_HitTag</a>"
            }
          ],
          "noTargetFound": [
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Player Team All}}"
              },
              "searchRandom": true,
              "maxTargets": 1,
              "ifTargetFound": [
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "canPhase": true,
                  "AttackScaling": {
                    "DamageType": "Thunder",
                    "Damage": {
                      "displayLines": "{[Skill01P2[0]]}"
                    },
                    "Toughness": null,
                    "Tags": null,
                    "EnergyGainPercent": "100%"
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
            "target": "{{Player Team All(Left to Right)}}"
          },
          "maxTargets": 1,
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"-1526533181\">Enemy_W4_DawnsEye_Ability01_HitTag</a>",
            "invertCondition": true
          },
          "ifTargetFound": [
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "canPhase": true,
              "AttackScaling": {
                "DamageType": "Thunder",
                "Damage": {
                  "displayLines": "{[Skill01P2[0]]}"
                },
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
              "modifier": "<a class=\"gModGreen\" id=\"-1526533181\">Enemy_W4_DawnsEye_Ability01_HitTag</a>"
            }
          ],
          "noTargetFound": [
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Player Team All}}"
              },
              "searchRandom": true,
              "maxTargets": 1,
              "ifTargetFound": [
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "canPhase": true,
                  "AttackScaling": {
                    "DamageType": "Thunder",
                    "Damage": {
                      "displayLines": "{[Skill01P2[0]]}"
                    },
                    "Toughness": null,
                    "Tags": null,
                    "EnergyGainPercent": "100%"
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
            "target": "{{Player Team All(Left to Right)}}"
          },
          "maxTargets": 1,
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"-1526533181\">Enemy_W4_DawnsEye_Ability01_HitTag</a>",
            "invertCondition": true
          },
          "ifTargetFound": [
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "canPhase": true,
              "AttackScaling": {
                "DamageType": "Thunder",
                "Damage": {
                  "displayLines": "{[Skill01P2[0]]}"
                },
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
              "modifier": "<a class=\"gModGreen\" id=\"-1526533181\">Enemy_W4_DawnsEye_Ability01_HitTag</a>"
            }
          ],
          "noTargetFound": [
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Player Team All}}"
              },
              "searchRandom": true,
              "maxTargets": 1,
              "ifTargetFound": [
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "canPhase": true,
                  "AttackScaling": {
                    "DamageType": "Thunder",
                    "Damage": {
                      "displayLines": "{[Skill01P2[0]]}"
                    },
                    "Toughness": null,
                    "Tags": null,
                    "EnergyGainPercent": "100%"
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
            "target": "{{Player Team All(Left to Right)}}"
          },
          "maxTargets": 1,
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"-1526533181\">Enemy_W4_DawnsEye_Ability01_HitTag</a>",
            "invertCondition": true
          },
          "ifTargetFound": [
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "canPhase": true,
              "AttackScaling": {
                "DamageType": "Thunder",
                "Damage": {
                  "displayLines": "{[Skill01P2[0]]}"
                },
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
              "modifier": "<a class=\"gModGreen\" id=\"-1526533181\">Enemy_W4_DawnsEye_Ability01_HitTag</a>"
            }
          ],
          "noTargetFound": [
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Player Team All}}"
              },
              "searchRandom": true,
              "maxTargets": 1,
              "ifTargetFound": [
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "canPhase": true,
                  "AttackScaling": {
                    "DamageType": "Thunder",
                    "Damage": {
                      "displayLines": "{[Skill01P2[0]]}"
                    },
                    "Toughness": null,
                    "Tags": null,
                    "EnergyGainPercent": "100%"
                  }
                }
              ]
            }
          ]
        },
        "Trigger: Attack End",
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Player Team All}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1526533181\">Enemy_W4_DawnsEye_Ability01_HitTag</a>"
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Enemy Team All(with Unselectable)}}"
          },
          "maxTargets": 1,
          "conditions": {
            "name": "Enemy ID",
            "ID": {
              "displayLines": "PartEntity3_MonsterID"
            },
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "characterName": null
          },
          "ifTargetFound": [
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1128353279\">Enemy_W4_DawnsEye_PartBlock</a>[<span class=\"descriptionNumberColor\">Marine Layer</span>]"
            },
            {
              "name": "Remove Modifier Behavior Flag(s)",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              }
            },
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
                  "name": "Reset Toughness",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  }
                },
                {
                  "name": "Exit Broken-State",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  }
                }
              ]
            }
          ]
        },
        "Trigger: Ability End"
      ],
      "targetObjectData": {
        "primaryTarget": "{{Hostile Entities(AOE)}}"
      },
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-117550687\">Enemy_W4_DawnsEye_Ability01_EnhanceMessage</a>",
          "execute": [
            {
              "eventTrigger": "Action End [Owner]",
              "execute": [
                "Modifier Deletes Itself"
              ]
            }
          ]
        }
      ]
    },
    "4015010_Monster_W4_DawnsEye_Ability01P2_Part01": {
      "fileName": "4015010_Monster_W4_DawnsEye_Ability01P2_Part01",
      "childAbilityList": [
        "4015010_Monster_W4_DawnsEye_Ability01P2_Camera",
        "4015010_Monster_W4_DawnsEye_Ability01P2_Part01",
        "4015010_Monster_W4_DawnsEye_Ability01P2_Part02"
      ],
      "skillTrigger": "Skill01P2",
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
          "ability": "Monster_W4_DawnsEye_Ability01P2_Part02",
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
    "4015010_Monster_W4_DawnsEye_Ability01_Part02": {
      "fileName": "4015010_Monster_W4_DawnsEye_Ability01_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        "Ability Start",
        {
          "name": "IF",
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"-39064349\">Modifier_Monster_W4_DawnsEye_WheaterSunny</a>"
          },
          "passed": [
            {
              "name": "Define Custom Variable with Added Value",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "variableName": "Sunny_Temperature",
              "value": {
                "displayLines": "{[Skill01P1[2]]}"
              },
              "max": 999
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"735847061\">Modifier_Monster_W4_DawnsEye_WheaterSunnyUIController</a>"
            },
            {
              "name": "Define Custom Variable",
              "value": {
                "displayLines": "((Sunny_Temperature - {[SkillP05[1]]}) + 10)"
              },
              "variableName": "DamageAddHeat"
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "DamageAddHeat",
                "compareType": "<=",
                "value2": 10
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "value": 10,
                  "variableName": "DamageAddHeat"
                }
              ]
            }
          ]
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Player Team All(Left to Right)}}"
          },
          "maxTargets": 1,
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"-1526533181\">Enemy_W4_DawnsEye_Ability01_HitTag</a>",
            "invertCondition": true
          },
          "ifTargetFound": [
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "canPhase": true,
              "AttackScaling": {
                "DamageType": "Fire",
                "Damage": {
                  "displayLines": "({[Skill01P1[0]]} + ({[Skill01P1[1]]} * DamageAddHeat))"
                },
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
              "modifier": "<a class=\"gModGreen\" id=\"-1526533181\">Enemy_W4_DawnsEye_Ability01_HitTag</a>"
            }
          ],
          "noTargetFound": [
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Player Team All}}"
              },
              "searchRandom": true,
              "maxTargets": 1,
              "ifTargetFound": [
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "canPhase": true,
                  "AttackScaling": {
                    "DamageType": "Fire",
                    "Damage": {
                      "displayLines": "({[Skill01P1[0]]} + ({[Skill01P1[1]]} * DamageAddHeat))"
                    },
                    "Toughness": null,
                    "Tags": null,
                    "EnergyGainPercent": "100%"
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
            "target": "{{Player Team All(Left to Right)}}"
          },
          "maxTargets": 1,
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"-1526533181\">Enemy_W4_DawnsEye_Ability01_HitTag</a>",
            "invertCondition": true
          },
          "ifTargetFound": [
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "canPhase": true,
              "AttackScaling": {
                "DamageType": "Fire",
                "Damage": {
                  "displayLines": "({[Skill01P1[0]]} + ({[Skill01P1[1]]} * DamageAddHeat))"
                },
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
              "modifier": "<a class=\"gModGreen\" id=\"-1526533181\">Enemy_W4_DawnsEye_Ability01_HitTag</a>"
            }
          ],
          "noTargetFound": [
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Player Team All}}"
              },
              "searchRandom": true,
              "maxTargets": 1,
              "ifTargetFound": [
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "canPhase": true,
                  "AttackScaling": {
                    "DamageType": "Fire",
                    "Damage": {
                      "displayLines": "({[Skill01P1[0]]} + ({[Skill01P1[1]]} * DamageAddHeat))"
                    },
                    "Toughness": null,
                    "Tags": null,
                    "EnergyGainPercent": "100%"
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
            "target": "{{Player Team All(Left to Right)}}"
          },
          "maxTargets": 1,
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"-1526533181\">Enemy_W4_DawnsEye_Ability01_HitTag</a>",
            "invertCondition": true
          },
          "ifTargetFound": [
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "canPhase": true,
              "AttackScaling": {
                "DamageType": "Fire",
                "Damage": {
                  "displayLines": "({[Skill01P1[0]]} + ({[Skill01P1[1]]} * DamageAddHeat))"
                },
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
              "modifier": "<a class=\"gModGreen\" id=\"-1526533181\">Enemy_W4_DawnsEye_Ability01_HitTag</a>"
            }
          ],
          "noTargetFound": [
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Player Team All}}"
              },
              "searchRandom": true,
              "maxTargets": 1,
              "ifTargetFound": [
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "canPhase": true,
                  "AttackScaling": {
                    "DamageType": "Fire",
                    "Damage": {
                      "displayLines": "({[Skill01P1[0]]} + ({[Skill01P1[1]]} * DamageAddHeat))"
                    },
                    "Toughness": null,
                    "Tags": null,
                    "EnergyGainPercent": "100%"
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
            "target": "{{Player Team All(Left to Right)}}"
          },
          "maxTargets": 1,
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"-1526533181\">Enemy_W4_DawnsEye_Ability01_HitTag</a>",
            "invertCondition": true
          },
          "ifTargetFound": [
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "canPhase": true,
              "AttackScaling": {
                "DamageType": "Fire",
                "Damage": {
                  "displayLines": "({[Skill01P1[0]]} + ({[Skill01P1[1]]} * DamageAddHeat))"
                },
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
              "modifier": "<a class=\"gModGreen\" id=\"-1526533181\">Enemy_W4_DawnsEye_Ability01_HitTag</a>"
            }
          ],
          "noTargetFound": [
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Player Team All}}"
              },
              "searchRandom": true,
              "maxTargets": 1,
              "ifTargetFound": [
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "canPhase": true,
                  "AttackScaling": {
                    "DamageType": "Fire",
                    "Damage": {
                      "displayLines": "({[Skill01P1[0]]} + ({[Skill01P1[1]]} * DamageAddHeat))"
                    },
                    "Toughness": null,
                    "Tags": null,
                    "EnergyGainPercent": "100%"
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
            "target": "{{Player Team All(Left to Right)}}"
          },
          "maxTargets": 1,
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"-1526533181\">Enemy_W4_DawnsEye_Ability01_HitTag</a>",
            "invertCondition": true
          },
          "ifTargetFound": [
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "canPhase": true,
              "AttackScaling": {
                "DamageType": "Fire",
                "Damage": {
                  "displayLines": "({[Skill01P1[0]]} + ({[Skill01P1[1]]} * DamageAddHeat))"
                },
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
              "modifier": "<a class=\"gModGreen\" id=\"-1526533181\">Enemy_W4_DawnsEye_Ability01_HitTag</a>"
            }
          ],
          "noTargetFound": [
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Player Team All}}"
              },
              "searchRandom": true,
              "maxTargets": 1,
              "ifTargetFound": [
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "canPhase": true,
                  "AttackScaling": {
                    "DamageType": "Fire",
                    "Damage": {
                      "displayLines": "({[Skill01P1[0]]} + ({[Skill01P1[1]]} * DamageAddHeat))"
                    },
                    "Toughness": null,
                    "Tags": null,
                    "EnergyGainPercent": "100%"
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
            "target": "{{Player Team All(Left to Right)}}"
          },
          "maxTargets": 1,
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"-1526533181\">Enemy_W4_DawnsEye_Ability01_HitTag</a>",
            "invertCondition": true
          },
          "ifTargetFound": [
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "canPhase": true,
              "AttackScaling": {
                "DamageType": "Fire",
                "Damage": {
                  "displayLines": "({[Skill01P1[0]]} + ({[Skill01P1[1]]} * DamageAddHeat))"
                },
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
              "modifier": "<a class=\"gModGreen\" id=\"-1526533181\">Enemy_W4_DawnsEye_Ability01_HitTag</a>"
            }
          ],
          "noTargetFound": [
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Player Team All}}"
              },
              "searchRandom": true,
              "maxTargets": 1,
              "ifTargetFound": [
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "canPhase": true,
                  "AttackScaling": {
                    "DamageType": "Fire",
                    "Damage": {
                      "displayLines": "({[Skill01P1[0]]} + ({[Skill01P1[1]]} * DamageAddHeat))"
                    },
                    "Toughness": null,
                    "Tags": null,
                    "EnergyGainPercent": "100%"
                  }
                }
              ]
            }
          ]
        },
        "Trigger: Attack End",
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Player Team All}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1526533181\">Enemy_W4_DawnsEye_Ability01_HitTag</a>"
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Enemy Team All(with Unselectable)}}"
          },
          "maxTargets": 1,
          "conditions": {
            "name": "Enemy ID",
            "ID": {
              "displayLines": "PartEntity3_MonsterID"
            },
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "characterName": null
          },
          "ifTargetFound": [
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1128353279\">Enemy_W4_DawnsEye_PartBlock</a>[<span class=\"descriptionNumberColor\">Marine Layer</span>]"
            },
            {
              "name": "Remove Modifier Behavior Flag(s)",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              }
            },
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
                  "name": "Reset Toughness",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  }
                },
                {
                  "name": "Exit Broken-State",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  }
                }
              ]
            }
          ]
        },
        "Trigger: Ability End"
      ],
      "targetObjectData": {
        "primaryTarget": "{{Hostile Entities(AOE)}}"
      },
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-117550687\">Enemy_W4_DawnsEye_Ability01_EnhanceMessage</a>",
          "execute": [
            {
              "eventTrigger": "Action End [Owner]",
              "execute": [
                "Modifier Deletes Itself"
              ]
            }
          ]
        }
      ]
    },
    "4015010_Monster_W4_DawnsEye_Ability01_Part01": {
      "fileName": "4015010_Monster_W4_DawnsEye_Ability01_Part01",
      "childAbilityList": [
        "4015010_Monster_W4_DawnsEye_Ability01P1_Camera",
        "4015010_Monster_W4_DawnsEye_Ability01_Part01",
        "4015010_Monster_W4_DawnsEye_Ability01_Part02"
      ],
      "skillTrigger": "Skill01P1",
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
          "ability": "Monster_W4_DawnsEye_Ability01_Part02",
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
    "4015010_BattleEventAbility_Monster_DawnEye_01_RognarokTrigger": {
      "fileName": "4015010_BattleEventAbility_Monster_DawnEye_01_RognarokTrigger",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        "Deleted bullshit",
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Enemy Team All}}"
          },
          "maxTargets": 1,
          "conditions": {
            "name": "Compare: Monster Rank",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "compareType": "=",
            "value2": 5
          },
          "ifTargetFound": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1053321581\">Modifier_Monster_W4_DawnsEye_01_WheaterMarkSpecial</a>",
              "casterAssign": "TargetSelf"
            }
          ]
        }
      ],
      "targetObjectData": {
        "primaryTarget": "Inherent Target"
      },
      "references": []
    },
    "4015010_Functions": {
      "fileName": "4015010_Functions",
      "abilityType": "Char. Functions",
      "energy": null,
      "toughnessList": [
        0,
        0,
        0
      ],
      "length": 2,
      "parse": [
        {
          "name": "CharacterFunctions",
          "functionName": "<a class=\"gTempYellow\" id=\"fun__839161540\">W4_DawnsEye_StartCamera</a>",
          "parse": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "Wave Count",
                "compareType": "=",
                "value2": 1
              }
            },
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Enemy Team All}}"
              },
              "conditions": {
                "name": "Compare: Monster Rank",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "compareType": "=",
                "value2": 5
              },
              "ifTargetFound": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Enemy ID",
                    "ID": 401501000,
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "characterName": null,
                    "invertCondition": true
                  },
                  "passed": [
                    {
                      "name": "Declare Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Level Entity}}"
                      },
                      "variableName": "PauseLevelForCameraPerform",
                      "resetValue": 1,
                      "scope": "TargetEntity"
                    },
                    {
                      "name": "Declare Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Level Entity}}"
                      },
                      "variableName": "PauseLevelForCameraPerform",
                      "scope": "TargetEntity"
                    }
                  ],
                  "failed": [
                    {
                      "name": "Declare Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Level Entity}}"
                      },
                      "variableName": "PauseLevelForCameraPerform",
                      "resetValue": 1,
                      "scope": "TargetEntity"
                    },
                    {
                      "name": "Declare Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Level Entity}}"
                      },
                      "variableName": "PauseLevelForCameraPerform",
                      "scope": "TargetEntity"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "CharacterFunctions",
          "functionName": "<a class=\"gTempYellow\" id=\"fun__-1186573263\">W4_DawnsEye_01_TargetChange</a>",
          "parse": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"352501027\">Enemy_W4_DawnsEye_01_Ability01isAiming</a>"
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Has Flag",
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "flagName": "Taunt"
              },
              "passed": [
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Enemies by Taunt OR Aggro}}"
                  },
                  "maxTargets": 1,
                  "ifTargetFound": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"1769824945\">Enemy_Monster_W4_DawnsEye_01_AimTarget</a>"
                    }
                  ]
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
                    "modifier": "<a class=\"gModGreen\" id=\"-752624700\">Enemy_W4_DawnsEye_01_MainStory</a>"
                  },
                  "passed": [
                    {
                      "name": "Find New Target",
                      "from": {
                        "name": "Target Name",
                        "target": "{{Player Team All}}"
                      },
                      "searchRandom": true,
                      "maxTargets": 1,
                      "conditions": {
                        "name": "AND",
                        "conditionList": [
                          {
                            "name": "Character ID",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Parameter Target}}"
                            },
                            "characterID": "1409 (Hyacine)",
                            "invertCondition": true
                          },
                          {
                            "name": "Has Modifier",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Parameter Target}}"
                            },
                            "modifier": "<a class=\"gModGreen\" id=\"-1488863445\">Modifier_Monster_W4_DawnsEye_01_MuteSpeed</a>[<span class=\"descriptionNumberColor\">Tide-Corrosion</span>]",
                            "invertCondition": true,
                            "justAddedOrActive": true
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
                          "modifier": "<a class=\"gModGreen\" id=\"1769824945\">Enemy_Monster_W4_DawnsEye_01_AimTarget</a>"
                        }
                      ],
                      "noTargetFound": [
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
                            "modifier": "<a class=\"gModGreen\" id=\"-1488863445\">Modifier_Monster_W4_DawnsEye_01_MuteSpeed</a>[<span class=\"descriptionNumberColor\">Tide-Corrosion</span>]",
                            "invertCondition": true,
                            "justAddedOrActive": true
                          },
                          "ifTargetFound": [
                            {
                              "name": "Add Events/Bonuses",
                              "to": {
                                "name": "Target Name",
                                "target": "{{Parameter Target}}"
                              },
                              "modifier": "<a class=\"gModGreen\" id=\"1769824945\">Enemy_Monster_W4_DawnsEye_01_AimTarget</a>"
                            }
                          ],
                          "noTargetFound": [
                            {
                              "name": "Add Events/Bonuses",
                              "to": {
                                "name": "Target Name",
                                "target": "{{Caster}}"
                              },
                              "modifier": "<a class=\"gModGreen\" id=\"-1301721119\">Enemy_W4_DawnsEye_01_AimNoTarget</a>"
                            }
                          ]
                        }
                      ]
                    }
                  ],
                  "failed": [
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
                        "modifier": "<a class=\"gModGreen\" id=\"-1488863445\">Modifier_Monster_W4_DawnsEye_01_MuteSpeed</a>[<span class=\"descriptionNumberColor\">Tide-Corrosion</span>]",
                        "invertCondition": true,
                        "justAddedOrActive": true
                      },
                      "ifTargetFound": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"1769824945\">Enemy_Monster_W4_DawnsEye_01_AimTarget</a>"
                        }
                      ],
                      "noTargetFound": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"-1301721119\">Enemy_W4_DawnsEye_01_AimNoTarget</a>"
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
    "4015010_BE_BattleEvents": {
      "fileName": "4015010_BE_BattleEvents",
      "abilityType": "Char. B.Events",
      "energy": null,
      "toughnessList": [
        0,
        0,
        0
      ],
      "parse": [
        {
          "name": "Battle Event Construction",
          "beID": 20015,
          "team": "Enemy Team",
          "eventType": "Assist",
          "icon": "BattleEvent_DawnsEye_Rognarok.png",
          "abilityList": [
            "BattleEventAbility_Monster_DawnEye_01_Rognarok"
          ],
          "statOverrides": [
            {
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">HPBase</span>&nbsp;",
              "value": 90
            },
            {
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">ATKBase</span>&nbsp;",
              "value": 100
            }
          ],
          "spd": 167,
          "hardLevel": true
        },
        {
          "name": "Battle Event Construction",
          "beID": 60029,
          "team": "Player Team",
          "eventType": "Assist",
          "icon": "BattleEvent_60024.png",
          "abilityList": [
            "BattleEventAbility_620101_Camera"
          ],
          "statOverrides": [
            {
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">HPBase</span>&nbsp;",
              "value": 90
            }
          ],
          "spd": 100,
          "hardLevel": true,
          "eliteGroup": true,
          "actionDescription": "Removes the \"Tide-Corrosion\" state from all ally targets. Adds \"Flame-Chase\" and \"Eagerness\" to all ally targets and restores HP.",
          "params": [
            4,
            1,
            2,
            0,
            0,
            4,
            0.5,
            0.4,
            10
          ]
        },
        {
          "name": "Battle Event Construction",
          "beID": 60037,
          "team": "Player Team",
          "eventType": "Assist",
          "icon": "BattleEvent_60024.png",
          "abilityList": [
            "BattleEventAbility_620101_Camera"
          ],
          "statOverrides": [
            {
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">HPBase</span>&nbsp;",
              "value": 90
            }
          ],
          "spd": 120,
          "hardLevel": true,
          "eliteGroup": true,
          "actionDescription": "Removes the \"Tide-Corrosion\" state from all ally targets, adds \"Flame-Chase\" to all ally targets and restores HP.",
          "params": [
            1.95,
            0,
            2,
            0,
            0,
            1.95,
            0,
            0.03
          ]
        }
      ],
      "references": []
    },
    "4015010_Handling": {
      "fileName": "4015010_Handling",
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
          "options": [
            {
              "name": "HANDLER OPTION GROUP",
              "optionGroupName": "Phase01",
              "optionGroupGoal": [
                {
                  "name": "HANDLER OPTION",
                  "optionName": "扩散",
                  "optionGoal": {
                    "name": "Sequence Event",
                    "execute": [
                      {
                        "name": "Declare Custom Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        "variableName": "AIFlag",
                        "resetValue": 2,
                        "scope": "TargetEntity"
                      },
                      {
                        "name": "Use Ability Option",
                        "skillName": "Skill01P1"
                      }
                    ]
                  },
                  "scoreType": "DefaultDSE",
                  "optionCheck": [
                    {
                      "name": "Check Ability Use Condition",
                      "conditions": {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        "value1": "AIFlag",
                        "compareType": "=",
                        "value2": 1,
                        "contextScope": "TargetEntity"
                      },
                      "passedValue": 1
                    }
                  ]
                },
                {
                  "name": "HANDLER OPTION",
                  "optionName": "扩散",
                  "optionGoal": {
                    "name": "Sequence Event",
                    "execute": [
                      {
                        "name": "Declare Custom Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        "variableName": "AIFlag",
                        "resetValue": 4,
                        "scope": "TargetEntity"
                      },
                      {
                        "name": "Use Ability Option",
                        "skillName": "Skill03P1"
                      }
                    ]
                  },
                  "scoreType": "DefaultDSE",
                  "optionCheck": [
                    {
                      "name": "Check Ability Use Condition",
                      "conditions": {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        "value1": "AIFlag",
                        "compareType": "=",
                        "value2": 3,
                        "contextScope": "TargetEntity"
                      },
                      "passedValue": 1
                    }
                  ]
                },
                {
                  "name": "HANDLER OPTION",
                  "optionName": "扩散",
                  "optionGoal": {
                    "name": "Sequence Event",
                    "execute": [
                      {
                        "name": "Declare Custom Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        "variableName": "AIFlag",
                        "resetValue": 5,
                        "scope": "TargetEntity"
                      },
                      {
                        "name": "Use Ability Option",
                        "skillName": "Skill04P1"
                      }
                    ]
                  },
                  "scoreType": "DefaultDSE",
                  "optionCheck": [
                    {
                      "name": "Check Ability Use Condition",
                      "conditions": {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        "value1": "AIFlag",
                        "compareType": "=",
                        "value2": 8,
                        "contextScope": "TargetEntity"
                      },
                      "passedValue": 1
                    }
                  ]
                },
                {
                  "name": "HANDLER OPTION",
                  "optionName": "扩散",
                  "optionGoal": {
                    "name": "Sequence Event",
                    "execute": [
                      {
                        "name": "Declare Custom Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        "variableName": "AIFlag",
                        "resetValue": 1,
                        "scope": "TargetEntity"
                      },
                      {
                        "name": "Use Ability Option",
                        "skillName": "Skill05P1"
                      }
                    ]
                  },
                  "scoreType": "DefaultDSE",
                  "optionCheck": [
                    {
                      "name": "Check Ability Use Condition",
                      "conditions": {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        "value1": "AIFlag",
                        "compareType": "=",
                        "value2": 5,
                        "contextScope": "TargetEntity"
                      },
                      "passedValue": 1
                    }
                  ]
                },
                {
                  "name": "HANDLER OPTION",
                  "optionName": "小AOE",
                  "optionGoal": {
                    "name": "Sequence Event",
                    "execute": [
                      {
                        "name": "IF",
                        "conditions": {
                          "name": "Has Modifier",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"763823194\">OneMore</a>",
                          "invertCondition": true
                        },
                        "passed": [
                          {
                            "name": "Declare Custom Variable",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Caster}}"
                            },
                            "variableName": "AIFlag",
                            "resetValue": 3,
                            "scope": "TargetEntity"
                          },
                          {
                            "name": "Use Ability Option",
                            "skillName": "Skill02P1"
                          }
                        ],
                        "failed": [
                          {
                            "name": "Declare Custom Variable",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Caster}}"
                            },
                            "variableName": "AIFlag",
                            "resetValue": 7,
                            "scope": "TargetEntity"
                          },
                          {
                            "name": "Use Ability Option",
                            "skillName": "Skill02P1"
                          }
                        ]
                      }
                    ]
                  },
                  "scoreType": "DefaultDSE",
                  "optionCheck": [
                    {
                      "name": "Check Ability Use Condition",
                      "conditions": {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        "value1": "AIFlag",
                        "compareType": "=",
                        "value2": 2,
                        "contextScope": "TargetEntity"
                      },
                      "passedValue": 1
                    }
                  ]
                },
                {
                  "name": "HANDLER OPTION",
                  "optionName": "扩散",
                  "optionGoal": {
                    "name": "Sequence Event",
                    "execute": [
                      {
                        "name": "Declare Custom Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        "variableName": "AIFlag",
                        "resetValue": 3,
                        "scope": "TargetEntity"
                      },
                      {
                        "name": "Use Ability Option",
                        "skillName": "Skill01P1"
                      }
                    ]
                  },
                  "scoreType": "DefaultDSE",
                  "optionCheck": [
                    {
                      "name": "Check Ability Use Condition",
                      "conditions": {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        "value1": "AIFlag",
                        "compareType": "=",
                        "value2": 7,
                        "contextScope": "TargetEntity"
                      },
                      "passedValue": 1
                    }
                  ]
                },
                {
                  "name": "HANDLER OPTION",
                  "optionName": "蓄力",
                  "optionGoal": {
                    "name": "Sequence Event",
                    "execute": [
                      {
                        "name": "IF",
                        "conditions": {
                          "name": "Has Modifier",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"763823194\">OneMore</a>",
                          "invertCondition": true
                        },
                        "passed": [
                          {
                            "name": "Declare Custom Variable",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Caster}}"
                            },
                            "variableName": "AIFlag",
                            "resetValue": 5,
                            "scope": "TargetEntity"
                          },
                          {
                            "name": "Use Ability Option",
                            "skillName": "Skill04P1"
                          }
                        ],
                        "failed": [
                          {
                            "name": "Declare Custom Variable",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Caster}}"
                            },
                            "variableName": "AIFlag",
                            "resetValue": 8,
                            "scope": "TargetEntity"
                          },
                          {
                            "name": "Use Ability Option",
                            "skillName": "Skill03P1"
                          }
                        ]
                      }
                    ]
                  },
                  "scoreType": "DefaultDSE",
                  "optionCheck": [
                    {
                      "name": "Check Ability Use Condition",
                      "conditions": {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        "value1": "AIFlag",
                        "compareType": "=",
                        "value2": 4,
                        "contextScope": "TargetEntity"
                      },
                      "passedValue": 1
                    }
                  ]
                }
              ],
              "scoreType": "DefaultDSE",
              "optionCheck": [
                {
                  "name": "Check Ability Use Condition",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        "value1": "HP_Bars_Remaining",
                        "compareType": "=",
                        "value2": 1
                      }
                    ]
                  },
                  "passedValue": 1
                }
              ]
            },
            {
              "name": "HANDLER OPTION GROUP",
              "optionGroupName": "Phase02",
              "optionGroupGoal": [
                {
                  "name": "HANDLER OPTION",
                  "optionName": "扩散",
                  "optionGoal": {
                    "name": "Sequence Event",
                    "execute": [
                      {
                        "name": "Declare Custom Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        "variableName": "AIFlag",
                        "resetValue": 2,
                        "scope": "TargetEntity"
                      },
                      {
                        "name": "Use Ability Option",
                        "skillName": "Skill01P2"
                      }
                    ]
                  },
                  "scoreType": "DefaultDSE",
                  "optionCheck": [
                    {
                      "name": "Check Ability Use Condition",
                      "conditions": {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        "value1": "AIFlag",
                        "compareType": "=",
                        "value2": 1,
                        "contextScope": "TargetEntity"
                      },
                      "passedValue": 1
                    }
                  ]
                },
                {
                  "name": "HANDLER OPTION",
                  "optionName": "扩散",
                  "optionGoal": {
                    "name": "Sequence Event",
                    "execute": [
                      {
                        "name": "Declare Custom Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        "variableName": "AIFlag",
                        "resetValue": 4,
                        "scope": "TargetEntity"
                      },
                      {
                        "name": "Use Ability Option",
                        "skillName": "Skill03P2"
                      }
                    ]
                  },
                  "scoreType": "DefaultDSE",
                  "optionCheck": [
                    {
                      "name": "Check Ability Use Condition",
                      "conditions": {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        "value1": "AIFlag",
                        "compareType": "=",
                        "value2": 3,
                        "contextScope": "TargetEntity"
                      },
                      "passedValue": 1
                    }
                  ]
                },
                {
                  "name": "HANDLER OPTION",
                  "optionName": "扩散",
                  "optionGoal": {
                    "name": "Sequence Event",
                    "execute": [
                      {
                        "name": "Declare Custom Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        "variableName": "AIFlag",
                        "resetValue": 5,
                        "scope": "TargetEntity"
                      },
                      {
                        "name": "Use Ability Option",
                        "skillName": "Skill04P2"
                      }
                    ]
                  },
                  "scoreType": "DefaultDSE",
                  "optionCheck": [
                    {
                      "name": "Check Ability Use Condition",
                      "conditions": {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        "value1": "AIFlag",
                        "compareType": "=",
                        "value2": 8,
                        "contextScope": "TargetEntity"
                      },
                      "passedValue": 1
                    }
                  ]
                },
                {
                  "name": "HANDLER OPTION",
                  "optionName": "扩散",
                  "optionGoal": {
                    "name": "Sequence Event",
                    "execute": [
                      {
                        "name": "Declare Custom Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        "variableName": "AIFlag",
                        "resetValue": 1,
                        "scope": "TargetEntity"
                      },
                      {
                        "name": "Use Ability Option",
                        "skillName": "Skill05P2"
                      }
                    ]
                  },
                  "scoreType": "DefaultDSE",
                  "optionCheck": [
                    {
                      "name": "Check Ability Use Condition",
                      "conditions": {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        "value1": "AIFlag",
                        "compareType": "=",
                        "value2": 5,
                        "contextScope": "TargetEntity"
                      },
                      "passedValue": 1
                    }
                  ]
                },
                {
                  "name": "HANDLER OPTION",
                  "optionName": "小AOE",
                  "optionGoal": {
                    "name": "Sequence Event",
                    "execute": [
                      {
                        "name": "IF",
                        "conditions": {
                          "name": "Has Modifier",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"763823194\">OneMore</a>",
                          "invertCondition": true
                        },
                        "passed": [
                          {
                            "name": "Declare Custom Variable",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Caster}}"
                            },
                            "variableName": "AIFlag",
                            "resetValue": 3,
                            "scope": "TargetEntity"
                          },
                          {
                            "name": "Use Ability Option",
                            "skillName": "Skill02P2"
                          }
                        ],
                        "failed": [
                          {
                            "name": "Declare Custom Variable",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Caster}}"
                            },
                            "variableName": "AIFlag",
                            "resetValue": 7,
                            "scope": "TargetEntity"
                          },
                          {
                            "name": "Use Ability Option",
                            "skillName": "Skill02P2"
                          }
                        ]
                      }
                    ]
                  },
                  "scoreType": "DefaultDSE",
                  "optionCheck": [
                    {
                      "name": "Check Ability Use Condition",
                      "conditions": {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        "value1": "AIFlag",
                        "compareType": "=",
                        "value2": 2,
                        "contextScope": "TargetEntity"
                      },
                      "passedValue": 1
                    }
                  ]
                },
                {
                  "name": "HANDLER OPTION",
                  "optionName": "扩散",
                  "optionGoal": {
                    "name": "Sequence Event",
                    "execute": [
                      {
                        "name": "Declare Custom Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        "variableName": "AIFlag",
                        "resetValue": 3,
                        "scope": "TargetEntity"
                      },
                      {
                        "name": "Use Ability Option",
                        "skillName": "Skill01P2"
                      }
                    ]
                  },
                  "scoreType": "DefaultDSE",
                  "optionCheck": [
                    {
                      "name": "Check Ability Use Condition",
                      "conditions": {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        "value1": "AIFlag",
                        "compareType": "=",
                        "value2": 7,
                        "contextScope": "TargetEntity"
                      },
                      "passedValue": 1
                    }
                  ]
                },
                {
                  "name": "HANDLER OPTION",
                  "optionName": "小AOE",
                  "optionGoal": {
                    "name": "Sequence Event",
                    "execute": [
                      {
                        "name": "IF",
                        "conditions": {
                          "name": "Has Modifier",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"763823194\">OneMore</a>",
                          "invertCondition": true
                        },
                        "passed": [
                          {
                            "name": "Declare Custom Variable",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Caster}}"
                            },
                            "variableName": "AIFlag",
                            "resetValue": 5,
                            "scope": "TargetEntity"
                          },
                          {
                            "name": "Use Ability Option",
                            "skillName": "Skill04P2"
                          }
                        ],
                        "failed": [
                          {
                            "name": "Declare Custom Variable",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Caster}}"
                            },
                            "variableName": "AIFlag",
                            "resetValue": 8,
                            "scope": "TargetEntity"
                          },
                          {
                            "name": "Use Ability Option",
                            "skillName": "Skill03P2"
                          }
                        ]
                      }
                    ]
                  },
                  "scoreType": "DefaultDSE",
                  "optionCheck": [
                    {
                      "name": "Check Ability Use Condition",
                      "conditions": {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        "value1": "AIFlag",
                        "compareType": "=",
                        "value2": 4,
                        "contextScope": "TargetEntity"
                      },
                      "passedValue": 1
                    }
                  ]
                }
              ],
              "scoreType": "DefaultDSE",
              "optionCheck": [
                {
                  "name": "Check Ability Use Condition",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        "value1": "HP_Bars_Remaining",
                        "compareType": "=",
                        "value2": 2
                      }
                    ]
                  },
                  "passedValue": 1
                }
              ]
            },
            {
              "name": "HANDLER OPTION GROUP",
              "optionGroupName": "Phase03",
              "optionGroupGoal": [
                {
                  "name": "HANDLER OPTION",
                  "optionName": "蓄力",
                  "optionGoal": {
                    "name": "Sequence Event",
                    "execute": [
                      {
                        "name": "Declare Custom Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        "variableName": "AIFlag",
                        "resetValue": 4,
                        "scope": "TargetEntity"
                      },
                      {
                        "name": "Use Ability Option",
                        "skillName": "Skill02P3"
                      }
                    ]
                  },
                  "scoreType": "DefaultDSE",
                  "optionCheck": [
                    {
                      "name": "Check Ability Use Condition",
                      "conditions": {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        "value1": "AIFlag",
                        "compareType": "=",
                        "value2": 3,
                        "contextScope": "TargetEntity"
                      },
                      "passedValue": 1
                    }
                  ]
                },
                {
                  "name": "HANDLER OPTION",
                  "optionName": "蓄力",
                  "optionGoal": {
                    "name": "Sequence Event",
                    "execute": [
                      {
                        "name": "Declare Custom Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        "variableName": "AIFlag",
                        "resetValue": 5,
                        "scope": "TargetEntity"
                      },
                      {
                        "name": "Use Ability Option",
                        "skillName": "Skill03P3"
                      }
                    ]
                  },
                  "scoreType": "DefaultDSE",
                  "optionCheck": [
                    {
                      "name": "Check Ability Use Condition",
                      "conditions": {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        "value1": "AIFlag",
                        "compareType": "=",
                        "value2": 4,
                        "contextScope": "TargetEntity"
                      },
                      "passedValue": 1
                    }
                  ]
                },
                {
                  "name": "HANDLER OPTION",
                  "optionName": "蓄力",
                  "optionGoal": {
                    "name": "Sequence Event",
                    "execute": [
                      {
                        "name": "Declare Custom Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        "variableName": "AIFlag",
                        "resetValue": 1,
                        "scope": "TargetEntity"
                      },
                      {
                        "name": "Use Ability Option",
                        "skillName": "Skill04P3"
                      }
                    ]
                  },
                  "scoreType": "DefaultDSE",
                  "optionCheck": [
                    {
                      "name": "Check Ability Use Condition",
                      "conditions": {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        "value1": "AIFlag",
                        "compareType": "=",
                        "value2": 5,
                        "contextScope": "TargetEntity"
                      },
                      "passedValue": 1
                    }
                  ]
                },
                {
                  "name": "HANDLER OPTION",
                  "optionName": "蓄力",
                  "optionGoal": {
                    "name": "Sequence Event",
                    "execute": [
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
                            "variableName": "AIFlag",
                            "resetValue": 2,
                            "scope": "TargetEntity"
                          },
                          {
                            "name": "Use Ability Option",
                            "skillName": "Skill02P3"
                          }
                        ],
                        "failed": [
                          {
                            "name": "Declare Custom Variable",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Caster}}"
                            },
                            "variableName": "AIFlag",
                            "resetValue": 1,
                            "scope": "TargetEntity"
                          },
                          {
                            "name": "Choose Ability Target",
                            "skillName": "Skill01P3",
                            "target": {
                              "name": "Select by Modifier Name",
                              "modifier": "Enemy_Monster_W4_DawnsEye_01_AimTarget",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Caster}}"
                              }
                            }
                          },
                          {
                            "name": "Use Ability Option",
                            "skillName": "Skill01P3"
                          }
                        ]
                      }
                    ]
                  },
                  "scoreType": "DefaultDSE",
                  "optionCheck": [
                    {
                      "name": "Check Ability Use Condition",
                      "conditions": {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        "value1": "AIFlag",
                        "compareType": "=",
                        "value2": 1,
                        "contextScope": "TargetEntity"
                      },
                      "passedValue": 1
                    }
                  ]
                },
                {
                  "name": "HANDLER OPTION",
                  "optionName": "蓄力",
                  "optionGoal": {
                    "name": "Sequence Event",
                    "execute": [
                      {
                        "name": "Declare Custom Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        "variableName": "AIFlag",
                        "resetValue": 3,
                        "scope": "TargetEntity"
                      },
                      {
                        "name": "Choose Ability Target",
                        "skillName": "Skill01P3",
                        "target": {
                          "name": "Select by Modifier Name",
                          "modifier": "Enemy_Monster_W4_DawnsEye_01_AimTarget",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          }
                        }
                      },
                      {
                        "name": "Use Ability Option",
                        "skillName": "Skill01P3"
                      }
                    ]
                  },
                  "scoreType": "DefaultDSE",
                  "optionCheck": [
                    {
                      "name": "Check Ability Use Condition",
                      "conditions": {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        "value1": "AIFlag",
                        "compareType": "=",
                        "value2": 2,
                        "contextScope": "TargetEntity"
                      },
                      "passedValue": 1
                    }
                  ]
                }
              ],
              "scoreType": "DefaultDSE",
              "optionCheck": [
                {
                  "name": "Check Ability Use Condition",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        "value1": "HP_Bars_Remaining",
                        "compareType": "=",
                        "value2": 3
                      }
                    ]
                  },
                  "passedValue": 1
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