const compositeAbilityObject = {
  "fullCharacterName": "Eagle of Twilight Line",
  "trimCharacterName": "EagleofTwilightLine",
  "abilityList": [
    "EagleofTwilightLine_Ability51101"
  ],
  "abilityObject": {
    "EagleofTwilightLine_Ability51101": {
      "fileName": "EagleofTwilightLine_Ability51101",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Add Events/Bonuses",
          "to": "Caster",
          "modifier": "Relic_110_Main"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "Relic_110_Main",
          "execute": [
            {
              "eventTrigger": "Ability Use [Owner]: End",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Skill Type",
                    "skillType": "Ultimate"
                  },
                  "passed": [
                    {
                      "name": "Action Advance/Delay",
                      "target": "Owner of this Modifier",
                      "advanceType": "Advance",
                      "value": "0.25"
                    }
                  ]
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": [],
          "previewValue": {
            "name": "Modifier: UI Preview",
            "show": "Hide",
            "target": "Owner of this Modifier",
            "skillType": [
              "Ultimate"
            ],
            "delayAdvancePreview": {
              "name": "Delay/Advance Preview",
              "previewValue": {
                "operator": "Variables[0] (0.25)",
                "displayLines": "0.25",
                "constants": [],
                "variables": [
                  0.25
                ]
              }
            }
          }
        }
      ],
      "isLightcone": true,
      "isRelic": true,
      "desc": [
        "Increases Wind DMG by 10%.",
        "After the wearer uses their Ultimate, their action is Advanced Forward by 25%."
      ],
      "params": [
        [
          0.1
        ],
        [
          0.25
        ]
      ]
    }
  },
  "fixedStats": {
    "2": {
      "DamageWind": 0.1
    },
    "4": {}
  },
  "isLightcone": true,
  "isRelic": true
}