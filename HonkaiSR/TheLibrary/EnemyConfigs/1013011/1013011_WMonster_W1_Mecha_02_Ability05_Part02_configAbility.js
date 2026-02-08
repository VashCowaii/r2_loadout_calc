const configAbility = {
  "fileName": "1013011_WMonster_W1_Mecha_02_Ability05_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    "Ability Start",
    {
      "name": "IF",
      "conditions": {
        "name": "Compare: Variable",
        "target": {
          "name": "Target Name",
          "target": "{{All Team Members}}"
        },
        "value1": "TeamCharacterCount",
        "compareType": "<=",
        "value2": 3
      },
      "passed": [
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "SummonSequence",
            "compareType": "=",
            "value2": 1,
            "contextScope": "TargetEntity"
          },
          "passed": [
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "OR",
                    "conditionList": [
                      {
                        "name": "Enemy ID",
                        "ID": 1013012,
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        "characterName": "Automaton Grizzly (Complete)"
                      },
                      {
                        "name": "Enemy ID",
                        "ID": 1013013,
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        "characterName": "Automaton Grizzly (Complete)"
                      },
                      {
                        "name": "Enemy ID",
                        "ID": 1013014,
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        "characterName": "Automaton Grizzly (Complete)"
                      }
                    ]
                  },
                  {
                    "name": "Compare: Variable",
                    "value1": "HP_Bars_Remaining",
                    "compareType": "=",
                    "value2": 2
                  }
                ]
              },
              "passed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "TeammateSurvive",
                    "compareType": "=",
                    "value2": 1,
                    "contextScope": "TargetEntity"
                  },
                  "passed": [
                    {
                      "name": "Create Enemies",
                      "delayPercent": 0,
                      "enemyList": [
                        {
                          "name": "Create Enemy from Custom",
                          "value": "Monster_RO_015_SummonID",
                          "summonLocation": "BeforeCaster"
                        },
                        {
                          "name": "Create Enemy from Custom",
                          "value": "Monster_RO_015_SummonID",
                          "summonLocation": "First"
                        }
                      ]
                    }
                  ],
                  "failed": [
                    {
                      "name": "Create Enemies",
                      "delayPercent": 0,
                      "enemyList": [
                        {
                          "name": "Create Enemy from Custom",
                          "value": "Monster_RO_015_SummonID",
                          "summonLocation": "BeforeCaster"
                        },
                        {
                          "name": "Create Enemy from Custom",
                          "value": "Monster_RO_015_SummonID",
                          "summonLocation": "First"
                        },
                        {
                          "name": "Create Enemy from Custom",
                          "value": "Monster_RO_015_SummonID",
                          "summonLocation": "AfterCaster"
                        },
                        {
                          "name": "Create Enemy from Custom",
                          "value": "Monster_RO_015_SummonID",
                          "summonLocation": "Last"
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
                    "name": "Enemy ID",
                    "ID": 1013011,
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "characterName": "Automaton Grizzly (Bug)"
                  },
                  "passed": [
                    {
                      "name": "Create Enemies",
                      "delayPercent": 0,
                      "enemyList": [
                        {
                          "name": "Create Enemy from Custom",
                          "value": "Monster_RO_015_SummonID2",
                          "summonLocation": "BeforeCaster"
                        },
                        {
                          "name": "Create Enemy from Custom",
                          "value": "Monster_RO_015_SummonID2",
                          "summonLocation": "AfterCaster"
                        }
                      ]
                    }
                  ],
                  "failed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "AND",
                        "conditionList": [
                          {
                            "name": "OR",
                            "conditionList": [
                              {
                                "name": "Enemy ID",
                                "ID": 1013012,
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Caster}}"
                                },
                                "characterName": "Automaton Grizzly (Complete)"
                              },
                              {
                                "name": "Enemy ID",
                                "ID": 1013013,
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Caster}}"
                                },
                                "characterName": "Automaton Grizzly (Complete)"
                              },
                              {
                                "name": "Enemy ID",
                                "ID": 1013014,
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Caster}}"
                                },
                                "characterName": "Automaton Grizzly (Complete)"
                              }
                            ]
                          },
                          {
                            "name": "Compare: Variable",
                            "value1": "HP_Bars_Remaining",
                            "compareType": "=",
                            "value2": 1
                          }
                        ]
                      },
                      "passed": [
                        {
                          "name": "Create Enemies",
                          "delayPercent": 0,
                          "enemyList": [
                            {
                              "name": "Create Enemy from Custom",
                              "value": "Monster_RO_015_SummonID",
                              "summonLocation": "First"
                            },
                            {
                              "name": "Create Enemy from Custom",
                              "value": "Monster_RO_015_SummonID",
                              "summonLocation": "Last"
                            }
                          ]
                        }
                      ],
                      "failed": [
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "AND",
                            "conditionList": [
                              {
                                "name": "OR",
                                "conditionList": [
                                  {
                                    "name": "Enemy ID",
                                    "ID": 1013012,
                                    "target": {
                                      "name": "Target Name",
                                      "target": "{{Caster}}"
                                    },
                                    "characterName": "Automaton Grizzly (Complete)"
                                  },
                                  {
                                    "name": "Enemy ID",
                                    "ID": 1013013,
                                    "target": {
                                      "name": "Target Name",
                                      "target": "{{Caster}}"
                                    },
                                    "characterName": "Automaton Grizzly (Complete)"
                                  }
                                ]
                              },
                              {
                                "name": "Compare: Variable",
                                "value1": "HP_Bars_Remaining",
                                "compareType": "=",
                                "value2": 3
                              }
                            ]
                          },
                          "passed": [
                            {
                              "name": "Create Enemies",
                              "delayPercent": 0,
                              "enemyList": [
                                {
                                  "name": "Create Enemy from Custom",
                                  "value": "Monster_RO_015_SummonID",
                                  "summonLocation": "BeforeCaster"
                                },
                                {
                                  "name": "Create Enemy from Custom",
                                  "value": "Monster_RO_015_SummonID",
                                  "summonLocation": "First"
                                }
                              ]
                            }
                          ],
                          "failed": [
                            {
                              "name": "IF",
                              "conditions": {
                                "name": "AND",
                                "conditionList": [
                                  {
                                    "name": "Enemy ID",
                                    "ID": 1013014,
                                    "target": {
                                      "name": "Target Name",
                                      "target": "{{Caster}}"
                                    },
                                    "characterName": "Automaton Grizzly (Complete)"
                                  },
                                  {
                                    "name": "Compare: Variable",
                                    "value1": "HP_Bars_Remaining",
                                    "compareType": "=",
                                    "value2": 3
                                  }
                                ]
                              },
                              "passed": [
                                {
                                  "name": "Create Enemies",
                                  "delayPercent": 0,
                                  "enemyList": [
                                    {
                                      "name": "Create Enemy from Custom",
                                      "value": "Monster_RO_015_SummonID2",
                                      "summonLocation": "First"
                                    },
                                    {
                                      "name": "Create Enemy from Custom",
                                      "value": "Monster_RO_015_SummonID2",
                                      "summonLocation": "Last"
                                    }
                                  ]
                                }
                              ],
                              "failed": [
                                {
                                  "name": "Create Enemies",
                                  "delayPercent": 0,
                                  "enemyList": [
                                    {
                                      "name": "Create Enemy from Custom",
                                      "value": "Monster_RO_015_SummonID",
                                      "summonLocation": "BeforeCaster"
                                    },
                                    {
                                      "name": "Create Enemy from Custom",
                                      "value": "Monster_RO_015_SummonID",
                                      "summonLocation": "AfterCaster"
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
              "name": "Declare Custom Variable",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "scope": "TargetEntity",
              "variableName": "SummonSequence",
              "value": 2
            }
          ],
          "failed": [
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "OR",
                    "conditionList": [
                      {
                        "name": "Enemy ID",
                        "ID": 1013012,
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        "characterName": "Automaton Grizzly (Complete)"
                      },
                      {
                        "name": "Enemy ID",
                        "ID": 1013013,
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        "characterName": "Automaton Grizzly (Complete)"
                      },
                      {
                        "name": "Enemy ID",
                        "ID": 1013014,
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        "characterName": "Automaton Grizzly (Complete)"
                      }
                    ]
                  },
                  {
                    "name": "Compare: Variable",
                    "value1": "HP_Bars_Remaining",
                    "compareType": "=",
                    "value2": 2
                  }
                ]
              },
              "passed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "TeammateSurvive",
                    "compareType": "=",
                    "value2": 1,
                    "contextScope": "TargetEntity"
                  },
                  "passed": [
                    {
                      "name": "Create Enemies",
                      "delayPercent": 0,
                      "enemyList": [
                        {
                          "name": "Create Enemy from Custom",
                          "value": "Monster_RO_015_SummonID",
                          "summonLocation": "BeforeCaster"
                        },
                        {
                          "name": "Create Enemy from Custom",
                          "value": "Monster_RO_015_SummonID",
                          "summonLocation": "First"
                        }
                      ]
                    }
                  ],
                  "failed": [
                    {
                      "name": "Create Enemies",
                      "delayPercent": 0,
                      "enemyList": [
                        {
                          "name": "Create Enemy from Custom",
                          "value": "Monster_RO_015_SummonID",
                          "summonLocation": "BeforeCaster"
                        },
                        {
                          "name": "Create Enemy from Custom",
                          "value": "Monster_RO_015_SummonID",
                          "summonLocation": "First"
                        },
                        {
                          "name": "Create Enemy from Custom",
                          "value": "Monster_RO_015_SummonID",
                          "summonLocation": "AfterCaster"
                        },
                        {
                          "name": "Create Enemy from Custom",
                          "value": "Monster_RO_015_SummonID",
                          "summonLocation": "Last"
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
                    "name": "Enemy ID",
                    "ID": 1013011,
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "characterName": "Automaton Grizzly (Bug)"
                  },
                  "passed": [
                    {
                      "name": "Create Enemies",
                      "delayPercent": 0,
                      "enemyList": [
                        {
                          "name": "Create Enemy from Custom",
                          "value": "Monster_RO_015_SummonID2",
                          "summonLocation": "BeforeCaster"
                        },
                        {
                          "name": "Create Enemy from Custom",
                          "value": "Monster_RO_015_SummonID2",
                          "summonLocation": "AfterCaster"
                        }
                      ]
                    }
                  ],
                  "failed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "AND",
                        "conditionList": [
                          {
                            "name": "OR",
                            "conditionList": [
                              {
                                "name": "Enemy ID",
                                "ID": 1013012,
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Caster}}"
                                },
                                "characterName": "Automaton Grizzly (Complete)"
                              },
                              {
                                "name": "Enemy ID",
                                "ID": 1013013,
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Caster}}"
                                },
                                "characterName": "Automaton Grizzly (Complete)"
                              },
                              {
                                "name": "Enemy ID",
                                "ID": 1013014,
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Caster}}"
                                },
                                "characterName": "Automaton Grizzly (Complete)"
                              }
                            ]
                          },
                          {
                            "name": "Compare: Variable",
                            "value1": "HP_Bars_Remaining",
                            "compareType": "=",
                            "value2": 1
                          }
                        ]
                      },
                      "passed": [
                        {
                          "name": "Create Enemies",
                          "delayPercent": 0,
                          "enemyList": [
                            {
                              "name": "Create Enemy from Custom",
                              "value": "Monster_RO_015_SummonID",
                              "summonLocation": "First"
                            },
                            {
                              "name": "Create Enemy from Custom",
                              "value": "Monster_RO_015_SummonID",
                              "summonLocation": "Last"
                            }
                          ]
                        }
                      ],
                      "failed": [
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "AND",
                            "conditionList": [
                              {
                                "name": "OR",
                                "conditionList": [
                                  {
                                    "name": "Enemy ID",
                                    "ID": 1013012,
                                    "target": {
                                      "name": "Target Name",
                                      "target": "{{Caster}}"
                                    },
                                    "characterName": "Automaton Grizzly (Complete)"
                                  },
                                  {
                                    "name": "Enemy ID",
                                    "ID": 1013013,
                                    "target": {
                                      "name": "Target Name",
                                      "target": "{{Caster}}"
                                    },
                                    "characterName": "Automaton Grizzly (Complete)"
                                  }
                                ]
                              },
                              {
                                "name": "Compare: Variable",
                                "value1": "HP_Bars_Remaining",
                                "compareType": "=",
                                "value2": 3
                              }
                            ]
                          },
                          "passed": [
                            {
                              "name": "Create Enemies",
                              "delayPercent": 0,
                              "enemyList": [
                                {
                                  "name": "Create Enemy from Custom",
                                  "value": "Monster_RO_015_SummonID",
                                  "summonLocation": "BeforeCaster"
                                },
                                {
                                  "name": "Create Enemy from Custom",
                                  "value": "Monster_RO_015_SummonID",
                                  "summonLocation": "First"
                                }
                              ]
                            }
                          ],
                          "failed": [
                            {
                              "name": "IF",
                              "conditions": {
                                "name": "AND",
                                "conditionList": [
                                  {
                                    "name": "Enemy ID",
                                    "ID": 1013014,
                                    "target": {
                                      "name": "Target Name",
                                      "target": "{{Caster}}"
                                    },
                                    "characterName": "Automaton Grizzly (Complete)"
                                  },
                                  {
                                    "name": "Compare: Variable",
                                    "value1": "HP_Bars_Remaining",
                                    "compareType": "=",
                                    "value2": 3
                                  }
                                ]
                              },
                              "passed": [
                                {
                                  "name": "Create Enemies",
                                  "delayPercent": 0,
                                  "enemyList": [
                                    {
                                      "name": "Create Enemy from Custom",
                                      "value": "Monster_RO_015_SummonID2",
                                      "summonLocation": "First"
                                    },
                                    {
                                      "name": "Create Enemy from Custom",
                                      "value": "Monster_RO_015_SummonID2",
                                      "summonLocation": "Last"
                                    }
                                  ]
                                }
                              ],
                              "failed": [
                                {
                                  "name": "Create Enemies",
                                  "delayPercent": 0,
                                  "enemyList": [
                                    {
                                      "name": "Create Enemy from Custom",
                                      "value": "Monster_RO_015_SummonID",
                                      "summonLocation": "BeforeCaster"
                                    },
                                    {
                                      "name": "Create Enemy from Custom",
                                      "value": "Monster_RO_015_SummonID",
                                      "summonLocation": "AfterCaster"
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
              "name": "Declare Custom Variable",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "scope": "TargetEntity",
              "variableName": "SummonSequence",
              "value": 1
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "AND",
            "conditionList": [
              {
                "name": "OR",
                "conditionList": [
                  {
                    "name": "Enemy ID",
                    "ID": 1013012,
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "characterName": "Automaton Grizzly (Complete)"
                  },
                  {
                    "name": "Enemy ID",
                    "ID": 1013013,
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "characterName": "Automaton Grizzly (Complete)"
                  },
                  {
                    "name": "Enemy ID",
                    "ID": 1013014,
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "characterName": "Automaton Grizzly (Complete)"
                  }
                ]
              },
              {
                "name": "Compare: Variable",
                "value1": "HP_Bars_Remaining",
                "compareType": "=",
                "value2": 3
              }
            ]
          },
          "passed": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "TeammateSurvive",
                "compareType": "=",
                "value2": 1,
                "contextScope": "TargetEntity"
              },
              "failed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "SummonSequence",
                    "compareType": "=",
                    "value2": 1,
                    "contextScope": "TargetEntity"
                  },
                  "passed": [
                    {
                      "name": "Create Enemies",
                      "delayPercent": 0,
                      "enemyList": [
                        {
                          "name": "Create Enemy from Custom",
                          "value": "Monster_RO_015_SummonID",
                          "summonLocation": "BeforeCaster"
                        },
                        {
                          "name": "Create Enemy from Custom",
                          "value": "Monster_RO_015_SummonID",
                          "summonLocation": "AfterCaster"
                        }
                      ]
                    },
                    {
                      "name": "Declare Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "scope": "TargetEntity",
                      "variableName": "SummonSequence",
                      "value": 2
                    }
                  ],
                  "failed": [
                    {
                      "name": "Create Enemies",
                      "delayPercent": 0,
                      "enemyList": [
                        {
                          "name": "Create Enemy from Custom",
                          "value": "Monster_RO_015_SummonID",
                          "summonLocation": "BeforeCaster"
                        },
                        {
                          "name": "Create Enemy from Custom",
                          "value": "Monster_RO_015_SummonID",
                          "summonLocation": "AfterCaster"
                        }
                      ]
                    },
                    {
                      "name": "Declare Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "scope": "TargetEntity",
                      "variableName": "SummonSequence",
                      "value": 1
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
                "name": "Enemy ID",
                "ID": 1013011,
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "characterName": "Automaton Grizzly (Bug)"
              },
              "passed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "SummonSequence",
                    "compareType": "=",
                    "value2": 1,
                    "contextScope": "TargetEntity"
                  },
                  "passed": [
                    {
                      "name": "Create Enemies",
                      "delayPercent": 0,
                      "enemyList": [
                        {
                          "name": "Create Enemy from Custom",
                          "value": "Monster_RO_015_SummonID",
                          "summonLocation": "BeforeCaster"
                        },
                        {
                          "name": "Create Enemy from Custom",
                          "value": "Monster_RO_015_SummonID",
                          "summonLocation": "AfterCaster"
                        }
                      ]
                    },
                    {
                      "name": "Declare Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "scope": "TargetEntity",
                      "variableName": "SummonSequence",
                      "value": 2
                    }
                  ],
                  "failed": [
                    {
                      "name": "Create Enemies",
                      "delayPercent": 0,
                      "enemyList": [
                        {
                          "name": "Create Enemy from Custom",
                          "value": "Monster_RO_015_SummonID",
                          "summonLocation": "BeforeCaster"
                        },
                        {
                          "name": "Create Enemy from Custom",
                          "value": "Monster_RO_015_SummonID",
                          "summonLocation": "AfterCaster"
                        }
                      ]
                    },
                    {
                      "name": "Declare Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "scope": "TargetEntity",
                      "variableName": "SummonSequence",
                      "value": 1
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
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster's Minions}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-136554165\">Standard_Servant</a>[<span class=\"descriptionNumberColor\">Self-Destruct</span>]"
    },
    {
      "name": "IF",
      "conditions": {
        "name": "OR",
        "conditionList": [
          {
            "name": "Enemy ID",
            "ID": 1013012,
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "characterName": "Automaton Grizzly (Complete)"
          },
          {
            "name": "Enemy ID",
            "ID": 1013013,
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "characterName": "Automaton Grizzly (Complete)"
          },
          {
            "name": "Enemy ID",
            "ID": 1013014,
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "characterName": "Automaton Grizzly (Complete)"
          }
        ]
      },
      "passed": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster's Minions}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1139046842\">Monster_W1_Mecha03_RL_Explode</a>"
        }
      ]
    },
    "Trigger: Ability End"
  ],
  "references": []
}