const configAbility = {
  "fileName": "TheDahlia_LocalPlayer_Constance_TechniqueUsage",
  "skillTrigger": "MazeSkill",
  "abilityType": "Basic ATK",
  "toughnessList": null,
  "parse": [
    {
      "name": "IF",
      "conditions": "Ability Has a Target"
    },
    "Deleted bullshit",
    {
      "name": "IF",
      "conditions": "Ability Has a Target",
      "passed": [
        {
          "name": "Create Overworld Entity",
          "summonID": 13211
        }
      ],
      "failed": [
        {
          "name": "Create Overworld Entity",
          "summonID": 13211
        }
      ]
    },
    {
      "name": "Overworld Attack Instance"
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