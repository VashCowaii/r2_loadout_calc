const compositeAbilityObject = {
  "fullCharacterName": "See You at the End",
  "trimCharacterName": "SeeYouattheEnd",
  "abilityList": [
    "SeeYouattheEnd_Ability21062"
  ],
  "fixedStats": {
    "1": {
      "CritDamageBase": 0.24
    },
    "2": {
      "CritDamageBase": 0.28
    },
    "3": {
      "CritDamageBase": 0.32
    },
    "4": {
      "CritDamageBase": 0.36
    },
    "5": {
      "CritDamageBase": 0.4
    }
  },
  "abilityObject": {
    "SeeYouattheEnd_Ability21062": {
      "fileName": "SeeYouattheEnd_Ability21062",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Add Events/Bonuses",
          "to": "Caster",
          "modifier": "LC_21062_Main"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "LC_21062_Main",
          "execute": [
            {
              "eventTrigger": "Deal Damage Start [Owner]: Any",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Attack Type",
                    "attackTypes": [
                      "Skill",
                      "Follow-up"
                    ]
                  },
                  "passed": [
                    {
                      "name": "Adjust Target Stats",
                      "on": "Attacker",
                      "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageAll</span>&nbsp;",
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
              ]
            }
          ],
          "stackData": [],
          "latentQueue": []
        }
      ],
      "isLightcone": true,
      "desc": "Increases the wearer's CRIT DMG by #1[i]%. The Skill DMG and Follow-Up ATK DMG dealt by the wearer increase by #2[i]%.",
      "params": [
        [
          0.24,
          0.24
        ],
        [
          0.28,
          0.28
        ],
        [
          0.32,
          0.32
        ],
        [
          0.36,
          0.36
        ],
        [
          0.4,
          0.4
        ]
      ]
    }
  },
  "isLightcone": true
}