const configAbility = {
  "fileName": "649865181_Modifiers",
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
      "for": "Enemy_XP_Element_TeamBonus_Frost",
      "stackType": "Replace",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Define Custom Variable with Modifier Values",
              "valueType": "Layer",
              "variableName": "MDF_Layer",
              "multiplier": 1
            }
          ]
        },
        {
          "eventTrigger": "When Stacking Modifier Instance [Owner]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Modifier Was",
                "modifier": "Monster_W1_Mecha03_01_Frozen[<span class=\"descriptionNumberColor\">Deep Freeze</span>]"
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "Enemy_XP_Element_TeamBonus_Frost",
                  "addStacksPerTrigger": 1,
                  "casterAssign": "TargetSelf"
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "value1": null,
                    "compareType": ">=",
                    "value2": 20,
                    "valueType": "Layer"
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "Standard_CTRL_Frozen[<span class=\"descriptionNumberColor\">Frozen</span>]",
                      "duration": 1,
                      "baseChance": 1,
                      "casterAssign": "TargetSelf"
                    },
                    "Modifier Deletes Itself"
                  ]
                }
              ]
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Modifier Was",
                "modifier": "Standard_CTRL_Frozen[<span class=\"descriptionNumberColor\">Frozen</span>]"
              },
              "passed": [
                "Modifier Deletes Itself"
              ]
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Modifier Was",
                "modifier": "Enemy_XP_Element_TeamBonus_Frost"
              },
              "passed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "value1": null,
                    "compareType": ">=",
                    "value2": 30,
                    "valueType": "Layer"
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "Standard_CTRL_Frozen[<span class=\"descriptionNumberColor\">Frozen</span>]",
                      "duration": 1,
                      "baseChance": 1,
                      "casterAssign": "TargetSelf"
                    },
                    "Modifier Deletes Itself"
                  ]
                }
              ]
            }
          ]
        }
      ],
      "duration": 3,
      "stackLimit": 30,
      "addStacksPerTrigger": 1
    },
    {
      "name": "Modifier Construction",
      "for": "Enemy_XP_Element_TeamBonus_ElementSurge",
      "execute": [
        {
          "eventTrigger": "Deal Damage End [Owner]: Hit",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "modifier": "Standard_CTRL_Frozen[<span class=\"descriptionNumberColor\">Frozen</span>]"
              },
              "failed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "OR",
                    "conditionList": [
                      {
                        "name": "Compare: Monster Rank",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "compareType": "<",
                        "value2": 3
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "Enemy_XP_Element_TeamBonus_Frost",
                      "addStacksPerTrigger": 4,
                      "casterAssign": "TargetSelf"
                    }
                  ],
                  "failed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "Enemy_XP_Element_TeamBonus_Frost",
                      "addStacksPerTrigger": 1,
                      "casterAssign": "TargetSelf"
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
      "name": "Modifier Construction",
      "for": "Enemy_W1_Mecha_TeamBonus_AttackUp",
      "stackType": "Replace",
      "execute": [
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
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageAll</span>&nbsp;",
              "value": {
                "operator": "Variables[0] (STANDARDSPECIFIC_OBJECT_UNUSED_16) || Variables[1] (MDF_Layer) || MUL || RETURN",
                "displayLines": "(STANDARDSPECIFIC_OBJECT_UNUSED_16 * MDF_Layer)",
                "constants": [],
                "variables": [
                  "STANDARDSPECIFIC_OBJECT_UNUSED_16",
                  "MDF_Layer"
                ]
              }
            }
          ]
        },
        {
          "eventTrigger": "Attack DMG End [Owner]",
          "execute": [
            "Modifier Deletes Itself"
          ]
        },
        {
          "eventTrigger": "Being Weakness Broken: End [Owner]",
          "execute": [
            "Modifier Deletes Itself"
          ]
        }
      ],
      "addStacksPerTrigger": 1
    },
    {
      "name": "Modifier Construction",
      "for": "Enemy_W1_Mecha_TeamBonus_SpeedUp",
      "stackType": "Replace",
      "execute": [
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
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">SPD%</span>&nbsp;",
              "value": {
                "operator": "Variables[0] (STANDARDSPECIFIC_OBJECT_UNUSED_15) || Variables[1] (MDF_Layer) || MUL || RETURN",
                "displayLines": "(STANDARDSPECIFIC_OBJECT_UNUSED_15 * MDF_Layer)",
                "constants": [],
                "variables": [
                  "STANDARDSPECIFIC_OBJECT_UNUSED_15",
                  "MDF_Layer"
                ]
              }
            }
          ]
        },
        {
          "eventTrigger": "Attack DMG End [Owner]",
          "execute": [
            "Modifier Deletes Itself"
          ]
        },
        {
          "eventTrigger": "Being Weakness Broken: End [Owner]",
          "execute": [
            "Modifier Deletes Itself"
          ]
        }
      ],
      "addStacksPerTrigger": 1
    },
    {
      "name": "Modifier Construction",
      "for": "Enemy_W1_Mecha_TeamBonus_PowerDeliver",
      "execute": [
        {
          "eventTrigger": "Ability Use [Owner]: End",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "OR",
                "conditionList": [
                  {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "OR",
                        "conditionList": [
                          {
                            "name": "Enemy ID",
                            "ID": 1013010,
                            "target": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            },
                            "characterName": "Automaton Grizzly"
                          },
                          {
                            "name": "Enemy ID",
                            "ID": 1013011,
                            "target": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            },
                            "characterName": "Automaton Grizzly (Bug)"
                          },
                          {
                            "name": "Enemy ID",
                            "ID": 1013012,
                            "target": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            },
                            "characterName": "Automaton Grizzly (Complete)"
                          },
                          {
                            "name": "Enemy ID",
                            "ID": 1013013,
                            "target": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            },
                            "characterName": "Automaton Grizzly (Complete)"
                          },
                          {
                            "name": "Enemy ID",
                            "ID": 1013014,
                            "target": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            },
                            "characterName": "Automaton Grizzly (Complete)"
                          }
                        ]
                      },
                      {
                        "name": "Skill Name",
                        "skillName": "Skill02"
                      }
                    ]
                  },
                  {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "OR",
                        "conditionList": [
                          {
                            "name": "Enemy ID",
                            "ID": 1012020,
                            "target": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            },
                            "characterName": "Automaton Spider"
                          },
                          {
                            "name": "Enemy ID",
                            "ID": 1012021,
                            "target": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            },
                            "characterName": "Automaton Spider"
                          }
                        ]
                      },
                      {
                        "name": "Skill Name",
                        "skillName": "Skill02"
                      }
                    ]
                  }
                ]
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Enemy Team All}}"
                  },
                  "modifier": "Enemy_W1_Mecha_TeamBonus_AttackUp"
                }
              ]
            },
            {
              "name": "IF",
              "conditions": {
                "name": "OR",
                "conditionList": [
                  {
                    "name": "OR",
                    "conditionList": [
                      {
                        "name": "AND",
                        "conditionList": [
                          {
                            "name": "OR",
                            "conditionList": [
                              {
                                "name": "Enemy ID",
                                "ID": 1013020,
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Modifier Holder}}"
                                },
                                "characterName": "Automaton Direwolf"
                              },
                              {
                                "name": "Enemy ID",
                                "ID": 1013021,
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Modifier Holder}}"
                                },
                                "characterName": "Automaton Direwolf (Bug)"
                              },
                              {
                                "name": "Enemy ID",
                                "ID": 1013022,
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Modifier Holder}}"
                                },
                                "characterName": "Automaton Direwolf (Complete)"
                              },
                              {
                                "name": "Enemy ID",
                                "ID": 1013023,
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Modifier Holder}}"
                                },
                                "characterName": "Automaton Direwolf (Complete)"
                              }
                            ]
                          },
                          {
                            "name": "OR",
                            "conditionList": [
                              {
                                "name": "Skill Name",
                                "skillName": "Skill07"
                              },
                              {
                                "name": "Skill Name",
                                "skillName": "Skill12"
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "name": "AND",
                        "conditionList": [
                          {
                            "name": "OR",
                            "conditionList": [
                              {
                                "name": "Enemy ID",
                                "ID": 1013022,
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Modifier Holder}}"
                                },
                                "characterName": "Automaton Direwolf (Complete)"
                              },
                              {
                                "name": "Enemy ID",
                                "ID": 1013023,
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Modifier Holder}}"
                                },
                                "characterName": "Automaton Direwolf (Complete)"
                              }
                            ]
                          },
                          {
                            "name": "Skill Name",
                            "skillName": "Skill10"
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Enemy Team All}}"
                  },
                  "modifier": "Enemy_W1_Mecha_TeamBonus_SpeedUp"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "Enemy_W2_Abomi_TeamBonus_BuffUp",
      "stackType": "Replace",
      "execute": [
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
              "name": "IF",
              "conditions": {
                "name": "Compare: Monster Rank",
                "target": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}"
                },
                "compareType": "<",
                "value2": 3
              },
              "passed": [
                {
                  "name": "Stack Target Stat Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageAll</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (MDF_DamageUpRatio_PerLayer) || Variables[1] (MDF_Layer) || MUL || RETURN",
                    "displayLines": "(MDF_DamageUpRatio_PerLayer * MDF_Layer)",
                    "constants": [],
                    "variables": [
                      "MDF_DamageUpRatio_PerLayer",
                      "MDF_Layer"
                    ]
                  }
                },
                {
                  "name": "Stack Target Stat Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">HP%</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (STANDARDSPECIFIC_OBJECT_UNUSED_12) || Variables[1] (MDF_Layer) || MUL || RETURN",
                    "displayLines": "(STANDARDSPECIFIC_OBJECT_UNUSED_12 * MDF_Layer)",
                    "constants": [],
                    "variables": [
                      "STANDARDSPECIFIC_OBJECT_UNUSED_12",
                      "MDF_Layer"
                    ]
                  }
                }
              ],
              "failed": [
                {
                  "name": "Stack Target Stat Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageAll</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (STANDARDSPECIFIC_OBJECT_UNUSED_13) || Variables[1] (MDF_Layer) || MUL || RETURN",
                    "displayLines": "(STANDARDSPECIFIC_OBJECT_UNUSED_13 * MDF_Layer)",
                    "constants": [],
                    "variables": [
                      "STANDARDSPECIFIC_OBJECT_UNUSED_13",
                      "MDF_Layer"
                    ]
                  }
                },
                {
                  "name": "Stack Target Stat Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">HP%</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (STANDARDSPECIFIC_OBJECT_UNUSED_14) || Variables[1] (MDF_Layer) || MUL || RETURN",
                    "displayLines": "(STANDARDSPECIFIC_OBJECT_UNUSED_14 * MDF_Layer)",
                    "constants": [],
                    "variables": [
                      "STANDARDSPECIFIC_OBJECT_UNUSED_14",
                      "MDF_Layer"
                    ]
                  }
                }
              ]
            }
          ]
        }
      ],
      "addStacksPerTrigger": 1
    },
    {
      "name": "Modifier Construction",
      "for": "Enemy_W2_Abomi_TeamBonus_DeathRattle",
      "execute": [
        {
          "eventTrigger": "When Modifier Destroyed/Removed",
          "execute": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Modifier Holder's Team Members(Exclude Self)}}"
              },
              "modifier": "Enemy_W2_Abomi_TeamBonus_BuffUp"
            }
          ]
        },
        {
          "eventTrigger": "Injected Ability Use [Owner]: End",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Enemy ID",
                    "ID": 2022010,
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "characterName": "Mara-Struck Soldier"
                  }
                ]
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder's Team Members(Exclude Self)}}"
                  },
                  "modifier": "Enemy_W2_Abomi_TeamBonus_BuffUp"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "Enemy_W1_Soldier_TeamBonus_TeamSupport",
      "execute": [
        {
          "eventTrigger": "Action End [Owner]"
        },
        {
          "eventTrigger": "Deal Damage End [Owner]: Hit",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Compare: Monster Rank",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "compareType": ">=",
                    "value2": 3
                  }
                ]
              },
              "passed": [
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Targets Adjacent to Modifier Holder(v2)}}"
                  },
                  "searchRandom": true,
                  "conditions": {
                    "name": "Enemy ID",
                    "ID": 1002040,
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "characterName": "Silvermane Soldier"
                  },
                  "ifTargetFound": [
                    {
                      "name": "Trigger Ability",
                      "from": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "inherentTarget": {
                        "name": "Target Name",
                        "target": "{{Current Action Target List}}"
                      },
                      "ability": "Monster_W1_CWSoldier_01_Ability02_Part01",
                      "isTrigger": true
                    }
                  ]
                },
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Enemy Team All}}"
                  },
                  "searchRandom": true,
                  "conditions": {
                    "name": "Enemy ID",
                    "ID": 1002050,
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "characterName": "Silvermane Gunner"
                  },
                  "ifTargetFound": [
                    {
                      "name": "Trigger Ability",
                      "from": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "inherentTarget": {
                        "name": "Target Name",
                        "target": "{{Current Action Target List}}"
                      },
                      "ability": "Monster_W1_CWSoldier_02_Ability03_Part01",
                      "isTrigger": true
                    }
                  ]
                },
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Enemy Team All}}"
                  },
                  "searchRandom": true,
                  "conditions": {
                    "name": "Enemy ID",
                    "ID": 1002040,
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "characterName": "Silvermane Soldier"
                  },
                  "ifTargetFound": [
                    {
                      "name": "Trigger Ability",
                      "from": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "inherentTarget": {
                        "name": "Target Name",
                        "target": "{{Current Action Target List}}"
                      },
                      "ability": "Monster_W1_CWSoldier_01_Ability02_Part03",
                      "isTrigger": true
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "eventTrigger": "Attack Start [Owner]"
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "Enemy_WRSoldier_01_UnFeverResistance[<span class=\"descriptionNumberColor\">Helmet and Armor</span>]",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Stack Target Stat Value",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">ResistanceAll</span>&nbsp;",
              "value": {
                "operator": "Variables[0] (MDF_AllDamageTypeResistance) || RETURN",
                "displayLines": "MDF_AllDamageTypeResistance",
                "constants": [],
                "variables": [
                  "MDF_AllDamageTypeResistance"
                ]
              }
            }
          ]
        }
      ],
      "description": "Receives <span class=\"descriptionNumberColor\">MDF_AllDamageTypeResistance</span> less DMG. This effect is removed when Weakness is broken.",
      "type": "Buff",
      "effectName": "Helmet and Armor",
      "statusName": "Helmet and Armor"
    },
    {
      "name": "Modifier Construction",
      "for": "Boss_Cocolia_P2_Shield_Dark",
      "counter": 6,
      "lifeCyclePhaseAllowed": "ModifierPhase1End",
      "execute": [
        {
          "eventTrigger": "Take Damage End [Owner]: Hit",
          "execute": [
            {
              "name": "Define Modifier Variable",
              "modifierName": null,
              "function": "Add"
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
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">ResistanceAll</span>&nbsp;",
              "value": {
                "operator": "Variables[0] (MDF_Resistance) || RETURN",
                "displayLines": "MDF_Resistance",
                "constants": [],
                "variables": [
                  "MDF_Resistance"
                ]
              }
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "Boss_Cocolia_P2_Mirror_Bonus",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Stack Target Stat Value",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageAll</span>&nbsp;",
              "value": {
                "operator": "Variables[0] (ModifierDamageUpValue) || RETURN",
                "displayLines": "ModifierDamageUpValue",
                "constants": [],
                "variables": [
                  "ModifierDamageUpValue"
                ]
              }
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "Boss_Cocolia_P2_GlobalShield",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Create Shield",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "value": {
                "operator": "Variables[0] (Shield_HP) || RETURN",
                "displayLines": "Shield_HP",
                "constants": [],
                "variables": [
                  "Shield_HP"
                ]
              },
              "isGlobalShield": true
            }
          ]
        }
      ],
      "useEntitySnapshot": true
    },
    {
      "name": "Modifier Construction",
      "for": "Enemy_Gepard_IceCounter",
      "stackType": "Merge",
      "execute": [
        {
          "eventTrigger": "Receiving Heal End [Owner]",
          "execute": [
            {
              "name": "Define Modifier Variable",
              "modifierName": null,
              "function": "Add"
            }
          ]
        },
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Define Modifier Variable",
              "modifierName": null,
              "function": "Add",
              "value": 1
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "target": {
                  "name": "Target Name",
                  "target": "{{Modifier Holder}}"
                },
                "value1": null,
                "compareType": ">=",
                "value2": 4
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "Standard_CTRL_Frozen[<span class=\"descriptionNumberColor\">Frozen</span>]",
                  "duration": 1,
                  "valuePerStack": {
                    "Modifier_Frozen_DamagePercentage": {
                      "operator": "Variables[0] (MDF_IceCounter_Frozen_DamagePercentage) || RETURN",
                      "displayLines": "MDF_IceCounter_Frozen_DamagePercentage",
                      "constants": [],
                      "variables": [
                        "MDF_IceCounter_Frozen_DamagePercentage"
                      ]
                    }
                  }
                },
                "Modifier Deletes Itself"
              ]
            }
          ]
        },
        {
          "eventTrigger": "Ability Use [Owner]: End",
          "execute": [
            {
              "name": "Define Modifier Variable",
              "modifierName": null,
              "function": "Add"
            }
          ]
        }
      ]
    }
  ],
  "references": []
}