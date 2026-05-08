const configAbility = {
  "fileName": "Phainon_LocalPlayer_Phainon_ModifyMaxMP",
  "skillTrigger": "MazeCommonPassve02",
  "abilityType": "Basic ATK",
  "toughnessList": null,
  "parse": [
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-2011546348\">ADV_StageAbility_Maze_Phainon_ModifyMaxMP</a>",
      "counter": -1
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