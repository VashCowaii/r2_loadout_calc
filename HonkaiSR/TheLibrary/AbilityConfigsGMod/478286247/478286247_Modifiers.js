const configAbility = {
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
      "for": "<a class=\"gModGreen\" id=\"mod__-593706658\">BattleEventAbility_Challenge_Month_BETag</a>"
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1512051870\">Modifier_BattleEventAbility_Challenge_Month_21_SingleAttackLimit</a>",
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
      "for": "<a class=\"gModGreen\" id=\"mod__2100246283\">Modifier_BattleEventAbility_Challenge_Month_21_sub</a>",
      "stackType": "ReplaceByCaster",
      "execute": [
        {
          "eventTrigger": "Being Attacked [Owner]: End",
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
                  "value": {
                    "displayLines": "(BattleEventAbility_Challenge_Month_21_Count + BattleEvent_P4_ADF)"
                  },
                  "variableName": "BattleEventAbility_Challenge_Month_21_Count"
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
                  "displayLines": "BattleEvent_P1_ADF"
                },
                "contextScope": "TargetEntity"
              },
              "passed": [
                {
                  "name": "Show Attack Count",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "attackCount": {
                    "displayLines": "BattleEventAbility_Challenge_Month_21_Count"
                  },
                  "show": true
                }
              ],
              "failed": [
                {
                  "name": "Show Attack Count",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "attackCount": {
                    "displayLines": "BattleEvent_P1_ADF"
                  },
                  "show": true
                },
                {
                  "name": "Define Custom Variable",
                  "scope": "TargetEntity",
                  "value": {
                    "displayLines": "BattleEvent_P1_ADF"
                  },
                  "variableName": "BattleEventAbility_Challenge_Month_21_Count"
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
                "modifier": "<a class=\"gModGreen\" id=\"-1512051870\">Modifier_BattleEventAbility_Challenge_Month_21_SingleAttackLimit</a>",
                "invertCondition": true
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "scope": "TargetEntity",
                  "value": {
                    "displayLines": "(BattleEventAbility_Challenge_Month_21_Count + BattleEvent_P3_ADF)"
                  },
                  "variableName": "BattleEventAbility_Challenge_Month_21_Count"
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1512051870\">Modifier_BattleEventAbility_Challenge_Month_21_SingleAttackLimit</a>"
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
                  "displayLines": "BattleEvent_P1_ADF"
                },
                "contextScope": "TargetEntity"
              },
              "passed": [
                {
                  "name": "Show Attack Count",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "attackCount": {
                    "displayLines": "BattleEventAbility_Challenge_Month_21_Count"
                  },
                  "show": true
                }
              ],
              "failed": [
                {
                  "name": "Show Attack Count",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "attackCount": {
                    "displayLines": "BattleEvent_P1_ADF"
                  },
                  "show": true
                },
                {
                  "name": "Define Custom Variable",
                  "scope": "TargetEntity",
                  "value": {
                    "displayLines": "BattleEvent_P1_ADF"
                  },
                  "variableName": "BattleEventAbility_Challenge_Month_21_Count"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1989287647\">Modifier_BattleEventAbility_Challenge_Month_18_Sub4</a>[<span class=\"descriptionNumberColor\">Energy Overflow</span>]",
      "stackType": "ReplaceByCaster",
      "description": "<span class=\"descriptionNumberColor\">EntityStockSPForShow</span> extra Energy. This will be consumed first when unleashing Ultimate.",
      "type": "Other",
      "effectName": "Energy Overflow",
      "statusName": "Energy Overflow",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier"
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__946146039\">M_Trace_AggroDown</a>",
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
              "propertyName": "&nbsp;<span class=\"descriptionNumberColor\">Aggro%</span>&nbsp;",
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
      "for": "<a class=\"gModGreen\" id=\"mod__-1138569970\">M_Trace_AggroUp</a>",
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
      "for": "<a class=\"gModGreen\" id=\"mod__-202375119\">M_Trace_HealRatioUp</a>",
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
              "propertyName": "&nbsp;<span class=\"descriptionNumberColor\">HealingOutgoing</span>&nbsp;",
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
      "for": "<a class=\"gModGreen\" id=\"mod__63874351\">M_Ultimate_ExtraSP</a>",
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
                    "displayLines": "MDF_AddValue"
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
      "for": "<a class=\"gModGreen\" id=\"mod__-1885352252\">M_LowHP_AggroDown</a>",
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
                  "displayLines": "MDF_HPRatio"
                }
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"946146039\">M_Trace_AggroDown</a>",
                  "valuePerStack": {
                    "MDF_PropertyValue": {
                      "displayLines": "MDF_AggroDown"
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
                  "displayLines": "MDF_HPRatio"
                }
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"946146039\">M_Trace_AggroDown</a>",
                  "valuePerStack": {
                    "MDF_PropertyValue": {
                      "displayLines": "MDF_AggroDown"
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
                  "modifier": "<a class=\"gModGreen\" id=\"946146039\">M_Trace_AggroDown</a>",
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