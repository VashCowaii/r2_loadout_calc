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
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"659202160\">QingQue_Passive_Tiao</a>"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1184170005\">QingQue_Passive_Tong</a>"
        },
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1921510139\">QingQue_Passive_Wan</a>"
        },
        {
          "name": "Define Custom Variable",
          "value": 0,
          "variableName": "QingQue_Tiao"
        },
        {
          "name": "Define Custom Variable",
          "value": 0,
          "variableName": "QingQue_Tong"
        },
        {
          "name": "Define Custom Variable",
          "value": 0,
          "variableName": "QingQue_Wan"
        },
        {
          "name": "Define Custom Variable",
          "value": 0,
          "variableName": "QingQue_CardCount"
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
                          "to": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"1921510139\">QingQue_Passive_Wan</a>"
                        },
                        {
                          "name": "Define Custom Variable",
                          "value": {
                            "displayLines": "(QingQue_Wan - 1)"
                          },
                          "variableName": "QingQue_Wan"
                        }
                      ],
                      "failed": [
                        {
                          "name": "Remove Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"1184170005\">QingQue_Passive_Tong</a>"
                        },
                        {
                          "name": "Define Custom Variable",
                          "value": {
                            "displayLines": "(QingQue_Tong - 1)"
                          },
                          "variableName": "QingQue_Tong"
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
                          "to": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"1921510139\">QingQue_Passive_Wan</a>"
                        },
                        {
                          "name": "Define Custom Variable",
                          "value": 0,
                          "variableName": "QingQue_Wan"
                        }
                      ],
                      "failed": [
                        {
                          "name": "Remove Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"659202160\">QingQue_Passive_Tiao</a>"
                        },
                        {
                          "name": "Define Custom Variable",
                          "value": 0,
                          "variableName": "QingQue_Tiao"
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
                              "to": {
                                "name": "Target Name",
                                "target": "{{Caster}}"
                              },
                              "modifier": "<a class=\"gModGreen\" id=\"1184170005\">QingQue_Passive_Tong</a>"
                            },
                            {
                              "name": "Define Custom Variable",
                              "value": 0,
                              "variableName": "QingQue_Tong"
                            }
                          ],
                          "failed": [
                            {
                              "name": "Remove Events/Bonuses",
                              "to": {
                                "name": "Target Name",
                                "target": "{{Caster}}"
                              },
                              "modifier": "<a class=\"gModGreen\" id=\"659202160\">QingQue_Passive_Tiao</a>"
                            },
                            {
                              "name": "Define Custom Variable",
                              "value": 0,
                              "variableName": "QingQue_Tiao"
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
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1921510139\">QingQue_Passive_Wan</a>"
                },
                {
                  "name": "Define Custom Variable",
                  "value": {
                    "displayLines": "(QingQue_Wan - 1)"
                  },
                  "variableName": "QingQue_Wan"
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
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1184170005\">QingQue_Passive_Tong</a>"
                },
                {
                  "name": "Define Custom Variable",
                  "value": {
                    "displayLines": "(QingQue_Tong - 1)"
                  },
                  "variableName": "QingQue_Tong"
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
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"659202160\">QingQue_Passive_Tiao</a>"
                },
                {
                  "name": "Define Custom Variable",
                  "value": {
                    "displayLines": "(QingQue_Tiao - 1)"
                  },
                  "variableName": "QingQue_Tiao"
                }
              ]
            },
            {
              "name": "Define Custom Variable",
              "value": {
                "displayLines": "(QingQue_CardCount - 1)"
              },
              "variableName": "QingQue_CardCount"
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
                          "to": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"659202160\">QingQue_Passive_Tiao</a>"
                        },
                        {
                          "name": "Define Custom Variable",
                          "value": {
                            "displayLines": "(QingQue_Tiao - 1)"
                          },
                          "variableName": "QingQue_Tiao"
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
                          "to": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"1921510139\">QingQue_Passive_Wan</a>"
                        },
                        {
                          "name": "Define Custom Variable",
                          "value": {
                            "displayLines": "(QingQue_Wan - 1)"
                          },
                          "variableName": "QingQue_Wan"
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
                          "to": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"659202160\">QingQue_Passive_Tiao</a>"
                        },
                        {
                          "name": "Define Custom Variable",
                          "value": {
                            "displayLines": "(QingQue_Tiao - 1)"
                          },
                          "variableName": "QingQue_Tiao"
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
                          "to": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"1921510139\">QingQue_Passive_Wan</a>"
                        },
                        {
                          "name": "Define Custom Variable",
                          "value": {
                            "displayLines": "(QingQue_Wan - 1)"
                          },
                          "variableName": "QingQue_Wan"
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
                              "to": {
                                "name": "Target Name",
                                "target": "{{Caster}}"
                              },
                              "modifier": "<a class=\"gModGreen\" id=\"1184170005\">QingQue_Passive_Tong</a>"
                            },
                            {
                              "name": "Define Custom Variable",
                              "value": {
                                "displayLines": "(QingQue_Tong - 1)"
                              },
                              "variableName": "QingQue_Tong"
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
                              "to": {
                                "name": "Target Name",
                                "target": "{{Caster}}"
                              },
                              "modifier": "<a class=\"gModGreen\" id=\"1921510139\">QingQue_Passive_Wan</a>"
                            },
                            {
                              "name": "Define Custom Variable",
                              "value": {
                                "displayLines": "(QingQue_Wan - 1)"
                              },
                              "variableName": "QingQue_Wan"
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
                              "to": {
                                "name": "Target Name",
                                "target": "{{Caster}}"
                              },
                              "modifier": "<a class=\"gModGreen\" id=\"1184170005\">QingQue_Passive_Tong</a>"
                            },
                            {
                              "name": "Define Custom Variable",
                              "value": {
                                "displayLines": "(QingQue_Tong - 1)"
                              },
                              "variableName": "QingQue_Tong"
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
                              "to": {
                                "name": "Target Name",
                                "target": "{{Caster}}"
                              },
                              "modifier": "<a class=\"gModGreen\" id=\"1921510139\">QingQue_Passive_Wan</a>"
                            },
                            {
                              "name": "Define Custom Variable",
                              "value": {
                                "displayLines": "(QingQue_Wan - 1)"
                              },
                              "variableName": "QingQue_Wan"
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
                                  "to": {
                                    "name": "Target Name",
                                    "target": "{{Caster}}"
                                  },
                                  "modifier": "<a class=\"gModGreen\" id=\"1184170005\">QingQue_Passive_Tong</a>"
                                },
                                {
                                  "name": "Define Custom Variable",
                                  "value": {
                                    "displayLines": "(QingQue_Tong - 1)"
                                  },
                                  "variableName": "QingQue_Tong"
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
                                  "to": {
                                    "name": "Target Name",
                                    "target": "{{Caster}}"
                                  },
                                  "modifier": "<a class=\"gModGreen\" id=\"659202160\">QingQue_Passive_Tiao</a>"
                                },
                                {
                                  "name": "Define Custom Variable",
                                  "value": {
                                    "displayLines": "(QingQue_Tiao - 1)"
                                  },
                                  "variableName": "QingQue_Tiao"
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
                                  "to": {
                                    "name": "Target Name",
                                    "target": "{{Caster}}"
                                  },
                                  "modifier": "<a class=\"gModGreen\" id=\"1184170005\">QingQue_Passive_Tong</a>"
                                },
                                {
                                  "name": "Define Custom Variable",
                                  "value": {
                                    "displayLines": "(QingQue_Tong - 1)"
                                  },
                                  "variableName": "QingQue_Tong"
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
                                  "to": {
                                    "name": "Target Name",
                                    "target": "{{Caster}}"
                                  },
                                  "modifier": "<a class=\"gModGreen\" id=\"659202160\">QingQue_Passive_Tiao</a>"
                                },
                                {
                                  "name": "Define Custom Variable",
                                  "value": {
                                    "displayLines": "(QingQue_Tiao - 1)"
                                  },
                                  "variableName": "QingQue_Tiao"
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
                                  "to": {
                                    "name": "Target Name",
                                    "target": "{{Caster}}"
                                  },
                                  "modifier": "<a class=\"gModGreen\" id=\"1921510139\">QingQue_Passive_Wan</a>"
                                },
                                {
                                  "name": "Define Custom Variable",
                                  "value": {
                                    "displayLines": "(QingQue_Wan - 1)"
                                  },
                                  "variableName": "QingQue_Wan"
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
                                      "to": {
                                        "name": "Target Name",
                                        "target": "{{Caster}}"
                                      },
                                      "modifier": "<a class=\"gModGreen\" id=\"659202160\">QingQue_Passive_Tiao</a>"
                                    },
                                    {
                                      "name": "Define Custom Variable",
                                      "value": {
                                        "displayLines": "(QingQue_Tiao - 1)"
                                      },
                                      "variableName": "QingQue_Tiao"
                                    }
                                  ],
                                  "failed": [
                                    {
                                      "name": "Remove Events/Bonuses",
                                      "to": {
                                        "name": "Target Name",
                                        "target": "{{Caster}}"
                                      },
                                      "modifier": "<a class=\"gModGreen\" id=\"1184170005\">QingQue_Passive_Tong</a>"
                                    },
                                    {
                                      "name": "Define Custom Variable",
                                      "value": {
                                        "displayLines": "(QingQue_Tong - 1)"
                                      },
                                      "variableName": "QingQue_Tong"
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
                  "value": {
                    "displayLines": "(QingQue_CardCount - 1)"
                  },
                  "variableName": "QingQue_CardCount"
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
                          "to": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"1921510139\">QingQue_Passive_Wan</a>"
                        },
                        {
                          "name": "Define Custom Variable",
                          "value": 0,
                          "variableName": "QingQue_Wan"
                        },
                        {
                          "name": "Remove Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"659202160\">QingQue_Passive_Tiao</a>"
                        },
                        {
                          "name": "Define Custom Variable",
                          "value": 0,
                          "variableName": "QingQue_Tiao"
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
                              "to": {
                                "name": "Target Name",
                                "target": "{{Caster}}"
                              },
                              "modifier": "<a class=\"gModGreen\" id=\"1921510139\">QingQue_Passive_Wan</a>"
                            },
                            {
                              "name": "Define Custom Variable",
                              "value": 0,
                              "variableName": "QingQue_Wan"
                            },
                            {
                              "name": "Remove Events/Bonuses",
                              "to": {
                                "name": "Target Name",
                                "target": "{{Caster}}"
                              },
                              "modifier": "<a class=\"gModGreen\" id=\"1184170005\">QingQue_Passive_Tong</a>"
                            },
                            {
                              "name": "Define Custom Variable",
                              "value": 0,
                              "variableName": "QingQue_Tong"
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
                                  "to": {
                                    "name": "Target Name",
                                    "target": "{{Caster}}"
                                  },
                                  "modifier": "<a class=\"gModGreen\" id=\"659202160\">QingQue_Passive_Tiao</a>"
                                },
                                {
                                  "name": "Define Custom Variable",
                                  "value": 0,
                                  "variableName": "QingQue_Tiao"
                                },
                                {
                                  "name": "Remove Events/Bonuses",
                                  "to": {
                                    "name": "Target Name",
                                    "target": "{{Caster}}"
                                  },
                                  "modifier": "<a class=\"gModGreen\" id=\"1184170005\">QingQue_Passive_Tong</a>"
                                },
                                {
                                  "name": "Define Custom Variable",
                                  "value": 0,
                                  "variableName": "QingQue_Tong"
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
                                  "to": {
                                    "name": "Target Name",
                                    "target": "{{Caster}}"
                                  },
                                  "modifier": "<a class=\"gModGreen\" id=\"1921510139\">QingQue_Passive_Wan</a>"
                                },
                                {
                                  "name": "Define Custom Variable",
                                  "value": 0,
                                  "variableName": "QingQue_Wan"
                                }
                              ],
                              "failed": [
                                {
                                  "name": "Remove Events/Bonuses",
                                  "to": {
                                    "name": "Target Name",
                                    "target": "{{Caster}}"
                                  },
                                  "modifier": "<a class=\"gModGreen\" id=\"659202160\">QingQue_Passive_Tiao</a>"
                                },
                                {
                                  "name": "Define Custom Variable",
                                  "value": 0,
                                  "variableName": "QingQue_Tiao"
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
                                  "to": {
                                    "name": "Target Name",
                                    "target": "{{Caster}}"
                                  },
                                  "modifier": "<a class=\"gModGreen\" id=\"1184170005\">QingQue_Passive_Tong</a>"
                                },
                                {
                                  "name": "Define Custom Variable",
                                  "value": 1,
                                  "variableName": "QingQue_Tong"
                                }
                              ],
                              "failed": [
                                {
                                  "name": "Remove Events/Bonuses",
                                  "to": {
                                    "name": "Target Name",
                                    "target": "{{Caster}}"
                                  },
                                  "modifier": "<a class=\"gModGreen\" id=\"659202160\">QingQue_Passive_Tiao</a>"
                                },
                                {
                                  "name": "Define Custom Variable",
                                  "value": 1,
                                  "variableName": "QingQue_Tiao"
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
                                  "to": {
                                    "name": "Target Name",
                                    "target": "{{Caster}}"
                                  },
                                  "modifier": "<a class=\"gModGreen\" id=\"1921510139\">QingQue_Passive_Wan</a>"
                                },
                                {
                                  "name": "Define Custom Variable",
                                  "value": 1,
                                  "variableName": "QingQue_Wan"
                                }
                              ],
                              "failed": [
                                {
                                  "name": "Remove Events/Bonuses",
                                  "to": {
                                    "name": "Target Name",
                                    "target": "{{Caster}}"
                                  },
                                  "modifier": "<a class=\"gModGreen\" id=\"1184170005\">QingQue_Passive_Tong</a>"
                                },
                                {
                                  "name": "Define Custom Variable",
                                  "value": 1,
                                  "variableName": "QingQue_Tong"
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
                                      "to": {
                                        "name": "Target Name",
                                        "target": "{{Caster}}"
                                      },
                                      "modifier": "<a class=\"gModGreen\" id=\"1921510139\">QingQue_Passive_Wan</a>"
                                    },
                                    {
                                      "name": "Define Custom Variable",
                                      "value": 0,
                                      "variableName": "QingQue_Wan"
                                    }
                                  ],
                                  "failed": [
                                    {
                                      "name": "Remove Events/Bonuses",
                                      "to": {
                                        "name": "Target Name",
                                        "target": "{{Caster}}"
                                      },
                                      "modifier": "<a class=\"gModGreen\" id=\"1184170005\">QingQue_Passive_Tong</a>"
                                    },
                                    {
                                      "name": "Define Custom Variable",
                                      "value": 0,
                                      "variableName": "QingQue_Tong"
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
                                  "to": {
                                    "name": "Target Name",
                                    "target": "{{Caster}}"
                                  },
                                  "modifier": "<a class=\"gModGreen\" id=\"1921510139\">QingQue_Passive_Wan</a>"
                                },
                                {
                                  "name": "Define Custom Variable",
                                  "value": 1,
                                  "variableName": "QingQue_Wan"
                                }
                              ],
                              "failed": [
                                {
                                  "name": "Remove Events/Bonuses",
                                  "to": {
                                    "name": "Target Name",
                                    "target": "{{Caster}}"
                                  },
                                  "modifier": "<a class=\"gModGreen\" id=\"659202160\">QingQue_Passive_Tiao</a>"
                                },
                                {
                                  "name": "Define Custom Variable",
                                  "value": 1,
                                  "variableName": "QingQue_Tiao"
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
                                      "to": {
                                        "name": "Target Name",
                                        "target": "{{Caster}}"
                                      },
                                      "modifier": "<a class=\"gModGreen\" id=\"1184170005\">QingQue_Passive_Tong</a>"
                                    },
                                    {
                                      "name": "Define Custom Variable",
                                      "value": 0,
                                      "variableName": "QingQue_Tong"
                                    }
                                  ],
                                  "failed": [
                                    {
                                      "name": "Remove Events/Bonuses",
                                      "to": {
                                        "name": "Target Name",
                                        "target": "{{Caster}}"
                                      },
                                      "modifier": "<a class=\"gModGreen\" id=\"659202160\">QingQue_Passive_Tiao</a>"
                                    },
                                    {
                                      "name": "Define Custom Variable",
                                      "value": 0,
                                      "variableName": "QingQue_Tiao"
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
                      "value": {
                        "displayLines": "(QingQue_CardCount - 1)"
                      },
                      "variableName": "QingQue_CardCount"
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
          "target": {
            "name": "Target Name",
            "target": "{{Ability Target(ST)}}"
          },
          "AttackScaling": {
            "DamageType": "Quantum",
            "Damage": {
              "displayLines": "1"
            },
            "Toughness": {
              "displayLines": "ST Toughness Value"
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
  "references": [],
  "targetObjectData": {
    "primaryTarget": "{{Ability Target List}}"
  }
}