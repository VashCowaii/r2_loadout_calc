const compositeAbilityObject = {
  "fullCharacterName": "Silver Wolf",
  "trimCharacterName": "SilverWolf",
  "abilityList": [
    "SilverWolf_Advanced_Silwolf_Eidolon6",
    "SilverWolf_Advanced_Silwolf_Eidolon2",
    "SilverWolf_Advanced_Silwolf_Trace01",
    "SilverWolf_Advanced_Silwolf_TechniqueInLevel",
    "SilverWolf_Advanced_Silwolf_PassiveAbility_RandomBug",
    "SilverWolf_Advanced_Silwolf_PassiveAbility01",
    "SilverWolf_Advanced_Silwolf_Ability03_Part02",
    "SilverWolf_Advanced_Silwolf_Ability03_Part01",
    "SilverWolf_Advanced_Silwolf_Ability03_EnterReady",
    "SilverWolf_Advanced_Silwolf_Ability02_Part02",
    "SilverWolf_Advanced_Silwolf_Ability02_Part01",
    "SilverWolf_Advanced_Silwolf_Ability01_Part02",
    "SilverWolf_Advanced_Silwolf_Ability01_Part01",
    "SilverWolf_Modifiers",
    "SilverWolf_Functions"
  ],
  "abilityObject": {
    "SilverWolf_Advanced_Silwolf_Eidolon6": {
      "fileName": "SilverWolf_Advanced_Silwolf_Eidolon6",
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
    "SilverWolf_Advanced_Silwolf_Eidolon2": {
      "fileName": "SilverWolf_Advanced_Silwolf_Eidolon2",
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
          "for": "Advanced_Silwolf_Eidolon2",
          "stackType": "ReplaceByCaster",
          "modifierFlags": [
            "RemoveWhenCasterDead"
          ],
          "execute": [
            {
              "eventTrigger": "Defender Finalizes DMG Data",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Is Part Of",
                    "of": {
                      "name": "Target Name",
                      "target": "{{Player Team All(with Unselectable)V2}}.[[removeBattleEvents]]"
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
                        "target": "{{Modifier Holder}}"
                      },
                      "ability": "Advanced_Silwolf_PassiveAbility_RandomBug"
                    }
                  ]
                }
              ]
            }
          ]
        },
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
                      "modifier": "Advanced_Silwolf_Eidolon2_AllDamageTypeTakenRatio[<span class=\"descriptionNumberColor\">Vulnerability</span>]",
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
                  "modifier": "Advanced_Silwolf_Eidolon2_AllDamageTypeTakenRatio[<span class=\"descriptionNumberColor\">Vulnerability</span>]",
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
          "latentQueue": [],
          "subModList": [
            {
              "name": "Add Sub-Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Hostile Entities(AOE, with Unselectables)}}"
              },
              "modifier": "Advanced_Silwolf_Eidolon2",
              "haloStatus": true
            }
          ]
        }
      ]
    },
    "SilverWolf_Advanced_Silwolf_Trace01": {
      "fileName": "SilverWolf_Advanced_Silwolf_Trace01",
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
          "modifier": "Advanced_Silwolf_Trace01_Bonus"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "Advanced_Silwolf_Trace01_Bonus",
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
                  "ability": "Advanced_Silwolf_PassiveAbility_RandomBug"
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": []
        }
      ]
    },
    "SilverWolf_Advanced_Silwolf_TechniqueInLevel": {
      "fileName": "SilverWolf_Advanced_Silwolf_TechniqueInLevel",
      "childAbilityList": [
        "SilverWolf_Advanced_Silwolf_TechniqueInLevel"
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
    "SilverWolf_Advanced_Silwolf_PassiveAbility_RandomBug": {
      "fileName": "SilverWolf_Advanced_Silwolf_PassiveAbility_RandomBug",
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
            "modifier": "Advanced_Silwolf_Normal_Bug1[<span class=\"descriptionNumberColor\">Type-1 Bug</span>]"
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
                "modifier": "Advanced_Silwolf_Normal_Bug2[<span class=\"descriptionNumberColor\">Type-2 Bug</span>]"
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
                    "modifier": "Advanced_Silwolf_Normal_Bug3[<span class=\"descriptionNumberColor\">Type-3 Bug</span>]"
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
                          "modifier": "Advanced_Silwolf_Normal_Bug1[<span class=\"descriptionNumberColor\">Type-1 Bug</span>]",
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
                          "modifier": "Advanced_Silwolf_Normal_Bug2[<span class=\"descriptionNumberColor\">Type-2 Bug</span>]",
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
                              "operator": "Variables[0] (0.12) || RETURN",
                              "displayLines": "0.12",
                              "constants": [],
                              "variables": [
                                0.12
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
                          "modifier": "Advanced_Silwolf_Normal_Bug3[<span class=\"descriptionNumberColor\">Type-3 Bug</span>]",
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
                      "modifier": "Advanced_Silwolf_Normal_Bug3[<span class=\"descriptionNumberColor\">Type-3 Bug</span>]",
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
                    "modifier": "Advanced_Silwolf_Normal_Bug3[<span class=\"descriptionNumberColor\">Type-3 Bug</span>]"
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Ability Target(ST)}}"
                      },
                      "modifier": "Advanced_Silwolf_Normal_Bug2[<span class=\"descriptionNumberColor\">Type-2 Bug</span>]",
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
                          "operator": "Variables[0] (0.12) || RETURN",
                          "displayLines": "0.12",
                          "constants": [],
                          "variables": [
                            0.12
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
                          "modifier": "Advanced_Silwolf_Normal_Bug2[<span class=\"descriptionNumberColor\">Type-2 Bug</span>]",
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
                              "operator": "Variables[0] (0.12) || RETURN",
                              "displayLines": "0.12",
                              "constants": [],
                              "variables": [
                                0.12
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
                          "modifier": "Advanced_Silwolf_Normal_Bug3[<span class=\"descriptionNumberColor\">Type-3 Bug</span>]",
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
                "modifier": "Advanced_Silwolf_Normal_Bug2[<span class=\"descriptionNumberColor\">Type-2 Bug</span>]"
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
                    "modifier": "Advanced_Silwolf_Normal_Bug3[<span class=\"descriptionNumberColor\">Type-3 Bug</span>]"
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Ability Target(ST)}}"
                      },
                      "modifier": "Advanced_Silwolf_Normal_Bug1[<span class=\"descriptionNumberColor\">Type-1 Bug</span>]",
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
                          "modifier": "Advanced_Silwolf_Normal_Bug1[<span class=\"descriptionNumberColor\">Type-1 Bug</span>]",
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
                          "modifier": "Advanced_Silwolf_Normal_Bug3[<span class=\"descriptionNumberColor\">Type-3 Bug</span>]",
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
                    "modifier": "Advanced_Silwolf_Normal_Bug3[<span class=\"descriptionNumberColor\">Type-3 Bug</span>]"
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
                          "modifier": "Advanced_Silwolf_Normal_Bug1[<span class=\"descriptionNumberColor\">Type-1 Bug</span>]",
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
                          "modifier": "Advanced_Silwolf_Normal_Bug2[<span class=\"descriptionNumberColor\">Type-2 Bug</span>]",
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
                          "modifier": "Advanced_Silwolf_Normal_Bug1[<span class=\"descriptionNumberColor\">Type-1 Bug</span>]",
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
                          "modifier": "Advanced_Silwolf_Normal_Bug2[<span class=\"descriptionNumberColor\">Type-2 Bug</span>]",
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
                              "operator": "Variables[0] (0.12) || RETURN",
                              "displayLines": "0.12",
                              "constants": [],
                              "variables": [
                                0.12
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
                          "modifier": "Advanced_Silwolf_Normal_Bug3[<span class=\"descriptionNumberColor\">Type-3 Bug</span>]",
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
    "SilverWolf_Advanced_Silwolf_PassiveAbility01": {
      "fileName": "SilverWolf_Advanced_Silwolf_PassiveAbility01",
      "childAbilityList": [
        "SilverWolf_Advanced_Silwolf_PassiveAbility01"
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
          "modifier": "Advanced_Silwolf_Passive"
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
            "name": "Trace Activated",
            "conditionList": "Side Note"
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "Advanced_Silwolf_Tree03_StatusProbabilityShow"
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
              "modifier": "Advanced_Silwolf_Eidolon1"
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
              "modifier": "Advanced_Silwolf_Eidolon4"
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
              "scope": "AITag",
              "variableName": "DamageCarry",
              "value": 1
            }
          ]
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "Advanced_Silwolf_Eidolon4",
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
                      "name": "Find New Target",
                      "from": {
                        "name": "Target Name",
                        "target": "{{Attack Targets of Modifier Holder}}"
                      },
                      "ifTargetFound": [
                        {
                          "name": "Define Custom Variable with Status Counter",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "variableName": "_DebuffCountForRank04"
                        },
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
                                    "target": "{{Parameter Target}}"
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
          "for": "Advanced_Silwolf_Eidolon1",
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
                      "name": "Find New Target",
                      "from": {
                        "name": "Target Name",
                        "target": "{{Attack Targets of Modifier Holder}}"
                      },
                      "includeDyingTargets": true,
                      "ifTargetFound": [
                        {
                          "name": "Define Custom Variable with Status Counter",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "variableName": "_DebuffCountForRank01_sub"
                        },
                        {
                          "name": "Define Custom Variable",
                          "variableName": "_DebuffCountForRank01",
                          "value": {
                            "operator": "Variables[0] (_DebuffCountForRank01) || Variables[1] (_DebuffCountForRank01_sub) || ADD || RETURN",
                            "displayLines": "(_DebuffCountForRank01 + _DebuffCountForRank01_sub)",
                            "constants": [],
                            "variables": [
                              "_DebuffCountForRank01",
                              "_DebuffCountForRank01_sub"
                            ]
                          }
                        }
                      ]
                    },
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
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "_DebuffCountForRank01",
                      "value": 0
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
          "for": "Advanced_Silwolf_Passive",
          "stackType": "ReplaceByCaster",
          "execute": [
            {
              "eventTrigger": "Turn [Pre-action Phase]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Trace Activated",
                    "conditionList": "Inject"
                  },
                  "passed": [
                    {
                      "name": "Update Energy",
                      "on": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "value": {
                        "operator": "Variables[0] (5) || RETURN",
                        "displayLines": "5",
                        "constants": [],
                        "variables": [
                          5
                        ]
                      },
                      "isFixed": "* ERR"
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Attack DMG End [Owner]",
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
                      "ability": "Advanced_Silwolf_PassiveAbility_RandomBug"
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
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Trace Activated",
                        "conditionList": "Inject"
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
                      "on": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "value": {
                        "operator": "Variables[0] (20) || RETURN",
                        "displayLines": "20",
                        "constants": [],
                        "variables": [
                          20
                        ]
                      },
                      "isFixed": "* ERR"
                    }
                  ]
                },
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
                      "name": "SWITCH",
                      "source": {
                        "name": "Damage Type Source",
                        "sourceType": "ReadTargetType",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Far Left Player Entity(no Memosprite)}}"
                        }
                      },
                      "caseEvents": [
                        {
                          "name": "SWITCH CONDITON",
                          "caseValueIs": "Physical",
                          "execute": [
                            {
                              "name": "Define Custom Variable",
                              "variableName": "_TheFirstAvatarWeakType",
                              "value": 1
                            }
                          ]
                        },
                        {
                          "name": "SWITCH CONDITON",
                          "caseValueIs": "Fire",
                          "execute": [
                            {
                              "name": "Define Custom Variable",
                              "variableName": "_TheFirstAvatarWeakType",
                              "value": 2
                            }
                          ]
                        },
                        {
                          "name": "SWITCH CONDITON",
                          "caseValueIs": "Ice",
                          "execute": [
                            {
                              "name": "Define Custom Variable",
                              "variableName": "_TheFirstAvatarWeakType",
                              "value": 4
                            }
                          ]
                        },
                        {
                          "name": "SWITCH CONDITON",
                          "caseValueIs": "Thunder",
                          "execute": [
                            {
                              "name": "Define Custom Variable",
                              "variableName": "_TheFirstAvatarWeakType",
                              "value": 8
                            }
                          ]
                        },
                        {
                          "name": "SWITCH CONDITON",
                          "caseValueIs": "Wind",
                          "execute": [
                            {
                              "name": "Define Custom Variable",
                              "variableName": "_TheFirstAvatarWeakType",
                              "value": 16
                            }
                          ]
                        },
                        {
                          "name": "SWITCH CONDITON",
                          "caseValueIs": "Quantum",
                          "execute": [
                            {
                              "name": "Define Custom Variable",
                              "variableName": "_TheFirstAvatarWeakType",
                              "value": 32
                            }
                          ]
                        },
                        {
                          "name": "SWITCH CONDITON",
                          "caseValueIs": "Imaginary",
                          "execute": [
                            {
                              "name": "Define Custom Variable",
                              "variableName": "_TheFirstAvatarWeakType",
                              "value": 64
                            }
                          ]
                        }
                      ],
                      "defaultEvents": []
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
    "SilverWolf_Advanced_Silwolf_Ability03_Part02": {
      "fileName": "SilverWolf_Advanced_Silwolf_Ability03_Part02",
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
            "target": "{{Hostile Entities(AOE)}}"
          },
          "modifier": "Advanced_Silwolf_Ultimate_DefenceRatioDown[<span class=\"descriptionNumberColor\">DEF Reduction</span>]",
          "duration": {
            "operator": "Variables[0] (3) || RETURN",
            "displayLines": "3",
            "constants": [],
            "variables": [
              3
            ]
          },
          "baseChance": {
            "operator": "Variables[0] (1.2) || RETURN",
            "displayLines": "1.2",
            "constants": [],
            "variables": [
              1.2
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
            "target": "{{Hostile Entities(AOE)}}"
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
        "Trigger: Skip Death Handling",
        "Trigger: Ability End"
      ],
      "references": []
    },
    "SilverWolf_Advanced_Silwolf_Ability03_Part01": {
      "fileName": "SilverWolf_Advanced_Silwolf_Ability03_Part01",
      "childAbilityList": [
        "SilverWolf_Advanced_Silwolf_Ability03_Camera",
        "SilverWolf_Advanced_Silwolf_Ability03_EnterReady",
        "SilverWolf_Advanced_Silwolf_Ability03_Part01",
        "SilverWolf_Advanced_Silwolf_Ability03_Part02"
      ],
      "skillTrigger": "Skill03",
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
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "ability": "Advanced_Silwolf_Ability03_Part02",
          "isTrigger": true
        }
      ],
      "references": []
    },
    "SilverWolf_Advanced_Silwolf_Ability03_EnterReady": {
      "fileName": "SilverWolf_Advanced_Silwolf_Ability03_EnterReady",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "references": []
    },
    "SilverWolf_Advanced_Silwolf_Ability02_Part02": {
      "fileName": "SilverWolf_Advanced_Silwolf_Ability02_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "modifier": "Advanced_Silwolf_BPAbility_AllDamageTypeResistanceDown[<span class=\"descriptionNumberColor\">All-Type RES Reduction</span>]",
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
              "operator": "Variables[0] (0.13) || RETURN",
              "displayLines": "0.13",
              "constants": [],
              "variables": [
                0.13
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
          "modifier": "Advanced_Silwolf_BPAbility_WeakType[<span class=\"descriptionNumberColor\">Extra Weakness</span>]",
          "duration": {
            "operator": "Variables[0] (3) || RETURN",
            "displayLines": "3",
            "constants": [],
            "variables": [
              3
            ]
          },
          "baseChance": {
            "operator": "Variables[0] (1.2) || RETURN",
            "displayLines": "1.2",
            "constants": [],
            "variables": [
              1.2
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
            },
            "_WeakType": 0,
            "_TheFirstAvatarWeakType": {
              "operator": "Variables[0] (_TheFirstAvatarWeakType) || RETURN",
              "displayLines": "_TheFirstAvatarWeakType",
              "constants": [],
              "variables": [
                "_TheFirstAvatarWeakType"
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
          "failed": [
            {
              "name": "Define Custom Variable",
              "variableName": "_BPFlag",
              "value": 1
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
              "functionName": "Advanced_Silwolf_Ability02_Success"
            }
          ],
          "failed": [
            {
              "name": "Use Custom Character Function",
              "functionName": "Advanced_Silwolf_Ability02_Failed"
            }
          ]
        }
      ],
      "functions": [
        {
          "name": "CharacterFunctions",
          "functionName": "Advanced_Silwolf_Ability02_Success",
          "parse": [
            "Deleted bullshit",
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "Avatar_Advanced_Silwolf_00_BPSkill_WeakType_01",
                "compareType": "=",
                "value2": 1
              }
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "Avatar_Advanced_Silwolf_00_BPSkill_WeakType_01",
                "compareType": "=",
                "value2": 2
              }
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "Avatar_Advanced_Silwolf_00_BPSkill_WeakType_01",
                "compareType": "=",
                "value2": 4
              }
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "Avatar_Advanced_Silwolf_00_BPSkill_WeakType_01",
                "compareType": "=",
                "value2": 8
              }
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "Avatar_Advanced_Silwolf_00_BPSkill_WeakType_01",
                "compareType": "=",
                "value2": 16
              }
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "Avatar_Advanced_Silwolf_00_BPSkill_WeakType_01",
                "compareType": "=",
                "value2": 32
              }
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "Avatar_Advanced_Silwolf_00_BPSkill_WeakType_01",
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
                "value1": "Avatar_Advanced_Silwolf_00_BPSkill_WeakType_01",
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
                    "modifier": "Advanced_Silwolf_BPAbility_WeakType[<span class=\"descriptionNumberColor\">Extra Weakness</span>]"
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
                "value1": "Avatar_Advanced_Silwolf_00_BPSkill_WeakType_01",
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
                    "modifier": "Advanced_Silwolf_BPAbility_WeakType[<span class=\"descriptionNumberColor\">Extra Weakness</span>]"
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
                "value1": "Avatar_Advanced_Silwolf_00_BPSkill_WeakType_01",
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
                    "modifier": "Advanced_Silwolf_BPAbility_WeakType[<span class=\"descriptionNumberColor\">Extra Weakness</span>]"
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
                "value1": "Avatar_Advanced_Silwolf_00_BPSkill_WeakType_01",
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
                    "modifier": "Advanced_Silwolf_BPAbility_WeakType[<span class=\"descriptionNumberColor\">Extra Weakness</span>]"
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
                "value1": "Avatar_Advanced_Silwolf_00_BPSkill_WeakType_01",
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
                    "modifier": "Advanced_Silwolf_BPAbility_WeakType[<span class=\"descriptionNumberColor\">Extra Weakness</span>]"
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
                "value1": "Avatar_Advanced_Silwolf_00_BPSkill_WeakType_01",
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
                    "modifier": "Advanced_Silwolf_BPAbility_WeakType[<span class=\"descriptionNumberColor\">Extra Weakness</span>]"
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
                "value1": "Avatar_Advanced_Silwolf_00_BPSkill_WeakType_01",
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
                    "modifier": "Advanced_Silwolf_BPAbility_WeakType[<span class=\"descriptionNumberColor\">Extra Weakness</span>]"
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
          "functionName": "Advanced_Silwolf_Ability02_Failed",
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
    "SilverWolf_Advanced_Silwolf_Ability02_Part01": {
      "fileName": "SilverWolf_Advanced_Silwolf_Ability02_Part01",
      "childAbilityList": [
        "SilverWolf_Advanced_Silwolf_Ability02_Camera",
        "SilverWolf_Advanced_Silwolf_Ability02_Part01",
        "SilverWolf_Advanced_Silwolf_Ability02_Part02",
        "SilverWolf_Advanced_Silwolf_Ability02_Success_Camera",
        "SilverWolf_Advanced_Silwolf_Ability02_Failed_Camera"
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
          "ability": "Advanced_Silwolf_Ability02_Part02",
          "isTrigger": true
        }
      ],
      "references": []
    },
    "SilverWolf_Advanced_Silwolf_Ability01_Part02": {
      "fileName": "SilverWolf_Advanced_Silwolf_Ability01_Part02",
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
    "SilverWolf_Advanced_Silwolf_Ability01_Part01": {
      "fileName": "SilverWolf_Advanced_Silwolf_Ability01_Part01",
      "childAbilityList": [
        "SilverWolf_Advanced_Silwolf_Ability01_Camera",
        "SilverWolf_Advanced_Silwolf_Ability01_Part01",
        "SilverWolf_Advanced_Silwolf_Ability01_Part02",
        "SilverWolf_Advanced_Silwolf_PassiveAbility_RandomBug"
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
          "ability": "Advanced_Silwolf_Ability01_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "references": []
    },
    "SilverWolf_Modifiers": {
      "fileName": "SilverWolf_Modifiers",
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
          "for": "Advanced_Silwolf_Tree03_AttackUp[<span class=\"descriptionNumberColor\">Side Note</span>]",
          "stackType": "ReplaceByCaster",
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
          "description": "ATK increases by <span class=\"descriptionNumberColor\">MDF_PropertyValue</span>.",
          "type": "Buff",
          "effectName": "ATK Boost",
          "statusName": "Side Note"
        },
        {
          "name": "Modifier Construction",
          "for": "Advanced_Silwolf_Tree03_StatusProbabilityShow",
          "stackType": "ReplaceByCaster",
          "abilityValueChange": [
            {
              "name": "Ability Value Changes",
              "variableName": "&nbsp;<span class=\"descriptionNumberColor\">EffectHitRateSUM</span>&nbsp;",
              "valueRanges": [
                {
                  "name": "Variable Value Range Conditions",
                  "minValue": 0,
                  "maxValue": 1000000000,
                  "whenEnteringRange": [
                    {
                      "name": "Use Custom Character Function",
                      "functionName": "Silwolf_Tree03_Sub"
                    }
                  ],
                  "whenValueChanges": [
                    {
                      "name": "Use Custom Character Function",
                      "functionName": "Silwolf_Tree03_Sub"
                    }
                  ]
                }
              ]
            }
          ],
          "modifierFunctions": [
            {
              "name": "CharacterFunctions",
              "functionName": "Silwolf_Tree03_Sub",
              "parse": [
                {
                  "name": "Define Custom Variable with Stat",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "variableName": "_StatusProbability",
                  "value": "&nbsp;<span class=\"descriptionNumberColor\">EffectHitRateSUM</span>&nbsp;"
                },
                {
                  "name": "Define Custom Variable with Stat",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "variableName": "_StatusProbabilityConvert",
                  "value": "&nbsp;<span class=\"descriptionNumberColor\">EffectHitRateConverted</span>&nbsp;"
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "SkillTree_PointB3_StatusProbabilityValue",
                  "value": {
                    "operator": "Variables[0] (_StatusProbability) || Variables[1] (_StatusProbabilityConvert) || SUB || RETURN",
                    "displayLines": "(_StatusProbability - _StatusProbabilityConvert)",
                    "constants": [],
                    "variables": [
                      "_StatusProbability",
                      "_StatusProbabilityConvert"
                    ]
                  }
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "SkillTree_PointB3_StatusProbabilityValue",
                  "value": {
                    "operator": "Variables[0] (WHOLE) || Variables[1] (SkillTree_PointB3_StatusProbabilityValue) || Variables[2] (0.1) || DIV || PARAM_1 || FUNCTION || Variables[3] (0.1) || MUL || RETURN",
                    "displayLines": "(&nbsp;<span class=\"descriptionFunctionColor\">WHOLE</span>((SkillTree_PointB3_StatusProbabilityValue / 0.1)) * 0.1)",
                    "constants": [],
                    "variables": [
                      "WHOLE",
                      "SkillTree_PointB3_StatusProbabilityValue",
                      0.1,
                      0.1
                    ]
                  }
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "SkillTree_PointB3_StatusProbabilityValue",
                    "compareType": "<=",
                    "value2": 0,
                    "contextScope": "ContextCaster"
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "SkillTree_PointB3_StatusProbabilityValue",
                      "value": 0
                    },
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "Advanced_Silwolf_Tree03_AttackUp[<span class=\"descriptionNumberColor\">Side Note</span>]"
                    }
                  ],
                  "failed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "SkillTree_PointB3_StatusProbabilityValue",
                        "compareType": ">=",
                        "value2": {
                          "operator": "Variables[0] (0.5) || RETURN",
                          "displayLines": "0.5",
                          "constants": [],
                          "variables": [
                            0.5
                          ]
                        },
                        "contextScope": "ContextCaster"
                      },
                      "passed": [
                        {
                          "name": "Define Custom Variable",
                          "variableName": "SkillTree_PointB3_StatusProbabilityValue",
                          "value": {
                            "operator": "Variables[0] (0.5) || RETURN",
                            "displayLines": "0.5",
                            "constants": [],
                            "variables": [
                              0.5
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
                      "modifier": "Advanced_Silwolf_Tree03_AttackUp[<span class=\"descriptionNumberColor\">Side Note</span>]",
                      "valuePerStack": {
                        "MDF_PropertyValue": {
                          "operator": "Variables[0] (SkillTree_PointB3_StatusProbabilityValue) || RETURN",
                          "displayLines": "SkillTree_PointB3_StatusProbabilityValue",
                          "constants": [],
                          "variables": [
                            "SkillTree_PointB3_StatusProbabilityValue"
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
          "for": "Advanced_Silwolf_Ultimate_DefenceRatioDown[<span class=\"descriptionNumberColor\">DEF Reduction</span>]",
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
          "description": "DEF decreases by <span class=\"descriptionNumberColor\">MDF_PropertyValue</span>.",
          "type": "Debuff",
          "effectName": "DEF Reduction",
          "statusName": "DEF Reduction"
        },
        {
          "name": "Modifier Construction",
          "for": "Advanced_Silwolf_Eidolon2_AllDamageTypeTakenRatio[<span class=\"descriptionNumberColor\">Vulnerability</span>]",
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
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">Vulnerability</span>&nbsp;",
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
          "latentQueue": [],
          "description": "DMG taken increases by <span class=\"descriptionNumberColor\">MDF_PropertyValue</span>.",
          "type": "Debuff",
          "effectName": "Vulnerability",
          "statusName": "Vulnerability"
        },
        {
          "name": "Modifier Construction",
          "for": "Advanced_Silwolf_BPAbility_AllDamageTypeResistanceDown[<span class=\"descriptionNumberColor\">All-Type RES Reduction</span>]",
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
          "description": "All-Type RES decreases by <span class=\"descriptionNumberColor\">MDF_PropertyValue</span>.",
          "type": "Debuff",
          "effectName": "All-Type RES Reduction",
          "statusName": "All-Type RES Reduction"
        },
        {
          "name": "Modifier Construction",
          "for": "Advanced_Silwolf_Normal_Bug3[<span class=\"descriptionNumberColor\">Type-3 Bug</span>]",
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
          "description": "SPD decreases by <span class=\"descriptionNumberColor\">MDF_PropertyValue</span>.",
          "type": "Debuff",
          "effectName": "Slow",
          "statusName": "Type-3 Bug"
        },
        {
          "name": "Modifier Construction",
          "for": "Advanced_Silwolf_Normal_Bug2[<span class=\"descriptionNumberColor\">Type-2 Bug</span>]",
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
          "description": "DEF decreases by <span class=\"descriptionNumberColor\">MDF_PropertyValue</span>.",
          "type": "Debuff",
          "effectName": "DEF Reduction",
          "statusName": "Type-2 Bug"
        },
        {
          "name": "Modifier Construction",
          "for": "Advanced_Silwolf_Normal_Bug1[<span class=\"descriptionNumberColor\">Type-1 Bug</span>]",
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
          "description": "ATK decreases by <span class=\"descriptionNumberColor\">MDF_PropertyValue</span>.",
          "type": "Debuff",
          "effectName": "ATK Reduction",
          "statusName": "Type-1 Bug"
        },
        {
          "name": "Modifier Construction",
          "for": "Advanced_Silwolf_BPAbility_WeakType_Imaginary[<span class=\"descriptionNumberColor\">Additional Imaginary Weakness</span>]",
          "stackType": "Replace",
          "description": "Additionally implanted Imaginary Weakness. Imaginary RES decreases by <span class=\"descriptionNumberColor\">MDF_PropertyValue</span>.",
          "type": "Debuff",
          "effectName": "Implant a Weakness",
          "statusName": "Additional Imaginary Weakness"
        },
        {
          "name": "Modifier Construction",
          "for": "Advanced_Silwolf_BPAbility_WeakType_Quantum[<span class=\"descriptionNumberColor\">Additional Quantum Weakness</span>]",
          "stackType": "Replace",
          "description": "Additionally implanted Quantum Weakness. Quantum RES decreases by <span class=\"descriptionNumberColor\">MDF_PropertyValue</span>.",
          "type": "Debuff",
          "effectName": "Implant a Weakness",
          "statusName": "Additional Quantum Weakness"
        },
        {
          "name": "Modifier Construction",
          "for": "Advanced_Silwolf_BPAbility_WeakType_Thunder[<span class=\"descriptionNumberColor\">Additional Lightning Weakness</span>]",
          "stackType": "Replace",
          "description": "Additionally implanted Lightning Weakness. Lightning RES decreases by <span class=\"descriptionNumberColor\">MDF_PropertyValue</span>.",
          "type": "Debuff",
          "effectName": "Implant a Weakness",
          "statusName": "Additional Lightning Weakness"
        },
        {
          "name": "Modifier Construction",
          "for": "Advanced_Silwolf_BPAbility_WeakType_Physical[<span class=\"descriptionNumberColor\">Additional Physical Weakness</span>]",
          "stackType": "Replace",
          "description": "Additionally implanted Physical Weakness. Physical RES decreases by <span class=\"descriptionNumberColor\">MDF_PropertyValue</span>.",
          "type": "Debuff",
          "effectName": "Implant a Weakness",
          "statusName": "Additional Physical Weakness"
        },
        {
          "name": "Modifier Construction",
          "for": "Advanced_Silwolf_BPAbility_WeakType_Wind[<span class=\"descriptionNumberColor\">Additional Wind Weakness</span>]",
          "stackType": "Replace",
          "description": "Additionally implanted Wind Weakness. Wind RES decreases by <span class=\"descriptionNumberColor\">MDF_PropertyValue</span>.",
          "type": "Debuff",
          "effectName": "Implant a Weakness",
          "statusName": "Additional Wind Weakness"
        },
        {
          "name": "Modifier Construction",
          "for": "Advanced_Silwolf_BPAbility_WeakType_Ice[<span class=\"descriptionNumberColor\">Additional Ice Weakness</span>]",
          "stackType": "Replace",
          "description": "Additionally implanted Ice Weakness. Ice RES decreases by <span class=\"descriptionNumberColor\">MDF_PropertyValue</span>.",
          "type": "Debuff",
          "effectName": "Implant a Weakness",
          "statusName": "Additional Ice Weakness"
        },
        {
          "name": "Modifier Construction",
          "for": "Advanced_Silwolf_BPAbility_WeakType_Fire[<span class=\"descriptionNumberColor\">Additional Fire Weakness</span>]",
          "stackType": "Replace",
          "description": "Additionally implanted Fire Weakness. Fire RES decreases by <span class=\"descriptionNumberColor\">MDF_PropertyValue</span>.",
          "type": "Debuff",
          "effectName": "Implant a Weakness",
          "statusName": "Additional Fire Weakness"
        },
        {
          "name": "Modifier Construction",
          "for": "Advanced_Silwolf_BPAbility_WeakType_Extra[<span class=\"descriptionNumberColor\">Extra Weakness</span>]",
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
                    "Advanced_Silwolf_BPAbility_WeakType_01",
                    "Advanced_Silwolf_BPAbility_WeakType_02"
                  ]
                }
              ]
            }
          ],
          "description": "Additionally implanted Weakness. Corresponding RES is lowered by <span class=\"descriptionNumberColor\">MDF_PropertyValue</span>.",
          "type": "Debuff",
          "effectName": "Implant a Weakness",
          "statusName": "Extra Weakness"
        },
        {
          "name": "Modifier Construction",
          "for": "Advanced_Silwolf_Passive_Deathrattle_Sub",
          "stackType": "ReplaceByCaster",
          "modifierFlags": [
            "KeepOnDeathrattle"
          ],
          "execute": [
            {
              "eventTrigger": "Pre-Death [Owner]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Is Part Of Team",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "team": "Enemy Team",
                    "invertCondition": true
                  },
                  "passed": [
                    {
                      "name": "Use Custom Character Function",
                      "functionName": "Advanced_Silwolf_PassiveAbility01_WeakTypeTransfer",
                      "variables": {
                        "_WeakType": {
                          "operator": "Variables[0] (_WeakType) || RETURN",
                          "displayLines": "_WeakType",
                          "constants": [],
                          "variables": [
                            "_WeakType"
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
          "for": "Advanced_Silwolf_BPAbility_WeakType[<span class=\"descriptionNumberColor\">Extra Weakness</span>]",
          "stackType": "ReplaceByCaster",
          "modifierFlags": [
            "STAT_AttachWeakness",
            "KeepOnDeathrattle"
          ],
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "_WeakType",
                    "compareType": "=",
                    "value2": 0
                  },
                  "passed": [
                    {
                      "name": "SWITCH",
                      "switchValue": {
                        "operator": "Variables[0] (_TheFirstAvatarWeakType) || RETURN",
                        "displayLines": "_TheFirstAvatarWeakType",
                        "constants": [],
                        "variables": [
                          "_TheFirstAvatarWeakType"
                        ]
                      },
                      "caseEvents": [
                        {
                          "name": "SWITCH CONDITON",
                          "caseValueIs": 1,
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
                              "prefWeakness": "Physical",
                              "returnWeaknessVar": [
                                "Advanced_Silwolf_BPAbility_WeakType_01",
                                "Advanced_Silwolf_BPAbility_WeakType_02"
                              ],
                              "noNewWeaknesses": [
                                "Modifier Deletes Itself"
                              ]
                            },
                            {
                              "name": "Define Custom Variable",
                              "variableName": "_WeakType",
                              "value": {
                                "operator": "Variables[0] (Advanced_Silwolf_BPAbility_WeakType_01) || RETURN",
                                "displayLines": "Advanced_Silwolf_BPAbility_WeakType_01",
                                "constants": [],
                                "variables": [
                                  "Advanced_Silwolf_BPAbility_WeakType_01"
                                ]
                              }
                            }
                          ]
                        },
                        {
                          "name": "SWITCH CONDITON",
                          "caseValueIs": 2,
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
                              "prefWeakness": "Fire",
                              "returnWeaknessVar": [
                                "Advanced_Silwolf_BPAbility_WeakType_01",
                                "Advanced_Silwolf_BPAbility_WeakType_02"
                              ],
                              "noNewWeaknesses": [
                                "Modifier Deletes Itself"
                              ]
                            },
                            {
                              "name": "Define Custom Variable",
                              "variableName": "_WeakType",
                              "value": {
                                "operator": "Variables[0] (Advanced_Silwolf_BPAbility_WeakType_01) || RETURN",
                                "displayLines": "Advanced_Silwolf_BPAbility_WeakType_01",
                                "constants": [],
                                "variables": [
                                  "Advanced_Silwolf_BPAbility_WeakType_01"
                                ]
                              }
                            }
                          ]
                        },
                        {
                          "name": "SWITCH CONDITON",
                          "caseValueIs": 4,
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
                              "prefWeakness": "Ice",
                              "returnWeaknessVar": [
                                "Advanced_Silwolf_BPAbility_WeakType_01",
                                "Advanced_Silwolf_BPAbility_WeakType_02"
                              ],
                              "noNewWeaknesses": [
                                "Modifier Deletes Itself"
                              ]
                            },
                            {
                              "name": "Define Custom Variable",
                              "variableName": "_WeakType",
                              "value": {
                                "operator": "Variables[0] (Advanced_Silwolf_BPAbility_WeakType_01) || RETURN",
                                "displayLines": "Advanced_Silwolf_BPAbility_WeakType_01",
                                "constants": [],
                                "variables": [
                                  "Advanced_Silwolf_BPAbility_WeakType_01"
                                ]
                              }
                            }
                          ]
                        },
                        {
                          "name": "SWITCH CONDITON",
                          "caseValueIs": 8,
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
                              "prefWeakness": "Lightning",
                              "returnWeaknessVar": [
                                "Advanced_Silwolf_BPAbility_WeakType_01",
                                "Advanced_Silwolf_BPAbility_WeakType_02"
                              ],
                              "noNewWeaknesses": [
                                "Modifier Deletes Itself"
                              ]
                            },
                            {
                              "name": "Define Custom Variable",
                              "variableName": "_WeakType",
                              "value": {
                                "operator": "Variables[0] (Advanced_Silwolf_BPAbility_WeakType_01) || RETURN",
                                "displayLines": "Advanced_Silwolf_BPAbility_WeakType_01",
                                "constants": [],
                                "variables": [
                                  "Advanced_Silwolf_BPAbility_WeakType_01"
                                ]
                              }
                            }
                          ]
                        },
                        {
                          "name": "SWITCH CONDITON",
                          "caseValueIs": 16,
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
                              "prefWeakness": "Wind",
                              "returnWeaknessVar": [
                                "Advanced_Silwolf_BPAbility_WeakType_01",
                                "Advanced_Silwolf_BPAbility_WeakType_02"
                              ],
                              "noNewWeaknesses": [
                                "Modifier Deletes Itself"
                              ]
                            },
                            {
                              "name": "Define Custom Variable",
                              "variableName": "_WeakType",
                              "value": {
                                "operator": "Variables[0] (Advanced_Silwolf_BPAbility_WeakType_01) || RETURN",
                                "displayLines": "Advanced_Silwolf_BPAbility_WeakType_01",
                                "constants": [],
                                "variables": [
                                  "Advanced_Silwolf_BPAbility_WeakType_01"
                                ]
                              }
                            }
                          ]
                        },
                        {
                          "name": "SWITCH CONDITON",
                          "caseValueIs": 32,
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
                              "prefWeakness": "Quantum",
                              "returnWeaknessVar": [
                                "Advanced_Silwolf_BPAbility_WeakType_01",
                                "Advanced_Silwolf_BPAbility_WeakType_02"
                              ],
                              "noNewWeaknesses": [
                                "Modifier Deletes Itself"
                              ]
                            },
                            {
                              "name": "Define Custom Variable",
                              "variableName": "_WeakType",
                              "value": {
                                "operator": "Variables[0] (Advanced_Silwolf_BPAbility_WeakType_01) || RETURN",
                                "displayLines": "Advanced_Silwolf_BPAbility_WeakType_01",
                                "constants": [],
                                "variables": [
                                  "Advanced_Silwolf_BPAbility_WeakType_01"
                                ]
                              }
                            }
                          ]
                        },
                        {
                          "name": "SWITCH CONDITON",
                          "caseValueIs": 64,
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
                              "prefWeakness": "Imaginary",
                              "returnWeaknessVar": [
                                "Advanced_Silwolf_BPAbility_WeakType_01",
                                "Advanced_Silwolf_BPAbility_WeakType_02"
                              ],
                              "noNewWeaknesses": [
                                "Modifier Deletes Itself"
                              ]
                            },
                            {
                              "name": "Define Custom Variable",
                              "variableName": "_WeakType",
                              "value": {
                                "operator": "Variables[0] (Advanced_Silwolf_BPAbility_WeakType_01) || RETURN",
                                "displayLines": "Advanced_Silwolf_BPAbility_WeakType_01",
                                "constants": [],
                                "variables": [
                                  "Advanced_Silwolf_BPAbility_WeakType_01"
                                ]
                              }
                            }
                          ]
                        }
                      ],
                      "defaultEvents": []
                    }
                  ],
                  "failed": [
                    {
                      "name": "SWITCH",
                      "switchValue": {
                        "operator": "Variables[0] (_WeakType) || RETURN",
                        "displayLines": "_WeakType",
                        "constants": [],
                        "variables": [
                          "_WeakType"
                        ]
                      },
                      "caseEvents": [
                        {
                          "name": "SWITCH CONDITON",
                          "caseValueIs": 1,
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
                              "prefWeakness": "Physical",
                              "returnWeaknessVar": [
                                "Advanced_Silwolf_BPAbility_WeakType_01",
                                "Advanced_Silwolf_BPAbility_WeakType_02"
                              ],
                              "noNewWeaknesses": [
                                "Modifier Deletes Itself"
                              ]
                            },
                            {
                              "name": "Define Custom Variable",
                              "variableName": "_WeakType",
                              "value": {
                                "operator": "Variables[0] (Advanced_Silwolf_BPAbility_WeakType_01) || RETURN",
                                "displayLines": "Advanced_Silwolf_BPAbility_WeakType_01",
                                "constants": [],
                                "variables": [
                                  "Advanced_Silwolf_BPAbility_WeakType_01"
                                ]
                              }
                            }
                          ]
                        },
                        {
                          "name": "SWITCH CONDITON",
                          "caseValueIs": 2,
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
                              "prefWeakness": "Fire",
                              "returnWeaknessVar": [
                                "Advanced_Silwolf_BPAbility_WeakType_01",
                                "Advanced_Silwolf_BPAbility_WeakType_02"
                              ],
                              "noNewWeaknesses": [
                                "Modifier Deletes Itself"
                              ]
                            },
                            {
                              "name": "Define Custom Variable",
                              "variableName": "_WeakType",
                              "value": {
                                "operator": "Variables[0] (Advanced_Silwolf_BPAbility_WeakType_01) || RETURN",
                                "displayLines": "Advanced_Silwolf_BPAbility_WeakType_01",
                                "constants": [],
                                "variables": [
                                  "Advanced_Silwolf_BPAbility_WeakType_01"
                                ]
                              }
                            }
                          ]
                        },
                        {
                          "name": "SWITCH CONDITON",
                          "caseValueIs": 4,
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
                              "prefWeakness": "Ice",
                              "returnWeaknessVar": [
                                "Advanced_Silwolf_BPAbility_WeakType_01",
                                "Advanced_Silwolf_BPAbility_WeakType_02"
                              ],
                              "noNewWeaknesses": [
                                "Modifier Deletes Itself"
                              ]
                            },
                            {
                              "name": "Define Custom Variable",
                              "variableName": "_WeakType",
                              "value": {
                                "operator": "Variables[0] (Advanced_Silwolf_BPAbility_WeakType_01) || RETURN",
                                "displayLines": "Advanced_Silwolf_BPAbility_WeakType_01",
                                "constants": [],
                                "variables": [
                                  "Advanced_Silwolf_BPAbility_WeakType_01"
                                ]
                              }
                            }
                          ]
                        },
                        {
                          "name": "SWITCH CONDITON",
                          "caseValueIs": 8,
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
                              "prefWeakness": "Lightning",
                              "returnWeaknessVar": [
                                "Advanced_Silwolf_BPAbility_WeakType_01",
                                "Advanced_Silwolf_BPAbility_WeakType_02"
                              ],
                              "noNewWeaknesses": [
                                "Modifier Deletes Itself"
                              ]
                            },
                            {
                              "name": "Define Custom Variable",
                              "variableName": "_WeakType",
                              "value": {
                                "operator": "Variables[0] (Advanced_Silwolf_BPAbility_WeakType_01) || RETURN",
                                "displayLines": "Advanced_Silwolf_BPAbility_WeakType_01",
                                "constants": [],
                                "variables": [
                                  "Advanced_Silwolf_BPAbility_WeakType_01"
                                ]
                              }
                            }
                          ]
                        },
                        {
                          "name": "SWITCH CONDITON",
                          "caseValueIs": 16,
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
                              "prefWeakness": "Wind",
                              "returnWeaknessVar": [
                                "Advanced_Silwolf_BPAbility_WeakType_01",
                                "Advanced_Silwolf_BPAbility_WeakType_02"
                              ],
                              "noNewWeaknesses": [
                                "Modifier Deletes Itself"
                              ]
                            },
                            {
                              "name": "Define Custom Variable",
                              "variableName": "_WeakType",
                              "value": {
                                "operator": "Variables[0] (Advanced_Silwolf_BPAbility_WeakType_01) || RETURN",
                                "displayLines": "Advanced_Silwolf_BPAbility_WeakType_01",
                                "constants": [],
                                "variables": [
                                  "Advanced_Silwolf_BPAbility_WeakType_01"
                                ]
                              }
                            }
                          ]
                        },
                        {
                          "name": "SWITCH CONDITON",
                          "caseValueIs": 32,
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
                              "prefWeakness": "Quantum",
                              "returnWeaknessVar": [
                                "Advanced_Silwolf_BPAbility_WeakType_01",
                                "Advanced_Silwolf_BPAbility_WeakType_02"
                              ],
                              "noNewWeaknesses": [
                                "Modifier Deletes Itself"
                              ]
                            },
                            {
                              "name": "Define Custom Variable",
                              "variableName": "_WeakType",
                              "value": {
                                "operator": "Variables[0] (Advanced_Silwolf_BPAbility_WeakType_01) || RETURN",
                                "displayLines": "Advanced_Silwolf_BPAbility_WeakType_01",
                                "constants": [],
                                "variables": [
                                  "Advanced_Silwolf_BPAbility_WeakType_01"
                                ]
                              }
                            }
                          ]
                        },
                        {
                          "name": "SWITCH CONDITON",
                          "caseValueIs": 64,
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
                              "prefWeakness": "Imaginary",
                              "returnWeaknessVar": [
                                "Advanced_Silwolf_BPAbility_WeakType_01",
                                "Advanced_Silwolf_BPAbility_WeakType_02"
                              ],
                              "noNewWeaknesses": [
                                "Modifier Deletes Itself"
                              ]
                            },
                            {
                              "name": "Define Custom Variable",
                              "variableName": "_WeakType",
                              "value": {
                                "operator": "Variables[0] (Advanced_Silwolf_BPAbility_WeakType_01) || RETURN",
                                "displayLines": "Advanced_Silwolf_BPAbility_WeakType_01",
                                "constants": [],
                                "variables": [
                                  "Advanced_Silwolf_BPAbility_WeakType_01"
                                ]
                              }
                            }
                          ]
                        }
                      ],
                      "defaultEvents": []
                    }
                  ]
                },
                {
                  "name": "Use Custom Character Function",
                  "functionName": "Advanced_Silwolf_Ability02_OverrideNameForStatus",
                  "variables": {
                    "DF_WeakType": {
                      "operator": "Variables[0] (Advanced_Silwolf_BPAbility_WeakType_01) || RETURN",
                      "displayLines": "Advanced_Silwolf_BPAbility_WeakType_01",
                      "constants": [],
                      "variables": [
                        "Advanced_Silwolf_BPAbility_WeakType_01"
                      ]
                    }
                  }
                }
              ]
            },
            {
              "eventTrigger": "Pre-Death [Owner]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Is Part Of Team",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "team": "Enemy Team",
                    "invertCondition": true
                  },
                  "passed": [
                    {
                      "name": "Use Custom Character Function",
                      "functionName": "Advanced_Silwolf_PassiveAbility01_WeakTypeTransfer",
                      "variables": {
                        "_WeakType": {
                          "operator": "Variables[0] (_WeakType) || RETURN",
                          "displayLines": "_WeakType",
                          "constants": [],
                          "variables": [
                            "_WeakType"
                          ]
                        }
                      }
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Before Killed (Queued) [Owner]",
              "execute": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "Advanced_Silwolf_Passive_Deathrattle_Sub",
                  "valuePerStack": {
                    "_WeakType": {
                      "operator": "Variables[0] (_WeakType) || RETURN",
                      "displayLines": "_WeakType",
                      "constants": [],
                      "variables": [
                        "_WeakType"
                      ]
                    }
                  }
                }
              ]
            }
          ],
          "stackData": [
            "MDF_PropertyValue",
            "_WeakType",
            "_TheFirstAvatarWeakType"
          ],
          "latentQueue": [],
          "description": "Additionally implanted Weakness. Corresponding RES is lowered by <span class=\"descriptionNumberColor\">MDF_PropertyValue</span>.",
          "type": "Debuff",
          "effectName": "Implant a Weakness",
          "statusName": "Extra Weakness"
        }
      ],
      "references": []
    },
    "SilverWolf_Functions": {
      "fileName": "SilverWolf_Functions",
      "abilityType": "Char. Functions",
      "energy": null,
      "toughnessList": [
        0,
        0,
        0
      ],
      "length": 2,
      "parse": [
        {
          "name": "CharacterFunctions",
          "functionName": "Advanced_Silwolf_Ability02_OverrideNameForStatus",
          "parse": [
            {
              "name": "SWITCH",
              "switchValue": {
                "operator": "Variables[0] (DF_WeakType) || RETURN",
                "displayLines": "DF_WeakType",
                "constants": [],
                "variables": [
                  "DF_WeakType"
                ]
              },
              "caseEvents": [
                {
                  "name": "SWITCH CONDITON",
                  "caseValueIs": 1,
                  "execute": [
                    {
                      "name": "Override Modifier Name",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifierName": "Advanced_Silwolf_BPAbility_WeakType[<span class=\"descriptionNumberColor\">Extra Weakness</span>]",
                      "modifierNameUpdate": "Advanced_Silwolf_BPAbility_WeakType_Physical[<span class=\"descriptionNumberColor\">Additional Physical Weakness</span>]"
                    }
                  ]
                },
                {
                  "name": "SWITCH CONDITON",
                  "caseValueIs": 2,
                  "execute": [
                    {
                      "name": "Override Modifier Name",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifierName": "Advanced_Silwolf_BPAbility_WeakType[<span class=\"descriptionNumberColor\">Extra Weakness</span>]",
                      "modifierNameUpdate": "Advanced_Silwolf_BPAbility_WeakType_Fire[<span class=\"descriptionNumberColor\">Additional Fire Weakness</span>]"
                    }
                  ]
                },
                {
                  "name": "SWITCH CONDITON",
                  "caseValueIs": 4,
                  "execute": [
                    {
                      "name": "Override Modifier Name",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifierName": "Advanced_Silwolf_BPAbility_WeakType[<span class=\"descriptionNumberColor\">Extra Weakness</span>]",
                      "modifierNameUpdate": "Advanced_Silwolf_BPAbility_WeakType_Ice[<span class=\"descriptionNumberColor\">Additional Ice Weakness</span>]"
                    }
                  ]
                },
                {
                  "name": "SWITCH CONDITON",
                  "caseValueIs": 8,
                  "execute": [
                    {
                      "name": "Override Modifier Name",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifierName": "Advanced_Silwolf_BPAbility_WeakType[<span class=\"descriptionNumberColor\">Extra Weakness</span>]",
                      "modifierNameUpdate": "Advanced_Silwolf_BPAbility_WeakType_Thunder[<span class=\"descriptionNumberColor\">Additional Lightning Weakness</span>]"
                    }
                  ]
                },
                {
                  "name": "SWITCH CONDITON",
                  "caseValueIs": 16,
                  "execute": [
                    {
                      "name": "Override Modifier Name",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifierName": "Advanced_Silwolf_BPAbility_WeakType[<span class=\"descriptionNumberColor\">Extra Weakness</span>]",
                      "modifierNameUpdate": "Advanced_Silwolf_BPAbility_WeakType_Wind[<span class=\"descriptionNumberColor\">Additional Wind Weakness</span>]"
                    }
                  ]
                },
                {
                  "name": "SWITCH CONDITON",
                  "caseValueIs": 32,
                  "execute": [
                    {
                      "name": "Override Modifier Name",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifierName": "Advanced_Silwolf_BPAbility_WeakType[<span class=\"descriptionNumberColor\">Extra Weakness</span>]",
                      "modifierNameUpdate": "Advanced_Silwolf_BPAbility_WeakType_Quantum[<span class=\"descriptionNumberColor\">Additional Quantum Weakness</span>]"
                    }
                  ]
                },
                {
                  "name": "SWITCH CONDITON",
                  "caseValueIs": 64,
                  "execute": [
                    {
                      "name": "Override Modifier Name",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifierName": "Advanced_Silwolf_BPAbility_WeakType[<span class=\"descriptionNumberColor\">Extra Weakness</span>]",
                      "modifierNameUpdate": "Advanced_Silwolf_BPAbility_WeakType_Imaginary[<span class=\"descriptionNumberColor\">Additional Imaginary Weakness</span>]"
                    }
                  ]
                }
              ],
              "defaultEvents": []
            }
          ]
        },
        {
          "name": "CharacterFunctions",
          "functionName": "Advanced_Silwolf_PassiveAbility01_WeakTypeTransfer",
          "parse": [
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Sequence",
                "Sequence": [
                  {
                    "name": "Target Name",
                    "target": "{{Enemy Team All}}"
                  },
                  {
                    "name": "Filter by Life-State",
                    "state": "Mask_AliveOnly"
                  },
                  {
                    "name": "Sort by Monster Rank",
                    "byHighest": true,
                    "maxRank": "Elite"
                  },
                  {
                    "name": "Target Filter",
                    "conditions": {
                      "name": "AND",
                      "conditionList": [
                        {
                          "name": "Target is Unselectable",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "invertCondition": true
                        },
                        {
                          "name": "Living State",
                          "state": "Bit_OnStage",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          }
                        },
                        {
                          "name": "Has Modifier",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "modifier": "Advanced_Silwolf_BPAbility_WeakType[<span class=\"descriptionNumberColor\">Extra Weakness</span>]",
                          "invertCondition": true
                        }
                      ]
                    }
                  }
                ]
              },
              "maxTargets": 1,
              "conditions": {
                "name": "Living State",
                "state": "Mask_AliveOnly",
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                }
              },
              "ifTargetFound": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "Advanced_Silwolf_BPAbility_WeakType[<span class=\"descriptionNumberColor\">Extra Weakness</span>]",
                  "duration": {
                    "operator": "Variables[0] (3) || RETURN",
                    "displayLines": "3",
                    "constants": [],
                    "variables": [
                      3
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
                    },
                    "_WeakType": {
                      "operator": "Variables[0] (_WeakType) || RETURN",
                      "displayLines": "_WeakType",
                      "constants": [],
                      "variables": [
                        "_WeakType"
                      ]
                    }
                  }
                }
              ]
            }
          ]
        }
      ],
      "references": []
    }
  }
}