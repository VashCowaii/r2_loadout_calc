const compositeAbilityObject = {
  "fullCharacterName": "Subscribe for More!",
  "trimCharacterName": "SubscribeforMore",
  "abilityList": [
    "SubscribeforMore_Ability21017"
  ],
  "fixedStats": {},
  "abilityObject": {
    "SubscribeforMore_Ability21017": {
      "fileName": "SubscribeforMore_Ability21017",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Add Events/Bonuses",
          "to": "Caster",
          "modifier": "LC_21017_Main"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "LC_21017_Main",
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
                      "Basic ATK"
                    ]
                  },
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "target": "Owner of this Modifier",
                        "value1": "Energy%",
                        "compareType": ">=",
                        "value2": 1
                      },
                      "passed": [
                        {
                          "name": "Adjust Target Stats",
                          "on": "Attacker",
                          "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageAll</span>&nbsp;",
                          "value": {
                            "operator": "Variables[0] (0.24) || Variables[1] (0.24) || ADD || RETURN",
                            "displayLines": "(0.24 + 0.24)",
                            "constants": [],
                            "variables": [
                              0.24,
                              0.24
                            ]
                          }
                        }
                      ],
                      "failed": [
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
              ]
            }
          ],
          "stackData": [],
          "latentQueue": []
        }
      ],
      "isLightcone": true,
      "desc": "The wearer's Basic ATK and Skill deals #1[i]% more DMG. This effect increases by an extra #2[i]% when the wearer's current Energy reaches its max level.",
      "params": [
        [
          0.24,
          0.24
        ],
        [
          0.3,
          0.3
        ],
        [
          0.36,
          0.36
        ],
        [
          0.42,
          0.42
        ],
        [
          0.48,
          0.48
        ]
      ]
    }
  },
  "isLightcone": true
}