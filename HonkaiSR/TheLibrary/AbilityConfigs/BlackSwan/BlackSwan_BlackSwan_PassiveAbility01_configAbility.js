const configAbility = {
  "fileName": "BlackSwan_BlackSwan_PassiveAbility01",
  "childAbilityList": [
    "BlackSwan_BlackSwan_PassiveAbility01"
  ],
  "skillTrigger": "SkillP01",
  "abilityType": "Talent",
  "energy": null,
  "toughnessList": [
    0,
    0,
    0
  ],
  "parse": [
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-1065923980\">M_BlackSwan_P01_ListenAddPoison</a>"
    },
    {
      "name": "Define Custom Variable",
      "scope": "ContextCaster",
      "variableName": "Max_DOT_Layer",
      "value": {
        "operator": "Variables[0] (50) || RETURN",
        "displayLines": "50",
        "constants": [],
        "variables": [
          50
        ]
      }
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Eidolon Activated",
        "eidolon": 4
      },
      "passed": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"600807065\">M_BlackSwan_Eidolon4_Listener</a>"
        }
      ]
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Eidolon Activated",
        "eidolon": 6
      },
      "passed": [
        {
          "name": "Define Custom Variable",
          "variableName": "Rank06_Chance",
          "value": {
            "operator": "Variables[0] (0.5) || RETURN",
            "displayLines": "0.5",
            "constants": [],
            "variables": [
              0.5
            ]
          }
        },
        {
          "name": "Define Custom Variable",
          "variableName": "Rank06_Extra_Layer",
          "value": {
            "operator": "Variables[0] (1) || RETURN",
            "displayLines": "1",
            "constants": [],
            "variables": [
              1
            ]
          }
        }
      ],
      "failed": [
        {
          "name": "Define Custom Variable",
          "variableName": "Rank06_Chance",
          "value": 0
        },
        {
          "name": "Define Custom Variable",
          "variableName": "Rank06_Extra_Layer",
          "value": 0
        }
      ]
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__600807065\">M_BlackSwan_Eidolon4_Listener</a>",
      "execute": [
        {
          "eventTrigger": "Entity Death [Anyone]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Target Exists",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target 2}}"
                }
              },
              "passed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Is Part Of Team",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "team": "Enemy Team"
                      },
                      {
                        "name": "NOT",
                        "condition": {
                          "name": "Is Part Of Team",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Parameter Target 2}}"
                          },
                          "team": "Enemy Team"
                        }
                      },
                      {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"488421404\">BlackSwan_DOT_Enhance</a>[<span class=\"descriptionNumberColor\">Epiphany</span>]",
                        "justAddedOrActive": true,
                        "includePreDeath": true
                      },
                      {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"-1409864339\">M_BlackSwan_DOT_Eidolon4_HaveAddedSP</a>",
                        "invertCondition": true,
                        "justAddedOrActive": true,
                        "casterFilter": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        }
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Update Energy",
                      "on": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "value": {
                        "operator": "Variables[0] (8) || RETURN",
                        "displayLines": "8",
                        "constants": [],
                        "variables": [
                          8
                        ]
                      },
                      "isFixed": "* ERR"
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
      "for": "<a class=\"gModGreen\" id=\"mod__2022067398\">M_BlackSwan_P01_ListenAddPoison_SubOnEnemy_Part1Mark</a>"
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1387323269\">M_BlackSwan_P01_ListenAddPoison_SubOnEnemy_ListenPhase1Mark</a>",
      "execute": [
        {
          "eventTrigger": "Turn [Pre-action Phase]",
          "execute": [
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"2022067398\">M_BlackSwan_P01_ListenAddPoison_SubOnEnemy_Part1Mark</a>"
            }
          ],
          "priorityLevel": 200
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1560122736\">M_BlackSwan_P01_ListenAddPoison_SubOnEnemy</a>",
      "modifierFlags": [
        "RemoveWhenCasterDead",
        "ListenBattleEventSkill"
      ],
      "execute": [
        {
          "eventTrigger": "When Constructing Modifier",
          "execute": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1387323269\">M_BlackSwan_P01_ListenAddPoison_SubOnEnemy_ListenPhase1Mark</a>"
            }
          ]
        },
        {
          "eventTrigger": "Turn [Pre-action Phase]",
          "execute": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"2022067398\">M_BlackSwan_P01_ListenAddPoison_SubOnEnemy_Part1Mark</a>"
            }
          ],
          "priorityLevel": -11
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
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Compare: Target",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "target2": {
                          "name": "Target Name",
                          "target": "{{Current Turn Owner}}"
                        }
                      },
                      {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"2022067398\">M_BlackSwan_P01_ListenAddPoison_SubOnEnemy_Part1Mark</a>",
                        "justAddedOrActive": true
                      }
                    ]
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
                  "modifier": "<a class=\"gModGreen\" id=\"-658722874\">M_BlackSwan_P01_AddDOTFlag</a>"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1065923980\">M_BlackSwan_P01_ListenAddPoison</a>",
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
                  "modifier": "<a class=\"gModGreen\" id=\"1560122736\">M_BlackSwan_P01_ListenAddPoison_SubOnEnemy</a>"
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "When Stacking Modifier Instance [Anyone]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Modifier Was",
                "modifier": "<a class=\"gModGreen\" id=\"-658722874\">M_BlackSwan_P01_AddDOTFlag</a>"
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
                  "name": "IF",
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"-288826770\">M_BlackSwan_ForbidEffectFlag</a>",
                    "justAddedOrActive": true
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"2037361233\">BlackSwan_DOT</a>[<span class=\"descriptionNumberColor\">Arcana</span>]",
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
                  ],
                  "failed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"2037361233\">BlackSwan_DOT</a>[<span class=\"descriptionNumberColor\">Arcana</span>]",
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
        }
      ],
      "stackData": [],
      "latentQueue": []
    }
  ]
}