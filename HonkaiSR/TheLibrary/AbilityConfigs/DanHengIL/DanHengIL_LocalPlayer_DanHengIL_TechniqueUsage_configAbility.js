const configAbility = {
  "fileName": "DanHengIL_LocalPlayer_DanHengIL_TechniqueUsage",
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
      "ID": "121302()",
      "duration": {
        "displayLines": "20"
      }
    },
    {
      "name": "Define Custom Variable",
      "value": 1,
      "variableName": "Is_First_Sprint"
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