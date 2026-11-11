const entityPageType = "misc"
const compositeAbilityObject = {
  "fullCharacterName": 30109,
  "trimCharacterName": 30109,
  "abilityList": [
    "30109_Modifiers",
    "30109_BattleEventAbility_Challenge_Month_09"
  ],
  "abilityObject": {
    "30109_Modifiers": {
      "fileName": "30109_Modifiers",
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
          "for": "<a class=\"gModGreen\" id=\"mod__-1651606625\">MDF_RogueDLCAchievementListener</a>",
          "execute": [
            {
              "eventTrigger": "Turn [Owner]: Pre-action Phase",
              "execute": [
                {
                  "name": "Define Custom Variable",
                  "value": {
                    "displayLines": "(count + 1)"
                  },
                  "variableName": "count"
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "count",
                    "compareType": "=",
                    "value2": 10
                  },
                  "passed": [
                    {
                      "name": "Achievement",
                      "relatedAchievements": [
                        {
                          "title": "All Watched Over By Machines of Loving Grace",
                          "desc": "In Simulated Universe: Gold and Gears, endure #1[i] or more Resonance Extrapolation(s) in a single battle",
                          "rarity": "Low",
                          "type": "Hidden until Completion",
                          "params": [
                            10
                          ]
                        }
                      ]
                    },
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-1651606625\">MDF_RogueDLCAchievementListener</a>"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1216668349\">Challenge_Camera_AllTeam_Temp_2</a>",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1216668349\">Challenge_Camera_AllTeam_Temp_2</a>"
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1166335492\">Challenge_Camera_AllTeam_Temp_1</a>",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1166335492\">Challenge_Camera_AllTeam_Temp_1</a>"
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-592924316\">MRealityShow_BossHPBar</a>",
          "execute": [
            {
              "eventTrigger": "HP Change [Owner]",
              "execute": [
                {
                  "name": "Declare Custom Variable",
                  "variableName": "_HPBarHPRatio",
                  "readTarget": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "propertyName": "&nbsp;<span class=\"descriptionNumberColor\">HPCurrent%</span>&nbsp;"
                },
                {
                  "name": "Define Custom Variable with Stat",
                  "variableName": "_HPBarDirtyRatio",
                  "readTarget": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "value": "&nbsp;<span class=\"descriptionNumberColor\">HPBlock%</span>&nbsp;"
                },
                {
                  "name": "Define Custom Variable with Stat",
                  "variableName": "_HPBarDirtyDelta",
                  "readTarget": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "value": "&nbsp;<span class=\"descriptionNumberColor\">HPBlockFlat</span>&nbsp;"
                },
                {
                  "name": "Define Custom Variable with Stat",
                  "variableName": "_HPBarMaxHP",
                  "readTarget": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "value": "&nbsp;<span class=\"descriptionNumberColor\">HPMax</span>&nbsp;"
                },
                {
                  "name": "Define Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "value": {
                    "displayLines": "(9999 - &nbsp;<span class=\"descriptionFunctionColor\">MIN</span>(9999, &nbsp;<span class=\"descriptionFunctionColor\">CEIL</span>(((_HPBarHPRatio * 9999) / &nbsp;<span class=\"descriptionFunctionColor\">MAX</span>((1 - &nbsp;<span class=\"descriptionFunctionColor\">UNKNOWN_FUNCTION</span>((_HPBarDirtyRatio + (_HPBarDirtyDelta / &nbsp;<span class=\"descriptionFunctionColor\">MAX</span>(1, _HPBarMaxHP))))), 0.01)))))"
                  },
                  "variableName": "_HPBarBreakNew"
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": {
                      "displayLines": "_HPBarBreakNew"
                    },
                    "compareType": "NOT=",
                    "value2": {
                      "displayLines": "_HPBarBreakLast"
                    }
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "value": {
                        "displayLines": "_HPBarBreakNew"
                      },
                      "variableName": "_HPBarBreakLast"
                    }
                  ]
                }
              ]
            }
          ],
          "abilityValueChange": [
            {
              "name": "Ability Value Changes",
              "propertyName": "&nbsp;<span class=\"descriptionNumberColor\">HPBlock%</span>&nbsp;",
              "valueRanges": [
                {
                  "name": "Variable Value Range Conditions",
                  "onChange": [
                    {
                      "name": "Declare Custom Variable",
                      "variableName": "_HPBarHPRatio",
                      "readTarget": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "propertyName": "&nbsp;<span class=\"descriptionNumberColor\">HPCurrent%</span>&nbsp;"
                    },
                    {
                      "name": "Define Custom Variable with Stat",
                      "variableName": "_HPBarDirtyRatio",
                      "readTarget": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "value": "&nbsp;<span class=\"descriptionNumberColor\">HPBlock%</span>&nbsp;"
                    },
                    {
                      "name": "Define Custom Variable with Stat",
                      "variableName": "_HPBarDirtyDelta",
                      "readTarget": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "value": "&nbsp;<span class=\"descriptionNumberColor\">HPBlockFlat</span>&nbsp;"
                    },
                    {
                      "name": "Define Custom Variable with Stat",
                      "variableName": "_HPBarMaxHP",
                      "readTarget": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "value": "&nbsp;<span class=\"descriptionNumberColor\">HPMax</span>&nbsp;"
                    },
                    {
                      "name": "Define Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "value": {
                        "displayLines": "(9999 - &nbsp;<span class=\"descriptionFunctionColor\">MIN</span>(9999, &nbsp;<span class=\"descriptionFunctionColor\">CEIL</span>(((_HPBarHPRatio * 9999) / &nbsp;<span class=\"descriptionFunctionColor\">MAX</span>((1 - &nbsp;<span class=\"descriptionFunctionColor\">UNKNOWN_FUNCTION</span>((_HPBarDirtyRatio + (_HPBarDirtyDelta / &nbsp;<span class=\"descriptionFunctionColor\">MAX</span>(1, _HPBarMaxHP))))), 0.01)))))"
                      },
                      "variableName": "_HPBarBreakNew"
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value1": {
                          "displayLines": "_HPBarBreakNew"
                        },
                        "compareType": "NOT=",
                        "value2": {
                          "displayLines": "_HPBarBreakLast"
                        }
                      },
                      "passed": [
                        {
                          "name": "Define Custom Variable",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "value": {
                            "displayLines": "_HPBarBreakNew"
                          },
                          "variableName": "_HPBarBreakLast"
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              "name": "Ability Value Changes",
              "propertyName": "&nbsp;<span class=\"descriptionNumberColor\">HPBlockFlat</span>&nbsp;",
              "valueRanges": [
                {
                  "name": "Variable Value Range Conditions",
                  "onChange": [
                    {
                      "name": "Declare Custom Variable",
                      "variableName": "_HPBarHPRatio",
                      "readTarget": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "propertyName": "&nbsp;<span class=\"descriptionNumberColor\">HPCurrent%</span>&nbsp;"
                    },
                    {
                      "name": "Define Custom Variable with Stat",
                      "variableName": "_HPBarDirtyRatio",
                      "readTarget": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "value": "&nbsp;<span class=\"descriptionNumberColor\">HPBlock%</span>&nbsp;"
                    },
                    {
                      "name": "Define Custom Variable with Stat",
                      "variableName": "_HPBarDirtyDelta",
                      "readTarget": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "value": "&nbsp;<span class=\"descriptionNumberColor\">HPBlockFlat</span>&nbsp;"
                    },
                    {
                      "name": "Define Custom Variable with Stat",
                      "variableName": "_HPBarMaxHP",
                      "readTarget": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "value": "&nbsp;<span class=\"descriptionNumberColor\">HPMax</span>&nbsp;"
                    },
                    {
                      "name": "Define Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "value": {
                        "displayLines": "(9999 - &nbsp;<span class=\"descriptionFunctionColor\">MIN</span>(9999, &nbsp;<span class=\"descriptionFunctionColor\">CEIL</span>(((_HPBarHPRatio * 9999) / &nbsp;<span class=\"descriptionFunctionColor\">MAX</span>((1 - &nbsp;<span class=\"descriptionFunctionColor\">UNKNOWN_FUNCTION</span>((_HPBarDirtyRatio + (_HPBarDirtyDelta / &nbsp;<span class=\"descriptionFunctionColor\">MAX</span>(1, _HPBarMaxHP))))), 0.01)))))"
                      },
                      "variableName": "_HPBarBreakNew"
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value1": {
                          "displayLines": "_HPBarBreakNew"
                        },
                        "compareType": "NOT=",
                        "value2": {
                          "displayLines": "_HPBarBreakLast"
                        }
                      },
                      "passed": [
                        {
                          "name": "Define Custom Variable",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "value": {
                            "displayLines": "_HPBarBreakNew"
                          },
                          "variableName": "_HPBarBreakLast"
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
    "30109_BattleEventAbility_Challenge_Month_09": {
      "fileName": "30109_BattleEventAbility_Challenge_Month_09",
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
          "modifier": "<a class=\"gModGreen\" id=\"-1077495204\">Modifier_BattleEventAbility_Challenge_Month_09</a>"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1553026486\">MLevel_BattleEventAbility_Challenge_Month_09</a>[<span class=\"descriptionNumberColor\">ATK Boost</span>]",
          "stackType": "ReplaceByCaster",
          "description": "ATK +<span class=\"descriptionNumberColor\">ADF_1</span>.",
          "type": "Buff",
          "effectName": "ATK Boost",
          "statusName": "ATK Boost",
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
                  "propertyName": "&nbsp;<span class=\"descriptionNumberColor\">ATK%</span>&nbsp;",
                  "statValue": {
                    "displayLines": "ADF_1"
                  }
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1077495204\">Modifier_BattleEventAbility_Challenge_Month_09</a>",
          "execute": [
            {
              "eventTrigger": "Turn [Owner]: Pre-action Phase",
              "execute": [
                {
                  "name": "Trigger Ability",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "inherentTarget": {
                    "name": "Target Name",
                    "target": "{{Player Team Entity}}"
                  },
                  "ability": "BattleEventAbility_Camear_AllLightTeam",
                  "isTrigger": true
                },
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Player Team All}}"
                  },
                  "searchRandom": true,
                  "maxTargets": 4,
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "value1": "CurrentHP%",
                    "compareType": ">",
                    "value2": {
                      "displayLines": "#BattleEvent_P1_ADF"
                    }
                  },
                  "ifTargetFound": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"1553026486\">MLevel_BattleEventAbility_Challenge_Month_09</a>[<span class=\"descriptionNumberColor\">ATK Boost</span>]",
                      "duration": {
                        "displayLines": "#BattleEvent_P3_ADF"
                      },
                      "valuePerStack": {
                        "ADF_1": {
                          "displayLines": "#BattleEvent_P2_ADF"
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
  },
  "enemyData": {},
  "isBattleEvent": true,
  "finalData": {
    "name": "Battle Event Construction",
    "beID": 30109,
    "team": "Neutral Team",
    "eventType": "Challenge Event",
    "icon": "999.png",
    "abilityList": [
      "BattleEventAbility_Challenge_Month_09"
    ],
    "statOverrides": [
      {
        "statName": "&nbsp;<span class=\"descriptionNumberColor\">HPBase</span>&nbsp;",
        "value": 90
      }
    ],
    "spd": 100,
    "hardLevel": true,
    "actionDescription": "At the start of every Cycle, allies whose current HP percentage is greater than <unbreak>#1[i]%</unbreak> increase their ATK by <unbreak>#2[i]%</unbreak> for <unbreak>#3[i]</unbreak> turn(s).",
    "params": [
      0.8,
      0.5,
      1
    ]
  }
}