const compositeAbilityObject = {
  "fullCharacterName": "Shadowed by Night",
  "trimCharacterName": "ShadowedbyNight",
  "abilityList": [
    "ShadowedbyNight_Ability21047"
  ],
  "fixedStats": {
    "1": {
      "DamageBreak": 0.28
    },
    "2": {
      "DamageBreak": 0.35
    },
    "3": {
      "DamageBreak": 0.42
    },
    "4": {
      "DamageBreak": 0.49
    },
    "5": {
      "DamageBreak": 0.56
    }
  },
  "abilityObject": {
    "ShadowedbyNight_Ability21047": {
      "fileName": "ShadowedbyNight_Ability21047",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Add Events/Bonuses",
          "to": "Caster",
          "modifier": "LC_21047_Main"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "LC_21047_Bonus[<span class=\"descriptionNumberColor\">SPD Boost</span>]",
          "stackType": "ReplaceByCaster",
          "modifierFlags": [
            "STAT_SpeedUp"
          ],
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Stack Target Stat Value",
                  "target": "Owner of this Modifier",
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">SPD%</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (0.08) || RETURN",
                    "displayLines": "0.08",
                    "constants": [],
                    "variables": [
                      0.08
                    ]
                  }
                }
              ]
            }
          ],
          "description": "SPD increases by <span class=\"descriptionNumberColor\">#SkillEquip_P2_SpeedAddedRatio</span>.",
          "type": "Buff",
          "effectName": "SPD Boost",
          "statusName": "SPD Boost"
        },
        {
          "name": "Modifier Construction",
          "for": "LC_21047_Main",
          "execute": [
            {
              "eventTrigger": "Turn [Pre-action Phase]",
              "execute": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "Flag_21047",
                  "value": 0
                }
              ]
            },
            {
              "eventTrigger": "Deal Damage End [Owner]: Any",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Attack Type",
                    "attackTypes": [
                      "Break DMG"
                    ]
                  },
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "Flag_21047",
                        "compareType": "=",
                        "value2": 0
                      },
                      "passed": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": "Owner of this Modifier",
                          "modifier": "LC_21047_Bonus[<span class=\"descriptionNumberColor\">SPD Boost</span>]",
                          "duration": {
                            "operator": "Variables[0] (2) || RETURN",
                            "displayLines": "2",
                            "constants": [],
                            "variables": [
                              2
                            ]
                          }
                        },
                        {
                          "name": "Define Custom Variable",
                          "variableName": "Flag_21047",
                          "value": 1
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Enter Battle",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "Wave Count",
                    "compareType": "=",
                    "value2": 1
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": "Owner of this Modifier",
                      "modifier": "LC_21047_Bonus[<span class=\"descriptionNumberColor\">SPD Boost</span>]",
                      "duration": {
                        "operator": "Variables[0] (2) || RETURN",
                        "displayLines": "2",
                        "constants": [],
                        "variables": [
                          2
                        ]
                      }
                    }
                  ]
                }
              ],
              "priorityLevel": -80
            }
          ],
          "stackData": [],
          "latentQueue": []
        }
      ],
      "isLightcone": true,
      "desc": "Increases the wearer's Break Effect by #1[i]%. When entering battle or after dealing Break DMG, increases SPD by #2[i]%, lasting for #3[i] turn(s). This effect can only trigger once per turn.",
      "params": [
        [
          0.28,
          0.08,
          2
        ],
        [
          0.35,
          0.09,
          2
        ],
        [
          0.42,
          0.1,
          2
        ],
        [
          0.49,
          0.11,
          2
        ],
        [
          0.56,
          0.12,
          2
        ]
      ]
    }
  },
  "isLightcone": true
}