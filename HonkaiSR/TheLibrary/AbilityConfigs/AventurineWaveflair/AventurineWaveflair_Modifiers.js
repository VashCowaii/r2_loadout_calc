const configAbility = {
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
              "operator": "Variables[0] (0.2) || RETURN",
              "displayLines": "0.2",
              "constants": [],
              "variables": [
                0.2
              ]
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
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">ElationDMGAll</span>&nbsp;",
              "value": {
                "operator": "Variables[0] (MDF_PropertyValue) || RETURN",
                "displayLines": "MDF_PropertyValue",
                "constants": [],
                "variables": [
                  "MDF_PropertyValue"
                ]
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
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">ElationDMGAll</span>&nbsp;",
              "value": {
                "operator": "Variables[0] (MDF_PropertyValue) || RETURN",
                "displayLines": "MDF_PropertyValue",
                "constants": [],
                "variables": [
                  "MDF_PropertyValue"
                ]
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
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">ElationDMGAll</span>&nbsp;",
              "value": {
                "operator": "Variables[0] (MDF_PropertyValue) || RETURN",
                "displayLines": "MDF_PropertyValue",
                "constants": [],
                "variables": [
                  "MDF_PropertyValue"
                ]
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
                  "variableName": "ElationCharacterCount",
                  "value": 0
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
                          "operator": "Variables[0] (0.8) || Variables[1] (0.2) || ADD || RETURN",
                          "displayLines": "(0.8 + 0.2)",
                          "constants": [],
                          "variables": [
                            0.8,
                            0.2
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
          ],
          "priorityLevel": -80
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
                  "variableName": "_SpecialAttackTriggerFlag",
                  "value": 1
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
              "variableName": "_SpecialAttackTriggerFlag",
              "value": 0
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
              "variableName": "_SpecialAttackTriggerFlag",
              "value": 0
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
                "operator": "Variables[0] (_MaxEnergyPoint) || RETURN",
                "displayLines": "_MaxEnergyPoint",
                "constants": [],
                "variables": [
                  "_MaxEnergyPoint"
                ]
              },
              "addStacksPerTrigger": {
                "operator": "Variables[0] (1) || RETURN",
                "displayLines": "1",
                "constants": [],
                "variables": [
                  1
                ]
              }
            },
            {
              "name": "Adjust Team Punchline Value",
              "value": {
                "operator": "Variables[0] (1) || RETURN",
                "displayLines": "1",
                "constants": [],
                "variables": [
                  1
                ]
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
                      "operator": "Variables[0] (2) || RETURN",
                      "displayLines": "2",
                      "constants": [],
                      "variables": [
                        2
                      ]
                    }
                  }
                },
                {
                  "name": "Adjust Team Punchline Value",
                  "value": {
                    "operator": "Variables[0] (1) || RETURN",
                    "displayLines": "1",
                    "constants": [],
                    "variables": [
                      1
                    ]
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
                      "operator": "Variables[0] (25) || RETURN",
                      "displayLines": "25",
                      "constants": [],
                      "variables": [
                        25
                      ]
                    },
                    "_StackNum": 0
                  },
                  "addStacksPerTrigger": {
                    "operator": "Constants[0] (1) || RETURN",
                    "displayLines": "1",
                    "constants": [
                      1
                    ],
                    "variables": []
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
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">ElationDMGAll</span>&nbsp;",
              "value": {
                "operator": "Variables[0] (MDF_PropertyRatio) || RETURN",
                "displayLines": "MDF_PropertyRatio",
                "constants": [],
                "variables": [
                  "MDF_PropertyRatio"
                ]
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
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "variableName": "_CurrentSpeed",
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
                  "operator": "Variables[0] (140) || RETURN",
                  "displayLines": "140",
                  "constants": [],
                  "variables": [
                    140
                  ]
                }
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "_EPRatioBase",
                  "value": {
                    "operator": "Variables[0] (0.3) || RETURN",
                    "displayLines": "0.3",
                    "constants": [],
                    "variables": [
                      0.3
                    ]
                  }
                },
                {
                  "name": "Define Custom Variable with Stat",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "variableName": "_CurrentSpeedConvert",
                  "value": "&nbsp;<span class=\"descriptionNumberColor\">SpeedConverted</span>&nbsp;"
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "_CurrentSpeed",
                  "value": {
                    "operator": "Variables[0] (_CurrentSpeed) || Variables[1] (_CurrentSpeedConvert) || SUB || RETURN",
                    "displayLines": "(_CurrentSpeed - _CurrentSpeedConvert)",
                    "constants": [],
                    "variables": [
                      "_CurrentSpeed",
                      "_CurrentSpeedConvert"
                    ]
                  }
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "_OverCountSpeedValue",
                  "value": {
                    "operator": "Variables[0] (_CurrentSpeed) || Variables[1] (140) || SUB || RETURN",
                    "displayLines": "(_CurrentSpeed - 140)",
                    "constants": [],
                    "variables": [
                      "_CurrentSpeed",
                      140
                    ]
                  }
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "_OverCountSpeedValue",
                    "compareType": ">=",
                    "value2": {
                      "operator": "Variables[0] (200) || RETURN",
                      "displayLines": "200",
                      "constants": [],
                      "variables": [
                        200
                      ]
                    }
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "_OverCountSpeedValue",
                      "value": {
                        "operator": "Variables[0] (200) || RETURN",
                        "displayLines": "200",
                        "constants": [],
                        "variables": [
                          200
                        ]
                      }
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
                      "operator": "Variables[0] (1) || RETURN",
                      "displayLines": "1",
                      "constants": [],
                      "variables": [
                        1
                      ]
                    }
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "_EPRatioAdd",
                      "value": {
                        "operator": "Variables[0] (FLOOR) || Variables[1] (_OverCountSpeedValue) || Variables[2] (1) || DIV || PARAM_1 || FUNCTION || Variables[3] (0.01) || MUL || RETURN",
                        "displayLines": "(&nbsp;<span class=\"descriptionFunctionColor\">FLOOR</span>((_OverCountSpeedValue / 1)) * 0.01)",
                        "constants": [],
                        "variables": [
                          "FLOOR",
                          "_OverCountSpeedValue",
                          1,
                          0.01
                        ]
                      }
                    }
                  ],
                  "failed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "_EPRatioAdd",
                      "value": 0
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
                      "operator": "Variables[0] (_EPRatioBase) || Variables[1] (_EPRatioAdd) || ADD || RETURN",
                      "displayLines": "(_EPRatioBase + _EPRatioAdd)",
                      "constants": [],
                      "variables": [
                        "_EPRatioBase",
                        "_EPRatioAdd"
                      ]
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
          "variableName": "&nbsp;<span class=\"descriptionNumberColor\">SPD%</span>&nbsp;",
          "valueRanges": [
            {
              "name": "Variable Value Range Conditions",
              "whenValueChanges": [
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
          "variableName": "&nbsp;<span class=\"descriptionNumberColor\">SPDFlat</span>&nbsp;",
          "valueRanges": [
            {
              "name": "Variable Value Range Conditions",
              "whenValueChanges": [
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
          "variableName": "&nbsp;<span class=\"descriptionNumberColor\">SpeedConverted</span>&nbsp;",
          "valueRanges": [
            {
              "name": "Variable Value Range Conditions",
              "whenValueChanges": [
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
                    "operator": "Variables[0] (_MaxEnergyPoint) || RETURN",
                    "displayLines": "_MaxEnergyPoint",
                    "constants": [],
                    "variables": [
                      "_MaxEnergyPoint"
                    ]
                  },
                  "addStacksPerTrigger": {
                    "operator": "Variables[0] (4) || RETURN",
                    "displayLines": "4",
                    "constants": [],
                    "variables": [
                      4
                    ]
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
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">ResistanceAllPEN</span>&nbsp;",
              "value": {
                "operator": "Variables[0] (MDF_PropertyValue) || RETURN",
                "displayLines": "MDF_PropertyValue",
                "constants": [],
                "variables": [
                  "MDF_PropertyValue"
                ]
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
              "variableName": "MDF_Count",
              "value": {
                "operator": "Variables[0] (6) || Variables[1] (MDF_CastNum) || SUB || RETURN",
                "displayLines": "(6 - MDF_CastNum)",
                "constants": [],
                "variables": [
                  6,
                  "MDF_CastNum"
                ]
              }
            }
          ]
        }
      ],
      "variableValueChange": [
        {
          "name": "Variable Value Changes",
          "variableName": "MDF_CastNum",
          "from": "ContextCaster",
          "valueRanges": [
            {
              "name": "Variable Value Range Conditions",
              "minValue": 0,
              "maxValue": {
                "operator": "Variables[0] (6) || RETURN",
                "displayLines": "6",
                "constants": [],
                "variables": [
                  6
                ]
              },
              "includeMaxValueInRange": true,
              "whenValueChanges": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_Count",
                  "value": {
                    "operator": "Variables[0] (6) || Variables[1] (MDF_CastNum) || SUB || RETURN",
                    "displayLines": "(6 - MDF_CastNum)",
                    "constants": [],
                    "variables": [
                      6,
                      "MDF_CastNum"
                    ]
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
                "operator": "Constants[0] (0) || RETURN",
                "displayLines": "0",
                "constants": [
                  0
                ],
                "variables": []
              }
            },
            "Modifier Deletes Itself"
          ]
        },
        {
          "eventTrigger": "Enter Battle",
          "execute": [
            {
              "name": "Use Custom Character Function",
              "functionName": "<a class=\"gTempYellow\" id=\"1560090957\">AventurineW_InsertElationAbilitylRetarget</a>"
            }
          ],
          "priorityLevel": -55
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
                    "state": "Mask_AliveOrRevivable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    }
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
                  "name": "Inject Extra-Turn",
                  "actionTag": [
                    "EnergyTrigger_ElationAbility"
                  ],
                  "forcedPunchline": {
                    "operator": "Variables[0] (20) || RETURN",
                    "displayLines": "20",
                    "constants": [],
                    "variables": [
                      20
                    ]
                  },
                  "skillIndex": {
                    "operator": "Variables[0] (CastElationSkillIndex) || RETURN",
                    "displayLines": "CastElationSkillIndex",
                    "constants": [],
                    "variables": [
                      "CastElationSkillIndex"
                    ]
                  },
                  "forceAction": true,
                  "afterInjection": [
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
                  "variableName": "_AlreadyTriggerElationSkill",
                  "value": 0
                }
              ]
            },
            {
              "name": "Define Custom Variable",
              "scope": "ContextModifier",
              "variableName": "MDF_LayerMod",
              "value": {
                "operator": "Variables[0] (FLOOR) || Variables[1] (MDF_Layer) || Variables[2] (10) || DIV || PARAM_1 || FUNCTION || RETURN",
                "displayLines": "&nbsp;<span class=\"descriptionFunctionColor\">FLOOR</span>((MDF_Layer / 10))",
                "constants": [],
                "variables": [
                  "FLOOR",
                  "MDF_Layer",
                  10
                ]
              }
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
                          "operator": "Variables[0] (MDF_LayerModTriggerLayer) || RETURN",
                          "displayLines": "MDF_LayerModTriggerLayer",
                          "constants": [],
                          "variables": [
                            "MDF_LayerModTriggerLayer"
                          ]
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
                      "name": "Inject Extra-Turn",
                      "actionTag": [
                        "EnergyTrigger_ElationAbility"
                      ],
                      "forcedPunchline": {
                        "operator": "Variables[0] (20) || RETURN",
                        "displayLines": "20",
                        "constants": [],
                        "variables": [
                          20
                        ]
                      },
                      "skillIndex": {
                        "operator": "Variables[0] (CastElationSkillIndex) || RETURN",
                        "displayLines": "CastElationSkillIndex",
                        "constants": [],
                        "variables": [
                          "CastElationSkillIndex"
                        ]
                      },
                      "forceAction": true,
                      "afterInjection": [
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
                      "variableName": "MDF_LayerModTriggerLayer",
                      "value": {
                        "operator": "Variables[0] (MDF_LayerMod) || RETURN",
                        "displayLines": "MDF_LayerMod",
                        "constants": [],
                        "variables": [
                          "MDF_LayerMod"
                        ]
                      }
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
                          "operator": "Variables[0] (10) || RETURN",
                          "displayLines": "10",
                          "constants": [],
                          "variables": [
                            10
                          ]
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
                      "name": "Inject Extra-Turn",
                      "actionTag": [
                        "EnergyTrigger_ElationAbility"
                      ],
                      "forcedPunchline": {
                        "operator": "Variables[0] (20) || RETURN",
                        "displayLines": "20",
                        "constants": [],
                        "variables": [
                          20
                        ]
                      },
                      "skillIndex": {
                        "operator": "Variables[0] (CastElationSkillIndex) || RETURN",
                        "displayLines": "CastElationSkillIndex",
                        "constants": [],
                        "variables": [
                          "CastElationSkillIndex"
                        ]
                      },
                      "forceAction": true,
                      "afterInjection": [
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
                "compareType": "=",
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
                            "operator": "Variables[0] (2) || RETURN",
                            "displayLines": "2",
                            "constants": [],
                            "variables": [
                              2
                            ]
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
              "variableName": "_IsEnergyTrigger",
              "value": 0
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
                "compareType": "=",
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
                  "variableName": "_IsEnergyTrigger",
                  "value": 1
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
                "operator": "Variables[0] (MDF_Layer) || RETURN",
                "displayLines": "MDF_Layer",
                "constants": [],
                "variables": [
                  "MDF_Layer"
                ]
              },
              "maximum": {
                "operator": "Variables[0] (_MaxEnergyPoint) || RETURN",
                "displayLines": "_MaxEnergyPoint",
                "constants": [],
                "variables": [
                  "_MaxEnergyPoint"
                ]
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
              "skillName": "Skill04",
              "tag": [
                "AssistCaster"
              ]
            },
            {
              "name": "Add Ability Tag",
              "skillName": "Skill41",
              "tag": [
                "AssistCaster"
              ]
            },
            {
              "name": "Define Custom Variable",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "scope": "ContextCaster",
              "variableName": "CastElationSkillIndex",
              "value": 4
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
                  "operator": "Variables[0] (2) || RETURN",
                  "displayLines": "2",
                  "constants": [],
                  "variables": [
                    2
                  ]
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
                  "operator": "Variables[0] (0.48) || RETURN",
                  "displayLines": "0.48",
                  "constants": [],
                  "variables": [
                    0.48
                  ]
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
          "from": "ContextCaster",
          "valueRanges": [
            {
              "name": "Variable Value Range Conditions",
              "minValue": 0,
              "maxValue": {
                "operator": "Variables[0] (_MaxEnergyPoint) || RETURN",
                "displayLines": "_MaxEnergyPoint",
                "constants": [],
                "variables": [
                  "_MaxEnergyPoint"
                ]
              },
              "includeMaxValueInRange": true,
              "whenValueChanges": [
                {
                  "name": "Update Displayed Energy Bar",
                  "value": {
                    "operator": "Variables[0] (MDF_Layer) || RETURN",
                    "displayLines": "MDF_Layer",
                    "constants": [],
                    "variables": [
                      "MDF_Layer"
                    ]
                  },
                  "maximum": {
                    "operator": "Variables[0] (_MaxEnergyPoint) || RETURN",
                    "displayLines": "_MaxEnergyPoint",
                    "constants": [],
                    "variables": [
                      "_MaxEnergyPoint"
                    ]
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
                    "operator": "Variables[0] (MDF_Layer) || RETURN",
                    "displayLines": "MDF_Layer",
                    "constants": [],
                    "variables": [
                      "MDF_Layer"
                    ]
                  },
                  "maximum": {
                    "operator": "Variables[0] (_MaxEnergyPoint) || RETURN",
                    "displayLines": "_MaxEnergyPoint",
                    "constants": [],
                    "variables": [
                      "_MaxEnergyPoint"
                    ]
                  },
                  "assignState": "True",
                  "priorState": "Normal",
                  "bar#": 4
                },
                {
                  "name": "Add Ability Tag",
                  "skillName": "Skill41",
                  "tag": [
                    "AssistCaster"
                  ]
                },
                {
                  "name": "Add Ability Tag",
                  "skillName": "Skill04",
                  "tag": [
                    "AssistCaster"
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
              "name": "Update Displayed Energy Bar",
              "value": {
                "operator": "Variables[0] (MDF_Layer) || RETURN",
                "displayLines": "MDF_Layer",
                "constants": [],
                "variables": [
                  "MDF_Layer"
                ]
              },
              "maximum": {
                "operator": "Variables[0] (_MaxEnergyPoint) || RETURN",
                "displayLines": "_MaxEnergyPoint",
                "constants": [],
                "variables": [
                  "_MaxEnergyPoint"
                ]
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
                  "skillName": "Skill04",
                  "tag": [
                    "AssistCaster"
                  ]
                },
                {
                  "name": "Add Ability Tag",
                  "skillName": "Skill41",
                  "tag": [
                    "AssistCaster"
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
                "operator": "Constants[0] (1) || RETURN",
                "displayLines": "1",
                "constants": [
                  1
                ],
                "variables": []
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
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">SPDFlat</span>&nbsp;",
              "value": {
                "operator": "Variables[0] (MDF_PropertyValue) || Variables[1] (_StackNum) || MUL || RETURN",
                "displayLines": "(MDF_PropertyValue * _StackNum)",
                "constants": [],
                "variables": [
                  "MDF_PropertyValue",
                  "_StackNum"
                ]
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
              "name": "Attack-Type Extension",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "typeToExtend": "Elation DMG",
              "isRemove": true
            }
          ]
        },
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Attack-Type Extension",
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
}