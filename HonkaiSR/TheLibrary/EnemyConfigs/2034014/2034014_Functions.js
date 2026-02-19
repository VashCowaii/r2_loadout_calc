const configAbility = {
  "fileName": "2034014_Functions",
  "abilityType": "Char. Functions",
  "energy": null,
  "toughnessList": [
    0,
    0,
    0
  ],
  "length": 1,
  "parse": [
    {
      "name": "CharacterFunctions",
      "functionName": "<a class=\"gTempYellow\" id=\"fun__-149187790\">Lycanking_SummonLycan</a>",
      "parse": [
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Target Count",
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
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Compare: Monster Rank",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "compareType": "=",
                        "value2": 2
                      },
                      {
                        "name": "Check Boolean Value",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "value": "ENEMIES_OBJECT_UNUSED__167"
                      }
                    ]
                  }
                }
              ]
            },
            "compareType": "=",
            "value2": 0,
            "livingTargets": true
          },
          "passed": [
            {
              "name": "Random Event",
              "isUnique": true,
              "odds": [
                0.75,
                0.25
              ],
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Is Part Of Team Location",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "team": "Enemy Team",
                    "location": "Left"
                  },
                  "passed": [
                    {
                      "name": "Create Enemies",
                      "delayPercent": {
                        "operator": "Variables[0] ({[SkillP03[1]]}) || RETURN",
                        "displayLines": "{[SkillP03[1]]}",
                        "constants": [],
                        "variables": [
                          "{[SkillP03[1]]}"
                        ]
                      },
                      "enemyList": [
                        {
                          "name": "Enemy Entry",
                          "enemyID": {
                            "operator": "Variables[0] (WolfSummon01) || RETURN",
                            "displayLines": "WolfSummon01",
                            "constants": [],
                            "variables": [
                              "WolfSummon01"
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
                        "operator": "Variables[0] ({[SkillP03[1]]}) || RETURN",
                        "displayLines": "{[SkillP03[1]]}",
                        "constants": [],
                        "variables": [
                          "{[SkillP03[1]]}"
                        ]
                      },
                      "enemyList": [
                        {
                          "name": "Enemy Entry",
                          "enemyID": {
                            "operator": "Variables[0] (WolfSummon01) || RETURN",
                            "displayLines": "WolfSummon01",
                            "constants": [],
                            "variables": [
                              "WolfSummon01"
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
                      "target": "{{Caster}}"
                    },
                    "team": "Enemy Team",
                    "location": "Left"
                  },
                  "passed": [
                    {
                      "name": "Create Enemies",
                      "delayPercent": {
                        "operator": "Variables[0] ({[SkillP03[1]]}) || RETURN",
                        "displayLines": "{[SkillP03[1]]}",
                        "constants": [],
                        "variables": [
                          "{[SkillP03[1]]}"
                        ]
                      },
                      "enemyList": [
                        {
                          "name": "Enemy Entry",
                          "enemyID": {
                            "operator": "Variables[0] (WolfSummon02) || RETURN",
                            "displayLines": "WolfSummon02",
                            "constants": [],
                            "variables": [
                              "WolfSummon02"
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
                        "operator": "Variables[0] ({[SkillP03[1]]}) || RETURN",
                        "displayLines": "{[SkillP03[1]]}",
                        "constants": [],
                        "variables": [
                          "{[SkillP03[1]]}"
                        ]
                      },
                      "enemyList": [
                        {
                          "name": "Enemy Entry",
                          "enemyID": {
                            "operator": "Variables[0] (WolfSummon02) || RETURN",
                            "displayLines": "WolfSummon02",
                            "constants": [],
                            "variables": [
                              "WolfSummon02"
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
                0.75,
                0.25
              ],
              "execute": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Is Part Of Team Location",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "team": "Enemy Team",
                    "location": "Left"
                  },
                  "passed": [
                    {
                      "name": "Create Enemies",
                      "delayPercent": {
                        "operator": "Variables[0] ({[SkillP03[2]]}) || RETURN",
                        "displayLines": "{[SkillP03[2]]}",
                        "constants": [],
                        "variables": [
                          "{[SkillP03[2]]}"
                        ]
                      },
                      "enemyList": [
                        {
                          "name": "Enemy Entry",
                          "enemyID": {
                            "operator": "Variables[0] (WolfSummon01) || RETURN",
                            "displayLines": "WolfSummon01",
                            "constants": [],
                            "variables": [
                              "WolfSummon01"
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
                        "operator": "Variables[0] ({[SkillP03[2]]}) || RETURN",
                        "displayLines": "{[SkillP03[2]]}",
                        "constants": [],
                        "variables": [
                          "{[SkillP03[2]]}"
                        ]
                      },
                      "enemyList": [
                        {
                          "name": "Enemy Entry",
                          "enemyID": {
                            "operator": "Variables[0] (WolfSummon01) || RETURN",
                            "displayLines": "WolfSummon01",
                            "constants": [],
                            "variables": [
                              "WolfSummon01"
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
                      "target": "{{Caster}}"
                    },
                    "team": "Enemy Team",
                    "location": "Left"
                  },
                  "passed": [
                    {
                      "name": "Create Enemies",
                      "delayPercent": {
                        "operator": "Variables[0] ({[SkillP03[2]]}) || RETURN",
                        "displayLines": "{[SkillP03[2]]}",
                        "constants": [],
                        "variables": [
                          "{[SkillP03[2]]}"
                        ]
                      },
                      "enemyList": [
                        {
                          "name": "Enemy Entry",
                          "enemyID": {
                            "operator": "Variables[0] (WolfSummon02) || RETURN",
                            "displayLines": "WolfSummon02",
                            "constants": [],
                            "variables": [
                              "WolfSummon02"
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
                        "operator": "Variables[0] ({[SkillP03[2]]}) || RETURN",
                        "displayLines": "{[SkillP03[2]]}",
                        "constants": [],
                        "variables": [
                          "{[SkillP03[2]]}"
                        ]
                      },
                      "enemyList": [
                        {
                          "name": "Enemy Entry",
                          "enemyID": {
                            "operator": "Variables[0] (WolfSummon02) || RETURN",
                            "displayLines": "WolfSummon02",
                            "constants": [],
                            "variables": [
                              "WolfSummon02"
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
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Caster's Minions}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1898412116\">Enemy_W2_LycanKing_IF_LycanDeathrattle</a>"
            }
          ],
          "failed": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Target Count",
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
                        "name": "AND",
                        "conditionList": [
                          {
                            "name": "Compare: Monster Rank",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Parameter Target}}"
                            },
                            "compareType": "=",
                            "value2": 2
                          },
                          {
                            "name": "Check Boolean Value",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Parameter Target}}"
                            },
                            "value": "ENEMIES_OBJECT_UNUSED__167"
                          }
                        ]
                      }
                    }
                  ]
                },
                "compareType": "=",
                "value2": 1,
                "livingTargets": true
              },
              "passed": [
                {
                  "name": "Random Event",
                  "isUnique": true,
                  "odds": [
                    0.75,
                    0.25
                  ],
                  "execute": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Is Part Of Team Location",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        "team": "Enemy Team",
                        "location": "Left"
                      },
                      "passed": [
                        {
                          "name": "Create Enemies",
                          "delayPercent": {
                            "operator": "Variables[0] ({[SkillP03[1]]}) || RETURN",
                            "displayLines": "{[SkillP03[1]]}",
                            "constants": [],
                            "variables": [
                              "{[SkillP03[1]]}"
                            ]
                          },
                          "enemyList": [
                            {
                              "name": "Enemy Entry",
                              "enemyID": {
                                "operator": "Variables[0] (WolfSummon01) || RETURN",
                                "displayLines": "WolfSummon01",
                                "constants": [],
                                "variables": [
                                  "WolfSummon01"
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
                            "operator": "Variables[0] ({[SkillP03[1]]}) || RETURN",
                            "displayLines": "{[SkillP03[1]]}",
                            "constants": [],
                            "variables": [
                              "{[SkillP03[1]]}"
                            ]
                          },
                          "enemyList": [
                            {
                              "name": "Enemy Entry",
                              "enemyID": {
                                "operator": "Variables[0] (WolfSummon01) || RETURN",
                                "displayLines": "WolfSummon01",
                                "constants": [],
                                "variables": [
                                  "WolfSummon01"
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
                          "target": "{{Caster}}"
                        },
                        "team": "Enemy Team",
                        "location": "Left"
                      },
                      "passed": [
                        {
                          "name": "Create Enemies",
                          "delayPercent": {
                            "operator": "Variables[0] ({[SkillP03[2]]}) || RETURN",
                            "displayLines": "{[SkillP03[2]]}",
                            "constants": [],
                            "variables": [
                              "{[SkillP03[2]]}"
                            ]
                          },
                          "enemyList": [
                            {
                              "name": "Enemy Entry",
                              "enemyID": {
                                "operator": "Variables[0] (WolfSummon02) || RETURN",
                                "displayLines": "WolfSummon02",
                                "constants": [],
                                "variables": [
                                  "WolfSummon02"
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
                            "operator": "Variables[0] ({[SkillP03[2]]}) || RETURN",
                            "displayLines": "{[SkillP03[2]]}",
                            "constants": [],
                            "variables": [
                              "{[SkillP03[2]]}"
                            ]
                          },
                          "enemyList": [
                            {
                              "name": "Enemy Entry",
                              "enemyID": {
                                "operator": "Variables[0] (WolfSummon02) || RETURN",
                                "displayLines": "WolfSummon02",
                                "constants": [],
                                "variables": [
                                  "WolfSummon02"
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
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster's Minions}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1898412116\">Enemy_W2_LycanKing_IF_LycanDeathrattle</a>"
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