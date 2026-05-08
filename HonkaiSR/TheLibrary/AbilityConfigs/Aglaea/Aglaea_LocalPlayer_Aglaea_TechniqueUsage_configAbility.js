const configAbility = {
  "fileName": "Aglaea_LocalPlayer_Aglaea_TechniqueUsage",
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
          "summonID": 14021
        }
      ],
      "failed": [
        "Deleted bullshit",
        {
          "name": "Create Overworld Entity",
          "summonID": 14021
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