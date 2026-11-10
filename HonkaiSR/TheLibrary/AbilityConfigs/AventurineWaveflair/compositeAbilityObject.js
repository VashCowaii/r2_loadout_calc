const entityPageType = "char"
const compositeAbilityObject = {
  "fullCharacterName": "Aventurine • Waveflair",
  "trimCharacterName": "AventurineWaveflair",
  "abilityList": [
    "AventurineWaveflair_Modifiers",
    "AventurineWaveflair_LocalPlayer_StandardAbility_AttackBreak",
    "AventurineWaveflair_LocalPlayer_AventurineW_TechniqueUsage",
    "AventurineWaveflair_LocalPlayer_AventurineW_NormalAtk01",
    "AventurineWaveflair_AventurineW_TechniqueInLevel",
    "AventurineWaveflair_AventurineW_PassiveAbility01",
    "AventurineWaveflair_AventurineW_ElationAbility_Part12",
    "AventurineWaveflair_AventurineW_ElationAbility_Part11",
    "AventurineWaveflair_AventurineW_ElationAbility_Part02",
    "AventurineWaveflair_AventurineW_ElationAbility_Part01",
    "AventurineWaveflair_AventurineW_Ability03_Part02",
    "AventurineWaveflair_AventurineW_Ability03_Part01",
    "AventurineWaveflair_AventurineW_Ability03_EnterReady",
    "AventurineWaveflair_AventurineW_Ability02_Part02",
    "AventurineWaveflair_AventurineW_Ability02_Part01",
    "AventurineWaveflair_AventurineW_Ability01_Part02",
    "AventurineWaveflair_AventurineW_Ability01_Part01",
    "AventurineWaveflair_Functions"
  ],
  "abilityObject": {
    "AventurineWaveflair_Modifiers": {
      "fileName": "AventurineWaveflair_Modifiers",
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
          "for": "<a class=\"gModGreen\" id=\"mod__-322154605\">ADV_Modifier_Maze_AventurineW_HolyShield</a>",
          "counter": 1,
          "stackType": "Merge",
          "modifierFlags": [
            "HolyShield"
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1084813003\">ADV_StageAbility_Maze_AventurineW_00</a>",
          "counter": 1,
          "stackType": "Merge"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__192684333\">AventurineW_PointB2_PropertyRatio</a>[<span class=\"descriptionNumberColor\">Revel in Raging Tides</span>]",
          "stackType": "ReplaceByCaster",
          "description": "Elation increases by <span class=\"descriptionNumberColor\">MDF_PropertyValue</span>.",
          "type": "Buff",
          "effectName": "Elation Boost",
          "statusName": "Revel in Raging Tides",
          "subModList": [
            {
              "name": "Add Sub-Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{All Team Members with Unselectable Team Members(Exclude Self)}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"2043488481\">AventurineW_PointB2_TeammatePropertyRatio</a>[<span class=\"descriptionNumberColor\">Revel in Raging Tides</span>]",
              "aliveOnly": "True",
              "haloStatus": true,
              "detectRevive": true,
              "valuePerStack": {
                "MDF_PropertyValue": {
                  "displayLines": "0.2"
                }
              }
            }
          ],
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
                  "propertyName": "&nbsp;<span class=\"descriptionNumberColor\">ElationDMGAll</span>&nbsp;",
                  "statValue": {
                    "displayLines": "MDF_PropertyValue"
                  },
                  "isRefresh": true
                }
              ]
            },
            {
              "eventTrigger": "Get Revived [Owner]",
              "execute": [
                {
                  "name": "Stack Target Stat Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "propertyName": "&nbsp;<span class=\"descriptionNumberColor\">ElationDMGAll</span>&nbsp;",
                  "statValue": {
                    "displayLines": "MDF_PropertyValue"
                  },
                  "isRefresh": true
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__2043488481\">AventurineW_PointB2_TeammatePropertyRatio</a>[<span class=\"descriptionNumberColor\">Revel in Raging Tides</span>]",
          "modifierFlags": [
            "RemoveWhenCasterDead"
          ],
          "stackData": [
            "MDF_PropertyValue"
          ],
          "description": "Elation increases by <span class=\"descriptionNumberColor\">MDF_PropertyValue</span>.",
          "type": "Buff",
          "effectName": "Elation Boost",
          "statusName": "Revel in Raging Tides",
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
                  "propertyName": "&nbsp;<span class=\"descriptionNumberColor\">ElationDMGAll</span>&nbsp;",
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
          "for": "<a class=\"gModGreen\" id=\"mod__1134960204\">_M_AventurineW_ElationCharacterPropertyListen</a>",
          "execute": [
            {
              "eventTrigger": "Enter Battle",
              "priorityLevel": -80,
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "Wave Count",
                    "compareType": "=",
                    "value2": 1
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "scope": "ContextCaster",
                      "value": 0,
                      "variableName": "ElationCharacterCount"
                    },
                    {
                      "name": "Find New Target",
                      "from": {
                        "name": "Target Name",
                        "target": "{{All Team Members with Unselectables}}.[[removeMemosprite]] - {{Caster}}"
                      },
                      "includeDyingTargets": true,
                      "conditions": {
                        "name": "Target is Pathstrider",
                        "path": [
                          "Elation"
                        ],
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        }
                      },
                      "ifTargetFound": [
                        {
                          "name": "Define Custom Variable with Added Value",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "variableName": "ElationCharacterCount",
                          "context": "ContextCaster",
                          "value": 1,
                          "max": 4
                        }
                      ]
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "ElationCharacterCount",
                        "compareType": ">",
                        "value2": 0
                      },
                      "passed": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"192684333\">AventurineW_PointB2_PropertyRatio</a>[<span class=\"descriptionNumberColor\">Revel in Raging Tides</span>]",
                          "valuePerStack": {
                            "MDF_PropertyValue": {
                              "displayLines": "(0.8 + 0.2)"
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
                          "modifier": "<a class=\"gModGreen\" id=\"-826457922\">AventurineW_PassiveHasNoElationTeammate</a>[<span class=\"descriptionNumberColor\">Revel in Raging Tides</span>]",
                          "referenceModifier": "<a class=\"gModGreen\" id=\"1832901043\">MReference_Empty</a>",
                          "valuePerStack": {
                            "MDF_Count": 0
                          }
                        },
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"-275485561\">_AventurineW_RegardAsInsert_OnEnterBattle</a>"
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
          "for": "<a class=\"gModGreen\" id=\"mod__-275485561\">_AventurineW_RegardAsInsert_OnEnterBattle</a>",
          "latentQueue": [
            "ElationCharacterCount"
          ],
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
                        "name": "Skill Type",
                        "skillType": "Elation"
                      },
                      {
                        "name": "Compare: Variable",
                        "value1": "ElationCharacterCount",
                        "compareType": "=",
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
                      "modifier": "<a class=\"gModGreen\" id=\"-1410719031\">AventurineW_ElationAbilityRegardAsInsert</a>"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-784921867\">_M_AventurineW_ListenCharacterAfterCastAbility</a>",
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
                        "name": "Compare: Variable",
                        "value1": "_SpecialAttackTriggerFlag",
                        "compareType": "=",
                        "value2": 0,
                        "contextScope": "ContextModifier"
                      },
                      {
                        "name": "OR",
                        "conditionList": [
                          {
                            "name": "Attack Type",
                            "attackTypes": [
                              "Follow-up"
                            ]
                          }
                        ]
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "scope": "ContextModifier",
                      "value": 1,
                      "variableName": "_SpecialAttackTriggerFlag"
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Attack Start [Owner]",
              "execute": [
                {
                  "name": "Define Custom Variable",
                  "scope": "ContextModifier",
                  "value": 0,
                  "variableName": "_SpecialAttackTriggerFlag"
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
                    "value1": "_SpecialAttackTriggerFlag",
                    "compareType": "=",
                    "value2": 1,
                    "contextScope": "ContextModifier"
                  },
                  "passed": [
                    {
                      "name": "Use Custom Character Function",
                      "functionName": "<a class=\"gTempYellow\" id=\"-856938281\">AventurineW_SpecialAttackExtraEnergyPoint</a>"
                    }
                  ]
                },
                {
                  "name": "Define Custom Variable",
                  "scope": "ContextModifier",
                  "value": 0,
                  "variableName": "_SpecialAttackTriggerFlag"
                }
              ]
            },
            {
              "eventTrigger": "Ability Use [Owner]: End",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "OR",
                    "conditionList": [
                      {
                        "name": "Skill Type",
                        "skillType": "Ultimate"
                      },
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
                  "passed": [
                    {
                      "name": "Use Custom Character Function",
                      "functionName": "<a class=\"gTempYellow\" id=\"-856938281\">AventurineW_SpecialAttackExtraEnergyPoint</a>"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__375705807\">_M_AventurineW_ListenCharacterAfterAttack</a>",
          "execute": [
            {
              "eventTrigger": "Attack DMG End [Owner]",
              "execute": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1333939602\">AventurineW_Passive_Energy</a>",
                  "stackLimit": {
                    "displayLines": "_MaxEnergyPoint"
                  },
                  "addStacksPerTrigger": {
                    "displayLines": "1"
                  }
                },
                {
                  "name": "Adjust Team Punchline Value",
                  "value": {
                    "displayLines": "1"
                  },
                  "adjustment": "Add",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  }
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Trace Activated",
                        "conditionList": "Revel in Raging Tides"
                      },
                      {
                        "name": "Compare: Variable",
                        "value1": "ElationCharacterCount",
                        "compareType": "=",
                        "value2": 0
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Use Custom Character Function",
                      "functionName": "<a class=\"gTempYellow\" id=\"818871295\">AddElationEchoPoint</a>",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "variables": {
                        "AddValue": {
                          "displayLines": "2"
                        }
                      }
                    },
                    {
                      "name": "Adjust Team Punchline Value",
                      "value": {
                        "displayLines": "1"
                      },
                      "adjustment": "Add",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      }
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Aha Instant: Aha Battle Event}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"1632287215\">AventurineW_PointB2_SpeedUp</a>",
                      "valuePerStack": {
                        "MDF_PropertyValue": {
                          "displayLines": "25"
                        },
                        "_StackNum": 0
                      },
                      "addStacksPerTrigger": {
                        "displayLines": "1"
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
          "for": "<a class=\"gModGreen\" id=\"mod__2141093581\">AventurineW_Passive</a>",
          "subModList": [
            {
              "name": "Add Sub-Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{All Team Members with Unselectables}} - {{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"375705807\">_M_AventurineW_ListenCharacterAfterAttack</a>",
              "aliveOnly": "True",
              "haloStatus": true
            },
            {
              "name": "Add Sub-Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{All Team Members with Unselectables}} - {{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-784921867\">_M_AventurineW_ListenCharacterAfterCastAbility</a>",
              "aliveOnly": "True",
              "haloStatus": true,
              "conditions": {
                "name": "Trace Activated",
                "conditionList": "Sift Through Gilded Dreams",
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                }
              }
            },
            {
              "name": "Add Sub-Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1134960204\">_M_AventurineW_ElationCharacterPropertyListen</a>",
              "aliveOnly": "True",
              "conditions": {
                "name": "Trace Activated",
                "conditionList": "Revel in Raging Tides",
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                }
              }
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__466307376\">AventurineW_ElationConvert_Sub</a>[<span class=\"descriptionNumberColor\">Party in Perfect Paradise</span>]",
          "stackType": "ReplaceByCaster",
          "description": "Elation increases by <span class=\"descriptionNumberColor\">MDF_PropertyRatio</span>.",
          "type": "Buff",
          "effectName": "Elation Boost",
          "statusName": "Party in Perfect Paradise",
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
                  "propertyName": "&nbsp;<span class=\"descriptionNumberColor\">ElationDMGAll</span>&nbsp;",
                  "statValue": {
                    "displayLines": "MDF_PropertyRatio"
                  }
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1237850841\">AventurineW_ElationConvert</a>",
          "stackType": "ReplaceByCaster",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Define Custom Variable with Stat",
                  "variableName": "_CurrentSpeed",
                  "readTarget": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "value": "&nbsp;<span class=\"descriptionNumberColor\">Speed</span>&nbsp;"
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "_CurrentSpeed",
                    "compareType": ">=",
                    "value2": {
                      "displayLines": "140"
                    }
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "value": {
                        "displayLines": "0.3"
                      },
                      "variableName": "_EPRatioBase"
                    },
                    {
                      "name": "Define Custom Variable with Stat",
                      "variableName": "_CurrentSpeedConvert",
                      "readTarget": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "value": "&nbsp;<span class=\"descriptionNumberColor\">SpeedConverted</span>&nbsp;"
                    },
                    {
                      "name": "Define Custom Variable",
                      "value": {
                        "displayLines": "(_CurrentSpeed - _CurrentSpeedConvert)"
                      },
                      "variableName": "_CurrentSpeed"
                    },
                    {
                      "name": "Define Custom Variable",
                      "value": {
                        "displayLines": "(_CurrentSpeed - 140)"
                      },
                      "variableName": "_OverCountSpeedValue"
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "_OverCountSpeedValue",
                        "compareType": ">=",
                        "value2": {
                          "displayLines": "200"
                        }
                      },
                      "passed": [
                        {
                          "name": "Define Custom Variable",
                          "value": {
                            "displayLines": "200"
                          },
                          "variableName": "_OverCountSpeedValue"
                        }
                      ]
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "_OverCountSpeedValue",
                        "compareType": ">=",
                        "value2": {
                          "displayLines": "1"
                        }
                      },
                      "passed": [
                        {
                          "name": "Define Custom Variable",
                          "value": {
                            "displayLines": "(&nbsp;<span class=\"descriptionFunctionColor\">FLOOR</span>((_OverCountSpeedValue / 1)) * 0.01)"
                          },
                          "variableName": "_EPRatioAdd"
                        }
                      ],
                      "failed": [
                        {
                          "name": "Define Custom Variable",
                          "value": 0,
                          "variableName": "_EPRatioAdd"
                        }
                      ]
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"466307376\">AventurineW_ElationConvert_Sub</a>[<span class=\"descriptionNumberColor\">Party in Perfect Paradise</span>]",
                      "valuePerStack": {
                        "MDF_PropertyRatio": {
                          "displayLines": "(_EPRatioBase + _EPRatioAdd)"
                        }
                      }
                    }
                  ],
                  "failed": [
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"466307376\">AventurineW_ElationConvert_Sub</a>[<span class=\"descriptionNumberColor\">Party in Perfect Paradise</span>]"
                    }
                  ]
                }
              ]
            }
          ],
          "abilityValueChange": [
            {
              "name": "Ability Value Changes",
              "propertyName": "&nbsp;<span class=\"descriptionNumberColor\">SPD%</span>&nbsp;",
              "valueRanges": [
                {
                  "name": "Variable Value Range Conditions",
                  "onChange": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"1237850841\">AventurineW_ElationConvert</a>"
                    }
                  ]
                }
              ]
            },
            {
              "name": "Ability Value Changes",
              "propertyName": "&nbsp;<span class=\"descriptionNumberColor\">SPDFlat</span>&nbsp;",
              "valueRanges": [
                {
                  "name": "Variable Value Range Conditions",
                  "onChange": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"1237850841\">AventurineW_ElationConvert</a>"
                    }
                  ]
                }
              ]
            },
            {
              "name": "Ability Value Changes",
              "propertyName": "&nbsp;<span class=\"descriptionNumberColor\">SpeedConverted</span>&nbsp;",
              "valueRanges": [
                {
                  "name": "Variable Value Range Conditions",
                  "onChange": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"1237850841\">AventurineW_ElationConvert</a>"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1403476704\">AventurineW_Eidolon2</a>",
          "stackType": "ReplaceByCaster",
          "execute": [
            {
              "eventTrigger": "Ability Use [Owner]: End",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "OR",
                    "conditionList": [
                      {
                        "name": "Skill Type",
                        "skillType": "Elation"
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
                      "modifier": "<a class=\"gModGreen\" id=\"-1333939602\">AventurineW_Passive_Energy</a>",
                      "stackLimit": {
                        "displayLines": "_MaxEnergyPoint"
                      },
                      "addStacksPerTrigger": {
                        "displayLines": "4"
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
          "for": "<a class=\"gModGreen\" id=\"mod__-1353143847\">AventurineW_Eidolon1</a>[<span class=\"descriptionNumberColor\">A Holiday on the Line</span>]",
          "stackType": "ReplaceByCaster",
          "description": "All-Type RES PEN increases by <span class=\"descriptionNumberColor\">MDF_PropertyValue</span>.",
          "type": "Buff",
          "statusName": "A Holiday on the Line",
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
                  "propertyName": "&nbsp;<span class=\"descriptionNumberColor\">ResistanceAllPEN</span>&nbsp;",
                  "statValue": {
                    "displayLines": "MDF_PropertyValue"
                  },
                  "isRefresh": true
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1946436058\">AventurineW_Eidolon6_ElationDamageExtra</a>[<span class=\"descriptionNumberColor\">The Past in Fast Lane</span>]",
          "stackType": "ReplaceByCaster",
          "description": "Elation DMG merrymakes by <span class=\"descriptionNumberColor\">MDF_PropertyValue</span>.",
          "type": "Buff",
          "statusName": "The Past in Fast Lane",
          "execute": [
            {
              "eventTrigger": "Deal Damage Start [Owner]: Any",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Attack Type",
                    "attackTypes": [
                      "Elation DMG"
                    ]
                  },
                  "passed": [
                    {
                      "name": "Adjust Target Stats",
                      "modifiedValuesArray": [
                        {
                          "on": "Attacker",
                          "statName": "&nbsp;<span class=\"descriptionNumberColor\">MerryMake</span>&nbsp;",
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
          "for": "<a class=\"gModGreen\" id=\"mod__-1302810990\">AventurineW_Eidolon4</a>[<span class=\"descriptionNumberColor\">Sunlight Runs No Tab</span>]",
          "stackType": "ReplaceByCaster",
          "description": "When dealing DMG, ignores <span class=\"descriptionNumberColor\">MDF_PropertyRatio</span> of the target's DEF.",
          "type": "Buff",
          "statusName": "Sunlight Runs No Tab",
          "execute": [
            {
              "eventTrigger": "Deal Damage Start [Owner]: Any",
              "execute": [
                {
                  "name": "Adjust Target Stats",
                  "modifiedValuesArray": [
                    {
                      "on": "Defender",
                      "statName": "&nbsp;<span class=\"descriptionNumberColor\">DEF%</span>&nbsp;",
                      "value": "(-1 * MDF_PropertyRatio)"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__90748474\">AventurineW_Tree03_TriggerNum</a>[<span class=\"descriptionNumberColor\">Sift Through Gilded Dreams</span>]",
          "description": "The \"Sift Through Gilded Dreams\" effect can be triggered <span class=\"descriptionNumberColor\">MDF_Count</span> more time(s).",
          "type": "Other",
          "statusName": "Sift Through Gilded Dreams",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Define Custom Variable",
                  "value": {
                    "displayLines": "(6 - MDF_CastNum)"
                  },
                  "variableName": "MDF_Count"
                }
              ]
            }
          ],
          "variableValueChange": [
            {
              "name": "Variable Value Changes",
              "variableName": "MDF_CastNum",
              "scope": "ContextCaster",
              "valueRanges": [
                {
                  "name": "Variable Value Range Conditions",
                  "minValue": 0,
                  "maxValue": {
                    "displayLines": "6"
                  },
                  "includeMaxValueInRange": true,
                  "onChange": [
                    {
                      "name": "Define Custom Variable",
                      "value": {
                        "displayLines": "(6 - MDF_CastNum)"
                      },
                      "variableName": "MDF_Count"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1810925585\">AventurineW_InsertElationAbilitySave</a>",
          "modifierFlags": [
            "CustomEvent_InfiniteRefresh"
          ],
          "execute": [
            {
              "eventTrigger": "Action Choice Window [Anyone]",
              "execute": [
                {
                  "name": "Define Modifier-Specific Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifierName": "<a class=\"gModGreen\" id=\"-1333939602\">AventurineW_Passive_Energy</a>",
                  "variableName": "_AlreadyTriggerElationSkill",
                  "value": 0
                },
                {
                  "name": "Define Modifier-Specific Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifierName": "<a class=\"gModGreen\" id=\"-1333939602\">AventurineW_Passive_Energy</a>",
                  "variableName": "MDF_LayerModTriggerLayer",
                  "value": {
                    "displayLines": "0"
                  }
                },
                "Modifier Deletes Itself"
              ]
            },
            {
              "eventTrigger": "Enter Battle",
              "priorityLevel": -55,
              "execute": [
                {
                  "name": "Use Custom Character Function",
                  "functionName": "<a class=\"gTempYellow\" id=\"1560090957\">AventurineW_InsertElationAbilitylRetarget</a>"
                }
              ]
            },
            {
              "eventTrigger": "Custom Event",
              "execute": [
                {
                  "name": "Use Custom Character Function",
                  "functionName": "<a class=\"gTempYellow\" id=\"1560090957\">AventurineW_InsertElationAbilitylRetarget</a>"
                }
              ]
            },
            {
              "eventTrigger": "Batch: Enemy Arrival",
              "execute": [
                {
                  "name": "Use Custom Character Function",
                  "functionName": "<a class=\"gTempYellow\" id=\"1560090957\">AventurineW_InsertElationAbilitylRetarget</a>"
                }
              ]
            },
            {
              "eventTrigger": "Injected Ability Use [Anyone]: End",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Compare: Target",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "target2": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        "invertCondition": true
                      },
                      {
                        "name": "Living State",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        "livingState": "Mask_AliveOrRevivable"
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Use Custom Character Function",
                      "functionName": "<a class=\"gTempYellow\" id=\"1560090957\">AventurineW_InsertElationAbilitylRetarget</a>"
                    }
                  ]
                }
              ]
            }
          ],
          "modifierFunctions": [
            {
              "name": "CharacterFunctions",
              "functionName": "<a class=\"gTempYellow\" id=\"fun__1560090957\">AventurineW_InsertElationAbilitylRetarget</a>",
              "parse": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Enemies Still Alive",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    }
                  },
                  "passed": [
                    {
                      "name": "Inject Elation Skill Extra-Turn (Default priority)",
                      "eventType": "AventurineW_00_ElationSkill",
                      "punchlineFixed": {
                        "displayLines": "20"
                      },
                      "actionTag": [
                        "EnergyTrigger_ElationAbility"
                      ],
                      "execute": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"-1810925585\">AventurineW_InsertElationAbilitySave</a>"
                        }
                      ],
                      "abortFlags": [
                        "STAT_CTRL",
                        "DisableAction"
                      ]
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
          "for": "<a class=\"gModGreen\" id=\"mod__-1333939602\">AventurineW_Passive_Energy</a>",
          "stackType": "ReplaceByCaster",
          "modifierFlags": [
            "CustomEvent_InfiniteRefresh"
          ],
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
                    "compareType": "<=",
                    "value2": 0
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "scope": "ContextModifier",
                      "value": 0,
                      "variableName": "_AlreadyTriggerElationSkill"
                    }
                  ]
                },
                {
                  "name": "Define Custom Variable",
                  "scope": "ContextModifier",
                  "value": {
                    "displayLines": "&nbsp;<span class=\"descriptionFunctionColor\">FLOOR</span>((MDF_Layer / 10))"
                  },
                  "variableName": "MDF_LayerMod"
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Eidolon Activated",
                    "eidolon": 1
                  },
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "AND",
                        "conditionList": [
                          {
                            "name": "Compare: Variable",
                            "value1": "MDF_LayerMod",
                            "compareType": ">=",
                            "value2": 1
                          },
                          {
                            "name": "Compare: Variable",
                            "value1": "MDF_LayerMod",
                            "compareType": "NOT=",
                            "value2": {
                              "displayLines": "MDF_LayerModTriggerLayer"
                            },
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
                          "name": "Inject Elation Skill Extra-Turn (Default priority)",
                          "eventType": "AventurineW_00_ElationSkill",
                          "punchlineFixed": {
                            "displayLines": "20"
                          },
                          "actionTag": [
                            "EnergyTrigger_ElationAbility"
                          ],
                          "execute": [
                            {
                              "name": "Add Events/Bonuses",
                              "to": {
                                "name": "Target Name",
                                "target": "{{Caster}}"
                              },
                              "modifier": "<a class=\"gModGreen\" id=\"-1810925585\">AventurineW_InsertElationAbilitySave</a>"
                            }
                          ],
                          "abortFlags": [
                            "STAT_CTRL",
                            "DisableAction"
                          ]
                        },
                        {
                          "name": "Define Custom Variable",
                          "scope": "ContextModifier",
                          "value": {
                            "displayLines": "MDF_LayerMod"
                          },
                          "variableName": "MDF_LayerModTriggerLayer"
                        }
                      ]
                    }
                  ],
                  "failed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "AND",
                        "conditionList": [
                          {
                            "name": "Compare: Variable",
                            "value1": "MDF_Layer",
                            "compareType": ">=",
                            "value2": {
                              "displayLines": "10"
                            },
                            "contextScope": "ContextCaster"
                          },
                          {
                            "name": "Compare: Variable",
                            "value1": "_AlreadyTriggerElationSkill",
                            "compareType": "=",
                            "value2": 0,
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
                          "name": "Inject Elation Skill Extra-Turn (Default priority)",
                          "eventType": "AventurineW_00_ElationSkill",
                          "punchlineFixed": {
                            "displayLines": "20"
                          },
                          "actionTag": [
                            "EnergyTrigger_ElationAbility"
                          ],
                          "execute": [
                            {
                              "name": "Add Events/Bonuses",
                              "to": {
                                "name": "Target Name",
                                "target": "{{Caster}}"
                              },
                              "modifier": "<a class=\"gModGreen\" id=\"-1810925585\">AventurineW_InsertElationAbilitySave</a>"
                            }
                          ],
                          "abortFlags": [
                            "STAT_CTRL",
                            "DisableAction"
                          ]
                        },
                        {
                          "name": "Define Modifier-Specific Variable",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "modifierName": "<a class=\"gModGreen\" id=\"-1333939602\">AventurineW_Passive_Energy</a>",
                          "variableName": "_AlreadyTriggerElationSkill",
                          "value": 1
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Extra Action/Turn [Owner]: End",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Parameter String",
                    "value2": "EnergyTrigger_ElationAbility"
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"1959346708\">AventurineW_UpGradeElationAbility_OnceMark</a>"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-880249058\">AventurineW_InsertElationAbilityShowToast</a>",
          "stackType": "ReplaceByCaster",
          "execute": [
            {
              "eventTrigger": "Ability Use [Owner]: End",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Skill Type",
                        "skillType": "Elation"
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Eidolon Activated",
                        "eidolon": 6
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
                            "modifier": "<a class=\"gModGreen\" id=\"2124492609\">AventurineW_Eidolon6_MarkFull</a>[<span class=\"descriptionNumberColor\">The Past in Fast Lane</span>]",
                            "invertCondition": true
                          },
                          "passed": [
                            {
                              "name": "Add Events/Bonuses",
                              "to": {
                                "name": "Target Name",
                                "target": "{{Caster}}"
                              },
                              "modifier": "<a class=\"gModGreen\" id=\"-101576772\">AventurineW_Eidolon6_Mark</a>[<span class=\"descriptionNumberColor\">The Past in Fast Lane</span>]",
                              "stackLimit": {
                                "displayLines": "2"
                              },
                              "addStacksPerTrigger": 1
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
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Skill Type",
                        "skillType": "Elation"
                      },
                      {
                        "name": "Compare: Variable",
                        "value1": "_IsEnergyTrigger",
                        "compareType": "=",
                        "value2": 1,
                        "contextScope": "ContextModifier"
                      }
                    ]
                  },
                  "passed": [
                    "Unknown EventType2 (Not always an error)[1 false][2 true][3_NAME AventurineW]"
                  ]
                },
                {
                  "name": "Define Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "scope": "ContextModifier",
                  "value": 0,
                  "variableName": "_IsEnergyTrigger"
                }
              ]
            },
            {
              "eventTrigger": "Extra Action/Turn [Owner]: Start ",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Parameter String",
                    "value2": "EnergyTrigger_ElationAbility"
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "scope": "ContextModifier",
                      "value": 1,
                      "variableName": "_IsEnergyTrigger"
                    },
                    "Unknown EventType2 (Not always an error)[2 true][3_NAME AventurineW]"
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__2124492609\">AventurineW_Eidolon6_MarkFull</a>[<span class=\"descriptionNumberColor\">The Past in Fast Lane</span>]",
          "description": "All Elation Skills used become \"All In! To Summer's Blaze,\" and using the Elation Skill \"All In! To Summer's Blaze\" outside of Aha Instant to additionally deal DMG no longer consumes \"Fervor.\"",
          "type": "Other",
          "statusName": "The Past in Fast Lane",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Update Displayed Energy Bar",
                  "value": {
                    "displayLines": "MDF_Layer"
                  },
                  "maximum": {
                    "displayLines": "_MaxEnergyPoint"
                  },
                  "assignState": "True",
                  "priorState": "Active",
                  "bar#": 4
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-101576772\">AventurineW_Eidolon6_Mark</a>[<span class=\"descriptionNumberColor\">The Past in Fast Lane</span>]"
                },
                {
                  "name": "Add Ability Tag",
                  "tags": [
                    "AssistCaster",
                    "Elation"
                  ],
                  "skillName": "Skill04"
                },
                {
                  "name": "Add Ability Tag",
                  "tags": [
                    "AssistCaster",
                    "Elation"
                  ],
                  "skillName": "Skill41"
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-101576772\">AventurineW_Eidolon6_Mark</a>[<span class=\"descriptionNumberColor\">The Past in Fast Lane</span>]",
          "stackType": "ReplaceByCaster",
          "description": "Has currently used Elation Skill <span class=\"descriptionNumberColor\">MDF_CastNum</span> time(s).",
          "type": "Other",
          "statusName": "The Past in Fast Lane",
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
                  "variableName": "MDF_CastNum",
                  "multiplier": 1
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "compareType": ">=",
                    "value2": {
                      "displayLines": "2"
                    },
                    "valueType": "Layer"
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"2124492609\">AventurineW_Eidolon6_MarkFull</a>[<span class=\"descriptionNumberColor\">The Past in Fast Lane</span>]"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__663338938\">AventurineW_ExtraCritDamageRatio</a>[<span class=\"descriptionNumberColor\">CRIT DMG Boost</span>]",
          "description": "CRIT DMG increases by <span class=\"descriptionNumberColor\">MDF_PropertyValue</span>.",
          "type": "Buff",
          "statusName": "CRIT DMG Boost"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-750726366\">AventurineW_Point03_Logic</a>",
          "stackType": "ReplaceByCaster",
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
                  "modifier": "<a class=\"gModGreen\" id=\"-1456995257\">AventurineW_CritDamage_PointB3</a>[<span class=\"descriptionNumberColor\">CRIT DMG Boost</span>]",
                  "referenceModifier": "<a class=\"gModGreen\" id=\"1042665863\">MReference_CriticalDamageUp</a>",
                  "valuePerStack": {
                    "MDF_PropertyValue": {
                      "displayLines": "0.48"
                    }
                  }
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1435762620\">AventurineW_EnergyPointTotalController</a>",
          "variableValueChange": [
            {
              "name": "Variable Value Changes",
              "variableName": "MDF_Layer",
              "scope": "ContextCaster",
              "valueRanges": [
                {
                  "name": "Variable Value Range Conditions",
                  "minValue": 0,
                  "maxValue": {
                    "displayLines": "_MaxEnergyPoint"
                  },
                  "includeMaxValueInRange": true,
                  "onChange": [
                    {
                      "name": "Update Displayed Energy Bar",
                      "value": {
                        "displayLines": "MDF_Layer"
                      },
                      "maximum": {
                        "displayLines": "_MaxEnergyPoint"
                      },
                      "assignState": "True",
                      "bar#": 4
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1959346708\">AventurineW_UpGradeElationAbility_OnceMark</a>",
          "latentQueue": [
            "_AlreadyTriggerElationSkill"
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
                    "modifier": "<a class=\"gModGreen\" id=\"2124492609\">AventurineW_Eidolon6_MarkFull</a>[<span class=\"descriptionNumberColor\">The Past in Fast Lane</span>]"
                  },
                  "failed": [
                    {
                      "name": "Update Displayed Energy Bar",
                      "value": {
                        "displayLines": "MDF_Layer"
                      },
                      "maximum": {
                        "displayLines": "_MaxEnergyPoint"
                      },
                      "assignState": "True",
                      "priorState": "Normal",
                      "bar#": 4
                    },
                    {
                      "name": "Add Ability Tag",
                      "tags": [
                        "AssistCaster"
                      ],
                      "skillName": "Skill41"
                    },
                    {
                      "name": "Add Ability Tag",
                      "tags": [
                        "AssistCaster"
                      ],
                      "skillName": "Skill04"
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Update Displayed Energy Bar",
                  "value": {
                    "displayLines": "MDF_Layer"
                  },
                  "maximum": {
                    "displayLines": "_MaxEnergyPoint"
                  },
                  "assignState": "True",
                  "priorState": "Active",
                  "bar#": 4
                }
              ]
            },
            {
              "eventTrigger": "Aha Instant: Start (Pending)",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"2124492609\">AventurineW_Eidolon6_MarkFull</a>[<span class=\"descriptionNumberColor\">The Past in Fast Lane</span>]"
                  },
                  "failed": [
                    {
                      "name": "Add Ability Tag",
                      "tags": [
                        "AssistCaster"
                      ],
                      "skillName": "Skill04"
                    },
                    {
                      "name": "Add Ability Tag",
                      "tags": [
                        "AssistCaster"
                      ],
                      "skillName": "Skill41"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1423861026\">AventurineW_EchoPointLifeTime</a>",
          "stackType": "ReplaceByCaster",
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier",
              "execute": [
                {
                  "name": "Adjust Modifier Value",
                  "variableName": "AventurineW_EchoPointLifeTime",
                  "modifierName": "<a class=\"gModGreen\" id=\"-1491295670\">MBattleEvent_Elation_ElationEchoPointBonus</a>[<span class=\"descriptionNumberColor\">undefined</span>]",
                  "changeDuration": {
                    "displayLines": "1"
                  }
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1632287215\">AventurineW_PointB2_SpeedUp</a>",
          "stackType": "Replace",
          "modifierFlags": [
            "STAT_SpeedUp"
          ],
          "stackData": [
            "MDF_PropertyValue",
            "_StackNum"
          ],
          "latentQueue": [
            "ElationCharacterCount"
          ],
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Define Custom Variable with Modifier Values",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Aha Instant: Aha Battle Event}}"
                  },
                  "scope": "ContextModifier",
                  "valueType": "Layer",
                  "variableName": "_StackNum",
                  "multiplier": 1
                },
                {
                  "name": "Stack Target Stat Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Aha Instant: Aha Battle Event}}"
                  },
                  "propertyName": "&nbsp;<span class=\"descriptionNumberColor\">SPDFlat</span>&nbsp;",
                  "statValue": {
                    "displayLines": "(MDF_PropertyValue * _StackNum)"
                  }
                }
              ]
            },
            {
              "eventTrigger": "Aha Instant: End",
              "execute": [
                "Modifier Deletes Itself"
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1410719031\">AventurineW_ElationAbilityRegardAsInsert</a>",
          "latentQueue": [
            "ElationCharacterCount"
          ],
          "execute": [
            {
              "eventTrigger": "When Modifier Destroyed/Removed",
              "execute": [
                {
                  "name": "Remove Attack-Type Extension",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "typeToExtend": "Elation DMG"
                }
              ]
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Add Attack-Type Extension",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "typeToExtend": "Elation DMG",
                  "extendTypeTo": "Follow-up"
                }
              ]
            },
            {
              "eventTrigger": "Attack DMG End [Owner]",
              "execute": [
                "Modifier Deletes Itself"
              ]
            }
          ]
        }
      ],
      "references": []
    },
    "AventurineWaveflair_LocalPlayer_StandardAbility_AttackBreak": {
      "fileName": "AventurineWaveflair_LocalPlayer_StandardAbility_AttackBreak",
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
        "primaryTarget": "Select Hostile Target"
      }
    },
    "AventurineWaveflair_LocalPlayer_AventurineW_TechniqueUsage": {
      "fileName": "AventurineWaveflair_LocalPlayer_AventurineW_TechniqueUsage",
      "skillTrigger": "MazeSkill",
      "abilityType": "Basic ATK",
      "toughnessList": null,
      "parse": [
        {
          "name": "IF",
          "conditions": "Ability Has a Target"
        },
        "Deleted bullshit",
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-322154605\">ADV_Modifier_Maze_AventurineW_HolyShield</a>",
          "duration": 1
        },
        {
          "name": "Overworld Attack Instance",
          "onBattle": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": null,
              "ID": "151301(SkillMaze)"
            }
          ]
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-322154605\">ADV_Modifier_Maze_AventurineW_HolyShield</a>"
        }
      ],
      "onAbortReg": [
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-322154605\">ADV_Modifier_Maze_AventurineW_HolyShield</a>"
        }
      ],
      "references": [],
      "targetObjectData": {
        "primaryTarget": "Skill Point User(Or NONE)"
      },
      "realTargetData": {
        "primaryTarget": "Select Hostile Target"
      }
    },
    "AventurineWaveflair_LocalPlayer_AventurineW_NormalAtk01": {
      "fileName": "AventurineWaveflair_LocalPlayer_AventurineW_NormalAtk01",
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
              "execute": [
                {
                  "name": "Overworld Attack Instance"
                }
              ],
              "projectileFinished": [
                {
                  "name": "Overworld Attack Instance"
                }
              ]
            }
          ],
          "failed": [
            "Deleted bullshit",
            {
              "name": "Shot Fired",
              "execute": [
                {
                  "name": "Overworld Attack Instance"
                }
              ],
              "projectileFinished": [
                {
                  "name": "Overworld Attack Instance"
                }
              ]
            }
          ]
        }
      ],
      "references": [],
      "targetObjectData": {
        "primaryTarget": "Skill Point User(Or NONE)"
      },
      "realTargetData": {
        "primaryTarget": "Select Hostile Target"
      }
    },
    "AventurineWaveflair_AventurineW_TechniqueInLevel": {
      "fileName": "AventurineWaveflair_AventurineW_TechniqueInLevel",
      "childAbilityList": [
        "AventurineWaveflair_AventurineW_TechniqueInLevel"
      ],
      "skillTrigger": "SkillMaze",
      "abilityType": "Technique",
      "energy": null,
      "toughnessList": [
        20,
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
          "modifier": "<a class=\"gModGreen\" id=\"446099201\">Technique_AventurineW_Modifier</a>"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__446099201\">Technique_AventurineW_Modifier</a>",
          "execute": [
            {
              "eventTrigger": "Enter Battle",
              "priorityLevel": -60,
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      "Technique Modifies Current Wave",
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
                      "name": "ATK Scaling DMG",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Hostile Entities(AOE)}}"
                      },
                      "canPhase": true,
                      "AttackScaling": {
                        "DamageType": "Quantum",
                        "Damage": {
                          "displayLines": "1"
                        },
                        "Toughness": null,
                        "ToughnessDMGType": {
                          "DamageType": "Quantum"
                        },
                        "Tags": null,
                        "attackType": "Technique",
                        "EnergyGainPercent": "100%"
                      }
                    },
                    "Trigger: Attack End",
                    {
                      "name": "Use Custom Character Function",
                      "functionName": "<a class=\"gTempYellow\" id=\"818871295\">AddElationEchoPoint</a>",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "variables": {
                        "AddValue": {
                          "displayLines": "20"
                        }
                      }
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-1333939602\">AventurineW_Passive_Energy</a>",
                      "stackLimit": {
                        "displayLines": "_MaxEnergyPoint"
                      },
                      "addStacksPerTrigger": {
                        "displayLines": "2"
                      }
                    }
                  ]
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
        "primaryTarget": "{{Hostile Entities(AOE)}}"
      }
    },
    "AventurineWaveflair_AventurineW_PassiveAbility01": {
      "fileName": "AventurineWaveflair_AventurineW_PassiveAbility01",
      "childAbilityList": [
        "AventurineWaveflair_AventurineW_PassiveAbility01"
      ],
      "skillTrigger": "SkillP01",
      "abilityType": "Talent",
      "energy": null,
      "toughnessList": [
        0,
        0,
        0
      ],
      "parse": [
        {
          "name": "Define Custom Variable",
          "value": {
            "displayLines": "30"
          },
          "variableName": "_MaxEnergyPoint"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-880249058\">AventurineW_InsertElationAbilityShowToast</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1435762620\">AventurineW_EnergyPointTotalController</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1423861026\">AventurineW_EchoPointLifeTime</a>"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Trace Activated",
            "conditionList": "Sift Through Gilded Dreams"
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"90748474\">AventurineW_Tree03_TriggerNum</a>[<span class=\"descriptionNumberColor\">Sift Through Gilded Dreams</span>]"
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Trace Activated",
            "conditionList": "Sift Through Gilded Dreams"
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-750726366\">AventurineW_Point03_Logic</a>"
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Eidolon Activated",
            "eidolon": 1
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1353143847\">AventurineW_Eidolon1</a>[<span class=\"descriptionNumberColor\">A Holiday on the Line</span>]",
              "valuePerStack": {
                "MDF_PropertyValue": {
                  "displayLines": "0.24"
                }
              }
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Eidolon Activated",
            "eidolon": 2
          },
          "passed": [
            {
              "name": "Define Custom Variable",
              "value": {
                "displayLines": "50"
              },
              "variableName": "_MaxEnergyPoint"
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1403476704\">AventurineW_Eidolon2</a>"
            }
          ]
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
              "modifier": "<a class=\"gModGreen\" id=\"-1946436058\">AventurineW_Eidolon6_ElationDamageExtra</a>[<span class=\"descriptionNumberColor\">The Past in Fast Lane</span>]",
              "valuePerStack": {
                "MDF_PropertyValue": {
                  "displayLines": "0.25"
                }
              }
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Trace Activated",
            "conditionList": "Party in Perfect Paradise"
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1237850841\">AventurineW_ElationConvert</a>"
            }
          ]
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"2141093581\">AventurineW_Passive</a>"
        },
        {
          "name": "Update Displayed Energy Bar",
          "value": 0,
          "maximum": {
            "displayLines": "_MaxEnergyPoint"
          },
          "assignState": "True",
          "priorState": "Normal",
          "bar#": 4,
          "cooldown": 0
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
    "AventurineWaveflair_AventurineW_ElationAbility_Part12": {
      "fileName": "AventurineWaveflair_AventurineW_ElationAbility_Part12",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "IF",
          "conditions": {
            "name": "Eidolon Activated",
            "eidolon": 6
          },
          "passed": [
            {
              "name": "IF",
              "conditions": "In Aha-Instant",
              "passed": [
                {
                  "name": "Define Modifier-Specific Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifierName": "<a class=\"gModGreen\" id=\"-1333939602\">AventurineW_Passive_Energy</a>",
                  "variableName": "MDF_LayerModTriggerLayer",
                  "value": 0
                }
              ]
            }
          ],
          "failed": [
            {
              "name": "Define Modifier-Specific Variable",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifierName": "<a class=\"gModGreen\" id=\"-1333939602\">AventurineW_Passive_Energy</a>",
              "variableName": "MDF_LayerModTriggerLayer",
              "value": 0
            }
          ]
        },
        {
          "name": "Define Custom Variable",
          "scope": "ContextAbility",
          "value": 1,
          "variableName": "_CurrentDamageNumber"
        },
        {
          "name": "Define Custom Variable with Modifier Values",
          "valueType": "Layer",
          "variableName": "_TempLayer_get",
          "modifierName": "<a class=\"gModGreen\" id=\"-1333939602\">AventurineW_Passive_Energy</a>",
          "multiplier": 1
        },
        {
          "name": "IF",
          "conditions": {
            "name": "AND",
            "conditionList": [
              {
                "name": "Eidolon Activated",
                "eidolon": 6
              }
            ]
          },
          "passed": [
            {
              "name": "IF",
              "conditions": "In Aha-Instant",
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1333939602\">AventurineW_Passive_Energy</a>",
                  "stackLimit": {
                    "displayLines": "_MaxEnergyPoint"
                  },
                  "addStacksPerTrigger": {
                    "displayLines": "-MDF_Layer"
                  }
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
                    "modifier": "<a class=\"gModGreen\" id=\"2124492609\">AventurineW_Eidolon6_MarkFull</a>[<span class=\"descriptionNumberColor\">The Past in Fast Lane</span>]",
                    "invertCondition": true
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-1333939602\">AventurineW_Passive_Energy</a>",
                      "stackLimit": {
                        "displayLines": "_MaxEnergyPoint"
                      },
                      "addStacksPerTrigger": {
                        "displayLines": "-MDF_Layer"
                      }
                    }
                  ]
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
              "modifier": "<a class=\"gModGreen\" id=\"-1333939602\">AventurineW_Passive_Energy</a>",
              "stackLimit": {
                "displayLines": "_MaxEnergyPoint"
              },
              "addStacksPerTrigger": {
                "displayLines": "-MDF_Layer"
              }
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
            "DamageType": "Quantum",
            "DamageElation": {
              "displayLines": "0.6"
            },
            "dmgFormula": "Elation Scaling",
            "HitSplit": 0.2,
            "Toughness": {
              "displayLines": "AOE Toughness Value"
            },
            "instanceTag": "ElationSkill_2",
            "Tags": null,
            "attackType": "Elation DMG",
            "EnergyGainPercent": "100%"
          }
        },
        {
          "name": "Looped Event",
          "maxLoops": {
            "displayLines": "(_TempLayer_get + 10)"
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
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "_CurrentDamageNumber",
                    "compareType": "<=",
                    "value2": {
                      "displayLines": "10"
                    },
                    "contextScope": "ContextAbility"
                  },
                  "passed": [
                    {
                      "name": "ATK Scaling DMG",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "canPhase": true,
                      "AttackScaling": {
                        "DamageType": "Quantum",
                        "DamageElation": {
                          "displayLines": "0.18"
                        },
                        "dmgFormula": "Elation Scaling",
                        "Toughness": {
                          "displayLines": "ST Toughness Value"
                        },
                        "instanceTag": "ElationSkill_2",
                        "Tags": null,
                        "attackType": "Elation DMG"
                      }
                    },
                    {
                      "name": "Define Custom Variable with Added Value",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "variableName": "_CurrentDamageNumber",
                      "context": "ContextAbility",
                      "value": 1,
                      "min": 1,
                      "max": {
                        "displayLines": "(_TempLayer_get + 10)"
                      }
                    }
                  ],
                  "failed": [
                    {
                      "name": "ATK Scaling DMG",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "canPhase": true,
                      "AttackScaling": {
                        "DamageType": "Quantum",
                        "DamageElation": {
                          "displayLines": "0.21"
                        },
                        "dmgFormula": "Elation Scaling",
                        "Toughness": null,
                        "instanceTag": "ElationSkill_2",
                        "Tags": null,
                        "attackType": "Elation DMG"
                      }
                    }
                  ]
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
            "DamageType": "Quantum",
            "DamageElation": {
              "displayLines": "0.6"
            },
            "dmgFormula": "Elation Scaling",
            "HitSplit": 0.2,
            "Toughness": {
              "displayLines": "AOE Toughness Value"
            },
            "instanceTag": "ElationSkill_2",
            "Tags": null,
            "attackType": "Elation DMG",
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
            "DamageType": "Quantum",
            "DamageElation": {
              "displayLines": "0.6"
            },
            "dmgFormula": "Elation Scaling",
            "HitSplit": 0.2,
            "Toughness": {
              "displayLines": "AOE Toughness Value"
            },
            "instanceTag": "ElationSkill_2",
            "Tags": null,
            "attackType": "Elation DMG",
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
            "DamageType": "Quantum",
            "DamageElation": {
              "displayLines": "0.6"
            },
            "dmgFormula": "Elation Scaling",
            "HitSplit": 0.2,
            "Toughness": {
              "displayLines": "AOE Toughness Value"
            },
            "instanceTag": "ElationSkill_2",
            "Tags": null,
            "attackType": "Elation DMG",
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
            "DamageType": "Quantum",
            "DamageElation": {
              "displayLines": "0.6"
            },
            "dmgFormula": "Elation Scaling",
            "HitSplit": 0.2,
            "Toughness": {
              "displayLines": "AOE Toughness Value"
            },
            "instanceTag": "ElationSkill_2",
            "Tags": null,
            "attackType": "Elation DMG",
            "EnergyGainPercent": "100%"
          }
        },
        "Trigger: Attack End",
        {
          "name": "IF",
          "conditions": "In Aha-Instant",
          "passed": [
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1959346708\">AventurineW_UpGradeElationAbility_OnceMark</a>"
            }
          ]
        },
        "Trigger: Skip Death Handling",
        "Trigger: Ability End"
      ],
      "references": [],
      "targetObjectData": {
        "primaryTarget": "{{Ability Target List}}"
      }
    },
    "AventurineWaveflair_AventurineW_ElationAbility_Part11": {
      "fileName": "AventurineWaveflair_AventurineW_ElationAbility_Part11",
      "childAbilityList": [
        "AventurineWaveflair_AventurineW_ElationAbility_Part11",
        "AventurineWaveflair_AventurineW_ElationAbility_Part12",
        "AventurineWaveflair_AventurineW_Ability41_Camera"
      ],
      "skillTrigger": "Skill41",
      "abilityType": "Elation",
      "energy": 5,
      "toughnessList": [
        5,
        20,
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
          "ability": "AventurineW_ElationAbility_Part12",
          "isTrigger": true
        }
      ],
      "references": [],
      "targetObjectData": {
        "primaryTarget": "{{Ability Target List}}"
      },
      "realTargetData": {
        "primaryTarget": "{{Hostile Entities(AOE)}}"
      }
    },
    "AventurineWaveflair_AventurineW_ElationAbility_Part02": {
      "fileName": "AventurineWaveflair_AventurineW_ElationAbility_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "canPhase": true,
          "AttackScaling": {
            "DamageType": "Quantum",
            "DamageElation": {
              "displayLines": "0.6"
            },
            "dmgFormula": "Elation Scaling",
            "HitSplit": 0.5,
            "Toughness": {
              "displayLines": "AOE Toughness Value"
            },
            "instanceTag": "ElationSkill_1",
            "Tags": null,
            "attackType": "Elation DMG",
            "EnergyGainPercent": "100%"
          }
        },
        {
          "name": "Looped Event",
          "maxLoops": {
            "displayLines": "10"
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
                    "DamageType": "Quantum",
                    "DamageElation": {
                      "displayLines": "0.18"
                    },
                    "dmgFormula": "Elation Scaling",
                    "Toughness": {
                      "displayLines": "ST Toughness Value"
                    },
                    "instanceTag": "ElationSkill_1",
                    "Tags": null,
                    "attackType": "Elation DMG"
                  }
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
            "DamageType": "Quantum",
            "DamageElation": {
              "displayLines": "0.6"
            },
            "dmgFormula": "Elation Scaling",
            "HitSplit": 0.5,
            "Toughness": {
              "displayLines": "AOE Toughness Value"
            },
            "instanceTag": "ElationSkill_1",
            "Tags": null,
            "attackType": "Elation DMG",
            "EnergyGainPercent": "100%"
          }
        },
        "Trigger: Attack End",
        {
          "name": "IF",
          "conditions": "In Aha-Instant"
        },
        "Trigger: Skip Death Handling",
        "Trigger: Ability End"
      ],
      "references": [],
      "targetObjectData": {
        "primaryTarget": "{{Hostile Entities(AOE)}}"
      }
    },
    "AventurineWaveflair_AventurineW_ElationAbility_Part01": {
      "fileName": "AventurineWaveflair_AventurineW_ElationAbility_Part01",
      "childAbilityList": [
        "AventurineWaveflair_AventurineW_ElationAbility_Part01",
        "AventurineWaveflair_AventurineW_ElationAbility_Part02",
        "AventurineWaveflair_AventurineW_Ability04_Camera"
      ],
      "skillTrigger": "Skill04",
      "tag": "InfiniteRefresh",
      "abilityType": "Elation",
      "energy": 5,
      "toughnessList": [
        3.3333333333333335,
        10,
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
          "ability": "AventurineW_ElationAbility_Part02",
          "isTrigger": true
        }
      ],
      "references": [],
      "targetObjectData": {
        "primaryTarget": "{{Hostile Entities(AOE)}}"
      },
      "realTargetData": {
        "primaryTarget": "{{Hostile Entities(AOE)}}"
      }
    },
    "AventurineWaveflair_AventurineW_Ability03_Part02": {
      "fileName": "AventurineWaveflair_AventurineW_Ability03_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "canPhase": true,
          "AttackScaling": {
            "DamageType": "Quantum",
            "Damage": {
              "displayLines": "4"
            },
            "Toughness": {
              "displayLines": "AOE Toughness Value"
            },
            "Tags": null,
            "attackType": "Ultimate",
            "EnergyGainPercent": "100%"
          }
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Has Flag",
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "flagName": "ElationEchoPoint"
          },
          "passed": [
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Hostile Entities(AOE)}}"
              },
              "canPhase": true,
              "AttackScaling": {
                "DamageType": "Quantum",
                "DamageElation": {
                  "displayLines": "0.72"
                },
                "dmgFormula": "Elation Scaling",
                "Toughness": null,
                "Tags": null,
                "attackType": "Elation DMG"
              }
            }
          ]
        },
        "Trigger: Attack End",
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1660848210\">AventurineW_Ability03_SpeedRatioUp</a>[<span class=\"descriptionNumberColor\">SPD Boost</span>]",
          "duration": {
            "displayLines": "4"
          },
          "referenceModifier": "<a class=\"gModGreen\" id=\"1020254741\">MReference_SpeedRatioUp</a>",
          "valuePerStack": {
            "MDF_PropertyValue": {
              "displayLines": "0.3"
            }
          }
        },
        {
          "name": "Adjust Team Punchline Value",
          "value": {
            "displayLines": "6"
          },
          "adjustment": "Add"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1333939602\">AventurineW_Passive_Energy</a>",
          "stackLimit": {
            "displayLines": "_MaxEnergyPoint"
          },
          "addStacksPerTrigger": {
            "displayLines": "8"
          }
        },
        "Trigger: Ability End"
      ],
      "references": [],
      "targetObjectData": {
        "primaryTarget": "{{Hostile Entities(AOE)}}"
      }
    },
    "AventurineWaveflair_AventurineW_Ability03_Part01": {
      "fileName": "AventurineWaveflair_AventurineW_Ability03_Part01",
      "childAbilityList": [
        "AventurineWaveflair_AventurineW_Ability03_Camera",
        "AventurineWaveflair_AventurineW_Ability03_EnterReady",
        "AventurineWaveflair_AventurineW_Ability03_Part01",
        "AventurineWaveflair_AventurineW_Ability03_Part02"
      ],
      "skillTrigger": "Skill03",
      "abilityType": "Ultimate",
      "energy": 5,
      "toughnessList": [
        0,
        20,
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
          "ability": "AventurineW_Ability03_Part02",
          "isTrigger": true
        }
      ],
      "references": [],
      "targetObjectData": {
        "primaryTarget": "{{Hostile Entities(AOE)}}"
      },
      "realTargetData": {
        "primaryTarget": "{{Hostile Entities(AOE)}}"
      }
    },
    "AventurineWaveflair_AventurineW_Ability03_EnterReady": {
      "fileName": "AventurineWaveflair_AventurineW_Ability03_EnterReady",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "references": [],
      "targetObjectData": {
        "primaryTarget": "Inherent Target"
      }
    },
    "AventurineWaveflair_AventurineW_Ability02_Part02": {
      "fileName": "AventurineWaveflair_AventurineW_Ability02_Part02",
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
                "target": "{{All Team Members}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1302810990\">AventurineW_Eidolon4</a>[<span class=\"descriptionNumberColor\">Sunlight Runs No Tab</span>]",
              "duration": {
                "displayLines": "3"
              },
              "valuePerStack": {
                "MDF_PropertyRatio": {
                  "displayLines": "0.18"
                }
              }
            }
          ]
        },
        {
          "name": "Define Custom Variable",
          "scope": "ContextCaster",
          "value": 0,
          "variableName": "_SpecialAttackEnergyPointTriggerCount"
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "canPhase": true,
          "AttackScaling": {
            "DamageType": "Quantum",
            "Damage": {
              "displayLines": "2.4"
            },
            "Toughness": {
              "displayLines": "AOE Toughness Value"
            },
            "Tags": null,
            "attackType": "Skill",
            "EnergyGainPercent": "100%"
          }
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Has Flag",
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "flagName": [
              "ElationEchoPoint"
            ]
          },
          "passed": [
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Hostile Entities(AOE)}}"
              },
              "canPhase": true,
              "AttackScaling": {
                "DamageType": "Quantum",
                "DamageElation": {
                  "displayLines": "0.4"
                },
                "dmgFormula": "Elation Scaling",
                "Toughness": null,
                "Tags": null,
                "attackType": "Elation DMG"
              }
            }
          ]
        },
        "Trigger: Attack End",
        {
          "name": "Adjust Team Punchline Value",
          "value": {
            "displayLines": "4"
          },
          "adjustment": "Add"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1333939602\">AventurineW_Passive_Energy</a>",
          "stackLimit": {
            "displayLines": "_MaxEnergyPoint"
          },
          "addStacksPerTrigger": {
            "displayLines": "4"
          }
        },
        "Trigger: Ability End"
      ],
      "references": [],
      "targetObjectData": {
        "primaryTarget": "{{Hostile Entities(AOE)}}"
      }
    },
    "AventurineWaveflair_AventurineW_Ability02_Part01": {
      "fileName": "AventurineWaveflair_AventurineW_Ability02_Part01",
      "childAbilityList": [
        "AventurineWaveflair_AventurineW_Ability02_Camera",
        "AventurineWaveflair_AventurineW_Ability02_Camera_Other",
        "AventurineWaveflair_AventurineW_Ability02_Part01",
        "AventurineWaveflair_AventurineW_Ability02_Part02"
      ],
      "skillTrigger": "Skill02",
      "abilityType": "Skill",
      "energy": 30,
      "toughnessList": [
        0,
        10,
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
          "ability": "AventurineW_Ability02_Part02",
          "isTrigger": true
        }
      ],
      "onAbort": [],
      "references": [],
      "targetObjectData": {
        "primaryTarget": "Inherent Target"
      },
      "realTargetData": {
        "primaryTarget": "{{Hostile Entities(AOE)}}"
      }
    },
    "AventurineWaveflair_AventurineW_Ability01_Part02": {
      "fileName": "AventurineWaveflair_AventurineW_Ability01_Part02",
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
          "canPhase": true,
          "AttackScaling": {
            "DamageType": "Quantum",
            "Damage": {
              "displayLines": "1"
            },
            "HitSplit": 0.25,
            "Toughness": {
              "displayLines": "ST Toughness Value"
            },
            "Tags": null,
            "attackType": "Basic ATK",
            "EnergyGainPercent": "100%"
          }
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "canPhase": true,
          "AttackScaling": {
            "DamageType": "Quantum",
            "Damage": {
              "displayLines": "1"
            },
            "HitSplit": 0.25,
            "Toughness": {
              "displayLines": "ST Toughness Value"
            },
            "Tags": null,
            "attackType": "Basic ATK",
            "EnergyGainPercent": "100%"
          }
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "canPhase": true,
          "AttackScaling": {
            "DamageType": "Quantum",
            "Damage": {
              "displayLines": "1"
            },
            "HitSplit": 0.25,
            "Toughness": {
              "displayLines": "ST Toughness Value"
            },
            "Tags": null,
            "attackType": "Basic ATK",
            "EnergyGainPercent": "100%"
          }
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "canPhase": true,
          "AttackScaling": {
            "DamageType": "Quantum",
            "Damage": {
              "displayLines": "1"
            },
            "HitSplit": 0.25,
            "Toughness": {
              "displayLines": "ST Toughness Value"
            },
            "Tags": null,
            "attackType": "Basic ATK",
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
    "AventurineWaveflair_AventurineW_Ability01_Part01": {
      "fileName": "AventurineWaveflair_AventurineW_Ability01_Part01",
      "childAbilityList": [
        "AventurineWaveflair_AventurineW_Ability01_Camera",
        "AventurineWaveflair_AventurineW_Ability01_Part01",
        "AventurineWaveflair_AventurineW_Ability01_Part02"
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
          "ability": "AventurineW_Ability01_Part02",
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
    "AventurineWaveflair_Functions": {
      "fileName": "AventurineWaveflair_Functions",
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
          "functionName": "<a class=\"gTempYellow\" id=\"fun__-856938281\">AventurineW_SpecialAttackExtraEnergyPoint</a>",
          "parse": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "_SpecialAttackEnergyPointTriggerCount",
                "compareType": "<",
                "value2": {
                  "displayLines": "6"
                },
                "contextScope": "ContextCaster"
              },
              "passed": [
                {
                  "name": "Define Custom Variable with Added Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "variableName": "_SpecialAttackEnergyPointTriggerCount",
                  "context": "ContextCaster",
                  "value": 1
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{All Team Members}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1708522086\">AventurineW_CritDamage_PointB3_AfterTeamMateCastAbility</a>[<span class=\"descriptionNumberColor\">CRIT DMG Boost</span>]",
                  "duration": {
                    "displayLines": "3"
                  },
                  "referenceModifier": "<a class=\"gModGreen\" id=\"1042665863\">MReference_CriticalDamageUp</a>",
                  "valuePerStack": {
                    "MDF_PropertyValue": {
                      "displayLines": "0.48"
                    }
                  }
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1333939602\">AventurineW_Passive_Energy</a>",
                  "stackLimit": {
                    "displayLines": "_MaxEnergyPoint"
                  },
                  "addStacksPerTrigger": {
                    "displayLines": "2"
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