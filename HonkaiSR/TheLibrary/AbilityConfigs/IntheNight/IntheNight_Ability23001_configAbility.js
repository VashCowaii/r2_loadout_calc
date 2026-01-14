const configAbility = {
  "fileName": "IntheNight_Ability23001",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Add Events/Bonuses",
      "to": "Caster",
      "modifier": "LC_23001_Main"
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "LC_23001_Main",
      "execute": [
        {
          "eventTrigger": "Deal Damage Start [Owner]: Any",
          "execute": [
            {
              "name": "Define Custom Variable",
              "variableName": "_Layer",
              "value": 0
            },
            {
              "name": "Define Custom Variable with Stat",
              "target": "Owner of this Modifier",
              "variableName": "_CasterSpeed",
              "value": "&nbsp;<span class=\"descriptionNumberColor\">Speed</span>&nbsp;"
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "_CasterSpeed",
                "compareType": ">=",
                "value2": {
                  "operator": "Constants[0] (100) || Variables[0] (10) || ADD || RETURN",
                  "displayLines": "(100 + 10)",
                  "constants": [
                    100
                  ],
                  "variables": [
                    10
                  ]
                }
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "_CasterSpeed",
                  "value": {
                    "operator": "Variables[0] (_CasterSpeed) || Constants[0] (100) || SUB || RETURN",
                    "displayLines": "(_CasterSpeed - 100)",
                    "constants": [
                      100
                    ],
                    "variables": [
                      "_CasterSpeed"
                    ]
                  }
                },
                {
                  "name": "Looped Event",
                  "maxLoops": {
                    "operator": "Variables[0] (6) || RETURN",
                    "displayLines": "6",
                    "constants": [],
                    "variables": [
                      6
                    ]
                  },
                  "Event": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "_CasterSpeed",
                        "compareType": ">=",
                        "value2": {
                          "operator": "Variables[0] (10) || RETURN",
                          "displayLines": "10",
                          "constants": [],
                          "variables": [
                            10
                          ]
                        }
                      },
                      "passed": [
                        {
                          "name": "Define Custom Variable",
                          "variableName": "_CasterSpeed",
                          "value": {
                            "operator": "Variables[0] (_CasterSpeed) || Variables[1] (10) || SUB || RETURN",
                            "displayLines": "(_CasterSpeed - 10)",
                            "constants": [],
                            "variables": [
                              "_CasterSpeed",
                              10
                            ]
                          }
                        },
                        {
                          "name": "Define Custom Variable",
                          "variableName": "_Layer",
                          "value": {
                            "operator": "Variables[0] (_Layer) || Constants[0] (1) || ADD || RETURN",
                            "displayLines": "(_Layer + 1)",
                            "constants": [
                              1
                            ],
                            "variables": [
                              "_Layer"
                            ]
                          }
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Attack Type",
                "attackTypes": [
                  "Basic ATK",
                  "Skill"
                ]
              },
              "passed": [
                {
                  "name": "Adjust Target Stats",
                  "modifiedValuesArray": [
                    {
                      "on": "Attacker",
                      "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageAll</span>&nbsp;",
                      "value": "(_Layer * 0.06)"
                    }
                  ]
                }
              ]
            },
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
                  "modifiedValuesArray": [
                    {
                      "on": "Attacker",
                      "statName": "&nbsp;<span class=\"descriptionNumberColor\">CritDamageSUM</span>&nbsp;",
                      "value": "(_Layer * 0.12)"
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
  "desc": "Increases the wearer's CRIT Rate by #1[i]%. While the wearer is in battle, for every #2[i] SPD that exceeds 100, increases DMG dealt by Basic ATK and Skill by #3[i]%. At the same time, increases the CRIT DMG of Ultimate by #4[i]%. This effect can stack up to #5[i] time(s).",
  "params": [
    [
      0.18,
      10,
      0.06,
      0.12,
      6
    ],
    [
      0.21,
      10,
      0.07,
      0.14,
      6
    ],
    [
      0.24,
      10,
      0.08,
      0.16,
      6
    ],
    [
      0.27,
      10,
      0.09,
      0.18,
      6
    ],
    [
      0.3,
      10,
      0.1,
      0.2,
      6
    ]
  ]
}