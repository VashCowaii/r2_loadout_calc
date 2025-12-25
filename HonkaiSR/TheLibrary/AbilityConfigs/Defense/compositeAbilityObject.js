const compositeAbilityObject = {
  "fullCharacterName": "Defense",
  "trimCharacterName": "Defense",
  "abilityList": [
    "Defense_Ability20010"
  ],
  "fixedStats": {},
  "abilityObject": {
    "Defense_Ability20010": {
      "fileName": "Defense_Ability20010",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Add Events/Bonuses",
          "to": "Caster",
          "modifier": "LC_20010_Main"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "LC_20010_Main",
          "execute": [
            {
              "eventTrigger": "Ability Use [Owner]: Start",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Skill Type",
                    "skillType": "Ultimate"
                  },
                  "passed": [
                    {
                      "name": "Heal",
                      "target": "Owner of this Modifier",
                      "healPercent": {
                        "operator": "Variables[0] (0.18) || RETURN",
                        "displayLines": "0.18",
                        "constants": [],
                        "variables": [
                          0.18
                        ]
                      },
                      "formula": "Heal from Healer's MaxHP"
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
      "desc": "When the wearer unleashes their Ultimate, they restore HP by #1[i]% of their Max HP.",
      "params": [
        [
          0.18
        ],
        [
          0.21
        ],
        [
          0.24
        ],
        [
          0.27
        ],
        [
          0.3
        ]
      ]
    }
  },
  "isLightcone": true
}