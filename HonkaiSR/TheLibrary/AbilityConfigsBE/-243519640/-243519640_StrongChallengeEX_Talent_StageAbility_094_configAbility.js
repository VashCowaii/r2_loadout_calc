const configAbility = {
  "fileName": "-243519640_StrongChallengeEX_Talent_StageAbility_094",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [],
  "whenAdded": [
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"1694092487\">MStrongChallengeEX_Talent_StageAbility_LE_094</a>"
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1007147615\">MStrongChallengeEX_Talent_StageAbility_PLY_094</a>[<span class=\"descriptionNumberColor\">Magic Time</span>]",
      "description": "Elation increases by <span class=\"descriptionNumberColor\">MDF_PropertyValue</span>.",
      "type": "Buff",
      "statusName": "Magic Time",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Stack Target Stat Value",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">ElationDMGAll</span>&nbsp;",
              "value": {
                "operator": "Variables[0] (MDF_PropertyValue) || RETURN",
                "displayLines": "MDF_PropertyValue",
                "constants": [],
                "variables": [
                  "MDF_PropertyValue"
                ]
              }
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1694092487\">MStrongChallengeEX_Talent_StageAbility_LE_094</a>",
      "execute": [
        {
          "eventTrigger": "Entity Created [Anyone]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Is Part Of Team",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "team": "Player Team"
              },
              "passed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "ElationTypeCount",
                    "compareType": ">=",
                    "value2": 4
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"1007147615\">MStrongChallengeEX_Talent_StageAbility_PLY_094</a>[<span class=\"descriptionNumberColor\">Magic Time</span>]",
                      "valuePerStack": {
                        "MDF_PropertyValue": {
                          "operator": "Variables[0] (#ADF_4) || RETURN",
                          "displayLines": "#ADF_4",
                          "constants": [],
                          "variables": [
                            "#ADF_4"
                          ]
                        }
                      }
                    }
                  ],
                  "failed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "ElationTypeCount",
                        "compareType": "=",
                        "value2": 3
                      },
                      "passed": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"1007147615\">MStrongChallengeEX_Talent_StageAbility_PLY_094</a>[<span class=\"descriptionNumberColor\">Magic Time</span>]",
                          "valuePerStack": {
                            "MDF_PropertyValue": {
                              "operator": "Variables[0] (#ADF_3) || RETURN",
                              "displayLines": "#ADF_3",
                              "constants": [],
                              "variables": [
                                "#ADF_3"
                              ]
                            }
                          }
                        }
                      ],
                      "failed": [
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Compare: Variable",
                            "value1": "ElationTypeCount",
                            "compareType": "=",
                            "value2": 2
                          },
                          "passed": [
                            {
                              "name": "Add Events/Bonuses",
                              "to": {
                                "name": "Target Name",
                                "target": "{{Parameter Target}}"
                              },
                              "modifier": "<a class=\"gModGreen\" id=\"1007147615\">MStrongChallengeEX_Talent_StageAbility_PLY_094</a>[<span class=\"descriptionNumberColor\">Magic Time</span>]",
                              "valuePerStack": {
                                "MDF_PropertyValue": {
                                  "operator": "Variables[0] (#ADF_2) || RETURN",
                                  "displayLines": "#ADF_2",
                                  "constants": [],
                                  "variables": [
                                    "#ADF_2"
                                  ]
                                }
                              }
                            }
                          ],
                          "failed": [
                            {
                              "name": "IF",
                              "conditions": {
                                "name": "Compare: Variable",
                                "value1": "ElationTypeCount",
                                "compareType": "=",
                                "value2": 1
                              },
                              "passed": [
                                {
                                  "name": "Add Events/Bonuses",
                                  "to": {
                                    "name": "Target Name",
                                    "target": "{{Parameter Target}}"
                                  },
                                  "modifier": "<a class=\"gModGreen\" id=\"1007147615\">MStrongChallengeEX_Talent_StageAbility_PLY_094</a>[<span class=\"descriptionNumberColor\">Magic Time</span>]",
                                  "valuePerStack": {
                                    "MDF_PropertyValue": {
                                      "operator": "Variables[0] (#ADF_1) || RETURN",
                                      "displayLines": "#ADF_1",
                                      "constants": [],
                                      "variables": [
                                        "#ADF_1"
                                      ]
                                    }
                                  }
                                }
                              ]
                            }
                          ]
                        }
                      ]
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
              "name": "Define Custom Variable with Matching Path",
              "target": {
                "name": "Target Name",
                "target": "{{Player Team All}}.[[removeMemosprite]]"
              },
              "matchToPathFrom": [
                "Elation"
              ],
              "variableName": "ElationTypeCount"
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "ElationTypeCount",
                "compareType": ">=",
                "value2": 4
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Player Team All(with Unselectable)V2}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1007147615\">MStrongChallengeEX_Talent_StageAbility_PLY_094</a>[<span class=\"descriptionNumberColor\">Magic Time</span>]",
                  "valuePerStack": {
                    "MDF_PropertyValue": {
                      "operator": "Variables[0] (#ADF_4) || RETURN",
                      "displayLines": "#ADF_4",
                      "constants": [],
                      "variables": [
                        "#ADF_4"
                      ]
                    }
                  }
                }
              ],
              "failed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "ElationTypeCount",
                    "compareType": "=",
                    "value2": 3
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Player Team All(with Unselectable)V2}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"1007147615\">MStrongChallengeEX_Talent_StageAbility_PLY_094</a>[<span class=\"descriptionNumberColor\">Magic Time</span>]",
                      "valuePerStack": {
                        "MDF_PropertyValue": {
                          "operator": "Variables[0] (#ADF_3) || RETURN",
                          "displayLines": "#ADF_3",
                          "constants": [],
                          "variables": [
                            "#ADF_3"
                          ]
                        }
                      }
                    }
                  ],
                  "failed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "ElationTypeCount",
                        "compareType": "=",
                        "value2": 2
                      },
                      "passed": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Player Team All(with Unselectable)V2}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"1007147615\">MStrongChallengeEX_Talent_StageAbility_PLY_094</a>[<span class=\"descriptionNumberColor\">Magic Time</span>]",
                          "valuePerStack": {
                            "MDF_PropertyValue": {
                              "operator": "Variables[0] (#ADF_2) || RETURN",
                              "displayLines": "#ADF_2",
                              "constants": [],
                              "variables": [
                                "#ADF_2"
                              ]
                            }
                          }
                        }
                      ],
                      "failed": [
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Compare: Variable",
                            "value1": "ElationTypeCount",
                            "compareType": "=",
                            "value2": 1
                          },
                          "passed": [
                            {
                              "name": "Add Events/Bonuses",
                              "to": {
                                "name": "Target Name",
                                "target": "{{Player Team All(with Unselectable)V2}}"
                              },
                              "modifier": "<a class=\"gModGreen\" id=\"1007147615\">MStrongChallengeEX_Talent_StageAbility_PLY_094</a>[<span class=\"descriptionNumberColor\">Magic Time</span>]",
                              "valuePerStack": {
                                "MDF_PropertyValue": {
                                  "operator": "Variables[0] (#ADF_1) || RETURN",
                                  "displayLines": "#ADF_1",
                                  "constants": [],
                                  "variables": [
                                    "#ADF_1"
                                  ]
                                }
                              }
                            }
                          ]
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    }
  ]
}