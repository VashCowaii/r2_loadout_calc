const configAbility = {
  "fileName": "2034013_BattleEventAbility_Monster_W2_LycanKing_SummonMonster",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Find New Target",
      "from": {
        "name": "Target Name",
        "target": "{{Enemy Team All}}"
      },
      "searchRandom": true,
      "maxTargets": 1,
      "conditions": {
        "name": "Check Boolean Value",
        "target": {
          "name": "Target Name",
          "target": "{{Parameter Target}}"
        },
        "value": "ENEMIES_OBJECT_UNUSED__168"
      },
      "ifTargetFound": [
        {
          "name": "Define Custom Variable",
          "variableName": "P1_Lycan00Chance",
          "value": 0.75
        },
        {
          "name": "Define Custom Variable",
          "variableName": "P2_Lycan01Chance",
          "value": 0.25
        }
      ],
      "noTargetFound": [
        {
          "name": "Define Custom Variable",
          "variableName": "P1_Lycan00Chance",
          "value": 0.5
        },
        {
          "name": "Define Custom Variable",
          "variableName": "P2_Lycan01Chance",
          "value": 0.5
        }
      ]
    },
    {
      "name": "Find New Target",
      "from": {
        "name": "Target Name",
        "target": "{{Enemy Team All}}"
      },
      "searchRandom": true,
      "maxTargets": 1,
      "conditions": {
        "name": "Compare: Monster Rank",
        "target": {
          "name": "Target Name",
          "target": "{{Parameter Target}}"
        },
        "compareType": "=",
        "value2": 4
      },
      "ifTargetFound": [
        {
          "name": "Random Event",
          "isUnique": true,
          "odds": [
            {
              "operator": "Variables[0] (P1_Lycan00Chance) || RETURN",
              "displayLines": "P1_Lycan00Chance",
              "constants": [],
              "variables": [
                "P1_Lycan00Chance"
              ]
            },
            {
              "operator": "Variables[0] (P2_Lycan01Chance) || RETURN",
              "displayLines": "P2_Lycan01Chance",
              "constants": [],
              "variables": [
                "P2_Lycan01Chance"
              ]
            }
          ],
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Is Part Of Team Location",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "team": "Enemy Team",
                "location": "Left"
              },
              "passed": [
                {
                  "name": "Create Enemies",
                  "delayPercent": {
                    "operator": "Variables[0] (P3_Lycan01Delay) || RETURN",
                    "displayLines": "P3_Lycan01Delay",
                    "constants": [],
                    "variables": [
                      "P3_Lycan01Delay"
                    ]
                  },
                  "enemyList": [
                    {
                      "name": "Enemy Entry",
                      "enemyID": {
                        "operator": "Variables[0] (WolfID01) || RETURN",
                        "displayLines": "WolfID01",
                        "constants": [],
                        "variables": [
                          "WolfID01"
                        ]
                      },
                      "locationType": "First"
                    }
                  ]
                }
              ],
              "failed": [
                {
                  "name": "Create Enemies",
                  "delayPercent": {
                    "operator": "Variables[0] (P3_Lycan01Delay) || RETURN",
                    "displayLines": "P3_Lycan01Delay",
                    "constants": [],
                    "variables": [
                      "P3_Lycan01Delay"
                    ]
                  },
                  "enemyList": [
                    {
                      "name": "Enemy Entry",
                      "enemyID": {
                        "operator": "Variables[0] (WolfID01) || RETURN",
                        "displayLines": "WolfID01",
                        "constants": [],
                        "variables": [
                          "WolfID01"
                        ]
                      },
                      "locationType": "Last"
                    }
                  ]
                }
              ]
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Is Part Of Team Location",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "team": "Enemy Team",
                "location": "Left"
              },
              "passed": [
                {
                  "name": "Create Enemies",
                  "delayPercent": {
                    "operator": "Variables[0] (P3_Lycan01Delay) || RETURN",
                    "displayLines": "P3_Lycan01Delay",
                    "constants": [],
                    "variables": [
                      "P3_Lycan01Delay"
                    ]
                  },
                  "enemyList": [
                    {
                      "name": "Enemy Entry",
                      "enemyID": {
                        "operator": "Variables[0] (WolfID02) || RETURN",
                        "displayLines": "WolfID02",
                        "constants": [],
                        "variables": [
                          "WolfID02"
                        ]
                      },
                      "locationType": "First"
                    }
                  ]
                }
              ],
              "failed": [
                {
                  "name": "Create Enemies",
                  "delayPercent": {
                    "operator": "Variables[0] (P3_Lycan01Delay) || RETURN",
                    "displayLines": "P3_Lycan01Delay",
                    "constants": [],
                    "variables": [
                      "P3_Lycan01Delay"
                    ]
                  },
                  "enemyList": [
                    {
                      "name": "Enemy Entry",
                      "enemyID": {
                        "operator": "Variables[0] (WolfID02) || RETURN",
                        "displayLines": "WolfID02",
                        "constants": [],
                        "variables": [
                          "WolfID02"
                        ]
                      },
                      "locationType": "Last"
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
            "name": "OR",
            "conditionList": [
              {
                "name": "Compare: Variable",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "value1": "HP_Bars_Remaining",
                "compareType": ">=",
                "value2": 2
              },
              {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"1370655977\">Enemy_W2_LycanKing_MainStoryPhase2Mark</a>"
              }
            ]
          },
          "passed": [
            {
              "name": "Random Event",
              "isUnique": true,
              "odds": [
                {
                  "operator": "Variables[0] (P1_Lycan00Chance) || RETURN",
                  "displayLines": "P1_Lycan00Chance",
                  "constants": [],
                  "variables": [
                    "P1_Lycan00Chance"
                  ]
                },
                {
                  "operator": "Variables[0] (P2_Lycan01Chance) || RETURN",
                  "displayLines": "P2_Lycan01Chance",
                  "constants": [],
                  "variables": [
                    "P2_Lycan01Chance"
                  ]
                }
              ],
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Is Part Of Team Location",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "team": "Enemy Team",
                    "location": "Left"
                  },
                  "passed": [
                    {
                      "name": "Create Enemies",
                      "delayPercent": {
                        "operator": "Variables[0] (P4_Lycan02Delay) || RETURN",
                        "displayLines": "P4_Lycan02Delay",
                        "constants": [],
                        "variables": [
                          "P4_Lycan02Delay"
                        ]
                      },
                      "enemyList": [
                        {
                          "name": "Enemy Entry",
                          "enemyID": {
                            "operator": "Variables[0] (WolfID01) || RETURN",
                            "displayLines": "WolfID01",
                            "constants": [],
                            "variables": [
                              "WolfID01"
                            ]
                          },
                          "locationType": "First"
                        }
                      ]
                    }
                  ],
                  "failed": [
                    {
                      "name": "Create Enemies",
                      "delayPercent": {
                        "operator": "Variables[0] (P4_Lycan02Delay) || RETURN",
                        "displayLines": "P4_Lycan02Delay",
                        "constants": [],
                        "variables": [
                          "P4_Lycan02Delay"
                        ]
                      },
                      "enemyList": [
                        {
                          "name": "Enemy Entry",
                          "enemyID": {
                            "operator": "Variables[0] (WolfID01) || RETURN",
                            "displayLines": "WolfID01",
                            "constants": [],
                            "variables": [
                              "WolfID01"
                            ]
                          },
                          "locationType": "Last"
                        }
                      ]
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Is Part Of Team Location",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "team": "Enemy Team",
                    "location": "Left"
                  },
                  "passed": [
                    {
                      "name": "Create Enemies",
                      "delayPercent": {
                        "operator": "Variables[0] (P4_Lycan02Delay) || RETURN",
                        "displayLines": "P4_Lycan02Delay",
                        "constants": [],
                        "variables": [
                          "P4_Lycan02Delay"
                        ]
                      },
                      "enemyList": [
                        {
                          "name": "Enemy Entry",
                          "enemyID": {
                            "operator": "Variables[0] (WolfID02) || RETURN",
                            "displayLines": "WolfID02",
                            "constants": [],
                            "variables": [
                              "WolfID02"
                            ]
                          },
                          "locationType": "First"
                        }
                      ]
                    }
                  ],
                  "failed": [
                    {
                      "name": "Create Enemies",
                      "delayPercent": {
                        "operator": "Variables[0] (P4_Lycan02Delay) || RETURN",
                        "displayLines": "P4_Lycan02Delay",
                        "constants": [],
                        "variables": [
                          "P4_Lycan02Delay"
                        ]
                      },
                      "enemyList": [
                        {
                          "name": "Enemy Entry",
                          "enemyID": {
                            "operator": "Variables[0] (WolfID02) || RETURN",
                            "displayLines": "WolfID02",
                            "constants": [],
                            "variables": [
                              "WolfID02"
                            ]
                          },
                          "locationType": "Last"
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
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "value1": "HP_Bars_Remaining",
            "compareType": ">=",
            "value2": 3
          },
          "passed": [
            {
              "name": "Random Event",
              "isUnique": true,
              "odds": [
                {
                  "operator": "Variables[0] (P1_Lycan00Chance) || RETURN",
                  "displayLines": "P1_Lycan00Chance",
                  "constants": [],
                  "variables": [
                    "P1_Lycan00Chance"
                  ]
                },
                {
                  "operator": "Variables[0] (P2_Lycan01Chance) || RETURN",
                  "displayLines": "P2_Lycan01Chance",
                  "constants": [],
                  "variables": [
                    "P2_Lycan01Chance"
                  ]
                }
              ],
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Is Part Of Team Location",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "team": "Enemy Team",
                    "location": "Left"
                  },
                  "passed": [
                    {
                      "name": "Create Enemies",
                      "delayPercent": {
                        "operator": "Variables[0] (P5_Lycan03Delay) || RETURN",
                        "displayLines": "P5_Lycan03Delay",
                        "constants": [],
                        "variables": [
                          "P5_Lycan03Delay"
                        ]
                      },
                      "enemyList": [
                        {
                          "name": "Enemy Entry",
                          "enemyID": {
                            "operator": "Variables[0] (WolfID01) || RETURN",
                            "displayLines": "WolfID01",
                            "constants": [],
                            "variables": [
                              "WolfID01"
                            ]
                          },
                          "locationType": "First"
                        }
                      ]
                    }
                  ],
                  "failed": [
                    {
                      "name": "Create Enemies",
                      "delayPercent": {
                        "operator": "Variables[0] (P5_Lycan03Delay) || RETURN",
                        "displayLines": "P5_Lycan03Delay",
                        "constants": [],
                        "variables": [
                          "P5_Lycan03Delay"
                        ]
                      },
                      "enemyList": [
                        {
                          "name": "Enemy Entry",
                          "enemyID": {
                            "operator": "Variables[0] (WolfID01) || RETURN",
                            "displayLines": "WolfID01",
                            "constants": [],
                            "variables": [
                              "WolfID01"
                            ]
                          },
                          "locationType": "Last"
                        }
                      ]
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Is Part Of Team Location",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "team": "Enemy Team",
                    "location": "Left"
                  },
                  "passed": [
                    {
                      "name": "Create Enemies",
                      "delayPercent": {
                        "operator": "Variables[0] (P5_Lycan03Delay) || RETURN",
                        "displayLines": "P5_Lycan03Delay",
                        "constants": [],
                        "variables": [
                          "P5_Lycan03Delay"
                        ]
                      },
                      "enemyList": [
                        {
                          "name": "Enemy Entry",
                          "enemyID": {
                            "operator": "Variables[0] (WolfID02) || RETURN",
                            "displayLines": "WolfID02",
                            "constants": [],
                            "variables": [
                              "WolfID02"
                            ]
                          },
                          "locationType": "First"
                        }
                      ]
                    }
                  ],
                  "failed": [
                    {
                      "name": "Create Enemies",
                      "delayPercent": {
                        "operator": "Variables[0] (P5_Lycan03Delay) || RETURN",
                        "displayLines": "P5_Lycan03Delay",
                        "constants": [],
                        "variables": [
                          "P5_Lycan03Delay"
                        ]
                      },
                      "enemyList": [
                        {
                          "name": "Enemy Entry",
                          "enemyID": {
                            "operator": "Variables[0] (WolfID02) || RETURN",
                            "displayLines": "WolfID02",
                            "constants": [],
                            "variables": [
                              "WolfID02"
                            ]
                          },
                          "locationType": "Last"
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              "name": "Random Event",
              "isUnique": true,
              "odds": [
                {
                  "operator": "Variables[0] (P1_Lycan00Chance) || RETURN",
                  "displayLines": "P1_Lycan00Chance",
                  "constants": [],
                  "variables": [
                    "P1_Lycan00Chance"
                  ]
                },
                {
                  "operator": "Variables[0] (P2_Lycan01Chance) || RETURN",
                  "displayLines": "P2_Lycan01Chance",
                  "constants": [],
                  "variables": [
                    "P2_Lycan01Chance"
                  ]
                }
              ],
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Is Part Of Team Location",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "team": "Enemy Team",
                    "location": "Left"
                  },
                  "passed": [
                    {
                      "name": "Create Enemies",
                      "delayPercent": {
                        "operator": "Variables[0] (P6_Lycan04Delay) || RETURN",
                        "displayLines": "P6_Lycan04Delay",
                        "constants": [],
                        "variables": [
                          "P6_Lycan04Delay"
                        ]
                      },
                      "enemyList": [
                        {
                          "name": "Enemy Entry",
                          "enemyID": {
                            "operator": "Variables[0] (WolfID01) || RETURN",
                            "displayLines": "WolfID01",
                            "constants": [],
                            "variables": [
                              "WolfID01"
                            ]
                          },
                          "locationType": "First"
                        }
                      ]
                    }
                  ],
                  "failed": [
                    {
                      "name": "Create Enemies",
                      "delayPercent": {
                        "operator": "Variables[0] (P6_Lycan04Delay) || RETURN",
                        "displayLines": "P6_Lycan04Delay",
                        "constants": [],
                        "variables": [
                          "P6_Lycan04Delay"
                        ]
                      },
                      "enemyList": [
                        {
                          "name": "Enemy Entry",
                          "enemyID": {
                            "operator": "Variables[0] (WolfID01) || RETURN",
                            "displayLines": "WolfID01",
                            "constants": [],
                            "variables": [
                              "WolfID01"
                            ]
                          },
                          "locationType": "Last"
                        }
                      ]
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Is Part Of Team Location",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "team": "Enemy Team",
                    "location": "Left"
                  },
                  "passed": [
                    {
                      "name": "Create Enemies",
                      "delayPercent": {
                        "operator": "Variables[0] (P6_Lycan04Delay) || RETURN",
                        "displayLines": "P6_Lycan04Delay",
                        "constants": [],
                        "variables": [
                          "P6_Lycan04Delay"
                        ]
                      },
                      "enemyList": [
                        {
                          "name": "Enemy Entry",
                          "enemyID": {
                            "operator": "Variables[0] (WolfID02) || RETURN",
                            "displayLines": "WolfID02",
                            "constants": [],
                            "variables": [
                              "WolfID02"
                            ]
                          },
                          "locationType": "First"
                        }
                      ]
                    }
                  ],
                  "failed": [
                    {
                      "name": "Create Enemies",
                      "delayPercent": {
                        "operator": "Variables[0] (P6_Lycan04Delay) || RETURN",
                        "displayLines": "P6_Lycan04Delay",
                        "constants": [],
                        "variables": [
                          "P6_Lycan04Delay"
                        ]
                      },
                      "enemyList": [
                        {
                          "name": "Enemy Entry",
                          "enemyID": {
                            "operator": "Variables[0] (WolfID02) || RETURN",
                            "displayLines": "WolfID02",
                            "constants": [],
                            "variables": [
                              "WolfID02"
                            ]
                          },
                          "locationType": "Last"
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
  ],
  "targetObjectData": {
    "primaryTarget": "Inherent Target"
  },
  "references": []
}