const configAbility = {
  "fileName": "FuXuan_LocalPlayer_FuXuan_TechniqueUsage",
  "skillTrigger": "MazeSkill",
  "abilityType": "Basic ATK",
  "toughnessList": null,
  "parse": [
    "Deleted bullshit",
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Adventure Lineup}}"
      },
      "modifier": null,
      "ID": "120801()",
      "duration": {
        "operator": "Variables[0] (20) || RETURN",
        "displayLines": "20",
        "constants": [],
        "variables": [
          20
        ]
      }
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": null,
      "ID": "120802(SkillMaze)",
      "duration": {
        "operator": "Variables[0] (20) || RETURN",
        "displayLines": "20",
        "constants": [],
        "variables": [
          20
        ]
      }
    },
    "Submit Technique Use"
  ],
  "references": [],
  "targetObjectData": {
    "primaryTarget": "Skill Point User(Or NONE)"
  },
  "realTargetData": {
    "primaryTarget": "{{Caster}}"
  }
}