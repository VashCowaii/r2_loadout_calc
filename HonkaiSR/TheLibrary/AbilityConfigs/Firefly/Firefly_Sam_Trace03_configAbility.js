const configAbility = {
  "fileName": "Firefly_Sam_Trace03",
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
      "modifier": "Sam_Trace03_BreakDamageAddedRatio"
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "Sam_Trace03_BreakDamageAddedRatio_Sub[<span class=\"descriptionNumberColor\">Module γ: Core Overload</span>]",
      "stackType": "ReplaceByCaster",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Define Custom Variable",
              "variableName": "MDF_Multipler",
              "value": {
                "operator": "Variables[0] (FLOOR) || Variables[1] (MDF_PropertyValue) || Variables[2] (10) || DIV || PARAM_1 || FUNCTION || RETURN",
                "displayLines": "&nbsp;<span class=\"descriptionFunctionColor\">FLOOR</span>((MDF_PropertyValue / 10))",
                "constants": [],
                "variables": [
                  "FLOOR",
                  "MDF_PropertyValue",
                  10
                ]
              }
            },
            {
              "name": "Define Custom Variable",
              "variableName": "MDF_PropertyValue2",
              "value": {
                "operator": "Variables[0] (MDF_Multipler) || Variables[1] (0.007999999) || MUL || RETURN",
                "displayLines": "(MDF_Multipler * 0.007999999)",
                "constants": [],
                "variables": [
                  "MDF_Multipler",
                  0.007999999
                ]
              }
            },
            {
              "name": "Stack Target Stat Value",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageBreakConverted</span>&nbsp;",
              "value": {
                "operator": "Variables[0] (MDF_PropertyValue2) || RETURN",
                "displayLines": "MDF_PropertyValue2",
                "constants": [],
                "variables": [
                  "MDF_PropertyValue2"
                ]
              }
            }
          ]
        }
      ],
      "description": "Increases Break Effect by <span class=\"descriptionNumberColor\">MDF_PropertyValue2</span>.",
      "type": "Buff",
      "statusName": "Module γ: Core Overload"
    },
    {
      "name": "Modifier Construction",
      "for": "Sam_Trace03_BreakDamageAddedRatio",
      "stackType": "ReplaceByCaster",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Use Custom Character Function",
              "functionName": "Sam_Trace03_BreakDamageAddedRatio"
            }
          ]
        }
      ],
      "abilityValueChange": [
        {
          "name": "Ability Value Changes",
          "variableName": "&nbsp;<span class=\"descriptionNumberColor\">ATK%</span>&nbsp;",
          "valueRanges": [
            {
              "name": "Variable Value Range Conditions",
              "whenValueChanges": [
                {
                  "name": "Use Custom Character Function",
                  "functionName": "Sam_Trace03_BreakDamageAddedRatio"
                }
              ]
            }
          ]
        },
        {
          "name": "Ability Value Changes",
          "variableName": "&nbsp;<span class=\"descriptionNumberColor\">ATKFlat</span>&nbsp;",
          "valueRanges": [
            {
              "name": "Variable Value Range Conditions",
              "whenValueChanges": [
                {
                  "name": "Use Custom Character Function",
                  "functionName": "Sam_Trace03_BreakDamageAddedRatio"
                }
              ]
            }
          ]
        },
        {
          "name": "Ability Value Changes",
          "variableName": "&nbsp;<span class=\"descriptionNumberColor\">AttackConverted</span>&nbsp;",
          "valueRanges": [
            {
              "name": "Variable Value Range Conditions",
              "whenValueChanges": [
                {
                  "name": "Use Custom Character Function",
                  "functionName": "Sam_Trace03_BreakDamageAddedRatio"
                }
              ]
            }
          ]
        }
      ],
      "modifierFunctions": [
        {
          "name": "CharacterFunctions",
          "functionName": "Sam_Trace03_BreakDamageAddedRatio",
          "parse": [
            {
              "name": "Define Custom Variable with Stat",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "variableName": "MDF_CurrentAttack",
              "value": "&nbsp;<span class=\"descriptionNumberColor\">AttackSUM</span>&nbsp;"
            },
            {
              "name": "Define Custom Variable with Stat",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "variableName": "MDF_CurrentAttackConvert",
              "value": "&nbsp;<span class=\"descriptionNumberColor\">AttackConverted</span>&nbsp;"
            },
            {
              "name": "Define Custom Variable",
              "variableName": "MDF_CurrentAttack2",
              "value": {
                "operator": "Variables[0] (MDF_CurrentAttack) || Variables[1] (MDF_CurrentAttackConvert) || SUB || RETURN",
                "displayLines": "(MDF_CurrentAttack - MDF_CurrentAttackConvert)",
                "constants": [],
                "variables": [
                  "MDF_CurrentAttack",
                  "MDF_CurrentAttackConvert"
                ]
              }
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "MDF_CurrentAttack2",
                "compareType": ">=",
                "value2": {
                  "operator": "Variables[0] (1800) || Variables[1] (10) || ADD || RETURN",
                  "displayLines": "(1800 + 10)",
                  "constants": [],
                  "variables": [
                    1800,
                    10
                  ]
                }
              },
              "passed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "modifier": "Sam_Trace03_BreakDamageAddedRatio_Sub[<span class=\"descriptionNumberColor\">Module γ: Core Overload</span>]"
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "Sam_Trace03_BreakDamageAddedRatio_Sub[<span class=\"descriptionNumberColor\">Module γ: Core Overload</span>]",
                      "valuePerStack": {
                        "MDF_PropertyValue": {
                          "operator": "Variables[0] (MDF_CurrentAttack2) || Variables[1] (1800) || SUB || RETURN",
                          "displayLines": "(MDF_CurrentAttack2 - 1800)",
                          "constants": [],
                          "variables": [
                            "MDF_CurrentAttack2",
                            1800
                          ]
                        }
                      }
                    }
                  ],
                  "failed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "Sam_Trace03_BreakDamageAddedRatio_Sub[<span class=\"descriptionNumberColor\">Module γ: Core Overload</span>]",
                      "valuePerStack": {
                        "MDF_PropertyValue": {
                          "operator": "Variables[0] (MDF_CurrentAttack2) || Variables[1] (1800) || SUB || RETURN",
                          "displayLines": "(MDF_CurrentAttack2 - 1800)",
                          "constants": [],
                          "variables": [
                            "MDF_CurrentAttack2",
                            1800
                          ]
                        }
                      }
                    }
                  ]
                }
              ],
              "failed": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "Sam_Trace03_BreakDamageAddedRatio_Sub[<span class=\"descriptionNumberColor\">Module γ: Core Overload</span>]"
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