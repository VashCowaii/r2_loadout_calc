const compositeAbilityObject = {
  "fullCharacterName": "An Instant Before A Gaze",
  "trimCharacterName": "AnInstantBeforeAGaze",
  "abilityList": [
    "AnInstantBeforeAGaze_Ability23018"
  ],
  "fixedStats": {
    "1": {
      "CritDamageBase": 0.36
    },
    "2": {
      "CritDamageBase": 0.42
    },
    "3": {
      "CritDamageBase": 0.48
    },
    "4": {
      "CritDamageBase": 0.54
    },
    "5": {
      "CritDamageBase": 0.6
    }
  },
  "abilityObject": {
    "AnInstantBeforeAGaze_Ability23018": {
      "fileName": "AnInstantBeforeAGaze_Ability23018",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Add Events/Bonuses",
          "to": "Caster",
          "modifier": "LC_23018_Main"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "LC_23018_Sub",
          "execute": [
            {
              "eventTrigger": "Deal Damage Start [Owner]: Any",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Attack Type",
                    "attackTypes": [
                      "Ultimate"
                    ]
                  },
                  "passed": [
                    {
                      "name": "Adjust Target Stats",
                      "on": "Attacker",
                      "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageAll</span>&nbsp;",
                      "value": {
                        "operator": "Variables[0] (0.0036000002) || Variables[1] (CasterMaxSP) || MUL || RETURN",
                        "displayLines": "(0.0036000002 * CasterMaxSP)",
                        "constants": [],
                        "variables": [
                          0.0036000002,
                          "CasterMaxSP"
                        ]
                      }
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Ability Use [Owner]: End",
              "execute": [
                "Modifier Deletes Itself"
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "LC_23018_Main",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Define Custom Variable with Stat",
                  "target": "Owner of this Modifier",
                  "variableName": "CasterMaxSP",
                  "value": "&nbsp;<span class=\"descriptionNumberColor\">EnergyMax</span>&nbsp;"
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "CasterMaxSP",
                    "compareType": ">=",
                    "value2": {
                      "operator": "Variables[0] (180) || RETURN",
                      "displayLines": "180",
                      "constants": [],
                      "variables": [
                        180
                      ]
                    }
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "CasterMaxSP",
                      "value": {
                        "operator": "Variables[0] (180) || RETURN",
                        "displayLines": "180",
                        "constants": [],
                        "variables": [
                          180
                        ]
                      }
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Ability Use [Owner]: Start",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "OR",
                    "conditionList": [
                      {
                        "name": "Skill Type",
                        "skillType": "Ultimate"
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": "Owner of this Modifier",
                      "modifier": "LC_23018_Sub"
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
      "desc": "Increases the wearer's CRIT DMG by #1[i]%. When the wearer uses Ultimate, increases DMG dealt by the wearer's Ultimate based on their Max Energy. Each point of Energy increases DMG dealt by Ultimate by #2[f2]%. A max of #3[i] points of Energy will be taken into account for this.",
      "params": [
        [
          0.36,
          0.0036000002,
          180
        ],
        [
          0.42,
          0.0042,
          180
        ],
        [
          0.48,
          0.0048,
          180
        ],
        [
          0.54,
          0.0054,
          180
        ],
        [
          0.6,
          0.0059999996,
          180
        ]
      ]
    }
  },
  "isLightcone": true
}