const configAbility = {
  "fileName": "Evanescia_LocalPlayer_Evanescia_TechniqueUsage",
  "skillTrigger": "MazeSkill",
  "abilityType": "Basic ATK",
  "toughnessList": null,
  "parse": [
    {
      "name": "IF",
      "conditions": "Ability Has a Target",
      "passed": [
        "Deleted bullshit",
        {
          "name": "Define Custom Variable",
          "variableName": "MazeSkill_HitTarget",
          "value": 1
        }
      ],
      "failed": [
        {
          "name": "IF",
          "conditions": {
            "name": "In Motion (Overworld)",
            "flag": "FastRun"
          },
          "passed": [
            "Deleted bullshit"
          ],
          "failed": [
            {
              "name": "IF",
              "conditions": {
                "name": "In Motion (Overworld)",
                "flag": "Run"
              },
              "passed": [
                "Deleted bullshit"
              ],
              "failed": [
                "Deleted bullshit"
              ]
            }
          ]
        }
      ]
    },
    {
      "name": "IF",
      "conditions": "Ability Has a Target [NOT]"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-1916537335\">ADV_StageAbility_Maze_Evanescia_Invincible</a>",
      "duration": 3
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Compare: Variable",
        "value1": "MazeSkill_HitTarget",
        "compareType": ">=",
        "value2": 1
      },
      "passed": [
        {
          "name": "Define Custom Variable with Team Count",
          "target": {
            "name": "Target Sequence",
            "Sequence": [
              {
                "name": "Target Name",
                "target": "{{Adventure Enemy NPCs}}"
              },
              {
                "name": "Target Filter",
                "conditions": {
                  "name": "Compare: Variable",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Adventure Player}}"
                  },
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "value1": "Distance_Between_Entities",
                  "compareType": "<=",
                  "value2": 10
                }
              }
            ]
          },
          "variableName": "EnemyCount"
        },
        {
          "name": "Define Custom Variable",
          "variableName": "#CL_DeltaTime",
          "value": {
            "operator": "Variables[0] (#CL_Distance) || Variables[1] (MAX) || Variables[2] (EnemyCount) || Constants[0] (3) || PARAM_2 || FUNCTION || DIV || RETURN",
            "displayLines": "(#CL_Distance / &nbsp;<span class=\"descriptionFunctionColor\">MAX</span>(EnemyCount, 3))",
            "constants": [
              3
            ],
            "variables": [
              "#CL_Distance",
              "MAX",
              "EnemyCount"
            ]
          }
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Sequence",
            "Sequence": [
              {
                "name": "Target Name",
                "target": "{{Adventure Enemy NPCs}}"
              },
              {
                "name": "Target Filter",
                "conditions": {
                  "name": "Compare: Target",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Ability Target(ST)}}"
                  },
                  "target2": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  }
                }
              }
            ]
          },
          "modifier": "<a class=\"gModGreen\" id=\"1374695774\">ADV_StageAbility_Maze_Evanescia_HitVisual</a>"
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Sequence",
            "Sequence": [
              {
                "name": "Target Name",
                "target": "{{Adventure Enemy NPCs}}"
              },
              {
                "name": "Target Filter",
                "conditions": {
                  "name": "AND",
                  "conditionList": [
                    {
                      "name": "Compare: Variable",
                      "from": {
                        "name": "Target Name",
                        "target": "{{Adventure Player}}"
                      },
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "value1": "Distance_Between_Entities",
                      "compareType": "<=",
                      "value2": 10
                    },
                    {
                      "name": "Compare: Target",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Ability Target(ST)}}"
                      },
                      "target2": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "invertCondition": true
                    }
                  ]
                }
              }
            ]
          }
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "EnemyCount",
            "compareType": "<",
            "value2": 3
          },
          "passed": [
            {
              "name": "Looped Event",
              "maxLoops": {
                "operator": "Constants[0] (3) || Variables[0] (EnemyCount) || SUB || RETURN",
                "displayLines": "(3 - EnemyCount)",
                "constants": [
                  3
                ],
                "variables": [
                  "EnemyCount"
                ]
              },
              "Event": [
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Sequence",
                    "Sequence": [
                      {
                        "name": "Target Name",
                        "target": "{{Adventure Enemy NPCs}}"
                      },
                      {
                        "name": "Target Filter",
                        "conditions": {
                          "name": "Compare: Variable",
                          "from": {
                            "name": "Target Name",
                            "target": "{{Adventure Player}}"
                          },
                          "to": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "value1": "Distance_Between_Entities",
                          "compareType": "<=",
                          "value2": 10
                        }
                      }
                    ]
                  },
                  "searchRandom": true
                }
              ]
            }
          ]
        }
      ],
      "failed": [
        {
          "name": "Define Custom Variable",
          "variableName": "#CL_Distance",
          "value": 3
        }
      ]
    },
    "Deleted bullshit",
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-1916537335\">ADV_StageAbility_Maze_Evanescia_Invincible</a>"
    },
    {
      "name": "Overworld Attack Instance",
      "onAttack": [
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Parameter Target}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1374695774\">ADV_StageAbility_Maze_Evanescia_HitVisual</a>"
        }
      ],
      "onBattle": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Parameter Target}}"
          },
          "modifier": null,
          "ID": "150501(SkillMaze)"
        }
      ],
      "entryTargetType": "AllHitTarget"
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Adventure Enemy NPCs}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"1374695774\">ADV_StageAbility_Maze_Evanescia_HitVisual</a>"
    }
  ],
  "onAbortReg": [
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-1916537335\">ADV_StageAbility_Maze_Evanescia_Invincible</a>"
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Adventure Enemy NPCs}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"1374695774\">ADV_StageAbility_Maze_Evanescia_HitVisual</a>"
    }
  ],
  "references": [],
  "targetObjectData": {
    "primaryTarget": "Skill Point User(Or NONE)"
  },
  "realTargetData": {
    "primaryTarget": "Select Hostile Target"
  }
}