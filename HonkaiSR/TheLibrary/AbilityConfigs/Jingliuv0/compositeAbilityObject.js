const compositeAbilityObject = {
  "fullCharacterName": "Jingliu_v0",
  "trimCharacterName": "Jingliuv0",
  "abilityList": [
    "Jingliuv0_Jingliu_Trace03",
    "Jingliuv0_Jingliu_TechniqueInLevel",
    "Jingliuv0_Jingliu_PassiveAtkReady_Ability",
    "Jingliuv0_Jingliu_PassiveAtkReady_Part01",
    "Jingliuv0_Jingliu_PassiveAbility01",
    "Jingliuv0_Jingliu_Ability03_Part02",
    "Jingliuv0_Jingliu_Ability03_Part01",
    "Jingliuv0_Jingliu_Ability03_EnterReady",
    "Jingliuv0_Jingliu_Ability02_Part02",
    "Jingliuv0_Jingliu_Ability02_Part01",
    "Jingliuv0_Jingliu_Ability01_Part02",
    "Jingliuv0_Jingliu_Ability01_Part01",
    "Jingliuv0_Modifiers"
  ],
  "abilityObject": {
    "Jingliuv0_Jingliu_Trace03": {
      "fileName": "Jingliuv0_Jingliu_Trace03",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "references": []
    },
    "Jingliuv0_Jingliu_TechniqueInLevel": {
      "fileName": "Jingliuv0_Jingliu_TechniqueInLevel",
      "childAbilityList": [
        "Jingliuv0_Jingliu_TechniqueInLevel"
      ],
      "skillTrigger": "SkillMaze",
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
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "Technique_Jingliu_Modifier"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "Jingliu_TechniqueUsage",
          "stackType": "ReplaceByCaster",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Adjust Variable Value",
                  "adjustmentType": "Add to Value (Default)",
                  "variableName": "Jingliu_MoonFlag",
                  "on": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "value": {
                    "operator": "Variables[0] (MDF_MazeMoonFlag) || RETURN",
                    "displayLines": "MDF_MazeMoonFlag",
                    "constants": [],
                    "variables": [
                      "MDF_MazeMoonFlag"
                    ]
                  }
                },
                {
                  "name": "Update Displayed Energy Bar",
                  "value": {
                    "operator": "Variables[0] (Jingliu_MoonFlag) || RETURN",
                    "displayLines": "Jingliu_MoonFlag",
                    "constants": [],
                    "variables": [
                      "Jingliu_MoonFlag"
                    ]
                  },
                  "maximum": {
                    "operator": "Variables[0] (Jingliu_MoonFlagMax) || RETURN",
                    "displayLines": "Jingliu_MoonFlagMax",
                    "constants": [],
                    "variables": [
                      "Jingliu_MoonFlagMax"
                    ]
                  },
                  "assignState": "True",
                  "priorState": "Normal",
                  "bar#": 3,
                  "cooldown": 0
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "Technique_Jingliu_Modifier",
          "execute": [
            {
              "eventTrigger": "Enter Battle",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Technique Modifies Current Wave"
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Hostile Entities(AOE)}}"
                      },
                      "modifier": "Standard_CTRL_Frozen[<span class=\"descriptionNumberColor\">Frozen</span>]",
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
                      },
                      "valuePerStack": {
                        "Modifier_Frozen_DamagePercentage": {
                          "operator": "Variables[0] (0.8) || RETURN",
                          "displayLines": "0.8",
                          "constants": [],
                          "variables": [
                            0.8
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
                    "value1": "Wave Count",
                    "compareType": "=",
                    "value2": 1
                  },
                  "passed": [
                    {
                      "name": "Update Energy",
                      "on": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "value": {
                        "operator": "Variables[0] (15) || RETURN",
                        "displayLines": "15",
                        "constants": [],
                        "variables": [
                          15
                        ]
                      },
                      "isFixed": "* ERR"
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "Jingliu_TechniqueUsage",
                      "valuePerStack": {
                        "MDF_MazeMoonFlag": {
                          "operator": "Variables[0] (1) || RETURN",
                          "displayLines": "1",
                          "constants": [],
                          "variables": [
                            1
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
    "Jingliuv0_Jingliu_PassiveAtkReady_Ability": {
      "fileName": "Jingliuv0_Jingliu_PassiveAtkReady_Ability",
      "childAbilityList": [
        "Jingliuv0_Jingliu_PassiveAtkReady_Ability",
        "Jingliuv0_Jingliu_PassiveAtk_Camera"
      ],
      "skillTrigger": "Skill21",
      "abilityType": "Skill",
      "energy": 30,
      "toughnessList": [
        20,
        0,
        10
      ],
      "parse": [
        "Deleted bullshit",
        "Deleted bullshit",
        {
          "name": "Adjust Variable Value",
          "adjustmentType": "Add to Value (Default)",
          "variableName": "Jingliu_FullMoonFlag",
          "on": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "value": {
            "operator": "Variables[0] (1) || INVERT || RETURN",
            "displayLines": "-1",
            "constants": [],
            "variables": [
              1
            ]
          }
        },
        {
          "name": "Update Displayed Energy Bar",
          "value": {
            "operator": "Variables[0] (Jingliu_FullMoonFlag) || RETURN",
            "displayLines": "Jingliu_FullMoonFlag",
            "constants": [],
            "variables": [
              "Jingliu_FullMoonFlag"
            ]
          },
          "maximum": {
            "operator": "Variables[0] (Jingliu_FullMoonFlagMax) || RETURN",
            "displayLines": "Jingliu_FullMoonFlagMax",
            "constants": [],
            "variables": [
              "Jingliu_FullMoonFlagMax"
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
              "modifier": "Jingliu_Eidolon1_CriticalDamage[<span class=\"descriptionNumberColor\">Moon Crashes Tianguan Gate</span>]",
              "duration": {
                "operator": "Variables[0] (1) || RETURN",
                "displayLines": "1",
                "constants": [],
                "variables": [
                  1
                ]
              },
              "valuePerStack": {
                "MDF_PropertyValue": {
                  "operator": "Variables[0] (0.24) || RETURN",
                  "displayLines": "0.24",
                  "constants": [],
                  "variables": [
                    0.24
                  ]
                }
              }
            }
          ]
        },
        {
          "name": "Shot Fired",
          "execute": [
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Ability Target(ST)}}"
              },
              "AttackScaling": {
                "DamageType": "Ice",
                "Damage": {
                  "operator": "Variables[0] (2.5) || RETURN",
                  "displayLines": "2.5",
                  "constants": [],
                  "variables": [
                    2.5
                  ]
                },
                "HitSplit": 0.1,
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
                "name": "Eidolon Activated",
                "eidolon": 1
              },
              "passed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Ability Targets Adjacent(Blast)}}"
                    },
                    "value1": "TeamCharacterCount",
                    "compareType": ">",
                    "value2": 0
                  },
                  "passed": [
                    {
                      "name": "ATK Scaling DMG",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Ability Targets Adjacent(Blast)}}"
                      },
                      "AttackScaling": {
                        "DamageType": "Ice",
                        "Damage": {
                          "operator": "Variables[0] (1.25) || RETURN",
                          "displayLines": "1.25",
                          "constants": [],
                          "variables": [
                            1.25
                          ]
                        },
                        "HitSplit": 0.1,
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
                  ],
                  "failed": [
                    {
                      "name": "ATK Scaling DMG",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Ability Target(ST)}}"
                      },
                      "AttackScaling": {
                        "DamageType": "Ice",
                        "Damage": {
                          "operator": "Variables[0] (1) || RETURN",
                          "displayLines": "1",
                          "constants": [],
                          "variables": [
                            1
                          ]
                        },
                        "HitSplit": 0.1,
                        "Toughness": null,
                        "Tags": null
                      }
                    }
                  ]
                }
              ],
              "failed": [
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Ability Targets Adjacent(Blast)}}"
                  },
                  "AttackScaling": {
                    "DamageType": "Ice",
                    "Damage": {
                      "operator": "Variables[0] (1.25) || RETURN",
                      "displayLines": "1.25",
                      "constants": [],
                      "variables": [
                        1.25
                      ]
                    },
                    "HitSplit": 0.1,
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
            }
          ]
        },
        {
          "name": "Shot Fired",
          "execute": [
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Ability Target(ST)}}"
              },
              "AttackScaling": {
                "DamageType": "Ice",
                "Damage": {
                  "operator": "Variables[0] (2.5) || RETURN",
                  "displayLines": "2.5",
                  "constants": [],
                  "variables": [
                    2.5
                  ]
                },
                "HitSplit": 0.1,
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
                "name": "Eidolon Activated",
                "eidolon": 1
              },
              "passed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Ability Targets Adjacent(Blast)}}"
                    },
                    "value1": "TeamCharacterCount",
                    "compareType": ">",
                    "value2": 0
                  },
                  "passed": [
                    {
                      "name": "ATK Scaling DMG",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Ability Targets Adjacent(Blast)}}"
                      },
                      "AttackScaling": {
                        "DamageType": "Ice",
                        "Damage": {
                          "operator": "Variables[0] (1.25) || RETURN",
                          "displayLines": "1.25",
                          "constants": [],
                          "variables": [
                            1.25
                          ]
                        },
                        "HitSplit": 0.1,
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
                  ],
                  "failed": [
                    {
                      "name": "ATK Scaling DMG",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Ability Target(ST)}}"
                      },
                      "AttackScaling": {
                        "DamageType": "Ice",
                        "Damage": {
                          "operator": "Variables[0] (1) || RETURN",
                          "displayLines": "1",
                          "constants": [],
                          "variables": [
                            1
                          ]
                        },
                        "HitSplit": 0.1,
                        "Toughness": null,
                        "Tags": null
                      }
                    }
                  ]
                }
              ],
              "failed": [
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Ability Targets Adjacent(Blast)}}"
                  },
                  "AttackScaling": {
                    "DamageType": "Ice",
                    "Damage": {
                      "operator": "Variables[0] (1.25) || RETURN",
                      "displayLines": "1.25",
                      "constants": [],
                      "variables": [
                        1.25
                      ]
                    },
                    "HitSplit": 0.1,
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
            }
          ]
        },
        {
          "name": "Shot Fired",
          "execute": [
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Ability Target(ST)}}"
              },
              "AttackScaling": {
                "DamageType": "Ice",
                "Damage": {
                  "operator": "Variables[0] (2.5) || RETURN",
                  "displayLines": "2.5",
                  "constants": [],
                  "variables": [
                    2.5
                  ]
                },
                "HitSplit": 0.1,
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
                "name": "Eidolon Activated",
                "eidolon": 1
              },
              "passed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Ability Targets Adjacent(Blast)}}"
                    },
                    "value1": "TeamCharacterCount",
                    "compareType": ">",
                    "value2": 0
                  },
                  "passed": [
                    {
                      "name": "ATK Scaling DMG",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Ability Targets Adjacent(Blast)}}"
                      },
                      "AttackScaling": {
                        "DamageType": "Ice",
                        "Damage": {
                          "operator": "Variables[0] (1.25) || RETURN",
                          "displayLines": "1.25",
                          "constants": [],
                          "variables": [
                            1.25
                          ]
                        },
                        "HitSplit": 0.1,
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
                  ],
                  "failed": [
                    {
                      "name": "ATK Scaling DMG",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Ability Target(ST)}}"
                      },
                      "AttackScaling": {
                        "DamageType": "Ice",
                        "Damage": {
                          "operator": "Variables[0] (1) || RETURN",
                          "displayLines": "1",
                          "constants": [],
                          "variables": [
                            1
                          ]
                        },
                        "HitSplit": 0.1,
                        "Toughness": null,
                        "Tags": null
                      }
                    }
                  ]
                }
              ],
              "failed": [
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Ability Targets Adjacent(Blast)}}"
                  },
                  "AttackScaling": {
                    "DamageType": "Ice",
                    "Damage": {
                      "operator": "Variables[0] (1.25) || RETURN",
                      "displayLines": "1.25",
                      "constants": [],
                      "variables": [
                        1.25
                      ]
                    },
                    "HitSplit": 0.1,
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
            }
          ]
        },
        {
          "name": "Shot Fired",
          "execute": [
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Ability Target(ST)}}"
              },
              "AttackScaling": {
                "DamageType": "Ice",
                "Damage": {
                  "operator": "Variables[0] (2.5) || RETURN",
                  "displayLines": "2.5",
                  "constants": [],
                  "variables": [
                    2.5
                  ]
                },
                "HitSplit": 0.2,
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
                "name": "Eidolon Activated",
                "eidolon": 1
              },
              "passed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Ability Targets Adjacent(Blast)}}"
                    },
                    "value1": "TeamCharacterCount",
                    "compareType": ">",
                    "value2": 0
                  },
                  "passed": [
                    {
                      "name": "ATK Scaling DMG",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Ability Targets Adjacent(Blast)}}"
                      },
                      "AttackScaling": {
                        "DamageType": "Ice",
                        "Damage": {
                          "operator": "Variables[0] (1.25) || RETURN",
                          "displayLines": "1.25",
                          "constants": [],
                          "variables": [
                            1.25
                          ]
                        },
                        "HitSplit": 0.2,
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
                  ],
                  "failed": [
                    {
                      "name": "ATK Scaling DMG",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Ability Target(ST)}}"
                      },
                      "AttackScaling": {
                        "DamageType": "Ice",
                        "Damage": {
                          "operator": "Variables[0] (1) || RETURN",
                          "displayLines": "1",
                          "constants": [],
                          "variables": [
                            1
                          ]
                        },
                        "HitSplit": 0.2,
                        "Toughness": null,
                        "Tags": null
                      }
                    }
                  ]
                }
              ],
              "failed": [
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Ability Targets Adjacent(Blast)}}"
                  },
                  "AttackScaling": {
                    "DamageType": "Ice",
                    "Damage": {
                      "operator": "Variables[0] (1.25) || RETURN",
                      "displayLines": "1.25",
                      "constants": [],
                      "variables": [
                        1.25
                      ]
                    },
                    "HitSplit": 0.2,
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
            }
          ]
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "modifier": "Jingliu_Frozen_Perform"
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
                "target": {
                  "name": "Target Name",
                  "target": "{{Ability Targets Adjacent(Blast)}}"
                },
                "value1": "TeamCharacterCount",
                "compareType": ">",
                "value2": 0
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Ability Targets Adjacent(Blast)}}"
                  },
                  "modifier": "Jingliu_Frozen_Perform"
                }
              ]
            }
          ],
          "failed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Ability Targets Adjacent(Blast)}}"
              },
              "modifier": "Jingliu_Frozen_Perform"
            }
          ]
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Enemy Team All}}"
          },
          "modifier": "Jingliu_Frozen_Perform"
        },
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "AttackScaling": {
            "DamageType": "Ice",
            "Damage": {
              "operator": "Variables[0] (2.5) || RETURN",
              "displayLines": "2.5",
              "constants": [],
              "variables": [
                2.5
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
            "EnergyGainPercent": "100%"
          }
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
                "target": {
                  "name": "Target Name",
                  "target": "{{Ability Targets Adjacent(Blast)}}"
                },
                "value1": "TeamCharacterCount",
                "compareType": ">",
                "value2": 0
              },
              "passed": [
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Ability Targets Adjacent(Blast)}}"
                  },
                  "AttackScaling": {
                    "DamageType": "Ice",
                    "Damage": {
                      "operator": "Variables[0] (1.25) || RETURN",
                      "displayLines": "1.25",
                      "constants": [],
                      "variables": [
                        1.25
                      ]
                    },
                    "HitSplit": 0.5,
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
              ],
              "failed": [
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Ability Target(ST)}}"
                  },
                  "AttackScaling": {
                    "DamageType": "Ice",
                    "Damage": {
                      "operator": "Variables[0] (1) || RETURN",
                      "displayLines": "1",
                      "constants": [],
                      "variables": [
                        1
                      ]
                    },
                    "HitSplit": 0.5,
                    "Toughness": null,
                    "Tags": null
                  }
                }
              ]
            }
          ],
          "failed": [
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Ability Targets Adjacent(Blast)}}"
              },
              "AttackScaling": {
                "DamageType": "Ice",
                "Damage": {
                  "operator": "Variables[0] (1.25) || RETURN",
                  "displayLines": "1.25",
                  "constants": [],
                  "variables": [
                    1.25
                  ]
                },
                "HitSplit": 0.5,
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
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "Jingliu_Eidolon2[<span class=\"descriptionNumberColor\">Crescent Shadows Qixing Dipper</span>]"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "Jingliu_FullMoonFlag",
            "compareType": "=",
            "value2": 0
          }
        },
        "Trigger: Ability End"
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "Jingliu_Frozen_Perform",
          "modifierFlags": [
            "STAT_AnimStop"
          ],
          "priority": 9,
          "execute": [
            {
              "eventTrigger": "When Modifier Destroyed/Removed",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Target Exists",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "living": true
                  },
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Has Flag",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "flagName": "STAT_CTRL_Frozen_Effect",
                        "invertCondition": true
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
                  "name": "IF",
                  "conditions": {
                    "name": "Has Flag",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "flagName": "STAT_CTRL_Frozen",
                    "invertCondition": true
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
    "Jingliuv0_Jingliu_PassiveAtkReady_Part01": {
      "fileName": "Jingliuv0_Jingliu_PassiveAtkReady_Part01",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "UI Display Event",
          "popUpText": "Crescent Transmigration"
        },
        {
          "name": "Adjust Variable Value",
          "adjustmentType": "Overwrite Value",
          "variableName": "Jingliu_MoonFlag",
          "on": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "value": 0
        },
        "Deleted bullshit",
        {
          "name": "Update Displayed Energy Bar",
          "value": {
            "operator": "Variables[0] (Jingliu_FullMoonFlag) || RETURN",
            "displayLines": "Jingliu_FullMoonFlag",
            "constants": [],
            "variables": [
              "Jingliu_FullMoonFlag"
            ]
          },
          "maximum": {
            "operator": "Variables[0] (Jingliu_FullMoonFlagMax) || RETURN",
            "displayLines": "Jingliu_FullMoonFlagMax",
            "constants": [],
            "variables": [
              "Jingliu_FullMoonFlagMax"
            ]
          },
          "assignState": "True",
          "priorState": "Active",
          "bar#": 3,
          "cooldown": 0
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "MWJingliu_Attack_Transfer",
          "valuePerStack": {
            "AbilityP01_P1_HpConsumption": {
              "operator": "Variables[0] (0.3) || RETURN",
              "displayLines": "0.3",
              "constants": [],
              "variables": [
                0.3
              ]
            },
            "AbilityP01_P3_ATKRatioUp": {
              "operator": "Variables[0] (5.4) || RETURN",
              "displayLines": "5.4",
              "constants": [],
              "variables": [
                5.4
              ]
            },
            "AbilityP01_P2_HpConsumption": {
              "operator": "Variables[0] (0.04) || RETURN",
              "displayLines": "0.04",
              "constants": [],
              "variables": [
                0.04
              ]
            },
            "AbilityP01_P4_JingliuAttackBase": {
              "operator": "Variables[0] (1.8) || RETURN",
              "displayLines": "1.8",
              "constants": [],
              "variables": [
                1.8
              ]
            },
            "AbilityRank_Eidolon4_P1_DamageUpRatio": {
              "operator": "Variables[0] (0.9) || RETURN",
              "displayLines": "0.9",
              "constants": [],
              "variables": [
                0.9
              ]
            },
            "AbilityRank_Eidolon4_P2_DamageUpLimit": {
              "operator": "Variables[0] (0.3) || RETURN",
              "displayLines": "0.3",
              "constants": [],
              "variables": [
                0.3
              ]
            }
          }
        },
        {
          "name": "Use Custom Character Function",
          "functionName": "ReduceActionDelay",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "variables": {
            "parameter[0]_NormalizedValue": {
              "operator": "Variables[0] (1) || RETURN",
              "displayLines": "1",
              "constants": [],
              "variables": [
                1
              ]
            }
          }
        }
      ],
      "references": []
    },
    "Jingliuv0_Jingliu_PassiveAbility01": {
      "fileName": "Jingliuv0_Jingliu_PassiveAbility01",
      "childAbilityList": [
        "Jingliuv0_Jingliu_PassiveAbility01",
        "Jingliuv0_Jingliu_Passive_Camera",
        "Jingliuv0_Jingliu_PassiveAtkReady_Part01"
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
          "modifier": "Jingliu_LoseHPPreShow"
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
              "variableName": "Jingliu_FullMoonFlagMax",
              "value": {
                "operator": "Variables[0] (Jingliu_FullMoonFlagMax) || Constants[0] (1) || ADD || RETURN",
                "displayLines": "(Jingliu_FullMoonFlagMax + 1)",
                "constants": [
                  1
                ],
                "variables": [
                  "Jingliu_FullMoonFlagMax"
                ]
              }
            }
          ]
        },
        {
          "name": "Define Custom Variable",
          "variableName": "HpConsumption",
          "value": 0
        },
        {
          "name": "Read Variable Value",
          "adjustmentType": "Add to Value (Default)",
          "variableName": "Jingliu_MoonFlag",
          "on": {
            "name": "Target Name",
            "target": "{{Caster}}"
          }
        },
        {
          "name": "Read Variable Value",
          "adjustmentType": "Add to Value (Default)",
          "variableName": "Jingliu_FullMoonFlag",
          "on": {
            "name": "Target Name",
            "target": "{{Caster}}"
          }
        },
        {
          "name": "Adjust Variable Value",
          "adjustmentType": "Overwrite Value",
          "variableName": "Jingliu_MoonFlag",
          "on": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "value": 0
        },
        {
          "name": "Define Custom Variable",
          "variableName": "Jingliu_MoonFlagMax",
          "value": {
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
            "operator": "Variables[0] (Jingliu_MoonFlag) || RETURN",
            "displayLines": "Jingliu_MoonFlag",
            "constants": [],
            "variables": [
              "Jingliu_MoonFlag"
            ]
          },
          "maximum": {
            "operator": "Variables[0] (Jingliu_MoonFlagMax) || RETURN",
            "displayLines": "Jingliu_MoonFlagMax",
            "constants": [],
            "variables": [
              "Jingliu_MoonFlagMax"
            ]
          },
          "assignState": "True",
          "priorState": "Normal",
          "bar#": 3,
          "cooldown": 0
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "Jingliu_Passive"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Trace Activated",
            "conditionList": "Sword Champion"
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "Jingliu_AbilityPreShow"
            }
          ]
        }
      ],
      "references": []
    },
    "Jingliuv0_Jingliu_Ability03_Part02": {
      "fileName": "Jingliuv0_Jingliu_Ability03_Part02",
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
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "Jingliu_Eidolon1_CriticalDamage[<span class=\"descriptionNumberColor\">Moon Crashes Tianguan Gate</span>]",
              "duration": {
                "operator": "Variables[0] (1) || RETURN",
                "displayLines": "1",
                "constants": [],
                "variables": [
                  1
                ]
              },
              "valuePerStack": {
                "MDF_PropertyValue": {
                  "operator": "Variables[0] (0.24) || RETURN",
                  "displayLines": "0.24",
                  "constants": [],
                  "variables": [
                    0.24
                  ]
                }
              }
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
            "DamageType": "Ice",
            "Damage": {
              "operator": "Variables[0] (3) || RETURN",
              "displayLines": "3",
              "constants": [],
              "variables": [
                3
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
            "name": "Eidolon Activated",
            "eidolon": 1
          },
          "passed": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "target": {
                  "name": "Target Name",
                  "target": "{{Ability Targets Adjacent(Blast)}}"
                },
                "value1": "TeamCharacterCount",
                "compareType": ">",
                "value2": 0
              },
              "passed": [
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Ability Targets Adjacent(Blast)}}"
                  },
                  "canPhase": true,
                  "AttackScaling": {
                    "DamageType": "Ice",
                    "Damage": {
                      "operator": "Variables[0] (1.5) || RETURN",
                      "displayLines": "1.5",
                      "constants": [],
                      "variables": [
                        1.5
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
              ],
              "failed": [
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Ability Target(ST)}}"
                  },
                  "canPhase": true,
                  "AttackScaling": {
                    "DamageType": "Ice",
                    "Damage": {
                      "operator": "Variables[0] (1) || RETURN",
                      "displayLines": "1",
                      "constants": [],
                      "variables": [
                        1
                      ]
                    },
                    "Toughness": null,
                    "Tags": null
                  }
                }
              ]
            }
          ],
          "failed": [
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Ability Targets Adjacent(Blast)}}"
              },
              "canPhase": true,
              "AttackScaling": {
                "DamageType": "Ice",
                "Damage": {
                  "operator": "Variables[0] (1.5) || RETURN",
                  "displayLines": "1.5",
                  "constants": [],
                  "variables": [
                    1.5
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
        {
          "name": "IF",
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "modifier": "MWJingliu_Attack_Transfer"
          },
          "passed": [
            {
              "name": "Adjust Variable Value",
              "adjustmentType": "Add to Value (Default)",
              "variableName": "Jingliu_FullMoonFlag",
              "on": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
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
              "name": "Update Displayed Energy Bar",
              "value": {
                "operator": "Variables[0] (Jingliu_FullMoonFlag) || RETURN",
                "displayLines": "Jingliu_FullMoonFlag",
                "constants": [],
                "variables": [
                  "Jingliu_FullMoonFlag"
                ]
              },
              "maximum": {
                "operator": "Variables[0] (Jingliu_FullMoonFlagMax) || RETURN",
                "displayLines": "Jingliu_FullMoonFlagMax",
                "constants": [],
                "variables": [
                  "Jingliu_FullMoonFlagMax"
                ]
              },
              "assignState": "True",
              "priorState": "Active",
              "bar#": 3,
              "cooldown": 0
            }
          ],
          "failed": [
            {
              "name": "Adjust Variable Value",
              "adjustmentType": "Add to Value (Default)",
              "variableName": "Jingliu_MoonFlag",
              "on": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
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
              "name": "Update Displayed Energy Bar",
              "value": {
                "operator": "Variables[0] (Jingliu_MoonFlag) || RETURN",
                "displayLines": "Jingliu_MoonFlag",
                "constants": [],
                "variables": [
                  "Jingliu_MoonFlag"
                ]
              },
              "maximum": {
                "operator": "Variables[0] (Jingliu_MoonFlagMax) || RETURN",
                "displayLines": "Jingliu_MoonFlagMax",
                "constants": [],
                "variables": [
                  "Jingliu_MoonFlagMax"
                ]
              },
              "assignState": "True",
              "priorState": "Normal",
              "bar#": 3,
              "cooldown": 0
            }
          ]
        },
        "Trigger: Attack End",
        "Trigger: Skip Death Handling",
        {
          "name": "IF",
          "conditions": {
            "name": "Eidolon Activated",
            "eidolon": 2
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "modifier": "Jingliu_Eidolon2[<span class=\"descriptionNumberColor\">Crescent Shadows Qixing Dipper</span>]",
              "valuePerStack": {
                "MDF_PropertyValue": {
                  "operator": "Variables[0] (0.8) || RETURN",
                  "displayLines": "0.8",
                  "constants": [],
                  "variables": [
                    0.8
                  ]
                }
              }
            }
          ]
        },
        "Trigger: Ability End"
      ],
      "references": []
    },
    "Jingliuv0_Jingliu_Ability03_Part01": {
      "fileName": "Jingliuv0_Jingliu_Ability03_Part01",
      "childAbilityList": [
        "Jingliuv0_Jingliu_Ability03_Camera",
        "Jingliuv0_Jingliu_Ability03_Part01",
        "Jingliuv0_Jingliu_Ability03_Part02",
        "Jingliuv0_Jingliu_Ability03_EnterReady"
      ],
      "skillTrigger": "Skill03",
      "abilityType": "Ultimate",
      "energy": 5,
      "toughnessList": [
        20,
        0,
        20
      ],
      "parse": [
        "Deleted bullshit",
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "ability": "Jingliu_Ability03_Part02",
          "isTrigger": true
        }
      ],
      "references": []
    },
    "Jingliuv0_Jingliu_Ability03_EnterReady": {
      "fileName": "Jingliuv0_Jingliu_Ability03_EnterReady",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "references": []
    },
    "Jingliuv0_Jingliu_Ability02_Part02": {
      "fileName": "Jingliuv0_Jingliu_Ability02_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Adjust Variable Value",
          "adjustmentType": "Add to Value (Default)",
          "variableName": "Jingliu_MoonFlag",
          "on": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
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
          "name": "Update Displayed Energy Bar",
          "value": {
            "operator": "Variables[0] (Jingliu_MoonFlag) || RETURN",
            "displayLines": "Jingliu_MoonFlag",
            "constants": [],
            "variables": [
              "Jingliu_MoonFlag"
            ]
          },
          "maximum": {
            "operator": "Variables[0] (Jingliu_MoonFlagMax) || RETURN",
            "displayLines": "Jingliu_MoonFlagMax",
            "constants": [],
            "variables": [
              "Jingliu_MoonFlagMax"
            ]
          },
          "assignState": "True",
          "priorState": "Normal",
          "bar#": 3,
          "cooldown": 0
        },
        {
          "name": "Shot Fired",
          "execute": [
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Ability Target(ST)}}"
              },
              "canPhase": true,
              "AttackScaling": {
                "DamageType": "Ice",
                "Damage": {
                  "operator": "Variables[0] (2) || RETURN",
                  "displayLines": "2",
                  "constants": [],
                  "variables": [
                    2
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
            }
          ]
        },
        "Trigger: Attack End",
        {
          "name": "IF",
          "conditions": {
            "name": "Trace Activated",
            "conditionList": "Sword Champion"
          },
          "passed": [
            {
              "name": "IF",
              "conditions": {
                "name": "Is Extra-Turn"
              },
              "passed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Current Turn Is",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    }
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "Jingliu_Trace02_ModifyAction"
                    }
                  ],
                  "failed": [
                    {
                      "name": "Action Advance/Delay",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "advanceType": "Advance",
                      "multiAdd": "-15"
                    }
                  ]
                }
              ],
              "failed": [
                {
                  "name": "Assign Advance/Delay to Current Ability Use",
                  "adjustmentValue": {
                    "operator": "Variables[0] (15) || INVERT || RETURN",
                    "displayLines": "-15",
                    "constants": [],
                    "variables": [
                      15
                    ]
                  },
                  "adjustmentType": "Advance"
                }
              ]
            }
          ]
        },
        "Trigger: Ability End"
      ],
      "references": []
    },
    "Jingliuv0_Jingliu_Ability02_Part01": {
      "fileName": "Jingliuv0_Jingliu_Ability02_Part01",
      "childAbilityList": [
        "Jingliuv0_Jingliu_Ability02_Camera",
        "Jingliuv0_Jingliu_Ability02_Part01",
        "Jingliuv0_Jingliu_Ability02_Part02"
      ],
      "skillTrigger": "Skill02",
      "abilityType": "Skill",
      "energy": 20,
      "toughnessList": [
        20,
        0,
        0
      ],
      "parse": [
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "ability": "Jingliu_Ability02_Part02",
          "isTrigger": true
        },
        "Deleted bullshit",
        "Deleted bullshit"
      ],
      "references": []
    },
    "Jingliuv0_Jingliu_Ability01_Part02": {
      "fileName": "Jingliuv0_Jingliu_Ability01_Part02",
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
            "DamageType": "Ice",
            "Damage": {
              "operator": "Variables[0] (1) || RETURN",
              "displayLines": "1",
              "constants": [],
              "variables": [
                1
              ]
            },
            "HitSplit": 0.3,
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
            "target": "{{Ability Target(ST)}}"
          },
          "canPhase": true,
          "AttackScaling": {
            "DamageType": "Ice",
            "Damage": {
              "operator": "Variables[0] (1) || RETURN",
              "displayLines": "1",
              "constants": [],
              "variables": [
                1
              ]
            },
            "HitSplit": 0.7,
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
    "Jingliuv0_Jingliu_Ability01_Part01": {
      "fileName": "Jingliuv0_Jingliu_Ability01_Part01",
      "childAbilityList": [
        "Jingliuv0_Jingliu_Ability01_Camera",
        "Jingliuv0_Jingliu_Ability01_Part01",
        "Jingliuv0_Jingliu_Ability01_Part02"
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
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "ability": "Jingliu_Ability01_Part02",
          "isTrigger": true
        },
        "Deleted bullshit",
        "Deleted bullshit"
      ],
      "references": []
    },
    "Jingliuv0_Modifiers": {
      "fileName": "Jingliuv0_Modifiers",
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
          "for": "Jingliu_LoseHPPreShow_RealShow"
        },
        {
          "name": "Modifier Construction",
          "for": "Jingliu_LoseHPPreShow",
          "execute": [
            {
              "eventTrigger": "Update Target Selected(UI) [Owner]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Compare: Target",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "target2": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        }
                      },
                      {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        "modifier": "MWJingliu_Attack_Transfer"
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Find New Target",
                      "from": {
                        "name": "Target Name",
                        "target": "{{All Team Members(Exclude Self)}}"
                      },
                      "ifTargetFound": [
                        {
                          "name": "Define Custom Variable with Stat",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "variableName": "MDF_MaxHP",
                          "value": "&nbsp;<span class=\"descriptionNumberColor\">HPMax</span>&nbsp;"
                        },
                        {
                          "name": "Update UI Preview",
                          "show": "Show",
                          "skillType": [
                            "Skill",
                            "Ultimate"
                          ],
                          "target": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "previewType": null,
                          "previewValue": {
                            "operator": "Variables[0] (MDF_MaxHP) || Variables[1] (0.04) || MUL || RETURN",
                            "displayLines": "(MDF_MaxHP * 0.04)",
                            "constants": [],
                            "variables": [
                              "MDF_MaxHP",
                              0.04
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
        },
        {
          "name": "Modifier Construction",
          "for": "Jingliu_Passive_CriticalUp[<span class=\"descriptionNumberColor\">Spectral Transmigration</span>]",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Stack Target Stat Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">CritRateBase</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (MDF_CriticalRatio) || RETURN",
                    "displayLines": "MDF_CriticalRatio",
                    "constants": [],
                    "variables": [
                      "MDF_CriticalRatio"
                    ]
                  }
                }
              ]
            }
          ],
          "description": "CRIT Rate +<span class=\"descriptionNumberColor\">MDF_CriticalRatio</span>.",
          "type": "Buff",
          "effectName": "CRIT Rate Boost",
          "statusName": "Spectral Transmigration"
        },
        {
          "name": "Modifier Construction",
          "for": "Jingliu_Trace_B1_Resist[<span class=\"descriptionNumberColor\">Deathrealm</span>]",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Stack Target Stat Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">EffectRES</span>&nbsp;",
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
          "description": "Increases Effect RES by <span class=\"descriptionNumberColor\">MDF_PropertyValue</span>.",
          "type": "Buff",
          "effectName": "Effect RES Boost",
          "statusName": "Deathrealm"
        },
        {
          "name": "Modifier Construction",
          "for": "Jingliu_Trace01",
          "execute": [
            {
              "eventTrigger": "Action End [Anyone]",
              "execute": [
                {
                  "name": "Declare Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Player Team All}}"
                  },
                  "scope": "TargetEntity",
                  "variableName": "MDF_PointB1Trigger"
                }
              ]
            },
            {
              "eventTrigger": "HP Change [Anyone]",
              "execute": [
                {
                  "name": "Define Custom Variable with Varying Data",
                  "target": null,
                  "variableName": "HPChangeValue",
                  "value": "ParamValue"
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Is Part Of",
                        "of": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "target": {
                          "name": "Target Name",
                          "target": "{{All Team Members(Exclude Self)}}"
                        },
                        "mustBeAlive2": true
                      },
                      {
                        "name": "Is Part Of Team",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target 2}}"
                        },
                        "team": "Enemy Team",
                        "invertCondition": true
                      },
                      {
                        "name": "Compare: Variable",
                        "value1": "HPChangeValue",
                        "compareType": "<",
                        "value2": 0
                      },
                      {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "value1": "MDF_PointB1Trigger",
                        "compareType": "=",
                        "value2": 1,
                        "invertCondition": true
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
                        "operator": "Variables[0] (JINGLIU_OBJECT_UNUSED_1) || RETURN",
                        "displayLines": "JINGLIU_OBJECT_UNUSED_1",
                        "constants": [],
                        "variables": [
                          "JINGLIU_OBJECT_UNUSED_1"
                        ]
                      },
                      "isFixed": "* ERR"
                    },
                    {
                      "name": "Declare Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "scope": "TargetEntity",
                      "variableName": "MDF_PointB1Trigger",
                      "value": 1
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Attack Action Completed [Anyone]",
              "execute": [
                {
                  "name": "Declare Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Player Team All}}"
                  },
                  "scope": "TargetEntity",
                  "variableName": "MDF_PointB1Trigger"
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "Jingliu_Passive_ATK",
          "stackType": "ReplaceByCaster",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Inject Ability Use",
                  "condition": {
                    "name": "Insert Ability Condition",
                    "type": "AbilityOwnerInsertCount",
                    "typeValue": 1
                  },
                  "abilityName": "Jingliu_PassiveAtkReady_Part01",
                  "abilitySource": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "abilityTarget": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "priorityTag": "AvatarBuffSelf",
                  "canHitNonTargets": true,
                  "showInActionOrder": true,
                  "abortFlags": [
                    "STAT_CTRL",
                    "DisableAction"
                  ],
                  "allowAbilityTriggers": false
                },
                {
                  "name": "Define Custom Variable with Stat",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "variableName": "MDF_MaxHP",
                  "value": "&nbsp;<span class=\"descriptionNumberColor\">HPMax</span>&nbsp;"
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "Jingliu_Passive2"
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "MWJingliu_Attack_Transfer_AddATK[<span class=\"descriptionNumberColor\">Spectral Transmigration</span>]",
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
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">ATKFlat</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (MDF_AttackDelta1) || RETURN",
                    "displayLines": "MDF_AttackDelta1",
                    "constants": [],
                    "variables": [
                      "MDF_AttackDelta1"
                    ]
                  }
                }
              ]
            },
            {
              "eventTrigger": "Attack DMG End [Owner]",
              "execute": [
                "Modifier Deletes Itself",
                {
                  "name": "Define Custom Variable",
                  "variableName": "HpConsumption",
                  "value": 0
                }
              ]
            }
          ],
          "description": "Increases ATK by <span class=\"descriptionNumberColor\">MDF_AttackDelta1</span>.",
          "type": "Buff",
          "effectName": "ATK Boost",
          "statusName": "Spectral Transmigration"
        },
        {
          "name": "Modifier Construction",
          "for": "MWJingliu_PointB3[<span class=\"descriptionNumberColor\">Frost Wraith</span>]",
          "stackType": "ReplaceByCaster",
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
                        "name": "Attack Type",
                        "attackTypes": [
                          "Ultimate"
                        ]
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Adjust Target Stats",
                      "modifiedValuesArray": [
                        {
                          "on": "Attacker",
                          "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageAll</span>&nbsp;",
                          "value": "MDF_PropertyValue"
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ],
          "description": "Ultimate deals <span class=\"descriptionNumberColor\">MDF_PropertyValue</span> more DMG.",
          "type": "Buff",
          "effectName": "DMG Boost",
          "statusName": "Frost Wraith"
        },
        {
          "name": "Modifier Construction",
          "for": "MWJingliu_Attack_Transfer",
          "stackType": "ReplaceByCaster",
          "execute": [
            {
              "eventTrigger": "When Modifier Destroyed/Removed",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Trace Activated",
                    "conditionList": "Sword Champion"
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "Jingliu_AbilityPreShow"
                    }
                  ]
                },
                {
                  "name": "Update Ability Binding",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "abilityName": "Skill02",
                  "skillSlot": "Skill",
                  "enableSecondaryType": "ControlSkill02"
                },
                {
                  "name": "Update Ability Binding",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "abilityName": "Skill01",
                  "skillSlot": "Basic ATK"
                },
                {
                  "name": "Update Ability Enhance Button",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "display": "Hide",
                  "abilityName": "Skill"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "Jingliu_Eidolon6[<span class=\"descriptionNumberColor\">Eclipse Hollows Corporeal Husk</span>]"
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Flag",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "flagName": "Charm"
                  },
                  "passed": [
                    {
                      "name": "Change Character Transformation",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "phase": "Phase3"
                    }
                  ],
                  "failed": [
                    {
                      "name": "Change Character Transformation",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "phase": "Phase1"
                    }
                  ]
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "Jingliu_Trace_B1_Resist[<span class=\"descriptionNumberColor\">Deathrealm</span>]"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "Jingliu_Trace_B2_SpeedUp[<span class=\"descriptionNumberColor\">Sword Champion</span>]"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "MWJingliu_PointB3[<span class=\"descriptionNumberColor\">Frost Wraith</span>]"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "Jingliu_Passive_CriticalUp[<span class=\"descriptionNumberColor\">Spectral Transmigration</span>]"
                }
              ]
            },
            {
              "eventTrigger": "Action End [Owner]"
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Update Ability Binding",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "abilityName": "Skill21",
                  "skillSlot": "Skill",
                  "enableSecondaryType": "ControlSkill02"
                },
                {
                  "name": "Disable Abilities",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "abilityTypes": [
                    "Basic ATK"
                  ]
                },
                {
                  "name": "Update Ability Enhance Button",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "display": "Show",
                  "abilityName": "Skill"
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
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "Jingliu_Eidolon6[<span class=\"descriptionNumberColor\">Eclipse Hollows Corporeal Husk</span>]",
                      "valuePerStack": {
                        "MDF_CriticalDamage": {
                          "operator": "Variables[0] (0.5) || RETURN",
                          "displayLines": "0.5",
                          "constants": [],
                          "variables": [
                            0.5
                          ]
                        }
                      }
                    }
                  ]
                },
                {
                  "name": "Change Character Transformation",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "phase": "Phase2"
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Trace Activated",
                    "conditionList": "Deathrealm"
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "Jingliu_Trace_B1_Resist[<span class=\"descriptionNumberColor\">Deathrealm</span>]",
                      "valuePerStack": {
                        "MDF_PropertyValue": {
                          "operator": "Variables[0] (0.35) || RETURN",
                          "displayLines": "0.35",
                          "constants": [],
                          "variables": [
                            0.35
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
                    "conditionList": "Frost Wraith"
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "MWJingliu_PointB3[<span class=\"descriptionNumberColor\">Frost Wraith</span>]",
                      "valuePerStack": {
                        "MDF_PropertyValue": {
                          "operator": "Variables[0] (0.25) || RETURN",
                          "displayLines": "0.25",
                          "constants": [],
                          "variables": [
                            0.25
                          ]
                        }
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
                  "modifier": "Jingliu_Passive_CriticalUp[<span class=\"descriptionNumberColor\">Spectral Transmigration</span>]",
                  "valuePerStack": {
                    "MDF_CriticalRatio": {
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
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "Jingliu_AbilityPreShow"
                }
              ]
            },
            {
              "eventTrigger": "Ability Use [Owner]: Start",
              "execute": [
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{All Team Members(Exclude Self)}}"
                  },
                  "searchRandom": true,
                  "conditions": {
                    "name": "Is Entity a Battle Event/Summon",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "invertCondition": true
                  },
                  "ifTargetFound": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "value1": "CurrentHP%",
                        "compareType": ">",
                        "value2": {
                          "operator": "Variables[0] (SkillP01_P2_HpConsumption) || RETURN",
                          "displayLines": "SkillP01_P2_HpConsumption",
                          "constants": [],
                          "variables": [
                            "SkillP01_P2_HpConsumption"
                          ]
                        }
                      },
                      "passed": [
                        {
                          "name": "Define Custom Variable with Stat",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "variableName": "TargetMaxHp",
                          "value": "&nbsp;<span class=\"descriptionNumberColor\">HPMax</span>&nbsp;"
                        },
                        {
                          "name": "Consume",
                          "consumeFrom": "MaxHP",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "consumePercent": {
                            "operator": "Variables[0] (SkillP01_P2_HpConsumption) || RETURN",
                            "displayLines": "SkillP01_P2_HpConsumption",
                            "constants": [],
                            "variables": [
                              "SkillP01_P2_HpConsumption"
                            ]
                          }
                        },
                        {
                          "name": "Define Custom Variable",
                          "variableName": "HpConsumption",
                          "value": {
                            "operator": "Variables[0] (HpConsumption) || Variables[1] (TargetMaxHp) || Variables[2] (SkillP01_P2_HpConsumption) || MUL || ADD || RETURN",
                            "displayLines": "(HpConsumption + (TargetMaxHp * SkillP01_P2_HpConsumption))",
                            "constants": [],
                            "variables": [
                              "HpConsumption",
                              "TargetMaxHp",
                              "SkillP01_P2_HpConsumption"
                            ]
                          }
                        }
                      ],
                      "failed": [
                        {
                          "name": "Define Custom Variable with Stat",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "variableName": "TargetCurrentHp",
                          "value": "&nbsp;<span class=\"descriptionNumberColor\">HPCurrent</span>&nbsp;"
                        },
                        {
                          "name": "Set HP Value",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "setValue": 1
                        },
                        {
                          "name": "Define Custom Variable",
                          "variableName": "HpConsumption",
                          "value": {
                            "operator": "Variables[0] (HpConsumption) || Variables[1] (TargetCurrentHp) || ADD || Constants[0] (1) || SUB || RETURN",
                            "displayLines": "((HpConsumption + TargetCurrentHp) - 1)",
                            "constants": [
                              1
                            ],
                            "variables": [
                              "HpConsumption",
                              "TargetCurrentHp"
                            ]
                          }
                        }
                      ]
                    }
                  ]
                },
                {
                  "name": "Define Custom Variable with Stat",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "variableName": "MDF_BaseAttack",
                  "value": "&nbsp;<span class=\"descriptionNumberColor\">ATKBase</span>&nbsp;"
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Eidolon Activated",
                    "eidolon": 4
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "MDF_AttackDelta",
                      "value": {
                        "operator": "Variables[0] (SkillP01_P3_ATKRatioUp) || Variables[1] (HpConsumption) || MUL || Variables[2] (SkillRank_Rank04_P1_DamageUpRatio) || Variables[1] (HpConsumption) || MUL || ADD || RETURN",
                        "displayLines": "((SkillP01_P3_ATKRatioUp * HpConsumption) + (SkillRank_Rank04_P1_DamageUpRatio * HpConsumption))",
                        "constants": [],
                        "variables": [
                          "SkillP01_P3_ATKRatioUp",
                          "HpConsumption",
                          "SkillRank_Rank04_P1_DamageUpRatio"
                        ]
                      }
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "MDF_AttackDelta",
                        "compareType": ">",
                        "value2": {
                          "operator": "Variables[0] (SkillP01_P4_JingliuAttackBase) || Variables[1] (MDF_BaseAttack) || MUL || Variables[2] (SkillRank_Rank04_P2_DamageUpLimit) || Variables[1] (MDF_BaseAttack) || MUL || ADD || RETURN",
                          "displayLines": "((SkillP01_P4_JingliuAttackBase * MDF_BaseAttack) + (SkillRank_Rank04_P2_DamageUpLimit * MDF_BaseAttack))",
                          "constants": [],
                          "variables": [
                            "SkillP01_P4_JingliuAttackBase",
                            "MDF_BaseAttack",
                            "SkillRank_Rank04_P2_DamageUpLimit"
                          ]
                        }
                      },
                      "passed": [
                        {
                          "name": "Define Custom Variable",
                          "variableName": "MDF_AttackDelta",
                          "value": {
                            "operator": "Variables[0] (SkillP01_P4_JingliuAttackBase) || Variables[1] (MDF_BaseAttack) || MUL || Variables[2] (SkillRank_Rank04_P2_DamageUpLimit) || Variables[1] (MDF_BaseAttack) || MUL || ADD || RETURN",
                            "displayLines": "((SkillP01_P4_JingliuAttackBase * MDF_BaseAttack) + (SkillRank_Rank04_P2_DamageUpLimit * MDF_BaseAttack))",
                            "constants": [],
                            "variables": [
                              "SkillP01_P4_JingliuAttackBase",
                              "MDF_BaseAttack",
                              "SkillRank_Rank04_P2_DamageUpLimit"
                            ]
                          }
                        }
                      ]
                    }
                  ],
                  "failed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "MDF_AttackDelta",
                      "value": {
                        "operator": "Variables[0] (SkillP01_P3_ATKRatioUp) || Variables[1] (HpConsumption) || MUL || RETURN",
                        "displayLines": "(SkillP01_P3_ATKRatioUp * HpConsumption)",
                        "constants": [],
                        "variables": [
                          "SkillP01_P3_ATKRatioUp",
                          "HpConsumption"
                        ]
                      }
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "MDF_AttackDelta",
                        "compareType": ">",
                        "value2": {
                          "operator": "Variables[0] (SkillP01_P4_JingliuAttackBase) || Variables[1] (MDF_BaseAttack) || MUL || RETURN",
                          "displayLines": "(SkillP01_P4_JingliuAttackBase * MDF_BaseAttack)",
                          "constants": [],
                          "variables": [
                            "SkillP01_P4_JingliuAttackBase",
                            "MDF_BaseAttack"
                          ]
                        }
                      },
                      "passed": [
                        {
                          "name": "Define Custom Variable",
                          "variableName": "MDF_AttackDelta",
                          "value": {
                            "operator": "Variables[0] (SkillP01_P4_JingliuAttackBase) || Variables[1] (MDF_BaseAttack) || MUL || RETURN",
                            "displayLines": "(SkillP01_P4_JingliuAttackBase * MDF_BaseAttack)",
                            "constants": [],
                            "variables": [
                              "SkillP01_P4_JingliuAttackBase",
                              "MDF_BaseAttack"
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
                    "name": "Compare: Variable",
                    "value1": "MDF_AttackDelta",
                    "compareType": ">",
                    "value2": 0,
                    "contextScope": "TargetEntity"
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "MWJingliu_Attack_Transfer_AddATK[<span class=\"descriptionNumberColor\">Spectral Transmigration</span>]",
                      "valuePerStack": {
                        "MDF_AttackDelta1": {
                          "operator": "Variables[0] (MDF_AttackDelta) || RETURN",
                          "displayLines": "MDF_AttackDelta",
                          "constants": [],
                          "variables": [
                            "MDF_AttackDelta"
                          ]
                        }
                      }
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "When Modifier is Added [Owner]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Flag",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "flagName": "Charm"
                  },
                  "passed": [
                    {
                      "name": "Update Ability Binding",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "abilityName": "Skill21",
                      "skillSlot": "Skill"
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "HpConsumption",
                      "value": 0
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "When Losing Modifier [Owner]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Flag",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "flagName": "Charm",
                    "invertCondition": true
                  },
                  "passed": [
                    {
                      "name": "Update Ability Binding",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "abilityName": "Skill01",
                      "skillSlot": "Basic ATK"
                    },
                    {
                      "name": "Update Ability Binding",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "abilityName": "Skill21",
                      "skillSlot": "Skill",
                      "enableSecondaryType": "ControlSkill02"
                    },
                    {
                      "name": "Disable Abilities",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "abilityTypes": [
                        "Basic ATK"
                      ]
                    }
                  ]
                }
              ]
            }
          ],
          "stackData": [
            "SkillP01_P1_HpConsumption",
            "SkillP01_P3_ATKRatioUp",
            "SkillP01_P2_HpConsumption",
            "SkillP01_P4_JingliuAttackBase",
            "SkillRank_Rank04_P1_DamageUpRatio",
            "SkillRank_Rank04_P2_DamageUpLimit"
          ],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "Jingliu_Eidolon6[<span class=\"descriptionNumberColor\">Eclipse Hollows Corporeal Husk</span>]",
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
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">CritDamageBase</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (MDF_CriticalDamage) || RETURN",
                    "displayLines": "MDF_CriticalDamage",
                    "constants": [],
                    "variables": [
                      "MDF_CriticalDamage"
                    ]
                  }
                }
              ]
            }
          ],
          "stackData": [
            "MDF_CriticalDamage"
          ],
          "latentQueue": [
            "SkillRank_Rank04_P2_DamageUpLimit",
            "SkillRank_Rank04_P1_DamageUpRatio"
          ],
          "description": "CRIT DMG +<span class=\"descriptionNumberColor\">MDF_CriticalDamage</span>.",
          "type": "Buff",
          "effectName": "CRIT DMG Boost",
          "statusName": "Eclipse Hollows Corporeal Husk"
        },
        {
          "name": "Modifier Construction",
          "for": "Jingliu_Eidolon2[<span class=\"descriptionNumberColor\">Crescent Shadows Qixing Dipper</span>]",
          "execute": [
            {
              "eventTrigger": "Deal Damage Start [Owner]: Hit",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Attack Type",
                        "attackTypes": [
                          "Skill"
                        ]
                      },
                      {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        "modifier": "MWJingliu_Attack_Transfer"
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Adjust Target Stats",
                      "modifiedValuesArray": [
                        {
                          "on": "Attacker",
                          "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageAll</span>&nbsp;",
                          "value": "MDF_PropertyValue"
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ],
          "stackData": [
            "MDF_PropertyValue"
          ],
          "latentQueue": [],
          "description": "Increases DMG dealt by the next Enhanced Skill by <span class=\"descriptionNumberColor\">MDF_PropertyValue</span>.",
          "type": "Buff",
          "statusName": "Crescent Shadows Qixing Dipper"
        },
        {
          "name": "Modifier Construction",
          "for": "Jingliu_Eidolon1_CriticalDamage[<span class=\"descriptionNumberColor\">Moon Crashes Tianguan Gate</span>]",
          "stackType": "ReplaceByCaster",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Stack Target Stat Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">CritDamageBase</span>&nbsp;",
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
          "description": "CRIT DMG +<span class=\"descriptionNumberColor\">MDF_PropertyValue</span>.",
          "type": "Buff",
          "effectName": "CRIT DMG Boost",
          "statusName": "Moon Crashes Tianguan Gate"
        },
        {
          "name": "Modifier Construction",
          "for": "Jingliu_Passive2",
          "execute": [
            {
              "eventTrigger": "Action Choice Window [Anyone]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Compare: Variable",
                        "value1": "Jingliu_FullMoonFlag",
                        "compareType": "=",
                        "value2": 0
                      },
                      {
                        "name": "Compare: Variable",
                        "skillOwner": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        "value1": "QueuedUltimates",
                        "compareType": "=",
                        "value2": 0
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        "modifier": "MWJingliu_Attack_Transfer"
                      },
                      "passed": [
                        {
                          "name": "Update Displayed Energy Bar",
                          "value": {
                            "operator": "Variables[0] (Jingliu_MoonFlag) || RETURN",
                            "displayLines": "Jingliu_MoonFlag",
                            "constants": [],
                            "variables": [
                              "Jingliu_MoonFlag"
                            ]
                          },
                          "maximum": {
                            "operator": "Variables[0] (Jingliu_MoonFlagMax) || RETURN",
                            "displayLines": "Jingliu_MoonFlagMax",
                            "constants": [],
                            "variables": [
                              "Jingliu_MoonFlagMax"
                            ]
                          },
                          "assignState": "True",
                          "priorState": "Normal",
                          "bar#": 3,
                          "cooldown": 0
                        }
                      ]
                    },
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "Jingliu_Passive_ATK"
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "HpConsumption",
                      "value": 0
                    },
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "MWJingliu_Attack_Transfer"
                    },
                    "Modifier Deletes Itself"
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Turn [Action-End Phase]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "Jingliu_FullMoonFlag",
                    "compareType": "=",
                    "value2": 0
                  },
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        "modifier": "MWJingliu_Attack_Transfer"
                      },
                      "passed": [
                        {
                          "name": "Update Displayed Energy Bar",
                          "value": {
                            "operator": "Variables[0] (Jingliu_MoonFlag) || RETURN",
                            "displayLines": "Jingliu_MoonFlag",
                            "constants": [],
                            "variables": [
                              "Jingliu_MoonFlag"
                            ]
                          },
                          "maximum": {
                            "operator": "Variables[0] (Jingliu_MoonFlagMax) || RETURN",
                            "displayLines": "Jingliu_MoonFlagMax",
                            "constants": [],
                            "variables": [
                              "Jingliu_MoonFlagMax"
                            ]
                          },
                          "assignState": "True",
                          "priorState": "Normal",
                          "bar#": 3,
                          "cooldown": 0
                        }
                      ]
                    },
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "Jingliu_Passive_ATK"
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "HpConsumption",
                      "value": 0
                    },
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "MWJingliu_Attack_Transfer"
                    },
                    "Modifier Deletes Itself"
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Extra Turn Action Injection: Start",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "Jingliu_FullMoonFlag",
                    "compareType": "=",
                    "value2": 0
                  },
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        "modifier": "MWJingliu_Attack_Transfer"
                      },
                      "passed": [
                        {
                          "name": "Update Displayed Energy Bar",
                          "value": {
                            "operator": "Variables[0] (Jingliu_MoonFlag) || RETURN",
                            "displayLines": "Jingliu_MoonFlag",
                            "constants": [],
                            "variables": [
                              "Jingliu_MoonFlag"
                            ]
                          },
                          "maximum": {
                            "operator": "Variables[0] (Jingliu_MoonFlagMax) || RETURN",
                            "displayLines": "Jingliu_MoonFlagMax",
                            "constants": [],
                            "variables": [
                              "Jingliu_MoonFlagMax"
                            ]
                          },
                          "assignState": "True",
                          "priorState": "Normal",
                          "bar#": 3,
                          "cooldown": 0
                        }
                      ]
                    },
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "Jingliu_Passive_ATK"
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "HpConsumption",
                      "value": 0
                    },
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "MWJingliu_Attack_Transfer"
                    },
                    "Modifier Deletes Itself"
                  ]
                }
              ]
            },
            {
              "eventTrigger": "When Modifier is Added [Owner]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Compare: Variable",
                        "value1": "Jingliu_FullMoonFlag",
                        "compareType": "=",
                        "value2": 0
                      },
                      {
                        "name": "Has Flag",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "flagName": "UnOperable"
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        "modifier": "MWJingliu_Attack_Transfer"
                      },
                      "passed": [
                        {
                          "name": "Update Displayed Energy Bar",
                          "value": {
                            "operator": "Variables[0] (Jingliu_MoonFlag) || RETURN",
                            "displayLines": "Jingliu_MoonFlag",
                            "constants": [],
                            "variables": [
                              "Jingliu_MoonFlag"
                            ]
                          },
                          "maximum": {
                            "operator": "Variables[0] (Jingliu_MoonFlagMax) || RETURN",
                            "displayLines": "Jingliu_MoonFlagMax",
                            "constants": [],
                            "variables": [
                              "Jingliu_MoonFlagMax"
                            ]
                          },
                          "assignState": "True",
                          "priorState": "Normal",
                          "bar#": 3,
                          "cooldown": 0
                        }
                      ]
                    },
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "Jingliu_Passive_ATK"
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "HpConsumption",
                      "value": 0
                    },
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "MWJingliu_Attack_Transfer"
                    },
                    "Modifier Deletes Itself"
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
          "for": "Jingliu_Passive",
          "execute": [
            {
              "eventTrigger": "When Put in Deathstate Limbo"
            },
            {
              "eventTrigger": "Ability Use [Owner]: End",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Compare: Variable",
                        "value1": "Jingliu_MoonFlag",
                        "compareType": "=",
                        "value2": {
                          "operator": "Variables[0] (Jingliu_MoonFlagMax) || RETURN",
                          "displayLines": "Jingliu_MoonFlagMax",
                          "constants": [],
                          "variables": [
                            "Jingliu_MoonFlagMax"
                          ]
                        }
                      },
                      {
                        "name": "Enemies Still Alive",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        "includeNonTargets": true
                      },
                      {
                        "name": "Has Flag",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        "flagName": "STAT_CTRL",
                        "invertCondition": true
                      },
                      {
                        "name": "Has Flag",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        "flagName": "DisableAction",
                        "invertCondition": true
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "Jingliu_Passive_ATK"
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Eidolon Activated",
                        "eidolon": 6
                      },
                      "passed": [
                        {
                          "name": "Adjust Variable Value",
                          "adjustmentType": "Overwrite Value",
                          "variableName": "Jingliu_FullMoonFlag",
                          "on": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "value": {
                            "operator": "Variables[0] (Jingliu_MoonFlag) || Variables[1] (1) || ADD || RETURN",
                            "displayLines": "(Jingliu_MoonFlag + 1)",
                            "constants": [],
                            "variables": [
                              "Jingliu_MoonFlag",
                              1
                            ]
                          }
                        }
                      ],
                      "failed": [
                        {
                          "name": "Adjust Variable Value",
                          "adjustmentType": "Overwrite Value",
                          "variableName": "Jingliu_FullMoonFlag",
                          "on": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "value": {
                            "operator": "Variables[0] (Jingliu_MoonFlag) || RETURN",
                            "displayLines": "Jingliu_MoonFlag",
                            "constants": [],
                            "variables": [
                              "Jingliu_MoonFlag"
                            ]
                          }
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Ultimate Prep-Phase [Owner]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "modifier": "MWJingliu_Attack_Transfer"
                  },
                  "passed": [
                    {
                      "name": "Change Character Transformation",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "phase": "Phase2"
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "When Losing Modifier [Owner]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "OR",
                    "conditionList": [
                      {
                        "name": "Modifier Has Flag",
                        "flagName": "STAT_CTRL"
                      },
                      {
                        "name": "Modifier Has Flag",
                        "flagName": "DisableAction"
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
                            "name": "Has Flag",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Caster}}"
                            },
                            "flagName": "STAT_CTRL",
                            "invertCondition": true
                          },
                          {
                            "name": "Has Flag",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Caster}}"
                            },
                            "flagName": "DisableAction",
                            "invertCondition": true
                          },
                          {
                            "name": "Compare: Variable",
                            "value1": "Jingliu_MoonFlag",
                            "compareType": "=",
                            "value2": {
                              "operator": "Variables[0] (Jingliu_MoonFlagMax) || RETURN",
                              "displayLines": "Jingliu_MoonFlagMax",
                              "constants": [],
                              "variables": [
                                "Jingliu_MoonFlagMax"
                              ]
                            }
                          },
                          {
                            "name": "Enemies Still Alive",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Caster}}"
                            },
                            "includeNonTargets": true
                          }
                        ]
                      },
                      "passed": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "modifier": "Jingliu_Passive_ATK"
                        },
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Eidolon Activated",
                            "eidolon": 6
                          },
                          "passed": [
                            {
                              "name": "Adjust Variable Value",
                              "adjustmentType": "Overwrite Value",
                              "variableName": "Jingliu_FullMoonFlag",
                              "on": {
                                "name": "Target Name",
                                "target": "{{Caster}}"
                              },
                              "value": {
                                "operator": "Variables[0] (Jingliu_MoonFlag) || Variables[1] (1) || ADD || RETURN",
                                "displayLines": "(Jingliu_MoonFlag + 1)",
                                "constants": [],
                                "variables": [
                                  "Jingliu_MoonFlag",
                                  1
                                ]
                              }
                            }
                          ],
                          "failed": [
                            {
                              "name": "Adjust Variable Value",
                              "adjustmentType": "Overwrite Value",
                              "variableName": "Jingliu_FullMoonFlag",
                              "on": {
                                "name": "Target Name",
                                "target": "{{Caster}}"
                              },
                              "value": {
                                "operator": "Variables[0] (Jingliu_MoonFlag) || RETURN",
                                "displayLines": "Jingliu_MoonFlag",
                                "constants": [],
                                "variables": [
                                  "Jingliu_MoonFlag"
                                ]
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
              "eventTrigger": "New Enemy Wave",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Compare: Variable",
                        "value1": "Jingliu_MoonFlag",
                        "compareType": "=",
                        "value2": {
                          "operator": "Variables[0] (Jingliu_MoonFlagMax) || RETURN",
                          "displayLines": "Jingliu_MoonFlagMax",
                          "constants": [],
                          "variables": [
                            "Jingliu_MoonFlagMax"
                          ]
                        }
                      },
                      {
                        "name": "Has Flag",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        "flagName": "STAT_CTRL",
                        "invertCondition": true
                      },
                      {
                        "name": "Has Flag",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        "flagName": "DisableAction",
                        "invertCondition": true
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "Jingliu_Passive_ATK"
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Eidolon Activated",
                        "eidolon": 6
                      },
                      "passed": [
                        {
                          "name": "Adjust Variable Value",
                          "adjustmentType": "Overwrite Value",
                          "variableName": "Jingliu_FullMoonFlag",
                          "on": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "value": {
                            "operator": "Variables[0] (Jingliu_MoonFlag) || Variables[1] (1) || ADD || RETURN",
                            "displayLines": "(Jingliu_MoonFlag + 1)",
                            "constants": [],
                            "variables": [
                              "Jingliu_MoonFlag",
                              1
                            ]
                          }
                        }
                      ],
                      "failed": [
                        {
                          "name": "Adjust Variable Value",
                          "adjustmentType": "Overwrite Value",
                          "variableName": "Jingliu_FullMoonFlag",
                          "on": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "value": {
                            "operator": "Variables[0] (Jingliu_MoonFlag) || RETURN",
                            "displayLines": "Jingliu_MoonFlag",
                            "constants": [],
                            "variables": [
                              "Jingliu_MoonFlag"
                            ]
                          }
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Injected Ability Use [Anyone]: End",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Compare: Variable",
                        "value1": "Jingliu_MoonFlag",
                        "compareType": "=",
                        "value2": {
                          "operator": "Variables[0] (Jingliu_MoonFlagMax) || RETURN",
                          "displayLines": "Jingliu_MoonFlagMax",
                          "constants": [],
                          "variables": [
                            "Jingliu_MoonFlagMax"
                          ]
                        }
                      },
                      {
                        "name": "Enemies Still Alive",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        "includeNonTargets": true
                      },
                      {
                        "name": "Has Flag",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        "flagName": "STAT_CTRL",
                        "invertCondition": true
                      },
                      {
                        "name": "Has Flag",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        "flagName": "DisableAction",
                        "invertCondition": true
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "Jingliu_Passive_ATK"
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Eidolon Activated",
                        "eidolon": 6
                      },
                      "passed": [
                        {
                          "name": "Adjust Variable Value",
                          "adjustmentType": "Overwrite Value",
                          "variableName": "Jingliu_FullMoonFlag",
                          "on": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "value": {
                            "operator": "Variables[0] (Jingliu_MoonFlag) || Variables[1] (1) || ADD || RETURN",
                            "displayLines": "(Jingliu_MoonFlag + 1)",
                            "constants": [],
                            "variables": [
                              "Jingliu_MoonFlag",
                              1
                            ]
                          }
                        }
                      ],
                      "failed": [
                        {
                          "name": "Adjust Variable Value",
                          "adjustmentType": "Overwrite Value",
                          "variableName": "Jingliu_FullMoonFlag",
                          "on": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "value": {
                            "operator": "Variables[0] (Jingliu_MoonFlag) || RETURN",
                            "displayLines": "Jingliu_MoonFlag",
                            "constants": [],
                            "variables": [
                              "Jingliu_MoonFlag"
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
          "variableValueChange": [
            {
              "name": "Variable Value Changes",
              "variableName": "Jingliu_MoonFlag",
              "from": "ContextOwner",
              "valueRanges": [
                {
                  "name": "Variable Value Range Conditions",
                  "minValue": 1,
                  "maxValue": 1,
                  "includeMaxValueInRange": true,
                  "whenEnteringRange": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "Jingliu_Transfer_PreShow"
                    }
                  ],
                  "whenLeavingRange": [
                    {
                      "name": "Remove Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "Jingliu_Transfer_PreShow"
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
          "for": "Jingliu_Transfer_PreShow",
          "stackData": [],
          "latentQueue": [],
          "previewValue": {
            "name": "Modifier: UI Preview",
            "show": "Hide",
            "target": {
              "name": "Target Name",
              "target": "{{Modifier Holder}}"
            },
            "skillType": [
              "Skill",
              "Ultimate"
            ],
            "delayAdvancePreview": {
              "name": "Delay/Advance Preview",
              "previewValue": {
                "operator": "Variables[0] (1) || INVERT || RETURN",
                "displayLines": "-1",
                "constants": [],
                "variables": [
                  1
                ]
              }
            }
          }
        },
        {
          "name": "Modifier Construction",
          "for": "Jingliu_AbilityPreShow",
          "stackData": [],
          "latentQueue": [
            "SkillRank_Rank04_P2_DamageUpLimit",
            "SkillRank_Rank04_P1_DamageUpRatio"
          ],
          "previewValue": {
            "name": "Modifier: UI Preview",
            "show": "Hide",
            "target": {
              "name": "Target Name",
              "target": "{{Modifier Holder}}"
            },
            "skillType": [
              "Skill"
            ],
            "delayAdvancePreview": {
              "name": "Delay/Advance Preview",
              "previewValue": {
                "operator": "Variables[0] (15) || INVERT || RETURN",
                "displayLines": "-15",
                "constants": [],
                "variables": [
                  15
                ]
              }
            }
          }
        },
        {
          "name": "Modifier Construction",
          "for": "Jingliu_Trace02_ModifyAction",
          "stackType": "Multiple",
          "execute": [
            {
              "eventTrigger": "Turn End [Anyone]",
              "execute": [
                {
                  "name": "Action Advance/Delay",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "advanceType": "Advance",
                  "multiAdd": "-15"
                },
                "Modifier Deletes Itself"
              ]
            }
          ],
          "stackData": [],
          "latentQueue": [],
          "previewValue": {
            "name": "Modifier: UI Preview",
            "show": "Hide",
            "target": {
              "name": "Target Name",
              "target": "{{Modifier Holder}}"
            },
            "skillType": [
              "Skill"
            ],
            "delayAdvancePreview": {
              "name": "Delay/Advance Preview",
              "previewValue": {
                "operator": "Variables[0] (15) || INVERT || RETURN",
                "displayLines": "-15",
                "constants": [],
                "variables": [
                  15
                ]
              }
            }
          }
        }
      ],
      "references": []
    }
  }
}