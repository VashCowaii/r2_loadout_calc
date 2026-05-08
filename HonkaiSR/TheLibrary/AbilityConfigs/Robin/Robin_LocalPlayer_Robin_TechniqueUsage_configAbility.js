const configAbility = {
  "fileName": "Robin_LocalPlayer_Robin_TechniqueUsage",
  "skillTrigger": "MazeSkill",
  "abilityType": "Basic ATK",
  "toughnessList": null,
  "parse": [
    "Deleted bullshit",
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": null,
      "ID": "130902(SkillMaze)",
      "duration": {
        "operator": "Variables[0] (15) || RETURN",
        "displayLines": "15",
        "constants": [],
        "variables": [
          15
        ]
      }
    },
    "Submit Technique Use"
  ],
  "references": [],
  "targetObjectData": {
    "primaryTarget": "{{Caster}}"
  },
  "realTargetData": {
    "primaryTarget": "Select Hostile Target"
  }
}