const entityPageType = "char"
const compositeAbilityObject = {
  "fullCharacterName": "Huohuo_v0",
  "trimCharacterName": "Huohuov0",
  "abilityList": [
    "Huohuov0_Modifiers",
    "Huohuov0_Huohuo_Trace02",
    "Huohuov0_LocalPlayer_StandardAbility_AttackBreak",
    "Huohuov0_LocalPlayer_Huohuo_TechniqueUsage",
    "Huohuov0_LocalPlayer_Huohuo_NormalAtk01",
    "Huohuov0_Huohuo_TechniqueInLevel",
    "Huohuov0_Huohuo_Eidolon2_Insert",
    "Huohuov0_Huohuo_PassiveAbility01",
    "Huohuov0_Huohuo_Ability03_Part02",
    "Huohuov0_Huohuo_Ability03_Part01",
    "Huohuov0_Huohuo_Ability03_EnterReady",
    "Huohuov0_Huohuo_Ability02_Part02",
    "Huohuov0_Huohuo_Ability02_Part01",
    "Huohuov0_Huohuo_Ability01_Part02",
    "Huohuov0_Huohuo_Ability01_Part01"
  ],
  "abilityObject": {
    "Huohuov0_Modifiers": {
      "fileName": "Huohuov0_Modifiers",
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
          "for": "<a class=\"gModGreen\" id=\"mod__-1116329624\">ADV_Modifier_Maze_Huohuo_Fear</a>",
          "counter": 1,
          "stackType": "Refresh",
          "modifierFlags": [
            "Fear"
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-2094716401\">Huohuo_Eidolon2</a>",
          "stackType": "ReplaceByCaster",
          "execute": [
            {
              "eventTrigger": "Waiting in Limbo [Owner]",
              "priorityLevel": -70,
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
                        "value1": "CurrentHP",
                        "compareType": "<=",
                        "value2": 0
                      },
                      {
                        "name": "Compare: Variable",
                        "value1": "Huohuo_Rank02_ReviveCount",
                        "compareType": ">",
                        "value2": 0
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable with Copy",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "variable": "Huohuo_Rank02_ReviveCount",
                      "target2": null,
                      "variable2": "MDF_ReviveCount"
                    },
                    {
                      "name": "Define Custom Variable with Modifier Values",
                      "valueType": "LifeTime",
                      "variableName": "Passive_HealMark_LifeTime",
                      "modifierName": "<a class=\"gModGreen\" id=\"1522612454\">Huohuo_Passive_HealMark</a>[<span class=\"descriptionNumberColor\">Divine Provision</span>]",
                      "multiplier": 1
                    },
                    {
                      "name": "Inject Ability Use",
                      "condition": {
                        "name": "Insert Ability Condition",
                        "type": "AbilityOwnerInsertUnusedCount",
                        "typeValue": {
                          "displayLines": "&nbsp;<span class=\"descriptionFunctionColor\">MIN</span>(MDF_ReviveCount, Passive_HealMark_LifeTime)"
                        }
                      },
                      "abilityName": "Huohuo_Eidolon2_Insert",
                      "abilitySource": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "abilityTarget": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "priorityTag": "CharacterReviveOthers",
                      "ownerState": "Mask_AliveOrLimbo",
                      "targetState": "Mask_AliveOrLimbo",
                      "canHitNonTargets": true,
                      "valuePerStack": {
                        "AADF_1": {
                          "displayLines": "MDF_HealPercentage"
                        }
                      },
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
          "for": "<a class=\"gModGreen\" id=\"mod__1683962968\">Huohuo_Eidolon2_ReviveCount</a>[<span class=\"descriptionNumberColor\">Sealed in Tail, Wraith Subdued</span>]",
          "stackType": "ReplaceByCaster",
          "description": "If Huohuo possesses Divine Provision when an ally is struck by a killing blow, the ally will not be knocked down, and their HP will immediately be restored by an amount equal to <span class=\"descriptionNumberColor\">MDF_HealRatio</span> of their Max HP. This reduces the duration of Divine Provision by 1 turn. The remaining trigger count is <span class=\"descriptionNumberColor\">MDF_ReviveCount</span>.",
          "type": "Buff",
          "statusName": "Sealed in Tail, Wraith Subdued",
          "variableValueChange": [
            {
              "name": "Variable Value Changes",
              "variableName": "Huohuo_Rank02_ReviveCount",
              "scope": "ContextOwner",
              "valueRanges": [
                {
                  "name": "Variable Value Range Conditions",
                  "minValue": 0,
                  "maxValue": 3,
                  "onChange": [
                    {
                      "name": "Define Custom Variable",
                      "value": {
                        "displayLines": "Huohuo_Rank02_ReviveCount"
                      },
                      "variableName": "MDF_ReviveCount"
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "AND",
                        "conditionList": [
                          {
                            "name": "Has Modifier",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Caster}}"
                            },
                            "modifier": "<a class=\"gModGreen\" id=\"1522612454\">Huohuo_Passive_HealMark</a>[<span class=\"descriptionNumberColor\">Divine Provision</span>]"
                          },
                          {
                            "name": "Compare: Variable",
                            "value1": "Huohuo_Rank02_ReviveCount",
                            "compareType": ">",
                            "value2": 0
                          }
                        ]
                      },
                      "passed": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{All Team Members with Unselectables}}.[[removeMemosprite]]"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"-2094716401\">Huohuo_Eidolon2</a>",
                          "valuePerStack": {
                            "MDF_HealPercentage": {
                              "displayLines": "0.5"
                            },
                            "MDF_ReviveCount": {
                              "displayLines": "Huohuo_Rank02_ReviveCount"
                            }
                          }
                        }
                      ],
                      "failed": [
                        {
                          "name": "Remove Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{All Team Members with Unselectables}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"-2094716401\">Huohuo_Eidolon2</a>"
                        },
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Compare: Variable",
                            "value1": "Huohuo_Rank02_ReviveCount",
                            "compareType": "=",
                            "value2": 0
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
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-2048047648\">Huohuo_Eidolon6_DamageUp</a>[<span class=\"descriptionNumberColor\">DMG Boost</span>]",
          "stackType": "ReplaceByCaster",
          "description": "DMG dealt increases by <span class=\"descriptionNumberColor\">MDF_DamageAddedRatio</span>.",
          "type": "Buff",
          "effectName": "DMG Boost",
          "statusName": "DMG Boost",
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
                  "propertyName": "&nbsp;<span class=\"descriptionNumberColor\">DamageAll</span>&nbsp;",
                  "statValue": {
                    "displayLines": "MDF_DamageAddedRatio"
                  }
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__2047385879\">Huohuo_DealHeal</a>",
          "stackType": "ReplaceByCaster",
          "execute": [
            {
              "eventTrigger": "Heal Target Start [Owner]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Eidolon Activated",
                    "eidolon": 4
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable with HP%",
                      "variableName": "CurrentHPRatio",
                      "readTarget": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      }
                    },
                    {
                      "name": "Adjust Target Healing Stats",
                      "on": "Healer",
                      "statName": "&nbsp;<span class=\"descriptionNumberColor\">HealingOutgoingSUM</span>&nbsp;",
                      "value": {
                        "displayLines": "(0.8 * (1 - CurrentHPRatio))"
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
          "for": "<a class=\"gModGreen\" id=\"mod__-1345100241\">Huohuo_Eidolon1_SpeedUp</a>[<span class=\"descriptionNumberColor\">SPD Boost</span>]",
          "stackType": "ReplaceByCaster",
          "modifierFlags": [
            "STAT_SpeedUp"
          ],
          "description": "Increases SPD by <span class=\"descriptionNumberColor\">MDF_PropertyValue</span>.",
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
                  "propertyName": "&nbsp;<span class=\"descriptionNumberColor\">SPD%</span>&nbsp;",
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
          "for": "<a class=\"gModGreen\" id=\"mod__-678196241\">Huohuo_Ability03_AttackUP</a>[<span class=\"descriptionNumberColor\">ATK Boost</span>]",
          "stackType": "ReplaceByCaster",
          "description": "Increases ATK by <span class=\"descriptionNumberColor\">MDF_AttackUP</span>.",
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
                    "displayLines": "MDF_AttackUP"
                  }
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__2038615352\">Huohuo_Passive_ModifySP</a>"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1648992961\">Huohuo_Passive_SPMark</a>"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1278530083\">Huohuo_Passive_HealHP</a>",
          "stackType": "ReplaceByCaster",
          "modifierFlags": [
            "RemoveWhenCasterDead"
          ],
          "execute": [
            {
              "eventTrigger": "Turn [Owner]: Pre-action Phase",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Trace Activated",
                    "conditionList": "Stress Reaction to Horror"
                  },
                  "passed": [
                    {
                      "name": "Update Energy",
                      "on": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "value": {
                        "displayLines": "1"
                      },
                      "isFixed": "* ERR"
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "Huohuo_Passive_DispelCount",
                    "compareType": ">",
                    "value2": 0
                  },
                  "passed": [
                    {
                      "name": "Dispel Debuffs",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "dispelCount": {
                        "displayLines": "_DispelNum"
                      },
                      "dispelOrder": "LastAdded",
                      "counterKey": "_DispelNumSuccess"
                    },
                    {
                      "name": "Define Custom Variable",
                      "value": {
                        "displayLines": "(Huohuo_Passive_DispelCount - _DispelNumSuccess)"
                      },
                      "variableName": "Huohuo_Passive_DispelCount"
                    }
                  ]
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"2047385879\">Huohuo_DealHeal</a>"
                },
                {
                  "name": "Heal",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "healPercent": {
                    "displayLines": "HPRatio"
                  },
                  "healFlat": {
                    "displayLines": "HPValue"
                  },
                  "formula": "Heal from Healer's MaxHP"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"2047385879\">Huohuo_DealHeal</a>"
                },
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Player Team All}}.[[living]].[[sortByHPCurrent]]"
                  },
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "value1": "CurrentHP%",
                    "compareType": "<=",
                    "value2": {
                      "displayLines": "0.5"
                    }
                  },
                  "ifTargetFound": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Trace Activated",
                        "conditionList": "Stress Reaction to Horror"
                      },
                      "passed": [
                        {
                          "name": "Update Energy",
                          "on": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "value": {
                            "displayLines": "1"
                          },
                          "isFixed": "* ERR"
                        }
                      ]
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "Huohuo_Passive_DispelCount",
                        "compareType": ">",
                        "value2": 0
                      },
                      "passed": [
                        {
                          "name": "Dispel Debuffs",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "dispelCount": {
                            "displayLines": "_DispelNum"
                          },
                          "dispelOrder": "LastAdded",
                          "counterKey": "_DispelNumSuccess"
                        },
                        {
                          "name": "Define Custom Variable",
                          "value": {
                            "displayLines": "(Huohuo_Passive_DispelCount - _DispelNumSuccess)"
                          },
                          "variableName": "Huohuo_Passive_DispelCount"
                        }
                      ]
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"2047385879\">Huohuo_DealHeal</a>"
                    },
                    {
                      "name": "Heal",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "healPercent": {
                        "displayLines": "HPRatio"
                      },
                      "healFlat": {
                        "displayLines": "HPValue"
                      },
                      "formula": "Heal from Healer's MaxHP"
                    },
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"2047385879\">Huohuo_DealHeal</a>"
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Ability Use [Owner]: Start",
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
                        "name": "Trace Activated",
                        "conditionList": "Stress Reaction to Horror"
                      },
                      "passed": [
                        {
                          "name": "Update Energy",
                          "on": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "value": {
                            "displayLines": "1"
                          },
                          "isFixed": "* ERR"
                        }
                      ]
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "Huohuo_Passive_DispelCount",
                        "compareType": ">",
                        "value2": 0
                      },
                      "passed": [
                        {
                          "name": "Dispel Debuffs",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "dispelCount": {
                            "displayLines": "_DispelNum"
                          },
                          "dispelOrder": "LastAdded",
                          "counterKey": "_DispelNumSuccess"
                        },
                        {
                          "name": "Define Custom Variable",
                          "value": {
                            "displayLines": "(Huohuo_Passive_DispelCount - _DispelNumSuccess)"
                          },
                          "variableName": "Huohuo_Passive_DispelCount"
                        }
                      ]
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"2047385879\">Huohuo_DealHeal</a>"
                    },
                    {
                      "name": "Heal",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "healPercent": {
                        "displayLines": "HPRatio"
                      },
                      "healFlat": {
                        "displayLines": "HPValue"
                      },
                      "formula": "Heal from Healer's MaxHP"
                    },
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"2047385879\">Huohuo_DealHeal</a>"
                    },
                    {
                      "name": "Find New Target",
                      "from": {
                        "name": "Target Name",
                        "target": "{{Player Team All}}.[[living]].[[sortByHPCurrent]]"
                      },
                      "conditions": {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "value1": "CurrentHP%",
                        "compareType": "<=",
                        "value2": {
                          "displayLines": "0.5"
                        }
                      },
                      "ifTargetFound": [
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Trace Activated",
                            "conditionList": "Stress Reaction to Horror"
                          },
                          "passed": [
                            {
                              "name": "Update Energy",
                              "on": {
                                "name": "Target Name",
                                "target": "{{Caster}}"
                              },
                              "value": {
                                "displayLines": "1"
                              },
                              "isFixed": "* ERR"
                            }
                          ]
                        },
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Compare: Variable",
                            "value1": "Huohuo_Passive_DispelCount",
                            "compareType": ">",
                            "value2": 0
                          },
                          "passed": [
                            {
                              "name": "Dispel Debuffs",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Parameter Target}}"
                              },
                              "dispelCount": {
                                "displayLines": "_DispelNum"
                              },
                              "dispelOrder": "LastAdded",
                              "counterKey": "_DispelNumSuccess"
                            },
                            {
                              "name": "Define Custom Variable",
                              "value": {
                                "displayLines": "(Huohuo_Passive_DispelCount - _DispelNumSuccess)"
                              },
                              "variableName": "Huohuo_Passive_DispelCount"
                            }
                          ]
                        },
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"2047385879\">Huohuo_DealHeal</a>"
                        },
                        {
                          "name": "Heal",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "healPercent": {
                            "displayLines": "HPRatio"
                          },
                          "healFlat": {
                            "displayLines": "HPValue"
                          },
                          "formula": "Heal from Healer's MaxHP"
                        },
                        {
                          "name": "Remove Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"2047385879\">Huohuo_DealHeal</a>"
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
          "for": "<a class=\"gModGreen\" id=\"mod__1522612454\">Huohuo_Passive_HealMark</a>[<span class=\"descriptionNumberColor\">Divine Provision</span>]",
          "stackType": "ReplaceByCaster",
          "lifeCyclePhaseAllowed": "ModifierPhase1End",
          "description": "When an ally's turn starts or when an ally uses their Ultimate, restores HP for that ally by an amount equal to <span class=\"descriptionNumberColor\">MDF_HPRatio</span> of Huohuo's Max HP plus <span class=\"descriptionNumberColor\">MDF_HPValue</span>. At the same time, every ally currently at <span class=\"descriptionNumberColor\">MDF_LowHP</span> HP percentage or lower receives healing once. When Divine Provision is triggered to provide healing for allies, dispel 1 debuff from the said ally. This effect's remaining trigger count is <span class=\"descriptionNumberColor\">MDF_DispelCount</span>.",
          "type": "Buff",
          "effectName": "Healing Over Time",
          "statusName": "Divine Provision",
          "subModList": [
            {
              "name": "Add Sub-Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{All Team Members with Unselectables}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1278530083\">Huohuo_Passive_HealHP</a>",
              "haloStatus": true,
              "valuePerStack": {
                "HPRatio": {
                  "displayLines": "MDF_HPRatio"
                },
                "HPValue": {
                  "displayLines": "MDF_HPValue"
                },
                "_DispelNum": {
                  "displayLines": "1"
                }
              }
            },
            {
              "name": "Add Sub-Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{All Team Members with Unselectables}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1345100241\">Huohuo_Eidolon1_SpeedUp</a>[<span class=\"descriptionNumberColor\">SPD Boost</span>]",
              "haloStatus": true,
              "conditions": {
                "name": "Eidolon Activated",
                "eidolon": 1
              },
              "valuePerStack": {
                "MDF_PropertyValue": {
                  "displayLines": "0.12"
                }
              }
            }
          ],
          "execute": [
            {
              "eventTrigger": "When Modifier Destroyed/Removed",
              "execute": [
                {
                  "name": "Define Custom Variable",
                  "value": 0,
                  "variableName": "Huohuo_Passive_HotCount"
                },
                {
                  "name": "Update Displayed Energy Bar",
                  "value": 0,
                  "priorState": "Normal"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{All Team Members with Unselectables}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-2094716401\">Huohuo_Eidolon2</a>"
                }
              ]
            },
            {
              "eventTrigger": "Action Phase Start [Owner][?]",
              "execute": [
                {
                  "name": "Define Custom Variable with Modifier Values",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "valueType": "LifeTime",
                  "variableName": "Huohuo_Passive_HotCount",
                  "modifierName": "<a class=\"gModGreen\" id=\"1522612454\">Huohuo_Passive_HealMark</a>[<span class=\"descriptionNumberColor\">Divine Provision</span>]",
                  "multiplier": 1
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
                  "valueType": "LifeTime",
                  "variableName": "Huohuo_Passive_HotCount",
                  "modifierName": "<a class=\"gModGreen\" id=\"1522612454\">Huohuo_Passive_HealMark</a>[<span class=\"descriptionNumberColor\">Divine Provision</span>]",
                  "multiplier": 1
                },
                {
                  "name": "Update Displayed Energy Bar",
                  "value": {
                    "displayLines": "Huohuo_Passive_HotCount"
                  },
                  "priorState": "Active"
                },
                {
                  "name": "Define Custom Variable",
                  "value": {
                    "displayLines": "6"
                  },
                  "variableName": "Huohuo_Passive_DispelCount"
                },
                {
                  "name": "Define Custom Variable",
                  "value": {
                    "displayLines": "Huohuo_Passive_DispelCount"
                  },
                  "variableName": "MDF_DispelCount"
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "Huohuo_Rank02_ReviveCount",
                    "compareType": ">",
                    "value2": 0
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{All Team Members with Unselectables}}.[[removeMemosprite]]"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-2094716401\">Huohuo_Eidolon2</a>",
                      "valuePerStack": {
                        "MDF_HealPercentage": {
                          "displayLines": "0.5"
                        },
                        "MDF_ReviveCount": {
                          "displayLines": "Huohuo_Rank02_ReviveCount"
                        }
                      }
                    }
                  ]
                }
              ]
            }
          ],
          "variableValueChange": [
            {
              "name": "Variable Value Changes",
              "variableName": "Huohuo_Passive_DispelCount",
              "scope": "ContextOwner",
              "valueRanges": [
                {
                  "name": "Variable Value Range Conditions",
                  "minValue": 0,
                  "maxValue": 7,
                  "onChange": [
                    {
                      "name": "Define Custom Variable",
                      "value": {
                        "displayLines": "Huohuo_Passive_DispelCount"
                      },
                      "variableName": "MDF_DispelCount"
                    }
                  ]
                }
              ]
            },
            {
              "name": "Variable Value Changes",
              "variableName": "Huohuo_Passive_HotCount",
              "scope": "ContextOwner",
              "valueRanges": [
                {
                  "name": "Variable Value Range Conditions",
                  "minValue": 0,
                  "maxValue": 4,
                  "onChange": [
                    {
                      "name": "Update Displayed Energy Bar",
                      "value": {
                        "displayLines": "Huohuo_Passive_HotCount"
                      },
                      "priorState": "Active"
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
    "Huohuov0_Huohuo_Trace02": {
      "fileName": "Huohuov0_Huohuo_Trace02",
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
          "modifier": "<a class=\"gModGreen\" id=\"1538917301\">M_Huohuo_Trace02</a>",
          "valuePerStack": {
            "MDF_Resistance": {
              "displayLines": "0.35"
            }
          }
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1538917301\">M_Huohuo_Trace02</a>",
          "stackData": [
            "MDF_Resistance"
          ],
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Stack Target Resistance",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "statName": "STAT_CTRL",
                  "value": {
                    "displayLines": "MDF_Resistance"
                  }
                }
              ]
            }
          ]
        }
      ],
      "targetObjectData": {
        "primaryTarget": "{{Caster}}"
      }
    },
    "Huohuov0_LocalPlayer_StandardAbility_AttackBreak": {
      "fileName": "Huohuov0_LocalPlayer_StandardAbility_AttackBreak",
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
    "Huohuov0_LocalPlayer_Huohuo_TechniqueUsage": {
      "fileName": "Huohuov0_LocalPlayer_Huohuo_TechniqueUsage",
      "skillTrigger": "MazeSkill",
      "abilityType": "Basic ATK",
      "toughnessList": null,
      "parse": [
        "Deleted bullshit",
        {
          "name": "Overworld Attack Instance",
          "onAttack": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": null,
              "ID": "121701(SkillMaze)",
              "duration": {
                "displayLines": "10"
              }
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "target": {
              "name": "Target Name",
              "target": "{{Adventure Ability Targets}}"
            },
            "value1": "Feared_Target_Count",
            "compareType": ">=",
            "value2": 6
          },
          "passed": [
            {
              "name": "Achievement",
              "relatedAchievements": [
                {
                  "title": "Come Here! Now Go Away!",
                  "desc": "Use Huohuo's Technique \"Fiend: Impeachment of Evil\" and let #1[i] or more targets flee in one instance",
                  "rarity": "Low",
                  "params": [
                    6
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
        "primaryTarget": "{{Caster}}"
      },
      "realTargetData": {
        "primaryTarget": "Select Hostile Target"
      }
    },
    "Huohuov0_LocalPlayer_Huohuo_NormalAtk01": {
      "fileName": "Huohuov0_LocalPlayer_Huohuo_NormalAtk01",
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
      "references": [],
      "targetObjectData": {
        "primaryTarget": "Skill Point User(Or NONE)"
      },
      "realTargetData": {
        "primaryTarget": "Select Hostile Target"
      }
    },
    "Huohuov0_Huohuo_TechniqueInLevel": {
      "fileName": "Huohuov0_Huohuo_TechniqueInLevel",
      "childAbilityList": [
        "Huohuov0_Huohuo_TechniqueInLevel"
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
          "modifier": "<a class=\"gModGreen\" id=\"1900641722\">StageAbility_Maze_Huohuo_Modifier</a>"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1017323248\">Huohuo_Maze_FatigueRatio</a>[<span class=\"descriptionNumberColor\">Horror-Struck</span>]",
          "stackType": "ReplaceByCaster",
          "modifierFlags": [
            "STAT_AttackDown"
          ],
          "description": "Reduces ATK by <span class=\"descriptionNumberColor\">MDF_PropertyValue</span>.",
          "type": "Debuff",
          "effectName": "Horror-Struck",
          "statusName": "Horror-Struck",
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
                    "displayLines": "(0 - MDF_PropertyValue)"
                  }
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1900641722\">StageAbility_Maze_Huohuo_Modifier</a>",
          "execute": [
            {
              "eventTrigger": "Enter Battle",
              "priorityLevel": -80,
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      "Technique Modifies Current Wave"
                    ]
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Hostile Entities(AOE)}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"1017323248\">Huohuo_Maze_FatigueRatio</a>[<span class=\"descriptionNumberColor\">Horror-Struck</span>]",
                      "duration": {
                        "displayLines": "2"
                      },
                      "baseChance": {
                        "displayLines": "1"
                      },
                      "valuePerStack": {
                        "MDF_PropertyValue": {
                          "displayLines": "0.25"
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
    "Huohuov0_Huohuo_Eidolon2_Insert": {
      "fileName": "Huohuov0_Huohuo_Eidolon2_Insert",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Player Team All(with Unselectable)V2}}.[[removeBattleEvents]]"
          },
          "searchRandom": true,
          "includeDyingTargets": true,
          "maxTargets": 1,
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"-1608829904\">Huohuo_Passive</a>"
          },
          "ifTargetFound": [
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"1522612454\">Huohuo_Passive_HealMark</a>[<span class=\"descriptionNumberColor\">Divine Provision</span>]"
                  },
                  {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "value1": "Huohuo_Rank02_ReviveCount",
                    "compareType": ">",
                    "value2": 0
                  }
                ]
              },
              "passed": [
                {
                  "name": "Define Custom Variable with Added Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "variableName": "Huohuo_Passive_HotCount",
                  "value": -1,
                  "max": 2
                },
                {
                  "name": "Define Modifier Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifierName": "<a class=\"gModGreen\" id=\"1522612454\">Huohuo_Passive_HealMark</a>[<span class=\"descriptionNumberColor\">Divine Provision</span>]",
                  "function": "Add",
                  "valueType": "Duration"
                },
                {
                  "name": "Define Custom Variable with Added Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "variableName": "Huohuo_Rank02_ReviveCount",
                  "value": -1,
                  "max": 2
                },
                {
                  "name": "Dispel Debuffs",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Ability Target(ST)}}"
                  },
                  "silent": true
                },
                {
                  "name": "Heal",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Ability Target(ST)}}"
                  },
                  "healer": {
                    "name": "Target Name",
                    "target": "{{Ability Target(ST)}}"
                  },
                  "healPercent": {
                    "displayLines": "AADF_1"
                  },
                  "formula": "Heal from Target MaxHP"
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"1522612454\">Huohuo_Passive_HealMark</a>[<span class=\"descriptionNumberColor\">Divine Provision</span>]"
                      },
                      {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "value1": "Huohuo_Rank02_ReviveCount",
                        "compareType": ">",
                        "value2": 0
                      }
                    ]
                  },
                  "failed": [
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Join Targets",
                        "TargetList": [
                          {
                            "name": "Target Name",
                            "target": "{{All Team Members}}"
                          },
                          {
                            "name": "Target Name",
                            "target": "{{All Unselectable Targets}}"
                          }
                        ]
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-2094716401\">Huohuo_Eidolon2</a>"
                    }
                  ]
                }
              ],
              "failed": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Join Targets",
                    "TargetList": [
                      {
                        "name": "Target Name",
                        "target": "{{All Team Members}}"
                      },
                      {
                        "name": "Target Name",
                        "target": "{{All Unselectable Targets}}"
                      }
                    ]
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-2094716401\">Huohuo_Eidolon2</a>"
                }
              ]
            }
          ]
        }
      ],
      "references": [],
      "targetObjectData": {
        "primaryTarget": "Inherent Target"
      }
    },
    "Huohuov0_Huohuo_PassiveAbility01": {
      "fileName": "Huohuov0_Huohuo_PassiveAbility01",
      "childAbilityList": [
        "Huohuov0_Huohuo_PassiveAbility01",
        "Huohuov0_Huohuo_Eidolon2_Insert"
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
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1608829904\">Huohuo_Passive</a>"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Eidolon Activated",
            "eidolon": 1
          },
          "passed": [
            {
              "name": "Update Displayed Energy Bar",
              "value": 0,
              "maximum": {
                "displayLines": "(2 + 1)"
              },
              "assignState": "True",
              "priorState": "Normal",
              "bar#": 3
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"679515294\">Huohuo_Eidolon1PreShow</a>"
            }
          ],
          "failed": [
            {
              "name": "Update Displayed Energy Bar",
              "value": 0,
              "maximum": {
                "displayLines": "2"
              },
              "assignState": "True",
              "priorState": "Normal",
              "bar#": 3
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
                "displayLines": "2"
              },
              "variableName": "Huohuo_Rank02_ReviveCount"
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1683962968\">Huohuo_Eidolon2_ReviveCount</a>[<span class=\"descriptionNumberColor\">Sealed in Tail, Wraith Subdued</span>]",
              "valuePerStack": {
                "MDF_HealRatio": {
                  "displayLines": "0.5"
                },
                "MDF_ReviveCount": {
                  "displayLines": "Huohuo_Rank02_ReviveCount"
                }
              }
            }
          ]
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__679515294\">Huohuo_Eidolon1PreShow</a>",
          "stackType": "ReplaceByCaster",
          "previewValue": {
            "name": "Modifier: UI Preview",
            "show": "Hide",
            "target": {
              "name": "Target Name",
              "target": "{{Player Team All}}"
            },
            "skillType": [
              "Skill"
            ],
            "conditions": {
              "name": "Has Modifier",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1345100241\">Huohuo_Eidolon1_SpeedUp</a>[<span class=\"descriptionNumberColor\">SPD Boost</span>]",
              "invertCondition": true
            },
            "delayAdvancePreview": {
              "name": "Delay/Advance Preview",
              "previewValue": "0.12(SPD Change)"
            }
          }
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1045223345\">Huohuo_PointB1_SelfSPRatio</a>[<span class=\"descriptionNumberColor\">Energy Regeneration Rate Boost</span>]",
          "description": "Increases Energy Regeneration Rate by <span class=\"descriptionNumberColor\">MDF_SPRatio</span>.",
          "type": "Buff",
          "effectName": "Energy Regeneration Rate Boost",
          "statusName": "Energy Regeneration Rate Boost",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier"
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1608829904\">Huohuo_Passive</a>",
          "execute": [
            {
              "eventTrigger": "Heal Target Start [Owner]",
              "execute": [
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
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-2048047648\">Huohuo_Eidolon6_DamageUp</a>[<span class=\"descriptionNumberColor\">DMG Boost</span>]",
                      "duration": {
                        "displayLines": "2"
                      },
                      "valuePerStack": {
                        "MDF_DamageAddedRatio": {
                          "displayLines": "0.5"
                        }
                      }
                    }
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
                    "name": "Skill Type",
                    "skillType": "Skill"
                  },
                  "passed": [
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
                          "modifier": "<a class=\"gModGreen\" id=\"1522612454\">Huohuo_Passive_HealMark</a>[<span class=\"descriptionNumberColor\">Divine Provision</span>]",
                          "duration": {
                            "displayLines": "(2 + 1)"
                          },
                          "valuePerStack": {
                            "MDF_HPRatio": {
                              "displayLines": "0.044999998"
                            },
                            "MDF_HPValue": {
                              "displayLines": "120"
                            },
                            "MDF_LowHP": {
                              "displayLines": "0.5"
                            },
                            "MDF_DispelNum": {
                              "displayLines": "1"
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
                          "modifier": "<a class=\"gModGreen\" id=\"1522612454\">Huohuo_Passive_HealMark</a>[<span class=\"descriptionNumberColor\">Divine Provision</span>]",
                          "duration": {
                            "displayLines": "2"
                          },
                          "valuePerStack": {
                            "MDF_HPRatio": {
                              "displayLines": "0.044999998"
                            },
                            "MDF_HPValue": {
                              "displayLines": "120"
                            },
                            "MDF_LowHP": {
                              "displayLines": "0.5"
                            },
                            "MDF_DispelNum": {
                              "displayLines": "1"
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
              "eventTrigger": "Enter Battle",
              "priorityLevel": -80,
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
                        "name": "Trace Activated",
                        "conditionList": "Fearful to Act"
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
                      "modifier": "<a class=\"gModGreen\" id=\"1522612454\">Huohuo_Passive_HealMark</a>[<span class=\"descriptionNumberColor\">Divine Provision</span>]",
                      "duration": {
                        "displayLines": "1"
                      },
                      "valuePerStack": {
                        "MDF_HPRatio": {
                          "displayLines": "0.044999998"
                        },
                        "MDF_HPValue": {
                          "displayLines": "120"
                        },
                        "MDF_LowHP": {
                          "displayLines": "0.5"
                        },
                        "MDF_DispelNum": {
                          "displayLines": "1"
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
        "primaryTarget": "{{Caster}}"
      }
    },
    "Huohuov0_Huohuo_Ability03_Part02": {
      "fileName": "Huohuov0_Huohuo_Ability03_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Update Energy",
          "on": {
            "name": "Target Name",
            "target": "{{All Team Members(Exclude Memosprites and Self)}}"
          },
          "valuePercent": {
            "displayLines": "0.2"
          },
          "isFixed": "(Fixed)",
          "tag": "ActiveSkillAdd"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{All Team Members(Exclude Self)}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-678196241\">Huohuo_Ability03_AttackUP</a>[<span class=\"descriptionNumberColor\">ATK Boost</span>]",
          "duration": {
            "displayLines": "2"
          },
          "valuePerStack": {
            "MDF_AttackUP": {
              "displayLines": "0.4"
            }
          }
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
        "Trigger: Ability End"
      ],
      "references": [],
      "targetObjectData": {
        "primaryTarget": "{{Ability Target List}}"
      }
    },
    "Huohuov0_Huohuo_Ability03_Part01": {
      "fileName": "Huohuov0_Huohuo_Ability03_Part01",
      "childAbilityList": [
        "Huohuov0_Huohuo_Ability03_Camera",
        "Huohuov0_Huohuo_Ability03_EnterReady",
        "Huohuov0_Huohuo_Ability03_Part01",
        "Huohuov0_Huohuo_Ability03_Part02"
      ],
      "skillTrigger": "Skill03",
      "abilityType": "Ultimate",
      "energy": 5,
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
          "ability": "Huohuo_Ability03_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "references": [],
      "targetObjectData": {
        "primaryTarget": "{{Ability Target List}}"
      },
      "realTargetData": {
        "primaryTarget": "{{All Team Members}}"
      }
    },
    "Huohuov0_Huohuo_Ability03_EnterReady": {
      "fileName": "Huohuov0_Huohuo_Ability03_EnterReady",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "references": [],
      "targetObjectData": {
        "primaryTarget": "Inherent Target"
      }
    },
    "Huohuov0_Huohuo_Ability02_Part02": {
      "fileName": "Huohuov0_Huohuo_Ability02_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Dispel Debuffs",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "dispelCount": {
            "displayLines": "1"
          },
          "dispelOrder": "LastAdded"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"2047385879\">Huohuo_DealHeal</a>"
        },
        {
          "name": "Heal",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "healPercent": {
            "displayLines": "0.21"
          },
          "healFlat": {
            "displayLines": "560"
          },
          "formula": "Heal from Healer's MaxHP"
        },
        {
          "name": "Heal",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Targets Adjacent(Blast)}}"
          },
          "healPercent": {
            "displayLines": "0.168"
          },
          "healFlat": {
            "displayLines": "448"
          },
          "formula": "Heal from Healer's MaxHP"
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Ability Target List}}"
          },
          "searchRandom": true,
          "maxTargets": 1,
          "conditions": {
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
          }
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"2047385879\">Huohuo_DealHeal</a>"
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
        "Trigger: Ability End"
      ],
      "references": [],
      "targetObjectData": {
        "primaryTarget": "{{Ability Target List}}"
      }
    },
    "Huohuov0_Huohuo_Ability02_Part01": {
      "fileName": "Huohuov0_Huohuo_Ability02_Part01",
      "childAbilityList": [
        "Huohuov0_Huohuo_Ability02_Camera",
        "Huohuov0_Huohuo_Ability02_Part01",
        "Huohuov0_Huohuo_Ability02_Part02"
      ],
      "skillTrigger": "Skill02",
      "abilityType": "Skill",
      "energy": 30,
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
          "ability": "Huohuo_Ability02_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "references": [],
      "targetObjectData": {
        "primaryTarget": "{{Ability Target List}}"
      },
      "realTargetData": {
        "primaryTarget": "Select Ally Target",
        "subTarget": "Blast Targets"
      }
    },
    "Huohuov0_Huohuo_Ability01_Part02": {
      "fileName": "Huohuov0_Huohuo_Ability01_Part02",
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
            "DamageType": "Wind",
            "Damage": {
              "displayLines": "0.5"
            },
            "dmgFormula": "Max HP Scaling",
            "HitSplit": 0.2,
            "Toughness": {
              "displayLines": "ST Toughness Value"
            },
            "Tags": null,
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
            "DamageType": "Wind",
            "Damage": {
              "displayLines": "0.5"
            },
            "dmgFormula": "Max HP Scaling",
            "HitSplit": 0.2,
            "Toughness": {
              "displayLines": "ST Toughness Value"
            },
            "Tags": null,
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
            "DamageType": "Wind",
            "Damage": {
              "displayLines": "0.5"
            },
            "dmgFormula": "Max HP Scaling",
            "HitSplit": 0.2,
            "Toughness": {
              "displayLines": "ST Toughness Value"
            },
            "Tags": null,
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
            "DamageType": "Wind",
            "Damage": {
              "displayLines": "0.5"
            },
            "dmgFormula": "Max HP Scaling",
            "HitSplit": 0.4,
            "Toughness": {
              "displayLines": "ST Toughness Value"
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
    "Huohuov0_Huohuo_Ability01_Part01": {
      "fileName": "Huohuov0_Huohuo_Ability01_Part01",
      "childAbilityList": [
        "Huohuov0_Huohuo_Ability01_Camera",
        "Huohuov0_Huohuo_Ability01_Part01",
        "Huohuov0_Huohuo_Ability01_Part02"
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
          "ability": "Huohuo_Ability01_Part02",
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