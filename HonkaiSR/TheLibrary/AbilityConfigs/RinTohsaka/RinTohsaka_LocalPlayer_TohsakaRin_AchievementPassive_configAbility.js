const configAbility = {
  "fileName": "RinTohsaka_LocalPlayer_TohsakaRin_AchievementPassive",
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
      "modifier": "<a class=\"gModGreen\" id=\"-1981456538\">ADV_StageAbility_Maze_TohsakaRin_AchievementPassive</a>",
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