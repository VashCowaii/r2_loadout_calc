const configAbility = {
  "fileName": "Asta_Modifiers",
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
      "for": "Asta_Passive_SPRatioUp[<span class=\"descriptionNumberColor\">Energy Regeneration Rate Boost</span>]",
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
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">EnergyRegenRate</span>&nbsp;",
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
      "description": "Energy Regeneration Rate +<span class=\"descriptionNumberColor\">MDF_PropertyValue</span>.",
      "type": "Buff",
      "effectName": "Energy Regeneration Rate Boost",
      "statusName": "Energy Regeneration Rate Boost"
    },
    {
      "name": "Modifier Construction",
      "for": "Asta_Eidolon2Flag",
      "stackType": "ReplaceByCaster",
      "stackData": [],
      "latentQueue": [],
      "duration": 1
    },
    {
      "name": "Modifier Construction",
      "for": "Asta_TeamAttackUP[<span class=\"descriptionNumberColor\">Charging</span>]",
      "stackType": "ReplaceByCaster",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Define Modifier Variable",
              "modifierName": "Asta_TeamAttackUP[<span class=\"descriptionNumberColor\">Charging</span>]",
              "value": {
                "operator": "Variables[0] (MDF_Charge_Count) || RETURN",
                "displayLines": "MDF_Charge_Count",
                "constants": [],
                "variables": [
                  "MDF_Charge_Count"
                ]
              }
            },
            {
              "name": "Stack Target Stat Value",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">ATK%</span>&nbsp;",
              "value": {
                "operator": "Variables[0] (MDF_AttackAddedRatio) || Variables[1] (MDF_Charge_Count) || MUL || RETURN",
                "displayLines": "(MDF_AttackAddedRatio * MDF_Charge_Count)",
                "constants": [],
                "variables": [
                  "MDF_AttackAddedRatio",
                  "MDF_Charge_Count"
                ]
              }
            }
          ]
        }
      ],
      "description": "Each stack increases ATK by <span class=\"descriptionNumberColor\">MDF_AttackAddedRatio</span>, up to 5 stacks.",
      "type": "Buff",
      "effectName": "ATK Boost",
      "statusName": "Charging"
    },
    {
      "name": "Modifier Construction",
      "for": "Asta_Passive_Charge[<span class=\"descriptionNumberColor\">Charging</span>]",
      "counter": 5,
      "stackType": "ReplaceByCaster",
      "lifeCyclePhaseAllowed": "ModifierPhase1End",
      "execute": [
        {
          "eventTrigger": "When Modifier Destroyed/Removed",
          "execute": [
            {
              "name": "Define Custom Variable",
              "variableName": "MDF_Count",
              "value": 0
            },
            {
              "name": "Update Displayed Energy Bar",
              "value": 0,
              "maximum": {
                "operator": "Variables[0] (5) || RETURN",
                "displayLines": "5",
                "constants": [],
                "variables": [
                  5
                ]
              },
              "assignState": "True",
              "priorState": "Normal",
              "bar#": 3,
              "cooldown": 0
            },
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
              "modifier": "Asta_TeamAttackUP[<span class=\"descriptionNumberColor\">Charging</span>]"
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Eidolon Activated",
                "eidolon": 4
              },
              "passed": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "Asta_Passive_SPRatioUp[<span class=\"descriptionNumberColor\">Energy Regeneration Rate Boost</span>]"
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Define Modifier Variable",
              "modifierName": "Asta_Passive_Charge[<span class=\"descriptionNumberColor\">Charging</span>]",
              "value": {
                "operator": "Variables[0] (MDF_Count) || RETURN",
                "displayLines": "MDF_Count",
                "constants": [],
                "variables": [
                  "MDF_Count"
                ]
              }
            },
            {
              "name": "Update Displayed Energy Bar",
              "value": {
                "operator": "Variables[0] (MDF_Count) || RETURN",
                "displayLines": "MDF_Count",
                "constants": [],
                "variables": [
                  "MDF_Count"
                ]
              },
              "maximum": {
                "operator": "Variables[0] (5) || RETURN",
                "displayLines": "5",
                "constants": [],
                "variables": [
                  5
                ]
              },
              "assignState": "True",
              "priorState": "Active",
              "bar#": 3,
              "cooldown": 0
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Trace Activated",
                "conditionList": "Constellation"
              },
              "passed": [
                {
                  "name": "Stack Target Stat Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">ATK%</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (MDF_AttackAddedRatio) || Variables[1] (MDF_Count) || MUL || RETURN",
                    "displayLines": "(MDF_AttackAddedRatio * MDF_Count)",
                    "constants": [],
                    "variables": [
                      "MDF_AttackAddedRatio",
                      "MDF_Count"
                    ]
                  }
                },
                {
                  "name": "Stack Target Stat Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">DEF%</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (MDF_DefenceAddedRatio) || Variables[1] (MDF_Count) || MUL || RETURN",
                    "displayLines": "(MDF_DefenceAddedRatio * MDF_Count)",
                    "constants": [],
                    "variables": [
                      "MDF_DefenceAddedRatio",
                      "MDF_Count"
                    ]
                  }
                },
                {
                  "name": "Update Modifier Description",
                  "popUpText": "Each stack increases ATK by <span class=\"descriptionNumberColor\">MDF_AttackAddedRatio</span> and DEF by <span class=\"descriptionNumberColor\">MDF_DefenceAddedRatio</span>, up to 5 stacks."
                }
              ],
              "failed": [
                {
                  "name": "Stack Target Stat Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">ATK%</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (MDF_AttackAddedRatio) || Variables[1] (MDF_Count) || MUL || RETURN",
                    "displayLines": "(MDF_AttackAddedRatio * MDF_Count)",
                    "constants": [],
                    "variables": [
                      "MDF_AttackAddedRatio",
                      "MDF_Count"
                    ]
                  }
                }
              ]
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{All Team Members with Unselectable Team Members(Exclude Self)}}"
              },
              "modifier": "Asta_TeamAttackUP[<span class=\"descriptionNumberColor\">Charging</span>]",
              "valuePerStack": {
                "MDF_AttackAddedRatio": {
                  "operator": "Variables[0] (MDF_AttackAddedRatio) || RETURN",
                  "displayLines": "MDF_AttackAddedRatio",
                  "constants": [],
                  "variables": [
                    "MDF_AttackAddedRatio"
                  ]
                },
                "MDF_Charge_Count": {
                  "operator": "Variables[0] (MDF_Count) || RETURN",
                  "displayLines": "MDF_Count",
                  "constants": [],
                  "variables": [
                    "MDF_Count"
                  ]
                }
              }
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
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "Asta_Passive_Charge[<span class=\"descriptionNumberColor\">Charging</span>]",
                    "compareType": ">=",
                    "value2": {
                      "operator": "Variables[0] (MDF_BuffLayer) || RETURN",
                      "displayLines": "MDF_BuffLayer",
                      "constants": [],
                      "variables": [
                        "MDF_BuffLayer"
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
                      "modifier": "Asta_Passive_SPRatioUp[<span class=\"descriptionNumberColor\">Energy Regeneration Rate Boost</span>]",
                      "valuePerStack": {
                        "MDF_PropertyValue": {
                          "operator": "Variables[0] (MDF_SPRatio) || RETURN",
                          "displayLines": "MDF_SPRatio",
                          "constants": [],
                          "variables": [
                            "MDF_SPRatio"
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
          "eventTrigger": "Entity Created [Anyone]",
          "execute": [
            {
              "name": "Define Custom Variable with Modifier Values",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "variableName": "MDF_Count",
              "multiplier": 1
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Is Teammate",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                }
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "Asta_TeamAttackUP[<span class=\"descriptionNumberColor\">Charging</span>]",
                  "valuePerStack": {
                    "MDF_AttackAddedRatio": {
                      "operator": "Variables[0] (MDF_AttackAddedRatio) || RETURN",
                      "displayLines": "MDF_AttackAddedRatio",
                      "constants": [],
                      "variables": [
                        "MDF_AttackAddedRatio"
                      ]
                    },
                    "MDF_Charge_Count": {
                      "operator": "Variables[0] (MDF_Count) || RETURN",
                      "displayLines": "MDF_Count",
                      "constants": [],
                      "variables": [
                        "MDF_Count"
                      ]
                    }
                  }
                }
              ]
            }
          ]
        }
      ],
      "stackData": [
        "MDF_AttackAddedRatio",
        "MDF_DefenceAddedRatio",
        "MDF_BuffLayer",
        "MDF_SPRatio",
        "MDF_CostLayer"
      ],
      "latentQueue": [],
      "description": "Each stack increases ATK by <span class=\"descriptionNumberColor\">MDF_AttackAddedRatio</span>, up to 5 stacks.",
      "type": "Buff",
      "effectName": "ATK Boost",
      "statusName": "Charging"
    },
    {
      "name": "Modifier Construction",
      "for": "Asta_FireAddedRatio",
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
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageFire</span>&nbsp;",
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
      "latentQueue": []
    }
  ],
  "references": []
}