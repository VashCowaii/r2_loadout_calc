const configAbility = {
  "fileName": "2035010_Monster_W2_Feixiao_Ability03_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    "Ability Start",
    {
      "name": "IF",
      "conditions": {
        "name": "Enemy ID",
        "ID": 200501,
        "target": {
          "name": "Target Name",
          "target": "{{Caster}}"
        },
        "characterName": null,
        "isCompareUniqueID": true
      }
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
        "name": "Enemy ID",
        "ID": 203204,
        "target": {
          "name": "Target Name",
          "target": "{{Parameter Target}}"
        },
        "characterName": null,
        "isCompareUniqueID": true
      },
      "ifTargetFound": [
        {
          "name": "Define Custom Variable with Stat",
          "target": {
            "name": "Target Name",
            "target": "{{Parameter Target}}"
          },
          "variableName": "HeadDelay",
          "value": "&nbsp;<span class=\"descriptionNumberColor\">ActionDelay</span>&nbsp;"
        },
        {
          "name": "Define Custom Variable",
          "variableName": "HeadDelay",
          "value": {
            "operator": "Variables[0] (HeadDelay) || Constants[0] (9.313226e-10) || SUB || RETURN",
            "displayLines": "(HeadDelay - 9.313226e-10)",
            "constants": [
              9.313226e-10
            ],
            "variables": [
              "HeadDelay"
            ]
          }
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
        "name": "Enemy ID",
        "ID": 203205,
        "target": {
          "name": "Target Name",
          "target": "{{Parameter Target}}"
        },
        "characterName": null,
        "isCompareUniqueID": true
      },
      "ifTargetFound": [
        {
          "name": "Define Custom Variable with Stat",
          "target": {
            "name": "Target Name",
            "target": "{{Parameter Target}}"
          },
          "variableName": "LimbDelay",
          "value": "&nbsp;<span class=\"descriptionNumberColor\">ActionDelay</span>&nbsp;"
        },
        {
          "name": "Define Custom Variable",
          "variableName": "LimbDelay",
          "value": {
            "operator": "Variables[0] (LimbDelay) || Constants[0] (9.313226e-10) || SUB || RETURN",
            "displayLines": "(LimbDelay - 9.313226e-10)",
            "constants": [
              9.313226e-10
            ],
            "variables": [
              "LimbDelay"
            ]
          }
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
        "name": "Enemy ID",
        "ID": 203206,
        "target": {
          "name": "Target Name",
          "target": "{{Parameter Target}}"
        },
        "characterName": null,
        "isCompareUniqueID": true
      },
      "ifTargetFound": [
        {
          "name": "Define Custom Variable with Stat",
          "target": {
            "name": "Target Name",
            "target": "{{Parameter Target}}"
          },
          "variableName": "TailDelay",
          "value": "&nbsp;<span class=\"descriptionNumberColor\">ActionDelay</span>&nbsp;"
        },
        {
          "name": "Define Custom Variable",
          "variableName": "TailDelay",
          "value": {
            "operator": "Variables[0] (TailDelay) || Constants[0] (9.313226e-10) || SUB || RETURN",
            "displayLines": "(TailDelay - 9.313226e-10)",
            "constants": [
              9.313226e-10
            ],
            "variables": [
              "TailDelay"
            ]
          }
        }
      ]
    },
    {
      "name": "Define Custom Variable with Stat",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "variableName": "CurrentSpeed",
      "value": "&nbsp;<span class=\"descriptionNumberColor\">Speed</span>&nbsp;"
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Compare: Variable",
        "value1": "HP_Bars_Remaining",
        "compareType": "=",
        "value2": 1
      },
      "passed": [
        {
          "name": "Add Battle Event",
          "teamName": "Enemy Team",
          "eventID": 20007,
          "statSource": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "variables": {
            "MDF_W2_Feixiao_BattleEvent_ActionDelay": {
              "operator": "Variables[0] ({[Skill03[3]]}) || RETURN",
              "displayLines": "{[Skill03[3]]}",
              "constants": [],
              "variables": [
                "{[Skill03[3]]}"
              ]
            },
            "MDF_W2_Feixiao_BattleEvent_BaseSpeed": {
              "operator": "Variables[0] (CurrentSpeed) || RETURN",
              "displayLines": "CurrentSpeed",
              "constants": [],
              "variables": [
                "CurrentSpeed"
              ]
            },
            "MDF_W2_Feixiao_BattleEvent_StanceBreakTakenRatio": {
              "operator": "Variables[0] ({[PassiveSkill03[5]]}) || RETURN",
              "displayLines": "{[PassiveSkill03[5]]}",
              "constants": [],
              "variables": [
                "{[PassiveSkill03[5]]}"
              ]
            }
          }
        },
        {
          "name": "Add Battle Event",
          "teamName": "Enemy Team",
          "eventID": 20007,
          "statSource": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "variables": {
            "MDF_W2_Feixiao_BattleEvent_ActionDelay": {
              "operator": "Variables[0] ({[Skill03[4]]}) || RETURN",
              "displayLines": "{[Skill03[4]]}",
              "constants": [],
              "variables": [
                "{[Skill03[4]]}"
              ]
            },
            "MDF_W2_Feixiao_BattleEvent_BaseSpeed": {
              "operator": "Variables[0] (CurrentSpeed) || RETURN",
              "displayLines": "CurrentSpeed",
              "constants": [],
              "variables": [
                "CurrentSpeed"
              ]
            },
            "MDF_W2_Feixiao_BattleEvent_StanceBreakTakenRatio": {
              "operator": "Variables[0] ({[PassiveSkill03[5]]}) || RETURN",
              "displayLines": "{[PassiveSkill03[5]]}",
              "constants": [],
              "variables": [
                "{[PassiveSkill03[5]]}"
              ]
            }
          }
        }
      ],
      "failed": [
        {
          "name": "IF",
          "conditions": {
            "name": "AND",
            "conditionList": [
              {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"2043551800\">Monster_W2_Feixiao_Main</a>"
              },
              {
                "name": "Compare: Variable",
                "value1": "MainTrigger2",
                "compareType": "=",
                "value2": 0
              }
            ]
          },
          "passed": [
            {
              "name": "Define Custom Variable",
              "variableName": "EnhanceFlag",
              "value": 0
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
                "name": "Enemy ID",
                "ID": 203205,
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "characterName": null,
                "isCompareUniqueID": true
              },
              "ifTargetFound": [
                {
                  "name": "Define Custom Variable with Stat",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "variableName": "MaxStance",
                  "value": "&nbsp;<span class=\"descriptionNumberColor\">ToughnessMax</span>&nbsp;",
                  "warningType": "MaxToughness"
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
                            "name": "Has Flag",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Parameter Target}}"
                            },
                            "flagName": "Break"
                          },
                          {
                            "name": "Has Flag",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Parameter Target}}"
                            },
                            "flagName": "STAT_CTRL"
                          }
                        ]
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "EnhanceFlag",
                      "value": 1
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Has Flag",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "flagName": "STAT_CTRL"
                      },
                      "passed": [
                        {
                          "name": "Remove Modifier Behavior Flag(s)",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "flagNames": []
                        }
                      ]
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Has Flag",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "flagName": "Break"
                      },
                      "passed": [
                        {
                          "name": "Exit Broken-State",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          }
                        },
                        {
                          "name": "Reset Toughness",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "constantValue": {
                            "operator": "Variables[0] (MaxStance) || Constants[0] (2) || DIV || RETURN",
                            "displayLines": "(MaxStance / 2)",
                            "constants": [
                              2
                            ],
                            "variables": [
                              "MaxStance"
                            ]
                          }
                        }
                      ],
                      "failed": [
                        {
                          "name": "Define Custom Variable with Stat",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "variableName": "CurrentStance",
                          "value": "&nbsp;<span class=\"descriptionNumberColor\">CurrentToughness</span>&nbsp;"
                        },
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Compare: Variable",
                            "value1": "CurrentStance",
                            "compareType": "<",
                            "value2": {
                              "operator": "Variables[0] (MaxStance) || Constants[0] (2) || DIV || RETURN",
                              "displayLines": "(MaxStance / 2)",
                              "constants": [
                                2
                              ],
                              "variables": [
                                "MaxStance"
                              ]
                            }
                          },
                          "passed": [
                            {
                              "name": "Reset Toughness",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Parameter Target}}"
                              },
                              "constantValue": {
                                "operator": "Variables[0] (MaxStance) || Constants[0] (2) || DIV || RETURN",
                                "displayLines": "(MaxStance / 2)",
                                "constants": [
                                  2
                                ],
                                "variables": [
                                  "MaxStance"
                                ]
                              }
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "BattleEventPartFlag",
                      "value": 2
                    },
                    {
                      "name": "Add Battle Event",
                      "teamName": "Enemy Team",
                      "eventID": 20007,
                      "statSource": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "variables": {
                        "MDF_W2_Feixiao_BattleEvent_ActionDelay": {
                          "operator": "Variables[0] (LimbDelay) || RETURN",
                          "displayLines": "LimbDelay",
                          "constants": [],
                          "variables": [
                            "LimbDelay"
                          ]
                        },
                        "MDF_W2_Feixiao_BattleEvent_BaseSpeed": {
                          "operator": "Variables[0] (CurrentSpeed) || RETURN",
                          "displayLines": "CurrentSpeed",
                          "constants": [],
                          "variables": [
                            "CurrentSpeed"
                          ]
                        },
                        "MDF_W2_Feixiao_BattleEvent_StanceBreakTakenRatio": {
                          "operator": "Variables[0] ({[PassiveSkill03[5]]}) || RETURN",
                          "displayLines": "{[PassiveSkill03[5]]}",
                          "constants": [],
                          "variables": [
                            "{[PassiveSkill03[5]]}"
                          ]
                        }
                      }
                    }
                  ],
                  "failed": [
                    {
                      "name": "Define Custom Variable with Stat",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "variableName": "CurrentStance",
                      "value": "&nbsp;<span class=\"descriptionNumberColor\">CurrentToughness</span>&nbsp;"
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "CurrentStance",
                        "compareType": "<",
                        "value2": {
                          "operator": "Variables[0] (MaxStance) || Constants[0] (2) || DIV || RETURN",
                          "displayLines": "(MaxStance / 2)",
                          "constants": [
                            2
                          ],
                          "variables": [
                            "MaxStance"
                          ]
                        }
                      },
                      "passed": [
                        {
                          "name": "Reset Toughness",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "constantValue": {
                            "operator": "Variables[0] (MaxStance) || Constants[0] (2) || DIV || RETURN",
                            "displayLines": "(MaxStance / 2)",
                            "constants": [
                              2
                            ],
                            "variables": [
                              "MaxStance"
                            ]
                          }
                        }
                      ]
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "BattleEventPartFlag",
                      "value": 2
                    },
                    {
                      "name": "Add Battle Event",
                      "teamName": "Enemy Team",
                      "eventID": 20007,
                      "statSource": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "variables": {
                        "MDF_W2_Feixiao_BattleEvent_ActionDelay": {
                          "operator": "Variables[0] (LimbDelay) || RETURN",
                          "displayLines": "LimbDelay",
                          "constants": [],
                          "variables": [
                            "LimbDelay"
                          ]
                        },
                        "MDF_W2_Feixiao_BattleEvent_BaseSpeed": {
                          "operator": "Variables[0] (CurrentSpeed) || RETURN",
                          "displayLines": "CurrentSpeed",
                          "constants": [],
                          "variables": [
                            "CurrentSpeed"
                          ]
                        },
                        "MDF_W2_Feixiao_BattleEvent_StanceBreakTakenRatio": {
                          "operator": "Variables[0] ({[PassiveSkill03[5]]}) || RETURN",
                          "displayLines": "{[PassiveSkill03[5]]}",
                          "constants": [],
                          "variables": [
                            "{[PassiveSkill03[5]]}"
                          ]
                        }
                      }
                    }
                  ]
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
                "name": "Enemy ID",
                "ID": 203204,
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "characterName": null,
                "isCompareUniqueID": true
              },
              "ifTargetFound": [
                {
                  "name": "Define Custom Variable with Stat",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "variableName": "MaxStance",
                  "value": "&nbsp;<span class=\"descriptionNumberColor\">ToughnessMax</span>&nbsp;",
                  "warningType": "MaxToughness"
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
                            "name": "Has Flag",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Parameter Target}}"
                            },
                            "flagName": "Break"
                          },
                          {
                            "name": "Has Flag",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Parameter Target}}"
                            },
                            "flagName": "STAT_CTRL"
                          }
                        ]
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "EnhanceFlag",
                      "value": 1
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Has Flag",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "flagName": "STAT_CTRL"
                      },
                      "passed": [
                        {
                          "name": "Remove Modifier Behavior Flag(s)",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "flagNames": []
                        }
                      ]
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Has Flag",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "flagName": "Break"
                      },
                      "passed": [
                        {
                          "name": "Exit Broken-State",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          }
                        },
                        {
                          "name": "Reset Toughness",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "constantValue": {
                            "operator": "Variables[0] (MaxStance) || Constants[0] (2) || DIV || RETURN",
                            "displayLines": "(MaxStance / 2)",
                            "constants": [
                              2
                            ],
                            "variables": [
                              "MaxStance"
                            ]
                          }
                        }
                      ],
                      "failed": [
                        {
                          "name": "Define Custom Variable with Stat",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "variableName": "CurrentStance",
                          "value": "&nbsp;<span class=\"descriptionNumberColor\">CurrentToughness</span>&nbsp;"
                        },
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Compare: Variable",
                            "value1": "CurrentStance",
                            "compareType": "<",
                            "value2": {
                              "operator": "Variables[0] (MaxStance) || Constants[0] (2) || DIV || RETURN",
                              "displayLines": "(MaxStance / 2)",
                              "constants": [
                                2
                              ],
                              "variables": [
                                "MaxStance"
                              ]
                            }
                          },
                          "passed": [
                            {
                              "name": "Reset Toughness",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Parameter Target}}"
                              },
                              "constantValue": {
                                "operator": "Variables[0] (MaxStance) || Constants[0] (2) || DIV || RETURN",
                                "displayLines": "(MaxStance / 2)",
                                "constants": [
                                  2
                                ],
                                "variables": [
                                  "MaxStance"
                                ]
                              }
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "BattleEventPartFlag",
                      "value": 1
                    },
                    {
                      "name": "Add Battle Event",
                      "teamName": "Enemy Team",
                      "eventID": 20007,
                      "statSource": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "variables": {
                        "MDF_W2_Feixiao_BattleEvent_ActionDelay": {
                          "operator": "Variables[0] (HeadDelay) || RETURN",
                          "displayLines": "HeadDelay",
                          "constants": [],
                          "variables": [
                            "HeadDelay"
                          ]
                        },
                        "MDF_W2_Feixiao_BattleEvent_BaseSpeed": {
                          "operator": "Variables[0] (CurrentSpeed) || RETURN",
                          "displayLines": "CurrentSpeed",
                          "constants": [],
                          "variables": [
                            "CurrentSpeed"
                          ]
                        },
                        "MDF_W2_Feixiao_BattleEvent_StanceBreakTakenRatio": {
                          "operator": "Variables[0] ({[PassiveSkill03[5]]}) || RETURN",
                          "displayLines": "{[PassiveSkill03[5]]}",
                          "constants": [],
                          "variables": [
                            "{[PassiveSkill03[5]]}"
                          ]
                        }
                      }
                    }
                  ],
                  "failed": [
                    {
                      "name": "Define Custom Variable with Stat",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "variableName": "CurrentStance",
                      "value": "&nbsp;<span class=\"descriptionNumberColor\">CurrentToughness</span>&nbsp;"
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "CurrentStance",
                        "compareType": "<",
                        "value2": {
                          "operator": "Variables[0] (MaxStance) || Constants[0] (2) || DIV || RETURN",
                          "displayLines": "(MaxStance / 2)",
                          "constants": [
                            2
                          ],
                          "variables": [
                            "MaxStance"
                          ]
                        }
                      },
                      "passed": [
                        {
                          "name": "Reset Toughness",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "constantValue": {
                            "operator": "Variables[0] (MaxStance) || Constants[0] (2) || DIV || RETURN",
                            "displayLines": "(MaxStance / 2)",
                            "constants": [
                              2
                            ],
                            "variables": [
                              "MaxStance"
                            ]
                          }
                        }
                      ]
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "BattleEventPartFlag",
                      "value": 1
                    },
                    {
                      "name": "Add Battle Event",
                      "teamName": "Enemy Team",
                      "eventID": 20007,
                      "statSource": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "variables": {
                        "MDF_W2_Feixiao_BattleEvent_ActionDelay": {
                          "operator": "Variables[0] (HeadDelay) || RETURN",
                          "displayLines": "HeadDelay",
                          "constants": [],
                          "variables": [
                            "HeadDelay"
                          ]
                        },
                        "MDF_W2_Feixiao_BattleEvent_BaseSpeed": {
                          "operator": "Variables[0] (CurrentSpeed) || RETURN",
                          "displayLines": "CurrentSpeed",
                          "constants": [],
                          "variables": [
                            "CurrentSpeed"
                          ]
                        },
                        "MDF_W2_Feixiao_BattleEvent_StanceBreakTakenRatio": {
                          "operator": "Variables[0] ({[PassiveSkill03[5]]}) || RETURN",
                          "displayLines": "{[PassiveSkill03[5]]}",
                          "constants": [],
                          "variables": [
                            "{[PassiveSkill03[5]]}"
                          ]
                        }
                      }
                    }
                  ]
                }
              ]
            },
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Player Team All}}"
              },
              "ifTargetFound": [
                {
                  "name": "Define Custom Variable with Stat",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "variableName": "MainDelay",
                  "value": "&nbsp;<span class=\"descriptionNumberColor\">ActionDelay</span>&nbsp;"
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "MainDelay",
                    "compareType": "<",
                    "value2": {
                      "operator": "Variables[0] (HeadDelay) || RETURN",
                      "displayLines": "HeadDelay",
                      "constants": [],
                      "variables": [
                        "HeadDelay"
                      ]
                    }
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "MainBeforeHead",
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
                "value1": "MainBeforeHead",
                "compareType": "=",
                "value2": 0
              },
              "passed": [
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Player Team All}}"
                  },
                  "maxTargets": 1,
                  "conditions": {
                    "name": "Character ID",
                    "ID": 1220,
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "characterName": "Feixiao"
                  },
                  "ifTargetFound": [
                    {
                      "name": "Action Advance/Delay",
                      "advanceType": "Set",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "multiBase": 0
                    }
                  ]
                }
              ]
            },
            {
              "name": "Action Advance/Delay",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "advanceType": "Delay",
              "multiAdd": 0.5
            }
          ],
          "failed": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "HeadDelay",
                "compareType": ">=",
                "value2": {
                  "operator": "Variables[0] (TailDelay) || RETURN",
                  "displayLines": "TailDelay",
                  "constants": [],
                  "variables": [
                    "TailDelay"
                  ]
                }
              },
              "passed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "TailDelay",
                    "compareType": ">=",
                    "value2": {
                      "operator": "Variables[0] (LimbDelay) || RETURN",
                      "displayLines": "LimbDelay",
                      "constants": [],
                      "variables": [
                        "LimbDelay"
                      ]
                    }
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "EnhanceFlag",
                      "value": 0
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
                        "name": "Enemy ID",
                        "ID": 203206,
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "characterName": null,
                        "isCompareUniqueID": true
                      },
                      "ifTargetFound": [
                        {
                          "name": "Define Custom Variable with Stat",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "variableName": "MaxStance",
                          "value": "&nbsp;<span class=\"descriptionNumberColor\">ToughnessMax</span>&nbsp;",
                          "warningType": "MaxToughness"
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
                                    "name": "Has Flag",
                                    "target": {
                                      "name": "Target Name",
                                      "target": "{{Parameter Target}}"
                                    },
                                    "flagName": "Break"
                                  },
                                  {
                                    "name": "Has Flag",
                                    "target": {
                                      "name": "Target Name",
                                      "target": "{{Parameter Target}}"
                                    },
                                    "flagName": "STAT_CTRL"
                                  }
                                ]
                              }
                            ]
                          },
                          "passed": [
                            {
                              "name": "Define Custom Variable",
                              "variableName": "EnhanceFlag",
                              "value": 1
                            },
                            {
                              "name": "IF",
                              "conditions": {
                                "name": "Has Flag",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Parameter Target}}"
                                },
                                "flagName": "STAT_CTRL"
                              },
                              "passed": [
                                {
                                  "name": "Remove Modifier Behavior Flag(s)",
                                  "target": {
                                    "name": "Target Name",
                                    "target": "{{Parameter Target}}"
                                  },
                                  "flagNames": []
                                }
                              ]
                            },
                            {
                              "name": "IF",
                              "conditions": {
                                "name": "Has Flag",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Parameter Target}}"
                                },
                                "flagName": "Break"
                              },
                              "passed": [
                                {
                                  "name": "Exit Broken-State",
                                  "target": {
                                    "name": "Target Name",
                                    "target": "{{Parameter Target}}"
                                  }
                                },
                                {
                                  "name": "Define Custom Variable with Stat",
                                  "target": {
                                    "name": "Target Name",
                                    "target": "{{Parameter Target}}"
                                  },
                                  "variableName": "MaxStance",
                                  "value": "&nbsp;<span class=\"descriptionNumberColor\">ToughnessMax</span>&nbsp;",
                                  "warningType": "MaxToughness"
                                }
                              ],
                              "failed": [
                                {
                                  "name": "Define Custom Variable with Stat",
                                  "target": {
                                    "name": "Target Name",
                                    "target": "{{Parameter Target}}"
                                  },
                                  "variableName": "CurrentStance",
                                  "value": "&nbsp;<span class=\"descriptionNumberColor\">CurrentToughness</span>&nbsp;"
                                },
                                {
                                  "name": "IF",
                                  "conditions": {
                                    "name": "Compare: Variable",
                                    "value1": "CurrentStance",
                                    "compareType": "<",
                                    "value2": {
                                      "operator": "Variables[0] (MaxStance) || Constants[0] (2) || DIV || RETURN",
                                      "displayLines": "(MaxStance / 2)",
                                      "constants": [
                                        2
                                      ],
                                      "variables": [
                                        "MaxStance"
                                      ]
                                    }
                                  },
                                  "passed": [
                                    {
                                      "name": "Reset Toughness",
                                      "target": {
                                        "name": "Target Name",
                                        "target": "{{Parameter Target}}"
                                      },
                                      "constantValue": {
                                        "operator": "Variables[0] (MaxStance) || Constants[0] (2) || DIV || RETURN",
                                        "displayLines": "(MaxStance / 2)",
                                        "constants": [
                                          2
                                        ],
                                        "variables": [
                                          "MaxStance"
                                        ]
                                      }
                                    }
                                  ]
                                }
                              ]
                            },
                            {
                              "name": "Define Custom Variable",
                              "variableName": "BattleEventPartFlag",
                              "value": 3
                            },
                            {
                              "name": "Add Battle Event",
                              "teamName": "Enemy Team",
                              "eventID": 20007,
                              "statSource": {
                                "name": "Target Name",
                                "target": "{{Caster}}"
                              },
                              "variables": {
                                "MDF_W2_Feixiao_BattleEvent_ActionDelay": {
                                  "operator": "Variables[0] (TailDelay) || RETURN",
                                  "displayLines": "TailDelay",
                                  "constants": [],
                                  "variables": [
                                    "TailDelay"
                                  ]
                                },
                                "MDF_W2_Feixiao_BattleEvent_BaseSpeed": {
                                  "operator": "Variables[0] (CurrentSpeed) || RETURN",
                                  "displayLines": "CurrentSpeed",
                                  "constants": [],
                                  "variables": [
                                    "CurrentSpeed"
                                  ]
                                },
                                "MDF_W2_Feixiao_BattleEvent_StanceBreakTakenRatio": {
                                  "operator": "Variables[0] ({[PassiveSkill03[5]]}) || RETURN",
                                  "displayLines": "{[PassiveSkill03[5]]}",
                                  "constants": [],
                                  "variables": [
                                    "{[PassiveSkill03[5]]}"
                                  ]
                                }
                              }
                            }
                          ],
                          "failed": [
                            {
                              "name": "Define Custom Variable with Stat",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Parameter Target}}"
                              },
                              "variableName": "CurrentStance",
                              "value": "&nbsp;<span class=\"descriptionNumberColor\">CurrentToughness</span>&nbsp;"
                            },
                            {
                              "name": "IF",
                              "conditions": {
                                "name": "Compare: Variable",
                                "value1": "CurrentStance",
                                "compareType": "<",
                                "value2": {
                                  "operator": "Variables[0] (MaxStance) || Constants[0] (2) || DIV || RETURN",
                                  "displayLines": "(MaxStance / 2)",
                                  "constants": [
                                    2
                                  ],
                                  "variables": [
                                    "MaxStance"
                                  ]
                                }
                              },
                              "passed": [
                                {
                                  "name": "Reset Toughness",
                                  "target": {
                                    "name": "Target Name",
                                    "target": "{{Parameter Target}}"
                                  },
                                  "constantValue": {
                                    "operator": "Variables[0] (MaxStance) || Constants[0] (2) || DIV || RETURN",
                                    "displayLines": "(MaxStance / 2)",
                                    "constants": [
                                      2
                                    ],
                                    "variables": [
                                      "MaxStance"
                                    ]
                                  }
                                }
                              ]
                            },
                            {
                              "name": "Define Custom Variable",
                              "variableName": "BattleEventPartFlag",
                              "value": 3
                            },
                            {
                              "name": "Add Battle Event",
                              "teamName": "Enemy Team",
                              "eventID": 20007,
                              "statSource": {
                                "name": "Target Name",
                                "target": "{{Caster}}"
                              },
                              "variables": {
                                "MDF_W2_Feixiao_BattleEvent_ActionDelay": {
                                  "operator": "Variables[0] (TailDelay) || RETURN",
                                  "displayLines": "TailDelay",
                                  "constants": [],
                                  "variables": [
                                    "TailDelay"
                                  ]
                                },
                                "MDF_W2_Feixiao_BattleEvent_BaseSpeed": {
                                  "operator": "Variables[0] (CurrentSpeed) || RETURN",
                                  "displayLines": "CurrentSpeed",
                                  "constants": [],
                                  "variables": [
                                    "CurrentSpeed"
                                  ]
                                },
                                "MDF_W2_Feixiao_BattleEvent_StanceBreakTakenRatio": {
                                  "operator": "Variables[0] ({[PassiveSkill03[5]]}) || RETURN",
                                  "displayLines": "{[PassiveSkill03[5]]}",
                                  "constants": [],
                                  "variables": [
                                    "{[PassiveSkill03[5]]}"
                                  ]
                                }
                              }
                            }
                          ]
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
                        "name": "Enemy ID",
                        "ID": 203204,
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "characterName": null,
                        "isCompareUniqueID": true
                      },
                      "ifTargetFound": [
                        {
                          "name": "Define Custom Variable with Stat",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "variableName": "MaxStance",
                          "value": "&nbsp;<span class=\"descriptionNumberColor\">ToughnessMax</span>&nbsp;",
                          "warningType": "MaxToughness"
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
                                    "name": "Has Flag",
                                    "target": {
                                      "name": "Target Name",
                                      "target": "{{Parameter Target}}"
                                    },
                                    "flagName": "Break"
                                  },
                                  {
                                    "name": "Has Flag",
                                    "target": {
                                      "name": "Target Name",
                                      "target": "{{Parameter Target}}"
                                    },
                                    "flagName": "STAT_CTRL"
                                  }
                                ]
                              }
                            ]
                          },
                          "passed": [
                            {
                              "name": "Define Custom Variable",
                              "variableName": "EnhanceFlag",
                              "value": 1
                            },
                            {
                              "name": "IF",
                              "conditions": {
                                "name": "Has Flag",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Parameter Target}}"
                                },
                                "flagName": "STAT_CTRL"
                              },
                              "passed": [
                                {
                                  "name": "Remove Modifier Behavior Flag(s)",
                                  "target": {
                                    "name": "Target Name",
                                    "target": "{{Parameter Target}}"
                                  },
                                  "flagNames": []
                                }
                              ]
                            },
                            {
                              "name": "IF",
                              "conditions": {
                                "name": "Has Flag",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Parameter Target}}"
                                },
                                "flagName": "Break"
                              },
                              "passed": [
                                {
                                  "name": "Exit Broken-State",
                                  "target": {
                                    "name": "Target Name",
                                    "target": "{{Parameter Target}}"
                                  }
                                },
                                {
                                  "name": "Reset Toughness",
                                  "target": {
                                    "name": "Target Name",
                                    "target": "{{Parameter Target}}"
                                  },
                                  "constantValue": {
                                    "operator": "Variables[0] (MaxStance) || Constants[0] (2) || DIV || RETURN",
                                    "displayLines": "(MaxStance / 2)",
                                    "constants": [
                                      2
                                    ],
                                    "variables": [
                                      "MaxStance"
                                    ]
                                  }
                                }
                              ],
                              "failed": [
                                {
                                  "name": "Define Custom Variable with Stat",
                                  "target": {
                                    "name": "Target Name",
                                    "target": "{{Parameter Target}}"
                                  },
                                  "variableName": "CurrentStance",
                                  "value": "&nbsp;<span class=\"descriptionNumberColor\">CurrentToughness</span>&nbsp;"
                                },
                                {
                                  "name": "IF",
                                  "conditions": {
                                    "name": "Compare: Variable",
                                    "value1": "CurrentStance",
                                    "compareType": "<",
                                    "value2": {
                                      "operator": "Variables[0] (MaxStance) || Constants[0] (2) || DIV || RETURN",
                                      "displayLines": "(MaxStance / 2)",
                                      "constants": [
                                        2
                                      ],
                                      "variables": [
                                        "MaxStance"
                                      ]
                                    }
                                  },
                                  "passed": [
                                    {
                                      "name": "Reset Toughness",
                                      "target": {
                                        "name": "Target Name",
                                        "target": "{{Parameter Target}}"
                                      },
                                      "constantValue": {
                                        "operator": "Variables[0] (MaxStance) || Constants[0] (2) || DIV || RETURN",
                                        "displayLines": "(MaxStance / 2)",
                                        "constants": [
                                          2
                                        ],
                                        "variables": [
                                          "MaxStance"
                                        ]
                                      }
                                    }
                                  ]
                                }
                              ]
                            },
                            {
                              "name": "Define Custom Variable",
                              "variableName": "BattleEventPartFlag",
                              "value": 1
                            },
                            {
                              "name": "Add Battle Event",
                              "teamName": "Enemy Team",
                              "eventID": 20007,
                              "statSource": {
                                "name": "Target Name",
                                "target": "{{Caster}}"
                              },
                              "variables": {
                                "MDF_W2_Feixiao_BattleEvent_ActionDelay": {
                                  "operator": "Variables[0] (HeadDelay) || RETURN",
                                  "displayLines": "HeadDelay",
                                  "constants": [],
                                  "variables": [
                                    "HeadDelay"
                                  ]
                                },
                                "MDF_W2_Feixiao_BattleEvent_BaseSpeed": {
                                  "operator": "Variables[0] (CurrentSpeed) || RETURN",
                                  "displayLines": "CurrentSpeed",
                                  "constants": [],
                                  "variables": [
                                    "CurrentSpeed"
                                  ]
                                },
                                "MDF_W2_Feixiao_BattleEvent_StanceBreakTakenRatio": {
                                  "operator": "Variables[0] ({[PassiveSkill03[5]]}) || RETURN",
                                  "displayLines": "{[PassiveSkill03[5]]}",
                                  "constants": [],
                                  "variables": [
                                    "{[PassiveSkill03[5]]}"
                                  ]
                                }
                              }
                            }
                          ],
                          "failed": [
                            {
                              "name": "Define Custom Variable with Stat",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Parameter Target}}"
                              },
                              "variableName": "CurrentStance",
                              "value": "&nbsp;<span class=\"descriptionNumberColor\">CurrentToughness</span>&nbsp;"
                            },
                            {
                              "name": "IF",
                              "conditions": {
                                "name": "Compare: Variable",
                                "value1": "CurrentStance",
                                "compareType": "<",
                                "value2": {
                                  "operator": "Variables[0] (MaxStance) || Constants[0] (2) || DIV || RETURN",
                                  "displayLines": "(MaxStance / 2)",
                                  "constants": [
                                    2
                                  ],
                                  "variables": [
                                    "MaxStance"
                                  ]
                                }
                              },
                              "passed": [
                                {
                                  "name": "Reset Toughness",
                                  "target": {
                                    "name": "Target Name",
                                    "target": "{{Parameter Target}}"
                                  },
                                  "constantValue": {
                                    "operator": "Variables[0] (MaxStance) || Constants[0] (2) || DIV || RETURN",
                                    "displayLines": "(MaxStance / 2)",
                                    "constants": [
                                      2
                                    ],
                                    "variables": [
                                      "MaxStance"
                                    ]
                                  }
                                }
                              ]
                            },
                            {
                              "name": "Define Custom Variable",
                              "variableName": "BattleEventPartFlag",
                              "value": 1
                            },
                            {
                              "name": "Add Battle Event",
                              "teamName": "Enemy Team",
                              "eventID": 20007,
                              "statSource": {
                                "name": "Target Name",
                                "target": "{{Caster}}"
                              },
                              "variables": {
                                "MDF_W2_Feixiao_BattleEvent_ActionDelay": {
                                  "operator": "Variables[0] (HeadDelay) || RETURN",
                                  "displayLines": "HeadDelay",
                                  "constants": [],
                                  "variables": [
                                    "HeadDelay"
                                  ]
                                },
                                "MDF_W2_Feixiao_BattleEvent_BaseSpeed": {
                                  "operator": "Variables[0] (CurrentSpeed) || RETURN",
                                  "displayLines": "CurrentSpeed",
                                  "constants": [],
                                  "variables": [
                                    "CurrentSpeed"
                                  ]
                                },
                                "MDF_W2_Feixiao_BattleEvent_StanceBreakTakenRatio": {
                                  "operator": "Variables[0] ({[PassiveSkill03[5]]}) || RETURN",
                                  "displayLines": "{[PassiveSkill03[5]]}",
                                  "constants": [],
                                  "variables": [
                                    "{[PassiveSkill03[5]]}"
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
                        "name": "Compare: Variable",
                        "value1": "HeadDelay",
                        "compareType": ">=",
                        "value2": {
                          "operator": "Variables[0] (LimbDelay) || RETURN",
                          "displayLines": "LimbDelay",
                          "constants": [],
                          "variables": [
                            "LimbDelay"
                          ]
                        }
                      },
                      "passed": [
                        {
                          "name": "Define Custom Variable",
                          "variableName": "EnhanceFlag",
                          "value": 0
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
                            "name": "Enemy ID",
                            "ID": 203205,
                            "target": {
                              "name": "Target Name",
                              "target": "{{Parameter Target}}"
                            },
                            "characterName": null,
                            "isCompareUniqueID": true
                          },
                          "ifTargetFound": [
                            {
                              "name": "Define Custom Variable with Stat",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Parameter Target}}"
                              },
                              "variableName": "MaxStance",
                              "value": "&nbsp;<span class=\"descriptionNumberColor\">ToughnessMax</span>&nbsp;",
                              "warningType": "MaxToughness"
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
                                        "name": "Has Flag",
                                        "target": {
                                          "name": "Target Name",
                                          "target": "{{Parameter Target}}"
                                        },
                                        "flagName": "Break"
                                      },
                                      {
                                        "name": "Has Flag",
                                        "target": {
                                          "name": "Target Name",
                                          "target": "{{Parameter Target}}"
                                        },
                                        "flagName": "STAT_CTRL"
                                      }
                                    ]
                                  }
                                ]
                              },
                              "passed": [
                                {
                                  "name": "Define Custom Variable",
                                  "variableName": "EnhanceFlag",
                                  "value": 1
                                },
                                {
                                  "name": "IF",
                                  "conditions": {
                                    "name": "Has Flag",
                                    "target": {
                                      "name": "Target Name",
                                      "target": "{{Parameter Target}}"
                                    },
                                    "flagName": "STAT_CTRL"
                                  },
                                  "passed": [
                                    {
                                      "name": "Remove Modifier Behavior Flag(s)",
                                      "target": {
                                        "name": "Target Name",
                                        "target": "{{Parameter Target}}"
                                      },
                                      "flagNames": []
                                    }
                                  ]
                                },
                                {
                                  "name": "IF",
                                  "conditions": {
                                    "name": "Has Flag",
                                    "target": {
                                      "name": "Target Name",
                                      "target": "{{Parameter Target}}"
                                    },
                                    "flagName": "Break"
                                  },
                                  "passed": [
                                    {
                                      "name": "Exit Broken-State",
                                      "target": {
                                        "name": "Target Name",
                                        "target": "{{Parameter Target}}"
                                      }
                                    },
                                    {
                                      "name": "Reset Toughness",
                                      "target": {
                                        "name": "Target Name",
                                        "target": "{{Parameter Target}}"
                                      },
                                      "constantValue": {
                                        "operator": "Variables[0] (MaxStance) || Constants[0] (2) || DIV || RETURN",
                                        "displayLines": "(MaxStance / 2)",
                                        "constants": [
                                          2
                                        ],
                                        "variables": [
                                          "MaxStance"
                                        ]
                                      }
                                    }
                                  ],
                                  "failed": [
                                    {
                                      "name": "Define Custom Variable with Stat",
                                      "target": {
                                        "name": "Target Name",
                                        "target": "{{Parameter Target}}"
                                      },
                                      "variableName": "CurrentStance",
                                      "value": "&nbsp;<span class=\"descriptionNumberColor\">CurrentToughness</span>&nbsp;"
                                    },
                                    {
                                      "name": "IF",
                                      "conditions": {
                                        "name": "Compare: Variable",
                                        "value1": "CurrentStance",
                                        "compareType": "<",
                                        "value2": {
                                          "operator": "Variables[0] (MaxStance) || Constants[0] (2) || DIV || RETURN",
                                          "displayLines": "(MaxStance / 2)",
                                          "constants": [
                                            2
                                          ],
                                          "variables": [
                                            "MaxStance"
                                          ]
                                        }
                                      },
                                      "passed": [
                                        {
                                          "name": "Reset Toughness",
                                          "target": {
                                            "name": "Target Name",
                                            "target": "{{Parameter Target}}"
                                          },
                                          "constantValue": {
                                            "operator": "Variables[0] (MaxStance) || Constants[0] (2) || DIV || RETURN",
                                            "displayLines": "(MaxStance / 2)",
                                            "constants": [
                                              2
                                            ],
                                            "variables": [
                                              "MaxStance"
                                            ]
                                          }
                                        }
                                      ]
                                    }
                                  ]
                                },
                                {
                                  "name": "Define Custom Variable",
                                  "variableName": "BattleEventPartFlag",
                                  "value": 2
                                },
                                {
                                  "name": "Add Battle Event",
                                  "teamName": "Enemy Team",
                                  "eventID": 20007,
                                  "statSource": {
                                    "name": "Target Name",
                                    "target": "{{Caster}}"
                                  },
                                  "variables": {
                                    "MDF_W2_Feixiao_BattleEvent_ActionDelay": {
                                      "operator": "Variables[0] (LimbDelay) || RETURN",
                                      "displayLines": "LimbDelay",
                                      "constants": [],
                                      "variables": [
                                        "LimbDelay"
                                      ]
                                    },
                                    "MDF_W2_Feixiao_BattleEvent_BaseSpeed": {
                                      "operator": "Variables[0] (CurrentSpeed) || RETURN",
                                      "displayLines": "CurrentSpeed",
                                      "constants": [],
                                      "variables": [
                                        "CurrentSpeed"
                                      ]
                                    },
                                    "MDF_W2_Feixiao_BattleEvent_StanceBreakTakenRatio": {
                                      "operator": "Variables[0] ({[PassiveSkill03[5]]}) || RETURN",
                                      "displayLines": "{[PassiveSkill03[5]]}",
                                      "constants": [],
                                      "variables": [
                                        "{[PassiveSkill03[5]]}"
                                      ]
                                    }
                                  }
                                }
                              ],
                              "failed": [
                                {
                                  "name": "Define Custom Variable with Stat",
                                  "target": {
                                    "name": "Target Name",
                                    "target": "{{Parameter Target}}"
                                  },
                                  "variableName": "CurrentStance",
                                  "value": "&nbsp;<span class=\"descriptionNumberColor\">CurrentToughness</span>&nbsp;"
                                },
                                {
                                  "name": "IF",
                                  "conditions": {
                                    "name": "Compare: Variable",
                                    "value1": "CurrentStance",
                                    "compareType": "<",
                                    "value2": {
                                      "operator": "Variables[0] (MaxStance) || Constants[0] (2) || DIV || RETURN",
                                      "displayLines": "(MaxStance / 2)",
                                      "constants": [
                                        2
                                      ],
                                      "variables": [
                                        "MaxStance"
                                      ]
                                    }
                                  },
                                  "passed": [
                                    {
                                      "name": "Reset Toughness",
                                      "target": {
                                        "name": "Target Name",
                                        "target": "{{Parameter Target}}"
                                      },
                                      "constantValue": {
                                        "operator": "Variables[0] (MaxStance) || Constants[0] (2) || DIV || RETURN",
                                        "displayLines": "(MaxStance / 2)",
                                        "constants": [
                                          2
                                        ],
                                        "variables": [
                                          "MaxStance"
                                        ]
                                      }
                                    }
                                  ]
                                },
                                {
                                  "name": "Define Custom Variable",
                                  "variableName": "BattleEventPartFlag",
                                  "value": 2
                                },
                                {
                                  "name": "Define Custom Variable",
                                  "variableName": "BattleEventPartFlag",
                                  "value": 2
                                },
                                {
                                  "name": "Add Battle Event",
                                  "teamName": "Enemy Team",
                                  "eventID": 20007,
                                  "statSource": {
                                    "name": "Target Name",
                                    "target": "{{Caster}}"
                                  },
                                  "variables": {
                                    "MDF_W2_Feixiao_BattleEvent_ActionDelay": {
                                      "operator": "Variables[0] (LimbDelay) || RETURN",
                                      "displayLines": "LimbDelay",
                                      "constants": [],
                                      "variables": [
                                        "LimbDelay"
                                      ]
                                    },
                                    "MDF_W2_Feixiao_BattleEvent_BaseSpeed": {
                                      "operator": "Variables[0] (CurrentSpeed) || RETURN",
                                      "displayLines": "CurrentSpeed",
                                      "constants": [],
                                      "variables": [
                                        "CurrentSpeed"
                                      ]
                                    },
                                    "MDF_W2_Feixiao_BattleEvent_StanceBreakTakenRatio": {
                                      "operator": "Variables[0] ({[PassiveSkill03[5]]}) || RETURN",
                                      "displayLines": "{[PassiveSkill03[5]]}",
                                      "constants": [],
                                      "variables": [
                                        "{[PassiveSkill03[5]]}"
                                      ]
                                    }
                                  }
                                }
                              ]
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
                            "name": "Enemy ID",
                            "ID": 203204,
                            "target": {
                              "name": "Target Name",
                              "target": "{{Parameter Target}}"
                            },
                            "characterName": null,
                            "isCompareUniqueID": true
                          },
                          "ifTargetFound": [
                            {
                              "name": "Define Custom Variable with Stat",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Parameter Target}}"
                              },
                              "variableName": "MaxStance",
                              "value": "&nbsp;<span class=\"descriptionNumberColor\">ToughnessMax</span>&nbsp;",
                              "warningType": "MaxToughness"
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
                                        "name": "Has Flag",
                                        "target": {
                                          "name": "Target Name",
                                          "target": "{{Parameter Target}}"
                                        },
                                        "flagName": "Break"
                                      },
                                      {
                                        "name": "Has Flag",
                                        "target": {
                                          "name": "Target Name",
                                          "target": "{{Parameter Target}}"
                                        },
                                        "flagName": "STAT_CTRL"
                                      }
                                    ]
                                  }
                                ]
                              },
                              "passed": [
                                {
                                  "name": "Define Custom Variable",
                                  "variableName": "EnhanceFlag",
                                  "value": 1
                                },
                                {
                                  "name": "IF",
                                  "conditions": {
                                    "name": "Has Flag",
                                    "target": {
                                      "name": "Target Name",
                                      "target": "{{Parameter Target}}"
                                    },
                                    "flagName": "STAT_CTRL"
                                  },
                                  "passed": [
                                    {
                                      "name": "Remove Modifier Behavior Flag(s)",
                                      "target": {
                                        "name": "Target Name",
                                        "target": "{{Parameter Target}}"
                                      },
                                      "flagNames": []
                                    }
                                  ]
                                },
                                {
                                  "name": "IF",
                                  "conditions": {
                                    "name": "Has Flag",
                                    "target": {
                                      "name": "Target Name",
                                      "target": "{{Parameter Target}}"
                                    },
                                    "flagName": "Break"
                                  },
                                  "passed": [
                                    {
                                      "name": "Exit Broken-State",
                                      "target": {
                                        "name": "Target Name",
                                        "target": "{{Parameter Target}}"
                                      }
                                    },
                                    {
                                      "name": "Reset Toughness",
                                      "target": {
                                        "name": "Target Name",
                                        "target": "{{Parameter Target}}"
                                      },
                                      "constantValue": {
                                        "operator": "Variables[0] (MaxStance) || Constants[0] (2) || DIV || RETURN",
                                        "displayLines": "(MaxStance / 2)",
                                        "constants": [
                                          2
                                        ],
                                        "variables": [
                                          "MaxStance"
                                        ]
                                      }
                                    }
                                  ],
                                  "failed": [
                                    {
                                      "name": "Define Custom Variable with Stat",
                                      "target": {
                                        "name": "Target Name",
                                        "target": "{{Parameter Target}}"
                                      },
                                      "variableName": "CurrentStance",
                                      "value": "&nbsp;<span class=\"descriptionNumberColor\">CurrentToughness</span>&nbsp;"
                                    },
                                    {
                                      "name": "IF",
                                      "conditions": {
                                        "name": "Compare: Variable",
                                        "value1": "CurrentStance",
                                        "compareType": "<",
                                        "value2": {
                                          "operator": "Variables[0] (MaxStance) || Constants[0] (2) || DIV || RETURN",
                                          "displayLines": "(MaxStance / 2)",
                                          "constants": [
                                            2
                                          ],
                                          "variables": [
                                            "MaxStance"
                                          ]
                                        }
                                      },
                                      "passed": [
                                        {
                                          "name": "Reset Toughness",
                                          "target": {
                                            "name": "Target Name",
                                            "target": "{{Parameter Target}}"
                                          },
                                          "constantValue": {
                                            "operator": "Variables[0] (MaxStance) || Constants[0] (2) || DIV || RETURN",
                                            "displayLines": "(MaxStance / 2)",
                                            "constants": [
                                              2
                                            ],
                                            "variables": [
                                              "MaxStance"
                                            ]
                                          }
                                        }
                                      ]
                                    }
                                  ]
                                },
                                {
                                  "name": "Define Custom Variable",
                                  "variableName": "BattleEventPartFlag",
                                  "value": 1
                                },
                                {
                                  "name": "Add Battle Event",
                                  "teamName": "Enemy Team",
                                  "eventID": 20007,
                                  "statSource": {
                                    "name": "Target Name",
                                    "target": "{{Caster}}"
                                  },
                                  "variables": {
                                    "MDF_W2_Feixiao_BattleEvent_ActionDelay": {
                                      "operator": "Variables[0] (HeadDelay) || RETURN",
                                      "displayLines": "HeadDelay",
                                      "constants": [],
                                      "variables": [
                                        "HeadDelay"
                                      ]
                                    },
                                    "MDF_W2_Feixiao_BattleEvent_BaseSpeed": {
                                      "operator": "Variables[0] (CurrentSpeed) || RETURN",
                                      "displayLines": "CurrentSpeed",
                                      "constants": [],
                                      "variables": [
                                        "CurrentSpeed"
                                      ]
                                    },
                                    "MDF_W2_Feixiao_BattleEvent_StanceBreakTakenRatio": {
                                      "operator": "Variables[0] ({[PassiveSkill03[5]]}) || RETURN",
                                      "displayLines": "{[PassiveSkill03[5]]}",
                                      "constants": [],
                                      "variables": [
                                        "{[PassiveSkill03[5]]}"
                                      ]
                                    }
                                  }
                                }
                              ],
                              "failed": [
                                {
                                  "name": "Define Custom Variable with Stat",
                                  "target": {
                                    "name": "Target Name",
                                    "target": "{{Parameter Target}}"
                                  },
                                  "variableName": "CurrentStance",
                                  "value": "&nbsp;<span class=\"descriptionNumberColor\">CurrentToughness</span>&nbsp;"
                                },
                                {
                                  "name": "IF",
                                  "conditions": {
                                    "name": "Compare: Variable",
                                    "value1": "CurrentStance",
                                    "compareType": "<",
                                    "value2": {
                                      "operator": "Variables[0] (MaxStance) || Constants[0] (2) || DIV || RETURN",
                                      "displayLines": "(MaxStance / 2)",
                                      "constants": [
                                        2
                                      ],
                                      "variables": [
                                        "MaxStance"
                                      ]
                                    }
                                  },
                                  "passed": [
                                    {
                                      "name": "Reset Toughness",
                                      "target": {
                                        "name": "Target Name",
                                        "target": "{{Parameter Target}}"
                                      },
                                      "constantValue": {
                                        "operator": "Variables[0] (MaxStance) || Constants[0] (2) || DIV || RETURN",
                                        "displayLines": "(MaxStance / 2)",
                                        "constants": [
                                          2
                                        ],
                                        "variables": [
                                          "MaxStance"
                                        ]
                                      }
                                    }
                                  ]
                                },
                                {
                                  "name": "Define Custom Variable",
                                  "variableName": "BattleEventPartFlag",
                                  "value": 1
                                },
                                {
                                  "name": "Add Battle Event",
                                  "teamName": "Enemy Team",
                                  "eventID": 20007,
                                  "statSource": {
                                    "name": "Target Name",
                                    "target": "{{Caster}}"
                                  },
                                  "variables": {
                                    "MDF_W2_Feixiao_BattleEvent_ActionDelay": {
                                      "operator": "Variables[0] (HeadDelay) || RETURN",
                                      "displayLines": "HeadDelay",
                                      "constants": [],
                                      "variables": [
                                        "HeadDelay"
                                      ]
                                    },
                                    "MDF_W2_Feixiao_BattleEvent_BaseSpeed": {
                                      "operator": "Variables[0] (CurrentSpeed) || RETURN",
                                      "displayLines": "CurrentSpeed",
                                      "constants": [],
                                      "variables": [
                                        "CurrentSpeed"
                                      ]
                                    },
                                    "MDF_W2_Feixiao_BattleEvent_StanceBreakTakenRatio": {
                                      "operator": "Variables[0] ({[PassiveSkill03[5]]}) || RETURN",
                                      "displayLines": "{[PassiveSkill03[5]]}",
                                      "constants": [],
                                      "variables": [
                                        "{[PassiveSkill03[5]]}"
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
                          "name": "Define Custom Variable",
                          "variableName": "EnhanceFlag",
                          "value": 0
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
                            "name": "Enemy ID",
                            "ID": 203204,
                            "target": {
                              "name": "Target Name",
                              "target": "{{Parameter Target}}"
                            },
                            "characterName": null,
                            "isCompareUniqueID": true
                          },
                          "ifTargetFound": [
                            {
                              "name": "Define Custom Variable with Stat",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Parameter Target}}"
                              },
                              "variableName": "MaxStance",
                              "value": "&nbsp;<span class=\"descriptionNumberColor\">ToughnessMax</span>&nbsp;",
                              "warningType": "MaxToughness"
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
                                        "name": "Has Flag",
                                        "target": {
                                          "name": "Target Name",
                                          "target": "{{Parameter Target}}"
                                        },
                                        "flagName": "Break"
                                      },
                                      {
                                        "name": "Has Flag",
                                        "target": {
                                          "name": "Target Name",
                                          "target": "{{Parameter Target}}"
                                        },
                                        "flagName": "STAT_CTRL"
                                      }
                                    ]
                                  }
                                ]
                              },
                              "passed": [
                                {
                                  "name": "Define Custom Variable",
                                  "variableName": "EnhanceFlag",
                                  "value": 1
                                },
                                {
                                  "name": "IF",
                                  "conditions": {
                                    "name": "Has Flag",
                                    "target": {
                                      "name": "Target Name",
                                      "target": "{{Parameter Target}}"
                                    },
                                    "flagName": "STAT_CTRL"
                                  },
                                  "passed": [
                                    {
                                      "name": "Remove Modifier Behavior Flag(s)",
                                      "target": {
                                        "name": "Target Name",
                                        "target": "{{Parameter Target}}"
                                      },
                                      "flagNames": []
                                    }
                                  ]
                                },
                                {
                                  "name": "IF",
                                  "conditions": {
                                    "name": "Has Flag",
                                    "target": {
                                      "name": "Target Name",
                                      "target": "{{Parameter Target}}"
                                    },
                                    "flagName": "Break"
                                  },
                                  "passed": [
                                    {
                                      "name": "Exit Broken-State",
                                      "target": {
                                        "name": "Target Name",
                                        "target": "{{Parameter Target}}"
                                      }
                                    },
                                    {
                                      "name": "Reset Toughness",
                                      "target": {
                                        "name": "Target Name",
                                        "target": "{{Parameter Target}}"
                                      },
                                      "constantValue": {
                                        "operator": "Variables[0] (MaxStance) || Constants[0] (2) || DIV || RETURN",
                                        "displayLines": "(MaxStance / 2)",
                                        "constants": [
                                          2
                                        ],
                                        "variables": [
                                          "MaxStance"
                                        ]
                                      }
                                    }
                                  ],
                                  "failed": [
                                    {
                                      "name": "Define Custom Variable with Stat",
                                      "target": {
                                        "name": "Target Name",
                                        "target": "{{Parameter Target}}"
                                      },
                                      "variableName": "CurrentStance",
                                      "value": "&nbsp;<span class=\"descriptionNumberColor\">CurrentToughness</span>&nbsp;"
                                    },
                                    {
                                      "name": "IF",
                                      "conditions": {
                                        "name": "Compare: Variable",
                                        "value1": "CurrentStance",
                                        "compareType": "<",
                                        "value2": {
                                          "operator": "Variables[0] (MaxStance) || Constants[0] (2) || DIV || RETURN",
                                          "displayLines": "(MaxStance / 2)",
                                          "constants": [
                                            2
                                          ],
                                          "variables": [
                                            "MaxStance"
                                          ]
                                        }
                                      },
                                      "passed": [
                                        {
                                          "name": "Reset Toughness",
                                          "target": {
                                            "name": "Target Name",
                                            "target": "{{Parameter Target}}"
                                          },
                                          "constantValue": {
                                            "operator": "Variables[0] (MaxStance) || Constants[0] (2) || DIV || RETURN",
                                            "displayLines": "(MaxStance / 2)",
                                            "constants": [
                                              2
                                            ],
                                            "variables": [
                                              "MaxStance"
                                            ]
                                          }
                                        }
                                      ]
                                    }
                                  ]
                                },
                                {
                                  "name": "Define Custom Variable",
                                  "variableName": "BattleEventPartFlag",
                                  "value": 1
                                },
                                {
                                  "name": "Add Battle Event",
                                  "teamName": "Enemy Team",
                                  "eventID": 20007,
                                  "statSource": {
                                    "name": "Target Name",
                                    "target": "{{Caster}}"
                                  },
                                  "variables": {
                                    "MDF_W2_Feixiao_BattleEvent_ActionDelay": {
                                      "operator": "Variables[0] (HeadDelay) || RETURN",
                                      "displayLines": "HeadDelay",
                                      "constants": [],
                                      "variables": [
                                        "HeadDelay"
                                      ]
                                    },
                                    "MDF_W2_Feixiao_BattleEvent_BaseSpeed": {
                                      "operator": "Variables[0] (CurrentSpeed) || RETURN",
                                      "displayLines": "CurrentSpeed",
                                      "constants": [],
                                      "variables": [
                                        "CurrentSpeed"
                                      ]
                                    },
                                    "MDF_W2_Feixiao_BattleEvent_StanceBreakTakenRatio": {
                                      "operator": "Variables[0] ({[PassiveSkill03[5]]}) || RETURN",
                                      "displayLines": "{[PassiveSkill03[5]]}",
                                      "constants": [],
                                      "variables": [
                                        "{[PassiveSkill03[5]]}"
                                      ]
                                    }
                                  }
                                }
                              ],
                              "failed": [
                                {
                                  "name": "Define Custom Variable with Stat",
                                  "target": {
                                    "name": "Target Name",
                                    "target": "{{Parameter Target}}"
                                  },
                                  "variableName": "CurrentStance",
                                  "value": "&nbsp;<span class=\"descriptionNumberColor\">CurrentToughness</span>&nbsp;"
                                },
                                {
                                  "name": "IF",
                                  "conditions": {
                                    "name": "Compare: Variable",
                                    "value1": "CurrentStance",
                                    "compareType": "<",
                                    "value2": {
                                      "operator": "Variables[0] (MaxStance) || Constants[0] (2) || DIV || RETURN",
                                      "displayLines": "(MaxStance / 2)",
                                      "constants": [
                                        2
                                      ],
                                      "variables": [
                                        "MaxStance"
                                      ]
                                    }
                                  },
                                  "passed": [
                                    {
                                      "name": "Reset Toughness",
                                      "target": {
                                        "name": "Target Name",
                                        "target": "{{Parameter Target}}"
                                      },
                                      "constantValue": {
                                        "operator": "Variables[0] (MaxStance) || Constants[0] (2) || DIV || RETURN",
                                        "displayLines": "(MaxStance / 2)",
                                        "constants": [
                                          2
                                        ],
                                        "variables": [
                                          "MaxStance"
                                        ]
                                      }
                                    }
                                  ]
                                },
                                {
                                  "name": "Define Custom Variable",
                                  "variableName": "BattleEventPartFlag",
                                  "value": 1
                                },
                                {
                                  "name": "Add Battle Event",
                                  "teamName": "Enemy Team",
                                  "eventID": 20007,
                                  "statSource": {
                                    "name": "Target Name",
                                    "target": "{{Caster}}"
                                  },
                                  "variables": {
                                    "MDF_W2_Feixiao_BattleEvent_ActionDelay": {
                                      "operator": "Variables[0] (HeadDelay) || RETURN",
                                      "displayLines": "HeadDelay",
                                      "constants": [],
                                      "variables": [
                                        "HeadDelay"
                                      ]
                                    },
                                    "MDF_W2_Feixiao_BattleEvent_BaseSpeed": {
                                      "operator": "Variables[0] (CurrentSpeed) || RETURN",
                                      "displayLines": "CurrentSpeed",
                                      "constants": [],
                                      "variables": [
                                        "CurrentSpeed"
                                      ]
                                    },
                                    "MDF_W2_Feixiao_BattleEvent_StanceBreakTakenRatio": {
                                      "operator": "Variables[0] ({[PassiveSkill03[5]]}) || RETURN",
                                      "displayLines": "{[PassiveSkill03[5]]}",
                                      "constants": [],
                                      "variables": [
                                        "{[PassiveSkill03[5]]}"
                                      ]
                                    }
                                  }
                                }
                              ]
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
                            "name": "Enemy ID",
                            "ID": 203205,
                            "target": {
                              "name": "Target Name",
                              "target": "{{Parameter Target}}"
                            },
                            "characterName": null,
                            "isCompareUniqueID": true
                          },
                          "ifTargetFound": [
                            {
                              "name": "Define Custom Variable with Stat",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Parameter Target}}"
                              },
                              "variableName": "MaxStance",
                              "value": "&nbsp;<span class=\"descriptionNumberColor\">ToughnessMax</span>&nbsp;",
                              "warningType": "MaxToughness"
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
                                        "name": "Has Flag",
                                        "target": {
                                          "name": "Target Name",
                                          "target": "{{Parameter Target}}"
                                        },
                                        "flagName": "Break"
                                      },
                                      {
                                        "name": "Has Flag",
                                        "target": {
                                          "name": "Target Name",
                                          "target": "{{Parameter Target}}"
                                        },
                                        "flagName": "STAT_CTRL"
                                      }
                                    ]
                                  }
                                ]
                              },
                              "passed": [
                                {
                                  "name": "Define Custom Variable",
                                  "variableName": "EnhanceFlag",
                                  "value": 1
                                },
                                {
                                  "name": "IF",
                                  "conditions": {
                                    "name": "Has Flag",
                                    "target": {
                                      "name": "Target Name",
                                      "target": "{{Parameter Target}}"
                                    },
                                    "flagName": "STAT_CTRL"
                                  },
                                  "passed": [
                                    {
                                      "name": "Remove Modifier Behavior Flag(s)",
                                      "target": {
                                        "name": "Target Name",
                                        "target": "{{Parameter Target}}"
                                      },
                                      "flagNames": []
                                    }
                                  ]
                                },
                                {
                                  "name": "IF",
                                  "conditions": {
                                    "name": "Has Flag",
                                    "target": {
                                      "name": "Target Name",
                                      "target": "{{Parameter Target}}"
                                    },
                                    "flagName": "Break"
                                  },
                                  "passed": [
                                    {
                                      "name": "Exit Broken-State",
                                      "target": {
                                        "name": "Target Name",
                                        "target": "{{Parameter Target}}"
                                      }
                                    },
                                    {
                                      "name": "Reset Toughness",
                                      "target": {
                                        "name": "Target Name",
                                        "target": "{{Parameter Target}}"
                                      },
                                      "constantValue": {
                                        "operator": "Variables[0] (MaxStance) || Constants[0] (2) || DIV || RETURN",
                                        "displayLines": "(MaxStance / 2)",
                                        "constants": [
                                          2
                                        ],
                                        "variables": [
                                          "MaxStance"
                                        ]
                                      }
                                    }
                                  ],
                                  "failed": [
                                    {
                                      "name": "Define Custom Variable with Stat",
                                      "target": {
                                        "name": "Target Name",
                                        "target": "{{Parameter Target}}"
                                      },
                                      "variableName": "CurrentStance",
                                      "value": "&nbsp;<span class=\"descriptionNumberColor\">CurrentToughness</span>&nbsp;"
                                    },
                                    {
                                      "name": "IF",
                                      "conditions": {
                                        "name": "Compare: Variable",
                                        "value1": "CurrentStance",
                                        "compareType": "<",
                                        "value2": {
                                          "operator": "Variables[0] (MaxStance) || Constants[0] (2) || DIV || RETURN",
                                          "displayLines": "(MaxStance / 2)",
                                          "constants": [
                                            2
                                          ],
                                          "variables": [
                                            "MaxStance"
                                          ]
                                        }
                                      },
                                      "passed": [
                                        {
                                          "name": "Reset Toughness",
                                          "target": {
                                            "name": "Target Name",
                                            "target": "{{Parameter Target}}"
                                          },
                                          "constantValue": {
                                            "operator": "Variables[0] (MaxStance) || Constants[0] (2) || DIV || RETURN",
                                            "displayLines": "(MaxStance / 2)",
                                            "constants": [
                                              2
                                            ],
                                            "variables": [
                                              "MaxStance"
                                            ]
                                          }
                                        }
                                      ]
                                    }
                                  ]
                                },
                                {
                                  "name": "Define Custom Variable",
                                  "variableName": "BattleEventPartFlag",
                                  "value": 2
                                },
                                {
                                  "name": "Add Battle Event",
                                  "teamName": "Enemy Team",
                                  "eventID": 20007,
                                  "statSource": {
                                    "name": "Target Name",
                                    "target": "{{Caster}}"
                                  },
                                  "variables": {
                                    "MDF_W2_Feixiao_BattleEvent_ActionDelay": {
                                      "operator": "Variables[0] (LimbDelay) || RETURN",
                                      "displayLines": "LimbDelay",
                                      "constants": [],
                                      "variables": [
                                        "LimbDelay"
                                      ]
                                    },
                                    "MDF_W2_Feixiao_BattleEvent_BaseSpeed": {
                                      "operator": "Variables[0] (CurrentSpeed) || RETURN",
                                      "displayLines": "CurrentSpeed",
                                      "constants": [],
                                      "variables": [
                                        "CurrentSpeed"
                                      ]
                                    },
                                    "MDF_W2_Feixiao_BattleEvent_StanceBreakTakenRatio": {
                                      "operator": "Variables[0] ({[PassiveSkill03[5]]}) || RETURN",
                                      "displayLines": "{[PassiveSkill03[5]]}",
                                      "constants": [],
                                      "variables": [
                                        "{[PassiveSkill03[5]]}"
                                      ]
                                    }
                                  }
                                }
                              ],
                              "failed": [
                                {
                                  "name": "Define Custom Variable with Stat",
                                  "target": {
                                    "name": "Target Name",
                                    "target": "{{Parameter Target}}"
                                  },
                                  "variableName": "CurrentStance",
                                  "value": "&nbsp;<span class=\"descriptionNumberColor\">CurrentToughness</span>&nbsp;"
                                },
                                {
                                  "name": "IF",
                                  "conditions": {
                                    "name": "Compare: Variable",
                                    "value1": "CurrentStance",
                                    "compareType": "<",
                                    "value2": {
                                      "operator": "Variables[0] (MaxStance) || Constants[0] (2) || DIV || RETURN",
                                      "displayLines": "(MaxStance / 2)",
                                      "constants": [
                                        2
                                      ],
                                      "variables": [
                                        "MaxStance"
                                      ]
                                    }
                                  },
                                  "passed": [
                                    {
                                      "name": "Reset Toughness",
                                      "target": {
                                        "name": "Target Name",
                                        "target": "{{Parameter Target}}"
                                      },
                                      "constantValue": {
                                        "operator": "Variables[0] (MaxStance) || Constants[0] (2) || DIV || RETURN",
                                        "displayLines": "(MaxStance / 2)",
                                        "constants": [
                                          2
                                        ],
                                        "variables": [
                                          "MaxStance"
                                        ]
                                      }
                                    }
                                  ]
                                },
                                {
                                  "name": "Define Custom Variable",
                                  "variableName": "BattleEventPartFlag",
                                  "value": 2
                                },
                                {
                                  "name": "Add Battle Event",
                                  "teamName": "Enemy Team",
                                  "eventID": 20007,
                                  "statSource": {
                                    "name": "Target Name",
                                    "target": "{{Caster}}"
                                  },
                                  "variables": {
                                    "MDF_W2_Feixiao_BattleEvent_ActionDelay": {
                                      "operator": "Variables[0] (LimbDelay) || RETURN",
                                      "displayLines": "LimbDelay",
                                      "constants": [],
                                      "variables": [
                                        "LimbDelay"
                                      ]
                                    },
                                    "MDF_W2_Feixiao_BattleEvent_BaseSpeed": {
                                      "operator": "Variables[0] (CurrentSpeed) || RETURN",
                                      "displayLines": "CurrentSpeed",
                                      "constants": [],
                                      "variables": [
                                        "CurrentSpeed"
                                      ]
                                    },
                                    "MDF_W2_Feixiao_BattleEvent_StanceBreakTakenRatio": {
                                      "operator": "Variables[0] ({[PassiveSkill03[5]]}) || RETURN",
                                      "displayLines": "{[PassiveSkill03[5]]}",
                                      "constants": [],
                                      "variables": [
                                        "{[PassiveSkill03[5]]}"
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
              "failed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "HeadDelay",
                    "compareType": ">=",
                    "value2": {
                      "operator": "Variables[0] (LimbDelay) || RETURN",
                      "displayLines": "LimbDelay",
                      "constants": [],
                      "variables": [
                        "LimbDelay"
                      ]
                    }
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "EnhanceFlag",
                      "value": 0
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
                        "name": "Enemy ID",
                        "ID": 203204,
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "characterName": null,
                        "isCompareUniqueID": true
                      },
                      "ifTargetFound": [
                        {
                          "name": "Define Custom Variable with Stat",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "variableName": "MaxStance",
                          "value": "&nbsp;<span class=\"descriptionNumberColor\">ToughnessMax</span>&nbsp;",
                          "warningType": "MaxToughness"
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
                                    "name": "Has Flag",
                                    "target": {
                                      "name": "Target Name",
                                      "target": "{{Parameter Target}}"
                                    },
                                    "flagName": "Break"
                                  },
                                  {
                                    "name": "Has Flag",
                                    "target": {
                                      "name": "Target Name",
                                      "target": "{{Parameter Target}}"
                                    },
                                    "flagName": "STAT_CTRL"
                                  }
                                ]
                              }
                            ]
                          },
                          "passed": [
                            {
                              "name": "Define Custom Variable",
                              "variableName": "EnhanceFlag",
                              "value": 1
                            },
                            {
                              "name": "IF",
                              "conditions": {
                                "name": "Has Flag",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Parameter Target}}"
                                },
                                "flagName": "STAT_CTRL"
                              },
                              "passed": [
                                {
                                  "name": "Remove Modifier Behavior Flag(s)",
                                  "target": {
                                    "name": "Target Name",
                                    "target": "{{Parameter Target}}"
                                  },
                                  "flagNames": []
                                }
                              ]
                            },
                            {
                              "name": "IF",
                              "conditions": {
                                "name": "Has Flag",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Parameter Target}}"
                                },
                                "flagName": "Break"
                              },
                              "passed": [
                                {
                                  "name": "Exit Broken-State",
                                  "target": {
                                    "name": "Target Name",
                                    "target": "{{Parameter Target}}"
                                  }
                                },
                                {
                                  "name": "Reset Toughness",
                                  "target": {
                                    "name": "Target Name",
                                    "target": "{{Parameter Target}}"
                                  },
                                  "constantValue": {
                                    "operator": "Variables[0] (MaxStance) || Constants[0] (2) || DIV || RETURN",
                                    "displayLines": "(MaxStance / 2)",
                                    "constants": [
                                      2
                                    ],
                                    "variables": [
                                      "MaxStance"
                                    ]
                                  }
                                }
                              ],
                              "failed": [
                                {
                                  "name": "Define Custom Variable with Stat",
                                  "target": {
                                    "name": "Target Name",
                                    "target": "{{Parameter Target}}"
                                  },
                                  "variableName": "CurrentStance",
                                  "value": "&nbsp;<span class=\"descriptionNumberColor\">CurrentToughness</span>&nbsp;"
                                },
                                {
                                  "name": "IF",
                                  "conditions": {
                                    "name": "Compare: Variable",
                                    "value1": "CurrentStance",
                                    "compareType": "<",
                                    "value2": {
                                      "operator": "Variables[0] (MaxStance) || Constants[0] (2) || DIV || RETURN",
                                      "displayLines": "(MaxStance / 2)",
                                      "constants": [
                                        2
                                      ],
                                      "variables": [
                                        "MaxStance"
                                      ]
                                    }
                                  },
                                  "passed": [
                                    {
                                      "name": "Reset Toughness",
                                      "target": {
                                        "name": "Target Name",
                                        "target": "{{Parameter Target}}"
                                      },
                                      "constantValue": {
                                        "operator": "Variables[0] (MaxStance) || Constants[0] (2) || DIV || RETURN",
                                        "displayLines": "(MaxStance / 2)",
                                        "constants": [
                                          2
                                        ],
                                        "variables": [
                                          "MaxStance"
                                        ]
                                      }
                                    }
                                  ]
                                }
                              ]
                            },
                            {
                              "name": "Define Custom Variable",
                              "variableName": "BattleEventPartFlag",
                              "value": 1
                            },
                            {
                              "name": "Add Battle Event",
                              "teamName": "Enemy Team",
                              "eventID": 20007,
                              "statSource": {
                                "name": "Target Name",
                                "target": "{{Caster}}"
                              },
                              "variables": {
                                "MDF_W2_Feixiao_BattleEvent_ActionDelay": {
                                  "operator": "Variables[0] (HeadDelay) || RETURN",
                                  "displayLines": "HeadDelay",
                                  "constants": [],
                                  "variables": [
                                    "HeadDelay"
                                  ]
                                },
                                "MDF_W2_Feixiao_BattleEvent_BaseSpeed": {
                                  "operator": "Variables[0] (CurrentSpeed) || RETURN",
                                  "displayLines": "CurrentSpeed",
                                  "constants": [],
                                  "variables": [
                                    "CurrentSpeed"
                                  ]
                                },
                                "MDF_W2_Feixiao_BattleEvent_StanceBreakTakenRatio": {
                                  "operator": "Variables[0] ({[PassiveSkill03[5]]}) || RETURN",
                                  "displayLines": "{[PassiveSkill03[5]]}",
                                  "constants": [],
                                  "variables": [
                                    "{[PassiveSkill03[5]]}"
                                  ]
                                }
                              }
                            }
                          ],
                          "failed": [
                            {
                              "name": "Define Custom Variable with Stat",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Parameter Target}}"
                              },
                              "variableName": "CurrentStance",
                              "value": "&nbsp;<span class=\"descriptionNumberColor\">CurrentToughness</span>&nbsp;"
                            },
                            {
                              "name": "IF",
                              "conditions": {
                                "name": "Compare: Variable",
                                "value1": "CurrentStance",
                                "compareType": "<",
                                "value2": {
                                  "operator": "Variables[0] (MaxStance) || Constants[0] (2) || DIV || RETURN",
                                  "displayLines": "(MaxStance / 2)",
                                  "constants": [
                                    2
                                  ],
                                  "variables": [
                                    "MaxStance"
                                  ]
                                }
                              },
                              "passed": [
                                {
                                  "name": "Reset Toughness",
                                  "target": {
                                    "name": "Target Name",
                                    "target": "{{Parameter Target}}"
                                  },
                                  "constantValue": {
                                    "operator": "Variables[0] (MaxStance) || Constants[0] (2) || DIV || RETURN",
                                    "displayLines": "(MaxStance / 2)",
                                    "constants": [
                                      2
                                    ],
                                    "variables": [
                                      "MaxStance"
                                    ]
                                  }
                                }
                              ]
                            },
                            {
                              "name": "Define Custom Variable",
                              "variableName": "BattleEventPartFlag",
                              "value": 1
                            },
                            {
                              "name": "Add Battle Event",
                              "teamName": "Enemy Team",
                              "eventID": 20007,
                              "statSource": {
                                "name": "Target Name",
                                "target": "{{Caster}}"
                              },
                              "variables": {
                                "MDF_W2_Feixiao_BattleEvent_ActionDelay": {
                                  "operator": "Variables[0] (HeadDelay) || RETURN",
                                  "displayLines": "HeadDelay",
                                  "constants": [],
                                  "variables": [
                                    "HeadDelay"
                                  ]
                                },
                                "MDF_W2_Feixiao_BattleEvent_BaseSpeed": {
                                  "operator": "Variables[0] (CurrentSpeed) || RETURN",
                                  "displayLines": "CurrentSpeed",
                                  "constants": [],
                                  "variables": [
                                    "CurrentSpeed"
                                  ]
                                },
                                "MDF_W2_Feixiao_BattleEvent_StanceBreakTakenRatio": {
                                  "operator": "Variables[0] ({[PassiveSkill03[5]]}) || RETURN",
                                  "displayLines": "{[PassiveSkill03[5]]}",
                                  "constants": [],
                                  "variables": [
                                    "{[PassiveSkill03[5]]}"
                                  ]
                                }
                              }
                            }
                          ]
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
                        "name": "Enemy ID",
                        "ID": 203206,
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "characterName": null,
                        "isCompareUniqueID": true
                      },
                      "ifTargetFound": [
                        {
                          "name": "Define Custom Variable with Stat",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "variableName": "MaxStance",
                          "value": "&nbsp;<span class=\"descriptionNumberColor\">ToughnessMax</span>&nbsp;",
                          "warningType": "MaxToughness"
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
                                    "name": "Has Flag",
                                    "target": {
                                      "name": "Target Name",
                                      "target": "{{Parameter Target}}"
                                    },
                                    "flagName": "Break"
                                  },
                                  {
                                    "name": "Has Flag",
                                    "target": {
                                      "name": "Target Name",
                                      "target": "{{Parameter Target}}"
                                    },
                                    "flagName": "STAT_CTRL"
                                  }
                                ]
                              }
                            ]
                          },
                          "passed": [
                            {
                              "name": "Define Custom Variable",
                              "variableName": "EnhanceFlag",
                              "value": 1
                            },
                            {
                              "name": "IF",
                              "conditions": {
                                "name": "Has Flag",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Parameter Target}}"
                                },
                                "flagName": "STAT_CTRL"
                              },
                              "passed": [
                                {
                                  "name": "Remove Modifier Behavior Flag(s)",
                                  "target": {
                                    "name": "Target Name",
                                    "target": "{{Parameter Target}}"
                                  },
                                  "flagNames": []
                                }
                              ]
                            },
                            {
                              "name": "IF",
                              "conditions": {
                                "name": "Has Flag",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Parameter Target}}"
                                },
                                "flagName": "Break"
                              },
                              "passed": [
                                {
                                  "name": "Exit Broken-State",
                                  "target": {
                                    "name": "Target Name",
                                    "target": "{{Parameter Target}}"
                                  }
                                },
                                {
                                  "name": "Reset Toughness",
                                  "target": {
                                    "name": "Target Name",
                                    "target": "{{Parameter Target}}"
                                  },
                                  "constantValue": {
                                    "operator": "Variables[0] (MaxStance) || Constants[0] (2) || DIV || RETURN",
                                    "displayLines": "(MaxStance / 2)",
                                    "constants": [
                                      2
                                    ],
                                    "variables": [
                                      "MaxStance"
                                    ]
                                  }
                                }
                              ],
                              "failed": [
                                {
                                  "name": "Define Custom Variable with Stat",
                                  "target": {
                                    "name": "Target Name",
                                    "target": "{{Parameter Target}}"
                                  },
                                  "variableName": "CurrentStance",
                                  "value": "&nbsp;<span class=\"descriptionNumberColor\">CurrentToughness</span>&nbsp;"
                                },
                                {
                                  "name": "IF",
                                  "conditions": {
                                    "name": "Compare: Variable",
                                    "value1": "CurrentStance",
                                    "compareType": "<",
                                    "value2": {
                                      "operator": "Variables[0] (MaxStance) || Constants[0] (2) || DIV || RETURN",
                                      "displayLines": "(MaxStance / 2)",
                                      "constants": [
                                        2
                                      ],
                                      "variables": [
                                        "MaxStance"
                                      ]
                                    }
                                  },
                                  "passed": [
                                    {
                                      "name": "Reset Toughness",
                                      "target": {
                                        "name": "Target Name",
                                        "target": "{{Parameter Target}}"
                                      },
                                      "constantValue": {
                                        "operator": "Variables[0] (MaxStance) || Constants[0] (2) || DIV || RETURN",
                                        "displayLines": "(MaxStance / 2)",
                                        "constants": [
                                          2
                                        ],
                                        "variables": [
                                          "MaxStance"
                                        ]
                                      }
                                    }
                                  ]
                                }
                              ]
                            },
                            {
                              "name": "Define Custom Variable",
                              "variableName": "BattleEventPartFlag",
                              "value": 3
                            },
                            {
                              "name": "Add Battle Event",
                              "teamName": "Enemy Team",
                              "eventID": 20007,
                              "statSource": {
                                "name": "Target Name",
                                "target": "{{Caster}}"
                              },
                              "variables": {
                                "MDF_W2_Feixiao_BattleEvent_ActionDelay": {
                                  "operator": "Variables[0] (TailDelay) || RETURN",
                                  "displayLines": "TailDelay",
                                  "constants": [],
                                  "variables": [
                                    "TailDelay"
                                  ]
                                },
                                "MDF_W2_Feixiao_BattleEvent_BaseSpeed": {
                                  "operator": "Variables[0] (CurrentSpeed) || RETURN",
                                  "displayLines": "CurrentSpeed",
                                  "constants": [],
                                  "variables": [
                                    "CurrentSpeed"
                                  ]
                                },
                                "MDF_W2_Feixiao_BattleEvent_StanceBreakTakenRatio": {
                                  "operator": "Variables[0] ({[PassiveSkill03[5]]}) || RETURN",
                                  "displayLines": "{[PassiveSkill03[5]]}",
                                  "constants": [],
                                  "variables": [
                                    "{[PassiveSkill03[5]]}"
                                  ]
                                }
                              }
                            }
                          ],
                          "failed": [
                            {
                              "name": "Define Custom Variable with Stat",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Parameter Target}}"
                              },
                              "variableName": "CurrentStance",
                              "value": "&nbsp;<span class=\"descriptionNumberColor\">CurrentToughness</span>&nbsp;"
                            },
                            {
                              "name": "IF",
                              "conditions": {
                                "name": "Compare: Variable",
                                "value1": "CurrentStance",
                                "compareType": "<",
                                "value2": {
                                  "operator": "Variables[0] (MaxStance) || Constants[0] (2) || DIV || RETURN",
                                  "displayLines": "(MaxStance / 2)",
                                  "constants": [
                                    2
                                  ],
                                  "variables": [
                                    "MaxStance"
                                  ]
                                }
                              },
                              "passed": [
                                {
                                  "name": "Reset Toughness",
                                  "target": {
                                    "name": "Target Name",
                                    "target": "{{Parameter Target}}"
                                  },
                                  "constantValue": {
                                    "operator": "Variables[0] (MaxStance) || Constants[0] (2) || DIV || RETURN",
                                    "displayLines": "(MaxStance / 2)",
                                    "constants": [
                                      2
                                    ],
                                    "variables": [
                                      "MaxStance"
                                    ]
                                  }
                                }
                              ]
                            },
                            {
                              "name": "Define Custom Variable",
                              "variableName": "BattleEventPartFlag",
                              "value": 3
                            },
                            {
                              "name": "Add Battle Event",
                              "teamName": "Enemy Team",
                              "eventID": 20007,
                              "statSource": {
                                "name": "Target Name",
                                "target": "{{Caster}}"
                              },
                              "variables": {
                                "MDF_W2_Feixiao_BattleEvent_ActionDelay": {
                                  "operator": "Variables[0] (TailDelay) || RETURN",
                                  "displayLines": "TailDelay",
                                  "constants": [],
                                  "variables": [
                                    "TailDelay"
                                  ]
                                },
                                "MDF_W2_Feixiao_BattleEvent_BaseSpeed": {
                                  "operator": "Variables[0] (CurrentSpeed) || RETURN",
                                  "displayLines": "CurrentSpeed",
                                  "constants": [],
                                  "variables": [
                                    "CurrentSpeed"
                                  ]
                                },
                                "MDF_W2_Feixiao_BattleEvent_StanceBreakTakenRatio": {
                                  "operator": "Variables[0] ({[PassiveSkill03[5]]}) || RETURN",
                                  "displayLines": "{[PassiveSkill03[5]]}",
                                  "constants": [],
                                  "variables": [
                                    "{[PassiveSkill03[5]]}"
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
                        "name": "Compare: Variable",
                        "value1": "TailDelay",
                        "compareType": ">=",
                        "value2": {
                          "operator": "Variables[0] (LimbDelay) || RETURN",
                          "displayLines": "LimbDelay",
                          "constants": [],
                          "variables": [
                            "LimbDelay"
                          ]
                        }
                      },
                      "passed": [
                        {
                          "name": "Define Custom Variable",
                          "variableName": "EnhanceFlag",
                          "value": 0
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
                            "name": "Enemy ID",
                            "ID": 203205,
                            "target": {
                              "name": "Target Name",
                              "target": "{{Parameter Target}}"
                            },
                            "characterName": null,
                            "isCompareUniqueID": true
                          },
                          "ifTargetFound": [
                            {
                              "name": "Define Custom Variable with Stat",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Parameter Target}}"
                              },
                              "variableName": "MaxStance",
                              "value": "&nbsp;<span class=\"descriptionNumberColor\">ToughnessMax</span>&nbsp;",
                              "warningType": "MaxToughness"
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
                                        "name": "Has Flag",
                                        "target": {
                                          "name": "Target Name",
                                          "target": "{{Parameter Target}}"
                                        },
                                        "flagName": "Break"
                                      },
                                      {
                                        "name": "Has Flag",
                                        "target": {
                                          "name": "Target Name",
                                          "target": "{{Parameter Target}}"
                                        },
                                        "flagName": "STAT_CTRL"
                                      }
                                    ]
                                  }
                                ]
                              },
                              "passed": [
                                {
                                  "name": "Define Custom Variable",
                                  "variableName": "EnhanceFlag",
                                  "value": 1
                                },
                                {
                                  "name": "IF",
                                  "conditions": {
                                    "name": "Has Flag",
                                    "target": {
                                      "name": "Target Name",
                                      "target": "{{Parameter Target}}"
                                    },
                                    "flagName": "STAT_CTRL"
                                  },
                                  "passed": [
                                    {
                                      "name": "Remove Modifier Behavior Flag(s)",
                                      "target": {
                                        "name": "Target Name",
                                        "target": "{{Parameter Target}}"
                                      },
                                      "flagNames": []
                                    }
                                  ]
                                },
                                {
                                  "name": "IF",
                                  "conditions": {
                                    "name": "Has Flag",
                                    "target": {
                                      "name": "Target Name",
                                      "target": "{{Parameter Target}}"
                                    },
                                    "flagName": "Break"
                                  },
                                  "passed": [
                                    {
                                      "name": "Exit Broken-State",
                                      "target": {
                                        "name": "Target Name",
                                        "target": "{{Parameter Target}}"
                                      }
                                    },
                                    {
                                      "name": "Reset Toughness",
                                      "target": {
                                        "name": "Target Name",
                                        "target": "{{Parameter Target}}"
                                      },
                                      "constantValue": {
                                        "operator": "Variables[0] (MaxStance) || Constants[0] (2) || DIV || RETURN",
                                        "displayLines": "(MaxStance / 2)",
                                        "constants": [
                                          2
                                        ],
                                        "variables": [
                                          "MaxStance"
                                        ]
                                      }
                                    }
                                  ],
                                  "failed": [
                                    {
                                      "name": "Define Custom Variable with Stat",
                                      "target": {
                                        "name": "Target Name",
                                        "target": "{{Parameter Target}}"
                                      },
                                      "variableName": "CurrentStance",
                                      "value": "&nbsp;<span class=\"descriptionNumberColor\">CurrentToughness</span>&nbsp;"
                                    },
                                    {
                                      "name": "IF",
                                      "conditions": {
                                        "name": "Compare: Variable",
                                        "value1": "CurrentStance",
                                        "compareType": "<",
                                        "value2": {
                                          "operator": "Variables[0] (MaxStance) || Constants[0] (2) || DIV || RETURN",
                                          "displayLines": "(MaxStance / 2)",
                                          "constants": [
                                            2
                                          ],
                                          "variables": [
                                            "MaxStance"
                                          ]
                                        }
                                      },
                                      "passed": [
                                        {
                                          "name": "Reset Toughness",
                                          "target": {
                                            "name": "Target Name",
                                            "target": "{{Parameter Target}}"
                                          },
                                          "constantValue": {
                                            "operator": "Variables[0] (MaxStance) || Constants[0] (2) || DIV || RETURN",
                                            "displayLines": "(MaxStance / 2)",
                                            "constants": [
                                              2
                                            ],
                                            "variables": [
                                              "MaxStance"
                                            ]
                                          }
                                        }
                                      ]
                                    }
                                  ]
                                },
                                {
                                  "name": "Define Custom Variable",
                                  "variableName": "BattleEventPartFlag",
                                  "value": 2
                                },
                                {
                                  "name": "Add Battle Event",
                                  "teamName": "Enemy Team",
                                  "eventID": 20007,
                                  "statSource": {
                                    "name": "Target Name",
                                    "target": "{{Caster}}"
                                  },
                                  "variables": {
                                    "MDF_W2_Feixiao_BattleEvent_ActionDelay": {
                                      "operator": "Variables[0] (LimbDelay) || RETURN",
                                      "displayLines": "LimbDelay",
                                      "constants": [],
                                      "variables": [
                                        "LimbDelay"
                                      ]
                                    },
                                    "MDF_W2_Feixiao_BattleEvent_BaseSpeed": {
                                      "operator": "Variables[0] (CurrentSpeed) || RETURN",
                                      "displayLines": "CurrentSpeed",
                                      "constants": [],
                                      "variables": [
                                        "CurrentSpeed"
                                      ]
                                    },
                                    "MDF_W2_Feixiao_BattleEvent_StanceBreakTakenRatio": {
                                      "operator": "Variables[0] ({[PassiveSkill03[5]]}) || RETURN",
                                      "displayLines": "{[PassiveSkill03[5]]}",
                                      "constants": [],
                                      "variables": [
                                        "{[PassiveSkill03[5]]}"
                                      ]
                                    }
                                  }
                                }
                              ],
                              "failed": [
                                {
                                  "name": "Define Custom Variable with Stat",
                                  "target": {
                                    "name": "Target Name",
                                    "target": "{{Parameter Target}}"
                                  },
                                  "variableName": "CurrentStance",
                                  "value": "&nbsp;<span class=\"descriptionNumberColor\">CurrentToughness</span>&nbsp;"
                                },
                                {
                                  "name": "IF",
                                  "conditions": {
                                    "name": "Compare: Variable",
                                    "value1": "CurrentStance",
                                    "compareType": "<",
                                    "value2": {
                                      "operator": "Variables[0] (MaxStance) || Constants[0] (2) || DIV || RETURN",
                                      "displayLines": "(MaxStance / 2)",
                                      "constants": [
                                        2
                                      ],
                                      "variables": [
                                        "MaxStance"
                                      ]
                                    }
                                  },
                                  "passed": [
                                    {
                                      "name": "Reset Toughness",
                                      "target": {
                                        "name": "Target Name",
                                        "target": "{{Parameter Target}}"
                                      },
                                      "constantValue": {
                                        "operator": "Variables[0] (MaxStance) || Constants[0] (2) || DIV || RETURN",
                                        "displayLines": "(MaxStance / 2)",
                                        "constants": [
                                          2
                                        ],
                                        "variables": [
                                          "MaxStance"
                                        ]
                                      }
                                    }
                                  ]
                                },
                                {
                                  "name": "Define Custom Variable",
                                  "variableName": "BattleEventPartFlag",
                                  "value": 2
                                },
                                {
                                  "name": "Add Battle Event",
                                  "teamName": "Enemy Team",
                                  "eventID": 20007,
                                  "statSource": {
                                    "name": "Target Name",
                                    "target": "{{Caster}}"
                                  },
                                  "variables": {
                                    "MDF_W2_Feixiao_BattleEvent_ActionDelay": {
                                      "operator": "Variables[0] (LimbDelay) || RETURN",
                                      "displayLines": "LimbDelay",
                                      "constants": [],
                                      "variables": [
                                        "LimbDelay"
                                      ]
                                    },
                                    "MDF_W2_Feixiao_BattleEvent_BaseSpeed": {
                                      "operator": "Variables[0] (CurrentSpeed) || RETURN",
                                      "displayLines": "CurrentSpeed",
                                      "constants": [],
                                      "variables": [
                                        "CurrentSpeed"
                                      ]
                                    },
                                    "MDF_W2_Feixiao_BattleEvent_StanceBreakTakenRatio": {
                                      "operator": "Variables[0] ({[PassiveSkill03[5]]}) || RETURN",
                                      "displayLines": "{[PassiveSkill03[5]]}",
                                      "constants": [],
                                      "variables": [
                                        "{[PassiveSkill03[5]]}"
                                      ]
                                    }
                                  }
                                }
                              ]
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
                            "name": "Enemy ID",
                            "ID": 203206,
                            "target": {
                              "name": "Target Name",
                              "target": "{{Parameter Target}}"
                            },
                            "characterName": null,
                            "isCompareUniqueID": true
                          },
                          "ifTargetFound": [
                            {
                              "name": "Define Custom Variable with Stat",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Parameter Target}}"
                              },
                              "variableName": "MaxStance",
                              "value": "&nbsp;<span class=\"descriptionNumberColor\">ToughnessMax</span>&nbsp;",
                              "warningType": "MaxToughness"
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
                                        "name": "Has Flag",
                                        "target": {
                                          "name": "Target Name",
                                          "target": "{{Parameter Target}}"
                                        },
                                        "flagName": "Break"
                                      },
                                      {
                                        "name": "Has Flag",
                                        "target": {
                                          "name": "Target Name",
                                          "target": "{{Parameter Target}}"
                                        },
                                        "flagName": "STAT_CTRL"
                                      }
                                    ]
                                  }
                                ]
                              },
                              "passed": [
                                {
                                  "name": "Define Custom Variable",
                                  "variableName": "EnhanceFlag",
                                  "value": 1
                                },
                                {
                                  "name": "IF",
                                  "conditions": {
                                    "name": "Has Flag",
                                    "target": {
                                      "name": "Target Name",
                                      "target": "{{Parameter Target}}"
                                    },
                                    "flagName": "STAT_CTRL"
                                  },
                                  "passed": [
                                    {
                                      "name": "Remove Modifier Behavior Flag(s)",
                                      "target": {
                                        "name": "Target Name",
                                        "target": "{{Parameter Target}}"
                                      },
                                      "flagNames": []
                                    }
                                  ]
                                },
                                {
                                  "name": "IF",
                                  "conditions": {
                                    "name": "Has Flag",
                                    "target": {
                                      "name": "Target Name",
                                      "target": "{{Parameter Target}}"
                                    },
                                    "flagName": "Break"
                                  },
                                  "passed": [
                                    {
                                      "name": "Exit Broken-State",
                                      "target": {
                                        "name": "Target Name",
                                        "target": "{{Parameter Target}}"
                                      }
                                    },
                                    {
                                      "name": "Reset Toughness",
                                      "target": {
                                        "name": "Target Name",
                                        "target": "{{Parameter Target}}"
                                      },
                                      "constantValue": {
                                        "operator": "Variables[0] (MaxStance) || Constants[0] (2) || DIV || RETURN",
                                        "displayLines": "(MaxStance / 2)",
                                        "constants": [
                                          2
                                        ],
                                        "variables": [
                                          "MaxStance"
                                        ]
                                      }
                                    }
                                  ],
                                  "failed": [
                                    {
                                      "name": "Define Custom Variable with Stat",
                                      "target": {
                                        "name": "Target Name",
                                        "target": "{{Parameter Target}}"
                                      },
                                      "variableName": "CurrentStance",
                                      "value": "&nbsp;<span class=\"descriptionNumberColor\">CurrentToughness</span>&nbsp;"
                                    },
                                    {
                                      "name": "IF",
                                      "conditions": {
                                        "name": "Compare: Variable",
                                        "value1": "CurrentStance",
                                        "compareType": "<",
                                        "value2": {
                                          "operator": "Variables[0] (MaxStance) || Constants[0] (2) || DIV || RETURN",
                                          "displayLines": "(MaxStance / 2)",
                                          "constants": [
                                            2
                                          ],
                                          "variables": [
                                            "MaxStance"
                                          ]
                                        }
                                      },
                                      "passed": [
                                        {
                                          "name": "Reset Toughness",
                                          "target": {
                                            "name": "Target Name",
                                            "target": "{{Parameter Target}}"
                                          },
                                          "constantValue": {
                                            "operator": "Variables[0] (MaxStance) || Constants[0] (2) || DIV || RETURN",
                                            "displayLines": "(MaxStance / 2)",
                                            "constants": [
                                              2
                                            ],
                                            "variables": [
                                              "MaxStance"
                                            ]
                                          }
                                        }
                                      ]
                                    }
                                  ]
                                },
                                {
                                  "name": "Define Custom Variable",
                                  "variableName": "BattleEventPartFlag",
                                  "value": 3
                                },
                                {
                                  "name": "Add Battle Event",
                                  "teamName": "Enemy Team",
                                  "eventID": 20007,
                                  "statSource": {
                                    "name": "Target Name",
                                    "target": "{{Caster}}"
                                  },
                                  "variables": {
                                    "MDF_W2_Feixiao_BattleEvent_ActionDelay": {
                                      "operator": "Variables[0] (TailDelay) || RETURN",
                                      "displayLines": "TailDelay",
                                      "constants": [],
                                      "variables": [
                                        "TailDelay"
                                      ]
                                    },
                                    "MDF_W2_Feixiao_BattleEvent_BaseSpeed": {
                                      "operator": "Variables[0] (CurrentSpeed) || RETURN",
                                      "displayLines": "CurrentSpeed",
                                      "constants": [],
                                      "variables": [
                                        "CurrentSpeed"
                                      ]
                                    },
                                    "MDF_W2_Feixiao_BattleEvent_StanceBreakTakenRatio": {
                                      "operator": "Variables[0] ({[PassiveSkill03[5]]}) || RETURN",
                                      "displayLines": "{[PassiveSkill03[5]]}",
                                      "constants": [],
                                      "variables": [
                                        "{[PassiveSkill03[5]]}"
                                      ]
                                    }
                                  }
                                }
                              ],
                              "failed": [
                                {
                                  "name": "Define Custom Variable with Stat",
                                  "target": {
                                    "name": "Target Name",
                                    "target": "{{Parameter Target}}"
                                  },
                                  "variableName": "CurrentStance",
                                  "value": "&nbsp;<span class=\"descriptionNumberColor\">CurrentToughness</span>&nbsp;"
                                },
                                {
                                  "name": "IF",
                                  "conditions": {
                                    "name": "Compare: Variable",
                                    "value1": "CurrentStance",
                                    "compareType": "<",
                                    "value2": {
                                      "operator": "Variables[0] (MaxStance) || Constants[0] (2) || DIV || RETURN",
                                      "displayLines": "(MaxStance / 2)",
                                      "constants": [
                                        2
                                      ],
                                      "variables": [
                                        "MaxStance"
                                      ]
                                    }
                                  },
                                  "passed": [
                                    {
                                      "name": "Reset Toughness",
                                      "target": {
                                        "name": "Target Name",
                                        "target": "{{Parameter Target}}"
                                      },
                                      "constantValue": {
                                        "operator": "Variables[0] (MaxStance) || Constants[0] (2) || DIV || RETURN",
                                        "displayLines": "(MaxStance / 2)",
                                        "constants": [
                                          2
                                        ],
                                        "variables": [
                                          "MaxStance"
                                        ]
                                      }
                                    }
                                  ]
                                },
                                {
                                  "name": "Define Custom Variable",
                                  "variableName": "BattleEventPartFlag",
                                  "value": 3
                                },
                                {
                                  "name": "Add Battle Event",
                                  "teamName": "Enemy Team",
                                  "eventID": 20007,
                                  "statSource": {
                                    "name": "Target Name",
                                    "target": "{{Caster}}"
                                  },
                                  "variables": {
                                    "MDF_W2_Feixiao_BattleEvent_ActionDelay": {
                                      "operator": "Variables[0] (TailDelay) || RETURN",
                                      "displayLines": "TailDelay",
                                      "constants": [],
                                      "variables": [
                                        "TailDelay"
                                      ]
                                    },
                                    "MDF_W2_Feixiao_BattleEvent_BaseSpeed": {
                                      "operator": "Variables[0] (CurrentSpeed) || RETURN",
                                      "displayLines": "CurrentSpeed",
                                      "constants": [],
                                      "variables": [
                                        "CurrentSpeed"
                                      ]
                                    },
                                    "MDF_W2_Feixiao_BattleEvent_StanceBreakTakenRatio": {
                                      "operator": "Variables[0] ({[PassiveSkill03[5]]}) || RETURN",
                                      "displayLines": "{[PassiveSkill03[5]]}",
                                      "constants": [],
                                      "variables": [
                                        "{[PassiveSkill03[5]]}"
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
                          "name": "Define Custom Variable",
                          "variableName": "EnhanceFlag",
                          "value": 0
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
                            "name": "Enemy ID",
                            "ID": 203206,
                            "target": {
                              "name": "Target Name",
                              "target": "{{Parameter Target}}"
                            },
                            "characterName": null,
                            "isCompareUniqueID": true
                          },
                          "ifTargetFound": [
                            {
                              "name": "Define Custom Variable with Stat",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Parameter Target}}"
                              },
                              "variableName": "MaxStance",
                              "value": "&nbsp;<span class=\"descriptionNumberColor\">ToughnessMax</span>&nbsp;",
                              "warningType": "MaxToughness"
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
                                        "name": "Has Flag",
                                        "target": {
                                          "name": "Target Name",
                                          "target": "{{Parameter Target}}"
                                        },
                                        "flagName": "Break"
                                      },
                                      {
                                        "name": "Has Flag",
                                        "target": {
                                          "name": "Target Name",
                                          "target": "{{Parameter Target}}"
                                        },
                                        "flagName": "STAT_CTRL"
                                      }
                                    ]
                                  }
                                ]
                              },
                              "passed": [
                                {
                                  "name": "Define Custom Variable",
                                  "variableName": "EnhanceFlag",
                                  "value": 1
                                },
                                {
                                  "name": "IF",
                                  "conditions": {
                                    "name": "Has Flag",
                                    "target": {
                                      "name": "Target Name",
                                      "target": "{{Parameter Target}}"
                                    },
                                    "flagName": "STAT_CTRL"
                                  },
                                  "passed": [
                                    {
                                      "name": "Remove Modifier Behavior Flag(s)",
                                      "target": {
                                        "name": "Target Name",
                                        "target": "{{Parameter Target}}"
                                      },
                                      "flagNames": []
                                    }
                                  ]
                                },
                                {
                                  "name": "IF",
                                  "conditions": {
                                    "name": "Has Flag",
                                    "target": {
                                      "name": "Target Name",
                                      "target": "{{Parameter Target}}"
                                    },
                                    "flagName": "Break"
                                  },
                                  "passed": [
                                    {
                                      "name": "Exit Broken-State",
                                      "target": {
                                        "name": "Target Name",
                                        "target": "{{Parameter Target}}"
                                      }
                                    },
                                    {
                                      "name": "Reset Toughness",
                                      "target": {
                                        "name": "Target Name",
                                        "target": "{{Parameter Target}}"
                                      },
                                      "constantValue": {
                                        "operator": "Variables[0] (MaxStance) || Constants[0] (2) || DIV || RETURN",
                                        "displayLines": "(MaxStance / 2)",
                                        "constants": [
                                          2
                                        ],
                                        "variables": [
                                          "MaxStance"
                                        ]
                                      }
                                    }
                                  ],
                                  "failed": [
                                    {
                                      "name": "Define Custom Variable with Stat",
                                      "target": {
                                        "name": "Target Name",
                                        "target": "{{Parameter Target}}"
                                      },
                                      "variableName": "CurrentStance",
                                      "value": "&nbsp;<span class=\"descriptionNumberColor\">CurrentToughness</span>&nbsp;"
                                    },
                                    {
                                      "name": "IF",
                                      "conditions": {
                                        "name": "Compare: Variable",
                                        "value1": "CurrentStance",
                                        "compareType": "<",
                                        "value2": {
                                          "operator": "Variables[0] (MaxStance) || Constants[0] (2) || DIV || RETURN",
                                          "displayLines": "(MaxStance / 2)",
                                          "constants": [
                                            2
                                          ],
                                          "variables": [
                                            "MaxStance"
                                          ]
                                        }
                                      },
                                      "passed": [
                                        {
                                          "name": "Reset Toughness",
                                          "target": {
                                            "name": "Target Name",
                                            "target": "{{Parameter Target}}"
                                          },
                                          "constantValue": {
                                            "operator": "Variables[0] (MaxStance) || Constants[0] (2) || DIV || RETURN",
                                            "displayLines": "(MaxStance / 2)",
                                            "constants": [
                                              2
                                            ],
                                            "variables": [
                                              "MaxStance"
                                            ]
                                          }
                                        }
                                      ]
                                    }
                                  ]
                                },
                                {
                                  "name": "Define Custom Variable",
                                  "variableName": "BattleEventPartFlag",
                                  "value": 3
                                },
                                {
                                  "name": "Add Battle Event",
                                  "teamName": "Enemy Team",
                                  "eventID": 20007,
                                  "statSource": {
                                    "name": "Target Name",
                                    "target": "{{Caster}}"
                                  },
                                  "variables": {
                                    "MDF_W2_Feixiao_BattleEvent_ActionDelay": {
                                      "operator": "Variables[0] (TailDelay) || RETURN",
                                      "displayLines": "TailDelay",
                                      "constants": [],
                                      "variables": [
                                        "TailDelay"
                                      ]
                                    },
                                    "MDF_W2_Feixiao_BattleEvent_BaseSpeed": {
                                      "operator": "Variables[0] (CurrentSpeed) || RETURN",
                                      "displayLines": "CurrentSpeed",
                                      "constants": [],
                                      "variables": [
                                        "CurrentSpeed"
                                      ]
                                    },
                                    "MDF_W2_Feixiao_BattleEvent_StanceBreakTakenRatio": {
                                      "operator": "Variables[0] ({[PassiveSkill03[5]]}) || RETURN",
                                      "displayLines": "{[PassiveSkill03[5]]}",
                                      "constants": [],
                                      "variables": [
                                        "{[PassiveSkill03[5]]}"
                                      ]
                                    }
                                  }
                                }
                              ],
                              "failed": [
                                {
                                  "name": "Define Custom Variable with Stat",
                                  "target": {
                                    "name": "Target Name",
                                    "target": "{{Parameter Target}}"
                                  },
                                  "variableName": "CurrentStance",
                                  "value": "&nbsp;<span class=\"descriptionNumberColor\">CurrentToughness</span>&nbsp;"
                                },
                                {
                                  "name": "IF",
                                  "conditions": {
                                    "name": "Compare: Variable",
                                    "value1": "CurrentStance",
                                    "compareType": "<",
                                    "value2": {
                                      "operator": "Variables[0] (MaxStance) || Constants[0] (2) || DIV || RETURN",
                                      "displayLines": "(MaxStance / 2)",
                                      "constants": [
                                        2
                                      ],
                                      "variables": [
                                        "MaxStance"
                                      ]
                                    }
                                  },
                                  "passed": [
                                    {
                                      "name": "Reset Toughness",
                                      "target": {
                                        "name": "Target Name",
                                        "target": "{{Parameter Target}}"
                                      },
                                      "constantValue": {
                                        "operator": "Variables[0] (MaxStance) || Constants[0] (2) || DIV || RETURN",
                                        "displayLines": "(MaxStance / 2)",
                                        "constants": [
                                          2
                                        ],
                                        "variables": [
                                          "MaxStance"
                                        ]
                                      }
                                    }
                                  ]
                                },
                                {
                                  "name": "Define Custom Variable",
                                  "variableName": "BattleEventPartFlag",
                                  "value": 3
                                },
                                {
                                  "name": "Add Battle Event",
                                  "teamName": "Enemy Team",
                                  "eventID": 20007,
                                  "statSource": {
                                    "name": "Target Name",
                                    "target": "{{Caster}}"
                                  },
                                  "variables": {
                                    "MDF_W2_Feixiao_BattleEvent_ActionDelay": {
                                      "operator": "Variables[0] (TailDelay) || RETURN",
                                      "displayLines": "TailDelay",
                                      "constants": [],
                                      "variables": [
                                        "TailDelay"
                                      ]
                                    },
                                    "MDF_W2_Feixiao_BattleEvent_BaseSpeed": {
                                      "operator": "Variables[0] (CurrentSpeed) || RETURN",
                                      "displayLines": "CurrentSpeed",
                                      "constants": [],
                                      "variables": [
                                        "CurrentSpeed"
                                      ]
                                    },
                                    "MDF_W2_Feixiao_BattleEvent_StanceBreakTakenRatio": {
                                      "operator": "Variables[0] ({[PassiveSkill03[5]]}) || RETURN",
                                      "displayLines": "{[PassiveSkill03[5]]}",
                                      "constants": [],
                                      "variables": [
                                        "{[PassiveSkill03[5]]}"
                                      ]
                                    }
                                  }
                                }
                              ]
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
                            "name": "Enemy ID",
                            "ID": 203205,
                            "target": {
                              "name": "Target Name",
                              "target": "{{Parameter Target}}"
                            },
                            "characterName": null,
                            "isCompareUniqueID": true
                          },
                          "ifTargetFound": [
                            {
                              "name": "Define Custom Variable with Stat",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Parameter Target}}"
                              },
                              "variableName": "MaxStance",
                              "value": "&nbsp;<span class=\"descriptionNumberColor\">ToughnessMax</span>&nbsp;",
                              "warningType": "MaxToughness"
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
                                        "name": "Has Flag",
                                        "target": {
                                          "name": "Target Name",
                                          "target": "{{Parameter Target}}"
                                        },
                                        "flagName": "Break"
                                      },
                                      {
                                        "name": "Has Flag",
                                        "target": {
                                          "name": "Target Name",
                                          "target": "{{Parameter Target}}"
                                        },
                                        "flagName": "STAT_CTRL"
                                      }
                                    ]
                                  }
                                ]
                              },
                              "passed": [
                                {
                                  "name": "Define Custom Variable",
                                  "variableName": "EnhanceFlag",
                                  "value": 1
                                },
                                {
                                  "name": "IF",
                                  "conditions": {
                                    "name": "Has Flag",
                                    "target": {
                                      "name": "Target Name",
                                      "target": "{{Parameter Target}}"
                                    },
                                    "flagName": "STAT_CTRL"
                                  },
                                  "passed": [
                                    {
                                      "name": "Remove Modifier Behavior Flag(s)",
                                      "target": {
                                        "name": "Target Name",
                                        "target": "{{Parameter Target}}"
                                      },
                                      "flagNames": []
                                    }
                                  ]
                                },
                                {
                                  "name": "IF",
                                  "conditions": {
                                    "name": "Has Flag",
                                    "target": {
                                      "name": "Target Name",
                                      "target": "{{Parameter Target}}"
                                    },
                                    "flagName": "Break"
                                  },
                                  "passed": [
                                    {
                                      "name": "Exit Broken-State",
                                      "target": {
                                        "name": "Target Name",
                                        "target": "{{Parameter Target}}"
                                      }
                                    },
                                    {
                                      "name": "Reset Toughness",
                                      "target": {
                                        "name": "Target Name",
                                        "target": "{{Parameter Target}}"
                                      },
                                      "constantValue": {
                                        "operator": "Variables[0] (MaxStance) || Constants[0] (2) || DIV || RETURN",
                                        "displayLines": "(MaxStance / 2)",
                                        "constants": [
                                          2
                                        ],
                                        "variables": [
                                          "MaxStance"
                                        ]
                                      }
                                    }
                                  ],
                                  "failed": [
                                    {
                                      "name": "Define Custom Variable with Stat",
                                      "target": {
                                        "name": "Target Name",
                                        "target": "{{Parameter Target}}"
                                      },
                                      "variableName": "CurrentStance",
                                      "value": "&nbsp;<span class=\"descriptionNumberColor\">CurrentToughness</span>&nbsp;"
                                    },
                                    {
                                      "name": "IF",
                                      "conditions": {
                                        "name": "Compare: Variable",
                                        "value1": "CurrentStance",
                                        "compareType": "<",
                                        "value2": {
                                          "operator": "Variables[0] (MaxStance) || Constants[0] (2) || DIV || RETURN",
                                          "displayLines": "(MaxStance / 2)",
                                          "constants": [
                                            2
                                          ],
                                          "variables": [
                                            "MaxStance"
                                          ]
                                        }
                                      },
                                      "passed": [
                                        {
                                          "name": "Reset Toughness",
                                          "target": {
                                            "name": "Target Name",
                                            "target": "{{Parameter Target}}"
                                          },
                                          "constantValue": {
                                            "operator": "Variables[0] (MaxStance) || Constants[0] (2) || DIV || RETURN",
                                            "displayLines": "(MaxStance / 2)",
                                            "constants": [
                                              2
                                            ],
                                            "variables": [
                                              "MaxStance"
                                            ]
                                          }
                                        }
                                      ]
                                    }
                                  ]
                                },
                                {
                                  "name": "Define Custom Variable",
                                  "variableName": "BattleEventPartFlag",
                                  "value": 2
                                },
                                {
                                  "name": "Add Battle Event",
                                  "teamName": "Enemy Team",
                                  "eventID": 20007,
                                  "statSource": {
                                    "name": "Target Name",
                                    "target": "{{Caster}}"
                                  },
                                  "variables": {
                                    "MDF_W2_Feixiao_BattleEvent_ActionDelay": {
                                      "operator": "Variables[0] (LimbDelay) || RETURN",
                                      "displayLines": "LimbDelay",
                                      "constants": [],
                                      "variables": [
                                        "LimbDelay"
                                      ]
                                    },
                                    "MDF_W2_Feixiao_BattleEvent_BaseSpeed": {
                                      "operator": "Variables[0] (CurrentSpeed) || RETURN",
                                      "displayLines": "CurrentSpeed",
                                      "constants": [],
                                      "variables": [
                                        "CurrentSpeed"
                                      ]
                                    },
                                    "MDF_W2_Feixiao_BattleEvent_StanceBreakTakenRatio": {
                                      "operator": "Variables[0] ({[PassiveSkill03[5]]}) || RETURN",
                                      "displayLines": "{[PassiveSkill03[5]]}",
                                      "constants": [],
                                      "variables": [
                                        "{[PassiveSkill03[5]]}"
                                      ]
                                    }
                                  }
                                }
                              ],
                              "failed": [
                                {
                                  "name": "Define Custom Variable with Stat",
                                  "target": {
                                    "name": "Target Name",
                                    "target": "{{Parameter Target}}"
                                  },
                                  "variableName": "CurrentStance",
                                  "value": "&nbsp;<span class=\"descriptionNumberColor\">CurrentToughness</span>&nbsp;"
                                },
                                {
                                  "name": "IF",
                                  "conditions": {
                                    "name": "Compare: Variable",
                                    "value1": "CurrentStance",
                                    "compareType": "<",
                                    "value2": {
                                      "operator": "Variables[0] (MaxStance) || Constants[0] (2) || DIV || RETURN",
                                      "displayLines": "(MaxStance / 2)",
                                      "constants": [
                                        2
                                      ],
                                      "variables": [
                                        "MaxStance"
                                      ]
                                    }
                                  },
                                  "passed": [
                                    {
                                      "name": "Reset Toughness",
                                      "target": {
                                        "name": "Target Name",
                                        "target": "{{Parameter Target}}"
                                      },
                                      "constantValue": {
                                        "operator": "Variables[0] (MaxStance) || Constants[0] (2) || DIV || RETURN",
                                        "displayLines": "(MaxStance / 2)",
                                        "constants": [
                                          2
                                        ],
                                        "variables": [
                                          "MaxStance"
                                        ]
                                      }
                                    }
                                  ]
                                },
                                {
                                  "name": "Define Custom Variable",
                                  "variableName": "BattleEventPartFlag",
                                  "value": 2
                                },
                                {
                                  "name": "Add Battle Event",
                                  "teamName": "Enemy Team",
                                  "eventID": 20007,
                                  "statSource": {
                                    "name": "Target Name",
                                    "target": "{{Caster}}"
                                  },
                                  "variables": {
                                    "MDF_W2_Feixiao_BattleEvent_ActionDelay": {
                                      "operator": "Variables[0] (LimbDelay) || RETURN",
                                      "displayLines": "LimbDelay",
                                      "constants": [],
                                      "variables": [
                                        "LimbDelay"
                                      ]
                                    },
                                    "MDF_W2_Feixiao_BattleEvent_BaseSpeed": {
                                      "operator": "Variables[0] (CurrentSpeed) || RETURN",
                                      "displayLines": "CurrentSpeed",
                                      "constants": [],
                                      "variables": [
                                        "CurrentSpeed"
                                      ]
                                    },
                                    "MDF_W2_Feixiao_BattleEvent_StanceBreakTakenRatio": {
                                      "operator": "Variables[0] ({[PassiveSkill03[5]]}) || RETURN",
                                      "displayLines": "{[PassiveSkill03[5]]}",
                                      "constants": [],
                                      "variables": [
                                        "{[PassiveSkill03[5]]}"
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
              ]
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
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"2043551800\">Monster_W2_Feixiao_Main</a>"
          },
          {
            "name": "Compare: Variable",
            "value1": "MainTrigger2",
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
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-1817449894\">Monster_W2_Feixiao_MainTutorial</a>"
        },
        {
          "name": "Define Custom Variable",
          "variableName": "MainTrigger2",
          "value": 1
        }
      ]
    },
    "Trigger: Ability End"
  ],
  "targetObjectData": {
    "primaryTarget": "{{Ability Target List}}"
  },
  "references": []
}