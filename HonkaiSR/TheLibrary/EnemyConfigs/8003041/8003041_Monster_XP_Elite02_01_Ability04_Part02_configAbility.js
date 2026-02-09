const configAbility = {
  "fileName": "8003041_Monster_XP_Elite02_01_Ability04_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Define Custom Variable",
      "variableName": "AccelerateLayer",
      "value": {
        "operator": "Variables[0] (EnergyLayer) || RETURN",
        "displayLines": "EnergyLayer",
        "constants": [],
        "variables": [
          "EnergyLayer"
        ]
      }
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"1400625126\">Monster_XP_Elite02_01_Effect</a>"
    },
    {
      "name": "Define Custom Variable",
      "variableName": "EnergyLayer",
      "value": -1
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Compare: Variable",
        "value1": "AccelerateLayer",
        "compareType": "=",
        "value2": 9
      },
      "failed": [
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "AccelerateLayer",
            "compareType": "=",
            "value2": 8
          },
          "failed": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "AccelerateLayer",
                "compareType": "=",
                "value2": 7
              },
              "failed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "AccelerateLayer",
                    "compareType": "=",
                    "value2": 6
                  },
                  "failed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "AccelerateLayer",
                        "compareType": "=",
                        "value2": 5
                      },
                      "failed": [
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Compare: Variable",
                            "value1": "AccelerateLayer",
                            "compareType": "=",
                            "value2": 4
                          },
                          "failed": [
                            {
                              "name": "IF",
                              "conditions": {
                                "name": "Compare: Variable",
                                "value1": "AccelerateLayer",
                                "compareType": "=",
                                "value2": 3
                              },
                              "failed": [
                                {
                                  "name": "IF",
                                  "conditions": {
                                    "name": "Compare: Variable",
                                    "value1": "AccelerateLayer",
                                    "compareType": "=",
                                    "value2": 2
                                  },
                                  "failed": [
                                    {
                                      "name": "IF",
                                      "conditions": {
                                        "name": "Compare: Variable",
                                        "value1": "AccelerateLayer",
                                        "compareType": "=",
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
      "name": "Find New Target",
      "from": {
        "name": "Target Name",
        "target": "{{Hostile Entities(AOE)}}"
      },
      "sequenceList": [
        {
          "name": "Animation Task",
          "passed": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "AccelerateLayer",
                "compareType": ">",
                "value2": 0
              },
              "passed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "AccelerateLayer",
                    "compareType": ">",
                    "value2": 0
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "AccelerateLayer",
                      "value": {
                        "operator": "Variables[0] (AccelerateLayer) || Constants[0] (1) || SUB || RETURN",
                        "displayLines": "(AccelerateLayer - 1)",
                        "constants": [
                          1
                        ],
                        "variables": [
                          "AccelerateLayer"
                        ]
                      }
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "AccelerateLayer",
                    "compareType": "=",
                    "value2": 0
                  },
                  "passed": [
                    {
                      "name": "Shot Fired",
                      "execute": [
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Compare: Variable",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Projectile's Target}}"
                            },
                            "value1": "CurrentHP%",
                            "compareType": ">",
                            "value2": 0
                          },
                          "passed": [
                            {
                              "name": "ATK Scaling DMG",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Projectile's Target}}"
                              },
                              "AttackScaling": {
                                "DamageType": "Imaginary",
                                "Damage": {
                                  "operator": "Variables[0] ({[Skill04[0]]}) || RETURN",
                                  "displayLines": "{[Skill04[0]]}",
                                  "constants": [],
                                  "variables": [
                                    "{[Skill04[0]]}"
                                  ]
                                },
                                "Toughness": null,
                                "Tags": null,
                                "EnergyGainPercent": "100%"
                              }
                            },
                            {
                              "name": "IF",
                              "conditions": {
                                "name": "Has Modifier",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Projectile's Target}}"
                                },
                                "modifier": "<a class=\"gModGreen\" id=\"1997760414\">Standard_Confine</a>[<span class=\"descriptionNumberColor\">Imprisonment</span>]",
                                "casterFilter": {
                                  "name": "Target Name",
                                  "target": "{{Caster}}"
                                }
                              },
                              "failed": [
                                {
                                  "name": "Add Events/Bonuses",
                                  "to": {
                                    "name": "Target Name",
                                    "target": "{{Projectile's Target}}"
                                  },
                                  "modifier": "<a class=\"gModGreen\" id=\"1997760414\">Standard_Confine</a>[<span class=\"descriptionNumberColor\">Imprisonment</span>]",
                                  "duration": 1,
                                  "baseChance": {
                                    "operator": "Variables[0] ({[PassiveSkill01[1]]}) || RETURN",
                                    "displayLines": "{[PassiveSkill01[1]]}",
                                    "constants": [],
                                    "variables": [
                                      "{[PassiveSkill01[1]]}"
                                    ]
                                  },
                                  "immediateEffect": true,
                                  "valuePerStack": {
                                    "MDF_ActionDelayRatio": {
                                      "operator": "Variables[0] ({[PassiveSkill01[2]]}) || RETURN",
                                      "displayLines": "{[PassiveSkill01[2]]}",
                                      "constants": [],
                                      "variables": [
                                        "{[PassiveSkill01[2]]}"
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
                                "value1": "EnergyLayer",
                                "compareType": ">",
                                "value2": 0
                              },
                              "passed": [
                                {
                                  "name": "Define Custom Variable",
                                  "variableName": "EnergyLayer",
                                  "value": {
                                    "operator": "Variables[0] (EnergyLayer) || Constants[0] (1) || SUB || RETURN",
                                    "displayLines": "(EnergyLayer - 1)",
                                    "constants": [
                                      1
                                    ],
                                    "variables": [
                                      "EnergyLayer"
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
                  "failed": [
                    {
                      "name": "Shot Fired",
                      "execute": [
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Compare: Variable",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Projectile's Target}}"
                            },
                            "value1": "CurrentHP%",
                            "compareType": ">",
                            "value2": 0
                          },
                          "passed": [
                            {
                              "name": "ATK Scaling DMG",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Projectile's Target}}"
                              },
                              "AttackScaling": {
                                "DamageType": "Imaginary",
                                "Damage": {
                                  "operator": "Variables[0] ({[Skill04[0]]}) || RETURN",
                                  "displayLines": "{[Skill04[0]]}",
                                  "constants": [],
                                  "variables": [
                                    "{[Skill04[0]]}"
                                  ]
                                },
                                "Toughness": null,
                                "Tags": null,
                                "EnergyGainPercent": "100%"
                              }
                            },
                            {
                              "name": "IF",
                              "conditions": {
                                "name": "Has Modifier",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Projectile's Target}}"
                                },
                                "modifier": "<a class=\"gModGreen\" id=\"1997760414\">Standard_Confine</a>[<span class=\"descriptionNumberColor\">Imprisonment</span>]",
                                "casterFilter": {
                                  "name": "Target Name",
                                  "target": "{{Caster}}"
                                }
                              },
                              "failed": [
                                {
                                  "name": "Add Events/Bonuses",
                                  "to": {
                                    "name": "Target Name",
                                    "target": "{{Projectile's Target}}"
                                  },
                                  "modifier": "<a class=\"gModGreen\" id=\"1997760414\">Standard_Confine</a>[<span class=\"descriptionNumberColor\">Imprisonment</span>]",
                                  "duration": 1,
                                  "baseChance": {
                                    "operator": "Variables[0] ({[PassiveSkill01[1]]}) || RETURN",
                                    "displayLines": "{[PassiveSkill01[1]]}",
                                    "constants": [],
                                    "variables": [
                                      "{[PassiveSkill01[1]]}"
                                    ]
                                  },
                                  "immediateEffect": true,
                                  "valuePerStack": {
                                    "MDF_ActionDelayRatio": {
                                      "operator": "Variables[0] ({[PassiveSkill01[2]]}) || RETURN",
                                      "displayLines": "{[PassiveSkill01[2]]}",
                                      "constants": [],
                                      "variables": [
                                        "{[PassiveSkill01[2]]}"
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
                                "value1": "EnergyLayer",
                                "compareType": ">",
                                "value2": 0
                              },
                              "passed": [
                                {
                                  "name": "Define Custom Variable",
                                  "variableName": "EnergyLayer",
                                  "value": {
                                    "operator": "Variables[0] (EnergyLayer) || Constants[0] (1) || SUB || RETURN",
                                    "displayLines": "(EnergyLayer - 1)",
                                    "constants": [
                                      1
                                    ],
                                    "variables": [
                                      "EnergyLayer"
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
                }
              ]
            }
          ]
        },
        {
          "name": "Animation Task",
          "passed": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "AccelerateLayer",
                "compareType": ">",
                "value2": 0
              },
              "passed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "AccelerateLayer",
                    "compareType": ">",
                    "value2": 0
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "AccelerateLayer",
                      "value": {
                        "operator": "Variables[0] (AccelerateLayer) || Constants[0] (1) || SUB || RETURN",
                        "displayLines": "(AccelerateLayer - 1)",
                        "constants": [
                          1
                        ],
                        "variables": [
                          "AccelerateLayer"
                        ]
                      }
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "AccelerateLayer",
                    "compareType": "=",
                    "value2": 0
                  },
                  "passed": [
                    {
                      "name": "Shot Fired",
                      "execute": [
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Compare: Variable",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Projectile's Target}}"
                            },
                            "value1": "CurrentHP%",
                            "compareType": ">",
                            "value2": 0
                          },
                          "passed": [
                            {
                              "name": "ATK Scaling DMG",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Projectile's Target}}"
                              },
                              "AttackScaling": {
                                "DamageType": "Imaginary",
                                "Damage": {
                                  "operator": "Variables[0] ({[Skill04[0]]}) || RETURN",
                                  "displayLines": "{[Skill04[0]]}",
                                  "constants": [],
                                  "variables": [
                                    "{[Skill04[0]]}"
                                  ]
                                },
                                "Toughness": null,
                                "Tags": null,
                                "EnergyGainPercent": "100%"
                              }
                            },
                            {
                              "name": "IF",
                              "conditions": {
                                "name": "Has Modifier",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Projectile's Target}}"
                                },
                                "modifier": "<a class=\"gModGreen\" id=\"1997760414\">Standard_Confine</a>[<span class=\"descriptionNumberColor\">Imprisonment</span>]",
                                "casterFilter": {
                                  "name": "Target Name",
                                  "target": "{{Caster}}"
                                }
                              },
                              "failed": [
                                {
                                  "name": "Add Events/Bonuses",
                                  "to": {
                                    "name": "Target Name",
                                    "target": "{{Projectile's Target}}"
                                  },
                                  "modifier": "<a class=\"gModGreen\" id=\"1997760414\">Standard_Confine</a>[<span class=\"descriptionNumberColor\">Imprisonment</span>]",
                                  "duration": 1,
                                  "baseChance": {
                                    "operator": "Variables[0] ({[PassiveSkill01[1]]}) || RETURN",
                                    "displayLines": "{[PassiveSkill01[1]]}",
                                    "constants": [],
                                    "variables": [
                                      "{[PassiveSkill01[1]]}"
                                    ]
                                  },
                                  "immediateEffect": true,
                                  "valuePerStack": {
                                    "MDF_ActionDelayRatio": {
                                      "operator": "Variables[0] ({[PassiveSkill01[2]]}) || RETURN",
                                      "displayLines": "{[PassiveSkill01[2]]}",
                                      "constants": [],
                                      "variables": [
                                        "{[PassiveSkill01[2]]}"
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
                                "value1": "EnergyLayer",
                                "compareType": ">",
                                "value2": 0
                              },
                              "passed": [
                                {
                                  "name": "Define Custom Variable",
                                  "variableName": "EnergyLayer",
                                  "value": {
                                    "operator": "Variables[0] (EnergyLayer) || Constants[0] (1) || SUB || RETURN",
                                    "displayLines": "(EnergyLayer - 1)",
                                    "constants": [
                                      1
                                    ],
                                    "variables": [
                                      "EnergyLayer"
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
                  "failed": [
                    {
                      "name": "Shot Fired",
                      "execute": [
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Compare: Variable",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Projectile's Target}}"
                            },
                            "value1": "CurrentHP%",
                            "compareType": ">",
                            "value2": 0
                          },
                          "passed": [
                            {
                              "name": "ATK Scaling DMG",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Projectile's Target}}"
                              },
                              "AttackScaling": {
                                "DamageType": "Imaginary",
                                "Damage": {
                                  "operator": "Variables[0] ({[Skill04[0]]}) || RETURN",
                                  "displayLines": "{[Skill04[0]]}",
                                  "constants": [],
                                  "variables": [
                                    "{[Skill04[0]]}"
                                  ]
                                },
                                "Toughness": null,
                                "Tags": null,
                                "EnergyGainPercent": "100%"
                              }
                            },
                            {
                              "name": "IF",
                              "conditions": {
                                "name": "Has Modifier",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Projectile's Target}}"
                                },
                                "modifier": "<a class=\"gModGreen\" id=\"1997760414\">Standard_Confine</a>[<span class=\"descriptionNumberColor\">Imprisonment</span>]",
                                "casterFilter": {
                                  "name": "Target Name",
                                  "target": "{{Caster}}"
                                }
                              },
                              "failed": [
                                {
                                  "name": "Add Events/Bonuses",
                                  "to": {
                                    "name": "Target Name",
                                    "target": "{{Projectile's Target}}"
                                  },
                                  "modifier": "<a class=\"gModGreen\" id=\"1997760414\">Standard_Confine</a>[<span class=\"descriptionNumberColor\">Imprisonment</span>]",
                                  "duration": 1,
                                  "baseChance": {
                                    "operator": "Variables[0] ({[PassiveSkill01[1]]}) || RETURN",
                                    "displayLines": "{[PassiveSkill01[1]]}",
                                    "constants": [],
                                    "variables": [
                                      "{[PassiveSkill01[1]]}"
                                    ]
                                  },
                                  "immediateEffect": true,
                                  "valuePerStack": {
                                    "MDF_ActionDelayRatio": {
                                      "operator": "Variables[0] ({[PassiveSkill01[2]]}) || RETURN",
                                      "displayLines": "{[PassiveSkill01[2]]}",
                                      "constants": [],
                                      "variables": [
                                        "{[PassiveSkill01[2]]}"
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
                                "value1": "EnergyLayer",
                                "compareType": ">",
                                "value2": 0
                              },
                              "passed": [
                                {
                                  "name": "Define Custom Variable",
                                  "variableName": "EnergyLayer",
                                  "value": {
                                    "operator": "Variables[0] (EnergyLayer) || Constants[0] (1) || SUB || RETURN",
                                    "displayLines": "(EnergyLayer - 1)",
                                    "constants": [
                                      1
                                    ],
                                    "variables": [
                                      "EnergyLayer"
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
                }
              ]
            }
          ]
        },
        {
          "name": "Animation Task",
          "passed": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "AccelerateLayer",
                "compareType": ">",
                "value2": 0
              },
              "passed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "AccelerateLayer",
                    "compareType": ">",
                    "value2": 0
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "AccelerateLayer",
                      "value": {
                        "operator": "Variables[0] (AccelerateLayer) || Constants[0] (1) || SUB || RETURN",
                        "displayLines": "(AccelerateLayer - 1)",
                        "constants": [
                          1
                        ],
                        "variables": [
                          "AccelerateLayer"
                        ]
                      }
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "AccelerateLayer",
                    "compareType": "=",
                    "value2": 0
                  },
                  "passed": [
                    {
                      "name": "Shot Fired",
                      "execute": [
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Compare: Variable",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Projectile's Target}}"
                            },
                            "value1": "CurrentHP%",
                            "compareType": ">",
                            "value2": 0
                          },
                          "passed": [
                            {
                              "name": "ATK Scaling DMG",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Projectile's Target}}"
                              },
                              "AttackScaling": {
                                "DamageType": "Imaginary",
                                "Damage": {
                                  "operator": "Variables[0] ({[Skill04[0]]}) || RETURN",
                                  "displayLines": "{[Skill04[0]]}",
                                  "constants": [],
                                  "variables": [
                                    "{[Skill04[0]]}"
                                  ]
                                },
                                "Toughness": null,
                                "Tags": null,
                                "EnergyGainPercent": "100%"
                              }
                            },
                            {
                              "name": "IF",
                              "conditions": {
                                "name": "Has Modifier",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Projectile's Target}}"
                                },
                                "modifier": "<a class=\"gModGreen\" id=\"1997760414\">Standard_Confine</a>[<span class=\"descriptionNumberColor\">Imprisonment</span>]",
                                "casterFilter": {
                                  "name": "Target Name",
                                  "target": "{{Caster}}"
                                }
                              },
                              "failed": [
                                {
                                  "name": "Add Events/Bonuses",
                                  "to": {
                                    "name": "Target Name",
                                    "target": "{{Projectile's Target}}"
                                  },
                                  "modifier": "<a class=\"gModGreen\" id=\"1997760414\">Standard_Confine</a>[<span class=\"descriptionNumberColor\">Imprisonment</span>]",
                                  "duration": 1,
                                  "baseChance": {
                                    "operator": "Variables[0] ({[PassiveSkill01[1]]}) || RETURN",
                                    "displayLines": "{[PassiveSkill01[1]]}",
                                    "constants": [],
                                    "variables": [
                                      "{[PassiveSkill01[1]]}"
                                    ]
                                  },
                                  "immediateEffect": true,
                                  "valuePerStack": {
                                    "MDF_ActionDelayRatio": {
                                      "operator": "Variables[0] ({[PassiveSkill01[2]]}) || RETURN",
                                      "displayLines": "{[PassiveSkill01[2]]}",
                                      "constants": [],
                                      "variables": [
                                        "{[PassiveSkill01[2]]}"
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
                                "value1": "EnergyLayer",
                                "compareType": ">",
                                "value2": 0
                              },
                              "passed": [
                                {
                                  "name": "Define Custom Variable",
                                  "variableName": "EnergyLayer",
                                  "value": {
                                    "operator": "Variables[0] (EnergyLayer) || Constants[0] (1) || SUB || RETURN",
                                    "displayLines": "(EnergyLayer - 1)",
                                    "constants": [
                                      1
                                    ],
                                    "variables": [
                                      "EnergyLayer"
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
                  "failed": [
                    {
                      "name": "Shot Fired",
                      "execute": [
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Compare: Variable",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Projectile's Target}}"
                            },
                            "value1": "CurrentHP%",
                            "compareType": ">",
                            "value2": 0
                          },
                          "passed": [
                            {
                              "name": "ATK Scaling DMG",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Projectile's Target}}"
                              },
                              "AttackScaling": {
                                "DamageType": "Imaginary",
                                "Damage": {
                                  "operator": "Variables[0] ({[Skill04[0]]}) || RETURN",
                                  "displayLines": "{[Skill04[0]]}",
                                  "constants": [],
                                  "variables": [
                                    "{[Skill04[0]]}"
                                  ]
                                },
                                "Toughness": null,
                                "Tags": null,
                                "EnergyGainPercent": "100%"
                              }
                            },
                            {
                              "name": "IF",
                              "conditions": {
                                "name": "Has Modifier",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Projectile's Target}}"
                                },
                                "modifier": "<a class=\"gModGreen\" id=\"1997760414\">Standard_Confine</a>[<span class=\"descriptionNumberColor\">Imprisonment</span>]",
                                "casterFilter": {
                                  "name": "Target Name",
                                  "target": "{{Caster}}"
                                }
                              },
                              "failed": [
                                {
                                  "name": "Add Events/Bonuses",
                                  "to": {
                                    "name": "Target Name",
                                    "target": "{{Projectile's Target}}"
                                  },
                                  "modifier": "<a class=\"gModGreen\" id=\"1997760414\">Standard_Confine</a>[<span class=\"descriptionNumberColor\">Imprisonment</span>]",
                                  "duration": 1,
                                  "baseChance": {
                                    "operator": "Variables[0] ({[PassiveSkill01[1]]}) || RETURN",
                                    "displayLines": "{[PassiveSkill01[1]]}",
                                    "constants": [],
                                    "variables": [
                                      "{[PassiveSkill01[1]]}"
                                    ]
                                  },
                                  "immediateEffect": true,
                                  "valuePerStack": {
                                    "MDF_ActionDelayRatio": {
                                      "operator": "Variables[0] ({[PassiveSkill01[2]]}) || RETURN",
                                      "displayLines": "{[PassiveSkill01[2]]}",
                                      "constants": [],
                                      "variables": [
                                        "{[PassiveSkill01[2]]}"
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
                                "value1": "EnergyLayer",
                                "compareType": ">",
                                "value2": 0
                              },
                              "passed": [
                                {
                                  "name": "Define Custom Variable",
                                  "variableName": "EnergyLayer",
                                  "value": {
                                    "operator": "Variables[0] (EnergyLayer) || Constants[0] (1) || SUB || RETURN",
                                    "displayLines": "(EnergyLayer - 1)",
                                    "constants": [
                                      1
                                    ],
                                    "variables": [
                                      "EnergyLayer"
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
                }
              ]
            }
          ]
        },
        {
          "name": "Animation Task",
          "passed": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "AccelerateLayer",
                "compareType": ">",
                "value2": 0
              },
              "passed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "AccelerateLayer",
                    "compareType": ">",
                    "value2": 0
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "AccelerateLayer",
                      "value": {
                        "operator": "Variables[0] (AccelerateLayer) || Constants[0] (1) || SUB || RETURN",
                        "displayLines": "(AccelerateLayer - 1)",
                        "constants": [
                          1
                        ],
                        "variables": [
                          "AccelerateLayer"
                        ]
                      }
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "AccelerateLayer",
                    "compareType": "=",
                    "value2": 0
                  },
                  "passed": [
                    {
                      "name": "Shot Fired",
                      "execute": [
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Compare: Variable",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Projectile's Target}}"
                            },
                            "value1": "CurrentHP%",
                            "compareType": ">",
                            "value2": 0
                          },
                          "passed": [
                            {
                              "name": "ATK Scaling DMG",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Projectile's Target}}"
                              },
                              "AttackScaling": {
                                "DamageType": "Imaginary",
                                "Damage": {
                                  "operator": "Variables[0] ({[Skill04[0]]}) || RETURN",
                                  "displayLines": "{[Skill04[0]]}",
                                  "constants": [],
                                  "variables": [
                                    "{[Skill04[0]]}"
                                  ]
                                },
                                "Toughness": null,
                                "Tags": null,
                                "EnergyGainPercent": "100%"
                              }
                            },
                            {
                              "name": "IF",
                              "conditions": {
                                "name": "Has Modifier",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Projectile's Target}}"
                                },
                                "modifier": "<a class=\"gModGreen\" id=\"1997760414\">Standard_Confine</a>[<span class=\"descriptionNumberColor\">Imprisonment</span>]",
                                "casterFilter": {
                                  "name": "Target Name",
                                  "target": "{{Caster}}"
                                }
                              },
                              "failed": [
                                {
                                  "name": "Add Events/Bonuses",
                                  "to": {
                                    "name": "Target Name",
                                    "target": "{{Projectile's Target}}"
                                  },
                                  "modifier": "<a class=\"gModGreen\" id=\"1997760414\">Standard_Confine</a>[<span class=\"descriptionNumberColor\">Imprisonment</span>]",
                                  "duration": 1,
                                  "baseChance": {
                                    "operator": "Variables[0] ({[PassiveSkill01[1]]}) || RETURN",
                                    "displayLines": "{[PassiveSkill01[1]]}",
                                    "constants": [],
                                    "variables": [
                                      "{[PassiveSkill01[1]]}"
                                    ]
                                  },
                                  "immediateEffect": true,
                                  "valuePerStack": {
                                    "MDF_ActionDelayRatio": {
                                      "operator": "Variables[0] ({[PassiveSkill01[2]]}) || RETURN",
                                      "displayLines": "{[PassiveSkill01[2]]}",
                                      "constants": [],
                                      "variables": [
                                        "{[PassiveSkill01[2]]}"
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
                                "value1": "EnergyLayer",
                                "compareType": ">",
                                "value2": 0
                              },
                              "passed": [
                                {
                                  "name": "Define Custom Variable",
                                  "variableName": "EnergyLayer",
                                  "value": {
                                    "operator": "Variables[0] (EnergyLayer) || Constants[0] (1) || SUB || RETURN",
                                    "displayLines": "(EnergyLayer - 1)",
                                    "constants": [
                                      1
                                    ],
                                    "variables": [
                                      "EnergyLayer"
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
                  "failed": [
                    {
                      "name": "Shot Fired",
                      "execute": [
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Compare: Variable",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Projectile's Target}}"
                            },
                            "value1": "CurrentHP%",
                            "compareType": ">",
                            "value2": 0
                          },
                          "passed": [
                            {
                              "name": "ATK Scaling DMG",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Projectile's Target}}"
                              },
                              "AttackScaling": {
                                "DamageType": "Imaginary",
                                "Damage": {
                                  "operator": "Variables[0] ({[Skill04[0]]}) || RETURN",
                                  "displayLines": "{[Skill04[0]]}",
                                  "constants": [],
                                  "variables": [
                                    "{[Skill04[0]]}"
                                  ]
                                },
                                "Toughness": null,
                                "Tags": null,
                                "EnergyGainPercent": "100%"
                              }
                            },
                            {
                              "name": "IF",
                              "conditions": {
                                "name": "Has Modifier",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Projectile's Target}}"
                                },
                                "modifier": "<a class=\"gModGreen\" id=\"1997760414\">Standard_Confine</a>[<span class=\"descriptionNumberColor\">Imprisonment</span>]",
                                "casterFilter": {
                                  "name": "Target Name",
                                  "target": "{{Caster}}"
                                }
                              },
                              "failed": [
                                {
                                  "name": "Add Events/Bonuses",
                                  "to": {
                                    "name": "Target Name",
                                    "target": "{{Projectile's Target}}"
                                  },
                                  "modifier": "<a class=\"gModGreen\" id=\"1997760414\">Standard_Confine</a>[<span class=\"descriptionNumberColor\">Imprisonment</span>]",
                                  "duration": 1,
                                  "baseChance": {
                                    "operator": "Variables[0] ({[PassiveSkill01[1]]}) || RETURN",
                                    "displayLines": "{[PassiveSkill01[1]]}",
                                    "constants": [],
                                    "variables": [
                                      "{[PassiveSkill01[1]]}"
                                    ]
                                  },
                                  "immediateEffect": true,
                                  "valuePerStack": {
                                    "MDF_ActionDelayRatio": {
                                      "operator": "Variables[0] ({[PassiveSkill01[2]]}) || RETURN",
                                      "displayLines": "{[PassiveSkill01[2]]}",
                                      "constants": [],
                                      "variables": [
                                        "{[PassiveSkill01[2]]}"
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
                                "value1": "EnergyLayer",
                                "compareType": ">",
                                "value2": 0
                              },
                              "passed": [
                                {
                                  "name": "Define Custom Variable",
                                  "variableName": "EnergyLayer",
                                  "value": {
                                    "operator": "Variables[0] (EnergyLayer) || Constants[0] (1) || SUB || RETURN",
                                    "displayLines": "(EnergyLayer - 1)",
                                    "constants": [
                                      1
                                    ],
                                    "variables": [
                                      "EnergyLayer"
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
                }
              ]
            }
          ]
        },
        {
          "name": "Animation Task",
          "passed": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "AccelerateLayer",
                "compareType": ">",
                "value2": 0
              },
              "passed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "AccelerateLayer",
                    "compareType": ">",
                    "value2": 0
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "AccelerateLayer",
                      "value": {
                        "operator": "Variables[0] (AccelerateLayer) || Constants[0] (1) || SUB || RETURN",
                        "displayLines": "(AccelerateLayer - 1)",
                        "constants": [
                          1
                        ],
                        "variables": [
                          "AccelerateLayer"
                        ]
                      }
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "AccelerateLayer",
                    "compareType": "=",
                    "value2": 0
                  },
                  "passed": [
                    {
                      "name": "Shot Fired",
                      "execute": [
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Compare: Variable",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Projectile's Target}}"
                            },
                            "value1": "CurrentHP%",
                            "compareType": ">",
                            "value2": 0
                          },
                          "passed": [
                            {
                              "name": "ATK Scaling DMG",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Projectile's Target}}"
                              },
                              "AttackScaling": {
                                "DamageType": "Imaginary",
                                "Damage": {
                                  "operator": "Variables[0] ({[Skill04[0]]}) || RETURN",
                                  "displayLines": "{[Skill04[0]]}",
                                  "constants": [],
                                  "variables": [
                                    "{[Skill04[0]]}"
                                  ]
                                },
                                "Toughness": null,
                                "Tags": null,
                                "EnergyGainPercent": "100%"
                              }
                            },
                            {
                              "name": "IF",
                              "conditions": {
                                "name": "Has Modifier",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Projectile's Target}}"
                                },
                                "modifier": "<a class=\"gModGreen\" id=\"1997760414\">Standard_Confine</a>[<span class=\"descriptionNumberColor\">Imprisonment</span>]",
                                "casterFilter": {
                                  "name": "Target Name",
                                  "target": "{{Caster}}"
                                }
                              },
                              "failed": [
                                {
                                  "name": "Add Events/Bonuses",
                                  "to": {
                                    "name": "Target Name",
                                    "target": "{{Projectile's Target}}"
                                  },
                                  "modifier": "<a class=\"gModGreen\" id=\"1997760414\">Standard_Confine</a>[<span class=\"descriptionNumberColor\">Imprisonment</span>]",
                                  "duration": 1,
                                  "baseChance": {
                                    "operator": "Variables[0] ({[PassiveSkill01[1]]}) || RETURN",
                                    "displayLines": "{[PassiveSkill01[1]]}",
                                    "constants": [],
                                    "variables": [
                                      "{[PassiveSkill01[1]]}"
                                    ]
                                  },
                                  "immediateEffect": true,
                                  "valuePerStack": {
                                    "MDF_ActionDelayRatio": {
                                      "operator": "Variables[0] ({[PassiveSkill01[2]]}) || RETURN",
                                      "displayLines": "{[PassiveSkill01[2]]}",
                                      "constants": [],
                                      "variables": [
                                        "{[PassiveSkill01[2]]}"
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
                                "value1": "EnergyLayer",
                                "compareType": ">",
                                "value2": 0
                              },
                              "passed": [
                                {
                                  "name": "Define Custom Variable",
                                  "variableName": "EnergyLayer",
                                  "value": {
                                    "operator": "Variables[0] (EnergyLayer) || Constants[0] (1) || SUB || RETURN",
                                    "displayLines": "(EnergyLayer - 1)",
                                    "constants": [
                                      1
                                    ],
                                    "variables": [
                                      "EnergyLayer"
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
                  "failed": [
                    {
                      "name": "Shot Fired",
                      "execute": [
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Compare: Variable",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Projectile's Target}}"
                            },
                            "value1": "CurrentHP%",
                            "compareType": ">",
                            "value2": 0
                          },
                          "passed": [
                            {
                              "name": "ATK Scaling DMG",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Projectile's Target}}"
                              },
                              "AttackScaling": {
                                "DamageType": "Imaginary",
                                "Damage": {
                                  "operator": "Variables[0] ({[Skill04[0]]}) || RETURN",
                                  "displayLines": "{[Skill04[0]]}",
                                  "constants": [],
                                  "variables": [
                                    "{[Skill04[0]]}"
                                  ]
                                },
                                "Toughness": null,
                                "Tags": null,
                                "EnergyGainPercent": "100%"
                              }
                            },
                            {
                              "name": "IF",
                              "conditions": {
                                "name": "Has Modifier",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Projectile's Target}}"
                                },
                                "modifier": "<a class=\"gModGreen\" id=\"1997760414\">Standard_Confine</a>[<span class=\"descriptionNumberColor\">Imprisonment</span>]",
                                "casterFilter": {
                                  "name": "Target Name",
                                  "target": "{{Caster}}"
                                }
                              },
                              "failed": [
                                {
                                  "name": "Add Events/Bonuses",
                                  "to": {
                                    "name": "Target Name",
                                    "target": "{{Projectile's Target}}"
                                  },
                                  "modifier": "<a class=\"gModGreen\" id=\"1997760414\">Standard_Confine</a>[<span class=\"descriptionNumberColor\">Imprisonment</span>]",
                                  "duration": 1,
                                  "baseChance": {
                                    "operator": "Variables[0] ({[PassiveSkill01[1]]}) || RETURN",
                                    "displayLines": "{[PassiveSkill01[1]]}",
                                    "constants": [],
                                    "variables": [
                                      "{[PassiveSkill01[1]]}"
                                    ]
                                  },
                                  "immediateEffect": true,
                                  "valuePerStack": {
                                    "MDF_ActionDelayRatio": {
                                      "operator": "Variables[0] ({[PassiveSkill01[2]]}) || RETURN",
                                      "displayLines": "{[PassiveSkill01[2]]}",
                                      "constants": [],
                                      "variables": [
                                        "{[PassiveSkill01[2]]}"
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
                                "value1": "EnergyLayer",
                                "compareType": ">",
                                "value2": 0
                              },
                              "passed": [
                                {
                                  "name": "Define Custom Variable",
                                  "variableName": "EnergyLayer",
                                  "value": {
                                    "operator": "Variables[0] (EnergyLayer) || Constants[0] (1) || SUB || RETURN",
                                    "displayLines": "(EnergyLayer - 1)",
                                    "constants": [
                                      1
                                    ],
                                    "variables": [
                                      "EnergyLayer"
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
                }
              ]
            }
          ]
        },
        {
          "name": "Animation Task",
          "passed": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "AccelerateLayer",
                "compareType": ">",
                "value2": 0
              },
              "passed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "AccelerateLayer",
                    "compareType": ">",
                    "value2": 0
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "AccelerateLayer",
                      "value": {
                        "operator": "Variables[0] (AccelerateLayer) || Constants[0] (1) || SUB || RETURN",
                        "displayLines": "(AccelerateLayer - 1)",
                        "constants": [
                          1
                        ],
                        "variables": [
                          "AccelerateLayer"
                        ]
                      }
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "AccelerateLayer",
                    "compareType": "=",
                    "value2": 0
                  },
                  "passed": [
                    {
                      "name": "Shot Fired",
                      "execute": [
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Compare: Variable",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Projectile's Target}}"
                            },
                            "value1": "CurrentHP%",
                            "compareType": ">",
                            "value2": 0
                          },
                          "passed": [
                            {
                              "name": "ATK Scaling DMG",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Projectile's Target}}"
                              },
                              "AttackScaling": {
                                "DamageType": "Imaginary",
                                "Damage": {
                                  "operator": "Variables[0] ({[Skill04[0]]}) || RETURN",
                                  "displayLines": "{[Skill04[0]]}",
                                  "constants": [],
                                  "variables": [
                                    "{[Skill04[0]]}"
                                  ]
                                },
                                "Toughness": null,
                                "Tags": null,
                                "EnergyGainPercent": "100%"
                              }
                            },
                            {
                              "name": "IF",
                              "conditions": {
                                "name": "Has Modifier",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Projectile's Target}}"
                                },
                                "modifier": "<a class=\"gModGreen\" id=\"1997760414\">Standard_Confine</a>[<span class=\"descriptionNumberColor\">Imprisonment</span>]",
                                "casterFilter": {
                                  "name": "Target Name",
                                  "target": "{{Caster}}"
                                }
                              },
                              "failed": [
                                {
                                  "name": "Add Events/Bonuses",
                                  "to": {
                                    "name": "Target Name",
                                    "target": "{{Projectile's Target}}"
                                  },
                                  "modifier": "<a class=\"gModGreen\" id=\"1997760414\">Standard_Confine</a>[<span class=\"descriptionNumberColor\">Imprisonment</span>]",
                                  "duration": 1,
                                  "baseChance": {
                                    "operator": "Variables[0] ({[PassiveSkill01[1]]}) || RETURN",
                                    "displayLines": "{[PassiveSkill01[1]]}",
                                    "constants": [],
                                    "variables": [
                                      "{[PassiveSkill01[1]]}"
                                    ]
                                  },
                                  "immediateEffect": true,
                                  "valuePerStack": {
                                    "MDF_ActionDelayRatio": {
                                      "operator": "Variables[0] ({[PassiveSkill01[2]]}) || RETURN",
                                      "displayLines": "{[PassiveSkill01[2]]}",
                                      "constants": [],
                                      "variables": [
                                        "{[PassiveSkill01[2]]}"
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
                                "value1": "EnergyLayer",
                                "compareType": ">",
                                "value2": 0
                              },
                              "passed": [
                                {
                                  "name": "Define Custom Variable",
                                  "variableName": "EnergyLayer",
                                  "value": {
                                    "operator": "Variables[0] (EnergyLayer) || Constants[0] (1) || SUB || RETURN",
                                    "displayLines": "(EnergyLayer - 1)",
                                    "constants": [
                                      1
                                    ],
                                    "variables": [
                                      "EnergyLayer"
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
                  "failed": [
                    {
                      "name": "Shot Fired",
                      "execute": [
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Compare: Variable",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Projectile's Target}}"
                            },
                            "value1": "CurrentHP%",
                            "compareType": ">",
                            "value2": 0
                          },
                          "passed": [
                            {
                              "name": "ATK Scaling DMG",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Projectile's Target}}"
                              },
                              "AttackScaling": {
                                "DamageType": "Imaginary",
                                "Damage": {
                                  "operator": "Variables[0] ({[Skill04[0]]}) || RETURN",
                                  "displayLines": "{[Skill04[0]]}",
                                  "constants": [],
                                  "variables": [
                                    "{[Skill04[0]]}"
                                  ]
                                },
                                "Toughness": null,
                                "Tags": null,
                                "EnergyGainPercent": "100%"
                              }
                            },
                            {
                              "name": "IF",
                              "conditions": {
                                "name": "Has Modifier",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Projectile's Target}}"
                                },
                                "modifier": "<a class=\"gModGreen\" id=\"1997760414\">Standard_Confine</a>[<span class=\"descriptionNumberColor\">Imprisonment</span>]",
                                "casterFilter": {
                                  "name": "Target Name",
                                  "target": "{{Caster}}"
                                }
                              },
                              "failed": [
                                {
                                  "name": "Add Events/Bonuses",
                                  "to": {
                                    "name": "Target Name",
                                    "target": "{{Projectile's Target}}"
                                  },
                                  "modifier": "<a class=\"gModGreen\" id=\"1997760414\">Standard_Confine</a>[<span class=\"descriptionNumberColor\">Imprisonment</span>]",
                                  "duration": 1,
                                  "baseChance": {
                                    "operator": "Variables[0] ({[PassiveSkill01[1]]}) || RETURN",
                                    "displayLines": "{[PassiveSkill01[1]]}",
                                    "constants": [],
                                    "variables": [
                                      "{[PassiveSkill01[1]]}"
                                    ]
                                  },
                                  "immediateEffect": true,
                                  "valuePerStack": {
                                    "MDF_ActionDelayRatio": {
                                      "operator": "Variables[0] ({[PassiveSkill01[2]]}) || RETURN",
                                      "displayLines": "{[PassiveSkill01[2]]}",
                                      "constants": [],
                                      "variables": [
                                        "{[PassiveSkill01[2]]}"
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
                                "value1": "EnergyLayer",
                                "compareType": ">",
                                "value2": 0
                              },
                              "passed": [
                                {
                                  "name": "Define Custom Variable",
                                  "variableName": "EnergyLayer",
                                  "value": {
                                    "operator": "Variables[0] (EnergyLayer) || Constants[0] (1) || SUB || RETURN",
                                    "displayLines": "(EnergyLayer - 1)",
                                    "constants": [
                                      1
                                    ],
                                    "variables": [
                                      "EnergyLayer"
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
                }
              ]
            }
          ]
        },
        {
          "name": "Animation Task",
          "passed": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "AccelerateLayer",
                "compareType": ">",
                "value2": 0
              },
              "passed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "AccelerateLayer",
                    "compareType": ">",
                    "value2": 0
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "AccelerateLayer",
                      "value": {
                        "operator": "Variables[0] (AccelerateLayer) || Constants[0] (1) || SUB || RETURN",
                        "displayLines": "(AccelerateLayer - 1)",
                        "constants": [
                          1
                        ],
                        "variables": [
                          "AccelerateLayer"
                        ]
                      }
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "AccelerateLayer",
                    "compareType": "=",
                    "value2": 0
                  },
                  "passed": [
                    {
                      "name": "Shot Fired",
                      "execute": [
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Compare: Variable",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Projectile's Target}}"
                            },
                            "value1": "CurrentHP%",
                            "compareType": ">",
                            "value2": 0
                          },
                          "passed": [
                            {
                              "name": "ATK Scaling DMG",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Projectile's Target}}"
                              },
                              "AttackScaling": {
                                "DamageType": "Imaginary",
                                "Damage": {
                                  "operator": "Variables[0] ({[Skill04[0]]}) || RETURN",
                                  "displayLines": "{[Skill04[0]]}",
                                  "constants": [],
                                  "variables": [
                                    "{[Skill04[0]]}"
                                  ]
                                },
                                "Toughness": null,
                                "Tags": null,
                                "EnergyGainPercent": "100%"
                              }
                            },
                            {
                              "name": "IF",
                              "conditions": {
                                "name": "Has Modifier",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Projectile's Target}}"
                                },
                                "modifier": "<a class=\"gModGreen\" id=\"1997760414\">Standard_Confine</a>[<span class=\"descriptionNumberColor\">Imprisonment</span>]",
                                "casterFilter": {
                                  "name": "Target Name",
                                  "target": "{{Caster}}"
                                }
                              },
                              "failed": [
                                {
                                  "name": "Add Events/Bonuses",
                                  "to": {
                                    "name": "Target Name",
                                    "target": "{{Projectile's Target}}"
                                  },
                                  "modifier": "<a class=\"gModGreen\" id=\"1997760414\">Standard_Confine</a>[<span class=\"descriptionNumberColor\">Imprisonment</span>]",
                                  "duration": 1,
                                  "baseChance": {
                                    "operator": "Variables[0] ({[PassiveSkill01[1]]}) || RETURN",
                                    "displayLines": "{[PassiveSkill01[1]]}",
                                    "constants": [],
                                    "variables": [
                                      "{[PassiveSkill01[1]]}"
                                    ]
                                  },
                                  "immediateEffect": true,
                                  "valuePerStack": {
                                    "MDF_ActionDelayRatio": {
                                      "operator": "Variables[0] ({[PassiveSkill01[2]]}) || RETURN",
                                      "displayLines": "{[PassiveSkill01[2]]}",
                                      "constants": [],
                                      "variables": [
                                        "{[PassiveSkill01[2]]}"
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
                                "value1": "EnergyLayer",
                                "compareType": ">",
                                "value2": 0
                              },
                              "passed": [
                                {
                                  "name": "Define Custom Variable",
                                  "variableName": "EnergyLayer",
                                  "value": {
                                    "operator": "Variables[0] (EnergyLayer) || Constants[0] (1) || SUB || RETURN",
                                    "displayLines": "(EnergyLayer - 1)",
                                    "constants": [
                                      1
                                    ],
                                    "variables": [
                                      "EnergyLayer"
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
                  "failed": [
                    {
                      "name": "Shot Fired",
                      "execute": [
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Compare: Variable",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Projectile's Target}}"
                            },
                            "value1": "CurrentHP%",
                            "compareType": ">",
                            "value2": 0
                          },
                          "passed": [
                            {
                              "name": "ATK Scaling DMG",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Projectile's Target}}"
                              },
                              "AttackScaling": {
                                "DamageType": "Imaginary",
                                "Damage": {
                                  "operator": "Variables[0] ({[Skill04[0]]}) || RETURN",
                                  "displayLines": "{[Skill04[0]]}",
                                  "constants": [],
                                  "variables": [
                                    "{[Skill04[0]]}"
                                  ]
                                },
                                "Toughness": null,
                                "Tags": null,
                                "EnergyGainPercent": "100%"
                              }
                            },
                            {
                              "name": "IF",
                              "conditions": {
                                "name": "Has Modifier",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Projectile's Target}}"
                                },
                                "modifier": "<a class=\"gModGreen\" id=\"1997760414\">Standard_Confine</a>[<span class=\"descriptionNumberColor\">Imprisonment</span>]",
                                "casterFilter": {
                                  "name": "Target Name",
                                  "target": "{{Caster}}"
                                }
                              },
                              "failed": [
                                {
                                  "name": "Add Events/Bonuses",
                                  "to": {
                                    "name": "Target Name",
                                    "target": "{{Projectile's Target}}"
                                  },
                                  "modifier": "<a class=\"gModGreen\" id=\"1997760414\">Standard_Confine</a>[<span class=\"descriptionNumberColor\">Imprisonment</span>]",
                                  "duration": 1,
                                  "baseChance": {
                                    "operator": "Variables[0] ({[PassiveSkill01[1]]}) || RETURN",
                                    "displayLines": "{[PassiveSkill01[1]]}",
                                    "constants": [],
                                    "variables": [
                                      "{[PassiveSkill01[1]]}"
                                    ]
                                  },
                                  "immediateEffect": true,
                                  "valuePerStack": {
                                    "MDF_ActionDelayRatio": {
                                      "operator": "Variables[0] ({[PassiveSkill01[2]]}) || RETURN",
                                      "displayLines": "{[PassiveSkill01[2]]}",
                                      "constants": [],
                                      "variables": [
                                        "{[PassiveSkill01[2]]}"
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
                                "value1": "EnergyLayer",
                                "compareType": ">",
                                "value2": 0
                              },
                              "passed": [
                                {
                                  "name": "Define Custom Variable",
                                  "variableName": "EnergyLayer",
                                  "value": {
                                    "operator": "Variables[0] (EnergyLayer) || Constants[0] (1) || SUB || RETURN",
                                    "displayLines": "(EnergyLayer - 1)",
                                    "constants": [
                                      1
                                    ],
                                    "variables": [
                                      "EnergyLayer"
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
                }
              ]
            }
          ]
        },
        {
          "name": "Animation Task",
          "passed": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "AccelerateLayer",
                "compareType": ">",
                "value2": 0
              },
              "passed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "AccelerateLayer",
                    "compareType": ">",
                    "value2": 0
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "AccelerateLayer",
                      "value": {
                        "operator": "Variables[0] (AccelerateLayer) || Constants[0] (1) || SUB || RETURN",
                        "displayLines": "(AccelerateLayer - 1)",
                        "constants": [
                          1
                        ],
                        "variables": [
                          "AccelerateLayer"
                        ]
                      }
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "AccelerateLayer",
                    "compareType": "=",
                    "value2": 0
                  },
                  "passed": [
                    {
                      "name": "Shot Fired",
                      "execute": [
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Compare: Variable",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Projectile's Target}}"
                            },
                            "value1": "CurrentHP%",
                            "compareType": ">",
                            "value2": 0
                          },
                          "passed": [
                            {
                              "name": "ATK Scaling DMG",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Projectile's Target}}"
                              },
                              "AttackScaling": {
                                "DamageType": "Imaginary",
                                "Damage": {
                                  "operator": "Variables[0] ({[Skill04[0]]}) || RETURN",
                                  "displayLines": "{[Skill04[0]]}",
                                  "constants": [],
                                  "variables": [
                                    "{[Skill04[0]]}"
                                  ]
                                },
                                "Toughness": null,
                                "Tags": null,
                                "EnergyGainPercent": "100%"
                              }
                            },
                            {
                              "name": "IF",
                              "conditions": {
                                "name": "Has Modifier",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Projectile's Target}}"
                                },
                                "modifier": "<a class=\"gModGreen\" id=\"1997760414\">Standard_Confine</a>[<span class=\"descriptionNumberColor\">Imprisonment</span>]",
                                "casterFilter": {
                                  "name": "Target Name",
                                  "target": "{{Caster}}"
                                }
                              },
                              "failed": [
                                {
                                  "name": "Add Events/Bonuses",
                                  "to": {
                                    "name": "Target Name",
                                    "target": "{{Projectile's Target}}"
                                  },
                                  "modifier": "<a class=\"gModGreen\" id=\"1997760414\">Standard_Confine</a>[<span class=\"descriptionNumberColor\">Imprisonment</span>]",
                                  "duration": 1,
                                  "baseChance": {
                                    "operator": "Variables[0] ({[PassiveSkill01[1]]}) || RETURN",
                                    "displayLines": "{[PassiveSkill01[1]]}",
                                    "constants": [],
                                    "variables": [
                                      "{[PassiveSkill01[1]]}"
                                    ]
                                  },
                                  "immediateEffect": true,
                                  "valuePerStack": {
                                    "MDF_ActionDelayRatio": {
                                      "operator": "Variables[0] ({[PassiveSkill01[2]]}) || RETURN",
                                      "displayLines": "{[PassiveSkill01[2]]}",
                                      "constants": [],
                                      "variables": [
                                        "{[PassiveSkill01[2]]}"
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
                                "value1": "EnergyLayer",
                                "compareType": ">",
                                "value2": 0
                              },
                              "passed": [
                                {
                                  "name": "Define Custom Variable",
                                  "variableName": "EnergyLayer",
                                  "value": {
                                    "operator": "Variables[0] (EnergyLayer) || Constants[0] (1) || SUB || RETURN",
                                    "displayLines": "(EnergyLayer - 1)",
                                    "constants": [
                                      1
                                    ],
                                    "variables": [
                                      "EnergyLayer"
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
                  "failed": [
                    {
                      "name": "Shot Fired",
                      "execute": [
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Compare: Variable",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Projectile's Target}}"
                            },
                            "value1": "CurrentHP%",
                            "compareType": ">",
                            "value2": 0
                          },
                          "passed": [
                            {
                              "name": "ATK Scaling DMG",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Projectile's Target}}"
                              },
                              "AttackScaling": {
                                "DamageType": "Imaginary",
                                "Damage": {
                                  "operator": "Variables[0] ({[Skill04[0]]}) || RETURN",
                                  "displayLines": "{[Skill04[0]]}",
                                  "constants": [],
                                  "variables": [
                                    "{[Skill04[0]]}"
                                  ]
                                },
                                "Toughness": null,
                                "Tags": null,
                                "EnergyGainPercent": "100%"
                              }
                            },
                            {
                              "name": "IF",
                              "conditions": {
                                "name": "Has Modifier",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Projectile's Target}}"
                                },
                                "modifier": "<a class=\"gModGreen\" id=\"1997760414\">Standard_Confine</a>[<span class=\"descriptionNumberColor\">Imprisonment</span>]",
                                "casterFilter": {
                                  "name": "Target Name",
                                  "target": "{{Caster}}"
                                }
                              },
                              "failed": [
                                {
                                  "name": "Add Events/Bonuses",
                                  "to": {
                                    "name": "Target Name",
                                    "target": "{{Projectile's Target}}"
                                  },
                                  "modifier": "<a class=\"gModGreen\" id=\"1997760414\">Standard_Confine</a>[<span class=\"descriptionNumberColor\">Imprisonment</span>]",
                                  "duration": 1,
                                  "baseChance": {
                                    "operator": "Variables[0] ({[PassiveSkill01[1]]}) || RETURN",
                                    "displayLines": "{[PassiveSkill01[1]]}",
                                    "constants": [],
                                    "variables": [
                                      "{[PassiveSkill01[1]]}"
                                    ]
                                  },
                                  "immediateEffect": true,
                                  "valuePerStack": {
                                    "MDF_ActionDelayRatio": {
                                      "operator": "Variables[0] ({[PassiveSkill01[2]]}) || RETURN",
                                      "displayLines": "{[PassiveSkill01[2]]}",
                                      "constants": [],
                                      "variables": [
                                        "{[PassiveSkill01[2]]}"
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
                                "value1": "EnergyLayer",
                                "compareType": ">",
                                "value2": 0
                              },
                              "passed": [
                                {
                                  "name": "Define Custom Variable",
                                  "variableName": "EnergyLayer",
                                  "value": {
                                    "operator": "Variables[0] (EnergyLayer) || Constants[0] (1) || SUB || RETURN",
                                    "displayLines": "(EnergyLayer - 1)",
                                    "constants": [
                                      1
                                    ],
                                    "variables": [
                                      "EnergyLayer"
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
                }
              ]
            }
          ]
        },
        {
          "name": "Animation Task",
          "passed": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "AccelerateLayer",
                "compareType": ">",
                "value2": 0
              },
              "passed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "AccelerateLayer",
                    "compareType": ">",
                    "value2": 0
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "AccelerateLayer",
                      "value": {
                        "operator": "Variables[0] (AccelerateLayer) || Constants[0] (1) || SUB || RETURN",
                        "displayLines": "(AccelerateLayer - 1)",
                        "constants": [
                          1
                        ],
                        "variables": [
                          "AccelerateLayer"
                        ]
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
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Projectile's Target}}"
                        },
                        "value1": "CurrentHP%",
                        "compareType": ">",
                        "value2": 0
                      },
                      "passed": [
                        {
                          "name": "ATK Scaling DMG",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Projectile's Target}}"
                          },
                          "AttackScaling": {
                            "DamageType": "Imaginary",
                            "Damage": {
                              "operator": "Variables[0] ({[Skill04[0]]}) || RETURN",
                              "displayLines": "{[Skill04[0]]}",
                              "constants": [],
                              "variables": [
                                "{[Skill04[0]]}"
                              ]
                            },
                            "Toughness": null,
                            "Tags": null,
                            "EnergyGainPercent": "100%"
                          }
                        },
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Has Modifier",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Projectile's Target}}"
                            },
                            "modifier": "<a class=\"gModGreen\" id=\"1997760414\">Standard_Confine</a>[<span class=\"descriptionNumberColor\">Imprisonment</span>]",
                            "casterFilter": {
                              "name": "Target Name",
                              "target": "{{Caster}}"
                            }
                          },
                          "failed": [
                            {
                              "name": "Add Events/Bonuses",
                              "to": {
                                "name": "Target Name",
                                "target": "{{Projectile's Target}}"
                              },
                              "modifier": "<a class=\"gModGreen\" id=\"1997760414\">Standard_Confine</a>[<span class=\"descriptionNumberColor\">Imprisonment</span>]",
                              "duration": 1,
                              "baseChance": {
                                "operator": "Variables[0] ({[PassiveSkill01[1]]}) || RETURN",
                                "displayLines": "{[PassiveSkill01[1]]}",
                                "constants": [],
                                "variables": [
                                  "{[PassiveSkill01[1]]}"
                                ]
                              },
                              "immediateEffect": true,
                              "valuePerStack": {
                                "MDF_ActionDelayRatio": {
                                  "operator": "Variables[0] ({[PassiveSkill01[2]]}) || RETURN",
                                  "displayLines": "{[PassiveSkill01[2]]}",
                                  "constants": [],
                                  "variables": [
                                    "{[PassiveSkill01[2]]}"
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
                            "value1": "EnergyLayer",
                            "compareType": ">",
                            "value2": 0
                          },
                          "passed": [
                            {
                              "name": "Define Custom Variable",
                              "variableName": "EnergyLayer",
                              "value": {
                                "operator": "Variables[0] (EnergyLayer) || Constants[0] (1) || SUB || RETURN",
                                "displayLines": "(EnergyLayer - 1)",
                                "constants": [
                                  1
                                ],
                                "variables": [
                                  "EnergyLayer"
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
            }
          ]
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
      "modifier": "<a class=\"gModGreen\" id=\"1400625126\">Monster_XP_Elite02_01_Effect</a>"
    },
    {
      "name": "Define Custom Variable",
      "variableName": "EnergyLayer",
      "value": -1
    },
    "Trigger: Ability End"
  ],
  "references": []
}