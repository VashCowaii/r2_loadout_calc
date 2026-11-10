const configAbility = {
  "fileName": "Hysilens_Functions",
  "abilityType": "Char. Functions",
  "energy": null,
  "toughnessList": [
    0,
    0,
    0
  ],
  "length": 4,
  "parse": [
    {
      "name": "CharacterFunctions",
      "functionName": "<a class=\"gTempYellow\" id=\"fun__-660722285\">Harscyline_DOT_MaskCheck</a>",
      "parse": [
        {
          "name": "Define Custom Variable",
          "value": 0,
          "variableName": "DOT_Tear_Mask"
        },
        {
          "name": "Define Custom Variable",
          "value": 0,
          "variableName": "DOT_Electric_Mask"
        },
        {
          "name": "Define Custom Variable",
          "value": 0,
          "variableName": "DOT_Burn_Mask"
        },
        {
          "name": "Define Custom Variable",
          "value": 0,
          "variableName": "DOT_Poison_Mask"
        },
        {
          "name": "Define Custom Variable",
          "value": 0,
          "variableName": "DOT_Mask"
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"850932122\">Harscyline_DOT_Tear</a>[<span class=\"descriptionNumberColor\">Bleed</span>]",
            "invertCondition": true
          },
          "passed": [
            {
              "name": "Define Custom Variable",
              "value": 1,
              "variableName": "DOT_Tear_Mask"
            }
          ],
          "failed": [
            {
              "name": "Define Custom Variable",
              "value": 0,
              "variableName": "DOT_Tear_Mask"
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"-593885923\">Harscyline_DOT_Electric</a>[<span class=\"descriptionNumberColor\">Shock</span>]",
            "invertCondition": true
          },
          "passed": [
            {
              "name": "Define Custom Variable",
              "value": 1,
              "variableName": "DOT_Electric_Mask"
            }
          ],
          "failed": [
            {
              "name": "Define Custom Variable",
              "value": 0,
              "variableName": "DOT_Electric_Mask"
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"566707275\">Harscyline_DOT_Burn</a>[<span class=\"descriptionNumberColor\">Burn</span>]",
            "invertCondition": true
          },
          "passed": [
            {
              "name": "Define Custom Variable",
              "value": 1,
              "variableName": "DOT_Burn_Mask"
            }
          ],
          "failed": [
            {
              "name": "Define Custom Variable",
              "value": 0,
              "variableName": "DOT_Burn_Mask"
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"1250170394\">Harscyline_DOT_Poison</a>[<span class=\"descriptionNumberColor\">Wind Shear</span>]",
            "invertCondition": true
          },
          "passed": [
            {
              "name": "Define Custom Variable",
              "value": 1,
              "variableName": "DOT_Poison_Mask"
            }
          ],
          "failed": [
            {
              "name": "Define Custom Variable",
              "value": 0,
              "variableName": "DOT_Poison_Mask"
            }
          ]
        },
        {
          "name": "Define Custom Variable",
          "value": {
            "displayLines": "(((DOT_Tear_Mask + DOT_Electric_Mask) + DOT_Burn_Mask) + DOT_Poison_Mask)"
          },
          "variableName": "DOT_Mask"
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
              "value": 1,
              "variableName": "DOT_Tear_Mask"
            },
            {
              "name": "Define Custom Variable",
              "value": 1,
              "variableName": "DOT_Electric_Mask"
            },
            {
              "name": "Define Custom Variable",
              "value": 1,
              "variableName": "DOT_Burn_Mask"
            },
            {
              "name": "Define Custom Variable",
              "value": 1,
              "variableName": "DOT_Poison_Mask"
            }
          ]
        }
      ]
    },
    {
      "name": "CharacterFunctions",
      "functionName": "<a class=\"gTempYellow\" id=\"fun__1526500029\">Harscyline_RandomDOT_Maze</a>",
      "parse": [
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "ifTargetFound": [
            {
              "name": "Use Custom Character Function",
              "functionName": "<a class=\"gTempYellow\" id=\"-660722285\">Harscyline_DOT_MaskCheck</a>"
            },
            {
              "name": "Random Event",
              "odds": [
                {
                  "displayLines": "DOT_Tear_Mask"
                },
                {
                  "displayLines": "DOT_Electric_Mask"
                },
                {
                  "displayLines": "DOT_Burn_Mask"
                },
                {
                  "displayLines": "DOT_Poison_Mask"
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
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"850932122\">Harscyline_DOT_Tear</a>[<span class=\"descriptionNumberColor\">Bleed</span>]",
                      "duration": {
                        "displayLines": "2"
                      },
                      "baseChance": {
                        "displayLines": "1"
                      },
                      "valuePerStack": {
                        "Modifier_Tear_DamageRatio": {
                          "displayLines": "0.2"
                        },
                        "Modifier_Tear_MaxPercentage": {
                          "displayLines": "0.25"
                        }
                      }
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"2146839416\">Harscyline_DOT_Tear2</a>[<span class=\"descriptionNumberColor\">Bleed</span>]",
                      "duration": {
                        "displayLines": "2"
                      },
                      "baseChance": {
                        "displayLines": "1"
                      },
                      "valuePerStack": {
                        "Modifier_Tear_DamageRatio": {
                          "displayLines": "0.2"
                        },
                        "Modifier_Tear_MaxPercentage": {
                          "displayLines": "0.25"
                        }
                      }
                    }
                  ],
                  "failed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"850932122\">Harscyline_DOT_Tear</a>[<span class=\"descriptionNumberColor\">Bleed</span>]",
                      "duration": {
                        "displayLines": "2"
                      },
                      "baseChance": {
                        "displayLines": "1"
                      },
                      "valuePerStack": {
                        "Modifier_Tear_DamageRatio": {
                          "displayLines": "0.2"
                        },
                        "Modifier_Tear_MaxPercentage": {
                          "displayLines": "0.25"
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
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-593885923\">Harscyline_DOT_Electric</a>[<span class=\"descriptionNumberColor\">Shock</span>]",
                      "duration": {
                        "displayLines": "2"
                      },
                      "baseChance": {
                        "displayLines": "1"
                      },
                      "valuePerStack": {
                        "Modifier_Electric_DamagePercentage": {
                          "displayLines": "0.25"
                        }
                      }
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"1970678013\">Harscyline_DOT_Electric2</a>[<span class=\"descriptionNumberColor\">Shock</span>]",
                      "duration": {
                        "displayLines": "2"
                      },
                      "baseChance": {
                        "displayLines": "1"
                      },
                      "valuePerStack": {
                        "Modifier_Electric_DamagePercentage": {
                          "displayLines": "0.25"
                        }
                      }
                    }
                  ],
                  "failed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-593885923\">Harscyline_DOT_Electric</a>[<span class=\"descriptionNumberColor\">Shock</span>]",
                      "duration": {
                        "displayLines": "2"
                      },
                      "baseChance": {
                        "displayLines": "1"
                      },
                      "valuePerStack": {
                        "Modifier_Electric_DamagePercentage": {
                          "displayLines": "0.25"
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
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"566707275\">Harscyline_DOT_Burn</a>[<span class=\"descriptionNumberColor\">Burn</span>]",
                      "duration": {
                        "displayLines": "2"
                      },
                      "baseChance": {
                        "displayLines": "1"
                      },
                      "valuePerStack": {
                        "Modifier_Burn_DamagePercentage": {
                          "displayLines": "0.25"
                        }
                      }
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-1515140485\">Harscyline_DOT_Burn2</a>[<span class=\"descriptionNumberColor\">Burn</span>]",
                      "duration": {
                        "displayLines": "2"
                      },
                      "baseChance": {
                        "displayLines": "1"
                      },
                      "valuePerStack": {
                        "Modifier_Burn_DamagePercentage": {
                          "displayLines": "0.25"
                        }
                      }
                    }
                  ],
                  "failed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"566707275\">Harscyline_DOT_Burn</a>[<span class=\"descriptionNumberColor\">Burn</span>]",
                      "duration": {
                        "displayLines": "2"
                      },
                      "baseChance": {
                        "displayLines": "1"
                      },
                      "valuePerStack": {
                        "Modifier_Burn_DamagePercentage": {
                          "displayLines": "0.25"
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
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"1250170394\">Harscyline_DOT_Poison</a>[<span class=\"descriptionNumberColor\">Wind Shear</span>]",
                      "duration": {
                        "displayLines": "2"
                      },
                      "baseChance": {
                        "displayLines": "1"
                      },
                      "valuePerStack": {
                        "Modifier_Poison_DamagePercentage": {
                          "displayLines": "0.25"
                        }
                      }
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"1978589432\">Harscyline_DOT_Poison2</a>[<span class=\"descriptionNumberColor\">Wind Shear</span>]",
                      "duration": {
                        "displayLines": "2"
                      },
                      "baseChance": {
                        "displayLines": "1"
                      },
                      "valuePerStack": {
                        "Modifier_Poison_DamagePercentage": {
                          "displayLines": "0.25"
                        }
                      }
                    }
                  ],
                  "failed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"1250170394\">Harscyline_DOT_Poison</a>[<span class=\"descriptionNumberColor\">Wind Shear</span>]",
                      "duration": {
                        "displayLines": "2"
                      },
                      "baseChance": {
                        "displayLines": "1"
                      },
                      "valuePerStack": {
                        "Modifier_Poison_DamagePercentage": {
                          "displayLines": "0.25"
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
      "functionName": "<a class=\"gTempYellow\" id=\"fun__824285103\">Harscyline_RandomDOT_PassiveRandomDOT</a>",
      "parse": [
        {
          "name": "Use Custom Character Function",
          "functionName": "<a class=\"gTempYellow\" id=\"-660722285\">Harscyline_DOT_MaskCheck</a>"
        },
        {
          "name": "Random Event",
          "odds": [
            {
              "displayLines": "DOT_Tear_Mask"
            },
            {
              "displayLines": "DOT_Electric_Mask"
            },
            {
              "displayLines": "DOT_Burn_Mask"
            },
            {
              "displayLines": "DOT_Poison_Mask"
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
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"850932122\">Harscyline_DOT_Tear</a>[<span class=\"descriptionNumberColor\">Bleed</span>]",
                  "duration": {
                    "displayLines": "2"
                  },
                  "baseChance": {
                    "displayLines": "1"
                  },
                  "valuePerStack": {
                    "Modifier_Tear_DamageRatio": {
                      "displayLines": "0.2"
                    },
                    "Modifier_Tear_MaxPercentage": {
                      "displayLines": "0.25"
                    }
                  }
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"2146839416\">Harscyline_DOT_Tear2</a>[<span class=\"descriptionNumberColor\">Bleed</span>]",
                  "duration": {
                    "displayLines": "2"
                  },
                  "baseChance": {
                    "displayLines": "1"
                  },
                  "valuePerStack": {
                    "Modifier_Tear_DamageRatio": {
                      "displayLines": "0.2"
                    },
                    "Modifier_Tear_MaxPercentage": {
                      "displayLines": "0.25"
                    }
                  }
                }
              ],
              "failed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"850932122\">Harscyline_DOT_Tear</a>[<span class=\"descriptionNumberColor\">Bleed</span>]",
                  "duration": {
                    "displayLines": "2"
                  },
                  "baseChance": {
                    "displayLines": "1"
                  },
                  "valuePerStack": {
                    "Modifier_Tear_DamageRatio": {
                      "displayLines": "0.2"
                    },
                    "Modifier_Tear_MaxPercentage": {
                      "displayLines": "0.25"
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
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-593885923\">Harscyline_DOT_Electric</a>[<span class=\"descriptionNumberColor\">Shock</span>]",
                  "duration": {
                    "displayLines": "2"
                  },
                  "baseChance": {
                    "displayLines": "1"
                  },
                  "valuePerStack": {
                    "Modifier_Electric_DamagePercentage": {
                      "displayLines": "0.25"
                    }
                  }
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1970678013\">Harscyline_DOT_Electric2</a>[<span class=\"descriptionNumberColor\">Shock</span>]",
                  "duration": {
                    "displayLines": "2"
                  },
                  "baseChance": {
                    "displayLines": "1"
                  },
                  "valuePerStack": {
                    "Modifier_Electric_DamagePercentage": {
                      "displayLines": "0.25"
                    }
                  }
                }
              ],
              "failed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-593885923\">Harscyline_DOT_Electric</a>[<span class=\"descriptionNumberColor\">Shock</span>]",
                  "duration": {
                    "displayLines": "2"
                  },
                  "baseChance": {
                    "displayLines": "1"
                  },
                  "valuePerStack": {
                    "Modifier_Electric_DamagePercentage": {
                      "displayLines": "0.25"
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
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"566707275\">Harscyline_DOT_Burn</a>[<span class=\"descriptionNumberColor\">Burn</span>]",
                  "duration": {
                    "displayLines": "2"
                  },
                  "baseChance": {
                    "displayLines": "1"
                  },
                  "valuePerStack": {
                    "Modifier_Burn_DamagePercentage": {
                      "displayLines": "0.25"
                    }
                  }
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1515140485\">Harscyline_DOT_Burn2</a>[<span class=\"descriptionNumberColor\">Burn</span>]",
                  "duration": {
                    "displayLines": "2"
                  },
                  "baseChance": {
                    "displayLines": "1"
                  },
                  "valuePerStack": {
                    "Modifier_Burn_DamagePercentage": {
                      "displayLines": "0.25"
                    }
                  }
                }
              ],
              "failed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"566707275\">Harscyline_DOT_Burn</a>[<span class=\"descriptionNumberColor\">Burn</span>]",
                  "duration": {
                    "displayLines": "2"
                  },
                  "baseChance": {
                    "displayLines": "1"
                  },
                  "valuePerStack": {
                    "Modifier_Burn_DamagePercentage": {
                      "displayLines": "0.25"
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
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1250170394\">Harscyline_DOT_Poison</a>[<span class=\"descriptionNumberColor\">Wind Shear</span>]",
                  "duration": {
                    "displayLines": "2"
                  },
                  "baseChance": {
                    "displayLines": "1"
                  },
                  "valuePerStack": {
                    "Modifier_Poison_DamagePercentage": {
                      "displayLines": "0.25"
                    }
                  }
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1978589432\">Harscyline_DOT_Poison2</a>[<span class=\"descriptionNumberColor\">Wind Shear</span>]",
                  "duration": {
                    "displayLines": "2"
                  },
                  "baseChance": {
                    "displayLines": "1"
                  },
                  "valuePerStack": {
                    "Modifier_Poison_DamagePercentage": {
                      "displayLines": "0.25"
                    }
                  }
                }
              ],
              "failed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1250170394\">Harscyline_DOT_Poison</a>[<span class=\"descriptionNumberColor\">Wind Shear</span>]",
                  "duration": {
                    "displayLines": "2"
                  },
                  "baseChance": {
                    "displayLines": "1"
                  },
                  "valuePerStack": {
                    "Modifier_Poison_DamagePercentage": {
                      "displayLines": "0.25"
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
      "name": "CharacterFunctions",
      "functionName": "<a class=\"gTempYellow\" id=\"fun__-1129499125\">StageTemplate_MazeStandard_EnterBattle_DamageStance</a>",
      "parse": [
        {
          "name": "Set Current Turn-Action Entity",
          "target": {
            "name": "Target Name",
            "target": "{{Modifier Holder}}"
          }
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
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Enemy Team All}}"
              },
              "searchRandom": true,
              "conditions": {
                "name": "OR",
                "conditionList": [
                  {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "IsForceStanceDamage",
                    "compareType": ">=",
                    "value2": 1,
                    "contextScope": "ContextTaskTemplate"
                  },
                  {
                    "name": "Has Weakness",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "DamageType": {
                      "name": "Damage Type Source",
                      "sourceType": "ReadTargetType",
                      "readTarget": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      }
                    }
                  }
                ]
              },
              "ignoreParallelWarning": true,
              "ifTargetFound": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Modifier Holder}}"
                    },
                    "value1": "IsForceStanceDamage",
                    "compareType": ">=",
                    "value2": 1,
                    "contextScope": "ContextTaskTemplate"
                  },
                  "passed": [
                    {
                      "name": "Deal Toughness DMG",
                      "value": {
                        "displayLines": "(check(value:(IsForceStanceDamage === 1), then:ENEMIES_OBJECT_UNUSED__310, else:ENEMIES_OBJECT_UNUSED__312) * (1 + ENEMIES_OBJECT_UNUSED__313))"
                      },
                      "attacker": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "forceReduction": true,
                      "canDelay": true,
                      "ToughnessDMGType": {
                        "name": "Damage Type Source",
                        "sourceType": "ReadTargetType",
                        "readTarget": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        }
                      }
                    }
                  ],
                  "failed": [
                    {
                      "name": "Deal Toughness DMG",
                      "value": {
                        "displayLines": "(check(value:(IsForceStanceDamage === 1), then:ENEMIES_OBJECT_UNUSED__310, else:ENEMIES_OBJECT_UNUSED__312) * (1 + ENEMIES_OBJECT_UNUSED__313))"
                      },
                      "attacker": {
                        "name": "Target Name",
                        "target": "{{Modifier Holder}}"
                      },
                      "canDelay": true,
                      "ToughnessDMGType": {
                        "name": "Damage Type Source",
                        "sourceType": "ReadTargetType",
                        "readTarget": {
                          "name": "Target Name",
                          "target": "{{Modifier Holder}}"
                        }
                      }
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "value1": "Target__Toughness",
                    "compareType": ">",
                    "value2": 0
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