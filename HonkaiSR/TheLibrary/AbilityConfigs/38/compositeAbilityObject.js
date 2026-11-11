const entityPageType = "misc"
const compositeAbilityObject = {
  "fullCharacterName": 38,
  "trimCharacterName": 38,
  "abilityList": [
    "38_Modifiers",
    "38_BattleEventAbility_Challenge_Month_01",
    "38_BattleEventAbility_Challenge_22"
  ],
  "abilityObject": {
    "38_Modifiers": {
      "fileName": "38_Modifiers",
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
    "38_BattleEventAbility_Challenge_Month_01": {
      "fileName": "38_BattleEventAbility_Challenge_Month_01",
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
          "modifier": "<a class=\"gModGreen\" id=\"-943274252\">Modifier_BattleEventAbility_Challenge_Month_01</a>"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1687247438\">MLevel_BattleEventAbility_Challenge_Month_01</a>[<span class=\"descriptionNumberColor\">ATK Boost</span>]",
          "stackType": "ReplaceByCaster",
          "description": "For the current Cycle, ATK increases by <span class=\"descriptionNumberColor\">ADF_1</span>.",
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
          "for": "<a class=\"gModGreen\" id=\"mod__-943274252\">Modifier_BattleEventAbility_Challenge_Month_01</a>",
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
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Player Team All}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1687247438\">MLevel_BattleEventAbility_Challenge_Month_01</a>[<span class=\"descriptionNumberColor\">ATK Boost</span>]"
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
                    "compareValue": "&nbsp;<span class=\"descriptionNumberColor\">HPCurrent</span>&nbsp;",
                    "minOrMax": "Max"
                  },
                  "ifTargetFound": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"1687247438\">MLevel_BattleEventAbility_Challenge_Month_01</a>[<span class=\"descriptionNumberColor\">ATK Boost</span>]",
                      "valuePerStack": {
                        "ADF_1": {
                          "displayLines": "#BattleEvent_P1_ADF"
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
                    "compareValue": "&nbsp;<span class=\"descriptionNumberColor\">HPCurrent</span>&nbsp;",
                    "minOrMax": "Min"
                  },
                  "ifTargetFound": [
                    {
                      "name": "Heal",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "healPercent": {
                        "displayLines": "#BattleEvent_P2_ADF"
                      },
                      "formula": "Heal from Target MaxHP"
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    },
    "38_BattleEventAbility_Challenge_22": {
      "fileName": "38_BattleEventAbility_Challenge_22",
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
          "modifier": "<a class=\"gModGreen\" id=\"1382265216\">Modifier_BattleEventAbility_Challenge_22</a>"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1448158227\">Modifier_BattleEventAbility_Challenge_22_Sub</a>",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Target is Pathstrider",
                    "path": [
                      "Erudition"
                    ],
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    }
                  },
                  "passed": [
                    {
                      "name": "Stack Target Stat Value",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "propertyName": "&nbsp;<span class=\"descriptionNumberColor\">DamageAll</span>&nbsp;",
                      "statValue": {
                        "displayLines": "#BattleEvent_P1_ADF"
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
          "for": "<a class=\"gModGreen\" id=\"mod__1382265216\">Modifier_BattleEventAbility_Challenge_22</a>",
          "execute": [
            {
              "eventTrigger": "Entity Created [Anyone]",
              "execute": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Player Team All}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1448158227\">Modifier_BattleEventAbility_Challenge_22_Sub</a>"
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
    "beID": 38,
    "team": "Neutral Team",
    "eventType": "Challenge Event",
    "icon": "999.png",
    "abilityList": [
      "BattleEventAbility_Challenge_22",
      "BattleEventAbility_Challenge_Month_01"
    ],
    "statOverrides": [
      {
        "statName": "&nbsp;<span class=\"descriptionNumberColor\">HPBase</span>&nbsp;",
        "value": 90
      }
    ],
    "spd": 100,
    "hardLevel": true,
    "params": [
      0.3,
      0,
      0,
      0,
      0.1,
      0.2,
      3,
      3
    ]
  }
}