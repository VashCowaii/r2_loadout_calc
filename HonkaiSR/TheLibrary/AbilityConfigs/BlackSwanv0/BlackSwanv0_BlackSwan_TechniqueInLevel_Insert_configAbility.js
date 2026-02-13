const configAbility = {
  "fileName": "BlackSwanv0_BlackSwan_TechniqueInLevel_Insert",
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
      "modifier": "<a class=\"gModGreen\" id=\"-1849837561\">M_BlackSwan_Maze_Flag</a>"
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
            "modifier": "<a class=\"gModGreen\" id=\"465925451\">M_BlackSwan_Maze_StopAddDot</a>",
            "invertCondition": true
          },
          "ifTargetFound": [
            {
              "name": "IF",
              "conditions": {
                "name": "Random Chance",
                "chance": {
                  "operator": "Variables[0] (Rank06_Chance) || RETURN",
                  "displayLines": "Rank06_Chance",
                  "constants": [],
                  "variables": [
                    "Rank06_Chance"
                  ]
                }
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "Rank06_Weighted_Stack_Layer",
                  "value": {
                    "operator": "Constants[0] (1) || Variables[0] (Rank06_Extra_Layer) || ADD || RETURN",
                    "displayLines": "(1 + Rank06_Extra_Layer)",
                    "constants": [
                      1
                    ],
                    "variables": [
                      "Rank06_Extra_Layer"
                    ]
                  }
                }
              ],
              "failed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "Rank06_Weighted_Stack_Layer",
                  "value": {
                    "operator": "Constants[0] (1) || RETURN",
                    "displayLines": "1",
                    "constants": [
                      1
                    ],
                    "variables": []
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
              "modifier": "<a class=\"gModGreen\" id=\"2037361233\">BlackSwan_DOT</a>[<span class=\"descriptionNumberColor\">Arcana</span>]",
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
                "SecondLayer": {
                  "operator": "Variables[0] (3) || RETURN",
                  "displayLines": "3",
                  "constants": [],
                  "variables": [
                    3
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
                "ThirdLayer": {
                  "operator": "Variables[0] (7) || RETURN",
                  "displayLines": "7",
                  "constants": [],
                  "variables": [
                    7
                  ]
                },
                "DefenceIgnore": {
                  "operator": "Variables[0] (0.2) || RETURN",
                  "displayLines": "0.2",
                  "constants": [],
                  "variables": [
                    0.2
                  ]
                },
                "Cast_By_Level": 0
              },
              "addStacksPerTrigger": {
                "operator": "Variables[0] (Rank06_Weighted_Stack_Layer) || RETURN",
                "displayLines": "Rank06_Weighted_Stack_Layer",
                "constants": [],
                "variables": [
                  "Rank06_Weighted_Stack_Layer"
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
                  "modifier": "<a class=\"gModGreen\" id=\"465925451\">M_BlackSwan_Maze_StopAddDot</a>"
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
      "modifier": "<a class=\"gModGreen\" id=\"465925451\">M_BlackSwan_Maze_StopAddDot</a>"
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-1849837561\">M_BlackSwan_Maze_Flag</a>"
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1849837561\">M_BlackSwan_Maze_Flag</a>",
      "stackData": [],
      "latentQueue": [
        "MazeSkill_Triggered",
        "_can_continue"
      ]
    }
  ]
}