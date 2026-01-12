const configAbility = {
  "fileName": "Sushang_Sushang_Ability02_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Remove Events/Bonuses",
      "to": "Caster",
      "modifier": "Sushang_BP_BreakCheck_Before"
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Has Flag",
        "target": "Single Target (Primary)",
        "flagName": "Break"
      },
      "passed": [
        {
          "name": "Add Events/Bonuses",
          "to": "Caster",
          "modifier": "Sushang_BP_BreakCheck_Before"
        }
      ]
    },
    {
      "name": "ATK Scaling DMG",
      "target": "Single Target (Primary)",
      "AttackScaling": {
        "DamageType": "Physical",
        "Damage": {
          "operator": "Variables[0] (2.1) || Constants[0] (0.3) || MUL || RETURN",
          "displayLines": "(2.1 * 0.3)",
          "constants": [
            0.3
          ],
          "variables": [
            2.1
          ]
        },
        "Toughness": {
          "operator": "Variables[0] (ST Toughness Value) || Constants[0] (0.3) || MUL || RETURN",
          "displayLines": "(ST Toughness Value * 0.3)",
          "constants": [
            0.3
          ],
          "variables": [
            "ST Toughness Value"
          ]
        },
        "Tags": null,
        "EnergyGainPercent": "30%"
      }
    },
    {
      "name": "IF",
      "conditions": {
        "name": "AND",
        "conditionList": [
          {
            "name": "Has Modifier",
            "target": "Caster",
            "modifier": "Sushang_UltraBonus[<span class=\"descriptionNumberColor\">Dawn Herald</span>]"
          }
        ]
      }
    },
    {
      "name": "Remove Events/Bonuses",
      "to": "Caster",
      "modifier": "Sushang_BP_PassiveCheck"
    },
    {
      "name": "Remove Events/Bonuses",
      "to": "Caster",
      "modifier": "Sushang_BP_PassiveCheck_01"
    },
    {
      "name": "Remove Events/Bonuses",
      "to": "Caster",
      "modifier": "Sushang_BP_PassiveCheck_02"
    },
    {
      "name": "ATK Scaling DMG",
      "target": "Single Target (Primary)",
      "canPhase": true,
      "AttackScaling": {
        "DamageType": "Physical",
        "Damage": {
          "operator": "Variables[0] (2.1) || Constants[0] (0.7) || MUL || RETURN",
          "displayLines": "(2.1 * 0.7)",
          "constants": [
            0.7
          ],
          "variables": [
            2.1
          ]
        },
        "Toughness": {
          "operator": "Variables[0] (ST Toughness Value) || Constants[0] (0.7) || MUL || RETURN",
          "displayLines": "(ST Toughness Value * 0.7)",
          "constants": [
            0.7
          ],
          "variables": [
            "ST Toughness Value"
          ]
        },
        "Tags": null,
        "EnergyGainPercent": "70%"
      }
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Has Modifier",
        "target": "Caster",
        "modifier": "Sushang_UltraBonus[<span class=\"descriptionNumberColor\">Dawn Herald</span>]"
      },
      "passed": [
        {
          "name": "IF",
          "conditions": {
            "name": "Has Flag",
            "target": "Single Target (Primary)",
            "flagName": "Break"
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": "Caster",
              "modifier": "Sushang_BP_PassiveCheck_01"
            },
            {
              "name": "Add Events/Bonuses",
              "to": "Caster",
              "modifier": "Sushang_BP_PassiveCheck_02"
            }
          ],
          "failed": [
            {
              "name": "Add Events/Bonuses",
              "to": "Caster",
              "modifier": "Sushang_BP_PassiveCheck_01",
              "baseChance": {
                "operator": "Variables[0] (0.33) || RETURN",
                "displayLines": "0.33",
                "constants": [],
                "variables": [
                  0.33
                ]
              }
            },
            {
              "name": "Add Events/Bonuses",
              "to": "Caster",
              "modifier": "Sushang_BP_PassiveCheck_02",
              "baseChance": {
                "operator": "Variables[0] (0.33) || RETURN",
                "displayLines": "0.33",
                "constants": [],
                "variables": [
                  0.33
                ]
              }
            }
          ]
        }
      ]
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Has Flag",
        "target": "Single Target (Primary)",
        "flagName": "Break"
      },
      "passed": [
        {
          "name": "Add Events/Bonuses",
          "to": "Caster",
          "modifier": "Sushang_BP_PassiveCheck"
        }
      ],
      "failed": [
        {
          "name": "Add Events/Bonuses",
          "to": "Caster",
          "modifier": "Sushang_BP_PassiveCheck",
          "baseChance": {
            "operator": "Variables[0] (0.33) || RETURN",
            "displayLines": "0.33",
            "constants": [],
            "variables": [
              0.33
            ]
          }
        }
      ]
    },
    {
      "name": "IF",
      "conditions": {
        "name": "NOT",
        "condition": {
          "name": "OR",
          "conditionList": [
            {
              "name": "Has Modifier",
              "target": "Caster",
              "modifier": "Sushang_BP_PassiveCheck"
            },
            {
              "name": "Has Modifier",
              "target": "Caster",
              "modifier": "Sushang_BP_PassiveCheck_01"
            },
            {
              "name": "Has Modifier",
              "target": "Caster",
              "modifier": "Sushang_BP_PassiveCheck_02"
            }
          ]
        }
      },
      "passed": [
        "Trigger: Attack End"
      ]
    },
    {
      "name": "IF",
      "conditions": {
        "name": "AND",
        "conditionList": [
          {
            "name": "Has Modifier",
            "target": "Caster",
            "modifier": "Sushang_BP_PassiveCheck_01"
          }
        ]
      },
      "passed": [
        {
          "name": "IF",
          "conditions": {
            "name": "Trace Activated",
            "conditionList": "Riposte"
          },
          "passed": [
            {
              "name": "IF",
              "conditions": {
                "name": "Has Modifier",
                "target": "Caster",
                "modifier": "Sushang_PointB2_Bonus[<span class=\"descriptionNumberColor\">Riposte</span>]"
              },
              "passed": [
                {
                  "name": "Define Custom Variable with Modifier Values",
                  "valueType": "Layer",
                  "variableName": "PointB2_Layer",
                  "modifierName": "Sushang_PointB2_Bonus[<span class=\"descriptionNumberColor\">Riposte</span>]",
                  "multiplier": 1
                }
              ]
            }
          ]
        },
        {
          "name": "Add Events/Bonuses",
          "to": "Caster",
          "modifier": "Sushang_BP_PointB2_DMGModifier",
          "valuePerStack": {
            "MDF_PropertyValue": {
              "operator": "Variables[0] (PointB2_Layer) || Variables[1] (0.025) || MUL || RETURN",
              "displayLines": "(PointB2_Layer * 0.025)",
              "constants": [],
              "variables": [
                "PointB2_Layer",
                0.025
              ]
            }
          }
        },
        {
          "name": "ATK Scaling DMG",
          "target": "Single Target (Primary)",
          "AttackScaling": {
            "DamageType": "Physical",
            "Damage": {
              "operator": "Variables[0] (1) || Variables[1] (0.5) || MUL || RETURN",
              "displayLines": "(1 * 0.5)",
              "constants": [],
              "variables": [
                1,
                0.5
              ]
            },
            "Toughness": null,
            "Tags": null,
            "attackType": "Additional DMG"
          }
        },
        {
          "name": "Remove Events/Bonuses",
          "to": "Caster",
          "modifier": "Sushang_BP_PointB2_DMGModifier"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Eidolon Activated",
            "eidolon": 2
          },
          "passed": [
            {
              "name": "IF",
              "conditions": {
                "name": "Has Modifier",
                "target": "Caster",
                "modifier": "Sushang_Eidolon2_Bonus[<span class=\"descriptionNumberColor\">Refine in Toil</span>]"
              },
              "failed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": "Caster",
                  "modifier": "Sushang_Eidolon2_Bonus[<span class=\"descriptionNumberColor\">Refine in Toil</span>]",
                  "duration": 1,
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
                }
              ]
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Trace Activated",
            "conditionList": "Riposte"
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": "Caster",
              "modifier": "Sushang_PointB2_Bonus[<span class=\"descriptionNumberColor\">Riposte</span>]",
              "stackLimit": {
                "operator": "Variables[0] (10) || RETURN",
                "displayLines": "10",
                "constants": [],
                "variables": [
                  10
                ]
              },
              "valuePerStack": {
                "MDF_PropertyValue": {
                  "operator": "Variables[0] (0.025) || RETURN",
                  "displayLines": "0.025",
                  "constants": [],
                  "variables": [
                    0.025
                  ]
                },
                "MDF_Max_Layer": {
                  "operator": "Variables[0] (10) || RETURN",
                  "displayLines": "10",
                  "constants": [],
                  "variables": [
                    10
                  ]
                }
              }
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "NOT",
            "condition": {
              "name": "OR",
              "conditionList": [
                {
                  "name": "Has Modifier",
                  "target": "Caster",
                  "modifier": "Sushang_BP_PassiveCheck"
                },
                {
                  "name": "Has Modifier",
                  "target": "Caster",
                  "modifier": "Sushang_BP_PassiveCheck_02"
                }
              ]
            }
          },
          "passed": [
            "Trigger: Attack End"
          ]
        }
      ]
    },
    {
      "name": "Remove Events/Bonuses",
      "to": "Caster",
      "modifier": "Sushang_BP_PassiveCheck_01"
    },
    {
      "name": "IF",
      "conditions": {
        "name": "AND",
        "conditionList": [
          {
            "name": "Has Modifier",
            "target": "Caster",
            "modifier": "Sushang_BP_PassiveCheck_02"
          }
        ]
      },
      "passed": [
        {
          "name": "IF",
          "conditions": {
            "name": "Trace Activated",
            "conditionList": "Riposte"
          },
          "passed": [
            {
              "name": "IF",
              "conditions": {
                "name": "Has Modifier",
                "target": "Caster",
                "modifier": "Sushang_PointB2_Bonus[<span class=\"descriptionNumberColor\">Riposte</span>]"
              },
              "passed": [
                {
                  "name": "Define Custom Variable with Modifier Values",
                  "valueType": "Layer",
                  "variableName": "PointB2_Layer",
                  "modifierName": "Sushang_PointB2_Bonus[<span class=\"descriptionNumberColor\">Riposte</span>]",
                  "multiplier": 1
                }
              ]
            }
          ]
        },
        {
          "name": "Add Events/Bonuses",
          "to": "Caster",
          "modifier": "Sushang_BP_PointB2_DMGModifier",
          "valuePerStack": {
            "MDF_PropertyValue": {
              "operator": "Variables[0] (PointB2_Layer) || Variables[1] (0.025) || MUL || RETURN",
              "displayLines": "(PointB2_Layer * 0.025)",
              "constants": [],
              "variables": [
                "PointB2_Layer",
                0.025
              ]
            }
          }
        },
        {
          "name": "ATK Scaling DMG",
          "target": "Single Target (Primary)",
          "AttackScaling": {
            "DamageType": "Physical",
            "Damage": {
              "operator": "Variables[0] (1) || Variables[1] (0.5) || MUL || RETURN",
              "displayLines": "(1 * 0.5)",
              "constants": [],
              "variables": [
                1,
                0.5
              ]
            },
            "Toughness": null,
            "Tags": null,
            "attackType": "Additional DMG"
          }
        },
        {
          "name": "Remove Events/Bonuses",
          "to": "Caster",
          "modifier": "Sushang_BP_PointB2_DMGModifier"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Eidolon Activated",
            "eidolon": 2
          },
          "passed": [
            {
              "name": "IF",
              "conditions": {
                "name": "Has Modifier",
                "target": "Caster",
                "modifier": "Sushang_Eidolon2_Bonus[<span class=\"descriptionNumberColor\">Refine in Toil</span>]"
              },
              "failed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": "Caster",
                  "modifier": "Sushang_Eidolon2_Bonus[<span class=\"descriptionNumberColor\">Refine in Toil</span>]",
                  "duration": 1,
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
                }
              ]
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Trace Activated",
            "conditionList": "Riposte"
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": "Caster",
              "modifier": "Sushang_PointB2_Bonus[<span class=\"descriptionNumberColor\">Riposte</span>]",
              "stackLimit": {
                "operator": "Variables[0] (10) || RETURN",
                "displayLines": "10",
                "constants": [],
                "variables": [
                  10
                ]
              },
              "valuePerStack": {
                "MDF_PropertyValue": {
                  "operator": "Variables[0] (0.025) || RETURN",
                  "displayLines": "0.025",
                  "constants": [],
                  "variables": [
                    0.025
                  ]
                },
                "MDF_Max_Layer": {
                  "operator": "Variables[0] (10) || RETURN",
                  "displayLines": "10",
                  "constants": [],
                  "variables": [
                    10
                  ]
                }
              }
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "NOT",
            "condition": {
              "name": "Has Modifier",
              "target": "Caster",
              "modifier": "Sushang_BP_PassiveCheck"
            }
          },
          "passed": [
            "Trigger: Attack End"
          ]
        }
      ]
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Has Modifier",
        "target": "Caster",
        "modifier": "Sushang_BP_PassiveCheck"
      },
      "passed": [
        {
          "name": "IF",
          "conditions": {
            "name": "Trace Activated",
            "conditionList": "Riposte"
          },
          "passed": [
            {
              "name": "IF",
              "conditions": {
                "name": "Has Modifier",
                "target": "Caster",
                "modifier": "Sushang_PointB2_Bonus[<span class=\"descriptionNumberColor\">Riposte</span>]"
              },
              "passed": [
                {
                  "name": "Define Custom Variable with Modifier Values",
                  "valueType": "Layer",
                  "variableName": "PointB2_Layer",
                  "modifierName": "Sushang_PointB2_Bonus[<span class=\"descriptionNumberColor\">Riposte</span>]",
                  "multiplier": 1
                }
              ]
            }
          ]
        },
        {
          "name": "Add Events/Bonuses",
          "to": "Caster",
          "modifier": "Sushang_BP_PointB2_DMGModifier",
          "valuePerStack": {
            "MDF_PropertyValue": {
              "operator": "Variables[0] (PointB2_Layer) || Variables[1] (0.025) || MUL || RETURN",
              "displayLines": "(PointB2_Layer * 0.025)",
              "constants": [],
              "variables": [
                "PointB2_Layer",
                0.025
              ]
            }
          }
        },
        {
          "name": "ATK Scaling DMG",
          "target": "Single Target (Primary)",
          "AttackScaling": {
            "DamageType": "Physical",
            "Damage": {
              "operator": "Variables[0] (1) || RETURN",
              "displayLines": "1",
              "constants": [],
              "variables": [
                1
              ]
            },
            "Toughness": null,
            "Tags": null,
            "attackType": "Additional DMG"
          }
        },
        {
          "name": "Remove Events/Bonuses",
          "to": "Caster",
          "modifier": "Sushang_BP_PointB2_DMGModifier"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Eidolon Activated",
            "eidolon": 2
          },
          "passed": [
            {
              "name": "IF",
              "conditions": {
                "name": "Has Modifier",
                "target": "Caster",
                "modifier": "Sushang_Eidolon2_Bonus[<span class=\"descriptionNumberColor\">Refine in Toil</span>]"
              },
              "failed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": "Caster",
                  "modifier": "Sushang_Eidolon2_Bonus[<span class=\"descriptionNumberColor\">Refine in Toil</span>]",
                  "duration": 1,
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
                }
              ]
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Trace Activated",
            "conditionList": "Riposte"
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": "Caster",
              "modifier": "Sushang_PointB2_Bonus[<span class=\"descriptionNumberColor\">Riposte</span>]",
              "stackLimit": {
                "operator": "Variables[0] (10) || RETURN",
                "displayLines": "10",
                "constants": [],
                "variables": [
                  10
                ]
              },
              "valuePerStack": {
                "MDF_PropertyValue": {
                  "operator": "Variables[0] (0.025) || RETURN",
                  "displayLines": "0.025",
                  "constants": [],
                  "variables": [
                    0.025
                  ]
                },
                "MDF_Max_Layer": {
                  "operator": "Variables[0] (10) || RETURN",
                  "displayLines": "10",
                  "constants": [],
                  "variables": [
                    10
                  ]
                }
              }
            }
          ]
        },
        "Trigger: Attack End"
      ]
    },
    {
      "name": "Remove Events/Bonuses",
      "to": "Caster",
      "modifier": "Sushang_BP_PassiveCheck"
    },
    {
      "name": "Remove Events/Bonuses",
      "to": "Caster",
      "modifier": "Sushang_BP_PassiveCheck_01"
    },
    {
      "name": "Remove Events/Bonuses",
      "to": "Caster",
      "modifier": "Sushang_BP_PassiveCheck_02"
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Has Modifier",
        "target": "Caster",
        "modifier": "Sushang_BP_BreakCheck_Before"
      },
      "passed": [
        {
          "name": "IF",
          "conditions": {
            "name": "Eidolon Activated",
            "eidolon": 1
          },
          "passed": [
            {
              "name": "Skill Points Modification",
              "adjustmentValue": 1,
              "adjustmentType": "+"
            }
          ]
        }
      ]
    },
    {
      "name": "Remove Events/Bonuses",
      "to": "Caster",
      "modifier": "Sushang_BP_BreakCheck_Before"
    },
    {
      "name": "Find New Target",
      "from": "All Hostile Entities (AOE)",
      "searchRandom": true,
      "maxTargets": 1,
      "conditions": {
        "name": "Has Flag",
        "target": "Use Prior Target(s) Defined",
        "flagName": "Break"
      },
      "ifTargetFound": [
        {
          "name": "IF",
          "conditions": {
            "name": "Trace Activated",
            "conditionList": "Vanquisher"
          },
          "passed": [
            {
              "name": "Use Custom Character Function",
              "functionName": "ReduceActionDelay",
              "target": "Caster",
              "variables": {
                "parameter[0]_NormalizedValue": {
                  "operator": "Variables[0] (0.15) || RETURN",
                  "displayLines": "0.15",
                  "constants": [],
                  "variables": [
                    0.15
                  ]
                }
              }
            }
          ]
        }
      ]
    },
    "Trigger: Ability End"
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "Sushang_BP_PointB2_DMGModifier",
      "execute": [
        {
          "eventTrigger": "Deal Damage Start [Owner]: Any",
          "execute": [
            {
              "name": "Adjust Target Stats",
              "on": "Attacker",
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageAll</span>&nbsp;",
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
      ],
      "stackData": [
        "MDF_PropertyValue"
      ],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "Sushang_BP_BreakCheck_Before",
      "stackData": [],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "Sushang_BP_PassiveCheck_02",
      "stackData": [],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "Sushang_BP_PassiveCheck_01",
      "stackData": [],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "Sushang_BP_PassiveCheck",
      "stackData": [],
      "latentQueue": []
    }
  ]
}