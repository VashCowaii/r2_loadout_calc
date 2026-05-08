const configAbility = {
  "fileName": "SilverWolfv0_LocalPlayer_Silwolf_TechniqueUsage",
  "skillTrigger": "MazeSkill",
  "abilityType": "Basic ATK",
  "toughnessList": null,
  "parse": [
    {
      "name": "IF",
      "conditions": "Ability Has a Target",
      "passed": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"933509647\">ADV_StageAbility_Maze_IgnoreWeakness_TechniqueUsageMark</a>"
        },
        "Deleted bullshit",
        {
          "name": "Shot Fired",
          "execute": [
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
                  "ID": "100601(SkillMaze)"
                }
              ]
            }
          ],
          "projectileFinished": [
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
                  "ID": "100601(SkillMaze)"
                }
              ]
            }
          ]
        }
      ],
      "failed": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"933509647\">ADV_StageAbility_Maze_IgnoreWeakness_TechniqueUsageMark</a>"
        },
        "Deleted bullshit",
        {
          "name": "Shot Fired",
          "execute": [
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
                  "ID": "100601(SkillMaze)"
                }
              ]
            }
          ],
          "projectileFinished": [
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
                  "ID": "100601(SkillMaze)"
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