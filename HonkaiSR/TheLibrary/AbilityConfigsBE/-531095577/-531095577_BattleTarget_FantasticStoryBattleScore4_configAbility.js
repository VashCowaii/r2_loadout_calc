const configAbility = {
  "fileName": "-531095577_BattleTarget_FantasticStoryBattleScore4",
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
      "modifier": "<a class=\"gModGreen\" id=\"-1066851653\">BattleTarget_FantasticStoryBattleScore4_Modifier</a>"
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1066851653\">BattleTarget_FantasticStoryBattleScore4_Modifier</a>",
      "modifierFlags": [
        "CustomEvent_BattleScoreChange"
      ],
      "execute": [
        {
          "eventTrigger": "When Constructing Modifier",
          "execute": [
            {
              "name": "Define Variable with Battle Goal ID",
              "ability": "BattleTarget_FantasticStoryBattleScore4",
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