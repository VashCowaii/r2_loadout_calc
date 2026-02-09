const configAbility = {
  "fileName": "-2041992577_BattleEvent_SilverWolf_BonusLevel2",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [],
  "whenAdded": [
    "Show BattleEvent Button",
    {
      "name": "Add Battle Event",
      "eventID": 96017,
      "variables": null
    },
    {
      "name": "Find New Target",
      "from": {
        "name": "Target Name",
        "target": "{{Battle Event List}}"
      },
      "searchRandom": true,
      "maxTargets": 1,
      "conditions": {
        "name": "OR",
        "conditionList": [
          {
            "name": "Battle Event ID",
            "ID": 96017,
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            }
          }
        ]
      },
      "ifTargetFound": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Parameter Target}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1848132963\">MBattleEvent_SilverWolf_DamageLevel2Modifier</a>"
        }
      ]
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1848132963\">MBattleEvent_SilverWolf_DamageLevel2Modifier</a>",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Stack Target Stat Value",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageAll</span>&nbsp;",
              "value": 1
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": []
    }
  ]
}