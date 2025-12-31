const compositeAbilityObject = {
  "fullCharacterName": "Trailblazer - Preservation",
  "trimCharacterName": "TrailblazerPreservation",
  "abilityList": [
    "TrailblazerPreservation_PlayerBoy_10_TechniqueInLevel",
    "TrailblazerPreservation_PlayerBoy_10_PassiveAbility01",
    "TrailblazerPreservation_PlayerBoy_10_Ability03_Part02",
    "TrailblazerPreservation_PlayerBoy_10_Ability03_Part01",
    "TrailblazerPreservation_PlayerBoy_10_Ability03_EnterReady",
    "TrailblazerPreservation_PlayerBoy_10_Ability02_Part02",
    "TrailblazerPreservation_PlayerBoy_10_Ability02_Part01",
    "TrailblazerPreservation_PlayerBoy_10_Ability11_Part02",
    "TrailblazerPreservation_PlayerBoy_10_Ability11_Part01",
    "TrailblazerPreservation_PlayerBoy_10_Ability01_Part02",
    "TrailblazerPreservation_PlayerBoy_10_Ability01_Part01",
    "TrailblazerPreservation_Modifiers"
  ],
  "abilityObject": {
    "TrailblazerPreservation_PlayerBoy_10_TechniqueInLevel": {
      "fileName": "TrailblazerPreservation_PlayerBoy_10_TechniqueInLevel",
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
          "modifier": "StageAbility_Maze_PlayerBoy_10_Modifier"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "PlayerBoy_10_TechniqueUsage_Shield[<span class=\"descriptionNumberColor\">Shield</span>]",
          "stackType": "ReplaceByCaster",
          "modifierFlags": [
            "Shield"
          ],
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier",
              "execute": [
                {
                  "name": "Set Shield State/Value"
                }
              ]
            },
            {
              "eventTrigger": "When Modifier Destroyed/Removed",
              "execute": [
                {
                  "name": "Remove Shield",
                  "target": "Owner of this Modifier"
                },
                {
                  "name": "Set Shield State/Value",
                  "reset": true
                }
              ]
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Create Shield",
                  "target": "Owner of this Modifier",
                  "value": {
                    "operator": "Variables[0] (MWAvatar_PlayerBoy_10_Shield_Value02) || RETURN",
                    "displayLines": "MWAvatar_PlayerBoy_10_Shield_Value02",
                    "constants": [],
                    "variables": [
                      "MWAvatar_PlayerBoy_10_Shield_Value02"
                    ]
                  }
                }
              ]
            }
          ],
          "useEntitySnapshot": true,
          "description": "Gains a Shield that absorbs DMG. While the Shield persists, enemy attacks will not reduce Shielded characters' HP.",
          "type": "Buff",
          "effectName": "Shield",
          "statusName": "Shield",
          "duration": 1
        },
        {
          "name": "Modifier Construction",
          "for": "StageAbility_Maze_PlayerBoy_10_Modifier",
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
                      "name": "Define Custom Variable with Stat",
                      "target": "Caster",
                      "variableName": "CasterDefence",
                      "value": "&nbsp;<span class=\"descriptionNumberColor\">DEFSUM</span>&nbsp;"
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": "Caster",
                      "modifier": "PlayerBoy_10_TechniqueUsage_Shield[<span class=\"descriptionNumberColor\">Shield</span>]",
                      "duration": {
                        "operator": "Variables[0] (1) || RETURN",
                        "displayLines": "1",
                        "constants": [],
                        "variables": [
                          1
                        ]
                      },
                      "valuePerStack": {
                        "MWPlayerBoy_10_Shield_Value02": {
                          "operator": "Variables[0] (CasterDefence) || Variables[1] (0.3) || MUL || Variables[2] (384) || ADD || RETURN",
                          "displayLines": "((CasterDefence * 0.3) + 384)",
                          "constants": [],
                          "variables": [
                            "CasterDefence",
                            0.3,
                            384
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
    "TrailblazerPreservation_PlayerBoy_10_PassiveAbility01": {
      "fileName": "TrailblazerPreservation_PlayerBoy_10_PassiveAbility01",
      "abilityType": "Talent",
      "energy": null,
      "toughnessList": [
        0,
        0,
        0
      ],
      "parse": [
        {
          "name": "Read Variable Value",
          "adjustmentType": "Add to Value (Default)",
          "variableName": "MDF_Energy_Count",
          "on": "Caster"
        },
        {
          "name": "Define Custom Variable",
          "variableName": "Rank06_Max_Layer",
          "value": {
            "operator": "Variables[0] (3) || RETURN",
            "displayLines": "3",
            "constants": [],
            "variables": [
              3
            ]
          }
        },
        {
          "name": "Add Events/Bonuses",
          "to": "Caster",
          "modifier": "MWPlayerBoy_10_Passive"
        },
        {
          "name": "Update Displayed Energy Bar",
          "value": 0,
          "maximum": {
            "operator": "Variables[0] (8) || RETURN",
            "displayLines": "8",
            "constants": [],
            "variables": [
              8
            ]
          },
          "assignState": "True",
          "priorState": "Normal",
          "bar#": 2,
          "cooldown": 0
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Eidolon Activated",
            "eidolon": 1
          },
          "passed": [
            {
              "name": "Define Custom Variable",
              "variableName": "Rank01_Ratio",
              "value": {
                "operator": "Variables[0] (0.25) || RETURN",
                "displayLines": "0.25",
                "constants": [],
                "variables": [
                  0.25
                ]
              }
            },
            {
              "name": "Define Custom Variable",
              "variableName": "Rank01_ExtraRatio",
              "value": {
                "operator": "Variables[0] (0.5) || RETURN",
                "displayLines": "0.5",
                "constants": [],
                "variables": [
                  0.5
                ]
              }
            }
          ],
          "failed": [
            {
              "name": "Define Custom Variable",
              "variableName": "Rank01_Ratio",
              "value": 0
            },
            {
              "name": "Define Custom Variable",
              "variableName": "Rank01_ExtraRatio",
              "value": 0
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
              "name": "Define Custom Variable",
              "variableName": "Rank02_Ratio",
              "value": {
                "operator": "Variables[0] (0.02) || RETURN",
                "displayLines": "0.02",
                "constants": [],
                "variables": [
                  0.02
                ]
              }
            },
            {
              "name": "Define Custom Variable",
              "variableName": "Rank02_Value",
              "value": {
                "operator": "Variables[0] (27) || RETURN",
                "displayLines": "27",
                "constants": [],
                "variables": [
                  27
                ]
              }
            }
          ],
          "failed": [
            {
              "name": "Define Custom Variable",
              "variableName": "Rank02_Ratio",
              "value": 0
            },
            {
              "name": "Define Custom Variable",
              "variableName": "Rank02_Value",
              "value": 0
            }
          ]
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
              "modifier": "MWPlayerBoy_10_WeaponCharge[<span class=\"descriptionNumberColor\">Magma Will</span>]"
            },
            {
              "name": "Define Modifier Variable",
              "target": "Caster",
              "modifierName": "MWPlayerBoy_10_WeaponCharge[<span class=\"descriptionNumberColor\">Magma Will</span>]",
              "value": {
                "operator": "Variables[0] (4) || RETURN",
                "displayLines": "4",
                "constants": [],
                "variables": [
                  4
                ]
              }
            },
            {
              "name": "Adjust Variable Value",
              "adjustmentType": "Overwrite Value",
              "variableName": "MDF_Energy_Count",
              "on": "Caster",
              "value": {
                "operator": "Variables[0] (4) || RETURN",
                "displayLines": "4",
                "constants": [],
                "variables": [
                  4
                ]
              }
            },
            {
              "name": "Add Events/Bonuses",
              "to": "Caster",
              "modifier": "PlayerBoy_Weapon_Effect"
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "MWPlayerBoy_10_WeaponCharge[<span class=\"descriptionNumberColor\">Magma Will</span>]",
                "compareType": ">",
                "value2": 3.5
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": "Caster",
                  "modifier": "PlayerBoy_10_ChangeAttack"
                },
                {
                  "name": "Update Displayed Energy Bar",
                  "value": {
                    "operator": "Variables[0] (MDF_Energy_Count) || RETURN",
                    "displayLines": "MDF_Energy_Count",
                    "constants": [],
                    "variables": [
                      "MDF_Energy_Count"
                    ]
                  },
                  "maximum": {
                    "operator": "Variables[0] (8) || RETURN",
                    "displayLines": "8",
                    "constants": [],
                    "variables": [
                      8
                    ]
                  },
                  "assignState": "True",
                  "priorState": "Active",
                  "bar#": 2,
                  "cooldown": 0
                }
              ],
              "failed": [
                {
                  "name": "Update Displayed Energy Bar",
                  "value": {
                    "operator": "Variables[0] (MDF_Energy_Count) || RETURN",
                    "displayLines": "MDF_Energy_Count",
                    "constants": [],
                    "variables": [
                      "MDF_Energy_Count"
                    ]
                  },
                  "maximum": {
                    "operator": "Variables[0] (8) || RETURN",
                    "displayLines": "8",
                    "constants": [],
                    "variables": [
                      8
                    ]
                  },
                  "assignState": "True",
                  "bar#": 2,
                  "cooldown": 0
                }
              ]
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Trace Activated",
            "conditionList": "Action Beats Overthinking"
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": "Caster",
              "modifier": "PlayerBoy_10_PointB3"
            }
          ]
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "MWPlayerBoy_10_ShieldAfterBeingHit",
          "execute": [
            {
              "eventTrigger": "Being Attacked End [Owner]",
              "execute": [
                {
                  "name": "Add Events/Bonuses",
                  "to": "Caster",
                  "modifier": "MWPlayerBoy_10_Shield[<span class=\"descriptionNumberColor\">Shield</span>]",
                  "duration": {
                    "operator": "Variables[0] (2) || RETURN",
                    "displayLines": "2",
                    "constants": [],
                    "variables": [
                      2
                    ]
                  },
                  "valuePerStack": {
                    "MWPlayerBoy_10_Shield_Value01": {
                      "operator": "Variables[0] (TB_PRES_OBJECT_UNUSED_1) || RETURN",
                      "displayLines": "TB_PRES_OBJECT_UNUSED_1",
                      "constants": [],
                      "variables": [
                        "TB_PRES_OBJECT_UNUSED_1"
                      ]
                    }
                  }
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": "Caster",
                  "modifier": "MWPlayerBoy_10_WeaponCharge[<span class=\"descriptionNumberColor\">Magma Will</span>]"
                },
                "Modifier Deletes Itself"
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "MWPlayerBoy_10_AttackRatioUp[<span class=\"descriptionNumberColor\">ATK Boost</span>]",
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
          "description": "ATK +<span class=\"descriptionNumberColor\">MDF_PropertyValue</span>.",
          "type": "Buff",
          "effectName": "ATK Boost",
          "statusName": "ATK Boost"
        },
        {
          "name": "Modifier Construction",
          "for": "MWPlayerBoy_10_Passive",
          "execute": [
            {
              "eventTrigger": "Being Attacked End [Owner]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Modifier",
                    "target": "Caster",
                    "modifier": "MWPlayerBoy_10_WeaponCharge[<span class=\"descriptionNumberColor\">Magma Will</span>]"
                  },
                  "passed": [
                    {
                      "name": "Adjust Variable Value",
                      "adjustmentType": "Add to Value (Default)",
                      "variableName": "MDF_Energy_Count",
                      "on": "Caster",
                      "value": 1
                    },
                    {
                      "name": "Define Modifier Variable",
                      "target": "Caster",
                      "modifierName": "MWPlayerBoy_10_WeaponCharge[<span class=\"descriptionNumberColor\">Magma Will</span>]",
                      "value": {
                        "operator": "Variables[0] (MDF_Energy_Count) || RETURN",
                        "displayLines": "MDF_Energy_Count",
                        "constants": [],
                        "variables": [
                          "MDF_Energy_Count"
                        ]
                      }
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Has Modifier",
                        "target": "Caster",
                        "modifier": "PlayerBoy_10_WeaponCharge_Free[<span class=\"descriptionNumberColor\">War-Flaming Lance</span>]"
                      },
                      "failed": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": "Caster",
                          "modifier": "PlayerBoy_Weapon_Effect"
                        }
                      ]
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "MWPlayerBoy_10_WeaponCharge[<span class=\"descriptionNumberColor\">Magma Will</span>]",
                        "compareType": ">=",
                        "value2": {
                          "operator": "Variables[0] (8) || RETURN",
                          "displayLines": "8",
                          "constants": [],
                          "variables": [
                            8
                          ]
                        }
                      },
                      "passed": [
                        {
                          "name": "Define Modifier Variable",
                          "modifierName": "MWPlayerBoy_10_WeaponCharge[<span class=\"descriptionNumberColor\">Magma Will</span>]",
                          "value": {
                            "operator": "Variables[0] (8) || RETURN",
                            "displayLines": "8",
                            "constants": [],
                            "variables": [
                              8
                            ]
                          }
                        }
                      ]
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "MWPlayerBoy_10_WeaponCharge[<span class=\"descriptionNumberColor\">Magma Will</span>]",
                        "compareType": ">",
                        "value2": 3.5
                      },
                      "passed": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": "Caster",
                          "modifier": "PlayerBoy_10_ChangeAttack"
                        }
                      ]
                    }
                  ],
                  "failed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": "Caster",
                      "modifier": "MWPlayerBoy_10_WeaponCharge[<span class=\"descriptionNumberColor\">Magma Will</span>]"
                    },
                    {
                      "name": "Adjust Variable Value",
                      "adjustmentType": "Overwrite Value",
                      "variableName": "MDF_Energy_Count",
                      "on": "Caster",
                      "value": 1
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "MDF_Energy_Count",
                    "compareType": ">=",
                    "value2": 4
                  },
                  "passed": [
                    {
                      "name": "Update Displayed Energy Bar",
                      "value": {
                        "operator": "Variables[0] (MDF_Energy_Count) || RETURN",
                        "displayLines": "MDF_Energy_Count",
                        "constants": [],
                        "variables": [
                          "MDF_Energy_Count"
                        ]
                      },
                      "maximum": {
                        "operator": "Variables[0] (8) || RETURN",
                        "displayLines": "8",
                        "constants": [],
                        "variables": [
                          8
                        ]
                      },
                      "assignState": "True",
                      "priorState": "Active",
                      "bar#": 2,
                      "cooldown": 0
                    }
                  ],
                  "failed": [
                    {
                      "name": "Update Displayed Energy Bar",
                      "value": {
                        "operator": "Variables[0] (MDF_Energy_Count) || RETURN",
                        "displayLines": "MDF_Energy_Count",
                        "constants": [],
                        "variables": [
                          "MDF_Energy_Count"
                        ]
                      },
                      "maximum": {
                        "operator": "Variables[0] (8) || RETURN",
                        "displayLines": "8",
                        "constants": [],
                        "variables": [
                          8
                        ]
                      },
                      "assignState": "True",
                      "bar#": 2,
                      "cooldown": 0
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Get Revived [Owner]",
              "execute": [
                {
                  "name": "Add Events/Bonuses",
                  "to": "Caster",
                  "modifier": "PlayerBoy_Weapon_Effect"
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": [
            "Rank06_Max_Layer"
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "PlayerBoy_10_PointB3",
          "execute": [
            {
              "eventTrigger": "Turn [Pre-action Phase]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Flag",
                    "target": "Caster",
                    "flagName": "Shield"
                  },
                  "passed": [
                    {
                      "name": "Update Energy",
                      "on": "Caster",
                      "value": {
                        "operator": "Variables[0] (5) || RETURN",
                        "displayLines": "5",
                        "constants": [],
                        "variables": [
                          5
                        ]
                      },
                      "isFixed": "* ERR"
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": "Caster",
                      "modifier": "MWPlayerBoy_10_AttackRatioUp[<span class=\"descriptionNumberColor\">ATK Boost</span>]",
                      "duration": 1,
                      "immediateEffect": true,
                      "valuePerStack": {
                        "MDF_PropertyValue": {
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
            }
          ],
          "stackData": [],
          "latentQueue": [
            "Rank06_Max_Layer"
          ]
        }
      ]
    },
    "TrailblazerPreservation_PlayerBoy_10_Ability03_Part02": {
      "fileName": "TrailblazerPreservation_PlayerBoy_10_Ability03_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Define Custom Variable with Stat",
          "target": "Caster",
          "variableName": "CasterDefence",
          "value": "&nbsp;<span class=\"descriptionNumberColor\">DEFSUM</span>&nbsp;"
        },
        {
          "name": "ATK Scaling DMG",
          "target": "All Hostile Entities (AOE)",
          "canPhase": true,
          "AttackScaling": {
            "DamageType": "Fire",
            "Damage": {
              "operator": "Variables[0] (1) || RETURN",
              "displayLines": "1",
              "constants": [],
              "variables": [
                1
              ]
            },
            "DamageExtra": {
              "operator": "Variables[0] (1.5) || RETURN",
              "displayLines": "1.5",
              "constants": [],
              "variables": [
                1.5
              ]
            },
            "dmgFormulaExtra": "DEF Scaling",
            "Toughness": {
              "operator": "Variables[0] (AOE Toughness Value) || RETURN",
              "displayLines": "AOE Toughness Value",
              "constants": [],
              "variables": [
                "AOE Toughness Value"
              ]
            },
            "Tags": null,
            "EnergyGainPercent": "100%"
          }
        },
        "Trigger: Attack End",
        {
          "name": "Add Events/Bonuses",
          "to": "Caster",
          "modifier": "PlayerBoy_10_WeaponCharge_Free[<span class=\"descriptionNumberColor\">War-Flaming Lance</span>]"
        },
        {
          "name": "Update Displayed Energy Bar",
          "value": {
            "operator": "Variables[0] (MDF_Energy_Count) || RETURN",
            "displayLines": "MDF_Energy_Count",
            "constants": [],
            "variables": [
              "MDF_Energy_Count"
            ]
          },
          "maximum": {
            "operator": "Variables[0] (8) || RETURN",
            "displayLines": "8",
            "constants": [],
            "variables": [
              8
            ]
          },
          "assignState": "True",
          "priorState": "Active",
          "bar#": 2,
          "cooldown": 0
        },
        {
          "name": "Add Events/Bonuses",
          "to": "Caster",
          "modifier": "PlayerBoy_10_ChangeAttack"
        },
        {
          "name": "Add Events/Bonuses",
          "to": "Caster",
          "modifier": "PlayerBoy_Weapon_Effect"
        },
        "Trigger: Skip Death Handling",
        {
          "name": "IF",
          "conditions": {
            "name": "Eidolon Activated",
            "eidolon": 6
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": "Caster",
              "modifier": "PlayerBoy_10_Eidolon6_Stack[<span class=\"descriptionNumberColor\">DEF Boost</span>]",
              "stackLimit": {
                "operator": "Variables[0] (3) || RETURN",
                "displayLines": "3",
                "constants": [],
                "variables": [
                  3
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
        },
        {
          "name": "Define Custom Variable with Stat",
          "target": "Caster",
          "variableName": "CasterDefence",
          "value": "&nbsp;<span class=\"descriptionNumberColor\">DEFSUM</span>&nbsp;"
        },
        {
          "name": "Add Events/Bonuses",
          "to": "All Team Members(In Context)",
          "modifier": "MWPlayerBoy_10_Shield[<span class=\"descriptionNumberColor\">Shield</span>]",
          "duration": {
            "operator": "Variables[0] (2) || RETURN",
            "displayLines": "2",
            "constants": [],
            "variables": [
              2
            ]
          },
          "valuePerStack": {
            "MWPlayerBoy_10_Shield_Value01": {
              "operator": "Variables[0] (CasterDefence) || Variables[1] (0.06) || Variables[2] (Rank02_Ratio) || ADD || MUL || Variables[3] (80) || ADD || Variables[4] (Rank02_Value) || ADD || RETURN",
              "displayLines": "(((CasterDefence * (0.06 + Rank02_Ratio)) + 80) + Rank02_Value)",
              "constants": [],
              "variables": [
                "CasterDefence",
                0.06,
                "Rank02_Ratio",
                80,
                "Rank02_Value"
              ]
            }
          }
        },
        "Trigger: Ability End"
      ],
      "references": []
    },
    "TrailblazerPreservation_PlayerBoy_10_Ability03_Part01": {
      "fileName": "TrailblazerPreservation_PlayerBoy_10_Ability03_Part01",
      "abilityType": "Ultimate",
      "energy": 5,
      "toughnessList": [
        0,
        20,
        0
      ],
      "parse": [
        "Deleted bullshit",
        {
          "name": "Trigger Ability",
          "from": "Caster",
          "ability": "PlayerBoy_10_Ability03_Part02",
          "isTrigger": true
        }
      ],
      "references": []
    },
    "TrailblazerPreservation_PlayerBoy_10_Ability03_EnterReady": {
      "fileName": "TrailblazerPreservation_PlayerBoy_10_Ability03_EnterReady",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "references": []
    },
    "TrailblazerPreservation_PlayerBoy_10_Ability02_Part02": {
      "fileName": "TrailblazerPreservation_PlayerBoy_10_Ability02_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Add Events/Bonuses",
          "to": "Caster",
          "modifier": "MWPlayerBoy_10_DamageResistance[<span class=\"descriptionNumberColor\">DMG Mitigation</span>]",
          "duration": {
            "operator": "Variables[0] (1) || RETURN",
            "displayLines": "1",
            "constants": [],
            "variables": [
              1
            ]
          },
          "valuePerStack": {
            "MWPlayerBoy_10_DamageResistance_Value01": {
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
          "name": "IF",
          "conditions": {
            "name": "Trace Activated",
            "conditionList": "The Strong Defend the Weak"
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": "Allied Team",
              "modifier": "PlayerBoy_10_DamageResistance_Team[<span class=\"descriptionNumberColor\">DMG Mitigation</span>]",
              "duration": {
                "operator": "Variables[0] (1) || RETURN",
                "displayLines": "1",
                "constants": [],
                "variables": [
                  1
                ]
              },
              "valuePerStack": {
                "PlayerBoy_10_DamageResistance_Team_Value01": {
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
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Has Modifier",
            "target": "Caster",
            "modifier": "MWPlayerBoy_10_WeaponCharge[<span class=\"descriptionNumberColor\">Magma Will</span>]"
          },
          "passed": [
            {
              "name": "Adjust Variable Value",
              "adjustmentType": "Add to Value (Default)",
              "variableName": "MDF_Energy_Count",
              "on": "Caster",
              "value": 1
            },
            {
              "name": "Define Modifier Variable",
              "target": "Caster",
              "modifierName": "MWPlayerBoy_10_WeaponCharge[<span class=\"descriptionNumberColor\">Magma Will</span>]",
              "value": {
                "operator": "Variables[0] (MDF_Energy_Count) || RETURN",
                "displayLines": "MDF_Energy_Count",
                "constants": [],
                "variables": [
                  "MDF_Energy_Count"
                ]
              }
            },
            {
              "name": "Add Events/Bonuses",
              "to": "Caster",
              "modifier": "PlayerBoy_Weapon_Effect"
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "MWPlayerBoy_10_WeaponCharge[<span class=\"descriptionNumberColor\">Magma Will</span>]",
                "compareType": ">=",
                "value2": {
                  "operator": "Variables[0] (8) || RETURN",
                  "displayLines": "8",
                  "constants": [],
                  "variables": [
                    8
                  ]
                }
              },
              "passed": [
                {
                  "name": "Define Modifier Variable",
                  "modifierName": "MWPlayerBoy_10_WeaponCharge[<span class=\"descriptionNumberColor\">Magma Will</span>]",
                  "value": {
                    "operator": "Variables[0] (8) || RETURN",
                    "displayLines": "8",
                    "constants": [],
                    "variables": [
                      8
                    ]
                  }
                }
              ]
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "MWPlayerBoy_10_WeaponCharge[<span class=\"descriptionNumberColor\">Magma Will</span>]",
                "compareType": ">",
                "value2": 3.5
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": "Caster",
                  "modifier": "PlayerBoy_10_ChangeAttack"
                }
              ]
            }
          ],
          "failed": [
            {
              "name": "Add Events/Bonuses",
              "to": "Caster",
              "modifier": "MWPlayerBoy_10_WeaponCharge[<span class=\"descriptionNumberColor\">Magma Will</span>]"
            },
            {
              "name": "Adjust Variable Value",
              "adjustmentType": "Overwrite Value",
              "variableName": "MDF_Energy_Count",
              "on": "Caster",
              "value": 1
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "MDF_Energy_Count",
            "compareType": ">=",
            "value2": 4
          },
          "passed": [
            {
              "name": "Update Displayed Energy Bar",
              "value": {
                "operator": "Variables[0] (MDF_Energy_Count) || RETURN",
                "displayLines": "MDF_Energy_Count",
                "constants": [],
                "variables": [
                  "MDF_Energy_Count"
                ]
              },
              "maximum": {
                "operator": "Variables[0] (8) || RETURN",
                "displayLines": "8",
                "constants": [],
                "variables": [
                  8
                ]
              },
              "assignState": "True",
              "priorState": "Active",
              "bar#": 2,
              "cooldown": 0
            }
          ],
          "failed": [
            {
              "name": "Update Displayed Energy Bar",
              "value": {
                "operator": "Variables[0] (MDF_Energy_Count) || RETURN",
                "displayLines": "MDF_Energy_Count",
                "constants": [],
                "variables": [
                  "MDF_Energy_Count"
                ]
              },
              "maximum": {
                "operator": "Variables[0] (8) || RETURN",
                "displayLines": "8",
                "constants": [],
                "variables": [
                  8
                ]
              },
              "assignState": "True",
              "bar#": 2,
              "cooldown": 0
            }
          ]
        },
        {
          "name": "Update Energy",
          "on": "Caster",
          "valuePercent": 1,
          "ofAbilitySplit": true,
          "isFixed": "* ERR"
        },
        {
          "name": "Change Character Transformation",
          "target": "Caster",
          "phase": "Phase2"
        },
        {
          "name": "Define Custom Variable with Stat",
          "target": "Caster",
          "variableName": "CasterDefence",
          "value": "&nbsp;<span class=\"descriptionNumberColor\">DEFSUM</span>&nbsp;"
        },
        {
          "name": "Add Events/Bonuses",
          "to": "All Team Members(In Context)",
          "modifier": "MWPlayerBoy_10_Shield[<span class=\"descriptionNumberColor\">Shield</span>]",
          "duration": {
            "operator": "Variables[0] (2) || RETURN",
            "displayLines": "2",
            "constants": [],
            "variables": [
              2
            ]
          },
          "valuePerStack": {
            "MWPlayerBoy_10_Shield_Value01": {
              "operator": "Variables[0] (CasterDefence) || Variables[1] (0.06) || Variables[2] (Rank02_Ratio) || ADD || MUL || Variables[3] (80) || ADD || Variables[4] (Rank02_Value) || ADD || RETURN",
              "displayLines": "(((CasterDefence * (0.06 + Rank02_Ratio)) + 80) + Rank02_Value)",
              "constants": [],
              "variables": [
                "CasterDefence",
                0.06,
                "Rank02_Ratio",
                80,
                "Rank02_Value"
              ]
            }
          }
        },
        {
          "name": "Add Events/Bonuses",
          "to": "All Hostile Entities (AOE)",
          "modifier": "Standard_CTRL_Taunt[<span class=\"descriptionNumberColor\">Taunt</span>]",
          "duration": {
            "operator": "Variables[0] (1) || RETURN",
            "displayLines": "1",
            "constants": [],
            "variables": [
              1
            ]
          },
          "baseChance": {
            "operator": "Variables[0] (1) || RETURN",
            "displayLines": "1",
            "constants": [],
            "variables": [
              1
            ]
          }
        },
        "Trigger: Ability End"
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "MWPlayerBoy_10_NullifyAggro",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Define Custom Variable with Stat",
                  "target": "Owner of this Modifier",
                  "variableName": "Target_AggroAddedRatio",
                  "value": "&nbsp;<span class=\"descriptionNumberColor\">Aggro%</span>&nbsp;"
                },
                {
                  "name": "Define Custom Variable with Stat",
                  "target": "Owner of this Modifier",
                  "variableName": "Target_AggroDelta",
                  "value": "&nbsp;<span class=\"descriptionNumberColor\">AggroFlat</span>&nbsp;"
                },
                {
                  "name": "Stack Target Stat Value",
                  "target": "Owner of this Modifier",
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">Aggro%</span>&nbsp;",
                  "value": {
                    "operator": "Constants[0] (1) || Variables[0] (Target_AggroAddedRatio) || ADD || INVERT || RETURN",
                    "displayLines": "-(1 + Target_AggroAddedRatio)",
                    "constants": [
                      1
                    ],
                    "variables": [
                      "Target_AggroAddedRatio"
                    ]
                  }
                },
                {
                  "name": "Stack Target Stat Value",
                  "target": "Owner of this Modifier",
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">AggroFlat</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (Target_AggroDelta) || RETURN",
                    "displayLines": "Target_AggroDelta",
                    "constants": [],
                    "variables": [
                      "Target_AggroDelta"
                    ]
                  }
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "MWPlayerBoy_10_NullifyAggro_Aura",
          "stackType": "ReplaceByCaster",
          "lifeCyclePhaseAllowed": "ModifierPhase1End",
          "execute": [
            {
              "eventTrigger": "When Modifier Destroyed/Removed",
              "execute": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": [
                    {
                      "name": "Target List",
                      "target": "All Team Members(In Context)"
                    },
                    {
                      "name": "Target List",
                      "target": "All Untargetable"
                    }
                  ],
                  "modifier": "MWPlayerBoy_10_NullifyAggro"
                }
              ]
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Add Events/Bonuses",
                  "to": "All Teammates (Excluding Owner)",
                  "modifier": "MWPlayerBoy_10_NullifyAggro"
                }
              ]
            }
          ]
        }
      ]
    },
    "TrailblazerPreservation_PlayerBoy_10_Ability02_Part01": {
      "fileName": "TrailblazerPreservation_PlayerBoy_10_Ability02_Part01",
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
          "ability": "PlayerBoy_10_Ability02_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "references": []
    },
    "TrailblazerPreservation_PlayerBoy_10_Ability11_Part02": {
      "fileName": "TrailblazerPreservation_PlayerBoy_10_Ability11_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Change Character Transformation",
          "target": "Caster",
          "phase": "Phase1"
        },
        {
          "name": "Define Custom Variable with Stat",
          "target": "Caster",
          "variableName": "CasterDefence",
          "value": "&nbsp;<span class=\"descriptionNumberColor\">DEFSUM</span>&nbsp;"
        },
        {
          "name": "ATK Scaling DMG",
          "target": "Single Target (Primary)",
          "canPhase": true,
          "AttackScaling": {
            "DamageType": "Fire",
            "Damage": {
              "operator": "Variables[0] (1.35) || RETURN",
              "displayLines": "1.35",
              "constants": [],
              "variables": [
                1.35
              ]
            },
            "DamageExtra": {
              "operator": "Variables[0] (Rank01_ExtraRatio) || RETURN",
              "displayLines": "Rank01_ExtraRatio",
              "constants": [],
              "variables": [
                "Rank01_ExtraRatio"
              ]
            },
            "dmgFormulaExtra": "DEF Scaling",
            "HitSplit": 0.5,
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
          "name": "ATK Scaling DMG",
          "target": "Single Target (Primary)",
          "canPhase": true,
          "AttackScaling": {
            "DamageType": "Fire",
            "Damage": {
              "operator": "Variables[0] (1.35) || RETURN",
              "displayLines": "1.35",
              "constants": [],
              "variables": [
                1.35
              ]
            },
            "DamageExtra": {
              "operator": "Variables[0] (Rank01_ExtraRatio) || RETURN",
              "displayLines": "Rank01_ExtraRatio",
              "constants": [],
              "variables": [
                "Rank01_ExtraRatio"
              ]
            },
            "dmgFormulaExtra": "DEF Scaling",
            "HitSplit": 0.5,
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
          "name": "ATK Scaling DMG",
          "target": "Blast (Adjacent)",
          "canPhase": true,
          "AttackScaling": {
            "DamageType": "Fire",
            "Damage": {
              "operator": "Variables[0] (0.54) || RETURN",
              "displayLines": "0.54",
              "constants": [],
              "variables": [
                0.54
              ]
            },
            "DamageExtra": {
              "operator": "Variables[0] (Rank01_ExtraRatio) || RETURN",
              "displayLines": "Rank01_ExtraRatio",
              "constants": [],
              "variables": [
                "Rank01_ExtraRatio"
              ]
            },
            "dmgFormulaExtra": "DEF Scaling",
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
            "name": "Trace Activated",
            "conditionList": "Unwavering Gallantry"
          },
          "passed": [
            {
              "name": "Heal",
              "target": "Caster",
              "healPercent": {
                "operator": "Variables[0] (0.05) || RETURN",
                "displayLines": "0.05",
                "constants": [],
                "variables": [
                  0.05
                ]
              },
              "formula": "Heal from Healer's MaxHP"
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
              "name": "Add Events/Bonuses",
              "to": "Caster",
              "modifier": "PlayerBoy_10_Eidolon6_Stack[<span class=\"descriptionNumberColor\">DEF Boost</span>]",
              "stackLimit": {
                "operator": "Variables[0] (3) || RETURN",
                "displayLines": "3",
                "constants": [],
                "variables": [
                  3
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
        },
        {
          "name": "Define Custom Variable with Stat",
          "target": "Caster",
          "variableName": "CasterDefence",
          "value": "&nbsp;<span class=\"descriptionNumberColor\">DEFSUM</span>&nbsp;"
        },
        {
          "name": "Add Events/Bonuses",
          "to": "All Team Members(In Context)",
          "modifier": "MWPlayerBoy_10_Shield[<span class=\"descriptionNumberColor\">Shield</span>]",
          "duration": {
            "operator": "Variables[0] (2) || RETURN",
            "displayLines": "2",
            "constants": [],
            "variables": [
              2
            ]
          },
          "valuePerStack": {
            "MWPlayerBoy_10_Shield_Value01": {
              "operator": "Variables[0] (CasterDefence) || Variables[1] (0.06) || Variables[2] (Rank02_Ratio) || ADD || MUL || Variables[3] (80) || ADD || Variables[4] (Rank02_Value) || ADD || RETURN",
              "displayLines": "(((CasterDefence * (0.06 + Rank02_Ratio)) + 80) + Rank02_Value)",
              "constants": [],
              "variables": [
                "CasterDefence",
                0.06,
                "Rank02_Ratio",
                80,
                "Rank02_Value"
              ]
            }
          }
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Has Modifier",
            "target": "Caster",
            "modifier": "PlayerBoy_10_WeaponCharge_Free[<span class=\"descriptionNumberColor\">War-Flaming Lance</span>]"
          },
          "passed": [
            {
              "name": "Remove Events/Bonuses",
              "to": "Caster",
              "modifier": "PlayerBoy_10_WeaponCharge_Free[<span class=\"descriptionNumberColor\">War-Flaming Lance</span>]"
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "MWPlayerBoy_10_WeaponCharge[<span class=\"descriptionNumberColor\">Magma Will</span>]",
                "compareType": ">",
                "value2": 3.5
              },
              "failed": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": "Caster",
                  "modifier": "PlayerBoy_10_ChangeAttack"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": "Caster",
                  "modifier": "PlayerBoy_Weapon_Effect"
                }
              ]
            }
          ],
          "failed": [
            {
              "name": "IF",
              "conditions": {
                "name": "Has Modifier",
                "target": "Caster",
                "modifier": "MWPlayerBoy_10_WeaponCharge[<span class=\"descriptionNumberColor\">Magma Will</span>]"
              },
              "passed": [
                {
                  "name": "Adjust Variable Value",
                  "adjustmentType": "Add to Value (Default)",
                  "variableName": "MDF_Energy_Count",
                  "on": "Caster",
                  "value": -4
                },
                {
                  "name": "Define Modifier Variable",
                  "modifierName": "MWPlayerBoy_10_WeaponCharge[<span class=\"descriptionNumberColor\">Magma Will</span>]",
                  "value": {
                    "operator": "Variables[0] (MDF_Energy_Count) || RETURN",
                    "displayLines": "MDF_Energy_Count",
                    "constants": [],
                    "variables": [
                      "MDF_Energy_Count"
                    ]
                  }
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "MWPlayerBoy_10_WeaponCharge[<span class=\"descriptionNumberColor\">Magma Will</span>]",
                    "compareType": ">",
                    "value2": 3.5
                  },
                  "failed": [
                    {
                      "name": "Remove Events/Bonuses",
                      "to": "Caster",
                      "modifier": "PlayerBoy_10_ChangeAttack"
                    },
                    {
                      "name": "Remove Events/Bonuses",
                      "to": "Caster",
                      "modifier": "PlayerBoy_Weapon_Effect"
                    }
                  ]
                }
              ],
              "failed": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": "Caster",
                  "modifier": "PlayerBoy_10_ChangeAttack"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": "Caster",
                  "modifier": "PlayerBoy_Weapon_Effect"
                }
              ]
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "MDF_Energy_Count",
            "compareType": ">=",
            "value2": 4
          },
          "passed": [
            {
              "name": "Update Displayed Energy Bar",
              "value": {
                "operator": "Variables[0] (MDF_Energy_Count) || RETURN",
                "displayLines": "MDF_Energy_Count",
                "constants": [],
                "variables": [
                  "MDF_Energy_Count"
                ]
              },
              "maximum": {
                "operator": "Variables[0] (8) || RETURN",
                "displayLines": "8",
                "constants": [],
                "variables": [
                  8
                ]
              },
              "assignState": "True",
              "priorState": "Active",
              "bar#": 2,
              "cooldown": 0
            }
          ],
          "failed": [
            {
              "name": "Update Displayed Energy Bar",
              "value": {
                "operator": "Variables[0] (MDF_Energy_Count) || RETURN",
                "displayLines": "MDF_Energy_Count",
                "constants": [],
                "variables": [
                  "MDF_Energy_Count"
                ]
              },
              "maximum": {
                "operator": "Variables[0] (8) || RETURN",
                "displayLines": "8",
                "constants": [],
                "variables": [
                  8
                ]
              },
              "assignState": "True",
              "priorState": "Normal",
              "bar#": 2,
              "cooldown": 0
            }
          ]
        },
        "Trigger: Ability End"
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "MWPlayerBoy_10_DefenceUp",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Stack Target Stat Value",
                  "target": "Owner of this Modifier",
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">DEF%</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (TB_PRES_OBJECT_UNUSED_2) || RETURN",
                    "displayLines": "TB_PRES_OBJECT_UNUSED_2",
                    "constants": [],
                    "variables": [
                      "TB_PRES_OBJECT_UNUSED_2"
                    ]
                  }
                }
              ]
            }
          ]
        }
      ]
    },
    "TrailblazerPreservation_PlayerBoy_10_Ability11_Part01": {
      "fileName": "TrailblazerPreservation_PlayerBoy_10_Ability11_Part01",
      "abilityType": "Basic ATK",
      "energy": 30,
      "toughnessList": [
        20,
        0,
        10
      ],
      "parse": [
        "Deleted bullshit",
        {
          "name": "Trigger Ability",
          "from": "Caster",
          "ability": "PlayerBoy_10_Ability11_Part02",
          "isTrigger": true
        }
      ],
      "references": []
    },
    "TrailblazerPreservation_PlayerBoy_10_Ability01_Part02": {
      "fileName": "TrailblazerPreservation_PlayerBoy_10_Ability01_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Change Character Transformation",
          "target": "Caster",
          "phase": "Phase1"
        },
        {
          "name": "Define Custom Variable with Stat",
          "target": "Caster",
          "variableName": "CasterDefence",
          "value": "&nbsp;<span class=\"descriptionNumberColor\">DEFSUM</span>&nbsp;"
        },
        {
          "name": "ATK Scaling DMG",
          "target": "Single Target (Primary)",
          "canPhase": true,
          "AttackScaling": {
            "DamageType": "Fire",
            "Damage": {
              "operator": "Variables[0] (1) || RETURN",
              "displayLines": "1",
              "constants": [],
              "variables": [
                1
              ]
            },
            "DamageExtra": {
              "operator": "Variables[0] (Rank01_Ratio) || RETURN",
              "displayLines": "Rank01_Ratio",
              "constants": [],
              "variables": [
                "Rank01_Ratio"
              ]
            },
            "dmgFormulaExtra": "DEF Scaling",
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
        "Trigger: Attack End",
        {
          "name": "IF",
          "conditions": {
            "name": "Has Modifier",
            "target": "Caster",
            "modifier": "MWPlayerBoy_10_WeaponCharge[<span class=\"descriptionNumberColor\">Magma Will</span>]"
          },
          "passed": [
            {
              "name": "Define Modifier Variable",
              "target": "Caster",
              "modifierName": "MWPlayerBoy_10_WeaponCharge[<span class=\"descriptionNumberColor\">Magma Will</span>]",
              "function": "Add",
              "value": 1
            },
            {
              "name": "Adjust Variable Value",
              "adjustmentType": "Add to Value (Default)",
              "variableName": "MDF_Energy_Count",
              "on": "Caster",
              "value": 1
            },
            {
              "name": "Add Events/Bonuses",
              "to": "Caster",
              "modifier": "PlayerBoy_Weapon_Effect"
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "MWPlayerBoy_10_WeaponCharge[<span class=\"descriptionNumberColor\">Magma Will</span>]",
                "compareType": ">=",
                "value2": {
                  "operator": "Variables[0] (8) || RETURN",
                  "displayLines": "8",
                  "constants": [],
                  "variables": [
                    8
                  ]
                }
              },
              "passed": [
                {
                  "name": "Define Modifier Variable",
                  "modifierName": "MWPlayerBoy_10_WeaponCharge[<span class=\"descriptionNumberColor\">Magma Will</span>]",
                  "value": {
                    "operator": "Variables[0] (8) || RETURN",
                    "displayLines": "8",
                    "constants": [],
                    "variables": [
                      8
                    ]
                  }
                }
              ]
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "MWPlayerBoy_10_WeaponCharge[<span class=\"descriptionNumberColor\">Magma Will</span>]",
                "compareType": ">",
                "value2": 3.5
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": "Caster",
                  "modifier": "PlayerBoy_10_ChangeAttack"
                }
              ]
            }
          ],
          "failed": [
            {
              "name": "Add Events/Bonuses",
              "to": "Caster",
              "modifier": "MWPlayerBoy_10_WeaponCharge[<span class=\"descriptionNumberColor\">Magma Will</span>]"
            },
            {
              "name": "Adjust Variable Value",
              "adjustmentType": "Overwrite Value",
              "variableName": "MDF_Energy_Count",
              "on": "Caster",
              "value": 1
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "MDF_Energy_Count",
            "compareType": ">=",
            "value2": 4
          },
          "passed": [
            {
              "name": "Update Displayed Energy Bar",
              "value": {
                "operator": "Variables[0] (MDF_Energy_Count) || RETURN",
                "displayLines": "MDF_Energy_Count",
                "constants": [],
                "variables": [
                  "MDF_Energy_Count"
                ]
              },
              "maximum": {
                "operator": "Variables[0] (8) || RETURN",
                "displayLines": "8",
                "constants": [],
                "variables": [
                  8
                ]
              },
              "assignState": "True",
              "priorState": "Active",
              "bar#": 2,
              "cooldown": 0
            }
          ],
          "failed": [
            {
              "name": "Update Displayed Energy Bar",
              "value": {
                "operator": "Variables[0] (MDF_Energy_Count) || RETURN",
                "displayLines": "MDF_Energy_Count",
                "constants": [],
                "variables": [
                  "MDF_Energy_Count"
                ]
              },
              "maximum": {
                "operator": "Variables[0] (8) || RETURN",
                "displayLines": "8",
                "constants": [],
                "variables": [
                  8
                ]
              },
              "assignState": "True",
              "bar#": 2,
              "cooldown": 0
            }
          ]
        },
        {
          "name": "Define Custom Variable with Stat",
          "target": "Caster",
          "variableName": "CasterDefence",
          "value": "&nbsp;<span class=\"descriptionNumberColor\">DEFSUM</span>&nbsp;"
        },
        {
          "name": "Add Events/Bonuses",
          "to": "All Team Members(In Context)",
          "modifier": "MWPlayerBoy_10_Shield[<span class=\"descriptionNumberColor\">Shield</span>]",
          "duration": {
            "operator": "Variables[0] (2) || RETURN",
            "displayLines": "2",
            "constants": [],
            "variables": [
              2
            ]
          },
          "valuePerStack": {
            "MWPlayerBoy_10_Shield_Value01": {
              "operator": "Variables[0] (CasterDefence) || Variables[1] (0.06) || Variables[2] (Rank02_Ratio) || ADD || MUL || Variables[3] (80) || ADD || Variables[4] (Rank02_Value) || ADD || RETURN",
              "displayLines": "(((CasterDefence * (0.06 + Rank02_Ratio)) + 80) + Rank02_Value)",
              "constants": [],
              "variables": [
                "CasterDefence",
                0.06,
                "Rank02_Ratio",
                80,
                "Rank02_Value"
              ]
            }
          }
        },
        "Trigger: Ability End"
      ],
      "references": []
    },
    "TrailblazerPreservation_PlayerBoy_10_Ability01_Part01": {
      "fileName": "TrailblazerPreservation_PlayerBoy_10_Ability01_Part01",
      "abilityType": "Basic ATK",
      "energy": 20,
      "toughnessList": [
        10,
        0,
        0
      ],
      "parse": [
        "Deleted bullshit",
        {
          "name": "Trigger Ability",
          "from": "Caster",
          "ability": "PlayerBoy_10_Ability01_Part02",
          "isTrigger": true
        }
      ],
      "references": []
    },
    "TrailblazerPreservation_Modifiers": {
      "fileName": "TrailblazerPreservation_Modifiers",
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
          "for": "PlayerBoy_Weapon_Effect",
          "stackType": "ReplaceByCaster",
          "execute": [
            {
              "eventTrigger": "When Modifier Destroyed/Removed",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "MWPlayerBoy_10_WeaponCharge[<span class=\"descriptionNumberColor\">Magma Will</span>]",
                    "compareType": ">=",
                    "value2": 4
                  },
                  "failed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "MWPlayerBoy_10_WeaponCharge[<span class=\"descriptionNumberColor\">Magma Will</span>]",
                        "compareType": ">=",
                        "value2": 3
                      },
                      "failed": [
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Compare: Variable",
                            "value1": "MWPlayerBoy_10_WeaponCharge[<span class=\"descriptionNumberColor\">Magma Will</span>]",
                            "compareType": ">=",
                            "value2": 2
                          },
                          "failed": [
                            {
                              "name": "IF",
                              "conditions": {
                                "name": "Compare: Variable",
                                "value1": "MWPlayerBoy_10_WeaponCharge[<span class=\"descriptionNumberColor\">Magma Will</span>]",
                                "compareType": ">=",
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
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Modifier",
                    "target": "Owner of this Modifier",
                    "modifier": "PlayerBoy_10_WeaponCharge_Free[<span class=\"descriptionNumberColor\">War-Flaming Lance</span>]"
                  },
                  "failed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "MWPlayerBoy_10_WeaponCharge[<span class=\"descriptionNumberColor\">Magma Will</span>]",
                        "compareType": ">=",
                        "value2": 2
                      }
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "MWPlayerBoy_10_WeaponCharge[<span class=\"descriptionNumberColor\">Magma Will</span>]",
                        "compareType": ">=",
                        "value2": 3
                      }
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "MWPlayerBoy_10_WeaponCharge[<span class=\"descriptionNumberColor\">Magma Will</span>]",
                        "compareType": ">=",
                        "value2": 4
                      }
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Pre-Death [Owner]"
            }
          ],
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "MWPlayerBoy_10_Shield[<span class=\"descriptionNumberColor\">Shield</span>]",
          "stackType": "Replace",
          "modifierFlags": [
            "Shield"
          ],
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier",
              "execute": [
                {
                  "name": "Set Shield State/Value"
                }
              ]
            },
            {
              "eventTrigger": "When Modifier Destroyed/Removed",
              "execute": [
                {
                  "name": "Remove Shield",
                  "target": "Owner of this Modifier"
                },
                {
                  "name": "Set Shield State/Value",
                  "reset": true
                }
              ]
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Create Shield",
                  "target": "Owner of this Modifier",
                  "value": {
                    "operator": "Variables[0] (MWAvatar_PlayerBoy_10_Shield_Value01) || RETURN",
                    "displayLines": "MWAvatar_PlayerBoy_10_Shield_Value01",
                    "constants": [],
                    "variables": [
                      "MWAvatar_PlayerBoy_10_Shield_Value01"
                    ]
                  }
                }
              ]
            }
          ],
          "useEntitySnapshot": true,
          "stackData": [
            "MWAvatar_PlayerBoy_10_Shield_Value01"
          ],
          "latentQueue": [],
          "description": "Gains a Shield that absorbs DMG. While the Shield persists, enemy attacks will not reduce Shielded characters' HP.",
          "type": "Buff",
          "effectName": "Shield",
          "statusName": "Shield",
          "duration": 1
        },
        {
          "name": "Modifier Construction",
          "for": "PlayerBoy_10_DamageResistance_Team[<span class=\"descriptionNumberColor\">DMG Mitigation</span>]",
          "stackType": "ReplaceByCaster",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Stack Target Stat Value",
                  "target": "Owner of this Modifier",
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageReduction</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (MAvatar_PlayerBoy_10_DamageResistance_Team_Value01) || RETURN",
                    "displayLines": "MAvatar_PlayerBoy_10_DamageResistance_Team_Value01",
                    "constants": [],
                    "variables": [
                      "MAvatar_PlayerBoy_10_DamageResistance_Team_Value01"
                    ]
                  }
                }
              ]
            }
          ],
          "stackData": [
            "MAvatar_PlayerBoy_10_DamageResistance_Team_Value01"
          ],
          "latentQueue": [],
          "description": "DMG taken -<span class=\"descriptionNumberColor\">MAvatar_PlayerBoy_10_DamageResistance_Team_Value01</span>.",
          "type": "Buff",
          "effectName": "DMG Mitigation",
          "statusName": "DMG Mitigation"
        },
        {
          "name": "Modifier Construction",
          "for": "MWPlayerBoy_10_DamageResistance[<span class=\"descriptionNumberColor\">DMG Mitigation</span>]",
          "stackType": "ReplaceByCaster",
          "execute": [
            {
              "eventTrigger": "When Modifier Destroyed/Removed",
              "execute": [
                {
                  "name": "Change Character Transformation",
                  "target": "Caster",
                  "phase": "Phase1"
                }
              ]
            },
            {
              "eventTrigger": "Take Damage Start [Owner]: Any"
            },
            {
              "eventTrigger": "When Put in Deathstate Limbo",
              "execute": [
                {
                  "name": "Change Character Transformation",
                  "target": "Caster",
                  "phase": "Phase1"
                }
              ]
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Stack Target Stat Value",
                  "target": "Caster",
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageReduction</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (MWAvatar_PlayerBoy_10_DamageResistance_Value01) || RETURN",
                    "displayLines": "MWAvatar_PlayerBoy_10_DamageResistance_Value01",
                    "constants": [],
                    "variables": [
                      "MWAvatar_PlayerBoy_10_DamageResistance_Value01"
                    ]
                  }
                }
              ]
            },
            {
              "eventTrigger": "Pre-Death [Owner]",
              "execute": [
                "Modifier Deletes Itself"
              ]
            },
            {
              "eventTrigger": "When Modifier is Added [Owner]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Flag",
                    "target": "Caster",
                    "flagName": "AvatarBreak"
                  },
                  "passed": [
                    {
                      "name": "Change Character Transformation",
                      "target": "Caster",
                      "phase": "Phase1"
                    }
                  ]
                }
              ]
            }
          ],
          "stackData": [
            "MWAvatar_PlayerBoy_10_DamageResistance_Value01"
          ],
          "latentQueue": [],
          "description": "DMG taken -<span class=\"descriptionNumberColor\">MWAvatar_PlayerBoy_10_DamageResistance_Value01</span>.",
          "type": "Buff",
          "effectName": "DMG Mitigation",
          "statusName": "DMG Mitigation"
        },
        {
          "name": "Modifier Construction",
          "for": "MWPlayerBoy_10_WeaponCharge[<span class=\"descriptionNumberColor\">Magma Will</span>]",
          "counter": 1,
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier"
            },
            {
              "eventTrigger": "Pre-Death [Owner]"
            }
          ],
          "stackData": [],
          "latentQueue": [],
          "description": "When there are 4 or more stacks of Magma Will, Enhances Basic ATK.",
          "type": "Other",
          "statusName": "Magma Will"
        },
        {
          "name": "Modifier Construction",
          "for": "PlayerBoy_10_ChangeAttack",
          "stackType": "ReplaceByCaster",
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
                  "name": "Update Ability Enhance Button",
                  "target": "Owner of this Modifier",
                  "display": "Hide",
                  "abilityName": "Basic ATK"
                }
              ]
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Update Ability Binding",
                  "target": "Caster",
                  "abilityName": "Skill11",
                  "skillSlot": "Basic ATK"
                },
                {
                  "name": "Update Ability Enhance Button",
                  "target": "Owner of this Modifier",
                  "display": "Show",
                  "abilityName": "Basic ATK"
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "PlayerBoy_10_WeaponCharge_Free[<span class=\"descriptionNumberColor\">War-Flaming Lance</span>]",
          "stackData": [],
          "latentQueue": [],
          "description": "The next Basic ATK will become an Enhanced Basic ATK and will not consume Magma Will.",
          "type": "Other",
          "effectName": "Enhanced Basic ATK",
          "statusName": "War-Flaming Lance"
        },
        {
          "name": "Modifier Construction",
          "for": "PlayerBoy_10_Eidolon6_Stack[<span class=\"descriptionNumberColor\">DEF Boost</span>]",
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
          "stackData": [
            "MDF_DefenceAddedRatio"
          ],
          "latentQueue": [],
          "description": "Each stack increases DEF by <span class=\"descriptionNumberColor\">MDF_DefenceAddedRatio</span>, up to <span class=\"descriptionNumberColor\">Rank06_Max_Layer</span> stack(s).",
          "type": "Buff",
          "effectName": "DEF Boost",
          "statusName": "DEF Boost",
          "stackLimit": 4,
          "addStacksPerTrigger": 1
        }
      ],
      "references": []
    }
  }
}