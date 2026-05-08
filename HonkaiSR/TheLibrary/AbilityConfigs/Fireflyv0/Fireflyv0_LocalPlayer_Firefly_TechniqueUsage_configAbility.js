const configAbility = {
  "fileName": "Fireflyv0_LocalPlayer_Firefly_TechniqueUsage",
  "skillTrigger": "MazeSkill",
  "abilityType": "Basic ATK",
  "toughnessList": null,
  "parse": [
    "Deleted bullshit",
    {
      "name": "Change Character Model"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"1650011873\">ADV_StageAbility_Maze_Firefly_MidAirInvincible</a>",
      "duration": 5
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"1559408124\">ADV_StageAbility_Maze_Firefly_FadeOut</a>"
    },
    {
      "name": "Create Overworld Entity",
      "summonID": 13101
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Compare: Target Count",
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
                "value2": 11
              }
            }
          ]
        },
        "compareType": ">",
        "value2": 0
      },
      "passed": [
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
                  "value2": 11
                }
              },
              {
                "name": "Return Target",
                "value": 1
              }
            ]
          },
          "searchRandom": true,
          "maxTargets": 1
        }
      ]
    },
    "Deleted bullshit",
    {
      "name": "Remove Overworld Entity",
      "summon": {
        "name": "Add Target by Summoned Units",
        "target": {
          "name": "Target Name",
          "target": "{{Caster}}"
        },
        "summonID": 13101
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
          "ID": "131001(SkillMaze)"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Parameter Target}}"
          },
          "modifier": null,
          "ID": "131002(SkillMaze)"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": null,
          "ID": "1000112(null)"
        }
      ],
      "entryTargetType": "AllHitTarget"
    }
  ],
  "onAbortReg": [
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"1650011873\">ADV_StageAbility_Maze_Firefly_MidAirInvincible</a>"
    },
    {
      "name": "Remove Overworld Entity",
      "summon": {
        "name": "Add Target by Summoned Units",
        "target": {
          "name": "Target Name",
          "target": "{{Caster}}"
        },
        "summonID": 13101
      }
    },
    {
      "name": "Change Character Model",
      "passed": [
        {
          "name": "IF",
          "conditions": {
            "name": "Overworld Logic State",
            "type": "MazeSkill"
          },
          "passed": [
            "Deleted bullshit"
          ]
        }
      ]
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