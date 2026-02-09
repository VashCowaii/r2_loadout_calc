const configAbility = {
  "fileName": "-531095577_BattleTarget_FantasticStoryBattleScore1",
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
      "modifier": "<a class=\"gModGreen\" id=\"1392635778\">BattleTarget_FantasticStoryBattleScore1_Modifier</a>"
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1392635778\">BattleTarget_FantasticStoryBattleScore1_Modifier</a>",
      "modifierFlags": [
        "CustomEvent_BattleScoreChange"
      ],
      "execute": [
        {
          "eventTrigger": "When Constructing Modifier",
          "execute": [
            {
              "name": "Define Variable with Battle Goal ID",
              "ability": "BattleTarget_FantasticStoryBattleScore1",
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