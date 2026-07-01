const configAbility = {
  "fileName": "SilverWolfL_LocalPlayer_SilverWolf999_TechniqueUsage",
  "skillTrigger": "MazeSkill",
  "abilityType": "Basic ATK",
  "toughnessList": null,
  "parse": [
    {
      "name": "IF",
      "conditions": {
        "name": "Has Modifier (OVERWORLD)",
        "target": {
          "name": "Target Name",
          "target": "{{Caster}}"
        },
        "buffID": 150601,
        "modifier": null
      },
      "passed": [
        {
          "name": "Remove Overworld Entity",
          "summon": {
            "name": "Add Target by Summoned Units",
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "summonID": 15061
          }
        },
        "Submit Technique Use"
      ],
      "failed": [
        {
          "name": "IF",
          "conditions": "Ability Has a Target"
        },
        "Deleted bullshit",
        {
          "name": "Create Overworld Entity",
          "summonID": 15061,
          "execute": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-203146933\">ADV_GlobalAbility_Maze_SilverWolf999_ListenTechniqueUsagePoint</a>"
            }
          ]
        },
        "Submit Technique Use"
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