const compositeAbilityObject = {
  "fullCharacterName": "Pioneering",
  "trimCharacterName": "Pioneering",
  "abilityList": [
    "Pioneering_Ability20017"
  ],
  "abilityObject": {
    "Pioneering_Ability20017": {
      "fileName": "Pioneering_Ability20017",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Add Events/Bonuses",
          "to": "Caster",
          "modifier": "LC_20017_Main"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "LC_20017_Main",
          "execute": [
            {
              "eventTrigger": "Caused Weakness Break [Owner]",
              "execute": [
                {
                  "name": "Heal",
                  "target": "Owner of this Modifier",
                  "healPercent": {
                    "operator": "Variables[0] (0.12) || RETURN",
                    "displayLines": "0.12",
                    "constants": [],
                    "variables": [
                      0.12
                    ]
                  },
                  "formula": "Heal from Target MaxHP"
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": []
        }
      ],
      "isLightcone": true,
      "desc": "When the wearer Breaks an enemy's Weakness, the wearer restores HP by #1[i]% of their Max HP.",
      "params": [
        [
          0.12
        ],
        [
          0.14
        ],
        [
          0.16
        ],
        [
          0.18
        ],
        [
          0.2
        ]
      ]
    }
  },
  "isLightcone": true
}