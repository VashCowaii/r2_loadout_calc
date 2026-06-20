const configAbility = {
  "fileName": "317538139_StageAbility_MazeStandard_EnterBattle_NoWeakness",
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
      "modifier": "<a class=\"gModGreen\" id=\"-1217601568\">StageAbility_MazeStandard_EnterBattle_NoWeakness_Modifier</a>"
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1217601568\">StageAbility_MazeStandard_EnterBattle_NoWeakness_Modifier</a>",
      "modifierFlags": [
        "STAT_TriggerBattleCharacter"
      ]
    }
  ]
}