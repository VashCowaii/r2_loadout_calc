const compositeAbilityObject = {
  "fullCharacterName": 8003042,
  "trimCharacterName": 8003042,
  "abilityList": [
    "8003042_Monster_XP_Elite02_01_Ability06_Part02",
    "8003042_Monster_XP_Elite02_01_Ability06_Part01",
    "8003042_Monster_XP_Elite02_01_Ability05_Part02",
    "8003042_Monster_XP_Elite02_01_Ability05_Part01",
    "8003042_Monster_XP_Elite02_01_Ability04_Part02",
    "8003042_Monster_XP_Elite02_01_Ability04_Part01",
    "8003042_Monster_XP_Elite02_01_Ability03_Part02",
    "8003042_Monster_XP_Elite02_01_Ability03_Part01",
    "8003042_Monster_XP_Elite02_01_Ability02_Part02",
    "8003042_Monster_XP_Elite02_01_Ability02_Part01",
    "8003042_Monster_XP_Elite02_01_AbilityP02_Part01",
    "8003042_Monster_XP_Elite02_01_AbilityP01_Part02",
    "8003042_Monster_XP_Elite02_01_AbilityP01_Part01",
    "8003042_Monster_XP_Elite02_01_Ability01_Part02",
    "8003042_Monster_XP_Elite02_01_Ability01_Part01",
    "8003042_Monster_XP_Elite02_01_Passive01",
    "8003042_Modifiers"
  ],
  "abilityObject": {
    "8003042_Monster_XP_Elite02_01_Ability06_Part02": {
      "fileName": "8003042_Monster_XP_Elite02_01_Ability06_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "scope": "TargetEntity",
          "variableName": "XP_Elite02_01_BattleScore1_Flag",
          "value": 1
        },
        {
          "name": "Looped Event",
          "maxLoops": {
            "operator": "Variables[0] (EnergyLayer) || Constants[0] (1) || ADD || RETURN",
            "displayLines": "(EnergyLayer + 1)",
            "constants": [
              1
            ],
            "variables": [
              "EnergyLayer"
            ]
          },
          "Event": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "EnergyLayer",
                "compareType": "<",
                "value2": 0
              },
              "failed": [
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
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1400625126\">Monster_XP_Elite02_01_Effect</a>"
        },
        "Trigger: Ability End"
      ],
      "references": []
    },
    "8003042_Monster_XP_Elite02_01_Ability06_Part01": {
      "fileName": "8003042_Monster_XP_Elite02_01_Ability06_Part01",
      "childAbilityList": [
        "8003042_Monster_XP_Elite02_01_Ability06_Camera",
        "8003042_Monster_XP_Elite02_01_Ability06_Part01",
        "8003042_Monster_XP_Elite02_01_Ability06_Part02"
      ],
      "skillTrigger": "Skill06",
      "abilityType": "Basic ATK",
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "ability": "Monster_XP_Elite02_01_Ability06_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "references": []
    },
    "8003042_Monster_XP_Elite02_01_Ability05_Part02": {
      "fileName": "8003042_Monster_XP_Elite02_01_Ability05_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        "Ability Start",
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1400625126\">Monster_XP_Elite02_01_Effect</a>"
        },
        {
          "name": "Define Custom Variable",
          "variableName": "EnergyLayer",
          "value": 9
        },
        "Trigger: Ability End"
      ],
      "references": []
    },
    "8003042_Monster_XP_Elite02_01_Ability05_Part01": {
      "fileName": "8003042_Monster_XP_Elite02_01_Ability05_Part01",
      "childAbilityList": [
        "8003042_Monster_XP_Elite02_01_Ability05_Camera",
        "8003042_Monster_XP_Elite02_01_Ability05_Part01",
        "8003042_Monster_XP_Elite02_01_Ability05_Part02"
      ],
      "skillTrigger": "Skill05",
      "abilityType": "Basic ATK",
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "ability": "Monster_XP_Elite02_01_Ability05_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "references": []
    },
    "8003042_Monster_XP_Elite02_01_Ability04_Part02": {
      "fileName": "8003042_Monster_XP_Elite02_01_Ability04_Part02",
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
    },
    "8003042_Monster_XP_Elite02_01_Ability04_Part01": {
      "fileName": "8003042_Monster_XP_Elite02_01_Ability04_Part01",
      "childAbilityList": [
        "8003042_Monster_XP_Elite02_01_Ability04_Camera",
        "8003042_Monster_XP_Elite02_01_Ability04_Part01",
        "8003042_Monster_XP_Elite02_01_Ability04_Part02"
      ],
      "skillTrigger": "Skill04",
      "abilityType": "Skill",
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "ability": "Monster_XP_Elite02_01_Ability04_Part02",
          "isTrigger": true
        },
        "Deleted bullshit",
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "EnergyLayer",
            "compareType": ">",
            "value2": 4
          },
          "failed": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "EnergyLayer",
                "compareType": "<",
                "value2": 3
              }
            }
          ]
        }
      ],
      "references": []
    },
    "8003042_Monster_XP_Elite02_01_Ability03_Part02": {
      "fileName": "8003042_Monster_XP_Elite02_01_Ability03_Part02",
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
            "DamageType": "Imaginary",
            "Damage": {
              "operator": "Variables[0] ({[Skill03[0]]}) || Constants[0] (0.5) || MUL || RETURN",
              "displayLines": "({[Skill03[0]]} * 0.5)",
              "constants": [
                0.5
              ],
              "variables": [
                "{[Skill03[0]]}"
              ]
            },
            "Toughness": null,
            "Tags": null,
            "EnergyGainPercent": "50%"
          }
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Ability Target(ST)}}"
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
                "target": "{{Ability Target(ST)}}"
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
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "AttackScaling": {
            "DamageType": "Imaginary",
            "Damage": {
              "operator": "Variables[0] ({[Skill03[0]]}) || Constants[0] (0.5) || MUL || RETURN",
              "displayLines": "({[Skill03[0]]} * 0.5)",
              "constants": [
                0.5
              ],
              "variables": [
                "{[Skill03[0]]}"
              ]
            },
            "Toughness": null,
            "Tags": null,
            "EnergyGainPercent": "50%"
          }
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Ability Target(ST)}}"
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
                "target": "{{Ability Target(ST)}}"
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
        "Trigger: Attack End",
        "Trigger: Ability End"
      ],
      "references": []
    },
    "8003042_Monster_XP_Elite02_01_Ability03_Part01": {
      "fileName": "8003042_Monster_XP_Elite02_01_Ability03_Part01",
      "childAbilityList": [
        "8003042_Monster_XP_Elite02_01_Ability03_Camera",
        "8003042_Monster_XP_Elite02_01_Ability03_Part01",
        "8003042_Monster_XP_Elite02_01_Ability03_Part02"
      ],
      "skillTrigger": "Skill03",
      "abilityType": "Basic ATK",
      "energy": null,
      "toughnessList": null,
      "parse": [
        "Deleted bullshit",
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "ability": "Monster_XP_Elite02_01_Ability03_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "references": []
    },
    "8003042_Monster_XP_Elite02_01_Ability02_Part02": {
      "fileName": "8003042_Monster_XP_Elite02_01_Ability02_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        "Ability Start",
        {
          "name": "ATK Scaling DMG",
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "AttackScaling": {
            "DamageType": "Imaginary",
            "Damage": {
              "operator": "Variables[0] ({[Skill02[0]]}) || RETURN",
              "displayLines": "{[Skill02[0]]}",
              "constants": [],
              "variables": [
                "{[Skill02[0]]}"
              ]
            },
            "Toughness": null,
            "Tags": null,
            "attackType": "Basic ATK",
            "EnergyGainPercent": "100%"
          }
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Ability Target(ST)}}"
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
                "target": "{{Ability Target(ST)}}"
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
        "Trigger: Attack End",
        "Trigger: Ability End"
      ],
      "references": []
    },
    "8003042_Monster_XP_Elite02_01_Ability02_Part01": {
      "fileName": "8003042_Monster_XP_Elite02_01_Ability02_Part01",
      "childAbilityList": [
        "8003042_Monster_XP_Elite02_01_Ability02_Camera",
        "8003042_Monster_XP_Elite02_01_Ability02_Part01",
        "8003042_Monster_XP_Elite02_01_Ability02_Part02"
      ],
      "skillTrigger": "Skill02",
      "abilityType": "Basic ATK",
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "ability": "Monster_XP_Elite02_01_Ability02_Part02",
          "isTrigger": true
        },
        "Deleted bullshit",
        "Deleted bullshit"
      ],
      "references": []
    },
    "8003042_Monster_XP_Elite02_01_AbilityP02_Part01": {
      "fileName": "8003042_Monster_XP_Elite02_01_AbilityP02_Part01",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        "Deleted bullshit",
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Modifier Holder}}"
          },
          "scope": "TargetEntity",
          "variableName": "Monster_XP_Elite02_01_ShieldEffect"
        },
        {
          "name": "UI Display Event (On Entity)",
          "target": {
            "name": "Target Name",
            "target": "{{Modifier Holder}}"
          }
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Modifier Holder}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"553137450\">Monster_XP_Elite02_01_Shield</a>"
          },
          "passed": [
            {
              "name": "Declare Custom Variable",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "scope": "TargetEntity",
              "variableName": "Monster_XP_Elite02_01_ShieldEffect",
              "value": 1
            }
          ]
        },
        {
          "name": "Declare Custom Variable",
          "target": {
            "name": "Target Name",
            "target": "{{Modifier Holder}}"
          },
          "scope": "TargetEntity",
          "variableName": "Monster_XP_Elite02_01_InsertFlag"
        }
      ],
      "references": []
    },
    "8003042_Monster_XP_Elite02_01_AbilityP01_Part02": {
      "fileName": "8003042_Monster_XP_Elite02_01_AbilityP01_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Define Custom Variable",
          "variableName": "EnergyLayer",
          "value": 7
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-412122860\">Monster_XP_Elite02_01_Battle_02</a>"
        }
      ],
      "references": []
    },
    "8003042_Monster_XP_Elite02_01_AbilityP01_Part01": {
      "fileName": "8003042_Monster_XP_Elite02_01_AbilityP01_Part01",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "inherentTarget": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "ability": "Monster_XP_Elite02_01_AbilityP01_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "references": []
    },
    "8003042_Monster_XP_Elite02_01_Ability01_Part02": {
      "fileName": "8003042_Monster_XP_Elite02_01_Ability01_Part02",
      "abilityType": null,
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "Monster_XP_Elite02_01_AIFlag",
            "compareType": "=",
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
              "modifier": "<a class=\"gModGreen\" id=\"763823194\">OneMore</a>"
            }
          ]
        },
        "Ability Start",
        {
          "name": "Define Custom Variable",
          "variableName": "EnergyLayer",
          "value": 7
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-412122860\">Monster_XP_Elite02_01_Battle_02</a>"
        },
        "Trigger: Ability End"
      ],
      "references": []
    },
    "8003042_Monster_XP_Elite02_01_Ability01_Part01": {
      "fileName": "8003042_Monster_XP_Elite02_01_Ability01_Part01",
      "childAbilityList": [
        "8003042_Monster_XP_Elite02_01_Ability01_Camera",
        "8003042_Monster_XP_Elite02_01_Ability01_Part01",
        "8003042_Monster_XP_Elite02_01_Ability01_Part02",
        "8003042_Monster_XP_Elite02_01_AbilityP01_Camera",
        "8003042_Monster_XP_Elite02_01_AbilityP01_Part01",
        "8003042_Monster_XP_Elite02_01_AbilityP01_Part02",
        "8003042_Monster_XP_Elite02_01_AbilityP02_Camera",
        "8003042_Monster_XP_Elite02_01_AbilityP02_Part01"
      ],
      "skillTrigger": "Skill01",
      "abilityType": "Basic ATK",
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Trigger Ability",
          "from": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "ability": "Monster_XP_Elite02_01_Ability01_Part02",
          "isTrigger": true
        },
        "Deleted bullshit"
      ],
      "references": []
    },
    "8003042_Monster_XP_Elite02_01_Passive01": {
      "fileName": "8003042_Monster_XP_Elite02_01_Passive01",
      "childAbilityList": [
        "8003042_Monster_XP_Elite02_01_Passive01"
      ],
      "skillTrigger": "PassiveSkill01",
      "abilityType": "Talent",
      "energy": null,
      "toughnessList": null,
      "parse": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"697975031\">XP_Elite02_01_BattleScore1</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"386859221\">Monster_XP_Elite02_01_AIChange</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1542768305\">Monster_XP_Elite02_01_Energy</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1764090904\">Monster_XP_Elite02_01_DamageReduce</a>",
          "valuePerStack": {
            "MDF_DamageReduceRatio": {
              "operator": "Variables[0] ({[PassiveSkill01[0]]}) || RETURN",
              "displayLines": "{[PassiveSkill01[0]]}",
              "constants": [],
              "variables": [
                "{[PassiveSkill01[0]]}"
              ]
            },
            "MDF_ConfineChance": {
              "operator": "Variables[0] ({[PassiveSkill01[1]]}) || RETURN",
              "displayLines": "{[PassiveSkill01[1]]}",
              "constants": [],
              "variables": [
                "{[PassiveSkill01[1]]}"
              ]
            }
          }
        }
      ],
      "whenAdded": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-279040373\">Monster_XP_Elite02_01_EffectControl</a>"
        }
      ],
      "references": [
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__386859221\">Monster_XP_Elite02_01_AIChange</a>",
          "execute": [
            {
              "eventTrigger": "Being Weakness Broken: End [Owner]",
              "execute": [
                {
                  "name": "Action Advance/Delay",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "advanceType": "Delay",
                  "multiAdd": 0.25
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1400625126\">Monster_XP_Elite02_01_Effect</a>"
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "Monster_XP_Elite02_01_AIFlag",
                    "compareType": "=",
                    "value2": 5,
                    "contextScope": "TargetEntity"
                  },
                  "passed": [
                    {
                      "name": "Declare Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "scope": "TargetEntity",
                      "variableName": "ChargeFlag",
                      "value": 1
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "Monster_XP_Elite02_01_AIFlag",
                    "compareType": "<=",
                    "value2": 5,
                    "contextScope": "TargetEntity"
                  },
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value1": "Monster_XP_Elite02_01_AIFlag",
                        "compareType": "<=",
                        "value2": 1,
                        "contextScope": "TargetEntity"
                      },
                      "passed": [
                        {
                          "name": "Declare Custom Variable",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "scope": "TargetEntity",
                          "variableName": "Monster_XP_Elite02_01_AIFlag",
                          "value": 1
                        }
                      ],
                      "failed": [
                        {
                          "name": "Declare Custom Variable",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Modifier Holder}}"
                          },
                          "scope": "TargetEntity",
                          "variableName": "Monster_XP_Elite02_01_AIFlag",
                          "value": 4
                        }
                      ]
                    }
                  ],
                  "failed": [
                    {
                      "name": "Declare Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "scope": "TargetEntity",
                      "variableName": "Monster_XP_Elite02_01_AIFlag",
                      "value": 1
                    }
                  ]
                },
                {
                  "name": "Declare Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "scope": "TargetEntity",
                  "variableName": "Monster_XP_Elite02_01_AIFlag_02"
                },
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-412122860\">Monster_XP_Elite02_01_Battle_02</a>"
                },
                {
                  "name": "Looped Event",
                  "maxLoops": {
                    "operator": "Variables[0] (EnergyLayer) || Constants[0] (1) || ADD || RETURN",
                    "displayLines": "(EnergyLayer + 1)",
                    "constants": [
                      1
                    ],
                    "variables": [
                      "EnergyLayer"
                    ]
                  },
                  "Event": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "EnergyLayer",
                        "compareType": "<",
                        "value2": 0
                      },
                      "failed": [
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
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "ChargeFlag",
                    "compareType": "=",
                    "value2": 1,
                    "contextScope": "TargetEntity"
                  },
                  "passed": [
                    {
                      "name": "Declare Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "scope": "TargetEntity",
                      "variableName": "ChargeFlag"
                    }
                  ]
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"615554356\">Monster_XP_Elite02_01_RemoveEnergyLayer</a>"
                }
              ]
            },
            {
              "eventTrigger": "End Broken State [Owner]"
            }
          ],
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1403193826\">EnterBattleRage</a>",
          "execute": [
            {
              "eventTrigger": "Enter Battle",
              "execute": [
                {
                  "name": "Inject Ability Use",
                  "abilityName": "Monster_XP_Elite02_01_AbilityP01_Part01",
                  "abilitySource": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "abilityTarget": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "priorityTag": "MonsterBattleCry",
                  "canHitNonTargets": true,
                  "abortFlags": [
                    "DisableAction",
                    "STAT_CTRL"
                  ],
                  "allowAbilityTriggers": false
                }
              ],
              "priorityLevel": -55
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1068246674\">HideMonsterHUD</a>",
          "execute": [
            {
              "eventTrigger": "Turn [Pre-action Phase]"
            },
            {
              "eventTrigger": "Action Choice Window [Owner]"
            }
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-279040373\">Monster_XP_Elite02_01_EffectControl</a>",
          "execute": [
            {
              "eventTrigger": "When Put in Deathstate Limbo",
              "execute": [
                {
                  "name": "Define Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "variableName": "EnergyLayerLast",
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
                  "name": "Define Custom Variable",
                  "variableName": "EnergyLayer",
                  "value": -2
                }
              ]
            },
            {
              "eventTrigger": "When Stacking/Receiving Modifier"
            }
          ],
          "stackData": [],
          "latentQueue": []
        }
      ]
    },
    "8003042_Modifiers": {
      "fileName": "8003042_Modifiers",
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
          "for": "<a class=\"gModGreen\" id=\"mod__697975031\">XP_Elite02_01_BattleScore1</a>",
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier",
              "execute": [
                {
                  "name": "Declare Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "scope": "TargetEntity",
                  "variableName": "XP_Elite02_01_BattleScore1_Flag"
                }
              ]
            },
            {
              "eventTrigger": "Ability Use [Owner]: End",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "XP_Elite02_01_BattleScore1_Flag",
                    "compareType": "=",
                    "value2": 1,
                    "contextScope": "TargetEntity"
                  },
                  "passed": [
                    {
                      "name": "Achievement",
                      "matchTags": true,
                      "relatedAchievements": [
                        {
                          "title": "Accidental Amnesia",
                          "desc": "Clear Decaying Shadow's Gauge Recollection and cause its ability, Liberation of the Golden Age, to fail",
                          "rarity": "Mid"
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
          "for": "<a class=\"gModGreen\" id=\"mod__758016972\">Monster_XP_Elite02_01_Ability04_Mark</a>",
          "duration": 1
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1764090904\">Monster_XP_Elite02_01_DamageReduce</a>",
          "execute": [
            {
              "eventTrigger": "Take Damage Start [Owner]: Any",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Attack Type",
                    "attackTypes": [
                      "Skill",
                      "Follow-up",
                      "Technique",
                      "Basic ATK",
                      "Additional DMG",
                      "Ultimate"
                    ],
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    }
                  },
                  "passed": [
                    {
                      "name": "Adjust Target Stats",
                      "modifiedValuesArray": [
                        {
                          "on": "Defender",
                          "statName": "&nbsp;<span class=\"descriptionNumberColor\">DamageReduction</span>&nbsp;",
                          "value": "MDF_DamageReduceRatio"
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ],
          "stackData": [
            "MDF_DamageReduceRatio",
            "MDF_ConfineChance"
          ],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__1400625126\">Monster_XP_Elite02_01_Effect</a>",
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier"
            },
            {
              "eventTrigger": "When Modifier Destroyed/Removed"
            }
          ],
          "stackData": [],
          "latentQueue": []
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__553137450\">Monster_XP_Elite02_01_Shield</a>",
          "stackType": "Replace",
          "stackLimit": 5,
          "addStacksPerTrigger": {
            "operator": "Variables[0] (ModifierStackLayer) || RETURN",
            "displayLines": "ModifierStackLayer",
            "constants": [],
            "variables": [
              "ModifierStackLayer"
            ]
          }
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-440963203\">Monster_XP_Elite02_01_Fragile</a>[<span class=\"descriptionNumberColor\">undefined</span>]",
          "description": "Missing Description",
          "type": "Debuff"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-412122860\">Monster_XP_Elite02_01_Battle_02</a>",
          "stackData": [],
          "latentQueue": [
            "Monster_XP_Elite02_01_AIFlag"
          ]
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-749414927\">Monster_XP_Elite02_01_Battle</a>[<span class=\"descriptionNumberColor\">undefined</span>]",
          "description": "Missing Description",
          "type": "Buff"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__267392722\">Monster_XP_Elite02_01_Exhausted</a>[<span class=\"descriptionNumberColor\">undefined</span>]",
          "modifierFlags": [
            "MuteHitH"
          ],
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier",
              "execute": [
                {
                  "name": "Change Character Transformation",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "phase": "Phase2"
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"245616895\">Monster_XP_Elite02_01_DisableAction</a>"
                }
              ]
            },
            {
              "eventTrigger": "When Modifier Destroyed/Removed",
              "execute": [
                {
                  "name": "Change Character Transformation",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "phase": "Phase1"
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
                  "statName": "&nbsp;<span class=\"descriptionNumberColor\">ToughnessVulnerability</span>&nbsp;",
                  "value": {
                    "operator": "Variables[0] (MDF_StanceBreakTakenAddedRatio) || RETURN",
                    "displayLines": "MDF_StanceBreakTakenAddedRatio",
                    "constants": [],
                    "variables": [
                      "MDF_StanceBreakTakenAddedRatio"
                    ]
                  }
                },
                {
                  "name": "Declare Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Modifier Holder}}"
                  },
                  "scope": "TargetEntity",
                  "variableName": "Monster_XP_Elite02_01_AIFlag",
                  "value": 2
                }
              ]
            }
          ],
          "description": "Missing Description",
          "type": "Debuff"
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__245616895\">Monster_XP_Elite02_01_DisableAction</a>",
          "modifierFlags": [
            "DisableAction"
          ],
          "execute": [
            {
              "eventTrigger": "Turn [Action-End Phase]",
              "execute": [
                "Modifier Deletes Itself"
              ]
            }
          ],
          "stackData": [],
          "latentQueue": [],
          "duration": 1
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-1542768305\">Monster_XP_Elite02_01_Energy</a>",
          "execute": [
            {
              "eventTrigger": "Being Attacked End [Owner]",
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "EnergyLayer",
                    "compareType": "<=",
                    "value2": 0
                  },
                  "failed": [
                    {
                      "name": "Define Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
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
          ],
          "variableValueChange": [
            {
              "name": "Variable Value Changes",
              "variableName": "EnergyLayer",
              "from": "ContextOwner",
              "valueRanges": [
                {
                  "name": "Variable Value Range Conditions",
                  "minValue": -2,
                  "maxValue": -2,
                  "includeMaxValueInRange": true,
                  "whenEnteringRange": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value1": "EnergyLayerLast",
                        "compareType": ">=",
                        "value2": 0
                      }
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value1": "EnergyLayerLast",
                        "compareType": "=",
                        "value2": 9
                      },
                      "failed": [
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Compare: Variable",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Modifier Holder}}"
                            },
                            "value1": "EnergyLayerLast",
                            "compareType": "=",
                            "value2": 8
                          },
                          "failed": [
                            {
                              "name": "IF",
                              "conditions": {
                                "name": "Compare: Variable",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Modifier Holder}}"
                                },
                                "value1": "EnergyLayerLast",
                                "compareType": "=",
                                "value2": 7
                              },
                              "failed": [
                                {
                                  "name": "IF",
                                  "conditions": {
                                    "name": "Compare: Variable",
                                    "target": {
                                      "name": "Target Name",
                                      "target": "{{Modifier Holder}}"
                                    },
                                    "value1": "EnergyLayerLast",
                                    "compareType": "=",
                                    "value2": 6
                                  },
                                  "failed": [
                                    {
                                      "name": "IF",
                                      "conditions": {
                                        "name": "Compare: Variable",
                                        "target": {
                                          "name": "Target Name",
                                          "target": "{{Modifier Holder}}"
                                        },
                                        "value1": "EnergyLayerLast",
                                        "compareType": "=",
                                        "value2": 5
                                      },
                                      "failed": [
                                        {
                                          "name": "IF",
                                          "conditions": {
                                            "name": "Compare: Variable",
                                            "target": {
                                              "name": "Target Name",
                                              "target": "{{Modifier Holder}}"
                                            },
                                            "value1": "EnergyLayerLast",
                                            "compareType": "=",
                                            "value2": 4
                                          },
                                          "failed": [
                                            {
                                              "name": "IF",
                                              "conditions": {
                                                "name": "Compare: Variable",
                                                "target": {
                                                  "name": "Target Name",
                                                  "target": "{{Modifier Holder}}"
                                                },
                                                "value1": "EnergyLayerLast",
                                                "compareType": "=",
                                                "value2": 3
                                              },
                                              "failed": [
                                                {
                                                  "name": "IF",
                                                  "conditions": {
                                                    "name": "Compare: Variable",
                                                    "target": {
                                                      "name": "Target Name",
                                                      "target": "{{Modifier Holder}}"
                                                    },
                                                    "value1": "EnergyLayerLast",
                                                    "compareType": "=",
                                                    "value2": 2
                                                  },
                                                  "failed": [
                                                    {
                                                      "name": "IF",
                                                      "conditions": {
                                                        "name": "Compare: Variable",
                                                        "target": {
                                                          "name": "Target Name",
                                                          "target": "{{Modifier Holder}}"
                                                        },
                                                        "value1": "EnergyLayerLast",
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
                      "name": "Define Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "variableName": "EnergyLayerLast",
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
                      "modifier": "<a class=\"gModGreen\" id=\"1432699776\">Monster_XP_Elite02_01_EnergyLayer</a>[<span class=\"descriptionNumberColor\">Gauge Recollection</span>]"
                    }
                  ]
                },
                {
                  "name": "Variable Value Range Conditions",
                  "minValue": -1,
                  "maxValue": -1,
                  "includeMaxValueInRange": true,
                  "whenEnteringRange": [
                    {
                      "name": "Define Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "variableName": "EnergyLayerLast",
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
                      "modifier": "<a class=\"gModGreen\" id=\"1432699776\">Monster_XP_Elite02_01_EnergyLayer</a>[<span class=\"descriptionNumberColor\">Gauge Recollection</span>]"
                    }
                  ]
                },
                {
                  "name": "Variable Value Range Conditions",
                  "minValue": 0,
                  "maxValue": 0,
                  "includeMaxValueInRange": true,
                  "whenEnteringRange": [
                    {
                      "name": "Define Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "variableName": "EnergyLayerLast",
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
                      "modifier": "<a class=\"gModGreen\" id=\"1432699776\">Monster_XP_Elite02_01_EnergyLayer</a>[<span class=\"descriptionNumberColor\">Gauge Recollection</span>]"
                    }
                  ]
                },
                {
                  "name": "Variable Value Range Conditions",
                  "minValue": 1,
                  "maxValue": 1,
                  "includeMaxValueInRange": true,
                  "whenEnteringRange": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value1": "EnergyLayer",
                        "compareType": ">",
                        "value2": {
                          "operator": "Variables[0] (EnergyLayerLast) || RETURN",
                          "displayLines": "EnergyLayerLast",
                          "constants": [],
                          "variables": [
                            "EnergyLayerLast"
                          ]
                        }
                      }
                    },
                    {
                      "name": "Define Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "variableName": "EnergyLayerLast",
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
                      "modifier": "<a class=\"gModGreen\" id=\"1432699776\">Monster_XP_Elite02_01_EnergyLayer</a>[<span class=\"descriptionNumberColor\">Gauge Recollection</span>]"
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"1432699776\">Monster_XP_Elite02_01_EnergyLayer</a>[<span class=\"descriptionNumberColor\">Gauge Recollection</span>]",
                      "addStacksPerTrigger": 1
                    }
                  ]
                },
                {
                  "name": "Variable Value Range Conditions",
                  "minValue": 2,
                  "maxValue": 2,
                  "includeMaxValueInRange": true,
                  "whenEnteringRange": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value1": "EnergyLayer",
                        "compareType": ">",
                        "value2": {
                          "operator": "Variables[0] (EnergyLayerLast) || RETURN",
                          "displayLines": "EnergyLayerLast",
                          "constants": [],
                          "variables": [
                            "EnergyLayerLast"
                          ]
                        }
                      }
                    },
                    {
                      "name": "Define Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "variableName": "EnergyLayerLast",
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
                      "modifier": "<a class=\"gModGreen\" id=\"1432699776\">Monster_XP_Elite02_01_EnergyLayer</a>[<span class=\"descriptionNumberColor\">Gauge Recollection</span>]"
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"1432699776\">Monster_XP_Elite02_01_EnergyLayer</a>[<span class=\"descriptionNumberColor\">Gauge Recollection</span>]",
                      "addStacksPerTrigger": 2
                    }
                  ]
                },
                {
                  "name": "Variable Value Range Conditions",
                  "minValue": 3,
                  "maxValue": 3,
                  "includeMaxValueInRange": true,
                  "whenEnteringRange": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value1": "EnergyLayer",
                        "compareType": ">",
                        "value2": {
                          "operator": "Variables[0] (EnergyLayerLast) || RETURN",
                          "displayLines": "EnergyLayerLast",
                          "constants": [],
                          "variables": [
                            "EnergyLayerLast"
                          ]
                        }
                      }
                    },
                    {
                      "name": "Define Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "variableName": "EnergyLayerLast",
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
                      "modifier": "<a class=\"gModGreen\" id=\"1432699776\">Monster_XP_Elite02_01_EnergyLayer</a>[<span class=\"descriptionNumberColor\">Gauge Recollection</span>]"
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"1432699776\">Monster_XP_Elite02_01_EnergyLayer</a>[<span class=\"descriptionNumberColor\">Gauge Recollection</span>]",
                      "addStacksPerTrigger": 3
                    }
                  ]
                },
                {
                  "name": "Variable Value Range Conditions",
                  "minValue": 4,
                  "maxValue": 4,
                  "includeMaxValueInRange": true,
                  "whenEnteringRange": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value1": "EnergyLayer",
                        "compareType": ">",
                        "value2": {
                          "operator": "Variables[0] (EnergyLayerLast) || RETURN",
                          "displayLines": "EnergyLayerLast",
                          "constants": [],
                          "variables": [
                            "EnergyLayerLast"
                          ]
                        }
                      }
                    },
                    {
                      "name": "Define Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "variableName": "EnergyLayerLast",
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
                      "modifier": "<a class=\"gModGreen\" id=\"1432699776\">Monster_XP_Elite02_01_EnergyLayer</a>[<span class=\"descriptionNumberColor\">Gauge Recollection</span>]"
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"1432699776\">Monster_XP_Elite02_01_EnergyLayer</a>[<span class=\"descriptionNumberColor\">Gauge Recollection</span>]",
                      "addStacksPerTrigger": 4
                    }
                  ]
                },
                {
                  "name": "Variable Value Range Conditions",
                  "minValue": 5,
                  "maxValue": 5,
                  "includeMaxValueInRange": true,
                  "whenEnteringRange": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value1": "EnergyLayer",
                        "compareType": ">",
                        "value2": {
                          "operator": "Variables[0] (EnergyLayerLast) || RETURN",
                          "displayLines": "EnergyLayerLast",
                          "constants": [],
                          "variables": [
                            "EnergyLayerLast"
                          ]
                        }
                      }
                    },
                    {
                      "name": "Define Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "variableName": "EnergyLayerLast",
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
                      "modifier": "<a class=\"gModGreen\" id=\"1432699776\">Monster_XP_Elite02_01_EnergyLayer</a>[<span class=\"descriptionNumberColor\">Gauge Recollection</span>]"
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"1432699776\">Monster_XP_Elite02_01_EnergyLayer</a>[<span class=\"descriptionNumberColor\">Gauge Recollection</span>]",
                      "addStacksPerTrigger": 5
                    }
                  ]
                },
                {
                  "name": "Variable Value Range Conditions",
                  "minValue": 6,
                  "maxValue": 6,
                  "includeMaxValueInRange": true,
                  "whenEnteringRange": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value1": "EnergyLayer",
                        "compareType": ">",
                        "value2": {
                          "operator": "Variables[0] (EnergyLayerLast) || RETURN",
                          "displayLines": "EnergyLayerLast",
                          "constants": [],
                          "variables": [
                            "EnergyLayerLast"
                          ]
                        }
                      }
                    },
                    {
                      "name": "Define Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "variableName": "EnergyLayerLast",
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
                      "modifier": "<a class=\"gModGreen\" id=\"1432699776\">Monster_XP_Elite02_01_EnergyLayer</a>[<span class=\"descriptionNumberColor\">Gauge Recollection</span>]"
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"1432699776\">Monster_XP_Elite02_01_EnergyLayer</a>[<span class=\"descriptionNumberColor\">Gauge Recollection</span>]",
                      "addStacksPerTrigger": 6
                    }
                  ]
                },
                {
                  "name": "Variable Value Range Conditions",
                  "minValue": 7,
                  "maxValue": 7,
                  "includeMaxValueInRange": true,
                  "whenEnteringRange": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value1": "EnergyLayer",
                        "compareType": ">",
                        "value2": {
                          "operator": "Variables[0] (EnergyLayerLast) || RETURN",
                          "displayLines": "EnergyLayerLast",
                          "constants": [],
                          "variables": [
                            "EnergyLayerLast"
                          ]
                        }
                      }
                    },
                    {
                      "name": "Define Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "variableName": "EnergyLayerLast",
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
                      "modifier": "<a class=\"gModGreen\" id=\"1432699776\">Monster_XP_Elite02_01_EnergyLayer</a>[<span class=\"descriptionNumberColor\">Gauge Recollection</span>]"
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"1432699776\">Monster_XP_Elite02_01_EnergyLayer</a>[<span class=\"descriptionNumberColor\">Gauge Recollection</span>]",
                      "addStacksPerTrigger": 7
                    }
                  ]
                },
                {
                  "name": "Variable Value Range Conditions",
                  "minValue": 8,
                  "maxValue": 8,
                  "includeMaxValueInRange": true,
                  "whenEnteringRange": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value1": "EnergyLayer",
                        "compareType": ">",
                        "value2": {
                          "operator": "Variables[0] (EnergyLayerLast) || RETURN",
                          "displayLines": "EnergyLayerLast",
                          "constants": [],
                          "variables": [
                            "EnergyLayerLast"
                          ]
                        }
                      }
                    },
                    {
                      "name": "Define Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "variableName": "EnergyLayerLast",
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
                      "modifier": "<a class=\"gModGreen\" id=\"1432699776\">Monster_XP_Elite02_01_EnergyLayer</a>[<span class=\"descriptionNumberColor\">Gauge Recollection</span>]"
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"1432699776\">Monster_XP_Elite02_01_EnergyLayer</a>[<span class=\"descriptionNumberColor\">Gauge Recollection</span>]",
                      "addStacksPerTrigger": 8
                    }
                  ]
                },
                {
                  "name": "Variable Value Range Conditions",
                  "minValue": 9,
                  "maxValue": 9,
                  "includeMaxValueInRange": true,
                  "whenEnteringRange": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        },
                        "value1": "EnergyLayerLast",
                        "compareType": "=",
                        "value2": 8
                      }
                    },
                    {
                      "name": "Define Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "variableName": "EnergyLayerLast",
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
                      "modifier": "<a class=\"gModGreen\" id=\"1432699776\">Monster_XP_Elite02_01_EnergyLayer</a>[<span class=\"descriptionNumberColor\">Gauge Recollection</span>]"
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"1432699776\">Monster_XP_Elite02_01_EnergyLayer</a>[<span class=\"descriptionNumberColor\">Gauge Recollection</span>]",
                      "addStacksPerTrigger": 9
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
          "for": "<a class=\"gModGreen\" id=\"mod__1432699776\">Monster_XP_Elite02_01_EnergyLayer</a>[<span class=\"descriptionNumberColor\">Gauge Recollection</span>]",
          "stackType": "Replace",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Define Custom Variable with Modifier Values",
                  "valueType": "Layer",
                  "variableName": "ModifierLayers",
                  "multiplier": 1
                }
              ]
            }
          ],
          "stackData": [],
          "latentQueue": [],
          "description": "Current stacks of Gauge Recollection: <span class=\"descriptionNumberColor\">ModifierLayers</span>. Loses 1 stack of Gauge Recollection after being hit.",
          "type": "Other",
          "statusName": "Gauge Recollection",
          "stackLimit": 9
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__615554356\">Monster_XP_Elite02_01_RemoveEnergyLayer</a>",
          "execute": [
            {
              "eventTrigger": "When Constructing Modifier",
              "execute": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1432699776\">Monster_XP_Elite02_01_EnergyLayer</a>[<span class=\"descriptionNumberColor\">Gauge Recollection</span>]"
                }
              ]
            },
            {
              "eventTrigger": "Turn End [Anyone]",
              "execute": [
                "Modifier Deletes Itself"
              ]
            }
          ],
          "stackData": [],
          "latentQueue": [
            "Monster_XP_Elite02_01_AIFlag",
            "ChargeFlag",
            "Monster_XP_Elite02_01_AIFlag_02"
          ],
          "duration": 1
        },
        {
          "name": "Modifier Construction",
          "for": "<a class=\"gModGreen\" id=\"mod__-799757302\">Monster_XP_Elite02_01_Accelerate</a>[<span class=\"descriptionNumberColor\">undefined</span>]",
          "stackType": "Replace",
          "execute": [
            {
              "eventTrigger": "When Stacking/Receiving Modifier",
              "execute": [
                {
                  "name": "Define Custom Variable with Modifier Values",
                  "valueType": "Layer",
                  "variableName": "ModifierLayers",
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
                    "operator": "Variables[0] (MDF_SpeedAddedRatio_PerLayer) || Variables[1] (ModifierLayers) || MUL || RETURN",
                    "displayLines": "(MDF_SpeedAddedRatio_PerLayer * ModifierLayers)",
                    "constants": [],
                    "variables": [
                      "MDF_SpeedAddedRatio_PerLayer",
                      "ModifierLayers"
                    ]
                  }
                }
              ]
            }
          ],
          "description": "Missing Description",
          "type": "Buff",
          "stackLimit": 10,
          "addStacksPerTrigger": {
            "operator": "Variables[0] (ModifierStackLayer) || RETURN",
            "displayLines": "ModifierStackLayer",
            "constants": [],
            "variables": [
              "ModifierStackLayer"
            ]
          }
        }
      ],
      "references": []
    }
  }
}