const configAbility = {
  "fileName": "Sushang_Modifiers",
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
      "for": "<a class=\"gModGreen\" id=\"mod__1872577593\">ADV_StageAbility_Maze_Sushang</a>",
      "counter": 1,
      "stackType": "Merge"
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__398733795\">Sushang_Eidolon2_Bonus</a>[<span class=\"descriptionNumberColor\">Refine in Toil</span>]",
      "stackType": "ReplaceByCaster",
      "lifeCyclePhaseAllowed": "ModifierPhase1End",
      "description": "DMG taken -<span class=\"descriptionNumberColor\">MDF_PropertyValue</span>.",
      "type": "Buff",
      "effectName": "DMG Mitigation",
      "statusName": "Refine in Toil",
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
              "propertyName": "&nbsp;<span class=\"descriptionNumberColor\">DamageReduction</span>&nbsp;",
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
      "for": "<a class=\"gModGreen\" id=\"mod__-995993731\">Sushang_P01_Eidolon6</a>[<span class=\"descriptionNumberColor\">Dancing Blade</span>]",
      "stackType": "ReplaceByCaster",
      "modifierFlags": [
        "STAT_SpeedUp"
      ],
      "description": "Each stack increases SPD by <span class=\"descriptionNumberColor\">MDF_PropertyValue</span>.",
      "type": "Buff",
      "effectName": "SPD Boost",
      "statusName": "Dancing Blade",
      "stackLimit": 2,
      "addStacksPerTrigger": 1,
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
              "variableName": "Rank06_SpeedUp_Count",
              "modifierName": "<a class=\"gModGreen\" id=\"-995993731\">Sushang_P01_Eidolon6</a>[<span class=\"descriptionNumberColor\">Dancing Blade</span>]",
              "multiplier": 1
            },
            {
              "name": "Stack Target Stat Value",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "propertyName": "&nbsp;<span class=\"descriptionNumberColor\">SPD%</span>&nbsp;",
              "statValue": {
                "displayLines": "(MDF_PropertyValue * Rank06_SpeedUp_Count)"
              }
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__326660748\">Sushang_P01</a>[<span class=\"descriptionNumberColor\">Dancing Blade</span>]",
      "stackType": "ReplaceByCaster",
      "modifierFlags": [
        "STAT_SpeedUp"
      ],
      "description": "SPD +<span class=\"descriptionNumberColor\">MDF_PropertyValue</span>.",
      "type": "Buff",
      "effectName": "SPD Boost",
      "statusName": "Dancing Blade",
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
      "for": "<a class=\"gModGreen\" id=\"mod__1886129975\">Sushang_PointB2_Bonus</a>[<span class=\"descriptionNumberColor\">Riposte</span>]",
      "stackType": "ReplaceByCaster",
      "description": "Increases Sword Stance DMG by <span class=\"descriptionNumberColor\">MDF_PropertyValue</span> for each stack, up to <span class=\"descriptionNumberColor\">MDF_Max_Layer</span> stack(s).",
      "type": "Buff",
      "statusName": "Riposte",
      "stackLimit": 10,
      "addStacksPerTrigger": 1
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1472874588\">Sushang_UltraBonus</a>[<span class=\"descriptionNumberColor\">Dawn Herald</span>]",
      "stackType": "ReplaceByCaster",
      "description": "Increases ATK by <span class=\"descriptionNumberColor\">MDF_PropertyValue</span> and receives 2 extra chances to trigger Sword Stance when using Skill.",
      "type": "Buff",
      "effectName": "ATK Boost",
      "statusName": "Dawn Herald",
      "execute": [
        {
          "eventTrigger": "When Modifier Destroyed/Removed",
          "execute": [
            {
              "name": "Update Displayed Energy Bar",
              "value": {
                "displayLines": "0"
              },
              "maximum": {
                "displayLines": "2"
              },
              "assignState": "True",
              "priorState": "Normal",
              "bar#": 3,
              "cooldown": 0
            }
          ]
        },
        {
          "eventTrigger": "Turn [Anyone]: End",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Current Turn Is",
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                }
              },
              "passed": [
                {
                  "name": "Define Custom Variable with Modifier Values",
                  "valueType": "LifeTime",
                  "variableName": "CurrentLifeTime",
                  "multiplier": {
                    "displayLines": "1"
                  }
                },
                {
                  "name": "Update Displayed Energy Bar",
                  "value": {
                    "displayLines": "CurrentLifeTime"
                  },
                  "maximum": {
                    "displayLines": "2"
                  },
                  "assignState": "True",
                  "priorState": "Active",
                  "bar#": 3,
                  "cooldown": 0
                }
              ]
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
              "propertyName": "&nbsp;<span class=\"descriptionNumberColor\">ATK%</span>&nbsp;",
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
      "for": "<a class=\"gModGreen\" id=\"mod__420113807\">Sushang_Trace_AggroDown</a>[<span class=\"descriptionNumberColor\">Guileless</span>]",
      "stackType": "ReplaceByCaster",
      "lifeCyclePhaseAllowed": "ModifierPhase1End",
      "description": "Lowers the chances of being attacked by enemies.",
      "type": "Buff",
      "effectName": "Aggro Chance Reduction",
      "statusName": "Guileless",
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
      "for": "<a class=\"gModGreen\" id=\"mod__136105164\">Sushang_LowHP_AggroDown</a>",
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
                  "modifier": "<a class=\"gModGreen\" id=\"420113807\">Sushang_Trace_AggroDown</a>[<span class=\"descriptionNumberColor\">Guileless</span>]",
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
                  "modifier": "<a class=\"gModGreen\" id=\"420113807\">Sushang_Trace_AggroDown</a>[<span class=\"descriptionNumberColor\">Guileless</span>]",
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
                  "modifier": "<a class=\"gModGreen\" id=\"420113807\">Sushang_Trace_AggroDown</a>[<span class=\"descriptionNumberColor\">Guileless</span>]",
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