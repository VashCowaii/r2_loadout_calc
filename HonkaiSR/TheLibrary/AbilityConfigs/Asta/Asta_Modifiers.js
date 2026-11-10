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
      "for": "<a class=\"gModGreen\" id=\"mod__427635047\">ADV_StageAbility_Maze_Asta</a>",
      "counter": 1,
      "stackType": "Merge"
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-2135184996\">Asta_Passive_SPRatioUp</a>[<span class=\"descriptionNumberColor\">Energy Regeneration Rate Boost</span>]",
      "stackType": "ReplaceByCaster",
      "description": "Energy Regeneration Rate +<span class=\"descriptionNumberColor\">MDF_PropertyValue</span>.",
      "type": "Buff",
      "effectName": "Energy Regeneration Rate Boost",
      "statusName": "Energy Regeneration Rate Boost",
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
      "for": "<a class=\"gModGreen\" id=\"mod__1558109509\">Asta_Eidolon2Flag</a>",
      "stackType": "ReplaceByCaster",
      "duration": 1
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__216386907\">Asta_TeamAttackUP</a>[<span class=\"descriptionNumberColor\">Charging</span>]",
      "stackType": "ReplaceByCaster",
      "description": "Each stack increases ATK by <span class=\"descriptionNumberColor\">MDF_AttackAddedRatio</span>, up to 5 stacks.",
      "type": "Buff",
      "effectName": "ATK Boost",
      "statusName": "Charging",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Define Modifier Variable",
              "modifierName": "<a class=\"gModGreen\" id=\"216386907\">Asta_TeamAttackUP</a>[<span class=\"descriptionNumberColor\">Charging</span>]",
              "value": {
                "displayLines": "MDF_Charge_Count"
              }
            },
            {
              "name": "Stack Target Stat Value",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "propertyName": "&nbsp;<span class=\"descriptionNumberColor\">ATK%</span>&nbsp;",
              "statValue": {
                "displayLines": "(MDF_AttackAddedRatio * MDF_Charge_Count)"
              }
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1734289579\">Asta_Passive_Charge</a>[<span class=\"descriptionNumberColor\">Charging</span>]",
      "counter": 5,
      "stackType": "ReplaceByCaster",
      "lifeCyclePhaseAllowed": "ModifierPhase1End",
      "description": "Each stack increases ATK by <span class=\"descriptionNumberColor\">MDF_AttackAddedRatio</span>, up to 5 stacks.",
      "type": "Buff",
      "effectName": "ATK Boost",
      "statusName": "Charging",
      "execute": [
        {
          "eventTrigger": "When Modifier Destroyed/Removed",
          "execute": [
            {
              "name": "Define Custom Variable",
              "value": 0,
              "variableName": "MDF_Count"
            },
            {
              "name": "Update Displayed Energy Bar",
              "value": 0,
              "maximum": {
                "displayLines": "5"
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
              "modifier": "<a class=\"gModGreen\" id=\"216386907\">Asta_TeamAttackUP</a>[<span class=\"descriptionNumberColor\">Charging</span>]"
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
                  "modifier": "<a class=\"gModGreen\" id=\"-2135184996\">Asta_Passive_SPRatioUp</a>[<span class=\"descriptionNumberColor\">Energy Regeneration Rate Boost</span>]"
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
              "modifierName": "<a class=\"gModGreen\" id=\"-1734289579\">Asta_Passive_Charge</a>[<span class=\"descriptionNumberColor\">Charging</span>]",
              "value": {
                "displayLines": "MDF_Count"
              }
            },
            {
              "name": "Update Displayed Energy Bar",
              "value": {
                "displayLines": "MDF_Count"
              },
              "maximum": {
                "displayLines": "5"
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
                  "propertyName": "&nbsp;<span class=\"descriptionNumberColor\">ATK%</span>&nbsp;",
                  "statValue": {
                    "displayLines": "(MDF_AttackAddedRatio * MDF_Count)"
                  }
                },
                {
                  "name": "Stack Target Stat Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "propertyName": "&nbsp;<span class=\"descriptionNumberColor\">DEF%</span>&nbsp;",
                  "statValue": {
                    "displayLines": "(MDF_DefenceAddedRatio * MDF_Count)"
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
                  "propertyName": "&nbsp;<span class=\"descriptionNumberColor\">ATK%</span>&nbsp;",
                  "statValue": {
                    "displayLines": "(MDF_AttackAddedRatio * MDF_Count)"
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
              "modifier": "<a class=\"gModGreen\" id=\"216386907\">Asta_TeamAttackUP</a>[<span class=\"descriptionNumberColor\">Charging</span>]",
              "valuePerStack": {
                "MDF_AttackAddedRatio": {
                  "displayLines": "MDF_AttackAddedRatio"
                },
                "MDF_Charge_Count": {
                  "displayLines": "MDF_Count"
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
                    "value1": "<a class=\"gModGreen\" id=\"-1734289579\">Asta_Passive_Charge</a>[<span class=\"descriptionNumberColor\">Charging</span>]",
                    "compareType": ">=",
                    "value2": {
                      "displayLines": "MDF_BuffLayer"
                    }
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-2135184996\">Asta_Passive_SPRatioUp</a>[<span class=\"descriptionNumberColor\">Energy Regeneration Rate Boost</span>]",
                      "valuePerStack": {
                        "MDF_PropertyValue": {
                          "displayLines": "MDF_SPRatio"
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
                  "modifier": "<a class=\"gModGreen\" id=\"216386907\">Asta_TeamAttackUP</a>[<span class=\"descriptionNumberColor\">Charging</span>]",
                  "valuePerStack": {
                    "MDF_AttackAddedRatio": {
                      "displayLines": "MDF_AttackAddedRatio"
                    },
                    "MDF_Charge_Count": {
                      "displayLines": "MDF_Count"
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
      "for": "<a class=\"gModGreen\" id=\"mod__-653161821\">Asta_FireAddedRatio</a>",
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
              "propertyName": "&nbsp;<span class=\"descriptionNumberColor\">DamageFire</span>&nbsp;",
              "statValue": {
                "displayLines": "MDF_PropertyValue"
              }
            }
          ]
        }
      ]
    }
  ],
  "references": []
}