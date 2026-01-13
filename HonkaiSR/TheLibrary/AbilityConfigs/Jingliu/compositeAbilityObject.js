const compositeAbilityObject = {
  "fullCharacterName": "Jingliu",
  "trimCharacterName": "Jingliu",
  "abilityList": [
    "Jingliu_Advanced_Jingliu_Trace03",
    "Jingliu_Advanced_Jingliu_TechniqueInLevel",
    "Jingliu_Advanced_Jingliu_PassiveAtkReady_Ability",
    "Jingliu_Advanced_Jingliu_PassiveAtkReady_Part01",
    "Jingliu_Advanced_Jingliu_PassiveAbility01",
    "Jingliu_Advanced_Jingliu_Ability03_Part02",
    "Jingliu_Advanced_Jingliu_Ability03_Part01",
    "Jingliu_Advanced_Jingliu_Ability03_EnterReady",
    "Jingliu_Advanced_Jingliu_Ability02_Part02",
    "Jingliu_Advanced_Jingliu_Ability02_Part01",
    "Jingliu_Advanced_Jingliu_Ability01_Part02",
    "Jingliu_Advanced_Jingliu_Ability01_Part01",
    "Jingliu_Modifiers"
  ],
  "abilityObject": {
    "Jingliu_Advanced_Jingliu_Trace03": {
      "fileName": "Jingliu_Advanced_Jingliu_Trace03",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "references": []
    },
    "Jingliu_Advanced_Jingliu_TechniqueInLevel": {
      "fileName": "Jingliu_Advanced_Jingliu_TechniqueInLevel",
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
          "modifier": "Technique_Jingliu_Modifier"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "Technique_Jingliu_Modifier_Frozen[<span class=\"descriptionNumberColor\">Frozen</span>]",
          "stackType": "ReplaceByCaster",
          "modifierFlags": [
            "DisableAction",
            "STAT_CTRL_Frozen_Effect",
            "STAT_CTRL_Frozen",
            "STAT_CTRL"
          ],
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Is NOT in Auto-Battle State"
                  }
                }
              ]
            },
            {
              "eventTrigger": "When Modifier Destroyed/Removed",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Target Exists",
                    "target": "Owner of this Modifier",
                    "living": true
                  },
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Has Flag",
                        "target": "Owner of this Modifier",
                        "flagName": "STAT_CTRL_Frozen_Effect",
                        "invertCondition": true
                      }
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Turn [Pre-action Phase]",
              "execute": [
                {
                  "name": "ATK Scaling DMG",
                  "target": "Owner of this Modifier",
                  "AttackScaling": {
                    "DamageType": "Ice",
                    "Damage": {
                      "operator": "Variables[0] (Modifier_Frozen_DamageValue) || RETURN",
                      "displayLines": "Modifier_Frozen_DamageValue",
                      "constants": [],
                      "variables": [
                        "Modifier_Frozen_DamageValue"
                      ]
                    },
                    "dmgFormula": "Max HP Scaling",
                    "Toughness": null,
                    "Tags": null,
                    "attackType": "Additional DMG"
                  }
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": "Owner of this Modifier",
                    "value1": null,
                    "compareType": "=",
                    "value2": 1,
                    "valueType": "LifeTime"
                  },
                  "failed": [
                    {
                      "name": "UI Display Event (On Entity)",
                      "target": "Owner of this Modifier",
                      "popUpText": "Frozen"
                    }
                  ]
                },
                {
                  "name": "Assign Advance/Delay to Current Ability Use",
                  "adjustmentValue": {
                    "operator": "Variables[0] (STANDARDSPECIFIC_OBJECT_UNUSED_8[Freeze Delay, unassigned]) || RETURN",
                    "displayLines": "STANDARDSPECIFIC_OBJECT_UNUSED_8[Freeze Delay, unassigned]",
                    "constants": [],
                    "variables": [
                      "STANDARDSPECIFIC_OBJECT_UNUSED_8[Freeze Delay, unassigned]"
                    ]
                  },
                  "adjustmentType": "="
                }
              ]
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Disable Abilities",
                  "target": "Owner of this Modifier",
                  "abilityTypes": [
                    "Ultimate"
                  ],
                  "text": "Ability cannot be used"
                }
              ]
            }
          ],
          "useEntitySnapshot": true,
          "description": "Cannot take action for a certain number of turns and takes Ice Additional DMG at the beginning of each turn.",
          "type": "Debuff",
          "effectName": "Frozen",
          "statusName": "Frozen"
        },
        {
          "name": "Modifier Construction",
          "for": "Advanced_Jingliu_TechniqueUsage",
          "stackType": "ReplaceByCaster",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Adjust Variable Value",
                  "adjustmentType": "Add to Value (Default)",
                  "variableName": "Jingliu_MoonFlag",
                  "on": "Caster",
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
                      "to": "All Hostile Entities (AOE)",
                      "modifier": "Technique_Jingliu_Modifier_Frozen[<span class=\"descriptionNumberColor\">Frozen</span>]",
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
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": "Caster",
                      "modifier": "Advanced_Jingliu_TechniqueUsage",
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
    "Jingliu_Advanced_Jingliu_PassiveAtkReady_Ability": {
      "fileName": "Jingliu_Advanced_Jingliu_PassiveAtkReady_Ability",
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
          "name": "IF",
          "conditions": {
            "name": "Eidolon Activated",
            "eidolon": 1
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": "Caster",
              "modifier": "Advanced_Jingliu_Eidolon1_CriticalDamage[<span class=\"descriptionNumberColor\">Moon Crashes Tianguan Gate</span>]",
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
                  "operator": "Variables[0] (0.36) || RETURN",
                  "displayLines": "0.36",
                  "constants": [],
                  "variables": [
                    0.36
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
              "target": "Single Target (Primary)",
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
                "dmgFormula": "Max HP Scaling",
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
                  "name": "ATK Scaling DMG",
                  "target": "Blast (Adjacent)",
                  "AttackScaling": {
                    "DamageType": "Ice",
                    "Damage": {
                      "operator": "Variables[0] (0.75) || RETURN",
                      "displayLines": "0.75",
                      "constants": [],
                      "variables": [
                        0.75
                      ]
                    },
                    "dmgFormula": "Max HP Scaling",
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
                },
                {
                  "name": "ATK Scaling DMG",
                  "target": "Single Target (Primary)",
                  "AttackScaling": {
                    "DamageType": "Ice",
                    "Damage": {
                      "operator": "Variables[0] (0.8) || RETURN",
                      "displayLines": "0.8",
                      "constants": [],
                      "variables": [
                        0.8
                      ]
                    },
                    "dmgFormula": "Max HP Scaling",
                    "HitSplit": 0.1,
                    "Toughness": null,
                    "Tags": null
                  }
                }
              ],
              "failed": [
                {
                  "name": "ATK Scaling DMG",
                  "target": "Blast (Adjacent)",
                  "AttackScaling": {
                    "DamageType": "Ice",
                    "Damage": {
                      "operator": "Variables[0] (0.75) || RETURN",
                      "displayLines": "0.75",
                      "constants": [],
                      "variables": [
                        0.75
                      ]
                    },
                    "dmgFormula": "Max HP Scaling",
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
              "target": "Single Target (Primary)",
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
                "dmgFormula": "Max HP Scaling",
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
                  "name": "ATK Scaling DMG",
                  "target": "Blast (Adjacent)",
                  "AttackScaling": {
                    "DamageType": "Ice",
                    "Damage": {
                      "operator": "Variables[0] (0.75) || RETURN",
                      "displayLines": "0.75",
                      "constants": [],
                      "variables": [
                        0.75
                      ]
                    },
                    "dmgFormula": "Max HP Scaling",
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
                },
                {
                  "name": "ATK Scaling DMG",
                  "target": "Single Target (Primary)",
                  "AttackScaling": {
                    "DamageType": "Ice",
                    "Damage": {
                      "operator": "Variables[0] (0.8) || RETURN",
                      "displayLines": "0.8",
                      "constants": [],
                      "variables": [
                        0.8
                      ]
                    },
                    "dmgFormula": "Max HP Scaling",
                    "HitSplit": 0.1,
                    "Toughness": null,
                    "Tags": null
                  }
                }
              ],
              "failed": [
                {
                  "name": "ATK Scaling DMG",
                  "target": "Blast (Adjacent)",
                  "AttackScaling": {
                    "DamageType": "Ice",
                    "Damage": {
                      "operator": "Variables[0] (0.75) || RETURN",
                      "displayLines": "0.75",
                      "constants": [],
                      "variables": [
                        0.75
                      ]
                    },
                    "dmgFormula": "Max HP Scaling",
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
              "target": "Single Target (Primary)",
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
                "dmgFormula": "Max HP Scaling",
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
                  "name": "ATK Scaling DMG",
                  "target": "Blast (Adjacent)",
                  "AttackScaling": {
                    "DamageType": "Ice",
                    "Damage": {
                      "operator": "Variables[0] (0.75) || RETURN",
                      "displayLines": "0.75",
                      "constants": [],
                      "variables": [
                        0.75
                      ]
                    },
                    "dmgFormula": "Max HP Scaling",
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
                },
                {
                  "name": "ATK Scaling DMG",
                  "target": "Single Target (Primary)",
                  "AttackScaling": {
                    "DamageType": "Ice",
                    "Damage": {
                      "operator": "Variables[0] (0.8) || RETURN",
                      "displayLines": "0.8",
                      "constants": [],
                      "variables": [
                        0.8
                      ]
                    },
                    "dmgFormula": "Max HP Scaling",
                    "HitSplit": 0.1,
                    "Toughness": null,
                    "Tags": null
                  }
                }
              ],
              "failed": [
                {
                  "name": "ATK Scaling DMG",
                  "target": "Blast (Adjacent)",
                  "AttackScaling": {
                    "DamageType": "Ice",
                    "Damage": {
                      "operator": "Variables[0] (0.75) || RETURN",
                      "displayLines": "0.75",
                      "constants": [],
                      "variables": [
                        0.75
                      ]
                    },
                    "dmgFormula": "Max HP Scaling",
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
              "target": "Single Target (Primary)",
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
                "dmgFormula": "Max HP Scaling",
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
                  "name": "ATK Scaling DMG",
                  "target": "Blast (Adjacent)",
                  "AttackScaling": {
                    "DamageType": "Ice",
                    "Damage": {
                      "operator": "Variables[0] (0.75) || RETURN",
                      "displayLines": "0.75",
                      "constants": [],
                      "variables": [
                        0.75
                      ]
                    },
                    "dmgFormula": "Max HP Scaling",
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
                },
                {
                  "name": "ATK Scaling DMG",
                  "target": "Single Target (Primary)",
                  "AttackScaling": {
                    "DamageType": "Ice",
                    "Damage": {
                      "operator": "Variables[0] (0.8) || RETURN",
                      "displayLines": "0.8",
                      "constants": [],
                      "variables": [
                        0.8
                      ]
                    },
                    "dmgFormula": "Max HP Scaling",
                    "HitSplit": 0.2,
                    "Toughness": null,
                    "Tags": null
                  }
                }
              ],
              "failed": [
                {
                  "name": "ATK Scaling DMG",
                  "target": "Blast (Adjacent)",
                  "AttackScaling": {
                    "DamageType": "Ice",
                    "Damage": {
                      "operator": "Variables[0] (0.75) || RETURN",
                      "displayLines": "0.75",
                      "constants": [],
                      "variables": [
                        0.75
                      ]
                    },
                    "dmgFormula": "Max HP Scaling",
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
          "to": "Single Target (Primary)",
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
                "target": "Blast (Adjacent)",
                "value1": "TeamCharacterCount",
                "compareType": ">",
                "value2": 0
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": "Blast (Adjacent)",
                  "modifier": "Jingliu_Frozen_Perform"
                }
              ]
            }
          ],
          "failed": [
            {
              "name": "Add Events/Bonuses",
              "to": "Blast (Adjacent)",
              "modifier": "Jingliu_Frozen_Perform"
            }
          ]
        },
        {
          "name": "Remove Events/Bonuses",
          "to": "All Enemies (AOE)",
          "modifier": "Jingliu_Frozen_Perform"
        },
        {
          "name": "ATK Scaling DMG",
          "target": "Single Target (Primary)",
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
            "dmgFormula": "Max HP Scaling",
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
              "name": "ATK Scaling DMG",
              "target": "Blast (Adjacent)",
              "AttackScaling": {
                "DamageType": "Ice",
                "Damage": {
                  "operator": "Variables[0] (0.75) || RETURN",
                  "displayLines": "0.75",
                  "constants": [],
                  "variables": [
                    0.75
                  ]
                },
                "dmgFormula": "Max HP Scaling",
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
            },
            {
              "name": "ATK Scaling DMG",
              "target": "Single Target (Primary)",
              "AttackScaling": {
                "DamageType": "Ice",
                "Damage": {
                  "operator": "Variables[0] (0.8) || RETURN",
                  "displayLines": "0.8",
                  "constants": [],
                  "variables": [
                    0.8
                  ]
                },
                "dmgFormula": "Max HP Scaling",
                "HitSplit": 0.5,
                "Toughness": null,
                "Tags": null
              }
            }
          ],
          "failed": [
            {
              "name": "ATK Scaling DMG",
              "target": "Blast (Adjacent)",
              "AttackScaling": {
                "DamageType": "Ice",
                "Damage": {
                  "operator": "Variables[0] (0.75) || RETURN",
                  "displayLines": "0.75",
                  "constants": [],
                  "variables": [
                    0.75
                  ]
                },
                "dmgFormula": "Max HP Scaling",
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
          "name": "Adjust Variable Value",
          "adjustmentType": "Add to Value (Default)",
          "variableName": "Jingliu_FullMoonFlag",
          "on": "Caster",
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
          "name": "Remove Events/Bonuses",
          "to": "Caster",
          "modifier": "Advanced_Jingliu_Eidolon2[<span class=\"descriptionNumberColor\">Crescent Shadows Qixing Dipper</span>]"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Trace Activated",
            "conditionList": "Sword Champion"
          },
          "passed": [
            {
              "name": "Update Energy",
              "on": "Owner of this Modifier",
              "value": {
                "operator": "Variables[0] (8) || RETURN",
                "displayLines": "8",
                "constants": [],
                "variables": [
                  8
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
                    "target": "Owner of this Modifier",
                    "living": true
                  },
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Has Flag",
                        "target": "Owner of this Modifier",
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
                    "target": "Owner of this Modifier",
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
    "Jingliu_Advanced_Jingliu_PassiveAtkReady_Part01": {
      "fileName": "Jingliu_Advanced_Jingliu_PassiveAtkReady_Part01",
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
          "on": "Caster",
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
          "to": "Caster",
          "modifier": "AdvancedJingliu_Attack_Transfer",
          "valuePerStack": {
            "AbilityP01_P1_HpConsumption": {
              "operator": "Variables[0] (0.3) || RETURN",
              "displayLines": "0.3",
              "constants": [],
              "variables": [
                0.3
              ]
            },
            "AbilityP01_P2_HpConsumption": {
              "operator": "Variables[0] (0.05) || RETURN",
              "displayLines": "0.05",
              "constants": [],
              "variables": [
                0.05
              ]
            }
          }
        },
        {
          "name": "Use Custom Character Function",
          "functionName": "ReduceActionDelay",
          "target": "Caster",
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
    "Jingliu_Advanced_Jingliu_PassiveAbility01": {
      "fileName": "Jingliu_Advanced_Jingliu_PassiveAbility01",
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
          "modifier": "Advanced_Jingliu_LoseHPPreShow"
        },
        {
          "name": "Read Variable Value",
          "adjustmentType": "Add to Value (Default)",
          "variableName": "Jingliu_MoonFlag",
          "on": "Caster"
        },
        {
          "name": "Read Variable Value",
          "adjustmentType": "Add to Value (Default)",
          "variableName": "Jingliu_FullMoonFlag",
          "on": "Caster"
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
          ],
          "failed": [
            {
              "name": "Define Custom Variable",
              "variableName": "Jingliu_FullMoonFlagMax",
              "value": {
                "operator": "Variables[0] (Jingliu_FullMoonFlagMax) || RETURN",
                "displayLines": "Jingliu_FullMoonFlagMax",
                "constants": [],
                "variables": [
                  "Jingliu_FullMoonFlagMax"
                ]
              }
            }
          ]
        },
        {
          "name": "Adjust Variable Value",
          "adjustmentType": "Overwrite Value",
          "variableName": "Jingliu_MoonFlag",
          "on": "Caster",
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
          "to": "Caster",
          "modifier": "Advanced_Jingliu_Passive"
        }
      ],
      "references": []
    },
    "Jingliu_Advanced_Jingliu_Ability03_Part02": {
      "fileName": "Jingliu_Advanced_Jingliu_Ability03_Part02",
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
              "modifier": "Advanced_Jingliu_Eidolon1_CriticalDamage[<span class=\"descriptionNumberColor\">Moon Crashes Tianguan Gate</span>]",
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
                  "operator": "Variables[0] (0.36) || RETURN",
                  "displayLines": "0.36",
                  "constants": [],
                  "variables": [
                    0.36
                  ]
                }
              }
            }
          ]
        },
        {
          "name": "ATK Scaling DMG",
          "target": "Single Target (Primary)",
          "canPhase": true,
          "AttackScaling": {
            "DamageType": "Ice",
            "Damage": {
              "operator": "Variables[0] (1.8) || RETURN",
              "displayLines": "1.8",
              "constants": [],
              "variables": [
                1.8
              ]
            },
            "dmgFormula": "Max HP Scaling",
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
              "name": "ATK Scaling DMG",
              "target": "Blast (Adjacent)",
              "canPhase": true,
              "AttackScaling": {
                "DamageType": "Ice",
                "Damage": {
                  "operator": "Variables[0] (0.9) || RETURN",
                  "displayLines": "0.9",
                  "constants": [],
                  "variables": [
                    0.9
                  ]
                },
                "dmgFormula": "Max HP Scaling",
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
            {
              "name": "ATK Scaling DMG",
              "target": "Single Target (Primary)",
              "canPhase": true,
              "AttackScaling": {
                "DamageType": "Ice",
                "Damage": {
                  "operator": "Variables[0] (0.8) || RETURN",
                  "displayLines": "0.8",
                  "constants": [],
                  "variables": [
                    0.8
                  ]
                },
                "dmgFormula": "Max HP Scaling",
                "Toughness": null,
                "Tags": null
              }
            }
          ],
          "failed": [
            {
              "name": "ATK Scaling DMG",
              "target": "Blast (Adjacent)",
              "canPhase": true,
              "AttackScaling": {
                "DamageType": "Ice",
                "Damage": {
                  "operator": "Variables[0] (0.9) || RETURN",
                  "displayLines": "0.9",
                  "constants": [],
                  "variables": [
                    0.9
                  ]
                },
                "dmgFormula": "Max HP Scaling",
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
          "name": "IF",
          "conditions": {
            "name": "Has Modifier",
            "target": "Caster",
            "modifier": "AdvancedJingliu_Attack_Transfer"
          },
          "passed": [
            {
              "name": "Adjust Variable Value",
              "adjustmentType": "Add to Value (Default)",
              "variableName": "Jingliu_FullMoonFlag",
              "on": "Caster",
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
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "Jingliu_FullMoonFlag",
                "compareType": ">",
                "value2": {
                  "operator": "Variables[0] (Jingliu_FullMoonFlagMax) || RETURN",
                  "displayLines": "Jingliu_FullMoonFlagMax",
                  "constants": [],
                  "variables": [
                    "Jingliu_FullMoonFlagMax"
                  ]
                },
                "contextScope": "ContextCaster"
              },
              "passed": [
                {
                  "name": "Adjust Variable Value",
                  "adjustmentType": "Overwrite Value",
                  "variableName": "Jingliu_FullMoonFlag",
                  "on": "Caster",
                  "value": {
                    "operator": "Variables[0] (Jingliu_FullMoonFlagMax) || RETURN",
                    "displayLines": "Jingliu_FullMoonFlagMax",
                    "constants": [],
                    "variables": [
                      "Jingliu_FullMoonFlagMax"
                    ]
                  }
                }
              ]
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
              "on": "Caster",
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
              "to": "Caster",
              "modifier": "Advanced_Jingliu_Eidolon2[<span class=\"descriptionNumberColor\">Crescent Shadows Qixing Dipper</span>]",
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
    "Jingliu_Advanced_Jingliu_Ability03_Part01": {
      "fileName": "Jingliu_Advanced_Jingliu_Ability03_Part01",
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
          "from": "Caster",
          "ability": "Advanced_Jingliu_Ability03_Part02",
          "isTrigger": true
        }
      ],
      "references": []
    },
    "Jingliu_Advanced_Jingliu_Ability03_EnterReady": {
      "fileName": "Jingliu_Advanced_Jingliu_Ability03_EnterReady",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "references": []
    },
    "Jingliu_Advanced_Jingliu_Ability02_Part02": {
      "fileName": "Jingliu_Advanced_Jingliu_Ability02_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Adjust Variable Value",
          "adjustmentType": "Add to Value (Default)",
          "variableName": "Jingliu_MoonFlag",
          "on": "Caster",
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
              "target": "Single Target (Primary)",
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
                "dmgFormula": "Max HP Scaling",
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
              "name": "Update Energy",
              "on": "Owner of this Modifier",
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
        },
        "Trigger: Ability End"
      ],
      "references": []
    },
    "Jingliu_Advanced_Jingliu_Ability02_Part01": {
      "fileName": "Jingliu_Advanced_Jingliu_Ability02_Part01",
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
          "from": "Caster",
          "ability": "Advanced_Jingliu_Ability02_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "references": []
    },
    "Jingliu_Advanced_Jingliu_Ability01_Part02": {
      "fileName": "Jingliu_Advanced_Jingliu_Ability01_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "ATK Scaling DMG",
          "target": "Single Target (Primary)",
          "canPhase": true,
          "AttackScaling": {
            "DamageType": "Ice",
            "Damage": {
              "operator": "Variables[0] (0.5) || RETURN",
              "displayLines": "0.5",
              "constants": [],
              "variables": [
                0.5
              ]
            },
            "dmgFormula": "Max HP Scaling",
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
          "target": "Single Target (Primary)",
          "canPhase": true,
          "AttackScaling": {
            "DamageType": "Ice",
            "Damage": {
              "operator": "Variables[0] (0.5) || RETURN",
              "displayLines": "0.5",
              "constants": [],
              "variables": [
                0.5
              ]
            },
            "dmgFormula": "Max HP Scaling",
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
    "Jingliu_Advanced_Jingliu_Ability01_Part01": {
      "fileName": "Jingliu_Advanced_Jingliu_Ability01_Part01",
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
          "ability": "Advanced_Jingliu_Ability01_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "references": []
    },
    "Jingliu_Modifiers": {
      "fileName": "Jingliu_Modifiers",
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
          "for": "Advanced_Jingliu_MoonMad[<span class=\"descriptionNumberColor\">Moonlight</span>]",
          "stackType": "Replace",
          "execute": [
            {
              "eventTrigger": "When Modifier Destroyed/Removed"
            },
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
                  "name": "Define Custom Variable",
                  "variableName": "MDF_PropertyValue",
                  "value": {
                    "operator": "Variables[0] (MDF_Layer) || Variables[1] (0.44) || MUL || RETURN",
                    "displayLines": "(MDF_Layer * 0.44)",
                    "constants": [],
                    "variables": [
                      "MDF_Layer",
                      0.44
                    ]
                  }
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
                      "variableName": "MDF_PropertyValue",
                      "value": {
                        "operator": "Variables[0] (MDF_PropertyValue) || Variables[1] (MDF_Layer) || Variables[2] (0.2) || MUL || ADD || RETURN",
                        "displayLines": "(MDF_PropertyValue + (MDF_Layer * 0.2))",
                        "constants": [],
                        "variables": [
                          "MDF_PropertyValue",
                          "MDF_Layer",
                          0.2
                        ]
                      }
                    }
                  ]
                },
                {
                  "name": "Stack Target Stat Value",
                  "target": "Owner of this Modifier",
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
          "description": "CRIT DMG increases by <span class=\"descriptionNumberColor\">MDF_PropertyValue</span>.",
          "type": "Buff",
          "effectName": "CRIT DMG Boost",
          "statusName": "Moonlight"
        },
        {
          "name": "Modifier Construction",
          "for": "Advanced_Jingliu_LoseHPPreShow",
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
                        "target": "Use Prior Target(s) Defined",
                        "target2": "Caster"
                      },
                      {
                        "name": "Has Modifier",
                        "target": "Caster",
                        "modifier": "AdvancedJingliu_Attack_Transfer"
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Find New Target",
                      "from": "All Teammates (Excluding Owner)",
                      "ifTargetFound": [
                        {
                          "name": "Define Custom Variable with Stat",
                          "target": "Use Prior Target(s) Defined",
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
                          "target": "Use Prior Target(s) Defined",
                          "previewType": null,
                          "previewValue": {
                            "operator": "Variables[0] (MDF_MaxHP) || Variables[1] (0.05) || MUL || RETURN",
                            "displayLines": "(MDF_MaxHP * 0.05)",
                            "constants": [],
                            "variables": [
                              "MDF_MaxHP",
                              0.05
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
          "for": "Advanced_Jingliu_Passive_CriticalUp[<span class=\"descriptionNumberColor\">Spectral Transmigration</span>]",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Stack Target Stat Value",
                  "target": "Caster",
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
          "description": "CRIT Rate increases by <span class=\"descriptionNumberColor\">MDF_CriticalRatio</span>.",
          "type": "Buff",
          "effectName": "CRIT Rate Boost",
          "statusName": "Spectral Transmigration"
        },
        {
          "name": "Modifier Construction",
          "for": "Advanced_Jingliu_Trace_B1_Resist[<span class=\"descriptionNumberColor\">Deathrealm</span>]",
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
                      "on": "Attacker",
                      "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageAll</span>&nbsp;",
                      "value": {
                        "operator": "Variables[0] (MDF_PropertyValue2) || RETURN",
                        "displayLines": "MDF_PropertyValue2",
                        "constants": [],
                        "variables": [
                          "MDF_PropertyValue2"
                        ]
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
                  "name": "Stack Target Stat Value",
                  "target": "Caster",
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
          "description": "Effect RES increases by <span class=\"descriptionNumberColor\">MDF_PropertyValue</span>, and Ultimate DMG dealt increases by <span class=\"descriptionNumberColor\">MDF_PropertyValue2</span>.",
          "type": "Buff",
          "effectName": "Effect RES Boost",
          "statusName": "Deathrealm"
        },
        {
          "name": "Modifier Construction",
          "for": "Advanced_Jingliu_Passive_ATK",
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
                  "abilityName": "Advanced_Jingliu_PassiveAtkReady_Part01",
                  "abilitySource": "Caster",
                  "abilityTarget": "Caster",
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
                  "target": "Caster",
                  "variableName": "MDF_MaxHP",
                  "value": "&nbsp;<span class=\"descriptionNumberColor\">HPMax</span>&nbsp;"
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": "Caster",
                  "modifier": "Advanced_Jingliu_Passive2"
                }
              ]
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "AdvancedJingliu_PointB3[<span class=\"descriptionNumberColor\">Frost Wraith</span>]",
          "stackType": "ReplaceByCaster",
          "execute": [
            {
              "eventTrigger": "Deal Damage Start [Owner]: Hit",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "_Switch",
                    "compareType": "=",
                    "value2": 1
                  },
                  "passed": [
                    {
                      "name": "Adjust Target Stats",
                      "on": "Defender",
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
              ]
            },
            {
              "eventTrigger": "Attack Start [Owner]",
              "execute": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "_Switch",
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
                    "value1": "_Switch",
                    "compareType": "=",
                    "value2": 1
                  },
                  "passed": [
                    "Modifier Deletes Itself"
                  ]
                }
              ]
            }
          ],
          "description": "Next attack ignores <span class=\"descriptionNumberColor\">MDF_PropertyValue</span> of target's DEF.",
          "type": "Buff",
          "statusName": "Frost Wraith"
        },
        {
          "name": "Modifier Construction",
          "for": "AdvancedJingliu_Attack_Transfer",
          "stackType": "ReplaceByCaster",
          "execute": [
            {
              "eventTrigger": "When Modifier Destroyed/Removed",
              "execute": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": "Owner of this Modifier",
                  "modifier": "Advanced_Jingliu_MoonMad[<span class=\"descriptionNumberColor\">Moonlight</span>]"
                },
                {
                  "name": "Update Ability Binding",
                  "target": "Caster",
                  "abilityName": "Skill02",
                  "skillSlot": "Skill",
                  "enableSecondaryType": "ControlSkill02"
                },
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
                  "abilityName": "Skill"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": "Caster",
                  "modifier": "Advanced_Jingliu_Eidolon6[<span class=\"descriptionNumberColor\">Eclipse Hollows Corporeal Husk</span>]"
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Flag",
                    "target": "Caster",
                    "flagName": "Charm"
                  },
                  "passed": [
                    {
                      "name": "Change Character Transformation",
                      "target": "Caster",
                      "phase": "Phase3"
                    }
                  ],
                  "failed": [
                    {
                      "name": "Change Character Transformation",
                      "target": "Caster",
                      "phase": "Phase1"
                    }
                  ]
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": "Caster",
                  "modifier": "Advanced_Jingliu_Trace_B1_Resist[<span class=\"descriptionNumberColor\">Deathrealm</span>]"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": "Caster",
                  "modifier": "Advanced_Jingliu_Trace_B2_SpeedUp"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": "Caster",
                  "modifier": "Advanced_Jingliu_Passive_CriticalUp[<span class=\"descriptionNumberColor\">Spectral Transmigration</span>]"
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
                  "target": "Caster",
                  "abilityName": "Skill21",
                  "skillSlot": "Skill",
                  "enableSecondaryType": "ControlSkill02"
                },
                {
                  "name": "Disable Abilities",
                  "target": "Owner of this Modifier",
                  "abilityTypes": [
                    "Basic ATK"
                  ]
                },
                {
                  "name": "Update Ability Enhance Button",
                  "target": "Owner of this Modifier",
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
                      "to": "Caster",
                      "modifier": "Advanced_Jingliu_Eidolon6[<span class=\"descriptionNumberColor\">Eclipse Hollows Corporeal Husk</span>]",
                      "valuePerStack": {
                        "MDF_IcePenetrate": {
                          "operator": "Variables[0] (0.3) || RETURN",
                          "displayLines": "0.3",
                          "constants": [],
                          "variables": [
                            0.3
                          ]
                        }
                      }
                    }
                  ]
                },
                {
                  "name": "Change Character Transformation",
                  "target": "Caster",
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
                      "to": "Caster",
                      "modifier": "Advanced_Jingliu_Trace_B1_Resist[<span class=\"descriptionNumberColor\">Deathrealm</span>]",
                      "valuePerStack": {
                        "MDF_PropertyValue": {
                          "operator": "Variables[0] (0.35) || RETURN",
                          "displayLines": "0.35",
                          "constants": [],
                          "variables": [
                            0.35
                          ]
                        },
                        "MDF_PropertyValue2": {
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
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": "Caster",
                  "modifier": "Advanced_Jingliu_Passive_CriticalUp[<span class=\"descriptionNumberColor\">Spectral Transmigration</span>]",
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
                }
              ]
            },
            {
              "eventTrigger": "Ability Use [Owner]: Start",
              "execute": [
                {
                  "name": "Find New Target",
                  "from": "All Teammates (Excluding Owner)",
                  "conditions": {
                    "name": "Is Entity a Battle Event/Summon",
                    "target": "Use Prior Target(s) Defined",
                    "invertCondition": true
                  },
                  "ifTargetFound": [
                    {
                      "name": "Define Custom Variable with Stat",
                      "target": "Use Prior Target(s) Defined",
                      "variableName": "TargetMaxHp",
                      "value": "&nbsp;<span class=\"descriptionNumberColor\">HPMax</span>&nbsp;"
                    },
                    {
                      "name": "Consume",
                      "consumeFrom": "MaxHP",
                      "target": "Use Prior Target(s) Defined",
                      "consumePercent": {
                        "operator": "Variables[0] (SkillP01_P2_HpConsumption) || RETURN",
                        "displayLines": "SkillP01_P2_HpConsumption",
                        "constants": [],
                        "variables": [
                          "SkillP01_P2_HpConsumption"
                        ]
                      },
                      "consumeFloor": 1
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
                    "target": "Caster",
                    "flagName": "Charm"
                  },
                  "passed": [
                    {
                      "name": "Update Ability Binding",
                      "target": "Caster",
                      "abilityName": "Skill21",
                      "skillSlot": "Skill"
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
                    "target": "Caster",
                    "flagName": "Charm",
                    "invertCondition": true
                  },
                  "passed": [
                    {
                      "name": "Update Ability Binding",
                      "target": "Caster",
                      "abilityName": "Skill01",
                      "skillSlot": "Basic ATK"
                    },
                    {
                      "name": "Update Ability Binding",
                      "target": "Caster",
                      "abilityName": "Skill21",
                      "skillSlot": "Skill",
                      "enableSecondaryType": "ControlSkill02"
                    },
                    {
                      "name": "Disable Abilities",
                      "target": "Owner of this Modifier",
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
            "SkillP01_P2_HpConsumption"
          ],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "Advanced_Jingliu_Eidolon6[<span class=\"descriptionNumberColor\">Eclipse Hollows Corporeal Husk</span>]",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Stack Target Stat Value",
                  "target": "Owner of this Modifier",
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">ResistanceIcePEN</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (MDF_IcePenetrate) || RETURN",
                    "displayLines": "MDF_IcePenetrate",
                    "constants": [],
                    "variables": [
                      "MDF_IcePenetrate"
                    ]
                  }
                }
              ]
            }
          ],
          "stackData": [
            "MDF_IcePenetrate"
          ],
          "latentQueue": [],
          "description": "Ice RES PEN increases by <span class=\"descriptionNumberColor\">MDF_IcePenetrate</span>.",
          "type": "Buff",
          "effectName": "Ice RES PEN",
          "statusName": "Eclipse Hollows Corporeal Husk"
        },
        {
          "name": "Modifier Construction",
          "for": "Advanced_Jingliu_Eidolon2[<span class=\"descriptionNumberColor\">Crescent Shadows Qixing Dipper</span>]",
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
                        "target": "Caster",
                        "modifier": "AdvancedJingliu_Attack_Transfer"
                      }
                    ]
                  },
                  "passed": [
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
          "for": "Advanced_Jingliu_Eidolon1_CriticalDamage[<span class=\"descriptionNumberColor\">Moon Crashes Tianguan Gate</span>]",
          "stackType": "ReplaceByCaster",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Stack Target Stat Value",
                  "target": "Caster",
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
          "description": "CRIT DMG increases by <span class=\"descriptionNumberColor\">MDF_PropertyValue</span>.",
          "type": "Buff",
          "effectName": "CRIT DMG Boost",
          "statusName": "Moon Crashes Tianguan Gate"
        },
        {
          "name": "Modifier Construction",
          "for": "Advanced_Jingliu_Passive2",
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
                        "skillOwner": "Caster",
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
                        "target": "Caster",
                        "modifier": "AdvancedJingliu_Attack_Transfer"
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
                      "to": "Caster",
                      "modifier": "Advanced_Jingliu_Passive_ATK"
                    },
                    {
                      "name": "Remove Events/Bonuses",
                      "to": "Caster",
                      "modifier": "AdvancedJingliu_Attack_Transfer"
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
                        "target": "Caster",
                        "modifier": "AdvancedJingliu_Attack_Transfer"
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
                      "to": "Caster",
                      "modifier": "Advanced_Jingliu_Passive_ATK"
                    },
                    {
                      "name": "Remove Events/Bonuses",
                      "to": "Caster",
                      "modifier": "AdvancedJingliu_Attack_Transfer"
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
                        "target": "Caster",
                        "modifier": "AdvancedJingliu_Attack_Transfer"
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
                      "to": "Caster",
                      "modifier": "Advanced_Jingliu_Passive_ATK"
                    },
                    {
                      "name": "Remove Events/Bonuses",
                      "to": "Caster",
                      "modifier": "AdvancedJingliu_Attack_Transfer"
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
                        "target": "Owner of this Modifier",
                        "flagName": "UnOperable"
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Has Modifier",
                        "target": "Caster",
                        "modifier": "AdvancedJingliu_Attack_Transfer"
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
                      "to": "Caster",
                      "modifier": "Advanced_Jingliu_Passive_ATK"
                    },
                    {
                      "name": "Remove Events/Bonuses",
                      "to": "Caster",
                      "modifier": "AdvancedJingliu_Attack_Transfer"
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
          "for": "Advanced_Jingliu_Passive",
          "modifierFlags": [
            "CustomEvent_InfiniteRefresh"
          ],
          "execute": [
            {
              "eventTrigger": "Turn [Pre-action END Phase] [Anyone]",
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
                        "target": "Caster",
                        "includeNonTargets": true
                      },
                      {
                        "name": "Has Flag",
                        "target": "Caster",
                        "flagName": "STAT_CTRL",
                        "invertCondition": true
                      },
                      {
                        "name": "Has Flag",
                        "target": "Caster",
                        "flagName": "DisableAction",
                        "invertCondition": true
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": "Caster",
                      "modifier": "Advanced_Jingliu_Passive_ATK"
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
                          "on": "Caster",
                          "value": {
                            "operator": "Variables[0] (Jingliu_MoonFlag) || Constants[0] (1) || ADD || Variables[1] (2) || ADD || RETURN",
                            "displayLines": "((Jingliu_MoonFlag + 1) + 2)",
                            "constants": [
                              1
                            ],
                            "variables": [
                              "Jingliu_MoonFlag",
                              2
                            ]
                          }
                        }
                      ],
                      "failed": [
                        {
                          "name": "Adjust Variable Value",
                          "adjustmentType": "Overwrite Value",
                          "variableName": "Jingliu_FullMoonFlag",
                          "on": "Caster",
                          "value": {
                            "operator": "Variables[0] (Jingliu_MoonFlag) || Constants[0] (1) || ADD || RETURN",
                            "displayLines": "(Jingliu_MoonFlag + 1)",
                            "constants": [
                              1
                            ],
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
              "eventTrigger": "Action End [Anyone]",
              "execute": [
                {
                  "name": "Declare Custom Variable",
                  "target": "Allied Team",
                  "scope": "TargetEntity",
                  "variableName": "LoseHPTrigger"
                }
              ]
            },
            {
              "eventTrigger": "When Put in Deathstate Limbo"
            },
            {
              "eventTrigger": "Entity Created [Anyone]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Is Part Of Team",
                    "target": "Use Prior Target(s) Defined",
                    "team": "TeamLight"
                  },
                  "passed": [
                    {
                      "name": "Declare Custom Variable",
                      "target": "Allied Team",
                      "scope": "TargetEntity",
                      "variableName": "LoseHPTrigger"
                    },
                    {
                      "name": "Declare Custom Variable",
                      "target": "Allied Team",
                      "scope": "TargetEntity",
                      "variableName": "BeingAttack"
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "HP Change [Anyone]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Is Entity Type",
                        "target": "Use Prior Target(s) Defined",
                        "type": "Battle Event",
                        "invertCondition": true
                      },
                      {
                        "name": "Is Part Of Team",
                        "target": "Use Prior Target(s) Defined",
                        "team": "TeamLight"
                      },
                      {
                        "name": "Compare: Variable",
                        "value1": "ParameterValue",
                        "compareType": "<",
                        "value2": 0
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "target": "Use Prior Target(s) Defined",
                        "value1": "LoseHPTrigger",
                        "compareType": "=",
                        "value2": 1,
                        "invertCondition": true
                      },
                      "passed": [
                        {
                          "name": "Define Custom Variable",
                          "variableName": "Jingliu_LoseHPCount",
                          "value": {
                            "operator": "Variables[0] (Jingliu_LoseHPCount) || Constants[0] (1) || ADD || RETURN",
                            "displayLines": "(Jingliu_LoseHPCount + 1)",
                            "constants": [
                              1
                            ],
                            "variables": [
                              "Jingliu_LoseHPCount"
                            ]
                          }
                        },
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Compare: Variable",
                            "target": "Use Prior Target(s) Defined",
                            "value1": "BeingAttack",
                            "compareType": "=",
                            "value2": 1
                          },
                          "passed": [
                            {
                              "name": "Define Custom Variable",
                              "target": "Use Prior Target(s) Defined",
                              "variableName": "LoseHPTrigger",
                              "value": 1
                            }
                          ]
                        },
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Compare: Variable",
                            "value1": "Jingliu_LoseHPCount",
                            "compareType": ">=",
                            "value2": {
                              "operator": "Variables[0] (20) || RETURN",
                              "displayLines": "20",
                              "constants": [],
                              "variables": [
                                20
                              ]
                            }
                          },
                          "passed": [
                            {
                              "name": "Define Custom Variable",
                              "variableName": "Jingliu_LoseHPCount",
                              "value": {
                                "operator": "Variables[0] (Jingliu_LoseHPCount) || Variables[1] (20) || SUB || RETURN",
                                "displayLines": "(Jingliu_LoseHPCount - 20)",
                                "constants": [],
                                "variables": [
                                  "Jingliu_LoseHPCount",
                                  20
                                ]
                              }
                            },
                            {
                              "name": "IF",
                              "conditions": {
                                "name": "Has Modifier",
                                "target": "Caster",
                                "modifier": "AdvancedJingliu_Attack_Transfer"
                              },
                              "passed": [
                                {
                                  "name": "Adjust Variable Value",
                                  "adjustmentType": "Add to Value (Default)",
                                  "variableName": "Jingliu_FullMoonFlag",
                                  "on": "Caster",
                                  "value": 1
                                },
                                {
                                  "name": "IF",
                                  "conditions": {
                                    "name": "Compare: Variable",
                                    "value1": "Jingliu_FullMoonFlag",
                                    "compareType": ">",
                                    "value2": {
                                      "operator": "Variables[0] (Jingliu_FullMoonFlagMax) || RETURN",
                                      "displayLines": "Jingliu_FullMoonFlagMax",
                                      "constants": [],
                                      "variables": [
                                        "Jingliu_FullMoonFlagMax"
                                      ]
                                    },
                                    "contextScope": "ContextCaster"
                                  },
                                  "passed": [
                                    {
                                      "name": "Adjust Variable Value",
                                      "adjustmentType": "Overwrite Value",
                                      "variableName": "Jingliu_FullMoonFlag",
                                      "on": "Caster",
                                      "value": {
                                        "operator": "Variables[0] (Jingliu_FullMoonFlagMax) || RETURN",
                                        "displayLines": "Jingliu_FullMoonFlagMax",
                                        "constants": [],
                                        "variables": [
                                          "Jingliu_FullMoonFlagMax"
                                        ]
                                      }
                                    }
                                  ]
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
                                  "on": "Caster",
                                  "value": 1
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
                          "name": "Add Events/Bonuses",
                          "to": "Owner of this Modifier",
                          "modifier": "Advanced_Jingliu_LoseHPCount[<span class=\"descriptionNumberColor\">Crescent Transmigration</span>]",
                          "valuePerStack": {
                            "Jingliu_LoseHPCount": {
                              "operator": "Variables[0] (Jingliu_LoseHPCount) || RETURN",
                              "displayLines": "Jingliu_LoseHPCount",
                              "constants": [],
                              "variables": [
                                "Jingliu_LoseHPCount"
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
                        "modifier": "AdvancedJingliu_Attack_Transfer"
                      },
                      "passed": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": "Owner of this Modifier",
                          "modifier": "Advanced_Jingliu_MoonMad[<span class=\"descriptionNumberColor\">Moonlight</span>]",
                          "stackLimit": {
                            "operator": "Variables[0] (5) || RETURN",
                            "displayLines": "5",
                            "constants": [],
                            "variables": [
                              5
                            ]
                          },
                          "addStacksPerTrigger": 1
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              "eventTrigger": "Attack Start [Anyone]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Is Part Of Team",
                    "target": "Use Prior Target(s) Defined",
                    "team": "TeamDark"
                  },
                  "passed": [
                    {
                      "name": "Declare Custom Variable",
                      "target": "Allied Team",
                      "scope": "TargetEntity",
                      "variableName": "BeingAttack",
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
                  "target": "Allied Team",
                  "scope": "TargetEntity",
                  "variableName": "LoseHPTrigger"
                },
                {
                  "name": "Declare Custom Variable",
                  "target": "Allied Team",
                  "scope": "TargetEntity",
                  "variableName": "BeingAttack"
                }
              ]
            },
            {
              "eventTrigger": "Ability Use [Anyone]: End",
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
                        "target": "Caster",
                        "includeNonTargets": true
                      },
                      {
                        "name": "Has Flag",
                        "target": "Caster",
                        "flagName": "STAT_CTRL",
                        "invertCondition": true
                      },
                      {
                        "name": "Has Flag",
                        "target": "Caster",
                        "flagName": "DisableAction",
                        "invertCondition": true
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": "Caster",
                      "modifier": "Advanced_Jingliu_Passive_ATK"
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
                          "on": "Caster",
                          "value": {
                            "operator": "Variables[0] (Jingliu_MoonFlag) || Constants[0] (1) || ADD || Variables[1] (2) || ADD || RETURN",
                            "displayLines": "((Jingliu_MoonFlag + 1) + 2)",
                            "constants": [
                              1
                            ],
                            "variables": [
                              "Jingliu_MoonFlag",
                              2
                            ]
                          }
                        }
                      ],
                      "failed": [
                        {
                          "name": "Adjust Variable Value",
                          "adjustmentType": "Overwrite Value",
                          "variableName": "Jingliu_FullMoonFlag",
                          "on": "Caster",
                          "value": {
                            "operator": "Variables[0] (Jingliu_MoonFlag) || Constants[0] (1) || ADD || RETURN",
                            "displayLines": "(Jingliu_MoonFlag + 1)",
                            "constants": [
                              1
                            ],
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
              "eventTrigger": "Enter Battle",
              "execute": [
                {
                  "name": "Declare Custom Variable",
                  "target": "Allied Team",
                  "scope": "TargetEntity",
                  "variableName": "LoseHPTrigger"
                },
                {
                  "name": "Declare Custom Variable",
                  "target": "Allied Team",
                  "scope": "TargetEntity",
                  "variableName": "BeingAttack"
                }
              ],
              "priorityLevel": -80
            },
            {
              "eventTrigger": "Custom Event",
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
                        "target": "Caster",
                        "includeNonTargets": true
                      },
                      {
                        "name": "Has Flag",
                        "target": "Caster",
                        "flagName": "STAT_CTRL",
                        "invertCondition": true
                      },
                      {
                        "name": "Has Flag",
                        "target": "Caster",
                        "flagName": "DisableAction",
                        "invertCondition": true
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": "Caster",
                      "modifier": "Advanced_Jingliu_Passive_ATK"
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
                          "on": "Caster",
                          "value": {
                            "operator": "Variables[0] (Jingliu_MoonFlag) || Constants[0] (1) || ADD || Variables[1] (2) || ADD || RETURN",
                            "displayLines": "((Jingliu_MoonFlag + 1) + 2)",
                            "constants": [
                              1
                            ],
                            "variables": [
                              "Jingliu_MoonFlag",
                              2
                            ]
                          }
                        }
                      ],
                      "failed": [
                        {
                          "name": "Adjust Variable Value",
                          "adjustmentType": "Overwrite Value",
                          "variableName": "Jingliu_FullMoonFlag",
                          "on": "Caster",
                          "value": {
                            "operator": "Variables[0] (Jingliu_MoonFlag) || Constants[0] (1) || ADD || RETURN",
                            "displayLines": "(Jingliu_MoonFlag + 1)",
                            "constants": [
                              1
                            ],
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
                    "target": "Caster",
                    "modifier": "AdvancedJingliu_Attack_Transfer"
                  },
                  "passed": [
                    {
                      "name": "Change Character Transformation",
                      "target": "Caster",
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
                            "target": "Caster",
                            "flagName": "STAT_CTRL",
                            "invertCondition": true
                          },
                          {
                            "name": "Has Flag",
                            "target": "Caster",
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
                            "target": "Caster",
                            "includeNonTargets": true
                          }
                        ]
                      },
                      "passed": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": "Caster",
                          "modifier": "Advanced_Jingliu_Passive_ATK"
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
                              "on": "Caster",
                              "value": {
                                "operator": "Variables[0] (Jingliu_MoonFlag) || Constants[0] (1) || ADD || Variables[1] (2) || ADD || RETURN",
                                "displayLines": "((Jingliu_MoonFlag + 1) + 2)",
                                "constants": [
                                  1
                                ],
                                "variables": [
                                  "Jingliu_MoonFlag",
                                  2
                                ]
                              }
                            }
                          ],
                          "failed": [
                            {
                              "name": "Adjust Variable Value",
                              "adjustmentType": "Overwrite Value",
                              "variableName": "Jingliu_FullMoonFlag",
                              "on": "Caster",
                              "value": {
                                "operator": "Variables[0] (Jingliu_MoonFlag) || Constants[0] (1) || ADD || RETURN",
                                "displayLines": "(Jingliu_MoonFlag + 1)",
                                "constants": [
                                  1
                                ],
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
                        "target": "Caster",
                        "flagName": "STAT_CTRL",
                        "invertCondition": true
                      },
                      {
                        "name": "Has Flag",
                        "target": "Caster",
                        "flagName": "DisableAction",
                        "invertCondition": true
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": "Caster",
                      "modifier": "Advanced_Jingliu_Passive_ATK"
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
                          "on": "Caster",
                          "value": {
                            "operator": "Variables[0] (Jingliu_MoonFlag) || Constants[0] (1) || ADD || Variables[1] (2) || ADD || RETURN",
                            "displayLines": "((Jingliu_MoonFlag + 1) + 2)",
                            "constants": [
                              1
                            ],
                            "variables": [
                              "Jingliu_MoonFlag",
                              2
                            ]
                          }
                        }
                      ],
                      "failed": [
                        {
                          "name": "Adjust Variable Value",
                          "adjustmentType": "Overwrite Value",
                          "variableName": "Jingliu_FullMoonFlag",
                          "on": "Caster",
                          "value": {
                            "operator": "Variables[0] (Jingliu_MoonFlag) || Constants[0] (1) || ADD || RETURN",
                            "displayLines": "(Jingliu_MoonFlag + 1)",
                            "constants": [
                              1
                            ],
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
                        "target": "Caster",
                        "includeNonTargets": true
                      },
                      {
                        "name": "Has Flag",
                        "target": "Caster",
                        "flagName": "STAT_CTRL",
                        "invertCondition": true
                      },
                      {
                        "name": "Has Flag",
                        "target": "Caster",
                        "flagName": "DisableAction",
                        "invertCondition": true
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": "Caster",
                      "modifier": "Advanced_Jingliu_Passive_ATK"
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
                          "on": "Caster",
                          "value": {
                            "operator": "Variables[0] (Jingliu_MoonFlag) || Constants[0] (1) || ADD || Variables[1] (2) || ADD || RETURN",
                            "displayLines": "((Jingliu_MoonFlag + 1) + 2)",
                            "constants": [
                              1
                            ],
                            "variables": [
                              "Jingliu_MoonFlag",
                              2
                            ]
                          }
                        }
                      ],
                      "failed": [
                        {
                          "name": "Adjust Variable Value",
                          "adjustmentType": "Overwrite Value",
                          "variableName": "Jingliu_FullMoonFlag",
                          "on": "Caster",
                          "value": {
                            "operator": "Variables[0] (Jingliu_MoonFlag) || Constants[0] (1) || ADD || RETURN",
                            "displayLines": "(Jingliu_MoonFlag + 1)",
                            "constants": [
                              1
                            ],
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
                      "to": "Caster",
                      "modifier": "Advanced_Jingliu_Transfer_PreShow"
                    }
                  ],
                  "whenLeavingRange": [
                    {
                      "name": "Remove Events/Bonuses",
                      "to": "Caster",
                      "modifier": "Advanced_Jingliu_Transfer_PreShow"
                    }
                  ]
                },
                {
                  "name": "Variable Value Range Conditions",
                  "minValue": {
                    "operator": "Variables[0] (Jingliu_MoonFlagMax) || Constants[0] (1) || ADD || RETURN",
                    "displayLines": "(Jingliu_MoonFlagMax + 1)",
                    "constants": [
                      1
                    ],
                    "variables": [
                      "Jingliu_MoonFlagMax"
                    ]
                  },
                  "maxValue": 99,
                  "whenEnteringRange": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Trace Activated",
                        "conditionList": "Frost Wraith"
                      },
                      "passed": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": "Caster",
                          "modifier": "AdvancedJingliu_PointB3[<span class=\"descriptionNumberColor\">Frost Wraith</span>]",
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
                      "name": "Adjust Variable Value",
                      "adjustmentType": "Overwrite Value",
                      "variableName": "Jingliu_MoonFlag",
                      "on": "Caster",
                      "value": {
                        "operator": "Variables[0] (Jingliu_MoonFlagMax) || RETURN",
                        "displayLines": "Jingliu_MoonFlagMax",
                        "constants": [],
                        "variables": [
                          "Jingliu_MoonFlagMax"
                        ]
                      }
                    }
                  ]
                }
              ]
            },
            {
              "name": "Variable Value Changes",
              "variableName": "Jingliu_FullMoonFlag",
              "from": "ContextOwner",
              "valueRanges": [
                {
                  "name": "Variable Value Range Conditions",
                  "minValue": {
                    "operator": "Variables[0] (Jingliu_FullMoonFlagMax) || Constants[0] (1) || ADD || RETURN",
                    "displayLines": "(Jingliu_FullMoonFlagMax + 1)",
                    "constants": [
                      1
                    ],
                    "variables": [
                      "Jingliu_FullMoonFlagMax"
                    ]
                  },
                  "maxValue": 99,
                  "includeMaxValueInRange": true,
                  "whenEnteringRange": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Trace Activated",
                        "conditionList": "Frost Wraith"
                      },
                      "passed": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": "Caster",
                          "modifier": "AdvancedJingliu_PointB3[<span class=\"descriptionNumberColor\">Frost Wraith</span>]",
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
          "for": "Advanced_Jingliu_Transfer_PreShow",
          "stackData": [],
          "latentQueue": [
            "LoseHPTrigger",
            "BeingAttack"
          ],
          "previewValue": {
            "name": "Modifier: UI Preview",
            "show": "Hide",
            "target": "Owner of this Modifier",
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
          "for": "Advanced_Jingliu_LoseHPCount[<span class=\"descriptionNumberColor\">Crescent Transmigration</span>]",
          "stackType": "ReplaceByCaster",
          "stackData": [
            "Jingliu_LoseHPCount"
          ],
          "latentQueue": [
            "LoseHPTrigger",
            "BeingAttack"
          ],
          "description": "Number of Ally HP losses: <span class=\"descriptionNumberColor\">Jingliu_LoseHPCount</span>.",
          "type": "Other",
          "statusName": "Crescent Transmigration"
        }
      ],
      "references": []
    }
  }
}