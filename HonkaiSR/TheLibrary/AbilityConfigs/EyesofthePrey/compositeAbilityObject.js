const compositeAbilityObject = {
  "fullCharacterName": "Eyes of the Prey",
  "trimCharacterName": "EyesofthePrey",
  "abilityList": [
    "EyesofthePrey_Ability21008"
  ],
  "fixedStats": {
    "1": {
      "EffectHitRate": 0.2
    },
    "2": {
      "EffectHitRate": 0.25
    },
    "3": {
      "EffectHitRate": 0.3
    },
    "4": {
      "EffectHitRate": 0.35
    },
    "5": {
      "EffectHitRate": 0.4
    }
  },
  "abilityObject": {
    "EyesofthePrey_Ability21008": {
      "fileName": "EyesofthePrey_Ability21008",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Add Events/Bonuses",
          "to": "Caster",
          "modifier": "LC_21008_Main"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "LC_21008_Main",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Stack Target Stat Value",
                  "target": "Owner of this Modifier",
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageDOT</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (0.24) || RETURN",
                    "displayLines": "0.24",
                    "constants": [],
                    "variables": [
                      0.24
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
      "desc": "Increases the wearer's Effect Hit Rate by #1[i]% and increases DoT by #2[i]%.",
      "params": [
        [
          0.2,
          0.24
        ],
        [
          0.25,
          0.3
        ],
        [
          0.3,
          0.36
        ],
        [
          0.35,
          0.42
        ],
        [
          0.4,
          0.48
        ]
      ]
    }
  },
  "isLightcone": true
}