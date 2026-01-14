const compositeAbilityObject = {
  "fullCharacterName": "Musketeer of Wild Wheat",
  "trimCharacterName": "MusketeerofWildWheat",
  "abilityList": [
    "MusketeerofWildWheat_Ability51021"
  ],
  "abilityObject": {
    "MusketeerofWildWheat_Ability51021": {
      "fileName": "MusketeerofWildWheat_Ability51021",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Add Events/Bonuses",
          "to": "Caster",
          "modifier": "Relic_102_Main"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "Relic_102_Main",
          "execute": [
            {
              "eventTrigger": "Deal Damage Start [Owner]: Any",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Attack Type",
                    "attackTypes": [
                      "Basic ATK"
                    ]
                  },
                  "passed": [
                    {
                      "name": "Adjust Target Stats",
                      "modifiedValuesArray": [
                        {
                          "on": "Attacker",
                          "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageAll</span>&nbsp;",
                          "value": "0.1"
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": []
        }
      ],
      "isLightcone": true,
      "isRelic": true,
      "desc": [
        "Increases ATK by 12%.",
        "The wearer's SPD increases by 6% and DMG dealt by Basic ATK increases by 10%."
      ],
      "params": [
        [
          0.12
        ],
        [
          0.06,
          0.1
        ]
      ]
    }
  },
  "fixedStats": {
    "2": {
      "ATK%": 0.12
    },
    "4": {
      "SPD%": 0.06
    }
  },
  "isLightcone": true,
  "isRelic": true
}