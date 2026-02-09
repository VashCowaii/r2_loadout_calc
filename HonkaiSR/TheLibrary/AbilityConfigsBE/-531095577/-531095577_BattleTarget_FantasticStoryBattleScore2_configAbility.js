const configAbility = {
  "fileName": "-531095577_BattleTarget_FantasticStoryBattleScore2",
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
      "modifier": "<a class=\"gModGreen\" id=\"1546815165\">BattleTarget_FantasticStoryBattleScore2_Modifier</a>"
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Is First Challenge-Battle"
      }
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1546815165\">BattleTarget_FantasticStoryBattleScore2_Modifier</a>",
      "modifierFlags": [
        "CustomEvent_BattleScoreChange"
      ],
      "execute": [
        {
          "eventTrigger": "When Constructing Modifier",
          "execute": [
            {
              "name": "Define Variable with Battle Goal ID",
              "ability": "BattleTarget_FantasticStoryBattleScore2",
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