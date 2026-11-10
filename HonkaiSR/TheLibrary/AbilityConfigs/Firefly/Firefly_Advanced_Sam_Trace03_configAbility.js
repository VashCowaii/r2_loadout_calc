const configAbility = {
  "fileName": "Firefly_Advanced_Sam_Trace03",
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
      "modifier": "<a class=\"gModGreen\" id=\"-1540560354\">Advanced_Sam_Trace03_BreakDamageAddedRatio</a>"
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1608282825\">Advanced_Sam_Trace03_BreakDamageAddedRatio_Sub</a>[<span class=\"descriptionNumberColor\">Module γ: Core Overload</span>]",
      "stackType": "ReplaceByCaster",
      "description": "Increases Break Effect by <span class=\"descriptionNumberColor\">MDF_PropertyValue2</span>.",
      "type": "Buff",
      "statusName": "Module γ: Core Overload",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Define Custom Variable",
              "value": {
                "displayLines": "&nbsp;<span class=\"descriptionFunctionColor\">FLOOR</span>((MDF_PropertyValue / 10))"
              },
              "variableName": "MDF_Multipler"
            },
            {
              "name": "Define Custom Variable",
              "value": {
                "displayLines": "(MDF_Multipler * 0.007999999)"
              },
              "variableName": "MDF_PropertyValue2"
            },
            {
              "name": "Stack Target Stat Value",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "propertyName": "&nbsp;<span class=\"descriptionNumberColor\">DamageBreakConverted</span>&nbsp;",
              "statValue": {
                "displayLines": "MDF_PropertyValue2"
              }
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1540560354\">Advanced_Sam_Trace03_BreakDamageAddedRatio</a>",
      "stackType": "ReplaceByCaster",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Use Custom Character Function",
              "functionName": "<a class=\"gTempYellow\" id=\"-1503863738\">Sam_Trace03_BreakDamageAddedRatio</a>"
            }
          ]
        }
      ],
      "modifierFunctions": [
        {
          "name": "CharacterFunctions",
          "functionName": "<a class=\"gTempYellow\" id=\"fun__-1503863738\">Sam_Trace03_BreakDamageAddedRatio</a>",
          "parse": [
            {
              "name": "Define Custom Variable with Stat",
              "variableName": "MDF_CurrentAttack",
              "readTarget": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "value": "&nbsp;<span class=\"descriptionNumberColor\">AttackSUM</span>&nbsp;"
            },
            {
              "name": "Define Custom Variable with Stat",
              "variableName": "MDF_CurrentAttackConvert",
              "readTarget": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "value": "&nbsp;<span class=\"descriptionNumberColor\">AttackConverted</span>&nbsp;"
            },
            {
              "name": "Define Custom Variable",
              "value": {
                "displayLines": "(MDF_CurrentAttack - MDF_CurrentAttackConvert)"
              },
              "variableName": "MDF_CurrentAttack2"
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "MDF_CurrentAttack2",
                "compareType": ">=",
                "value2": {
                  "displayLines": "(1800 + 10)"
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
                    "modifier": "<a class=\"gModGreen\" id=\"-1608282825\">Advanced_Sam_Trace03_BreakDamageAddedRatio_Sub</a>[<span class=\"descriptionNumberColor\">Module γ: Core Overload</span>]"
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-1608282825\">Advanced_Sam_Trace03_BreakDamageAddedRatio_Sub</a>[<span class=\"descriptionNumberColor\">Module γ: Core Overload</span>]",
                      "valuePerStack": {
                        "MDF_PropertyValue": {
                          "displayLines": "(MDF_CurrentAttack2 - 1800)"
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
                      "modifier": "<a class=\"gModGreen\" id=\"-1608282825\">Advanced_Sam_Trace03_BreakDamageAddedRatio_Sub</a>[<span class=\"descriptionNumberColor\">Module γ: Core Overload</span>]",
                      "valuePerStack": {
                        "MDF_PropertyValue": {
                          "displayLines": "(MDF_CurrentAttack2 - 1800)"
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
                  "modifier": "<a class=\"gModGreen\" id=\"-1608282825\">Advanced_Sam_Trace03_BreakDamageAddedRatio_Sub</a>[<span class=\"descriptionNumberColor\">Module γ: Core Overload</span>]"
                }
              ]
            }
          ]
        }
      ],
      "abilityValueChange": [
        {
          "name": "Ability Value Changes",
          "propertyName": "&nbsp;<span class=\"descriptionNumberColor\">ATK%</span>&nbsp;",
          "valueRanges": [
            {
              "name": "Variable Value Range Conditions",
              "onChange": [
                {
                  "name": "Use Custom Character Function",
                  "functionName": "<a class=\"gTempYellow\" id=\"-1503863738\">Sam_Trace03_BreakDamageAddedRatio</a>"
                }
              ]
            }
          ]
        },
        {
          "name": "Ability Value Changes",
          "propertyName": "&nbsp;<span class=\"descriptionNumberColor\">ATKFlat</span>&nbsp;",
          "valueRanges": [
            {
              "name": "Variable Value Range Conditions",
              "onChange": [
                {
                  "name": "Use Custom Character Function",
                  "functionName": "<a class=\"gTempYellow\" id=\"-1503863738\">Sam_Trace03_BreakDamageAddedRatio</a>"
                }
              ]
            }
          ]
        },
        {
          "name": "Ability Value Changes",
          "propertyName": "&nbsp;<span class=\"descriptionNumberColor\">AttackConverted</span>&nbsp;",
          "valueRanges": [
            {
              "name": "Variable Value Range Conditions",
              "onChange": [
                {
                  "name": "Use Custom Character Function",
                  "functionName": "<a class=\"gTempYellow\" id=\"-1503863738\">Sam_Trace03_BreakDamageAddedRatio</a>"
                }
              ]
            }
          ]
        }
      ]
    }
  ],
  "targetObjectData": {
    "primaryTarget": "{{Caster}}"
  }
}