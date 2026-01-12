const configAbility = {
  "fileName": "Qingque_QingQue_Ability01_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "IF",
      "conditions": {
        "name": "Compare: Variable",
        "value1": "QingQue_CardCount",
        "compareType": "=",
        "value2": 1
      },
      "passed": [
        {
          "name": "Remove Events/Bonuses",
          "to": "Caster",
          "modifier": "QingQue_Passive_Tiao"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": "Caster",
          "modifier": "QingQue_Passive_Tong"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": "Caster",
          "modifier": "QingQue_Passive_Wan"
        },
        {
          "name": "Define Custom Variable",
          "variableName": "QingQue_Tiao",
          "value": 0
        },
        {
          "name": "Define Custom Variable",
          "variableName": "QingQue_Tong",
          "value": 0
        },
        {
          "name": "Define Custom Variable",
          "variableName": "QingQue_Wan",
          "value": 0
        },
        {
          "name": "Define Custom Variable",
          "variableName": "QingQue_CardCount",
          "value": 0
        }
      ],
      "failed": [
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "QingQue_CardCount",
            "compareType": "=",
            "value2": 2
          },
          "passed": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "QingQue_Tong",
                "compareType": "=",
                "value2": 1
              },
              "passed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "QingQue_Wan",
                    "compareType": "=",
                    "value2": 1
                  },
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Random Chance",
                        "chance": 0.5
                      },
                      "passed": [
                        {
                          "name": "Remove Events/Bonuses",
                          "to": "Caster",
                          "modifier": "QingQue_Passive_Wan"
                        },
                        {
                          "name": "Define Custom Variable",
                          "variableName": "QingQue_Wan",
                          "value": {
                            "operator": "Variables[0] (QingQue_Wan) || Constants[0] (1) || SUB || RETURN",
                            "displayLines": "(QingQue_Wan - 1)",
                            "constants": [
                              1
                            ],
                            "variables": [
                              "QingQue_Wan"
                            ]
                          }
                        }
                      ],
                      "failed": [
                        {
                          "name": "Remove Events/Bonuses",
                          "to": "Caster",
                          "modifier": "QingQue_Passive_Tong"
                        },
                        {
                          "name": "Define Custom Variable",
                          "variableName": "QingQue_Tong",
                          "value": {
                            "operator": "Variables[0] (QingQue_Tong) || Constants[0] (1) || SUB || RETURN",
                            "displayLines": "(QingQue_Tong - 1)",
                            "constants": [
                              1
                            ],
                            "variables": [
                              "QingQue_Tong"
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
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "QingQue_Tiao",
                "compareType": "=",
                "value2": 1
              },
              "passed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "QingQue_Wan",
                    "compareType": "=",
                    "value2": 1
                  },
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Random Chance",
                        "chance": 0.5
                      },
                      "passed": [
                        {
                          "name": "Remove Events/Bonuses",
                          "to": "Caster",
                          "modifier": "QingQue_Passive_Wan"
                        },
                        {
                          "name": "Define Custom Variable",
                          "variableName": "QingQue_Wan",
                          "value": 0
                        }
                      ],
                      "failed": [
                        {
                          "name": "Remove Events/Bonuses",
                          "to": "Caster",
                          "modifier": "QingQue_Passive_Tiao"
                        },
                        {
                          "name": "Define Custom Variable",
                          "variableName": "QingQue_Tiao",
                          "value": 0
                        }
                      ]
                    }
                  ],
                  "failed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "QingQue_Tong",
                        "compareType": "=",
                        "value2": 1
                      },
                      "passed": [
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Random Chance",
                            "chance": 0.5
                          },
                          "passed": [
                            {
                              "name": "Remove Events/Bonuses",
                              "to": "Caster",
                              "modifier": "QingQue_Passive_Tong"
                            },
                            {
                              "name": "Define Custom Variable",
                              "variableName": "QingQue_Tong",
                              "value": 0
                            }
                          ],
                          "failed": [
                            {
                              "name": "Remove Events/Bonuses",
                              "to": "Caster",
                              "modifier": "QingQue_Passive_Tiao"
                            },
                            {
                              "name": "Define Custom Variable",
                              "variableName": "QingQue_Tiao",
                              "value": 0
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
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "QingQue_Wan",
                "compareType": "=",
                "value2": 2
              },
              "passed": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": "Caster",
                  "modifier": "QingQue_Passive_Wan"
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "QingQue_Wan",
                  "value": {
                    "operator": "Variables[0] (QingQue_Wan) || Constants[0] (1) || SUB || RETURN",
                    "displayLines": "(QingQue_Wan - 1)",
                    "constants": [
                      1
                    ],
                    "variables": [
                      "QingQue_Wan"
                    ]
                  }
                }
              ]
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "QingQue_Tong",
                "compareType": "=",
                "value2": 2
              },
              "passed": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": "Caster",
                  "modifier": "QingQue_Passive_Tong"
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "QingQue_Tong",
                  "value": {
                    "operator": "Variables[0] (QingQue_Tong) || Constants[0] (1) || SUB || RETURN",
                    "displayLines": "(QingQue_Tong - 1)",
                    "constants": [
                      1
                    ],
                    "variables": [
                      "QingQue_Tong"
                    ]
                  }
                }
              ]
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "QingQue_Tiao",
                "compareType": "=",
                "value2": 2
              },
              "passed": [
                {
                  "name": "Remove Events/Bonuses",
                  "to": "Caster",
                  "modifier": "QingQue_Passive_Tiao"
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "QingQue_Tiao",
                  "value": {
                    "operator": "Variables[0] (QingQue_Tiao) || Constants[0] (1) || SUB || RETURN",
                    "displayLines": "(QingQue_Tiao - 1)",
                    "constants": [
                      1
                    ],
                    "variables": [
                      "QingQue_Tiao"
                    ]
                  }
                }
              ]
            },
            {
              "name": "Define Custom Variable",
              "variableName": "QingQue_CardCount",
              "value": {
                "operator": "Variables[0] (QingQue_CardCount) || Constants[0] (1) || SUB || RETURN",
                "displayLines": "(QingQue_CardCount - 1)",
                "constants": [
                  1
                ],
                "variables": [
                  "QingQue_CardCount"
                ]
              }
            }
          ],
          "failed": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "QingQue_CardCount",
                "compareType": "=",
                "value2": 3
              },
              "passed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "QingQue_Tong",
                    "compareType": "=",
                    "value2": 0
                  },
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "QingQue_Wan",
                        "compareType": "=",
                        "value2": 0
                      },
                      "passed": [
                        {
                          "name": "Remove Events/Bonuses",
                          "to": "Caster",
                          "modifier": "QingQue_Passive_Tiao"
                        },
                        {
                          "name": "Define Custom Variable",
                          "variableName": "QingQue_Tiao",
                          "value": {
                            "operator": "Variables[0] (QingQue_Tiao) || Constants[0] (1) || SUB || RETURN",
                            "displayLines": "(QingQue_Tiao - 1)",
                            "constants": [
                              1
                            ],
                            "variables": [
                              "QingQue_Tiao"
                            ]
                          }
                        }
                      ]
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "QingQue_Wan",
                        "compareType": "=",
                        "value2": 1
                      },
                      "passed": [
                        {
                          "name": "Remove Events/Bonuses",
                          "to": "Caster",
                          "modifier": "QingQue_Passive_Wan"
                        },
                        {
                          "name": "Define Custom Variable",
                          "variableName": "QingQue_Wan",
                          "value": {
                            "operator": "Variables[0] (QingQue_Wan) || Constants[0] (1) || SUB || RETURN",
                            "displayLines": "(QingQue_Wan - 1)",
                            "constants": [
                              1
                            ],
                            "variables": [
                              "QingQue_Wan"
                            ]
                          }
                        }
                      ]
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "QingQue_Wan",
                        "compareType": "=",
                        "value2": 2
                      },
                      "passed": [
                        {
                          "name": "Remove Events/Bonuses",
                          "to": "Caster",
                          "modifier": "QingQue_Passive_Tiao"
                        },
                        {
                          "name": "Define Custom Variable",
                          "variableName": "QingQue_Tiao",
                          "value": {
                            "operator": "Variables[0] (QingQue_Tiao) || Constants[0] (1) || SUB || RETURN",
                            "displayLines": "(QingQue_Tiao - 1)",
                            "constants": [
                              1
                            ],
                            "variables": [
                              "QingQue_Tiao"
                            ]
                          }
                        }
                      ]
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "QingQue_Wan",
                        "compareType": "=",
                        "value2": 3
                      },
                      "passed": [
                        {
                          "name": "Remove Events/Bonuses",
                          "to": "Caster",
                          "modifier": "QingQue_Passive_Wan"
                        },
                        {
                          "name": "Define Custom Variable",
                          "variableName": "QingQue_Wan",
                          "value": {
                            "operator": "Variables[0] (QingQue_Wan) || Constants[0] (1) || SUB || RETURN",
                            "displayLines": "(QingQue_Wan - 1)",
                            "constants": [
                              1
                            ],
                            "variables": [
                              "QingQue_Wan"
                            ]
                          }
                        }
                      ]
                    }
                  ],
                  "failed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "QingQue_Tiao",
                        "compareType": "=",
                        "value2": 0
                      },
                      "passed": [
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Compare: Variable",
                            "value1": "QingQue_Wan",
                            "compareType": "=",
                            "value2": 0
                          },
                          "passed": [
                            {
                              "name": "Remove Events/Bonuses",
                              "to": "Caster",
                              "modifier": "QingQue_Passive_Tong"
                            },
                            {
                              "name": "Define Custom Variable",
                              "variableName": "QingQue_Tong",
                              "value": {
                                "operator": "Variables[0] (QingQue_Tong) || Constants[0] (1) || SUB || RETURN",
                                "displayLines": "(QingQue_Tong - 1)",
                                "constants": [
                                  1
                                ],
                                "variables": [
                                  "QingQue_Tong"
                                ]
                              }
                            }
                          ]
                        },
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Compare: Variable",
                            "value1": "QingQue_Wan",
                            "compareType": "=",
                            "value2": 1
                          },
                          "passed": [
                            {
                              "name": "Remove Events/Bonuses",
                              "to": "Caster",
                              "modifier": "QingQue_Passive_Wan"
                            },
                            {
                              "name": "Define Custom Variable",
                              "variableName": "QingQue_Wan",
                              "value": {
                                "operator": "Variables[0] (QingQue_Wan) || Constants[0] (1) || SUB || RETURN",
                                "displayLines": "(QingQue_Wan - 1)",
                                "constants": [
                                  1
                                ],
                                "variables": [
                                  "QingQue_Wan"
                                ]
                              }
                            }
                          ]
                        },
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Compare: Variable",
                            "value1": "QingQue_Wan",
                            "compareType": "=",
                            "value2": 2
                          },
                          "passed": [
                            {
                              "name": "Remove Events/Bonuses",
                              "to": "Caster",
                              "modifier": "QingQue_Passive_Tong"
                            },
                            {
                              "name": "Define Custom Variable",
                              "variableName": "QingQue_Tong",
                              "value": {
                                "operator": "Variables[0] (QingQue_Tong) || Constants[0] (1) || SUB || RETURN",
                                "displayLines": "(QingQue_Tong - 1)",
                                "constants": [
                                  1
                                ],
                                "variables": [
                                  "QingQue_Tong"
                                ]
                              }
                            }
                          ]
                        },
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Compare: Variable",
                            "value1": "QingQue_Wan",
                            "compareType": "=",
                            "value2": 3
                          },
                          "passed": [
                            {
                              "name": "Remove Events/Bonuses",
                              "to": "Caster",
                              "modifier": "QingQue_Passive_Wan"
                            },
                            {
                              "name": "Define Custom Variable",
                              "variableName": "QingQue_Wan",
                              "value": {
                                "operator": "Variables[0] (QingQue_Wan) || Constants[0] (1) || SUB || RETURN",
                                "displayLines": "(QingQue_Wan - 1)",
                                "constants": [
                                  1
                                ],
                                "variables": [
                                  "QingQue_Wan"
                                ]
                              }
                            }
                          ]
                        }
                      ],
                      "failed": [
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Compare: Variable",
                            "value1": "QingQue_Wan",
                            "compareType": "=",
                            "value2": 0
                          },
                          "passed": [
                            {
                              "name": "IF",
                              "conditions": {
                                "name": "Compare: Variable",
                                "value1": "QingQue_Tiao",
                                "compareType": "=",
                                "value2": 0
                              },
                              "passed": [
                                {
                                  "name": "Remove Events/Bonuses",
                                  "to": "Caster",
                                  "modifier": "QingQue_Passive_Tong"
                                },
                                {
                                  "name": "Define Custom Variable",
                                  "variableName": "QingQue_Tong",
                                  "value": {
                                    "operator": "Variables[0] (QingQue_Tong) || Constants[0] (1) || SUB || RETURN",
                                    "displayLines": "(QingQue_Tong - 1)",
                                    "constants": [
                                      1
                                    ],
                                    "variables": [
                                      "QingQue_Tong"
                                    ]
                                  }
                                }
                              ]
                            },
                            {
                              "name": "IF",
                              "conditions": {
                                "name": "Compare: Variable",
                                "value1": "QingQue_Tiao",
                                "compareType": "=",
                                "value2": 1
                              },
                              "passed": [
                                {
                                  "name": "Remove Events/Bonuses",
                                  "to": "Caster",
                                  "modifier": "QingQue_Passive_Tiao"
                                },
                                {
                                  "name": "Define Custom Variable",
                                  "variableName": "QingQue_Tiao",
                                  "value": {
                                    "operator": "Variables[0] (QingQue_Tiao) || Constants[0] (1) || SUB || RETURN",
                                    "displayLines": "(QingQue_Tiao - 1)",
                                    "constants": [
                                      1
                                    ],
                                    "variables": [
                                      "QingQue_Tiao"
                                    ]
                                  }
                                }
                              ]
                            },
                            {
                              "name": "IF",
                              "conditions": {
                                "name": "Compare: Variable",
                                "value1": "QingQue_Tiao",
                                "compareType": "=",
                                "value2": 2
                              },
                              "passed": [
                                {
                                  "name": "Remove Events/Bonuses",
                                  "to": "Caster",
                                  "modifier": "QingQue_Passive_Tong"
                                },
                                {
                                  "name": "Define Custom Variable",
                                  "variableName": "QingQue_Tong",
                                  "value": {
                                    "operator": "Variables[0] (QingQue_Tong) || Constants[0] (1) || SUB || RETURN",
                                    "displayLines": "(QingQue_Tong - 1)",
                                    "constants": [
                                      1
                                    ],
                                    "variables": [
                                      "QingQue_Tong"
                                    ]
                                  }
                                }
                              ]
                            },
                            {
                              "name": "IF",
                              "conditions": {
                                "name": "Compare: Variable",
                                "value1": "QingQue_Tiao",
                                "compareType": "=",
                                "value2": 3
                              },
                              "passed": [
                                {
                                  "name": "Remove Events/Bonuses",
                                  "to": "Caster",
                                  "modifier": "QingQue_Passive_Tiao"
                                },
                                {
                                  "name": "Define Custom Variable",
                                  "variableName": "QingQue_Tiao",
                                  "value": {
                                    "operator": "Variables[0] (QingQue_Tiao) || Constants[0] (1) || SUB || RETURN",
                                    "displayLines": "(QingQue_Tiao - 1)",
                                    "constants": [
                                      1
                                    ],
                                    "variables": [
                                      "QingQue_Tiao"
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
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "QingQue_Wan",
                    "compareType": "=",
                    "value2": 1
                  },
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "QingQue_Tiao",
                        "compareType": "=",
                        "value2": 1
                      },
                      "passed": [
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Compare: Variable",
                            "value1": "QingQue_Tong",
                            "compareType": "=",
                            "value2": 1
                          },
                          "passed": [
                            {
                              "name": "IF",
                              "conditions": {
                                "name": "Random Chance",
                                "chance": 0.34
                              },
                              "passed": [
                                {
                                  "name": "Remove Events/Bonuses",
                                  "to": "Caster",
                                  "modifier": "QingQue_Passive_Wan"
                                },
                                {
                                  "name": "Define Custom Variable",
                                  "variableName": "QingQue_Wan",
                                  "value": {
                                    "operator": "Variables[0] (QingQue_Wan) || Constants[0] (1) || SUB || RETURN",
                                    "displayLines": "(QingQue_Wan - 1)",
                                    "constants": [
                                      1
                                    ],
                                    "variables": [
                                      "QingQue_Wan"
                                    ]
                                  }
                                }
                              ],
                              "failed": [
                                {
                                  "name": "IF",
                                  "conditions": {
                                    "name": "Random Chance",
                                    "chance": 0.5
                                  },
                                  "passed": [
                                    {
                                      "name": "Remove Events/Bonuses",
                                      "to": "Caster",
                                      "modifier": "QingQue_Passive_Tiao"
                                    },
                                    {
                                      "name": "Define Custom Variable",
                                      "variableName": "QingQue_Tiao",
                                      "value": {
                                        "operator": "Variables[0] (QingQue_Tiao) || Constants[0] (1) || SUB || RETURN",
                                        "displayLines": "(QingQue_Tiao - 1)",
                                        "constants": [
                                          1
                                        ],
                                        "variables": [
                                          "QingQue_Tiao"
                                        ]
                                      }
                                    }
                                  ],
                                  "failed": [
                                    {
                                      "name": "Remove Events/Bonuses",
                                      "to": "Caster",
                                      "modifier": "QingQue_Passive_Tong"
                                    },
                                    {
                                      "name": "Define Custom Variable",
                                      "variableName": "QingQue_Tong",
                                      "value": {
                                        "operator": "Variables[0] (QingQue_Tong) || Constants[0] (1) || SUB || RETURN",
                                        "displayLines": "(QingQue_Tong - 1)",
                                        "constants": [
                                          1
                                        ],
                                        "variables": [
                                          "QingQue_Tong"
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
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "QingQue_CardCount",
                  "value": {
                    "operator": "Variables[0] (QingQue_CardCount) || Constants[0] (1) || SUB || RETURN",
                    "displayLines": "(QingQue_CardCount - 1)",
                    "constants": [
                      1
                    ],
                    "variables": [
                      "QingQue_CardCount"
                    ]
                  }
                }
              ],
              "failed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "QingQue_CardCount",
                    "compareType": "=",
                    "value2": 4
                  },
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "QingQue_Tong",
                        "compareType": "=",
                        "value2": 3
                      },
                      "passed": [
                        {
                          "name": "Remove Events/Bonuses",
                          "to": "Caster",
                          "modifier": "QingQue_Passive_Wan"
                        },
                        {
                          "name": "Define Custom Variable",
                          "variableName": "QingQue_Wan",
                          "value": 0
                        },
                        {
                          "name": "Remove Events/Bonuses",
                          "to": "Caster",
                          "modifier": "QingQue_Passive_Tiao"
                        },
                        {
                          "name": "Define Custom Variable",
                          "variableName": "QingQue_Tiao",
                          "value": 0
                        }
                      ],
                      "failed": [
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Compare: Variable",
                            "value1": "QingQue_Tiao",
                            "compareType": "=",
                            "value2": 3
                          },
                          "passed": [
                            {
                              "name": "Remove Events/Bonuses",
                              "to": "Caster",
                              "modifier": "QingQue_Passive_Wan"
                            },
                            {
                              "name": "Define Custom Variable",
                              "variableName": "QingQue_Wan",
                              "value": 0
                            },
                            {
                              "name": "Remove Events/Bonuses",
                              "to": "Caster",
                              "modifier": "QingQue_Passive_Tong"
                            },
                            {
                              "name": "Define Custom Variable",
                              "variableName": "QingQue_Tong",
                              "value": 0
                            }
                          ],
                          "failed": [
                            {
                              "name": "IF",
                              "conditions": {
                                "name": "Compare: Variable",
                                "value1": "QingQue_Wan",
                                "compareType": "=",
                                "value2": 3
                              },
                              "passed": [
                                {
                                  "name": "Remove Events/Bonuses",
                                  "to": "Caster",
                                  "modifier": "QingQue_Passive_Tiao"
                                },
                                {
                                  "name": "Define Custom Variable",
                                  "variableName": "QingQue_Tiao",
                                  "value": 0
                                },
                                {
                                  "name": "Remove Events/Bonuses",
                                  "to": "Caster",
                                  "modifier": "QingQue_Passive_Tong"
                                },
                                {
                                  "name": "Define Custom Variable",
                                  "variableName": "QingQue_Tong",
                                  "value": 0
                                }
                              ]
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "QingQue_Tong",
                        "compareType": "=",
                        "value2": 2
                      },
                      "passed": [
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Compare: Variable",
                            "value1": "QingQue_Tiao",
                            "compareType": "=",
                            "value2": 1
                          },
                          "passed": [
                            {
                              "name": "IF",
                              "conditions": {
                                "name": "Random Chance",
                                "chance": 0.5
                              },
                              "passed": [
                                {
                                  "name": "Remove Events/Bonuses",
                                  "to": "Caster",
                                  "modifier": "QingQue_Passive_Wan"
                                },
                                {
                                  "name": "Define Custom Variable",
                                  "variableName": "QingQue_Wan",
                                  "value": 0
                                }
                              ],
                              "failed": [
                                {
                                  "name": "Remove Events/Bonuses",
                                  "to": "Caster",
                                  "modifier": "QingQue_Passive_Tiao"
                                },
                                {
                                  "name": "Define Custom Variable",
                                  "variableName": "QingQue_Tiao",
                                  "value": 0
                                }
                              ]
                            }
                          ]
                        },
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Compare: Variable",
                            "value1": "QingQue_Tiao",
                            "compareType": "=",
                            "value2": 2
                          },
                          "passed": [
                            {
                              "name": "IF",
                              "conditions": {
                                "name": "Random Chance",
                                "chance": 0.5
                              },
                              "passed": [
                                {
                                  "name": "Remove Events/Bonuses",
                                  "to": "Caster",
                                  "modifier": "QingQue_Passive_Tong"
                                },
                                {
                                  "name": "Define Custom Variable",
                                  "variableName": "QingQue_Tong",
                                  "value": 1
                                }
                              ],
                              "failed": [
                                {
                                  "name": "Remove Events/Bonuses",
                                  "to": "Caster",
                                  "modifier": "QingQue_Passive_Tiao"
                                },
                                {
                                  "name": "Define Custom Variable",
                                  "variableName": "QingQue_Tiao",
                                  "value": 1
                                }
                              ]
                            }
                          ]
                        },
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Compare: Variable",
                            "value1": "QingQue_Wan",
                            "compareType": "=",
                            "value2": 2
                          },
                          "passed": [
                            {
                              "name": "IF",
                              "conditions": {
                                "name": "Random Chance",
                                "chance": 0.5
                              },
                              "passed": [
                                {
                                  "name": "Remove Events/Bonuses",
                                  "to": "Caster",
                                  "modifier": "QingQue_Passive_Wan"
                                },
                                {
                                  "name": "Define Custom Variable",
                                  "variableName": "QingQue_Wan",
                                  "value": 1
                                }
                              ],
                              "failed": [
                                {
                                  "name": "Remove Events/Bonuses",
                                  "to": "Caster",
                                  "modifier": "QingQue_Passive_Tong"
                                },
                                {
                                  "name": "Define Custom Variable",
                                  "variableName": "QingQue_Tong",
                                  "value": 1
                                }
                              ]
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "QingQue_Tiao",
                        "compareType": "=",
                        "value2": 2
                      },
                      "passed": [
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Compare: Variable",
                            "value1": "QingQue_Tong",
                            "compareType": "=",
                            "value2": 1
                          },
                          "passed": [
                            {
                              "name": "IF",
                              "conditions": {
                                "name": "Compare: Variable",
                                "value1": "QingQue_Wan",
                                "compareType": "=",
                                "value2": 1
                              },
                              "passed": [
                                {
                                  "name": "IF",
                                  "conditions": {
                                    "name": "Random Chance",
                                    "chance": 0.5
                                  },
                                  "passed": [
                                    {
                                      "name": "Remove Events/Bonuses",
                                      "to": "Caster",
                                      "modifier": "QingQue_Passive_Wan"
                                    },
                                    {
                                      "name": "Define Custom Variable",
                                      "variableName": "QingQue_Wan",
                                      "value": 0
                                    }
                                  ],
                                  "failed": [
                                    {
                                      "name": "Remove Events/Bonuses",
                                      "to": "Caster",
                                      "modifier": "QingQue_Passive_Tong"
                                    },
                                    {
                                      "name": "Define Custom Variable",
                                      "variableName": "QingQue_Tong",
                                      "value": 0
                                    }
                                  ]
                                }
                              ]
                            }
                          ]
                        },
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Compare: Variable",
                            "value1": "QingQue_Wan",
                            "compareType": "=",
                            "value2": 2
                          },
                          "passed": [
                            {
                              "name": "IF",
                              "conditions": {
                                "name": "Random Chance",
                                "chance": 0.5
                              },
                              "passed": [
                                {
                                  "name": "Remove Events/Bonuses",
                                  "to": "Caster",
                                  "modifier": "QingQue_Passive_Wan"
                                },
                                {
                                  "name": "Define Custom Variable",
                                  "variableName": "QingQue_Wan",
                                  "value": 1
                                }
                              ],
                              "failed": [
                                {
                                  "name": "Remove Events/Bonuses",
                                  "to": "Caster",
                                  "modifier": "QingQue_Passive_Tiao"
                                },
                                {
                                  "name": "Define Custom Variable",
                                  "variableName": "QingQue_Tiao",
                                  "value": 1
                                }
                              ]
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "QingQue_Wan",
                        "compareType": "=",
                        "value2": 2
                      },
                      "passed": [
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Compare: Variable",
                            "value1": "QingQue_Tong",
                            "compareType": "=",
                            "value2": 1
                          },
                          "passed": [
                            {
                              "name": "IF",
                              "conditions": {
                                "name": "Compare: Variable",
                                "value1": "QingQue_Tiao",
                                "compareType": "=",
                                "value2": 1
                              },
                              "passed": [
                                {
                                  "name": "IF",
                                  "conditions": {
                                    "name": "Random Chance",
                                    "chance": 0.5
                                  },
                                  "passed": [
                                    {
                                      "name": "Remove Events/Bonuses",
                                      "to": "Caster",
                                      "modifier": "QingQue_Passive_Tong"
                                    },
                                    {
                                      "name": "Define Custom Variable",
                                      "variableName": "QingQue_Tong",
                                      "value": 0
                                    }
                                  ],
                                  "failed": [
                                    {
                                      "name": "Remove Events/Bonuses",
                                      "to": "Caster",
                                      "modifier": "QingQue_Passive_Tiao"
                                    },
                                    {
                                      "name": "Define Custom Variable",
                                      "variableName": "QingQue_Tiao",
                                      "value": 0
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
                      "variableName": "QingQue_CardCount",
                      "value": {
                        "operator": "Variables[0] (QingQue_CardCount) || Constants[0] (1) || SUB || RETURN",
                        "displayLines": "(QingQue_CardCount - 1)",
                        "constants": [
                          1
                        ],
                        "variables": [
                          "QingQue_CardCount"
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
    "Refresh QingQue Bar-State",
    {
      "name": "Shot Fired",
      "execute": [
        {
          "name": "ATK Scaling DMG",
          "target": "Single Target (Primary)",
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
    "Trigger: Ability End"
  ],
  "references": []
}