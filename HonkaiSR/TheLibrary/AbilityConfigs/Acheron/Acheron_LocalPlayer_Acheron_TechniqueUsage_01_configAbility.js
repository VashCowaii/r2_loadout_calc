const configAbility = {
  "fileName": "Acheron_LocalPlayer_Acheron_TechniqueUsage_01",
  "skillTrigger": "MazeSkill",
  "abilityType": "Basic ATK",
  "toughnessList": null,
  "parse": [
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": null,
      "ID": "130801()",
      "duration": 1.1
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"933509647\">ADV_StageAbility_Maze_IgnoreWeakness_TechniqueUsageMark</a>"
    },
    {
      "name": "IF",
      "conditions": "Ability Has a Target",
      "passed": [
        "Deleted bullshit",
        {
          "name": "Overworld Attack Instance",
          "onAttack": [
            {
              "name": "IF",
              "conditions": {
                "name": "Can Die Instantly",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                }
              },
              "passed": [
                "Overworld Mark Target for Death(which we don't care about)"
              ]
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
              "ID": "130803(SkillMaze)",
              "duration": 1
            }
          ],
          "onKill": [
            {
              "name": "Define Custom Variable",
              "variableName": "Acheron_Count",
              "value": 1
            },
            {
              "name": "Define Custom Variable",
              "variableName": "Scoring_KillCount_4083009",
              "value": {
                "operator": "Variables[0] (Scoring_KillCount_4083009) || Constants[0] (1) || ADD || RETURN",
                "displayLines": "(Scoring_KillCount_4083009 + 1)",
                "constants": [
                  1
                ],
                "variables": [
                  "Scoring_KillCount_4083009"
                ]
              }
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "Scoring_KillCount_4083009",
                "compareType": ">=",
                "value2": 5
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "Scoring_KillCount_4083009",
                  "value": 0
                }
              ]
            }
          ],
          "entryTargetType": "FirstHitTarget"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "Acheron_Count",
            "compareType": ">",
            "value2": 0
          },
          "passed": [
            {
              "name": "Define Custom Variable",
              "variableName": "Acheron_Count",
              "value": 0
            }
          ]
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
        },
        {
          "name": "Overworld Attack Instance",
          "onAttack": [
            {
              "name": "IF",
              "conditions": {
                "name": "Can Die Instantly",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                }
              },
              "passed": [
                "Overworld Mark Target for Death(which we don't care about)"
              ]
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
              "ID": "130803(SkillMaze)",
              "duration": 1
            }
          ],
          "onKill": [
            {
              "name": "Define Custom Variable",
              "variableName": "Acheron_Count",
              "value": 1
            },
            {
              "name": "Define Custom Variable",
              "variableName": "Scoring_KillCount_4083009",
              "value": {
                "operator": "Variables[0] (Scoring_KillCount_4083009) || Constants[0] (1) || ADD || RETURN",
                "displayLines": "(Scoring_KillCount_4083009 + 1)",
                "constants": [
                  1
                ],
                "variables": [
                  "Scoring_KillCount_4083009"
                ]
              }
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "Scoring_KillCount_4083009",
                "compareType": ">=",
                "value2": 5
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "Scoring_KillCount_4083009",
                  "value": 0
                }
              ]
            }
          ],
          "entryTargetType": "FirstHitTarget"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "Acheron_Count",
            "compareType": ">",
            "value2": 0
          },
          "passed": [
            {
              "name": "Define Custom Variable",
              "variableName": "Acheron_Count",
              "value": 0
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
      "modifier": "<a class=\"gModGreen\" id=\"933509647\">ADV_StageAbility_Maze_IgnoreWeakness_TechniqueUsageMark</a>"
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