const configAbility = {
  "fileName": "DrRatio_LocalPlayer_Dr_Ratio_TechniqueUsage",
  "skillTrigger": "MazeSkill",
  "abilityType": "Basic ATK",
  "toughnessList": null,
  "parse": [
    {
      "name": "Remove Overworld Entity",
      "summon": {
        "name": "Add Target by Summoned Units",
        "target": {
          "name": "Target Name",
          "target": "{{Adventure Player}}"
        },
        "summonID": 13051
      }
    },
    {
      "name": "IF",
      "conditions": "Ability Has a Target",
      "passed": [
        "Deleted bullshit",
        {
          "name": "Shot Fired",
          "projectileFinished": [
            {
              "name": "Create Overworld Entity",
              "summonID": 13051
            },
            {
              "name": "Overworld Attack Instance"
            }
          ]
        }
      ],
      "failed": [
        "Deleted bullshit",
        {
          "name": "Shot Fired",
          "projectileFinished": [
            {
              "name": "Create Overworld Entity",
              "summonID": 13051
            },
            {
              "name": "Overworld Attack Instance"
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