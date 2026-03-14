const configAbility = {
  "fileName": "BlackSwan_Advanced_BlackSwan_TechniqueInLevel_Insert",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Define Custom Variable",
      "scope": "ContextCaster",
      "variableName": "MazeSkill_Triggered",
      "value": 1
    },
    {
      "name": "Define Custom Variable",
      "variableName": "_can_continue",
      "value": {
        "operator": "Constants[0] (1) || RETURN",
        "displayLines": "1",
        "constants": [
          1
        ],
        "variables": []
      }
    },
    {
      "name": "Define Custom Variable",
      "variableName": "_loop_count",
      "value": 0
    },
    {
      "name": "Define Custom Variable",
      "variableName": "_current_chance",
      "value": {
        "operator": "Variables[0] (1.5) || RETURN",
        "displayLines": "1.5",
        "constants": [],
        "variables": [
          1.5
        ]
      }
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"1474232906\">M_Advanced_BlackSwan_Maze_Flag</a>"
    },
    {
      "name": "Looped Event",
      "conditions": {
        "name": "AND",
        "conditionList": [
          {
            "name": "Compare: Variable",
            "value1": "_can_continue",
            "compareType": ">=",
            "value2": 1,
            "contextScope": "ContextAbility"
          },
          {
            "name": "Compare: Variable",
            "value1": "_loop_count",
            "compareType": "<",
            "value2": 99,
            "contextScope": "ContextAbility"
          }
        ]
      },
      "Event": [
        {
          "name": "Define Custom Variable",
          "variableName": "_loop_count",
          "value": {
            "operator": "Variables[0] (_loop_count) || Constants[0] (1) || ADD || RETURN",
            "displayLines": "(_loop_count + 1)",
            "constants": [
              1
            ],
            "variables": [
              "_loop_count"
            ]
          }
        },
        {
          "name": "Define Custom Variable",
          "variableName": "_can_continue",
          "value": {
            "operator": "Constants[0] (0) || RETURN",
            "displayLines": "0",
            "constants": [
              0
            ],
            "variables": []
          }
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"-560490418\">M_Advanced_BlackSwan_Maze_StopAddDot</a>",
            "invertCondition": true
          },
          "ifTargetFound": [
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
                  "value": 2
                }
              ],
              "failed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "Result_Stack_Layer",
                  "value": 1
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
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"866598290\">Advanced_BlackSwan_DOT</a>[<span class=\"descriptionNumberColor\">Arcana</span>]",
              "baseChance": {
                "operator": "Variables[0] (_current_chance) || RETURN",
                "displayLines": "_current_chance",
                "constants": [],
                "variables": [
                  "_current_chance"
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
              },
              "success": [
                {
                  "name": "Define Custom Variable",
                  "scope": "ContextAbility",
                  "variableName": "_can_continue",
                  "value": {
                    "operator": "Constants[0] (1) || RETURN",
                    "displayLines": "1",
                    "constants": [
                      1
                    ],
                    "variables": []
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
                  "modifier": "<a class=\"gModGreen\" id=\"-560490418\">M_Advanced_BlackSwan_Maze_StopAddDot</a>"
                }
              ]
            }
          ]
        },
        {
          "name": "Define Custom Variable",
          "variableName": "_current_chance",
          "value": {
            "operator": "Variables[0] (_current_chance) || Variables[1] (0.5) || MUL || RETURN",
            "displayLines": "(_current_chance * 0.5)",
            "constants": [],
            "variables": [
              "_current_chance",
              0.5
            ]
          }
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "_can_continue",
            "compareType": ">=",
            "value2": 1,
            "contextScope": "ContextAbility"
          }
        }
      ]
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Hostile Entities(AOE)}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-560490418\">M_Advanced_BlackSwan_Maze_StopAddDot</a>"
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"1474232906\">M_Advanced_BlackSwan_Maze_Flag</a>"
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-560490418\">M_Advanced_BlackSwan_Maze_StopAddDot</a>",
      "stackData": [],
      "latentQueue": [
        "MazeSkill_Triggered",
        "_can_continue"
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1474232906\">M_Advanced_BlackSwan_Maze_Flag</a>",
      "stackData": [],
      "latentQueue": [
        "MazeSkill_Triggered",
        "_can_continue"
      ]
    }
  ]
}