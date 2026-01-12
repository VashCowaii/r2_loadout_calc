const compositeAbilityObject = {
  "fullCharacterName": "Trailblazer - Destruction",
  "trimCharacterName": "TrailblazerDestruction",
  "abilityList": [
    "TrailblazerDestruction_PlayerBoy_Eidolon6",
    "TrailblazerDestruction_PlayerBoy_Trace03",
    "TrailblazerDestruction_PlayerBoy_Trace01",
    "TrailblazerDestruction_PlayerBoy_AutoUseUltraAbility",
    "TrailblazerDestruction_PlayerBoy_PassiveAbility01",
    "TrailblazerDestruction_PlayerBoy_Ability03_EnterReady",
    "TrailblazerDestruction_PlayerBoy_Ability21_Part02",
    "TrailblazerDestruction_PlayerBoy_Ability21_Part01",
    "TrailblazerDestruction_PlayerBoy_Ability02_Part02",
    "TrailblazerDestruction_PlayerBoy_Ability02_Part01",
    "TrailblazerDestruction_PlayerBoy_Ability11_Part02",
    "TrailblazerDestruction_PlayerBoy_Ability11_Part01",
    "TrailblazerDestruction_PlayerBoy_Ability01_Part02",
    "TrailblazerDestruction_PlayerBoy_Ability01_Part01",
    "TrailblazerDestruction_Modifiers"
  ],
  "abilityObject": {
    "TrailblazerDestruction_PlayerBoy_Eidolon6": {
      "fileName": "TrailblazerDestruction_PlayerBoy_Eidolon6",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "references": []
    },
    "TrailblazerDestruction_PlayerBoy_Trace03": {
      "fileName": "TrailblazerDestruction_PlayerBoy_Trace03",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "references": []
    },
    "TrailblazerDestruction_PlayerBoy_Trace01": {
      "fileName": "TrailblazerDestruction_PlayerBoy_Trace01",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Add Events/Bonuses",
          "to": "Caster",
          "modifier": "M_PlayerBoy_Trace01"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "M_PlayerBoy_Trace01",
          "execute": [
            {
              "eventTrigger": "Enter Battle",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Trace Activated",
                        "conditionList": "Ready for Battle"
                      },
                      {
                        "name": "Compare: Variable",
                        "value1": "Wave Count",
                        "compareType": "=",
                        "value2": 1
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Update Energy",
                      "on": "Caster",
                      "value": {
                        "operator": "Variables[0] (15) || RETURN",
                        "displayLines": "15",
                        "constants": [],
                        "variables": [
                          15
                        ]
                      },
                      "isFixed": "* ERR"
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
    },
    "TrailblazerDestruction_PlayerBoy_AutoUseUltraAbility": {
      "fileName": "TrailblazerDestruction_PlayerBoy_AutoUseUltraAbility",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Add Events/Bonuses",
          "to": "Caster",
          "modifier": "M_Player_AutoUseUltraAbility"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "M_Player_AutoUseUltraAbility",
          "stackData": [],
          "latentQueue": []
        }
      ]
    },
    "TrailblazerDestruction_PlayerBoy_PassiveAbility01": {
      "fileName": "TrailblazerDestruction_PlayerBoy_PassiveAbility01",
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
          "modifier": "M_Player_PassiveAbility"
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
              "modifier": "PlayerBoy_Eidolon4_Break_Check"
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Eidolon Activated",
            "eidolon": 2
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": "Caster",
              "modifier": "PlayerBoy_Eidolon2_Heal_Check"
            }
          ]
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "PlayerWarrior_SkilTree02_BreakDefUp[<span class=\"descriptionNumberColor\">Tenacity</span>]",
          "stackType": "ReplaceByCaster",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Define Custom Variable with Modifier Values",
                  "target": "Owner of this Modifier",
                  "valueType": "Layer",
                  "variableName": "MDF_Layer",
                  "multiplier": 1
                },
                {
                  "name": "Stack Target Stat Value",
                  "target": "Owner of this Modifier",
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">DEF%</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (MDF_DefenceAddedRatio) || Variables[1] (MDF_Layer) || MUL || RETURN",
                    "displayLines": "(MDF_DefenceAddedRatio * MDF_Layer)",
                    "constants": [],
                    "variables": [
                      "MDF_DefenceAddedRatio",
                      "MDF_Layer"
                    ]
                  }
                }
              ]
            }
          ],
          "description": "Each stack increases DEF by <span class=\"descriptionNumberColor\">MDF_DefenceAddedRatio</span>, up to <span class=\"descriptionNumberColor\">MDF_Max_Layer</span> stack(s).",
          "type": "Buff",
          "effectName": "DEF Boost",
          "statusName": "Tenacity",
          "stackLimit": 3,
          "addStacksPerTrigger": 1
        },
        {
          "name": "Modifier Construction",
          "for": "PlayerWarrior_Passive_BreakAtkUp[<span class=\"descriptionNumberColor\">Perfect Pickoff</span>]",
          "stackType": "ReplaceByCaster",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Define Custom Variable with Modifier Values",
                  "target": "Owner of this Modifier",
                  "valueType": "Layer",
                  "variableName": "MDF_Layer",
                  "multiplier": 1
                },
                {
                  "name": "Stack Target Stat Value",
                  "target": "Owner of this Modifier",
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">ATK%</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (MDF_AttackAddedRatio) || Variables[1] (MDF_Layer) || MUL || RETURN",
                    "displayLines": "(MDF_AttackAddedRatio * MDF_Layer)",
                    "constants": [],
                    "variables": [
                      "MDF_AttackAddedRatio",
                      "MDF_Layer"
                    ]
                  }
                }
              ]
            }
          ],
          "description": "Each stack increases ATK by <span class=\"descriptionNumberColor\">MDF_AttackAddedRatio</span>, up to <span class=\"descriptionNumberColor\">MDF_Max_Layer</span> stack(s).",
          "type": "Buff",
          "effectName": "ATK Boost",
          "statusName": "Perfect Pickoff",
          "stackLimit": 3,
          "addStacksPerTrigger": 1
        },
        {
          "name": "Modifier Construction",
          "for": "M_Player_PassiveAbility",
          "execute": [
            {
              "eventTrigger": "Got a Kill [Owner]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Eidolon Activated",
                    "eidolon": 6
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "MDF_Max_Layer",
                      "value": {
                        "operator": "Variables[0] (2) || Variables[1] (MDF_Max_Layer) || ADD || RETURN",
                        "displayLines": "(2 + MDF_Max_Layer)",
                        "constants": [],
                        "variables": [
                          2,
                          "MDF_Max_Layer"
                        ]
                      }
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": "Caster",
                      "modifier": "PlayerWarrior_Passive_BreakAtkUp[<span class=\"descriptionNumberColor\">Perfect Pickoff</span>]",
                      "stackLimit": {
                        "operator": "Variables[0] (2) || Variables[1] (MDF_Max_Layer) || ADD || RETURN",
                        "displayLines": "(2 + MDF_Max_Layer)",
                        "constants": [],
                        "variables": [
                          2,
                          "MDF_Max_Layer"
                        ]
                      },
                      "valuePerStack": {
                        "MDF_AttackAddedRatio": {
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
                      "name": "IF",
                      "conditions": {
                        "name": "Trace Activated",
                        "conditionList": "Tenacity"
                      },
                      "passed": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": "Caster",
                          "modifier": "PlayerWarrior_SkilTree02_BreakDefUp[<span class=\"descriptionNumberColor\">Tenacity</span>]",
                          "stackLimit": {
                            "operator": "Variables[0] (2) || Variables[1] (MDF_Max_Layer) || ADD || RETURN",
                            "displayLines": "(2 + MDF_Max_Layer)",
                            "constants": [],
                            "variables": [
                              2,
                              "MDF_Max_Layer"
                            ]
                          },
                          "valuePerStack": {
                            "MDF_DefenceAddedRatio": {
                              "operator": "Variables[0] (0.1) || RETURN",
                              "displayLines": "0.1",
                              "constants": [],
                              "variables": [
                                0.1
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
              "eventTrigger": "Caused Weakness Break [Owner]",
              "execute": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_Max_Layer",
                  "value": {
                    "operator": "Variables[0] (2) || Variables[1] (MDF_Max_Layer) || ADD || RETURN",
                    "displayLines": "(2 + MDF_Max_Layer)",
                    "constants": [],
                    "variables": [
                      2,
                      "MDF_Max_Layer"
                    ]
                  }
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": "Caster",
                  "modifier": "PlayerWarrior_Passive_BreakAtkUp[<span class=\"descriptionNumberColor\">Perfect Pickoff</span>]",
                  "stackLimit": {
                    "operator": "Variables[0] (2) || Variables[1] (MDF_Max_Layer) || ADD || RETURN",
                    "displayLines": "(2 + MDF_Max_Layer)",
                    "constants": [],
                    "variables": [
                      2,
                      "MDF_Max_Layer"
                    ]
                  },
                  "valuePerStack": {
                    "MDF_AttackAddedRatio": {
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
                  "name": "IF",
                  "conditions": {
                    "name": "Trace Activated",
                    "conditionList": "Tenacity"
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": "Caster",
                      "modifier": "PlayerWarrior_SkilTree02_BreakDefUp[<span class=\"descriptionNumberColor\">Tenacity</span>]",
                      "stackLimit": {
                        "operator": "Variables[0] (2) || Variables[1] (MDF_Max_Layer) || ADD || RETURN",
                        "displayLines": "(2 + MDF_Max_Layer)",
                        "constants": [],
                        "variables": [
                          2,
                          "MDF_Max_Layer"
                        ]
                      },
                      "valuePerStack": {
                        "MDF_DefenceAddedRatio": {
                          "operator": "Variables[0] (0.1) || RETURN",
                          "displayLines": "0.1",
                          "constants": [],
                          "variables": [
                            0.1
                          ]
                        }
                      }
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
          "for": "PlayerBoy_Eidolon4_Break_Check",
          "execute": [
            {
              "eventTrigger": "Deal Damage Start [Owner]: Any",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Flag",
                    "target": "Target Receiving DMG",
                    "flagName": "Break"
                  },
                  "passed": [
                    {
                      "name": "Adjust Target Stats",
                      "on": "Attacker",
                      "statName": "&nbsp;<span class=\"descriptionNumberColor\">CritRateSUM</span>&nbsp;",
                      "value": {
                        "operator": "Variables[0] (0.25) || RETURN",
                        "displayLines": "0.25",
                        "constants": [],
                        "variables": [
                          0.25
                        ]
                      }
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
          "for": "PlayerBoy_Eidolon2_Heal_Check",
          "execute": [
            {
              "eventTrigger": "Deal Damage Start [Owner]: Any",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Has Weakness",
                        "target": "Use Prior Target(s) Defined",
                        "DamageType": "Physical"
                      },
                      {
                        "name": "Compare: Variable",
                        "value1": "IsAttack",
                        "compareType": "=",
                        "value2": 1
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "HitPhy",
                      "value": 1
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Attack Start [Owner]",
              "execute": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "HitPhy",
                  "value": 0
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "IsAttack",
                  "value": 1
                }
              ]
            },
            {
              "eventTrigger": "Attack DMG End [Owner]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "HitPhy",
                    "compareType": "=",
                    "value2": 1
                  },
                  "passed": [
                    {
                      "name": "Heal",
                      "target": "Owner of this Modifier",
                      "healPercent": {
                        "operator": "Variables[0] (0.05) || RETURN",
                        "displayLines": "0.05",
                        "constants": [],
                        "variables": [
                          0.05
                        ]
                      }
                    }
                  ]
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "HitPhy",
                  "value": 0
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "IsAttack",
                  "value": 0
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": []
        }
      ]
    },
    "TrailblazerDestruction_PlayerBoy_Ability03_EnterReady": {
      "fileName": "TrailblazerDestruction_PlayerBoy_Ability03_EnterReady",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        "Deleted bullshit"
      ],
      "references": []
    },
    "TrailblazerDestruction_PlayerBoy_Ability21_Part02": {
      "fileName": "TrailblazerDestruction_PlayerBoy_Ability21_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "IF",
          "conditions": {
            "name": "Eidolon Activated",
            "eidolon": 1
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": "Caster",
              "modifier": "PlayerBoy_Eidolon1_Check_Modifier"
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Trace Activated",
            "conditionList": "Fighting Will"
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": "Caster",
              "modifier": "PlayerBoy_Trace03_DamageAddedRatio"
            }
          ]
        },
        {
          "name": "ATK Scaling DMG",
          "target": "Single Target (Primary)",
          "canPhase": true,
          "AttackScaling": {
            "DamageType": "Physical",
            "Damage": {
              "operator": "Variables[0] (2.7) || RETURN",
              "displayLines": "2.7",
              "constants": [],
              "variables": [
                2.7
              ]
            },
            "Toughness": {
              "operator": "Variables[0] (ST Toughness Value) || RETURN",
              "displayLines": "ST Toughness Value",
              "constants": [],
              "variables": [
                "ST Toughness Value"
              ]
            },
            "Tags": null,
            "EnergyGainPercent": "100%"
          }
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Trace Activated",
            "conditionList": "Fighting Will"
          },
          "passed": [
            {
              "name": "Remove Events/Bonuses",
              "to": "Caster",
              "modifier": "PlayerBoy_Trace03_DamageAddedRatio"
            }
          ]
        },
        {
          "name": "ATK Scaling DMG",
          "target": "Blast (Adjacent)",
          "canPhase": true,
          "AttackScaling": {
            "DamageType": "Physical",
            "Damage": {
              "operator": "Variables[0] (1.62) || RETURN",
              "displayLines": "1.62",
              "constants": [],
              "variables": [
                1.62
              ]
            },
            "Toughness": {
              "operator": "Variables[0] (Blast Toughness Value) || RETURN",
              "displayLines": "Blast Toughness Value",
              "constants": [],
              "variables": [
                "Blast Toughness Value"
              ]
            },
            "Tags": null
          }
        },
        "Trigger: Attack End",
        {
          "name": "IF",
          "conditions": {
            "name": "Eidolon Activated",
            "eidolon": 1
          },
          "passed": [
            {
              "name": "Remove Events/Bonuses",
              "to": "Caster",
              "modifier": "PlayerBoy_Eidolon1_Check_Modifier"
            }
          ]
        },
        {
          "name": "Remove Events/Bonuses",
          "to": "Caster",
          "modifier": "PlayerWarrior_Ultimate_Transform"
        },
        {
          "name": "Update Ult Alt Display"
        },
        "Trigger: Ability End"
      ],
      "references": []
    },
    "TrailblazerDestruction_PlayerBoy_Ability21_Part01": {
      "fileName": "TrailblazerDestruction_PlayerBoy_Ability21_Part01",
      "abilityType": "Ultimate",
      "energy": 5,
      "toughnessList": [
        20,
        0,
        20
      ],
      "parse": [
        {
          "name": "Trigger Ability",
          "from": "Caster",
          "ability": "PlayerBoy_Ability21_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "references": []
    },
    "TrailblazerDestruction_PlayerBoy_Ability02_Part02": {
      "fileName": "TrailblazerDestruction_PlayerBoy_Ability02_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "IF",
          "conditions": {
            "name": "Trace Activated",
            "conditionList": "Fighting Will"
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": "Caster",
              "modifier": "PlayerBoy_Trace03_DamageAddedRatio"
            }
          ]
        },
        {
          "name": "ATK Scaling DMG",
          "target": "Single Target (Primary)",
          "canPhase": true,
          "AttackScaling": {
            "DamageType": "Physical",
            "Damage": {
              "operator": "Variables[0] (1.25) || RETURN",
              "displayLines": "1.25",
              "constants": [],
              "variables": [
                1.25
              ]
            },
            "Toughness": {
              "operator": "Variables[0] (ST Toughness Value) || RETURN",
              "displayLines": "ST Toughness Value",
              "constants": [],
              "variables": [
                "ST Toughness Value"
              ]
            },
            "Tags": null,
            "EnergyGainPercent": "100%"
          }
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Trace Activated",
            "conditionList": "Fighting Will"
          },
          "passed": [
            {
              "name": "Remove Events/Bonuses",
              "to": "Caster",
              "modifier": "PlayerBoy_Trace03_DamageAddedRatio"
            }
          ]
        },
        {
          "name": "ATK Scaling DMG",
          "target": "Blast (Adjacent)",
          "canPhase": true,
          "AttackScaling": {
            "DamageType": "Physical",
            "Damage": {
              "operator": "Variables[0] (1.25) || RETURN",
              "displayLines": "1.25",
              "constants": [],
              "variables": [
                1.25
              ]
            },
            "Toughness": {
              "operator": "Variables[0] (Blast Toughness Value) || RETURN",
              "displayLines": "Blast Toughness Value",
              "constants": [],
              "variables": [
                "Blast Toughness Value"
              ]
            },
            "Tags": null
          }
        },
        "Trigger: Attack End",
        "Trigger: Ability End"
      ],
      "references": []
    },
    "TrailblazerDestruction_PlayerBoy_Ability02_Part01": {
      "fileName": "TrailblazerDestruction_PlayerBoy_Ability02_Part01",
      "abilityType": "Skill",
      "energy": 30,
      "toughnessList": [
        20,
        0,
        10
      ],
      "parse": [
        {
          "name": "Trigger Ability",
          "from": "Caster",
          "ability": "PlayerBoy_Ability02_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "references": []
    },
    "TrailblazerDestruction_PlayerBoy_Ability11_Part02": {
      "fileName": "TrailblazerDestruction_PlayerBoy_Ability11_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "IF",
          "conditions": {
            "name": "Eidolon Activated",
            "eidolon": 1
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": "Caster",
              "modifier": "PlayerBoy_Eidolon1_Check_Modifier"
            }
          ]
        },
        {
          "name": "ATK Scaling DMG",
          "target": "Single Target (Primary)",
          "canPhase": true,
          "AttackScaling": {
            "DamageType": "Physical",
            "Damage": {
              "operator": "Variables[0] (4.5) || Constants[0] (1) || MUL || RETURN",
              "displayLines": "(4.5 * 1)",
              "constants": [
                1
              ],
              "variables": [
                4.5
              ]
            },
            "Toughness": {
              "operator": "Variables[0] (ST Toughness Value) || Constants[0] (1) || MUL || RETURN",
              "displayLines": "(ST Toughness Value * 1)",
              "constants": [
                1
              ],
              "variables": [
                "ST Toughness Value"
              ]
            },
            "Tags": null,
            "EnergyGainPercent": "100%"
          }
        },
        "Trigger: Attack End",
        {
          "name": "IF",
          "conditions": {
            "name": "Eidolon Activated",
            "eidolon": 1
          },
          "passed": [
            {
              "name": "Remove Events/Bonuses",
              "to": "Caster",
              "modifier": "PlayerBoy_Eidolon1_Check_Modifier"
            }
          ]
        },
        {
          "name": "Remove Events/Bonuses",
          "to": "Caster",
          "modifier": "PlayerWarrior_Ultimate_Transform"
        },
        {
          "name": "Update Ult Alt Display"
        },
        "Trigger: Ability End"
      ],
      "references": []
    },
    "TrailblazerDestruction_PlayerBoy_Ability11_Part01": {
      "fileName": "TrailblazerDestruction_PlayerBoy_Ability11_Part01",
      "abilityType": "Ultimate",
      "energy": 5,
      "toughnessList": [
        30,
        0,
        0
      ],
      "parse": [
        {
          "name": "Trigger Ability",
          "from": "Caster",
          "ability": "PlayerBoy_Ability11_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "references": []
    },
    "TrailblazerDestruction_PlayerBoy_Ability01_Part02": {
      "fileName": "TrailblazerDestruction_PlayerBoy_Ability01_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "ATK Scaling DMG",
          "target": "Single Target (Primary)",
          "canPhase": true,
          "AttackScaling": {
            "DamageType": "Physical",
            "Damage": {
              "operator": "Variables[0] (1) || Constants[0] (1) || MUL || RETURN",
              "displayLines": "(1 * 1)",
              "constants": [
                1
              ],
              "variables": [
                1
              ]
            },
            "Toughness": {
              "operator": "Variables[0] (ST Toughness Value) || Constants[0] (1) || MUL || RETURN",
              "displayLines": "(ST Toughness Value * 1)",
              "constants": [
                1
              ],
              "variables": [
                "ST Toughness Value"
              ]
            },
            "Tags": null,
            "EnergyGainPercent": "100%"
          }
        },
        "Trigger: Attack End",
        "Trigger: Ability End"
      ],
      "references": []
    },
    "TrailblazerDestruction_PlayerBoy_Ability01_Part01": {
      "fileName": "TrailblazerDestruction_PlayerBoy_Ability01_Part01",
      "abilityType": "Basic ATK",
      "energy": 20,
      "toughnessList": [
        10,
        0,
        0
      ],
      "parse": [
        {
          "name": "Trigger Ability",
          "from": "Caster",
          "ability": "PlayerBoy_Ability01_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "references": []
    },
    "TrailblazerDestruction_Modifiers": {
      "fileName": "TrailblazerDestruction_Modifiers",
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
          "for": "PlayerWarrior_Ultimate_Transform",
          "lifeCyclePhaseAllowed": "ActionPhaseEnd",
          "modifierFlags": [
            "STAT_Burst"
          ],
          "execute": [
            {
              "eventTrigger": "When Modifier Destroyed/Removed",
              "execute": [
                {
                  "name": "Update Ability Binding",
                  "target": "Caster",
                  "abilityName": "Skill01",
                  "skillSlot": "Basic ATK"
                },
                {
                  "name": "Update Ability Binding",
                  "target": "Caster",
                  "abilityName": "Skill02",
                  "skillSlot": "Skill",
                  "enableSecondaryType": "ControlSkill02"
                },
                {
                  "name": "Update Ult Alt Display"
                }
              ]
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier"
            }
          ],
          "duration": 2
        },
        {
          "name": "Modifier Construction",
          "for": "PlayerBoy_Trace03_DamageAddedRatio",
          "execute": [
            {
              "eventTrigger": "Deal Damage Start [Owner]: Hit",
              "execute": [
                {
                  "name": "Adjust Target Stats",
                  "on": "Attacker",
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageAll</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (0.25) || RETURN",
                    "displayLines": "0.25",
                    "constants": [],
                    "variables": [
                      0.25
                    ]
                  }
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "PlayerBoy_Eidolon1_Check_Modifier",
          "execute": [
            {
              "eventTrigger": "Got a Kill [Owner]",
              "execute": [
                {
                  "name": "Update Energy",
                  "on": "Owner of this Modifier",
                  "value": {
                    "operator": "Variables[0] (10) || RETURN",
                    "displayLines": "10",
                    "constants": [],
                    "variables": [
                      10
                    ]
                  },
                  "isFixed": "* ERR"
                },
                "Modifier Deletes Itself"
              ]
            },
            {
              "eventTrigger": "Got a Queued Kill [Owner]",
              "execute": [
                {
                  "name": "Update Energy",
                  "on": "Owner of this Modifier",
                  "value": {
                    "operator": "Variables[0] (10) || RETURN",
                    "displayLines": "10",
                    "constants": [],
                    "variables": [
                      10
                    ]
                  },
                  "isFixed": "* ERR"
                },
                "Modifier Deletes Itself"
              ]
            }
          ],
          "stackData": [],
          "latentQueue": []
        }
      ],
      "references": []
    }
  }
}