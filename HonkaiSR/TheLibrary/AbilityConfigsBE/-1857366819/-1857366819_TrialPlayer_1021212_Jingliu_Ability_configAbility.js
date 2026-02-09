const configAbility = {
  "fileName": "-1857366819_TrialPlayer_1021212_Jingliu_Ability",
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
      "modifier": "<a class=\"gModGreen\" id=\"-620579539\">TrialPlayer_1021212_Jingliu_AddDisableAction_Modifier</a>",
      "immediateEffect": true
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-474927513\">TrialPlayer_1021212_Jingliu_OneMore_Modifier</a>",
      "modifierFlags": [
        "OneMore"
      ],
      "execute": [
        {
          "eventTrigger": "Attack Start [Owner]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "target": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}"
                },
                "value1": "MDF_OneMoreTime",
                "compareType": "=",
                "value2": {
                  "operator": "Constants[0] (1) || RETURN",
                  "displayLines": "1",
                  "constants": [
                    1
                  ],
                  "variables": []
                },
                "contextScope": "ContextModifier"
              },
              "passed": [
                "Modifier Deletes Itself"
              ],
              "failed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_OneMoreTime",
                  "value": 1
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-59977986\">TrialPlayer_1021212_Jingliu_DisableAction_Modifier</a>",
      "modifierFlags": [
        "DisableAction"
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-620579539\">TrialPlayer_1021212_Jingliu_AddDisableAction_Modifier</a>",
      "execute": [
        {
          "eventTrigger": "Turn [Pre-action Phase]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "target": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}"
                },
                "value1": "MDF_ActionTime",
                "compareType": ">=",
                "value2": {
                  "operator": "Constants[0] (1) || RETURN",
                  "displayLines": "1",
                  "constants": [
                    1
                  ],
                  "variables": []
                },
                "contextScope": "ContextModifier"
              },
              "passed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "MDF_ActionTime",
                    "compareType": "=",
                    "value2": {
                      "operator": "Constants[0] (1) || RETURN",
                      "displayLines": "1",
                      "constants": [
                        1
                      ],
                      "variables": []
                    },
                    "contextScope": "ContextModifier"
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "scope": "ContextModifier",
                      "variableName": "MDF_ActionTime",
                      "value": {
                        "operator": "Variables[0] (MDF_ActionTime) || Constants[0] (1) || ADD || RETURN",
                        "displayLines": "(MDF_ActionTime + 1)",
                        "constants": [
                          1
                        ],
                        "variables": [
                          "MDF_ActionTime"
                        ]
                      }
                    }
                  ],
                  "failed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value1": "MDF_ActionTime",
                        "compareType": "=",
                        "value2": {
                          "operator": "Constants[0] (2) || RETURN",
                          "displayLines": "2",
                          "constants": [
                            2
                          ],
                          "variables": []
                        },
                        "contextScope": "ContextModifier"
                      },
                      "passed": [
                        {
                          "name": "Define Custom Variable",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "scope": "ContextModifier",
                          "variableName": "MDF_ActionTime",
                          "value": {
                            "operator": "Variables[0] (MDF_ActionTime) || Constants[0] (1) || ADD || RETURN",
                            "displayLines": "(MDF_ActionTime + 1)",
                            "constants": [
                              1
                            ],
                            "variables": [
                              "MDF_ActionTime"
                            ]
                          }
                        }
                      ],
                      "failed": [
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Compare: Variable",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            },
                            "value1": "MDF_ActionTime",
                            "compareType": "=",
                            "value2": {
                              "operator": "Constants[0] (3) || RETURN",
                              "displayLines": "3",
                              "constants": [
                                3
                              ],
                              "variables": []
                            },
                            "contextScope": "ContextModifier"
                          },
                          "passed": [
                            {
                              "name": "Define Custom Variable",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Modifier Holder}}"
                              },
                              "scope": "ContextModifier",
                              "variableName": "MDF_ActionTime",
                              "value": {
                                "operator": "Variables[0] (MDF_ActionTime) || Constants[0] (1) || ADD || RETURN",
                                "displayLines": "(MDF_ActionTime + 1)",
                                "constants": [
                                  1
                                ],
                                "variables": [
                                  "MDF_ActionTime"
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
              "failed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "MDF_ActionTime",
                    "compareType": "=",
                    "value2": {
                      "operator": "Constants[0] (0) || RETURN",
                      "displayLines": "0",
                      "constants": [
                        0
                      ],
                      "variables": []
                    },
                    "contextScope": "ContextModifier"
                  }
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-59977986\">TrialPlayer_1021212_Jingliu_DisableAction_Modifier</a>",
                  "duration": 1,
                  "immediateEffect": true
                },
                {
                  "name": "Define Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "scope": "ContextModifier",
                  "variableName": "MDF_ActionTime",
                  "value": {
                    "operator": "Variables[0] (MDF_ActionTime) || Constants[0] (1) || ADD || RETURN",
                    "displayLines": "(MDF_ActionTime + 1)",
                    "constants": [
                      1
                    ],
                    "variables": [
                      "MDF_ActionTime"
                    ]
                  }
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "When Stacking/Receiving Modifier"
        }
      ],
      "stackData": [],
      "latentQueue": []
    }
  ]
}