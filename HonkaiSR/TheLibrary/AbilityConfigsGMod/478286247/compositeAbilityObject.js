const compositeAbilityObject = {
  "fullCharacterName": 478286247,
  "trimCharacterName": 478286247,
  "abilityList": [
    "478286247_Modifiers"
  ],
  "abilityObject": {
    "478286247_Modifiers": {
      "fileName": "478286247_Modifiers",
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
          "for": "BattleEventAbility_Challenge_Month_BETag"
        },
        {
          "name": "Modifier Construction",
          "for": "Modifier_BattleEventAbility_Challenge_Month_21_SingleAttackLimit",
          "stackType": "ReplaceByCaster",
          "execute": [
            {
              "eventTrigger": "Ability Use [Anyone]: End",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Current Action Holder's Team",
                    "team": "Player Team"
                  },
                  "passed": [
                    "Modifier Deletes Itself"
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "Modifier_BattleEventAbility_Challenge_Month_21_sub",
          "stackType": "ReplaceByCaster",
          "execute": [
            {
              "eventTrigger": "Being Attacked End [Owner]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Flag",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "flagName": "Break"
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "scope": "TargetEntity",
                      "variableName": "BattleEventAbility_Challenge_Month_21_Count",
                      "value": {
                        "operator": "Variables[0] (BattleEventAbility_Challenge_Month_21_Count) || Variables[1] (STANDARDSPECIFIC_OBJECT_UNUSED_9) || ADD || RETURN",
                        "displayLines": "(BattleEventAbility_Challenge_Month_21_Count + STANDARDSPECIFIC_OBJECT_UNUSED_9)",
                        "constants": [],
                        "variables": [
                          "BattleEventAbility_Challenge_Month_21_Count",
                          "STANDARDSPECIFIC_OBJECT_UNUSED_9"
                        ]
                      }
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "BattleEventAbility_Challenge_Month_21_Count",
                    "compareType": "<=",
                    "value2": {
                      "operator": "Variables[0] (STANDARDSPECIFIC_OBJECT_UNUSED_10) || RETURN",
                      "displayLines": "STANDARDSPECIFIC_OBJECT_UNUSED_10",
                      "constants": [],
                      "variables": [
                        "STANDARDSPECIFIC_OBJECT_UNUSED_10"
                      ]
                    },
                    "contextScope": "TargetEntity"
                  },
                  "passed": [
                    {
                      "name": "Show Attack Time",
                      "time": {
                        "operator": "Variables[0] (BattleEventAbility_Challenge_Month_21_Count) || RETURN",
                        "displayLines": "BattleEventAbility_Challenge_Month_21_Count",
                        "constants": [],
                        "variables": [
                          "BattleEventAbility_Challenge_Month_21_Count"
                        ]
                      },
                      "on": null,
                      "show": true
                    }
                  ],
                  "failed": [
                    {
                      "name": "Show Attack Time",
                      "time": {
                        "operator": "Variables[0] (STANDARDSPECIFIC_OBJECT_UNUSED_10) || RETURN",
                        "displayLines": "STANDARDSPECIFIC_OBJECT_UNUSED_10",
                        "constants": [],
                        "variables": [
                          "STANDARDSPECIFIC_OBJECT_UNUSED_10"
                        ]
                      },
                      "on": null,
                      "show": true
                    },
                    {
                      "name": "Define Custom Variable",
                      "scope": "TargetEntity",
                      "variableName": "BattleEventAbility_Challenge_Month_21_Count",
                      "value": {
                        "operator": "Variables[0] (STANDARDSPECIFIC_OBJECT_UNUSED_10) || RETURN",
                        "displayLines": "STANDARDSPECIFIC_OBJECT_UNUSED_10",
                        "constants": [],
                        "variables": [
                          "STANDARDSPECIFIC_OBJECT_UNUSED_10"
                        ]
                      }
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Being Weakness Broken: End [Owner]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "modifier": "Modifier_BattleEventAbility_Challenge_Month_21_SingleAttackLimit",
                    "invertCondition": true
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "scope": "TargetEntity",
                      "variableName": "BattleEventAbility_Challenge_Month_21_Count",
                      "value": {
                        "operator": "Variables[0] (BattleEventAbility_Challenge_Month_21_Count) || Variables[1] (STANDARDSPECIFIC_OBJECT_UNUSED_11) || ADD || RETURN",
                        "displayLines": "(BattleEventAbility_Challenge_Month_21_Count + STANDARDSPECIFIC_OBJECT_UNUSED_11)",
                        "constants": [],
                        "variables": [
                          "BattleEventAbility_Challenge_Month_21_Count",
                          "STANDARDSPECIFIC_OBJECT_UNUSED_11"
                        ]
                      }
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "Modifier_BattleEventAbility_Challenge_Month_21_SingleAttackLimit"
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "BattleEventAbility_Challenge_Month_21_Count",
                    "compareType": "<=",
                    "value2": {
                      "operator": "Variables[0] (STANDARDSPECIFIC_OBJECT_UNUSED_10) || RETURN",
                      "displayLines": "STANDARDSPECIFIC_OBJECT_UNUSED_10",
                      "constants": [],
                      "variables": [
                        "STANDARDSPECIFIC_OBJECT_UNUSED_10"
                      ]
                    },
                    "contextScope": "TargetEntity"
                  },
                  "passed": [
                    {
                      "name": "Show Attack Time",
                      "time": {
                        "operator": "Variables[0] (BattleEventAbility_Challenge_Month_21_Count) || RETURN",
                        "displayLines": "BattleEventAbility_Challenge_Month_21_Count",
                        "constants": [],
                        "variables": [
                          "BattleEventAbility_Challenge_Month_21_Count"
                        ]
                      },
                      "on": null,
                      "show": true
                    }
                  ],
                  "failed": [
                    {
                      "name": "Show Attack Time",
                      "time": {
                        "operator": "Variables[0] (STANDARDSPECIFIC_OBJECT_UNUSED_10) || RETURN",
                        "displayLines": "STANDARDSPECIFIC_OBJECT_UNUSED_10",
                        "constants": [],
                        "variables": [
                          "STANDARDSPECIFIC_OBJECT_UNUSED_10"
                        ]
                      },
                      "on": null,
                      "show": true
                    },
                    {
                      "name": "Define Custom Variable",
                      "scope": "TargetEntity",
                      "variableName": "BattleEventAbility_Challenge_Month_21_Count",
                      "value": {
                        "operator": "Variables[0] (STANDARDSPECIFIC_OBJECT_UNUSED_10) || RETURN",
                        "displayLines": "STANDARDSPECIFIC_OBJECT_UNUSED_10",
                        "constants": [],
                        "variables": [
                          "STANDARDSPECIFIC_OBJECT_UNUSED_10"
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
          "for": "Modifier_BattleEventAbility_Challenge_Month_18_Sub4[<span class=\"descriptionNumberColor\">Energy Overflow</span>]",
          "stackType": "ReplaceByCaster",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier"
            }
          ],
          "description": "<span class=\"descriptionNumberColor\">EntityStockSPForShow</span> extra Energy. This will be consumed first when unleashing Ultimate.",
          "type": "Other",
          "effectName": "Energy Overflow",
          "statusName": "Energy Overflow"
        },
        {
          "name": "Modifier Construction",
          "for": "M_Trace_AggroDown",
          "stackType": "ReplaceByCaster",
          "lifeCyclePhaseAllowed": "ModifierPhase1End",
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
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">Aggro%</span>&nbsp;",
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
          "for": "M_Trace_AggroUp",
          "stackType": "ReplaceByCaster",
          "lifeCyclePhaseAllowed": "ModifierPhase1End",
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
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">Aggro%</span>&nbsp;",
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
          "for": "M_Trace_HealRatioUp",
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
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "M_Ultimate_ExtraSP",
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
                      "name": "Update Energy",
                      "on": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "value": {
                        "operator": "Variables[0] (MDF_AddValue) || RETURN",
                        "displayLines": "MDF_AddValue",
                        "constants": [],
                        "variables": [
                          "MDF_AddValue"
                        ]
                      },
                      "isFixed": "* ERR"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "M_LowHP_AggroDown",
          "stackType": "ReplaceByCaster",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "CurrentHP%",
                    "compareType": "<=",
                    "value2": {
                      "operator": "Variables[0] (MDF_HPRatio) || RETURN",
                      "displayLines": "MDF_HPRatio",
                      "constants": [],
                      "variables": [
                        "MDF_HPRatio"
                      ]
                    }
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "M_Trace_AggroDown",
                      "valuePerStack": {
                        "MDF_PropertyValue": {
                          "operator": "Variables[0] (MDF_AggroDown) || RETURN",
                          "displayLines": "MDF_AggroDown",
                          "constants": [],
                          "variables": [
                            "MDF_AggroDown"
                          ]
                        }
                      }
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "HP Change [Owner]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "CurrentHP%",
                    "compareType": "<=",
                    "value2": {
                      "operator": "Variables[0] (MDF_HPRatio) || RETURN",
                      "displayLines": "MDF_HPRatio",
                      "constants": [],
                      "variables": [
                        "MDF_HPRatio"
                      ]
                    }
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "M_Trace_AggroDown",
                      "valuePerStack": {
                        "MDF_PropertyValue": {
                          "operator": "Variables[0] (MDF_AggroDown) || RETURN",
                          "displayLines": "MDF_AggroDown",
                          "constants": [],
                          "variables": [
                            "MDF_AggroDown"
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
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "M_Trace_AggroDown",
                      "onlyRemoveOwnersInstance": true
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
  }
}