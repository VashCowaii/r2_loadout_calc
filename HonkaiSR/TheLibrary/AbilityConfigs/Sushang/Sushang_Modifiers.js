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
      "for": "Sushang_Eidolon2_Bonus[<span class=\"descriptionNumberColor\">Refine in Toil</span>]",
      "stackType": "ReplaceByCaster",
      "lifeCyclePhaseAllowed": "ModifierPhase1End",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Stack Target Stat Value",
              "target": "Owner of this Modifier",
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageReduction</span>&nbsp;",
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
      "description": "DMG taken -<span class=\"descriptionNumberColor\">MDF_PropertyValue</span>.",
      "type": "Buff",
      "effectName": "DMG Mitigation",
      "statusName": "Refine in Toil"
    },
    {
      "name": "Modifier Construction",
      "for": "Sushang_P01_Eidolon6[<span class=\"descriptionNumberColor\">Dancing Blade</span>]",
      "stackType": "ReplaceByCaster",
      "modifierFlags": [
        "STAT_SpeedUp"
      ],
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Define Custom Variable with Modifier Values",
              "target": "Owner of this Modifier",
              "valueType": "Layer",
              "variableName": "Rank06_SpeedUp_Count",
              "modifierName": "Sushang_P01_Eidolon6[<span class=\"descriptionNumberColor\">Dancing Blade</span>]",
              "multiplier": 1
            },
            {
              "name": "Stack Target Stat Value",
              "target": "Owner of this Modifier",
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">SPD%</span>&nbsp;",
              "value": {
                "operator": "Variables[0] (MDF_PropertyValue) || Variables[1] (Rank06_SpeedUp_Count) || MUL || RETURN",
                "displayLines": "(MDF_PropertyValue * Rank06_SpeedUp_Count)",
                "constants": [],
                "variables": [
                  "MDF_PropertyValue",
                  "Rank06_SpeedUp_Count"
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
      "description": "Each stack increases SPD by <span class=\"descriptionNumberColor\">MDF_PropertyValue</span>.",
      "type": "Buff",
      "effectName": "SPD Boost",
      "statusName": "Dancing Blade",
      "stackLimit": 2,
      "addStacksPerTrigger": 1
    },
    {
      "name": "Modifier Construction",
      "for": "Sushang_P01[<span class=\"descriptionNumberColor\">Dancing Blade</span>]",
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
              "target": "Owner of this Modifier",
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
      "stackData": [
        "MDF_PropertyValue"
      ],
      "latentQueue": [],
      "description": "SPD +<span class=\"descriptionNumberColor\">MDF_PropertyValue</span>.",
      "type": "Buff",
      "effectName": "SPD Boost",
      "statusName": "Dancing Blade"
    },
    {
      "name": "Modifier Construction",
      "for": "Sushang_PointB2_Bonus[<span class=\"descriptionNumberColor\">Riposte</span>]",
      "stackType": "ReplaceByCaster",
      "stackData": [
        "MDF_PropertyValue",
        "MDF_Max_Layer"
      ],
      "latentQueue": [],
      "description": "Increases Sword Stance DMG by <span class=\"descriptionNumberColor\">MDF_PropertyValue</span> for each stack, up to <span class=\"descriptionNumberColor\">MDF_Max_Layer</span> stack(s).",
      "type": "Buff",
      "statusName": "Riposte",
      "stackLimit": 10,
      "addStacksPerTrigger": 1
    },
    {
      "name": "Modifier Construction",
      "for": "Sushang_UltraBonus[<span class=\"descriptionNumberColor\">Dawn Herald</span>]",
      "stackType": "ReplaceByCaster",
      "execute": [
        {
          "eventTrigger": "When Modifier Destroyed/Removed",
          "execute": [
            {
              "name": "Update Displayed Energy Bar",
              "value": {
                "operator": "Constants[0] (0) || RETURN",
                "displayLines": "0",
                "constants": [
                  0
                ],
                "variables": []
              },
              "maximum": {
                "operator": "Variables[0] (2) || RETURN",
                "displayLines": "2",
                "constants": [],
                "variables": [
                  2
                ]
              },
              "assignState": "True",
              "priorState": "Normal",
              "bar#": 3,
              "cooldown": 0
            }
          ]
        },
        {
          "eventTrigger": "Turn End [Anyone]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Current Turn Is",
                "target": "Caster"
              },
              "passed": [
                {
                  "name": "Define Custom Variable with Modifier Values",
                  "valueType": "LifeTime",
                  "variableName": "CurrentLifeTime",
                  "multiplier": {
                    "operator": "Constants[0] (1) || RETURN",
                    "displayLines": "1",
                    "constants": [
                      1
                    ],
                    "variables": []
                  }
                },
                {
                  "name": "Update Displayed Energy Bar",
                  "value": {
                    "operator": "Variables[0] (CurrentLifeTime) || RETURN",
                    "displayLines": "CurrentLifeTime",
                    "constants": [],
                    "variables": [
                      "CurrentLifeTime"
                    ]
                  },
                  "maximum": {
                    "operator": "Variables[0] (2) || RETURN",
                    "displayLines": "2",
                    "constants": [],
                    "variables": [
                      2
                    ]
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
              "target": "Owner of this Modifier",
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">ATK%</span>&nbsp;",
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
      "description": "Increases ATK by <span class=\"descriptionNumberColor\">MDF_PropertyValue</span> and receives 2 extra chances to trigger Sword Stance when using Skill.",
      "type": "Buff",
      "effectName": "ATK Boost",
      "statusName": "Dawn Herald"
    },
    {
      "name": "Modifier Construction",
      "for": "Sushang_Trace_AggroDown[<span class=\"descriptionNumberColor\">Guileless</span>]",
      "stackType": "ReplaceByCaster",
      "lifeCyclePhaseAllowed": "ModifierPhase1End",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Stack Target Stat Value",
              "target": "Owner of this Modifier",
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
      ],
      "description": "Lowers the chances of being attacked by enemies.",
      "type": "Buff",
      "effectName": "Aggro Chance Reduction",
      "statusName": "Guileless"
    },
    {
      "name": "Modifier Construction",
      "for": "Sushang_LowHP_AggroDown",
      "stackType": "ReplaceByCaster",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "target": "Owner of this Modifier",
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
                  "to": "Owner of this Modifier",
                  "modifier": "Sushang_Trace_AggroDown[<span class=\"descriptionNumberColor\">Guileless</span>]",
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
                "target": "Owner of this Modifier",
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
                  "to": "Owner of this Modifier",
                  "modifier": "Sushang_Trace_AggroDown[<span class=\"descriptionNumberColor\">Guileless</span>]",
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
                  "to": "Owner of this Modifier",
                  "modifier": "Sushang_Trace_AggroDown[<span class=\"descriptionNumberColor\">Guileless</span>]",
                  "onlyRemoveOwnersInstance": true
                }
              ]
            }
          ]
        }
      ],
      "stackData": [
        "MDF_HPRatio",
        "MDF_AggroDown"
      ],
      "latentQueue": []
    }
  ],
  "references": []
}