const configAbility = {
  "fileName": "20048_BattleEventAbility_Monster_W5_AsatPramad_MainStoryTrain",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [],
  "whenAdded": [
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-1416141151\">MBattleEventAbility_Monster_W5_AsatPramad_MainStoryTrain</a>"
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1416141151\">MBattleEventAbility_Monster_W5_AsatPramad_MainStoryTrain</a>",
      "execute": [
        {
          "eventTrigger": "Turn [Owner]: Pre-action Phase"
        }
      ]
    }
  ]
}