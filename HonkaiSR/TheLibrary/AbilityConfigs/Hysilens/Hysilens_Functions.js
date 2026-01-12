const configAbility = {
  "fileName": "Hysilens_Functions",
  "abilityType": "Char. Functions",
  "energy": null,
  "toughnessList": [
    0,
    0,
    0
  ],
  "parse": [
    {
      "name": "CharacterFunctions",
      "functionName": "Harscyline_DOT_MaskCheck",
      "parse": [
        {
          "name": "Define Custom Variable",
          "variableName": "DOT_Tear_Mask",
          "value": 0
        },
        {
          "name": "Define Custom Variable",
          "variableName": "DOT_Electric_Mask",
          "value": 0
        },
        {
          "name": "Define Custom Variable",
          "variableName": "DOT_Burn_Mask",
          "value": 0
        },
        {
          "name": "Define Custom Variable",
          "variableName": "DOT_Poison_Mask",
          "value": 0
        },
        {
          "name": "Define Custom Variable",
          "variableName": "DOT_Mask",
          "value": 0
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Has Modifier",
            "target": "Use Prior Target(s) Defined",
            "modifier": "Harscyline_DOT_Tear[<span class=\"descriptionNumberColor\">Bleed</span>]",
            "invertCondition": true
          },
          "passed": [
            {
              "name": "Define Custom Variable",
              "variableName": "DOT_Tear_Mask",
              "value": 1
            }
          ],
          "failed": [
            {
              "name": "Define Custom Variable",
              "variableName": "DOT_Tear_Mask",
              "value": 0
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Has Modifier",
            "target": "Use Prior Target(s) Defined",
            "modifier": "Harscyline_DOT_Electric[<span class=\"descriptionNumberColor\">Shock</span>]",
            "invertCondition": true
          },
          "passed": [
            {
              "name": "Define Custom Variable",
              "variableName": "DOT_Electric_Mask",
              "value": 1
            }
          ],
          "failed": [
            {
              "name": "Define Custom Variable",
              "variableName": "DOT_Electric_Mask",
              "value": 0
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Has Modifier",
            "target": "Use Prior Target(s) Defined",
            "modifier": "Harscyline_DOT_Burn[<span class=\"descriptionNumberColor\">Burn</span>]",
            "invertCondition": true
          },
          "passed": [
            {
              "name": "Define Custom Variable",
              "variableName": "DOT_Burn_Mask",
              "value": 1
            }
          ],
          "failed": [
            {
              "name": "Define Custom Variable",
              "variableName": "DOT_Burn_Mask",
              "value": 0
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Has Modifier",
            "target": "Use Prior Target(s) Defined",
            "modifier": "Harscyline_DOT_Poison[<span class=\"descriptionNumberColor\">Wind Shear</span>]",
            "invertCondition": true
          },
          "passed": [
            {
              "name": "Define Custom Variable",
              "variableName": "DOT_Poison_Mask",
              "value": 1
            }
          ],
          "failed": [
            {
              "name": "Define Custom Variable",
              "variableName": "DOT_Poison_Mask",
              "value": 0
            }
          ]
        },
        {
          "name": "Define Custom Variable",
          "variableName": "DOT_Mask",
          "value": {
            "operator": "Variables[0] (DOT_Tear_Mask) || Variables[1] (DOT_Electric_Mask) || ADD || Variables[2] (DOT_Burn_Mask) || ADD || Variables[3] (DOT_Poison_Mask) || ADD || RETURN",
            "displayLines": "(((DOT_Tear_Mask + DOT_Electric_Mask) + DOT_Burn_Mask) + DOT_Poison_Mask)",
            "constants": [],
            "variables": [
              "DOT_Tear_Mask",
              "DOT_Electric_Mask",
              "DOT_Burn_Mask",
              "DOT_Poison_Mask"
            ]
          }
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "DOT_Mask",
            "compareType": "=",
            "value2": 0
          },
          "passed": [
            {
              "name": "Define Custom Variable",
              "variableName": "DOT_Tear_Mask",
              "value": 1
            },
            {
              "name": "Define Custom Variable",
              "variableName": "DOT_Electric_Mask",
              "value": 1
            },
            {
              "name": "Define Custom Variable",
              "variableName": "DOT_Burn_Mask",
              "value": 1
            },
            {
              "name": "Define Custom Variable",
              "variableName": "DOT_Poison_Mask",
              "value": 1
            }
          ]
        }
      ]
    },
    {
      "name": "CharacterFunctions",
      "functionName": "Harscyline_RandomDOT_Maze",
      "parse": [
        {
          "name": "Find New Target",
          "from": "All Hostile Entities (AOE)",
          "ifTargetFound": [
            {
              "name": "Use Custom Character Function",
              "functionName": "Harscyline_DOT_MaskCheck"
            },
            {
              "name": "Random Event",
              "odds": [
                {
                  "operator": "Variables[0] (DOT_Tear_Mask) || RETURN",
                  "displayLines": "DOT_Tear_Mask",
                  "constants": [],
                  "variables": [
                    "DOT_Tear_Mask"
                  ]
                },
                {
                  "operator": "Variables[0] (DOT_Electric_Mask) || RETURN",
                  "displayLines": "DOT_Electric_Mask",
                  "constants": [],
                  "variables": [
                    "DOT_Electric_Mask"
                  ]
                },
                {
                  "operator": "Variables[0] (DOT_Burn_Mask) || RETURN",
                  "displayLines": "DOT_Burn_Mask",
                  "constants": [],
                  "variables": [
                    "DOT_Burn_Mask"
                  ]
                },
                {
                  "operator": "Variables[0] (DOT_Poison_Mask) || RETURN",
                  "displayLines": "DOT_Poison_Mask",
                  "constants": [],
                  "variables": [
                    "DOT_Poison_Mask"
                  ]
                }
              ],
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
                      "to": "Use Prior Target(s) Defined",
                      "modifier": "Harscyline_DOT_Tear[<span class=\"descriptionNumberColor\">Bleed</span>]",
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
                        "Modifier_Tear_DamageRatio": {
                          "operator": "Variables[0] (0.2) || RETURN",
                          "displayLines": "0.2",
                          "constants": [],
                          "variables": [
                            0.2
                          ]
                        },
                        "Modifier_Tear_MaxPercentage": {
                          "operator": "Variables[0] (0.25) || RETURN",
                          "displayLines": "0.25",
                          "constants": [],
                          "variables": [
                            0.25
                          ]
                        }
                      }
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": "Use Prior Target(s) Defined",
                      "modifier": "Harscyline_DOT_Tear2[<span class=\"descriptionNumberColor\">Bleed</span>]",
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
                        "Modifier_Tear_DamageRatio": {
                          "operator": "Variables[0] (0.2) || RETURN",
                          "displayLines": "0.2",
                          "constants": [],
                          "variables": [
                            0.2
                          ]
                        },
                        "Modifier_Tear_MaxPercentage": {
                          "operator": "Variables[0] (0.25) || RETURN",
                          "displayLines": "0.25",
                          "constants": [],
                          "variables": [
                            0.25
                          ]
                        }
                      }
                    }
                  ],
                  "failed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": "Use Prior Target(s) Defined",
                      "modifier": "Harscyline_DOT_Tear[<span class=\"descriptionNumberColor\">Bleed</span>]",
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
                        "Modifier_Tear_DamageRatio": {
                          "operator": "Variables[0] (0.2) || RETURN",
                          "displayLines": "0.2",
                          "constants": [],
                          "variables": [
                            0.2
                          ]
                        },
                        "Modifier_Tear_MaxPercentage": {
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
                  "name": "IF",
                  "conditions": {
                    "name": "Eidolon Activated",
                    "eidolon": 1
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": "Use Prior Target(s) Defined",
                      "modifier": "Harscyline_DOT_Electric[<span class=\"descriptionNumberColor\">Shock</span>]",
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
                        "Modifier_Electric_DamagePercentage": {
                          "operator": "Variables[0] (0.25) || RETURN",
                          "displayLines": "0.25",
                          "constants": [],
                          "variables": [
                            0.25
                          ]
                        }
                      }
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": "Use Prior Target(s) Defined",
                      "modifier": "Harscyline_DOT_Electric2[<span class=\"descriptionNumberColor\">Shock</span>]",
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
                        "Modifier_Electric_DamagePercentage": {
                          "operator": "Variables[0] (0.25) || RETURN",
                          "displayLines": "0.25",
                          "constants": [],
                          "variables": [
                            0.25
                          ]
                        }
                      }
                    }
                  ],
                  "failed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": "Use Prior Target(s) Defined",
                      "modifier": "Harscyline_DOT_Electric[<span class=\"descriptionNumberColor\">Shock</span>]",
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
                        "Modifier_Electric_DamagePercentage": {
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
                  "name": "IF",
                  "conditions": {
                    "name": "Eidolon Activated",
                    "eidolon": 1
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": "Use Prior Target(s) Defined",
                      "modifier": "Harscyline_DOT_Burn[<span class=\"descriptionNumberColor\">Burn</span>]",
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
                          "operator": "Variables[0] (0.25) || RETURN",
                          "displayLines": "0.25",
                          "constants": [],
                          "variables": [
                            0.25
                          ]
                        }
                      }
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": "Use Prior Target(s) Defined",
                      "modifier": "Harscyline_DOT_Burn2[<span class=\"descriptionNumberColor\">Burn</span>]",
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
                          "operator": "Variables[0] (0.25) || RETURN",
                          "displayLines": "0.25",
                          "constants": [],
                          "variables": [
                            0.25
                          ]
                        }
                      }
                    }
                  ],
                  "failed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": "Use Prior Target(s) Defined",
                      "modifier": "Harscyline_DOT_Burn[<span class=\"descriptionNumberColor\">Burn</span>]",
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
                  "name": "IF",
                  "conditions": {
                    "name": "Eidolon Activated",
                    "eidolon": 1
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": "Use Prior Target(s) Defined",
                      "modifier": "Harscyline_DOT_Poison[<span class=\"descriptionNumberColor\">Wind Shear</span>]",
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
                        "Modifier_Poison_DamagePercentage": {
                          "operator": "Variables[0] (0.25) || RETURN",
                          "displayLines": "0.25",
                          "constants": [],
                          "variables": [
                            0.25
                          ]
                        }
                      }
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": "Use Prior Target(s) Defined",
                      "modifier": "Harscyline_DOT_Poison2[<span class=\"descriptionNumberColor\">Wind Shear</span>]",
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
                        "Modifier_Poison_DamagePercentage": {
                          "operator": "Variables[0] (0.25) || RETURN",
                          "displayLines": "0.25",
                          "constants": [],
                          "variables": [
                            0.25
                          ]
                        }
                      }
                    }
                  ],
                  "failed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": "Use Prior Target(s) Defined",
                      "modifier": "Harscyline_DOT_Poison[<span class=\"descriptionNumberColor\">Wind Shear</span>]",
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
                        "Modifier_Poison_DamagePercentage": {
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
      ]
    },
    {
      "name": "CharacterFunctions",
      "functionName": "Harscyline_RandomDOT_PassiveRandomDOT",
      "parse": [
        {
          "name": "Use Custom Character Function",
          "functionName": "Harscyline_DOT_MaskCheck"
        },
        {
          "name": "Random Event",
          "odds": [
            {
              "operator": "Variables[0] (DOT_Tear_Mask) || RETURN",
              "displayLines": "DOT_Tear_Mask",
              "constants": [],
              "variables": [
                "DOT_Tear_Mask"
              ]
            },
            {
              "operator": "Variables[0] (DOT_Electric_Mask) || RETURN",
              "displayLines": "DOT_Electric_Mask",
              "constants": [],
              "variables": [
                "DOT_Electric_Mask"
              ]
            },
            {
              "operator": "Variables[0] (DOT_Burn_Mask) || RETURN",
              "displayLines": "DOT_Burn_Mask",
              "constants": [],
              "variables": [
                "DOT_Burn_Mask"
              ]
            },
            {
              "operator": "Variables[0] (DOT_Poison_Mask) || RETURN",
              "displayLines": "DOT_Poison_Mask",
              "constants": [],
              "variables": [
                "DOT_Poison_Mask"
              ]
            }
          ],
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
                  "to": "Use Prior Target(s) Defined",
                  "modifier": "Harscyline_DOT_Tear[<span class=\"descriptionNumberColor\">Bleed</span>]",
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
                    "Modifier_Tear_DamageRatio": {
                      "operator": "Variables[0] (0.2) || RETURN",
                      "displayLines": "0.2",
                      "constants": [],
                      "variables": [
                        0.2
                      ]
                    },
                    "Modifier_Tear_MaxPercentage": {
                      "operator": "Variables[0] (0.25) || RETURN",
                      "displayLines": "0.25",
                      "constants": [],
                      "variables": [
                        0.25
                      ]
                    }
                  }
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": "Use Prior Target(s) Defined",
                  "modifier": "Harscyline_DOT_Tear2[<span class=\"descriptionNumberColor\">Bleed</span>]",
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
                    "Modifier_Tear_DamageRatio": {
                      "operator": "Variables[0] (0.2) || RETURN",
                      "displayLines": "0.2",
                      "constants": [],
                      "variables": [
                        0.2
                      ]
                    },
                    "Modifier_Tear_MaxPercentage": {
                      "operator": "Variables[0] (0.25) || RETURN",
                      "displayLines": "0.25",
                      "constants": [],
                      "variables": [
                        0.25
                      ]
                    }
                  }
                }
              ],
              "failed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": "Use Prior Target(s) Defined",
                  "modifier": "Harscyline_DOT_Tear[<span class=\"descriptionNumberColor\">Bleed</span>]",
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
                    "Modifier_Tear_DamageRatio": {
                      "operator": "Variables[0] (0.2) || RETURN",
                      "displayLines": "0.2",
                      "constants": [],
                      "variables": [
                        0.2
                      ]
                    },
                    "Modifier_Tear_MaxPercentage": {
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
              "name": "IF",
              "conditions": {
                "name": "Eidolon Activated",
                "eidolon": 1
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": "Use Prior Target(s) Defined",
                  "modifier": "Harscyline_DOT_Electric[<span class=\"descriptionNumberColor\">Shock</span>]",
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
                    "Modifier_Electric_DamagePercentage": {
                      "operator": "Variables[0] (0.25) || RETURN",
                      "displayLines": "0.25",
                      "constants": [],
                      "variables": [
                        0.25
                      ]
                    }
                  }
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": "Use Prior Target(s) Defined",
                  "modifier": "Harscyline_DOT_Electric2[<span class=\"descriptionNumberColor\">Shock</span>]",
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
                    "Modifier_Electric_DamagePercentage": {
                      "operator": "Variables[0] (0.25) || RETURN",
                      "displayLines": "0.25",
                      "constants": [],
                      "variables": [
                        0.25
                      ]
                    }
                  }
                }
              ],
              "failed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": "Use Prior Target(s) Defined",
                  "modifier": "Harscyline_DOT_Electric[<span class=\"descriptionNumberColor\">Shock</span>]",
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
                    "Modifier_Electric_DamagePercentage": {
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
              "name": "IF",
              "conditions": {
                "name": "Eidolon Activated",
                "eidolon": 1
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": "Use Prior Target(s) Defined",
                  "modifier": "Harscyline_DOT_Burn[<span class=\"descriptionNumberColor\">Burn</span>]",
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
                      "operator": "Variables[0] (0.25) || RETURN",
                      "displayLines": "0.25",
                      "constants": [],
                      "variables": [
                        0.25
                      ]
                    }
                  }
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": "Use Prior Target(s) Defined",
                  "modifier": "Harscyline_DOT_Burn2[<span class=\"descriptionNumberColor\">Burn</span>]",
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
                      "operator": "Variables[0] (0.25) || RETURN",
                      "displayLines": "0.25",
                      "constants": [],
                      "variables": [
                        0.25
                      ]
                    }
                  }
                }
              ],
              "failed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": "Use Prior Target(s) Defined",
                  "modifier": "Harscyline_DOT_Burn[<span class=\"descriptionNumberColor\">Burn</span>]",
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
              "name": "IF",
              "conditions": {
                "name": "Eidolon Activated",
                "eidolon": 1
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": "Use Prior Target(s) Defined",
                  "modifier": "Harscyline_DOT_Poison[<span class=\"descriptionNumberColor\">Wind Shear</span>]",
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
                    "Modifier_Poison_DamagePercentage": {
                      "operator": "Variables[0] (0.25) || RETURN",
                      "displayLines": "0.25",
                      "constants": [],
                      "variables": [
                        0.25
                      ]
                    }
                  }
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": "Use Prior Target(s) Defined",
                  "modifier": "Harscyline_DOT_Poison2[<span class=\"descriptionNumberColor\">Wind Shear</span>]",
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
                    "Modifier_Poison_DamagePercentage": {
                      "operator": "Variables[0] (0.25) || RETURN",
                      "displayLines": "0.25",
                      "constants": [],
                      "variables": [
                        0.25
                      ]
                    }
                  }
                }
              ],
              "failed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": "Use Prior Target(s) Defined",
                  "modifier": "Harscyline_DOT_Poison[<span class=\"descriptionNumberColor\">Wind Shear</span>]",
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
                    "Modifier_Poison_DamagePercentage": {
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
  "references": []
}