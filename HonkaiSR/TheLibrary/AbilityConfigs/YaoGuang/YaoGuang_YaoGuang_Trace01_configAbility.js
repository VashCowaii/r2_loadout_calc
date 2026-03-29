const configAbility = {
  "fileName": "YaoGuang_YaoGuang_Trace01",
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
      "modifier": "<a class=\"gModGreen\" id=\"1026681285\">YaoGuang_Trace01</a>"
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1286933987\">YaoGuang_Trace01_Effect</a>",
      "stackType": "Replace",
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
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">ElationDMGAll</span>&nbsp;",
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
      "for": "<a class=\"gModGreen\" id=\"mod__1026681285\">YaoGuang_Trace01</a>",
      "stackType": "ReplaceByCaster",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Define Custom Variable with Stat",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "variableName": "_CurrentSpeed",
              "value": "&nbsp;<span class=\"descriptionNumberColor\">Speed</span>&nbsp;"
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "target": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}"
                },
                "value1": "_CurrentSpeed",
                "compareType": ">=",
                "value2": {
                  "operator": "Variables[0] (120) || RETURN",
                  "displayLines": "120",
                  "constants": [],
                  "variables": [
                    120
                  ]
                }
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "_EPRatioBase",
                  "value": {
                    "operator": "Variables[0] (0.3) || RETURN",
                    "displayLines": "0.3",
                    "constants": [],
                    "variables": [
                      0.3
                    ]
                  }
                },
                {
                  "name": "Define Custom Variable with Stat",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "variableName": "_CurrentSpeedConvert",
                  "value": "&nbsp;<span class=\"descriptionNumberColor\">SpeedConverted</span>&nbsp;"
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "_CurrentSpeed",
                  "value": {
                    "operator": "Variables[0] (_CurrentSpeed) || Variables[1] (_CurrentSpeedConvert) || SUB || RETURN",
                    "displayLines": "(_CurrentSpeed - _CurrentSpeedConvert)",
                    "constants": [],
                    "variables": [
                      "_CurrentSpeed",
                      "_CurrentSpeedConvert"
                    ]
                  }
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "_OverCountSpeedValue",
                  "value": {
                    "operator": "Variables[0] (_CurrentSpeed) || Variables[1] (120) || SUB || RETURN",
                    "displayLines": "(_CurrentSpeed - 120)",
                    "constants": [],
                    "variables": [
                      "_CurrentSpeed",
                      120
                    ]
                  }
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "_OverCountSpeedValue",
                    "compareType": ">=",
                    "value2": {
                      "operator": "Variables[0] (200) || RETURN",
                      "displayLines": "200",
                      "constants": [],
                      "variables": [
                        200
                      ]
                    }
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "_OverCountSpeedValue",
                      "value": {
                        "operator": "Variables[0] (200) || RETURN",
                        "displayLines": "200",
                        "constants": [],
                        "variables": [
                          200
                        ]
                      }
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "_OverCountSpeedValue",
                    "compareType": ">=",
                    "value2": {
                      "operator": "Variables[0] (1) || RETURN",
                      "displayLines": "1",
                      "constants": [],
                      "variables": [
                        1
                      ]
                    }
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "_EPRatioAdd",
                      "value": {
                        "operator": "Variables[0] (FLOOR) || Variables[1] (_OverCountSpeedValue) || Variables[2] (1) || DIV || PARAM_1 || FUNCTION || Variables[3] (0.01) || MUL || RETURN",
                        "displayLines": "(&nbsp;<span class=\"descriptionFunctionColor\">FLOOR</span>((_OverCountSpeedValue / 1)) * 0.01)",
                        "constants": [],
                        "variables": [
                          "FLOOR",
                          "_OverCountSpeedValue",
                          1,
                          0.01
                        ]
                      }
                    }
                  ],
                  "failed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "_EPRatioAdd",
                      "value": 0
                    }
                  ]
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1286933987\">YaoGuang_Trace01_Effect</a>",
                  "valuePerStack": {
                    "MDF_PropertyValue": {
                      "operator": "Variables[0] (_EPRatioBase) || Variables[1] (_EPRatioAdd) || ADD || RETURN",
                      "displayLines": "(_EPRatioBase + _EPRatioAdd)",
                      "constants": [],
                      "variables": [
                        "_EPRatioBase",
                        "_EPRatioAdd"
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
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1286933987\">YaoGuang_Trace01_Effect</a>"
                }
              ]
            }
          ]
        }
      ],
      "abilityValueChange": [
        {
          "name": "Ability Value Changes",
          "variableName": "&nbsp;<span class=\"descriptionNumberColor\">SPD%</span>&nbsp;",
          "valueRanges": [
            {
              "name": "Variable Value Range Conditions",
              "whenValueChanges": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1026681285\">YaoGuang_Trace01</a>"
                }
              ]
            }
          ]
        },
        {
          "name": "Ability Value Changes",
          "variableName": "&nbsp;<span class=\"descriptionNumberColor\">SPDFlat</span>&nbsp;",
          "valueRanges": [
            {
              "name": "Variable Value Range Conditions",
              "whenValueChanges": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1026681285\">YaoGuang_Trace01</a>"
                }
              ]
            }
          ]
        },
        {
          "name": "Ability Value Changes",
          "variableName": "&nbsp;<span class=\"descriptionNumberColor\">SpeedConverted</span>&nbsp;",
          "valueRanges": [
            {
              "name": "Variable Value Range Conditions",
              "whenValueChanges": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1026681285\">YaoGuang_Trace01</a>"
                }
              ]
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": []
    }
  ],
  "targetObjectData": {
    "primaryTarget": "{{Caster}}"
  }
}