const configAbility = {
  "fileName": "4032021_Monster_W4_FireProwler_IF_Ability06_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Define Custom Variable",
      "variableName": "Skill01_AssistCount",
      "value": 0
    },
    {
      "name": "Define Custom Variable",
      "variableName": "Skill02_AssistCount",
      "value": 0
    },
    {
      "name": "Define Custom Variable",
      "variableName": "Skill01_CurCount",
      "value": 0
    },
    {
      "name": "Define Custom Variable",
      "variableName": "Skill02_CurCount",
      "value": 0
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Hostile Entities(AOE)}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-231482417\">Enemy_W4_FireProwler_Ability06_Target</a>"
    },
    {
      "name": "Find New Target",
      "from": {
        "name": "Target Name",
        "target": "{{Enemies by Aggro OR Random}}"
      },
      "searchRandom": true,
      "maxTargets": 1,
      "ifTargetFound": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Parameter Target}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-231482417\">Enemy_W4_FireProwler_Ability06_Target</a>"
        }
      ]
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Compare: Variable",
        "value1": "Assist_Flag",
        "compareType": "=",
        "value2": 1
      },
      "passed": [
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Target",
            "target": {
              "name": "Target Name",
              "target": "{{Far Left Enemy Entity}}"
            },
            "target2": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "invertCondition": true
          },
          "passed": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Target",
                "target": {
                  "name": "Target Name",
                  "target": "{{Far Left Enemy Entity}}"
                },
                "target2": {
                  "name": "Target Name",
                  "target": "{{Target Right of Caster}}"
                }
              },
              "passed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Enemy ID",
                    "ID": {
                      "operator": "Variables[0] (SummonID_1) || RETURN",
                      "displayLines": "SummonID_1",
                      "constants": [],
                      "variables": [
                        "SummonID_1"
                      ]
                    },
                    "target": {
                      "name": "Target Name",
                      "target": "{{Target Right of Caster}}"
                    },
                    "characterName": null
                  }
                }
              ],
              "failed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Enemy ID",
                    "ID": {
                      "operator": "Variables[0] (SummonID_1) || RETURN",
                      "displayLines": "SummonID_1",
                      "constants": [],
                      "variables": [
                        "SummonID_1"
                      ]
                    },
                    "target": {
                      "name": "Target Name",
                      "target": "{{Target Right of Caster}}"
                    },
                    "characterName": null
                  }
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Enemy ID",
                    "ID": {
                      "operator": "Variables[0] (SummonID_1) || RETURN",
                      "displayLines": "SummonID_1",
                      "constants": [],
                      "variables": [
                        "SummonID_1"
                      ]
                    },
                    "target": {
                      "name": "Target Name",
                      "target": "{{Far Left Enemy Entity}}"
                    },
                    "characterName": null
                  }
                }
              ]
            }
          ]
        },
        "Deleted bullshit",
        {
          "name": "IF",
          "conditions": {
            "name": "AND",
            "conditionList": [
              {
                "name": "Compare: Variable",
                "value1": "HP_Bars_Remaining",
                "compareType": "=",
                "value2": 1
              },
              {
                "name": "Enemy ID",
                "ID": 4034018,
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "characterName": "???",
                "isBaseCompare": true,
                "invertCondition": true
              }
            ]
          },
          "passed": [
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Caster's Minions}}"
              },
              "maxTargets": 2,
              "conditions": {
                "name": "Enemy ID",
                "ID": {
                  "operator": "Variables[0] (SummonID_1) || RETURN",
                  "displayLines": "SummonID_1",
                  "constants": [],
                  "variables": [
                    "SummonID_1"
                  ]
                },
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "characterName": null
              },
              "ifTargetFound": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target List}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-122367820\">Enemy_W4_FireProwler_IF_DuringAbility</a>"
                },
                {
                  "name": "Remove from Team Target Grouping",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target List}}"
                  },
                  "stayInTeam": false
                },
                {
                  "name": "Trigger Joint-Attack Ability",
                  "abilityList": [
                    {
                      "name": "Trigger Ability",
                      "from": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "inherentTarget": {
                        "name": "Target Sequence",
                        "Sequence": [
                          {
                            "name": "Target Name",
                            "target": "{{Hostile Entities(AOE)}}"
                          },
                          {
                            "name": "Target Filter",
                            "conditions": {
                              "name": "Has Modifier",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Parameter Target}}"
                              },
                              "modifier": "<a class=\"gModGreen\" id=\"-231482417\">Enemy_W4_FireProwler_Ability06_Target</a>"
                            }
                          }
                        ]
                      },
                      "ability": "Monster_W4_FireProwler_IF_Ability01_Assist"
                    },
                    {
                      "name": "Trigger Ability",
                      "from": {
                        "name": "Target Sequence",
                        "Sequence": [
                          {
                            "name": "Target Name",
                            "target": "{{Parameter Target List}}"
                          },
                          {
                            "name": "Target Index",
                            "indexType": "IndexStrict"
                          }
                        ]
                      },
                      "inherentTarget": {
                        "name": "Target Sequence",
                        "Sequence": [
                          {
                            "name": "Target Name",
                            "target": "{{Hostile Entities(AOE)}}"
                          },
                          {
                            "name": "Target Filter",
                            "conditions": {
                              "name": "Has Modifier",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Parameter Target}}"
                              },
                              "modifier": "<a class=\"gModGreen\" id=\"-231482417\">Enemy_W4_FireProwler_Ability06_Target</a>"
                            }
                          }
                        ]
                      },
                      "delay": 1.4,
                      "ability": "Monster_W4_FireProwler_01_IF_Ability01_Assist"
                    },
                    {
                      "name": "Trigger Ability",
                      "from": {
                        "name": "Target Sequence",
                        "Sequence": [
                          {
                            "name": "Target Name",
                            "target": "{{Parameter Target List}}"
                          },
                          {
                            "name": "Target Index",
                            "indexType": "IndexStrict",
                            "indexValue": 1
                          }
                        ]
                      },
                      "inherentTarget": {
                        "name": "Target Sequence",
                        "Sequence": [
                          {
                            "name": "Target Name",
                            "target": "{{Hostile Entities(AOE)}}"
                          },
                          {
                            "name": "Target Filter",
                            "conditions": {
                              "name": "Has Modifier",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Parameter Target}}"
                              },
                              "modifier": "<a class=\"gModGreen\" id=\"-231482417\">Enemy_W4_FireProwler_Ability06_Target</a>"
                            }
                          }
                        ]
                      },
                      "delay": 1.8,
                      "ability": "Monster_W4_FireProwler_01_IF_Ability01_Assist"
                    }
                  ]
                },
                {
                  "name": "Mark Entity For Immediate Death",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target List}}"
                  }
                },
                {
                  "name": "Force Entity Death",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target List}}"
                  }
                }
              ],
              "noTargetFound": [
                {
                  "name": "Trigger Joint-Attack Ability",
                  "abilityList": [
                    {
                      "name": "Trigger Ability",
                      "from": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "inherentTarget": {
                        "name": "Target Sequence",
                        "Sequence": [
                          {
                            "name": "Target Name",
                            "target": "{{Hostile Entities(AOE)}}"
                          },
                          {
                            "name": "Target Filter",
                            "conditions": {
                              "name": "Has Modifier",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Parameter Target}}"
                              },
                              "modifier": "<a class=\"gModGreen\" id=\"-231482417\">Enemy_W4_FireProwler_Ability06_Target</a>"
                            }
                          }
                        ]
                      },
                      "ability": "Monster_W4_FireProwler_IF_Ability01_Assist"
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
                "value1": "HP_Bars_Remaining",
                "compareType": "=",
                "value2": 2
              },
              {
                "name": "Enemy ID",
                "ID": 4034018,
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "characterName": "???",
                "isBaseCompare": true
              }
            ]
          },
          "passed": [
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Caster's Minions}}"
              },
              "maxTargets": 4,
              "conditions": {
                "name": "OR",
                "conditionList": [
                  {
                    "name": "Enemy ID",
                    "ID": {
                      "operator": "Variables[0] (SummonID_1) || RETURN",
                      "displayLines": "SummonID_1",
                      "constants": [],
                      "variables": [
                        "SummonID_1"
                      ]
                    },
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "characterName": null
                  },
                  {
                    "name": "Enemy ID",
                    "ID": {
                      "operator": "Variables[0] (SummonID_3) || RETURN",
                      "displayLines": "SummonID_3",
                      "constants": [],
                      "variables": [
                        "SummonID_3"
                      ]
                    },
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "characterName": null
                  }
                ]
              },
              "ifTargetFound": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target List}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-122367820\">Enemy_W4_FireProwler_IF_DuringAbility</a>"
                },
                {
                  "name": "Remove from Team Target Grouping",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target List}}"
                  },
                  "stayInTeam": false
                },
                {
                  "name": "Trigger Joint-Attack Ability",
                  "abilityList": [
                    {
                      "name": "Trigger Ability",
                      "from": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "inherentTarget": {
                        "name": "Target Sequence",
                        "Sequence": [
                          {
                            "name": "Target Name",
                            "target": "{{Hostile Entities(AOE)}}"
                          },
                          {
                            "name": "Target Filter",
                            "conditions": {
                              "name": "Has Modifier",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Parameter Target}}"
                              },
                              "modifier": "<a class=\"gModGreen\" id=\"-231482417\">Enemy_W4_FireProwler_Ability06_Target</a>"
                            }
                          }
                        ]
                      },
                      "ability": "Monster_W4_FireProwler_IF_Ability01_Assist"
                    },
                    {
                      "name": "Trigger Ability",
                      "from": {
                        "name": "Target Sequence",
                        "Sequence": [
                          {
                            "name": "Target Name",
                            "target": "{{Parameter Target List}}"
                          },
                          {
                            "name": "Target Index",
                            "indexType": "IndexStrict"
                          }
                        ]
                      },
                      "inherentTarget": {
                        "name": "Target Sequence",
                        "Sequence": [
                          {
                            "name": "Target Name",
                            "target": "{{Hostile Entities(AOE)}}"
                          },
                          {
                            "name": "Target Filter",
                            "conditions": {
                              "name": "Has Modifier",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Parameter Target}}"
                              },
                              "modifier": "<a class=\"gModGreen\" id=\"-231482417\">Enemy_W4_FireProwler_Ability06_Target</a>"
                            }
                          }
                        ]
                      },
                      "delay": 1.4,
                      "ability": "Monster_W4_FireProwler_01_IF_Ability01_Assist"
                    },
                    {
                      "name": "Trigger Ability",
                      "from": {
                        "name": "Target Sequence",
                        "Sequence": [
                          {
                            "name": "Target Name",
                            "target": "{{Parameter Target List}}"
                          },
                          {
                            "name": "Target Index",
                            "indexType": "IndexStrict",
                            "indexValue": 1
                          }
                        ]
                      },
                      "inherentTarget": {
                        "name": "Target Sequence",
                        "Sequence": [
                          {
                            "name": "Target Name",
                            "target": "{{Hostile Entities(AOE)}}"
                          },
                          {
                            "name": "Target Filter",
                            "conditions": {
                              "name": "Has Modifier",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Parameter Target}}"
                              },
                              "modifier": "<a class=\"gModGreen\" id=\"-231482417\">Enemy_W4_FireProwler_Ability06_Target</a>"
                            }
                          }
                        ]
                      },
                      "delay": 1.6,
                      "ability": "Monster_W4_FireProwler_01_IF_Ability01_Assist"
                    },
                    {
                      "name": "Trigger Ability",
                      "from": {
                        "name": "Target Sequence",
                        "Sequence": [
                          {
                            "name": "Target Name",
                            "target": "{{Parameter Target List}}"
                          },
                          {
                            "name": "Target Index",
                            "indexType": "IndexStrict",
                            "indexValue": 2
                          }
                        ]
                      },
                      "inherentTarget": {
                        "name": "Target Sequence",
                        "Sequence": [
                          {
                            "name": "Target Name",
                            "target": "{{Hostile Entities(AOE)}}"
                          },
                          {
                            "name": "Target Filter",
                            "conditions": {
                              "name": "Has Modifier",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Parameter Target}}"
                              },
                              "modifier": "<a class=\"gModGreen\" id=\"-231482417\">Enemy_W4_FireProwler_Ability06_Target</a>"
                            }
                          }
                        ]
                      },
                      "delay": 1.8,
                      "ability": "Monster_W4_FireProwler_01_IF_Ability01_Assist"
                    },
                    {
                      "name": "Trigger Ability",
                      "from": {
                        "name": "Target Sequence",
                        "Sequence": [
                          {
                            "name": "Target Name",
                            "target": "{{Parameter Target List}}"
                          },
                          {
                            "name": "Target Index",
                            "indexType": "IndexStrict",
                            "indexValue": 3
                          }
                        ]
                      },
                      "inherentTarget": {
                        "name": "Target Sequence",
                        "Sequence": [
                          {
                            "name": "Target Name",
                            "target": "{{Hostile Entities(AOE)}}"
                          },
                          {
                            "name": "Target Filter",
                            "conditions": {
                              "name": "Has Modifier",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Parameter Target}}"
                              },
                              "modifier": "<a class=\"gModGreen\" id=\"-231482417\">Enemy_W4_FireProwler_Ability06_Target</a>"
                            }
                          }
                        ]
                      },
                      "delay": 2.5,
                      "ability": "Monster_W4_FireProwler_01_IF_Ability01_Assist"
                    }
                  ]
                },
                {
                  "name": "Mark Entity For Immediate Death",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target List}}"
                  }
                },
                {
                  "name": "Force Entity Death",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target List}}"
                  }
                }
              ],
              "noTargetFound": [
                {
                  "name": "Trigger Joint-Attack Ability",
                  "abilityList": [
                    {
                      "name": "Trigger Ability",
                      "from": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "inherentTarget": {
                        "name": "Target Sequence",
                        "Sequence": [
                          {
                            "name": "Target Name",
                            "target": "{{Hostile Entities(AOE)}}"
                          },
                          {
                            "name": "Target Filter",
                            "conditions": {
                              "name": "Has Modifier",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Parameter Target}}"
                              },
                              "modifier": "<a class=\"gModGreen\" id=\"-231482417\">Enemy_W4_FireProwler_Ability06_Target</a>"
                            }
                          }
                        ]
                      },
                      "ability": "Monster_W4_FireProwler_IF_Ability01_Assist"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "Define Custom Variable",
          "variableName": "Assist_Flag",
          "value": 2
        }
      ],
      "failed": [
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Target",
            "target": {
              "name": "Target Name",
              "target": "{{Far Right Enemy Entity}}"
            },
            "target2": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "invertCondition": true
          },
          "passed": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Target",
                "target": {
                  "name": "Target Name",
                  "target": "{{Far Right Enemy Entity}}"
                },
                "target2": {
                  "name": "Target Name",
                  "target": "{{Target Left of Caster}}"
                }
              },
              "passed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Enemy ID",
                    "ID": {
                      "operator": "Variables[0] (SummonID_2) || RETURN",
                      "displayLines": "SummonID_2",
                      "constants": [],
                      "variables": [
                        "SummonID_2"
                      ]
                    },
                    "target": {
                      "name": "Target Name",
                      "target": "{{Target Left of Caster}}"
                    },
                    "characterName": null
                  }
                }
              ],
              "failed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Enemy ID",
                    "ID": {
                      "operator": "Variables[0] (SummonID_2) || RETURN",
                      "displayLines": "SummonID_2",
                      "constants": [],
                      "variables": [
                        "SummonID_2"
                      ]
                    },
                    "target": {
                      "name": "Target Name",
                      "target": "{{Target Left of Caster}}"
                    },
                    "characterName": null
                  }
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Enemy ID",
                    "ID": {
                      "operator": "Variables[0] (SummonID_2) || RETURN",
                      "displayLines": "SummonID_2",
                      "constants": [],
                      "variables": [
                        "SummonID_2"
                      ]
                    },
                    "target": {
                      "name": "Target Name",
                      "target": "{{Far Right Enemy Entity}}"
                    },
                    "characterName": null
                  }
                }
              ]
            }
          ]
        },
        "Deleted bullshit",
        {
          "name": "IF",
          "conditions": {
            "name": "AND",
            "conditionList": [
              {
                "name": "Compare: Variable",
                "value1": "HP_Bars_Remaining",
                "compareType": "=",
                "value2": 1
              },
              {
                "name": "Enemy ID",
                "ID": 4034018,
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "characterName": "???",
                "isBaseCompare": true,
                "invertCondition": true
              }
            ]
          },
          "passed": [
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Caster's Minions}}"
              },
              "maxTargets": 2,
              "conditions": {
                "name": "Enemy ID",
                "ID": {
                  "operator": "Variables[0] (SummonID_2) || RETURN",
                  "displayLines": "SummonID_2",
                  "constants": [],
                  "variables": [
                    "SummonID_2"
                  ]
                },
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "characterName": null
              },
              "ifTargetFound": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target List}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-122367820\">Enemy_W4_FireProwler_IF_DuringAbility</a>"
                },
                {
                  "name": "Remove from Team Target Grouping",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target List}}"
                  },
                  "stayInTeam": false
                },
                {
                  "name": "Trigger Joint-Attack Ability",
                  "abilityList": [
                    {
                      "name": "Trigger Ability",
                      "from": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "ability": "Monster_W4_FireProwler_IF_Ability02_Assist"
                    },
                    {
                      "name": "Trigger Ability",
                      "from": {
                        "name": "Target Sequence",
                        "Sequence": [
                          {
                            "name": "Target Name",
                            "target": "{{Parameter Target List}}"
                          },
                          {
                            "name": "Target Index",
                            "indexType": "IndexStrict"
                          }
                        ]
                      },
                      "delay": 1.5,
                      "ability": "Monster_W4_FireProwler_01_IF_Ability02_Assist"
                    },
                    {
                      "name": "Trigger Ability",
                      "from": {
                        "name": "Target Sequence",
                        "Sequence": [
                          {
                            "name": "Target Name",
                            "target": "{{Parameter Target List}}"
                          },
                          {
                            "name": "Target Index",
                            "indexType": "IndexStrict",
                            "indexValue": 1
                          }
                        ]
                      },
                      "delay": 2,
                      "ability": "Monster_W4_FireProwler_01_IF_Ability02_Assist"
                    }
                  ]
                },
                {
                  "name": "Mark Entity For Immediate Death",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target List}}"
                  }
                },
                {
                  "name": "Force Entity Death",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target List}}"
                  }
                }
              ],
              "noTargetFound": [
                {
                  "name": "Trigger Joint-Attack Ability",
                  "abilityList": [
                    {
                      "name": "Trigger Ability",
                      "from": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "ability": "Monster_W4_FireProwler_IF_Ability02_Assist"
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
                "value1": "HP_Bars_Remaining",
                "compareType": "=",
                "value2": 2
              },
              {
                "name": "Enemy ID",
                "ID": 4034018,
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "characterName": "???",
                "isBaseCompare": true
              }
            ]
          },
          "passed": [
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Caster's Minions}}"
              },
              "maxTargets": 4,
              "conditions": {
                "name": "OR",
                "conditionList": [
                  {
                    "name": "Enemy ID",
                    "ID": {
                      "operator": "Variables[0] (SummonID_2) || RETURN",
                      "displayLines": "SummonID_2",
                      "constants": [],
                      "variables": [
                        "SummonID_2"
                      ]
                    },
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "characterName": null
                  },
                  {
                    "name": "Enemy ID",
                    "ID": {
                      "operator": "Variables[0] (SummonID_3) || RETURN",
                      "displayLines": "SummonID_3",
                      "constants": [],
                      "variables": [
                        "SummonID_3"
                      ]
                    },
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "characterName": null
                  }
                ]
              },
              "ifTargetFound": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target List}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-122367820\">Enemy_W4_FireProwler_IF_DuringAbility</a>"
                },
                {
                  "name": "Remove from Team Target Grouping",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target List}}"
                  },
                  "stayInTeam": false
                },
                {
                  "name": "Trigger Joint-Attack Ability",
                  "abilityList": [
                    {
                      "name": "Trigger Ability",
                      "from": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "ability": "Monster_W4_FireProwler_IF_Ability02_Assist"
                    },
                    {
                      "name": "Trigger Ability",
                      "from": {
                        "name": "Target Sequence",
                        "Sequence": [
                          {
                            "name": "Target Name",
                            "target": "{{Parameter Target List}}"
                          },
                          {
                            "name": "Target Index",
                            "indexType": "IndexStrict"
                          }
                        ]
                      },
                      "delay": 1.5,
                      "ability": "Monster_W4_FireProwler_01_IF_Ability02_Assist"
                    },
                    {
                      "name": "Trigger Ability",
                      "from": {
                        "name": "Target Sequence",
                        "Sequence": [
                          {
                            "name": "Target Name",
                            "target": "{{Parameter Target List}}"
                          },
                          {
                            "name": "Target Index",
                            "indexType": "IndexStrict",
                            "indexValue": 1
                          }
                        ]
                      },
                      "delay": 1.9,
                      "ability": "Monster_W4_FireProwler_01_IF_Ability02_Assist"
                    },
                    {
                      "name": "Trigger Ability",
                      "from": {
                        "name": "Target Sequence",
                        "Sequence": [
                          {
                            "name": "Target Name",
                            "target": "{{Parameter Target List}}"
                          },
                          {
                            "name": "Target Index",
                            "indexType": "IndexStrict",
                            "indexValue": 2
                          }
                        ]
                      },
                      "delay": 2.1,
                      "ability": "Monster_W4_FireProwler_01_IF_Ability02_Assist"
                    },
                    {
                      "name": "Trigger Ability",
                      "from": {
                        "name": "Target Sequence",
                        "Sequence": [
                          {
                            "name": "Target Name",
                            "target": "{{Parameter Target List}}"
                          },
                          {
                            "name": "Target Index",
                            "indexType": "IndexStrict",
                            "indexValue": 3
                          }
                        ]
                      },
                      "delay": 2.8,
                      "ability": "Monster_W4_FireProwler_01_IF_Ability02_Assist"
                    }
                  ]
                },
                {
                  "name": "Mark Entity For Immediate Death",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target List}}"
                  }
                },
                {
                  "name": "Force Entity Death",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target List}}"
                  }
                }
              ],
              "noTargetFound": [
                {
                  "name": "Trigger Joint-Attack Ability",
                  "abilityList": [
                    {
                      "name": "Trigger Ability",
                      "from": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "ability": "Monster_W4_FireProwler_IF_Ability02_Assist"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "Define Custom Variable",
          "variableName": "Assist_Flag",
          "value": 1
        }
      ]
    },
    "Trigger: Ability End"
  ],
  "targetObjectData": {
    "primaryTarget": "{{Hostile Entities(AOE)}}"
  },
  "references": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-231482417\">Enemy_W4_FireProwler_Ability06_Target</a>",
      "stackData": [],
      "latentQueue": [
        "Skill01_AssistCount",
        "Skill02_AssistCount"
      ]
    }
  ]
}