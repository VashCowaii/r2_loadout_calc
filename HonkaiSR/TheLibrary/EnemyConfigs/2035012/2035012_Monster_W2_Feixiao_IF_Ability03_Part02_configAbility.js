const configAbility = {
  "fileName": "2035012_Monster_W2_Feixiao_IF_Ability03_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    "Ability Start",
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
                          "name": "Reset Toughness",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
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
                      "eventID": 20021,
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
                        }
                      }
                    }
                  ],
                  "failed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "BattleEventPartFlag",
                      "value": 3
                    },
                    {
                      "name": "Add Battle Event",
                      "teamName": "Enemy Team",
                      "eventID": 20021,
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
                      "eventID": 20021,
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
                        }
                      }
                    }
                  ],
                  "failed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "BattleEventPartFlag",
                      "value": 1
                    },
                    {
                      "name": "Add Battle Event",
                      "teamName": "Enemy Team",
                      "eventID": 20021,
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
                          "eventID": 20021,
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
                            }
                          }
                        }
                      ],
                      "failed": [
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
                          "eventID": 20021,
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
                          "eventID": 20021,
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
                            }
                          }
                        }
                      ],
                      "failed": [
                        {
                          "name": "Define Custom Variable",
                          "variableName": "BattleEventPartFlag",
                          "value": 1
                        },
                        {
                          "name": "Add Battle Event",
                          "teamName": "Enemy Team",
                          "eventID": 20021,
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
                          "eventID": 20021,
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
                            }
                          }
                        }
                      ],
                      "failed": [
                        {
                          "name": "Define Custom Variable",
                          "variableName": "BattleEventPartFlag",
                          "value": 1
                        },
                        {
                          "name": "Add Battle Event",
                          "teamName": "Enemy Team",
                          "eventID": 20021,
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
                          "eventID": 20021,
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
                            }
                          }
                        }
                      ],
                      "failed": [
                        {
                          "name": "Define Custom Variable",
                          "variableName": "BattleEventPartFlag",
                          "value": 2
                        },
                        {
                          "name": "Add Battle Event",
                          "teamName": "Enemy Team",
                          "eventID": 20021,
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
                      "eventID": 20021,
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
                        }
                      }
                    }
                  ],
                  "failed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "BattleEventPartFlag",
                      "value": 1
                    },
                    {
                      "name": "Add Battle Event",
                      "teamName": "Enemy Team",
                      "eventID": 20021,
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
                      "eventID": 20021,
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
                        }
                      }
                    }
                  ],
                  "failed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "BattleEventPartFlag",
                      "value": 3
                    },
                    {
                      "name": "Add Battle Event",
                      "teamName": "Enemy Team",
                      "eventID": 20021,
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
                          "eventID": 20021,
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
                            }
                          }
                        }
                      ],
                      "failed": [
                        {
                          "name": "Define Custom Variable",
                          "variableName": "BattleEventPartFlag",
                          "value": 2
                        },
                        {
                          "name": "Add Battle Event",
                          "teamName": "Enemy Team",
                          "eventID": 20021,
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
                          "eventID": 20021,
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
                            }
                          }
                        }
                      ],
                      "failed": [
                        {
                          "name": "Define Custom Variable",
                          "variableName": "BattleEventPartFlag",
                          "value": 3
                        },
                        {
                          "name": "Add Battle Event",
                          "teamName": "Enemy Team",
                          "eventID": 20021,
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
                          "eventID": 20021,
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
                            }
                          }
                        }
                      ],
                      "failed": [
                        {
                          "name": "Define Custom Variable",
                          "variableName": "BattleEventPartFlag",
                          "value": 3
                        },
                        {
                          "name": "Add Battle Event",
                          "teamName": "Enemy Team",
                          "eventID": 20021,
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
                          "eventID": 20021,
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
                            }
                          }
                        }
                      ],
                      "failed": [
                        {
                          "name": "Define Custom Variable",
                          "variableName": "BattleEventPartFlag",
                          "value": 2
                        },
                        {
                          "name": "Add Battle Event",
                          "teamName": "Enemy Team",
                          "eventID": 20021,
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
    },
    "Trigger: Ability End"
  ],
  "targetObjectData": {
    "primaryTarget": "{{Ability Target List}}"
  },
  "references": []
}