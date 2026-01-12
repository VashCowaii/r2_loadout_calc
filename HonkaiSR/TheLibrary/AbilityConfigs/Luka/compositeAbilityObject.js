const compositeAbilityObject = {
  "fullCharacterName": "Luka",
  "trimCharacterName": "Luka",
  "abilityList": [
    "Luka_Luka_TechniqueInLevel",
    "Luka_Luka_PassiveAbility01",
    "Luka_Luka_Ability03_Part02",
    "Luka_Luka_Ability03_Part01",
    "Luka_Luka_Ability03_EnterReady",
    "Luka_Luka_Ability02_Part02",
    "Luka_Luka_Ability02_Part01",
    "Luka_Luka_Ability11_Part02",
    "Luka_Luka_Ability11_Part01",
    "Luka_Luka_Ability01_Part02",
    "Luka_Luka_Ability01_Part01",
    "Luka_Modifiers"
  ],
  "abilityObject": {
    "Luka_Luka_TechniqueInLevel": {
      "fileName": "Luka_Luka_TechniqueInLevel",
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
          "to": "Caster",
          "modifier": "Luka_TechniqueUsage"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "Luka_TechniqueUsage",
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
                      "name": "Find New Target",
                      "from": "All Hostile Entities (AOE)",
                      "searchRandom": true,
                      "maxTargets": 1,
                      "ifTargetFound": [
                        {
                          "name": "ATK Scaling DMG",
                          "target": "Use Prior Target(s) Defined",
                          "canPhase": true,
                          "AttackScaling": {
                            "DamageType": "Physical",
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
                        "Trigger: Attack End",
                        {
                          "name": "Add Events/Bonuses",
                          "to": "Use Prior Target(s) Defined",
                          "modifier": "Luka_DOT_Tear[<span class=\"descriptionNumberColor\">Bleed</span>]",
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
                          "valuePerStack": {
                            "Modifier_Tear_DamageRatio": {
                              "operator": "Variables[0] (0.24) || RETURN",
                              "displayLines": "0.24",
                              "constants": [],
                              "variables": [
                                0.24
                              ]
                            },
                            "Modifier_Tear_MaxPercentage": {
                              "operator": "Variables[0] (3.38) || RETURN",
                              "displayLines": "3.38",
                              "constants": [],
                              "variables": [
                                3.38
                              ]
                            }
                          }
                        }
                      ]
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": "Caster",
                      "modifier": "Luka_ReloadBullet",
                      "valuePerStack": {
                        "MDF_AddValue": 1
                      }
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
    "Luka_Luka_PassiveAbility01": {
      "fileName": "Luka_Luka_PassiveAbility01",
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
          "variableName": "BulletCount",
          "on": "Caster"
        },
        {
          "name": "Adjust Variable Value",
          "adjustmentType": "Overwrite Value",
          "variableName": "BulletCount",
          "on": "Caster",
          "value": 1
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "BulletCount",
            "compareType": "<",
            "value2": 2
          },
          "passed": [
            {
              "name": "Update Displayed Energy Bar",
              "value": {
                "operator": "Variables[0] (BulletCount) || RETURN",
                "displayLines": "BulletCount",
                "constants": [],
                "variables": [
                  "BulletCount"
                ]
              },
              "maximum": {
                "operator": "Constants[0] (4) || RETURN",
                "displayLines": "4",
                "constants": [
                  4
                ],
                "variables": []
              },
              "assignState": "True",
              "priorState": "Normal",
              "bar#": 3,
              "cooldown": 0
            }
          ],
          "failed": [
            {
              "name": "Update Displayed Energy Bar",
              "value": {
                "operator": "Variables[0] (BulletCount) || RETURN",
                "displayLines": "BulletCount",
                "constants": [],
                "variables": [
                  "BulletCount"
                ]
              },
              "maximum": {
                "operator": "Constants[0] (4) || RETURN",
                "displayLines": "4",
                "constants": [
                  4
                ],
                "variables": []
              },
              "assignState": "True",
              "priorState": "Active",
              "bar#": 3,
              "cooldown": 0
            }
          ]
        },
        {
          "name": "Add Events/Bonuses",
          "to": "Caster",
          "modifier": "Luka_Passive"
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
              "modifier": "Luka_Eidolon2"
            }
          ]
        },
        {
          "name": "Define Custom Variable",
          "variableName": "BuffClear",
          "value": 0
        }
      ],
      "references": []
    },
    "Luka_Luka_Ability03_Part02": {
      "fileName": "Luka_Luka_Ability03_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "IF",
          "conditions": {
            "name": "AND",
            "conditionList": [
              {
                "name": "Has Flag",
                "target": "Single Target (Primary)",
                "flagName": "STAT_DOT_Bleed"
              },
              {
                "name": "Eidolon Activated",
                "eidolon": 1
              }
            ]
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": "Caster",
              "modifier": "Luka_Eidolon1_Sub[<span class=\"descriptionNumberColor\">Fighting Endlessly</span>]",
              "duration": {
                "operator": "Variables[0] (2) || RETURN",
                "displayLines": "2",
                "constants": [],
                "variables": [
                  2
                ]
              },
              "stackLimit": 1,
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
        },
        {
          "name": "Add Events/Bonuses",
          "to": "Caster",
          "modifier": "Luka_ReloadBullet",
          "valuePerStack": {
            "MDF_AddValue": {
              "operator": "Variables[0] (2) || RETURN",
              "displayLines": "2",
              "constants": [],
              "variables": [
                2
              ]
            }
          }
        },
        {
          "name": "Add Events/Bonuses",
          "to": "Single Target (Primary)",
          "modifier": "Luka_AllDamageTypeTakenRatio[<span class=\"descriptionNumberColor\">Vulnerability</span>]",
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
          "name": "Update Displayed Energy Bar",
          "value": {
            "operator": "Variables[0] (BulletCount) || RETURN",
            "displayLines": "BulletCount",
            "constants": [],
            "variables": [
              "BulletCount"
            ]
          },
          "maximum": {
            "operator": "Constants[0] (4) || RETURN",
            "displayLines": "4",
            "constants": [
              4
            ],
            "variables": []
          },
          "assignState": "True",
          "priorState": "Active",
          "bar#": 3,
          "cooldown": 0
        },
        {
          "name": "ATK Scaling DMG",
          "target": "Single Target (Primary)",
          "canPhase": true,
          "AttackScaling": {
            "DamageType": "Physical",
            "Damage": {
              "operator": "Variables[0] (3.3) || RETURN",
              "displayLines": "3.3",
              "constants": [],
              "variables": [
                3.3
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
        "Trigger: Skip Death Handling",
        "Trigger: Ability End"
      ],
      "references": []
    },
    "Luka_Luka_Ability03_Part01": {
      "fileName": "Luka_Luka_Ability03_Part01",
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
          "ability": "Luka_Ability03_Part02",
          "isTrigger": true
        }
      ],
      "references": []
    },
    "Luka_Luka_Ability03_EnterReady": {
      "fileName": "Luka_Luka_Ability03_EnterReady",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [],
      "references": []
    },
    "Luka_Luka_Ability02_Part02": {
      "fileName": "Luka_Luka_Ability02_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "IF",
          "conditions": {
            "name": "AND",
            "conditionList": [
              {
                "name": "Has Flag",
                "target": "Single Target (Primary)",
                "flagName": "STAT_DOT_Bleed"
              },
              {
                "name": "Eidolon Activated",
                "eidolon": 1
              }
            ]
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": "Caster",
              "modifier": "Luka_Eidolon1_Sub[<span class=\"descriptionNumberColor\">Fighting Endlessly</span>]",
              "duration": {
                "operator": "Variables[0] (2) || RETURN",
                "displayLines": "2",
                "constants": [],
                "variables": [
                  2
                ]
              },
              "stackLimit": 1,
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
        },
        {
          "name": "Shot Fired",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Trace Activated",
                "conditionList": "Kinetic Overload"
              },
              "passed": [
                {
                  "name": "Dispel Debuffs",
                  "target": "Single Target (Primary)",
                  "typeOverride": "Buff",
                  "dispelCount": {
                    "operator": "Variables[0] (1) || RETURN",
                    "displayLines": "1",
                    "constants": [],
                    "variables": [
                      1
                    ]
                  },
                  "dispelOrder": "LastAdded",
                  "counterKey": "BuffClear"
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
            "Trigger: Attack End",
            {
              "name": "Add Events/Bonuses",
              "to": "Single Target (Primary)",
              "modifier": "Luka_DOT_Tear[<span class=\"descriptionNumberColor\">Bleed</span>]",
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
              "valuePerStack": {
                "Modifier_Tear_DamageRatio": {
                  "operator": "Variables[0] (0.24) || RETURN",
                  "displayLines": "0.24",
                  "constants": [],
                  "variables": [
                    0.24
                  ]
                },
                "Modifier_Tear_MaxPercentage": {
                  "operator": "Variables[0] (3.38) || RETURN",
                  "displayLines": "3.38",
                  "constants": [],
                  "variables": [
                    3.38
                  ]
                }
              }
            }
          ]
        },
        {
          "name": "Add Events/Bonuses",
          "to": "Caster",
          "modifier": "Luka_ReloadBullet",
          "valuePerStack": {
            "MDF_AddValue": {
              "operator": "Variables[0] (1) || RETURN",
              "displayLines": "1",
              "constants": [],
              "variables": [
                1
              ]
            }
          }
        },
        "Trigger: Ability End"
      ],
      "references": []
    },
    "Luka_Luka_Ability02_Part01": {
      "fileName": "Luka_Luka_Ability02_Part01",
      "abilityType": "Skill",
      "energy": 30,
      "toughnessList": [
        20,
        0,
        0
      ],
      "parse": [
        {
          "name": "Trigger Ability",
          "from": "Caster",
          "ability": "Luka_Ability02_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "references": []
    },
    "Luka_Luka_Ability11_Part02": {
      "fileName": "Luka_Luka_Ability11_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "IF",
          "conditions": {
            "name": "AND",
            "conditionList": [
              {
                "name": "Has Flag",
                "target": "Single Target (Primary)",
                "flagName": "STAT_DOT_Bleed"
              },
              {
                "name": "Eidolon Activated",
                "eidolon": 1
              }
            ]
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": "Caster",
              "modifier": "Luka_Eidolon1_Sub[<span class=\"descriptionNumberColor\">Fighting Endlessly</span>]",
              "duration": {
                "operator": "Variables[0] (2) || RETURN",
                "displayLines": "2",
                "constants": [],
                "variables": [
                  2
                ]
              },
              "stackLimit": 1,
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
        },
        {
          "name": "Adjust Variable Value",
          "adjustmentType": "Add to Value (Default)",
          "variableName": "BulletCount",
          "on": "Caster",
          "value": {
            "operator": "Constants[0] (2) || INVERT || RETURN",
            "displayLines": "-2",
            "constants": [
              2
            ],
            "variables": []
          }
        },
        {
          "name": "Define Custom Variable",
          "variableName": "PunchCount",
          "value": 3
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Trace Activated",
            "conditionList": "Crush Fighting Will"
          },
          "passed": [
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Random Chance",
                    "chance": {
                      "operator": "Variables[0] (0.5) || RETURN",
                      "displayLines": "0.5",
                      "constants": [],
                      "variables": [
                        0.5
                      ]
                    }
                  },
                  {
                    "name": "Compare: Variable",
                    "value1": "_PointB3_Trigger",
                    "compareType": "=",
                    "value2": 0
                  }
                ]
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "_PointB3_FirstPunch",
                  "value": 1
                }
              ],
              "failed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "PunchCount",
                  "value": {
                    "operator": "Variables[0] (PunchCount) || Constants[0] (1) || SUB || RETURN",
                    "displayLines": "(PunchCount - 1)",
                    "constants": [
                      1
                    ],
                    "variables": [
                      "PunchCount"
                    ]
                  }
                }
              ]
            }
          ],
          "failed": [
            {
              "name": "Define Custom Variable",
              "variableName": "PunchCount",
              "value": {
                "operator": "Variables[0] (PunchCount) || Constants[0] (1) || SUB || RETURN",
                "displayLines": "(PunchCount - 1)",
                "constants": [
                  1
                ],
                "variables": [
                  "PunchCount"
                ]
              }
            }
          ]
        },
        {
          "name": "Update Displayed Energy Bar",
          "value": {
            "operator": "Variables[0] (BulletCount) || RETURN",
            "displayLines": "BulletCount",
            "constants": [],
            "variables": [
              "BulletCount"
            ]
          },
          "maximum": {
            "operator": "Constants[0] (4) || RETURN",
            "displayLines": "4",
            "constants": [
              4
            ],
            "variables": []
          },
          "assignState": "True",
          "priorState": "Normal",
          "bar#": 3,
          "cooldown": 0
        },
        {
          "name": "ATK Scaling DMG",
          "target": "Single Target (Primary)",
          "AttackScaling": {
            "DamageType": "Physical",
            "Damage": {
              "operator": "Variables[0] (0.2) || RETURN",
              "displayLines": "0.2",
              "constants": [],
              "variables": [
                0.2
              ]
            },
            "Toughness": {
              "operator": "Variables[0] (ST Toughness Value) || Constants[0] (0.5) || MUL || Constants[1] (0.4) || MUL || RETURN",
              "displayLines": "((ST Toughness Value * 0.5) * 0.4)",
              "constants": [
                0.5,
                0.4
              ],
              "variables": [
                "ST Toughness Value"
              ]
            },
            "Tags": null
          }
        },
        {
          "name": "Define Custom Variable",
          "variableName": "HitCount",
          "value": 1
        },
        {
          "name": "Looped Event",
          "conditions": {
            "name": "AND",
            "conditionList": [
              {
                "name": "Compare: Variable",
                "value1": "PunchCount",
                "compareType": ">",
                "value2": 0
              }
            ]
          },
          "Event": [
            {
              "name": "IF",
              "conditions": {
                "name": "Trace Activated",
                "conditionList": "Crush Fighting Will"
              },
              "passed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Random Chance",
                        "chance": {
                          "operator": "Variables[0] (0.5) || RETURN",
                          "displayLines": "0.5",
                          "constants": [],
                          "variables": [
                            0.5
                          ]
                        }
                      },
                      {
                        "name": "Compare: Variable",
                        "value1": "_PointB3_Trigger",
                        "compareType": "=",
                        "value2": 0
                      },
                      {
                        "name": "Compare: Variable",
                        "value1": "_PointB3_FirstPunch",
                        "compareType": "=",
                        "value2": 0
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "_PointB3_Trigger",
                      "value": 1
                    }
                  ],
                  "failed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "PunchCount",
                      "value": {
                        "operator": "Variables[0] (PunchCount) || Constants[0] (1) || SUB || RETURN",
                        "displayLines": "(PunchCount - 1)",
                        "constants": [
                          1
                        ],
                        "variables": [
                          "PunchCount"
                        ]
                      }
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "_PointB3_Trigger",
                      "value": 0
                    }
                  ]
                }
              ],
              "failed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "PunchCount",
                  "value": {
                    "operator": "Variables[0] (PunchCount) || Constants[0] (1) || SUB || RETURN",
                    "displayLines": "(PunchCount - 1)",
                    "constants": [
                      1
                    ],
                    "variables": [
                      "PunchCount"
                    ]
                  }
                }
              ]
            },
            {
              "name": "Update Displayed Energy Bar",
              "value": {
                "operator": "Variables[0] (BulletCount) || RETURN",
                "displayLines": "BulletCount",
                "constants": [],
                "variables": [
                  "BulletCount"
                ]
              },
              "maximum": {
                "operator": "Constants[0] (4) || RETURN",
                "displayLines": "4",
                "constants": [
                  4
                ],
                "variables": []
              },
              "assignState": "True",
              "priorState": "Normal",
              "bar#": 3,
              "cooldown": 0
            },
            "Deleted bullshit",
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "_PointB3_Trigger",
                "compareType": "=",
                "value2": 1,
                "contextScope": "ContextAbility"
              },
              "passed": [
                {
                  "name": "ATK Scaling DMG",
                  "target": "Single Target (Primary)",
                  "AttackScaling": {
                    "DamageType": "Physical",
                    "Damage": {
                      "operator": "Variables[0] (0.2) || RETURN",
                      "displayLines": "0.2",
                      "constants": [],
                      "variables": [
                        0.2
                      ]
                    },
                    "Toughness": null,
                    "Tags": null
                  }
                }
              ],
              "failed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "_PointB3_FirstPunch",
                    "compareType": "=",
                    "value2": 1
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "_PointB3_FirstPunch",
                      "value": 0
                    },
                    {
                      "name": "ATK Scaling DMG",
                      "target": "Single Target (Primary)",
                      "AttackScaling": {
                        "DamageType": "Physical",
                        "Damage": {
                          "operator": "Variables[0] (0.2) || RETURN",
                          "displayLines": "0.2",
                          "constants": [],
                          "variables": [
                            0.2
                          ]
                        },
                        "Toughness": null,
                        "Tags": null
                      }
                    }
                  ],
                  "failed": [
                    {
                      "name": "ATK Scaling DMG",
                      "target": "Single Target (Primary)",
                      "AttackScaling": {
                        "DamageType": "Physical",
                        "Damage": {
                          "operator": "Variables[0] (0.2) || RETURN",
                          "displayLines": "0.2",
                          "constants": [],
                          "variables": [
                            0.2
                          ]
                        },
                        "Toughness": {
                          "operator": "Variables[0] (ST Toughness Value) || Constants[0] (0.5) || MUL || Constants[1] (0.3) || MUL || RETURN",
                          "displayLines": "((ST Toughness Value * 0.5) * 0.3)",
                          "constants": [
                            0.5,
                            0.3
                          ],
                          "variables": [
                            "ST Toughness Value"
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
              "name": "Define Custom Variable",
              "variableName": "HitCount",
              "value": {
                "operator": "Variables[0] (HitCount) || Constants[0] (1) || ADD || RETURN",
                "displayLines": "(HitCount + 1)",
                "constants": [
                  1
                ],
                "variables": [
                  "HitCount"
                ]
              }
            }
          ]
        },
        "Deleted bullshit",
        {
          "name": "Update Displayed Energy Bar",
          "value": {
            "operator": "Variables[0] (BulletCount) || RETURN",
            "displayLines": "BulletCount",
            "constants": [],
            "variables": [
              "BulletCount"
            ]
          },
          "maximum": {
            "operator": "Constants[0] (4) || RETURN",
            "displayLines": "4",
            "constants": [
              4
            ],
            "variables": []
          },
          "assignState": "True",
          "bar#": 3,
          "cooldown": 0
        },
        {
          "name": "ATK Scaling DMG",
          "target": "Single Target (Primary)",
          "canPhase": true,
          "AttackScaling": {
            "DamageType": "Physical",
            "Damage": {
              "operator": "Variables[0] (0.8) || RETURN",
              "displayLines": "0.8",
              "constants": [],
              "variables": [
                0.8
              ]
            },
            "Toughness": {
              "operator": "Variables[0] (ST Toughness Value) || Constants[0] (0.5) || MUL || RETURN",
              "displayLines": "(ST Toughness Value * 0.5)",
              "constants": [
                0.5
              ],
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
            "name": "Has Flag",
            "target": "Single Target (Primary)",
            "flagName": "STAT_DOT_Bleed"
          },
          "passed": [
            {
              "name": "Trigger Modifier Event",
              "target": "Single Target (Primary)",
              "variableName": "DOT_TriggerRatio",
              "eventType": "DOT_Bleed",
              "value": {
                "operator": "Variables[0] (0.85) || RETURN",
                "displayLines": "0.85",
                "constants": [],
                "variables": [
                  0.85
                ]
              }
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Eidolon Activated",
                "eidolon": 6
              },
              "failed": [
                "Trigger: Attack End"
              ]
            }
          ],
          "failed": [
            "Trigger: Attack End"
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "AND",
            "conditionList": [
              {
                "name": "Eidolon Activated",
                "eidolon": 6
              },
              {
                "name": "Has Flag",
                "target": "Single Target (Primary)",
                "flagName": "STAT_DOT_Bleed"
              }
            ]
          },
          "passed": [
            {
              "name": "Looped Event",
              "maxLoops": {
                "operator": "Variables[0] (HitCount) || Constants[0] (1) || SUB || RETURN",
                "displayLines": "(HitCount - 1)",
                "constants": [
                  1
                ],
                "variables": [
                  "HitCount"
                ]
              },
              "Event": [
                {
                  "name": "Trigger Modifier Event",
                  "target": "Single Target (Primary)",
                  "variableName": "DOT_TriggerRatio",
                  "eventType": "DOT_Bleed",
                  "value": {
                    "operator": "Variables[0] (0.08) || RETURN",
                    "displayLines": "0.08",
                    "constants": [],
                    "variables": [
                      0.08
                    ]
                  }
                }
              ]
            },
            {
              "name": "Trigger Modifier Event",
              "target": "Single Target (Primary)",
              "variableName": "DOT_TriggerRatio",
              "eventType": "DOT_Bleed",
              "value": {
                "operator": "Variables[0] (0.08) || RETURN",
                "displayLines": "0.08",
                "constants": [],
                "variables": [
                  0.08
                ]
              }
            },
            "Trigger: Attack End"
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "BulletCount",
            "compareType": "<",
            "value2": 2
          },
          "passed": [
            {
              "name": "Remove Events/Bonuses",
              "to": "Caster",
              "modifier": "Luka_ChangeAttack"
            }
          ]
        },
        "Trigger: Ability End"
      ],
      "references": []
    },
    "Luka_Luka_Ability11_Part01": {
      "fileName": "Luka_Luka_Ability11_Part01",
      "abilityType": "Basic ATK",
      "energy": 20,
      "toughnessList": [
        20,
        0,
        0
      ],
      "parse": [
        "Deleted bullshit",
        {
          "name": "Trigger Ability",
          "from": "Caster",
          "ability": "Luka_Ability11_Part02",
          "isTrigger": true
        }
      ],
      "references": []
    },
    "Luka_Luka_Ability01_Part02": {
      "fileName": "Luka_Luka_Ability01_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "IF",
          "conditions": {
            "name": "AND",
            "conditionList": [
              {
                "name": "Has Flag",
                "target": "Single Target (Primary)",
                "flagName": "STAT_DOT_Bleed"
              },
              {
                "name": "Eidolon Activated",
                "eidolon": 1
              }
            ]
          },
          "passed": [
            {
              "name": "Add Events/Bonuses",
              "to": "Caster",
              "modifier": "Luka_Eidolon1_Sub[<span class=\"descriptionNumberColor\">Fighting Endlessly</span>]",
              "duration": {
                "operator": "Variables[0] (2) || RETURN",
                "displayLines": "2",
                "constants": [],
                "variables": [
                  2
                ]
              },
              "stackLimit": 1,
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
        },
        {
          "name": "Update Displayed Energy Bar",
          "value": {
            "operator": "Variables[0] (BulletCount) || RETURN",
            "displayLines": "BulletCount",
            "constants": [],
            "variables": [
              "BulletCount"
            ]
          },
          "maximum": {
            "operator": "Constants[0] (4) || RETURN",
            "displayLines": "4",
            "constants": [
              4
            ],
            "variables": []
          },
          "assignState": "True",
          "priorState": "Disable",
          "bar#": 3,
          "cooldown": 0
        },
        {
          "name": "ATK Scaling DMG",
          "target": "Single Target (Primary)",
          "canPhase": true,
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
          "name": "Add Events/Bonuses",
          "to": "Caster",
          "modifier": "Luka_ReloadBullet",
          "valuePerStack": {
            "MDF_AddValue": {
              "operator": "Variables[0] (1) || RETURN",
              "displayLines": "1",
              "constants": [],
              "variables": [
                1
              ]
            }
          }
        },
        "Trigger: Ability End"
      ],
      "references": []
    },
    "Luka_Luka_Ability01_Part01": {
      "fileName": "Luka_Luka_Ability01_Part01",
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
          "ability": "Luka_Ability01_Part02",
          "isTrigger": true
        }
      ],
      "references": []
    },
    "Luka_Modifiers": {
      "fileName": "Luka_Modifiers",
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
          "for": "Luka_DOT_Tear[<span class=\"descriptionNumberColor\">Bleed</span>]",
          "stackType": "ReplaceByCaster",
          "lifeCyclePhaseAllowed": "ModifierPhase1End",
          "modifierFlags": [
            "STAT_DOT",
            "STAT_DOT_Bleed"
          ],
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier",
              "execute": [
                {
                  "name": "Define Custom Variable with Stat",
                  "target": "Owner of this Modifier",
                  "variableName": "MDF_TargetMaxHP",
                  "value": "&nbsp;<span class=\"descriptionNumberColor\">HPMax</span>&nbsp;"
                },
                {
                  "name": "Define Custom Variable with Stat",
                  "target": "Prior Snapshot Entity",
                  "variableName": "MDF_CasterAttack",
                  "value": "&nbsp;<span class=\"descriptionNumberColor\">AttackSUM</span>&nbsp;"
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "MDF_TargetMaxHP",
                    "compareType": ">=",
                    "value2": {
                      "operator": "Variables[0] (MDF_CasterAttack) || Variables[1] (Modifier_Tear_MaxPercentage) || MUL || Variables[2] (Modifier_Tear_DamageRatio) || DIV || RETURN",
                      "displayLines": "((MDF_CasterAttack * Modifier_Tear_MaxPercentage) / Modifier_Tear_DamageRatio)",
                      "constants": [],
                      "variables": [
                        "MDF_CasterAttack",
                        "Modifier_Tear_MaxPercentage",
                        "Modifier_Tear_DamageRatio"
                      ]
                    }
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "MDF_DamageValue",
                      "value": {
                        "operator": "Variables[0] (MDF_CasterAttack) || Variables[1] (Modifier_Tear_MaxPercentage) || MUL || RETURN",
                        "displayLines": "(MDF_CasterAttack * Modifier_Tear_MaxPercentage)",
                        "constants": [],
                        "variables": [
                          "MDF_CasterAttack",
                          "Modifier_Tear_MaxPercentage"
                        ]
                      }
                    }
                  ],
                  "failed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "MDF_DamageValue",
                      "value": {
                        "operator": "Variables[0] (MDF_TargetMaxHP) || Variables[1] (Modifier_Tear_DamageRatio) || MUL || RETURN",
                        "displayLines": "(MDF_TargetMaxHP * Modifier_Tear_DamageRatio)",
                        "constants": [],
                        "variables": [
                          "MDF_TargetMaxHP",
                          "Modifier_Tear_DamageRatio"
                        ]
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
                  "name": "Define Custom Variable with Stat",
                  "target": "Owner of this Modifier",
                  "variableName": "MDF_TargetMaxHP",
                  "value": "&nbsp;<span class=\"descriptionNumberColor\">HPMax</span>&nbsp;"
                },
                {
                  "name": "Define Custom Variable with Stat",
                  "target": "Prior Snapshot Entity",
                  "variableName": "MDF_CasterAttack",
                  "value": "&nbsp;<span class=\"descriptionNumberColor\">AttackSUM</span>&nbsp;"
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "MDF_TargetMaxHP",
                    "compareType": ">=",
                    "value2": {
                      "operator": "Variables[0] (MDF_CasterAttack) || Variables[1] (Modifier_Tear_MaxPercentage) || MUL || Variables[2] (Modifier_Tear_DamageRatio) || DIV || RETURN",
                      "displayLines": "((MDF_CasterAttack * Modifier_Tear_MaxPercentage) / Modifier_Tear_DamageRatio)",
                      "constants": [],
                      "variables": [
                        "MDF_CasterAttack",
                        "Modifier_Tear_MaxPercentage",
                        "Modifier_Tear_DamageRatio"
                      ]
                    }
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "MDF_DamageValue",
                      "value": {
                        "operator": "Variables[0] (MDF_CasterAttack) || Variables[1] (Modifier_Tear_MaxPercentage) || MUL || RETURN",
                        "displayLines": "(MDF_CasterAttack * Modifier_Tear_MaxPercentage)",
                        "constants": [],
                        "variables": [
                          "MDF_CasterAttack",
                          "Modifier_Tear_MaxPercentage"
                        ]
                      }
                    }
                  ],
                  "failed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "MDF_DamageValue",
                      "value": {
                        "operator": "Variables[0] (MDF_TargetMaxHP) || Variables[1] (Modifier_Tear_DamageRatio) || MUL || RETURN",
                        "displayLines": "(MDF_TargetMaxHP * Modifier_Tear_DamageRatio)",
                        "constants": [],
                        "variables": [
                          "MDF_TargetMaxHP",
                          "Modifier_Tear_DamageRatio"
                        ]
                      }
                    }
                  ]
                },
                {
                  "name": "ATK Scaling DMG",
                  "target": "Owner of this Modifier",
                  "AttackScaling": {
                    "DamageType": "Physical",
                    "Damage": {
                      "operator": "Variables[0] (MDF_DamageValue) || RETURN",
                      "displayLines": "MDF_DamageValue",
                      "constants": [],
                      "variables": [
                        "MDF_DamageValue"
                      ]
                    },
                    "Toughness": null,
                    "Tags": null,
                    "attackType": "DOT"
                  }
                }
              ]
            },
            {
              "eventTrigger": "Custom Event",
              "execute": [
                {
                  "name": "Define Custom Variable with Stat",
                  "target": "Owner of this Modifier",
                  "variableName": "MDF_TargetMaxHP",
                  "value": "&nbsp;<span class=\"descriptionNumberColor\">HPMax</span>&nbsp;"
                },
                {
                  "name": "Define Custom Variable with Stat",
                  "target": "Prior Snapshot Entity",
                  "variableName": "MDF_CasterAttack",
                  "value": "&nbsp;<span class=\"descriptionNumberColor\">AttackSUM</span>&nbsp;"
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "MDF_TargetMaxHP",
                    "compareType": ">=",
                    "value2": {
                      "operator": "Variables[0] (MDF_CasterAttack) || Variables[1] (Modifier_Tear_MaxPercentage) || MUL || Variables[2] (Modifier_Tear_DamageRatio) || DIV || RETURN",
                      "displayLines": "((MDF_CasterAttack * Modifier_Tear_MaxPercentage) / Modifier_Tear_DamageRatio)",
                      "constants": [],
                      "variables": [
                        "MDF_CasterAttack",
                        "Modifier_Tear_MaxPercentage",
                        "Modifier_Tear_DamageRatio"
                      ]
                    }
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "MDF_DamageValue",
                      "value": {
                        "operator": "Variables[0] (MDF_CasterAttack) || Variables[1] (Modifier_Tear_MaxPercentage) || MUL || RETURN",
                        "displayLines": "(MDF_CasterAttack * Modifier_Tear_MaxPercentage)",
                        "constants": [],
                        "variables": [
                          "MDF_CasterAttack",
                          "Modifier_Tear_MaxPercentage"
                        ]
                      }
                    }
                  ],
                  "failed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "MDF_DamageValue",
                      "value": {
                        "operator": "Variables[0] (MDF_TargetMaxHP) || Variables[1] (Modifier_Tear_DamageRatio) || MUL || RETURN",
                        "displayLines": "(MDF_TargetMaxHP * Modifier_Tear_DamageRatio)",
                        "constants": [],
                        "variables": [
                          "MDF_TargetMaxHP",
                          "Modifier_Tear_DamageRatio"
                        ]
                      }
                    }
                  ]
                },
                {
                  "name": "ATK Scaling DMG",
                  "target": "Owner of this Modifier",
                  "AttackScaling": {
                    "DamageType": "Physical",
                    "Damage": {
                      "operator": "Variables[0] (DOT_TriggerRatio) || Variables[1] (MDF_DamageValue) || MUL || RETURN",
                      "displayLines": "(DOT_TriggerRatio * MDF_DamageValue)",
                      "constants": [],
                      "variables": [
                        "DOT_TriggerRatio",
                        "MDF_DamageValue"
                      ]
                    },
                    "Toughness": null,
                    "Tags": null,
                    "attackType": "DOT"
                  }
                }
              ]
            }
          ],
          "useEntitySnapshot": true,
          "stackData": [
            "Modifier_Tear_DamageRatio",
            "Modifier_Tear_MaxPercentage"
          ],
          "latentQueue": [],
          "description": "Takes Physical DMG at the start of each turn for a certain number of turns.",
          "type": "Debuff",
          "effectName": "Bleed",
          "statusName": "Bleed",
          "stackLimit": 1,
          "addStacksPerTrigger": 1
        },
        {
          "name": "Modifier Construction",
          "for": "Luka_MazeBullet",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Adjust Variable Value",
                  "adjustmentType": "Overwrite Value",
                  "variableName": "BulletCount",
                  "on": "Caster",
                  "value": 2
                },
                {
                  "name": "Update Displayed Energy Bar",
                  "value": {
                    "operator": "Variables[0] (BulletCount) || RETURN",
                    "displayLines": "BulletCount",
                    "constants": [],
                    "variables": [
                      "BulletCount"
                    ]
                  },
                  "maximum": {
                    "operator": "Constants[0] (4) || RETURN",
                    "displayLines": "4",
                    "constants": [
                      4
                    ],
                    "variables": []
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
          "for": "Luka_Eidolon4[<span class=\"descriptionNumberColor\">Never Turning Back</span>]",
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
                  "name": "Define Custom Variable",
                  "variableName": "MDF_AttackAdded",
                  "value": {
                    "operator": "Variables[0] (0.05) || Variables[1] (MDF_Layer) || MUL || RETURN",
                    "displayLines": "(0.05 * MDF_Layer)",
                    "constants": [],
                    "variables": [
                      0.05,
                      "MDF_Layer"
                    ]
                  }
                },
                {
                  "name": "Stack Target Stat Value",
                  "target": "Caster",
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">ATK%</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (MDF_AttackAdded) || RETURN",
                    "displayLines": "MDF_AttackAdded",
                    "constants": [],
                    "variables": [
                      "MDF_AttackAdded"
                    ]
                  }
                }
              ]
            }
          ],
          "description": "ATK +<span class=\"descriptionNumberColor\">MDF_AttackAdded</span>.",
          "type": "Buff",
          "effectName": "ATK Boost",
          "statusName": "Never Turning Back",
          "addStacksPerTrigger": 1
        },
        {
          "name": "Modifier Construction",
          "for": "Luka_Eidolon2",
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
                        "name": "Has Weakness",
                        "target": "Use Prior Target(s) Defined",
                        "DamageType": "Physical"
                      },
                      {
                        "name": "Skill Type",
                        "skillType": "Skill"
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": "Caster",
                      "modifier": "Luka_ReloadBullet",
                      "valuePerStack": {
                        "MDF_AddValue": {
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
              ]
            }
          ],
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "Luka_Eidolon1_Sub[<span class=\"descriptionNumberColor\">Fighting Endlessly</span>]",
          "stackType": "ReplaceByCaster",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Stack Target Stat Value",
                  "target": "Owner of this Modifier",
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
          "latentQueue": [],
          "description": "Increases DMG dealt by <span class=\"descriptionNumberColor\">MDF_PropertyValue</span>.",
          "type": "Buff",
          "effectName": "DMG Boost",
          "statusName": "Fighting Endlessly"
        },
        {
          "name": "Modifier Construction",
          "for": "Luka_ReloadBullet",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "BulletCount",
                    "compareType": ">=",
                    "value2": 3
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "MDF_AddValue",
                      "value": {
                        "operator": "Constants[0] (4) || Variables[0] (BulletCount) || SUB || RETURN",
                        "displayLines": "(4 - BulletCount)",
                        "constants": [
                          4
                        ],
                        "variables": [
                          "BulletCount"
                        ]
                      }
                    }
                  ]
                },
                {
                  "name": "Looped Event",
                  "maxLoops": {
                    "operator": "Variables[0] (MDF_AddValue) || RETURN",
                    "displayLines": "MDF_AddValue",
                    "constants": [],
                    "variables": [
                      "MDF_AddValue"
                    ]
                  },
                  "Event": [
                    {
                      "name": "Adjust Variable Value",
                      "adjustmentType": "Add to Value (Default)",
                      "variableName": "BulletCount",
                      "on": "Caster",
                      "value": 1
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
                          "modifier": "Luka_Eidolon4[<span class=\"descriptionNumberColor\">Never Turning Back</span>]",
                          "stackLimit": {
                            "operator": "Variables[0] (4) || RETURN",
                            "displayLines": "4",
                            "constants": [],
                            "variables": [
                              4
                            ]
                          },
                          "valuePerStack": {
                            "MDF_PropertyValue2": {
                              "operator": "Variables[0] (0.05) || RETURN",
                              "displayLines": "0.05",
                              "constants": [],
                              "variables": [
                                0.05
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
                    "conditionList": "Cycle Braking"
                  },
                  "passed": [
                    {
                      "name": "Update Energy",
                      "on": "Caster",
                      "value": {
                        "operator": "Variables[0] (3) || Variables[1] (MDF_AddValue) || MUL || RETURN",
                        "displayLines": "(3 * MDF_AddValue)",
                        "constants": [],
                        "variables": [
                          3,
                          "MDF_AddValue"
                        ]
                      },
                      "isFixed": "* ERR"
                    }
                  ]
                },
                {
                  "name": "Update Displayed Energy Bar",
                  "value": {
                    "operator": "Variables[0] (BulletCount) || RETURN",
                    "displayLines": "BulletCount",
                    "constants": [],
                    "variables": [
                      "BulletCount"
                    ]
                  },
                  "maximum": {
                    "operator": "Constants[0] (4) || RETURN",
                    "displayLines": "4",
                    "constants": [
                      4
                    ],
                    "variables": []
                  },
                  "assignState": "True",
                  "priorState": "Normal",
                  "bar#": 3,
                  "cooldown": 0
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "BulletCount",
                    "compareType": "<",
                    "value2": 2
                  },
                  "failed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": "Caster",
                      "modifier": "Luka_ChangeAttack"
                    },
                    {
                      "name": "Update Displayed Energy Bar",
                      "value": {
                        "operator": "Variables[0] (BulletCount) || RETURN",
                        "displayLines": "BulletCount",
                        "constants": [],
                        "variables": [
                          "BulletCount"
                        ]
                      },
                      "maximum": {
                        "operator": "Constants[0] (4) || RETURN",
                        "displayLines": "4",
                        "constants": [
                          4
                        ],
                        "variables": []
                      },
                      "assignState": "True",
                      "priorState": "Active",
                      "bar#": 3,
                      "cooldown": 0
                    }
                  ]
                },
                "Modifier Deletes Itself"
              ]
            }
          ],
          "stackData": [
            "MDF_AddValue"
          ],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "Luka_AllDamageTypeTakenRatio[<span class=\"descriptionNumberColor\">Vulnerability</span>]",
          "stackType": "ReplaceByCaster",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Stack Target Stat Value",
                  "target": "Owner of this Modifier",
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
          "description": "Increases DMG taken by <span class=\"descriptionNumberColor\">MDF_PropertyValue</span>.",
          "type": "Debuff",
          "effectName": "Vulnerability",
          "statusName": "Vulnerability"
        },
        {
          "name": "Modifier Construction",
          "for": "Luka_ChangeAttack",
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
                  "target": "Caster",
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
          "for": "Luka_Passive",
          "execute": [
            {
              "eventTrigger": "Action Choice Window [Owner]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "BulletCount",
                    "compareType": "<",
                    "value2": 2
                  },
                  "failed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": "Caster",
                      "modifier": "Luka_ChangeAttack"
                    },
                    {
                      "name": "Update Displayed Energy Bar",
                      "value": {
                        "operator": "Variables[0] (BulletCount) || RETURN",
                        "displayLines": "BulletCount",
                        "constants": [],
                        "variables": [
                          "BulletCount"
                        ]
                      },
                      "maximum": {
                        "operator": "Constants[0] (4) || RETURN",
                        "displayLines": "4",
                        "constants": [
                          4
                        ],
                        "variables": []
                      },
                      "assignState": "True",
                      "priorState": "Active",
                      "bar#": 3,
                      "cooldown": 0
                    }
                  ]
                }
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