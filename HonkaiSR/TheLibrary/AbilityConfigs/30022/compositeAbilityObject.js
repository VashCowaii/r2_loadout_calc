const entityPageType = "misc"
const compositeAbilityObject = {
  "fullCharacterName": 30022,
  "trimCharacterName": 30022,
  "abilityList": [
    "30022_Modifiers",
    "30022_BattleEventAbility_Challenge_New_05"
  ],
  "abilityObject": {
    "30022_Modifiers": {
      "fileName": "30022_Modifiers",
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
    "30022_BattleEventAbility_Challenge_New_05": {
      "fileName": "30022_BattleEventAbility_Challenge_New_05",
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
          "modifier": "<a class=\"gModGreen\" id=\"822534768\">Modifier_BattleEventAbility_Challenge_New_05</a>"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__822534768\">Modifier_BattleEventAbility_Challenge_New_05</a>",
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
                  "maxTargets": 1,
                  "conditions": {
                    "name": "Target Has Lowest/Highest Value",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "partOf": {
                      "name": "Target Name",
                      "target": "{{Player Team All}}"
                    },
                    "compareValue": "&nbsp;<span class=\"descriptionNumberColor\">AttackSUM</span>&nbsp;",
                    "minOrMax": "Max"
                  },
                  "ifTargetFound": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-1777684731\">Standard_AllDamageTypeAddedRatio</a>[<span class=\"descriptionNumberColor\">DMG Boost</span>]",
                      "duration": {
                        "displayLines": "#BattleEvent_P2_ADF"
                      },
                      "valuePerStack": {
                        "MDF_PropertyValue": {
                          "displayLines": "#BattleEvent_P1_ADF"
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
    "beID": 30022,
    "team": "Neutral Team",
    "eventType": "Challenge Event",
    "icon": "999.png",
    "abilityList": [
      "BattleEventAbility_Challenge_New_05"
    ],
    "statOverrides": [
      {
        "statName": "&nbsp;<span class=\"descriptionNumberColor\">HPBase</span>&nbsp;",
        "value": 90
      }
    ],
    "spd": 100,
    "hardLevel": true,
    "actionDescription": "At the beginning of each Cycle, increases the DMG dealt by the ally with the highest ATK by <unbreak>#1[i]%</unbreak> for <unbreak>#2[i]</unbreak> turn(s).",
    "params": [
      0.6,
      1
    ]
  }
}