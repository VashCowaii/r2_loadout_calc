const configAbility = {
  "fileName": "Anaxa_Anaxa_Trace02",
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
      "modifier": "<a class=\"gModGreen\" id=\"-1468806740\">Anaxa_Trace02</a>"
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-992053376\">Anaxa_Trace02_SubAll</a>[<span class=\"descriptionNumberColor\">Imperative Hiatus</span>]",
      "stackType": "ReplaceByCaster",
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
                "operator": "Variables[0] (MDF_PropertyRatio) || RETURN",
                "displayLines": "MDF_PropertyRatio",
                "constants": [],
                "variables": [
                  "MDF_PropertyRatio"
                ]
              }
            }
          ]
        }
      ],
      "description": "DMG dealt increases by <span class=\"descriptionNumberColor\">MDF_PropertyRatio</span>.",
      "type": "Buff",
      "statusName": "Imperative Hiatus"
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-879409639\">Anaxa_Trace02_Sub</a>[<span class=\"descriptionNumberColor\">Imperative Hiatus</span>]",
      "stackType": "ReplaceByCaster",
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
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">CritDamageBase</span>&nbsp;",
              "value": {
                "operator": "Variables[0] (MDF_PropertyRatio) || RETURN",
                "displayLines": "MDF_PropertyRatio",
                "constants": [],
                "variables": [
                  "MDF_PropertyRatio"
                ]
              }
            }
          ]
        }
      ],
      "description": "CRIT DMG increases by <span class=\"descriptionNumberColor\">MDF_PropertyRatio</span>.",
      "type": "Buff",
      "statusName": "Imperative Hiatus"
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-682474568\">Anaxa_Trace02_SubAllListener</a>",
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
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-992053376\">Anaxa_Trace02_SubAll</a>[<span class=\"descriptionNumberColor\">Imperative Hiatus</span>]",
                  "valuePerStack": {
                    "MDF_PropertyRatio": {
                      "operator": "Variables[0] (0.5) || RETURN",
                      "displayLines": "0.5",
                      "constants": [],
                      "variables": [
                        0.5
                      ]
                    }
                  }
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1468806740\">Anaxa_Trace02</a>",
      "execute": [
        {
          "eventTrigger": "Character Path Change [Anyone]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Eidolon Activated",
                "eidolon": 6,
                "invertCondition": true
              },
              "passed": [
                {
                  "name": "Define Custom Variable with Matching Path",
                  "target": null,
                  "matchToPathFrom": [
                    "Erudition"
                  ],
                  "variableName": "_count",
                  "context": "ContextModifier"
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "_count",
                    "compareType": "<=",
                    "value2": 1
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-879409639\">Anaxa_Trace02_Sub</a>[<span class=\"descriptionNumberColor\">Imperative Hiatus</span>]",
                      "valuePerStack": {
                        "MDF_PropertyRatio": {
                          "operator": "Variables[0] (1.4) || RETURN",
                          "displayLines": "1.4",
                          "constants": [],
                          "variables": [
                            1.4
                          ]
                        }
                      }
                    },
                    {
                      "name": "Define Custom Variable",
                      "scope": "AITag",
                      "variableName": "DamageCarry",
                      "value": 100
                    },
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{All Team Members with Unselectables}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-992053376\">Anaxa_Trace02_SubAll</a>[<span class=\"descriptionNumberColor\">Imperative Hiatus</span>]"
                    },
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-682474568\">Anaxa_Trace02_SubAllListener</a>"
                    }
                  ],
                  "failed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{All Team Members with Unselectables}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-992053376\">Anaxa_Trace02_SubAll</a>[<span class=\"descriptionNumberColor\">Imperative Hiatus</span>]",
                      "valuePerStack": {
                        "MDF_PropertyRatio": {
                          "operator": "Variables[0] (0.5) || RETURN",
                          "displayLines": "0.5",
                          "constants": [],
                          "variables": [
                            0.5
                          ]
                        }
                      }
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-682474568\">Anaxa_Trace02_SubAllListener</a>"
                    },
                    {
                      "name": "Define Custom Variable",
                      "scope": "AITag",
                      "variableName": "DamageCarry",
                      "value": 1
                    },
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-879409639\">Anaxa_Trace02_Sub</a>[<span class=\"descriptionNumberColor\">Imperative Hiatus</span>]"
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
                  "name": "IF",
                  "conditions": {
                    "name": "Eidolon Activated",
                    "eidolon": 6
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-879409639\">Anaxa_Trace02_Sub</a>[<span class=\"descriptionNumberColor\">Imperative Hiatus</span>]",
                      "valuePerStack": {
                        "MDF_PropertyRatio": {
                          "operator": "Variables[0] (1.4) || RETURN",
                          "displayLines": "1.4",
                          "constants": [],
                          "variables": [
                            1.4
                          ]
                        }
                      }
                    },
                    {
                      "name": "Define Custom Variable",
                      "scope": "AITag",
                      "variableName": "DamageCarry",
                      "value": 100
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{All Team Members with Unselectables}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-992053376\">Anaxa_Trace02_SubAll</a>[<span class=\"descriptionNumberColor\">Imperative Hiatus</span>]",
                      "valuePerStack": {
                        "MDF_PropertyRatio": {
                          "operator": "Variables[0] (0.5) || RETURN",
                          "displayLines": "0.5",
                          "constants": [],
                          "variables": [
                            0.5
                          ]
                        }
                      }
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-682474568\">Anaxa_Trace02_SubAllListener</a>"
                    }
                  ],
                  "failed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "_count",
                      "value": 0
                    },
                    {
                      "name": "Find New Target",
                      "from": {
                        "name": "Target Name",
                        "target": "{{All Team Members with Unselectables}}"
                      },
                      "conditions": {
                        "name": "Target is Pathstrider",
                        "path": [
                          "Erudition"
                        ],
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        }
                      },
                      "ifTargetFound": [
                        {
                          "name": "Define Custom Variable",
                          "variableName": "_count",
                          "value": {
                            "operator": "Variables[0] (_count) || Constants[0] (1) || ADD || RETURN",
                            "displayLines": "(_count + 1)",
                            "constants": [
                              1
                            ],
                            "variables": [
                              "_count"
                            ]
                          }
                        }
                      ]
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "_count",
                        "compareType": "<=",
                        "value2": 1
                      },
                      "passed": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"-879409639\">Anaxa_Trace02_Sub</a>[<span class=\"descriptionNumberColor\">Imperative Hiatus</span>]",
                          "valuePerStack": {
                            "MDF_PropertyRatio": {
                              "operator": "Variables[0] (1.4) || RETURN",
                              "displayLines": "1.4",
                              "constants": [],
                              "variables": [
                                1.4
                              ]
                            }
                          }
                        },
                        {
                          "name": "Define Custom Variable",
                          "scope": "AITag",
                          "variableName": "DamageCarry",
                          "value": 100
                        }
                      ],
                      "failed": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{All Team Members with Unselectables}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"-992053376\">Anaxa_Trace02_SubAll</a>[<span class=\"descriptionNumberColor\">Imperative Hiatus</span>]",
                          "valuePerStack": {
                            "MDF_PropertyRatio": {
                              "operator": "Variables[0] (0.5) || RETURN",
                              "displayLines": "0.5",
                              "constants": [],
                              "variables": [
                                0.5
                              ]
                            }
                          }
                        },
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"-682474568\">Anaxa_Trace02_SubAllListener</a>"
                        },
                        {
                          "name": "Define Custom Variable",
                          "scope": "AITag",
                          "variableName": "DamageCarry",
                          "value": 1
                        }
                      ]
                    }
                  ]
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
  ]
}