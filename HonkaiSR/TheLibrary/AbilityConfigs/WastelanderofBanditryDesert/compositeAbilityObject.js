const compositeAbilityObject = {
  "fullCharacterName": "Wastelander of Banditry Desert",
  "trimCharacterName": "WastelanderofBanditryDesert",
  "abilityList": [
    "WastelanderofBanditryDesert_Ability51121"
  ],
  "abilityObject": {
    "WastelanderofBanditryDesert_Ability51121": {
      "fileName": "WastelanderofBanditryDesert_Ability51121",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Add Events/Bonuses",
          "to": "Caster",
          "modifier": "Relic_112_Main"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "Relic_112_Main",
          "execute": [
            {
              "eventTrigger": "Deal Damage Start [Owner]: Any",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": "Target Receiving DMG",
                    "value1": "StatusCount",
                    "compareType": ">=",
                    "value2": 1
                  },
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Has Flag",
                        "target": "Target Receiving DMG",
                        "flagName": "STAT_Confine"
                      },
                      "passed": [
                        {
                          "name": "Adjust Target Stats",
                          "on": "Attacker",
                          "statName": "&nbsp;<span class=\"descriptionNumberColor\">CritRateSUM</span>&nbsp;",
                          "value": {
                            "operator": "Variables[0] (0.1) || RETURN",
                            "displayLines": "0.1",
                            "constants": [],
                            "variables": [
                              0.1
                            ]
                          }
                        },
                        {
                          "name": "Adjust Target Stats",
                          "on": "Attacker",
                          "statName": "&nbsp;<span class=\"descriptionNumberColor\">CritDamageSUM</span>&nbsp;",
                          "value": {
                            "operator": "Variables[0] (0.2) || RETURN",
                            "displayLines": "0.2",
                            "constants": [],
                            "variables": [
                              0.2
                            ]
                          }
                        }
                      ],
                      "failed": [
                        {
                          "name": "Adjust Target Stats",
                          "on": "Attacker",
                          "statName": "&nbsp;<span class=\"descriptionNumberColor\">CritRateSUM</span>&nbsp;",
                          "value": {
                            "operator": "Variables[0] (0.1) || RETURN",
                            "displayLines": "0.1",
                            "constants": [],
                            "variables": [
                              0.1
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
      "isRelic": true,
      "desc": [
        "Increases Imaginary DMG by 10%.",
        "When dealing DMG to debuffed enemy targets, the wearer has their CRIT Rate increased by 10%. And when they deal DMG to Imprisoned enemy targets, their CRIT DMG increases by 20%."
      ],
      "params": [
        [
          0.1
        ],
        [
          0.1,
          0.2
        ]
      ]
    }
  },
  "fixedStats": {
    "2": {
      "DamageImaginary": 0.1
    },
    "4": {}
  },
  "isLightcone": true,
  "isRelic": true
}