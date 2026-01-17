const configAbility = {
  "fileName": "RuanMei_RuanMei_Ability02_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "RuanMei_Ability02_Area",
      "duration": {
        "operator": "Variables[0] (3) || RETURN",
        "displayLines": "3",
        "constants": [],
        "variables": [
          3
        ]
      }
    },
    {
      "name": "Update Displayed Energy Bar",
      "value": {
        "operator": "Variables[0] (3) || RETURN",
        "displayLines": "3",
        "constants": [],
        "variables": [
          3
        ]
      },
      "maximum": {
        "operator": "Variables[0] (3) || RETURN",
        "displayLines": "3",
        "constants": [],
        "variables": [
          3
        ]
      },
      "assignState": "True",
      "priorState": "Active",
      "bar#": 3,
      "cooldown": 0
    },
    {
      "name": "Update Energy",
      "on": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "valuePercent": 1,
      "ofAbilitySplit": true,
      "isFixed": "* ERR"
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Has Modifier",
        "target": {
          "name": "Target Name",
          "target": "{{Caster}}"
        },
        "modifier": "RuanMei_Maze_Modifier"
      },
      "passed": [
        {
          "name": "Update Ability Properties",
          "propertyList": [
            {
              "name": "Ability Property Action",
              "propertyName": "Skill Point Cost",
              "propertyAction": "Reset to Default"
            }
          ]
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "RuanMei_Maze_Modifier"
        }
      ]
    },
    "Trigger: Ability End"
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "RuanMei_Ability02_Area_Caster[<span class=\"descriptionNumberColor\">Overtone</span>]",
      "stackType": "ReplaceByCaster",
      "lifeCyclePhaseAllowed": "ModifierPhase1End",
      "variableValueChange": [
        {
          "name": "Variable Value Changes",
          "variableName": "MDF_LifeTime",
          "valueRanges": [
            {
              "name": "Variable Value Range Conditions",
              "whenValueChanges": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "Change_In_Current_Value",
                    "compareType": ">",
                    "value2": 0
                  },
                  "passed": [
                    {
                      "name": "Define Modifier Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifierName": "RuanMei_Ability02_Area",
                      "value": {
                        "operator": "Variables[0] (MDF_LifeTime) || RETURN",
                        "displayLines": "MDF_LifeTime",
                        "constants": [],
                        "variables": [
                          "MDF_LifeTime"
                        ]
                      },
                      "valueType": "Duration"
                    },
                    {
                      "name": "Update Displayed Energy Bar",
                      "value": {
                        "operator": "Variables[0] (MDF_LifeTime) || RETURN",
                        "displayLines": "MDF_LifeTime",
                        "constants": [],
                        "variables": [
                          "MDF_LifeTime"
                        ]
                      }
                    }
                  ]
                }
              ]
            }
          ]
        }
      ],
      "description": "DMG dealt increases by <span class=\"descriptionNumberColor\">Skill02_P1_DamageAddedRatioFinal</span>. Weakness Break Efficiency increases by <span class=\"descriptionNumberColor\">#Skill02_P2_StanceBreakAddedRatio</span>.",
      "type": "Buff",
      "effectName": "Boost DMG and Weakness Break Efficiency",
      "statusName": "Overtone"
    },
    {
      "name": "Modifier Construction",
      "for": "RuanMei_Ability02_StanceBreakAdded",
      "stackType": "Refresh",
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
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageBreakEfficiency</span>&nbsp;",
              "value": {
                "operator": "Variables[0] (Ability02_StanceBreakAddedRatio) || RETURN",
                "displayLines": "Ability02_StanceBreakAddedRatio",
                "constants": [],
                "variables": [
                  "Ability02_StanceBreakAddedRatio"
                ]
              }
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "RuanMei_Ability02_Area",
      "stackType": "ReplaceByCaster",
      "lifeCyclePhaseAllowed": "ModifierPhase1End",
      "execute": [
        {
          "eventTrigger": "When Modifier Destroyed/Removed",
          "execute": [
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{All Team Members with Unselectables}}"
              },
              "modifier": "RuanMei_Ability02_DamageUp"
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{All Team Members with Unselectables}}"
              },
              "modifier": "RuanMei_Ability02_StanceBreakAdded"
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{All Team Members with Unselectables}}"
              },
              "modifier": "RuanMei_Ability02_Eidolon1_AttackUp"
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{All Team Members with Unselectables}}"
              },
              "modifier": "RuanMei_Ability02_Area_Caster[<span class=\"descriptionNumberColor\">Overtone</span>]"
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{All Team Members with Unselectables}}"
              },
              "modifier": "RuanMei_Ability02_Area_Friend[<span class=\"descriptionNumberColor\">Overtone</span>]"
            }
          ]
        },
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{All Team Members with Unselectables}}"
              },
              "modifier": "RuanMei_Ability02_DamageUp"
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{All Team Members with Unselectables}}"
              },
              "modifier": "RuanMei_Ability02_StanceBreakAdded",
              "valuePerStack": {
                "Ability02_StanceBreakAddedRatio": {
                  "operator": "Variables[0] (0.5) || RETURN",
                  "displayLines": "0.5",
                  "constants": [],
                  "variables": [
                    0.5
                  ]
                }
              }
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "RuanMei_Ability02_Area_Caster[<span class=\"descriptionNumberColor\">Overtone</span>]",
              "duration": {
                "operator": "Variables[0] (3) || RETURN",
                "displayLines": "3",
                "constants": [],
                "variables": [
                  3
                ]
              }
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{All Team Members with Unselectable Team Members(Exclude Self)}}"
              },
              "modifier": "RuanMei_Ability02_Area_Friend[<span class=\"descriptionNumberColor\">Overtone</span>]",
              "valuePerStack": {
                "Ability02_P1_DamageAddedRatio_Friend": {
                  "operator": "Variables[0] (Skill02_P1_DamageAddedRatioFinal) || RETURN",
                  "displayLines": "Skill02_P1_DamageAddedRatioFinal",
                  "constants": [],
                  "variables": [
                    "Skill02_P1_DamageAddedRatioFinal"
                  ]
                },
                "Ability02_P2_StanceBreakAddedRatio_Friend": {
                  "operator": "Variables[0] (0.5) || RETURN",
                  "displayLines": "0.5",
                  "constants": [],
                  "variables": [
                    0.5
                  ]
                }
              }
            }
          ]
        },
        {
          "eventTrigger": "Entity Created [Anyone]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Is Part Of",
                "of": {
                  "name": "Target Name",
                  "target": "{{All Team Members with Unselectables}}"
                },
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "mustBeAlive2": true
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "RuanMei_Ability02_DamageUp"
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "RuanMei_Ability02_StanceBreakAdded",
                  "valuePerStack": {
                    "Ability02_StanceBreakAddedRatio": {
                      "operator": "Variables[0] (0.5) || RETURN",
                      "displayLines": "0.5",
                      "constants": [],
                      "variables": [
                        0.5
                      ]
                    }
                  }
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "RuanMei_Ability02_Area_Friend[<span class=\"descriptionNumberColor\">Overtone</span>]",
                  "valuePerStack": {
                    "Ability02_P1_DamageAddedRatio_Friend": {
                      "operator": "Variables[0] (Skill02_P1_DamageAddedRatioFinal) || RETURN",
                      "displayLines": "Skill02_P1_DamageAddedRatioFinal",
                      "constants": [],
                      "variables": [
                        "Skill02_P1_DamageAddedRatioFinal"
                      ]
                    },
                    "Ability02_P2_StanceBreakAddedRatio_Friend": {
                      "operator": "Variables[0] (0.5) || RETURN",
                      "displayLines": "0.5",
                      "constants": [],
                      "variables": [
                        0.5
                      ]
                    }
                  }
                }
              ]
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": []
    }
  ]
}