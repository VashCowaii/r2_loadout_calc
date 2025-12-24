const compositeAbilityObject = {
  "fullCharacterName": "Dance! Dance! Dance!",
  "trimCharacterName": "DanceDanceDance",
  "abilityList": [
    "DanceDanceDance_Ability21018"
  ],
  "abilityObject": {
    "DanceDanceDance_Ability21018": {
      "fileName": "DanceDanceDance_Ability21018",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Add Events/Bonuses",
          "to": "Caster",
          "modifier": "LC_21018_Main"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "LC_21018_Main",
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
                      "target": "Allied Team",
                      "advanceType": "Advance",
                      "value": "0.16"
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
            "target": "Allied Team",
            "skillType": [
              "Ultimate"
            ],
            "delayAdvancePreview": {
              "name": "Delay/Advance Preview",
              "previewValue": {
                "operator": "Variables[0] (0.16) || RETURN",
                "displayLines": "0.16",
                "constants": [],
                "variables": [
                  0.16
                ]
              }
            }
          }
        }
      ],
      "isLightcone": true,
      "desc": "When the wearer uses their Ultimate, all allies' actions are Advanced Forward by #1[i]%.",
      "params": [
        [
          0.16
        ],
        [
          0.18
        ],
        [
          0.2
        ],
        [
          0.22
        ],
        [
          0.24
        ]
      ]
    }
  },
  "isLightcone": true
}