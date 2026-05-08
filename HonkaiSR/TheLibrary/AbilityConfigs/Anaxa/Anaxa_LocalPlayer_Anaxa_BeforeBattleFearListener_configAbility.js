const configAbility = {
  "fileName": "Anaxa_LocalPlayer_Anaxa_BeforeBattleFearListener",
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
      "modifier": "<a class=\"gModGreen\" id=\"1211991680\">ADV_StageAbility_Anaxa_BeforeBattleFearListener</a>",
      "counter": -1
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Adventure Lineup}}"
      },
      "modifier": null,
      "ID": "140503()",
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