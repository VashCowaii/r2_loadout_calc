const entityPageType = "char"
const compositeAbilityObject = {
  "fullCharacterName": "Qingque",
  "trimCharacterName": "Qingque",
  "abilityList": [
    "Qingque_Modifiers",
    "Qingque_LocalPlayer_StandardAbility_AttackBreak",
    "Qingque_LocalPlayer_Qingque_TechniqueUsage",
    "Qingque_LocalPlayer_Qingque_NormalAtk01",
    "Qingque_Qingque_TechniqueInLevel",
    "Qingque_Qingque_Bonus",
    "Qingque_QingQue_PassiveAbility01",
    "Qingque_Qingque_Ability03_EnterReady",
    "Qingque_Pela_Ability03_Cutin",
    "Qingque_QingQue_Ability03_Part02",
    "Qingque_QingQue_Ability03_Part01",
    "Qingque_Qingque_BpInsertAction_Wan",
    "Qingque_Qingque_BpInsertAction_Tong",
    "Qingque_Qingque_BpInsertAction_Tiao",
    "Qingque_Qingque_BpInsertAction",
    "Qingque_QingQue_Ability02_Part02",
    "Qingque_QingQue_Ability02_Part01",
    "Qingque_QingQue_Ability11_Part02",
    "Qingque_Qingque_Eidolon4_ATK_Special",
    "Qingque_QingQue_Ability11_Part01",
    "Qingque_Qingque_Eidolon4_ATK",
    "Qingque_QingQue_Ability01_Part02",
    "Qingque_QingQue_Ability01_Part01"
  ],
  "abilityObject": {
    "Qingque_Modifiers": {
      "fileName": "Qingque_Modifiers",
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
          "for": "<a class=\"gModGreen\" id=\"mod__667883034\">ADV_StageAbility_Maze_Qingque</a>",
          "counter": 1,
          "stackType": "Merge"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1480389752\">Pela_StatusProbability</a>",
          "stackType": "ReplaceByCaster",
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
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">EffectHitRate</span>&nbsp;",
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
          "for": "<a class=\"gModGreen\" id=\"mod__607065154\">Pela_TechniqueUsage_DefenceRatioDown</a>[<span class=\"descriptionNumberColor\">DEF Reduction</span>]",
          "stackType": "ReplaceByCaster",
          "lifeCyclePhaseAllowed": "ModifierPhase1End",
          "modifierFlags": [
            "STAT_DefenceDown"
          ],
          "description": "DEF -<span class=\"descriptionNumberColor\">MDF_PropertyValue</span>.",
          "type": "Debuff",
          "effectName": "DEF Reduction",
          "statusName": "DEF Reduction",
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
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">DEF%</span>&nbsp;",
                  "value": {
                    "operator": "Constants[0] (0) || Variables[0] (MDF_PropertyValue) || SUB || RETURN",
                    "displayLines": "(0 - MDF_PropertyValue)",
                    "constants": [
                      0
                    ],
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
          "for": "<a class=\"gModGreen\" id=\"mod__278160139\">Pela_AbilityEidolon4_IceResistanceDown</a>[<span class=\"descriptionNumberColor\">Ice RES Reduction</span>]",
          "stackType": "ReplaceByCaster",
          "lifeCyclePhaseAllowed": "ModifierPhase1End",
          "description": "Ice RES -<span class=\"descriptionNumberColor\">MDF_PropertyValue</span>.",
          "type": "Debuff",
          "effectName": "Ice RES Reduction",
          "statusName": "Ice RES Reduction",
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
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">ResistanceIceBonus</span>&nbsp;",
                  "value": {
                    "operator": "Constants[0] (0) || Variables[0] (MDF_PropertyValue) || SUB || RETURN",
                    "displayLines": "(0 - MDF_PropertyValue)",
                    "constants": [
                      0
                    ],
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
          "for": "<a class=\"gModGreen\" id=\"mod__618444549\">Pela_AbilityEidolon4_StanceBreakTaken</a>[<span class=\"descriptionNumberColor\">Ravage</span>]",
          "stackType": "ReplaceByCaster",
          "modifierFlags": [],
          "description": "DMG taken on Toughness +<span class=\"descriptionNumberColor\">MDF_StanceBreakTakenRatio</span>.",
          "type": "Debuff",
          "effectName": "Toughness Vulnerability",
          "statusName": "Ravage",
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
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">ToughnessVulnerability</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (MDF_StanceBreakTakenRatio) || RETURN",
                    "displayLines": "MDF_StanceBreakTakenRatio",
                    "constants": [],
                    "variables": [
                      "MDF_StanceBreakTakenRatio"
                    ]
                  }
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-250608162\">Pela_AbilityEidolon2_AddSpeedRatio</a>[<span class=\"descriptionNumberColor\">SPD Boost</span>]",
          "stackType": "ReplaceByCaster",
          "modifierFlags": [
            "STAT_SpeedUp"
          ],
          "description": "SPD +<span class=\"descriptionNumberColor\">MDF_Pela_SkillRank02_P1_AddSpeedRatio</span>.",
          "type": "Buff",
          "effectName": "SPD Boost",
          "statusName": "SPD Boost",
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
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">SPD%</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (MDF_Pela_SkillRank02_P1_AddSpeedRatio) || RETURN",
                    "displayLines": "MDF_Pela_SkillRank02_P1_AddSpeedRatio",
                    "constants": [],
                    "variables": [
                      "MDF_Pela_SkillRank02_P1_AddSpeedRatio"
                    ]
                  }
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1505163766\">Pela_Trace03_DamageAddedRatio</a>[<span class=\"descriptionNumberColor\">Wipe Out</span>]",
          "stackType": "ReplaceByCaster",
          "description": "Increases the next attack's DMG by <span class=\"descriptionNumberColor\">MDF_Pela_SkillTree03_DamageAddedRatio</span>.",
          "type": "Buff",
          "effectName": "DMG Boost",
          "statusName": "Wipe Out",
          "execute": [
            {
              "eventTrigger": "Deal Damage Start [Owner]: Any",
              "execute": [
                {
                  "name": "Adjust Target Stats",
                  "modifiedValuesArray": [
                    {
                      "on": "Attacker",
                      "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageAll</span>&nbsp;",
                      "value": "MDF_Pela_SkillTree03_DamageAddedRatio"
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
          "for": "<a class=\"gModGreen\" id=\"mod__134656141\">QingQue_Eidolon4_ATK</a>[<span class=\"descriptionNumberColor\">Self-Sufficer</span>]",
          "description": "Launches 1 Follow-Up ATK immediately after using Basic ATK or Enhanced Basic ATK on an enemy, dealing Quantum DMG equal to 100% of Basic ATK DMG or Enhanced Basic ATK DMG.",
          "type": "Buff",
          "statusName": "Self-Sufficer",
          "execute": [
            {
              "eventTrigger": "Attack DMG End [Owner]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Skill Type",
                        "skillType": "Basic ATK"
                      },
                      {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"134656141\">QingQue_Eidolon4_ATK</a>[<span class=\"descriptionNumberColor\">Self-Sufficer</span>]"
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Current Action Target List}}"
                        },
                        "value1": "CurrentHP%",
                        "compareType": "<=",
                        "value2": 0
                      },
                      "passed": [
                        {
                          "name": "Remove Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"134656141\">QingQue_Eidolon4_ATK</a>[<span class=\"descriptionNumberColor\">Self-Sufficer</span>]"
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
                            "modifier": "<a class=\"gModGreen\" id=\"-1539822909\">QingQue_Passive_Hu_Flag</a>"
                          },
                          "passed": [
                            {
                              "name": "Remove Events/Bonuses",
                              "to": {
                                "name": "Target Name",
                                "target": "{{Caster}}"
                              },
                              "modifier": "<a class=\"gModGreen\" id=\"134656141\">QingQue_Eidolon4_ATK</a>[<span class=\"descriptionNumberColor\">Self-Sufficer</span>]"
                            },
                            {
                              "name": "Inject Ability Use",
                              "abilityName": "Qingque_Eidolon4_ATK_Special",
                              "abilitySource": {
                                "name": "Target Name",
                                "target": "{{Caster}}"
                              },
                              "abilityTarget": {
                                "name": "Target Name",
                                "target": "{{Skill Point User}}"
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
                              "name": "Remove Events/Bonuses",
                              "to": {
                                "name": "Target Name",
                                "target": "{{Caster}}"
                              },
                              "modifier": "<a class=\"gModGreen\" id=\"134656141\">QingQue_Eidolon4_ATK</a>[<span class=\"descriptionNumberColor\">Self-Sufficer</span>]"
                            },
                            {
                              "name": "Inject Ability Use",
                              "abilityName": "Qingque_Eidolon4_ATK",
                              "abilitySource": {
                                "name": "Target Name",
                                "target": "{{Caster}}"
                              },
                              "abilityTarget": {
                                "name": "Target Name",
                                "target": "{{Skill Point User}}"
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
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-514950186\">Qingque_SpeedUpPointB3</a>[<span class=\"descriptionNumberColor\">SPD Boost</span>]",
          "stackType": "ReplaceByCaster",
          "modifierFlags": [
            "STAT_SpeedUp"
          ],
          "description": "SPD +<span class=\"descriptionNumberColor\">MDF_SpeedUp</span>.",
          "type": "Buff",
          "effectName": "SPD Boost",
          "statusName": "SPD Boost",
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
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">SPD%</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (MDF_SpeedUp) || RETURN",
                    "displayLines": "MDF_SpeedUp",
                    "constants": [],
                    "variables": [
                      "MDF_SpeedUp"
                    ]
                  }
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1715908114\">QingQue_Passive_Hu_01</a>"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-202055066\">QingQue_Passive_Hu_Flag_Yu</a>"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__757701155\">QingQue_Passive_Hu_Flag_Tiao</a>"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1600165622\">QingQue_Passive_Hu_Flag_Tong</a>"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-797865006\">QingQue_Passive_Hu_Flag_Wan</a>"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1539822909\">QingQue_Passive_Hu_Flag</a>"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__723752004\">MWQingque_Attack_Transfer</a>",
          "stackType": "ReplaceByCaster",
          "execute": [
            {
              "eventTrigger": "When Modifier Destroyed/Removed",
              "execute": [
                {
                  "name": "Update Ability Binding",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "abilityName": "Skill01",
                  "skillSlot": "Basic ATK"
                },
                {
                  "name": "Update Ability Enhance Button",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "display": "Hide",
                  "abilityName": "Basic ATK"
                }
              ]
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Update Ability Binding",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "abilityName": "Skill11",
                  "skillSlot": "Basic ATK"
                },
                {
                  "name": "Update Ability Enhance Button",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "display": "Show",
                  "abilityName": "Basic ATK"
                },
                {
                  "name": "Disable Abilities",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "abilityTypes": [
                    "Skill"
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1430814127\">QingQue_Passive_Yu</a>",
          "stackType": "Multiple",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier"
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__659202160\">QingQue_Passive_Tiao</a>",
          "stackType": "Multiple",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"-1424511139\">QingQue_PassiveCount</a>"
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "QingQue_Tiao",
                      "value": {
                        "operator": "Variables[0] (QingQue_Tiao) || Constants[0] (1) || ADD || RETURN",
                        "displayLines": "(QingQue_Tiao + 1)",
                        "constants": [
                          1
                        ],
                        "variables": [
                          "QingQue_Tiao"
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
          "for": "<a class=\"gModGreen\" id=\"mod__1184170005\">QingQue_Passive_Tong</a>",
          "stackType": "Multiple",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"-1424511139\">QingQue_PassiveCount</a>"
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "QingQue_Tong",
                      "value": {
                        "operator": "Variables[0] (QingQue_Tong) || Constants[0] (1) || ADD || RETURN",
                        "displayLines": "(QingQue_Tong + 1)",
                        "constants": [
                          1
                        ],
                        "variables": [
                          "QingQue_Tong"
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
          "for": "<a class=\"gModGreen\" id=\"mod__1921510139\">QingQue_Passive_Wan</a>",
          "stackType": "Multiple",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"-1424511139\">QingQue_PassiveCount</a>"
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "QingQue_Wan",
                      "value": {
                        "operator": "Variables[0] (QingQue_Wan) || Constants[0] (1) || ADD || RETURN",
                        "displayLines": "(QingQue_Wan + 1)",
                        "constants": [
                          1
                        ],
                        "variables": [
                          "QingQue_Wan"
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
          "for": "<a class=\"gModGreen\" id=\"mod__-1424511139\">QingQue_PassiveCount</a>",
          "execute": [
            {
              "eventTrigger": "Turn [Pre-action Phase]",
              "execute": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1539822909\">QingQue_Passive_Hu_Flag</a>",
                  "removeAllInstances": true
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1861987598\">QingQue_PassiveCount_QingqueSelf</a>",
                  "valuePerStack": {
                    "AbilityRank_Eidolon2_P1_SPAdd": {
                      "operator": "Variables[0] (1) || RETURN",
                      "displayLines": "1",
                      "constants": [],
                      "variables": [
                        1
                      ]
                    }
                  }
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Current Action Holder Is",
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
                            "name": "Compare: Variable",
                            "value1": "QingQue_Wan",
                            "compareType": "=",
                            "value2": 4
                          },
                          {
                            "name": "Compare: Variable",
                            "value1": "QingQue_Tiao",
                            "compareType": "=",
                            "value2": 0
                          },
                          {
                            "name": "Compare: Variable",
                            "value1": "QingQue_Tong",
                            "compareType": "=",
                            "value2": 0
                          },
                          {
                            "name": "Compare: Variable",
                            "value1": "QingQue_CardCount",
                            "compareType": "=",
                            "value2": 4
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
                          "modifier": "<a class=\"gModGreen\" id=\"-1763556388\">QingQue_Passive_Hu</a>[<span class=\"descriptionNumberColor\">Hidden Hand</span>]",
                          "valuePerStack": {
                            "MDF_PropertyValue": {
                              "operator": "Variables[0] (MDF_PropertyValue01) || RETURN",
                              "displayLines": "MDF_PropertyValue01",
                              "constants": [],
                              "variables": [
                                "MDF_PropertyValue01"
                              ]
                            }
                          }
                        },
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"-797865006\">QingQue_Passive_Hu_Flag_Wan</a>"
                        },
                        {
                          "name": "Remove Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"1921510139\">QingQue_Passive_Wan</a>",
                          "removeAllInstances": true
                        },
                        {
                          "name": "Define Custom Variable",
                          "variableName": "QingQue_Wan",
                          "value": 0
                        },
                        {
                          "name": "Define Custom Variable",
                          "variableName": "QingQue_CardCount",
                          "value": 0
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
                                "value1": "QingQue_Tong",
                                "compareType": "=",
                                "value2": 4
                              },
                              {
                                "name": "Compare: Variable",
                                "value1": "QingQue_Tiao",
                                "compareType": "=",
                                "value2": 0
                              },
                              {
                                "name": "Compare: Variable",
                                "value1": "QingQue_Wan",
                                "compareType": "=",
                                "value2": 0
                              },
                              {
                                "name": "Compare: Variable",
                                "value1": "QingQue_CardCount",
                                "compareType": "=",
                                "value2": 4
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
                              "modifier": "<a class=\"gModGreen\" id=\"-1763556388\">QingQue_Passive_Hu</a>[<span class=\"descriptionNumberColor\">Hidden Hand</span>]",
                              "valuePerStack": {
                                "MDF_PropertyValue": {
                                  "operator": "Variables[0] (MDF_PropertyValue01) || RETURN",
                                  "displayLines": "MDF_PropertyValue01",
                                  "constants": [],
                                  "variables": [
                                    "MDF_PropertyValue01"
                                  ]
                                }
                              }
                            },
                            {
                              "name": "Add Events/Bonuses",
                              "to": {
                                "name": "Target Name",
                                "target": "{{Caster}}"
                              },
                              "modifier": "<a class=\"gModGreen\" id=\"-1600165622\">QingQue_Passive_Hu_Flag_Tong</a>"
                            },
                            {
                              "name": "Remove Events/Bonuses",
                              "to": {
                                "name": "Target Name",
                                "target": "{{Caster}}"
                              },
                              "modifier": "<a class=\"gModGreen\" id=\"1184170005\">QingQue_Passive_Tong</a>",
                              "removeAllInstances": true
                            },
                            {
                              "name": "Define Custom Variable",
                              "variableName": "QingQue_Tong",
                              "value": 0
                            },
                            {
                              "name": "Define Custom Variable",
                              "variableName": "QingQue_CardCount",
                              "value": 0
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
                                    "value1": "QingQue_Tiao",
                                    "compareType": "=",
                                    "value2": 4
                                  },
                                  {
                                    "name": "Compare: Variable",
                                    "value1": "QingQue_Tong",
                                    "compareType": "=",
                                    "value2": 0
                                  },
                                  {
                                    "name": "Compare: Variable",
                                    "value1": "QingQue_Wan",
                                    "compareType": "=",
                                    "value2": 0
                                  },
                                  {
                                    "name": "Compare: Variable",
                                    "value1": "QingQue_CardCount",
                                    "compareType": "=",
                                    "value2": 4
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
                                  "modifier": "<a class=\"gModGreen\" id=\"-1763556388\">QingQue_Passive_Hu</a>[<span class=\"descriptionNumberColor\">Hidden Hand</span>]",
                                  "valuePerStack": {
                                    "MDF_PropertyValue": {
                                      "operator": "Variables[0] (MDF_PropertyValue01) || RETURN",
                                      "displayLines": "MDF_PropertyValue01",
                                      "constants": [],
                                      "variables": [
                                        "MDF_PropertyValue01"
                                      ]
                                    }
                                  }
                                },
                                {
                                  "name": "Add Events/Bonuses",
                                  "to": {
                                    "name": "Target Name",
                                    "target": "{{Caster}}"
                                  },
                                  "modifier": "<a class=\"gModGreen\" id=\"757701155\">QingQue_Passive_Hu_Flag_Tiao</a>"
                                },
                                {
                                  "name": "Remove Events/Bonuses",
                                  "to": {
                                    "name": "Target Name",
                                    "target": "{{Caster}}"
                                  },
                                  "modifier": "<a class=\"gModGreen\" id=\"659202160\">QingQue_Passive_Tiao</a>",
                                  "removeAllInstances": true
                                },
                                {
                                  "name": "Define Custom Variable",
                                  "variableName": "QingQue_Tiao",
                                  "value": 0
                                },
                                {
                                  "name": "Define Custom Variable",
                                  "variableName": "QingQue_CardCount",
                                  "value": 0
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
                  "name": "IF",
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"-1763556388\">QingQue_Passive_Hu</a>[<span class=\"descriptionNumberColor\">Hidden Hand</span>]"
                  },
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "NOT",
                        "condition": {
                          "name": "Has Modifier",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"-1715908114\">QingQue_Passive_Hu_01</a>"
                        }
                      },
                      "passed": [
                        {
                          "name": "Inject Ability Use",
                          "abilityName": "Qingque_Bonus",
                          "abilitySource": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "priorityTag": "CharacterBuffSelf",
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
                "Refresh QingQue Bar-State"
              ]
            },
            {
              "eventTrigger": "Entity Created [Anyone]",
              "execute": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{All Team Members(Exclude Self)}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1998273394\">QingQue_PassiveCount_Teammate</a>",
                  "valuePerStack": {
                    "QingQue_CardCount_Teammate": {
                      "operator": "Variables[0] (QingQue_CardCount) || RETURN",
                      "displayLines": "QingQue_CardCount",
                      "constants": [],
                      "variables": [
                        "QingQue_CardCount"
                      ]
                    }
                  }
                }
              ]
            },
            {
              "eventTrigger": "Pre-Death [Owner]",
              "execute": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{All Team Members(Exclude Self)}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1998273394\">QingQue_PassiveCount_Teammate</a>"
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1998273394\">QingQue_PassiveCount_Teammate</a>",
          "stackData": [
            "QingQue_CardCount_Teammate"
          ],
          "execute": [
            {
              "eventTrigger": "Turn [Pre-action Phase]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"-1424511139\">QingQue_PassiveCount</a>"
                  },
                  "failed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"1861987598\">QingQue_PassiveCount_QingqueSelf</a>",
                      "valuePerStack": {
                        "AbilityRank_Eidolon2_P1_SPAdd": {
                          "operator": "Variables[0] (1) || RETURN",
                          "displayLines": "1",
                          "constants": [],
                          "variables": [
                            1
                          ]
                        }
                      }
                    }
                  ]
                },
                "Refresh QingQue Bar-State"
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1861987598\">QingQue_PassiveCount_QingqueSelf</a>",
          "stackType": "ReplaceByCaster",
          "stackData": [
            "SkillRank_Rank02_P1_SPAdd"
          ],
          "latentQueue": [
            "QingQue_CardCount_Teammate"
          ],
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"-1424511139\">QingQue_PassiveCount</a>"
                  },
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "NOT",
                        "condition": {
                          "name": "Has Modifier",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"-1763556388\">QingQue_Passive_Hu</a>[<span class=\"descriptionNumberColor\">Hidden Hand</span>]"
                        }
                      },
                      "passed": [
                        {
                          "name": "Use Custom Character Function",
                          "functionName": "<a class=\"gTempYellow\" id=\"-1659019084\">Qingque_ChangeCard</a>"
                        }
                      ]
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
                      "name": "Update Energy",
                      "on": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "value": {
                        "operator": "Variables[0] (SkillRank_Rank02_P1_SPAdd) || RETURN",
                        "displayLines": "SkillRank_Rank02_P1_SPAdd",
                        "constants": [],
                        "variables": [
                          "SkillRank_Rank02_P1_SPAdd"
                        ]
                      },
                      "isFixed": "* ERR"
                    }
                  ]
                }
              ]
            }
          ],
          "modifierFunctions": [
            {
              "name": "CharacterFunctions",
              "functionName": "<a class=\"gTempYellow\" id=\"fun__-1659019084\">Qingque_ChangeCard</a>",
              "parse": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "QingQue_CardCount",
                    "compareType": "<",
                    "value2": 4
                  },
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Random Chance",
                        "chance": 0.33
                      },
                      "passed": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"1921510139\">QingQue_Passive_Wan</a>"
                        }
                      ],
                      "failed": [
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Random Chance",
                            "chance": 0.5
                          },
                          "passed": [
                            {
                              "name": "Add Events/Bonuses",
                              "to": {
                                "name": "Target Name",
                                "target": "{{Caster}}"
                              },
                              "modifier": "<a class=\"gModGreen\" id=\"1184170005\">QingQue_Passive_Tong</a>"
                            }
                          ],
                          "failed": [
                            {
                              "name": "Add Events/Bonuses",
                              "to": {
                                "name": "Target Name",
                                "target": "{{Caster}}"
                              },
                              "modifier": "<a class=\"gModGreen\" id=\"659202160\">QingQue_Passive_Tiao</a>"
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "QingQue_CardCount",
                      "value": {
                        "operator": "Variables[0] (QingQue_CardCount) || Constants[0] (1) || ADD || RETURN",
                        "displayLines": "(QingQue_CardCount + 1)",
                        "constants": [
                          1
                        ],
                        "variables": [
                          "QingQue_CardCount"
                        ]
                      }
                    }
                  ],
                  "failed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "QingQue_CardCount",
                        "compareType": "=",
                        "value2": 4
                      },
                      "passed": [
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Compare: Variable",
                            "value1": "QingQue_Wan",
                            "compareType": "=",
                            "value2": 4
                          },
                          "failed": [
                            {
                              "name": "IF",
                              "conditions": {
                                "name": "Compare: Variable",
                                "value1": "QingQue_Tong",
                                "compareType": "=",
                                "value2": 4
                              },
                              "failed": [
                                {
                                  "name": "IF",
                                  "conditions": {
                                    "name": "Compare: Variable",
                                    "value1": "QingQue_Tiao",
                                    "compareType": "=",
                                    "value2": 4
                                  },
                                  "failed": [
                                    {
                                      "name": "Define Custom Variable",
                                      "variableName": "QingQue_CardCount",
                                      "value": {
                                        "operator": "Variables[0] (QingQue_CardCount) || Constants[0] (1) || ADD || RETURN",
                                        "displayLines": "(QingQue_CardCount + 1)",
                                        "constants": [
                                          1
                                        ],
                                        "variables": [
                                          "QingQue_CardCount"
                                        ]
                                      }
                                    },
                                    {
                                      "name": "IF",
                                      "conditions": {
                                        "name": "Random Chance",
                                        "chance": 0.33
                                      },
                                      "passed": [
                                        {
                                          "name": "Add Events/Bonuses",
                                          "to": {
                                            "name": "Target Name",
                                            "target": "{{Caster}}"
                                          },
                                          "modifier": "<a class=\"gModGreen\" id=\"1921510139\">QingQue_Passive_Wan</a>"
                                        }
                                      ],
                                      "failed": [
                                        {
                                          "name": "IF",
                                          "conditions": {
                                            "name": "Random Chance",
                                            "chance": 0.5
                                          },
                                          "passed": [
                                            {
                                              "name": "Add Events/Bonuses",
                                              "to": {
                                                "name": "Target Name",
                                                "target": "{{Caster}}"
                                              },
                                              "modifier": "<a class=\"gModGreen\" id=\"1184170005\">QingQue_Passive_Tong</a>"
                                            }
                                          ],
                                          "failed": [
                                            {
                                              "name": "Add Events/Bonuses",
                                              "to": {
                                                "name": "Target Name",
                                                "target": "{{Caster}}"
                                              },
                                              "modifier": "<a class=\"gModGreen\" id=\"659202160\">QingQue_Passive_Tiao</a>"
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
                                            "name": "Compare: Variable",
                                            "value1": "QingQue_Wan",
                                            "compareType": ">=",
                                            "value2": 2
                                          },
                                          {
                                            "name": "Compare: Variable",
                                            "value1": "QingQue_CardCount",
                                            "compareType": "=",
                                            "value2": 5
                                          }
                                        ]
                                      },
                                      "passed": [
                                        {
                                          "name": "Define Custom Variable",
                                          "variableName": "QingQue_CardCount",
                                          "value": {
                                            "operator": "Variables[0] (QingQue_CardCount) || Constants[0] (1) || SUB || RETURN",
                                            "displayLines": "(QingQue_CardCount - 1)",
                                            "constants": [
                                              1
                                            ],
                                            "variables": [
                                              "QingQue_CardCount"
                                            ]
                                          }
                                        },
                                        {
                                          "name": "IF",
                                          "conditions": {
                                            "name": "Compare: Variable",
                                            "value1": "QingQue_Tong",
                                            "compareType": "=",
                                            "value2": 0
                                          },
                                          "passed": [
                                            {
                                              "name": "IF",
                                              "conditions": {
                                                "name": "Compare: Variable",
                                                "value1": "QingQue_Wan",
                                                "compareType": ">",
                                                "value2": {
                                                  "operator": "Variables[0] (QingQue_Tiao) || RETURN",
                                                  "displayLines": "QingQue_Tiao",
                                                  "constants": [],
                                                  "variables": [
                                                    "QingQue_Tiao"
                                                  ]
                                                }
                                              },
                                              "passed": [
                                                {
                                                  "name": "Remove Events/Bonuses",
                                                  "to": {
                                                    "name": "Target Name",
                                                    "target": "{{Caster}}"
                                                  },
                                                  "modifier": "<a class=\"gModGreen\" id=\"659202160\">QingQue_Passive_Tiao</a>"
                                                },
                                                {
                                                  "name": "Define Custom Variable",
                                                  "variableName": "QingQue_Tiao",
                                                  "value": {
                                                    "operator": "Variables[0] (QingQue_Tiao) || Constants[0] (1) || SUB || RETURN",
                                                    "displayLines": "(QingQue_Tiao - 1)",
                                                    "constants": [
                                                      1
                                                    ],
                                                    "variables": [
                                                      "QingQue_Tiao"
                                                    ]
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
                                                  "modifier": "<a class=\"gModGreen\" id=\"1921510139\">QingQue_Passive_Wan</a>"
                                                },
                                                {
                                                  "name": "Define Custom Variable",
                                                  "variableName": "QingQue_Wan",
                                                  "value": {
                                                    "operator": "Variables[0] (QingQue_Wan) || Constants[0] (1) || SUB || RETURN",
                                                    "displayLines": "(QingQue_Wan - 1)",
                                                    "constants": [
                                                      1
                                                    ],
                                                    "variables": [
                                                      "QingQue_Wan"
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
                                                "name": "Compare: Variable",
                                                "value1": "QingQue_Tiao",
                                                "compareType": "=",
                                                "value2": 0
                                              },
                                              "passed": [
                                                {
                                                  "name": "IF",
                                                  "conditions": {
                                                    "name": "Compare: Variable",
                                                    "value1": "QingQue_Wan",
                                                    "compareType": ">",
                                                    "value2": {
                                                      "operator": "Variables[0] (QingQue_Tong) || RETURN",
                                                      "displayLines": "QingQue_Tong",
                                                      "constants": [],
                                                      "variables": [
                                                        "QingQue_Tong"
                                                      ]
                                                    }
                                                  },
                                                  "passed": [
                                                    {
                                                      "name": "Remove Events/Bonuses",
                                                      "to": {
                                                        "name": "Target Name",
                                                        "target": "{{Caster}}"
                                                      },
                                                      "modifier": "<a class=\"gModGreen\" id=\"1184170005\">QingQue_Passive_Tong</a>"
                                                    },
                                                    {
                                                      "name": "Define Custom Variable",
                                                      "variableName": "QingQue_Tong",
                                                      "value": {
                                                        "operator": "Variables[0] (QingQue_Tong) || Constants[0] (1) || SUB || RETURN",
                                                        "displayLines": "(QingQue_Tong - 1)",
                                                        "constants": [
                                                          1
                                                        ],
                                                        "variables": [
                                                          "QingQue_Tong"
                                                        ]
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
                                                      "modifier": "<a class=\"gModGreen\" id=\"1921510139\">QingQue_Passive_Wan</a>"
                                                    },
                                                    {
                                                      "name": "Define Custom Variable",
                                                      "variableName": "QingQue_Wan",
                                                      "value": {
                                                        "operator": "Variables[0] (QingQue_Wan) || Constants[0] (1) || SUB || RETURN",
                                                        "displayLines": "(QingQue_Wan - 1)",
                                                        "constants": [
                                                          1
                                                        ],
                                                        "variables": [
                                                          "QingQue_Wan"
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
                                          "name": "IF",
                                          "conditions": {
                                            "name": "AND",
                                            "conditionList": [
                                              {
                                                "name": "Compare: Variable",
                                                "value1": "QingQue_Tong",
                                                "compareType": ">=",
                                                "value2": 1
                                              },
                                              {
                                                "name": "Compare: Variable",
                                                "value1": "QingQue_Tiao",
                                                "compareType": ">=",
                                                "value2": 1
                                              }
                                            ]
                                          },
                                          "passed": [
                                            {
                                              "name": "IF",
                                              "conditions": {
                                                "name": "Compare: Variable",
                                                "value1": "QingQue_Tong",
                                                "compareType": ">",
                                                "value2": {
                                                  "operator": "Variables[0] (QingQue_Tiao) || RETURN",
                                                  "displayLines": "QingQue_Tiao",
                                                  "constants": [],
                                                  "variables": [
                                                    "QingQue_Tiao"
                                                  ]
                                                }
                                              },
                                              "passed": [
                                                {
                                                  "name": "Remove Events/Bonuses",
                                                  "to": {
                                                    "name": "Target Name",
                                                    "target": "{{Caster}}"
                                                  },
                                                  "modifier": "<a class=\"gModGreen\" id=\"659202160\">QingQue_Passive_Tiao</a>"
                                                },
                                                {
                                                  "name": "Define Custom Variable",
                                                  "variableName": "QingQue_Tiao",
                                                  "value": {
                                                    "operator": "Variables[0] (QingQue_Tiao) || Constants[0] (1) || SUB || RETURN",
                                                    "displayLines": "(QingQue_Tiao - 1)",
                                                    "constants": [
                                                      1
                                                    ],
                                                    "variables": [
                                                      "QingQue_Tiao"
                                                    ]
                                                  }
                                                }
                                              ],
                                              "failed": [
                                                {
                                                  "name": "IF",
                                                  "conditions": {
                                                    "name": "Compare: Variable",
                                                    "value1": "QingQue_Tiao",
                                                    "compareType": ">",
                                                    "value2": {
                                                      "operator": "Variables[0] (QingQue_Tong) || RETURN",
                                                      "displayLines": "QingQue_Tong",
                                                      "constants": [],
                                                      "variables": [
                                                        "QingQue_Tong"
                                                      ]
                                                    }
                                                  },
                                                  "passed": [
                                                    {
                                                      "name": "Remove Events/Bonuses",
                                                      "to": {
                                                        "name": "Target Name",
                                                        "target": "{{Caster}}"
                                                      },
                                                      "modifier": "<a class=\"gModGreen\" id=\"1184170005\">QingQue_Passive_Tong</a>"
                                                    },
                                                    {
                                                      "name": "Define Custom Variable",
                                                      "variableName": "QingQue_Tong",
                                                      "value": {
                                                        "operator": "Variables[0] (QingQue_Tong) || Constants[0] (1) || SUB || RETURN",
                                                        "displayLines": "(QingQue_Tong - 1)",
                                                        "constants": [
                                                          1
                                                        ],
                                                        "variables": [
                                                          "QingQue_Tong"
                                                        ]
                                                      }
                                                    }
                                                  ],
                                                  "failed": [
                                                    {
                                                      "name": "IF",
                                                      "conditions": {
                                                        "name": "Random Chance",
                                                        "chance": 0.5
                                                      },
                                                      "passed": [
                                                        {
                                                          "name": "Remove Events/Bonuses",
                                                          "to": {
                                                            "name": "Target Name",
                                                            "target": "{{Caster}}"
                                                          },
                                                          "modifier": "<a class=\"gModGreen\" id=\"1184170005\">QingQue_Passive_Tong</a>"
                                                        },
                                                        {
                                                          "name": "Define Custom Variable",
                                                          "variableName": "QingQue_Tong",
                                                          "value": {
                                                            "operator": "Variables[0] (QingQue_Tong) || Constants[0] (1) || SUB || RETURN",
                                                            "displayLines": "(QingQue_Tong - 1)",
                                                            "constants": [
                                                              1
                                                            ],
                                                            "variables": [
                                                              "QingQue_Tong"
                                                            ]
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
                                                          "modifier": "<a class=\"gModGreen\" id=\"659202160\">QingQue_Passive_Tiao</a>"
                                                        },
                                                        {
                                                          "name": "Define Custom Variable",
                                                          "variableName": "QingQue_Tiao",
                                                          "value": {
                                                            "operator": "Variables[0] (QingQue_Tiao) || Constants[0] (1) || SUB || RETURN",
                                                            "displayLines": "(QingQue_Tiao - 1)",
                                                            "constants": [
                                                              1
                                                            ],
                                                            "variables": [
                                                              "QingQue_Tiao"
                                                            ]
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
                                      ]
                                    },
                                    {
                                      "name": "IF",
                                      "conditions": {
                                        "name": "AND",
                                        "conditionList": [
                                          {
                                            "name": "Compare: Variable",
                                            "value1": "QingQue_Tong",
                                            "compareType": ">=",
                                            "value2": 2
                                          },
                                          {
                                            "name": "Compare: Variable",
                                            "value1": "QingQue_CardCount",
                                            "compareType": "=",
                                            "value2": 5
                                          }
                                        ]
                                      },
                                      "passed": [
                                        {
                                          "name": "Define Custom Variable",
                                          "variableName": "QingQue_CardCount",
                                          "value": {
                                            "operator": "Variables[0] (QingQue_CardCount) || Constants[0] (1) || SUB || RETURN",
                                            "displayLines": "(QingQue_CardCount - 1)",
                                            "constants": [
                                              1
                                            ],
                                            "variables": [
                                              "QingQue_CardCount"
                                            ]
                                          }
                                        },
                                        {
                                          "name": "IF",
                                          "conditions": {
                                            "name": "Compare: Variable",
                                            "value1": "QingQue_Wan",
                                            "compareType": "=",
                                            "value2": 0
                                          },
                                          "passed": [
                                            {
                                              "name": "IF",
                                              "conditions": {
                                                "name": "Compare: Variable",
                                                "value1": "QingQue_Tong",
                                                "compareType": ">",
                                                "value2": {
                                                  "operator": "Variables[0] (QingQue_Tiao) || RETURN",
                                                  "displayLines": "QingQue_Tiao",
                                                  "constants": [],
                                                  "variables": [
                                                    "QingQue_Tiao"
                                                  ]
                                                }
                                              },
                                              "passed": [
                                                {
                                                  "name": "Remove Events/Bonuses",
                                                  "to": {
                                                    "name": "Target Name",
                                                    "target": "{{Caster}}"
                                                  },
                                                  "modifier": "<a class=\"gModGreen\" id=\"659202160\">QingQue_Passive_Tiao</a>"
                                                },
                                                {
                                                  "name": "Define Custom Variable",
                                                  "variableName": "QingQue_Tiao",
                                                  "value": {
                                                    "operator": "Variables[0] (QingQue_Tiao) || Constants[0] (1) || SUB || RETURN",
                                                    "displayLines": "(QingQue_Tiao - 1)",
                                                    "constants": [
                                                      1
                                                    ],
                                                    "variables": [
                                                      "QingQue_Tiao"
                                                    ]
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
                                                  "modifier": "<a class=\"gModGreen\" id=\"1184170005\">QingQue_Passive_Tong</a>"
                                                },
                                                {
                                                  "name": "Define Custom Variable",
                                                  "variableName": "QingQue_Tong",
                                                  "value": {
                                                    "operator": "Variables[0] (QingQue_Tong) || Constants[0] (1) || SUB || RETURN",
                                                    "displayLines": "(QingQue_Tong - 1)",
                                                    "constants": [
                                                      1
                                                    ],
                                                    "variables": [
                                                      "QingQue_Tong"
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
                                                "name": "Compare: Variable",
                                                "value1": "QingQue_Tiao",
                                                "compareType": "=",
                                                "value2": 0
                                              },
                                              "passed": [
                                                {
                                                  "name": "IF",
                                                  "conditions": {
                                                    "name": "Compare: Variable",
                                                    "value1": "QingQue_Wan",
                                                    "compareType": ">",
                                                    "value2": {
                                                      "operator": "Variables[0] (QingQue_Tong) || RETURN",
                                                      "displayLines": "QingQue_Tong",
                                                      "constants": [],
                                                      "variables": [
                                                        "QingQue_Tong"
                                                      ]
                                                    }
                                                  },
                                                  "passed": [
                                                    {
                                                      "name": "Remove Events/Bonuses",
                                                      "to": {
                                                        "name": "Target Name",
                                                        "target": "{{Caster}}"
                                                      },
                                                      "modifier": "<a class=\"gModGreen\" id=\"1184170005\">QingQue_Passive_Tong</a>"
                                                    },
                                                    {
                                                      "name": "Define Custom Variable",
                                                      "variableName": "QingQue_Tong",
                                                      "value": {
                                                        "operator": "Variables[0] (QingQue_Tong) || Constants[0] (1) || SUB || RETURN",
                                                        "displayLines": "(QingQue_Tong - 1)",
                                                        "constants": [
                                                          1
                                                        ],
                                                        "variables": [
                                                          "QingQue_Tong"
                                                        ]
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
                                                      "modifier": "<a class=\"gModGreen\" id=\"1921510139\">QingQue_Passive_Wan</a>"
                                                    },
                                                    {
                                                      "name": "Define Custom Variable",
                                                      "variableName": "QingQue_Wan",
                                                      "value": {
                                                        "operator": "Variables[0] (QingQue_Wan) || Constants[0] (1) || SUB || RETURN",
                                                        "displayLines": "(QingQue_Wan - 1)",
                                                        "constants": [
                                                          1
                                                        ],
                                                        "variables": [
                                                          "QingQue_Wan"
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
                                          "name": "IF",
                                          "conditions": {
                                            "name": "AND",
                                            "conditionList": [
                                              {
                                                "name": "Compare: Variable",
                                                "value1": "QingQue_Wan",
                                                "compareType": ">=",
                                                "value2": 1
                                              },
                                              {
                                                "name": "Compare: Variable",
                                                "value1": "QingQue_Tiao",
                                                "compareType": ">=",
                                                "value2": 1
                                              }
                                            ]
                                          },
                                          "passed": [
                                            {
                                              "name": "IF",
                                              "conditions": {
                                                "name": "Compare: Variable",
                                                "value1": "QingQue_Wan",
                                                "compareType": ">",
                                                "value2": {
                                                  "operator": "Variables[0] (QingQue_Tiao) || RETURN",
                                                  "displayLines": "QingQue_Tiao",
                                                  "constants": [],
                                                  "variables": [
                                                    "QingQue_Tiao"
                                                  ]
                                                }
                                              },
                                              "passed": [
                                                {
                                                  "name": "Remove Events/Bonuses",
                                                  "to": {
                                                    "name": "Target Name",
                                                    "target": "{{Caster}}"
                                                  },
                                                  "modifier": "<a class=\"gModGreen\" id=\"659202160\">QingQue_Passive_Tiao</a>"
                                                },
                                                {
                                                  "name": "Define Custom Variable",
                                                  "variableName": "QingQue_Tiao",
                                                  "value": {
                                                    "operator": "Variables[0] (QingQue_Tiao) || Constants[0] (1) || SUB || RETURN",
                                                    "displayLines": "(QingQue_Tiao - 1)",
                                                    "constants": [
                                                      1
                                                    ],
                                                    "variables": [
                                                      "QingQue_Tiao"
                                                    ]
                                                  }
                                                }
                                              ],
                                              "failed": [
                                                {
                                                  "name": "IF",
                                                  "conditions": {
                                                    "name": "Compare: Variable",
                                                    "value1": "QingQue_Tiao",
                                                    "compareType": ">",
                                                    "value2": {
                                                      "operator": "Variables[0] (QingQue_Wan) || RETURN",
                                                      "displayLines": "QingQue_Wan",
                                                      "constants": [],
                                                      "variables": [
                                                        "QingQue_Wan"
                                                      ]
                                                    }
                                                  },
                                                  "passed": [
                                                    {
                                                      "name": "Remove Events/Bonuses",
                                                      "to": {
                                                        "name": "Target Name",
                                                        "target": "{{Caster}}"
                                                      },
                                                      "modifier": "<a class=\"gModGreen\" id=\"1921510139\">QingQue_Passive_Wan</a>"
                                                    },
                                                    {
                                                      "name": "Define Custom Variable",
                                                      "variableName": "QingQue_Wan",
                                                      "value": {
                                                        "operator": "Variables[0] (QingQue_Wan) || Constants[0] (1) || SUB || RETURN",
                                                        "displayLines": "(QingQue_Wan - 1)",
                                                        "constants": [
                                                          1
                                                        ],
                                                        "variables": [
                                                          "QingQue_Wan"
                                                        ]
                                                      }
                                                    }
                                                  ],
                                                  "failed": [
                                                    {
                                                      "name": "IF",
                                                      "conditions": {
                                                        "name": "Random Chance",
                                                        "chance": 0.5
                                                      },
                                                      "passed": [
                                                        {
                                                          "name": "Remove Events/Bonuses",
                                                          "to": {
                                                            "name": "Target Name",
                                                            "target": "{{Caster}}"
                                                          },
                                                          "modifier": "<a class=\"gModGreen\" id=\"1921510139\">QingQue_Passive_Wan</a>"
                                                        },
                                                        {
                                                          "name": "Define Custom Variable",
                                                          "variableName": "QingQue_Wan",
                                                          "value": {
                                                            "operator": "Variables[0] (QingQue_Wan) || Constants[0] (1) || SUB || RETURN",
                                                            "displayLines": "(QingQue_Wan - 1)",
                                                            "constants": [
                                                              1
                                                            ],
                                                            "variables": [
                                                              "QingQue_Wan"
                                                            ]
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
                                                          "modifier": "<a class=\"gModGreen\" id=\"659202160\">QingQue_Passive_Tiao</a>"
                                                        },
                                                        {
                                                          "name": "Define Custom Variable",
                                                          "variableName": "QingQue_Tiao",
                                                          "value": {
                                                            "operator": "Variables[0] (QingQue_Tiao) || Constants[0] (1) || SUB || RETURN",
                                                            "displayLines": "(QingQue_Tiao - 1)",
                                                            "constants": [
                                                              1
                                                            ],
                                                            "variables": [
                                                              "QingQue_Tiao"
                                                            ]
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
                                      ]
                                    },
                                    {
                                      "name": "IF",
                                      "conditions": {
                                        "name": "AND",
                                        "conditionList": [
                                          {
                                            "name": "Compare: Variable",
                                            "value1": "QingQue_Tiao",
                                            "compareType": ">=",
                                            "value2": 2
                                          },
                                          {
                                            "name": "Compare: Variable",
                                            "value1": "QingQue_CardCount",
                                            "compareType": "=",
                                            "value2": 5
                                          }
                                        ]
                                      },
                                      "passed": [
                                        {
                                          "name": "Define Custom Variable",
                                          "variableName": "QingQue_CardCount",
                                          "value": {
                                            "operator": "Variables[0] (QingQue_CardCount) || Constants[0] (1) || SUB || RETURN",
                                            "displayLines": "(QingQue_CardCount - 1)",
                                            "constants": [
                                              1
                                            ],
                                            "variables": [
                                              "QingQue_CardCount"
                                            ]
                                          }
                                        },
                                        {
                                          "name": "IF",
                                          "conditions": {
                                            "name": "Compare: Variable",
                                            "value1": "QingQue_Wan",
                                            "compareType": "=",
                                            "value2": 0
                                          },
                                          "passed": [
                                            {
                                              "name": "IF",
                                              "conditions": {
                                                "name": "Compare: Variable",
                                                "value1": "QingQue_Tong",
                                                "compareType": ">",
                                                "value2": {
                                                  "operator": "Variables[0] (QingQue_Tiao) || RETURN",
                                                  "displayLines": "QingQue_Tiao",
                                                  "constants": [],
                                                  "variables": [
                                                    "QingQue_Tiao"
                                                  ]
                                                }
                                              },
                                              "passed": [
                                                {
                                                  "name": "Remove Events/Bonuses",
                                                  "to": {
                                                    "name": "Target Name",
                                                    "target": "{{Caster}}"
                                                  },
                                                  "modifier": "<a class=\"gModGreen\" id=\"659202160\">QingQue_Passive_Tiao</a>"
                                                },
                                                {
                                                  "name": "Define Custom Variable",
                                                  "variableName": "QingQue_Tiao",
                                                  "value": {
                                                    "operator": "Variables[0] (QingQue_Tiao) || Constants[0] (1) || SUB || RETURN",
                                                    "displayLines": "(QingQue_Tiao - 1)",
                                                    "constants": [
                                                      1
                                                    ],
                                                    "variables": [
                                                      "QingQue_Tiao"
                                                    ]
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
                                                  "modifier": "<a class=\"gModGreen\" id=\"1184170005\">QingQue_Passive_Tong</a>"
                                                },
                                                {
                                                  "name": "Define Custom Variable",
                                                  "variableName": "QingQue_Tong",
                                                  "value": {
                                                    "operator": "Variables[0] (QingQue_Tong) || Constants[0] (1) || SUB || RETURN",
                                                    "displayLines": "(QingQue_Tong - 1)",
                                                    "constants": [
                                                      1
                                                    ],
                                                    "variables": [
                                                      "QingQue_Tong"
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
                                                "name": "Compare: Variable",
                                                "value1": "QingQue_Tong",
                                                "compareType": "=",
                                                "value2": 0
                                              },
                                              "passed": [
                                                {
                                                  "name": "IF",
                                                  "conditions": {
                                                    "name": "Compare: Variable",
                                                    "value1": "QingQue_Wan",
                                                    "compareType": ">",
                                                    "value2": {
                                                      "operator": "Variables[0] (QingQue_Tiao) || RETURN",
                                                      "displayLines": "QingQue_Tiao",
                                                      "constants": [],
                                                      "variables": [
                                                        "QingQue_Tiao"
                                                      ]
                                                    }
                                                  },
                                                  "passed": [
                                                    {
                                                      "name": "Remove Events/Bonuses",
                                                      "to": {
                                                        "name": "Target Name",
                                                        "target": "{{Caster}}"
                                                      },
                                                      "modifier": "<a class=\"gModGreen\" id=\"659202160\">QingQue_Passive_Tiao</a>"
                                                    },
                                                    {
                                                      "name": "Define Custom Variable",
                                                      "variableName": "QingQue_Tiao",
                                                      "value": {
                                                        "operator": "Variables[0] (QingQue_Tiao) || Constants[0] (1) || SUB || RETURN",
                                                        "displayLines": "(QingQue_Tiao - 1)",
                                                        "constants": [
                                                          1
                                                        ],
                                                        "variables": [
                                                          "QingQue_Tiao"
                                                        ]
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
                                                      "modifier": "<a class=\"gModGreen\" id=\"1921510139\">QingQue_Passive_Wan</a>"
                                                    },
                                                    {
                                                      "name": "Define Custom Variable",
                                                      "variableName": "QingQue_Wan",
                                                      "value": {
                                                        "operator": "Variables[0] (QingQue_Wan) || Constants[0] (1) || SUB || RETURN",
                                                        "displayLines": "(QingQue_Wan - 1)",
                                                        "constants": [
                                                          1
                                                        ],
                                                        "variables": [
                                                          "QingQue_Wan"
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
                                          "name": "IF",
                                          "conditions": {
                                            "name": "AND",
                                            "conditionList": [
                                              {
                                                "name": "Compare: Variable",
                                                "value1": "QingQue_Wan",
                                                "compareType": ">=",
                                                "value2": 1
                                              },
                                              {
                                                "name": "Compare: Variable",
                                                "value1": "QingQue_Tong",
                                                "compareType": ">=",
                                                "value2": 1
                                              }
                                            ]
                                          },
                                          "passed": [
                                            {
                                              "name": "IF",
                                              "conditions": {
                                                "name": "Compare: Variable",
                                                "value1": "QingQue_Wan",
                                                "compareType": ">",
                                                "value2": {
                                                  "operator": "Variables[0] (QingQue_Tong) || RETURN",
                                                  "displayLines": "QingQue_Tong",
                                                  "constants": [],
                                                  "variables": [
                                                    "QingQue_Tong"
                                                  ]
                                                }
                                              },
                                              "passed": [
                                                {
                                                  "name": "Remove Events/Bonuses",
                                                  "to": {
                                                    "name": "Target Name",
                                                    "target": "{{Caster}}"
                                                  },
                                                  "modifier": "<a class=\"gModGreen\" id=\"1184170005\">QingQue_Passive_Tong</a>"
                                                },
                                                {
                                                  "name": "Define Custom Variable",
                                                  "variableName": "QingQue_Tong",
                                                  "value": {
                                                    "operator": "Variables[0] (QingQue_Tong) || Constants[0] (1) || SUB || RETURN",
                                                    "displayLines": "(QingQue_Tong - 1)",
                                                    "constants": [
                                                      1
                                                    ],
                                                    "variables": [
                                                      "QingQue_Tong"
                                                    ]
                                                  }
                                                }
                                              ],
                                              "failed": [
                                                {
                                                  "name": "IF",
                                                  "conditions": {
                                                    "name": "Compare: Variable",
                                                    "value1": "QingQue_Tong",
                                                    "compareType": ">",
                                                    "value2": {
                                                      "operator": "Variables[0] (QingQue_Wan) || RETURN",
                                                      "displayLines": "QingQue_Wan",
                                                      "constants": [],
                                                      "variables": [
                                                        "QingQue_Wan"
                                                      ]
                                                    }
                                                  },
                                                  "passed": [
                                                    {
                                                      "name": "Remove Events/Bonuses",
                                                      "to": {
                                                        "name": "Target Name",
                                                        "target": "{{Caster}}"
                                                      },
                                                      "modifier": "<a class=\"gModGreen\" id=\"1921510139\">QingQue_Passive_Wan</a>"
                                                    },
                                                    {
                                                      "name": "Define Custom Variable",
                                                      "variableName": "QingQue_Wan",
                                                      "value": {
                                                        "operator": "Variables[0] (QingQue_Wan) || Constants[0] (1) || SUB || RETURN",
                                                        "displayLines": "(QingQue_Wan - 1)",
                                                        "constants": [
                                                          1
                                                        ],
                                                        "variables": [
                                                          "QingQue_Wan"
                                                        ]
                                                      }
                                                    }
                                                  ],
                                                  "failed": [
                                                    {
                                                      "name": "IF",
                                                      "conditions": {
                                                        "name": "Random Chance",
                                                        "chance": 0.5
                                                      },
                                                      "passed": [
                                                        {
                                                          "name": "Remove Events/Bonuses",
                                                          "to": {
                                                            "name": "Target Name",
                                                            "target": "{{Caster}}"
                                                          },
                                                          "modifier": "<a class=\"gModGreen\" id=\"1921510139\">QingQue_Passive_Wan</a>"
                                                        },
                                                        {
                                                          "name": "Define Custom Variable",
                                                          "variableName": "QingQue_Wan",
                                                          "value": {
                                                            "operator": "Variables[0] (QingQue_Wan) || Constants[0] (1) || SUB || RETURN",
                                                            "displayLines": "(QingQue_Wan - 1)",
                                                            "constants": [
                                                              1
                                                            ],
                                                            "variables": [
                                                              "QingQue_Wan"
                                                            ]
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
                                                          "modifier": "<a class=\"gModGreen\" id=\"1184170005\">QingQue_Passive_Tong</a>"
                                                        },
                                                        {
                                                          "name": "Define Custom Variable",
                                                          "variableName": "QingQue_Tong",
                                                          "value": {
                                                            "operator": "Variables[0] (QingQue_Tong) || Constants[0] (1) || SUB || RETURN",
                                                            "displayLines": "(QingQue_Tong - 1)",
                                                            "constants": [
                                                              1
                                                            ],
                                                            "variables": [
                                                              "QingQue_Tong"
                                                            ]
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
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1763556388\">QingQue_Passive_Hu</a>[<span class=\"descriptionNumberColor\">Hidden Hand</span>]",
          "stackType": "ReplaceByCaster",
          "stackData": [
            "MDF_PropertyValue"
          ],
          "description": "Basic ATK is Enhanced and increases ATK by <span class=\"descriptionNumberColor\">MDF_PropertyValue</span>.",
          "type": "Buff",
          "statusName": "Hidden Hand",
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
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">ATK%</span>&nbsp;",
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
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"723752004\">MWQingque_Attack_Transfer</a>"
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "QingQue_BPCount",
                  "value": 0
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-954959718\">QingQue_BPAbility_DamageUp</a>[<span class=\"descriptionNumberColor\">DMG Boost</span>]",
          "stackType": "ReplaceByCaster",
          "description": "Each stack increases DMG by <span class=\"descriptionNumberColor\">MDF_DamageAddedRatio</span>, up to 4 stacks.",
          "type": "Buff",
          "statusName": "DMG Boost",
          "stackLimit": 4,
          "addStacksPerTrigger": 1,
          "execute": [
            {
              "eventTrigger": "Turn [Owner]: Action-End Phase",
              "execute": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-954959718\">QingQue_BPAbility_DamageUp</a>[<span class=\"descriptionNumberColor\">DMG Boost</span>]",
                  "removeAllInstances": true
                }
              ]
            },
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
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageAll</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (MDF_DamageAddedRatio) || Variables[1] (MDF_Layer) || MUL || RETURN",
                    "displayLines": "(MDF_DamageAddedRatio * MDF_Layer)",
                    "constants": [],
                    "variables": [
                      "MDF_DamageAddedRatio",
                      "MDF_Layer"
                    ]
                  }
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__823901022\">QingQue_Ability11PreShowModifier</a>",
          "previewValue": {
            "name": "Modifier: UI Preview",
            "show": "Hide",
            "target": {
              "name": "Target Name",
              "target": "{{Modifier Holder}}"
            },
            "skillType": [
              "Basic ATK"
            ],
            "conditions": {
              "name": "NOT",
              "condition": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"-514950186\">Qingque_SpeedUpPointB3</a>[<span class=\"descriptionNumberColor\">SPD Boost</span>]"
              }
            },
            "delayAdvancePreview": {
              "name": "Delay/Advance Preview",
              "previewValue": "0.1(SPD Change)"
            }
          },
          "execute": [
            {
              "eventTrigger": "Attack DMG End [Owner]",
              "execute": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"823901022\">QingQue_Ability11PreShowModifier</a>"
                }
              ]
            }
          ]
        }
      ],
      "references": []
    },
    "Qingque_LocalPlayer_StandardAbility_AttackBreak": {
      "fileName": "Qingque_LocalPlayer_StandardAbility_AttackBreak",
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
            "DamageType": {
              "name": "Damage Type Source",
              "sourceType": "Physical"
            }
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
            "DamageType": {
              "name": "Damage Type Source",
              "sourceType": "Fire"
            }
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
            "DamageType": {
              "name": "Damage Type Source",
              "sourceType": "Ice"
            }
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
            "DamageType": {
              "name": "Damage Type Source",
              "sourceType": "Thunder"
            }
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
            "DamageType": {
              "name": "Damage Type Source",
              "sourceType": "Wind"
            }
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
            "DamageType": {
              "name": "Damage Type Source",
              "sourceType": "Quantum"
            }
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
            "DamageType": {
              "name": "Damage Type Source",
              "sourceType": "Imaginary"
            }
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
    "Qingque_LocalPlayer_Qingque_TechniqueUsage": {
      "fileName": "Qingque_LocalPlayer_Qingque_TechniqueUsage",
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
          "ID": "120101(SkillMaze)",
          "duration": -1
        },
        "Submit Technique Use"
      ],
      "references": [],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      },
      "realTargetData": {
        "primaryTarget": "Select Hostile Target"
      }
    },
    "Qingque_LocalPlayer_Qingque_NormalAtk01": {
      "fileName": "Qingque_LocalPlayer_Qingque_NormalAtk01",
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
      "onAbortReg": [],
      "references": [],
      "targetObjectData": {
        "primaryTarget": "Skill Point User(Or NONE)"
      },
      "realTargetData": {
        "primaryTarget": "Select Hostile Target"
      }
    },
    "Qingque_Qingque_TechniqueInLevel": {
      "fileName": "Qingque_Qingque_TechniqueInLevel",
      "childAbilityList": [
        "Qingque_Qingque_TechniqueInLevel"
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
          "name": "Looped Event",
          "maxLoops": {
            "operator": "Variables[0] (2) || RETURN",
            "displayLines": "2",
            "constants": [],
            "variables": [
              2
            ]
          },
          "Event": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1861987598\">QingQue_PassiveCount_QingqueSelf</a>",
              "valuePerStack": {
                "AbilityRank_Eidolon2_P1_SPAdd": {
                  "operator": "Variables[0] (1) || RETURN",
                  "displayLines": "1",
                  "constants": [],
                  "variables": [
                    1
                  ]
                }
              }
            }
          ]
        },
        "Refresh QingQue Bar-State"
      ],
      "references": [],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      },
      "realTargetData": {
        "primaryTarget": "{{Caster}}"
      }
    },
    "Qingque_Qingque_Bonus": {
      "fileName": "Qingque_Qingque_Bonus",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "IF",
          "conditions": {
            "name": "Trace Activated",
            "conditionList": "Winning Hand"
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"823901022\">QingQue_Ability11PreShowModifier</a>"
            }
          ]
        },
        {
          "name": "UI Display Event",
          "popUpText": "Celestial Jade"
        },
        "Deleted bullshit",
        {
          "name": "IF",
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"-1600165622\">QingQue_Passive_Hu_Flag_Tong</a>"
          },
          "failed": [
            {
              "name": "IF",
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"757701155\">QingQue_Passive_Hu_Flag_Tiao</a>"
              },
              "failed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"-797865006\">QingQue_Passive_Hu_Flag_Wan</a>"
                  },
                  "failed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"-202055066\">QingQue_Passive_Hu_Flag_Yu</a>"
                      }
                    }
                  ]
                }
              ]
            }
          ]
        }
      ],
      "references": [],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      }
    },
    "Qingque_QingQue_PassiveAbility01": {
      "fileName": "Qingque_QingQue_PassiveAbility01",
      "childAbilityList": [
        "Qingque_QingQue_PassiveAbility01",
        "Qingque_Qingque_Bonus",
        "Qingque_Qingque_Eidolon4_ATK_Camera",
        "Qingque_Qingque_Bonus_Camera",
        "Qingque_Qingque_Eidolon4_ATK_Special_Camera",
        "Qingque_Qingque_UltraGangFix_Camera"
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
          "variableName": "QingQue_BPCoolDown",
          "value": 0
        },
        {
          "name": "Define Custom Variable",
          "variableName": "QingQue_BPCount",
          "value": 0
        },
        {
          "name": "Define Custom Variable",
          "variableName": "QingQue_CardCount",
          "value": 0
        },
        {
          "name": "Define Custom Variable",
          "variableName": "MDF_PropertyValue01",
          "value": {
            "operator": "Variables[0] (0.72) || RETURN",
            "displayLines": "0.72",
            "constants": [],
            "variables": [
              0.72
            ]
          }
        },
        {
          "name": "Define Custom Variable",
          "variableName": "MDF_PropertyValue",
          "value": {
            "operator": "Variables[0] (0.72) || RETURN",
            "displayLines": "0.72",
            "constants": [],
            "variables": [
              0.72
            ]
          }
        },
        {
          "name": "Define Custom Variable",
          "variableName": "QingQue_Wan",
          "value": 0
        },
        {
          "name": "Define Custom Variable",
          "variableName": "QingQue_Tong",
          "value": 0
        },
        {
          "name": "Define Custom Variable",
          "variableName": "QingQue_Tiao",
          "value": 0
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1424511139\">QingQue_PassiveCount</a>",
          "valuePerStack": {
            "MDF_PropertyValue01": {
              "operator": "Variables[0] (0.72) || RETURN",
              "displayLines": "0.72",
              "constants": [],
              "variables": [
                0.72
              ]
            }
          }
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
    "Qingque_Qingque_Ability03_EnterReady": {
      "fileName": "Qingque_Qingque_Ability03_EnterReady",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "references": [],
      "targetObjectData": {
        "primaryTarget": "Inherent Target"
      }
    },
    "Qingque_Pela_Ability03_Cutin": {
      "fileName": "Qingque_Pela_Ability03_Cutin",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "references": [],
      "targetObjectData": {
        "primaryTarget": "Inherent Target"
      }
    },
    "Qingque_QingQue_Ability03_Part02": {
      "fileName": "Qingque_QingQue_Ability03_Part02",
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
          "modifier": "<a class=\"gModGreen\" id=\"520474077\">Qingque_Ability03_Eidolon1</a>"
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
              "operator": "Variables[0] (2) || RETURN",
              "displayLines": "2",
              "constants": [],
              "variables": [
                2
              ]
            },
            "Toughness": {
              "operator": "Variables[0] (AOE Toughness Value) || RETURN",
              "displayLines": "AOE Toughness Value",
              "constants": [],
              "variables": [
                "AOE Toughness Value"
              ]
            },
            "Tags": null,
            "EnergyGainPercent": "100%"
          }
        },
        "Trigger: Attack End",
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"520474077\">Qingque_Ability03_Eidolon1</a>"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"659202160\">QingQue_Passive_Tiao</a>",
          "removeAllInstances": true
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1184170005\">QingQue_Passive_Tong</a>",
          "removeAllInstances": true
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1921510139\">QingQue_Passive_Wan</a>",
          "removeAllInstances": true
        },
        {
          "name": "Define Custom Variable",
          "variableName": "QingQue_Tong",
          "value": 0
        },
        {
          "name": "Define Custom Variable",
          "variableName": "QingQue_Tiao",
          "value": 0
        },
        {
          "name": "Define Custom Variable",
          "variableName": "QingQue_Wan",
          "value": 0
        },
        {
          "name": "Define Custom Variable",
          "variableName": "QingQue_CardCount",
          "value": 0
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1763556388\">QingQue_Passive_Hu</a>[<span class=\"descriptionNumberColor\">Hidden Hand</span>]",
          "valuePerStack": {
            "MDF_PropertyValue": {
              "operator": "Variables[0] (MDF_PropertyValue01) || RETURN",
              "displayLines": "MDF_PropertyValue01",
              "constants": [],
              "variables": [
                "MDF_PropertyValue01"
              ]
            }
          }
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-202055066\">QingQue_Passive_Hu_Flag_Yu</a>"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "AND",
            "conditionList": [
              {
                "name": "Current Turn Is",
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                }
              },
              "Turn Owner is in Action"
            ]
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1715908114\">QingQue_Passive_Hu_01</a>"
            },
            {
              "name": "Inject Ability Use",
              "abilityName": "Qingque_Bonus",
              "abilitySource": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "priorityTag": "CharacterBuffSelf",
              "canHitNonTargets": true,
              "showInActionOrder": true,
              "abortFlags": [
                "STAT_CTRL",
                "DisableAction"
              ],
              "allowAbilityTriggers": false
            }
          ]
        },
        "Refresh QingQue Bar-State",
        "Trigger: Skip Death Handling",
        "Trigger: Ability End"
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__520474077\">Qingque_Ability03_Eidolon1</a>",
          "execute": [
            {
              "eventTrigger": "Deal Damage Start [Owner]: Hit",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Eidolon Activated",
                    "eidolon": 1
                  },
                  "passed": [
                    {
                      "name": "Adjust Target Stats",
                      "modifiedValuesArray": [
                        {
                          "on": "Attacker",
                          "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageAll</span>&nbsp;",
                          "value": "0.1"
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
        "primaryTarget": "{{Ability Target List}}"
      }
    },
    "Qingque_QingQue_Ability03_Part01": {
      "fileName": "Qingque_QingQue_Ability03_Part01",
      "childAbilityList": [
        "Qingque_Qingque_Ability03_Camera",
        "Qingque_QingQue_Ability03_Part01",
        "Qingque_QingQue_Ability03_Part02",
        "Qingque_Pela_Ability03_Cutin",
        "Qingque_Qingque_Ability03_EnterReady"
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
          "ability": "QingQue_Ability03_Part02",
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
    "Qingque_Qingque_BpInsertAction_Wan": {
      "fileName": "Qingque_Qingque_BpInsertAction_Wan",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        "Refresh QingQue Bar-State",
        {
          "name": "IF",
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"-202055066\">QingQue_Passive_Hu_Flag_Yu</a>"
          },
          "passed": [
            "Deleted bullshit"
          ],
          "failed": [
            {
              "name": "UI Display Event",
              "popUpText": "Celestial Jade"
            },
            "Deleted bullshit"
          ]
        }
      ],
      "references": [],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      }
    },
    "Qingque_Qingque_BpInsertAction_Tong": {
      "fileName": "Qingque_Qingque_BpInsertAction_Tong",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        "Refresh QingQue Bar-State",
        {
          "name": "IF",
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"-202055066\">QingQue_Passive_Hu_Flag_Yu</a>"
          },
          "passed": [
            "Deleted bullshit"
          ],
          "failed": [
            {
              "name": "UI Display Event",
              "popUpText": "Celestial Jade"
            },
            "Deleted bullshit"
          ]
        }
      ],
      "references": [],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      }
    },
    "Qingque_Qingque_BpInsertAction_Tiao": {
      "fileName": "Qingque_Qingque_BpInsertAction_Tiao",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        "Refresh QingQue Bar-State",
        {
          "name": "IF",
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"-202055066\">QingQue_Passive_Hu_Flag_Yu</a>"
          },
          "passed": [
            "Deleted bullshit"
          ],
          "failed": [
            {
              "name": "UI Display Event",
              "popUpText": "Celestial Jade"
            },
            "Deleted bullshit"
          ]
        }
      ],
      "references": [],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      }
    },
    "Qingque_Qingque_BpInsertAction": {
      "fileName": "Qingque_Qingque_BpInsertAction",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        "Refresh QingQue Bar-State",
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "QingQue_BPCount",
            "compareType": "=",
            "value2": 2
          }
        },
        "Deleted bullshit"
      ],
      "references": [],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      }
    },
    "Qingque_QingQue_Ability02_Part02": {
      "fileName": "Qingque_QingQue_Ability02_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Define Custom Variable",
          "variableName": "QingQue_BPCount",
          "value": {
            "operator": "Variables[0] (QingQue_BPCount) || Constants[0] (1) || ADD || RETURN",
            "displayLines": "(QingQue_BPCount + 1)",
            "constants": [
              1
            ],
            "variables": [
              "QingQue_BPCount"
            ]
          }
        },
        {
          "name": "IF",
          "conditions": {
            "name": "AND",
            "conditionList": [
              {
                "name": "Trace Activated",
                "conditionList": "Tile Battle"
              },
              {
                "name": "Compare: Variable",
                "value1": "QingQue_BPCoolDown",
                "compareType": "=",
                "value2": 0
              }
            ]
          },
          "passed": [
            {
              "name": "Skill Points Modification",
              "adjustmentValue": 1,
              "adjustmentType": "+"
            },
            {
              "name": "Define Custom Variable",
              "variableName": "QingQue_BPCoolDown",
              "value": 1
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "AND",
            "conditionList": [
              {
                "name": "Trace Activated",
                "conditionList": "Bide Time"
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
              "modifier": "<a class=\"gModGreen\" id=\"-954959718\">QingQue_BPAbility_DamageUp</a>[<span class=\"descriptionNumberColor\">DMG Boost</span>]",
              "stackLimit": {
                "operator": "Variables[0] (4) || RETURN",
                "displayLines": "4",
                "constants": [],
                "variables": [
                  4
                ]
              },
              "valuePerStack": {
                "MDF_DamageAddedRatio": {
                  "operator": "Variables[0] (0.1) || Variables[1] (0.28) || ADD || RETURN",
                  "displayLines": "(0.1 + 0.28)",
                  "constants": [],
                  "variables": [
                    0.1,
                    0.28
                  ]
                }
              },
              "addStacksPerTrigger": 1
            }
          ],
          "failed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-954959718\">QingQue_BPAbility_DamageUp</a>[<span class=\"descriptionNumberColor\">DMG Boost</span>]",
              "stackLimit": {
                "operator": "Variables[0] (4) || RETURN",
                "displayLines": "4",
                "constants": [],
                "variables": [
                  4
                ]
              },
              "valuePerStack": {
                "MDF_DamageAddedRatio": {
                  "operator": "Variables[0] (0.28) || RETURN",
                  "displayLines": "0.28",
                  "constants": [],
                  "variables": [
                    0.28
                  ]
                }
              },
              "addStacksPerTrigger": 1
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
              "name": "IF",
              "conditions": {
                "name": "Random Chance",
                "chance": {
                  "operator": "Variables[0] (0.24) || RETURN",
                  "displayLines": "0.24",
                  "constants": [],
                  "variables": [
                    0.24
                  ]
                }
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"134656141\">QingQue_Eidolon4_ATK</a>[<span class=\"descriptionNumberColor\">Self-Sufficer</span>]"
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
          "valuePercent": 1,
          "ofAbilitySplit": true,
          "isFixed": "* ERR"
        },
        {
          "name": "Looped Event",
          "maxLoops": {
            "operator": "Variables[0] (2) || RETURN",
            "displayLines": "2",
            "constants": [],
            "variables": [
              2
            ]
          },
          "Event": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1861987598\">QingQue_PassiveCount_QingqueSelf</a>",
              "valuePerStack": {
                "AbilityRank_Eidolon2_P1_SPAdd": {
                  "operator": "Variables[0] (1) || RETURN",
                  "displayLines": "1",
                  "constants": [],
                  "variables": [
                    1
                  ]
                }
              }
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "QingQue_Tiao",
            "compareType": "=",
            "value2": 4
          },
          "passed": [
            {
              "name": "IF",
              "conditions": {
                "name": "Trace Activated",
                "conditionList": "Winning Hand"
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"823901022\">QingQue_Ability11PreShowModifier</a>"
                }
              ]
            },
            {
              "name": "Inject Extra-Turn",
              "actionTag": "Qingque_BpInsert",
              "canInjectUltimates": true,
              "followSameTagAsAction": true,
              "abilityName": "Qingque_BpInsertAction_Tiao",
              "afterInjection": []
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"659202160\">QingQue_Passive_Tiao</a>",
              "removeAllInstances": true
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1184170005\">QingQue_Passive_Tong</a>",
              "removeAllInstances": true
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1921510139\">QingQue_Passive_Wan</a>",
              "removeAllInstances": true
            },
            {
              "name": "Define Custom Variable",
              "variableName": "QingQue_Tong",
              "value": 0
            },
            {
              "name": "Define Custom Variable",
              "variableName": "QingQue_Tiao",
              "value": 0
            },
            {
              "name": "Define Custom Variable",
              "variableName": "QingQue_Wan",
              "value": 0
            },
            {
              "name": "Define Custom Variable",
              "variableName": "QingQue_CardCount",
              "value": 0
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1763556388\">QingQue_Passive_Hu</a>[<span class=\"descriptionNumberColor\">Hidden Hand</span>]",
              "valuePerStack": {
                "MDF_PropertyValue": {
                  "operator": "Variables[0] (MDF_PropertyValue01) || RETURN",
                  "displayLines": "MDF_PropertyValue01",
                  "constants": [],
                  "variables": [
                    "MDF_PropertyValue01"
                  ]
                }
              }
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"757701155\">QingQue_Passive_Hu_Flag_Tiao</a>"
            }
          ],
          "failed": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "QingQue_Wan",
                "compareType": "=",
                "value2": 4
              },
              "passed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Trace Activated",
                    "conditionList": "Winning Hand"
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"823901022\">QingQue_Ability11PreShowModifier</a>"
                    }
                  ]
                },
                {
                  "name": "Inject Extra-Turn",
                  "actionTag": "Qingque_BpInsert",
                  "canInjectUltimates": true,
                  "followSameTagAsAction": true,
                  "abilityName": "Qingque_BpInsertAction_Wan",
                  "afterInjection": []
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"659202160\">QingQue_Passive_Tiao</a>",
                  "removeAllInstances": true
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1184170005\">QingQue_Passive_Tong</a>",
                  "removeAllInstances": true
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1921510139\">QingQue_Passive_Wan</a>",
                  "removeAllInstances": true
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "QingQue_Tong",
                  "value": 0
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "QingQue_Tiao",
                  "value": 0
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "QingQue_Wan",
                  "value": 0
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "QingQue_CardCount",
                  "value": 0
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1763556388\">QingQue_Passive_Hu</a>[<span class=\"descriptionNumberColor\">Hidden Hand</span>]",
                  "valuePerStack": {
                    "MDF_PropertyValue": {
                      "operator": "Variables[0] (MDF_PropertyValue01) || RETURN",
                      "displayLines": "MDF_PropertyValue01",
                      "constants": [],
                      "variables": [
                        "MDF_PropertyValue01"
                      ]
                    }
                  }
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-797865006\">QingQue_Passive_Hu_Flag_Wan</a>"
                }
              ],
              "failed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "QingQue_Tong",
                    "compareType": "=",
                    "value2": 4
                  },
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Trace Activated",
                        "conditionList": "Winning Hand"
                      },
                      "passed": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"823901022\">QingQue_Ability11PreShowModifier</a>"
                        }
                      ]
                    },
                    {
                      "name": "Inject Extra-Turn",
                      "actionTag": "Qingque_BpInsert",
                      "canInjectUltimates": true,
                      "followSameTagAsAction": true,
                      "abilityName": "Qingque_BpInsertAction_Tong",
                      "afterInjection": []
                    },
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"659202160\">QingQue_Passive_Tiao</a>",
                      "removeAllInstances": true
                    },
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"1184170005\">QingQue_Passive_Tong</a>",
                      "removeAllInstances": true
                    },
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"1921510139\">QingQue_Passive_Wan</a>",
                      "removeAllInstances": true
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "QingQue_Tong",
                      "value": 0
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "QingQue_Tiao",
                      "value": 0
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "QingQue_Wan",
                      "value": 0
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "QingQue_CardCount",
                      "value": 0
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-1763556388\">QingQue_Passive_Hu</a>[<span class=\"descriptionNumberColor\">Hidden Hand</span>]",
                      "valuePerStack": {
                        "MDF_PropertyValue": {
                          "operator": "Variables[0] (MDF_PropertyValue01) || RETURN",
                          "displayLines": "MDF_PropertyValue01",
                          "constants": [],
                          "variables": [
                            "MDF_PropertyValue01"
                          ]
                        }
                      }
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-1600165622\">QingQue_Passive_Hu_Flag_Tong</a>"
                    }
                  ],
                  "failed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Target has Extra-Turn Queued",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Player Team All}}"
                        }
                      },
                      "passed": [
                        {
                          "name": "Inject Extra-Turn",
                          "actionTag": null,
                          "canInjectUltimates": true,
                          "afterInjection": []
                        }
                      ],
                      "failed": [
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Compare: Variable",
                            "value1": "CurrentSkillPoints",
                            "compareType": "<=",
                            "value2": 0
                          },
                          "passed": [
                            {
                              "name": "Inject Extra-Turn",
                              "actionTag": null,
                              "canInjectUltimates": true,
                              "afterInjection": []
                            }
                          ],
                          "failed": [
                            {
                              "name": "Inject Extra-Turn",
                              "actionTag": "Qingque_BpInsert",
                              "skillType": "ControlSkill02",
                              "skillTypeDelayed": "ControlSkill01",
                              "canInjectUltimates": true,
                              "followSameTagAsAction": true,
                              "abilityName": "Qingque_BpInsertAction",
                              "afterInjection": []
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
        },
        "Refresh QingQue Bar-State",
        "Trigger: Ability End"
      ],
      "references": [],
      "targetObjectData": {
        "primaryTarget": "{{Ability Target List}}"
      }
    },
    "Qingque_QingQue_Ability02_Part01": {
      "fileName": "Qingque_QingQue_Ability02_Part01",
      "childAbilityList": [
        "Qingque_Qingque_Ability02_Camera",
        "Qingque_QingQue_Ability02_Part01",
        "Qingque_QingQue_Ability02_Part02",
        "Qingque_Qingque_BpInsertAction",
        "Qingque_Qingque_BpInsertAction_Camera",
        "Qingque_Qingque_BpInsertAction_Tiao",
        "Qingque_Qingque_BpInsertAction_Tong",
        "Qingque_Qingque_BpInsertAction_Wan"
      ],
      "skillTrigger": "Skill02",
      "abilityType": "Skill",
      "energy": null,
      "toughnessList": [
        0,
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
          "ability": "QingQue_Ability02_Part02",
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
    "Qingque_QingQue_Ability11_Part02": {
      "fileName": "Qingque_QingQue_Ability11_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
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
                "DamageType": "Quantum",
                "Damage": {
                  "operator": "Variables[0] (2.4) || RETURN",
                  "displayLines": "2.4",
                  "constants": [],
                  "variables": [
                    2.4
                  ]
                },
                "Toughness": {
                  "operator": "Variables[0] (ST Toughness Value) || RETURN",
                  "displayLines": "ST Toughness Value",
                  "constants": [],
                  "variables": [
                    "ST Toughness Value"
                  ]
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
                "DamageType": "Quantum",
                "Damage": {
                  "operator": "Variables[0] (1) || RETURN",
                  "displayLines": "1",
                  "constants": [],
                  "variables": [
                    1
                  ]
                },
                "Toughness": {
                  "operator": "Variables[0] (Blast Toughness Value) || RETURN",
                  "displayLines": "Blast Toughness Value",
                  "constants": [],
                  "variables": [
                    "Blast Toughness Value"
                  ]
                },
                "Tags": null,
                "hitOwner": {
                  "name": "Target Name",
                  "target": "{{Ability Target List}}"
                }
              }
            }
          ]
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"723752004\">MWQingque_Attack_Transfer</a>"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1763556388\">QingQue_Passive_Hu</a>[<span class=\"descriptionNumberColor\">Hidden Hand</span>]"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1715908114\">QingQue_Passive_Hu_01</a>"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-797865006\">QingQue_Passive_Hu_Flag_Wan</a>"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1600165622\">QingQue_Passive_Hu_Flag_Tong</a>"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"757701155\">QingQue_Passive_Hu_Flag_Tiao</a>"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-202055066\">QingQue_Passive_Hu_Flag_Yu</a>"
        },
        "Refresh QingQue Bar-State",
        {
          "name": "IF",
          "conditions": {
            "name": "AND",
            "conditionList": [
              {
                "name": "Trace Activated",
                "conditionList": "Winning Hand"
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
              "modifier": "<a class=\"gModGreen\" id=\"-514950186\">Qingque_SpeedUpPointB3</a>[<span class=\"descriptionNumberColor\">SPD Boost</span>]",
              "duration": 1,
              "valuePerStack": {
                "MDF_SpeedUp": {
                  "operator": "Variables[0] (0.1) || RETURN",
                  "displayLines": "0.1",
                  "constants": [],
                  "variables": [
                    0.1
                  ]
                }
              }
            }
          ]
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1539822909\">QingQue_Passive_Hu_Flag</a>"
        },
        "Trigger: Attack End",
        {
          "name": "IF",
          "conditions": {
            "name": "Eidolon Activated",
            "eidolon": 6
          },
          "passed": [
            {
              "name": "Skill Points Modification",
              "adjustmentValue": 1,
              "adjustmentType": "+"
            }
          ]
        },
        "Trigger: Ability End"
      ],
      "references": [],
      "targetObjectData": {
        "primaryTarget": "{{Ability Target List}}"
      }
    },
    "Qingque_Qingque_Eidolon4_ATK_Special": {
      "fileName": "Qingque_Qingque_Eidolon4_ATK_Special",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        "Deleted bullshit",
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
                "DamageType": "Quantum",
                "Damage": {
                  "operator": "Variables[0] (2.4) || RETURN",
                  "displayLines": "2.4",
                  "constants": [],
                  "variables": [
                    2.4
                  ]
                },
                "Toughness": {
                  "operator": "Variables[0] (ST Toughness Value) || RETURN",
                  "displayLines": "ST Toughness Value",
                  "constants": [],
                  "variables": [
                    "ST Toughness Value"
                  ]
                },
                "Tags": null,
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
                "DamageType": "Quantum",
                "Damage": {
                  "operator": "Variables[0] (1) || RETURN",
                  "displayLines": "1",
                  "constants": [],
                  "variables": [
                    1
                  ]
                },
                "Toughness": {
                  "operator": "Variables[0] (Blast Toughness Value) || RETURN",
                  "displayLines": "Blast Toughness Value",
                  "constants": [],
                  "variables": [
                    "Blast Toughness Value"
                  ]
                },
                "Tags": null,
                "attackType": "Follow-up",
                "hitOwner": {
                  "name": "Target Name",
                  "target": "{{Ability Target(ST)}}"
                }
              }
            }
          ]
        },
        "Trigger: Attack End"
      ],
      "references": [],
      "targetObjectData": {
        "primaryTarget": "Inherent Target"
      }
    },
    "Qingque_QingQue_Ability11_Part01": {
      "fileName": "Qingque_QingQue_Ability11_Part01",
      "childAbilityList": [
        "Qingque_Qingque_Ability011_Camera",
        "Qingque_QingQue_Ability11_Part01",
        "Qingque_Qingque_Eidolon4_ATK_Special",
        "Qingque_QingQue_Ability11_Part02"
      ],
      "skillTrigger": "Skill11",
      "abilityType": "Basic ATK",
      "energy": 20,
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
          "ability": "QingQue_Ability11_Part02",
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
    "Qingque_Qingque_Eidolon4_ATK": {
      "fileName": "Qingque_Qingque_Eidolon4_ATK",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        "Deleted bullshit",
        {
          "name": "Shot Fired",
          "execute": [
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Ability Target(ST)}}"
              },
              "AttackScaling": {
                "DamageType": "Quantum",
                "Damage": {
                  "operator": "Variables[0] (1) || RETURN",
                  "displayLines": "1",
                  "constants": [],
                  "variables": [
                    1
                  ]
                },
                "Toughness": {
                  "operator": "Variables[0] (ST Toughness Value) || RETURN",
                  "displayLines": "ST Toughness Value",
                  "constants": [],
                  "variables": [
                    "ST Toughness Value"
                  ]
                },
                "Tags": null,
                "attackType": "Follow-up"
              }
            }
          ]
        },
        "Trigger: Attack End"
      ],
      "references": [],
      "targetObjectData": {
        "primaryTarget": "Inherent Target"
      }
    },
    "Qingque_QingQue_Ability01_Part02": {
      "fileName": "Qingque_QingQue_Ability01_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "QingQue_CardCount",
            "compareType": "=",
            "value2": 1
          },
          "passed": [
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"659202160\">QingQue_Passive_Tiao</a>"
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1184170005\">QingQue_Passive_Tong</a>"
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1921510139\">QingQue_Passive_Wan</a>"
            },
            {
              "name": "Define Custom Variable",
              "variableName": "QingQue_Tiao",
              "value": 0
            },
            {
              "name": "Define Custom Variable",
              "variableName": "QingQue_Tong",
              "value": 0
            },
            {
              "name": "Define Custom Variable",
              "variableName": "QingQue_Wan",
              "value": 0
            },
            {
              "name": "Define Custom Variable",
              "variableName": "QingQue_CardCount",
              "value": 0
            }
          ],
          "failed": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "QingQue_CardCount",
                "compareType": "=",
                "value2": 2
              },
              "passed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "QingQue_Tong",
                    "compareType": "=",
                    "value2": 1
                  },
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "QingQue_Wan",
                        "compareType": "=",
                        "value2": 1
                      },
                      "passed": [
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Random Chance",
                            "chance": 0.5
                          },
                          "passed": [
                            {
                              "name": "Remove Events/Bonuses",
                              "to": {
                                "name": "Target Name",
                                "target": "{{Caster}}"
                              },
                              "modifier": "<a class=\"gModGreen\" id=\"1921510139\">QingQue_Passive_Wan</a>"
                            },
                            {
                              "name": "Define Custom Variable",
                              "variableName": "QingQue_Wan",
                              "value": {
                                "operator": "Variables[0] (QingQue_Wan) || Constants[0] (1) || SUB || RETURN",
                                "displayLines": "(QingQue_Wan - 1)",
                                "constants": [
                                  1
                                ],
                                "variables": [
                                  "QingQue_Wan"
                                ]
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
                              "modifier": "<a class=\"gModGreen\" id=\"1184170005\">QingQue_Passive_Tong</a>"
                            },
                            {
                              "name": "Define Custom Variable",
                              "variableName": "QingQue_Tong",
                              "value": {
                                "operator": "Variables[0] (QingQue_Tong) || Constants[0] (1) || SUB || RETURN",
                                "displayLines": "(QingQue_Tong - 1)",
                                "constants": [
                                  1
                                ],
                                "variables": [
                                  "QingQue_Tong"
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
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "QingQue_Tiao",
                    "compareType": "=",
                    "value2": 1
                  },
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "QingQue_Wan",
                        "compareType": "=",
                        "value2": 1
                      },
                      "passed": [
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Random Chance",
                            "chance": 0.5
                          },
                          "passed": [
                            {
                              "name": "Remove Events/Bonuses",
                              "to": {
                                "name": "Target Name",
                                "target": "{{Caster}}"
                              },
                              "modifier": "<a class=\"gModGreen\" id=\"1921510139\">QingQue_Passive_Wan</a>"
                            },
                            {
                              "name": "Define Custom Variable",
                              "variableName": "QingQue_Wan",
                              "value": 0
                            }
                          ],
                          "failed": [
                            {
                              "name": "Remove Events/Bonuses",
                              "to": {
                                "name": "Target Name",
                                "target": "{{Caster}}"
                              },
                              "modifier": "<a class=\"gModGreen\" id=\"659202160\">QingQue_Passive_Tiao</a>"
                            },
                            {
                              "name": "Define Custom Variable",
                              "variableName": "QingQue_Tiao",
                              "value": 0
                            }
                          ]
                        }
                      ],
                      "failed": [
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Compare: Variable",
                            "value1": "QingQue_Tong",
                            "compareType": "=",
                            "value2": 1
                          },
                          "passed": [
                            {
                              "name": "IF",
                              "conditions": {
                                "name": "Random Chance",
                                "chance": 0.5
                              },
                              "passed": [
                                {
                                  "name": "Remove Events/Bonuses",
                                  "to": {
                                    "name": "Target Name",
                                    "target": "{{Caster}}"
                                  },
                                  "modifier": "<a class=\"gModGreen\" id=\"1184170005\">QingQue_Passive_Tong</a>"
                                },
                                {
                                  "name": "Define Custom Variable",
                                  "variableName": "QingQue_Tong",
                                  "value": 0
                                }
                              ],
                              "failed": [
                                {
                                  "name": "Remove Events/Bonuses",
                                  "to": {
                                    "name": "Target Name",
                                    "target": "{{Caster}}"
                                  },
                                  "modifier": "<a class=\"gModGreen\" id=\"659202160\">QingQue_Passive_Tiao</a>"
                                },
                                {
                                  "name": "Define Custom Variable",
                                  "variableName": "QingQue_Tiao",
                                  "value": 0
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
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "QingQue_Wan",
                    "compareType": "=",
                    "value2": 2
                  },
                  "passed": [
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"1921510139\">QingQue_Passive_Wan</a>"
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "QingQue_Wan",
                      "value": {
                        "operator": "Variables[0] (QingQue_Wan) || Constants[0] (1) || SUB || RETURN",
                        "displayLines": "(QingQue_Wan - 1)",
                        "constants": [
                          1
                        ],
                        "variables": [
                          "QingQue_Wan"
                        ]
                      }
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "QingQue_Tong",
                    "compareType": "=",
                    "value2": 2
                  },
                  "passed": [
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"1184170005\">QingQue_Passive_Tong</a>"
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "QingQue_Tong",
                      "value": {
                        "operator": "Variables[0] (QingQue_Tong) || Constants[0] (1) || SUB || RETURN",
                        "displayLines": "(QingQue_Tong - 1)",
                        "constants": [
                          1
                        ],
                        "variables": [
                          "QingQue_Tong"
                        ]
                      }
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "QingQue_Tiao",
                    "compareType": "=",
                    "value2": 2
                  },
                  "passed": [
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"659202160\">QingQue_Passive_Tiao</a>"
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "QingQue_Tiao",
                      "value": {
                        "operator": "Variables[0] (QingQue_Tiao) || Constants[0] (1) || SUB || RETURN",
                        "displayLines": "(QingQue_Tiao - 1)",
                        "constants": [
                          1
                        ],
                        "variables": [
                          "QingQue_Tiao"
                        ]
                      }
                    }
                  ]
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "QingQue_CardCount",
                  "value": {
                    "operator": "Variables[0] (QingQue_CardCount) || Constants[0] (1) || SUB || RETURN",
                    "displayLines": "(QingQue_CardCount - 1)",
                    "constants": [
                      1
                    ],
                    "variables": [
                      "QingQue_CardCount"
                    ]
                  }
                }
              ],
              "failed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "QingQue_CardCount",
                    "compareType": "=",
                    "value2": 3
                  },
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "QingQue_Tong",
                        "compareType": "=",
                        "value2": 0
                      },
                      "passed": [
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Compare: Variable",
                            "value1": "QingQue_Wan",
                            "compareType": "=",
                            "value2": 0
                          },
                          "passed": [
                            {
                              "name": "Remove Events/Bonuses",
                              "to": {
                                "name": "Target Name",
                                "target": "{{Caster}}"
                              },
                              "modifier": "<a class=\"gModGreen\" id=\"659202160\">QingQue_Passive_Tiao</a>"
                            },
                            {
                              "name": "Define Custom Variable",
                              "variableName": "QingQue_Tiao",
                              "value": {
                                "operator": "Variables[0] (QingQue_Tiao) || Constants[0] (1) || SUB || RETURN",
                                "displayLines": "(QingQue_Tiao - 1)",
                                "constants": [
                                  1
                                ],
                                "variables": [
                                  "QingQue_Tiao"
                                ]
                              }
                            }
                          ]
                        },
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Compare: Variable",
                            "value1": "QingQue_Wan",
                            "compareType": "=",
                            "value2": 1
                          },
                          "passed": [
                            {
                              "name": "Remove Events/Bonuses",
                              "to": {
                                "name": "Target Name",
                                "target": "{{Caster}}"
                              },
                              "modifier": "<a class=\"gModGreen\" id=\"1921510139\">QingQue_Passive_Wan</a>"
                            },
                            {
                              "name": "Define Custom Variable",
                              "variableName": "QingQue_Wan",
                              "value": {
                                "operator": "Variables[0] (QingQue_Wan) || Constants[0] (1) || SUB || RETURN",
                                "displayLines": "(QingQue_Wan - 1)",
                                "constants": [
                                  1
                                ],
                                "variables": [
                                  "QingQue_Wan"
                                ]
                              }
                            }
                          ]
                        },
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Compare: Variable",
                            "value1": "QingQue_Wan",
                            "compareType": "=",
                            "value2": 2
                          },
                          "passed": [
                            {
                              "name": "Remove Events/Bonuses",
                              "to": {
                                "name": "Target Name",
                                "target": "{{Caster}}"
                              },
                              "modifier": "<a class=\"gModGreen\" id=\"659202160\">QingQue_Passive_Tiao</a>"
                            },
                            {
                              "name": "Define Custom Variable",
                              "variableName": "QingQue_Tiao",
                              "value": {
                                "operator": "Variables[0] (QingQue_Tiao) || Constants[0] (1) || SUB || RETURN",
                                "displayLines": "(QingQue_Tiao - 1)",
                                "constants": [
                                  1
                                ],
                                "variables": [
                                  "QingQue_Tiao"
                                ]
                              }
                            }
                          ]
                        },
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Compare: Variable",
                            "value1": "QingQue_Wan",
                            "compareType": "=",
                            "value2": 3
                          },
                          "passed": [
                            {
                              "name": "Remove Events/Bonuses",
                              "to": {
                                "name": "Target Name",
                                "target": "{{Caster}}"
                              },
                              "modifier": "<a class=\"gModGreen\" id=\"1921510139\">QingQue_Passive_Wan</a>"
                            },
                            {
                              "name": "Define Custom Variable",
                              "variableName": "QingQue_Wan",
                              "value": {
                                "operator": "Variables[0] (QingQue_Wan) || Constants[0] (1) || SUB || RETURN",
                                "displayLines": "(QingQue_Wan - 1)",
                                "constants": [
                                  1
                                ],
                                "variables": [
                                  "QingQue_Wan"
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
                            "name": "Compare: Variable",
                            "value1": "QingQue_Tiao",
                            "compareType": "=",
                            "value2": 0
                          },
                          "passed": [
                            {
                              "name": "IF",
                              "conditions": {
                                "name": "Compare: Variable",
                                "value1": "QingQue_Wan",
                                "compareType": "=",
                                "value2": 0
                              },
                              "passed": [
                                {
                                  "name": "Remove Events/Bonuses",
                                  "to": {
                                    "name": "Target Name",
                                    "target": "{{Caster}}"
                                  },
                                  "modifier": "<a class=\"gModGreen\" id=\"1184170005\">QingQue_Passive_Tong</a>"
                                },
                                {
                                  "name": "Define Custom Variable",
                                  "variableName": "QingQue_Tong",
                                  "value": {
                                    "operator": "Variables[0] (QingQue_Tong) || Constants[0] (1) || SUB || RETURN",
                                    "displayLines": "(QingQue_Tong - 1)",
                                    "constants": [
                                      1
                                    ],
                                    "variables": [
                                      "QingQue_Tong"
                                    ]
                                  }
                                }
                              ]
                            },
                            {
                              "name": "IF",
                              "conditions": {
                                "name": "Compare: Variable",
                                "value1": "QingQue_Wan",
                                "compareType": "=",
                                "value2": 1
                              },
                              "passed": [
                                {
                                  "name": "Remove Events/Bonuses",
                                  "to": {
                                    "name": "Target Name",
                                    "target": "{{Caster}}"
                                  },
                                  "modifier": "<a class=\"gModGreen\" id=\"1921510139\">QingQue_Passive_Wan</a>"
                                },
                                {
                                  "name": "Define Custom Variable",
                                  "variableName": "QingQue_Wan",
                                  "value": {
                                    "operator": "Variables[0] (QingQue_Wan) || Constants[0] (1) || SUB || RETURN",
                                    "displayLines": "(QingQue_Wan - 1)",
                                    "constants": [
                                      1
                                    ],
                                    "variables": [
                                      "QingQue_Wan"
                                    ]
                                  }
                                }
                              ]
                            },
                            {
                              "name": "IF",
                              "conditions": {
                                "name": "Compare: Variable",
                                "value1": "QingQue_Wan",
                                "compareType": "=",
                                "value2": 2
                              },
                              "passed": [
                                {
                                  "name": "Remove Events/Bonuses",
                                  "to": {
                                    "name": "Target Name",
                                    "target": "{{Caster}}"
                                  },
                                  "modifier": "<a class=\"gModGreen\" id=\"1184170005\">QingQue_Passive_Tong</a>"
                                },
                                {
                                  "name": "Define Custom Variable",
                                  "variableName": "QingQue_Tong",
                                  "value": {
                                    "operator": "Variables[0] (QingQue_Tong) || Constants[0] (1) || SUB || RETURN",
                                    "displayLines": "(QingQue_Tong - 1)",
                                    "constants": [
                                      1
                                    ],
                                    "variables": [
                                      "QingQue_Tong"
                                    ]
                                  }
                                }
                              ]
                            },
                            {
                              "name": "IF",
                              "conditions": {
                                "name": "Compare: Variable",
                                "value1": "QingQue_Wan",
                                "compareType": "=",
                                "value2": 3
                              },
                              "passed": [
                                {
                                  "name": "Remove Events/Bonuses",
                                  "to": {
                                    "name": "Target Name",
                                    "target": "{{Caster}}"
                                  },
                                  "modifier": "<a class=\"gModGreen\" id=\"1921510139\">QingQue_Passive_Wan</a>"
                                },
                                {
                                  "name": "Define Custom Variable",
                                  "variableName": "QingQue_Wan",
                                  "value": {
                                    "operator": "Variables[0] (QingQue_Wan) || Constants[0] (1) || SUB || RETURN",
                                    "displayLines": "(QingQue_Wan - 1)",
                                    "constants": [
                                      1
                                    ],
                                    "variables": [
                                      "QingQue_Wan"
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
                                "name": "Compare: Variable",
                                "value1": "QingQue_Wan",
                                "compareType": "=",
                                "value2": 0
                              },
                              "passed": [
                                {
                                  "name": "IF",
                                  "conditions": {
                                    "name": "Compare: Variable",
                                    "value1": "QingQue_Tiao",
                                    "compareType": "=",
                                    "value2": 0
                                  },
                                  "passed": [
                                    {
                                      "name": "Remove Events/Bonuses",
                                      "to": {
                                        "name": "Target Name",
                                        "target": "{{Caster}}"
                                      },
                                      "modifier": "<a class=\"gModGreen\" id=\"1184170005\">QingQue_Passive_Tong</a>"
                                    },
                                    {
                                      "name": "Define Custom Variable",
                                      "variableName": "QingQue_Tong",
                                      "value": {
                                        "operator": "Variables[0] (QingQue_Tong) || Constants[0] (1) || SUB || RETURN",
                                        "displayLines": "(QingQue_Tong - 1)",
                                        "constants": [
                                          1
                                        ],
                                        "variables": [
                                          "QingQue_Tong"
                                        ]
                                      }
                                    }
                                  ]
                                },
                                {
                                  "name": "IF",
                                  "conditions": {
                                    "name": "Compare: Variable",
                                    "value1": "QingQue_Tiao",
                                    "compareType": "=",
                                    "value2": 1
                                  },
                                  "passed": [
                                    {
                                      "name": "Remove Events/Bonuses",
                                      "to": {
                                        "name": "Target Name",
                                        "target": "{{Caster}}"
                                      },
                                      "modifier": "<a class=\"gModGreen\" id=\"659202160\">QingQue_Passive_Tiao</a>"
                                    },
                                    {
                                      "name": "Define Custom Variable",
                                      "variableName": "QingQue_Tiao",
                                      "value": {
                                        "operator": "Variables[0] (QingQue_Tiao) || Constants[0] (1) || SUB || RETURN",
                                        "displayLines": "(QingQue_Tiao - 1)",
                                        "constants": [
                                          1
                                        ],
                                        "variables": [
                                          "QingQue_Tiao"
                                        ]
                                      }
                                    }
                                  ]
                                },
                                {
                                  "name": "IF",
                                  "conditions": {
                                    "name": "Compare: Variable",
                                    "value1": "QingQue_Tiao",
                                    "compareType": "=",
                                    "value2": 2
                                  },
                                  "passed": [
                                    {
                                      "name": "Remove Events/Bonuses",
                                      "to": {
                                        "name": "Target Name",
                                        "target": "{{Caster}}"
                                      },
                                      "modifier": "<a class=\"gModGreen\" id=\"1184170005\">QingQue_Passive_Tong</a>"
                                    },
                                    {
                                      "name": "Define Custom Variable",
                                      "variableName": "QingQue_Tong",
                                      "value": {
                                        "operator": "Variables[0] (QingQue_Tong) || Constants[0] (1) || SUB || RETURN",
                                        "displayLines": "(QingQue_Tong - 1)",
                                        "constants": [
                                          1
                                        ],
                                        "variables": [
                                          "QingQue_Tong"
                                        ]
                                      }
                                    }
                                  ]
                                },
                                {
                                  "name": "IF",
                                  "conditions": {
                                    "name": "Compare: Variable",
                                    "value1": "QingQue_Tiao",
                                    "compareType": "=",
                                    "value2": 3
                                  },
                                  "passed": [
                                    {
                                      "name": "Remove Events/Bonuses",
                                      "to": {
                                        "name": "Target Name",
                                        "target": "{{Caster}}"
                                      },
                                      "modifier": "<a class=\"gModGreen\" id=\"659202160\">QingQue_Passive_Tiao</a>"
                                    },
                                    {
                                      "name": "Define Custom Variable",
                                      "variableName": "QingQue_Tiao",
                                      "value": {
                                        "operator": "Variables[0] (QingQue_Tiao) || Constants[0] (1) || SUB || RETURN",
                                        "displayLines": "(QingQue_Tiao - 1)",
                                        "constants": [
                                          1
                                        ],
                                        "variables": [
                                          "QingQue_Tiao"
                                        ]
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
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "QingQue_Wan",
                        "compareType": "=",
                        "value2": 1
                      },
                      "passed": [
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Compare: Variable",
                            "value1": "QingQue_Tiao",
                            "compareType": "=",
                            "value2": 1
                          },
                          "passed": [
                            {
                              "name": "IF",
                              "conditions": {
                                "name": "Compare: Variable",
                                "value1": "QingQue_Tong",
                                "compareType": "=",
                                "value2": 1
                              },
                              "passed": [
                                {
                                  "name": "IF",
                                  "conditions": {
                                    "name": "Random Chance",
                                    "chance": 0.34
                                  },
                                  "passed": [
                                    {
                                      "name": "Remove Events/Bonuses",
                                      "to": {
                                        "name": "Target Name",
                                        "target": "{{Caster}}"
                                      },
                                      "modifier": "<a class=\"gModGreen\" id=\"1921510139\">QingQue_Passive_Wan</a>"
                                    },
                                    {
                                      "name": "Define Custom Variable",
                                      "variableName": "QingQue_Wan",
                                      "value": {
                                        "operator": "Variables[0] (QingQue_Wan) || Constants[0] (1) || SUB || RETURN",
                                        "displayLines": "(QingQue_Wan - 1)",
                                        "constants": [
                                          1
                                        ],
                                        "variables": [
                                          "QingQue_Wan"
                                        ]
                                      }
                                    }
                                  ],
                                  "failed": [
                                    {
                                      "name": "IF",
                                      "conditions": {
                                        "name": "Random Chance",
                                        "chance": 0.5
                                      },
                                      "passed": [
                                        {
                                          "name": "Remove Events/Bonuses",
                                          "to": {
                                            "name": "Target Name",
                                            "target": "{{Caster}}"
                                          },
                                          "modifier": "<a class=\"gModGreen\" id=\"659202160\">QingQue_Passive_Tiao</a>"
                                        },
                                        {
                                          "name": "Define Custom Variable",
                                          "variableName": "QingQue_Tiao",
                                          "value": {
                                            "operator": "Variables[0] (QingQue_Tiao) || Constants[0] (1) || SUB || RETURN",
                                            "displayLines": "(QingQue_Tiao - 1)",
                                            "constants": [
                                              1
                                            ],
                                            "variables": [
                                              "QingQue_Tiao"
                                            ]
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
                                          "modifier": "<a class=\"gModGreen\" id=\"1184170005\">QingQue_Passive_Tong</a>"
                                        },
                                        {
                                          "name": "Define Custom Variable",
                                          "variableName": "QingQue_Tong",
                                          "value": {
                                            "operator": "Variables[0] (QingQue_Tong) || Constants[0] (1) || SUB || RETURN",
                                            "displayLines": "(QingQue_Tong - 1)",
                                            "constants": [
                                              1
                                            ],
                                            "variables": [
                                              "QingQue_Tong"
                                            ]
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
                      ]
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "QingQue_CardCount",
                      "value": {
                        "operator": "Variables[0] (QingQue_CardCount) || Constants[0] (1) || SUB || RETURN",
                        "displayLines": "(QingQue_CardCount - 1)",
                        "constants": [
                          1
                        ],
                        "variables": [
                          "QingQue_CardCount"
                        ]
                      }
                    }
                  ],
                  "failed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "QingQue_CardCount",
                        "compareType": "=",
                        "value2": 4
                      },
                      "passed": [
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Compare: Variable",
                            "value1": "QingQue_Tong",
                            "compareType": "=",
                            "value2": 3
                          },
                          "passed": [
                            {
                              "name": "Remove Events/Bonuses",
                              "to": {
                                "name": "Target Name",
                                "target": "{{Caster}}"
                              },
                              "modifier": "<a class=\"gModGreen\" id=\"1921510139\">QingQue_Passive_Wan</a>"
                            },
                            {
                              "name": "Define Custom Variable",
                              "variableName": "QingQue_Wan",
                              "value": 0
                            },
                            {
                              "name": "Remove Events/Bonuses",
                              "to": {
                                "name": "Target Name",
                                "target": "{{Caster}}"
                              },
                              "modifier": "<a class=\"gModGreen\" id=\"659202160\">QingQue_Passive_Tiao</a>"
                            },
                            {
                              "name": "Define Custom Variable",
                              "variableName": "QingQue_Tiao",
                              "value": 0
                            }
                          ],
                          "failed": [
                            {
                              "name": "IF",
                              "conditions": {
                                "name": "Compare: Variable",
                                "value1": "QingQue_Tiao",
                                "compareType": "=",
                                "value2": 3
                              },
                              "passed": [
                                {
                                  "name": "Remove Events/Bonuses",
                                  "to": {
                                    "name": "Target Name",
                                    "target": "{{Caster}}"
                                  },
                                  "modifier": "<a class=\"gModGreen\" id=\"1921510139\">QingQue_Passive_Wan</a>"
                                },
                                {
                                  "name": "Define Custom Variable",
                                  "variableName": "QingQue_Wan",
                                  "value": 0
                                },
                                {
                                  "name": "Remove Events/Bonuses",
                                  "to": {
                                    "name": "Target Name",
                                    "target": "{{Caster}}"
                                  },
                                  "modifier": "<a class=\"gModGreen\" id=\"1184170005\">QingQue_Passive_Tong</a>"
                                },
                                {
                                  "name": "Define Custom Variable",
                                  "variableName": "QingQue_Tong",
                                  "value": 0
                                }
                              ],
                              "failed": [
                                {
                                  "name": "IF",
                                  "conditions": {
                                    "name": "Compare: Variable",
                                    "value1": "QingQue_Wan",
                                    "compareType": "=",
                                    "value2": 3
                                  },
                                  "passed": [
                                    {
                                      "name": "Remove Events/Bonuses",
                                      "to": {
                                        "name": "Target Name",
                                        "target": "{{Caster}}"
                                      },
                                      "modifier": "<a class=\"gModGreen\" id=\"659202160\">QingQue_Passive_Tiao</a>"
                                    },
                                    {
                                      "name": "Define Custom Variable",
                                      "variableName": "QingQue_Tiao",
                                      "value": 0
                                    },
                                    {
                                      "name": "Remove Events/Bonuses",
                                      "to": {
                                        "name": "Target Name",
                                        "target": "{{Caster}}"
                                      },
                                      "modifier": "<a class=\"gModGreen\" id=\"1184170005\">QingQue_Passive_Tong</a>"
                                    },
                                    {
                                      "name": "Define Custom Variable",
                                      "variableName": "QingQue_Tong",
                                      "value": 0
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
                            "name": "Compare: Variable",
                            "value1": "QingQue_Tong",
                            "compareType": "=",
                            "value2": 2
                          },
                          "passed": [
                            {
                              "name": "IF",
                              "conditions": {
                                "name": "Compare: Variable",
                                "value1": "QingQue_Tiao",
                                "compareType": "=",
                                "value2": 1
                              },
                              "passed": [
                                {
                                  "name": "IF",
                                  "conditions": {
                                    "name": "Random Chance",
                                    "chance": 0.5
                                  },
                                  "passed": [
                                    {
                                      "name": "Remove Events/Bonuses",
                                      "to": {
                                        "name": "Target Name",
                                        "target": "{{Caster}}"
                                      },
                                      "modifier": "<a class=\"gModGreen\" id=\"1921510139\">QingQue_Passive_Wan</a>"
                                    },
                                    {
                                      "name": "Define Custom Variable",
                                      "variableName": "QingQue_Wan",
                                      "value": 0
                                    }
                                  ],
                                  "failed": [
                                    {
                                      "name": "Remove Events/Bonuses",
                                      "to": {
                                        "name": "Target Name",
                                        "target": "{{Caster}}"
                                      },
                                      "modifier": "<a class=\"gModGreen\" id=\"659202160\">QingQue_Passive_Tiao</a>"
                                    },
                                    {
                                      "name": "Define Custom Variable",
                                      "variableName": "QingQue_Tiao",
                                      "value": 0
                                    }
                                  ]
                                }
                              ]
                            },
                            {
                              "name": "IF",
                              "conditions": {
                                "name": "Compare: Variable",
                                "value1": "QingQue_Tiao",
                                "compareType": "=",
                                "value2": 2
                              },
                              "passed": [
                                {
                                  "name": "IF",
                                  "conditions": {
                                    "name": "Random Chance",
                                    "chance": 0.5
                                  },
                                  "passed": [
                                    {
                                      "name": "Remove Events/Bonuses",
                                      "to": {
                                        "name": "Target Name",
                                        "target": "{{Caster}}"
                                      },
                                      "modifier": "<a class=\"gModGreen\" id=\"1184170005\">QingQue_Passive_Tong</a>"
                                    },
                                    {
                                      "name": "Define Custom Variable",
                                      "variableName": "QingQue_Tong",
                                      "value": 1
                                    }
                                  ],
                                  "failed": [
                                    {
                                      "name": "Remove Events/Bonuses",
                                      "to": {
                                        "name": "Target Name",
                                        "target": "{{Caster}}"
                                      },
                                      "modifier": "<a class=\"gModGreen\" id=\"659202160\">QingQue_Passive_Tiao</a>"
                                    },
                                    {
                                      "name": "Define Custom Variable",
                                      "variableName": "QingQue_Tiao",
                                      "value": 1
                                    }
                                  ]
                                }
                              ]
                            },
                            {
                              "name": "IF",
                              "conditions": {
                                "name": "Compare: Variable",
                                "value1": "QingQue_Wan",
                                "compareType": "=",
                                "value2": 2
                              },
                              "passed": [
                                {
                                  "name": "IF",
                                  "conditions": {
                                    "name": "Random Chance",
                                    "chance": 0.5
                                  },
                                  "passed": [
                                    {
                                      "name": "Remove Events/Bonuses",
                                      "to": {
                                        "name": "Target Name",
                                        "target": "{{Caster}}"
                                      },
                                      "modifier": "<a class=\"gModGreen\" id=\"1921510139\">QingQue_Passive_Wan</a>"
                                    },
                                    {
                                      "name": "Define Custom Variable",
                                      "variableName": "QingQue_Wan",
                                      "value": 1
                                    }
                                  ],
                                  "failed": [
                                    {
                                      "name": "Remove Events/Bonuses",
                                      "to": {
                                        "name": "Target Name",
                                        "target": "{{Caster}}"
                                      },
                                      "modifier": "<a class=\"gModGreen\" id=\"1184170005\">QingQue_Passive_Tong</a>"
                                    },
                                    {
                                      "name": "Define Custom Variable",
                                      "variableName": "QingQue_Tong",
                                      "value": 1
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
                            "name": "Compare: Variable",
                            "value1": "QingQue_Tiao",
                            "compareType": "=",
                            "value2": 2
                          },
                          "passed": [
                            {
                              "name": "IF",
                              "conditions": {
                                "name": "Compare: Variable",
                                "value1": "QingQue_Tong",
                                "compareType": "=",
                                "value2": 1
                              },
                              "passed": [
                                {
                                  "name": "IF",
                                  "conditions": {
                                    "name": "Compare: Variable",
                                    "value1": "QingQue_Wan",
                                    "compareType": "=",
                                    "value2": 1
                                  },
                                  "passed": [
                                    {
                                      "name": "IF",
                                      "conditions": {
                                        "name": "Random Chance",
                                        "chance": 0.5
                                      },
                                      "passed": [
                                        {
                                          "name": "Remove Events/Bonuses",
                                          "to": {
                                            "name": "Target Name",
                                            "target": "{{Caster}}"
                                          },
                                          "modifier": "<a class=\"gModGreen\" id=\"1921510139\">QingQue_Passive_Wan</a>"
                                        },
                                        {
                                          "name": "Define Custom Variable",
                                          "variableName": "QingQue_Wan",
                                          "value": 0
                                        }
                                      ],
                                      "failed": [
                                        {
                                          "name": "Remove Events/Bonuses",
                                          "to": {
                                            "name": "Target Name",
                                            "target": "{{Caster}}"
                                          },
                                          "modifier": "<a class=\"gModGreen\" id=\"1184170005\">QingQue_Passive_Tong</a>"
                                        },
                                        {
                                          "name": "Define Custom Variable",
                                          "variableName": "QingQue_Tong",
                                          "value": 0
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
                                "name": "Compare: Variable",
                                "value1": "QingQue_Wan",
                                "compareType": "=",
                                "value2": 2
                              },
                              "passed": [
                                {
                                  "name": "IF",
                                  "conditions": {
                                    "name": "Random Chance",
                                    "chance": 0.5
                                  },
                                  "passed": [
                                    {
                                      "name": "Remove Events/Bonuses",
                                      "to": {
                                        "name": "Target Name",
                                        "target": "{{Caster}}"
                                      },
                                      "modifier": "<a class=\"gModGreen\" id=\"1921510139\">QingQue_Passive_Wan</a>"
                                    },
                                    {
                                      "name": "Define Custom Variable",
                                      "variableName": "QingQue_Wan",
                                      "value": 1
                                    }
                                  ],
                                  "failed": [
                                    {
                                      "name": "Remove Events/Bonuses",
                                      "to": {
                                        "name": "Target Name",
                                        "target": "{{Caster}}"
                                      },
                                      "modifier": "<a class=\"gModGreen\" id=\"659202160\">QingQue_Passive_Tiao</a>"
                                    },
                                    {
                                      "name": "Define Custom Variable",
                                      "variableName": "QingQue_Tiao",
                                      "value": 1
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
                            "name": "Compare: Variable",
                            "value1": "QingQue_Wan",
                            "compareType": "=",
                            "value2": 2
                          },
                          "passed": [
                            {
                              "name": "IF",
                              "conditions": {
                                "name": "Compare: Variable",
                                "value1": "QingQue_Tong",
                                "compareType": "=",
                                "value2": 1
                              },
                              "passed": [
                                {
                                  "name": "IF",
                                  "conditions": {
                                    "name": "Compare: Variable",
                                    "value1": "QingQue_Tiao",
                                    "compareType": "=",
                                    "value2": 1
                                  },
                                  "passed": [
                                    {
                                      "name": "IF",
                                      "conditions": {
                                        "name": "Random Chance",
                                        "chance": 0.5
                                      },
                                      "passed": [
                                        {
                                          "name": "Remove Events/Bonuses",
                                          "to": {
                                            "name": "Target Name",
                                            "target": "{{Caster}}"
                                          },
                                          "modifier": "<a class=\"gModGreen\" id=\"1184170005\">QingQue_Passive_Tong</a>"
                                        },
                                        {
                                          "name": "Define Custom Variable",
                                          "variableName": "QingQue_Tong",
                                          "value": 0
                                        }
                                      ],
                                      "failed": [
                                        {
                                          "name": "Remove Events/Bonuses",
                                          "to": {
                                            "name": "Target Name",
                                            "target": "{{Caster}}"
                                          },
                                          "modifier": "<a class=\"gModGreen\" id=\"659202160\">QingQue_Passive_Tiao</a>"
                                        },
                                        {
                                          "name": "Define Custom Variable",
                                          "variableName": "QingQue_Tiao",
                                          "value": 0
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
                          "name": "Define Custom Variable",
                          "variableName": "QingQue_CardCount",
                          "value": {
                            "operator": "Variables[0] (QingQue_CardCount) || Constants[0] (1) || SUB || RETURN",
                            "displayLines": "(QingQue_CardCount - 1)",
                            "constants": [
                              1
                            ],
                            "variables": [
                              "QingQue_CardCount"
                            ]
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
        "Refresh QingQue Bar-State",
        {
          "name": "Shot Fired",
          "execute": [
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Ability Target(ST)}}"
              },
              "AttackScaling": {
                "DamageType": "Quantum",
                "Damage": {
                  "operator": "Variables[0] (1) || RETURN",
                  "displayLines": "1",
                  "constants": [],
                  "variables": [
                    1
                  ]
                },
                "Toughness": {
                  "operator": "Variables[0] (ST Toughness Value) || RETURN",
                  "displayLines": "ST Toughness Value",
                  "constants": [],
                  "variables": [
                    "ST Toughness Value"
                  ]
                },
                "Tags": null,
                "EnergyGainPercent": "100%"
              }
            }
          ]
        },
        "Trigger: Attack End",
        "Trigger: Ability End"
      ],
      "references": [],
      "targetObjectData": {
        "primaryTarget": "{{Ability Target List}}"
      }
    },
    "Qingque_QingQue_Ability01_Part01": {
      "fileName": "Qingque_QingQue_Ability01_Part01",
      "childAbilityList": [
        "Qingque_Qingque_Ability01_Camera",
        "Qingque_QingQue_Ability01_Part01",
        "Qingque_QingQue_Ability01_Part02",
        "Qingque_Qingque_Eidolon4_ATK"
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
          "ability": "QingQue_Ability01_Part02",
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
    }
  }
}