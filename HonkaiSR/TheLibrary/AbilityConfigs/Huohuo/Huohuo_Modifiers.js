const configAbility = {
  "fileName": "Huohuo_Modifiers",
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
      "for": "<a class=\"gModGreen\" id=\"mod__-711212518\">Advanced_Huohuo_Eidolon2</a>",
      "stackType": "ReplaceByCaster",
      "execute": [
        {
          "eventTrigger": "Waiting for Healing in Limbo",
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
                  "modifierName": "<a class=\"gModGreen\" id=\"-1246814229\">Advanced_Huohuo_Passive_HealMark</a>[<span class=\"descriptionNumberColor\">Divine Provision</span>]",
                  "multiplier": 1
                },
                {
                  "name": "Inject Ability Use",
                  "condition": {
                    "name": "Insert Ability Condition",
                    "type": "AbilityOwnerInsertUnusedCount",
                    "typeValue": {
                      "operator": "Variables[0] (MIN) || Variables[1] (MDF_ReviveCount) || Variables[2] (Passive_HealMark_LifeTime) || PARAM_2 || FUNCTION || RETURN",
                      "displayLines": "&nbsp;<span class=\"descriptionFunctionColor\">MIN</span>(MDF_ReviveCount, Passive_HealMark_LifeTime)",
                      "constants": [],
                      "variables": [
                        "MIN",
                        "MDF_ReviveCount",
                        "Passive_HealMark_LifeTime"
                      ]
                    }
                  },
                  "abilityName": "Advanced_Huohuo_Eidolon2_Insert",
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
                      "operator": "Variables[0] (MDF_HealPercentage) || RETURN",
                      "displayLines": "MDF_HealPercentage",
                      "constants": [],
                      "variables": [
                        "MDF_HealPercentage"
                      ]
                    }
                  },
                  "allowAbilityTriggers": false
                }
              ]
            }
          ],
          "priorityLevel": -70
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1527901195\">Advanced_Huohuo_Eidolon2_ReviveCount</a>[<span class=\"descriptionNumberColor\">Sealed in Tail, Wraith Subdued</span>]",
      "stackType": "ReplaceByCaster",
      "variableValueChange": [
        {
          "name": "Variable Value Changes",
          "variableName": "Huohuo_Rank02_ReviveCount",
          "from": "ContextOwner",
          "valueRanges": [
            {
              "name": "Variable Value Range Conditions",
              "minValue": 0,
              "maxValue": 3,
              "whenValueChanges": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_ReviveCount",
                  "value": {
                    "operator": "Variables[0] (Huohuo_Rank02_ReviveCount) || RETURN",
                    "displayLines": "Huohuo_Rank02_ReviveCount",
                    "constants": [],
                    "variables": [
                      "Huohuo_Rank02_ReviveCount"
                    ]
                  }
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
                        "modifier": "<a class=\"gModGreen\" id=\"-1246814229\">Advanced_Huohuo_Passive_HealMark</a>[<span class=\"descriptionNumberColor\">Divine Provision</span>]"
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
                      "modifier": "<a class=\"gModGreen\" id=\"-711212518\">Advanced_Huohuo_Eidolon2</a>",
                      "valuePerStack": {
                        "MDF_HealPercentage": {
                          "operator": "Variables[0] (0.5) || RETURN",
                          "displayLines": "0.5",
                          "constants": [],
                          "variables": [
                            0.5
                          ]
                        },
                        "MDF_ReviveCount": {
                          "operator": "Variables[0] (Huohuo_Rank02_ReviveCount) || RETURN",
                          "displayLines": "Huohuo_Rank02_ReviveCount",
                          "constants": [],
                          "variables": [
                            "Huohuo_Rank02_ReviveCount"
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
                        "target": "{{All Team Members with Unselectables}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-711212518\">Advanced_Huohuo_Eidolon2</a>"
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
      ],
      "stackData": [
        "MDF_HealRatio",
        "MDF_ReviveCount"
      ],
      "latentQueue": [],
      "description": "If Huohuo possesses \"Divine Provision\" when an ally target is struck by a killing blow, the ally will not be knocked down, and their HP will immediately be restored by an amount equal to <span class=\"descriptionNumberColor\">MDF_HealRatio</span> of their Max HP. This reduces the duration of \"Divine Provision\" by 1 turn. The remaining trigger count is <span class=\"descriptionNumberColor\">MDF_ReviveCount</span>.",
      "type": "Buff",
      "statusName": "Sealed in Tail, Wraith Subdued"
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__167222959\">Advanced_Huohuo_Eidolon6_DamageUp</a>[<span class=\"descriptionNumberColor\">DMG Boost</span>]",
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
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageAll</span>&nbsp;",
              "value": {
                "operator": "Variables[0] (MDF_DamageAddedRatio) || RETURN",
                "displayLines": "MDF_DamageAddedRatio",
                "constants": [],
                "variables": [
                  "MDF_DamageAddedRatio"
                ]
              }
            }
          ]
        }
      ],
      "stackData": [
        "MDF_DamageAddedRatio"
      ],
      "latentQueue": [],
      "description": "DMG dealt increases by <span class=\"descriptionNumberColor\">MDF_DamageAddedRatio</span>.",
      "type": "Buff",
      "effectName": "DMG Boost",
      "statusName": "DMG Boost"
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-93547702\">Advanced_Huohuo_DealHeal</a>",
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
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "variableName": "CurrentHPRatio"
                },
                {
                  "name": "Adjust Target Healing Stats",
                  "on": "Healer",
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">HealingOutgoingSUM</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (0.8) || Constants[0] (1) || Variables[1] (CurrentHPRatio) || SUB || MUL || RETURN",
                    "displayLines": "(0.8 * (1 - CurrentHPRatio))",
                    "constants": [
                      1
                    ],
                    "variables": [
                      0.8,
                      "CurrentHPRatio"
                    ]
                  }
                }
              ]
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1493871681\">Advanced_Huohuo_Eidolon1_HealUp</a>[<span class=\"descriptionNumberColor\">Outgoing Healing Boost</span>]",
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
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">HealingOutgoing</span>&nbsp;",
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
      ],
      "description": "Outgoing Healing increases by <span class=\"descriptionNumberColor\">MDF_PropertyValue</span>.",
      "type": "Buff",
      "effectName": "Outgoing Healing Boost",
      "statusName": "Outgoing Healing Boost"
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__528503958\">Advanced_Huohuo_Eidolon1_SpeedUp</a>[<span class=\"descriptionNumberColor\">SPD Boost</span>]",
      "stackType": "ReplaceByCaster",
      "modifierFlags": [
        "STAT_SpeedUp"
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
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">SPD%</span>&nbsp;",
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
      ],
      "description": "SPD increases by <span class=\"descriptionNumberColor\">MDF_PropertyValue</span>.",
      "type": "Buff",
      "effectName": "SPD Boost",
      "statusName": "SPD Boost"
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__805273454\">Advanced_Huohuo_Ability03_AttackUP</a>[<span class=\"descriptionNumberColor\">ATK Boost</span>]",
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
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">ATK%</span>&nbsp;",
              "value": {
                "operator": "Variables[0] (MDF_AttackUP) || RETURN",
                "displayLines": "MDF_AttackUP",
                "constants": [],
                "variables": [
                  "MDF_AttackUP"
                ]
              }
            }
          ]
        }
      ],
      "stackData": [
        "MDF_AttackUP"
      ],
      "latentQueue": [],
      "description": "ATK increases by <span class=\"descriptionNumberColor\">MDF_AttackUP</span>.",
      "type": "Buff",
      "effectName": "ATK Boost",
      "statusName": "ATK Boost"
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__2089501453\">Advanced_Huohuo_Passive_ModifySP</a>"
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-933969018\">Advanced_Huohuo_Passive_SPMark</a>"
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1273531270\">Advanced_Huohuo_Passive_HealHP</a>",
      "stackType": "ReplaceByCaster",
      "modifierFlags": [
        "RemoveWhenCasterDead"
      ],
      "execute": [
        {
          "eventTrigger": "Turn [Pre-action Phase]",
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
                    "operator": "Variables[0] (1) || RETURN",
                    "displayLines": "1",
                    "constants": [],
                    "variables": [
                      1
                    ]
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
                    "operator": "Variables[0] (_DispelNum) || RETURN",
                    "displayLines": "_DispelNum",
                    "constants": [],
                    "variables": [
                      "_DispelNum"
                    ]
                  },
                  "dispelOrder": "LastAdded",
                  "counterKey": "_DispelNumSuccess"
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "Huohuo_Passive_DispelCount",
                  "value": {
                    "operator": "Variables[0] (Huohuo_Passive_DispelCount) || Variables[1] (_DispelNumSuccess) || SUB || RETURN",
                    "displayLines": "(Huohuo_Passive_DispelCount - _DispelNumSuccess)",
                    "constants": [],
                    "variables": [
                      "Huohuo_Passive_DispelCount",
                      "_DispelNumSuccess"
                    ]
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
              "modifier": "<a class=\"gModGreen\" id=\"-93547702\">Advanced_Huohuo_DealHeal</a>"
            },
            {
              "name": "Heal",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "healPercent": {
                "operator": "Variables[0] (HPRatio) || RETURN",
                "displayLines": "HPRatio",
                "constants": [],
                "variables": [
                  "HPRatio"
                ]
              },
              "healFlat": {
                "operator": "Variables[0] (HPValue) || RETURN",
                "displayLines": "HPValue",
                "constants": [],
                "variables": [
                  "HPValue"
                ]
              },
              "formula": "Heal from Healer's MaxHP"
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-93547702\">Advanced_Huohuo_DealHeal</a>"
            },
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Player Team All}}.[[living]].[[sortByHP%]]"
              },
              "maxTargets": 1,
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
                        "operator": "Variables[0] (1) || RETURN",
                        "displayLines": "1",
                        "constants": [],
                        "variables": [
                          1
                        ]
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
                        "operator": "Variables[0] (_DispelNum) || RETURN",
                        "displayLines": "_DispelNum",
                        "constants": [],
                        "variables": [
                          "_DispelNum"
                        ]
                      },
                      "dispelOrder": "LastAdded",
                      "counterKey": "_DispelNumSuccess"
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "Huohuo_Passive_DispelCount",
                      "value": {
                        "operator": "Variables[0] (Huohuo_Passive_DispelCount) || Variables[1] (_DispelNumSuccess) || SUB || RETURN",
                        "displayLines": "(Huohuo_Passive_DispelCount - _DispelNumSuccess)",
                        "constants": [],
                        "variables": [
                          "Huohuo_Passive_DispelCount",
                          "_DispelNumSuccess"
                        ]
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
                  "modifier": "<a class=\"gModGreen\" id=\"-93547702\">Advanced_Huohuo_DealHeal</a>"
                },
                {
                  "name": "Heal",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "healPercent": {
                    "operator": "Variables[0] (HPRatio) || RETURN",
                    "displayLines": "HPRatio",
                    "constants": [],
                    "variables": [
                      "HPRatio"
                    ]
                  },
                  "healFlat": {
                    "operator": "Variables[0] (HPValue) || RETURN",
                    "displayLines": "HPValue",
                    "constants": [],
                    "variables": [
                      "HPValue"
                    ]
                  },
                  "formula": "Heal from Healer's MaxHP"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-93547702\">Advanced_Huohuo_DealHeal</a>"
                }
              ]
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
                  "operator": "Variables[0] (0.5) || RETURN",
                  "displayLines": "0.5",
                  "constants": [],
                  "variables": [
                    0.5
                  ]
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
                        "operator": "Variables[0] (1) || RETURN",
                        "displayLines": "1",
                        "constants": [],
                        "variables": [
                          1
                        ]
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
                        "operator": "Variables[0] (_DispelNum) || RETURN",
                        "displayLines": "_DispelNum",
                        "constants": [],
                        "variables": [
                          "_DispelNum"
                        ]
                      },
                      "dispelOrder": "LastAdded",
                      "counterKey": "_DispelNumSuccess"
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "Huohuo_Passive_DispelCount",
                      "value": {
                        "operator": "Variables[0] (Huohuo_Passive_DispelCount) || Variables[1] (_DispelNumSuccess) || SUB || RETURN",
                        "displayLines": "(Huohuo_Passive_DispelCount - _DispelNumSuccess)",
                        "constants": [],
                        "variables": [
                          "Huohuo_Passive_DispelCount",
                          "_DispelNumSuccess"
                        ]
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
                  "modifier": "<a class=\"gModGreen\" id=\"-93547702\">Advanced_Huohuo_DealHeal</a>"
                },
                {
                  "name": "Heal",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "healPercent": {
                    "operator": "Variables[0] (HPRatio) || RETURN",
                    "displayLines": "HPRatio",
                    "constants": [],
                    "variables": [
                      "HPRatio"
                    ]
                  },
                  "healFlat": {
                    "operator": "Variables[0] (HPValue) || RETURN",
                    "displayLines": "HPValue",
                    "constants": [],
                    "variables": [
                      "HPValue"
                    ]
                  },
                  "formula": "Heal from Healer's MaxHP"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-93547702\">Advanced_Huohuo_DealHeal</a>"
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
                        "operator": "Variables[0] (1) || RETURN",
                        "displayLines": "1",
                        "constants": [],
                        "variables": [
                          1
                        ]
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
                        "operator": "Variables[0] (_DispelNum) || RETURN",
                        "displayLines": "_DispelNum",
                        "constants": [],
                        "variables": [
                          "_DispelNum"
                        ]
                      },
                      "dispelOrder": "LastAdded",
                      "counterKey": "_DispelNumSuccess"
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "Huohuo_Passive_DispelCount",
                      "value": {
                        "operator": "Variables[0] (Huohuo_Passive_DispelCount) || Variables[1] (_DispelNumSuccess) || SUB || RETURN",
                        "displayLines": "(Huohuo_Passive_DispelCount - _DispelNumSuccess)",
                        "constants": [],
                        "variables": [
                          "Huohuo_Passive_DispelCount",
                          "_DispelNumSuccess"
                        ]
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
                  "modifier": "<a class=\"gModGreen\" id=\"-93547702\">Advanced_Huohuo_DealHeal</a>"
                },
                {
                  "name": "Heal",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "healPercent": {
                    "operator": "Variables[0] (HPRatio) || RETURN",
                    "displayLines": "HPRatio",
                    "constants": [],
                    "variables": [
                      "HPRatio"
                    ]
                  },
                  "healFlat": {
                    "operator": "Variables[0] (HPValue) || RETURN",
                    "displayLines": "HPValue",
                    "constants": [],
                    "variables": [
                      "HPValue"
                    ]
                  },
                  "formula": "Heal from Healer's MaxHP"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-93547702\">Advanced_Huohuo_DealHeal</a>"
                },
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Player Team All}}.[[living]].[[sortByHP%]]"
                  },
                  "maxTargets": 1,
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
                            "operator": "Variables[0] (1) || RETURN",
                            "displayLines": "1",
                            "constants": [],
                            "variables": [
                              1
                            ]
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
                            "operator": "Variables[0] (_DispelNum) || RETURN",
                            "displayLines": "_DispelNum",
                            "constants": [],
                            "variables": [
                              "_DispelNum"
                            ]
                          },
                          "dispelOrder": "LastAdded",
                          "counterKey": "_DispelNumSuccess"
                        },
                        {
                          "name": "Define Custom Variable",
                          "variableName": "Huohuo_Passive_DispelCount",
                          "value": {
                            "operator": "Variables[0] (Huohuo_Passive_DispelCount) || Variables[1] (_DispelNumSuccess) || SUB || RETURN",
                            "displayLines": "(Huohuo_Passive_DispelCount - _DispelNumSuccess)",
                            "constants": [],
                            "variables": [
                              "Huohuo_Passive_DispelCount",
                              "_DispelNumSuccess"
                            ]
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
                      "modifier": "<a class=\"gModGreen\" id=\"-93547702\">Advanced_Huohuo_DealHeal</a>"
                    },
                    {
                      "name": "Heal",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "healPercent": {
                        "operator": "Variables[0] (HPRatio) || RETURN",
                        "displayLines": "HPRatio",
                        "constants": [],
                        "variables": [
                          "HPRatio"
                        ]
                      },
                      "healFlat": {
                        "operator": "Variables[0] (HPValue) || RETURN",
                        "displayLines": "HPValue",
                        "constants": [],
                        "variables": [
                          "HPValue"
                        ]
                      },
                      "formula": "Heal from Healer's MaxHP"
                    },
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-93547702\">Advanced_Huohuo_DealHeal</a>"
                    }
                  ]
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
                      "operator": "Variables[0] (0.5) || RETURN",
                      "displayLines": "0.5",
                      "constants": [],
                      "variables": [
                        0.5
                      ]
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
                            "operator": "Variables[0] (1) || RETURN",
                            "displayLines": "1",
                            "constants": [],
                            "variables": [
                              1
                            ]
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
                            "operator": "Variables[0] (_DispelNum) || RETURN",
                            "displayLines": "_DispelNum",
                            "constants": [],
                            "variables": [
                              "_DispelNum"
                            ]
                          },
                          "dispelOrder": "LastAdded",
                          "counterKey": "_DispelNumSuccess"
                        },
                        {
                          "name": "Define Custom Variable",
                          "variableName": "Huohuo_Passive_DispelCount",
                          "value": {
                            "operator": "Variables[0] (Huohuo_Passive_DispelCount) || Variables[1] (_DispelNumSuccess) || SUB || RETURN",
                            "displayLines": "(Huohuo_Passive_DispelCount - _DispelNumSuccess)",
                            "constants": [],
                            "variables": [
                              "Huohuo_Passive_DispelCount",
                              "_DispelNumSuccess"
                            ]
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
                      "modifier": "<a class=\"gModGreen\" id=\"-93547702\">Advanced_Huohuo_DealHeal</a>"
                    },
                    {
                      "name": "Heal",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "healPercent": {
                        "operator": "Variables[0] (HPRatio) || RETURN",
                        "displayLines": "HPRatio",
                        "constants": [],
                        "variables": [
                          "HPRatio"
                        ]
                      },
                      "healFlat": {
                        "operator": "Variables[0] (HPValue) || RETURN",
                        "displayLines": "HPValue",
                        "constants": [],
                        "variables": [
                          "HPValue"
                        ]
                      },
                      "formula": "Heal from Healer's MaxHP"
                    },
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-93547702\">Advanced_Huohuo_DealHeal</a>"
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
      "for": "<a class=\"gModGreen\" id=\"mod__-1246814229\">Advanced_Huohuo_Passive_HealMark</a>[<span class=\"descriptionNumberColor\">Divine Provision</span>]",
      "stackType": "ReplaceByCaster",
      "lifeCyclePhaseAllowed": "ModifierPhase1End",
      "execute": [
        {
          "eventTrigger": "When Modifier Destroyed/Removed",
          "execute": [
            {
              "name": "Define Custom Variable",
              "variableName": "Huohuo_Passive_HotCount",
              "value": 0
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
              "modifier": "<a class=\"gModGreen\" id=\"-711212518\">Advanced_Huohuo_Eidolon2</a>"
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
              "modifierName": "<a class=\"gModGreen\" id=\"-1246814229\">Advanced_Huohuo_Passive_HealMark</a>[<span class=\"descriptionNumberColor\">Divine Provision</span>]",
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
              "modifierName": "<a class=\"gModGreen\" id=\"-1246814229\">Advanced_Huohuo_Passive_HealMark</a>[<span class=\"descriptionNumberColor\">Divine Provision</span>]",
              "multiplier": 1
            },
            {
              "name": "Update Displayed Energy Bar",
              "value": {
                "operator": "Variables[0] (Huohuo_Passive_HotCount) || RETURN",
                "displayLines": "Huohuo_Passive_HotCount",
                "constants": [],
                "variables": [
                  "Huohuo_Passive_HotCount"
                ]
              },
              "priorState": "Active"
            },
            {
              "name": "Define Custom Variable",
              "variableName": "Huohuo_Passive_DispelCount",
              "value": {
                "operator": "Variables[0] (6) || RETURN",
                "displayLines": "6",
                "constants": [],
                "variables": [
                  6
                ]
              }
            },
            {
              "name": "Define Custom Variable",
              "variableName": "MDF_DispelCount",
              "value": {
                "operator": "Variables[0] (Huohuo_Passive_DispelCount) || RETURN",
                "displayLines": "Huohuo_Passive_DispelCount",
                "constants": [],
                "variables": [
                  "Huohuo_Passive_DispelCount"
                ]
              }
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
                  "modifier": "<a class=\"gModGreen\" id=\"-711212518\">Advanced_Huohuo_Eidolon2</a>",
                  "valuePerStack": {
                    "MDF_HealPercentage": {
                      "operator": "Variables[0] (0.5) || RETURN",
                      "displayLines": "0.5",
                      "constants": [],
                      "variables": [
                        0.5
                      ]
                    },
                    "MDF_ReviveCount": {
                      "operator": "Variables[0] (Huohuo_Rank02_ReviveCount) || RETURN",
                      "displayLines": "Huohuo_Rank02_ReviveCount",
                      "constants": [],
                      "variables": [
                        "Huohuo_Rank02_ReviveCount"
                      ]
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
          "from": "ContextOwner",
          "valueRanges": [
            {
              "name": "Variable Value Range Conditions",
              "minValue": 0,
              "maxValue": 7,
              "whenValueChanges": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_DispelCount",
                  "value": {
                    "operator": "Variables[0] (Huohuo_Passive_DispelCount) || RETURN",
                    "displayLines": "Huohuo_Passive_DispelCount",
                    "constants": [],
                    "variables": [
                      "Huohuo_Passive_DispelCount"
                    ]
                  }
                }
              ]
            }
          ]
        },
        {
          "name": "Variable Value Changes",
          "variableName": "Huohuo_Passive_HotCount",
          "from": "ContextOwner",
          "valueRanges": [
            {
              "name": "Variable Value Range Conditions",
              "minValue": 0,
              "maxValue": 5,
              "whenValueChanges": [
                {
                  "name": "Update Displayed Energy Bar",
                  "value": {
                    "operator": "Variables[0] (Huohuo_Passive_HotCount) || RETURN",
                    "displayLines": "Huohuo_Passive_HotCount",
                    "constants": [],
                    "variables": [
                      "Huohuo_Passive_HotCount"
                    ]
                  },
                  "priorState": "Active"
                }
              ]
            }
          ]
        }
      ],
      "stackData": [
        "MDF_HPRatio",
        "MDF_HPValue",
        "MDF_LowHP",
        "MDF_DispelNum"
      ],
      "latentQueue": [],
      "description": "When an ally target's turn starts or when an ally uses their Ultimate, restores HP for that ally and the ally unit with the lowest HP percentage by an amount equal to <span class=\"descriptionNumberColor\">MDF_HPRatio</span> of Huohuo's Max HP plus <span class=\"descriptionNumberColor\">MDF_HPValue</span>. Then, every ally target currently at <span class=\"descriptionNumberColor\">MDF_LowHP</span> HP percentage or lower receives healing once. When \"Divine Provision\" is triggered to provide healing for ally targets, dispel 1 debuff from the said ally. This effect's remaining trigger count is <span class=\"descriptionNumberColor\">MDF_DispelCount</span>.",
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
          "modifier": "<a class=\"gModGreen\" id=\"-1273531270\">Advanced_Huohuo_Passive_HealHP</a>",
          "haloStatus": true,
          "valuePerStack": {
            "HPRatio": {
              "operator": "Variables[0] (MDF_HPRatio) || RETURN",
              "displayLines": "MDF_HPRatio",
              "constants": [],
              "variables": [
                "MDF_HPRatio"
              ]
            },
            "HPValue": {
              "operator": "Variables[0] (MDF_HPValue) || RETURN",
              "displayLines": "MDF_HPValue",
              "constants": [],
              "variables": [
                "MDF_HPValue"
              ]
            },
            "_DispelNum": {
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
          "name": "Add Sub-Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{All Team Members with Unselectables}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"528503958\">Advanced_Huohuo_Eidolon1_SpeedUp</a>[<span class=\"descriptionNumberColor\">SPD Boost</span>]",
          "haloStatus": true,
          "conditions": {
            "name": "Eidolon Activated",
            "eidolon": 1
          },
          "valuePerStack": {
            "MDF_PropertyValue": {
              "operator": "Variables[0] (0.12) || RETURN",
              "displayLines": "0.12",
              "constants": [],
              "variables": [
                0.12
              ]
            }
          }
        },
        {
          "name": "Add Sub-Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Modifier Holder}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1493871681\">Advanced_Huohuo_Eidolon1_HealUp</a>[<span class=\"descriptionNumberColor\">Outgoing Healing Boost</span>]",
          "haloStatus": true,
          "conditions": {
            "name": "Eidolon Activated",
            "eidolon": 1
          },
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
      ]
    }
  ],
  "references": []
}