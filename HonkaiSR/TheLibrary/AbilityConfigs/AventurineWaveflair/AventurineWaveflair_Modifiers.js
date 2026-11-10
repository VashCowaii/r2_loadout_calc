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
}