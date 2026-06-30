const configAbility = {
  "fileName": "SilverWolfL_GlobalAbility_SilverWolf999_Main",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [],
  "whenAdded": [
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Level Entity}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-402547059\">GlobalAbility_SilverWolf999_CreateBattleEvent</a>"
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-402547059\">GlobalAbility_SilverWolf999_CreateBattleEvent</a>",
      "execute": [
        {
          "eventTrigger": "Enter Battle",
          "execute": [
            {
              "name": "Add Battle Event",
              "teamName": "Player Team",
              "eventID": 11506,
              "variables": null
            },
            "Modifier Deletes Itself"
          ],
          "priorityLevel": -93
        }
      ]
    }
  ]
}