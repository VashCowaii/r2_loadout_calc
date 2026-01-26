const configAbility = {
  "fileName": "BlackSwan_BlackSwan_Trace02",
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
      "modifier": "M_BlackSwan_Trace02"
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "M_BlackSwan_Tree02_AddDOTFlag",
      "stackType": "Replace",
      "modifierFlags": [
        "RemoveWhenCasterDead",
        "KeepOnDeathrattle"
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "M_BlackSwan_Tree02_ListenAddPoison_SubOnEnemy",
      "modifierFlags": [
        "RemoveWhenCasterDead",
        "ListenBattleEventSkill"
      ],
      "execute": [
        {
          "eventTrigger": "When Constructing Modifier",
          "execute": [
            {
              "name": "Define Custom Variable",
              "variableName": "_count",
              "value": 999
            }
          ]
        },
        {
          "eventTrigger": "Take Damage Start [Owner]: Any",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Compare: Variable",
                    "value1": "_count",
                    "compareType": "<",
                    "value2": {
                      "operator": "Variables[0] (_maxLimit) || RETURN",
                      "displayLines": "_maxLimit",
                      "constants": [],
                      "variables": [
                        "_maxLimit"
                      ]
                    },
                    "contextScope": "ContextModifier"
                  },
                  {
                    "name": "Attack Type",
                    "attackTypes": [
                      "DOT"
                    ],
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    }
                  }
                ]
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "M_BlackSwan_Tree02_AddDOTFlag"
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "Ability Use [Anyone]: Start",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Is Part Of",
                "of": {
                  "name": "Target Name",
                  "target": "{{All Team Members with Unselectables}}.[[addBattleEvents]]"
                },
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "mustBeAlive2": true
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "_count",
                  "value": 0
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "Ability Use [Anyone]: End",
          "execute": [
            {
              "name": "Define Custom Variable",
              "variableName": "_count",
              "value": 999
            }
          ]
        },
        {
          "eventTrigger": "Injected Ability Use [Anyone]: Start",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Is Part Of",
                    "of": {
                      "name": "Target Name",
                      "target": "{{All Team Members with Unselectables}}.[[addBattleEvents]]"
                    },
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "mustBeAlive2": true
                  },
                  {
                    "name": "Is Part Of",
                    "of": {
                      "name": "Target Name",
                      "target": "{{Hostile Entities(AOE, with Unselectables)}}"
                    },
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target List}}"
                    },
                    "mustBeAlive2": true
                  }
                ]
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "_count",
                  "value": 0
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "Injected Ability Use [Anyone]: End",
          "execute": [
            {
              "name": "Define Custom Variable",
              "variableName": "_count",
              "value": 999
            }
          ]
        },
        {
          "eventTrigger": "Injected Ability Use [Anyone]: Aborted",
          "execute": [
            {
              "name": "Define Custom Variable",
              "variableName": "_count",
              "value": 999
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "M_BlackSwan_Trace02_AddDotOnCreate",
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
                  "name": "IF",
                  "conditions": {
                    "name": "Random Chance",
                    "chance": {
                      "operator": "Variables[0] (Rank06_Chance) || RETURN",
                      "displayLines": "Rank06_Chance",
                      "constants": [],
                      "variables": [
                        "Rank06_Chance"
                      ]
                    }
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "Rank06_Weighted_Stack_Layer",
                      "value": {
                        "operator": "Constants[0] (1) || Variables[0] (Rank06_Extra_Layer) || ADD || RETURN",
                        "displayLines": "(1 + Rank06_Extra_Layer)",
                        "constants": [
                          1
                        ],
                        "variables": [
                          "Rank06_Extra_Layer"
                        ]
                      }
                    }
                  ],
                  "failed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "Rank06_Weighted_Stack_Layer",
                      "value": {
                        "operator": "Constants[0] (1) || RETURN",
                        "displayLines": "1",
                        "constants": [
                          1
                        ],
                        "variables": []
                      }
                    }
                  ]
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "BlackSwan_DOT[<span class=\"descriptionNumberColor\">Arcana</span>]",
                  "baseChance": {
                    "operator": "Variables[0] (0.65) || RETURN",
                    "displayLines": "0.65",
                    "constants": [],
                    "variables": [
                      0.65
                    ]
                  },
                  "stackLimit": {
                    "operator": "Variables[0] (Max_DOT_Layer) || RETURN",
                    "displayLines": "Max_DOT_Layer",
                    "constants": [],
                    "variables": [
                      "Max_DOT_Layer"
                    ]
                  },
                  "valuePerStack": {
                    "Basic_DamagePercentage": {
                      "operator": "Variables[0] (2.4) || RETURN",
                      "displayLines": "2.4",
                      "constants": [],
                      "variables": [
                        2.4
                      ]
                    },
                    "ExtraLayer_DamagePercentage": {
                      "operator": "Variables[0] (0.12) || RETURN",
                      "displayLines": "0.12",
                      "constants": [],
                      "variables": [
                        0.12
                      ]
                    },
                    "SecondLayer": {
                      "operator": "Variables[0] (3) || RETURN",
                      "displayLines": "3",
                      "constants": [],
                      "variables": [
                        3
                      ]
                    },
                    "Spread_DamagePercentage": {
                      "operator": "Variables[0] (1.8) || RETURN",
                      "displayLines": "1.8",
                      "constants": [],
                      "variables": [
                        1.8
                      ]
                    },
                    "ThirdLayer": {
                      "operator": "Variables[0] (7) || RETURN",
                      "displayLines": "7",
                      "constants": [],
                      "variables": [
                        7
                      ]
                    },
                    "DefenceIgnore": {
                      "operator": "Variables[0] (0.2) || RETURN",
                      "displayLines": "0.2",
                      "constants": [],
                      "variables": [
                        0.2
                      ]
                    },
                    "Cast_By_Level": 0
                  },
                  "addStacksPerTrigger": {
                    "operator": "Variables[0] (Rank06_Weighted_Stack_Layer) || RETURN",
                    "displayLines": "Rank06_Weighted_Stack_Layer",
                    "constants": [],
                    "variables": [
                      "Rank06_Weighted_Stack_Layer"
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
      "name": "Modifier Construction",
      "for": "M_BlackSwan_Trace02",
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
                  "modifier": "M_BlackSwan_Tree02_ListenAddPoison_SubOnEnemy",
                  "valuePerStack": {
                    "_maxLimit": {
                      "operator": "Variables[0] (3) || RETURN",
                      "displayLines": "3",
                      "constants": [],
                      "variables": [
                        3
                      ]
                    }
                  }
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
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Hostile Entities(AOE, with Unselectables)}}"
                  },
                  "searchRandom": true,
                  "maxTargets": 99,
                  "ifTargetFound": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Random Chance",
                        "chance": {
                          "operator": "Variables[0] (Rank06_Chance) || RETURN",
                          "displayLines": "Rank06_Chance",
                          "constants": [],
                          "variables": [
                            "Rank06_Chance"
                          ]
                        }
                      },
                      "passed": [
                        {
                          "name": "Define Custom Variable",
                          "variableName": "Rank06_Weighted_Stack_Layer",
                          "value": {
                            "operator": "Constants[0] (1) || Variables[0] (Rank06_Extra_Layer) || ADD || RETURN",
                            "displayLines": "(1 + Rank06_Extra_Layer)",
                            "constants": [
                              1
                            ],
                            "variables": [
                              "Rank06_Extra_Layer"
                            ]
                          }
                        }
                      ],
                      "failed": [
                        {
                          "name": "Define Custom Variable",
                          "variableName": "Rank06_Weighted_Stack_Layer",
                          "value": {
                            "operator": "Constants[0] (1) || RETURN",
                            "displayLines": "1",
                            "constants": [
                              1
                            ],
                            "variables": []
                          }
                        }
                      ]
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "BlackSwan_DOT[<span class=\"descriptionNumberColor\">Arcana</span>]",
                      "baseChance": {
                        "operator": "Variables[0] (0.65) || RETURN",
                        "displayLines": "0.65",
                        "constants": [],
                        "variables": [
                          0.65
                        ]
                      },
                      "stackLimit": {
                        "operator": "Variables[0] (Max_DOT_Layer) || RETURN",
                        "displayLines": "Max_DOT_Layer",
                        "constants": [],
                        "variables": [
                          "Max_DOT_Layer"
                        ]
                      },
                      "valuePerStack": {
                        "Basic_DamagePercentage": {
                          "operator": "Variables[0] (2.4) || RETURN",
                          "displayLines": "2.4",
                          "constants": [],
                          "variables": [
                            2.4
                          ]
                        },
                        "ExtraLayer_DamagePercentage": {
                          "operator": "Variables[0] (0.12) || RETURN",
                          "displayLines": "0.12",
                          "constants": [],
                          "variables": [
                            0.12
                          ]
                        },
                        "SecondLayer": {
                          "operator": "Variables[0] (3) || RETURN",
                          "displayLines": "3",
                          "constants": [],
                          "variables": [
                            3
                          ]
                        },
                        "Spread_DamagePercentage": {
                          "operator": "Variables[0] (1.8) || RETURN",
                          "displayLines": "1.8",
                          "constants": [],
                          "variables": [
                            1.8
                          ]
                        },
                        "ThirdLayer": {
                          "operator": "Variables[0] (7) || RETURN",
                          "displayLines": "7",
                          "constants": [],
                          "variables": [
                            7
                          ]
                        },
                        "DefenceIgnore": {
                          "operator": "Variables[0] (0.2) || RETURN",
                          "displayLines": "0.2",
                          "constants": [],
                          "variables": [
                            0.2
                          ]
                        },
                        "Cast_By_Level": 0
                      },
                      "addStacksPerTrigger": {
                        "operator": "Variables[0] (Rank06_Weighted_Stack_Layer) || RETURN",
                        "displayLines": "Rank06_Weighted_Stack_Layer",
                        "constants": [],
                        "variables": [
                          "Rank06_Weighted_Stack_Layer"
                        ]
                      }
                    }
                  ]
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "M_BlackSwan_Trace02_AddDotOnCreate"
                }
              ]
            }
          ],
          "priorityLevel": -80
        },
        {
          "eventTrigger": "When Stacking Modifier Instance [Anyone]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Modifier Was",
                "modifier": "M_BlackSwan_Tree02_AddDOTFlag"
              },
              "passed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Random Chance",
                    "chance": {
                      "operator": "Variables[0] (Rank06_Chance) || RETURN",
                      "displayLines": "Rank06_Chance",
                      "constants": [],
                      "variables": [
                        "Rank06_Chance"
                      ]
                    }
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "Rank06_Weighted_Stack_Layer",
                      "value": {
                        "operator": "Constants[0] (1) || Variables[0] (Rank06_Extra_Layer) || ADD || RETURN",
                        "displayLines": "(1 + Rank06_Extra_Layer)",
                        "constants": [
                          1
                        ],
                        "variables": [
                          "Rank06_Extra_Layer"
                        ]
                      }
                    }
                  ],
                  "failed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "Rank06_Weighted_Stack_Layer",
                      "value": {
                        "operator": "Constants[0] (1) || RETURN",
                        "displayLines": "1",
                        "constants": [
                          1
                        ],
                        "variables": []
                      }
                    }
                  ]
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "BlackSwan_DOT[<span class=\"descriptionNumberColor\">Arcana</span>]",
                  "baseChance": {
                    "operator": "Variables[0] (0.65) || RETURN",
                    "displayLines": "0.65",
                    "constants": [],
                    "variables": [
                      0.65
                    ]
                  },
                  "stackLimit": {
                    "operator": "Variables[0] (Max_DOT_Layer) || RETURN",
                    "displayLines": "Max_DOT_Layer",
                    "constants": [],
                    "variables": [
                      "Max_DOT_Layer"
                    ]
                  },
                  "valuePerStack": {
                    "Basic_DamagePercentage": {
                      "operator": "Variables[0] (2.4) || RETURN",
                      "displayLines": "2.4",
                      "constants": [],
                      "variables": [
                        2.4
                      ]
                    },
                    "ExtraLayer_DamagePercentage": {
                      "operator": "Variables[0] (0.12) || RETURN",
                      "displayLines": "0.12",
                      "constants": [],
                      "variables": [
                        0.12
                      ]
                    },
                    "SecondLayer": {
                      "operator": "Variables[0] (3) || RETURN",
                      "displayLines": "3",
                      "constants": [],
                      "variables": [
                        3
                      ]
                    },
                    "Spread_DamagePercentage": {
                      "operator": "Variables[0] (1.8) || RETURN",
                      "displayLines": "1.8",
                      "constants": [],
                      "variables": [
                        1.8
                      ]
                    },
                    "ThirdLayer": {
                      "operator": "Variables[0] (7) || RETURN",
                      "displayLines": "7",
                      "constants": [],
                      "variables": [
                        7
                      ]
                    },
                    "DefenceIgnore": {
                      "operator": "Variables[0] (0.2) || RETURN",
                      "displayLines": "0.2",
                      "constants": [],
                      "variables": [
                        0.2
                      ]
                    },
                    "Cast_By_Level": 0
                  },
                  "addStacksPerTrigger": {
                    "operator": "Variables[0] (Rank06_Weighted_Stack_Layer) || RETURN",
                    "displayLines": "Rank06_Weighted_Stack_Layer",
                    "constants": [],
                    "variables": [
                      "Rank06_Weighted_Stack_Layer"
                    ]
                  },
                  "success": [
                    {
                      "name": "Define Modifier-Specific Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifierName": "M_BlackSwan_Tree02_ListenAddPoison_SubOnEnemy",
                      "adjustmentType": "+",
                      "variableName": "_count",
                      "value": 1
                    }
                  ]
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "M_BlackSwan_Tree02_AddDOTFlag"
                }
              ]
            }
          ]
        }
      ],
      "stackData": [],
      "latentQueue": []
    }
  ]
}