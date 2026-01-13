const compositeAbilityObject = {
  "fullCharacterName": "Nowhere to Run",
  "trimCharacterName": "NowheretoRun",
  "abilityList": [
    "NowheretoRun_Ability21033"
  ],
  "fixedStats": {
    "1": {
      "ATK%": 0.24
    },
    "2": {
      "ATK%": 0.3
    },
    "3": {
      "ATK%": 0.36
    },
    "4": {
      "ATK%": 0.42
    },
    "5": {
      "ATK%": 0.48
    }
  },
  "abilityObject": {
    "NowheretoRun_Ability21033": {
      "fileName": "NowheretoRun_Ability21033",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Add Events/Bonuses",
          "to": "Caster",
          "modifier": "LC_21033_Main"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "LC_21033_Main",
          "execute": [
            {
              "eventTrigger": "Got a Kill [Owner]",
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
                  }
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": []
        }
      ],
      "isLightcone": true,
      "desc": "Increases the wearer's ATK by #1[i]%. Whenever the wearer defeats an enemy, they restore HP equal to #2[i]% of their ATK.",
      "params": [
        [
          0.24,
          0.12
        ],
        [
          0.3,
          0.15
        ],
        [
          0.36,
          0.18
        ],
        [
          0.42,
          0.21
        ],
        [
          0.48,
          0.24
        ]
      ]
    }
  },
  "isLightcone": true
}