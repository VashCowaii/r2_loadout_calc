const configAbility = {
  "fileName": "BlackSwan_BlackSwan_PassiveAbility01",
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
      "to": "Caster",
      "modifier": "M_BlackSwan_P01_ListenAddPoison"
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
          "to": "Caster",
          "modifier": "M_BlackSwan_Eidolon4_Listener"
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
      "for": "M_BlackSwan_Eidolon4_Listener",
      "execute": [
        {
          "eventTrigger": "Entity Death [Anyone]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Target Exists",
                "target": "Use Secondary Prior Target(s) Defined"
              },
              "passed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Is Part Of Team",
                        "target": "Use Prior Target(s) Defined",
                        "team": "TeamDark"
                      },
                      {
                        "name": "NOT",
                        "condition": {
                          "name": "Is Part Of Team",
                          "target": "Use Secondary Prior Target(s) Defined",
                          "team": "TeamDark"
                        }
                      },
                      {
                        "name": "Has Modifier",
                        "target": "Use Prior Target(s) Defined",
                        "modifier": "BlackSwan_DOT_Enhance[<span class=\"descriptionNumberColor\">Epiphany</span>]",
                        "justAddedOrActive": true,
                        "includePreDeath": true
                      },
                      {
                        "name": "Has Modifier",
                        "target": "Use Prior Target(s) Defined",
                        "modifier": "M_BlackSwan_DOT_Eidolon4_HaveAddedSP",
                        "invertCondition": true,
                        "justAddedOrActive": true,
                        "casterFilter": "Caster"
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Update Energy",
                      "on": "Caster",
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
      "for": "M_BlackSwan_P01_ListenAddPoison_SubOnEnemy_Part1Mark"
    },
    {
      "name": "Modifier Construction",
      "for": "M_BlackSwan_P01_ListenAddPoison_SubOnEnemy_ListenPhase1Mark",
      "execute": [
        {
          "eventTrigger": "Turn [Pre-action Phase]",
          "execute": [
            {
              "name": "Remove Events/Bonuses",
              "to": "Owner of this Modifier",
              "modifier": "M_BlackSwan_P01_ListenAddPoison_SubOnEnemy_Part1Mark"
            }
          ],
          "priorityLevel": 200
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "M_BlackSwan_P01_ListenAddPoison_SubOnEnemy",
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
              "to": "Owner of this Modifier",
              "modifier": "M_BlackSwan_P01_ListenAddPoison_SubOnEnemy_ListenPhase1Mark"
            }
          ]
        },
        {
          "eventTrigger": "Turn [Pre-action Phase]",
          "execute": [
            {
              "name": "Add Events/Bonuses",
              "to": "Owner of this Modifier",
              "modifier": "M_BlackSwan_P01_ListenAddPoison_SubOnEnemy_Part1Mark"
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
                        "target": "Owner of this Modifier",
                        "target2": "Current Turn Owner"
                      },
                      {
                        "name": "Has Modifier",
                        "target": "Owner of this Modifier",
                        "modifier": "M_BlackSwan_P01_ListenAddPoison_SubOnEnemy_Part1Mark",
                        "justAddedOrActive": true
                      }
                    ]
                  },
                  {
                    "name": "Attack Type",
                    "attackTypes": [
                      "DOT"
                    ],
                    "target": "Use Prior Target(s) Defined"
                  }
                ]
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": "Owner of this Modifier",
                  "modifier": "M_BlackSwan_P01_AddDOTFlag"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "M_BlackSwan_P01_ListenAddPoison",
      "execute": [
        {
          "eventTrigger": "Entity Created [Anyone]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Is Part Of Team",
                "target": "Use Prior Target(s) Defined",
                "team": "TeamDark"
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": "Use Prior Target(s) Defined",
                  "modifier": "M_BlackSwan_P01_ListenAddPoison_SubOnEnemy"
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
                "modifier": "M_BlackSwan_P01_AddDOTFlag"
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
                    "target": "Use Prior Target(s) Defined",
                    "modifier": "M_BlackSwan_ForbidEffectFlag",
                    "justAddedOrActive": true
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": "Use Prior Target(s) Defined",
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
                  ],
                  "failed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": "Use Prior Target(s) Defined",
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
        }
      ],
      "stackData": [],
      "latentQueue": []
    }
  ]
}