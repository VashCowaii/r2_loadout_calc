const compositeAbilityObject = {
  "fullCharacterName": "Return to Darkness",
  "trimCharacterName": "ReturntoDarkness",
  "abilityList": [
    "ReturntoDarkness_Ability21031"
  ],
  "fixedStats": {
    "1": {
      "CritRateBase": 0.12
    },
    "2": {
      "CritRateBase": 0.15
    },
    "3": {
      "CritRateBase": 0.18
    },
    "4": {
      "CritRateBase": 0.21
    },
    "5": {
      "CritRateBase": 0.24
    }
  },
  "abilityObject": {
    "ReturntoDarkness_Ability21031": {
      "fileName": "ReturntoDarkness_Ability21031",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1074555960\">LC_21031_Main</a>"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1074555960\">LC_21031_Main</a>",
          "execute": [
            {
              "eventTrigger": "Deal Damage End [Owner]: Any",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Is a Crit"
                      },
                      {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value1": "Flag_21031",
                        "compareType": "=",
                        "value2": 0,
                        "contextScope": "TargetEntity"
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Random Chance",
                        "chance": {
                          "operator": "Variables[0] (0.16) || RETURN",
                          "displayLines": "0.16",
                          "constants": [],
                          "variables": [
                            0.16
                          ]
                        }
                      },
                      "passed": [
                        {
                          "name": "Dispel Debuffs",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Ability Target TAKING DMG}}"
                          },
                          "typeOverride": "Buff",
                          "dispelCount": 1,
                          "dispelOrder": "LastAdded"
                        },
                        {
                          "name": "Declare Custom Variable",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "scope": "TargetEntity",
                          "variableName": "Flag_21031",
                          "value": 1
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Declare Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "scope": "TargetEntity",
                  "variableName": "Flag_21031"
                }
              ]
            },
            {
              "eventTrigger": "Attack DMG End [Owner]",
              "execute": [
                {
                  "name": "Declare Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "scope": "TargetEntity",
                  "variableName": "Flag_21031"
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": []
        }
      ],
      "isLightcone": true,
      "desc": "Increases the wearer's CRIT Rate by #1[i]%. After a CRIT Hit, there is a #2[i]% fixed chance to dispel 1 buff on the target enemy. This effect can only trigger 1 time per attack.",
      "params": [
        [
          0.12,
          0.16
        ],
        [
          0.15,
          0.2
        ],
        [
          0.18,
          0.24
        ],
        [
          0.21,
          0.28
        ],
        [
          0.24,
          0.32
        ]
      ]
    }
  },
  "isLightcone": true
}