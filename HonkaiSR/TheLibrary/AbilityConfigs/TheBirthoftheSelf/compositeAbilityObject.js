const compositeAbilityObject = {
  "fullCharacterName": "The Birth of the Self",
  "trimCharacterName": "TheBirthoftheSelf",
  "abilityList": [
    "TheBirthoftheSelf_Ability21006"
  ],
  "fixedStats": {},
  "abilityObject": {
    "TheBirthoftheSelf_Ability21006": {
      "fileName": "TheBirthoftheSelf_Ability21006",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Add Events/Bonuses",
          "to": "Caster",
          "modifier": "LC_21006_Main"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "LC_21006_Main",
          "execute": [
            {
              "eventTrigger": "Deal Damage Start [Owner]: Any",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Attack Type",
                    "attackTypes": [
                      "Follow-up"
                    ]
                  },
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "target": "Target Receiving DMG",
                        "value1": "CurrentHP%",
                        "compareType": "<=",
                        "value2": {
                          "operator": "Variables[0] (0.5) || RETURN",
                          "displayLines": "0.5",
                          "constants": [],
                          "variables": [
                            0.5
                          ]
                        }
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
      "desc": "Increases DMG dealt by the wearer's Follow-Up ATKs by #1[i]%. If the current HP percentage of the enemy target is below or equal to #2[i]%, increases DMG dealt by Follow-Up ATKs by an extra #3[i]%.",
      "params": [
        [
          0.24,
          0.5,
          0.24
        ],
        [
          0.3,
          0.5,
          0.3
        ],
        [
          0.36,
          0.5,
          0.36
        ],
        [
          0.42,
          0.5,
          0.42
        ],
        [
          0.48,
          0.5,
          0.48
        ]
      ]
    }
  },
  "isLightcone": true
}