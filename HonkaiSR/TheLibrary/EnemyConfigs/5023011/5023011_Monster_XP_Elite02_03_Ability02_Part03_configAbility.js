const configAbility = {
  "fileName": "5023011_Monster_XP_Elite02_03_Ability02_Part03",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "IF",
      "conditions": {
        "name": "Compare: Variable",
        "value1": "SameMonsterNum",
        "compareType": ">",
        "value2": 1
      }
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Compare: Variable",
        "value1": "SameMonsterNum",
        "compareType": ">",
        "value2": 1
      }
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Compare: Variable",
        "value1": "SameMonsterNum",
        "compareType": ">",
        "value2": 1
      },
      "passed": [
        {
          "name": "Use Custom Character Function",
          "functionName": "<a class=\"gTempYellow\" id=\"-125464834\">Monster_XP_Elite02_03_Ability02_TaskTemplate_DamageWithRandomEffect_FirstHit</a>"
        }
      ],
      "failed": [
        {
          "name": "Use Custom Character Function",
          "functionName": "<a class=\"gTempYellow\" id=\"-1513504796\">Monster_XP_Elite02_03_Ability02_TaskTemplate_DamageWithRandomEffect_FirstHit_Solo</a>"
        }
      ]
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Compare: Variable",
        "value1": "SameMonsterNum",
        "compareType": ">",
        "value2": 1
      },
      "passed": [
        {
          "name": "Use Custom Character Function",
          "functionName": "<a class=\"gTempYellow\" id=\"1082618384\">Monster_XP_Elite02_03_Ability02_TaskTemplate_DamageWithRandomEffect</a>"
        },
        {
          "name": "Use Custom Character Function",
          "functionName": "<a class=\"gTempYellow\" id=\"1082618384\">Monster_XP_Elite02_03_Ability02_TaskTemplate_DamageWithRandomEffect</a>"
        }
      ],
      "failed": [
        {
          "name": "Use Custom Character Function",
          "functionName": "<a class=\"gTempYellow\" id=\"364314738\">Monster_XP_Elite02_03_Ability02_TaskTemplate_DamageWithRandomEffect_Solo</a>"
        },
        {
          "name": "Use Custom Character Function",
          "functionName": "<a class=\"gTempYellow\" id=\"364314738\">Monster_XP_Elite02_03_Ability02_TaskTemplate_DamageWithRandomEffect_Solo</a>"
        }
      ]
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Hostile Entities(AOE)}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"1803637769\">Modifier_Monster_XP_Elite02_03_MainTarget</a>"
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Compare: Variable",
        "value1": "SameMonsterNum",
        "compareType": ">",
        "value2": 1
      },
      "passed": [
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "searchRandom": true,
          "maxTargets": 1,
          "ifTargetFound": [
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "canPhase": true,
              "AttackScaling": {
                "DamageType": "Wind",
                "Damage": {
                  "operator": "Variables[0] ({[Skill02[0]]}) || RETURN",
                  "displayLines": "{[Skill02[0]]}",
                  "constants": [],
                  "variables": [
                    "{[Skill02[0]]}"
                  ]
                },
                "Toughness": null,
                "Tags": null,
                "attackType": "Basic ATK",
                "EnergyGainPercent": "100%"
              }
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Random Chance",
                "chance": {
                  "operator": "Variables[0] ({[Skill02[1]]}) || RETURN",
                  "displayLines": "{[Skill02[1]]}",
                  "constants": [],
                  "variables": [
                    "{[Skill02[1]]}"
                  ]
                }
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Ability Target(ST)}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1510613058\">Modifier_Monster_XP_Elite02_03_ElationControl</a>[<span class=\"descriptionNumberColor\">Paramount Bliss</span>]",
                  "valuePerStack": {
                    "Ability02_P4_BonusChance": {
                      "operator": "Variables[0] ({[Skill02[3]]}) || RETURN",
                      "displayLines": "{[Skill02[3]]}",
                      "constants": [],
                      "variables": [
                        "{[Skill02[3]]}"
                      ]
                    }
                  }
                }
              ]
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1803637769\">Modifier_Monster_XP_Elite02_03_MainTarget</a>"
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "Skill02_AssistCount",
                "compareType": ">=",
                "value2": 1
              },
              "passed": [
                {
                  "name": "Use Custom Character Function",
                  "functionName": "<a class=\"gTempYellow\" id=\"1319018590\">Monster_XP_Elite02_03_Ability02_TaskTemplate_Assist_01_Damage</a>"
                }
              ]
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "Skill02_AssistCount",
                "compareType": ">=",
                "value2": 2
              },
              "passed": [
                {
                  "name": "Use Custom Character Function",
                  "functionName": "<a class=\"gTempYellow\" id=\"1319018590\">Monster_XP_Elite02_03_Ability02_TaskTemplate_Assist_01_Damage</a>"
                }
              ]
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "Skill02_AssistCount",
                "compareType": ">=",
                "value2": 3
              },
              "passed": [
                {
                  "name": "Use Custom Character Function",
                  "functionName": "<a class=\"gTempYellow\" id=\"1319018590\">Monster_XP_Elite02_03_Ability02_TaskTemplate_Assist_01_Damage</a>"
                }
              ]
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "Skill02_AssistCount",
                "compareType": ">=",
                "value2": 4
              },
              "passed": [
                {
                  "name": "Use Custom Character Function",
                  "functionName": "<a class=\"gTempYellow\" id=\"1319018590\">Monster_XP_Elite02_03_Ability02_TaskTemplate_Assist_01_Damage</a>"
                }
              ]
            },
            "Trigger: Attack End"
          ],
          "noTargetFound": [
            "Trigger: Attack End"
          ]
        }
      ],
      "failed": [
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "searchRandom": true,
          "maxTargets": 1,
          "ifTargetFound": [
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "canPhase": true,
              "AttackScaling": {
                "DamageType": "Wind",
                "Damage": {
                  "operator": "Variables[0] ({[Skill02[0]]}) || RETURN",
                  "displayLines": "{[Skill02[0]]}",
                  "constants": [],
                  "variables": [
                    "{[Skill02[0]]}"
                  ]
                },
                "Toughness": null,
                "Tags": null,
                "attackType": "Basic ATK",
                "EnergyGainPercent": "100%"
              }
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Random Chance",
                "chance": {
                  "operator": "Variables[0] ({[Skill02[1]]}) || RETURN",
                  "displayLines": "{[Skill02[1]]}",
                  "constants": [],
                  "variables": [
                    "{[Skill02[1]]}"
                  ]
                }
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Ability Target(ST)}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1510613058\">Modifier_Monster_XP_Elite02_03_ElationControl</a>[<span class=\"descriptionNumberColor\">Paramount Bliss</span>]",
                  "valuePerStack": {
                    "Ability02_P4_BonusChance": {
                      "operator": "Variables[0] ({[Skill02[3]]}) || RETURN",
                      "displayLines": "{[Skill02[3]]}",
                      "constants": [],
                      "variables": [
                        "{[Skill02[3]]}"
                      ]
                    }
                  }
                }
              ]
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1803637769\">Modifier_Monster_XP_Elite02_03_MainTarget</a>"
            },
            "Trigger: Attack End"
          ],
          "noTargetFound": [
            "Trigger: Attack End"
          ]
        }
      ]
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Hostile Entities(AOE)}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"1803637769\">Modifier_Monster_XP_Elite02_03_MainTarget</a>"
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Compare: Variable",
        "value1": "SameMonsterNum",
        "compareType": ">",
        "value2": 1
      },
      "passed": [
        "Trigger: Ability End"
      ],
      "failed": [
        "Trigger: Ability End"
      ]
    }
  ],
  "functions": [
    {
      "name": "CharacterFunctions",
      "functionName": "<a class=\"gTempYellow\" id=\"fun__1082618384\">Monster_XP_Elite02_03_Ability02_TaskTemplate_DamageWithRandomEffect</a>",
      "parse": [
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1803637769\">Modifier_Monster_XP_Elite02_03_MainTarget</a>"
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "searchRandom": true,
          "maxTargets": 1,
          "conditions": {
            "name": "AND",
            "conditionList": [
              {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"1510613058\">Modifier_Monster_XP_Elite02_03_ElationControl</a>[<span class=\"descriptionNumberColor\">Paramount Bliss</span>]",
                "invertCondition": true
              },
              {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"1803637769\">Modifier_Monster_XP_Elite02_03_MainTarget</a>",
                "invertCondition": true
              }
            ]
          },
          "ifTargetFound": [
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "canPhase": true,
              "AttackScaling": {
                "DamageType": "Wind",
                "Damage": {
                  "operator": "Variables[0] ({[Skill02[0]]}) || RETURN",
                  "displayLines": "{[Skill02[0]]}",
                  "constants": [],
                  "variables": [
                    "{[Skill02[0]]}"
                  ]
                },
                "Toughness": null,
                "Tags": null,
                "attackType": "Basic ATK",
                "EnergyGainPercent": "100%"
              }
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Random Chance",
                "chance": {
                  "operator": "Variables[0] ({[Skill02[1]]}) || RETURN",
                  "displayLines": "{[Skill02[1]]}",
                  "constants": [],
                  "variables": [
                    "{[Skill02[1]]}"
                  ]
                }
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1510613058\">Modifier_Monster_XP_Elite02_03_ElationControl</a>[<span class=\"descriptionNumberColor\">Paramount Bliss</span>]",
                  "valuePerStack": {
                    "Ability02_P4_BonusChance": {
                      "operator": "Variables[0] ({[Skill02[3]]}) || RETURN",
                      "displayLines": "{[Skill02[3]]}",
                      "constants": [],
                      "variables": [
                        "{[Skill02[3]]}"
                      ]
                    }
                  }
                }
              ]
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1803637769\">Modifier_Monster_XP_Elite02_03_MainTarget</a>"
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "Skill02_AssistCount",
                "compareType": ">=",
                "value2": 1
              },
              "passed": [
                {
                  "name": "Use Custom Character Function",
                  "functionName": "<a class=\"gTempYellow\" id=\"1319018590\">Monster_XP_Elite02_03_Ability02_TaskTemplate_Assist_01_Damage</a>"
                }
              ]
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "Skill02_AssistCount",
                "compareType": ">=",
                "value2": 2
              },
              "passed": [
                {
                  "name": "Use Custom Character Function",
                  "functionName": "<a class=\"gTempYellow\" id=\"1319018590\">Monster_XP_Elite02_03_Ability02_TaskTemplate_Assist_01_Damage</a>"
                }
              ]
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "Skill02_AssistCount",
                "compareType": ">=",
                "value2": 3
              },
              "passed": [
                {
                  "name": "Use Custom Character Function",
                  "functionName": "<a class=\"gTempYellow\" id=\"1319018590\">Monster_XP_Elite02_03_Ability02_TaskTemplate_Assist_01_Damage</a>"
                }
              ]
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "Skill02_AssistCount",
                "compareType": ">=",
                "value2": 4
              },
              "passed": [
                {
                  "name": "Use Custom Character Function",
                  "functionName": "<a class=\"gTempYellow\" id=\"1319018590\">Monster_XP_Elite02_03_Ability02_TaskTemplate_Assist_01_Damage</a>"
                }
              ]
            }
          ],
          "noTargetFound": [
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Hostile Entities(AOE)}}"
              },
              "searchRandom": true,
              "maxTargets": 1,
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"1510613058\">Modifier_Monster_XP_Elite02_03_ElationControl</a>[<span class=\"descriptionNumberColor\">Paramount Bliss</span>]",
                    "invertCondition": true
                  },
                  {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"1803637769\">Modifier_Monster_XP_Elite02_03_MainTarget</a>",
                    "invertCondition": true
                  }
                ]
              },
              "ifTargetFound": [
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "canPhase": true,
                  "AttackScaling": {
                    "DamageType": "Wind",
                    "Damage": {
                      "operator": "Variables[0] ({[Skill02[0]]}) || RETURN",
                      "displayLines": "{[Skill02[0]]}",
                      "constants": [],
                      "variables": [
                        "{[Skill02[0]]}"
                      ]
                    },
                    "Toughness": null,
                    "Tags": null,
                    "attackType": "Basic ATK",
                    "EnergyGainPercent": "100%"
                  }
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Random Chance",
                    "chance": {
                      "operator": "Variables[0] ({[Skill02[1]]}) || RETURN",
                      "displayLines": "{[Skill02[1]]}",
                      "constants": [],
                      "variables": [
                        "{[Skill02[1]]}"
                      ]
                    }
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Ability Target(ST)}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"1510613058\">Modifier_Monster_XP_Elite02_03_ElationControl</a>[<span class=\"descriptionNumberColor\">Paramount Bliss</span>]",
                      "valuePerStack": {
                        "Ability02_P4_BonusChance": {
                          "operator": "Variables[0] ({[Skill02[3]]}) || RETURN",
                          "displayLines": "{[Skill02[3]]}",
                          "constants": [],
                          "variables": [
                            "{[Skill02[3]]}"
                          ]
                        }
                      }
                    }
                  ]
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1803637769\">Modifier_Monster_XP_Elite02_03_MainTarget</a>"
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "Skill02_AssistCount",
                    "compareType": ">=",
                    "value2": 1
                  },
                  "passed": [
                    {
                      "name": "Use Custom Character Function",
                      "functionName": "<a class=\"gTempYellow\" id=\"1319018590\">Monster_XP_Elite02_03_Ability02_TaskTemplate_Assist_01_Damage</a>"
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "Skill02_AssistCount",
                    "compareType": ">=",
                    "value2": 2
                  },
                  "passed": [
                    {
                      "name": "Use Custom Character Function",
                      "functionName": "<a class=\"gTempYellow\" id=\"1319018590\">Monster_XP_Elite02_03_Ability02_TaskTemplate_Assist_01_Damage</a>"
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "Skill02_AssistCount",
                    "compareType": ">=",
                    "value2": 3
                  },
                  "passed": [
                    {
                      "name": "Use Custom Character Function",
                      "functionName": "<a class=\"gTempYellow\" id=\"1319018590\">Monster_XP_Elite02_03_Ability02_TaskTemplate_Assist_01_Damage</a>"
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "Skill02_AssistCount",
                    "compareType": ">=",
                    "value2": 4
                  },
                  "passed": [
                    {
                      "name": "Use Custom Character Function",
                      "functionName": "<a class=\"gTempYellow\" id=\"1319018590\">Monster_XP_Elite02_03_Ability02_TaskTemplate_Assist_01_Damage</a>"
                    }
                  ]
                }
              ],
              "noTargetFound": [
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Hostile Entities(AOE)}}"
                  },
                  "searchRandom": true,
                  "maxTargets": 1,
                  "ifTargetFound": [
                    {
                      "name": "ATK Scaling DMG",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "canPhase": true,
                      "AttackScaling": {
                        "DamageType": "Wind",
                        "Damage": {
                          "operator": "Variables[0] ({[Skill02[0]]}) || RETURN",
                          "displayLines": "{[Skill02[0]]}",
                          "constants": [],
                          "variables": [
                            "{[Skill02[0]]}"
                          ]
                        },
                        "Toughness": null,
                        "Tags": null,
                        "attackType": "Basic ATK",
                        "EnergyGainPercent": "100%"
                      }
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Random Chance",
                        "chance": {
                          "operator": "Variables[0] ({[Skill02[1]]}) || RETURN",
                          "displayLines": "{[Skill02[1]]}",
                          "constants": [],
                          "variables": [
                            "{[Skill02[1]]}"
                          ]
                        }
                      },
                      "passed": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Ability Target(ST)}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"1510613058\">Modifier_Monster_XP_Elite02_03_ElationControl</a>[<span class=\"descriptionNumberColor\">Paramount Bliss</span>]",
                          "valuePerStack": {
                            "Ability02_P4_BonusChance": {
                              "operator": "Variables[0] ({[Skill02[3]]}) || RETURN",
                              "displayLines": "{[Skill02[3]]}",
                              "constants": [],
                              "variables": [
                                "{[Skill02[3]]}"
                              ]
                            }
                          }
                        }
                      ]
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"1803637769\">Modifier_Monster_XP_Elite02_03_MainTarget</a>"
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "Skill02_AssistCount",
                        "compareType": ">=",
                        "value2": 1
                      },
                      "passed": [
                        {
                          "name": "Use Custom Character Function",
                          "functionName": "<a class=\"gTempYellow\" id=\"1319018590\">Monster_XP_Elite02_03_Ability02_TaskTemplate_Assist_01_Damage</a>"
                        }
                      ]
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "Skill02_AssistCount",
                        "compareType": ">=",
                        "value2": 2
                      },
                      "passed": [
                        {
                          "name": "Use Custom Character Function",
                          "functionName": "<a class=\"gTempYellow\" id=\"1319018590\">Monster_XP_Elite02_03_Ability02_TaskTemplate_Assist_01_Damage</a>"
                        }
                      ]
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "Skill02_AssistCount",
                        "compareType": ">=",
                        "value2": 3
                      },
                      "passed": [
                        {
                          "name": "Use Custom Character Function",
                          "functionName": "<a class=\"gTempYellow\" id=\"1319018590\">Monster_XP_Elite02_03_Ability02_TaskTemplate_Assist_01_Damage</a>"
                        }
                      ]
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "Skill02_AssistCount",
                        "compareType": ">=",
                        "value2": 4
                      },
                      "passed": [
                        {
                          "name": "Use Custom Character Function",
                          "functionName": "<a class=\"gTempYellow\" id=\"1319018590\">Monster_XP_Elite02_03_Ability02_TaskTemplate_Assist_01_Damage</a>"
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
      "name": "CharacterFunctions",
      "functionName": "<a class=\"gTempYellow\" id=\"fun__364314738\">Monster_XP_Elite02_03_Ability02_TaskTemplate_DamageWithRandomEffect_Solo</a>",
      "parse": [
        {
          "name": "Remove Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"1803637769\">Modifier_Monster_XP_Elite02_03_MainTarget</a>"
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "searchRandom": true,
          "maxTargets": 1,
          "conditions": {
            "name": "AND",
            "conditionList": [
              {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"1510613058\">Modifier_Monster_XP_Elite02_03_ElationControl</a>[<span class=\"descriptionNumberColor\">Paramount Bliss</span>]",
                "invertCondition": true
              },
              {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"1803637769\">Modifier_Monster_XP_Elite02_03_MainTarget</a>",
                "invertCondition": true
              }
            ]
          },
          "ifTargetFound": [
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "canPhase": true,
              "AttackScaling": {
                "DamageType": "Wind",
                "Damage": {
                  "operator": "Variables[0] ({[Skill02[0]]}) || RETURN",
                  "displayLines": "{[Skill02[0]]}",
                  "constants": [],
                  "variables": [
                    "{[Skill02[0]]}"
                  ]
                },
                "Toughness": null,
                "Tags": null,
                "attackType": "Basic ATK",
                "EnergyGainPercent": "100%"
              }
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Random Chance",
                "chance": {
                  "operator": "Variables[0] ({[Skill02[1]]}) || RETURN",
                  "displayLines": "{[Skill02[1]]}",
                  "constants": [],
                  "variables": [
                    "{[Skill02[1]]}"
                  ]
                }
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1510613058\">Modifier_Monster_XP_Elite02_03_ElationControl</a>[<span class=\"descriptionNumberColor\">Paramount Bliss</span>]",
                  "valuePerStack": {
                    "Ability02_P4_BonusChance": {
                      "operator": "Variables[0] ({[Skill02[3]]}) || RETURN",
                      "displayLines": "{[Skill02[3]]}",
                      "constants": [],
                      "variables": [
                        "{[Skill02[3]]}"
                      ]
                    }
                  }
                }
              ]
            },
            {
              "name": "Add Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"1803637769\">Modifier_Monster_XP_Elite02_03_MainTarget</a>"
            }
          ],
          "noTargetFound": [
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Hostile Entities(AOE)}}"
              },
              "searchRandom": true,
              "maxTargets": 1,
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"1803637769\">Modifier_Monster_XP_Elite02_03_MainTarget</a>",
                    "invertCondition": true
                  }
                ]
              },
              "ifTargetFound": [
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "canPhase": true,
                  "AttackScaling": {
                    "DamageType": "Wind",
                    "Damage": {
                      "operator": "Variables[0] ({[Skill02[0]]}) || RETURN",
                      "displayLines": "{[Skill02[0]]}",
                      "constants": [],
                      "variables": [
                        "{[Skill02[0]]}"
                      ]
                    },
                    "Toughness": null,
                    "Tags": null,
                    "attackType": "Basic ATK",
                    "EnergyGainPercent": "100%"
                  }
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Random Chance",
                    "chance": {
                      "operator": "Variables[0] ({[Skill02[1]]}) || RETURN",
                      "displayLines": "{[Skill02[1]]}",
                      "constants": [],
                      "variables": [
                        "{[Skill02[1]]}"
                      ]
                    }
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Ability Target(ST)}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"1510613058\">Modifier_Monster_XP_Elite02_03_ElationControl</a>[<span class=\"descriptionNumberColor\">Paramount Bliss</span>]",
                      "valuePerStack": {
                        "Ability02_P4_BonusChance": {
                          "operator": "Variables[0] ({[Skill02[3]]}) || RETURN",
                          "displayLines": "{[Skill02[3]]}",
                          "constants": [],
                          "variables": [
                            "{[Skill02[3]]}"
                          ]
                        }
                      }
                    }
                  ]
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1803637769\">Modifier_Monster_XP_Elite02_03_MainTarget</a>"
                }
              ],
              "noTargetFound": [
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Hostile Entities(AOE)}}"
                  },
                  "searchRandom": true,
                  "maxTargets": 1,
                  "ifTargetFound": [
                    {
                      "name": "ATK Scaling DMG",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "canPhase": true,
                      "AttackScaling": {
                        "DamageType": "Wind",
                        "Damage": {
                          "operator": "Variables[0] ({[Skill02[0]]}) || RETURN",
                          "displayLines": "{[Skill02[0]]}",
                          "constants": [],
                          "variables": [
                            "{[Skill02[0]]}"
                          ]
                        },
                        "Toughness": null,
                        "Tags": null,
                        "attackType": "Basic ATK",
                        "EnergyGainPercent": "100%"
                      }
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Random Chance",
                        "chance": {
                          "operator": "Variables[0] ({[Skill02[1]]}) || RETURN",
                          "displayLines": "{[Skill02[1]]}",
                          "constants": [],
                          "variables": [
                            "{[Skill02[1]]}"
                          ]
                        }
                      },
                      "passed": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Ability Target(ST)}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"1510613058\">Modifier_Monster_XP_Elite02_03_ElationControl</a>[<span class=\"descriptionNumberColor\">Paramount Bliss</span>]",
                          "valuePerStack": {
                            "Ability02_P4_BonusChance": {
                              "operator": "Variables[0] ({[Skill02[3]]}) || RETURN",
                              "displayLines": "{[Skill02[3]]}",
                              "constants": [],
                              "variables": [
                                "{[Skill02[3]]}"
                              ]
                            }
                          }
                        }
                      ]
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"1803637769\">Modifier_Monster_XP_Elite02_03_MainTarget</a>"
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
      "name": "CharacterFunctions",
      "functionName": "<a class=\"gTempYellow\" id=\"fun__-125464834\">Monster_XP_Elite02_03_Ability02_TaskTemplate_DamageWithRandomEffect_FirstHit</a>",
      "parse": [
        {
          "name": "IF",
          "conditions": {
            "name": "Has Flag",
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "flagName": "Taunt"
          },
          "passed": [
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
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "canPhase": true,
                  "AttackScaling": {
                    "DamageType": "Wind",
                    "Damage": {
                      "operator": "Variables[0] ({[Skill02[0]]}) || RETURN",
                      "displayLines": "{[Skill02[0]]}",
                      "constants": [],
                      "variables": [
                        "{[Skill02[0]]}"
                      ]
                    },
                    "Toughness": null,
                    "Tags": null,
                    "attackType": "Basic ATK",
                    "EnergyGainPercent": "100%"
                  }
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Random Chance",
                    "chance": {
                      "operator": "Variables[0] ({[Skill02[1]]}) || RETURN",
                      "displayLines": "{[Skill02[1]]}",
                      "constants": [],
                      "variables": [
                        "{[Skill02[1]]}"
                      ]
                    }
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"1510613058\">Modifier_Monster_XP_Elite02_03_ElationControl</a>[<span class=\"descriptionNumberColor\">Paramount Bliss</span>]",
                      "valuePerStack": {
                        "Ability02_P4_BonusChance": {
                          "operator": "Variables[0] ({[Skill02[3]]}) || RETURN",
                          "displayLines": "{[Skill02[3]]}",
                          "constants": [],
                          "variables": [
                            "{[Skill02[3]]}"
                          ]
                        }
                      }
                    }
                  ]
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1803637769\">Modifier_Monster_XP_Elite02_03_MainTarget</a>"
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "Skill02_AssistCount",
                    "compareType": ">=",
                    "value2": 1
                  },
                  "passed": [
                    {
                      "name": "Use Custom Character Function",
                      "functionName": "<a class=\"gTempYellow\" id=\"1319018590\">Monster_XP_Elite02_03_Ability02_TaskTemplate_Assist_01_Damage</a>"
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "Skill02_AssistCount",
                    "compareType": ">=",
                    "value2": 2
                  },
                  "passed": [
                    {
                      "name": "Use Custom Character Function",
                      "functionName": "<a class=\"gTempYellow\" id=\"1319018590\">Monster_XP_Elite02_03_Ability02_TaskTemplate_Assist_01_Damage</a>"
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "Skill02_AssistCount",
                    "compareType": ">=",
                    "value2": 3
                  },
                  "passed": [
                    {
                      "name": "Use Custom Character Function",
                      "functionName": "<a class=\"gTempYellow\" id=\"1319018590\">Monster_XP_Elite02_03_Ability02_TaskTemplate_Assist_01_Damage</a>"
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "Skill02_AssistCount",
                    "compareType": ">=",
                    "value2": 4
                  },
                  "passed": [
                    {
                      "name": "Use Custom Character Function",
                      "functionName": "<a class=\"gTempYellow\" id=\"1319018590\">Monster_XP_Elite02_03_Ability02_TaskTemplate_Assist_01_Damage</a>"
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
                "name": "Target Name",
                "target": "{{Hostile Entities(AOE)}}"
              },
              "searchRandom": true,
              "maxTargets": 1,
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"1510613058\">Modifier_Monster_XP_Elite02_03_ElationControl</a>[<span class=\"descriptionNumberColor\">Paramount Bliss</span>]",
                    "invertCondition": true
                  }
                ]
              },
              "ifTargetFound": [
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "canPhase": true,
                  "AttackScaling": {
                    "DamageType": "Wind",
                    "Damage": {
                      "operator": "Variables[0] ({[Skill02[0]]}) || RETURN",
                      "displayLines": "{[Skill02[0]]}",
                      "constants": [],
                      "variables": [
                        "{[Skill02[0]]}"
                      ]
                    },
                    "Toughness": null,
                    "Tags": null,
                    "attackType": "Basic ATK",
                    "EnergyGainPercent": "100%"
                  }
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Random Chance",
                    "chance": {
                      "operator": "Variables[0] ({[Skill02[1]]}) || RETURN",
                      "displayLines": "{[Skill02[1]]}",
                      "constants": [],
                      "variables": [
                        "{[Skill02[1]]}"
                      ]
                    }
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"1510613058\">Modifier_Monster_XP_Elite02_03_ElationControl</a>[<span class=\"descriptionNumberColor\">Paramount Bliss</span>]",
                      "valuePerStack": {
                        "Ability02_P4_BonusChance": {
                          "operator": "Variables[0] ({[Skill02[3]]}) || RETURN",
                          "displayLines": "{[Skill02[3]]}",
                          "constants": [],
                          "variables": [
                            "{[Skill02[3]]}"
                          ]
                        }
                      }
                    }
                  ]
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1803637769\">Modifier_Monster_XP_Elite02_03_MainTarget</a>"
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "Skill02_AssistCount",
                    "compareType": ">=",
                    "value2": 1
                  },
                  "passed": [
                    {
                      "name": "Use Custom Character Function",
                      "functionName": "<a class=\"gTempYellow\" id=\"1319018590\">Monster_XP_Elite02_03_Ability02_TaskTemplate_Assist_01_Damage</a>"
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "Skill02_AssistCount",
                    "compareType": ">=",
                    "value2": 2
                  },
                  "passed": [
                    {
                      "name": "Use Custom Character Function",
                      "functionName": "<a class=\"gTempYellow\" id=\"1319018590\">Monster_XP_Elite02_03_Ability02_TaskTemplate_Assist_01_Damage</a>"
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "Skill02_AssistCount",
                    "compareType": ">=",
                    "value2": 3
                  },
                  "passed": [
                    {
                      "name": "Use Custom Character Function",
                      "functionName": "<a class=\"gTempYellow\" id=\"1319018590\">Monster_XP_Elite02_03_Ability02_TaskTemplate_Assist_01_Damage</a>"
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "Skill02_AssistCount",
                    "compareType": ">=",
                    "value2": 4
                  },
                  "passed": [
                    {
                      "name": "Use Custom Character Function",
                      "functionName": "<a class=\"gTempYellow\" id=\"1319018590\">Monster_XP_Elite02_03_Ability02_TaskTemplate_Assist_01_Damage</a>"
                    }
                  ]
                }
              ],
              "noTargetFound": [
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Hostile Entities(AOE)}}"
                  },
                  "searchRandom": true,
                  "maxTargets": 1,
                  "ifTargetFound": [
                    {
                      "name": "ATK Scaling DMG",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "canPhase": true,
                      "AttackScaling": {
                        "DamageType": "Wind",
                        "Damage": {
                          "operator": "Variables[0] ({[Skill02[0]]}) || RETURN",
                          "displayLines": "{[Skill02[0]]}",
                          "constants": [],
                          "variables": [
                            "{[Skill02[0]]}"
                          ]
                        },
                        "Toughness": null,
                        "Tags": null,
                        "attackType": "Basic ATK",
                        "EnergyGainPercent": "100%"
                      }
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Random Chance",
                        "chance": {
                          "operator": "Variables[0] ({[Skill02[1]]}) || RETURN",
                          "displayLines": "{[Skill02[1]]}",
                          "constants": [],
                          "variables": [
                            "{[Skill02[1]]}"
                          ]
                        }
                      },
                      "passed": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"1510613058\">Modifier_Monster_XP_Elite02_03_ElationControl</a>[<span class=\"descriptionNumberColor\">Paramount Bliss</span>]",
                          "valuePerStack": {
                            "Ability02_P4_BonusChance": {
                              "operator": "Variables[0] ({[Skill02[3]]}) || RETURN",
                              "displayLines": "{[Skill02[3]]}",
                              "constants": [],
                              "variables": [
                                "{[Skill02[3]]}"
                              ]
                            }
                          }
                        }
                      ]
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"1803637769\">Modifier_Monster_XP_Elite02_03_MainTarget</a>"
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "Skill02_AssistCount",
                        "compareType": ">=",
                        "value2": 1
                      },
                      "passed": [
                        {
                          "name": "Use Custom Character Function",
                          "functionName": "<a class=\"gTempYellow\" id=\"1319018590\">Monster_XP_Elite02_03_Ability02_TaskTemplate_Assist_01_Damage</a>"
                        }
                      ]
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "Skill02_AssistCount",
                        "compareType": ">=",
                        "value2": 2
                      },
                      "passed": [
                        {
                          "name": "Use Custom Character Function",
                          "functionName": "<a class=\"gTempYellow\" id=\"1319018590\">Monster_XP_Elite02_03_Ability02_TaskTemplate_Assist_01_Damage</a>"
                        }
                      ]
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "Skill02_AssistCount",
                        "compareType": ">=",
                        "value2": 3
                      },
                      "passed": [
                        {
                          "name": "Use Custom Character Function",
                          "functionName": "<a class=\"gTempYellow\" id=\"1319018590\">Monster_XP_Elite02_03_Ability02_TaskTemplate_Assist_01_Damage</a>"
                        }
                      ]
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "Skill02_AssistCount",
                        "compareType": ">=",
                        "value2": 4
                      },
                      "passed": [
                        {
                          "name": "Use Custom Character Function",
                          "functionName": "<a class=\"gTempYellow\" id=\"1319018590\">Monster_XP_Elite02_03_Ability02_TaskTemplate_Assist_01_Damage</a>"
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
      "name": "CharacterFunctions",
      "functionName": "<a class=\"gTempYellow\" id=\"fun__-1513504796\">Monster_XP_Elite02_03_Ability02_TaskTemplate_DamageWithRandomEffect_FirstHit_Solo</a>",
      "parse": [
        {
          "name": "IF",
          "conditions": {
            "name": "Has Flag",
            "target": {
              "name": "Target Name",
              "target": "{{Caster}}"
            },
            "flagName": "Taunt"
          },
          "passed": [
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
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "canPhase": true,
                  "AttackScaling": {
                    "DamageType": "Wind",
                    "Damage": {
                      "operator": "Variables[0] ({[Skill02[0]]}) || RETURN",
                      "displayLines": "{[Skill02[0]]}",
                      "constants": [],
                      "variables": [
                        "{[Skill02[0]]}"
                      ]
                    },
                    "Toughness": null,
                    "Tags": null,
                    "attackType": "Basic ATK",
                    "EnergyGainPercent": "100%"
                  }
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Random Chance",
                    "chance": {
                      "operator": "Variables[0] ({[Skill02[1]]}) || RETURN",
                      "displayLines": "{[Skill02[1]]}",
                      "constants": [],
                      "variables": [
                        "{[Skill02[1]]}"
                      ]
                    }
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"1510613058\">Modifier_Monster_XP_Elite02_03_ElationControl</a>[<span class=\"descriptionNumberColor\">Paramount Bliss</span>]",
                      "valuePerStack": {
                        "Ability02_P4_BonusChance": {
                          "operator": "Variables[0] ({[Skill02[3]]}) || RETURN",
                          "displayLines": "{[Skill02[3]]}",
                          "constants": [],
                          "variables": [
                            "{[Skill02[3]]}"
                          ]
                        }
                      }
                    }
                  ]
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1803637769\">Modifier_Monster_XP_Elite02_03_MainTarget</a>"
                }
              ]
            }
          ],
          "failed": [
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Hostile Entities(AOE)}}"
              },
              "searchRandom": true,
              "maxTargets": 1,
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"1510613058\">Modifier_Monster_XP_Elite02_03_ElationControl</a>[<span class=\"descriptionNumberColor\">Paramount Bliss</span>]",
                    "invertCondition": true
                  }
                ]
              },
              "ifTargetFound": [
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "canPhase": true,
                  "AttackScaling": {
                    "DamageType": "Wind",
                    "Damage": {
                      "operator": "Variables[0] ({[Skill02[0]]}) || RETURN",
                      "displayLines": "{[Skill02[0]]}",
                      "constants": [],
                      "variables": [
                        "{[Skill02[0]]}"
                      ]
                    },
                    "Toughness": null,
                    "Tags": null,
                    "attackType": "Basic ATK",
                    "EnergyGainPercent": "100%"
                  }
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Random Chance",
                    "chance": {
                      "operator": "Variables[0] ({[Skill02[1]]}) || RETURN",
                      "displayLines": "{[Skill02[1]]}",
                      "constants": [],
                      "variables": [
                        "{[Skill02[1]]}"
                      ]
                    }
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"1510613058\">Modifier_Monster_XP_Elite02_03_ElationControl</a>[<span class=\"descriptionNumberColor\">Paramount Bliss</span>]",
                      "valuePerStack": {
                        "Ability02_P4_BonusChance": {
                          "operator": "Variables[0] ({[Skill02[3]]}) || RETURN",
                          "displayLines": "{[Skill02[3]]}",
                          "constants": [],
                          "variables": [
                            "{[Skill02[3]]}"
                          ]
                        }
                      }
                    }
                  ]
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1803637769\">Modifier_Monster_XP_Elite02_03_MainTarget</a>"
                }
              ],
              "noTargetFound": [
                {
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Hostile Entities(AOE)}}"
                  },
                  "searchRandom": true,
                  "maxTargets": 1,
                  "ifTargetFound": [
                    {
                      "name": "ATK Scaling DMG",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "canPhase": true,
                      "AttackScaling": {
                        "DamageType": "Wind",
                        "Damage": {
                          "operator": "Variables[0] ({[Skill02[0]]}) || RETURN",
                          "displayLines": "{[Skill02[0]]}",
                          "constants": [],
                          "variables": [
                            "{[Skill02[0]]}"
                          ]
                        },
                        "Toughness": null,
                        "Tags": null,
                        "attackType": "Basic ATK",
                        "EnergyGainPercent": "100%"
                      }
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Random Chance",
                        "chance": {
                          "operator": "Variables[0] ({[Skill02[1]]}) || RETURN",
                          "displayLines": "{[Skill02[1]]}",
                          "constants": [],
                          "variables": [
                            "{[Skill02[1]]}"
                          ]
                        }
                      },
                      "passed": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"1510613058\">Modifier_Monster_XP_Elite02_03_ElationControl</a>[<span class=\"descriptionNumberColor\">Paramount Bliss</span>]",
                          "valuePerStack": {
                            "Ability02_P4_BonusChance": {
                              "operator": "Variables[0] ({[Skill02[3]]}) || RETURN",
                              "displayLines": "{[Skill02[3]]}",
                              "constants": [],
                              "variables": [
                                "{[Skill02[3]]}"
                              ]
                            }
                          }
                        }
                      ]
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"1803637769\">Modifier_Monster_XP_Elite02_03_MainTarget</a>"
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
      "name": "CharacterFunctions",
      "functionName": "<a class=\"gTempYellow\" id=\"fun__1319018590\">Monster_XP_Elite02_03_Ability02_TaskTemplate_Assist_01_Damage</a>",
      "parse": [
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Hostile Entities(AOE)}}"
          },
          "searchRandom": true,
          "maxTargets": 1,
          "conditions": {
            "name": "AND",
            "conditionList": [
              {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"1803637769\">Modifier_Monster_XP_Elite02_03_MainTarget</a>",
                "invertCondition": true
              },
              {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"1535094540\">Modifier_Monster_XP_Elite02_03_SecondaryTarget</a>",
                "invertCondition": true
              }
            ]
          },
          "ifTargetFound": [
            {
              "name": "ATK Scaling DMG",
              "target": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "canPhase": true,
              "AttackScaling": {
                "DamageType": "Wind",
                "Damage": {
                  "operator": "Variables[0] ({[Skill02[0]]}) || Variables[1] ({[Skill02[2]]}) || MUL || RETURN",
                  "displayLines": "({[Skill02[0]]} * {[Skill02[2]]})",
                  "constants": [],
                  "variables": [
                    "{[Skill02[0]]}",
                    "{[Skill02[2]]}"
                  ]
                },
                "Toughness": null,
                "Tags": null,
                "attackType": "Basic ATK"
              }
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Random Chance",
                "chance": {
                  "operator": "Variables[0] ({[Skill02[1]]}) || Variables[1] ({[Skill02[2]]}) || MUL || RETURN",
                  "displayLines": "({[Skill02[1]]} * {[Skill02[2]]})",
                  "constants": [],
                  "variables": [
                    "{[Skill02[1]]}",
                    "{[Skill02[2]]}"
                  ]
                }
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1510613058\">Modifier_Monster_XP_Elite02_03_ElationControl</a>[<span class=\"descriptionNumberColor\">Paramount Bliss</span>]",
                  "valuePerStack": {
                    "Ability02_P4_BonusChance": {
                      "operator": "Variables[0] ({[Skill02[3]]}) || RETURN",
                      "displayLines": "{[Skill02[3]]}",
                      "constants": [],
                      "variables": [
                        "{[Skill02[3]]}"
                      ]
                    }
                  }
                }
              ]
            }
          ],
          "noTargetFound": [
            {
              "name": "Find New Target",
              "from": {
                "name": "Target Name",
                "target": "{{Hostile Entities(AOE)}}"
              },
              "searchRandom": true,
              "maxTargets": 1,
              "ifTargetFound": [
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "canPhase": true,
                  "AttackScaling": {
                    "DamageType": "Wind",
                    "Damage": {
                      "operator": "Variables[0] ({[Skill02[0]]}) || Variables[1] ({[Skill02[2]]}) || MUL || RETURN",
                      "displayLines": "({[Skill02[0]]} * {[Skill02[2]]})",
                      "constants": [],
                      "variables": [
                        "{[Skill02[0]]}",
                        "{[Skill02[2]]}"
                      ]
                    },
                    "Toughness": null,
                    "Tags": null,
                    "attackType": "Basic ATK"
                  }
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Random Chance",
                    "chance": {
                      "operator": "Variables[0] ({[Skill02[1]]}) || Variables[1] ({[Skill02[2]]}) || MUL || RETURN",
                      "displayLines": "({[Skill02[1]]} * {[Skill02[2]]})",
                      "constants": [],
                      "variables": [
                        "{[Skill02[1]]}",
                        "{[Skill02[2]]}"
                      ]
                    }
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"1510613058\">Modifier_Monster_XP_Elite02_03_ElationControl</a>[<span class=\"descriptionNumberColor\">Paramount Bliss</span>]",
                      "valuePerStack": {
                        "Ability02_P4_BonusChance": {
                          "operator": "Variables[0] ({[Skill02[3]]}) || RETURN",
                          "displayLines": "{[Skill02[3]]}",
                          "constants": [],
                          "variables": [
                            "{[Skill02[3]]}"
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
  "targetObjectData": {
    "primaryTarget": "{{Hostile Entities(AOE)}}"
  },
  "references": []
}