const configAbility = {
  "fileName": "Asta_Asta_PassiveAbility_1",
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
      "modifier": "M_Asta_Passive",
      "valuePerStack": {
        "MDF_CostLayer": {
          "operator": "Variables[0] (3) || RETURN",
          "displayLines": "3",
          "constants": [],
          "variables": [
            3
          ]
        },
        "MDF_MaxCount": {
          "operator": "Variables[0] (5) || RETURN",
          "displayLines": "5",
          "constants": [],
          "variables": [
            5
          ]
        }
      }
    },
    {
      "name": "Update Displayed Energy Bar",
      "value": 0,
      "maximum": {
        "operator": "Variables[0] (5) || RETURN",
        "displayLines": "5",
        "constants": [],
        "variables": [
          5
        ]
      },
      "assignState": "True",
      "priorState": "Normal",
      "bar#": 3,
      "cooldown": 0
    },
    {
      "name": "Add Events/Bonuses",
      "to": "Caster",
      "modifier": "Asta_Eidolon2Flag"
    },
    {
      "name": "Add Events/Bonuses",
      "to": "Caster",
      "modifier": "Asta_AbilityPreShowModifier"
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Eidolon Activated",
        "eidolon": 1
      },
      "passed": [
        {
          "name": "Update Ability Description",
          "popUpText": "Deals minor Fire DMG to single enemy targets with 6 Bounces in total.",
          "skillTrigger": "Skill02"
        }
      ]
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "Asta_AbilityPreShowModifier",
      "stackType": "ReplaceByCaster",
      "stackData": [],
      "latentQueue": [],
      "previewValue": {
        "name": "Modifier: UI Preview",
        "show": "Hide",
        "target": "Allied Team",
        "skillType": [
          "Ultimate"
        ],
        "conditions": {
          "name": "Has Modifier",
          "target": "Use Prior Target(s) Defined",
          "modifier": "Asta_Ultimate_SpeedUP[<span class=\"descriptionNumberColor\">SPD Boost</span>]",
          "invertCondition": true
        },
        "delayAdvancePreview": {
          "name": "Delay/Advance Preview",
          "previewValue": "50(SPD Change)"
        }
      }
    },
    {
      "name": "Modifier Construction",
      "for": "M_Asta_Passive",
      "execute": [
        {
          "eventTrigger": "Turn [Pre-action Phase]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Has Modifier",
                "target": "Caster",
                "modifier": "Asta_Eidolon2Flag"
              },
              "failed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Eidolon Activated",
                    "eidolon": 6
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "MDF_Count",
                      "value": {
                        "operator": "Variables[0] (MDF_Count) || Variables[1] (MDF_CostLayer) || Variables[2] (1) || SUB || SUB || RETURN",
                        "displayLines": "(MDF_Count - (MDF_CostLayer - 1))",
                        "constants": [],
                        "variables": [
                          "MDF_Count",
                          "MDF_CostLayer",
                          1
                        ]
                      }
                    }
                  ],
                  "failed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "MDF_Count",
                      "value": {
                        "operator": "Variables[0] (MDF_Count) || Variables[1] (MDF_CostLayer) || SUB || RETURN",
                        "displayLines": "(MDF_Count - MDF_CostLayer)",
                        "constants": [],
                        "variables": [
                          "MDF_Count",
                          "MDF_CostLayer"
                        ]
                      }
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "MDF_Count",
                    "compareType": ">",
                    "value2": 0
                  },
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "MDF_Count",
                        "compareType": "<",
                        "value2": {
                          "operator": "Variables[0] (2) || RETURN",
                          "displayLines": "2",
                          "constants": [],
                          "variables": [
                            2
                          ]
                        }
                      },
                      "passed": [
                        {
                          "name": "Remove Events/Bonuses",
                          "to": "Owner of this Modifier",
                          "modifier": "Asta_Passive_SPRatioUp[<span class=\"descriptionNumberColor\">Energy Regeneration Rate Boost</span>]"
                        }
                      ]
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": "Owner of this Modifier",
                      "modifier": "Asta_Passive_Charge[<span class=\"descriptionNumberColor\">Charging</span>]",
                      "valuePerStack": {
                        "MDF_AttackAddedRatio": {
                          "operator": "Variables[0] (0.14) || RETURN",
                          "displayLines": "0.14",
                          "constants": [],
                          "variables": [
                            0.14
                          ]
                        },
                        "MDF_DefenceAddedRatio": {
                          "operator": "Variables[0] (0.06) || RETURN",
                          "displayLines": "0.06",
                          "constants": [],
                          "variables": [
                            0.06
                          ]
                        },
                        "MDF_BonusLayer": {
                          "operator": "Variables[0] (2) || RETURN",
                          "displayLines": "2",
                          "constants": [],
                          "variables": [
                            2
                          ]
                        },
                        "MDF_SPRatio": {
                          "operator": "Variables[0] (0.15) || RETURN",
                          "displayLines": "0.15",
                          "constants": [],
                          "variables": [
                            0.15
                          ]
                        },
                        "MDF_CostLayer": {
                          "operator": "Variables[0] (3) || RETURN",
                          "displayLines": "3",
                          "constants": [],
                          "variables": [
                            3
                          ]
                        }
                      }
                    }
                  ],
                  "failed": [
                    {
                      "name": "Define Modifier Variable",
                      "target": "Caster",
                      "modifierName": "Asta_Passive_Charge[<span class=\"descriptionNumberColor\">Charging</span>]",
                      "value": 0
                    },
                    {
                      "name": "Update Displayed Energy Bar",
                      "value": 0,
                      "maximum": {
                        "operator": "Variables[0] (5) || RETURN",
                        "displayLines": "5",
                        "constants": [],
                        "variables": [
                          5
                        ]
                      },
                      "assignState": "True",
                      "priorState": "Normal",
                      "bar#": 3,
                      "cooldown": 0
                    },
                    {
                      "name": "Remove Events/Bonuses",
                      "to": "Owner of this Modifier",
                      "modifier": "Asta_Passive_Charge[<span class=\"descriptionNumberColor\">Charging</span>]"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "Attack DMG End [Owner]",
          "execute": [
            {
              "name": "Find New Target",
              "from": "Ability Target List",
              "searchRandom": true,
              "includeDyingTargets": true,
              "ifTargetFound": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Weakness",
                    "target": "Use Prior Target(s) Defined",
                    "DamageType": "Fire"
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "MDF_Count",
                      "value": {
                        "operator": "Variables[0] (MDF_Count) || Constants[0] (2) || ADD || RETURN",
                        "displayLines": "(MDF_Count + 2)",
                        "constants": [
                          2
                        ],
                        "variables": [
                          "MDF_Count"
                        ]
                      }
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "MDF_Count",
                        "compareType": ">",
                        "value2": {
                          "operator": "Variables[0] (MDF_MaxCount) || RETURN",
                          "displayLines": "MDF_MaxCount",
                          "constants": [],
                          "variables": [
                            "MDF_MaxCount"
                          ]
                        }
                      },
                      "passed": [
                        {
                          "name": "Define Custom Variable",
                          "variableName": "MDF_Count",
                          "value": {
                            "operator": "Variables[0] (MDF_MaxCount) || RETURN",
                            "displayLines": "MDF_MaxCount",
                            "constants": [],
                            "variables": [
                              "MDF_MaxCount"
                            ]
                          }
                        }
                      ]
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": "Owner of this Modifier",
                      "modifier": "Asta_Passive_Charge[<span class=\"descriptionNumberColor\">Charging</span>]",
                      "valuePerStack": {
                        "MDF_AttackAddedRatio": {
                          "operator": "Variables[0] (0.14) || RETURN",
                          "displayLines": "0.14",
                          "constants": [],
                          "variables": [
                            0.14
                          ]
                        },
                        "MDF_DefenceAddedRatio": {
                          "operator": "Variables[0] (0.06) || RETURN",
                          "displayLines": "0.06",
                          "constants": [],
                          "variables": [
                            0.06
                          ]
                        },
                        "MDF_BonusLayer": {
                          "operator": "Variables[0] (2) || RETURN",
                          "displayLines": "2",
                          "constants": [],
                          "variables": [
                            2
                          ]
                        },
                        "MDF_SPRatio": {
                          "operator": "Variables[0] (0.15) || RETURN",
                          "displayLines": "0.15",
                          "constants": [],
                          "variables": [
                            0.15
                          ]
                        },
                        "MDF_CostLayer": {
                          "operator": "Variables[0] (3) || RETURN",
                          "displayLines": "3",
                          "constants": [],
                          "variables": [
                            3
                          ]
                        }
                      }
                    }
                  ],
                  "failed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "MDF_Count",
                      "value": {
                        "operator": "Variables[0] (MDF_Count) || Constants[0] (1) || ADD || RETURN",
                        "displayLines": "(MDF_Count + 1)",
                        "constants": [
                          1
                        ],
                        "variables": [
                          "MDF_Count"
                        ]
                      }
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "MDF_Count",
                        "compareType": ">",
                        "value2": {
                          "operator": "Variables[0] (MDF_MaxCount) || RETURN",
                          "displayLines": "MDF_MaxCount",
                          "constants": [],
                          "variables": [
                            "MDF_MaxCount"
                          ]
                        }
                      },
                      "passed": [
                        {
                          "name": "Define Custom Variable",
                          "variableName": "MDF_Count",
                          "value": {
                            "operator": "Variables[0] (MDF_MaxCount) || RETURN",
                            "displayLines": "MDF_MaxCount",
                            "constants": [],
                            "variables": [
                              "MDF_MaxCount"
                            ]
                          }
                        }
                      ]
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": "Owner of this Modifier",
                      "modifier": "Asta_Passive_Charge[<span class=\"descriptionNumberColor\">Charging</span>]",
                      "valuePerStack": {
                        "MDF_AttackAddedRatio": {
                          "operator": "Variables[0] (0.14) || RETURN",
                          "displayLines": "0.14",
                          "constants": [],
                          "variables": [
                            0.14
                          ]
                        },
                        "MDF_DefenceAddedRatio": {
                          "operator": "Variables[0] (0.06) || RETURN",
                          "displayLines": "0.06",
                          "constants": [],
                          "variables": [
                            0.06
                          ]
                        },
                        "MDF_BonusLayer": {
                          "operator": "Variables[0] (2) || RETURN",
                          "displayLines": "2",
                          "constants": [],
                          "variables": [
                            2
                          ]
                        },
                        "MDF_SPRatio": {
                          "operator": "Variables[0] (0.15) || RETURN",
                          "displayLines": "0.15",
                          "constants": [],
                          "variables": [
                            0.15
                          ]
                        },
                        "MDF_CostLayer": {
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
            }
          ]
        }
      ],
      "stackData": [
        "MDF_CostLayer",
        "MDF_MaxCount"
      ],
      "latentQueue": []
    }
  ]
}