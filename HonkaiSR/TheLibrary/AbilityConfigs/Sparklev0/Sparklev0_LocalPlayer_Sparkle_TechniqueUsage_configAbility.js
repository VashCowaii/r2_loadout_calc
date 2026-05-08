const configAbility = {
  "fileName": "Sparklev0_LocalPlayer_Sparkle_TechniqueUsage",
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
      "ID": "130601()",
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
      "ID": "130602(SkillMaze)",
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
  "onAbortReg": [],
  "references": [],
  "targetObjectData": {
    "primaryTarget": "{{Caster}}"
  },
  "realTargetData": {
    "primaryTarget": "{{Caster}}"
  }
}