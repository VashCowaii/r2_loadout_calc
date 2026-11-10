const configAbility = {
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
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageAll</span>&nbsp;",
              "value": {
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
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">SPD%</span>&nbsp;",
              "value": {
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
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">ATK%</span>&nbsp;",
              "value": {
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
}