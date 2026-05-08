const configAbility = {
  "fileName": "Welt_LocalPlayer_Welt_TechniqueUsage",
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
          "summonID": 10041
        }
      ],
      "failed": [
        "Deleted bullshit",
        {
          "name": "Create Overworld Entity",
          "summonID": 10041
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