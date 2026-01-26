const compositeAbilityObject = {
  "fullCharacterName": "Silver Wolf_v0",
  "trimCharacterName": "SilverWolfv0",
  "abilityList": [
    "SilverWolfv0_Silwolf_Eidolon6",
    "SilverWolfv0_Silwolf_Eidolon2",
    "SilverWolfv0_Silwolf_Trace01",
    "SilverWolfv0_Silwolf_TechniqueInLevel",
    "SilverWolfv0_Silwolf_PassiveAbility_RandomBug",
    "SilverWolfv0_Silwolf_PassiveAbility01",
    "SilverWolfv0_Silwolf_Ability03_Part02",
    "SilverWolfv0_Silwolf_Ability03_Part01",
    "SilverWolfv0_Silwolf_Ability03_EnterReady",
    "SilverWolfv0_Silwolf_Ability02_Part02",
    "SilverWolfv0_Silwolf_Ability02_Part01",
    "SilverWolfv0_Silwolf_Ability01_Part02",
    "SilverWolfv0_Silwolf_Ability01_Part01",
    "SilverWolfv0_Modifiers"
  ],
  "abilityObject": {
    "SilverWolfv0_Silwolf_Eidolon6": {
      "fileName": "SilverWolfv0_Silwolf_Eidolon6",
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
          "modifier": "M_Silwolf_Eidolon6_Bonus"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "M_Silwolf_Eidolon6_Bonus",
          "execute": [
            {
              "eventTrigger": "Deal Damage Start [Owner]: Any",
              "execute": [
                {
                  "name": "Define Custom Variable with Status Counter",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Ability Target TAKING DMG}}"
                  },
                  "variableName": "_DebuffCount"
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_DamageAddedRatio",
                  "value": {
                    "operator": "Variables[0] (_DebuffCount) || Variables[1] (0.2) || MUL || RETURN",
                    "displayLines": "(_DebuffCount * 0.2)",
                    "constants": [],
                    "variables": [
                      "_DebuffCount",
                      0.2
                    ]
                  }
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "MDF_DamageAddedRatio",
                    "compareType": ">=",
                    "value2": {
                      "operator": "Variables[0] (1) || RETURN",
                      "displayLines": "1",
                      "constants": [],
                      "variables": [
                        1
                      ]
                    }
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "MDF_DamageAddedRatio",
                      "value": {
                        "operator": "Variables[0] (1) || RETURN",
                        "displayLines": "1",
                        "constants": [],
                        "variables": [
                          1
                        ]
                      }
                    }
                  ]
                },
                {
                  "name": "Adjust Target Stats",
                  "modifiedValuesArray": [
                    {
                      "on": "Attacker",
                      "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageAll</span>&nbsp;",
                      "value": "MDF_DamageAddedRatio"
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
    "SilverWolfv0_Silwolf_Eidolon2": {
      "fileName": "SilverWolfv0_Silwolf_Eidolon2",
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
          "modifier": "M_Silwolf_Eidolon2_Bonus"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "M_Silwolf_Eidolon2_Bonus_OnCharacterCreate",
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
                      "modifier": "Silwolf_Eidolon2_StatusResistanceDown[<span class=\"descriptionNumberColor\">Effect RES Reduction</span>]",
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
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "M_Silwolf_Eidolon2_Bonus",
          "execute": [
            {
              "eventTrigger": "Enter Battle",
              "execute": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Hostile Entities(AOE, with Unselectables)}}"
                  },
                  "modifier": "Silwolf_Eidolon2_StatusResistanceDown[<span class=\"descriptionNumberColor\">Effect RES Reduction</span>]",
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
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "M_Silwolf_Eidolon2_Bonus_OnCharacterCreate"
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
    "SilverWolfv0_Silwolf_Trace01": {
      "fileName": "SilverWolfv0_Silwolf_Trace01",
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
          "modifier": "M_Silwolf_Trace01_Bonus"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "M_Silwolf_Trace01_Bonus",
          "execute": [
            {
              "eventTrigger": "Weakness Break [Anyone]",
              "execute": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_Silwolf_00_AddModifier_Chance",
                  "value": {
                    "operator": "Variables[0] (1) || RETURN",
                    "displayLines": "1",
                    "constants": [],
                    "variables": [
                      1
                    ]
                  }
                },
                {
                  "name": "Trigger Ability",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "inherentTarget": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "ability": "Silwolf_PassiveAbility_RandomBug"
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": []
        }
      ]
    },
    "SilverWolfv0_Silwolf_TechniqueInLevel": {
      "fileName": "SilverWolfv0_Silwolf_TechniqueInLevel",
      "childAbilityList": [
        "SilverWolfv0_Silwolf_TechniqueInLevel"
      ],
      "skillTrigger": "SkillMaze",
      "abilityType": "Technique",
      "energy": null,
      "toughnessList": [
        20,
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
          "modifier": "StageAbility_Maze_Silwolf_Modifier"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "StageAbility_Maze_Silwolf_Modifier",
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
                        "name": "Technique Modifies Current Wave"
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
                      "name": "ATK Scaling DMG",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Hostile Entities(AOE)}}"
                      },
                      "canPhase": true,
                      "AttackScaling": {
                        "DamageType": "Quantum",
                        "Damage": {
                          "operator": "Variables[0] (0.8) || RETURN",
                          "displayLines": "0.8",
                          "constants": [],
                          "variables": [
                            0.8
                          ]
                        },
                        "Toughness": null,
                        "Tags": null,
                        "attackType": "Technique",
                        "EnergyGainPercent": "100%"
                      }
                    },
                    "Trigger: Attack End"
                  ]
                }
              ],
              "priorityLevel": -70
            }
          ],
          "stackData": [],
          "latentQueue": []
        }
      ]
    },
    "SilverWolfv0_Silwolf_PassiveAbility_RandomBug": {
      "fileName": "SilverWolfv0_Silwolf_PassiveAbility_RandomBug",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "IF",
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Ability Target(ST)}}"
            },
            "modifier": "Silwolf_Normal_Bug1[<span class=\"descriptionNumberColor\">Type-1 Bug</span>]"
          },
          "passed": [
            {
              "name": "IF",
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Ability Target(ST)}}"
                },
                "modifier": "Silwolf_Normal_Bug2[<span class=\"descriptionNumberColor\">Type-2 Bug</span>]"
              },
              "passed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Ability Target(ST)}}"
                    },
                    "modifier": "Silwolf_Normal_Bug3[<span class=\"descriptionNumberColor\">Type-3 Bug</span>]"
                  },
                  "passed": [
                    {
                      "name": "Random Event",
                      "odds": [
                        0.3333,
                        0.3333,
                        0.3334
                      ],
                      "execute": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Ability Target(ST)}}"
                          },
                          "modifier": "Silwolf_Normal_Bug1[<span class=\"descriptionNumberColor\">Type-1 Bug</span>]",
                          "duration": {
                            "operator": "Variables[0] (MDF_Silwolf_00_AddModifier_LifeTime) || RETURN",
                            "displayLines": "MDF_Silwolf_00_AddModifier_LifeTime",
                            "constants": [],
                            "variables": [
                              "MDF_Silwolf_00_AddModifier_LifeTime"
                            ]
                          },
                          "baseChance": {
                            "operator": "Variables[0] (MDF_Silwolf_00_AddModifier_Chance) || RETURN",
                            "displayLines": "MDF_Silwolf_00_AddModifier_Chance",
                            "constants": [],
                            "variables": [
                              "MDF_Silwolf_00_AddModifier_Chance"
                            ]
                          },
                          "valuePerStack": {
                            "MDF_PropertyValue": {
                              "operator": "Variables[0] (0.1) || RETURN",
                              "displayLines": "0.1",
                              "constants": [],
                              "variables": [
                                0.1
                              ]
                            }
                          }
                        },
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Ability Target(ST)}}"
                          },
                          "modifier": "Silwolf_Normal_Bug2[<span class=\"descriptionNumberColor\">Type-2 Bug</span>]",
                          "duration": {
                            "operator": "Variables[0] (MDF_Silwolf_00_AddModifier_LifeTime) || RETURN",
                            "displayLines": "MDF_Silwolf_00_AddModifier_LifeTime",
                            "constants": [],
                            "variables": [
                              "MDF_Silwolf_00_AddModifier_LifeTime"
                            ]
                          },
                          "baseChance": {
                            "operator": "Variables[0] (MDF_Silwolf_00_AddModifier_Chance) || RETURN",
                            "displayLines": "MDF_Silwolf_00_AddModifier_Chance",
                            "constants": [],
                            "variables": [
                              "MDF_Silwolf_00_AddModifier_Chance"
                            ]
                          },
                          "valuePerStack": {
                            "MDF_PropertyValue": {
                              "operator": "Variables[0] (0.08) || RETURN",
                              "displayLines": "0.08",
                              "constants": [],
                              "variables": [
                                0.08
                              ]
                            }
                          }
                        },
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Ability Target(ST)}}"
                          },
                          "modifier": "Silwolf_Normal_Bug3[<span class=\"descriptionNumberColor\">Type-3 Bug</span>]",
                          "duration": {
                            "operator": "Variables[0] (MDF_Silwolf_00_AddModifier_LifeTime) || RETURN",
                            "displayLines": "MDF_Silwolf_00_AddModifier_LifeTime",
                            "constants": [],
                            "variables": [
                              "MDF_Silwolf_00_AddModifier_LifeTime"
                            ]
                          },
                          "baseChance": {
                            "operator": "Variables[0] (MDF_Silwolf_00_AddModifier_Chance) || RETURN",
                            "displayLines": "MDF_Silwolf_00_AddModifier_Chance",
                            "constants": [],
                            "variables": [
                              "MDF_Silwolf_00_AddModifier_Chance"
                            ]
                          },
                          "valuePerStack": {
                            "MDF_PropertyValue": {
                              "operator": "Variables[0] (0.06) || RETURN",
                              "displayLines": "0.06",
                              "constants": [],
                              "variables": [
                                0.06
                              ]
                            }
                          }
                        }
                      ]
                    }
                  ],
                  "failed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Ability Target(ST)}}"
                      },
                      "modifier": "Silwolf_Normal_Bug3[<span class=\"descriptionNumberColor\">Type-3 Bug</span>]",
                      "duration": {
                        "operator": "Variables[0] (MDF_Silwolf_00_AddModifier_LifeTime) || RETURN",
                        "displayLines": "MDF_Silwolf_00_AddModifier_LifeTime",
                        "constants": [],
                        "variables": [
                          "MDF_Silwolf_00_AddModifier_LifeTime"
                        ]
                      },
                      "baseChance": {
                        "operator": "Variables[0] (MDF_Silwolf_00_AddModifier_Chance) || RETURN",
                        "displayLines": "MDF_Silwolf_00_AddModifier_Chance",
                        "constants": [],
                        "variables": [
                          "MDF_Silwolf_00_AddModifier_Chance"
                        ]
                      },
                      "valuePerStack": {
                        "MDF_PropertyValue": {
                          "operator": "Variables[0] (0.06) || RETURN",
                          "displayLines": "0.06",
                          "constants": [],
                          "variables": [
                            0.06
                          ]
                        }
                      }
                    }
                  ]
                }
              ],
              "failed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Ability Target(ST)}}"
                    },
                    "modifier": "Silwolf_Normal_Bug3[<span class=\"descriptionNumberColor\">Type-3 Bug</span>]"
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Ability Target(ST)}}"
                      },
                      "modifier": "Silwolf_Normal_Bug2[<span class=\"descriptionNumberColor\">Type-2 Bug</span>]",
                      "duration": {
                        "operator": "Variables[0] (MDF_Silwolf_00_AddModifier_LifeTime) || RETURN",
                        "displayLines": "MDF_Silwolf_00_AddModifier_LifeTime",
                        "constants": [],
                        "variables": [
                          "MDF_Silwolf_00_AddModifier_LifeTime"
                        ]
                      },
                      "baseChance": {
                        "operator": "Variables[0] (MDF_Silwolf_00_AddModifier_Chance) || RETURN",
                        "displayLines": "MDF_Silwolf_00_AddModifier_Chance",
                        "constants": [],
                        "variables": [
                          "MDF_Silwolf_00_AddModifier_Chance"
                        ]
                      },
                      "valuePerStack": {
                        "MDF_PropertyValue": {
                          "operator": "Variables[0] (0.08) || RETURN",
                          "displayLines": "0.08",
                          "constants": [],
                          "variables": [
                            0.08
                          ]
                        }
                      }
                    }
                  ],
                  "failed": [
                    {
                      "name": "Random Event",
                      "odds": [
                        0.5,
                        0.5
                      ],
                      "execute": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Ability Target(ST)}}"
                          },
                          "modifier": "Silwolf_Normal_Bug2[<span class=\"descriptionNumberColor\">Type-2 Bug</span>]",
                          "duration": {
                            "operator": "Variables[0] (MDF_Silwolf_00_AddModifier_LifeTime) || RETURN",
                            "displayLines": "MDF_Silwolf_00_AddModifier_LifeTime",
                            "constants": [],
                            "variables": [
                              "MDF_Silwolf_00_AddModifier_LifeTime"
                            ]
                          },
                          "baseChance": {
                            "operator": "Variables[0] (MDF_Silwolf_00_AddModifier_Chance) || RETURN",
                            "displayLines": "MDF_Silwolf_00_AddModifier_Chance",
                            "constants": [],
                            "variables": [
                              "MDF_Silwolf_00_AddModifier_Chance"
                            ]
                          },
                          "valuePerStack": {
                            "MDF_PropertyValue": {
                              "operator": "Variables[0] (0.08) || RETURN",
                              "displayLines": "0.08",
                              "constants": [],
                              "variables": [
                                0.08
                              ]
                            }
                          }
                        },
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Ability Target(ST)}}"
                          },
                          "modifier": "Silwolf_Normal_Bug3[<span class=\"descriptionNumberColor\">Type-3 Bug</span>]",
                          "duration": {
                            "operator": "Variables[0] (MDF_Silwolf_00_AddModifier_LifeTime) || RETURN",
                            "displayLines": "MDF_Silwolf_00_AddModifier_LifeTime",
                            "constants": [],
                            "variables": [
                              "MDF_Silwolf_00_AddModifier_LifeTime"
                            ]
                          },
                          "baseChance": {
                            "operator": "Variables[0] (MDF_Silwolf_00_AddModifier_Chance) || RETURN",
                            "displayLines": "MDF_Silwolf_00_AddModifier_Chance",
                            "constants": [],
                            "variables": [
                              "MDF_Silwolf_00_AddModifier_Chance"
                            ]
                          },
                          "valuePerStack": {
                            "MDF_PropertyValue": {
                              "operator": "Variables[0] (0.06) || RETURN",
                              "displayLines": "0.06",
                              "constants": [],
                              "variables": [
                                0.06
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
          "failed": [
            {
              "name": "IF",
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Ability Target(ST)}}"
                },
                "modifier": "Silwolf_Normal_Bug2[<span class=\"descriptionNumberColor\">Type-2 Bug</span>]"
              },
              "passed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Ability Target(ST)}}"
                    },
                    "modifier": "Silwolf_Normal_Bug3[<span class=\"descriptionNumberColor\">Type-3 Bug</span>]"
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Ability Target(ST)}}"
                      },
                      "modifier": "Silwolf_Normal_Bug1[<span class=\"descriptionNumberColor\">Type-1 Bug</span>]",
                      "duration": {
                        "operator": "Variables[0] (MDF_Silwolf_00_AddModifier_LifeTime) || RETURN",
                        "displayLines": "MDF_Silwolf_00_AddModifier_LifeTime",
                        "constants": [],
                        "variables": [
                          "MDF_Silwolf_00_AddModifier_LifeTime"
                        ]
                      },
                      "baseChance": {
                        "operator": "Variables[0] (MDF_Silwolf_00_AddModifier_Chance) || RETURN",
                        "displayLines": "MDF_Silwolf_00_AddModifier_Chance",
                        "constants": [],
                        "variables": [
                          "MDF_Silwolf_00_AddModifier_Chance"
                        ]
                      },
                      "valuePerStack": {
                        "MDF_PropertyValue": {
                          "operator": "Variables[0] (0.1) || RETURN",
                          "displayLines": "0.1",
                          "constants": [],
                          "variables": [
                            0.1
                          ]
                        }
                      }
                    }
                  ],
                  "failed": [
                    {
                      "name": "Random Event",
                      "odds": [
                        0.5,
                        0.5
                      ],
                      "execute": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Ability Target(ST)}}"
                          },
                          "modifier": "Silwolf_Normal_Bug1[<span class=\"descriptionNumberColor\">Type-1 Bug</span>]",
                          "duration": {
                            "operator": "Variables[0] (MDF_Silwolf_00_AddModifier_LifeTime) || RETURN",
                            "displayLines": "MDF_Silwolf_00_AddModifier_LifeTime",
                            "constants": [],
                            "variables": [
                              "MDF_Silwolf_00_AddModifier_LifeTime"
                            ]
                          },
                          "baseChance": {
                            "operator": "Variables[0] (MDF_Silwolf_00_AddModifier_Chance) || RETURN",
                            "displayLines": "MDF_Silwolf_00_AddModifier_Chance",
                            "constants": [],
                            "variables": [
                              "MDF_Silwolf_00_AddModifier_Chance"
                            ]
                          },
                          "valuePerStack": {
                            "MDF_PropertyValue": {
                              "operator": "Variables[0] (0.1) || RETURN",
                              "displayLines": "0.1",
                              "constants": [],
                              "variables": [
                                0.1
                              ]
                            }
                          }
                        },
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Ability Target(ST)}}"
                          },
                          "modifier": "Silwolf_Normal_Bug3[<span class=\"descriptionNumberColor\">Type-3 Bug</span>]",
                          "duration": {
                            "operator": "Variables[0] (MDF_Silwolf_00_AddModifier_LifeTime) || RETURN",
                            "displayLines": "MDF_Silwolf_00_AddModifier_LifeTime",
                            "constants": [],
                            "variables": [
                              "MDF_Silwolf_00_AddModifier_LifeTime"
                            ]
                          },
                          "baseChance": {
                            "operator": "Variables[0] (MDF_Silwolf_00_AddModifier_Chance) || RETURN",
                            "displayLines": "MDF_Silwolf_00_AddModifier_Chance",
                            "constants": [],
                            "variables": [
                              "MDF_Silwolf_00_AddModifier_Chance"
                            ]
                          },
                          "valuePerStack": {
                            "MDF_PropertyValue": {
                              "operator": "Variables[0] (0.06) || RETURN",
                              "displayLines": "0.06",
                              "constants": [],
                              "variables": [
                                0.06
                              ]
                            }
                          }
                        }
                      ]
                    }
                  ]
                }
              ],
              "failed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Ability Target(ST)}}"
                    },
                    "modifier": "Silwolf_Normal_Bug3[<span class=\"descriptionNumberColor\">Type-3 Bug</span>]"
                  },
                  "passed": [
                    {
                      "name": "Random Event",
                      "odds": [
                        0.5,
                        0.5
                      ],
                      "execute": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Ability Target(ST)}}"
                          },
                          "modifier": "Silwolf_Normal_Bug1[<span class=\"descriptionNumberColor\">Type-1 Bug</span>]",
                          "duration": {
                            "operator": "Variables[0] (MDF_Silwolf_00_AddModifier_LifeTime) || RETURN",
                            "displayLines": "MDF_Silwolf_00_AddModifier_LifeTime",
                            "constants": [],
                            "variables": [
                              "MDF_Silwolf_00_AddModifier_LifeTime"
                            ]
                          },
                          "baseChance": {
                            "operator": "Variables[0] (MDF_Silwolf_00_AddModifier_Chance) || RETURN",
                            "displayLines": "MDF_Silwolf_00_AddModifier_Chance",
                            "constants": [],
                            "variables": [
                              "MDF_Silwolf_00_AddModifier_Chance"
                            ]
                          },
                          "valuePerStack": {
                            "MDF_PropertyValue": {
                              "operator": "Variables[0] (0.1) || RETURN",
                              "displayLines": "0.1",
                              "constants": [],
                              "variables": [
                                0.1
                              ]
                            }
                          }
                        },
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Ability Target(ST)}}"
                          },
                          "modifier": "Silwolf_Normal_Bug2[<span class=\"descriptionNumberColor\">Type-2 Bug</span>]",
                          "duration": {
                            "operator": "Variables[0] (MDF_Silwolf_00_AddModifier_LifeTime) || RETURN",
                            "displayLines": "MDF_Silwolf_00_AddModifier_LifeTime",
                            "constants": [],
                            "variables": [
                              "MDF_Silwolf_00_AddModifier_LifeTime"
                            ]
                          },
                          "baseChance": {
                            "operator": "Variables[0] (MDF_Silwolf_00_AddModifier_Chance) || RETURN",
                            "displayLines": "MDF_Silwolf_00_AddModifier_Chance",
                            "constants": [],
                            "variables": [
                              "MDF_Silwolf_00_AddModifier_Chance"
                            ]
                          },
                          "valuePerStack": {
                            "MDF_PropertyValue": {
                              "operator": "Variables[0] (0.08) || RETURN",
                              "displayLines": "0.08",
                              "constants": [],
                              "variables": [
                                0.08
                              ]
                            }
                          }
                        }
                      ]
                    }
                  ],
                  "failed": [
                    {
                      "name": "Random Event",
                      "odds": [
                        0.3333,
                        0.3333,
                        0.3334
                      ],
                      "execute": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Ability Target(ST)}}"
                          },
                          "modifier": "Silwolf_Normal_Bug1[<span class=\"descriptionNumberColor\">Type-1 Bug</span>]",
                          "duration": {
                            "operator": "Variables[0] (MDF_Silwolf_00_AddModifier_LifeTime) || RETURN",
                            "displayLines": "MDF_Silwolf_00_AddModifier_LifeTime",
                            "constants": [],
                            "variables": [
                              "MDF_Silwolf_00_AddModifier_LifeTime"
                            ]
                          },
                          "baseChance": {
                            "operator": "Variables[0] (MDF_Silwolf_00_AddModifier_Chance) || RETURN",
                            "displayLines": "MDF_Silwolf_00_AddModifier_Chance",
                            "constants": [],
                            "variables": [
                              "MDF_Silwolf_00_AddModifier_Chance"
                            ]
                          },
                          "valuePerStack": {
                            "MDF_PropertyValue": {
                              "operator": "Variables[0] (0.1) || RETURN",
                              "displayLines": "0.1",
                              "constants": [],
                              "variables": [
                                0.1
                              ]
                            }
                          }
                        },
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Ability Target(ST)}}"
                          },
                          "modifier": "Silwolf_Normal_Bug2[<span class=\"descriptionNumberColor\">Type-2 Bug</span>]",
                          "duration": {
                            "operator": "Variables[0] (MDF_Silwolf_00_AddModifier_LifeTime) || RETURN",
                            "displayLines": "MDF_Silwolf_00_AddModifier_LifeTime",
                            "constants": [],
                            "variables": [
                              "MDF_Silwolf_00_AddModifier_LifeTime"
                            ]
                          },
                          "baseChance": {
                            "operator": "Variables[0] (MDF_Silwolf_00_AddModifier_Chance) || RETURN",
                            "displayLines": "MDF_Silwolf_00_AddModifier_Chance",
                            "constants": [],
                            "variables": [
                              "MDF_Silwolf_00_AddModifier_Chance"
                            ]
                          },
                          "valuePerStack": {
                            "MDF_PropertyValue": {
                              "operator": "Variables[0] (0.08) || RETURN",
                              "displayLines": "0.08",
                              "constants": [],
                              "variables": [
                                0.08
                              ]
                            }
                          }
                        },
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Ability Target(ST)}}"
                          },
                          "modifier": "Silwolf_Normal_Bug3[<span class=\"descriptionNumberColor\">Type-3 Bug</span>]",
                          "duration": {
                            "operator": "Variables[0] (MDF_Silwolf_00_AddModifier_LifeTime) || RETURN",
                            "displayLines": "MDF_Silwolf_00_AddModifier_LifeTime",
                            "constants": [],
                            "variables": [
                              "MDF_Silwolf_00_AddModifier_LifeTime"
                            ]
                          },
                          "baseChance": {
                            "operator": "Variables[0] (MDF_Silwolf_00_AddModifier_Chance) || RETURN",
                            "displayLines": "MDF_Silwolf_00_AddModifier_Chance",
                            "constants": [],
                            "variables": [
                              "MDF_Silwolf_00_AddModifier_Chance"
                            ]
                          },
                          "valuePerStack": {
                            "MDF_PropertyValue": {
                              "operator": "Variables[0] (0.06) || RETURN",
                              "displayLines": "0.06",
                              "constants": [],
                              "variables": [
                                0.06
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
          ]
        }
      ],
      "references": []
    },
    "SilverWolfv0_Silwolf_PassiveAbility01": {
      "fileName": "SilverWolfv0_Silwolf_PassiveAbility01",
      "childAbilityList": [
        "SilverWolfv0_Silwolf_PassiveAbility01"
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
          "modifier": "M_SilverWolf_Passive"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Trace Activated",
            "conditionList": "Generate"
          },
          "passed": [
            {
              "name": "Define Custom Variable",
              "variableName": "MDF_Silwolf_00_AddModifier_LifeTime",
              "value": {
                "operator": "Variables[0] (3) || Variables[1] (1) || ADD || RETURN",
                "displayLines": "(3 + 1)",
                "constants": [],
                "variables": [
                  3,
                  1
                ]
              }
            }
          ],
          "failed": [
            {
              "name": "Define Custom Variable",
              "variableName": "MDF_Silwolf_00_AddModifier_LifeTime",
              "value": {
                "operator": "Variables[0] (3) || RETURN",
                "displayLines": "3",
                "constants": [],
                "variables": [
                  3
                ]
              }
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Eidolon Activated",
            "eidolon": 1
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "Silwolf_Eidolon1"
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
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "Silwolf_Eidolon4"
            }
          ]
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "Silwolf_Eidolon4",
          "stackType": "ReplaceByCaster",
          "execute": [
            {
              "eventTrigger": "Attack DMG End [Owner]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Skill Type",
                    "skillType": "Ultimate"
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable with Status Counter",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Ability Attack Targets}}"
                      },
                      "variableName": "_DebuffCountForRank04"
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
          "for": "Silwolf_Eidolon1",
          "stackType": "ReplaceByCaster",
          "execute": [
            {
              "eventTrigger": "Attack DMG End [Owner]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Skill Type",
                    "skillType": "Ultimate"
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable with Status Counter",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Ability Attack Targets}}"
                      },
                      "variableName": "_DebuffCountForRank01"
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
          "for": "M_SilverWolf_Passive",
          "stackType": "ReplaceByCaster",
          "execute": [
            {
              "eventTrigger": "Attack DMG End [Owner]",
              "execute": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_Silwolf_00_AddModifier_Chance",
                  "value": {
                    "operator": "Variables[0] (0.72) || RETURN",
                    "displayLines": "0.72",
                    "constants": [],
                    "variables": [
                      0.72
                    ]
                  }
                },
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Ability Attack Targets}}"
                  },
                  "maxTargets": 10,
                  "ifTargetFound": [
                    {
                      "name": "Trigger Ability",
                      "from": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "inherentTarget": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "ability": "Silwolf_PassiveAbility_RandomBug"
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
    "SilverWolfv0_Silwolf_Ability03_Part02": {
      "fileName": "SilverWolfv0_Silwolf_Ability03_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Looped Event",
          "maxLoops": 8,
          "Event": []
        },
        {
          "name": "Looped Event",
          "maxLoops": 8,
          "Event": []
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "modifier": "Silwolf_Ultimate_DefenceRatioDown[<span class=\"descriptionNumberColor\">DEF Reduction</span>]",
          "duration": {
            "operator": "Variables[0] (3) || RETURN",
            "displayLines": "3",
            "constants": [],
            "variables": [
              3
            ]
          },
          "baseChance": {
            "operator": "Variables[0] (1) || RETURN",
            "displayLines": "1",
            "constants": [],
            "variables": [
              1
            ]
          },
          "immediateEffect": true,
          "valuePerStack": {
            "MDF_PropertyValue": {
              "operator": "Variables[0] (0.45) || RETURN",
              "displayLines": "0.45",
              "constants": [],
              "variables": [
                0.45
              ]
            }
          }
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "canPhase": true,
          "AttackScaling": {
            "DamageType": "Quantum",
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
            "EnergyGainPercent": "100%"
          }
        },
        "Trigger: Attack End",
        {
          "name": "IF",
          "conditions": {
            "name": "Eidolon Activated",
            "eidolon": 4
          },
          "passed": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "_DebuffCountForRank04",
                "compareType": ">=",
                "value2": {
                  "operator": "Variables[0] (5) || RETURN",
                  "displayLines": "5",
                  "constants": [],
                  "variables": [
                    5
                  ]
                }
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "_DebuffCountForRank04",
                  "value": {
                    "operator": "Variables[0] (5) || RETURN",
                    "displayLines": "5",
                    "constants": [],
                    "variables": [
                      5
                    ]
                  }
                }
              ]
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "_DebuffCountForRank04",
                "compareType": ">=",
                "value2": 1
              },
              "passed": [
                {
                  "name": "Looped Event",
                  "maxLoops": {
                    "operator": "Variables[0] (_DebuffCountForRank04) || RETURN",
                    "displayLines": "_DebuffCountForRank04",
                    "constants": [],
                    "variables": [
                      "_DebuffCountForRank04"
                    ]
                  },
                  "Event": [
                    {
                      "name": "ATK Scaling DMG",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Ability Target(ST)}}"
                      },
                      "canPhase": true,
                      "AttackScaling": {
                        "DamageType": "Quantum",
                        "Damage": {
                          "operator": "Variables[0] (0.2) || RETURN",
                          "displayLines": "0.2",
                          "constants": [],
                          "variables": [
                            0.2
                          ]
                        },
                        "Toughness": null,
                        "Tags": null,
                        "attackType": "Additional DMG"
                      }
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Eidolon Activated",
            "eidolon": 1
          },
          "passed": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "_DebuffCountForRank01",
                "compareType": ">=",
                "value2": {
                  "operator": "Variables[0] (5) || RETURN",
                  "displayLines": "5",
                  "constants": [],
                  "variables": [
                    5
                  ]
                }
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "_DebuffCountForRank01",
                  "value": {
                    "operator": "Variables[0] (5) || RETURN",
                    "displayLines": "5",
                    "constants": [],
                    "variables": [
                      5
                    ]
                  }
                }
              ]
            },
            {
              "name": "Update Energy",
              "on": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "value": {
                "operator": "Variables[0] (7) || Variables[1] (_DebuffCountForRank01) || MUL || RETURN",
                "displayLines": "(7 * _DebuffCountForRank01)",
                "constants": [],
                "variables": [
                  7,
                  "_DebuffCountForRank01"
                ]
              },
              "isFixed": "* ERR"
            }
          ]
        },
        "Trigger: Skip Death Handling",
        "Trigger: Ability End"
      ],
      "references": []
    },
    "SilverWolfv0_Silwolf_Ability03_Part01": {
      "fileName": "SilverWolfv0_Silwolf_Ability03_Part01",
      "childAbilityList": [
        "SilverWolfv0_Silwolf_Ability03_Camera",
        "SilverWolfv0_Silwolf_Ability03_EnterReady",
        "SilverWolfv0_Silwolf_Ability03_Part01",
        "SilverWolfv0_Silwolf_Ability03_Part02"
      ],
      "skillTrigger": "Skill03",
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
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "ability": "Silwolf_Ability03_Part02",
          "isTrigger": true
        }
      ],
      "references": []
    },
    "SilverWolfv0_Silwolf_Ability03_EnterReady": {
      "fileName": "SilverWolfv0_Silwolf_Ability03_EnterReady",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "references": []
    },
    "SilverWolfv0_Silwolf_Ability02_Part02": {
      "fileName": "SilverWolfv0_Silwolf_Ability02_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Define Custom Variable with Status Counter",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "variableName": "_DebuffCount"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "AND",
            "conditionList": [
              {
                "name": "Trace Activated",
                "conditionList": "Side Note"
              },
              {
                "name": "Compare: Variable",
                "value1": "_DebuffCount",
                "compareType": ">=",
                "value2": {
                  "operator": "Variables[0] (0.1) || RETURN",
                  "displayLines": "0.1",
                  "constants": [],
                  "variables": [
                    0.1
                  ]
                }
              }
            ]
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Ability Target(ST)}}"
              },
              "modifier": "Silwolf_BPAbility_AllDamageTypeResistanceDown[<span class=\"descriptionNumberColor\">All-Type RES Reduction</span>]",
              "duration": {
                "operator": "Variables[0] (2) || RETURN",
                "displayLines": "2",
                "constants": [],
                "variables": [
                  2
                ]
              },
              "baseChance": {
                "operator": "Variables[0] (1) || RETURN",
                "displayLines": "1",
                "constants": [],
                "variables": [
                  1
                ]
              },
              "valuePerStack": {
                "MDF_PropertyValue": {
                  "operator": "Variables[0] (0.1) || Variables[1] (0.1) || ADD || RETURN",
                  "displayLines": "(0.1 + 0.1)",
                  "constants": [],
                  "variables": [
                    0.1,
                    0.1
                  ]
                }
              }
            }
          ],
          "failed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Ability Target(ST)}}"
              },
              "modifier": "Silwolf_BPAbility_AllDamageTypeResistanceDown[<span class=\"descriptionNumberColor\">All-Type RES Reduction</span>]",
              "duration": {
                "operator": "Variables[0] (2) || RETURN",
                "displayLines": "2",
                "constants": [],
                "variables": [
                  2
                ]
              },
              "baseChance": {
                "operator": "Variables[0] (1) || RETURN",
                "displayLines": "1",
                "constants": [],
                "variables": [
                  1
                ]
              },
              "valuePerStack": {
                "MDF_PropertyValue": {
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
          "name": "IF",
          "conditions": {
            "name": "Trace Activated",
            "conditionList": "Inject"
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Ability Target(ST)}}"
              },
              "modifier": "Silwolf_BPAbility_WeakType[<span class=\"descriptionNumberColor\">Extra Weakness</span>]",
              "duration": {
                "operator": "Variables[0] (2) || Variables[1] (20) || ADD || RETURN",
                "displayLines": "(2 + 20)",
                "constants": [],
                "variables": [
                  2,
                  20
                ]
              },
              "baseChance": {
                "operator": "Variables[0] (0.85) || RETURN",
                "displayLines": "0.85",
                "constants": [],
                "variables": [
                  0.85
                ]
              },
              "valuePerStack": {
                "MDF_PropertyValue": {
                  "operator": "Variables[0] (0.2) || RETURN",
                  "displayLines": "0.2",
                  "constants": [],
                  "variables": [
                    0.2
                  ]
                }
              },
              "success": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "_BPFlag",
                  "value": 0
                }
              ],
              "failed": []
            }
          ],
          "failed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Ability Target(ST)}}"
              },
              "modifier": "Silwolf_BPAbility_WeakType[<span class=\"descriptionNumberColor\">Extra Weakness</span>]",
              "duration": {
                "operator": "Variables[0] (2) || RETURN",
                "displayLines": "2",
                "constants": [],
                "variables": [
                  2
                ]
              },
              "baseChance": {
                "operator": "Variables[0] (0.85) || RETURN",
                "displayLines": "0.85",
                "constants": [],
                "variables": [
                  0.85
                ]
              },
              "valuePerStack": {
                "MDF_PropertyValue": {
                  "operator": "Variables[0] (0.2) || RETURN",
                  "displayLines": "0.2",
                  "constants": [],
                  "variables": [
                    0.2
                  ]
                }
              },
              "success": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "_BPFlag",
                  "value": 0
                }
              ],
              "failed": []
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "_BPFlag",
            "compareType": "=",
            "value2": 0
          },
          "passed": [
            {
              "name": "Use Custom Character Function",
              "functionName": "Silwolf_Ability02_Success"
            }
          ],
          "failed": [
            {
              "name": "Use Custom Character Function",
              "functionName": "Silwolf_Ability02_Failed"
            }
          ]
        }
      ],
      "functions": [
        {
          "name": "CharacterFunctions",
          "functionName": "Silwolf_Ability02_Success",
          "parse": [
            "Deleted bullshit",
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "Avatar_Silwolf_00_BPSkill_WeakType_01",
                "compareType": "=",
                "value2": 1
              }
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "Avatar_Silwolf_00_BPSkill_WeakType_01",
                "compareType": "=",
                "value2": 2
              }
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "Avatar_Silwolf_00_BPSkill_WeakType_01",
                "compareType": "=",
                "value2": 4
              }
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "Avatar_Silwolf_00_BPSkill_WeakType_01",
                "compareType": "=",
                "value2": 8
              }
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "Avatar_Silwolf_00_BPSkill_WeakType_01",
                "compareType": "=",
                "value2": 16
              }
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "Avatar_Silwolf_00_BPSkill_WeakType_01",
                "compareType": "=",
                "value2": 32
              }
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "Avatar_Silwolf_00_BPSkill_WeakType_01",
                "compareType": "=",
                "value2": 64
              }
            },
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Ability Target(ST)}}"
              },
              "canPhase": true,
              "AttackScaling": {
                "DamageType": "Quantum",
                "Damage": {
                  "operator": "Variables[0] (1.96) || RETURN",
                  "displayLines": "1.96",
                  "constants": [],
                  "variables": [
                    1.96
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
                "attackType": "Skill",
                "EnergyGainPercent": "100%"
              }
            },
            "Trigger: Attack End",
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "Avatar_Silwolf_00_BPSkill_WeakType_01",
                "compareType": "=",
                "value2": 1
              },
              "passed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Ability Target(ST)}}"
                    },
                    "modifier": "Silwolf_BPAbility_WeakType[<span class=\"descriptionNumberColor\">Extra Weakness</span>]"
                  },
                  "passed": [
                    {
                      "name": "UI Display Event (On Entity)",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Ability Target(ST)}}"
                      },
                      "popUpText": "Implant Weakness: Physical"
                    }
                  ],
                  "failed": [
                    {
                      "name": "UI Display Event (On Entity)",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Ability Target(ST)}}"
                      },
                      "popUpText": "Weakness Repeated",
                      "living": true
                    }
                  ]
                }
              ]
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "Avatar_Silwolf_00_BPSkill_WeakType_01",
                "compareType": "=",
                "value2": 2
              },
              "passed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Ability Target(ST)}}"
                    },
                    "modifier": "Silwolf_BPAbility_WeakType[<span class=\"descriptionNumberColor\">Extra Weakness</span>]"
                  },
                  "passed": [
                    {
                      "name": "UI Display Event (On Entity)",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Ability Target(ST)}}"
                      },
                      "popUpText": "Implant Weakness: Fire"
                    }
                  ],
                  "failed": [
                    {
                      "name": "UI Display Event (On Entity)",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Ability Target(ST)}}"
                      },
                      "popUpText": "Weakness Repeated",
                      "living": true
                    }
                  ]
                }
              ]
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "Avatar_Silwolf_00_BPSkill_WeakType_01",
                "compareType": "=",
                "value2": 4
              },
              "passed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Ability Target(ST)}}"
                    },
                    "modifier": "Silwolf_BPAbility_WeakType[<span class=\"descriptionNumberColor\">Extra Weakness</span>]"
                  },
                  "passed": [
                    {
                      "name": "UI Display Event (On Entity)",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Ability Target(ST)}}"
                      },
                      "popUpText": "Implant Weakness: Ice"
                    }
                  ],
                  "failed": [
                    {
                      "name": "UI Display Event (On Entity)",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Ability Target(ST)}}"
                      },
                      "popUpText": "Weakness Repeated",
                      "living": true
                    }
                  ]
                }
              ]
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "Avatar_Silwolf_00_BPSkill_WeakType_01",
                "compareType": "=",
                "value2": 8
              },
              "passed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Ability Target(ST)}}"
                    },
                    "modifier": "Silwolf_BPAbility_WeakType[<span class=\"descriptionNumberColor\">Extra Weakness</span>]"
                  },
                  "passed": [
                    {
                      "name": "UI Display Event (On Entity)",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Ability Target(ST)}}"
                      },
                      "popUpText": "Implant Weakness: Lightning"
                    }
                  ],
                  "failed": [
                    {
                      "name": "UI Display Event (On Entity)",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Ability Target(ST)}}"
                      },
                      "popUpText": "Weakness Repeated",
                      "living": true
                    }
                  ]
                }
              ]
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "Avatar_Silwolf_00_BPSkill_WeakType_01",
                "compareType": "=",
                "value2": 16
              },
              "passed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Ability Target(ST)}}"
                    },
                    "modifier": "Silwolf_BPAbility_WeakType[<span class=\"descriptionNumberColor\">Extra Weakness</span>]"
                  },
                  "passed": [
                    {
                      "name": "UI Display Event (On Entity)",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Ability Target(ST)}}"
                      },
                      "popUpText": "Implant Weakness: Wind"
                    }
                  ],
                  "failed": [
                    {
                      "name": "UI Display Event (On Entity)",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Ability Target(ST)}}"
                      },
                      "popUpText": "Weakness Repeated",
                      "living": true
                    }
                  ]
                }
              ]
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "Avatar_Silwolf_00_BPSkill_WeakType_01",
                "compareType": "=",
                "value2": 32
              },
              "passed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Ability Target(ST)}}"
                    },
                    "modifier": "Silwolf_BPAbility_WeakType[<span class=\"descriptionNumberColor\">Extra Weakness</span>]"
                  },
                  "passed": [
                    {
                      "name": "UI Display Event (On Entity)",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Ability Target(ST)}}"
                      },
                      "popUpText": "Implant Weakness: Quantum"
                    }
                  ],
                  "failed": [
                    {
                      "name": "UI Display Event (On Entity)",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Ability Target(ST)}}"
                      },
                      "popUpText": "Weakness Repeated",
                      "living": true
                    }
                  ]
                }
              ]
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "Avatar_Silwolf_00_BPSkill_WeakType_01",
                "compareType": "=",
                "value2": 64
              },
              "passed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Ability Target(ST)}}"
                    },
                    "modifier": "Silwolf_BPAbility_WeakType[<span class=\"descriptionNumberColor\">Extra Weakness</span>]"
                  },
                  "passed": [
                    {
                      "name": "UI Display Event (On Entity)",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Ability Target(ST)}}"
                      },
                      "popUpText": "Implant Weakness: Imaginary"
                    }
                  ],
                  "failed": [
                    {
                      "name": "UI Display Event (On Entity)",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Ability Target(ST)}}"
                      },
                      "popUpText": "Weakness Repeated",
                      "living": true
                    }
                  ]
                }
              ]
            },
            "Trigger: Ability End"
          ]
        },
        {
          "name": "CharacterFunctions",
          "functionName": "Silwolf_Ability02_Failed",
          "parse": [
            "Deleted bullshit",
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Ability Target(ST)}}"
              },
              "canPhase": true,
              "AttackScaling": {
                "DamageType": "Quantum",
                "Damage": {
                  "operator": "Variables[0] (1.96) || RETURN",
                  "displayLines": "1.96",
                  "constants": [],
                  "variables": [
                    1.96
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
            "Trigger: Attack End",
            "Trigger: Ability End"
          ]
        }
      ],
      "references": []
    },
    "SilverWolfv0_Silwolf_Ability02_Part01": {
      "fileName": "SilverWolfv0_Silwolf_Ability02_Part01",
      "childAbilityList": [
        "SilverWolfv0_Silwolf_Ability02_Camera",
        "SilverWolfv0_Silwolf_Ability02_Part01",
        "SilverWolfv0_Silwolf_Ability02_Part02",
        "SilverWolfv0_Silwolf_Ability02_Success_Camera",
        "SilverWolfv0_Silwolf_Ability02_Failed_Camera"
      ],
      "skillTrigger": "Skill02",
      "abilityType": "Skill",
      "energy": 30,
      "toughnessList": [
        20,
        0,
        0
      ],
      "parse": [
        "Deleted bullshit",
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "ability": "Silwolf_Ability02_Part02",
          "isTrigger": true
        }
      ],
      "references": []
    },
    "SilverWolfv0_Silwolf_Ability01_Part02": {
      "fileName": "SilverWolfv0_Silwolf_Ability01_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "AttackScaling": {
            "DamageType": "Quantum",
            "Damage": {
              "operator": "Variables[0] (1) || RETURN",
              "displayLines": "1",
              "constants": [],
              "variables": [
                1
              ]
            },
            "HitSplit": 0.25,
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
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "canPhase": true,
          "AttackScaling": {
            "DamageType": "Quantum",
            "Damage": {
              "operator": "Variables[0] (1) || RETURN",
              "displayLines": "1",
              "constants": [],
              "variables": [
                1
              ]
            },
            "HitSplit": 0.25,
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
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "canPhase": true,
          "AttackScaling": {
            "DamageType": "Quantum",
            "Damage": {
              "operator": "Variables[0] (1) || RETURN",
              "displayLines": "1",
              "constants": [],
              "variables": [
                1
              ]
            },
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
            "attackType": "Basic ATK",
            "EnergyGainPercent": "100%"
          }
        },
        "Trigger: Attack End",
        "Trigger: Ability End"
      ],
      "references": []
    },
    "SilverWolfv0_Silwolf_Ability01_Part01": {
      "fileName": "SilverWolfv0_Silwolf_Ability01_Part01",
      "childAbilityList": [
        "SilverWolfv0_Silwolf_Ability01_Camera",
        "SilverWolfv0_Silwolf_Ability01_Part01",
        "SilverWolfv0_Silwolf_Ability01_Part02",
        "SilverWolfv0_Silwolf_PassiveAbility_RandomBug"
      ],
      "skillTrigger": "Skill01",
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
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "ability": "Silwolf_Ability01_Part02",
          "isTrigger": true
        }
      ],
      "references": []
    },
    "SilverWolfv0_Modifiers": {
      "fileName": "SilverWolfv0_Modifiers",
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
          "for": "Silwolf_Ultimate_DefenceRatioDown[<span class=\"descriptionNumberColor\">DEF Reduction</span>]",
          "stackType": "ReplaceByCaster",
          "lifeCyclePhaseAllowed": "ModifierPhase1End",
          "modifierFlags": [
            "STAT_DefenceDown"
          ],
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
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">DEF%</span>&nbsp;",
                  "value": {
                    "operator": "Constants[0] (0) || Variables[0] (MDF_PropertyValue) || SUB || RETURN",
                    "displayLines": "(0 - MDF_PropertyValue)",
                    "constants": [
                      0
                    ],
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
          "latentQueue": [],
          "description": "DEF -<span class=\"descriptionNumberColor\">MDF_PropertyValue</span>.",
          "type": "Debuff",
          "effectName": "DEF Reduction",
          "statusName": "DEF Reduction"
        },
        {
          "name": "Modifier Construction",
          "for": "Silwolf_Eidolon2_StatusResistanceDown[<span class=\"descriptionNumberColor\">Effect RES Reduction</span>]",
          "lifeCyclePhaseAllowed": "ModifierPhase1End",
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
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">EffectRES</span>&nbsp;",
                  "value": {
                    "operator": "Constants[0] (0) || Variables[0] (MDF_PropertyValue) || SUB || RETURN",
                    "displayLines": "(0 - MDF_PropertyValue)",
                    "constants": [
                      0
                    ],
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
          "latentQueue": [],
          "description": "Effect RES -<span class=\"descriptionNumberColor\">MDF_PropertyValue</span>.",
          "type": "Debuff",
          "effectName": "Effect RES Reduction",
          "statusName": "Effect RES Reduction"
        },
        {
          "name": "Modifier Construction",
          "for": "Silwolf_BPAbility_AllDamageTypeResistanceDown[<span class=\"descriptionNumberColor\">All-Type RES Reduction</span>]",
          "stackType": "ReplaceByCaster",
          "lifeCyclePhaseAllowed": "ModifierPhase1End",
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
                    "operator": "Constants[0] (0) || Variables[0] (MDF_PropertyValue) || SUB || RETURN",
                    "displayLines": "(0 - MDF_PropertyValue)",
                    "constants": [
                      0
                    ],
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
          "latentQueue": [],
          "description": "All-Type DMG RES -<span class=\"descriptionNumberColor\">MDF_PropertyValue</span>.",
          "type": "Debuff",
          "effectName": "All-Type RES Reduction",
          "statusName": "All-Type RES Reduction"
        },
        {
          "name": "Modifier Construction",
          "for": "Silwolf_Normal_Bug3[<span class=\"descriptionNumberColor\">Type-3 Bug</span>]",
          "stackType": "ReplaceByCaster",
          "modifierFlags": [
            "STAT_SpeedDown"
          ],
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
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">SPD%</span>&nbsp;",
                  "value": {
                    "operator": "Constants[0] (0) || Variables[0] (MDF_PropertyValue) || SUB || RETURN",
                    "displayLines": "(0 - MDF_PropertyValue)",
                    "constants": [
                      0
                    ],
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
          "latentQueue": [],
          "description": "SPD -<span class=\"descriptionNumberColor\">MDF_PropertyValue</span>.",
          "type": "Debuff",
          "effectName": "Slow",
          "statusName": "Type-3 Bug"
        },
        {
          "name": "Modifier Construction",
          "for": "Silwolf_Normal_Bug2[<span class=\"descriptionNumberColor\">Type-2 Bug</span>]",
          "stackType": "ReplaceByCaster",
          "modifierFlags": [
            "STAT_DefenceDown"
          ],
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
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">DEF%</span>&nbsp;",
                  "value": {
                    "operator": "Constants[0] (0) || Variables[0] (MDF_PropertyValue) || SUB || RETURN",
                    "displayLines": "(0 - MDF_PropertyValue)",
                    "constants": [
                      0
                    ],
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
          "latentQueue": [],
          "description": "DEF -<span class=\"descriptionNumberColor\">MDF_PropertyValue</span>.",
          "type": "Debuff",
          "effectName": "DEF Reduction",
          "statusName": "Type-2 Bug"
        },
        {
          "name": "Modifier Construction",
          "for": "Silwolf_Normal_Bug1[<span class=\"descriptionNumberColor\">Type-1 Bug</span>]",
          "stackType": "ReplaceByCaster",
          "modifierFlags": [
            "STAT_AttackDown"
          ],
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
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">ATK%</span>&nbsp;",
                  "value": {
                    "operator": "Constants[0] (0) || Variables[0] (MDF_PropertyValue) || SUB || RETURN",
                    "displayLines": "(0 - MDF_PropertyValue)",
                    "constants": [
                      0
                    ],
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
          "latentQueue": [],
          "description": "ATK -<span class=\"descriptionNumberColor\">MDF_PropertyValue</span>.",
          "type": "Debuff",
          "effectName": "ATK Reduction",
          "statusName": "Type-1 Bug"
        },
        {
          "name": "Modifier Construction",
          "for": "Silwolf_BPAbility_WeakType_Imaginary[<span class=\"descriptionNumberColor\">Extra Imaginary Weakness</span>]",
          "stackType": "Replace",
          "description": "Extra Imaginary Weakness implanted. Imaginary RES -<span class=\"descriptionNumberColor\">MDF_PropertyValue</span>.",
          "type": "Debuff",
          "statusName": "Extra Imaginary Weakness"
        },
        {
          "name": "Modifier Construction",
          "for": "Silwolf_BPAbility_WeakType_Quantum[<span class=\"descriptionNumberColor\">Extra Quantum Weakness</span>]",
          "stackType": "Replace",
          "description": "Extra Quantum Weakness implanted. Quantum RES -<span class=\"descriptionNumberColor\">MDF_PropertyValue</span>.",
          "type": "Debuff",
          "statusName": "Extra Quantum Weakness"
        },
        {
          "name": "Modifier Construction",
          "for": "Silwolf_BPAbility_WeakType_Thunder[<span class=\"descriptionNumberColor\">Extra Lightning Weakness</span>]",
          "stackType": "Replace",
          "description": "Extra Lightning Weakness implanted. Lightning RES -<span class=\"descriptionNumberColor\">MDF_PropertyValue</span>.",
          "type": "Debuff",
          "statusName": "Extra Lightning Weakness"
        },
        {
          "name": "Modifier Construction",
          "for": "Silwolf_BPAbility_WeakType_Physical[<span class=\"descriptionNumberColor\">Extra Physical Weakness</span>]",
          "stackType": "Replace",
          "description": "Extra Physical Weakness implanted. Physical RES -<span class=\"descriptionNumberColor\">MDF_PropertyValue</span>.",
          "type": "Debuff",
          "statusName": "Extra Physical Weakness"
        },
        {
          "name": "Modifier Construction",
          "for": "Silwolf_BPAbility_WeakType_Wind[<span class=\"descriptionNumberColor\">Extra Wind Weakness</span>]",
          "stackType": "Replace",
          "description": "Extra Wind Weakness implanted. Wind RES -<span class=\"descriptionNumberColor\">MDF_PropertyValue</span>.",
          "type": "Debuff",
          "statusName": "Extra Wind Weakness"
        },
        {
          "name": "Modifier Construction",
          "for": "Silwolf_BPAbility_WeakType_Ice[<span class=\"descriptionNumberColor\">Extra Ice Weakness</span>]",
          "stackType": "Replace",
          "description": "Extra Ice Weakness implanted. Ice RES -<span class=\"descriptionNumberColor\">MDF_PropertyValue</span>.",
          "type": "Debuff",
          "statusName": "Extra Ice Weakness"
        },
        {
          "name": "Modifier Construction",
          "for": "Silwolf_BPAbility_WeakType_Fire[<span class=\"descriptionNumberColor\">Extra Fire Weakness</span>]",
          "stackType": "Replace",
          "description": "Extra Fire Weakness implanted. Fire RES -<span class=\"descriptionNumberColor\">MDF_PropertyValue</span>.",
          "type": "Debuff",
          "statusName": "Extra Fire Weakness"
        },
        {
          "name": "Modifier Construction",
          "for": "Silwolf_BPAbility_WeakType_Extra[<span class=\"descriptionNumberColor\">Extra Weakness</span>]",
          "stackType": "Replace",
          "modifierFlags": [
            "STAT_AttachWeakness"
          ],
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Implant Weaknesses",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "element": null,
                  "resReduction": {
                    "operator": "Constants[0] (0) || Variables[0] (MDF_PropertyValue) || SUB || RETURN",
                    "displayLines": "(0 - MDF_PropertyValue)",
                    "constants": [
                      0
                    ],
                    "variables": [
                      "MDF_PropertyValue"
                    ]
                  },
                  "maxImplant": 1,
                  "returnWeaknessVar": [
                    "Silwolf_BPAbility_WeakType_01",
                    "Silwolf_BPAbility_WeakType_02"
                  ]
                }
              ]
            }
          ],
          "description": "Extra Weakness implanted. Corresponding RES is lowered by <span class=\"descriptionNumberColor\">MDF_PropertyValue</span>.",
          "type": "Debuff",
          "effectName": "Implant a Weakness",
          "statusName": "Extra Weakness"
        },
        {
          "name": "Modifier Construction",
          "for": "Silwolf_BPAbility_WeakType[<span class=\"descriptionNumberColor\">Extra Weakness</span>]",
          "stackType": "Replace",
          "modifierFlags": [
            "STAT_AttachWeakness"
          ],
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Implant Weaknesses",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "element": null,
                  "resReduction": {
                    "operator": "Constants[0] (0) || Variables[0] (MDF_PropertyValue) || SUB || RETURN",
                    "displayLines": "(0 - MDF_PropertyValue)",
                    "constants": [
                      0
                    ],
                    "variables": [
                      "MDF_PropertyValue"
                    ]
                  },
                  "maxImplant": 1,
                  "returnWeaknessVar": [
                    "Silwolf_BPAbility_WeakType_01",
                    "Silwolf_BPAbility_WeakType_02"
                  ],
                  "noNewWeaknesses": [
                    "Modifier Deletes Itself"
                  ]
                },
                {
                  "name": "Use Custom Character Function",
                  "functionName": "Silwolf_Ability02_OverrideNameForStatus",
                  "variables": {
                    "DF_WeakType": {
                      "operator": "Variables[0] (_BPFlag) || RETURN",
                      "displayLines": "_BPFlag",
                      "constants": [],
                      "variables": [
                        "_BPFlag"
                      ]
                    }
                  }
                }
              ]
            }
          ],
          "stackData": [
            "MDF_PropertyValue"
          ],
          "latentQueue": [
            "_BPFlag"
          ],
          "description": "Extra Weakness implanted. Corresponding RES is lowered by <span class=\"descriptionNumberColor\">MDF_PropertyValue</span>.",
          "type": "Debuff",
          "effectName": "Implant a Weakness",
          "statusName": "Extra Weakness"
        }
      ],
      "references": []
    }
  }
}