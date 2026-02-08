const configAbility = {
  "fileName": "2004014_Monster_Boss_Kafka_IF_Summon_Death_Insert",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "IF",
      "conditions": {
        "name": "Compare: Ability Value",
        "target": {
          "name": "Target Name",
          "target": "{{Caster's Summoner}}"
        },
        "value1": "&nbsp;<span class=\"descriptionNumberColor\">HPCurrent</span>&nbsp;",
        "compareType": ">",
        "value2": 0
      },
      "passed": [
        "Deleted bullshit",
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Sequence",
            "Sequence": [
              {
                "name": "Target Name",
                "target": "{{Enemy Team All}}"
              },
              {
                "name": "Target Filter",
                "conditions": {
                  "name": "Compare: Target",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "target2": {
                    "name": "Target Name",
                    "target": "{{Caster's Summoner}}"
                  },
                  "invertCondition": true
                }
              }
            ]
          },
          "searchRandom": true,
          "includeDyingTargets": true,
          "conditions": {
            "name": "Compare: Ability Value",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "value1": "&nbsp;<span class=\"descriptionNumberColor\">HPCurrent</span>&nbsp;",
            "compareType": "<=",
            "value2": 0
          },
          "ifTargetFound": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster's Summoner}}"
                },
                "value1": "HP_Bars_Remaining",
                "compareType": "=",
                "value2": 1
              },
              "passed": [
                {
                  "name": "Animation Event",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "state": "Die",
                  "passed": [
                    {
                      "name": "Animation Task"
                    },
                    {
                      "name": "Animation Task"
                    },
                    {
                      "name": "Animation Task",
                      "passed": [
                        {
                          "name": "Find New Target",
                          "from": {
                            "name": "Target Sequence",
                            "Sequence": [
                              {
                                "name": "Target Name",
                                "target": "{{Enemy Team All}}"
                              },
                              {
                                "name": "Target Filter",
                                "conditions": {
                                  "name": "Compare: Target",
                                  "target": {
                                    "name": "Target Name",
                                    "target": "{{Parameter Target}}"
                                  },
                                  "target2": {
                                    "name": "Target Name",
                                    "target": "{{Caster's Summoner}}"
                                  },
                                  "invertCondition": true
                                }
                              }
                            ]
                          },
                          "searchRandom": true,
                          "ifTargetFound": [
                            {
                              "name": "IF",
                              "conditions": {
                                "name": "Has Modifier",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Parameter Target}}"
                                },
                                "modifier": "<a class=\"gModGreen\" id=\"849374917\">Enemy_W2_Kafka_IF_Weakness_Fire</a>",
                                "invertCondition": true
                              }
                            },
                            {
                              "name": "IF",
                              "conditions": {
                                "name": "Has Modifier",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Parameter Target}}"
                                },
                                "modifier": "<a class=\"gModGreen\" id=\"267014068\">Enemy_W2_Kafka_IF_Weakness_Physical</a>",
                                "invertCondition": true
                              }
                            }
                          ]
                        },
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "AND",
                            "conditionList": [
                              {
                                "name": "Compare: Variable",
                                "target": {
                                  "name": "Target Sequence",
                                  "Sequence": [
                                    {
                                      "name": "Target Name",
                                      "target": "{{Enemy Team All}}"
                                    },
                                    {
                                      "name": "Target Filter",
                                      "conditions": {
                                        "name": "Compare: Target",
                                        "target": {
                                          "name": "Target Name",
                                          "target": "{{Parameter Target}}"
                                        },
                                        "target2": {
                                          "name": "Target Name",
                                          "target": "{{Caster's Summoner}}"
                                        },
                                        "invertCondition": true
                                      }
                                    }
                                  ]
                                },
                                "value1": "TeamCharacterCount",
                                "compareType": "=",
                                "value2": 0
                              }
                            ]
                          }
                        }
                      ]
                    },
                    {
                      "name": "Animation Task",
                      "passed": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Caster's Summoner}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"-1225888494\">Enemy_W2_Cocolia_IF_SummonDie</a>"
                        },
                        {
                          "name": "Find New Target",
                          "from": {
                            "name": "Target Sequence",
                            "Sequence": [
                              {
                                "name": "Target Name",
                                "target": "{{Enemy Team All}}"
                              },
                              {
                                "name": "Target Filter",
                                "conditions": {
                                  "name": "Compare: Target",
                                  "target": {
                                    "name": "Target Name",
                                    "target": "{{Parameter Target}}"
                                  },
                                  "target2": {
                                    "name": "Target Name",
                                    "target": "{{Caster's Summoner}}"
                                  },
                                  "invertCondition": true
                                }
                              }
                            ]
                          },
                          "searchRandom": true,
                          "ifTargetFound": [
                            {
                              "name": "IF",
                              "conditions": {
                                "name": "Has Modifier",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Parameter Target}}"
                                },
                                "modifier": "<a class=\"gModGreen\" id=\"849374917\">Enemy_W2_Kafka_IF_Weakness_Fire</a>",
                                "invertCondition": true
                              },
                              "passed": [
                                {
                                  "name": "Add Events/Bonuses",
                                  "to": {
                                    "name": "Target Name",
                                    "target": "{{Parameter Target}}"
                                  },
                                  "modifier": "<a class=\"gModGreen\" id=\"849374917\">Enemy_W2_Kafka_IF_Weakness_Fire</a>"
                                },
                                {
                                  "name": "Add Events/Bonuses",
                                  "to": {
                                    "name": "Target Name",
                                    "target": "{{Parameter Target}}"
                                  },
                                  "modifier": "<a class=\"gModGreen\" id=\"-1358847221\">Enemy_W2_Kafka_IF_Weakness_Wind</a>"
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
                                "modifier": "<a class=\"gModGreen\" id=\"267014068\">Enemy_W2_Kafka_IF_Weakness_Physical</a>",
                                "invertCondition": true
                              },
                              "passed": [
                                {
                                  "name": "Add Events/Bonuses",
                                  "to": {
                                    "name": "Target Name",
                                    "target": "{{Parameter Target}}"
                                  },
                                  "modifier": "<a class=\"gModGreen\" id=\"267014068\">Enemy_W2_Kafka_IF_Weakness_Physical</a>"
                                },
                                {
                                  "name": "Add Events/Bonuses",
                                  "to": {
                                    "name": "Target Name",
                                    "target": "{{Parameter Target}}"
                                  },
                                  "modifier": "<a class=\"gModGreen\" id=\"1168051970\">Enemy_W2_Kafka_IF_Weakness_Imaginary</a>"
                                }
                              ]
                            }
                          ]
                        },
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "AND",
                            "conditionList": [
                              {
                                "name": "Compare: Variable",
                                "target": {
                                  "name": "Target Sequence",
                                  "Sequence": [
                                    {
                                      "name": "Target Name",
                                      "target": "{{Enemy Team All}}"
                                    },
                                    {
                                      "name": "Target Filter",
                                      "conditions": {
                                        "name": "Compare: Target",
                                        "target": {
                                          "name": "Target Name",
                                          "target": "{{Parameter Target}}"
                                        },
                                        "target2": {
                                          "name": "Target Name",
                                          "target": "{{Caster's Summoner}}"
                                        },
                                        "invertCondition": true
                                      }
                                    }
                                  ]
                                },
                                "value1": "TeamCharacterCount",
                                "compareType": "=",
                                "value2": 0
                              }
                            ]
                          },
                          "passed": [
                            {
                              "name": "Add Events/Bonuses",
                              "to": {
                                "name": "Target Name",
                                "target": "{{Caster's Summoner}}"
                              },
                              "modifier": "<a class=\"gModGreen\" id=\"267014068\">Enemy_W2_Kafka_IF_Weakness_Physical</a>"
                            },
                            {
                              "name": "Add Events/Bonuses",
                              "to": {
                                "name": "Target Name",
                                "target": "{{Caster's Summoner}}"
                              },
                              "modifier": "<a class=\"gModGreen\" id=\"849374917\">Enemy_W2_Kafka_IF_Weakness_Fire</a>"
                            },
                            {
                              "name": "Add Events/Bonuses",
                              "to": {
                                "name": "Target Name",
                                "target": "{{Caster's Summoner}}"
                              },
                              "modifier": "<a class=\"gModGreen\" id=\"-1358847221\">Enemy_W2_Kafka_IF_Weakness_Wind</a>"
                            },
                            {
                              "name": "Add Events/Bonuses",
                              "to": {
                                "name": "Target Name",
                                "target": "{{Caster's Summoner}}"
                              },
                              "modifier": "<a class=\"gModGreen\" id=\"1168051970\">Enemy_W2_Kafka_IF_Weakness_Imaginary</a>"
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "name": "Animation Task"
                    }
                  ]
                }
              ],
              "failed": [
                {
                  "name": "Animation Event",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "state": "Die",
                  "passed": [
                    {
                      "name": "Animation Task"
                    },
                    {
                      "name": "Animation Task"
                    },
                    {
                      "name": "Animation Task",
                      "passed": [
                        {
                          "name": "Find New Target",
                          "from": {
                            "name": "Target Sequence",
                            "Sequence": [
                              {
                                "name": "Target Name",
                                "target": "{{Enemy Team All}}"
                              },
                              {
                                "name": "Target Filter",
                                "conditions": {
                                  "name": "Compare: Target",
                                  "target": {
                                    "name": "Target Name",
                                    "target": "{{Parameter Target}}"
                                  },
                                  "target2": {
                                    "name": "Target Name",
                                    "target": "{{Caster's Summoner}}"
                                  },
                                  "invertCondition": true
                                }
                              }
                            ]
                          },
                          "searchRandom": true,
                          "ifTargetFound": [
                            {
                              "name": "IF",
                              "conditions": {
                                "name": "Has Modifier",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Parameter Target}}"
                                },
                                "modifier": "<a class=\"gModGreen\" id=\"849374917\">Enemy_W2_Kafka_IF_Weakness_Fire</a>",
                                "invertCondition": true
                              }
                            },
                            {
                              "name": "IF",
                              "conditions": {
                                "name": "Has Modifier",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Parameter Target}}"
                                },
                                "modifier": "<a class=\"gModGreen\" id=\"267014068\">Enemy_W2_Kafka_IF_Weakness_Physical</a>",
                                "invertCondition": true
                              }
                            }
                          ]
                        },
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "AND",
                            "conditionList": [
                              {
                                "name": "Compare: Variable",
                                "target": {
                                  "name": "Target Sequence",
                                  "Sequence": [
                                    {
                                      "name": "Target Name",
                                      "target": "{{Enemy Team All}}"
                                    },
                                    {
                                      "name": "Target Filter",
                                      "conditions": {
                                        "name": "Compare: Target",
                                        "target": {
                                          "name": "Target Name",
                                          "target": "{{Parameter Target}}"
                                        },
                                        "target2": {
                                          "name": "Target Name",
                                          "target": "{{Caster's Summoner}}"
                                        },
                                        "invertCondition": true
                                      }
                                    }
                                  ]
                                },
                                "value1": "TeamCharacterCount",
                                "compareType": "=",
                                "value2": 0
                              }
                            ]
                          }
                        }
                      ]
                    },
                    {
                      "name": "Animation Task",
                      "passed": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Caster's Summoner}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"-1225888494\">Enemy_W2_Cocolia_IF_SummonDie</a>"
                        },
                        {
                          "name": "Find New Target",
                          "from": {
                            "name": "Target Sequence",
                            "Sequence": [
                              {
                                "name": "Target Name",
                                "target": "{{Enemy Team All}}"
                              },
                              {
                                "name": "Target Filter",
                                "conditions": {
                                  "name": "Compare: Target",
                                  "target": {
                                    "name": "Target Name",
                                    "target": "{{Parameter Target}}"
                                  },
                                  "target2": {
                                    "name": "Target Name",
                                    "target": "{{Caster's Summoner}}"
                                  },
                                  "invertCondition": true
                                }
                              }
                            ]
                          },
                          "searchRandom": true,
                          "ifTargetFound": [
                            {
                              "name": "IF",
                              "conditions": {
                                "name": "Has Modifier",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Parameter Target}}"
                                },
                                "modifier": "<a class=\"gModGreen\" id=\"849374917\">Enemy_W2_Kafka_IF_Weakness_Fire</a>",
                                "invertCondition": true
                              },
                              "passed": [
                                {
                                  "name": "Add Events/Bonuses",
                                  "to": {
                                    "name": "Target Name",
                                    "target": "{{Parameter Target}}"
                                  },
                                  "modifier": "<a class=\"gModGreen\" id=\"849374917\">Enemy_W2_Kafka_IF_Weakness_Fire</a>"
                                },
                                {
                                  "name": "Add Events/Bonuses",
                                  "to": {
                                    "name": "Target Name",
                                    "target": "{{Parameter Target}}"
                                  },
                                  "modifier": "<a class=\"gModGreen\" id=\"-1358847221\">Enemy_W2_Kafka_IF_Weakness_Wind</a>"
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
                                "modifier": "<a class=\"gModGreen\" id=\"267014068\">Enemy_W2_Kafka_IF_Weakness_Physical</a>",
                                "invertCondition": true
                              },
                              "passed": [
                                {
                                  "name": "Add Events/Bonuses",
                                  "to": {
                                    "name": "Target Name",
                                    "target": "{{Parameter Target}}"
                                  },
                                  "modifier": "<a class=\"gModGreen\" id=\"267014068\">Enemy_W2_Kafka_IF_Weakness_Physical</a>"
                                },
                                {
                                  "name": "Add Events/Bonuses",
                                  "to": {
                                    "name": "Target Name",
                                    "target": "{{Parameter Target}}"
                                  },
                                  "modifier": "<a class=\"gModGreen\" id=\"1168051970\">Enemy_W2_Kafka_IF_Weakness_Imaginary</a>"
                                }
                              ]
                            }
                          ]
                        },
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "AND",
                            "conditionList": [
                              {
                                "name": "Compare: Variable",
                                "target": {
                                  "name": "Target Sequence",
                                  "Sequence": [
                                    {
                                      "name": "Target Name",
                                      "target": "{{Enemy Team All}}"
                                    },
                                    {
                                      "name": "Target Filter",
                                      "conditions": {
                                        "name": "Compare: Target",
                                        "target": {
                                          "name": "Target Name",
                                          "target": "{{Parameter Target}}"
                                        },
                                        "target2": {
                                          "name": "Target Name",
                                          "target": "{{Caster's Summoner}}"
                                        },
                                        "invertCondition": true
                                      }
                                    }
                                  ]
                                },
                                "value1": "TeamCharacterCount",
                                "compareType": "=",
                                "value2": 0
                              }
                            ]
                          },
                          "passed": [
                            {
                              "name": "Add Events/Bonuses",
                              "to": {
                                "name": "Target Name",
                                "target": "{{Caster's Summoner}}"
                              },
                              "modifier": "<a class=\"gModGreen\" id=\"267014068\">Enemy_W2_Kafka_IF_Weakness_Physical</a>"
                            },
                            {
                              "name": "Add Events/Bonuses",
                              "to": {
                                "name": "Target Name",
                                "target": "{{Caster's Summoner}}"
                              },
                              "modifier": "<a class=\"gModGreen\" id=\"849374917\">Enemy_W2_Kafka_IF_Weakness_Fire</a>"
                            },
                            {
                              "name": "Add Events/Bonuses",
                              "to": {
                                "name": "Target Name",
                                "target": "{{Caster's Summoner}}"
                              },
                              "modifier": "<a class=\"gModGreen\" id=\"-1358847221\">Enemy_W2_Kafka_IF_Weakness_Wind</a>"
                            },
                            {
                              "name": "Add Events/Bonuses",
                              "to": {
                                "name": "Target Name",
                                "target": "{{Caster's Summoner}}"
                              },
                              "modifier": "<a class=\"gModGreen\" id=\"1168051970\">Enemy_W2_Kafka_IF_Weakness_Imaginary</a>"
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "name": "Animation Task"
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
          "name": "Find New Target",
          "from": {
            "name": "Target Sequence",
            "Sequence": [
              {
                "name": "Target Name",
                "target": "{{Enemy Team All}}"
              },
              {
                "name": "Target Filter",
                "conditions": {
                  "name": "Compare: Target",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "target2": {
                    "name": "Target Name",
                    "target": "{{Caster's Summoner}}"
                  },
                  "invertCondition": true
                }
              }
            ]
          },
          "searchRandom": true,
          "includeDyingTargets": true,
          "ifTargetFound": [
            "Deleted bullshit"
          ]
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster's Summoner}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"267014068\">Enemy_W2_Kafka_IF_Weakness_Physical</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster's Summoner}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"849374917\">Enemy_W2_Kafka_IF_Weakness_Fire</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster's Summoner}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1358847221\">Enemy_W2_Kafka_IF_Weakness_Wind</a>"
        },
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster's Summoner}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1168051970\">Enemy_W2_Kafka_IF_Weakness_Imaginary</a>"
        }
      ]
    },
    {
      "name": "Define Custom Variable",
      "target": {
        "name": "Target Name",
        "target": "{{Caster's Summoner}}"
      },
      "variableName": "SummonDeathInsertCheck",
      "value": 0
    }
  ],
  "references": []
}