const entityPageType = "char"
const compositeAbilityObject = {
  "fullCharacterName": "Yunli",
  "trimCharacterName": "Yunli",
  "abilityList": [
    "Yunli_Modifiers",
    "Yunli_LocalPlayer_StandardAbility_AttackBreak",
    "Yunli_LocalPlayer_Yunli_TechniqueUsage",
    "Yunli_LocalPlayer_Yunli_NormalAtk01",
    "Yunli_Yunli_TechniqueInLevel_Insert_Part02",
    "Yunli_Yunli_TechniqueInLevel_Insert",
    "Yunli_Yunli_TechniqueInLevel",
    "Yunli_Yunli_Counter_Preshow",
    "Yunli_Yunli_Counter_Part02",
    "Yunli_Yunli_Counter_Part01",
    "Yunli_Yunli_PassiveAbility01",
    "Yunli_Yunli_Ability03_SuperCounter",
    "Yunli_Yunli_Ability03_NormalCounter",
    "Yunli_Yunli_Ability03_Counter_Part01",
    "Yunli_Yunli_Ability03_Part02",
    "Yunli_Yunli_Ability03_Part01",
    "Yunli_Yunli_Ability03_EnterReady",
    "Yunli_Yunli_Ability02_Part02",
    "Yunli_Yunli_Ability02_Part01",
    "Yunli_Yunli_Ability01_Part02",
    "Yunli_Yunli_Ability01_Part01",
    "Yunli_Functions"
  ],
  "abilityObject": {
    "Yunli_Modifiers": {
      "fileName": "Yunli_Modifiers",
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
          "for": "<a class=\"gModGreen\" id=\"mod__1428569003\">ADV_StageAbility_Maze_Yunli</a>",
          "counter": 1,
          "stackType": "Merge",
          "modifierFlags": [
            "EnterBattleBlockPosture"
          ],
          "onBeingAttacked": [
            "Deleted bullshit"
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-77031042\">Yunli_Trace02_ControlResist</a>[<span class=\"descriptionNumberColor\">Demon Quell</span>]",
          "stackType": "ReplaceByCaster",
          "modifierFlags": [
            "Endurance",
            "RemoveWhenCasterDead"
          ],
          "description": "Resists Crowd Control debuffs received and reduces DMG received by <span class=\"descriptionNumberColor\">MAvatar_Yunli_00_DamageResistance_Value01</span>.",
          "type": "Buff",
          "effectName": "Resists Crowd Control debuffs",
          "statusName": "Demon Quell",
          "execute": [
            {
              "eventTrigger": "Being Limbo [Owner]",
              "execute": [
                {
                  "name": "Change Entity Turn-State",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "phase": "Phase1"
                }
              ]
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Stack Target Stat Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "propertyName": "&nbsp;<span class=\"descriptionNumberColor\">DamageReduction</span>&nbsp;",
                  "statValue": {
                    "displayLines": "Yunli_DamageResistance_Value01"
                  }
                }
              ]
            },
            {
              "eventTrigger": "Being Weakness Broken: End [Owner]",
              "execute": [
                {
                  "name": "Change Entity Turn-State",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "phase": "Phase1"
                }
              ]
            },
            {
              "eventTrigger": "Debuff Immunity[?]"
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1705533057\">Yunli_Blocking_BeingAttackMark</a>",
          "stackType": "ReplaceByCaster",
          "execute": [
            {
              "eventTrigger": "When Modifier Destroyed/Removed"
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__813451060\">Yunli_Blocking</a>[<span class=\"descriptionNumberColor\">Parry</span>]",
          "stackType": "ReplaceByCaster",
          "modifierFlags": [
            "CustomEvent_InfiniteRefresh"
          ],
          "description": "When triggering Talent's Counter effect, launches the Counter \"Intuit: Cull\" instead.",
          "type": "Buff",
          "effectName": "Parry",
          "statusName": "Parry",
          "execute": [
            {
              "eventTrigger": "When Modifier Destroyed/Removed",
              "execute": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"183026830\">Yunli_Ability03_ForBidUltra</a>"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Enemy Team All(with Unselectable)}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1488319040\">Standard_CTRL_Taunt</a>[<span class=\"descriptionNumberColor\">Taunt</span>]",
                  "onlyRemoveOwnersInstance": true
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Enemy Team All}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-983470553\">Yunli_Blocking_ContinuousMark</a>"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-77031042\">Yunli_Trace02_ControlResist</a>[<span class=\"descriptionNumberColor\">Demon Quell</span>]"
                }
              ]
            },
            {
              "eventTrigger": "Action Choice Window [Anyone]"
            },
            {
              "eventTrigger": "Turn [Anyone]: Start Action-End Phase",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Compare: Variable",
                        "value1": "MDF_TurnEndSwitch_Blocking",
                        "compareType": "=",
                        "value2": 1
                      },
                      {
                        "name": "Compare: Variable",
                        "value1": "MDF_IsBattleEvent",
                        "compareType": "=",
                        "value2": 0
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
                          "target": "{{Modifier Holder}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"1705533057\">Yunli_Blocking_BeingAttackMark</a>",
                        "invertCondition": true
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
                              "name": "Find New Target",
                              "from": {
                                "name": "Target Name",
                                "target": "{{Enemy Team All}}"
                              },
                              "searchRandom": true,
                              "maxTargets": 1,
                              "ifTargetFound": [
                                {
                                  "name": "Inject Ability Use",
                                  "condition": {
                                    "name": "Insert Ability Condition",
                                    "type": "AbilityOwnerInsertUnusedCount",
                                    "typeValue": 1
                                  },
                                  "abilityName": "Yunli_Ability03_Counter_Part01",
                                  "abilitySource": {
                                    "name": "Target Name",
                                    "target": "{{Caster}}"
                                  },
                                  "abilityTarget": {
                                    "name": "Target Name",
                                    "target": "{{Parameter Target}}"
                                  },
                                  "priorityTag": "Default",
                                  "canHitNonTargets": true,
                                  "showInActionOrder": true,
                                  "abortFlags": [
                                    "STAT_CTRL",
                                    "DisableAction"
                                  ],
                                  "allowAbilityTriggers": false
                                }
                              ],
                              "noTargetFound": [
                                {
                                  "name": "Define Custom Variable",
                                  "value": 0,
                                  "variableName": "OnInsertAbort_Flg"
                                }
                              ]
                            }
                          ],
                          "failed": [
                            "Modifier Deletes Itself"
                          ]
                        }
                      ],
                      "failed": [
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "OR",
                            "conditionList": [
                              {
                                "name": "Has Flag",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Caster}}"
                                },
                                "flagName": "STAT_CTRL"
                              },
                              {
                                "name": "Has Flag",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Caster}}"
                                },
                                "flagName": "DisableAction"
                              }
                            ]
                          },
                          "passed": [
                            "Modifier Deletes Itself",
                            {
                              "name": "Remove Events/Bonuses",
                              "to": {
                                "name": "Target Name",
                                "target": "{{Caster}}"
                              },
                              "modifier": "<a class=\"gModGreen\" id=\"1705533057\">Yunli_Blocking_BeingAttackMark</a>"
                            },
                            {
                              "name": "Remove Events/Bonuses",
                              "to": {
                                "name": "Target Name",
                                "target": "{{Caster}}"
                              },
                              "modifier": "<a class=\"gModGreen\" id=\"-77264210\">Yunli_SuperCounter_Mark</a>"
                            }
                          ],
                          "failed": [
                            {
                              "name": "Find New Target",
                              "from": {
                                "name": "Target Name",
                                "target": "{{Enemy Team All}}"
                              },
                              "searchRandom": true,
                              "maxTargets": 1,
                              "ifTargetFound": [
                                {
                                  "name": "Remove Events/Bonuses",
                                  "to": {
                                    "name": "Target Name",
                                    "target": "{{Caster}}"
                                  },
                                  "modifier": "<a class=\"gModGreen\" id=\"1705533057\">Yunli_Blocking_BeingAttackMark</a>"
                                },
                                {
                                  "name": "Remove Events/Bonuses",
                                  "to": {
                                    "name": "Target Name",
                                    "target": "{{Caster}}"
                                  },
                                  "modifier": "<a class=\"gModGreen\" id=\"-77264210\">Yunli_SuperCounter_Mark</a>"
                                },
                                {
                                  "name": "Inject Ability Use",
                                  "condition": {
                                    "name": "Insert Ability Condition",
                                    "type": "AbilityOwnerInsertUnusedCount",
                                    "typeValue": 1
                                  },
                                  "abilityName": "Yunli_Ability03_Counter_Part01",
                                  "abilitySource": {
                                    "name": "Target Name",
                                    "target": "{{Caster}}"
                                  },
                                  "abilityTarget": {
                                    "name": "Target Name",
                                    "target": "{{Parameter Target}}"
                                  },
                                  "priorityTag": "Default",
                                  "canHitNonTargets": true,
                                  "showInActionOrder": true,
                                  "abortFlags": [
                                    "STAT_CTRL",
                                    "DisableAction"
                                  ],
                                  "allowAbilityTriggers": false
                                }
                              ],
                              "noTargetFound": [
                                {
                                  "name": "Define Custom Variable",
                                  "value": 0,
                                  "variableName": "OnInsertAbort_Flg"
                                }
                              ]
                            }
                          ]
                        }
                      ]
                    }
                  ],
                  "failed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "MDF_IsBattleEvent",
                        "compareType": "=",
                        "value2": 0
                      },
                      "passed": [
                        {
                          "name": "Define Custom Variable",
                          "value": 1,
                          "variableName": "MDF_TurnEndSwitch_Blocking"
                        }
                      ]
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "OR",
                        "conditionList": [
                          {
                            "name": "Has Flag",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Caster}}"
                            },
                            "flagName": "STAT_CTRL"
                          },
                          {
                            "name": "Has Flag",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Caster}}"
                            },
                            "flagName": "DisableAction"
                          }
                        ]
                      },
                      "passed": [
                        "Modifier Deletes Itself",
                        {
                          "name": "Remove Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"1705533057\">Yunli_Blocking_BeingAttackMark</a>"
                        },
                        {
                          "name": "Remove Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"-77264210\">Yunli_SuperCounter_Mark</a>"
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
                  "name": "Define Custom Variable",
                  "value": 0,
                  "variableName": "MDF_TurnEndSwitch_Blocking"
                },
                {
                  "name": "Change Entity Turn-State",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "phase": "Phase2"
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Trace Activated",
                    "conditionList": "Demon Quell"
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-77031042\">Yunli_Trace02_ControlResist</a>[<span class=\"descriptionNumberColor\">Demon Quell</span>]",
                      "valuePerStack": {
                        "Yunli_DamageResistance_Value01": {
                          "displayLines": "0.2"
                        }
                      }
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Being Attacked [Owner]: End",
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
                      "modifier": "<a class=\"gModGreen\" id=\"1705533057\">Yunli_Blocking_BeingAttackMark</a>"
                    },
                    {
                      "name": "Change Entity Turn-State",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "phase": "Phase2"
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-77264210\">Yunli_SuperCounter_Mark</a>"
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Is Part Of",
                        "target1": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "target2": {
                          "name": "Target Name",
                          "target": "{{Enemy Team All}}"
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
                          "abilityName": "Yunli_Ability03_Counter_Part01",
                          "abilitySource": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "abilityTarget": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "priorityTag": "CharacterAttackFromSelf",
                          "canHitNonTargets": true,
                          "showInActionOrder": true,
                          "abortFlags": [
                            "STAT_CTRL",
                            "DisableAction"
                          ],
                          "allowAbilityTriggers": false
                        }
                      ],
                      "failed": [
                        {
                          "name": "Find New Target",
                          "from": {
                            "name": "Target Name",
                            "target": "{{Enemy Team All}}"
                          },
                          "searchRandom": true,
                          "maxTargets": 1,
                          "ifTargetFound": [
                            {
                              "name": "Inject Ability Use",
                              "condition": {
                                "name": "Insert Ability Condition",
                                "type": "AbilityOwnerInsertUnusedCount",
                                "typeValue": 1
                              },
                              "abilityName": "Yunli_Ability03_Counter_Part01",
                              "abilitySource": {
                                "name": "Target Name",
                                "target": "{{Caster}}"
                              },
                              "abilityTarget": {
                                "name": "Target Name",
                                "target": "{{Parameter Target}}"
                              },
                              "priorityTag": "CharacterAttackFromSelf",
                              "canHitNonTargets": true,
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
                }
              ]
            },
            {
              "eventTrigger": "Ability Use [Anyone]: End",
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
                      "name": "IF",
                      "conditions": {
                        "name": "AND",
                        "conditionList": [
                          {
                            "name": "Eidolon Activated",
                            "eidolon": 6
                          },
                          {
                            "name": "Has Modifier",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            },
                            "modifier": "<a class=\"gModGreen\" id=\"1705533057\">Yunli_Blocking_BeingAttackMark</a>",
                            "invertCondition": true
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
                          "modifier": "<a class=\"gModGreen\" id=\"1705533057\">Yunli_Blocking_BeingAttackMark</a>"
                        },
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"-77264210\">Yunli_SuperCounter_Mark</a>"
                        },
                        {
                          "name": "Inject Ability Use",
                          "condition": {
                            "name": "Insert Ability Condition",
                            "type": "AbilityOwnerInsertUnusedCount",
                            "typeValue": 1
                          },
                          "abilityName": "Yunli_Ability03_Counter_Part01",
                          "abilitySource": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "abilityTarget": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "priorityTag": "CharacterAttackFromSelf",
                          "canHitNonTargets": true,
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
              "eventTrigger": "Custom Event",
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
                        "name": "Enemies Still Alive",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        "includeUnselectable": true
                      },
                      {
                        "name": "Living State",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        "livingState": "Mask_AliveOnly"
                      },
                      {
                        "name": "OR",
                        "conditionList": [
                          {
                            "name": "Has Modifier",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Caster}}"
                            },
                            "modifier": "<a class=\"gModGreen\" id=\"1705533057\">Yunli_Blocking_BeingAttackMark</a>"
                          },
                          {
                            "name": "Compare: Variable",
                            "value1": "OnInsertAbort_Flg",
                            "compareType": "=",
                            "value2": 0
                          }
                        ]
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Use Custom Character Function",
                      "functionName": "<a class=\"gTempYellow\" id=\"-450811699\">Yunli_InsertAbility1</a>"
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
                        "name": "Enemies Still Alive",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        "includeUnselectable": true
                      },
                      {
                        "name": "Living State",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        "livingState": "Mask_AliveOnly"
                      },
                      {
                        "name": "OR",
                        "conditionList": [
                          {
                            "name": "Has Modifier",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Caster}}"
                            },
                            "modifier": "<a class=\"gModGreen\" id=\"1705533057\">Yunli_Blocking_BeingAttackMark</a>"
                          },
                          {
                            "name": "Compare: Variable",
                            "value1": "OnInsertAbort_Flg",
                            "compareType": "=",
                            "value2": 0
                          }
                        ]
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Use Custom Character Function",
                      "functionName": "<a class=\"gTempYellow\" id=\"-450811699\">Yunli_InsertAbility1</a>"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1668815419\">Yunli_WeaponCharge</a>",
          "counter": 1,
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier"
            },
            {
              "eventTrigger": "Pre-Death [Owner]"
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__183026830\">Yunli_Ability03_ForBidUltra</a>",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Disable Abilities",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "abilityTypes": [
                    "Ultimate"
                  ],
                  "text": "Ability cannot be used"
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1581545844\">Yunli_AddAggro</a>",
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
                  "propertyName": "&nbsp;<span class=\"descriptionNumberColor\">Aggro%</span>&nbsp;",
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
          "for": "<a class=\"gModGreen\" id=\"mod__332588002\">Yunli_WeaponCharge_Free</a>"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__325536063\">Yunli_Eidolon6</a>",
          "execute": [
            {
              "eventTrigger": "Deal Damage Start [Owner]: Hit",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has DMG Instance Tag",
                    "tag": "Yunli_Migiri_Damage"
                  },
                  "passed": [
                    {
                      "name": "Adjust Target Stats",
                      "modifiedValuesArray": [
                        {
                          "on": "Attacker",
                          "statName": "&nbsp;<span class=\"descriptionNumberColor\">CritRateSUM</span>&nbsp;",
                          "value": "MDF_CritChance"
                        }
                      ]
                    },
                    {
                      "name": "Adjust Target Stats",
                      "modifiedValuesArray": [
                        {
                          "on": "Attacker",
                          "statName": "&nbsp;<span class=\"descriptionNumberColor\">ResistancePhysicalPEN</span>&nbsp;",
                          "value": "MDF_PhysicalPenetrateRatio"
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
          "for": "<a class=\"gModGreen\" id=\"mod__359091301\">Yunli_Eidolon4</a>[<span class=\"descriptionNumberColor\">Artisan's Ironsong</span>]",
          "stackType": "ReplaceByCaster",
          "description": "Increases Effect RES by <span class=\"descriptionNumberColor\">MDF_ProbabilityValue</span>.",
          "type": "Buff",
          "effectName": "Effect RES Boost",
          "statusName": "Artisan's Ironsong",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Stack Target Stat Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "propertyName": "&nbsp;<span class=\"descriptionNumberColor\">EffectRES</span>&nbsp;",
                  "statValue": {
                    "displayLines": "MDF_ProbabilityValue"
                  }
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__258425587\">Yunli_Eidolon2</a>",
          "execute": [
            {
              "eventTrigger": "Deal Damage Start [Owner]: Any",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Damage Tags",
                    "damageTag": [
                      "Counter"
                    ]
                  },
                  "passed": [
                    {
                      "name": "Adjust Target Stats",
                      "modifiedValuesArray": [
                        {
                          "on": "Defender",
                          "statName": "&nbsp;<span class=\"descriptionNumberColor\">DEF%</span>&nbsp;",
                          "value": "-MDF_PropertyValue"
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
          "for": "<a class=\"gModGreen\" id=\"mod__275203206\">Yunli_Eidolon1</a>",
          "stackType": "ReplaceByCaster",
          "execute": [
            {
              "eventTrigger": "Deal Damage Start [Owner]: Hit",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has DMG Instance Tag",
                    "tag": "Yunli_Migiri_Damage"
                  },
                  "passed": [
                    {
                      "name": "Adjust Target Stats",
                      "modifiedValuesArray": [
                        {
                          "on": "Attacker",
                          "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageAll</span>&nbsp;",
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
          "for": "<a class=\"gModGreen\" id=\"mod__215174918\">Yunli_Trace03_CritChance</a>",
          "stackType": "ReplaceByCaster",
          "execute": [
            {
              "eventTrigger": "Action Choice Window [Owner]",
              "execute": [
                "Modifier Deletes Itself"
              ]
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Stack Target Stat Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "propertyName": "&nbsp;<span class=\"descriptionNumberColor\">CritRateBase</span>&nbsp;",
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
          "for": "<a class=\"gModGreen\" id=\"mod__-1693627544\">Yunli_Blocking_Effect</a>",
          "execute": [
            {
              "eventTrigger": "Take Damage Start [Owner]: Hit",
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
          "for": "<a class=\"gModGreen\" id=\"mod__1896809372\">Yunli_Blocking_CritDamage</a>[<span class=\"descriptionNumberColor\">Earthbind, Etherbreak</span>]",
          "description": "Increases CRIT DMG dealt by the next Counter by <span class=\"descriptionNumberColor\">MDF_CriticalDamage</span>.",
          "type": "Buff",
          "effectName": "CRIT DMG Boost",
          "statusName": "Earthbind, Etherbreak",
          "execute": [
            {
              "eventTrigger": "Deal Damage Start [Owner]: Hit",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Damage Tags",
                    "damageTag": [
                      "Counter"
                    ]
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "value": 1,
                      "variableName": "MDF_IsHitBack"
                    },
                    {
                      "name": "Adjust Target Stats",
                      "modifiedValuesArray": [
                        {
                          "on": "Attacker",
                          "statName": "&nbsp;<span class=\"descriptionNumberColor\">CritDamageSUM</span>&nbsp;",
                          "value": "1"
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
                  "name": "Define Custom Variable",
                  "value": 0,
                  "variableName": "MDF_IsHitBack"
                },
                {
                  "name": "Define Custom Variable",
                  "value": {
                    "displayLines": "1"
                  },
                  "variableName": "MDF_CriticalDamage"
                }
              ]
            },
            {
              "eventTrigger": "Attack DMG End [Owner]"
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1909212480\">Yunli_Trace03_Sub</a>[<span class=\"descriptionNumberColor\">True Sunder</span>]",
          "stackType": "ReplaceByCaster",
          "description": "Increases ATK by <span class=\"descriptionNumberColor\">MDF_ProbabilityValue</span>.",
          "type": "Buff",
          "effectName": "ATK Boost",
          "statusName": "True Sunder",
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
                    "displayLines": "MDF_ProbabilityValue"
                  }
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-762526263\">Yunli_Trace03</a>",
          "stackType": "ReplaceByCaster",
          "execute": [
            {
              "eventTrigger": "Attacker Finalizes DMG Data",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Damage Tags",
                    "damageTag": [
                      "Counter"
                    ]
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-1909212480\">Yunli_Trace03_Sub</a>[<span class=\"descriptionNumberColor\">True Sunder</span>]",
                      "duration": 1,
                      "valuePerStack": {
                        "MDF_ProbabilityValue": {
                          "displayLines": "MDF_ProbabilityValue2"
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
          "for": "<a class=\"gModGreen\" id=\"mod__1292151382\">Yunli_Trace01_Sub</a>",
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
                  "propertyName": "&nbsp;<span class=\"descriptionNumberColor\">EnergyRegenRate</span>&nbsp;",
                  "statValue": 0.3
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-796081501\">Yunli_Trace01</a>",
          "execute": [
            {
              "eventTrigger": "Being Attacked [Owner]: Start"
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1898161246\">Yunli_AddRegardAsAttackType</a>",
          "duration": 1,
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
                  "typeToExtend": "Follow-up"
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
                  "typeToExtend": "Follow-up",
                  "extendTypeTo": "Ultimate"
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__426455178\">Yunli_Passive_AddDamage</a>",
          "stackType": "ReplaceByCaster",
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
                  "name": "Define Custom Variable",
                  "value": {
                    "displayLines": "(1.2 * MDF_Layer)"
                  },
                  "variableName": "MDF_PropertyRatio"
                },
                {
                  "name": "Stack Target Stat Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "propertyName": "&nbsp;<span class=\"descriptionNumberColor\">DamageAll</span>&nbsp;",
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
          "for": "<a class=\"gModGreen\" id=\"mod__37918586\">Yunli_TechniqueInLevel</a>",
          "execute": [
            {
              "eventTrigger": "Deal Damage Start [Owner]: Any",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has DMG Instance Tag",
                    "tag": "Yunli_Migiri_Damage"
                  },
                  "passed": [
                    {
                      "name": "Adjust Target Stats",
                      "modifiedValuesArray": [
                        {
                          "on": "Attacker",
                          "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageAll</span>&nbsp;",
                          "value": "0.8"
                        }
                      ]
                    }
                  ]
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
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1386061477\">Yunli_SuperCounter_Achevement</a>",
          "stackType": "Replace"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-77264210\">Yunli_SuperCounter_Mark</a>",
          "stackType": "Replace",
          "latentQueue": [
            "MDF_TurnEndSwitch_Blocking",
            "MDF_IsBattleEvent",
            "OnInsertAbort_Flg"
          ]
        }
      ],
      "references": []
    },
    "Yunli_LocalPlayer_StandardAbility_AttackBreak": {
      "fileName": "Yunli_LocalPlayer_StandardAbility_AttackBreak",
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
    "Yunli_LocalPlayer_Yunli_TechniqueUsage": {
      "fileName": "Yunli_LocalPlayer_Yunli_TechniqueUsage",
      "skillTrigger": "MazeSkill",
      "abilityType": "Basic ATK",
      "toughnessList": null,
      "parse": [
        "Deleted bullshit",
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": null,
          "ID": "122101(SkillMaze)",
          "duration": {
            "displayLines": "20"
          }
        },
        "Submit Technique Use"
      ],
      "onAbortReg": [],
      "references": [],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      },
      "realTargetData": {
        "primaryTarget": "{{Caster}}"
      }
    },
    "Yunli_LocalPlayer_Yunli_NormalAtk01": {
      "fileName": "Yunli_LocalPlayer_Yunli_NormalAtk01",
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
              "name": "Overworld Attack Instance"
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
                "Deleted bullshit",
                {
                  "name": "Overworld Attack Instance"
                }
              ],
              "failed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "In Motion (Overworld)",
                    "flag": "Run"
                  },
                  "passed": [
                    "Deleted bullshit",
                    {
                      "name": "Overworld Attack Instance"
                    }
                  ],
                  "failed": [
                    "Deleted bullshit",
                    {
                      "name": "Overworld Attack Instance"
                    }
                  ]
                }
              ]
            }
          ]
        }
      ],
      "onAbortReg": [],
      "references": [],
      "targetObjectData": {
        "primaryTarget": "Skill Point User(Or NONE)"
      },
      "realTargetData": {
        "primaryTarget": "Select Hostile Target"
      }
    },
    "Yunli_Yunli_TechniqueInLevel_Insert_Part02": {
      "fileName": "Yunli_Yunli_TechniqueInLevel_Insert_Part02",
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
          "modifier": "<a class=\"gModGreen\" id=\"1898161246\">Yunli_AddRegardAsAttackType</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"37918586\">Yunli_TechniqueInLevel</a>"
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
              "modifier": "<a class=\"gModGreen\" id=\"275203206\">Yunli_Eidolon1</a>",
              "valuePerStack": {
                "MDF_PropertyValue": {
                  "displayLines": "0.2"
                }
              }
            },
            {
              "name": "Define Custom Variable",
              "value": {
                "displayLines": "(6 + 3)"
              },
              "variableName": "MDF_LoopCount"
            }
          ],
          "failed": [
            {
              "name": "Define Custom Variable",
              "value": {
                "displayLines": "6"
              },
              "variableName": "MDF_LoopCount"
            }
          ]
        },
        "Deleted bullshit",
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
                "name": "Living State",
                "target": {
                  "name": "Target Name",
                  "target": "{{Ability Target(ST)}}"
                },
                "livingState": "Mask_AliveOnly"
              },
              {
                "name": "Target is Unselectable",
                "target": {
                  "name": "Target Name",
                  "target": "{{Ability Target(ST)}}"
                },
                "invertCondition": true
              }
            ]
          },
          "ifTargetFound": [
            {
              "name": "Trigger Ability",
              "from": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "inherentTarget": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "ability": "Yunli_Ability03_SuperCounter",
              "isTrigger": true
            }
          ]
        }
      ],
      "references": [],
      "targetObjectData": {
        "primaryTarget": "Inherent Target"
      }
    },
    "Yunli_Yunli_TechniqueInLevel_Insert": {
      "fileName": "Yunli_Yunli_TechniqueInLevel_Insert",
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
          "ifTargetFound": [
            {
              "name": "UI Display Event",
              "popUpText": "Intuit: Cull"
            },
            {
              "name": "Define Custom Variable",
              "scope": "ContextCaster",
              "value": 1,
              "variableName": "MazeSkill_Triggered"
            },
            "Deleted bullshit",
            {
              "name": "Trigger Ability",
              "from": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "inherentTarget": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "ability": "Yunli_TechniqueInLevel_Insert_Part02",
              "isTrigger": true
            }
          ]
        }
      ],
      "references": [],
      "targetObjectData": {
        "primaryTarget": "Inherent Target"
      }
    },
    "Yunli_Yunli_TechniqueInLevel": {
      "fileName": "Yunli_Yunli_TechniqueInLevel",
      "childAbilityList": [
        "Yunli_Yunli_TechniqueInLevel",
        "Yunli_Yunli_TechniqueInLevel_Insert",
        "Yunli_Yunli_TechniqueInLevel_Insert_Part02"
      ],
      "skillTrigger": "SkillMaze",
      "abilityType": "Technique",
      "energy": null,
      "toughnessList": [
        0,
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
          "modifier": "<a class=\"gModGreen\" id=\"-1638028001\">StageAbility_Maze_Yunli_Modifier</a>"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1638028001\">StageAbility_Maze_Yunli_Modifier</a>",
          "modifierFlags": [
            "CustomEvent_InfiniteRefresh"
          ],
          "execute": [
            {
              "eventTrigger": "Enter Battle",
              "priorityLevel": 10001,
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Compare: Variable",
                        "value1": "Wave Count",
                        "compareType": "=",
                        "value2": 1
                      },
                      {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value1": "MazeSkill_Triggered",
                        "compareType": "<",
                        "value2": 1,
                        "contextScope": "ContextCaster"
                      },
                      {
                        "name": "Enemies Still Alive",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        "includeUnselectable": true
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
                      "abilityName": "Yunli_TechniqueInLevel_Insert",
                      "abilitySource": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "abilityTarget": {
                        "name": "Target Name",
                        "target": "{{Hostile Entities(AOE)}}"
                      },
                      "priorityTag": "CharacterAttackFromSelf",
                      "canHitNonTargets": true,
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
            },
            {
              "eventTrigger": "Custom Event",
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
                        "value1": "MazeSkill_Triggered",
                        "compareType": "<",
                        "value2": 1,
                        "contextScope": "ContextCaster"
                      },
                      {
                        "name": "Enemies Still Alive",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        "includeUnselectable": true
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
                      "abilityName": "Yunli_TechniqueInLevel_Insert",
                      "abilitySource": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "abilityTarget": {
                        "name": "Target Name",
                        "target": "{{Hostile Entities(AOE)}}"
                      },
                      "priorityTag": "CharacterAttackFromSelf",
                      "canHitNonTargets": true,
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
            },
            {
              "eventTrigger": "Batch: Enemy Arrival",
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
                        "value1": "MazeSkill_Triggered",
                        "compareType": "<",
                        "value2": 1,
                        "contextScope": "ContextCaster"
                      },
                      {
                        "name": "Enemies Still Alive",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        "includeUnselectable": true
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
                      "abilityName": "Yunli_TechniqueInLevel_Insert",
                      "abilitySource": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "abilityTarget": {
                        "name": "Target Name",
                        "target": "{{Hostile Entities(AOE)}}"
                      },
                      "priorityTag": "CharacterAttackFromSelf",
                      "canHitNonTargets": true,
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
        }
      ],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      },
      "realTargetData": {
        "primaryTarget": "{{Hostile Entities(AOE)}}"
      }
    },
    "Yunli_Yunli_Counter_Preshow": {
      "fileName": "Yunli_Yunli_Counter_Preshow",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        "Deleted bullshit"
      ],
      "references": [],
      "targetObjectData": {
        "primaryTarget": "Inherent Target"
      }
    },
    "Yunli_Yunli_Counter_Part02": {
      "fileName": "Yunli_Yunli_Counter_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"813451060\">Yunli_Blocking</a>[<span class=\"descriptionNumberColor\">Parry</span>]"
        },
        {
          "name": "Update Energy",
          "on": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "valuePercent": 0.5,
          "ofAbilitySplit": true,
          "isFixed": "* ERR"
        },
        {
          "name": "Shot Fired",
          "execute": [
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
                  "displayLines": "1.2"
                },
                "Toughness": {
                  "displayLines": "ST Toughness Value"
                },
                "ToughnessDMGType": {
                  "DamageType": "Physical"
                },
                "Tags": [
                  "Counter"
                ],
                "attackType": "Follow-up"
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
                  "displayLines": "0.6"
                },
                "Toughness": {
                  "displayLines": "Blast Toughness Value"
                },
                "ToughnessDMGType": {
                  "DamageType": "Physical"
                },
                "Tags": [
                  "Counter"
                ],
                "attackType": "Follow-up"
              }
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1896809372\">Yunli_Blocking_CritDamage</a>[<span class=\"descriptionNumberColor\">Earthbind, Etherbreak</span>]"
            },
            "Trigger: Attack End"
          ]
        },
        {
          "name": "Define Custom Variable",
          "value": 1,
          "variableName": "OnInsertAbort_Flg2"
        }
      ],
      "references": [],
      "targetObjectData": {
        "primaryTarget": "Inherent Target"
      }
    },
    "Yunli_Yunli_Counter_Part01": {
      "fileName": "Yunli_Yunli_Counter_Part01",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "UI Display Event",
          "popUpText": "Flashforge"
        },
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "inherentTarget": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "ability": "Yunli_Counter_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "onAbort": [
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
                "name": "Enemies Still Alive",
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "includeUnselectable": true
              },
              {
                "name": "Compare: Variable",
                "value1": "OnInsertAbort_Flg2",
                "compareType": "=",
                "value2": 1
              },
              {
                "name": "Living State",
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "livingState": "Mask_AliveOnly"
              }
            ]
          },
          "passed": [
            {
              "name": "Use Custom Character Function",
              "functionName": "<a class=\"gTempYellow\" id=\"-501144556\">Yunli_InsertAbility2</a>"
            },
            {
              "name": "Define Custom Variable",
              "value": 0,
              "variableName": "OnInsertAbort_Flg2"
            }
          ]
        }
      ],
      "references": [],
      "targetObjectData": {
        "primaryTarget": "Inherent Target"
      }
    },
    "Yunli_Yunli_PassiveAbility01": {
      "fileName": "Yunli_Yunli_PassiveAbility01",
      "childAbilityList": [
        "Yunli_Yunli_Ability03_Counter_Part01",
        "Yunli_Yunli_Ability03_NormalCounter",
        "Yunli_Yunli_Ability03_SuperCounter",
        "Yunli_Yunli_PassiveAbility01",
        "Yunli_Yunli_Counter_Part01",
        "Yunli_Yunli_Counter_Part02",
        "Yunli_Yunli_Counter_Camera",
        "Yunli_Yunli_Counter_Preshow"
      ],
      "skillTrigger": "SkillP01",
      "abilityType": "Talent",
      "energy": 10,
      "toughnessList": [
        10,
        0,
        10
      ],
      "parse": [
        {
          "name": "Automatically use Ultimate",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          }
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1181889244\">Yunli_Passive</a>"
        },
        {
          "name": "Define Custom Variable",
          "value": 0,
          "variableName": "MDF_Energy_Count"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Trace Activated",
            "conditionList": "Fiery Wheel"
          },
          "passed": [
            {
              "name": "Update Displayed Energy Bar",
              "assignState": "True",
              "priorState": "Normal",
              "bar#": 1,
              "cooldown": 0
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Trace Activated",
            "conditionList": "True Sunder"
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-762526263\">Yunli_Trace03</a>",
              "valuePerStack": {
                "MDF_ProbabilityValue2": {
                  "displayLines": "0.3"
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
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"258425587\">Yunli_Eidolon2</a>",
              "valuePerStack": {
                "MDF_PropertyValue": {
                  "displayLines": "0.2"
                }
              }
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
              "modifier": "<a class=\"gModGreen\" id=\"325536063\">Yunli_Eidolon6</a>",
              "valuePerStack": {
                "MDF_CritChance": {
                  "displayLines": "0.15"
                },
                "MDF_PhysicalPenetrateRatio": {
                  "displayLines": "0.2"
                }
              }
            }
          ]
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1181889244\">Yunli_Passive</a>",
          "execute": [
            {
              "eventTrigger": "Turn [Anyone]: Start",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Is Entity a Battle Event/Summon",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Current Turn Owner}}"
                    }
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "value": 1,
                      "variableName": "MDF_IsBattleEvent"
                    }
                  ],
                  "failed": [
                    {
                      "name": "Define Custom Variable",
                      "value": 0,
                      "variableName": "MDF_IsBattleEvent"
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Turn [Owner]: Pre-action Phase"
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Change Entity Turn-State",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "phase": "Phase2"
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1693627544\">Yunli_Blocking_Effect</a>"
                }
              ]
            },
            {
              "eventTrigger": "Pre-Death [Owner]"
            },
            {
              "eventTrigger": "Being Attacked [Owner]: End",
              "execute": [
                {
                  "name": "Update Energy",
                  "on": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "value": {
                    "displayLines": "15"
                  },
                  "isFixed": "* ERR"
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"813451060\">Yunli_Blocking</a>[<span class=\"descriptionNumberColor\">Parry</span>]",
                    "invertCondition": true
                  },
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Is Part Of",
                        "target1": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "target2": {
                          "name": "Target Name",
                          "target": "{{Enemy Team All}}"
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
                          "abilityName": "Yunli_Counter_Part01",
                          "abilitySource": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "abilityTarget": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "priorityTag": "CharacterAttackFromSelf",
                          "canHitNonTargets": true,
                          "showInActionOrder": true,
                          "abortFlags": [
                            "STAT_CTRL",
                            "DisableAction"
                          ],
                          "allowAbilityTriggers": false
                        }
                      ],
                      "failed": [
                        {
                          "name": "Find New Target",
                          "from": {
                            "name": "Target Name",
                            "target": "{{Enemy Team All}}"
                          },
                          "searchRandom": true,
                          "maxTargets": 1,
                          "ifTargetFound": [
                            {
                              "name": "Inject Ability Use",
                              "condition": {
                                "name": "Insert Ability Condition",
                                "type": "AbilityOwnerInsertUnusedCount",
                                "typeValue": 1
                              },
                              "abilityName": "Yunli_Counter_Part01",
                              "abilitySource": {
                                "name": "Target Name",
                                "target": "{{Caster}}"
                              },
                              "abilityTarget": {
                                "name": "Target Name",
                                "target": "{{Parameter Target}}"
                              },
                              "priorityTag": "CharacterAttackFromSelf",
                              "canHitNonTargets": true,
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
                }
              ]
            },
            {
              "eventTrigger": "When Modifier is Added [Owner]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "OR",
                    "conditionList": [
                      {
                        "name": "Modifier Has Flag",
                        "flagName": "STAT_CTRL"
                      },
                      {
                        "name": "Modifier Has Flag",
                        "flagName": "DisableAction"
                      }
                    ]
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
                            "flagName": "STAT_CTRL"
                          },
                          {
                            "name": "Has Flag",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Caster}}"
                            },
                            "flagName": "DisableAction"
                          }
                        ]
                      }
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "When Losing Modifier [Owner]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "OR",
                    "conditionList": [
                      {
                        "name": "Modifier Has Flag",
                        "flagName": "STAT_CTRL"
                      },
                      {
                        "name": "Modifier Has Flag",
                        "flagName": "DisableAction"
                      }
                    ]
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
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"-1693627544\">Yunli_Blocking_Effect</a>"
                        },
                        {
                          "name": "Change Entity Turn-State",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "phase": "Phase2"
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
    "Yunli_Yunli_Ability03_SuperCounter": {
      "fileName": "Yunli_Yunli_Ability03_SuperCounter",
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
          "modifier": "<a class=\"gModGreen\" id=\"1386061477\">Yunli_SuperCounter_Achevement</a>"
        },
        {
          "name": "Change Entity Turn-State",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "phase": "Phase2"
        },
        {
          "name": "Looped Event",
          "maxLoops": 7,
          "execute": [
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
                  "displayLines": "2.2"
                },
                "HitSplit": 0.12,
                "Toughness": {
                  "displayLines": "ST Toughness Value"
                },
                "ToughnessDMGType": {
                  "DamageType": "Physical"
                },
                "instanceTag": "Yunli_Migiri_Damage",
                "Tags": [
                  "Counter"
                ],
                "attackType": "Follow-up",
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
                  "displayLines": "1.1"
                },
                "HitSplit": 0.12,
                "Toughness": {
                  "displayLines": "Blast Toughness Value"
                },
                "ToughnessDMGType": {
                  "DamageType": "Physical"
                },
                "instanceTag": "Yunli_Migiri_Damage",
                "Tags": [
                  "Counter"
                ],
                "attackType": "Follow-up"
              }
            }
          ]
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
              "displayLines": "2.2"
            },
            "HitSplit": 0.16,
            "Toughness": {
              "displayLines": "ST Toughness Value"
            },
            "ToughnessDMGType": {
              "DamageType": "Physical"
            },
            "instanceTag": "Yunli_Migiri_Damage",
            "Tags": [
              "Counter"
            ],
            "attackType": "Follow-up",
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
              "displayLines": "1.1"
            },
            "HitSplit": 0.16,
            "Toughness": {
              "displayLines": "Blast Toughness Value"
            },
            "ToughnessDMGType": {
              "DamageType": "Physical"
            },
            "instanceTag": "Yunli_Migiri_Damage",
            "Tags": [
              "Counter"
            ],
            "attackType": "Follow-up"
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
              "name": "Define Custom Variable",
              "value": {
                "displayLines": "(6 + 3)"
              },
              "variableName": "MDF_LoopCount"
            }
          ],
          "failed": [
            {
              "name": "Define Custom Variable",
              "value": {
                "displayLines": "6"
              },
              "variableName": "MDF_LoopCount"
            }
          ]
        },
        {
          "name": "Define Custom Variable",
          "value": {
            "displayLines": "0.72"
          },
          "variableName": "MDF_LoopDamage"
        },
        {
          "name": "Looped Event",
          "maxLoops": {
            "displayLines": "MDF_LoopCount"
          },
          "execute": [
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Hostile Entities(AOE)}}"
              },
              "searchRandom": true,
              "includeDyingTargets": true,
              "maxTargets": 1,
              "conditions": {
                "name": "OR",
                "conditionList": [
                  {
                    "name": "Enemies Still Alive",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "includeUnselectable": true,
                    "invertCondition": true
                  },
                  {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "value1": "CurrentHP",
                    "compareType": ">",
                    "value2": 0
                  }
                ]
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
                    "DamageType": "Physical",
                    "Damage": {
                      "displayLines": "MDF_LoopDamage"
                    },
                    "Toughness": {
                      "displayLines": "(ST Toughness Value * 0.25)"
                    },
                    "ToughnessDMGType": {
                      "DamageType": "Physical"
                    },
                    "instanceTag": "Yunli_Migiri_Damage",
                    "Tags": [
                      "Counter"
                    ],
                    "attackType": "Follow-up"
                  }
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
          "modifier": "<a class=\"gModGreen\" id=\"1898161246\">Yunli_AddRegardAsAttackType</a>"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1896809372\">Yunli_Blocking_CritDamage</a>[<span class=\"descriptionNumberColor\">Earthbind, Etherbreak</span>]"
        },
        "Trigger: Attack End",
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"275203206\">Yunli_Eidolon1</a>"
        },
        {
          "name": "Define Custom Variable",
          "value": 1,
          "variableName": "OnInsertAbort_Flg"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1386061477\">Yunli_SuperCounter_Achevement</a>"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"1705533057\">Yunli_Blocking_BeingAttackMark</a>"
          },
          "passed": [
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1705533057\">Yunli_Blocking_BeingAttackMark</a>"
            }
          ],
          "failed": [
            {
              "name": "Define Custom Variable",
              "value": {
                "displayLines": "(MDF_Energy_Count - 1)"
              },
              "variableName": "MDF_Energy_Count"
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Trace Activated",
            "conditionList": "Fiery Wheel"
          },
          "passed": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "MDF_Energy_Count",
                "compareType": "=",
                "value2": 1
              },
              "passed": [
                {
                  "name": "Update Displayed Energy Bar",
                  "assignState": "True",
                  "priorState": "Active",
                  "bar#": 1,
                  "cooldown": 0
                }
              ],
              "failed": [
                {
                  "name": "Update Displayed Energy Bar",
                  "assignState": "True",
                  "priorState": "Normal",
                  "bar#": 1,
                  "cooldown": 0
                }
              ]
            }
          ]
        },
        "Trigger: Skip Death Handling",
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
              "modifier": "<a class=\"gModGreen\" id=\"359091301\">Yunli_Eidolon4</a>[<span class=\"descriptionNumberColor\">Artisan's Ironsong</span>]",
              "duration": {
                "displayLines": "1"
              },
              "valuePerStack": {
                "MDF_ProbabilityValue": {
                  "displayLines": "0.5"
                }
              }
            }
          ]
        }
      ],
      "onAbort": [],
      "references": [],
      "targetObjectData": {
        "primaryTarget": "Inherent Target"
      }
    },
    "Yunli_Yunli_Ability03_NormalCounter": {
      "fileName": "Yunli_Yunli_Ability03_NormalCounter",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Define Custom Variable",
          "value": {
            "displayLines": "(MDF_Energy_Count + 1)"
          },
          "variableName": "MDF_Energy_Count"
        },
        "Deleted bullshit",
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1705533057\">Yunli_Blocking_BeingAttackMark</a>"
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
              "displayLines": "2.2"
            },
            "Toughness": {
              "displayLines": "ST Toughness Value"
            },
            "ToughnessDMGType": {
              "DamageType": "Physical"
            },
            "instanceTag": "Yunli_Migiri_Damage",
            "Tags": [
              "Counter"
            ],
            "attackType": "Follow-up",
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
              "displayLines": "1.1"
            },
            "Toughness": {
              "displayLines": "Blast Toughness Value"
            },
            "ToughnessDMGType": {
              "DamageType": "Physical"
            },
            "instanceTag": "Yunli_Migiri_Damage",
            "Tags": [
              "Counter"
            ],
            "attackType": "Follow-up"
          }
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1898161246\">Yunli_AddRegardAsAttackType</a>"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1896809372\">Yunli_Blocking_CritDamage</a>[<span class=\"descriptionNumberColor\">Earthbind, Etherbreak</span>]"
        },
        "Trigger: Attack End",
        {
          "name": "Define Custom Variable",
          "value": {
            "displayLines": "0.72"
          },
          "variableName": "MDF_LoopDamage"
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
              "modifier": "<a class=\"gModGreen\" id=\"359091301\">Yunli_Eidolon4</a>[<span class=\"descriptionNumberColor\">Artisan's Ironsong</span>]",
              "duration": {
                "displayLines": "1"
              },
              "valuePerStack": {
                "MDF_ProbabilityValue": {
                  "displayLines": "0.5"
                }
              }
            }
          ]
        },
        {
          "name": "Define Custom Variable",
          "value": 1,
          "variableName": "OnInsertAbort_Flg"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Trace Activated",
            "conditionList": "Fiery Wheel"
          },
          "passed": [
            {
              "name": "Update Displayed Energy Bar",
              "assignState": "True",
              "priorState": "Active",
              "bar#": 1,
              "cooldown": 0
            }
          ]
        },
        "Trigger: Skip Death Handling",
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"275203206\">Yunli_Eidolon1</a>"
        }
      ],
      "references": [],
      "targetObjectData": {
        "primaryTarget": "Inherent Target"
      }
    },
    "Yunli_Yunli_Ability03_Counter_Part01": {
      "fileName": "Yunli_Yunli_Ability03_Counter_Part01",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "IF",
          "conditions": {
            "name": "AND",
            "conditionList": [
              {
                "name": "Living State",
                "target": {
                  "name": "Target Name",
                  "target": "{{Ability Target(ST)}}"
                },
                "livingState": "Mask_AliveOnly"
              },
              {
                "name": "Target is Unselectable",
                "target": {
                  "name": "Target Name",
                  "target": "{{Ability Target(ST)}}"
                },
                "invertCondition": true
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
              "modifier": "<a class=\"gModGreen\" id=\"1898161246\">Yunli_AddRegardAsAttackType</a>"
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
                  "modifier": "<a class=\"gModGreen\" id=\"275203206\">Yunli_Eidolon1</a>",
                  "valuePerStack": {
                    "MDF_PropertyValue": {
                      "displayLines": "0.2"
                    }
                  }
                }
              ]
            },
            {
              "name": "IF",
              "conditions": {
                "name": "OR",
                "conditionList": [
                  {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Compare: Variable",
                        "value1": "MDF_Energy_Count",
                        "compareType": "=",
                        "value2": 1
                      },
                      {
                        "name": "Trace Activated",
                        "conditionList": "Fiery Wheel"
                      }
                    ]
                  },
                  {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"-77264210\">Yunli_SuperCounter_Mark</a>"
                  }
                ]
              },
              "passed": [
                {
                  "name": "UI Display Event",
                  "popUpText": "Intuit: Cull"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-77264210\">Yunli_SuperCounter_Mark</a>"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"813451060\">Yunli_Blocking</a>[<span class=\"descriptionNumberColor\">Parry</span>]",
                  "onlyRemoveOwnersInstance": true
                },
                "Deleted bullshit",
                "Deleted bullshit",
                {
                  "name": "Trigger Ability",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "inherentTarget": {
                    "name": "Target Name",
                    "target": "{{Ability Target(ST)}}"
                  },
                  "ability": "Yunli_Ability03_SuperCounter",
                  "isTrigger": true
                }
              ],
              "failed": [
                {
                  "name": "UI Display Event",
                  "popUpText": "Intuit: Slash"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"813451060\">Yunli_Blocking</a>[<span class=\"descriptionNumberColor\">Parry</span>]",
                  "onlyRemoveOwnersInstance": true
                },
                {
                  "name": "Define Custom Variable",
                  "value": 0,
                  "variableName": "MDF_LoopCount"
                },
                {
                  "name": "Trigger Ability",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "inherentTarget": {
                    "name": "Target Name",
                    "target": "{{Ability Target(ST)}}"
                  },
                  "ability": "Yunli_Ability03_NormalCounter",
                  "isTrigger": true
                }
              ]
            }
          ],
          "failed": [
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
                    "name": "Living State",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "livingState": "Mask_AliveOnly"
                  },
                  {
                    "name": "Target is Unselectable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "invertCondition": true
                  }
                ]
              },
              "ifTargetFound": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1898161246\">Yunli_AddRegardAsAttackType</a>"
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
                      "modifier": "<a class=\"gModGreen\" id=\"275203206\">Yunli_Eidolon1</a>",
                      "valuePerStack": {
                        "MDF_PropertyValue": {
                          "displayLines": "0.2"
                        }
                      }
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "OR",
                    "conditionList": [
                      {
                        "name": "AND",
                        "conditionList": [
                          {
                            "name": "Compare: Variable",
                            "value1": "MDF_Energy_Count",
                            "compareType": "=",
                            "value2": 1
                          },
                          {
                            "name": "Trace Activated",
                            "conditionList": "Fiery Wheel"
                          }
                        ]
                      },
                      {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"-77264210\">Yunli_SuperCounter_Mark</a>"
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "UI Display Event",
                      "popUpText": "Intuit: Cull"
                    },
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-77264210\">Yunli_SuperCounter_Mark</a>"
                    },
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"813451060\">Yunli_Blocking</a>[<span class=\"descriptionNumberColor\">Parry</span>]",
                      "onlyRemoveOwnersInstance": true
                    },
                    "Deleted bullshit",
                    "Deleted bullshit",
                    {
                      "name": "Trigger Ability",
                      "from": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "inherentTarget": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "ability": "Yunli_Ability03_SuperCounter",
                      "isTrigger": true
                    }
                  ],
                  "failed": [
                    {
                      "name": "UI Display Event",
                      "popUpText": "Intuit: Slash"
                    },
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"813451060\">Yunli_Blocking</a>[<span class=\"descriptionNumberColor\">Parry</span>]",
                      "onlyRemoveOwnersInstance": true
                    },
                    {
                      "name": "Define Custom Variable",
                      "value": 0,
                      "variableName": "MDF_LoopCount"
                    },
                    {
                      "name": "Trigger Ability",
                      "from": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "inherentTarget": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "ability": "Yunli_Ability03_NormalCounter",
                      "isTrigger": true
                    }
                  ]
                }
              ]
            }
          ]
        }
      ],
      "onAbort": [
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
                "name": "Living State",
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "livingState": "Mask_AliveOnly"
              },
              {
                "name": "Compare: Variable",
                "value1": "OnInsertAbort_Flg",
                "compareType": "=",
                "value2": 1
              }
            ]
          },
          "passed": [
            {
              "name": "IF",
              "conditions": {
                "name": "Enemies Still Alive",
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "includeUnselectable": true
              },
              "passed": [
                {
                  "name": "Use Custom Character Function",
                  "functionName": "<a class=\"gTempYellow\" id=\"-450811699\">Yunli_InsertAbility1</a>"
                }
              ]
            },
            {
              "name": "Define Custom Variable",
              "value": 0,
              "variableName": "OnInsertAbort_Flg"
            }
          ]
        }
      ],
      "references": [],
      "targetObjectData": {
        "primaryTarget": "Inherent Target"
      }
    },
    "Yunli_Yunli_Ability03_Part02": {
      "fileName": "Yunli_Yunli_Ability03_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Define Custom Variable",
          "value": 1,
          "variableName": "OnInsertAbort_Flg"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"183026830\">Yunli_Ability03_ForBidUltra</a>"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"813451060\">Yunli_Blocking</a>[<span class=\"descriptionNumberColor\">Parry</span>]"
        },
        {
          "name": "Update Energy",
          "on": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "valuePercent": 1,
          "ofAbilitySplit": true,
          "isFixed": "* ERR"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"813451060\">Yunli_Blocking</a>[<span class=\"descriptionNumberColor\">Parry</span>]"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1896809372\">Yunli_Blocking_CritDamage</a>[<span class=\"descriptionNumberColor\">Earthbind, Etherbreak</span>]"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1488319040\">Standard_CTRL_Taunt</a>[<span class=\"descriptionNumberColor\">Taunt</span>]"
        },
        "Trigger: Ability End"
      ],
      "references": [],
      "targetObjectData": {
        "primaryTarget": "{{Ability Target List}}"
      }
    },
    "Yunli_Yunli_Ability03_Part01": {
      "fileName": "Yunli_Yunli_Ability03_Part01",
      "childAbilityList": [
        "Yunli_Yunli_Ability03_Camera",
        "Yunli_Yunli_Ability03_EnterReady",
        "Yunli_Yunli_Ability03_Part01",
        "Yunli_Yunli_Ability03_Part02",
        "Yunli_Yunli_Ability03_Counter_Camera",
        "Yunli_Yunli_Ability03_SuperCounter_Camera",
        "Yunli_Yunli_Ability03_NormalCounter_Camera"
      ],
      "skillTrigger": "Skill03",
      "abilityType": "Ultimate",
      "energy": 5,
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
          "ability": "Yunli_Ability03_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "references": [],
      "targetObjectData": {
        "primaryTarget": "{{Ability Target List}}"
      },
      "realTargetData": {
        "primaryTarget": "{{Caster}}"
      }
    },
    "Yunli_Yunli_Ability03_EnterReady": {
      "fileName": "Yunli_Yunli_Ability03_EnterReady",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "references": [],
      "targetObjectData": {
        "primaryTarget": "Inherent Target"
      }
    },
    "Yunli_Yunli_Ability02_Part02": {
      "fileName": "Yunli_Yunli_Ability02_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Heal",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "healPercent": {
            "displayLines": "0.3"
          },
          "healFlat": {
            "displayLines": "200"
          }
        },
        {
          "name": "Shot Fired",
          "execute": [
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
                  "displayLines": "1.2"
                },
                "Toughness": {
                  "displayLines": "ST Toughness Value"
                },
                "ToughnessDMGType": {
                  "DamageType": "Physical"
                },
                "Tags": null,
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
                  "displayLines": "0.6"
                },
                "Toughness": {
                  "displayLines": "Blast Toughness Value"
                },
                "ToughnessDMGType": {
                  "DamageType": "Physical"
                },
                "Tags": null
              }
            },
            "Trigger: Attack End"
          ]
        },
        "Trigger: Ability End"
      ],
      "references": [],
      "targetObjectData": {
        "primaryTarget": "{{Ability Target List}}"
      }
    },
    "Yunli_Yunli_Ability02_Part01": {
      "fileName": "Yunli_Yunli_Ability02_Part01",
      "childAbilityList": [
        "Yunli_Yunli_Ability02_Camera",
        "Yunli_Yunli_Ability02_Part01",
        "Yunli_Yunli_Ability02_Part02"
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
        "Deleted bullshit",
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "ability": "Yunli_Ability02_Part02",
          "isTrigger": true
        }
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
    "Yunli_Yunli_Ability01_Part02": {
      "fileName": "Yunli_Yunli_Ability01_Part02",
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
            "ToughnessDMGType": {
              "DamageType": "Physical"
            },
            "Tags": null,
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
    "Yunli_Yunli_Ability01_Part01": {
      "fileName": "Yunli_Yunli_Ability01_Part01",
      "childAbilityList": [
        "Yunli_Yunli_Ability01_Camera",
        "Yunli_Yunli_Ability01_Part01",
        "Yunli_Yunli_Ability01_Part02"
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
          "ability": "Yunli_Ability01_Part02",
          "isTrigger": true
        },
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
    "Yunli_Functions": {
      "fileName": "Yunli_Functions",
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
          "functionName": "<a class=\"gTempYellow\" id=\"fun__-450811699\">Yunli_InsertAbility1</a>",
          "parse": [
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Hostile Entities(AOE)}}"
              },
              "searchRandom": true,
              "maxTargets": 1,
              "ifTargetFound": [
                {
                  "name": "Inject Ability Use",
                  "condition": {
                    "name": "Insert Ability Condition",
                    "type": "AbilityOwnerInsertUnusedCount",
                    "typeValue": 1
                  },
                  "abilityName": "Yunli_Ability03_Counter_Part01",
                  "abilitySource": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "abilityTarget": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "priorityTag": "CharacterAttackFromSelf",
                  "canHitNonTargets": true,
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
        },
        {
          "name": "CharacterFunctions",
          "functionName": "<a class=\"gTempYellow\" id=\"fun__-501144556\">Yunli_InsertAbility2</a>",
          "parse": [
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Hostile Entities(AOE)}}"
              },
              "searchRandom": true,
              "maxTargets": 1,
              "ifTargetFound": [
                {
                  "name": "Inject Ability Use",
                  "condition": {
                    "name": "Insert Ability Condition",
                    "type": "AbilityOwnerInsertUnusedCount",
                    "typeValue": 1
                  },
                  "abilityName": "Yunli_Counter_Part01",
                  "abilitySource": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "abilityTarget": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "priorityTag": "CharacterAttackFromSelf",
                  "canHitNonTargets": true,
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
      ],
      "references": []
    }
  }
}