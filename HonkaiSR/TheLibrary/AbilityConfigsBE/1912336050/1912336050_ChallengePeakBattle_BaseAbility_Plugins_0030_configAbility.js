const configAbility = {
  "fileName": "1912336050_ChallengePeakBattle_BaseAbility_Plugins_0030",
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
      "modifier": "<a class=\"gModGreen\" id=\"348772052\">Modifier_ChallengePeakBattle_BaseAbility_Plugins_0030</a>"
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-785489005\">Modifier_ChallengePeakBattle_BaseAbility_Plugins_0030_02</a>[<span class=\"descriptionNumberColor\">Memoria Swarm</span>]",
      "stackType": "Replace",
      "description": "DMG dealt increases by <span class=\"descriptionNumberColor\">ChallengePeakBattle_Plugins_0030_ADF_1</span>.",
      "type": "Other",
      "statusName": "Memoria Swarm",
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
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageAll</span>&nbsp;",
              "value": {
                "operator": "Variables[0] (ChallengePeakBattle_Plugins_0030_ADF_1) || RETURN",
                "displayLines": "ChallengePeakBattle_Plugins_0030_ADF_1",
                "constants": [],
                "variables": [
                  "ChallengePeakBattle_Plugins_0030_ADF_1"
                ]
              }
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__348772052\">Modifier_ChallengePeakBattle_BaseAbility_Plugins_0030</a>",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Use Custom Character Function",
              "functionName": "<a class=\"gTempYellow\" id=\"-390567617\">ChallengePeakBattle_BaseAbility_Plugins_0030_Template</a>"
            }
          ]
        },
        {
          "eventTrigger": "Entity Death [Anyone]",
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
                  "name": "Use Custom Character Function",
                  "functionName": "<a class=\"gTempYellow\" id=\"-390567617\">ChallengePeakBattle_BaseAbility_Plugins_0030_Template</a>"
                }
              ]
            }
          ]
        },
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
                  "name": "Use Custom Character Function",
                  "functionName": "<a class=\"gTempYellow\" id=\"-390567617\">ChallengePeakBattle_BaseAbility_Plugins_0030_Template</a>"
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "Departed State: Begin [Anyone]",
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
                  "name": "Use Custom Character Function",
                  "functionName": "<a class=\"gTempYellow\" id=\"-390567617\">ChallengePeakBattle_BaseAbility_Plugins_0030_Template</a>"
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "Departed State: End [Anyone]",
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
                  "name": "Use Custom Character Function",
                  "functionName": "<a class=\"gTempYellow\" id=\"-390567617\">ChallengePeakBattle_BaseAbility_Plugins_0030_Template</a>"
                }
              ]
            }
          ]
        }
      ],
      "modifierFunctions": [
        {
          "name": "CharacterFunctions",
          "functionName": "<a class=\"gTempYellow\" id=\"fun__-390567617\">ChallengePeakBattle_BaseAbility_Plugins_0030_Template</a>",
          "parse": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "target": {
                  "name": "Target Name",
                  "target": "{{Player Team All(with Unselectable)V2}}"
                },
                "value1": "TeamCharacterCount",
                "compareType": "=",
                "value2": {
                  "operator": "Variables[0] (ServantNumLast) || RETURN",
                  "displayLines": "ServantNumLast",
                  "constants": [],
                  "variables": [
                    "ServantNumLast"
                  ]
                },
                "conditions": {
                  "name": "Is Entity Type",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "type": "Memosprite"
                }
              },
              "failed": [
                {
                  "name": "Define Custom Variable with Team Count",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Player Team All(with Unselectable)V2}}"
                  },
                  "variableName": "ServantNumCurrent",
                  "livingTargets": true,
                  "conditions": {
                    "name": "Is Entity Type",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "type": "Memosprite"
                  }
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Player Team All(with Unselectable)V2}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-785489005\">Modifier_ChallengePeakBattle_BaseAbility_Plugins_0030_02</a>[<span class=\"descriptionNumberColor\">Memoria Swarm</span>]"
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "ServantNumCurrent",
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
                      "modifier": "<a class=\"gModGreen\" id=\"-785489005\">Modifier_ChallengePeakBattle_BaseAbility_Plugins_0030_02</a>[<span class=\"descriptionNumberColor\">Memoria Swarm</span>]",
                      "valuePerStack": {
                        "ChallengePeakBattle_Plugins_0030_ADF_1": {
                          "operator": "Variables[0] (#ADF_1) || RETURN",
                          "displayLines": "#ADF_1",
                          "constants": [],
                          "variables": [
                            "#ADF_1"
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
                        "value1": "ServantNumCurrent",
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
                          "modifier": "<a class=\"gModGreen\" id=\"-785489005\">Modifier_ChallengePeakBattle_BaseAbility_Plugins_0030_02</a>[<span class=\"descriptionNumberColor\">Memoria Swarm</span>]",
                          "valuePerStack": {
                            "ChallengePeakBattle_Plugins_0030_ADF_1": {
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
                            "value1": "ServantNumCurrent",
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
                              "modifier": "<a class=\"gModGreen\" id=\"-785489005\">Modifier_ChallengePeakBattle_BaseAbility_Plugins_0030_02</a>[<span class=\"descriptionNumberColor\">Memoria Swarm</span>]",
                              "valuePerStack": {
                                "ChallengePeakBattle_Plugins_0030_ADF_1": {
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
                                "value1": "ServantNumCurrent",
                                "compareType": "=",
                                "value2": 4
                              },
                              "passed": [
                                {
                                  "name": "Add Events/Bonuses",
                                  "to": {
                                    "name": "Target Name",
                                    "target": "{{Player Team All(with Unselectable)V2}}"
                                  },
                                  "modifier": "<a class=\"gModGreen\" id=\"-785489005\">Modifier_ChallengePeakBattle_BaseAbility_Plugins_0030_02</a>[<span class=\"descriptionNumberColor\">Memoria Swarm</span>]",
                                  "valuePerStack": {
                                    "ChallengePeakBattle_Plugins_0030_ADF_1": {
                                      "operator": "Variables[0] (#ADF_4) || RETURN",
                                      "displayLines": "#ADF_4",
                                      "constants": [],
                                      "variables": [
                                        "#ADF_4"
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
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "ServantNumLast",
                  "value": {
                    "operator": "Variables[0] (ServantNumCurrent) || RETURN",
                    "displayLines": "ServantNumCurrent",
                    "constants": [],
                    "variables": [
                      "ServantNumCurrent"
                    ]
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