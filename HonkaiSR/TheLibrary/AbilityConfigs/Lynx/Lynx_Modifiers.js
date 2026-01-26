const configAbility = {
  "fileName": "Lynx_Modifiers",
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
      "for": "Lynx_Eidolon4_AddAttackRatio[<span class=\"descriptionNumberColor\">ATK Boost</span>]",
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
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">ATKFlat</span>&nbsp;",
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
      "description": "Increases ATK by <span class=\"descriptionNumberColor\">MDF_PropertyValue</span>.",
      "type": "Buff",
      "effectName": "ATK Boost",
      "statusName": "ATK Boost"
    },
    {
      "name": "Modifier Construction",
      "for": "Lynx_Eidolon2_Resist[<span class=\"descriptionNumberColor\">Debuff RES</span>]",
      "modifierFlags": [
        "ImmuneDebuff"
      ],
      "execute": [
        {
          "eventTrigger": "Debuff Immunity[?]",
          "execute": [
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "Lynx_Eidolon2_Resist[<span class=\"descriptionNumberColor\">Debuff RES</span>]"
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": [],
      "description": "Resists 1 debuff.",
      "type": "Buff",
      "statusName": "Debuff RES"
    },
    {
      "name": "Modifier Construction",
      "for": "Lynx_Tree02_Resistance",
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
    },
    {
      "name": "Modifier Construction",
      "for": "Lynx_Tree01_OnBeforeBeingAttacked",
      "execute": [
        {
          "eventTrigger": "Being Attacked End [Owner]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "OR",
                    "conditionList": [
                      {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "modifier": "Lynx_HPAddedRatio01[<span class=\"descriptionNumberColor\">Survival Response</span>]"
                      },
                      {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "modifier": "Lynx_HPAddedRatio02[<span class=\"descriptionNumberColor\">Survival Response</span>]"
                      }
                    ]
                  },
                  {
                    "name": "Is Part Of Team",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "team": "Enemy Team"
                  }
                ]
              },
              "passed": [
                {
                  "name": "Update Energy",
                  "on": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "value": {
                    "operator": "Variables[0] (MDF_Lynx_PointB1_AddSpValue) || RETURN",
                    "displayLines": "MDF_Lynx_PointB1_AddSpValue",
                    "constants": [],
                    "variables": [
                      "MDF_Lynx_PointB1_AddSpValue"
                    ]
                  },
                  "isFixed": "* ERR"
                }
              ]
            }
          ]
        }
      ],
      "stackData": [
        "MDF_Lynx_PointB1_AddSpValue"
      ],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "Lynx_HOT_HealByMaxHp[<span class=\"descriptionNumberColor\">Healing Over Time</span>]",
      "stackType": "ReplaceByCaster",
      "lifeCyclePhaseAllowed": "ModifierPhase1End",
      "execute": [
        {
          "eventTrigger": "Turn [Pre-action Phase]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "OR",
                "conditionList": [
                  {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "modifier": "Lynx_HPAddedRatio01[<span class=\"descriptionNumberColor\">Survival Response</span>]"
                  },
                  {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "modifier": "Lynx_HPAddedRatio02[<span class=\"descriptionNumberColor\">Survival Response</span>]"
                  }
                ]
              },
              "passed": [
                {
                  "name": "Heal",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "healPercent": {
                    "operator": "Variables[0] (MDF_HOT_HOTPercentage) || Variables[1] (MDF_HOT_AggroUp_HOTPercentage) || ADD || RETURN",
                    "displayLines": "(MDF_HOT_HOTPercentage + MDF_HOT_AggroUp_HOTPercentage)",
                    "constants": [],
                    "variables": [
                      "MDF_HOT_HOTPercentage",
                      "MDF_HOT_AggroUp_HOTPercentage"
                    ]
                  },
                  "healFlat": {
                    "operator": "Variables[0] (MDF_HOT_HealValue) || Variables[1] (MDF_HOT_AggroUp_HealValue) || ADD || RETURN",
                    "displayLines": "(MDF_HOT_HealValue + MDF_HOT_AggroUp_HealValue)",
                    "constants": [],
                    "variables": [
                      "MDF_HOT_HealValue",
                      "MDF_HOT_AggroUp_HealValue"
                    ]
                  },
                  "formula": "Heal from Healer's MaxHP"
                }
              ],
              "failed": [
                {
                  "name": "Heal",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "healPercent": {
                    "operator": "Variables[0] (MDF_HOT_HOTPercentage) || RETURN",
                    "displayLines": "MDF_HOT_HOTPercentage",
                    "constants": [],
                    "variables": [
                      "MDF_HOT_HOTPercentage"
                    ]
                  },
                  "healFlat": {
                    "operator": "Variables[0] (MDF_HOT_HealValue) || RETURN",
                    "displayLines": "MDF_HOT_HealValue",
                    "constants": [],
                    "variables": [
                      "MDF_HOT_HealValue"
                    ]
                  },
                  "formula": "Heal from Healer's MaxHP"
                }
              ]
            }
          ]
        }
      ],
      "useEntitySnapshot": true,
      "stackData": [
        "MDF_HOT_HOTPercentage",
        "MDF_HOT_HealValue",
        "MDF_HOT_AggroUp_HOTPercentage",
        "MDF_HOT_AggroUp_HealValue"
      ],
      "latentQueue": [],
      "description": "Restores a certain amount of HP at the start of each turn.",
      "type": "Buff",
      "effectName": "Healing Over Time",
      "statusName": "Healing Over Time"
    },
    {
      "name": "Modifier Construction",
      "for": "Lynx_HPAddedRatio02[<span class=\"descriptionNumberColor\">Survival Response</span>]",
      "stackType": "ReplaceByCaster",
      "execute": [
        {
          "eventTrigger": "When Modifier Destroyed/Removed",
          "execute": [
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "Lynx_Eidolon2_Resist[<span class=\"descriptionNumberColor\">Debuff RES</span>]"
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
                "target": "{{Modifier Holder}}"
              },
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">HPConverted</span>&nbsp;",
              "value": {
                "operator": "Variables[0] (MDF_HPAddValueConvert) || RETURN",
                "displayLines": "MDF_HPAddValueConvert",
                "constants": [],
                "variables": [
                  "MDF_HPAddValueConvert"
                ]
              }
            },
            {
              "name": "Stack Target Stat Value",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">HPFlat</span>&nbsp;",
              "value": {
                "operator": "Variables[0] (MDF_HPDelta) || RETURN",
                "displayLines": "MDF_HPDelta",
                "constants": [],
                "variables": [
                  "MDF_HPDelta"
                ]
              }
            },
            {
              "name": "Stack Target Stat Value",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">EffectRES</span>&nbsp;",
              "value": {
                "operator": "Variables[0] (MDF_AddStatusResistance) || RETURN",
                "displayLines": "MDF_AddStatusResistance",
                "constants": [],
                "variables": [
                  "MDF_AddStatusResistance"
                ]
              }
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "MDF_AggroUp",
                "compareType": "=",
                "value2": 0
              },
              "failed": [
                {
                  "name": "Update Modifier Description",
                  "popUpText": "Increases Max HP by #1[i] and Effect RES by #2[i]%, and greatly increases the chance of being attacked by enemies."
                }
              ]
            },
            {
              "name": "Stack Target Stat Value",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">Aggro%</span>&nbsp;",
              "value": {
                "operator": "Variables[0] (MDF_AggroUp) || RETURN",
                "displayLines": "MDF_AggroUp",
                "constants": [],
                "variables": [
                  "MDF_AggroUp"
                ]
              }
            }
          ]
        }
      ],
      "stackData": [
        "MDF_PropertyValue",
        "MDF_HPAddValueConvert",
        "MDF_HPDelta",
        "MDF_AggroUp",
        "MDF_AddStatusResistance"
      ],
      "latentQueue": [],
      "description": "Increases Max HP by <span class=\"descriptionNumberColor\">MDF_PropertyValue</span> and Effect RES by <span class=\"descriptionNumberColor\">MDF_AddStatusResistance</span>.",
      "type": "Buff",
      "effectName": "Max HP Boost",
      "statusName": "Survival Response"
    },
    {
      "name": "Modifier Construction",
      "for": "Lynx_HPAddedRatio01[<span class=\"descriptionNumberColor\">Survival Response</span>]",
      "stackType": "ReplaceByCaster",
      "execute": [
        {
          "eventTrigger": "When Modifier Destroyed/Removed",
          "execute": [
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "Lynx_Eidolon2_Resist[<span class=\"descriptionNumberColor\">Debuff RES</span>]"
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
                "target": "{{Modifier Holder}}"
              },
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">HPConverted</span>&nbsp;",
              "value": {
                "operator": "Variables[0] (MDF_HPAddValueConvert) || RETURN",
                "displayLines": "MDF_HPAddValueConvert",
                "constants": [],
                "variables": [
                  "MDF_HPAddValueConvert"
                ]
              }
            },
            {
              "name": "Stack Target Stat Value",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">HPFlat</span>&nbsp;",
              "value": {
                "operator": "Variables[0] (MDF_HPDelta) || RETURN",
                "displayLines": "MDF_HPDelta",
                "constants": [],
                "variables": [
                  "MDF_HPDelta"
                ]
              }
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "MDF_AggroUp",
                "compareType": "=",
                "value2": 0
              },
              "failed": [
                {
                  "name": "Update Modifier Description",
                  "popUpText": "Increases Max HP by #1[i] and greatly increases the chance of being attacked by enemies."
                }
              ]
            },
            {
              "name": "Stack Target Stat Value",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">Aggro%</span>&nbsp;",
              "value": {
                "operator": "Variables[0] (MDF_AggroUp) || RETURN",
                "displayLines": "MDF_AggroUp",
                "constants": [],
                "variables": [
                  "MDF_AggroUp"
                ]
              }
            }
          ]
        }
      ],
      "stackData": [
        "MDF_PropertyValue",
        "MDF_HPAddValueConvert",
        "MDF_HPDelta",
        "MDF_AggroUp"
      ],
      "latentQueue": [],
      "description": "Increases Max HP by <span class=\"descriptionNumberColor\">MDF_PropertyValue</span>.",
      "type": "Buff",
      "effectName": "Max HP Boost",
      "statusName": "Survival Response"
    }
  ],
  "references": []
}