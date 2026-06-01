const configAbility = {
  "fileName": "Evanescia_Modifiers",
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
      "for": "<a class=\"gModGreen\" id=\"mod__1374695774\">ADV_StageAbility_Maze_Evanescia_HitVisual</a>",
      "counter": 1,
      "stackType": "Merge",
      "onCreation": [
        {
          "name": "Overworld Attack Instance"
        }
      ],
      "onStack": [
        {
          "name": "Overworld Attack Instance"
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1916537335\">ADV_StageAbility_Maze_Evanescia_Invincible</a>",
      "counter": 1,
      "stackType": "Refresh",
      "modifierFlags": [
        "HolyShield"
      ],
      "duration": 3,
      "onStageExit": [
        "Modifier Deletes Itself"
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1997331056\">ADV_StageAbility_Maze_Evanescia_00</a>",
      "counter": 1,
      "stackType": "Merge"
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1494467653\">_M_Evanescia_Eidolon1_ElationRetry</a>",
      "execute": [
        {
          "eventTrigger": "When Constructing Modifier",
          "execute": [
            {
              "name": "Use Custom Character Function",
              "functionName": "<a class=\"gTempYellow\" id=\"-1246198566\">Ying_Eidolon1_ElationRetarget</a>"
            }
          ]
        },
        {
          "eventTrigger": "Action Choice Window [Anyone]",
          "execute": [
            "Modifier Deletes Itself"
          ]
        },
        {
          "eventTrigger": "Enter Battle",
          "execute": [
            {
              "name": "Use Custom Character Function",
              "functionName": "<a class=\"gTempYellow\" id=\"-1246198566\">Ying_Eidolon1_ElationRetarget</a>"
            }
          ],
          "priorityLevel": -55
        },
        {
          "eventTrigger": "Custom Event",
          "execute": [
            {
              "name": "Use Custom Character Function",
              "functionName": "<a class=\"gTempYellow\" id=\"-1246198566\">Ying_Eidolon1_ElationRetarget</a>"
            }
          ]
        },
        {
          "eventTrigger": "Leave Battle",
          "execute": [
            "Modifier Deletes Itself"
          ]
        },
        {
          "eventTrigger": "New Enemy Wave",
          "execute": [
            {
              "name": "Use Custom Character Function",
              "functionName": "<a class=\"gTempYellow\" id=\"-1246198566\">Ying_Eidolon1_ElationRetarget</a>"
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
                  "functionName": "<a class=\"gTempYellow\" id=\"-1246198566\">Ying_Eidolon1_ElationRetarget</a>"
                }
              ]
            }
          ]
        }
      ],
      "modifierFunctions": [
        {
          "name": "CharacterFunctions",
          "functionName": "<a class=\"gTempYellow\" id=\"fun__-1246198566\">Ying_Eidolon1_ElationRetarget</a>",
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
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-259865340\">Evanescia_InsertElationAbilityShow</a>"
                },
                {
                  "name": "Inject Elation Skill Extra-Turn (Default priority)",
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
      "for": "<a class=\"gModGreen\" id=\"mod__-259865340\">Evanescia_InsertElationAbilityShow</a>",
      "stackType": "ReplaceByCaster",
      "addStacksPerTrigger": 1,
      "execute": [
        {
          "eventTrigger": "When Modifier Destroyed/Removed",
          "execute": [
            "Unknown EventType2 (Not always an error)[1 false][2 true][3_NAME Evanescia]"
          ]
        },
        {
          "eventTrigger": "Ability Use [Owner]: Start",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "In Aha-Instant",
                    "invertCondition": true
                  },
                  {
                    "name": "Skill Type",
                    "skillType": "Elation"
                  },
                  {
                    "name": "Is Part Of",
                    "of": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "target": "Add Target by Current Extra-Turn Source",
                    "mustBeAlive2": true
                  }
                ]
              },
              "passed": [
                "Unknown EventType2 (Not always an error)[2 true][3_NAME Evanescia]"
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
                    "name": "In Aha-Instant",
                    "invertCondition": true
                  },
                  {
                    "name": "Skill Type",
                    "skillType": "Elation"
                  },
                  {
                    "name": "Is Part Of",
                    "of": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "target": "Add Target by Current Extra-Turn Source",
                    "mustBeAlive2": true
                  }
                ]
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-259865340\">Evanescia_InsertElationAbilityShow</a>",
                  "addStacksPerTrigger": -1
                },
                "Unknown EventType2 (Not always an error)[1 false][2 true][3_NAME Evanescia]",
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "compareType": "<=",
                    "value2": 0,
                    "valueType": "Layer"
                  },
                  "passed": [
                    "Modifier Deletes Itself"
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
      "for": "<a class=\"gModGreen\" id=\"mod__-497628166\">_M_Evanescia_InsertCheck</a>",
      "modifierFlags": [
        "CustomEvent_InfiniteRefresh"
      ],
      "execute": [
        {
          "eventTrigger": "When Constructing Modifier",
          "execute": [
            {
              "name": "Use Custom Character Function",
              "functionName": "<a class=\"gTempYellow\" id=\"-224630805\">Ying_InsertRetarget</a>"
            }
          ]
        },
        {
          "eventTrigger": "Action Choice Window [Anyone]",
          "execute": [
            "Modifier Deletes Itself"
          ]
        },
        {
          "eventTrigger": "Enter Battle",
          "execute": [
            {
              "name": "Use Custom Character Function",
              "functionName": "<a class=\"gTempYellow\" id=\"-224630805\">Ying_InsertRetarget</a>"
            }
          ],
          "priorityLevel": -55
        },
        {
          "eventTrigger": "Custom Event",
          "execute": [
            {
              "name": "Use Custom Character Function",
              "functionName": "<a class=\"gTempYellow\" id=\"-224630805\">Ying_InsertRetarget</a>"
            }
          ]
        },
        {
          "eventTrigger": "New Enemy Wave",
          "execute": [
            {
              "name": "Use Custom Character Function",
              "functionName": "<a class=\"gTempYellow\" id=\"-224630805\">Ying_InsertRetarget</a>"
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
                  "functionName": "<a class=\"gTempYellow\" id=\"-224630805\">Ying_InsertRetarget</a>"
                }
              ]
            }
          ]
        }
      ],
      "modifierFunctions": [
        {
          "name": "CharacterFunctions",
          "functionName": "<a class=\"gTempYellow\" id=\"fun__-224630805\">Ying_InsertRetarget</a>",
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
                  "name": "Inject Ability Use",
                  "condition": {
                    "name": "Insert Ability Condition",
                    "type": "AbilityOwnerInsertUnusedCount",
                    "typeValue": 1
                  },
                  "abilityName": "EvanesciaCombat_Insert_SelectTarget",
                  "abilitySource": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "abilityTarget": {
                    "name": "Target Name",
                    "target": "{{Hostile Entities(AOE)}}"
                  },
                  "priorityTag": "CharacterAttackFromSelf",
                  "showInActionOrder": true,
                  "abortFlags": [
                    "STAT_CTRL",
                    "DisableAction"
                  ],
                  "allowAbilityTriggers": false
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1743452944\">_M_Evanescia_InsertCheck_OnCtrlRelease</a>",
      "execute": [
        {
          "eventTrigger": "When Losing Modifier [Owner]",
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
                  },
                  {
                    "name": "Compare: Variable",
                    "value1": "AccumulatedEcho",
                    "compareType": ">=",
                    "value2": {
                      "operator": "Variables[0] (240) || RETURN",
                      "displayLines": "240",
                      "constants": [],
                      "variables": [
                        240
                      ]
                    }
                  },
                  {
                    "name": "Enemies Still Alive",
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
                  "functionName": "<a class=\"gTempYellow\" id=\"-1152920824\">_T_Evanescia_TriggerWonded</a>"
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
      "for": "<a class=\"gModGreen\" id=\"mod__1034192870\">Evanescia_SPOverflow</a>",
      "stackType": "Multiple"
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1401105900\">Evanescia_Ultimate_PrepareInsertAction</a>",
      "execute": [
        {
          "eventTrigger": "When Constructing Modifier"
        },
        {
          "eventTrigger": "When Modifier Destroyed/Removed"
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__443021726\">Evanescia_ElationMark</a>",
      "stackType": "ReplaceByCaster"
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-568282578\">Evanescia_BeDamageAddedRatio</a>[<span class=\"descriptionNumberColor\">Vulnerability</span>]",
      "stackType": "ReplaceByCaster",
      "description": "DMG taken increases by <span class=\"descriptionNumberColor\">MDF_AllDamageTypeTakenRatio</span>.",
      "type": "Debuff",
      "effectName": "Vulnerability",
      "statusName": "Vulnerability",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Define Custom Variable",
              "variableName": "MDF_AllDamageTypeTakenRatio",
              "value": {
                "operator": "Variables[0] (MDF_PropertyValue) || RETURN",
                "displayLines": "MDF_PropertyValue",
                "constants": [],
                "variables": [
                  "MDF_PropertyValue"
                ]
              }
            },
            {
              "name": "Stack Target Stat Value",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">Vulnerability</span>&nbsp;",
              "value": {
                "operator": "Variables[0] (MDF_AllDamageTypeTakenRatio) || RETURN",
                "displayLines": "MDF_AllDamageTypeTakenRatio",
                "constants": [],
                "variables": [
                  "MDF_AllDamageTypeTakenRatio"
                ]
              }
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1630345914\">Evanescia_Passive_CritToElation</a>[<span class=\"descriptionNumberColor\">Youth: Halcyon Evermore</span>]",
      "stackType": "ReplaceByCaster",
      "description": "Elation increases by <span class=\"descriptionNumberColor\">MDF_PropertyValue</span>.",
      "type": "Buff",
      "effectName": "Elation Boost",
      "statusName": "Youth: Halcyon Evermore",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Define Custom Variable with Stat",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "variableName": "CasterCriticalDamage",
              "value": "&nbsp;<span class=\"descriptionNumberColor\">CritDamageBase</span>&nbsp;"
            },
            {
              "name": "Define Custom Variable",
              "variableName": "MDF_PropertyValue",
              "value": {
                "operator": "Variables[0] (CasterCriticalDamage) || Variables[1] (0.2) || MUL || RETURN",
                "displayLines": "(CasterCriticalDamage * 0.2)",
                "constants": [],
                "variables": [
                  "CasterCriticalDamage",
                  0.2
                ]
              }
            },
            {
              "name": "Stack Target Stat Value",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">ElationDMGAll</span>&nbsp;",
              "value": {
                "operator": "Constants[0] (0) || RETURN",
                "displayLines": "0",
                "constants": [
                  0
                ],
                "variables": []
              }
            },
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
          "eventTrigger": "When Stacking Modifier Instance [Owner]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Modifier Was",
                "modifier": "<a class=\"gModGreen\" id=\"-1843890475\">Relic_325_Sub2</a>"
              },
              "passed": [
                {
                  "name": "Define Custom Variable with Stat",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "variableName": "CasterCriticalDamage",
                  "value": "&nbsp;<span class=\"descriptionNumberColor\">CritDamageBase</span>&nbsp;"
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_PropertyValue",
                  "value": {
                    "operator": "Variables[0] (CasterCriticalDamage) || Variables[1] (0.2) || MUL || RETURN",
                    "displayLines": "(CasterCriticalDamage * 0.2)",
                    "constants": [],
                    "variables": [
                      "CasterCriticalDamage",
                      0.2
                    ]
                  }
                },
                {
                  "name": "Stack Target Stat Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">ElationDMGAll</span>&nbsp;",
                  "value": {
                    "operator": "Constants[0] (0) || RETURN",
                    "displayLines": "0",
                    "constants": [
                      0
                    ],
                    "variables": []
                  }
                },
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
        }
      ],
      "abilityValueChange": [
        {
          "name": "Ability Value Changes",
          "variableName": "&nbsp;<span class=\"descriptionNumberColor\">CritDamageBase</span>&nbsp;",
          "valueRanges": [
            {
              "name": "Variable Value Range Conditions",
              "whenValueChanges": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": []
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable with Stat",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "variableName": "CasterCriticalDamage",
                      "value": "&nbsp;<span class=\"descriptionNumberColor\">CritDamageBase</span>&nbsp;"
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "MDF_PropertyValue",
                      "value": {
                        "operator": "Variables[0] (CasterCriticalDamage) || Variables[1] (0.2) || MUL || RETURN",
                        "displayLines": "(CasterCriticalDamage * 0.2)",
                        "constants": [],
                        "variables": [
                          "CasterCriticalDamage",
                          0.2
                        ]
                      }
                    },
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
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1567859554\">Evanescia_Eidolon6_EchoPointLifeTime</a>",
      "stackType": "ReplaceByCaster",
      "execute": [
        {
          "eventTrigger": "When Constructing Modifier",
          "execute": [
            {
              "name": "Adjust Modifier Value",
              "variableName": "Evanescia_Rank06_EchoPointLifeTime",
              "modifierName": "<a class=\"gModGreen\" id=\"-1491295670\">MBattleEvent_Elation_ElationEchoPointBonus</a>[<span class=\"descriptionNumberColor\">undefined</span>]",
              "changeDuration": {
                "operator": "Variables[0] (1) || RETURN",
                "displayLines": "1",
                "constants": [],
                "variables": [
                  1
                ]
              }
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-952189456\">Evanescia_Eidolon6_UltraEnergyRefund</a>",
      "stackType": "ReplaceByCaster",
      "execute": [
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
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "DV_UltraCountdown",
                    "compareType": "<=",
                    "value2": 1,
                    "contextScope": "ContextModifier"
                  },
                  "passed": [
                    {
                      "name": "Update Energy",
                      "on": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "value": {
                        "operator": "Variables[0] (120) || RETURN",
                        "displayLines": "120",
                        "constants": [],
                        "variables": [
                          120
                        ]
                      },
                      "isFixed": "(Fixed)"
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "DV_UltraCountdown",
                      "value": {
                        "operator": "Variables[0] (4) || RETURN",
                        "displayLines": "4",
                        "constants": [],
                        "variables": [
                          4
                        ]
                      }
                    }
                  ],
                  "failed": [
                    {
                      "name": "Define Custom Variable with Added Value",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "variableName": "DV_UltraCountdown",
                      "context": "ContextModifier",
                      "value": -1
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
      "for": "<a class=\"gModGreen\" id=\"mod__611817179\">Evanescia_Eidolon6_ElationDamageExtra</a>[<span class=\"descriptionNumberColor\">Maiden: A Step into Dreams</span>]",
      "stackType": "ReplaceByCaster",
      "description": "Elation DMG merrymakes by <span class=\"descriptionNumberColor\">MDF_PropertyValue</span>.",
      "type": "Buff",
      "statusName": "Maiden: A Step into Dreams",
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
                  "name": "Define Custom Variable with Stat",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "variableName": "_EchoPoint",
                  "value": "&nbsp;<span class=\"descriptionNumberColor\">CertifiedBanger</span>&nbsp;"
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_PropertyValue",
                  "value": {
                    "operator": "Variables[0] (FLOOR) || Variables[1] (MIN) || Variables[2] (_EchoPoint) || Constants[0] (1000) || PARAM_2 || FUNCTION || Constants[1] (100) || DIV || PARAM_1 || FUNCTION || Variables[3] (0.02) || MUL || Variables[4] (0.15) || ADD || RETURN",
                    "displayLines": "((&nbsp;<span class=\"descriptionFunctionColor\">FLOOR</span>((&nbsp;<span class=\"descriptionFunctionColor\">MIN</span>(_EchoPoint, 1000) / 100)) * 0.02) + 0.15)",
                    "constants": [
                      1000,
                      100
                    ],
                    "variables": [
                      "FLOOR",
                      "MIN",
                      "_EchoPoint",
                      0.02,
                      0.15
                    ]
                  }
                },
                {
                  "name": "Adjust Target Stats",
                  "modifiedValuesArray": [
                    {
                      "on": "Attacker",
                      "statName": "&nbsp;<span class=\"descriptionNumberColor\">MerryMake</span>&nbsp;",
                      "value": "((&nbsp;<span class=\"descriptionFunctionColor\">FLOOR</span>((&nbsp;<span class=\"descriptionFunctionColor\">MIN</span>(_EchoPoint, 1000) / 100)) * 0.02) + 0.15)"
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
              "name": "Define Custom Variable with Stat",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "variableName": "_EchoPoint",
              "value": "&nbsp;<span class=\"descriptionNumberColor\">CertifiedBanger</span>&nbsp;"
            },
            {
              "name": "Define Custom Variable",
              "variableName": "MDF_PropertyValue",
              "value": {
                "operator": "Variables[0] (FLOOR) || Variables[1] (MIN) || Variables[2] (_EchoPoint) || Constants[0] (1000) || PARAM_2 || FUNCTION || Constants[1] (100) || DIV || PARAM_1 || FUNCTION || Variables[3] (0.02) || MUL || Variables[4] (0.15) || ADD || RETURN",
                "displayLines": "((&nbsp;<span class=\"descriptionFunctionColor\">FLOOR</span>((&nbsp;<span class=\"descriptionFunctionColor\">MIN</span>(_EchoPoint, 1000) / 100)) * 0.02) + 0.15)",
                "constants": [
                  1000,
                  100
                ],
                "variables": [
                  "FLOOR",
                  "MIN",
                  "_EchoPoint",
                  0.02,
                  0.15
                ]
              }
            }
          ]
        }
      ],
      "abilityValueChange": [
        {
          "name": "Ability Value Changes",
          "variableName": "&nbsp;<span class=\"descriptionNumberColor\">EnergyCurrent</span>&nbsp;",
          "valueRanges": [
            {
              "name": "Variable Value Range Conditions",
              "minValue": 0,
              "maxValue": 999,
              "triggerClampedChanges": true,
              "whenValueChanges": [
                {
                  "name": "Define Custom Variable with Stat",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "variableName": "_EchoPoint",
                  "value": "&nbsp;<span class=\"descriptionNumberColor\">CertifiedBanger</span>&nbsp;"
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_PropertyValue",
                  "value": {
                    "operator": "Variables[0] (FLOOR) || Variables[1] (MIN) || Variables[2] (_EchoPoint) || Constants[0] (1000) || PARAM_2 || FUNCTION || Constants[1] (100) || DIV || PARAM_1 || FUNCTION || Variables[3] (0.02) || MUL || Variables[4] (0.15) || ADD || RETURN",
                    "displayLines": "((&nbsp;<span class=\"descriptionFunctionColor\">FLOOR</span>((&nbsp;<span class=\"descriptionFunctionColor\">MIN</span>(_EchoPoint, 1000) / 100)) * 0.02) + 0.15)",
                    "constants": [
                      1000,
                      100
                    ],
                    "variables": [
                      "FLOOR",
                      "MIN",
                      "_EchoPoint",
                      0.02,
                      0.15
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
      "for": "<a class=\"gModGreen\" id=\"mod__-717029027\">Evanescia_Eidolon4</a>",
      "stackType": "ReplaceByCaster",
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
                  "value": "(-1 * 0.15)"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-817694741\">Evanescia_Eidolon2</a>[<span class=\"descriptionNumberColor\">Voyage: A Wish for Everbloom</span>]",
      "stackType": "ReplaceByCaster",
      "description": "CRIT DMG increases by <span class=\"descriptionNumberColor\">#SkillRank_Rank02_P1_Ratio</span>.",
      "type": "Buff",
      "statusName": "Voyage: A Wish for Everbloom",
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
                "operator": "Variables[0] (0.36) || RETURN",
                "displayLines": "0.36",
                "constants": [],
                "variables": [
                  0.36
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
      "for": "<a class=\"gModGreen\" id=\"mod__-800917122\">Evanescia_Eidolon1</a>[<span class=\"descriptionNumberColor\">Home: A Prayer in Dance</span>]",
      "stackType": "ReplaceByCaster",
      "description": "All-Type RES PEN increases by <span class=\"descriptionNumberColor\">#SkillRank_Rank01_P1_Ratio</span>.",
      "type": "Buff",
      "statusName": "Home: A Prayer in Dance",
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
                "operator": "Variables[0] (0.2) || RETURN",
                "displayLines": "0.2",
                "constants": [],
                "variables": [
                  0.2
                ]
              },
              "isRefresh": true
            }
          ]
        }
      ]
    }
  ],
  "references": []
}