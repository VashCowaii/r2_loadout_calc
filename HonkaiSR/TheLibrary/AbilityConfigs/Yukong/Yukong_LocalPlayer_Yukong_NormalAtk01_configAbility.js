const configAbility = {
  "fileName": "Yukong_LocalPlayer_Yukong_NormalAtk01",
  "skillTrigger": "NormalAtk",
  "abilityType": "Basic ATK",
  "toughnessList": null,
  "parse": [
    {
      "name": "IF",
      "conditions": "Ability Has a Target",
      "passed": [
        "Deleted bullshit",
        {
          "name": "Shot Fired",
          "execute": [
            {
              "name": "Overworld Attack Instance",
              "onBattle": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Modifier (OVERWORLD)",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"1461700286\">ADV_Modifier_Maze_Yukong</a>"
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": null,
                      "ID": "120701(SkillMaze)"
                    }
                  ]
                }
              ]
            }
          ],
          "projectileFinished": [
            {
              "name": "Overworld Attack Instance",
              "onBattle": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Modifier (OVERWORLD)",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"1461700286\">ADV_Modifier_Maze_Yukong</a>"
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": null,
                      "ID": "120701(SkillMaze)"
                    }
                  ]
                }
              ]
            }
          ]
        }
      ],
      "failed": [
        "Deleted bullshit",
        {
          "name": "Shot Fired",
          "execute": [
            {
              "name": "Overworld Attack Instance",
              "onBattle": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Modifier (OVERWORLD)",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"1461700286\">ADV_Modifier_Maze_Yukong</a>"
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": null,
                      "ID": "120701(SkillMaze)"
                    }
                  ]
                }
              ]
            }
          ],
          "projectileFinished": [
            {
              "name": "Overworld Attack Instance",
              "onBattle": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Modifier (OVERWORLD)",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"1461700286\">ADV_Modifier_Maze_Yukong</a>"
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": null,
                      "ID": "120701(SkillMaze)"
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
  "whenAdded": [],
  "onAbortReg": [],
  "references": [],
  "targetObjectData": {
    "primaryTarget": "Skill Point User(Or NONE)"
  },
  "realTargetData": {
    "primaryTarget": "Select Hostile Target"
  }
}