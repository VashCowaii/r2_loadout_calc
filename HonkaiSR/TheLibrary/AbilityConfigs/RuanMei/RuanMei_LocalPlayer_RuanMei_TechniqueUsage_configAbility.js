const configAbility = {
  "fileName": "RuanMei_LocalPlayer_RuanMei_TechniqueUsage",
  "skillTrigger": "MazeSkill",
  "abilityType": "Basic ATK",
  "toughnessList": null,
  "parse": [
    "Deleted bullshit",
    {
      "name": "IF",
      "conditions": {
        "name": "Is Game Mode",
        "modes": [
          "RogueExplore",
          "ChessRogue",
          "RelicRogue",
          "TournRogue",
          "MagicRogue"
        ]
      },
      "passed": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Adventure Lineup}}"
          },
          "modifier": null,
          "ID": "130302()",
          "duration": -1
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": null,
          "ID": "130303(Avatar_RuanMei_00_SkillMazeInRougeLevel)",
          "duration": -1
        }
      ]
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": null,
      "ID": "130301(SkillMaze)",
      "duration": -1
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