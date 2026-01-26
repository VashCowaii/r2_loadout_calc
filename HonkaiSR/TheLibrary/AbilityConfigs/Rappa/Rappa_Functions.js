const configAbility = {
  "fileName": "Rappa_Functions",
  "abilityType": "Char. Functions",
  "energy": null,
  "toughnessList": [
    0,
    0,
    0
  ],
  "length": 1,
  "parse": [
    {
      "name": "CharacterFunctions",
      "functionName": "Template_Rappa_PassiveBreak",
      "parse": [
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "_PassiveBreakCount",
            "compareType": "<",
            "value2": {
              "operator": "Variables[0] (_PassiveBreakCountMax) || Variables[1] (_PassiveBreakCountBase) || SUB || RETURN",
              "displayLines": "(_PassiveBreakCountMax - _PassiveBreakCountBase)",
              "constants": [],
              "variables": [
                "_PassiveBreakCountMax",
                "_PassiveBreakCountBase"
              ]
            }
          },
          "passed": [
            {
              "name": "Define Custom Variable",
              "variableName": "_PassiveBreakCount",
              "value": {
                "operator": "Variables[0] (_PassiveBreakCount) || Constants[0] (1) || ADD || RETURN",
                "displayLines": "(_PassiveBreakCount + 1)",
                "constants": [
                  1
                ],
                "variables": [
                  "_PassiveBreakCount"
                ]
              }
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "Rappa_Break_Modifier_ForShow[<span class=\"descriptionNumberColor\">Ninja Tech: Endurance Gauge</span>]",
              "stackLimit": {
                "operator": "Variables[0] (_PassiveBreakCountMax) || RETURN",
                "displayLines": "_PassiveBreakCountMax",
                "constants": [],
                "variables": [
                  "_PassiveBreakCountMax"
                ]
              },
              "addStacksPerTrigger": 1
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Target",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "target2": {
              "name": "Target Name",
              "target": "{{Caster}}"
            }
          },
          "passed": [
            {
              "name": "Define Custom Variable",
              "variableName": "DV_Rappa_BreakCount",
              "value": {
                "operator": "Variables[0] (DV_Rappa_BreakCount) || Constants[0] (1) || ADD || RETURN",
                "displayLines": "(DV_Rappa_BreakCount + 1)",
                "constants": [
                  1
                ],
                "variables": [
                  "DV_Rappa_BreakCount"
                ]
              }
            }
          ]
        },
        {
          "name": "Define Custom Variable",
          "variableName": "DV_StockTempCount",
          "value": 0
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Trace Activated",
            "conditionList": "Ninjutsu Inscription: Sky High"
          },
          "passed": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Monster Rank",
                "target": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}"
                },
                "compareType": ">=",
                "value2": 3
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "DV_StockTempCount",
                  "value": {
                    "operator": "Variables[0] (_PassiveBreakCount) || Variables[1] (1) || ADD || RETURN",
                    "displayLines": "(_PassiveBreakCount + 1)",
                    "constants": [],
                    "variables": [
                      "_PassiveBreakCount",
                      1
                    ]
                  }
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "DV_StockTempCount",
                    "compareType": ">",
                    "value2": {
                      "operator": "Variables[0] (_PassiveBreakCountMax) || Variables[1] (_PassiveBreakCountBase) || SUB || RETURN",
                      "displayLines": "(_PassiveBreakCountMax - _PassiveBreakCountBase)",
                      "constants": [],
                      "variables": [
                        "_PassiveBreakCountMax",
                        "_PassiveBreakCountBase"
                      ]
                    }
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "Rappa_Break_Modifier_ForShow[<span class=\"descriptionNumberColor\">Ninja Tech: Endurance Gauge</span>]",
                      "stackLimit": {
                        "operator": "Variables[0] (_PassiveBreakCountMax) || RETURN",
                        "displayLines": "_PassiveBreakCountMax",
                        "constants": [],
                        "variables": [
                          "_PassiveBreakCountMax"
                        ]
                      },
                      "addStacksPerTrigger": {
                        "operator": "Variables[0] (_PassiveBreakCountMax) || Variables[1] (_PassiveBreakCountBase) || SUB || Variables[2] (_PassiveBreakCount) || SUB || RETURN",
                        "displayLines": "((_PassiveBreakCountMax - _PassiveBreakCountBase) - _PassiveBreakCount)",
                        "constants": [],
                        "variables": [
                          "_PassiveBreakCountMax",
                          "_PassiveBreakCountBase",
                          "_PassiveBreakCount"
                        ]
                      }
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "_PassiveBreakCount",
                      "value": {
                        "operator": "Variables[0] (_PassiveBreakCountMax) || Variables[1] (_PassiveBreakCountBase) || SUB || RETURN",
                        "displayLines": "(_PassiveBreakCountMax - _PassiveBreakCountBase)",
                        "constants": [],
                        "variables": [
                          "_PassiveBreakCountMax",
                          "_PassiveBreakCountBase"
                        ]
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
                      "modifier": "Rappa_Break_Modifier_ForShow[<span class=\"descriptionNumberColor\">Ninja Tech: Endurance Gauge</span>]",
                      "stackLimit": {
                        "operator": "Variables[0] (_PassiveBreakCountMax) || RETURN",
                        "displayLines": "_PassiveBreakCountMax",
                        "constants": [],
                        "variables": [
                          "_PassiveBreakCountMax"
                        ]
                      },
                      "addStacksPerTrigger": {
                        "operator": "Variables[0] (1) || RETURN",
                        "displayLines": "1",
                        "constants": [],
                        "variables": [
                          1
                        ]
                      }
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "_PassiveBreakCount",
                      "value": {
                        "operator": "Variables[0] (_PassiveBreakCount) || Variables[1] (1) || ADD || RETURN",
                        "displayLines": "(_PassiveBreakCount + 1)",
                        "constants": [],
                        "variables": [
                          "_PassiveBreakCount",
                          1
                        ]
                      }
                    }
                  ]
                },
                {
                  "name": "Update Energy",
                  "on": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "value": {
                    "operator": "Variables[0] (10) || RETURN",
                    "displayLines": "10",
                    "constants": [],
                    "variables": [
                      10
                    ]
                  },
                  "isFixed": "* ERR"
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