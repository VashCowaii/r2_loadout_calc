const configAbility = {
  "fileName": "Jingliuv0_LocalPlayer_Jingliu_TechniqueUsage",
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
      "ID": "121202()",
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
    "primaryTarget": "{{Caster}}"
  },
  "realTargetData": {
    "primaryTarget": "Select Hostile Target"
  }
}