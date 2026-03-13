const configAbility = {
  "fileName": "EverGloriousMagicalGirl_Ability51291",
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
      "modifier": "<a class=\"gModGreen\" id=\"153004230\">Relic_129_Main</a>"
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-971304181\">Relic_129_Sub</a>[<span class=\"descriptionNumberColor\">Ever-Glorious Magical Girl</span>]",
      "stackType": "ReplaceByCaster",
      "execute": [
        {
          "eventTrigger": "Deal Damage Start [Owner]: Any",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Attack Type",
                "attackTypes": [
                  "Elation DMG"
                ]
              },
              "passed": [
                {
                  "name": "Adjust Target Stats",
                  "modifiedValuesArray": [
                    {
                      "on": "Defender",
                      "statName": "&nbsp;<span class=\"descriptionNumberColor\">DEF%</span>&nbsp;",
                      "value": "(-1 * _DefenceAddRatio)"
                    }
                  ]
                }
              ]
            }
          ]
        }
      ],
      "description": "Elation DMG dealt ignores <span class=\"descriptionNumberColor\">_DefenceAddRatio</span> of the target's DEF.",
      "type": "Buff",
      "statusName": "Ever-Glorious Magical Girl"
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__153004230\">Relic_129_Main</a>",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Declare Custom Variable",
              "variableName": "Temp_ChangeValue"
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "Temp_ChangeValue",
                "compareType": ">",
                "value2": 0
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "All_ChangeValue",
                  "value": {
                    "operator": "Variables[0] (All_ChangeValue) || Variables[1] (Temp_ChangeValue) || ADD || RETURN",
                    "displayLines": "(All_ChangeValue + Temp_ChangeValue)",
                    "constants": [],
                    "variables": [
                      "All_ChangeValue",
                      "Temp_ChangeValue"
                    ]
                  }
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "Add_Layer",
                  "value": {
                    "operator": "Variables[0] (FLOOR) || Variables[1] (All_ChangeValue) || Variables[2] (5) || DIV || PARAM_1 || FUNCTION || RETURN",
                    "displayLines": "&nbsp;<span class=\"descriptionFunctionColor\">FLOOR</span>((All_ChangeValue / 5))",
                    "constants": [],
                    "variables": [
                      "FLOOR",
                      "All_ChangeValue",
                      5
                    ]
                  }
                }
              ]
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "Add_Layer",
                "compareType": ">",
                "value2": {
                  "operator": "Variables[0] (10) || RETURN",
                  "displayLines": "10",
                  "constants": [],
                  "variables": [
                    10
                  ]
                }
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "Add_Layer",
                  "value": {
                    "operator": "Variables[0] (10) || RETURN",
                    "displayLines": "10",
                    "constants": [],
                    "variables": [
                      10
                    ]
                  }
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "_MaxFlag",
                  "value": 1
                }
              ]
            },
            {
              "name": "Define Custom Variable",
              "variableName": "_DefenceAddRatio",
              "value": {
                "operator": "Variables[0] (0.1) || Variables[1] (0.01) || Variables[2] (Add_Layer) || MUL || ADD || RETURN",
                "displayLines": "(0.1 + (0.01 * Add_Layer))",
                "constants": [],
                "variables": [
                  0.1,
                  0.01,
                  "Add_Layer"
                ]
              }
            }
          ]
        }
      ],
      "elationValueChange": [
        {
          "name": "Variable Value Range Conditions",
          "whenValueChanges": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "_MaxFlag",
                "compareType": "=",
                "value2": 0
              },
              "passed": [
                {
                  "name": "Define Custom Variable with Changes to Stats",
                  "variableName": "Temp_ChangeValue"
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "Temp_ChangeValue",
                    "compareType": ">",
                    "value2": 0
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "All_ChangeValue",
                      "value": {
                        "operator": "Variables[0] (All_ChangeValue) || Variables[1] (Temp_ChangeValue) || ADD || RETURN",
                        "displayLines": "(All_ChangeValue + Temp_ChangeValue)",
                        "constants": [],
                        "variables": [
                          "All_ChangeValue",
                          "Temp_ChangeValue"
                        ]
                      }
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "Add_Layer",
                      "value": {
                        "operator": "Variables[0] (FLOOR) || Variables[1] (All_ChangeValue) || Variables[2] (5) || DIV || PARAM_1 || FUNCTION || RETURN",
                        "displayLines": "&nbsp;<span class=\"descriptionFunctionColor\">FLOOR</span>((All_ChangeValue / 5))",
                        "constants": [],
                        "variables": [
                          "FLOOR",
                          "All_ChangeValue",
                          5
                        ]
                      }
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "Add_Layer",
                    "compareType": ">",
                    "value2": {
                      "operator": "Variables[0] (10) || RETURN",
                      "displayLines": "10",
                      "constants": [],
                      "variables": [
                        10
                      ]
                    }
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "Add_Layer",
                      "value": {
                        "operator": "Variables[0] (10) || RETURN",
                        "displayLines": "10",
                        "constants": [],
                        "variables": [
                          10
                        ]
                      }
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "_MaxFlag",
                      "value": 1
                    }
                  ]
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "_DefenceAddRatio",
                  "value": {
                    "operator": "Variables[0] (0.1) || Variables[1] (0.01) || Variables[2] (Add_Layer) || MUL || ADD || RETURN",
                    "displayLines": "(0.1 + (0.01 * Add_Layer))",
                    "constants": [],
                    "variables": [
                      0.1,
                      0.01,
                      "Add_Layer"
                    ]
                  }
                }
              ]
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": [],
      "subModList": [
        {
          "name": "Add Sub-Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}} +{{Caster's Memosprite}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-971304181\">Relic_129_Sub</a>[<span class=\"descriptionNumberColor\">Ever-Glorious Magical Girl</span>]",
          "haloStatus": true
        }
      ]
    }
  ],
  "isLightcone": true,
  "isRelic": true,
  "desc": [
    "Increases CRIT DMG by 16%.",
    "The Elation DMG dealt by the wearer and their memosprites ignores 10% of targets' DEF. For every 5 accumulated Punchline allies gain, the Elation DMG dealt additionally ignores 1% of targets' DEF, stacking up to 10 time(s)."
  ],
  "params": [
    [
      0.16
    ],
    [
      0.1,
      5,
      0.01,
      10
    ]
  ]
}