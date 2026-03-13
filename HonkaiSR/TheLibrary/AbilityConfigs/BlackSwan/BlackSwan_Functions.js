const configAbility = {
  "fileName": "BlackSwan_Functions",
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
      "functionName": "<a class=\"gTempYellow\" id=\"fun__632471047\">function_Advanced_BlackSwan_AddDOT</a>",
      "parse": [
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Function's Target List}}"
          },
          "includeDyingTargets": true,
          "ifTargetFound": [
            {
              "name": "Define Custom Variable",
              "variableName": "Result_Stack_Layer",
              "value": {
                "operator": "Variables[0] (parameter[0]_AddLayer) || RETURN",
                "displayLines": "parameter[0]_AddLayer",
                "constants": [],
                "variables": [
                  "parameter[0]_AddLayer"
                ]
              }
            },
            {
              "name": "Looped Event",
              "maxLoops": {
                "operator": "Variables[0] (parameter[0]_AddLayer) || RETURN",
                "displayLines": "parameter[0]_AddLayer",
                "constants": [],
                "variables": [
                  "parameter[0]_AddLayer"
                ]
              },
              "Event": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"803699563\">Advanced_BlackSwan_DOT_Enhance</a>[<span class=\"descriptionNumberColor\">Epiphany</span>]"
                      },
                      {
                        "name": "Random Chance",
                        "chance": {
                          "operator": "Variables[0] (0.5) || RETURN",
                          "displayLines": "0.5",
                          "constants": [],
                          "variables": [
                            0.5
                          ]
                        }
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "Result_Stack_Layer",
                      "value": {
                        "operator": "Variables[0] (Result_Stack_Layer) || Constants[0] (1) || ADD || RETURN",
                        "displayLines": "(Result_Stack_Layer + 1)",
                        "constants": [
                          1
                        ],
                        "variables": [
                          "Result_Stack_Layer"
                        ]
                      }
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Eidolon Activated",
                    "eidolon": 6
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "Result_Stack_Layer",
                      "value": {
                        "operator": "Variables[0] (Result_Stack_Layer) || Variables[1] (1) || ADD || RETURN",
                        "displayLines": "(Result_Stack_Layer + 1)",
                        "constants": [],
                        "variables": [
                          "Result_Stack_Layer",
                          1
                        ]
                      }
                    }
                  ]
                }
              ]
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"-1945456695\">M_Advanced_BlackSwan_ForbidEffectFlag</a>",
                "justAddedOrActive": true
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"866598290\">Advanced_BlackSwan_DOT</a>[<span class=\"descriptionNumberColor\">Arcana</span>]",
                  "baseChance": {
                    "operator": "Variables[0] (parameter[1]_Chance) || RETURN",
                    "displayLines": "parameter[1]_Chance",
                    "constants": [],
                    "variables": [
                      "parameter[1]_Chance"
                    ]
                  },
                  "stackLimit": {
                    "operator": "Variables[0] (Max_DOT_Layer) || RETURN",
                    "displayLines": "Max_DOT_Layer",
                    "constants": [],
                    "variables": [
                      "Max_DOT_Layer"
                    ]
                  },
                  "valuePerStack": {
                    "Basic_DamagePercentage": {
                      "operator": "Variables[0] (2.4) || RETURN",
                      "displayLines": "2.4",
                      "constants": [],
                      "variables": [
                        2.4
                      ]
                    },
                    "ExtraLayer_DamagePercentage": {
                      "operator": "Variables[0] (0.12) || RETURN",
                      "displayLines": "0.12",
                      "constants": [],
                      "variables": [
                        0.12
                      ]
                    },
                    "Spread_DamagePercentage": {
                      "operator": "Variables[0] (1.8) || RETURN",
                      "displayLines": "1.8",
                      "constants": [],
                      "variables": [
                        1.8
                      ]
                    },
                    "ThresholdLayer": {
                      "operator": "Variables[0] (DOT_Layer_Threshold) || RETURN",
                      "displayLines": "DOT_Layer_Threshold",
                      "constants": [],
                      "variables": [
                        "DOT_Layer_Threshold"
                      ]
                    },
                    "DefenceIgnore": {
                      "operator": "Variables[0] (0.2) || RETURN",
                      "displayLines": "0.2",
                      "constants": [],
                      "variables": [
                        0.2
                      ]
                    }
                  },
                  "addStacksPerTrigger": {
                    "operator": "Variables[0] (Result_Stack_Layer) || RETURN",
                    "displayLines": "Result_Stack_Layer",
                    "constants": [],
                    "variables": [
                      "Result_Stack_Layer"
                    ]
                  }
                }
              ],
              "failed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"866598290\">Advanced_BlackSwan_DOT</a>[<span class=\"descriptionNumberColor\">Arcana</span>]",
                  "baseChance": {
                    "operator": "Variables[0] (parameter[1]_Chance) || RETURN",
                    "displayLines": "parameter[1]_Chance",
                    "constants": [],
                    "variables": [
                      "parameter[1]_Chance"
                    ]
                  },
                  "stackLimit": {
                    "operator": "Variables[0] (Max_DOT_Layer) || RETURN",
                    "displayLines": "Max_DOT_Layer",
                    "constants": [],
                    "variables": [
                      "Max_DOT_Layer"
                    ]
                  },
                  "valuePerStack": {
                    "Basic_DamagePercentage": {
                      "operator": "Variables[0] (2.4) || RETURN",
                      "displayLines": "2.4",
                      "constants": [],
                      "variables": [
                        2.4
                      ]
                    },
                    "ExtraLayer_DamagePercentage": {
                      "operator": "Variables[0] (0.12) || RETURN",
                      "displayLines": "0.12",
                      "constants": [],
                      "variables": [
                        0.12
                      ]
                    },
                    "Spread_DamagePercentage": {
                      "operator": "Variables[0] (1.8) || RETURN",
                      "displayLines": "1.8",
                      "constants": [],
                      "variables": [
                        1.8
                      ]
                    },
                    "ThresholdLayer": {
                      "operator": "Variables[0] (DOT_Layer_Threshold) || RETURN",
                      "displayLines": "DOT_Layer_Threshold",
                      "constants": [],
                      "variables": [
                        "DOT_Layer_Threshold"
                      ]
                    },
                    "DefenceIgnore": {
                      "operator": "Variables[0] (0.2) || RETURN",
                      "displayLines": "0.2",
                      "constants": [],
                      "variables": [
                        0.2
                      ]
                    }
                  },
                  "addStacksPerTrigger": {
                    "operator": "Variables[0] (Result_Stack_Layer) || RETURN",
                    "displayLines": "Result_Stack_Layer",
                    "constants": [],
                    "variables": [
                      "Result_Stack_Layer"
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
  "references": []
}