const configAbility = {
  "fileName": "TrailblazerRemembrance_LocalPlayer_PlayerBoy_30_BeforeBattleDebuffListener",
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
      "modifier": "<a class=\"gModGreen\" id=\"1221389813\">ADV_StageAbility_PlayerBoy_30_BeforeBattleDebuffListener</a>",
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