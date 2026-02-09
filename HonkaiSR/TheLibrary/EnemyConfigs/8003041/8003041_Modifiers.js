const configAbility = {
  "fileName": "8003041_Modifiers",
  "abilityType": "Char. Modifiers",
  "energy": null,
  "toughnessList": [
    0,
    0,
    0
  ],
  "parse": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__697975031\">XP_Elite02_01_BattleScore1</a>",
      "execute": [
        {
          "eventTrigger": "When Constructing Modifier",
          "execute": [
            {
              "name": "Declare Custom Variable",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "scope": "TargetEntity",
              "variableName": "XP_Elite02_01_BattleScore1_Flag"
            }
          ]
        },
        {
          "eventTrigger": "Ability Use [Owner]: End",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "XP_Elite02_01_BattleScore1_Flag",
                "compareType": "=",
                "value2": 1,
                "contextScope": "TargetEntity"
              },
              "passed": [
                {
                  "name": "Achievement",
                  "matchTags": true,
                  "relatedAchievements": [
                    {
                      "title": "Accidental Amnesia",
                      "desc": "Clear Decaying Shadow's Gauge Recollection and cause its ability, Liberation of the Golden Age, to fail",
                      "rarity": "Mid"
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
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__758016972\">Monster_XP_Elite02_01_Ability04_Mark</a>",
      "stackData": [],
      "latentQueue": [
        "Monster_XP_Elite02_01_Skill07Attack"
      ],
      "duration": 1
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1764090904\">Monster_XP_Elite02_01_DamageReduce</a>",
      "execute": [
        {
          "eventTrigger": "Take Damage Start [Owner]: Any",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Attack Type",
                "attackTypes": [
                  "Skill",
                  "Follow-up",
                  "Technique",
                  "Basic ATK",
                  "Additional DMG",
                  "Ultimate"
                ],
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                }
              },
              "passed": [
                {
                  "name": "Adjust Target Stats",
                  "modifiedValuesArray": [
                    {
                      "on": "Defender",
                      "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageReduction</span>&nbsp;",
                      "value": "MDF_DamageReduceRatio"
                    }
                  ]
                }
              ]
            }
          ]
        }
      ],
      "stackData": [
        "MDF_DamageReduceRatio",
        "MDF_ConfineChance"
      ],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1400625126\">Monster_XP_Elite02_01_Effect</a>",
      "execute": [
        {
          "eventTrigger": "When Constructing Modifier"
        },
        {
          "eventTrigger": "When Modifier Destroyed/Removed"
        }
      ],
      "stackData": [],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__553137450\">Monster_XP_Elite02_01_Shield</a>",
      "stackType": "Replace",
      "stackLimit": 5,
      "addStacksPerTrigger": {
        "operator": "Variables[0] (ModifierStackLayer) || RETURN",
        "displayLines": "ModifierStackLayer",
        "constants": [],
        "variables": [
          "ModifierStackLayer"
        ]
      }
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-440963203\">Monster_XP_Elite02_01_Fragile</a>[<span class=\"descriptionNumberColor\">undefined</span>]",
      "description": "Missing Description",
      "type": "Debuff"
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-412122860\">Monster_XP_Elite02_01_Battle_02</a>",
      "stackData": [],
      "latentQueue": [
        "Monster_XP_Elite02_01_AIFlag"
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-749414927\">Monster_XP_Elite02_01_Battle</a>[<span class=\"descriptionNumberColor\">undefined</span>]",
      "description": "Missing Description",
      "type": "Buff"
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__267392722\">Monster_XP_Elite02_01_Exhausted</a>[<span class=\"descriptionNumberColor\">undefined</span>]",
      "modifierFlags": [
        "MuteHitH"
      ],
      "execute": [
        {
          "eventTrigger": "When Constructing Modifier",
          "execute": [
            {
              "name": "Change Character Transformation",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "phase": "Phase2"
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"245616895\">Monster_XP_Elite02_01_DisableAction</a>"
            }
          ]
        },
        {
          "eventTrigger": "When Modifier Destroyed/Removed",
          "execute": [
            {
              "name": "Change Character Transformation",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "phase": "Phase1"
            }
          ]
        },
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Stack Target Stat Value",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">ToughnessVulnerability</span>&nbsp;",
              "value": {
                "operator": "Variables[0] (MDF_StanceBreakTakenAddedRatio) || RETURN",
                "displayLines": "MDF_StanceBreakTakenAddedRatio",
                "constants": [],
                "variables": [
                  "MDF_StanceBreakTakenAddedRatio"
                ]
              }
            },
            {
              "name": "Declare Custom Variable",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "scope": "TargetEntity",
              "variableName": "Monster_XP_Elite02_01_AIFlag",
              "value": 2
            }
          ]
        }
      ],
      "description": "Missing Description",
      "type": "Debuff"
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__245616895\">Monster_XP_Elite02_01_DisableAction</a>",
      "modifierFlags": [
        "DisableAction"
      ],
      "execute": [
        {
          "eventTrigger": "Turn [Action-End Phase]",
          "execute": [
            "Modifier Deletes Itself"
          ]
        }
      ],
      "stackData": [],
      "latentQueue": [],
      "duration": 1
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1542768305\">Monster_XP_Elite02_01_Energy</a>",
      "execute": [
        {
          "eventTrigger": "Being Attacked End [Owner]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "target": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}"
                },
                "value1": "EnergyLayer",
                "compareType": "<=",
                "value2": 0
              },
              "failed": [
                {
                  "name": "Define Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "variableName": "EnergyLayer",
                  "value": {
                    "operator": "Variables[0] (EnergyLayer) || Constants[0] (1) || SUB || RETURN",
                    "displayLines": "(EnergyLayer - 1)",
                    "constants": [
                      1
                    ],
                    "variables": [
                      "EnergyLayer"
                    ]
                  }
                }
              ]
            }
          ]
        }
      ],
      "variableValueChange": [
        {
          "name": "Variable Value Changes",
          "variableName": "EnergyLayer",
          "from": "ContextOwner",
          "valueRanges": [
            {
              "name": "Variable Value Range Conditions",
              "minValue": -2,
              "maxValue": -2,
              "includeMaxValueInRange": true,
              "whenEnteringRange": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "EnergyLayerLast",
                    "compareType": ">=",
                    "value2": 0
                  }
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "EnergyLayerLast",
                    "compareType": "=",
                    "value2": 9
                  },
                  "failed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value1": "EnergyLayerLast",
                        "compareType": "=",
                        "value2": 8
                      },
                      "failed": [
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Compare: Variable",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            },
                            "value1": "EnergyLayerLast",
                            "compareType": "=",
                            "value2": 7
                          },
                          "failed": [
                            {
                              "name": "IF",
                              "conditions": {
                                "name": "Compare: Variable",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Modifier Holder}}"
                                },
                                "value1": "EnergyLayerLast",
                                "compareType": "=",
                                "value2": 6
                              },
                              "failed": [
                                {
                                  "name": "IF",
                                  "conditions": {
                                    "name": "Compare: Variable",
                                    "target": {
                                      "name": "Target Name",
                                      "target": "{{Modifier Holder}}"
                                    },
                                    "value1": "EnergyLayerLast",
                                    "compareType": "=",
                                    "value2": 5
                                  },
                                  "failed": [
                                    {
                                      "name": "IF",
                                      "conditions": {
                                        "name": "Compare: Variable",
                                        "target": {
                                          "name": "Target Name",
                                          "target": "{{Modifier Holder}}"
                                        },
                                        "value1": "EnergyLayerLast",
                                        "compareType": "=",
                                        "value2": 4
                                      },
                                      "failed": [
                                        {
                                          "name": "IF",
                                          "conditions": {
                                            "name": "Compare: Variable",
                                            "target": {
                                              "name": "Target Name",
                                              "target": "{{Modifier Holder}}"
                                            },
                                            "value1": "EnergyLayerLast",
                                            "compareType": "=",
                                            "value2": 3
                                          },
                                          "failed": [
                                            {
                                              "name": "IF",
                                              "conditions": {
                                                "name": "Compare: Variable",
                                                "target": {
                                                  "name": "Target Name",
                                                  "target": "{{Modifier Holder}}"
                                                },
                                                "value1": "EnergyLayerLast",
                                                "compareType": "=",
                                                "value2": 2
                                              },
                                              "failed": [
                                                {
                                                  "name": "IF",
                                                  "conditions": {
                                                    "name": "Compare: Variable",
                                                    "target": {
                                                      "name": "Target Name",
                                                      "target": "{{Modifier Holder}}"
                                                    },
                                                    "value1": "EnergyLayerLast",
                                                    "compareType": "=",
                                                    "value2": 1
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
                  ]
                },
                {
                  "name": "Define Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "variableName": "EnergyLayerLast",
                  "value": {
                    "operator": "Variables[0] (EnergyLayer) || RETURN",
                    "displayLines": "EnergyLayer",
                    "constants": [],
                    "variables": [
                      "EnergyLayer"
                    ]
                  }
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1432699776\">Monster_XP_Elite02_01_EnergyLayer</a>[<span class=\"descriptionNumberColor\">Gauge Recollection</span>]"
                }
              ]
            },
            {
              "name": "Variable Value Range Conditions",
              "minValue": -1,
              "maxValue": -1,
              "includeMaxValueInRange": true,
              "whenEnteringRange": [
                {
                  "name": "Define Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "variableName": "EnergyLayerLast",
                  "value": {
                    "operator": "Variables[0] (EnergyLayer) || RETURN",
                    "displayLines": "EnergyLayer",
                    "constants": [],
                    "variables": [
                      "EnergyLayer"
                    ]
                  }
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1432699776\">Monster_XP_Elite02_01_EnergyLayer</a>[<span class=\"descriptionNumberColor\">Gauge Recollection</span>]"
                }
              ]
            },
            {
              "name": "Variable Value Range Conditions",
              "minValue": 0,
              "maxValue": 0,
              "includeMaxValueInRange": true,
              "whenEnteringRange": [
                {
                  "name": "Define Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "variableName": "EnergyLayerLast",
                  "value": {
                    "operator": "Variables[0] (EnergyLayer) || RETURN",
                    "displayLines": "EnergyLayer",
                    "constants": [],
                    "variables": [
                      "EnergyLayer"
                    ]
                  }
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1432699776\">Monster_XP_Elite02_01_EnergyLayer</a>[<span class=\"descriptionNumberColor\">Gauge Recollection</span>]"
                }
              ]
            },
            {
              "name": "Variable Value Range Conditions",
              "minValue": 1,
              "maxValue": 1,
              "includeMaxValueInRange": true,
              "whenEnteringRange": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "EnergyLayer",
                    "compareType": ">",
                    "value2": {
                      "operator": "Variables[0] (EnergyLayerLast) || RETURN",
                      "displayLines": "EnergyLayerLast",
                      "constants": [],
                      "variables": [
                        "EnergyLayerLast"
                      ]
                    }
                  }
                },
                {
                  "name": "Define Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "variableName": "EnergyLayerLast",
                  "value": {
                    "operator": "Variables[0] (EnergyLayer) || RETURN",
                    "displayLines": "EnergyLayer",
                    "constants": [],
                    "variables": [
                      "EnergyLayer"
                    ]
                  }
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1432699776\">Monster_XP_Elite02_01_EnergyLayer</a>[<span class=\"descriptionNumberColor\">Gauge Recollection</span>]"
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1432699776\">Monster_XP_Elite02_01_EnergyLayer</a>[<span class=\"descriptionNumberColor\">Gauge Recollection</span>]",
                  "addStacksPerTrigger": 1
                }
              ]
            },
            {
              "name": "Variable Value Range Conditions",
              "minValue": 2,
              "maxValue": 2,
              "includeMaxValueInRange": true,
              "whenEnteringRange": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "EnergyLayer",
                    "compareType": ">",
                    "value2": {
                      "operator": "Variables[0] (EnergyLayerLast) || RETURN",
                      "displayLines": "EnergyLayerLast",
                      "constants": [],
                      "variables": [
                        "EnergyLayerLast"
                      ]
                    }
                  }
                },
                {
                  "name": "Define Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "variableName": "EnergyLayerLast",
                  "value": {
                    "operator": "Variables[0] (EnergyLayer) || RETURN",
                    "displayLines": "EnergyLayer",
                    "constants": [],
                    "variables": [
                      "EnergyLayer"
                    ]
                  }
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1432699776\">Monster_XP_Elite02_01_EnergyLayer</a>[<span class=\"descriptionNumberColor\">Gauge Recollection</span>]"
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1432699776\">Monster_XP_Elite02_01_EnergyLayer</a>[<span class=\"descriptionNumberColor\">Gauge Recollection</span>]",
                  "addStacksPerTrigger": 2
                }
              ]
            },
            {
              "name": "Variable Value Range Conditions",
              "minValue": 3,
              "maxValue": 3,
              "includeMaxValueInRange": true,
              "whenEnteringRange": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "EnergyLayer",
                    "compareType": ">",
                    "value2": {
                      "operator": "Variables[0] (EnergyLayerLast) || RETURN",
                      "displayLines": "EnergyLayerLast",
                      "constants": [],
                      "variables": [
                        "EnergyLayerLast"
                      ]
                    }
                  }
                },
                {
                  "name": "Define Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "variableName": "EnergyLayerLast",
                  "value": {
                    "operator": "Variables[0] (EnergyLayer) || RETURN",
                    "displayLines": "EnergyLayer",
                    "constants": [],
                    "variables": [
                      "EnergyLayer"
                    ]
                  }
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1432699776\">Monster_XP_Elite02_01_EnergyLayer</a>[<span class=\"descriptionNumberColor\">Gauge Recollection</span>]"
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1432699776\">Monster_XP_Elite02_01_EnergyLayer</a>[<span class=\"descriptionNumberColor\">Gauge Recollection</span>]",
                  "addStacksPerTrigger": 3
                }
              ]
            },
            {
              "name": "Variable Value Range Conditions",
              "minValue": 4,
              "maxValue": 4,
              "includeMaxValueInRange": true,
              "whenEnteringRange": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "EnergyLayer",
                    "compareType": ">",
                    "value2": {
                      "operator": "Variables[0] (EnergyLayerLast) || RETURN",
                      "displayLines": "EnergyLayerLast",
                      "constants": [],
                      "variables": [
                        "EnergyLayerLast"
                      ]
                    }
                  }
                },
                {
                  "name": "Define Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "variableName": "EnergyLayerLast",
                  "value": {
                    "operator": "Variables[0] (EnergyLayer) || RETURN",
                    "displayLines": "EnergyLayer",
                    "constants": [],
                    "variables": [
                      "EnergyLayer"
                    ]
                  }
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1432699776\">Monster_XP_Elite02_01_EnergyLayer</a>[<span class=\"descriptionNumberColor\">Gauge Recollection</span>]"
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1432699776\">Monster_XP_Elite02_01_EnergyLayer</a>[<span class=\"descriptionNumberColor\">Gauge Recollection</span>]",
                  "addStacksPerTrigger": 4
                }
              ]
            },
            {
              "name": "Variable Value Range Conditions",
              "minValue": 5,
              "maxValue": 5,
              "includeMaxValueInRange": true,
              "whenEnteringRange": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "EnergyLayer",
                    "compareType": ">",
                    "value2": {
                      "operator": "Variables[0] (EnergyLayerLast) || RETURN",
                      "displayLines": "EnergyLayerLast",
                      "constants": [],
                      "variables": [
                        "EnergyLayerLast"
                      ]
                    }
                  }
                },
                {
                  "name": "Define Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "variableName": "EnergyLayerLast",
                  "value": {
                    "operator": "Variables[0] (EnergyLayer) || RETURN",
                    "displayLines": "EnergyLayer",
                    "constants": [],
                    "variables": [
                      "EnergyLayer"
                    ]
                  }
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1432699776\">Monster_XP_Elite02_01_EnergyLayer</a>[<span class=\"descriptionNumberColor\">Gauge Recollection</span>]"
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1432699776\">Monster_XP_Elite02_01_EnergyLayer</a>[<span class=\"descriptionNumberColor\">Gauge Recollection</span>]",
                  "addStacksPerTrigger": 5
                }
              ]
            },
            {
              "name": "Variable Value Range Conditions",
              "minValue": 6,
              "maxValue": 6,
              "includeMaxValueInRange": true,
              "whenEnteringRange": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "EnergyLayer",
                    "compareType": ">",
                    "value2": {
                      "operator": "Variables[0] (EnergyLayerLast) || RETURN",
                      "displayLines": "EnergyLayerLast",
                      "constants": [],
                      "variables": [
                        "EnergyLayerLast"
                      ]
                    }
                  }
                },
                {
                  "name": "Define Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "variableName": "EnergyLayerLast",
                  "value": {
                    "operator": "Variables[0] (EnergyLayer) || RETURN",
                    "displayLines": "EnergyLayer",
                    "constants": [],
                    "variables": [
                      "EnergyLayer"
                    ]
                  }
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1432699776\">Monster_XP_Elite02_01_EnergyLayer</a>[<span class=\"descriptionNumberColor\">Gauge Recollection</span>]"
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1432699776\">Monster_XP_Elite02_01_EnergyLayer</a>[<span class=\"descriptionNumberColor\">Gauge Recollection</span>]",
                  "addStacksPerTrigger": 6
                }
              ]
            },
            {
              "name": "Variable Value Range Conditions",
              "minValue": 7,
              "maxValue": 7,
              "includeMaxValueInRange": true,
              "whenEnteringRange": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "EnergyLayer",
                    "compareType": ">",
                    "value2": {
                      "operator": "Variables[0] (EnergyLayerLast) || RETURN",
                      "displayLines": "EnergyLayerLast",
                      "constants": [],
                      "variables": [
                        "EnergyLayerLast"
                      ]
                    }
                  }
                },
                {
                  "name": "Define Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "variableName": "EnergyLayerLast",
                  "value": {
                    "operator": "Variables[0] (EnergyLayer) || RETURN",
                    "displayLines": "EnergyLayer",
                    "constants": [],
                    "variables": [
                      "EnergyLayer"
                    ]
                  }
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1432699776\">Monster_XP_Elite02_01_EnergyLayer</a>[<span class=\"descriptionNumberColor\">Gauge Recollection</span>]"
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1432699776\">Monster_XP_Elite02_01_EnergyLayer</a>[<span class=\"descriptionNumberColor\">Gauge Recollection</span>]",
                  "addStacksPerTrigger": 7
                }
              ]
            },
            {
              "name": "Variable Value Range Conditions",
              "minValue": 8,
              "maxValue": 8,
              "includeMaxValueInRange": true,
              "whenEnteringRange": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "EnergyLayer",
                    "compareType": ">",
                    "value2": {
                      "operator": "Variables[0] (EnergyLayerLast) || RETURN",
                      "displayLines": "EnergyLayerLast",
                      "constants": [],
                      "variables": [
                        "EnergyLayerLast"
                      ]
                    }
                  }
                },
                {
                  "name": "Define Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "variableName": "EnergyLayerLast",
                  "value": {
                    "operator": "Variables[0] (EnergyLayer) || RETURN",
                    "displayLines": "EnergyLayer",
                    "constants": [],
                    "variables": [
                      "EnergyLayer"
                    ]
                  }
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1432699776\">Monster_XP_Elite02_01_EnergyLayer</a>[<span class=\"descriptionNumberColor\">Gauge Recollection</span>]"
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1432699776\">Monster_XP_Elite02_01_EnergyLayer</a>[<span class=\"descriptionNumberColor\">Gauge Recollection</span>]",
                  "addStacksPerTrigger": 8
                }
              ]
            },
            {
              "name": "Variable Value Range Conditions",
              "minValue": 9,
              "maxValue": 9,
              "includeMaxValueInRange": true,
              "whenEnteringRange": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "EnergyLayerLast",
                    "compareType": "=",
                    "value2": 8
                  }
                },
                {
                  "name": "Define Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "variableName": "EnergyLayerLast",
                  "value": {
                    "operator": "Variables[0] (EnergyLayer) || RETURN",
                    "displayLines": "EnergyLayer",
                    "constants": [],
                    "variables": [
                      "EnergyLayer"
                    ]
                  }
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1432699776\">Monster_XP_Elite02_01_EnergyLayer</a>[<span class=\"descriptionNumberColor\">Gauge Recollection</span>]"
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1432699776\">Monster_XP_Elite02_01_EnergyLayer</a>[<span class=\"descriptionNumberColor\">Gauge Recollection</span>]",
                  "addStacksPerTrigger": 9
                }
              ]
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1432699776\">Monster_XP_Elite02_01_EnergyLayer</a>[<span class=\"descriptionNumberColor\">Gauge Recollection</span>]",
      "stackType": "Replace",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Define Custom Variable with Modifier Values",
              "valueType": "Layer",
              "variableName": "ModifierLayers",
              "multiplier": 1
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": [],
      "description": "Current stacks of Gauge Recollection: <span class=\"descriptionNumberColor\">ModifierLayers</span>. Loses 1 stack of Gauge Recollection after being hit.",
      "type": "Other",
      "statusName": "Gauge Recollection",
      "stackLimit": 9
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__615554356\">Monster_XP_Elite02_01_RemoveEnergyLayer</a>",
      "execute": [
        {
          "eventTrigger": "When Constructing Modifier",
          "execute": [
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1432699776\">Monster_XP_Elite02_01_EnergyLayer</a>[<span class=\"descriptionNumberColor\">Gauge Recollection</span>]"
            }
          ]
        },
        {
          "eventTrigger": "Turn End [Anyone]",
          "execute": [
            "Modifier Deletes Itself"
          ]
        }
      ],
      "stackData": [],
      "latentQueue": [
        "Monster_XP_Elite02_01_AIFlag",
        "ChargeFlag",
        "Monster_XP_Elite02_01_AIFlag_02"
      ],
      "duration": 1
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-799757302\">Monster_XP_Elite02_01_Accelerate</a>[<span class=\"descriptionNumberColor\">undefined</span>]",
      "stackType": "Replace",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Define Custom Variable with Modifier Values",
              "valueType": "Layer",
              "variableName": "ModifierLayers",
              "multiplier": 1
            },
            {
              "name": "Stack Target Stat Value",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">SPD%</span>&nbsp;",
              "value": {
                "operator": "Variables[0] (MDF_SpeedAddedRatio_PerLayer) || Variables[1] (ModifierLayers) || MUL || RETURN",
                "displayLines": "(MDF_SpeedAddedRatio_PerLayer * ModifierLayers)",
                "constants": [],
                "variables": [
                  "MDF_SpeedAddedRatio_PerLayer",
                  "ModifierLayers"
                ]
              }
            }
          ]
        }
      ],
      "description": "Missing Description",
      "type": "Buff",
      "stackLimit": 10,
      "addStacksPerTrigger": {
        "operator": "Variables[0] (ModifierStackLayer) || RETURN",
        "displayLines": "ModifierStackLayer",
        "constants": [],
        "variables": [
          "ModifierStackLayer"
        ]
      }
    }
  ],
  "references": []
}