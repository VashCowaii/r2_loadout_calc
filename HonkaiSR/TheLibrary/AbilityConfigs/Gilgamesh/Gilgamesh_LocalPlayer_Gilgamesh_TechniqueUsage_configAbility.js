const configAbility = {
  "fileName": "Gilgamesh_LocalPlayer_Gilgamesh_TechniqueUsage",
  "skillTrigger": "MazeSkill",
  "abilityType": "Basic ATK",
  "toughnessList": null,
  "parse": [
    {
      "name": "Define Custom Variable",
      "variableName": "Gilgamesh_00_MazeSkill_AchievementCount",
      "value": 0,
      "scope": "ContextCaster"
    },
    {
      "name": "IF",
      "conditions": "Ability Has a Target",
      "passed": [
        "Deleted bullshit",
        {
          "name": "Create Overworld Entity",
          "summonID": 15091
        }
      ],
      "failed": [
        "Deleted bullshit",
        {
          "name": "Create Overworld Entity",
          "summonID": 15091
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