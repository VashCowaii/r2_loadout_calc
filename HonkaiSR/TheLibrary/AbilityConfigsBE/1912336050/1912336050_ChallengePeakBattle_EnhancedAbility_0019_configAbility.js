const configAbility = {
  "fileName": "1912336050_ChallengePeakBattle_EnhancedAbility_0019",
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
      "modifier": "<a class=\"gModGreen\" id=\"1799932743\">Modifier_ChallengePeakBattle_EnhancedAbility_0019</a>"
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1352915135\">Modifier_ChallengePeakBattle_EnhancedAbility_0019_03</a>[<span class=\"descriptionNumberColor\">Flow Break+</span>]",
      "stackType": "Replace",
      "description": "Each stack reduces DMG taken by <span class=\"descriptionNumberColor\">ChallengePeakBattle_0019_ADF_1</span> and CRIT DMG taken by <span class=\"descriptionNumberColor\">ChallengePeakBattle_0019_ADF_2</span>, stacking up to <span class=\"descriptionNumberColor\">ChallengePeakBattle_0019_ADF_3</span> time(s). This effect decreases by <span class=\"descriptionNumberColor\">ChallengePeakBattle_0019_ADF_4</span> stack(s) after the enemy target receives a Follow-Up ATK or when Aha Instant ends.",
      "type": "Other",
      "statusName": "Flow Break+",
      "addStacksPerTrigger": 1,
      "execute": [
        {
          "eventTrigger": "Take Damage Start [Owner]: Any",
          "execute": [
            {
              "name": "Adjust Target Stats",
              "modifiedValuesArray": [
                {
                  "on": "Attacker",
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">CritDamageSUM</span>&nbsp;",
                  "value": "(-ChallengePeakBattle_0019_ADF_2 * MDF_Layer)"
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Define Custom Variable with Modifier Values",
              "valueType": "Layer",
              "variableName": "MDF_Layer",
              "multiplier": 1
            },
            {
              "name": "Stack Target Stat Value",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageReduction</span>&nbsp;",
              "value": {
                "operator": "Variables[0] (ChallengePeakBattle_0019_ADF_1) || Variables[1] (MDF_Layer) || MUL || RETURN",
                "displayLines": "(ChallengePeakBattle_0019_ADF_1 * MDF_Layer)",
                "constants": [],
                "variables": [
                  "ChallengePeakBattle_0019_ADF_1",
                  "MDF_Layer"
                ]
              }
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1369692754\">Modifier_ChallengePeakBattle_EnhancedAbility_0019_02</a>",
      "execute": [
        {
          "eventTrigger": "Take Damage Start [Owner]: Any",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Attack Type",
                "attackTypes": [
                  "Follow-up"
                ],
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                }
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_InsertFlag",
                  "value": 1
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1352915135\">Modifier_ChallengePeakBattle_EnhancedAbility_0019_03</a>[<span class=\"descriptionNumberColor\">Flow Break+</span>]",
              "stackLimit": {
                "operator": "Variables[0] (ChallengePeakBattle_0019_ADF_3) || RETURN",
                "displayLines": "ChallengePeakBattle_0019_ADF_3",
                "constants": [],
                "variables": [
                  "ChallengePeakBattle_0019_ADF_3"
                ]
              },
              "valuePerStack": {
                "ChallengePeakBattle_0019_ADF_1": {
                  "operator": "Variables[0] (ChallengePeakBattle_0019_ADF_1) || RETURN",
                  "displayLines": "ChallengePeakBattle_0019_ADF_1",
                  "constants": [],
                  "variables": [
                    "ChallengePeakBattle_0019_ADF_1"
                  ]
                },
                "ChallengePeakBattle_0019_ADF_2": {
                  "operator": "Variables[0] (ChallengePeakBattle_0019_ADF_2) || RETURN",
                  "displayLines": "ChallengePeakBattle_0019_ADF_2",
                  "constants": [],
                  "variables": [
                    "ChallengePeakBattle_0019_ADF_2"
                  ]
                },
                "ChallengePeakBattle_0019_ADF_3": {
                  "operator": "Variables[0] (ChallengePeakBattle_0019_ADF_3) || RETURN",
                  "displayLines": "ChallengePeakBattle_0019_ADF_3",
                  "constants": [],
                  "variables": [
                    "ChallengePeakBattle_0019_ADF_3"
                  ]
                },
                "ChallengePeakBattle_0019_ADF_4": {
                  "operator": "Variables[0] (ChallengePeakBattle_0019_ADF_4) || RETURN",
                  "displayLines": "ChallengePeakBattle_0019_ADF_4",
                  "constants": [],
                  "variables": [
                    "ChallengePeakBattle_0019_ADF_4"
                  ]
                }
              },
              "addStacksPerTrigger": 0
            }
          ]
        },
        {
          "eventTrigger": "Being Attacked [Owner]: Start",
          "execute": [
            {
              "name": "Define Custom Variable with Modifier Values",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "valueType": "Layer",
              "variableName": "MDF_StackCount",
              "modifierName": "<a class=\"gModGreen\" id=\"-1352915135\">Modifier_ChallengePeakBattle_EnhancedAbility_0019_03</a>[<span class=\"descriptionNumberColor\">Flow Break+</span>]",
              "multiplier": 1
            }
          ]
        },
        {
          "eventTrigger": "Attack Start [Anyone]",
          "execute": [
            {
              "name": "Define Custom Variable",
              "variableName": "MDF_InsertFlag",
              "value": 0
            }
          ]
        },
        {
          "eventTrigger": "Being Attacked [Owner]: End",
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
                    "value1": "MDF_InsertFlag",
                    "compareType": "=",
                    "value2": 0
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable with Added Value",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "variableName": "MDF_StackCount",
                      "value": 1,
                      "max": {
                        "operator": "Variables[0] (ChallengePeakBattle_0019_ADF_3) || RETURN",
                        "displayLines": "ChallengePeakBattle_0019_ADF_3",
                        "constants": [],
                        "variables": [
                          "ChallengePeakBattle_0019_ADF_3"
                        ]
                      }
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-1352915135\">Modifier_ChallengePeakBattle_EnhancedAbility_0019_03</a>[<span class=\"descriptionNumberColor\">Flow Break+</span>]",
                      "stackLimit": {
                        "operator": "Variables[0] (ChallengePeakBattle_0019_ADF_3) || RETURN",
                        "displayLines": "ChallengePeakBattle_0019_ADF_3",
                        "constants": [],
                        "variables": [
                          "ChallengePeakBattle_0019_ADF_3"
                        ]
                      },
                      "valuePerStack": {
                        "ChallengePeakBattle_0019_ADF_1": {
                          "operator": "Variables[0] (ChallengePeakBattle_0019_ADF_1) || RETURN",
                          "displayLines": "ChallengePeakBattle_0019_ADF_1",
                          "constants": [],
                          "variables": [
                            "ChallengePeakBattle_0019_ADF_1"
                          ]
                        },
                        "ChallengePeakBattle_0019_ADF_2": {
                          "operator": "Variables[0] (ChallengePeakBattle_0019_ADF_2) || RETURN",
                          "displayLines": "ChallengePeakBattle_0019_ADF_2",
                          "constants": [],
                          "variables": [
                            "ChallengePeakBattle_0019_ADF_2"
                          ]
                        },
                        "ChallengePeakBattle_0019_ADF_3": {
                          "operator": "Variables[0] (ChallengePeakBattle_0019_ADF_3) || RETURN",
                          "displayLines": "ChallengePeakBattle_0019_ADF_3",
                          "constants": [],
                          "variables": [
                            "ChallengePeakBattle_0019_ADF_3"
                          ]
                        },
                        "ChallengePeakBattle_0019_ADF_4": {
                          "operator": "Variables[0] (ChallengePeakBattle_0019_ADF_4) || RETURN",
                          "displayLines": "ChallengePeakBattle_0019_ADF_4",
                          "constants": [],
                          "variables": [
                            "ChallengePeakBattle_0019_ADF_4"
                          ]
                        }
                      },
                      "addStacksPerTrigger": 1
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "MDF_InsertFlag",
                    "compareType": "=",
                    "value2": 1
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable with Added Value",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "variableName": "MDF_StackCount",
                      "value": {
                        "operator": "Constants[0] (0) || Variables[0] (ChallengePeakBattle_0019_ADF_4) || SUB || RETURN",
                        "displayLines": "(0 - ChallengePeakBattle_0019_ADF_4)",
                        "constants": [
                          0
                        ],
                        "variables": [
                          "ChallengePeakBattle_0019_ADF_4"
                        ]
                      },
                      "max": {
                        "operator": "Variables[0] (ChallengePeakBattle_0019_ADF_3) || RETURN",
                        "displayLines": "ChallengePeakBattle_0019_ADF_3",
                        "constants": [],
                        "variables": [
                          "ChallengePeakBattle_0019_ADF_3"
                        ]
                      }
                    },
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-1352915135\">Modifier_ChallengePeakBattle_EnhancedAbility_0019_03</a>[<span class=\"descriptionNumberColor\">Flow Break+</span>]"
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-1352915135\">Modifier_ChallengePeakBattle_EnhancedAbility_0019_03</a>[<span class=\"descriptionNumberColor\">Flow Break+</span>]",
                      "stackLimit": {
                        "operator": "Variables[0] (ChallengePeakBattle_0019_ADF_3) || RETURN",
                        "displayLines": "ChallengePeakBattle_0019_ADF_3",
                        "constants": [],
                        "variables": [
                          "ChallengePeakBattle_0019_ADF_3"
                        ]
                      },
                      "valuePerStack": {
                        "ChallengePeakBattle_0019_ADF_1": {
                          "operator": "Variables[0] (ChallengePeakBattle_0019_ADF_1) || RETURN",
                          "displayLines": "ChallengePeakBattle_0019_ADF_1",
                          "constants": [],
                          "variables": [
                            "ChallengePeakBattle_0019_ADF_1"
                          ]
                        },
                        "ChallengePeakBattle_0019_ADF_2": {
                          "operator": "Variables[0] (ChallengePeakBattle_0019_ADF_2) || RETURN",
                          "displayLines": "ChallengePeakBattle_0019_ADF_2",
                          "constants": [],
                          "variables": [
                            "ChallengePeakBattle_0019_ADF_2"
                          ]
                        },
                        "ChallengePeakBattle_0019_ADF_3": {
                          "operator": "Variables[0] (ChallengePeakBattle_0019_ADF_3) || RETURN",
                          "displayLines": "ChallengePeakBattle_0019_ADF_3",
                          "constants": [],
                          "variables": [
                            "ChallengePeakBattle_0019_ADF_3"
                          ]
                        },
                        "ChallengePeakBattle_0019_ADF_4": {
                          "operator": "Variables[0] (ChallengePeakBattle_0019_ADF_4) || RETURN",
                          "displayLines": "ChallengePeakBattle_0019_ADF_4",
                          "constants": [],
                          "variables": [
                            "ChallengePeakBattle_0019_ADF_4"
                          ]
                        }
                      },
                      "addStacksPerTrigger": {
                        "operator": "Variables[0] (MDF_StackCount) || RETURN",
                        "displayLines": "MDF_StackCount",
                        "constants": [],
                        "variables": [
                          "MDF_StackCount"
                        ]
                      }
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "MDF_InsertFlag",
                      "value": 0
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "Aha Instant: End",
          "execute": [
            {
              "name": "Define Custom Variable with Modifier Values",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "valueType": "Layer",
              "variableName": "MDF_StackCount",
              "modifierName": "<a class=\"gModGreen\" id=\"-1352915135\">Modifier_ChallengePeakBattle_EnhancedAbility_0019_03</a>[<span class=\"descriptionNumberColor\">Flow Break+</span>]",
              "multiplier": 1
            },
            {
              "name": "Define Custom Variable with Added Value",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "variableName": "MDF_StackCount",
              "value": {
                "operator": "Constants[0] (0) || Variables[0] (ChallengePeakBattle_0019_ADF_4) || SUB || RETURN",
                "displayLines": "(0 - ChallengePeakBattle_0019_ADF_4)",
                "constants": [
                  0
                ],
                "variables": [
                  "ChallengePeakBattle_0019_ADF_4"
                ]
              },
              "max": {
                "operator": "Variables[0] (ChallengePeakBattle_0019_ADF_3) || RETURN",
                "displayLines": "ChallengePeakBattle_0019_ADF_3",
                "constants": [],
                "variables": [
                  "ChallengePeakBattle_0019_ADF_3"
                ]
              }
            },
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1352915135\">Modifier_ChallengePeakBattle_EnhancedAbility_0019_03</a>[<span class=\"descriptionNumberColor\">Flow Break+</span>]"
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1352915135\">Modifier_ChallengePeakBattle_EnhancedAbility_0019_03</a>[<span class=\"descriptionNumberColor\">Flow Break+</span>]",
              "stackLimit": {
                "operator": "Variables[0] (ChallengePeakBattle_0019_ADF_3) || RETURN",
                "displayLines": "ChallengePeakBattle_0019_ADF_3",
                "constants": [],
                "variables": [
                  "ChallengePeakBattle_0019_ADF_3"
                ]
              },
              "valuePerStack": {
                "ChallengePeakBattle_0019_ADF_1": {
                  "operator": "Variables[0] (ChallengePeakBattle_0019_ADF_1) || RETURN",
                  "displayLines": "ChallengePeakBattle_0019_ADF_1",
                  "constants": [],
                  "variables": [
                    "ChallengePeakBattle_0019_ADF_1"
                  ]
                },
                "ChallengePeakBattle_0019_ADF_2": {
                  "operator": "Variables[0] (ChallengePeakBattle_0019_ADF_2) || RETURN",
                  "displayLines": "ChallengePeakBattle_0019_ADF_2",
                  "constants": [],
                  "variables": [
                    "ChallengePeakBattle_0019_ADF_2"
                  ]
                },
                "ChallengePeakBattle_0019_ADF_3": {
                  "operator": "Variables[0] (ChallengePeakBattle_0019_ADF_3) || RETURN",
                  "displayLines": "ChallengePeakBattle_0019_ADF_3",
                  "constants": [],
                  "variables": [
                    "ChallengePeakBattle_0019_ADF_3"
                  ]
                },
                "ChallengePeakBattle_0019_ADF_4": {
                  "operator": "Variables[0] (ChallengePeakBattle_0019_ADF_4) || RETURN",
                  "displayLines": "ChallengePeakBattle_0019_ADF_4",
                  "constants": [],
                  "variables": [
                    "ChallengePeakBattle_0019_ADF_4"
                  ]
                }
              },
              "addStacksPerTrigger": {
                "operator": "Variables[0] (MDF_StackCount) || RETURN",
                "displayLines": "MDF_StackCount",
                "constants": [],
                "variables": [
                  "MDF_StackCount"
                ]
              }
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1799932743\">Modifier_ChallengePeakBattle_EnhancedAbility_0019</a>",
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
                "team": "Enemy Team"
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1369692754\">Modifier_ChallengePeakBattle_EnhancedAbility_0019_02</a>",
                  "valuePerStack": {
                    "ChallengePeakBattle_0019_ADF_1": {
                      "operator": "Variables[0] (#ADF_1) || RETURN",
                      "displayLines": "#ADF_1",
                      "constants": [],
                      "variables": [
                        "#ADF_1"
                      ]
                    },
                    "ChallengePeakBattle_0019_ADF_2": {
                      "operator": "Variables[0] (#ADF_2) || RETURN",
                      "displayLines": "#ADF_2",
                      "constants": [],
                      "variables": [
                        "#ADF_2"
                      ]
                    },
                    "ChallengePeakBattle_0019_ADF_3": {
                      "operator": "Variables[0] (#ADF_3) || RETURN",
                      "displayLines": "#ADF_3",
                      "constants": [],
                      "variables": [
                        "#ADF_3"
                      ]
                    },
                    "ChallengePeakBattle_0019_ADF_4": {
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
}