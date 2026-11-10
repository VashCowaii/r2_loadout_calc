const entityPageType = "char"
const compositeAbilityObject = {
  "fullCharacterName": "Evanescia",
  "trimCharacterName": "Evanescia",
  "abilityList": [
    "Evanescia_Modifiers",
    "Evanescia_Evanescia_Trace02",
    "Evanescia_Evanescia_Trace01",
    "Evanescia_LocalPlayer_StandardAbility_AttackBreak",
    "Evanescia_LocalPlayer_Evanescia_TechniqueUsage",
    "Evanescia_LocalPlayer_Evanescia_NormalAtk01",
    "Evanescia_Evanescia_TechniqueInLevel",
    "Evanescia_EvanesciaCombat_Insert_Part02",
    "Evanescia_EvanesciaCombat_Insert_Part01",
    "Evanescia_EvanesciaCombat_Insert_SelectTarget",
    "Evanescia_Evanescia_PassiveAbility01",
    "Evanescia_Evanescia_Ability04_Part02",
    "Evanescia_Evanescia_Ability04_Part01",
    "Evanescia_Evanescia_Ability03_Part02",
    "Evanescia_Evanescia_Ability03_Part01",
    "Evanescia_Evanescia_Ability03_EnterReady",
    "Evanescia_Evanescia_Ability02_Part02",
    "Evanescia_Evanescia_Ability02_Part01",
    "Evanescia_Evanescia_Ability01_Part02",
    "Evanescia_Evanescia_Ability01_Part01",
    "Evanescia_Functions"
  ],
  "abilityObject": {
    "Evanescia_Modifiers": {
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
              "priorityLevel": -55,
              "execute": [
                {
                  "name": "Use Custom Character Function",
                  "functionName": "<a class=\"gTempYellow\" id=\"-1246198566\">Ying_Eidolon1_ElationRetarget</a>"
                }
              ]
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
              "eventTrigger": "Batch: Enemy Arrival",
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
                      "actionTag": null,
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
                        "target1": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        "target2": "Add Target by Current Extra-Turn Source"
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
                        "target1": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        "target2": "Add Target by Current Extra-Turn Source"
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
              "priorityLevel": -55,
              "execute": [
                {
                  "name": "Use Custom Character Function",
                  "functionName": "<a class=\"gTempYellow\" id=\"-224630805\">Ying_InsertRetarget</a>"
                }
              ]
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
              "eventTrigger": "Batch: Enemy Arrival",
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
                          "displayLines": "240"
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
                  "value": {
                    "displayLines": "MDF_PropertyValue"
                  },
                  "variableName": "MDF_AllDamageTypeTakenRatio"
                },
                {
                  "name": "Stack Target Stat Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "propertyName": "&nbsp;<span class=\"descriptionNumberColor\">Vulnerability</span>&nbsp;",
                  "statValue": {
                    "displayLines": "MDF_AllDamageTypeTakenRatio"
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
                  "variableName": "CasterCriticalDamage",
                  "readTarget": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "value": "&nbsp;<span class=\"descriptionNumberColor\">CritDamageBase</span>&nbsp;"
                },
                {
                  "name": "Define Custom Variable",
                  "value": {
                    "displayLines": "(CasterCriticalDamage * 0.2)"
                  },
                  "variableName": "MDF_PropertyValue"
                },
                {
                  "name": "Stack Target Stat Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "propertyName": "&nbsp;<span class=\"descriptionNumberColor\">ElationDMGAll</span>&nbsp;",
                  "statValue": {
                    "displayLines": "0"
                  }
                },
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
                      "variableName": "CasterCriticalDamage",
                      "readTarget": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "value": "&nbsp;<span class=\"descriptionNumberColor\">CritDamageBase</span>&nbsp;"
                    },
                    {
                      "name": "Define Custom Variable",
                      "value": {
                        "displayLines": "(CasterCriticalDamage * 0.2)"
                      },
                      "variableName": "MDF_PropertyValue"
                    },
                    {
                      "name": "Stack Target Stat Value",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "propertyName": "&nbsp;<span class=\"descriptionNumberColor\">ElationDMGAll</span>&nbsp;",
                      "statValue": {
                        "displayLines": "0"
                      }
                    },
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
            }
          ],
          "abilityValueChange": [
            {
              "name": "Ability Value Changes",
              "propertyName": "&nbsp;<span class=\"descriptionNumberColor\">CritDamageBase</span>&nbsp;",
              "valueRanges": [
                {
                  "name": "Variable Value Range Conditions",
                  "onChange": [
                    {
                      "name": "IF",
                      "conditions": "AND",
                      "passed": [
                        {
                          "name": "Define Custom Variable with Stat",
                          "variableName": "CasterCriticalDamage",
                          "readTarget": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "value": "&nbsp;<span class=\"descriptionNumberColor\">CritDamageBase</span>&nbsp;"
                        },
                        {
                          "name": "Define Custom Variable",
                          "value": {
                            "displayLines": "(CasterCriticalDamage * 0.2)"
                          },
                          "variableName": "MDF_PropertyValue"
                        },
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
                    "displayLines": "1"
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
                            "displayLines": "120"
                          },
                          "isFixed": "(Fixed)"
                        },
                        {
                          "name": "Define Custom Variable",
                          "value": {
                            "displayLines": "4"
                          },
                          "variableName": "DV_UltraCountdown"
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
                      "variableName": "_EchoPoint",
                      "readTarget": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "value": "&nbsp;<span class=\"descriptionNumberColor\">CertifiedBanger</span>&nbsp;"
                    },
                    {
                      "name": "Define Custom Variable",
                      "value": {
                        "displayLines": "((&nbsp;<span class=\"descriptionFunctionColor\">FLOOR</span>((&nbsp;<span class=\"descriptionFunctionColor\">MIN</span>(_EchoPoint, 1000) / 100)) * 0.02) + 0.15)"
                      },
                      "variableName": "MDF_PropertyValue"
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
                  "variableName": "_EchoPoint",
                  "readTarget": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "value": "&nbsp;<span class=\"descriptionNumberColor\">CertifiedBanger</span>&nbsp;"
                },
                {
                  "name": "Define Custom Variable",
                  "value": {
                    "displayLines": "((&nbsp;<span class=\"descriptionFunctionColor\">FLOOR</span>((&nbsp;<span class=\"descriptionFunctionColor\">MIN</span>(_EchoPoint, 1000) / 100)) * 0.02) + 0.15)"
                  },
                  "variableName": "MDF_PropertyValue"
                }
              ]
            }
          ],
          "abilityValueChange": [
            {
              "name": "Ability Value Changes",
              "propertyName": "&nbsp;<span class=\"descriptionNumberColor\">EnergyCurrent</span>&nbsp;",
              "valueRanges": [
                {
                  "name": "Variable Value Range Conditions",
                  "minValue": 0,
                  "maxValue": 999,
                  "triggerClampedChanges": true,
                  "onChange": [
                    {
                      "name": "Define Custom Variable with Stat",
                      "variableName": "_EchoPoint",
                      "readTarget": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "value": "&nbsp;<span class=\"descriptionNumberColor\">CertifiedBanger</span>&nbsp;"
                    },
                    {
                      "name": "Define Custom Variable",
                      "value": {
                        "displayLines": "((&nbsp;<span class=\"descriptionFunctionColor\">FLOOR</span>((&nbsp;<span class=\"descriptionFunctionColor\">MIN</span>(_EchoPoint, 1000) / 100)) * 0.02) + 0.15)"
                      },
                      "variableName": "MDF_PropertyValue"
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
                  "propertyName": "&nbsp;<span class=\"descriptionNumberColor\">CritDamageBase</span>&nbsp;",
                  "statValue": {
                    "displayLines": "0.36"
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
                  "propertyName": "&nbsp;<span class=\"descriptionNumberColor\">ResistanceAllPEN</span>&nbsp;",
                  "statValue": {
                    "displayLines": "0.2"
                  },
                  "isRefresh": true
                }
              ]
            }
          ]
        }
      ],
      "references": []
    },
    "Evanescia_Evanescia_Trace02": {
      "fileName": "Evanescia_Evanescia_Trace02",
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
          "modifier": "<a class=\"gModGreen\" id=\"-1048487554\">Evanescia_Trace02</a>"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1048487554\">Evanescia_Trace02</a>"
        }
      ],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      }
    },
    "Evanescia_Evanescia_Trace01": {
      "fileName": "Evanescia_Evanescia_Trace01",
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
          "modifier": "<a class=\"gModGreen\" id=\"-1065265173\">Evanescia_Trace01</a>"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1065265173\">Evanescia_Trace01</a>"
        }
      ],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      }
    },
    "Evanescia_LocalPlayer_StandardAbility_AttackBreak": {
      "fileName": "Evanescia_LocalPlayer_StandardAbility_AttackBreak",
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
        "primaryTarget": "{{Caster}}"
      }
    },
    "Evanescia_LocalPlayer_Evanescia_TechniqueUsage": {
      "fileName": "Evanescia_LocalPlayer_Evanescia_TechniqueUsage",
      "skillTrigger": "MazeSkill",
      "abilityType": "Basic ATK",
      "toughnessList": null,
      "parse": [
        {
          "name": "IF",
          "conditions": "Ability Has a Target",
          "passed": [
            "Deleted bullshit",
            {
              "name": "Define Custom Variable",
              "value": 1,
              "variableName": "MazeSkill_HitTarget"
            }
          ],
          "failed": [
            {
              "name": "IF",
              "conditions": {
                "name": "In Motion (Overworld)",
                "flag": "FastRun"
              },
              "passed": [
                "Deleted bullshit"
              ],
              "failed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "In Motion (Overworld)",
                    "flag": "Run"
                  },
                  "passed": [
                    "Deleted bullshit"
                  ],
                  "failed": [
                    "Deleted bullshit"
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Ability Has a Target",
            "invertCondition": true
          }
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1916537335\">ADV_StageAbility_Maze_Evanescia_Invincible</a>",
          "duration": 3
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "MazeSkill_HitTarget",
            "compareType": ">=",
            "value2": 1
          },
          "passed": [
            {
              "name": "Define Custom Variable with Team Count",
              "variableName": "EnemyCount",
              "readTarget": {
                "name": "Target Sequence",
                "TargetList": [
                  {
                    "name": "Target Name",
                    "target": "{{Adventure Enemy NPCs}}"
                  },
                  {
                    "name": "Target Filter",
                    "conditions": {
                      "name": "Compare: Variable",
                      "from": {
                        "name": "Target Name",
                        "target": "{{Adventure Player}}"
                      },
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "value1": "Distance_Between_Entities",
                      "compareType": "<=",
                      "value2": 10
                    }
                  }
                ]
              }
            },
            {
              "name": "Define Custom Variable",
              "value": {
                "displayLines": "(#CL_DeltaTime / &nbsp;<span class=\"descriptionFunctionColor\">MAX</span>(EnemyCount, 3))"
              },
              "variableName": "#CL_DeltaTime"
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Sequence",
                "TargetList": [
                  {
                    "name": "Target Name",
                    "target": "{{Adventure Enemy NPCs}}"
                  },
                  {
                    "name": "Target Filter",
                    "conditions": {
                      "name": "Compare: Target",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Ability Target(ST)}}"
                      },
                      "target2": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      }
                    }
                  }
                ]
              },
              "modifier": "<a class=\"gModGreen\" id=\"1374695774\">ADV_StageAbility_Maze_Evanescia_HitVisual</a>"
            },
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Sequence",
                "TargetList": [
                  {
                    "name": "Target Name",
                    "target": "{{Adventure Enemy NPCs}}"
                  },
                  {
                    "name": "Target Filter",
                    "conditions": {
                      "name": "AND",
                      "conditionList": [
                        {
                          "name": "Compare: Variable",
                          "from": {
                            "name": "Target Name",
                            "target": "{{Adventure Player}}"
                          },
                          "to": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "value1": "Distance_Between_Entities",
                          "compareType": "<=",
                          "value2": 10
                        },
                        {
                          "name": "Compare: Target",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Ability Target(ST)}}"
                          },
                          "target2": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "invertCondition": true
                        }
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
                "value1": "EnemyCount",
                "compareType": "<",
                "value2": 3
              },
              "passed": [
                {
                  "name": "Looped Event",
                  "maxLoops": {
                    "displayLines": "(3 - EnemyCount)"
                  },
                  "execute": [
                    {
                      "name": "Find New Target",
                      "from": {
                        "name": "Target Sequence",
                        "TargetList": [
                          {
                            "name": "Target Name",
                            "target": "{{Adventure Enemy NPCs}}"
                          },
                          {
                            "name": "Target Filter",
                            "conditions": {
                              "name": "Compare: Variable",
                              "from": {
                                "name": "Target Name",
                                "target": "{{Adventure Player}}"
                              },
                              "to": {
                                "name": "Target Name",
                                "target": "{{Parameter Target}}"
                              },
                              "value1": "Distance_Between_Entities",
                              "compareType": "<=",
                              "value2": 10
                            }
                          }
                        ]
                      },
                      "searchRandom": true
                    }
                  ]
                }
              ]
            }
          ],
          "failed": [
            {
              "name": "Define Custom Variable",
              "value": 3,
              "variableName": "#CL_Distance"
            }
          ]
        },
        "Deleted bullshit",
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1916537335\">ADV_StageAbility_Maze_Evanescia_Invincible</a>"
        },
        {
          "name": "Overworld Attack Instance",
          "onAttack": [
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1374695774\">ADV_StageAbility_Maze_Evanescia_HitVisual</a>"
            }
          ],
          "onBattle": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": null,
              "ID": "150501(SkillMaze)"
            }
          ],
          "entryTargetType": "AllHitTarget"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Adventure Enemy NPCs}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1374695774\">ADV_StageAbility_Maze_Evanescia_HitVisual</a>"
        }
      ],
      "onAbortReg": [
        "Deleted bullshit",
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1916537335\">ADV_StageAbility_Maze_Evanescia_Invincible</a>"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Adventure Enemy NPCs}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1374695774\">ADV_StageAbility_Maze_Evanescia_HitVisual</a>"
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
    "Evanescia_LocalPlayer_Evanescia_NormalAtk01": {
      "fileName": "Evanescia_LocalPlayer_Evanescia_NormalAtk01",
      "skillTrigger": "NormalAtk",
      "abilityType": "Basic ATK",
      "toughnessList": null,
      "parse": [
        {
          "name": "IF",
          "conditions": "Ability Has a Target",
          "passed": [
            "Deleted bullshit"
          ],
          "failed": [
            {
              "name": "IF",
              "conditions": {
                "name": "In Motion (Overworld)",
                "flag": "FastRun"
              },
              "passed": [
                "Deleted bullshit"
              ],
              "failed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "In Motion (Overworld)",
                    "flag": "Run"
                  },
                  "passed": [
                    "Deleted bullshit"
                  ],
                  "failed": [
                    "Deleted bullshit"
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "Overworld Attack Instance"
        }
      ],
      "onAbortReg": [
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1650011873\">ADV_StageAbility_Maze_Firefly_MidAirInvincible</a>"
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
    "Evanescia_Evanescia_TechniqueInLevel": {
      "fileName": "Evanescia_Evanescia_TechniqueInLevel",
      "childAbilityList": [
        "Evanescia_Evanescia_TechniqueInLevel"
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
          "modifier": "<a class=\"gModGreen\" id=\"539875042\">Technique_Evanescia_Modifier</a>"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__539875042\">Technique_Evanescia_Modifier</a>",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier"
            },
            {
              "eventTrigger": "Enter Battle",
              "priorityLevel": -60,
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
                      "name": "ATK Scaling DMG",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Hostile Entities(AOE)}}"
                      },
                      "canPhase": true,
                      "AttackScaling": {
                        "DamageType": "Physical",
                        "Damage": {
                          "displayLines": "1"
                        },
                        "Toughness": null,
                        "ToughnessDMGType": {
                          "DamageType": "Physical"
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
    "Evanescia_EvanesciaCombat_Insert_Part02": {
      "fileName": "Evanescia_EvanesciaCombat_Insert_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Define Custom Variable with Added Value",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "variableName": "AccumulatedEcho",
          "context": "ContextCaster",
          "value": {
            "displayLines": "(-1 * 240)"
          }
        },
        {
          "name": "Update Displayed Energy Bar",
          "value": {
            "displayLines": "AccumulatedEcho"
          }
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-497628166\">_M_Evanescia_InsertCheck</a>"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1743452944\">_M_Evanescia_InsertCheck_OnCtrlRelease</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1681638350\">_M_Evanescia_Insert_TargetTimeslow</a>",
          "silentAdd": true
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Trace Activated",
            "conditionList": "Weigh All Truths",
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
                "target": "{{Hostile Entities(AOE)}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-568282578\">Evanescia_BeDamageAddedRatio</a>[<span class=\"descriptionNumberColor\">Vulnerability</span>]",
              "duration": {
                "displayLines": "3"
              },
              "valuePerStack": {
                "MDF_PropertyValue": {
                  "displayLines": "0.12"
                }
              }
            }
          ]
        },
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
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Hostile Entities(AOE)}}.[[living]]"
              },
              "canPhase": true,
              "AttackScaling": {
                "DamageType": "Physical",
                "Damage": {
                  "displayLines": "1"
                },
                "Toughness": {
                  "displayLines": "AOE Toughness Value"
                },
                "Tags": null,
                "attackType": "Follow-up"
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
                    "target": "{{Hostile Entities(AOE)}}.[[living]]"
                  },
                  "canPhase": true,
                  "AttackScaling": {
                    "DamageType": "Physical",
                    "DamageElation": {
                      "displayLines": "0.25"
                    },
                    "dmgFormula": "Elation Scaling",
                    "Toughness": null,
                    "Tags": null,
                    "attackType": "Elation DMG"
                  }
                }
              ]
            }
          ],
          "failed": [
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Hostile Entities(AOE)}}"
              },
              "canPhase": true,
              "AttackScaling": {
                "DamageType": "Physical",
                "Damage": {
                  "displayLines": "1"
                },
                "Toughness": {
                  "displayLines": "AOE Toughness Value"
                },
                "Tags": null,
                "attackType": "Follow-up"
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
                    "DamageType": "Physical",
                    "DamageElation": {
                      "displayLines": "0.25"
                    },
                    "dmgFormula": "Elation Scaling",
                    "Toughness": null,
                    "Tags": null,
                    "attackType": "Elation DMG"
                  }
                }
              ]
            }
          ]
        },
        "Trigger: Attack End",
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
                  "actionTag": null,
                  "execute": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-1494467653\">_M_Evanescia_Eidolon1_ElationRetry</a>"
                    }
                  ],
                  "abortFlags": [
                    "STAT_CTRL",
                    "DisableAction"
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
                  "modifier": "<a class=\"gModGreen\" id=\"-1494467653\">_M_Evanescia_Eidolon1_ElationRetry</a>"
                }
              ]
            }
          ]
        },
        {
          "name": "Update Energy",
          "on": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "value": {
            "displayLines": "10"
          },
          "isFixed": "* ERR"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1681638350\">_M_Evanescia_Insert_TargetTimeslow</a>",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier"
            },
            {
              "eventTrigger": "Ability Use [Anyone]: End",
              "execute": [
                "Modifier Deletes Itself"
              ]
            }
          ]
        }
      ],
      "targetObjectData": {
        "primaryTarget": "{{Hostile Entities(AOE)}}"
      }
    },
    "Evanescia_EvanesciaCombat_Insert_Part01": {
      "fileName": "Evanescia_EvanesciaCombat_Insert_Part01",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "UI Display Event",
          "popUpText": "Youth: Halcyon Evermore"
        },
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "ability": "EvanesciaCombat_Insert_Part02"
        },
        "Deleted bullshit",
        {
          "name": "WAIT FOR",
          "conditions": {
            "name": "Death Animation Completed",
            "team": "Enemy Team",
            "entityType": "Team Characters"
          }
        },
        {
          "name": "IF",
          "conditions": "Battle is Over"
        }
      ],
      "references": [],
      "targetObjectData": {
        "primaryTarget": "{{Hostile Entities(AOE)}}"
      }
    },
    "Evanescia_EvanesciaCombat_Insert_SelectTarget": {
      "fileName": "Evanescia_EvanesciaCombat_Insert_SelectTarget",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
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
              "name": "Trigger Ability",
              "from": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "ability": "EvanesciaCombat_Insert_Part01",
              "isTrigger": true
            }
          ],
          "failed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-497628166\">_M_Evanescia_InsertCheck</a>"
            }
          ]
        }
      ],
      "onAbort": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-497628166\">_M_Evanescia_InsertCheck</a>"
        }
      ],
      "references": [],
      "targetObjectData": {
        "primaryTarget": "Inherent Target"
      }
    },
    "Evanescia_Evanescia_PassiveAbility01": {
      "fileName": "Evanescia_Evanescia_PassiveAbility01",
      "childAbilityList": [
        "Evanescia_Evanescia_PassiveAbility01",
        "Evanescia_EvanesciaCombat_Insert_SelectTarget",
        "Evanescia_EvanesciaCombat_Insert_Part01",
        "Evanescia_EvanesciaCombat_Insert_Part02",
        "Evanescia_EvanesciaCombat_Insert_Camera"
      ],
      "skillTrigger": "SkillP01",
      "abilityType": "Talent",
      "energy": null,
      "toughnessList": [
        0,
        10,
        0
      ],
      "parse": [
        {
          "name": "Define Custom Variable with Stat",
          "variableName": "EvanesciaEnergy",
          "readTarget": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "value": "&nbsp;<span class=\"descriptionNumberColor\">CertifiedBanger</span>&nbsp;"
        },
        {
          "name": "Define Custom Variable with Stat",
          "variableName": "EvanesciaSP",
          "readTarget": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "value": "&nbsp;<span class=\"descriptionNumberColor\">EnergyCurrent</span>&nbsp;"
        },
        {
          "name": "Update Energy",
          "on": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "value": {
            "displayLines": "&nbsp;<span class=\"descriptionFunctionColor\">MIN</span>(EvanesciaEnergy, 100)"
          },
          "isFixed": "* ERR"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "EvanesciaSP",
            "compareType": ">",
            "value2": 0
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
                  "displayLines": "EvanesciaSP"
                }
              }
            }
          ]
        },
        {
          "name": "Preload Battle Event(s)",
          "beID": [
            11505
          ]
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1685170340\">Evanescia_Passive</a>"
        },
        {
          "name": "Define Custom Variable with Added Value",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "variableName": "AccumulatedEcho",
          "context": "ContextCaster",
          "value": {
            "displayLines": "&nbsp;<span class=\"descriptionFunctionColor\">MIN</span>(240, EvanesciaSP)"
          }
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "AccumulatedEcho",
            "compareType": ">=",
            "value2": {
              "displayLines": "240"
            }
          },
          "passed": [
            {
              "name": "Use Custom Character Function",
              "functionName": "<a class=\"gTempYellow\" id=\"-1152920824\">_T_Evanescia_TriggerWonded</a>"
            }
          ]
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1685170340\">Evanescia_Passive</a>",
          "modifierFlags": [
            "ListenBattleEventSkill",
            "CustomEvent_InfiniteRefresh"
          ],
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier"
            },
            {
              "eventTrigger": "Deal Damage Start [Owner]: Any",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has DMG Instance Tag",
                    "tag": "Evanescia_Ultra"
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable with Stat",
                      "variableName": "_Evanescia_MaxSP",
                      "readTarget": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "value": "&nbsp;<span class=\"descriptionNumberColor\">EnergyMax</span>&nbsp;"
                    },
                    {
                      "name": "Define Custom Variable with Stat",
                      "variableName": "_Evanescia_ElationEchoPoint",
                      "readTarget": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "value": "&nbsp;<span class=\"descriptionNumberColor\">CertifiedBanger</span>&nbsp;"
                    },
                    {
                      "name": "Adjust Target Stats",
                      "modifiedValuesArray": [
                        {
                          "on": "AttackData",
                          "statName": "&nbsp;<span class=\"descriptionNumberColor\">Punchline</span>&nbsp;",
                          "value": "&nbsp;<span class=\"descriptionFunctionColor\">MAX</span>(_Evanescia_MaxSP, _Evanescia_ElationEchoPoint)"
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
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1630345914\">Evanescia_Passive_CritToElation</a>[<span class=\"descriptionNumberColor\">Youth: Halcyon Evermore</span>]"
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Trace Activated",
                    "conditionList": "Watch All Revels"
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-1871447404\">Evanescia_Trace01_CritChance</a>",
                      "referenceModifier": "<a class=\"gModGreen\" id=\"-143754898\">MReference_CriticalChanceUp</a>",
                      "valuePerStack": {
                        "MDF_PropertyValue": {
                          "displayLines": "0.3"
                        }
                      }
                    }
                  ]
                },
                {
                  "name": "Define Custom Variable with Stat",
                  "variableName": "EvanesciaEnergy",
                  "readTarget": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "value": "&nbsp;<span class=\"descriptionNumberColor\">CertifiedBanger</span>&nbsp;"
                },
                {
                  "name": "Update Displayed Energy Bar",
                  "value": {
                    "displayLines": "AccumulatedEcho"
                  },
                  "maximum": {
                    "displayLines": "240"
                  },
                  "assignState": "True",
                  "priorState": "Normal",
                  "bar#": 5
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
                      "modifier": "<a class=\"gModGreen\" id=\"-800917122\">Evanescia_Eidolon1</a>[<span class=\"descriptionNumberColor\">Home: A Prayer in Dance</span>]"
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
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-817694741\">Evanescia_Eidolon2</a>[<span class=\"descriptionNumberColor\">Voyage: A Wish for Everbloom</span>]"
                    }
                  ]
                },
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
                        "target": "{{Caster}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-717029027\">Evanescia_Eidolon4</a>"
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
                      "modifier": "<a class=\"gModGreen\" id=\"611817179\">Evanescia_Eidolon6_ElationDamageExtra</a>[<span class=\"descriptionNumberColor\">Maiden: A Step into Dreams</span>]"
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-952189456\">Evanescia_Eidolon6_UltraEnergyRefund</a>"
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-1567859554\">Evanescia_Eidolon6_EchoPointLifeTime</a>"
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Entity Death [Anyone]"
            },
            {
              "eventTrigger": "Attack Start [Owner]"
            },
            {
              "eventTrigger": "Enter Battle",
              "priorityLevel": -85,
              "execute": [
                {
                  "name": "Define Custom Variable",
                  "value": 0,
                  "variableName": "HitCaster"
                },
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Sequence",
                    "TargetList": [
                      {
                        "name": "Target Name",
                        "target": "{{Player Team All}}"
                      },
                      "Sort by Elation Participant ID"
                    ]
                  },
                  "ifTargetFound": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Target",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "target2": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        }
                      },
                      "passed": [
                        {
                          "name": "Define Custom Variable",
                          "value": 1,
                          "variableName": "HitCaster"
                        }
                      ],
                      "failed": [
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Compare: Variable",
                            "value1": "HitCaster",
                            "compareType": "=",
                            "value2": 0
                          },
                          "passed": [
                            {
                              "name": "Add Events/Bonuses",
                              "to": {
                                "name": "Target Name",
                                "target": "{{Parameter Target}}"
                              },
                              "modifier": "<a class=\"gModGreen\" id=\"443021726\">Evanescia_ElationMark</a>"
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
              "eventTrigger": "Certified Banger Gain [Anyone]: Start",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Trace Activated",
                        "conditionList": "Watch All Revels"
                      },
                      {
                        "name": "Is Part Of",
                        "target1": {
                          "name": "Target Name",
                          "target": "{{All Team Members(Exclude Self)}}"
                        },
                        "target2": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        }
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Declare Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "variableName": "_ElationPoint",
                      "scope": "CallbackTemporary"
                    },
                    {
                      "name": "Define Custom Variable with Changes to Certified Banger",
                      "variableName": "_ElationPoint",
                      "type": "OriginalCurrentValue"
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "AND",
                        "conditionList": [
                          {
                            "name": "Compare: Variable",
                            "value1": "_ElationPoint",
                            "compareType": ">=",
                            "value2": 0
                          },
                          {
                            "name": "Has Modifier",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Parameter Target}}"
                            },
                            "modifier": "<a class=\"gModGreen\" id=\"443021726\">Evanescia_ElationMark</a>"
                          }
                        ]
                      },
                      "passed": [
                        {
                          "name": "Modify Param Value for Param Target",
                          "value": {
                            "displayLines": "((-1 * _ElationPoint) * 0.5)"
                          }
                        },
                        {
                          "name": "Use Custom Character Function",
                          "functionName": "<a class=\"gTempYellow\" id=\"818871295\">AddElationEchoPoint</a>",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "variables": {
                            "AddValue": {
                              "displayLines": "(_ElationPoint * 0.5)"
                            }
                          }
                        },
                        {
                          "name": "Define Custom Variable with Added Value",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "variableName": "TotalEchoPointFromTeammate",
                          "context": "ContextCaster",
                          "value": {
                            "displayLines": "(_ElationPoint * 0.5)"
                          }
                        },
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Eidolon Activated",
                            "eidolon": 2
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
                                  "displayLines": "((_ElationPoint * 0.5) * 0.5)"
                                }
                              }
                            },
                            {
                              "name": "Define Custom Variable with Added Value",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Caster}}"
                              },
                              "variableName": "TotalEchoPointFromTeammate",
                              "context": "ContextCaster",
                              "value": {
                                "displayLines": "((_ElationPoint * 0.5) * 0.5)"
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
              "eventTrigger": "Certified Banger [Anyone]: Removed",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Trace Activated",
                        "conditionList": "Best All Blooms"
                      },
                      {
                        "name": "Is Part Of",
                        "target1": {
                          "name": "Target Name",
                          "target": "{{All Team Members(Exclude Self)}}"
                        },
                        "target2": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        }
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable with Changes to Stats",
                      "variableName": "ElationEchoTemp",
                      "scope": "ContextCaster"
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "ElationEchoTemp",
                        "compareType": ">",
                        "value2": 0
                      },
                      "passed": [
                        {
                          "name": "Declare Custom Variable",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "variableName": "_MergeElationEchoPointMDF",
                          "scope": "CallbackTemporary"
                        },
                        {
                          "name": "IF",
                          "conditions": "Unknown Elation CONDITION1 (Not always an error)[2: PierceCost]",
                          "passed": [
                            {
                              "name": "Define Custom Variable",
                              "value": 1,
                              "variableName": "_MergeElationEchoPointMDF"
                            }
                          ]
                        },
                        {
                          "name": "Use Custom Character Function",
                          "functionName": "<a class=\"gTempYellow\" id=\"818871295\">AddElationEchoPoint</a>",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "variables": {
                            "AddValue": {
                              "displayLines": "(ElationEchoTemp * 0.5)"
                            },
                            "TryMergeMDF": {
                              "displayLines": "_MergeElationEchoPointMDF"
                            }
                          }
                        },
                        {
                          "name": "Define Custom Variable with Added Value",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "variableName": "TotalEchoPointFromTeammate",
                          "context": "ContextCaster",
                          "value": {
                            "displayLines": "(ElationEchoTemp * 0.5)"
                          }
                        },
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Eidolon Activated",
                            "eidolon": 2
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
                                  "displayLines": "((ElationEchoTemp * 0.5) * 1)"
                                },
                                "TryMergeMDF": {
                                  "displayLines": "_MergeElationEchoPointMDF"
                                }
                              }
                            },
                            {
                              "name": "Define Custom Variable with Added Value",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Caster}}"
                              },
                              "variableName": "TotalEchoPointFromTeammate",
                              "context": "ContextCaster",
                              "value": {
                                "displayLines": "((ElationEchoTemp * 0.5) * 1)"
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
              "eventTrigger": "Enter View-Mode [Anyone]"
            },
            {
              "eventTrigger": "Exit View-Mode [Anyone]"
            }
          ],
          "variableValueChange": [
            {
              "name": "Variable Value Changes",
              "variableName": "AccumulatedEcho",
              "scope": "ContextOwner",
              "valueRanges": [
                {
                  "name": "Variable Value Range Conditions",
                  "minValue": 0,
                  "maxValue": 9999,
                  "includeMaxValueInRange": true,
                  "onChange": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "AccumulatedEcho",
                        "compareType": ">=",
                        "value2": {
                          "displayLines": "240"
                        }
                      },
                      "passed": [
                        {
                          "name": "Use Custom Character Function",
                          "functionName": "<a class=\"gTempYellow\" id=\"-1152920824\">_T_Evanescia_TriggerWonded</a>"
                        }
                      ]
                    },
                    {
                      "name": "Update Displayed Energy Bar",
                      "value": {
                        "displayLines": "AccumulatedEcho"
                      }
                    }
                  ]
                }
              ]
            }
          ],
          "abilityValueChange": [
            {
              "name": "Ability Value Changes",
              "propertyName": "&nbsp;<span class=\"descriptionNumberColor\">EnergyCurrent</span>&nbsp;",
              "valueRanges": [
                {
                  "name": "Variable Value Range Conditions",
                  "minValue": 0,
                  "maxValue": 999,
                  "triggerClampedChanges": true,
                  "onChange": [
                    {
                      "name": "Define Custom Variable",
                      "value": {
                        "displayLines": "EvanesciaSP"
                      },
                      "variableName": "old_EvanesciaSP"
                    },
                    {
                      "name": "Define Custom Variable with Stat",
                      "variableName": "EvanesciaSP",
                      "readTarget": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "value": "&nbsp;<span class=\"descriptionNumberColor\">EnergyCurrent</span>&nbsp;"
                    },
                    {
                      "name": "Define Custom Variable with Changes to Stats",
                      "variableName": "change_EvanesciaSP"
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "SPChangeFromSync",
                        "compareType": "=",
                        "value2": 1
                      },
                      "passed": [
                        {
                          "name": "Define Custom Variable",
                          "value": 0,
                          "variableName": "SPChangeFromSync"
                        }
                      ],
                      "failed": [
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Compare: Variable",
                            "value1": "EvanesciaSP",
                            "compareType": ">",
                            "value2": {
                              "displayLines": "old_EvanesciaSP"
                            }
                          },
                          "passed": [
                            {
                              "name": "Define Custom Variable",
                              "value": 1,
                              "variableName": "EchoChangeFromSync"
                            },
                            {
                              "name": "Use Custom Character Function",
                              "functionName": "<a class=\"gTempYellow\" id=\"818871295\">AddElationEchoPoint</a>",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Caster}}"
                              },
                              "variables": {
                                "AddValue": {
                                  "displayLines": "(EvanesciaSP - old_EvanesciaSP)"
                                }
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
                        "value1": "change_EvanesciaSP",
                        "compareType": ">",
                        "value2": 0
                      },
                      "passed": [
                        {
                          "name": "Define Custom Variable with Added Value",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "variableName": "AccumulatedEcho",
                          "context": "ContextCaster",
                          "value": {
                            "displayLines": "&nbsp;<span class=\"descriptionFunctionColor\">MIN</span>(240, change_EvanesciaSP)"
                          }
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              "name": "Ability Value Changes",
              "propertyName": "&nbsp;<span class=\"descriptionNumberColor\">CertifiedBanger</span>&nbsp;",
              "valueRanges": [
                {
                  "name": "Variable Value Range Conditions",
                  "minValue": 0,
                  "maxValue": 9999,
                  "triggerClampedChanges": true,
                  "onChange": [
                    {
                      "name": "Define Custom Variable",
                      "value": {
                        "displayLines": "EvanesciaEnergy"
                      },
                      "variableName": "old_EvanesciaEnergy"
                    },
                    {
                      "name": "Define Custom Variable with Stat",
                      "variableName": "EvanesciaEnergy",
                      "readTarget": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "value": "&nbsp;<span class=\"descriptionNumberColor\">CertifiedBanger</span>&nbsp;"
                    },
                    {
                      "name": "Define Custom Variable with Changes to Stats",
                      "variableName": "change_EvanesciaEnergy"
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "EchoChangeFromSync",
                        "compareType": "=",
                        "value2": 1
                      },
                      "passed": [
                        {
                          "name": "Define Custom Variable",
                          "value": 0,
                          "variableName": "EchoChangeFromSync"
                        }
                      ],
                      "failed": [
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Compare: Variable",
                            "value1": "EvanesciaEnergy",
                            "compareType": ">",
                            "value2": {
                              "displayLines": "old_EvanesciaEnergy"
                            }
                          },
                          "passed": [
                            {
                              "name": "Define Custom Variable",
                              "value": 1,
                              "variableName": "SPChangeFromSync"
                            },
                            {
                              "name": "Update Energy",
                              "on": {
                                "name": "Target Name",
                                "target": "{{Caster}}"
                              },
                              "value": {
                                "displayLines": "&nbsp;<span class=\"descriptionFunctionColor\">MIN</span>(change_EvanesciaEnergy, 100)"
                              },
                              "isFixed": "* ERR"
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
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      },
      "realTargetData": {
        "primaryTarget": "{{Caster}}"
      }
    },
    "Evanescia_Evanescia_Ability04_Part02": {
      "fileName": "Evanescia_Evanescia_Ability04_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1123183832\">_M_Evanescia_Ability04_TargetTimeslow</a>",
          "silentAdd": true
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "canPhase": true,
          "AttackScaling": {
            "DamageType": "Physical",
            "DamageElation": {
              "displayLines": "1.1"
            },
            "dmgFormula": "Elation Scaling",
            "Toughness": {
              "displayLines": "AOE Toughness Value"
            },
            "ToughnessDMGType": {
              "DamageType": "Physical"
            },
            "Tags": null,
            "attackType": "Elation DMG",
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
              "displayLines": "5"
            }
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
              "name": "Use Custom Character Function",
              "functionName": "<a class=\"gTempYellow\" id=\"818871295\">AddElationEchoPoint</a>",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "variables": {
                "AddValue": {
                  "displayLines": "10"
                }
              }
            }
          ]
        },
        "Trigger: Ability End"
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1123183832\">_M_Evanescia_Ability04_TargetTimeslow</a>",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier"
            },
            {
              "eventTrigger": "Ability Use [Anyone]: End",
              "execute": [
                "Modifier Deletes Itself"
              ]
            }
          ]
        }
      ],
      "targetObjectData": {
        "primaryTarget": "{{Hostile Entities(AOE)}}"
      }
    },
    "Evanescia_Evanescia_Ability04_Part01": {
      "fileName": "Evanescia_Evanescia_Ability04_Part01",
      "childAbilityList": [
        "Evanescia_Evanescia_Ability04_Camera",
        "Evanescia_Evanescia_Ability04_Part01",
        "Evanescia_Evanescia_Ability04_Part02"
      ],
      "skillTrigger": "Skill04",
      "tag": "InfiniteRefresh",
      "abilityType": "Elation",
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
          "ability": "Evanescia_Ability04_Part02",
          "isTrigger": true
        },
        {
          "name": "Looped Event",
          "maxLoops": 8
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
    "Evanescia_Evanescia_Ability03_Part02": {
      "fileName": "Evanescia_Evanescia_Ability03_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1310995567\">_M_Evanescia_Ability21_TargetTimeslow</a>",
          "silentAdd": true
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Trace Activated",
            "conditionList": "Watch All Revels"
          },
          "passed": [
            {
              "name": "Define Custom Variable with Team Count",
              "variableName": "EnemyCount",
              "scope": "ContextAbility",
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
                "value1": "EnemyCount",
                "compareType": ">=",
                "value2": 3
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "scope": "ContextAbility",
                  "value": {
                    "displayLines": "(5 + 1)"
                  },
                  "variableName": "LoopCount"
                }
              ],
              "failed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "EnemyCount",
                    "compareType": "=",
                    "value2": 2
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "scope": "ContextAbility",
                      "value": {
                        "displayLines": "(5 + 2)"
                      },
                      "variableName": "LoopCount"
                    }
                  ],
                  "failed": [
                    {
                      "name": "Define Custom Variable",
                      "scope": "ContextAbility",
                      "value": {
                        "displayLines": "(5 + 4)"
                      },
                      "variableName": "LoopCount"
                    }
                  ]
                }
              ]
            }
          ],
          "failed": [
            {
              "name": "Define Custom Variable",
              "scope": "ContextAbility",
              "value": 5,
              "variableName": "LoopCount"
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
            "DamageType": "Physical",
            "Damage": {
              "displayLines": "1.6"
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
                "DamageType": "Physical",
                "DamageElation": {
                  "displayLines": "0.24"
                },
                "dmgFormula": "Elation Scaling",
                "Toughness": null,
                "instanceTag": "Evanescia_Ultra",
                "Tags": null,
                "attackType": "Elation DMG"
              }
            }
          ]
        },
        {
          "name": "Looped Event",
          "maxLoops": {
            "displayLines": "LoopCount"
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
                    "DamageType": "Physical",
                    "Damage": {
                      "displayLines": "1.2"
                    },
                    "Toughness": {
                      "displayLines": "ST Toughness Value"
                    },
                    "Tags": null,
                    "attackType": "Ultimate"
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
                        "target": "{{Parameter Target}}"
                      },
                      "canPhase": true,
                      "AttackScaling": {
                        "DamageType": "Physical",
                        "DamageElation": {
                          "displayLines": "0.28"
                        },
                        "dmgFormula": "Elation Scaling",
                        "Toughness": null,
                        "instanceTag": "Evanescia_Ultra",
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
        "Trigger: Attack End",
        "Trigger: Ability End"
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1310995567\">_M_Evanescia_Ability21_TargetTimeslow</a>",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier"
            },
            {
              "eventTrigger": "Ability Use [Anyone]: End",
              "execute": [
                "Modifier Deletes Itself"
              ]
            }
          ]
        }
      ],
      "targetObjectData": {
        "primaryTarget": "{{Ability Target List}}"
      }
    },
    "Evanescia_Evanescia_Ability03_Part01": {
      "fileName": "Evanescia_Evanescia_Ability03_Part01",
      "childAbilityList": [
        "Evanescia_Evanescia_Ability03_EnterReady",
        "Evanescia_Evanescia_Ability03_Camera",
        "Evanescia_Evanescia_Ability03_Part01",
        "Evanescia_Evanescia_Ability03_Part02"
      ],
      "skillTrigger": "Skill03",
      "abilityType": "Ultimate",
      "energy": 5,
      "toughnessList": [
        5,
        20,
        0
      ],
      "parse": [
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "ability": "Evanescia_Ability03_Part02",
          "isTrigger": true
        },
        "Deleted bullshit",
        {
          "name": "Define Custom Variable",
          "value": 0,
          "variableName": "_index"
        },
        {
          "name": "IF",
          "conditions": "Active: Fast-Forward Animations",
          "passed": [
            {
              "name": "Define Custom Variable",
              "value": {
                "displayLines": "&nbsp;<span class=\"descriptionFunctionColor\">CEIL</span>((HitCount / 2))"
              },
              "variableName": "_runtime_hitcount"
            }
          ],
          "failed": [
            {
              "name": "Define Custom Variable",
              "value": {
                "displayLines": "HitCount"
              },
              "variableName": "_runtime_hitcount"
            }
          ]
        },
        {
          "name": "Define Custom Variable",
          "value": {
            "displayLines": "((_deltaFrame - _runtime_hitcount) / (ENEMIES_OBJECT_UNUSED__249 - 1))"
          },
          "variableName": "_deltaFrame"
        },
        {
          "name": "Looped Event",
          "maxLoops": {
            "displayLines": "ENEMIES_OBJECT_UNUSED__249"
          },
          "execute": [
            {
              "name": "Define Custom Variable",
              "value": {
                "displayLines": "(_index + 1)"
              },
              "variableName": "_index"
            }
          ]
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
    "Evanescia_Evanescia_Ability03_EnterReady": {
      "fileName": "Evanescia_Evanescia_Ability03_EnterReady",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "references": [],
      "targetObjectData": {
        "primaryTarget": "Inherent Target"
      }
    },
    "Evanescia_Evanescia_Ability02_Part02": {
      "fileName": "Evanescia_Evanescia_Ability02_Part02",
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
          "AttackScaling": {
            "DamageType": "Physical",
            "Damage": {
              "displayLines": "3"
            },
            "HitSplit": 0.2,
            "Toughness": {
              "displayLines": "ST Toughness Value"
            },
            "Tags": null,
            "attackType": "Skill",
            "EnergyGainPercent": "100%"
          }
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "AttackScaling": {
            "DamageType": "Physical",
            "Damage": {
              "displayLines": "3"
            },
            "HitSplit": 0.2,
            "Toughness": {
              "displayLines": "ST Toughness Value"
            },
            "Tags": null,
            "attackType": "Skill",
            "EnergyGainPercent": "100%"
          }
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "AttackScaling": {
            "DamageType": "Physical",
            "Damage": {
              "displayLines": "3"
            },
            "HitSplit": 0.2,
            "Toughness": {
              "displayLines": "ST Toughness Value"
            },
            "Tags": null,
            "attackType": "Skill",
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
            "DamageType": "Physical",
            "Damage": {
              "displayLines": "3"
            },
            "HitSplit": 0.4,
            "Toughness": {
              "displayLines": "ST Toughness Value"
            },
            "Tags": null,
            "attackType": "Skill",
            "EnergyGainPercent": "100%"
          }
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Targets Adjacent(Blast)}}"
          },
          "canPhase": true,
          "AttackScaling": {
            "DamageType": "Physical",
            "Damage": {
              "displayLines": "1.5"
            },
            "Toughness": {
              "displayLines": "Blast Toughness Value"
            },
            "Tags": null,
            "attackType": "Skill"
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
                "target": "{{ST and Blast}}"
              },
              "canPhase": true,
              "AttackScaling": {
                "DamageType": "Physical",
                "DamageElation": {
                  "displayLines": "0.16"
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
            "displayLines": "10"
          },
          "adjustment": "Add"
        },
        "Trigger: Ability End"
      ],
      "references": [],
      "targetObjectData": {
        "primaryTarget": "{{Ability Target List}}"
      }
    },
    "Evanescia_Evanescia_Ability02_Part01": {
      "fileName": "Evanescia_Evanescia_Ability02_Part01",
      "childAbilityList": [
        "Evanescia_Evanescia_Ability02_Camera",
        "Evanescia_Evanescia_Ability02_Part01",
        "Evanescia_Evanescia_Ability02_Part02"
      ],
      "skillTrigger": "Skill02",
      "abilityType": "Skill",
      "energy": 30,
      "toughnessList": [
        20,
        0,
        10
      ],
      "parse": [
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "ability": "Evanescia_Ability02_Part02",
          "isTrigger": true
        },
        "Deleted bullshit",
        "Deleted bullshit"
      ],
      "references": [],
      "targetObjectData": {
        "primaryTarget": "{{Ability Target List}}"
      },
      "realTargetData": {
        "primaryTarget": "Select Hostile Target",
        "subTarget": "Blast Targets"
      }
    },
    "Evanescia_Evanescia_Ability01_Part02": {
      "fileName": "Evanescia_Evanescia_Ability01_Part02",
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
            "DamageType": "Physical",
            "Damage": {
              "displayLines": "1"
            },
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
    "Evanescia_Evanescia_Ability01_Part01": {
      "fileName": "Evanescia_Evanescia_Ability01_Part01",
      "childAbilityList": [
        "Evanescia_Evanescia_Ability01_Camera",
        "Evanescia_Evanescia_Ability01_Part01",
        "Evanescia_Evanescia_Ability01_Part02"
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
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "ability": "Evanescia_Ability01_Part02",
          "isTrigger": true
        },
        "Deleted bullshit",
        "Deleted bullshit"
      ],
      "references": [],
      "targetObjectData": {
        "primaryTarget": "{{Ability Target List}}"
      },
      "realTargetData": {
        "primaryTarget": "Select Hostile Target"
      }
    },
    "Evanescia_Functions": {
      "fileName": "Evanescia_Functions",
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
          "functionName": "<a class=\"gTempYellow\" id=\"fun__-1152920824\">_T_Evanescia_TriggerWonded</a>",
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
                      }
                    ]
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
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"1743452944\">_M_Evanescia_InsertCheck_OnCtrlRelease</a>"
                    }
                  ],
                  "failed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"1743452944\">_M_Evanescia_InsertCheck_OnCtrlRelease</a>"
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
                  "modifier": "<a class=\"gModGreen\" id=\"-497628166\">_M_Evanescia_InsertCheck</a>"
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