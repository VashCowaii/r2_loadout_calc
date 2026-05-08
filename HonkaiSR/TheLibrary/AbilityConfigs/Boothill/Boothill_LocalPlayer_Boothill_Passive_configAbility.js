const configAbility = {
  "fileName": "Boothill_LocalPlayer_Boothill_Passive",
  "skillTrigger": "MazeCommonPassve01",
  "abilityType": "Basic ATK",
  "toughnessList": null,
  "parse": [
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-1616258500\">ADV_StageAbility_Maze_Boothill_AfterBattle</a>",
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