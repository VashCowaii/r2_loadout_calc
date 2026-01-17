const configAbility = {
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
}