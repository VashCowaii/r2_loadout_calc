const configAbility = {
  "fileName": "Hook_LocalPlayer_Hook_TechniqueUsage",
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
            "compareType": "<=",
            "value2": 5
          },
          "passed": [
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
                      "ID": "110901(SkillMaze)"
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
                      "ID": "110901(SkillMaze)"
                    }
                  ]
                }
              ]
            }
          ],
          "failed": [
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
                      "ID": "110901(SkillMaze)"
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
                      "ID": "110901(SkillMaze)"
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
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": null,
                  "ID": "110901(SkillMaze)"
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
                  "ID": "110901(SkillMaze)"
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