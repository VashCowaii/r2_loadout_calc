const configAbility = {
  "fileName": "Himeko_LocalPlayer_Himeko_TechniqueUsage",
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
          "name": "Create Overworld Entity",
          "summonID": 10031
        }
      ],
      "failed": [
        "Deleted bullshit",
        {
          "name": "Create Overworld Entity",
          "summonID": 10031
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