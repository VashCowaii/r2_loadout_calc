const configAbility = {
  "fileName": "Yukong_LocalPlayer_Yukong_TechniqueUsage",
  "skillTrigger": "MazeSkill",
  "abilityType": "Basic ATK",
  "toughnessList": null,
  "parse": [
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": null,
      "ID": "120702()",
      "duration": {
        "displayLines": "20"
      },
      "valuePerStack": {
        "MDF_MoveSpeedRatio": {
          "displayLines": "0.35"
        }
      }
    }
  ],
  "references": [],
  "targetObjectData": {
    "primaryTarget": "{{Caster}}"
  },
  "realTargetData": {
    "primaryTarget": "{{Caster}}"
  }
}