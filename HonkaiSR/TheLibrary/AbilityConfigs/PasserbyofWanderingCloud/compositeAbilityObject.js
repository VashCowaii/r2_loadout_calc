const compositeAbilityObject = {
  "fullCharacterName": "Passerby of Wandering Cloud",
  "trimCharacterName": "PasserbyofWanderingCloud",
  "abilityList": [
    "PasserbyofWanderingCloud_Ability51011"
  ],
  "abilityObject": {
    "PasserbyofWanderingCloud_Ability51011": {
      "fileName": "PasserbyofWanderingCloud_Ability51011",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Add Events/Bonuses",
          "to": "Caster",
          "modifier": "Relic_101_Main"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "Relic_101_Main",
          "execute": [
            {
              "eventTrigger": "Enter Battle",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "Wave Count",
                    "compareType": "=",
                    "value2": 1
                  },
                  "passed": [
                    {
                      "name": "Skill Points Modification",
                      "adjustmentValue": 1,
                      "adjustmentType": "+"
                    }
                  ]
                }
              ],
              "priorityLevel": -80
            }
          ],
          "stackData": [],
          "latentQueue": []
        }
      ],
      "isLightcone": true,
      "isRelic": true,
      "desc": [
        "Increases Outgoing Healing by 10%.",
        "At the start of the battle, immediately regenerates 1 Skill Point."
      ],
      "params": [
        [
          0.1
        ],
        []
      ]
    }
  },
  "fixedStats": {
    "2": {
      "HealingOutgoing": 0.1
    },
    "4": {}
  },
  "isLightcone": true,
  "isRelic": true
}