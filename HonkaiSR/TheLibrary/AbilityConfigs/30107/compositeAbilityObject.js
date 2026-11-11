const entityPageType = "misc"
const compositeAbilityObject = {
  "fullCharacterName": 30107,
  "trimCharacterName": 30107,
  "abilityList": [
    "30107_Modifiers",
    "30107_BattleEventAbility_Challenge_Month_07"
  ],
  "abilityObject": {
    "30107_Modifiers": {
      "fileName": "30107_Modifiers",
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
    "30107_BattleEventAbility_Challenge_Month_07": {
      "fileName": "30107_BattleEventAbility_Challenge_Month_07",
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
          "modifier": "<a class=\"gModGreen\" id=\"-976829490\">Modifier_BattleEventAbility_Challenge_Month_07</a>"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1720802676\">MLevel_BattleEventAbility_Challenge_Month_07</a>[<span class=\"descriptionNumberColor\">Memory Imprint</span>]",
          "stackType": "ReplaceByCaster",
          "modifierFlags": [
            "STAT_Fatigue"
          ],
          "description": "Each stack decreases DMG dealt by <span class=\"descriptionNumberColor\">ADF_1</span>, up to <span class=\"descriptionNumberColor\">ADF_2</span> stack(s).",
          "type": "Debuff",
          "effectName": "Memory Imprint",
          "statusName": "Memory Imprint",
          "stackLimit": 5,
          "addStacksPerTrigger": 1,
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
                  "name": "Stack Target Stat Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "propertyName": "&nbsp;<span class=\"descriptionNumberColor\">Weaken%</span>&nbsp;",
                  "statValue": {
                    "displayLines": "(MDF_Layer * ADF_1)"
                  }
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-976829490\">Modifier_BattleEventAbility_Challenge_Month_07</a>",
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
                    "target": "{{Enemy Team All}}"
                  },
                  "ability": "BattleEventAbility_Camear_AllDarkTeam",
                  "isTrigger": true
                },
                {
                  "name": "Trigger Ability",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "inherentTarget": {
                    "name": "Target Name",
                    "target": "{{Enemy Team All}}"
                  },
                  "ability": "BattleEventAbility_Camear_AllDarkTeam_RemoveModifier",
                  "isTrigger": true
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Enemy Team All}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1720802676\">MLevel_BattleEventAbility_Challenge_Month_07</a>[<span class=\"descriptionNumberColor\">Memory Imprint</span>]"
                },
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Enemy Team All}}"
                  },
                  "searchRandom": true,
                  "maxTargets": 5,
                  "ifTargetFound": [
                    {
                      "name": "Define Custom Variable with Status Counter",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "variableName": "_DebuffNumber"
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"1720802676\">MLevel_BattleEventAbility_Challenge_Month_07</a>[<span class=\"descriptionNumberColor\">Memory Imprint</span>]",
                      "stackLimit": {
                        "displayLines": "#BattleEvent_P2_ADF"
                      },
                      "valuePerStack": {
                        "ADF_1": {
                          "displayLines": "#BattleEvent_P1_ADF"
                        },
                        "ADF_2": {
                          "displayLines": "#BattleEvent_P2_ADF"
                        }
                      },
                      "addStacksPerTrigger": {
                        "displayLines": "(_DebuffNumber + 1)"
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
    "beID": 30107,
    "team": "Neutral Team",
    "eventType": "Challenge Event",
    "icon": "999.png",
    "abilityList": [
      "BattleEventAbility_Challenge_Month_07"
    ],
    "statOverrides": [
      {
        "statName": "&nbsp;<span class=\"descriptionNumberColor\">HPBase</span>&nbsp;",
        "value": 90
      }
    ],
    "spd": 100,
    "hardLevel": true,
    "actionDescription": "Apply \"Memory Imprint\" to all enemies at the beginning of each Cycle. For each additional debuff currently on the enemy, apply 1 extra stack of \"Memory Imprint\" to that enemy. Each stack reduces the target's DMG dealt by <unbreak>#1[i]%</unbreak> for a maximum of <unbreak>#2[i]</unbreak> stacks. This effect lasts until the start of the next Cycle.",
    "params": [
      0.04,
      5
    ]
  }
}