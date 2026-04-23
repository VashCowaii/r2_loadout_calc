const entityPageType = "relic"
const compositeAbilityObject = {
  "fullCharacterName": "Punklorde Stage Zero",
  "trimCharacterName": "PunklordeStageZero",
  "abilityList": [
    "PunklordeStageZero_Ability53251"
  ],
  "abilityObject": {
    "PunklordeStageZero_Ability53251": {
      "fileName": "PunklordeStageZero_Ability53251",
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
          "modifier": "<a class=\"gModGreen\" id=\"-924667880\">Relic_325_Main</a>"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1843890475\">Relic_325_Sub2</a>",
          "stackType": "ReplaceByCaster"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1999406789\">Relic_325_Sub</a>[<span class=\"descriptionNumberColor\">Punklorde Stage Zero</span>]",
          "stackType": "ReplaceByCaster",
          "description": "CRIT DMG increases by <span class=\"descriptionNumberColor\">MDF_PropertyValue</span>.",
          "type": "Buff",
          "statusName": "Punklorde Stage Zero"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-924667880\">Relic_325_Main</a>",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "_Flag_1",
                  "value": 0
                },
                {
                  "name": "Stack Target Stat Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">CritDamageBase</span>&nbsp;",
                  "value": 0,
                  "isRefresh": true
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Ability Value",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "&nbsp;<span class=\"descriptionNumberColor\">ElationDMGSUM</span>&nbsp;",
                    "compareType": ">=",
                    "value2": {
                      "operator": "Variables[0] (0.8) || RETURN",
                      "displayLines": "0.8",
                      "constants": [],
                      "variables": [
                        0.8
                      ]
                    }
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "_Flag_1",
                      "value": 2
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"1999406789\">Relic_325_Sub</a>[<span class=\"descriptionNumberColor\">Punklorde Stage Zero</span>]",
                      "valuePerStack": {
                        "MDF_PropertyValue": {
                          "operator": "Variables[0] (0.32) || RETURN",
                          "displayLines": "0.32",
                          "constants": [],
                          "variables": [
                            0.32
                          ]
                        }
                      }
                    },
                    {
                      "name": "Stack Target Stat Value",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "statName": "&nbsp;<span class=\"descriptionNumberColor\">CritDamageBase</span>&nbsp;",
                      "value": {
                        "operator": "Variables[0] (0.32) || RETURN",
                        "displayLines": "0.32",
                        "constants": [],
                        "variables": [
                          0.32
                        ]
                      },
                      "isRefresh": true
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-1843890475\">Relic_325_Sub2</a>"
                    }
                  ],
                  "failed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Ability Value",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value1": "&nbsp;<span class=\"descriptionNumberColor\">ElationDMGSUM</span>&nbsp;",
                        "compareType": ">=",
                        "value2": {
                          "operator": "Variables[0] (0.4) || RETURN",
                          "displayLines": "0.4",
                          "constants": [],
                          "variables": [
                            0.4
                          ]
                        }
                      },
                      "passed": [
                        {
                          "name": "Define Custom Variable",
                          "variableName": "_Flag_1",
                          "value": 1
                        },
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"1999406789\">Relic_325_Sub</a>[<span class=\"descriptionNumberColor\">Punklorde Stage Zero</span>]",
                          "valuePerStack": {
                            "MDF_PropertyValue": {
                              "operator": "Variables[0] (0.2) || RETURN",
                              "displayLines": "0.2",
                              "constants": [],
                              "variables": [
                                0.2
                              ]
                            }
                          }
                        },
                        {
                          "name": "Stack Target Stat Value",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "statName": "&nbsp;<span class=\"descriptionNumberColor\">CritDamageBase</span>&nbsp;",
                          "value": {
                            "operator": "Variables[0] (0.2) || RETURN",
                            "displayLines": "0.2",
                            "constants": [],
                            "variables": [
                              0.2
                            ]
                          },
                          "isRefresh": true
                        },
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"-1843890475\">Relic_325_Sub2</a>"
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ],
          "abilityValueChange": [
            {
              "name": "Ability Value Changes",
              "variableName": "&nbsp;<span class=\"descriptionNumberColor\">ElationDMGSUM</span>&nbsp;",
              "valueRanges": [
                {
                  "name": "Variable Value Range Conditions",
                  "minValue": {
                    "operator": "Variables[0] (0.4) || RETURN",
                    "displayLines": "0.4",
                    "constants": [],
                    "variables": [
                      0.4
                    ]
                  },
                  "maxValue": {
                    "operator": "Variables[0] (0.8) || RETURN",
                    "displayLines": "0.8",
                    "constants": [],
                    "variables": [
                      0.8
                    ]
                  },
                  "whenEnteringRange": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "_Flag_1",
                        "compareType": "<",
                        "value2": 1
                      },
                      "passed": [
                        {
                          "name": "Define Custom Variable",
                          "variableName": "_Flag_1",
                          "value": 1
                        },
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"1999406789\">Relic_325_Sub</a>[<span class=\"descriptionNumberColor\">Punklorde Stage Zero</span>]",
                          "valuePerStack": {
                            "MDF_PropertyValue": {
                              "operator": "Variables[0] (0.2) || RETURN",
                              "displayLines": "0.2",
                              "constants": [],
                              "variables": [
                                0.2
                              ]
                            }
                          }
                        },
                        {
                          "name": "Stack Target Stat Value",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "statName": "&nbsp;<span class=\"descriptionNumberColor\">CritDamageBase</span>&nbsp;",
                          "value": {
                            "operator": "Variables[0] (0.2) || RETURN",
                            "displayLines": "0.2",
                            "constants": [],
                            "variables": [
                              0.2
                            ]
                          },
                          "isRefresh": true
                        },
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"-1843890475\">Relic_325_Sub2</a>"
                        }
                      ]
                    }
                  ]
                },
                {
                  "name": "Variable Value Range Conditions",
                  "minValue": {
                    "operator": "Variables[0] (0.8) || RETURN",
                    "displayLines": "0.8",
                    "constants": [],
                    "variables": [
                      0.8
                    ]
                  },
                  "whenEnteringRange": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "_Flag_1",
                        "compareType": "<",
                        "value2": 2
                      },
                      "passed": [
                        {
                          "name": "Define Custom Variable",
                          "variableName": "_Flag_1",
                          "value": 2
                        },
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"1999406789\">Relic_325_Sub</a>[<span class=\"descriptionNumberColor\">Punklorde Stage Zero</span>]",
                          "valuePerStack": {
                            "MDF_PropertyValue": {
                              "operator": "Variables[0] (0.32) || RETURN",
                              "displayLines": "0.32",
                              "constants": [],
                              "variables": [
                                0.32
                              ]
                            }
                          }
                        },
                        {
                          "name": "Stack Target Stat Value",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "statName": "&nbsp;<span class=\"descriptionNumberColor\">CritDamageBase</span>&nbsp;",
                          "value": {
                            "operator": "Variables[0] (0.32) || RETURN",
                            "displayLines": "0.32",
                            "constants": [],
                            "variables": [
                              0.32
                            ]
                          },
                          "isRefresh": true
                        },
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"-1843890475\">Relic_325_Sub2</a>"
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
        "Increases the wearer's Elation by 8%. When Elation reaches 40%/80% for the first time in combat, increases the wearer's CRIT DMG by 20%/32%."
      ],
      "params": [
        [
          0.08,
          0.4,
          0.8,
          0.2,
          0.32
        ],
        []
      ]
    }
  },
  "fixedStats": {
    "2": {
      "ElationDMGAll": 0.08
    },
    "4": {}
  },
  "isLightcone": true,
  "isRelic": true,
  "noReader": false
}