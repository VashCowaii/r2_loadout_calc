const configAbility = {
  "fileName": "DanHengIL_LocalPlayer_DanHengIL_NormalAtk01",
  "skillTrigger": "NormalAtk",
  "abilityType": "Basic ATK",
  "toughnessList": null,
  "parse": [
    {
      "name": "IF",
      "conditions": {
        "name": "Has Modifier (OVERWORLD)",
        "target": {
          "name": "Target Name",
          "target": "{{Caster}}"
        },
        "modifier": "<a class=\"gModGreen\" id=\"-748629763\">ADV_Modifier_Maze_DanHengIL</a>"
      },
      "passed": [
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "Is_First_Sprint",
            "compareType": ">=",
            "value2": 1,
            "contextScope": "ContextOwner"
          }
        },
        {
          "name": "Define Custom Variable",
          "variableName": "Is_First_Sprint",
          "value": 0
        },
        {
          "name": "Define Custom Variable",
          "variableName": "SprintModifiedSteerSpeed",
          "value": {
            "operator": "Variables[0] (SprintModifiedSteerSpeed) || RETURN",
            "displayLines": "SprintModifiedSteerSpeed",
            "constants": [],
            "variables": [
              "SprintModifiedSteerSpeed"
            ]
          }
        },
        {
          "name": "Define Custom Variable",
          "variableName": "SprintModifiedSpeed",
          "value": {
            "operator": "Variables[0] (SprintModifiedSpeed) || RETURN",
            "displayLines": "SprintModifiedSpeed",
            "constants": [],
            "variables": [
              "SprintModifiedSpeed"
            ]
          }
        },
        {
          "name": "IF",
          "conditions": "Ability Has a Target",
          "passed": [
            {
              "name": "IF",
              "conditions": {
                "name": "OR",
                "conditionList": [
                  {
                    "name": "Move Input Active (Overworld)",
                    "invertCondition": true
                  },
                  {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Compare: Variable",
                        "from": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        "to": {
                          "name": "Target Name",
                          "target": "{{Ability Target(ST)}}"
                        },
                        "value1": "Distance_Between_Entities",
                        "compareType": "<",
                        "value2": 2
                      }
                    ]
                  },
                  {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Compare: Variable",
                        "from": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        "to": {
                          "name": "Target Name",
                          "target": "{{Ability Target(ST)}}"
                        },
                        "value1": "Distance_Between_Entities",
                        "compareType": "<",
                        "value2": 6
                      }
                    ]
                  },
                  {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Compare: Variable",
                        "from": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        "to": {
                          "name": "Target Name",
                          "target": "{{Ability Target(ST)}}"
                        },
                        "value1": "Distance_Between_Entities",
                        "compareType": ">=",
                        "value2": 6
                      }
                    ]
                  }
                ]
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "SprintModifiedSteerSpeed",
                  "value": 1
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "from": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "to": {
                      "name": "Target Name",
                      "target": "{{Ability Target(ST)}}"
                    },
                    "value1": "Distance_Between_Entities",
                    "compareType": "<",
                    "value2": 6
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "SprintModifiedSpeed",
                      "value": 14
                    }
                  ],
                  "failed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "SprintModifiedSpeed",
                      "value": 20
                    }
                  ]
                }
              ]
            },
            "Deleted bullshit",
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"888002889\">ADV_Modifier_Maze_DanHengIL_HolyShield</a>",
              "duration": 1
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "SprintModifiedSteerSpeed",
                "compareType": "<=",
                "value2": {
                  "operator": "Constants[0] (1) || RETURN",
                  "displayLines": "1",
                  "constants": [
                    1
                  ],
                  "variables": []
                },
                "contextScope": "ContextAbility"
              }
            },
            {
              "name": "Overworld Attack Instance",
              "onBattle": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": null,
                  "ID": "121301(SkillMaze)"
                }
              ]
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"888002889\">ADV_Modifier_Maze_DanHengIL_HolyShield</a>"
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"983817284\">M_ADV_Maze_DanHengIL_StopSprintFlag</a>",
              "duration": 1
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Move Input Active (Overworld)"
              }
            }
          ],
          "failed": [
            "Deleted bullshit",
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"888002889\">ADV_Modifier_Maze_DanHengIL_HolyShield</a>",
              "duration": 1
            },
            {
              "name": "Overworld Attack Instance",
              "onBattle": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": null,
                  "ID": "121301(SkillMaze)"
                }
              ]
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"888002889\">ADV_Modifier_Maze_DanHengIL_HolyShield</a>"
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"983817284\">M_ADV_Maze_DanHengIL_StopSprintFlag</a>",
              "duration": 1
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Move Input Active (Overworld)"
              }
            }
          ]
        }
      ],
      "failed": [
        {
          "name": "IF",
          "conditions": "Ability Has a Target",
          "passed": [
            "Deleted bullshit",
            {
              "name": "Shot Fired"
            },
            {
              "name": "Shot Fired",
              "projectileFinished": [
                {
                  "name": "Overworld Attack Instance"
                }
              ]
            }
          ],
          "failed": [
            {
              "name": "IF",
              "conditions": {
                "name": "Has Modifier (OVERWORLD)",
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"983817284\">M_ADV_Maze_DanHengIL_StopSprintFlag</a>",
                "invertCondition": true
              },
              "passed": [
                "Deleted bullshit",
                {
                  "name": "Shot Fired"
                },
                {
                  "name": "Shot Fired",
                  "projectileFinished": [
                    {
                      "name": "Overworld Attack Instance"
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    }
  ],
  "onAbortReg": [
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"888002889\">ADV_Modifier_Maze_DanHengIL_HolyShield</a>"
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