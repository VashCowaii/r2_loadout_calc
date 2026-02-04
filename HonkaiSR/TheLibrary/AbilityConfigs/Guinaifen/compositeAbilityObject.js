const compositeAbilityObject = {
  "fullCharacterName": "Guinaifen",
  "trimCharacterName": "Guinaifen",
  "abilityList": [
    "Guinaifen_Guinaifen_Trace03",
    "Guinaifen_Guinaifen_Trace02",
    "Guinaifen_Guinaifen_TechniqueInLevel",
    "Guinaifen_Guinaifen_PassiveAbility01",
    "Guinaifen_Guinaifen_Ability03_Part02",
    "Guinaifen_Guinaifen_Ability03_Part01",
    "Guinaifen_Guinaifen_Ability03_EnterReady",
    "Guinaifen_Guinaifen_Ability02_Part02",
    "Guinaifen_Guinaifen_Ability02_Part01",
    "Guinaifen_Guinaifen_Ability01_Part02",
    "Guinaifen_Guinaifen_Ability01_Part01",
    "Guinaifen_Modifiers"
  ],
  "abilityObject": {
    "Guinaifen_Guinaifen_Trace03": {
      "fileName": "Guinaifen_Guinaifen_Trace03",
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
          "modifier": "Guinaifen_Trace03"
        }
      ],
      "references": []
    },
    "Guinaifen_Guinaifen_Trace02": {
      "fileName": "Guinaifen_Guinaifen_Trace02",
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
          "modifier": "Guinaifen_Trace02"
        }
      ],
      "references": []
    },
    "Guinaifen_Guinaifen_TechniqueInLevel": {
      "fileName": "Guinaifen_Guinaifen_TechniqueInLevel",
      "childAbilityList": [
        "Guinaifen_Guinaifen_TechniqueInLevel"
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
          "modifier": "Guinaifen_TechniqueUsage_Modifier"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "Guinaifen_TechniqueUsage_Modifier",
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
                      "name": "Define Custom Variable",
                      "variableName": "MDF_AttackCount",
                      "value": 0
                    },
                    {
                      "name": "Looped Event",
                      "maxLoops": {
                        "operator": "Variables[0] (4) || RETURN",
                        "displayLines": "4",
                        "constants": [],
                        "variables": [
                          4
                        ]
                      },
                      "Event": [
                        {
                          "name": "Define Custom Variable",
                          "variableName": "MDF_AttackCount",
                          "value": {
                            "operator": "Variables[0] (MDF_AttackCount) || Constants[0] (1) || ADD || RETURN",
                            "displayLines": "(MDF_AttackCount + 1)",
                            "constants": [
                              1
                            ],
                            "variables": [
                              "MDF_AttackCount"
                            ]
                          }
                        },
                        {
                          "name": "Find New Target",
                          "from": {
                            "name": "Target Name",
                            "target": "{{Hostile Entities(AOE)}}"
                          },
                          "searchRandom": true,
                          "includeDyingTargets": true,
                          "maxTargets": 1,
                          "conditions": {
                            "name": "OR",
                            "conditionList": [
                              {
                                "name": "Enemies Still Alive",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Caster}}"
                                },
                                "invertCondition": true,
                                "includeNonTargets": true
                              },
                              {
                                "name": "Compare: Variable",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Parameter Target}}"
                                },
                                "value1": "CurrentHP",
                                "compareType": ">",
                                "value2": 0
                              }
                            ]
                          },
                          "ifTargetFound": [
                            {
                              "name": "ATK Scaling DMG",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Parameter Target}}"
                              },
                              "canPhase": true,
                              "AttackScaling": {
                                "DamageType": "Fire",
                                "Damage": {
                                  "operator": "Variables[0] (0.5) || RETURN",
                                  "displayLines": "0.5",
                                  "constants": [],
                                  "variables": [
                                    0.5
                                  ]
                                },
                                "Toughness": null,
                                "Tags": null,
                                "attackType": "Technique",
                                "EnergyGainPercent": "100%"
                              }
                            },
                            {
                              "name": "IF",
                              "conditions": {
                                "name": "Compare: Variable",
                                "value1": "MDF_AttackCount",
                                "compareType": "=",
                                "value2": {
                                  "operator": "Variables[0] (4) || RETURN",
                                  "displayLines": "4",
                                  "constants": [],
                                  "variables": [
                                    4
                                  ]
                                },
                                "contextScope": "ContextModifier"
                              },
                              "passed": [
                                "Trigger: Attack End"
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
                                  "variableName": "MDF_MaxLayer",
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
                                  "variableName": "MDF_MaxLayer",
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
                              "name": "Add Events/Bonuses",
                              "to": {
                                "name": "Target Name",
                                "target": "{{Parameter Target}}"
                              },
                              "modifier": "Guinaifen_Oil_Sub[<span class=\"descriptionNumberColor\">Firekiss</span>]",
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
                              "stackLimit": {
                                "operator": "Variables[0] (MDF_MaxLayer) || RETURN",
                                "displayLines": "MDF_MaxLayer",
                                "constants": [],
                                "variables": [
                                  "MDF_MaxLayer"
                                ]
                              },
                              "valuePerStack": {
                                "MDF_PropertyValue2": {
                                  "operator": "Variables[0] (0.07) || RETURN",
                                  "displayLines": "0.07",
                                  "constants": [],
                                  "variables": [
                                    0.07
                                  ]
                                }
                              },
                              "addStacksPerTrigger": 1
                            }
                          ]
                        }
                      ]
                    }
                  ]
                }
              ],
              "priorityLevel": -60
            }
          ],
          "stackData": [],
          "latentQueue": []
        }
      ]
    },
    "Guinaifen_Guinaifen_PassiveAbility01": {
      "fileName": "Guinaifen_Guinaifen_PassiveAbility01",
      "childAbilityList": [
        "Guinaifen_Guinaifen_PassiveAbility01"
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
          "modifier": "GuiNaiFen_PassiveAbility01_Modifier",
          "valuePerStack": {
            "MDF_Chance": {
              "operator": "Variables[0] (1) || RETURN",
              "displayLines": "1",
              "constants": [],
              "variables": [
                1
              ]
            },
            "MDF_Damage": {
              "operator": "Variables[0] (0) || RETURN",
              "displayLines": "0",
              "constants": [],
              "variables": [
                0
              ]
            },
            "MDF_LifeTime": {
              "operator": "Variables[0] (0) || RETURN",
              "displayLines": "0",
              "constants": [],
              "variables": [
                0
              ]
            },
            "SpAdded2": {
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
      "references": []
    },
    "Guinaifen_Guinaifen_Ability03_Part02": {
      "fileName": "Guinaifen_Guinaifen_Ability03_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "canPhase": true,
          "AttackScaling": {
            "DamageType": "Fire",
            "Damage": {
              "operator": "Variables[0] (1.2) || RETURN",
              "displayLines": "1.2",
              "constants": [],
              "variables": [
                1.2
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
        {
          "name": "Trigger Modifier Event",
          "target": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "variableName": "DOT_TriggerRatio",
          "eventType": "DOT_Burn",
          "value": {
            "operator": "Variables[0] (0.92) || RETURN",
            "displayLines": "0.92",
            "constants": [],
            "variables": [
              0.92
            ]
          }
        },
        "Trigger: Attack End",
        "Trigger: Skip Death Handling",
        "Trigger: Ability End"
      ],
      "references": []
    },
    "Guinaifen_Guinaifen_Ability03_Part01": {
      "fileName": "Guinaifen_Guinaifen_Ability03_Part01",
      "childAbilityList": [
        "Guinaifen_Guinaifen_Ability03_Camera",
        "Guinaifen_Guinaifen_Ability03_EnterReady",
        "Guinaifen_Guinaifen_Ability03_Part01",
        "Guinaifen_Guinaifen_Ability03_Part02"
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
          "ability": "Guinaifen_Ability03_Part02",
          "isTrigger": true
        }
      ],
      "references": []
    },
    "Guinaifen_Guinaifen_Ability03_EnterReady": {
      "fileName": "Guinaifen_Guinaifen_Ability03_EnterReady",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "references": []
    },
    "Guinaifen_Guinaifen_Ability02_Part02": {
      "fileName": "Guinaifen_Guinaifen_Ability02_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Shot Fired",
          "execute": [
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
                    "target": "{{ST and Blast}}"
                  },
                  "modifier": "Guinaifen_Eidolon1_StatusResistance[<span class=\"descriptionNumberColor\">Slurping Noodles During Handstand</span>]",
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
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{ST and Blast}}"
              },
              "searchRandom": true,
              "maxTargets": 3,
              "ifTargetFound": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Eidolon Activated",
                        "eidolon": 2
                      },
                      {
                        "name": "Has Flag",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "flagName": "STAT_DOT_Burn"
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
                      "modifier": "Standard_DOT_Burn[<span class=\"descriptionNumberColor\">Burn</span>]",
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
                        "Modifier_Burn_DamagePercentage": {
                          "operator": "Variables[0] (2.18208) || Variables[1] (0.4) || ADD || RETURN",
                          "displayLines": "(2.18208 + 0.4)",
                          "constants": [],
                          "variables": [
                            2.18208,
                            0.4
                          ]
                        }
                      },
                      "stackFlag": "CharacterSkill"
                    }
                  ],
                  "failed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "Standard_DOT_Burn[<span class=\"descriptionNumberColor\">Burn</span>]",
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
                        "Modifier_Burn_DamagePercentage": {
                          "operator": "Variables[0] (2.18208) || RETURN",
                          "displayLines": "2.18208",
                          "constants": [],
                          "variables": [
                            2.18208
                          ]
                        }
                      },
                      "stackFlag": "CharacterSkill"
                    }
                  ]
                }
              ]
            },
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Ability Target(ST)}}"
              },
              "canPhase": true,
              "AttackScaling": {
                "DamageType": "Fire",
                "Damage": {
                  "operator": "Variables[0] (1.2) || RETURN",
                  "displayLines": "1.2",
                  "constants": [],
                  "variables": [
                    1.2
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
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Ability Targets Adjacent(Blast)}}"
              },
              "canPhase": true,
              "AttackScaling": {
                "DamageType": "Fire",
                "Damage": {
                  "operator": "Variables[0] (0.4) || RETURN",
                  "displayLines": "0.4",
                  "constants": [],
                  "variables": [
                    0.4
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
            }
          ]
        },
        "Trigger: Attack End",
        "Trigger: Ability End"
      ],
      "references": []
    },
    "Guinaifen_Guinaifen_Ability02_Part01": {
      "fileName": "Guinaifen_Guinaifen_Ability02_Part01",
      "childAbilityList": [
        "Guinaifen_Guinaifen_Ability02_Camera",
        "Guinaifen_Guinaifen_Ability02_Part01",
        "Guinaifen_Guinaifen_Ability02_Part02"
      ],
      "skillTrigger": "Skill02",
      "abilityType": "Skill",
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
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "ability": "Guinaifen_Ability02_Part02",
          "isTrigger": true
        }
      ],
      "references": []
    },
    "Guinaifen_Guinaifen_Ability01_Part02": {
      "fileName": "Guinaifen_Guinaifen_Ability01_Part02",
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
      ],
      "references": []
    },
    "Guinaifen_Guinaifen_Ability01_Part01": {
      "fileName": "Guinaifen_Guinaifen_Ability01_Part01",
      "childAbilityList": [
        "Guinaifen_Guinaifen_Ability01_Camera",
        "Guinaifen_Guinaifen_Ability01_Part01",
        "Guinaifen_Guinaifen_Ability01_Part02"
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
          "ability": "Guinaifen_Ability01_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "references": []
    },
    "Guinaifen_Modifiers": {
      "fileName": "Guinaifen_Modifiers",
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
          "for": "Guinaifen_Eidolon4",
          "modifierFlags": [
            "RemoveWhenCasterDead"
          ],
          "execute": [
            {
              "eventTrigger": "Take Damage Start [Owner]: Any",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Attack Type",
                        "attackTypes": [
                          "DOT"
                        ],
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        }
                      },
                      {
                        "name": "Is Damage Type/Element",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "list": [
                          "Fire"
                        ]
                      },
                      {
                        "name": "Is Joint-Attack",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "invertCondition": true
                      },
                      {
                        "name": "Is Part Of",
                        "of": {
                          "name": "Target Name",
                          "target": "{{Parameter Target's Source Owner}}"
                        },
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        "mustBeAlive2": true
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
                        "operator": "Variables[0] (SpAdded) || RETURN",
                        "displayLines": "SpAdded",
                        "constants": [],
                        "variables": [
                          "SpAdded"
                        ]
                      },
                      "isFixed": "* ERR"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "Guinaifen_Eidolon1_StatusResistance[<span class=\"descriptionNumberColor\">Slurping Noodles During Handstand</span>]",
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
          "description": "Effect RES decreases by <span class=\"descriptionNumberColor\">MDF_PropertyValue</span>.",
          "type": "Debuff",
          "effectName": "Effect RES Reduction",
          "statusName": "Slurping Noodles During Handstand"
        },
        {
          "name": "Modifier Construction",
          "for": "Guinaifen_Trace03",
          "execute": [
            {
              "eventTrigger": "Deal Damage Start [Owner]: Any",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Flag",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "flagName": "STAT_DOT_Burn"
                  },
                  "passed": [
                    {
                      "name": "Adjust Target Stats",
                      "modifiedValuesArray": [
                        {
                          "on": "Attacker",
                          "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageAll</span>&nbsp;",
                          "value": "0.2"
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
          "for": "Guinaifen_Trace02",
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
                      "name": "Action Advance/Delay",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "advanceType": "Advance",
                      "multiAdd": "-0.25"
                    }
                  ]
                }
              ],
              "priorityLevel": -80
            }
          ],
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "Guinaifen_Oil_Sub[<span class=\"descriptionNumberColor\">Firekiss</span>]",
          "stackType": "ReplaceByCaster",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Define Custom Variable with Modifier Values",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "valueType": "Layer",
                  "variableName": "MDF_Layer",
                  "multiplier": 1
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_PropertyValue",
                  "value": {
                    "operator": "Variables[0] (MDF_PropertyValue2) || Variables[1] (MDF_Layer) || MUL || RETURN",
                    "displayLines": "(MDF_PropertyValue2 * MDF_Layer)",
                    "constants": [],
                    "variables": [
                      "MDF_PropertyValue2",
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
            "MDF_PropertyValue2"
          ],
          "latentQueue": [],
          "description": "Received DMG increases by <span class=\"descriptionNumberColor\">MDF_PropertyValue</span>.",
          "type": "Debuff",
          "effectName": "Firekiss",
          "statusName": "Firekiss"
        },
        {
          "name": "Modifier Construction",
          "for": "Guinaifen_Oil",
          "stackType": "ReplaceByCaster",
          "modifierFlags": [
            "RemoveWhenCasterDead"
          ],
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier"
            },
            {
              "eventTrigger": "Take Damage Start [Owner]: Any",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "DMG Source Has Flag",
                    "flagName": [
                      "STAT_DOT_Burn"
                    ]
                  },
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Eidolon Activated",
                        "eidolon": 6
                      },
                      "passed": [
                        {
                          "name": "Define Custom Variable",
                          "variableName": "MDF_MaxLayer",
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
                          "variableName": "MDF_MaxLayer",
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
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "modifier": "Guinaifen_Oil_Sub[<span class=\"descriptionNumberColor\">Firekiss</span>]",
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
                      "stackLimit": {
                        "operator": "Variables[0] (MDF_MaxLayer) || RETURN",
                        "displayLines": "MDF_MaxLayer",
                        "constants": [],
                        "variables": [
                          "MDF_MaxLayer"
                        ]
                      },
                      "valuePerStack": {
                        "MDF_PropertyValue2": {
                          "operator": "Variables[0] (0.07) || RETURN",
                          "displayLines": "0.07",
                          "constants": [],
                          "variables": [
                            0.07
                          ]
                        }
                      },
                      "addStacksPerTrigger": 1
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "MDF_IsAttack",
                      "value": 2
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Being Attacked End [Owner]",
              "execute": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_IsAttack",
                  "value": 0
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "GuiNaiFen_PassiveAbility01_Modifier",
          "execute": [
            {
              "eventTrigger": "Entity Created [Anyone]",
              "execute": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Enemy Team All}}"
                  },
                  "modifier": "Guinaifen_Oil"
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
                        "target": "{{Enemy Team All}}"
                      },
                      "modifier": "Guinaifen_Eidolon4",
                      "valuePerStack": {
                        "SpAdded": {
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
              "eventTrigger": "Attack Start [Owner]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Trace Activated",
                        "conditionList": "High Poles"
                      },
                      {
                        "name": "Skill Type",
                        "skillType": "Basic ATK"
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "AND",
                        "conditionList": [
                          {
                            "name": "Eidolon Activated",
                            "eidolon": 2
                          },
                          {
                            "name": "Has Flag",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Parameter Target}}"
                            },
                            "flagName": "STAT_DOT_Burn"
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
                          "modifier": "Standard_DOT_Burn[<span class=\"descriptionNumberColor\">Burn</span>]",
                          "duration": {
                            "operator": "Variables[0] (2) || RETURN",
                            "displayLines": "2",
                            "constants": [],
                            "variables": [
                              2
                            ]
                          },
                          "baseChance": {
                            "operator": "Variables[0] (0.8) || RETURN",
                            "displayLines": "0.8",
                            "constants": [],
                            "variables": [
                              0.8
                            ]
                          },
                          "valuePerStack": {
                            "Modifier_Burn_DamagePercentage": {
                              "operator": "Variables[0] (2.18208) || Variables[1] (0.4) || ADD || RETURN",
                              "displayLines": "(2.18208 + 0.4)",
                              "constants": [],
                              "variables": [
                                2.18208,
                                0.4
                              ]
                            }
                          },
                          "stackFlag": "CharacterSkill"
                        }
                      ],
                      "failed": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "modifier": "Standard_DOT_Burn[<span class=\"descriptionNumberColor\">Burn</span>]",
                          "duration": {
                            "operator": "Variables[0] (2) || RETURN",
                            "displayLines": "2",
                            "constants": [],
                            "variables": [
                              2
                            ]
                          },
                          "baseChance": {
                            "operator": "Variables[0] (0.8) || RETURN",
                            "displayLines": "0.8",
                            "constants": [],
                            "variables": [
                              0.8
                            ]
                          },
                          "valuePerStack": {
                            "Modifier_Burn_DamagePercentage": {
                              "operator": "Variables[0] (2.18208) || RETURN",
                              "displayLines": "2.18208",
                              "constants": [],
                              "variables": [
                                2.18208
                              ]
                            }
                          },
                          "stackFlag": "CharacterSkill"
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ],
          "stackData": [
            "MDF_Chance",
            "MDF_Damage",
            "MDF_LifeTime",
            "SpAdded2"
          ],
          "latentQueue": []
        }
      ],
      "references": []
    }
  }
}