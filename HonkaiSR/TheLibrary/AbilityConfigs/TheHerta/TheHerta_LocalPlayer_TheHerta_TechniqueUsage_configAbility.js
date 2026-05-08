const configAbility = {
  "fileName": "TheHerta_LocalPlayer_TheHerta_TechniqueUsage",
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
            "target": "{{Caster}}"
          },
          "modifier": null,
          "ID": "140102(Avatar_TheHerta_00_SkillMazeInRougeLevel)",
          "duration": -1,
          "valuePerStack": {
            "BasicDamagePercentage": {
              "operator": "Variables[0] (0.99) || RETURN",
              "displayLines": "0.99",
              "constants": [],
              "variables": [
                0.99
              ]
            },
            "EliteDamagePercentage": {
              "operator": "Variables[0] (0.3) || RETURN",
              "displayLines": "0.3",
              "constants": [],
              "variables": [
                0.3
              ]
            }
          }
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
      "ID": "140101(SkillMaze)",
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