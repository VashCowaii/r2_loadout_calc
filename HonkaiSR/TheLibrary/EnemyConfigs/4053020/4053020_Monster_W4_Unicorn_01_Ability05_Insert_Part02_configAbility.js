const configAbility = {
  "fileName": "4053020_Monster_W4_Unicorn_01_Ability05_Insert_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "IF",
      "conditions": {
        "name": "Compare: Target Count",
        "target": {
          "name": "Target Name",
          "target": "{{All Team Members(Exclude Self)}}"
        },
        "compareType": "<",
        "value2": 4
      },
      "passed": [
        {
          "name": "Define Custom Variable",
          "variableName": "SummonNum",
          "value": {
            "operator": "Variables[0] (SummonCount) || RETURN",
            "displayLines": "SummonCount",
            "constants": [],
            "variables": [
              "SummonCount"
            ]
          }
        },
        {
          "name": "Looped Event",
          "maxLoops": 4,
          "Event": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Target Count",
                "target": {
                  "name": "Target Name",
                  "target": "{{All Team Members(Exclude Self)}}"
                },
                "compareType": "<",
                "value2": 4
              },
              "passed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "SummonCount",
                    "compareType": ">",
                    "value2": 0
                  },
                  "passed": [
                    {
                      "name": "SWITCH",
                      "switchValue": {
                        "operator": "Variables[0] (SummonCount) || RETURN",
                        "displayLines": "SummonCount",
                        "constants": [],
                        "variables": [
                          "SummonCount"
                        ]
                      },
                      "caseEvents": [
                        {
                          "name": "SWITCH CONDITON",
                          "caseValueIs": 4,
                          "execute": [
                            {
                              "name": "Create Enemies",
                              "delayPercent": {
                                "operator": "Variables[0] ({[Skill03[0]]}) || RETURN",
                                "displayLines": "{[Skill03[0]]}",
                                "constants": [],
                                "variables": [
                                  "{[Skill03[0]]}"
                                ]
                              },
                              "refreshPositions": false,
                              "enemyList": [
                                {
                                  "name": "Enemy Entry",
                                  "enemyID": {
                                    "operator": "Variables[0] (ENEMIES_OBJECT_UNUSED__95) || RETURN",
                                    "displayLines": "ENEMIES_OBJECT_UNUSED__95",
                                    "constants": [],
                                    "variables": [
                                      "ENEMIES_OBJECT_UNUSED__95"
                                    ]
                                  },
                                  "locationType": "Last"
                                }
                              ]
                            }
                          ]
                        },
                        {
                          "name": "SWITCH CONDITON",
                          "caseValueIs": 3,
                          "execute": [
                            {
                              "name": "Create Enemies",
                              "delayPercent": {
                                "operator": "Variables[0] ({[Skill03[0]]}) || RETURN",
                                "displayLines": "{[Skill03[0]]}",
                                "constants": [],
                                "variables": [
                                  "{[Skill03[0]]}"
                                ]
                              },
                              "refreshPositions": false,
                              "enemyList": [
                                {
                                  "name": "Enemy Entry",
                                  "enemyID": {
                                    "operator": "Variables[0] (ENEMIES_OBJECT_UNUSED__95) || RETURN",
                                    "displayLines": "ENEMIES_OBJECT_UNUSED__95",
                                    "constants": [],
                                    "variables": [
                                      "ENEMIES_OBJECT_UNUSED__95"
                                    ]
                                  },
                                  "locationType": "First"
                                }
                              ]
                            }
                          ]
                        },
                        {
                          "name": "SWITCH CONDITON",
                          "caseValueIs": 2,
                          "execute": [
                            {
                              "name": "Create Enemies",
                              "delayPercent": {
                                "operator": "Variables[0] ({[Skill03[0]]}) || RETURN",
                                "displayLines": "{[Skill03[0]]}",
                                "constants": [],
                                "variables": [
                                  "{[Skill03[0]]}"
                                ]
                              },
                              "refreshPositions": false,
                              "enemyList": [
                                {
                                  "name": "Enemy Entry",
                                  "enemyID": {
                                    "operator": "Variables[0] (ENEMIES_OBJECT_UNUSED__95) || RETURN",
                                    "displayLines": "ENEMIES_OBJECT_UNUSED__95",
                                    "constants": [],
                                    "variables": [
                                      "ENEMIES_OBJECT_UNUSED__95"
                                    ]
                                  },
                                  "locationType": "Last"
                                }
                              ]
                            }
                          ]
                        },
                        {
                          "name": "SWITCH CONDITON",
                          "caseValueIs": 1,
                          "execute": [
                            {
                              "name": "Create Enemies",
                              "delayPercent": {
                                "operator": "Variables[0] ({[Skill03[0]]}) || RETURN",
                                "displayLines": "{[Skill03[0]]}",
                                "constants": [],
                                "variables": [
                                  "{[Skill03[0]]}"
                                ]
                              },
                              "refreshPositions": false,
                              "enemyList": [
                                {
                                  "name": "Enemy Entry",
                                  "enemyID": {
                                    "operator": "Variables[0] (ENEMIES_OBJECT_UNUSED__95) || RETURN",
                                    "displayLines": "ENEMIES_OBJECT_UNUSED__95",
                                    "constants": [],
                                    "variables": [
                                      "ENEMIES_OBJECT_UNUSED__95"
                                    ]
                                  },
                                  "locationType": "First"
                                }
                              ]
                            }
                          ]
                        }
                      ],
                      "defaultEvents": []
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Recently Summoned Enemies}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-136554165\">Standard_Servant</a>[<span class=\"descriptionNumberColor\">Self-Destruct</span>]"
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Recently Summoned Enemies}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"1300638915\">Enemy_W4_Unicorn_01_SummonMonsterWeak</a>[<span class=\"descriptionNumberColor\">Weakling</span>]",
                      "valuePerStack": {
                        "MDF_InitHP": {
                          "operator": "Variables[0] ({[Skill03[1]]}) || RETURN",
                          "displayLines": "{[Skill03[1]]}",
                          "constants": [],
                          "variables": [
                            "{[Skill03[1]]}"
                          ]
                        },
                        "MDF_DefenceAddedRatio": {
                          "operator": "Variables[0] ({[Skill03[6]]}) || RETURN",
                          "displayLines": "{[Skill03[6]]}",
                          "constants": [],
                          "variables": [
                            "{[Skill03[6]]}"
                          ]
                        }
                      }
                    },
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Recently Summoned Enemies}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-1300974870\">Enemy_W4_Unicorn_01_SummonMark</a>"
                    },
                    {
                      "name": "Define Custom Variable with Added Value",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "variableName": "SummonCount",
                      "value": -1
                    }
                  ]
                }
              ],
              "failed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-199880551\">W4_Unicorn_01_BattleScore1</a>"
                },
                {
                  "name": "Define Custom Variable with Added Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "variableName": "SummonCount",
                  "value": -1
                },
                {
                  "name": "SWITCH",
                  "switchValue": {
                    "operator": "Variables[0] (SummonCount) || RETURN",
                    "displayLines": "SummonCount",
                    "constants": [],
                    "variables": [
                      "SummonCount"
                    ]
                  },
                  "caseEvents": [
                    {
                      "name": "SWITCH CONDITON",
                      "caseValueIs": 3,
                      "execute": [
                        {
                          "name": "Use Custom Character Function",
                          "functionName": "<a class=\"gTempYellow\" id=\"-1097202595\">Monster_W4_Unicorn_01_RemoveEgg01</a>"
                        }
                      ]
                    },
                    {
                      "name": "SWITCH CONDITON",
                      "caseValueIs": 2,
                      "execute": [
                        {
                          "name": "Use Custom Character Function",
                          "functionName": "<a class=\"gTempYellow\" id=\"-1147535452\">Monster_W4_Unicorn_01_RemoveEgg02</a>"
                        }
                      ]
                    },
                    {
                      "name": "SWITCH CONDITON",
                      "caseValueIs": 1,
                      "execute": [
                        {
                          "name": "Use Custom Character Function",
                          "functionName": "<a class=\"gTempYellow\" id=\"-1130757833\">Monster_W4_Unicorn_01_RemoveEgg03</a>"
                        }
                      ]
                    },
                    {
                      "name": "SWITCH CONDITON",
                      "caseValueIs": 0,
                      "execute": [
                        {
                          "name": "Use Custom Character Function",
                          "functionName": "<a class=\"gTempYellow\" id=\"-1181090690\">Monster_W4_Unicorn_01_RemoveEgg04</a>"
                        }
                      ]
                    }
                  ],
                  "defaultEvents": []
                }
              ]
            }
          ]
        },
        {
          "name": "Consume",
          "consumeFrom": "MaxHP",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "consumePercent": {
            "operator": "Variables[0] ({[Skill03[4]]}) || RETURN",
            "displayLines": "{[Skill03[4]]}",
            "constants": [],
            "variables": [
              "{[Skill03[4]]}"
            ]
          },
          "DamageType": {
            "name": "Damage Type Source",
            "sourceType": "AllType"
          }
        },
        {
          "name": "Find New Target",
          "from": {
            "name": "Target Name",
            "target": "{{Enemy Team All}}"
          },
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"-1300974870\">Enemy_W4_Unicorn_01_SummonMark</a>"
          },
          "ifTargetFound": [
            {
              "name": "Remove Events/Bonuses",
              "to": {
                "name": "Target Name",
                "target": "{{Parameter Target}}"
              },
              "modifier": "<a class=\"gModGreen\" id=\"-1300974870\">Enemy_W4_Unicorn_01_SummonMark</a>"
            },
            {
              "name": "Define Custom Variable with Added Value",
              "target": {
                "name": "Target Name",
                "target": "{{Caster}}"
              },
              "variableName": "SummonNum",
              "value": -1,
              "max": 100
            },
            {
              "name": "SWITCH",
              "switchValue": {
                "operator": "Variables[0] (SummonNum) || RETURN",
                "displayLines": "SummonNum",
                "constants": [],
                "variables": [
                  "SummonNum"
                ]
              },
              "caseEvents": [
                {
                  "name": "SWITCH CONDITON",
                  "caseValueIs": 3,
                  "execute": [
                    {
                      "name": "Shot Fired",
                      "projectileCount": 1
                    }
                  ]
                },
                {
                  "name": "SWITCH CONDITON",
                  "caseValueIs": 2,
                  "execute": [
                    {
                      "name": "Shot Fired",
                      "projectileCount": 1
                    }
                  ]
                },
                {
                  "name": "SWITCH CONDITON",
                  "caseValueIs": 1,
                  "execute": [
                    {
                      "name": "Shot Fired",
                      "projectileCount": 1
                    }
                  ]
                },
                {
                  "name": "SWITCH CONDITON",
                  "caseValueIs": 0,
                  "execute": [
                    {
                      "name": "Shot Fired",
                      "projectileCount": 1
                    }
                  ]
                }
              ],
              "defaultEvents": []
            }
          ]
        }
      ],
      "failed": [
        {
          "name": "Add Events/Bonuses",
          "to": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "modifier": "<a class=\"gModGreen\" id=\"-199880551\">W4_Unicorn_01_BattleScore1</a>"
        },
        {
          "name": "Looped Event",
          "maxLoops": {
            "operator": "Variables[0] (SummonCount) || RETURN",
            "displayLines": "SummonCount",
            "constants": [],
            "variables": [
              "SummonCount"
            ]
          },
          "Event": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "SummonCount",
                "compareType": ">",
                "value2": 0
              },
              "passed": [
                {
                  "name": "Define Custom Variable with Added Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "variableName": "SummonCount",
                  "value": -1
                },
                {
                  "name": "SWITCH",
                  "switchValue": {
                    "operator": "Variables[0] (SummonCount) || RETURN",
                    "displayLines": "SummonCount",
                    "constants": [],
                    "variables": [
                      "SummonCount"
                    ]
                  },
                  "caseEvents": [
                    {
                      "name": "SWITCH CONDITON",
                      "caseValueIs": 3,
                      "execute": [
                        {
                          "name": "Use Custom Character Function",
                          "functionName": "<a class=\"gTempYellow\" id=\"-1097202595\">Monster_W4_Unicorn_01_RemoveEgg01</a>"
                        }
                      ]
                    },
                    {
                      "name": "SWITCH CONDITON",
                      "caseValueIs": 2,
                      "execute": [
                        {
                          "name": "Use Custom Character Function",
                          "functionName": "<a class=\"gTempYellow\" id=\"-1147535452\">Monster_W4_Unicorn_01_RemoveEgg02</a>"
                        }
                      ]
                    },
                    {
                      "name": "SWITCH CONDITON",
                      "caseValueIs": 1,
                      "execute": [
                        {
                          "name": "Use Custom Character Function",
                          "functionName": "<a class=\"gTempYellow\" id=\"-1130757833\">Monster_W4_Unicorn_01_RemoveEgg03</a>"
                        }
                      ]
                    },
                    {
                      "name": "SWITCH CONDITON",
                      "caseValueIs": 0,
                      "execute": [
                        {
                          "name": "Use Custom Character Function",
                          "functionName": "<a class=\"gTempYellow\" id=\"-1181090690\">Monster_W4_Unicorn_01_RemoveEgg04</a>"
                        }
                      ]
                    }
                  ],
                  "defaultEvents": []
                }
              ]
            }
          ]
        },
        {
          "name": "Consume",
          "consumeFrom": "MaxHP",
          "target": {
            "name": "Target Name",
            "target": "{{Caster}}"
          },
          "consumePercent": {
            "operator": "Variables[0] ({[Skill03[4]]}) || RETURN",
            "displayLines": "{[Skill03[4]]}",
            "constants": [],
            "variables": [
              "{[Skill03[4]]}"
            ]
          },
          "DamageType": {
            "name": "Damage Type Source",
            "sourceType": "AllType"
          }
        }
      ]
    },
    {
      "name": "Action Advance/Delay",
      "target": {
        "name": "Add Target by Unique Identifier",
        "identifier": "SummonMonster"
      },
      "advanceType": "Set",
      "multiAdd": "{[Skill03[2]]}"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-775198668\">Enemy_W4_Unicorn_01_Ability03ModifyDelayCost</a>"
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-1500090502\">Enemy_W4_Unicorn_01_HitSummonMark1</a>"
    }
  ],
  "references": []
}