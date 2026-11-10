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
          "variableName": "HeadDelay",
          "readTarget": {
            "name": "Target Name",
            "target": "{{Parameter Target}}"
          },
          "value": "&nbsp;<span class=\"descriptionNumberColor\">ActionDelay</span>&nbsp;"
        },
        {
          "name": "Define Custom Variable",
          "value": {
            "displayLines": "(HeadDelay - 9.313226e-10)"
          },
          "variableName": "HeadDelay"
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
          "variableName": "LimbDelay",
          "readTarget": {
            "name": "Target Name",
            "target": "{{Parameter Target}}"
          },
          "value": "&nbsp;<span class=\"descriptionNumberColor\">ActionDelay</span>&nbsp;"
        },
        {
          "name": "Define Custom Variable",
          "value": {
            "displayLines": "(LimbDelay - 9.313226e-10)"
          },
          "variableName": "LimbDelay"
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
          "variableName": "TailDelay",
          "readTarget": {
            "name": "Target Name",
            "target": "{{Parameter Target}}"
          },
          "value": "&nbsp;<span class=\"descriptionNumberColor\">ActionDelay</span>&nbsp;"
        },
        {
          "name": "Define Custom Variable",
          "value": {
            "displayLines": "(TailDelay - 9.313226e-10)"
          },
          "variableName": "TailDelay"
        }
      ]
    },
    {
      "name": "Define Custom Variable with Stat",
      "variableName": "CurrentSpeed",
      "readTarget": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
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
              "displayLines": "{[Skill03[3]]}"
            },
            "MDF_W2_Feixiao_BattleEvent_BaseSpeed": {
              "displayLines": "CurrentSpeed"
            },
            "MDF_W2_Feixiao_BattleEvent_StanceBreakTakenRatio": {
              "displayLines": "{[PassiveSkill03[5]]}"
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
              "displayLines": "{[Skill03[4]]}"
            },
            "MDF_W2_Feixiao_BattleEvent_BaseSpeed": {
              "displayLines": "CurrentSpeed"
            },
            "MDF_W2_Feixiao_BattleEvent_StanceBreakTakenRatio": {
              "displayLines": "{[PassiveSkill03[5]]}"
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
              "value": 0,
              "variableName": "EnhanceFlag"
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
                  "variableName": "MaxStance",
                  "readTarget": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "warningType": "MaxToughness",
                  "value": "&nbsp;<span class=\"descriptionNumberColor\">ToughnessMax</span>&nbsp;"
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
                      "value": 1,
                      "variableName": "EnhanceFlag"
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
                          }
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
                            "displayLines": "(MaxStance / 2)"
                          }
                        }
                      ],
                      "failed": [
                        {
                          "name": "Define Custom Variable with Stat",
                          "variableName": "CurrentStance",
                          "readTarget": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "value": "&nbsp;<span class=\"descriptionNumberColor\">CurrentToughness</span>&nbsp;"
                        },
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Compare: Variable",
                            "value1": "CurrentStance",
                            "compareType": "<",
                            "value2": {
                              "displayLines": "(MaxStance / 2)"
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
                                "displayLines": "(MaxStance / 2)"
                              }
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "name": "Define Custom Variable",
                      "value": 2,
                      "variableName": "BattleEventPartFlag"
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
                          "displayLines": "LimbDelay"
                        },
                        "MDF_W2_Feixiao_BattleEvent_BaseSpeed": {
                          "displayLines": "CurrentSpeed"
                        },
                        "MDF_W2_Feixiao_BattleEvent_StanceBreakTakenRatio": {
                          "displayLines": "{[PassiveSkill03[5]]}"
                        }
                      }
                    }
                  ],
                  "failed": [
                    {
                      "name": "Define Custom Variable with Stat",
                      "variableName": "CurrentStance",
                      "readTarget": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "value": "&nbsp;<span class=\"descriptionNumberColor\">CurrentToughness</span>&nbsp;"
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "CurrentStance",
                        "compareType": "<",
                        "value2": {
                          "displayLines": "(MaxStance / 2)"
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
                            "displayLines": "(MaxStance / 2)"
                          }
                        }
                      ]
                    },
                    {
                      "name": "Define Custom Variable",
                      "value": 2,
                      "variableName": "BattleEventPartFlag"
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
                          "displayLines": "LimbDelay"
                        },
                        "MDF_W2_Feixiao_BattleEvent_BaseSpeed": {
                          "displayLines": "CurrentSpeed"
                        },
                        "MDF_W2_Feixiao_BattleEvent_StanceBreakTakenRatio": {
                          "displayLines": "{[PassiveSkill03[5]]}"
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
                  "variableName": "MaxStance",
                  "readTarget": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "warningType": "MaxToughness",
                  "value": "&nbsp;<span class=\"descriptionNumberColor\">ToughnessMax</span>&nbsp;"
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
                      "value": 1,
                      "variableName": "EnhanceFlag"
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
                          }
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
                            "displayLines": "(MaxStance / 2)"
                          }
                        }
                      ],
                      "failed": [
                        {
                          "name": "Define Custom Variable with Stat",
                          "variableName": "CurrentStance",
                          "readTarget": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "value": "&nbsp;<span class=\"descriptionNumberColor\">CurrentToughness</span>&nbsp;"
                        },
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Compare: Variable",
                            "value1": "CurrentStance",
                            "compareType": "<",
                            "value2": {
                              "displayLines": "(MaxStance / 2)"
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
                                "displayLines": "(MaxStance / 2)"
                              }
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "name": "Define Custom Variable",
                      "value": 1,
                      "variableName": "BattleEventPartFlag"
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
                          "displayLines": "HeadDelay"
                        },
                        "MDF_W2_Feixiao_BattleEvent_BaseSpeed": {
                          "displayLines": "CurrentSpeed"
                        },
                        "MDF_W2_Feixiao_BattleEvent_StanceBreakTakenRatio": {
                          "displayLines": "{[PassiveSkill03[5]]}"
                        }
                      }
                    }
                  ],
                  "failed": [
                    {
                      "name": "Define Custom Variable with Stat",
                      "variableName": "CurrentStance",
                      "readTarget": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "value": "&nbsp;<span class=\"descriptionNumberColor\">CurrentToughness</span>&nbsp;"
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "CurrentStance",
                        "compareType": "<",
                        "value2": {
                          "displayLines": "(MaxStance / 2)"
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
                            "displayLines": "(MaxStance / 2)"
                          }
                        }
                      ]
                    },
                    {
                      "name": "Define Custom Variable",
                      "value": 1,
                      "variableName": "BattleEventPartFlag"
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
                          "displayLines": "HeadDelay"
                        },
                        "MDF_W2_Feixiao_BattleEvent_BaseSpeed": {
                          "displayLines": "CurrentSpeed"
                        },
                        "MDF_W2_Feixiao_BattleEvent_StanceBreakTakenRatio": {
                          "displayLines": "{[PassiveSkill03[5]]}"
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
                  "variableName": "MainDelay",
                  "readTarget": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "value": "&nbsp;<span class=\"descriptionNumberColor\">ActionDelay</span>&nbsp;"
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "MainDelay",
                    "compareType": "<",
                    "value2": {
                      "displayLines": "HeadDelay"
                    }
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "value": 1,
                      "variableName": "MainBeforeHead"
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
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "characterID": "1220 (Feixiao)"
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
                  "displayLines": "TailDelay"
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
                      "displayLines": "LimbDelay"
                    }
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "value": 0,
                      "variableName": "EnhanceFlag"
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
                          "variableName": "MaxStance",
                          "readTarget": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "warningType": "MaxToughness",
                          "value": "&nbsp;<span class=\"descriptionNumberColor\">ToughnessMax</span>&nbsp;"
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
                              "value": 1,
                              "variableName": "EnhanceFlag"
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
                                  }
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
                                  "variableName": "MaxStance",
                                  "readTarget": {
                                    "name": "Target Name",
                                    "target": "{{Parameter Target}}"
                                  },
                                  "warningType": "MaxToughness",
                                  "value": "&nbsp;<span class=\"descriptionNumberColor\">ToughnessMax</span>&nbsp;"
                                }
                              ],
                              "failed": [
                                {
                                  "name": "Define Custom Variable with Stat",
                                  "variableName": "CurrentStance",
                                  "readTarget": {
                                    "name": "Target Name",
                                    "target": "{{Parameter Target}}"
                                  },
                                  "value": "&nbsp;<span class=\"descriptionNumberColor\">CurrentToughness</span>&nbsp;"
                                },
                                {
                                  "name": "IF",
                                  "conditions": {
                                    "name": "Compare: Variable",
                                    "value1": "CurrentStance",
                                    "compareType": "<",
                                    "value2": {
                                      "displayLines": "(MaxStance / 2)"
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
                                        "displayLines": "(MaxStance / 2)"
                                      }
                                    }
                                  ]
                                }
                              ]
                            },
                            {
                              "name": "Define Custom Variable",
                              "value": 3,
                              "variableName": "BattleEventPartFlag"
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
                                  "displayLines": "TailDelay"
                                },
                                "MDF_W2_Feixiao_BattleEvent_BaseSpeed": {
                                  "displayLines": "CurrentSpeed"
                                },
                                "MDF_W2_Feixiao_BattleEvent_StanceBreakTakenRatio": {
                                  "displayLines": "{[PassiveSkill03[5]]}"
                                }
                              }
                            }
                          ],
                          "failed": [
                            {
                              "name": "Define Custom Variable with Stat",
                              "variableName": "CurrentStance",
                              "readTarget": {
                                "name": "Target Name",
                                "target": "{{Parameter Target}}"
                              },
                              "value": "&nbsp;<span class=\"descriptionNumberColor\">CurrentToughness</span>&nbsp;"
                            },
                            {
                              "name": "IF",
                              "conditions": {
                                "name": "Compare: Variable",
                                "value1": "CurrentStance",
                                "compareType": "<",
                                "value2": {
                                  "displayLines": "(MaxStance / 2)"
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
                                    "displayLines": "(MaxStance / 2)"
                                  }
                                }
                              ]
                            },
                            {
                              "name": "Define Custom Variable",
                              "value": 3,
                              "variableName": "BattleEventPartFlag"
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
                                  "displayLines": "TailDelay"
                                },
                                "MDF_W2_Feixiao_BattleEvent_BaseSpeed": {
                                  "displayLines": "CurrentSpeed"
                                },
                                "MDF_W2_Feixiao_BattleEvent_StanceBreakTakenRatio": {
                                  "displayLines": "{[PassiveSkill03[5]]}"
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
                          "variableName": "MaxStance",
                          "readTarget": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "warningType": "MaxToughness",
                          "value": "&nbsp;<span class=\"descriptionNumberColor\">ToughnessMax</span>&nbsp;"
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
                              "value": 1,
                              "variableName": "EnhanceFlag"
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
                                  }
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
                                    "displayLines": "(MaxStance / 2)"
                                  }
                                }
                              ],
                              "failed": [
                                {
                                  "name": "Define Custom Variable with Stat",
                                  "variableName": "CurrentStance",
                                  "readTarget": {
                                    "name": "Target Name",
                                    "target": "{{Parameter Target}}"
                                  },
                                  "value": "&nbsp;<span class=\"descriptionNumberColor\">CurrentToughness</span>&nbsp;"
                                },
                                {
                                  "name": "IF",
                                  "conditions": {
                                    "name": "Compare: Variable",
                                    "value1": "CurrentStance",
                                    "compareType": "<",
                                    "value2": {
                                      "displayLines": "(MaxStance / 2)"
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
                                        "displayLines": "(MaxStance / 2)"
                                      }
                                    }
                                  ]
                                }
                              ]
                            },
                            {
                              "name": "Define Custom Variable",
                              "value": 1,
                              "variableName": "BattleEventPartFlag"
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
                                  "displayLines": "HeadDelay"
                                },
                                "MDF_W2_Feixiao_BattleEvent_BaseSpeed": {
                                  "displayLines": "CurrentSpeed"
                                },
                                "MDF_W2_Feixiao_BattleEvent_StanceBreakTakenRatio": {
                                  "displayLines": "{[PassiveSkill03[5]]}"
                                }
                              }
                            }
                          ],
                          "failed": [
                            {
                              "name": "Define Custom Variable with Stat",
                              "variableName": "CurrentStance",
                              "readTarget": {
                                "name": "Target Name",
                                "target": "{{Parameter Target}}"
                              },
                              "value": "&nbsp;<span class=\"descriptionNumberColor\">CurrentToughness</span>&nbsp;"
                            },
                            {
                              "name": "IF",
                              "conditions": {
                                "name": "Compare: Variable",
                                "value1": "CurrentStance",
                                "compareType": "<",
                                "value2": {
                                  "displayLines": "(MaxStance / 2)"
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
                                    "displayLines": "(MaxStance / 2)"
                                  }
                                }
                              ]
                            },
                            {
                              "name": "Define Custom Variable",
                              "value": 1,
                              "variableName": "BattleEventPartFlag"
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
                                  "displayLines": "HeadDelay"
                                },
                                "MDF_W2_Feixiao_BattleEvent_BaseSpeed": {
                                  "displayLines": "CurrentSpeed"
                                },
                                "MDF_W2_Feixiao_BattleEvent_StanceBreakTakenRatio": {
                                  "displayLines": "{[PassiveSkill03[5]]}"
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
                          "displayLines": "LimbDelay"
                        }
                      },
                      "passed": [
                        {
                          "name": "Define Custom Variable",
                          "value": 0,
                          "variableName": "EnhanceFlag"
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
                              "variableName": "MaxStance",
                              "readTarget": {
                                "name": "Target Name",
                                "target": "{{Parameter Target}}"
                              },
                              "warningType": "MaxToughness",
                              "value": "&nbsp;<span class=\"descriptionNumberColor\">ToughnessMax</span>&nbsp;"
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
                                  "value": 1,
                                  "variableName": "EnhanceFlag"
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
                                      }
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
                                        "displayLines": "(MaxStance / 2)"
                                      }
                                    }
                                  ],
                                  "failed": [
                                    {
                                      "name": "Define Custom Variable with Stat",
                                      "variableName": "CurrentStance",
                                      "readTarget": {
                                        "name": "Target Name",
                                        "target": "{{Parameter Target}}"
                                      },
                                      "value": "&nbsp;<span class=\"descriptionNumberColor\">CurrentToughness</span>&nbsp;"
                                    },
                                    {
                                      "name": "IF",
                                      "conditions": {
                                        "name": "Compare: Variable",
                                        "value1": "CurrentStance",
                                        "compareType": "<",
                                        "value2": {
                                          "displayLines": "(MaxStance / 2)"
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
                                            "displayLines": "(MaxStance / 2)"
                                          }
                                        }
                                      ]
                                    }
                                  ]
                                },
                                {
                                  "name": "Define Custom Variable",
                                  "value": 2,
                                  "variableName": "BattleEventPartFlag"
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
                                      "displayLines": "LimbDelay"
                                    },
                                    "MDF_W2_Feixiao_BattleEvent_BaseSpeed": {
                                      "displayLines": "CurrentSpeed"
                                    },
                                    "MDF_W2_Feixiao_BattleEvent_StanceBreakTakenRatio": {
                                      "displayLines": "{[PassiveSkill03[5]]}"
                                    }
                                  }
                                }
                              ],
                              "failed": [
                                {
                                  "name": "Define Custom Variable with Stat",
                                  "variableName": "CurrentStance",
                                  "readTarget": {
                                    "name": "Target Name",
                                    "target": "{{Parameter Target}}"
                                  },
                                  "value": "&nbsp;<span class=\"descriptionNumberColor\">CurrentToughness</span>&nbsp;"
                                },
                                {
                                  "name": "IF",
                                  "conditions": {
                                    "name": "Compare: Variable",
                                    "value1": "CurrentStance",
                                    "compareType": "<",
                                    "value2": {
                                      "displayLines": "(MaxStance / 2)"
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
                                        "displayLines": "(MaxStance / 2)"
                                      }
                                    }
                                  ]
                                },
                                {
                                  "name": "Define Custom Variable",
                                  "value": 2,
                                  "variableName": "BattleEventPartFlag"
                                },
                                {
                                  "name": "Define Custom Variable",
                                  "value": 2,
                                  "variableName": "BattleEventPartFlag"
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
                                      "displayLines": "LimbDelay"
                                    },
                                    "MDF_W2_Feixiao_BattleEvent_BaseSpeed": {
                                      "displayLines": "CurrentSpeed"
                                    },
                                    "MDF_W2_Feixiao_BattleEvent_StanceBreakTakenRatio": {
                                      "displayLines": "{[PassiveSkill03[5]]}"
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
                              "variableName": "MaxStance",
                              "readTarget": {
                                "name": "Target Name",
                                "target": "{{Parameter Target}}"
                              },
                              "warningType": "MaxToughness",
                              "value": "&nbsp;<span class=\"descriptionNumberColor\">ToughnessMax</span>&nbsp;"
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
                                  "value": 1,
                                  "variableName": "EnhanceFlag"
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
                                      }
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
                                        "displayLines": "(MaxStance / 2)"
                                      }
                                    }
                                  ],
                                  "failed": [
                                    {
                                      "name": "Define Custom Variable with Stat",
                                      "variableName": "CurrentStance",
                                      "readTarget": {
                                        "name": "Target Name",
                                        "target": "{{Parameter Target}}"
                                      },
                                      "value": "&nbsp;<span class=\"descriptionNumberColor\">CurrentToughness</span>&nbsp;"
                                    },
                                    {
                                      "name": "IF",
                                      "conditions": {
                                        "name": "Compare: Variable",
                                        "value1": "CurrentStance",
                                        "compareType": "<",
                                        "value2": {
                                          "displayLines": "(MaxStance / 2)"
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
                                            "displayLines": "(MaxStance / 2)"
                                          }
                                        }
                                      ]
                                    }
                                  ]
                                },
                                {
                                  "name": "Define Custom Variable",
                                  "value": 1,
                                  "variableName": "BattleEventPartFlag"
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
                                      "displayLines": "HeadDelay"
                                    },
                                    "MDF_W2_Feixiao_BattleEvent_BaseSpeed": {
                                      "displayLines": "CurrentSpeed"
                                    },
                                    "MDF_W2_Feixiao_BattleEvent_StanceBreakTakenRatio": {
                                      "displayLines": "{[PassiveSkill03[5]]}"
                                    }
                                  }
                                }
                              ],
                              "failed": [
                                {
                                  "name": "Define Custom Variable with Stat",
                                  "variableName": "CurrentStance",
                                  "readTarget": {
                                    "name": "Target Name",
                                    "target": "{{Parameter Target}}"
                                  },
                                  "value": "&nbsp;<span class=\"descriptionNumberColor\">CurrentToughness</span>&nbsp;"
                                },
                                {
                                  "name": "IF",
                                  "conditions": {
                                    "name": "Compare: Variable",
                                    "value1": "CurrentStance",
                                    "compareType": "<",
                                    "value2": {
                                      "displayLines": "(MaxStance / 2)"
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
                                        "displayLines": "(MaxStance / 2)"
                                      }
                                    }
                                  ]
                                },
                                {
                                  "name": "Define Custom Variable",
                                  "value": 1,
                                  "variableName": "BattleEventPartFlag"
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
                                      "displayLines": "HeadDelay"
                                    },
                                    "MDF_W2_Feixiao_BattleEvent_BaseSpeed": {
                                      "displayLines": "CurrentSpeed"
                                    },
                                    "MDF_W2_Feixiao_BattleEvent_StanceBreakTakenRatio": {
                                      "displayLines": "{[PassiveSkill03[5]]}"
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
                          "value": 0,
                          "variableName": "EnhanceFlag"
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
                              "variableName": "MaxStance",
                              "readTarget": {
                                "name": "Target Name",
                                "target": "{{Parameter Target}}"
                              },
                              "warningType": "MaxToughness",
                              "value": "&nbsp;<span class=\"descriptionNumberColor\">ToughnessMax</span>&nbsp;"
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
                                  "value": 1,
                                  "variableName": "EnhanceFlag"
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
                                      }
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
                                        "displayLines": "(MaxStance / 2)"
                                      }
                                    }
                                  ],
                                  "failed": [
                                    {
                                      "name": "Define Custom Variable with Stat",
                                      "variableName": "CurrentStance",
                                      "readTarget": {
                                        "name": "Target Name",
                                        "target": "{{Parameter Target}}"
                                      },
                                      "value": "&nbsp;<span class=\"descriptionNumberColor\">CurrentToughness</span>&nbsp;"
                                    },
                                    {
                                      "name": "IF",
                                      "conditions": {
                                        "name": "Compare: Variable",
                                        "value1": "CurrentStance",
                                        "compareType": "<",
                                        "value2": {
                                          "displayLines": "(MaxStance / 2)"
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
                                            "displayLines": "(MaxStance / 2)"
                                          }
                                        }
                                      ]
                                    }
                                  ]
                                },
                                {
                                  "name": "Define Custom Variable",
                                  "value": 1,
                                  "variableName": "BattleEventPartFlag"
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
                                      "displayLines": "HeadDelay"
                                    },
                                    "MDF_W2_Feixiao_BattleEvent_BaseSpeed": {
                                      "displayLines": "CurrentSpeed"
                                    },
                                    "MDF_W2_Feixiao_BattleEvent_StanceBreakTakenRatio": {
                                      "displayLines": "{[PassiveSkill03[5]]}"
                                    }
                                  }
                                }
                              ],
                              "failed": [
                                {
                                  "name": "Define Custom Variable with Stat",
                                  "variableName": "CurrentStance",
                                  "readTarget": {
                                    "name": "Target Name",
                                    "target": "{{Parameter Target}}"
                                  },
                                  "value": "&nbsp;<span class=\"descriptionNumberColor\">CurrentToughness</span>&nbsp;"
                                },
                                {
                                  "name": "IF",
                                  "conditions": {
                                    "name": "Compare: Variable",
                                    "value1": "CurrentStance",
                                    "compareType": "<",
                                    "value2": {
                                      "displayLines": "(MaxStance / 2)"
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
                                        "displayLines": "(MaxStance / 2)"
                                      }
                                    }
                                  ]
                                },
                                {
                                  "name": "Define Custom Variable",
                                  "value": 1,
                                  "variableName": "BattleEventPartFlag"
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
                                      "displayLines": "HeadDelay"
                                    },
                                    "MDF_W2_Feixiao_BattleEvent_BaseSpeed": {
                                      "displayLines": "CurrentSpeed"
                                    },
                                    "MDF_W2_Feixiao_BattleEvent_StanceBreakTakenRatio": {
                                      "displayLines": "{[PassiveSkill03[5]]}"
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
                              "variableName": "MaxStance",
                              "readTarget": {
                                "name": "Target Name",
                                "target": "{{Parameter Target}}"
                              },
                              "warningType": "MaxToughness",
                              "value": "&nbsp;<span class=\"descriptionNumberColor\">ToughnessMax</span>&nbsp;"
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
                                  "value": 1,
                                  "variableName": "EnhanceFlag"
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
                                      }
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
                                        "displayLines": "(MaxStance / 2)"
                                      }
                                    }
                                  ],
                                  "failed": [
                                    {
                                      "name": "Define Custom Variable with Stat",
                                      "variableName": "CurrentStance",
                                      "readTarget": {
                                        "name": "Target Name",
                                        "target": "{{Parameter Target}}"
                                      },
                                      "value": "&nbsp;<span class=\"descriptionNumberColor\">CurrentToughness</span>&nbsp;"
                                    },
                                    {
                                      "name": "IF",
                                      "conditions": {
                                        "name": "Compare: Variable",
                                        "value1": "CurrentStance",
                                        "compareType": "<",
                                        "value2": {
                                          "displayLines": "(MaxStance / 2)"
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
                                            "displayLines": "(MaxStance / 2)"
                                          }
                                        }
                                      ]
                                    }
                                  ]
                                },
                                {
                                  "name": "Define Custom Variable",
                                  "value": 2,
                                  "variableName": "BattleEventPartFlag"
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
                                      "displayLines": "LimbDelay"
                                    },
                                    "MDF_W2_Feixiao_BattleEvent_BaseSpeed": {
                                      "displayLines": "CurrentSpeed"
                                    },
                                    "MDF_W2_Feixiao_BattleEvent_StanceBreakTakenRatio": {
                                      "displayLines": "{[PassiveSkill03[5]]}"
                                    }
                                  }
                                }
                              ],
                              "failed": [
                                {
                                  "name": "Define Custom Variable with Stat",
                                  "variableName": "CurrentStance",
                                  "readTarget": {
                                    "name": "Target Name",
                                    "target": "{{Parameter Target}}"
                                  },
                                  "value": "&nbsp;<span class=\"descriptionNumberColor\">CurrentToughness</span>&nbsp;"
                                },
                                {
                                  "name": "IF",
                                  "conditions": {
                                    "name": "Compare: Variable",
                                    "value1": "CurrentStance",
                                    "compareType": "<",
                                    "value2": {
                                      "displayLines": "(MaxStance / 2)"
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
                                        "displayLines": "(MaxStance / 2)"
                                      }
                                    }
                                  ]
                                },
                                {
                                  "name": "Define Custom Variable",
                                  "value": 2,
                                  "variableName": "BattleEventPartFlag"
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
                                      "displayLines": "LimbDelay"
                                    },
                                    "MDF_W2_Feixiao_BattleEvent_BaseSpeed": {
                                      "displayLines": "CurrentSpeed"
                                    },
                                    "MDF_W2_Feixiao_BattleEvent_StanceBreakTakenRatio": {
                                      "displayLines": "{[PassiveSkill03[5]]}"
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
                      "displayLines": "LimbDelay"
                    }
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "value": 0,
                      "variableName": "EnhanceFlag"
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
                          "variableName": "MaxStance",
                          "readTarget": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "warningType": "MaxToughness",
                          "value": "&nbsp;<span class=\"descriptionNumberColor\">ToughnessMax</span>&nbsp;"
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
                              "value": 1,
                              "variableName": "EnhanceFlag"
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
                                  }
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
                                    "displayLines": "(MaxStance / 2)"
                                  }
                                }
                              ],
                              "failed": [
                                {
                                  "name": "Define Custom Variable with Stat",
                                  "variableName": "CurrentStance",
                                  "readTarget": {
                                    "name": "Target Name",
                                    "target": "{{Parameter Target}}"
                                  },
                                  "value": "&nbsp;<span class=\"descriptionNumberColor\">CurrentToughness</span>&nbsp;"
                                },
                                {
                                  "name": "IF",
                                  "conditions": {
                                    "name": "Compare: Variable",
                                    "value1": "CurrentStance",
                                    "compareType": "<",
                                    "value2": {
                                      "displayLines": "(MaxStance / 2)"
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
                                        "displayLines": "(MaxStance / 2)"
                                      }
                                    }
                                  ]
                                }
                              ]
                            },
                            {
                              "name": "Define Custom Variable",
                              "value": 1,
                              "variableName": "BattleEventPartFlag"
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
                                  "displayLines": "HeadDelay"
                                },
                                "MDF_W2_Feixiao_BattleEvent_BaseSpeed": {
                                  "displayLines": "CurrentSpeed"
                                },
                                "MDF_W2_Feixiao_BattleEvent_StanceBreakTakenRatio": {
                                  "displayLines": "{[PassiveSkill03[5]]}"
                                }
                              }
                            }
                          ],
                          "failed": [
                            {
                              "name": "Define Custom Variable with Stat",
                              "variableName": "CurrentStance",
                              "readTarget": {
                                "name": "Target Name",
                                "target": "{{Parameter Target}}"
                              },
                              "value": "&nbsp;<span class=\"descriptionNumberColor\">CurrentToughness</span>&nbsp;"
                            },
                            {
                              "name": "IF",
                              "conditions": {
                                "name": "Compare: Variable",
                                "value1": "CurrentStance",
                                "compareType": "<",
                                "value2": {
                                  "displayLines": "(MaxStance / 2)"
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
                                    "displayLines": "(MaxStance / 2)"
                                  }
                                }
                              ]
                            },
                            {
                              "name": "Define Custom Variable",
                              "value": 1,
                              "variableName": "BattleEventPartFlag"
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
                                  "displayLines": "HeadDelay"
                                },
                                "MDF_W2_Feixiao_BattleEvent_BaseSpeed": {
                                  "displayLines": "CurrentSpeed"
                                },
                                "MDF_W2_Feixiao_BattleEvent_StanceBreakTakenRatio": {
                                  "displayLines": "{[PassiveSkill03[5]]}"
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
                          "variableName": "MaxStance",
                          "readTarget": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "warningType": "MaxToughness",
                          "value": "&nbsp;<span class=\"descriptionNumberColor\">ToughnessMax</span>&nbsp;"
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
                              "value": 1,
                              "variableName": "EnhanceFlag"
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
                                  }
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
                                    "displayLines": "(MaxStance / 2)"
                                  }
                                }
                              ],
                              "failed": [
                                {
                                  "name": "Define Custom Variable with Stat",
                                  "variableName": "CurrentStance",
                                  "readTarget": {
                                    "name": "Target Name",
                                    "target": "{{Parameter Target}}"
                                  },
                                  "value": "&nbsp;<span class=\"descriptionNumberColor\">CurrentToughness</span>&nbsp;"
                                },
                                {
                                  "name": "IF",
                                  "conditions": {
                                    "name": "Compare: Variable",
                                    "value1": "CurrentStance",
                                    "compareType": "<",
                                    "value2": {
                                      "displayLines": "(MaxStance / 2)"
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
                                        "displayLines": "(MaxStance / 2)"
                                      }
                                    }
                                  ]
                                }
                              ]
                            },
                            {
                              "name": "Define Custom Variable",
                              "value": 3,
                              "variableName": "BattleEventPartFlag"
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
                                  "displayLines": "TailDelay"
                                },
                                "MDF_W2_Feixiao_BattleEvent_BaseSpeed": {
                                  "displayLines": "CurrentSpeed"
                                },
                                "MDF_W2_Feixiao_BattleEvent_StanceBreakTakenRatio": {
                                  "displayLines": "{[PassiveSkill03[5]]}"
                                }
                              }
                            }
                          ],
                          "failed": [
                            {
                              "name": "Define Custom Variable with Stat",
                              "variableName": "CurrentStance",
                              "readTarget": {
                                "name": "Target Name",
                                "target": "{{Parameter Target}}"
                              },
                              "value": "&nbsp;<span class=\"descriptionNumberColor\">CurrentToughness</span>&nbsp;"
                            },
                            {
                              "name": "IF",
                              "conditions": {
                                "name": "Compare: Variable",
                                "value1": "CurrentStance",
                                "compareType": "<",
                                "value2": {
                                  "displayLines": "(MaxStance / 2)"
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
                                    "displayLines": "(MaxStance / 2)"
                                  }
                                }
                              ]
                            },
                            {
                              "name": "Define Custom Variable",
                              "value": 3,
                              "variableName": "BattleEventPartFlag"
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
                                  "displayLines": "TailDelay"
                                },
                                "MDF_W2_Feixiao_BattleEvent_BaseSpeed": {
                                  "displayLines": "CurrentSpeed"
                                },
                                "MDF_W2_Feixiao_BattleEvent_StanceBreakTakenRatio": {
                                  "displayLines": "{[PassiveSkill03[5]]}"
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
                          "displayLines": "LimbDelay"
                        }
                      },
                      "passed": [
                        {
                          "name": "Define Custom Variable",
                          "value": 0,
                          "variableName": "EnhanceFlag"
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
                              "variableName": "MaxStance",
                              "readTarget": {
                                "name": "Target Name",
                                "target": "{{Parameter Target}}"
                              },
                              "warningType": "MaxToughness",
                              "value": "&nbsp;<span class=\"descriptionNumberColor\">ToughnessMax</span>&nbsp;"
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
                                  "value": 1,
                                  "variableName": "EnhanceFlag"
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
                                      }
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
                                        "displayLines": "(MaxStance / 2)"
                                      }
                                    }
                                  ],
                                  "failed": [
                                    {
                                      "name": "Define Custom Variable with Stat",
                                      "variableName": "CurrentStance",
                                      "readTarget": {
                                        "name": "Target Name",
                                        "target": "{{Parameter Target}}"
                                      },
                                      "value": "&nbsp;<span class=\"descriptionNumberColor\">CurrentToughness</span>&nbsp;"
                                    },
                                    {
                                      "name": "IF",
                                      "conditions": {
                                        "name": "Compare: Variable",
                                        "value1": "CurrentStance",
                                        "compareType": "<",
                                        "value2": {
                                          "displayLines": "(MaxStance / 2)"
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
                                            "displayLines": "(MaxStance / 2)"
                                          }
                                        }
                                      ]
                                    }
                                  ]
                                },
                                {
                                  "name": "Define Custom Variable",
                                  "value": 2,
                                  "variableName": "BattleEventPartFlag"
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
                                      "displayLines": "LimbDelay"
                                    },
                                    "MDF_W2_Feixiao_BattleEvent_BaseSpeed": {
                                      "displayLines": "CurrentSpeed"
                                    },
                                    "MDF_W2_Feixiao_BattleEvent_StanceBreakTakenRatio": {
                                      "displayLines": "{[PassiveSkill03[5]]}"
                                    }
                                  }
                                }
                              ],
                              "failed": [
                                {
                                  "name": "Define Custom Variable with Stat",
                                  "variableName": "CurrentStance",
                                  "readTarget": {
                                    "name": "Target Name",
                                    "target": "{{Parameter Target}}"
                                  },
                                  "value": "&nbsp;<span class=\"descriptionNumberColor\">CurrentToughness</span>&nbsp;"
                                },
                                {
                                  "name": "IF",
                                  "conditions": {
                                    "name": "Compare: Variable",
                                    "value1": "CurrentStance",
                                    "compareType": "<",
                                    "value2": {
                                      "displayLines": "(MaxStance / 2)"
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
                                        "displayLines": "(MaxStance / 2)"
                                      }
                                    }
                                  ]
                                },
                                {
                                  "name": "Define Custom Variable",
                                  "value": 2,
                                  "variableName": "BattleEventPartFlag"
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
                                      "displayLines": "LimbDelay"
                                    },
                                    "MDF_W2_Feixiao_BattleEvent_BaseSpeed": {
                                      "displayLines": "CurrentSpeed"
                                    },
                                    "MDF_W2_Feixiao_BattleEvent_StanceBreakTakenRatio": {
                                      "displayLines": "{[PassiveSkill03[5]]}"
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
                              "variableName": "MaxStance",
                              "readTarget": {
                                "name": "Target Name",
                                "target": "{{Parameter Target}}"
                              },
                              "warningType": "MaxToughness",
                              "value": "&nbsp;<span class=\"descriptionNumberColor\">ToughnessMax</span>&nbsp;"
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
                                  "value": 1,
                                  "variableName": "EnhanceFlag"
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
                                      }
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
                                        "displayLines": "(MaxStance / 2)"
                                      }
                                    }
                                  ],
                                  "failed": [
                                    {
                                      "name": "Define Custom Variable with Stat",
                                      "variableName": "CurrentStance",
                                      "readTarget": {
                                        "name": "Target Name",
                                        "target": "{{Parameter Target}}"
                                      },
                                      "value": "&nbsp;<span class=\"descriptionNumberColor\">CurrentToughness</span>&nbsp;"
                                    },
                                    {
                                      "name": "IF",
                                      "conditions": {
                                        "name": "Compare: Variable",
                                        "value1": "CurrentStance",
                                        "compareType": "<",
                                        "value2": {
                                          "displayLines": "(MaxStance / 2)"
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
                                            "displayLines": "(MaxStance / 2)"
                                          }
                                        }
                                      ]
                                    }
                                  ]
                                },
                                {
                                  "name": "Define Custom Variable",
                                  "value": 3,
                                  "variableName": "BattleEventPartFlag"
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
                                      "displayLines": "TailDelay"
                                    },
                                    "MDF_W2_Feixiao_BattleEvent_BaseSpeed": {
                                      "displayLines": "CurrentSpeed"
                                    },
                                    "MDF_W2_Feixiao_BattleEvent_StanceBreakTakenRatio": {
                                      "displayLines": "{[PassiveSkill03[5]]}"
                                    }
                                  }
                                }
                              ],
                              "failed": [
                                {
                                  "name": "Define Custom Variable with Stat",
                                  "variableName": "CurrentStance",
                                  "readTarget": {
                                    "name": "Target Name",
                                    "target": "{{Parameter Target}}"
                                  },
                                  "value": "&nbsp;<span class=\"descriptionNumberColor\">CurrentToughness</span>&nbsp;"
                                },
                                {
                                  "name": "IF",
                                  "conditions": {
                                    "name": "Compare: Variable",
                                    "value1": "CurrentStance",
                                    "compareType": "<",
                                    "value2": {
                                      "displayLines": "(MaxStance / 2)"
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
                                        "displayLines": "(MaxStance / 2)"
                                      }
                                    }
                                  ]
                                },
                                {
                                  "name": "Define Custom Variable",
                                  "value": 3,
                                  "variableName": "BattleEventPartFlag"
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
                                      "displayLines": "TailDelay"
                                    },
                                    "MDF_W2_Feixiao_BattleEvent_BaseSpeed": {
                                      "displayLines": "CurrentSpeed"
                                    },
                                    "MDF_W2_Feixiao_BattleEvent_StanceBreakTakenRatio": {
                                      "displayLines": "{[PassiveSkill03[5]]}"
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
                          "value": 0,
                          "variableName": "EnhanceFlag"
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
                              "variableName": "MaxStance",
                              "readTarget": {
                                "name": "Target Name",
                                "target": "{{Parameter Target}}"
                              },
                              "warningType": "MaxToughness",
                              "value": "&nbsp;<span class=\"descriptionNumberColor\">ToughnessMax</span>&nbsp;"
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
                                  "value": 1,
                                  "variableName": "EnhanceFlag"
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
                                      }
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
                                        "displayLines": "(MaxStance / 2)"
                                      }
                                    }
                                  ],
                                  "failed": [
                                    {
                                      "name": "Define Custom Variable with Stat",
                                      "variableName": "CurrentStance",
                                      "readTarget": {
                                        "name": "Target Name",
                                        "target": "{{Parameter Target}}"
                                      },
                                      "value": "&nbsp;<span class=\"descriptionNumberColor\">CurrentToughness</span>&nbsp;"
                                    },
                                    {
                                      "name": "IF",
                                      "conditions": {
                                        "name": "Compare: Variable",
                                        "value1": "CurrentStance",
                                        "compareType": "<",
                                        "value2": {
                                          "displayLines": "(MaxStance / 2)"
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
                                            "displayLines": "(MaxStance / 2)"
                                          }
                                        }
                                      ]
                                    }
                                  ]
                                },
                                {
                                  "name": "Define Custom Variable",
                                  "value": 3,
                                  "variableName": "BattleEventPartFlag"
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
                                      "displayLines": "TailDelay"
                                    },
                                    "MDF_W2_Feixiao_BattleEvent_BaseSpeed": {
                                      "displayLines": "CurrentSpeed"
                                    },
                                    "MDF_W2_Feixiao_BattleEvent_StanceBreakTakenRatio": {
                                      "displayLines": "{[PassiveSkill03[5]]}"
                                    }
                                  }
                                }
                              ],
                              "failed": [
                                {
                                  "name": "Define Custom Variable with Stat",
                                  "variableName": "CurrentStance",
                                  "readTarget": {
                                    "name": "Target Name",
                                    "target": "{{Parameter Target}}"
                                  },
                                  "value": "&nbsp;<span class=\"descriptionNumberColor\">CurrentToughness</span>&nbsp;"
                                },
                                {
                                  "name": "IF",
                                  "conditions": {
                                    "name": "Compare: Variable",
                                    "value1": "CurrentStance",
                                    "compareType": "<",
                                    "value2": {
                                      "displayLines": "(MaxStance / 2)"
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
                                        "displayLines": "(MaxStance / 2)"
                                      }
                                    }
                                  ]
                                },
                                {
                                  "name": "Define Custom Variable",
                                  "value": 3,
                                  "variableName": "BattleEventPartFlag"
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
                                      "displayLines": "TailDelay"
                                    },
                                    "MDF_W2_Feixiao_BattleEvent_BaseSpeed": {
                                      "displayLines": "CurrentSpeed"
                                    },
                                    "MDF_W2_Feixiao_BattleEvent_StanceBreakTakenRatio": {
                                      "displayLines": "{[PassiveSkill03[5]]}"
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
                              "variableName": "MaxStance",
                              "readTarget": {
                                "name": "Target Name",
                                "target": "{{Parameter Target}}"
                              },
                              "warningType": "MaxToughness",
                              "value": "&nbsp;<span class=\"descriptionNumberColor\">ToughnessMax</span>&nbsp;"
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
                                  "value": 1,
                                  "variableName": "EnhanceFlag"
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
                                      }
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
                                        "displayLines": "(MaxStance / 2)"
                                      }
                                    }
                                  ],
                                  "failed": [
                                    {
                                      "name": "Define Custom Variable with Stat",
                                      "variableName": "CurrentStance",
                                      "readTarget": {
                                        "name": "Target Name",
                                        "target": "{{Parameter Target}}"
                                      },
                                      "value": "&nbsp;<span class=\"descriptionNumberColor\">CurrentToughness</span>&nbsp;"
                                    },
                                    {
                                      "name": "IF",
                                      "conditions": {
                                        "name": "Compare: Variable",
                                        "value1": "CurrentStance",
                                        "compareType": "<",
                                        "value2": {
                                          "displayLines": "(MaxStance / 2)"
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
                                            "displayLines": "(MaxStance / 2)"
                                          }
                                        }
                                      ]
                                    }
                                  ]
                                },
                                {
                                  "name": "Define Custom Variable",
                                  "value": 2,
                                  "variableName": "BattleEventPartFlag"
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
                                      "displayLines": "LimbDelay"
                                    },
                                    "MDF_W2_Feixiao_BattleEvent_BaseSpeed": {
                                      "displayLines": "CurrentSpeed"
                                    },
                                    "MDF_W2_Feixiao_BattleEvent_StanceBreakTakenRatio": {
                                      "displayLines": "{[PassiveSkill03[5]]}"
                                    }
                                  }
                                }
                              ],
                              "failed": [
                                {
                                  "name": "Define Custom Variable with Stat",
                                  "variableName": "CurrentStance",
                                  "readTarget": {
                                    "name": "Target Name",
                                    "target": "{{Parameter Target}}"
                                  },
                                  "value": "&nbsp;<span class=\"descriptionNumberColor\">CurrentToughness</span>&nbsp;"
                                },
                                {
                                  "name": "IF",
                                  "conditions": {
                                    "name": "Compare: Variable",
                                    "value1": "CurrentStance",
                                    "compareType": "<",
                                    "value2": {
                                      "displayLines": "(MaxStance / 2)"
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
                                        "displayLines": "(MaxStance / 2)"
                                      }
                                    }
                                  ]
                                },
                                {
                                  "name": "Define Custom Variable",
                                  "value": 2,
                                  "variableName": "BattleEventPartFlag"
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
                                      "displayLines": "LimbDelay"
                                    },
                                    "MDF_W2_Feixiao_BattleEvent_BaseSpeed": {
                                      "displayLines": "CurrentSpeed"
                                    },
                                    "MDF_W2_Feixiao_BattleEvent_StanceBreakTakenRatio": {
                                      "displayLines": "{[PassiveSkill03[5]]}"
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
          "value": 1,
          "variableName": "MainTrigger2"
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