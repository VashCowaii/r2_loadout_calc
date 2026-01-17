const configAbility = {
  "fileName": "Bailu_Modifiers",
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
      "for": "Bailu_Revive_Mark",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier"
        },
        {
          "eventTrigger": "Waiting for Healing in Limbo",
          "execute": [
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
                "Modifier Deletes Itself"
              ],
              "failed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "CurrentHP",
                    "compareType": "<=",
                    "value2": 0
                  }
                },
                {
                  "name": "Inject Ability Use",
                  "condition": {
                    "name": "Insert Ability Condition",
                    "type": "AbilityOwnerInsertUnusedCount",
                    "typeValue": {
                      "operator": "Variables[0] (MDF_ReviveTime2) || RETURN",
                      "displayLines": "MDF_ReviveTime2",
                      "constants": [],
                      "variables": [
                        "MDF_ReviveTime2"
                      ]
                    }
                  },
                  "abilityName": "Bailu_InsertAbility_Revive",
                  "abilitySource": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "abilityTarget": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "priorityTag": "AvatarReviveOthers",
                  "targetState": "Mask_AliveOrLimbo",
                  "canHitNonTargets": true,
                  "showInActionOrder": true,
                  "abortFlags": [
                    "DisableAction",
                    "STAT_CTRL"
                  ],
                  "allowAbilityTriggers": false
                }
              ]
            }
          ],
          "priorityLevel": -70
        },
        {
          "eventTrigger": "Being Attacked End [Owner]"
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "Bailu_Eidolon4_AttackUp[<span class=\"descriptionNumberColor\">Evil Excision</span>]",
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
              "variableName": "MDF_AttackUpRatio",
              "value": {
                "operator": "Variables[0] (MDF_AttackUpRatio) || Variables[1] (MDF_Layer) || MUL || RETURN",
                "displayLines": "(MDF_AttackUpRatio * MDF_Layer)",
                "constants": [],
                "variables": [
                  "MDF_AttackUpRatio",
                  "MDF_Layer"
                ]
              }
            },
            {
              "name": "Stack Target Stat Value",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageAll</span>&nbsp;",
              "value": {
                "operator": "Variables[0] (MDF_AttackUpRatio) || RETURN",
                "displayLines": "MDF_AttackUpRatio",
                "constants": [],
                "variables": [
                  "MDF_AttackUpRatio"
                ]
              }
            }
          ]
        }
      ],
      "description": "Increases DMG dealt by <span class=\"descriptionNumberColor\">MDF_AttackUpRatio</span>.",
      "type": "Buff",
      "effectName": "DMG Boost",
      "statusName": "Evil Excision"
    },
    {
      "name": "Modifier Construction",
      "for": "Bailu_Eidolon4",
      "execute": [
        {
          "eventTrigger": "Heal Target End [Owner]",
          "execute": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "Bailu_Eidolon4_AttackUp[<span class=\"descriptionNumberColor\">Evil Excision</span>]",
              "duration": {
                "operator": "Variables[0] (2) || RETURN",
                "displayLines": "2",
                "constants": [],
                "variables": [
                  2
                ]
              },
              "stackLimit": {
                "operator": "Variables[0] (3) || RETURN",
                "displayLines": "3",
                "constants": [],
                "variables": [
                  3
                ]
              },
              "valuePerStack": {
                "MDF_AttackUpRatio": {
                  "operator": "Variables[0] (0.1) || RETURN",
                  "displayLines": "0.1",
                  "constants": [],
                  "variables": [
                    0.1
                  ]
                }
              },
              "addStacksPerTrigger": 1
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "Bailu_Eidolon2[<span class=\"descriptionNumberColor\">Sylphic Slumber</span>]",
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
      "stackData": [
        "MDF_PropertyValue"
      ],
      "latentQueue": [],
      "description": "Increases Outgoing Healing by <span class=\"descriptionNumberColor\">MDF_PropertyValue</span>.",
      "type": "Buff",
      "effectName": "Outgoing Healing Boost",
      "statusName": "Sylphic Slumber"
    },
    {
      "name": "Modifier Construction",
      "for": "Bailu_PointB3[<span class=\"descriptionNumberColor\">Aquatic Benediction</span>]",
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
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageReduction</span>&nbsp;",
              "value": {
                "operator": "Variables[0] (MDF_DamageResistance) || RETURN",
                "displayLines": "MDF_DamageResistance",
                "constants": [],
                "variables": [
                  "MDF_DamageResistance"
                ]
              }
            }
          ]
        }
      ],
      "stackData": [
        "MDF_DamageResistance"
      ],
      "latentQueue": [],
      "description": "Reduces DMG taken by <span class=\"descriptionNumberColor\">MDF_DamageResistance</span>.",
      "type": "Buff",
      "effectName": "DMG Mitigation",
      "statusName": "Aquatic Benediction"
    },
    {
      "name": "Modifier Construction",
      "for": "Bailu_PointB1_HPIncrease[<span class=\"descriptionNumberColor\">Qihuang Analects</span>]",
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
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">HP%</span>&nbsp;",
              "value": {
                "operator": "Variables[0] (MDF_HPIncrease) || RETURN",
                "displayLines": "MDF_HPIncrease",
                "constants": [],
                "variables": [
                  "MDF_HPIncrease"
                ]
              }
            }
          ]
        }
      ],
      "description": "Max HP +<span class=\"descriptionNumberColor\">MDF_HPIncrease</span>.",
      "type": "Buff",
      "effectName": "Max HP Boost",
      "statusName": "Qihuang Analects"
    },
    {
      "name": "Modifier Construction",
      "for": "Bailu_PointB1_Sub",
      "execute": [
        {
          "eventTrigger": "Heal Target End [Owner]",
          "execute": [
            {
              "name": "Define Custom Variable with Healing",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "variableName": "Overflowheal",
              "healProperty": "Result_OverflowHealAmount"
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "Overflowheal",
                "compareType": ">",
                "value2": 0
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "Bailu_PointB1_HPIncrease[<span class=\"descriptionNumberColor\">Qihuang Analects</span>]",
                  "duration": {
                    "operator": "Variables[0] (MDF_LifeTime) || RETURN",
                    "displayLines": "MDF_LifeTime",
                    "constants": [],
                    "variables": [
                      "MDF_LifeTime"
                    ]
                  },
                  "valuePerStack": {
                    "MDF_HPIncrease": {
                      "operator": "Variables[0] (MDF_HPIncrease2) || RETURN",
                      "displayLines": "MDF_HPIncrease2",
                      "constants": [],
                      "variables": [
                        "MDF_HPIncrease2"
                      ]
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
      "for": "Bailu_PointB1",
      "modifierFlags": [
        "MuteDotCasterCallBack"
      ],
      "execute": [
        {
          "eventTrigger": "Heal Target End [Owner]",
          "execute": [
            {
              "name": "Define Custom Variable with Healing",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "variableName": "Overflowheal",
              "healProperty": "Result_OverflowHealAmount"
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "Overflowheal",
                "compareType": ">",
                "value2": 0
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "Bailu_PointB1_HPIncrease[<span class=\"descriptionNumberColor\">Qihuang Analects</span>]",
                  "duration": {
                    "operator": "Variables[0] (2) || RETURN",
                    "displayLines": "2",
                    "constants": [],
                    "variables": [
                      2
                    ]
                  },
                  "valuePerStack": {
                    "MDF_HPIncrease": {
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
            }
          ]
        },
        {
          "eventTrigger": "Snapshot(Calculation Instance Completed)",
          "execute": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "Bailu_PointB1_Sub",
              "valuePerStack": {
                "MDF_LifeTime": {
                  "operator": "Variables[0] (2) || RETURN",
                  "displayLines": "2",
                  "constants": [],
                  "variables": [
                    2
                  ]
                },
                "MDF_HPIncrease2": {
                  "operator": "Variables[0] (0.1) || RETURN",
                  "displayLines": "0.1",
                  "constants": [],
                  "variables": [
                    0.1
                  ]
                }
              },
              "casterAssign": "TargetSelf"
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "Bailu_Heal_Mark[<span class=\"descriptionNumberColor\">Invigoration</span>]",
      "counter": 1,
      "stackType": "ReplaceByCaster",
      "execute": [
        {
          "eventTrigger": "When Modifier Destroyed/Removed",
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
                    "value1": "CurrentHP%",
                    "compareType": "=",
                    "value2": 1
                  },
                  {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "MDF_AddSP",
                    "compareType": ">",
                    "value2": 0,
                    "contextScope": "ContextModifier"
                  }
                ]
              },
              "passed": [
                {
                  "name": "Update Energy",
                  "on": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "value": {
                    "operator": "Variables[0] (MDF_AddSP) || RETURN",
                    "displayLines": "MDF_AddSP",
                    "constants": [],
                    "variables": [
                      "MDF_AddSP"
                    ]
                  },
                  "isFixed": "(Fixed)"
                }
              ]
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "Bailu_PointB3[<span class=\"descriptionNumberColor\">Aquatic Benediction</span>]"
            }
          ]
        },
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Define Modifier Variable",
              "modifierName": "Bailu_Heal_Mark[<span class=\"descriptionNumberColor\">Invigoration</span>]",
              "value": {
                "operator": "Variables[0] (MDF_HealCount) || Variables[1] (MDF_HealCountExtra) || ADD || RETURN",
                "displayLines": "(MDF_HealCount + MDF_HealCountExtra)",
                "constants": [],
                "variables": [
                  "MDF_HealCount",
                  "MDF_HealCountExtra"
                ]
              }
            }
          ]
        },
        {
          "eventTrigger": "Being Attacked End [Owner]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "target": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}"
                },
                "value1": "CurrentHP",
                "compareType": ">",
                "value2": 0
              },
              "passed": [
                {
                  "name": "Heal",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "healPercent": {
                    "operator": "Variables[0] (MDF__HealPercentage2) || RETURN",
                    "displayLines": "MDF__HealPercentage2",
                    "constants": [],
                    "variables": [
                      "MDF__HealPercentage2"
                    ]
                  },
                  "healFlat": {
                    "operator": "Variables[0] (MDF__HealValue2) || RETURN",
                    "displayLines": "MDF__HealValue2",
                    "constants": [],
                    "variables": [
                      "MDF__HealValue2"
                    ]
                  },
                  "formula": "Heal from Healer's MaxHP"
                },
                {
                  "name": "Define Modifier Variable",
                  "modifierName": "Bailu_Heal_Mark[<span class=\"descriptionNumberColor\">Invigoration</span>]",
                  "function": "Add"
                }
              ]
            }
          ]
        }
      ],
      "useEntitySnapshot": true,
      "stackData": [
        "MDF__HealPercentage2",
        "MDF__HealValue2",
        "MDF_AddSP",
        "MDF_HealCount",
        "MDF_HealCountExtra"
      ],
      "latentQueue": [],
      "description": "Restores HP when attacked.",
      "type": "Buff",
      "effectName": "Invigoration",
      "statusName": "Invigoration"
    },
    {
      "name": "Modifier Construction",
      "for": "Bailu_Revive_Ready",
      "stackType": "ReplaceByCaster",
      "execute": [
        {
          "eventTrigger": "Take Damage Start [Owner]: Any"
        },
        {
          "eventTrigger": "When Put in Deathstate Limbo",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Compare: Variable",
                    "value1": "Bailu_ReviveEvent",
                    "compareType": ">",
                    "value2": 0
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
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "CurrentHP",
                    "compareType": "<=",
                    "value2": 0
                  },
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "AND",
                        "conditionList": [
                          {
                            "name": "Is Part Of",
                            "of": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            },
                            "target": {
                              "name": "Target Name",
                              "target": "{{Caster}}"
                            },
                            "mustBeAlive2": true
                          }
                        ]
                      },
                      "failed": [
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Compare: Variable",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Caster}}"
                            },
                            "value1": "CurrentHP",
                            "compareType": "<=",
                            "value2": 0
                          },
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
                              "failed": [
                                {
                                  "name": "Add Events/Bonuses",
                                  "to": {
                                    "name": "Target Name",
                                    "target": "{{Modifier Holder}}"
                                  },
                                  "modifier": "Bailu_Revive_Mark"
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
          "eventTrigger": "Being Attacked End [Owner]"
        }
      ],
      "stackData": [],
      "latentQueue": []
    }
  ],
  "references": []
}