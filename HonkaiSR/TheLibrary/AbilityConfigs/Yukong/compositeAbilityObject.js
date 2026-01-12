const compositeAbilityObject = {
  "fullCharacterName": "Yukong",
  "trimCharacterName": "Yukong",
  "abilityList": [
    "Yukong_Yukong_Eidolon2",
    "Yukong_Yukong_Eidolon1",
    "Yukong_Yukong_Trace02",
    "Yukong_Yukong_Trace01",
    "Yukong_Yukong_TechniqueInLevel",
    "Yukong_Yukong_PassiveAbility01",
    "Yukong_Yukong_Ability03_AddFlower",
    "Yukong_Yukong_Ability03_Part02",
    "Yukong_Yukong_Ability03_Part01",
    "Yukong_Yukong_Ability03_EnterReady",
    "Yukong_Yukong_Ability02_CountDown",
    "Yukong_Yukong_Ability02_AddFlower",
    "Yukong_Yukong_Ability02_Part02",
    "Yukong_Yukong_Ability02_Part01",
    "Yukong_Yukong_Ability01_Part02",
    "Yukong_Yukong_Ability01_Part01",
    "Yukong_Modifiers"
  ],
  "abilityObject": {
    "Yukong_Yukong_Eidolon2": {
      "fileName": "Yukong_Yukong_Eidolon2",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Add Events/Bonuses",
          "to": "Caster",
          "modifier": "Yukong_Eidolon2_Bonus"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "Yukong_Eidolon2_BonusCD"
        },
        {
          "name": "Modifier Construction",
          "for": "Yukong_Eidolon2_TeamMemberCheckSP",
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Has Modifier",
                        "target": "Owner of this Modifier",
                        "modifier": "Yukong_Eidolon2_BonusCD",
                        "invertCondition": true
                      },
                      {
                        "name": "Compare: Variable",
                        "target": "Owner of this Modifier",
                        "value1": "Energy%",
                        "compareType": ">=",
                        "value2": 1
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Update Energy",
                      "on": "Caster",
                      "value": {
                        "operator": "Variables[0] (MDF_Rank02Amount) || RETURN",
                        "displayLines": "MDF_Rank02Amount",
                        "constants": [],
                        "variables": [
                          "MDF_Rank02Amount"
                        ]
                      },
                      "isFixed": "* ERR"
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": "Owner of this Modifier",
                      "modifier": "Yukong_Eidolon2_BonusCD"
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Energy Change",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Has Modifier",
                        "target": "Owner of this Modifier",
                        "modifier": "Yukong_Eidolon2_BonusCD",
                        "invertCondition": true
                      },
                      {
                        "name": "Compare: Variable",
                        "value1": "ParameterValue",
                        "compareType": ">",
                        "value2": 0
                      },
                      {
                        "name": "Compare: Variable",
                        "target": "Owner of this Modifier",
                        "value1": "Energy%",
                        "compareType": ">=",
                        "value2": 1
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Update Energy",
                      "on": "Caster",
                      "value": {
                        "operator": "Variables[0] (MDF_Rank02Amount) || RETURN",
                        "displayLines": "MDF_Rank02Amount",
                        "constants": [],
                        "variables": [
                          "MDF_Rank02Amount"
                        ]
                      },
                      "isFixed": "* ERR"
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": "Owner of this Modifier",
                      "modifier": "Yukong_Eidolon2_BonusCD"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "Yukong_Eidolon2_Bonus",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_Rank02Amount",
                  "value": {
                    "operator": "Variables[0] (5) || RETURN",
                    "displayLines": "5",
                    "constants": [],
                    "variables": [
                      5
                    ]
                  }
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": "All Team Members(In Context)",
                  "modifier": "Yukong_Eidolon2_TeamMemberCheckSP"
                }
              ]
            },
            {
              "eventTrigger": "Entity Created [Anyone]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Is Teammate",
                    "target": "Use Prior Target(s) Defined"
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": "Use Prior Target(s) Defined",
                      "modifier": "Yukong_Eidolon2_TeamMemberCheckSP"
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Pre-Death [Owner]",
              "execute": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": "All Team Members(In Context, with Untargetable)",
                  "modifier": "Yukong_Eidolon2_TeamMemberCheckSP",
                  "onlyRemoveOwnersInstance": true
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": []
        }
      ]
    },
    "Yukong_Yukong_Eidolon1": {
      "fileName": "Yukong_Yukong_Eidolon1",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Add Events/Bonuses",
          "to": "Caster",
          "modifier": "Yukong_Eidolon1_Bonus"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "Yukong_Eidolon1_SpeedUp[<span class=\"descriptionNumberColor\">Aerial Marshal</span>]",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Stack Target Stat Value",
                  "target": "Owner of this Modifier",
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">SPD%</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (MDF_SpeedUpRatio) || RETURN",
                    "displayLines": "MDF_SpeedUpRatio",
                    "constants": [],
                    "variables": [
                      "MDF_SpeedUpRatio"
                    ]
                  }
                }
              ]
            }
          ],
          "description": "SPD +<span class=\"descriptionNumberColor\">MDF_SpeedUpRatio</span>.",
          "type": "Buff",
          "effectName": "SPD Boost",
          "statusName": "Aerial Marshal"
        },
        {
          "name": "Modifier Construction",
          "for": "Yukong_Eidolon1_Bonus",
          "execute": [
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
                      "name": "Add Events/Bonuses",
                      "to": "All Team Members(In Context)",
                      "modifier": "Yukong_Eidolon1_SpeedUp[<span class=\"descriptionNumberColor\">Aerial Marshal</span>]",
                      "duration": {
                        "operator": "Variables[0] (2) || RETURN",
                        "displayLines": "2",
                        "constants": [],
                        "variables": [
                          2
                        ]
                      },
                      "valuePerStack": {
                        "MDF_SpeedUpRatio": {
                          "operator": "Variables[0] (0.1) || RETURN",
                          "displayLines": "0.1",
                          "constants": [],
                          "variables": [
                            0.1
                          ]
                        },
                        "MDF_LifeTime": {
                          "operator": "Variables[0] (2) || RETURN",
                          "displayLines": "2",
                          "constants": [],
                          "variables": [
                            2
                          ]
                        }
                      }
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
    "Yukong_Yukong_Trace02": {
      "fileName": "Yukong_Yukong_Trace02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Add Events/Bonuses",
          "to": "Caster",
          "modifier": "Yukong_Point02_Bonus"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "Yukong_Point02_ImaginaryAddedRatio",
          "stackType": "ReplaceByCaster",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Stack Target Stat Value",
                  "target": "Owner of this Modifier",
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageImaginary</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (MDF_Ratio) || RETURN",
                    "displayLines": "MDF_Ratio",
                    "constants": [],
                    "variables": [
                      "MDF_Ratio"
                    ]
                  }
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "Yukong_Point02_Bonus",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Add Events/Bonuses",
                  "to": "All Team Members(In Context)",
                  "modifier": "Yukong_Point02_ImaginaryAddedRatio",
                  "valuePerStack": {
                    "MDF_Ratio": {
                      "operator": "Variables[0] (0.12) || RETURN",
                      "displayLines": "0.12",
                      "constants": [],
                      "variables": [
                        0.12
                      ]
                    }
                  }
                }
              ]
            },
            {
              "eventTrigger": "Entity Created [Anyone]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Is Teammate",
                    "target": "Use Prior Target(s) Defined"
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": "Use Prior Target(s) Defined",
                      "modifier": "Yukong_Point02_ImaginaryAddedRatio",
                      "valuePerStack": {
                        "MDF_Ratio": {
                          "operator": "Variables[0] (0.12) || RETURN",
                          "displayLines": "0.12",
                          "constants": [],
                          "variables": [
                            0.12
                          ]
                        }
                      }
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Pre-Death [Owner]",
              "execute": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": "All Team Members(In Context, with Untargetable)",
                  "modifier": "Yukong_Point02_ImaginaryAddedRatio",
                  "onlyRemoveOwnersInstance": true
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": []
        }
      ]
    },
    "Yukong_Yukong_Trace01": {
      "fileName": "Yukong_Yukong_Trace01",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Add Events/Bonuses",
          "to": "Caster",
          "modifier": "Yukong_Point01_Bonus"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "Yukong_Point01_ResistCD",
          "lifeCyclePhaseAllowed": "ModifierPhase1End",
          "execute": [
            {
              "eventTrigger": "When Modifier Destroyed/Removed",
              "execute": [
                {
                  "name": "Add Events/Bonuses",
                  "to": "Owner of this Modifier",
                  "modifier": "Yukong_Point01_Resist[<span class=\"descriptionNumberColor\">Debuff Block</span>]",
                  "valuePerStack": {
                    "MDF_ResistCD": {
                      "operator": "Variables[0] (2) || RETURN",
                      "displayLines": "2",
                      "constants": [],
                      "variables": [
                        2
                      ]
                    }
                  }
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "Yukong_Point01_Resist[<span class=\"descriptionNumberColor\">Debuff Block</span>]",
          "modifierFlags": [
            "ImmuneDebuff"
          ],
          "execute": [
            {
              "eventTrigger": "Debuff Immunity[?]",
              "execute": [
                {
                  "name": "Add Events/Bonuses",
                  "to": "Owner of this Modifier",
                  "modifier": "Yukong_Point01_ResistCD",
                  "duration": {
                    "operator": "Variables[0] (MDF_ResistCD) || RETURN",
                    "displayLines": "MDF_ResistCD",
                    "constants": [],
                    "variables": [
                      "MDF_ResistCD"
                    ]
                  }
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": "Owner of this Modifier",
                  "modifier": "Yukong_Point01_Resist[<span class=\"descriptionNumberColor\">Debuff Block</span>]"
                }
              ]
            }
          ],
          "stackData": [
            "MDF_ResistCD"
          ],
          "latentQueue": [],
          "description": "Blocks 1 debuff.",
          "type": "Buff",
          "statusName": "Debuff Block"
        },
        {
          "name": "Modifier Construction",
          "for": "Yukong_Point01_Bonus",
          "execute": [
            {
              "eventTrigger": "Turn [Pre-action Phase]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "NOT",
                        "condition": {
                          "name": "Has Modifier",
                          "target": "Owner of this Modifier",
                          "modifier": "Yukong_Point01_Resist[<span class=\"descriptionNumberColor\">Debuff Block</span>]"
                        }
                      },
                      {
                        "name": "NOT",
                        "condition": {
                          "name": "Has Modifier",
                          "target": "Owner of this Modifier",
                          "modifier": "Yukong_Point01_ResistCD"
                        }
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": "Owner of this Modifier",
                      "modifier": "Yukong_Point01_Resist[<span class=\"descriptionNumberColor\">Debuff Block</span>]",
                      "valuePerStack": {
                        "MDF_ResistCD": {
                          "operator": "Variables[0] (2) || RETURN",
                          "displayLines": "2",
                          "constants": [],
                          "variables": [
                            2
                          ]
                        }
                      }
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
                  "to": "Owner of this Modifier",
                  "modifier": "Yukong_Point01_Resist[<span class=\"descriptionNumberColor\">Debuff Block</span>]",
                  "valuePerStack": {
                    "MDF_ResistCD": {
                      "operator": "Variables[0] (2) || RETURN",
                      "displayLines": "2",
                      "constants": [],
                      "variables": [
                        2
                      ]
                    }
                  }
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": []
        }
      ]
    },
    "Yukong_Yukong_TechniqueInLevel": {
      "fileName": "Yukong_Yukong_TechniqueInLevel",
      "abilityType": "Technique",
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
          "modifier": "Yukong_YuKong_Maze_Modifier"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "Yukong_YuKong_Maze_Modifier",
          "execute": [
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
                      "name": "Trigger Ability",
                      "from": "Caster",
                      "ability": "Yukong_Ability02_AddFlower"
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
    "Yukong_Yukong_PassiveAbility01": {
      "fileName": "Yukong_Yukong_PassiveAbility01",
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
          "modifier": "Yukong_Passive_Bonus[<span class=\"descriptionNumberColor\">Seven Layers, One Arrow</span>]",
          "valuePerStack": {
            "MDF_AddDamagePercentage": {
              "operator": "Variables[0] (0.8) || RETURN",
              "displayLines": "0.8",
              "constants": [],
              "variables": [
                0.8
              ]
            },
            "MDF_StanceBreakAddedRatio": {
              "operator": "Variables[0] (1) || RETURN",
              "displayLines": "1",
              "constants": [],
              "variables": [
                1
              ]
            }
          }
        },
        {
          "name": "Update Displayed Energy Bar",
          "value": 0,
          "maximum": {
            "operator": "Variables[0] (2) || RETURN",
            "displayLines": "2",
            "constants": [],
            "variables": [
              2
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
          "modifier": "Yukong_FlowerListen"
        },
        {
          "name": "Add Events/Bonuses",
          "to": "Owner of this Modifier",
          "modifier": "Yukong_ServantFlowerListen"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "Yukong_ServantFlowerListen",
          "execute": [
            {
              "eventTrigger": "Entity Created [Anyone]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Is Entity Type",
                    "target": "Use Prior Target(s) Defined",
                    "type": "Memosprite"
                  },
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Has Modifier",
                        "target": "Owner of this Modifier",
                        "modifier": "Yukong_Flower_ATK[<span class=\"descriptionNumberColor\">Roaring Bowstrings</span>]"
                      },
                      "passed": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": "Use Prior Target(s) Defined",
                          "modifier": "Yukong_Flower",
                          "valuePerStack": {
                            "MDF_AttackAddedRatio": {
                              "operator": "Variables[0] (0.8) || RETURN",
                              "displayLines": "0.8",
                              "constants": [],
                              "variables": [
                                0.8
                              ]
                            },
                            "MDF_Eidolon4AddedRatio": {
                              "operator": "Variables[0] (0.3) || RETURN",
                              "displayLines": "0.3",
                              "constants": [],
                              "variables": [
                                0.3
                              ]
                            },
                            "MDF_PointB3Amount": {
                              "operator": "Variables[0] (2) || RETURN",
                              "displayLines": "2",
                              "constants": [],
                              "variables": [
                                2
                              ]
                            },
                            "MDF_FromUltraMark": 0
                          }
                        }
                      ]
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Has Modifier",
                        "target": "Owner of this Modifier",
                        "modifier": "Yukong_Flower_ATK_Crit[<span class=\"descriptionNumberColor\">Roaring Bowstrings</span>]"
                      },
                      "passed": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": "Use Prior Target(s) Defined",
                          "modifier": "Yukong_Flower",
                          "valuePerStack": {
                            "MDF_AttackAddedRatio": {
                              "operator": "Variables[0] (0.8) || RETURN",
                              "displayLines": "0.8",
                              "constants": [],
                              "variables": [
                                0.8
                              ]
                            },
                            "MDF_Eidolon4AddedRatio": {
                              "operator": "Variables[0] (0.3) || RETURN",
                              "displayLines": "0.3",
                              "constants": [],
                              "variables": [
                                0.3
                              ]
                            },
                            "MDF_PointB3Amount": {
                              "operator": "Variables[0] (2) || RETURN",
                              "displayLines": "2",
                              "constants": [],
                              "variables": [
                                2
                              ]
                            },
                            "MDF_FromUltraMark": 1
                          }
                        },
                        {
                          "name": "Add Events/Bonuses",
                          "to": "Yukong's Flower Target",
                          "modifier": "Yukong_Flower_ATK_Crit[<span class=\"descriptionNumberColor\">Roaring Bowstrings</span>]",
                          "valuePerStack": {
                            "MDF_RealAttack": {
                              "operator": "Variables[0] (0.8) || RETURN",
                              "displayLines": "0.8",
                              "constants": [],
                              "variables": [
                                0.8
                              ]
                            },
                            "MDF_CritChanceUp": {
                              "operator": "Variables[0] (0.28) || RETURN",
                              "displayLines": "0.28",
                              "constants": [],
                              "variables": [
                                0.28
                              ]
                            },
                            "MDF_CritDamageUpRatio": {
                              "operator": "Variables[0] (0.65) || RETURN",
                              "displayLines": "0.65",
                              "constants": [],
                              "variables": [
                                0.65
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
          "stackData": [],
          "latentQueue": []
        }
      ]
    },
    "Yukong_Yukong_Ability03_AddFlower": {
      "fileName": "Yukong_Yukong_Ability03_AddFlower",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Define Custom Variable with Added Value",
          "target": "Caster",
          "variableName": "YuKong_Flower_Count",
          "context": "TargetEntity",
          "value": {
            "operator": "Variables[0] (1) || RETURN",
            "displayLines": "1",
            "constants": [],
            "variables": [
              1
            ]
          },
          "max": {
            "operator": "Variables[0] (2) || RETURN",
            "displayLines": "2",
            "constants": [],
            "variables": [
              2
            ]
          }
        },
        {
          "name": "Update Displayed Energy Bar",
          "value": {
            "operator": "Variables[0] (YuKong_Flower_Count) || RETURN",
            "displayLines": "YuKong_Flower_Count",
            "constants": [],
            "variables": [
              "YuKong_Flower_Count"
            ]
          },
          "maximum": {
            "operator": "Variables[0] (2) || RETURN",
            "displayLines": "2",
            "constants": [],
            "variables": [
              2
            ]
          },
          "assignState": "True",
          "priorState": "Active",
          "bar#": 3,
          "cooldown": 0
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "YuKong_Flower_Count",
            "compareType": "=",
            "value2": 1
          },
          "passed": [
            {
              "name": "IF",
              "conditions": {
                "name": "Has Modifier",
                "target": "Caster",
                "modifier": "Yukong_Ability02_FlowerFlag"
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": "All Team Members(In Context, with Untargetable)",
                  "modifier": "Yukong_Flower",
                  "valuePerStack": {
                    "MDF_AttackAddedRatio": {
                      "operator": "Variables[0] (0.8) || RETURN",
                      "displayLines": "0.8",
                      "constants": [],
                      "variables": [
                        0.8
                      ]
                    },
                    "MDF_Eidolon4AddedRatio": {
                      "operator": "Variables[0] (0.3) || RETURN",
                      "displayLines": "0.3",
                      "constants": [],
                      "variables": [
                        0.3
                      ]
                    },
                    "MDF_PointB3Amount": {
                      "operator": "Variables[0] (2) || RETURN",
                      "displayLines": "2",
                      "constants": [],
                      "variables": [
                        2
                      ]
                    }
                  }
                }
              ],
              "failed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": "All Team Members(In Context, with Untargetable)",
                  "modifier": "Yukong_Flower",
                  "valuePerStack": {
                    "MDF_AttackAddedRatio": {
                      "operator": "Variables[0] (0.8) || RETURN",
                      "displayLines": "0.8",
                      "constants": [],
                      "variables": [
                        0.8
                      ]
                    },
                    "MDF_Eidolon4AddedRatio": {
                      "operator": "Variables[0] (0.3) || RETURN",
                      "displayLines": "0.3",
                      "constants": [],
                      "variables": [
                        0.3
                      ]
                    },
                    "MDF_PointB3Amount": {
                      "operator": "Variables[0] (2) || RETURN",
                      "displayLines": "2",
                      "constants": [],
                      "variables": [
                        2
                      ]
                    },
                    "MDF_FromUltraMark": 1
                  }
                }
              ]
            }
          ],
          "failed": [
            {
              "name": "Add Events/Bonuses",
              "to": "All Team Members(In Context, with Untargetable)",
              "modifier": "Yukong_Flower",
              "valuePerStack": {
                "MDF_AttackAddedRatio": {
                  "operator": "Variables[0] (0.8) || RETURN",
                  "displayLines": "0.8",
                  "constants": [],
                  "variables": [
                    0.8
                  ]
                },
                "MDF_Eidolon4AddedRatio": {
                  "operator": "Variables[0] (0.3) || RETURN",
                  "displayLines": "0.3",
                  "constants": [],
                  "variables": [
                    0.3
                  ]
                },
                "MDF_PointB3Amount": {
                  "operator": "Variables[0] (2) || RETURN",
                  "displayLines": "2",
                  "constants": [],
                  "variables": [
                    2
                  ]
                }
              }
            }
          ]
        }
      ],
      "references": []
    },
    "Yukong_Yukong_Ability03_Part02": {
      "fileName": "Yukong_Yukong_Ability03_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "IF",
          "conditions": {
            "name": "Eidolon Activated",
            "eidolon": 6
          },
          "passed": [
            {
              "name": "Trigger Ability",
              "from": "Caster",
              "ability": "Yukong_Ability03_AddFlower"
            }
          ]
        },
        {
          "name": "Add Events/Bonuses",
          "to": "Yukong's Flower Target",
          "modifier": "Yukong_Flower_ATK_Crit[<span class=\"descriptionNumberColor\">Roaring Bowstrings</span>]",
          "valuePerStack": {
            "MDF_RealAttack": {
              "operator": "Variables[0] (0.8) || RETURN",
              "displayLines": "0.8",
              "constants": [],
              "variables": [
                0.8
              ]
            },
            "MDF_CritChanceUp": {
              "operator": "Variables[0] (0.28) || RETURN",
              "displayLines": "0.28",
              "constants": [],
              "variables": [
                0.28
              ]
            },
            "MDF_CritDamageUpRatio": {
              "operator": "Variables[0] (0.65) || RETURN",
              "displayLines": "0.65",
              "constants": [],
              "variables": [
                0.65
              ]
            }
          }
        },
        {
          "name": "ATK Scaling DMG",
          "target": "Single Target (Primary)",
          "canPhase": true,
          "AttackScaling": {
            "DamageType": "Imaginary",
            "Damage": {
              "operator": "Variables[0] (3.8) || RETURN",
              "displayLines": "3.8",
              "constants": [],
              "variables": [
                3.8
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
            "attackType": "Ultimate",
            "EnergyGainPercent": "100%"
          }
        },
        "Trigger: Attack End",
        "Trigger: Skip Death Handling",
        {
          "name": "Remove Events/Bonuses",
          "to": "All Team Members(In Context, with Untargetable)",
          "modifier": "Yukong_Eidolon2_BonusCD"
        },
        "Trigger: Ability End"
      ],
      "references": []
    },
    "Yukong_Yukong_Ability03_Part01": {
      "fileName": "Yukong_Yukong_Ability03_Part01",
      "abilityType": "Ultimate",
      "energy": 5,
      "toughnessList": [
        30,
        0,
        0
      ],
      "parse": [
        "Deleted bullshit",
        {
          "name": "Trigger Ability",
          "from": "Caster",
          "ability": "Yukong_Ability03_Part02",
          "isTrigger": true
        }
      ],
      "references": []
    },
    "Yukong_Yukong_Ability03_EnterReady": {
      "fileName": "Yukong_Yukong_Ability03_EnterReady",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "references": []
    },
    "Yukong_Yukong_Ability02_CountDown": {
      "fileName": "Yukong_Yukong_Ability02_CountDown",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Define Custom Variable with Added Value",
          "target": "Caster",
          "variableName": "YuKong_Flower_Count",
          "context": "TargetEntity",
          "value": -1,
          "max": {
            "operator": "Variables[0] (2) || RETURN",
            "displayLines": "2",
            "constants": [],
            "variables": [
              2
            ]
          }
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "YuKong_Flower_Count",
            "compareType": "=",
            "value2": 0,
            "contextScope": "TargetEntity"
          },
          "passed": [
            {
              "name": "Update Displayed Energy Bar",
              "value": {
                "operator": "Variables[0] (YuKong_Flower_Count) || RETURN",
                "displayLines": "YuKong_Flower_Count",
                "constants": [],
                "variables": [
                  "YuKong_Flower_Count"
                ]
              },
              "maximum": {
                "operator": "Variables[0] (2) || RETURN",
                "displayLines": "2",
                "constants": [],
                "variables": [
                  2
                ]
              },
              "assignState": "True",
              "priorState": "Normal",
              "bar#": 3,
              "cooldown": 0
            },
            {
              "name": "Remove Events/Bonuses",
              "to": "All Team Members(In Context, with Untargetable)",
              "modifier": "Yukong_Flower"
            }
          ],
          "failed": [
            {
              "name": "Update Displayed Energy Bar",
              "value": {
                "operator": "Variables[0] (YuKong_Flower_Count) || RETURN",
                "displayLines": "YuKong_Flower_Count",
                "constants": [],
                "variables": [
                  "YuKong_Flower_Count"
                ]
              },
              "maximum": {
                "operator": "Variables[0] (2) || RETURN",
                "displayLines": "2",
                "constants": [],
                "variables": [
                  2
                ]
              },
              "assignState": "True",
              "priorState": "Active",
              "bar#": 3,
              "cooldown": 0
            }
          ]
        }
      ],
      "references": []
    },
    "Yukong_Yukong_Ability02_AddFlower": {
      "fileName": "Yukong_Yukong_Ability02_AddFlower",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Define Custom Variable with Added Value",
          "target": "Caster",
          "variableName": "YuKong_Flower_Count",
          "context": "TargetEntity",
          "value": {
            "operator": "Variables[0] (2) || RETURN",
            "displayLines": "2",
            "constants": [],
            "variables": [
              2
            ]
          },
          "max": {
            "operator": "Variables[0] (2) || RETURN",
            "displayLines": "2",
            "constants": [],
            "variables": [
              2
            ]
          }
        },
        {
          "name": "Update Displayed Energy Bar",
          "value": {
            "operator": "Variables[0] (YuKong_Flower_Count) || RETURN",
            "displayLines": "YuKong_Flower_Count",
            "constants": [],
            "variables": [
              "YuKong_Flower_Count"
            ]
          },
          "maximum": {
            "operator": "Variables[0] (2) || RETURN",
            "displayLines": "2",
            "constants": [],
            "variables": [
              2
            ]
          },
          "assignState": "True",
          "priorState": "Active",
          "bar#": 3,
          "cooldown": 0
        },
        {
          "name": "Add Events/Bonuses",
          "to": "All Team Members(In Context, with Untargetable)",
          "modifier": "Yukong_Flower",
          "valuePerStack": {
            "MDF_AttackAddedRatio": {
              "operator": "Variables[0] (0.8) || RETURN",
              "displayLines": "0.8",
              "constants": [],
              "variables": [
                0.8
              ]
            },
            "MDF_Eidolon4AddedRatio": {
              "operator": "Variables[0] (0.3) || RETURN",
              "displayLines": "0.3",
              "constants": [],
              "variables": [
                0.3
              ]
            },
            "MDF_PointB3Amount": {
              "operator": "Variables[0] (2) || RETURN",
              "displayLines": "2",
              "constants": [],
              "variables": [
                2
              ]
            },
            "MDF_FromUltraMark": 0
          }
        }
      ],
      "references": []
    },
    "Yukong_Yukong_Ability02_Part02": {
      "fileName": "Yukong_Yukong_Ability02_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Add Events/Bonuses",
          "to": "Caster",
          "modifier": "Yukong_Ability02_FlowerFlag"
        },
        {
          "name": "Trigger Ability",
          "from": "Caster",
          "ability": "Yukong_Ability02_AddFlower"
        },
        {
          "name": "Update Energy",
          "on": "Caster",
          "valuePercent": 1,
          "ofAbilitySplit": true,
          "isFixed": "* ERR"
        },
        "Trigger: Ability End"
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "Yukong_Ability02_FlowerFlag",
          "execute": [
            {
              "eventTrigger": "Turn End [Anyone]",
              "execute": [
                "Modifier Deletes Itself"
              ]
            }
          ],
          "stackData": [],
          "latentQueue": []
        }
      ]
    },
    "Yukong_Yukong_Ability02_Part01": {
      "fileName": "Yukong_Yukong_Ability02_Part01",
      "abilityType": "Skill",
      "energy": 30,
      "toughnessList": [
        0,
        0,
        0
      ],
      "parse": [
        {
          "name": "Trigger Ability",
          "from": "Caster",
          "ability": "Yukong_Ability02_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "references": []
    },
    "Yukong_Yukong_Ability01_Part02": {
      "fileName": "Yukong_Yukong_Ability01_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "IF",
          "conditions": {
            "name": "NOT",
            "condition": {
              "name": "Has Modifier",
              "target": "Caster",
              "modifier": "Yukong_Passive_BonusCD"
            }
          },
          "passed": [
            {
              "name": "Set Enhanced-State",
              "type": "YukongV2"
            }
          ],
          "failed": [
            {
              "name": "Set Enhanced-State"
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
              "modifier": "Yukong_Passive_BonusCD"
            }
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": "Caster",
              "modifier": "Yukong_Passive_BonusCD",
              "duration": {
                "operator": "Variables[0] (1) || RETURN",
                "displayLines": "1",
                "constants": [],
                "variables": [
                  1
                ]
              },
              "valuePerStack": {
                "MDF_AddDamagePercentage": {
                  "operator": "Variables[0] (0.8) || RETURN",
                  "displayLines": "0.8",
                  "constants": [],
                  "variables": [
                    0.8
                  ]
                },
                "MDF_StanceBreakAddedRatio": {
                  "operator": "Variables[0] (1) || RETURN",
                  "displayLines": "1",
                  "constants": [],
                  "variables": [
                    1
                  ]
                }
              }
            },
            {
              "name": "Use Custom Character Function",
              "functionName": "Yukong_Ability01_ShootV2"
            }
          ],
          "failed": [
            {
              "name": "Use Custom Character Function",
              "functionName": "Yukong_Ability01_Shoot"
            }
          ]
        },
        "Trigger: Attack End",
        "Trigger: Ability End"
      ],
      "whenAdded": [
        {
          "name": "Set Enhanced-State",
          "type": "YukongV2"
        },
        {
          "name": "Add Events/Bonuses",
          "to": "Caster",
          "modifier": "Yukong_Ability01_Preshow"
        }
      ],
      "functions": [
        {
          "name": "CharacterFunctions",
          "functionName": "Yukong_Ability01_Shoot",
          "parse": [
            {
              "name": "Shot Fired",
              "execute": [
                {
                  "name": "ATK Scaling DMG",
                  "target": "Single Target (Primary)",
                  "AttackScaling": {
                    "DamageType": "Imaginary",
                    "Damage": {
                      "operator": "Variables[0] (1) || RETURN",
                      "displayLines": "1",
                      "constants": [],
                      "variables": [
                        1
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
                    "attackType": "Basic ATK",
                    "EnergyGainPercent": "100%"
                  }
                }
              ]
            }
          ]
        },
        {
          "name": "CharacterFunctions",
          "functionName": "Yukong_Ability01_ShootV2",
          "parse": [
            {
              "name": "Shot Fired",
              "execute": [
                {
                  "name": "ATK Scaling DMG",
                  "target": "Single Target (Primary)",
                  "AttackScaling": {
                    "DamageType": "Imaginary",
                    "Damage": {
                      "operator": "Variables[0] (1) || Variables[1] (0.8) || ADD || RETURN",
                      "displayLines": "(1 + 0.8)",
                      "constants": [],
                      "variables": [
                        1,
                        0.8
                      ]
                    },
                    "HitSplit": 0.2,
                    "Toughness": {
                      "operator": "Variables[0] (ST Toughness Value) || Constants[0] (1) || Variables[1] (1) || ADD || MUL || RETURN",
                      "displayLines": "(ST Toughness Value * (1 + 1))",
                      "constants": [
                        1
                      ],
                      "variables": [
                        "ST Toughness Value",
                        1
                      ]
                    },
                    "Tags": null,
                    "attackType": "Basic ATK",
                    "EnergyGainPercent": "100%"
                  }
                }
              ]
            },
            {
              "name": "Shot Fired",
              "execute": [
                {
                  "name": "ATK Scaling DMG",
                  "target": "Single Target (Primary)",
                  "AttackScaling": {
                    "DamageType": "Imaginary",
                    "Damage": {
                      "operator": "Variables[0] (1) || Variables[1] (0.8) || ADD || RETURN",
                      "displayLines": "(1 + 0.8)",
                      "constants": [],
                      "variables": [
                        1,
                        0.8
                      ]
                    },
                    "HitSplit": 0.2,
                    "Toughness": {
                      "operator": "Variables[0] (ST Toughness Value) || Constants[0] (1) || Variables[1] (1) || ADD || MUL || RETURN",
                      "displayLines": "(ST Toughness Value * (1 + 1))",
                      "constants": [
                        1
                      ],
                      "variables": [
                        "ST Toughness Value",
                        1
                      ]
                    },
                    "Tags": null,
                    "attackType": "Basic ATK",
                    "EnergyGainPercent": "100%"
                  }
                }
              ]
            },
            {
              "name": "Shot Fired",
              "execute": [
                {
                  "name": "ATK Scaling DMG",
                  "target": "Single Target (Primary)",
                  "AttackScaling": {
                    "DamageType": "Imaginary",
                    "Damage": {
                      "operator": "Variables[0] (1) || Variables[1] (0.8) || ADD || RETURN",
                      "displayLines": "(1 + 0.8)",
                      "constants": [],
                      "variables": [
                        1,
                        0.8
                      ]
                    },
                    "HitSplit": 0.6,
                    "Toughness": {
                      "operator": "Variables[0] (ST Toughness Value) || Constants[0] (1) || Variables[1] (1) || ADD || MUL || RETURN",
                      "displayLines": "(ST Toughness Value * (1 + 1))",
                      "constants": [
                        1
                      ],
                      "variables": [
                        "ST Toughness Value",
                        1
                      ]
                    },
                    "Tags": null,
                    "attackType": "Basic ATK",
                    "EnergyGainPercent": "100%"
                  }
                }
              ]
            }
          ]
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "Yukong_Ability01_Preshow",
          "stackData": [],
          "latentQueue": [],
          "previewValue": {
            "name": "Modifier: UI Preview",
            "show": "Hide",
            "skillType": "Basic ATK",
            "conditions": {
              "name": "Has Modifier",
              "target": "Caster",
              "modifier": "Yukong_Passive_BonusCD",
              "invertCondition": true
            },
            "multiplier": {
              "operator": "Constants[0] (1) || Variables[0] (1) || ADD || RETURN",
              "displayLines": "(1 + 1)",
              "constants": [
                1
              ],
              "variables": [
                1
              ]
            }
          }
        }
      ]
    },
    "Yukong_Yukong_Ability01_Part01": {
      "fileName": "Yukong_Yukong_Ability01_Part01",
      "abilityType": "Basic ATK",
      "energy": 20,
      "toughnessList": [
        10,
        0,
        0
      ],
      "parse": [
        {
          "name": "IF",
          "conditions": {
            "name": "NOT",
            "condition": {
              "name": "Has Modifier",
              "target": "Caster",
              "modifier": "Yukong_Passive_BonusCD"
            }
          },
          "passed": [
            "Deleted bullshit"
          ],
          "failed": [
            "Deleted bullshit"
          ]
        },
        {
          "name": "Trigger Ability",
          "from": "Caster",
          "ability": "Yukong_Ability01_Part02",
          "isTrigger": true
        }
      ],
      "references": []
    },
    "Yukong_Modifiers": {
      "fileName": "Yukong_Modifiers",
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
          "for": "Yukong_FlowerListen",
          "execute": [
            {
              "eventTrigger": "Pre-Death [Owner]",
              "execute": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": "All Team Members(In Context, with Untargetable)",
                  "modifier": "Yukong_Flower"
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "Yukong_Eidolon4_Flower_Bonus[<span class=\"descriptionNumberColor\">Zephyrean Echoes</span>]",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Stack Target Stat Value",
                  "target": "Owner of this Modifier",
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageAll</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (MDF_AddedRatio) || RETURN",
                    "displayLines": "MDF_AddedRatio",
                    "constants": [],
                    "variables": [
                      "MDF_AddedRatio"
                    ]
                  }
                }
              ]
            }
          ],
          "description": "Increases DMG dealt by <span class=\"descriptionNumberColor\">MDF_AddedRatio</span>.",
          "type": "Buff",
          "effectName": "DMG Boost",
          "statusName": "Zephyrean Echoes"
        },
        {
          "name": "Modifier Construction",
          "for": "Yukong_Passive_BonusCD",
          "execute": [
            {
              "eventTrigger": "When Modifier Destroyed/Removed",
              "execute": [
                {
                  "name": "Add Events/Bonuses",
                  "to": "Caster",
                  "modifier": "Yukong_Passive_Bonus[<span class=\"descriptionNumberColor\">Seven Layers, One Arrow</span>]",
                  "valuePerStack": {
                    "MDF_AddDamagePercentage": {
                      "operator": "Variables[0] (MDF_AddDamagePercentage) || RETURN",
                      "displayLines": "MDF_AddDamagePercentage",
                      "constants": [],
                      "variables": [
                        "MDF_AddDamagePercentage"
                      ]
                    },
                    "MDF_StanceBreakAddedRatio": {
                      "operator": "Variables[0] (MDF_StanceBreakAddedRatio) || RETURN",
                      "displayLines": "MDF_StanceBreakAddedRatio",
                      "constants": [],
                      "variables": [
                        "MDF_StanceBreakAddedRatio"
                      ]
                    }
                  }
                }
              ]
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": "Caster",
                  "modifier": "Yukong_Passive_Bonus[<span class=\"descriptionNumberColor\">Seven Layers, One Arrow</span>]"
                }
              ]
            }
          ],
          "stackData": [
            "MDF_AddDamagePercentage",
            "MDF_StanceBreakAddedRatio"
          ],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "Yukong_Passive_Bonus[<span class=\"descriptionNumberColor\">Seven Layers, One Arrow</span>]",
          "execute": [
            {
              "eventTrigger": "Pre-Death [Owner]",
              "execute": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": "All Team Members(In Context, with Untargetable)",
                  "modifier": "Yukong_Flower"
                }
              ]
            }
          ],
          "stackData": [
            "MDF_AddDamagePercentage",
            "MDF_StanceBreakAddedRatio"
          ],
          "latentQueue": [],
          "description": "Basic ATK deals additional Imaginary DMG equal to <span class=\"descriptionNumberColor\">MDF_AddDamagePercentage</span> of Yukong's ATK, and increases Toughness Reduction by <span class=\"descriptionNumberColor\">MDF_StanceBreakAddedRatio</span>.",
          "type": "Buff",
          "statusName": "Seven Layers, One Arrow"
        },
        {
          "name": "Modifier Construction",
          "for": "Yukong_Flower_ActionTurn"
        },
        {
          "name": "Modifier Construction",
          "for": "Yukong_Flower_ATK_Crit[<span class=\"descriptionNumberColor\">Roaring Bowstrings</span>]",
          "stackType": "ReplaceByCaster",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": "Owner of this Modifier",
                  "modifier": "Yukong_Flower_ATK[<span class=\"descriptionNumberColor\">Roaring Bowstrings</span>]"
                },
                {
                  "name": "Stack Target Stat Value",
                  "target": "Owner of this Modifier",
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">ATK%</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (MDF_RealAttack) || RETURN",
                    "displayLines": "MDF_RealAttack",
                    "constants": [],
                    "variables": [
                      "MDF_RealAttack"
                    ]
                  }
                },
                {
                  "name": "Stack Target Stat Value",
                  "target": "Owner of this Modifier",
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">CritRateBase</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (MDF_CritChanceUp) || RETURN",
                    "displayLines": "MDF_CritChanceUp",
                    "constants": [],
                    "variables": [
                      "MDF_CritChanceUp"
                    ]
                  }
                },
                {
                  "name": "Stack Target Stat Value",
                  "target": "Owner of this Modifier",
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">CritDamageBase</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (MDF_CritDamageUpRatio) || RETURN",
                    "displayLines": "MDF_CritDamageUpRatio",
                    "constants": [],
                    "variables": [
                      "MDF_CritDamageUpRatio"
                    ]
                  }
                }
              ]
            }
          ],
          "stackData": [
            "MDF_RealAttack",
            "MDF_CritChanceUp",
            "MDF_CritDamageUpRatio"
          ],
          "latentQueue": [],
          "description": "Increases ATK by <span class=\"descriptionNumberColor\">MDF_RealAttack</span>, CRIT Rate by <span class=\"descriptionNumberColor\">MDF_CritChanceUp</span>, and CRIT DMG by <span class=\"descriptionNumberColor\">MDF_CritDamageUpRatio</span>.",
          "type": "Buff",
          "effectName": "ATK, CRIT Rate, and CRIT DMG Boost",
          "statusName": "Roaring Bowstrings"
        },
        {
          "name": "Modifier Construction",
          "for": "Yukong_Flower_ATK[<span class=\"descriptionNumberColor\">Roaring Bowstrings</span>]",
          "stackType": "ReplaceByCaster",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Stack Target Stat Value",
                  "target": "Owner of this Modifier",
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">ATK%</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (MDF_RealAttack) || RETURN",
                    "displayLines": "MDF_RealAttack",
                    "constants": [],
                    "variables": [
                      "MDF_RealAttack"
                    ]
                  }
                }
              ]
            }
          ],
          "description": "ATK +<span class=\"descriptionNumberColor\">MDF_RealAttack</span>.",
          "type": "Buff",
          "effectName": "ATK Boost",
          "statusName": "Roaring Bowstrings"
        },
        {
          "name": "Modifier Construction",
          "for": "Yukong_Flower",
          "stackType": "ReplaceByCaster",
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier",
              "execute": [
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
                      "modifier": "Yukong_Eidolon4_Flower_Bonus[<span class=\"descriptionNumberColor\">Zephyrean Echoes</span>]",
                      "valuePerStack": {
                        "MDF_AddedRatio": {
                          "operator": "Variables[0] (MDF_Rank04AddedRatio) || RETURN",
                          "displayLines": "MDF_Rank04AddedRatio",
                          "constants": [],
                          "variables": [
                            "MDF_Rank04AddedRatio"
                          ]
                        }
                      }
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": "Owner of this Modifier",
                    "value1": "MDF_FromUltraMark",
                    "compareType": "=",
                    "value2": 0
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": "Owner of this Modifier",
                      "modifier": "Yukong_Flower_ATK[<span class=\"descriptionNumberColor\">Roaring Bowstrings</span>]",
                      "valuePerStack": {
                        "MDF_RealAttack": {
                          "operator": "Variables[0] (MDF_AttackAddedRatio) || RETURN",
                          "displayLines": "MDF_AttackAddedRatio",
                          "constants": [],
                          "variables": [
                            "MDF_AttackAddedRatio"
                          ]
                        }
                      }
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "When Modifier Destroyed/Removed",
              "execute": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": "Owner of this Modifier",
                  "modifier": "Yukong_Flower_ATK[<span class=\"descriptionNumberColor\">Roaring Bowstrings</span>]"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": "Owner of this Modifier",
                  "modifier": "Yukong_Flower_ATK_Crit[<span class=\"descriptionNumberColor\">Roaring Bowstrings</span>]"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": "Owner of this Modifier",
                  "modifier": "Yukong_Eidolon4_Flower_Bonus[<span class=\"descriptionNumberColor\">Zephyrean Echoes</span>]"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": "Owner of this Modifier",
                  "modifier": "Yukong_Flower_ActionTurn"
                }
              ]
            },
            {
              "eventTrigger": "Turn [Pre-action Phase]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Current Turn Is",
                    "target": "Owner of this Modifier"
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": "Owner of this Modifier",
                      "modifier": "Yukong_Flower_ActionTurn"
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Turn End [Anyone]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Current Turn Is",
                    "target": "Owner of this Modifier"
                  },
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Has Modifier",
                        "target": "Owner of this Modifier",
                        "modifier": "Yukong_Flower_ActionTurn"
                      },
                      "passed": [
                        {
                          "name": "Trigger Ability",
                          "from": "Caster",
                          "ability": "Yukong_Ability02_CountDown"
                        }
                      ]
                    }
                  ]
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": "Owner of this Modifier",
                  "modifier": "Yukong_Flower_ActionTurn"
                }
              ]
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Current Turn Is",
                    "target": "Owner of this Modifier"
                  },
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Has Modifier",
                        "target": "Owner of this Modifier",
                        "modifier": "Yukong_Ability02_FlowerFlag"
                      },
                      "failed": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": "Owner of this Modifier",
                          "modifier": "Yukong_Flower_ActionTurn"
                        }
                      ]
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Current Turn Is",
                        "target": "Caster"
                      },
                      {
                        "name": "Compare: Variable",
                        "target": "Owner of this Modifier",
                        "value1": "MDF_FromUltraMark",
                        "compareType": "=",
                        "value2": 0
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Remove Events/Bonuses",
                      "to": "Owner of this Modifier",
                      "modifier": "Yukong_Flower_ActionTurn"
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "MDF_FromUltraMark",
                      "value": 1
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Ability Use [Owner]: End",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Trace Activated",
                    "conditionList": "Majestas"
                  },
                  "passed": [
                    {
                      "name": "Update Energy",
                      "on": "Caster",
                      "value": {
                        "operator": "Variables[0] (MDF_PointB3Amount) || RETURN",
                        "displayLines": "MDF_PointB3Amount",
                        "constants": [],
                        "variables": [
                          "MDF_PointB3Amount"
                        ]
                      },
                      "isFixed": "* ERR"
                    }
                  ]
                }
              ]
            }
          ],
          "stackData": [
            "MDF_AttackAddedRatio",
            "MDF_Rank04AddedRatio",
            "MDF_PointB3Amount",
            "MDF_FromUltraMark"
          ],
          "latentQueue": []
        }
      ],
      "references": []
    }
  }
}