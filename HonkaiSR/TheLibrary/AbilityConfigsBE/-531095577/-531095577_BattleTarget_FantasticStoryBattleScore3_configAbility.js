const configAbility = {
  "fileName": "-531095577_BattleTarget_FantasticStoryBattleScore3",
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
      "modifier": "<a class=\"gModGreen\" id=\"-305356160\">BattleTarget_FantasticStoryBattleScore3_Modifier</a>"
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-305356160\">BattleTarget_FantasticStoryBattleScore3_Modifier</a>",
      "modifierFlags": [
        "CustomEvent_BattleScoreChange"
      ],
      "execute": [
        {
          "eventTrigger": "When Constructing Modifier",
          "execute": [
            {
              "name": "Define Variable with Battle Goal ID",
              "ability": "BattleTarget_FantasticStoryBattleScore3",
              "variableName": "_BattleTargetKey"
            }
          ]
        },
        {
          "eventTrigger": "Custom Event"
        }
      ],
      "stackData": [],
      "latentQueue": []
    }
  ]
}