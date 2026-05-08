const configAbility = {
  "fileName": "Phainon_LocalPlayer_Phainon_TechniqueUsage",
  "skillTrigger": "MazeSkill",
  "abilityType": "Basic ATK",
  "toughnessList": null,
  "parse": [
    {
      "name": "IF",
      "conditions": "Ability Has a Target"
    },
    {
      "name": "Create Overworld Entity",
      "summonID": 14082
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-1426965473\">ADV_StageAbility_Maze_Phainon_Invincible</a>",
      "duration": 2
    },
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
          "ID": "140801(SkillMaze)",
          "duration": 1
        }
      ],
      "entryTargetType": "AllHitTarget"
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-1426965473\">ADV_StageAbility_Maze_Phainon_Invincible</a>"
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