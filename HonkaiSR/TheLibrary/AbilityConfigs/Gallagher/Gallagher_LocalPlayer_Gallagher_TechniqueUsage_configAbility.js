const configAbility = {
  "fileName": "Gallagher_LocalPlayer_Gallagher_TechniqueUsage",
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
          "name": "Overworld Attack Instance",
          "onBattle": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": null,
              "ID": "130101(SkillMaze)"
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
            "Deleted bullshit",
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
                  "ID": "130101(SkillMaze)"
                }
              ]
            }
          ],
          "failed": [
            {
              "name": "IF",
              "conditions": {
                "name": "In Motion (Overworld)",
                "flag": "Run"
              },
              "passed": [
                "Deleted bullshit",
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
                      "ID": "130101(SkillMaze)"
                    }
                  ]
                }
              ],
              "failed": [
                "Deleted bullshit",
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
                      "ID": "130101(SkillMaze)"
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
  "onAbortReg": [],
  "references": [],
  "targetObjectData": {
    "primaryTarget": "Skill Point User(Or NONE)"
  },
  "realTargetData": {
    "primaryTarget": "Select Hostile Target"
  }
}