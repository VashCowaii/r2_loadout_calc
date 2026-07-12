const configAbility = {
  "fileName": "8024012_Handling",
  "abilityType": "Handling",
  "energy": null,
  "toughnessList": [
    0,
    0,
    0
  ],
  "parse": [
    {
      "name": "Action Handling",
      "values": [
        {
          "name": "Define Handler String",
          "variableName": "CurrentPhase",
          "value": "WMonster_TY_Elite01_00_Phase01"
        },
        {
          "name": "Define Handler Boolean",
          "variableName": "ForbidClearSkillUseRecord",
          "value": true
        }
      ],
      "options": [
        {
          "name": "HANDLER OPTION",
          "option": "Decision01",
          "goal": [
            {
              "name": "Sequence Event",
              "passed": [
                {
                  "name": "Declare Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "scope": "TargetEntity",
                  "variableName": "AIFlag",
                  "value": 2
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Enemy Team All}}"
                    },
                    "value1": "TeamCharacterCount",
                    "compareType": "<",
                    "value2": 5
                  },
                  "passed": [
                    {
                      "name": "Use Ability Option",
                      "skillName": "Skill04"
                    }
                  ],
                  "failed": [
                    {
                      "name": "Use Ability Option",
                      "skillName": "Skill03"
                    }
                  ]
                }
              ]
            }
          ],
          "weight": 0.5,
          "type": "DefaultDSE",
          "check": [
            {
              "name": "Check Ability Use Condition",
              "passedValue": 0.5,
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
                    "name": "Compare: Variable",
                    "value1": "AIFlag",
                    "compareType": "=",
                    "value2": 1,
                    "contextScope": "TargetEntity"
                  }
                ]
              }
            }
          ]
        },
        {
          "name": "HANDLER OPTION",
          "option": "Decision01",
          "goal": [
            {
              "name": "Sequence Event",
              "passed": [
                {
                  "name": "Declare Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "scope": "TargetEntity",
                  "variableName": "AIFlag",
                  "value": 3
                },
                {
                  "name": "Use Ability Option",
                  "skillName": "Skill01"
                }
              ]
            }
          ],
          "weight": 0.5,
          "type": "DefaultDSE",
          "check": [
            {
              "name": "Check Ability Use Condition",
              "passedValue": 0.5,
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
                    "name": "Compare: Variable",
                    "value1": "AIFlag",
                    "compareType": "=",
                    "value2": 2,
                    "contextScope": "TargetEntity"
                  }
                ]
              }
            }
          ]
        },
        {
          "name": "HANDLER OPTION",
          "option": "Decision01",
          "goal": [
            {
              "name": "Sequence Event",
              "passed": [
                {
                  "name": "Declare Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "scope": "TargetEntity",
                  "variableName": "AIFlag",
                  "value": 4
                },
                {
                  "name": "Use Ability Option",
                  "skillName": "Skill03"
                }
              ]
            }
          ],
          "weight": 0.5,
          "type": "DefaultDSE",
          "check": [
            {
              "name": "Check Ability Use Condition",
              "passedValue": 0.5,
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
                    "name": "Compare: Variable",
                    "value1": "AIFlag",
                    "compareType": "=",
                    "value2": 3,
                    "contextScope": "TargetEntity"
                  }
                ]
              }
            }
          ]
        },
        {
          "name": "HANDLER OPTION",
          "option": "Decision01",
          "goal": [
            {
              "name": "Sequence Event",
              "passed": [
                {
                  "name": "Declare Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "scope": "TargetEntity",
                  "variableName": "AIFlag",
                  "value": 5
                },
                {
                  "name": "Use Ability Option",
                  "skillName": "Skill01"
                }
              ]
            }
          ],
          "weight": 0.5,
          "type": "DefaultDSE",
          "check": [
            {
              "name": "Check Ability Use Condition",
              "passedValue": 0.5,
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
                    "name": "Compare: Variable",
                    "value1": "AIFlag",
                    "compareType": "=",
                    "value2": 4,
                    "contextScope": "TargetEntity"
                  }
                ]
              }
            }
          ]
        },
        {
          "name": "HANDLER OPTION",
          "option": "Decision01",
          "goal": [
            {
              "name": "Sequence Event",
              "passed": [
                {
                  "name": "Declare Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "scope": "TargetEntity",
                  "variableName": "AIFlag",
                  "value": 6
                },
                {
                  "name": "Choose Ability Target",
                  "skillName": "Skill02",
                  "target": {
                    "name": "Select by Modifier Name",
                    "modifier": "WMonster_TY_Elite01_DOT_Poison",
                    "target": null,
                    "tieBreakWithRandom": true,
                    "max": 1,
                    "sortOperator": {
                      "name": "Select by Modifier Name",
                      "modifier": "WMonster_TY_Elite01_DOT_Poison",
                      "target": null
                    }
                  }
                },
                {
                  "name": "Use Ability Option",
                  "skillName": "Skill02"
                }
              ]
            }
          ],
          "weight": 0.5,
          "type": "DefaultDSE",
          "check": [
            {
              "name": "Check Ability Use Condition",
              "passedValue": 0.5,
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
                    "name": "Compare: Variable",
                    "value1": "AIFlag",
                    "compareType": "=",
                    "value2": 5,
                    "contextScope": "TargetEntity"
                  }
                ]
              }
            }
          ]
        },
        {
          "name": "HANDLER OPTION",
          "option": "Decision01",
          "goal": [
            {
              "name": "Sequence Event",
              "passed": [
                {
                  "name": "Declare Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "scope": "TargetEntity",
                  "variableName": "AIFlag",
                  "value": 1
                },
                {
                  "name": "Use Ability Option",
                  "skillName": "Skill03"
                }
              ]
            }
          ],
          "weight": 0.5,
          "type": "DefaultDSE",
          "check": [
            {
              "name": "Check Ability Use Condition",
              "passedValue": 0.5,
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
                    "name": "Compare: Variable",
                    "value1": "AIFlag",
                    "compareType": "=",
                    "value2": 6,
                    "contextScope": "TargetEntity"
                  }
                ]
              }
            }
          ]
        },
        {
          "name": "HANDLER OPTION",
          "option": "Decision01",
          "goal": [
            {
              "name": "Sequence Event",
              "passed": [
                {
                  "name": "Declare Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "scope": "TargetEntity",
                  "variableName": "AIFlag",
                  "value": 2
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Enemy Team All}}"
                    },
                    "value1": "TeamCharacterCount",
                    "compareType": "<",
                    "value2": 5
                  },
                  "passed": [
                    {
                      "name": "Use Ability Option",
                      "skillName": "Skill04"
                    }
                  ],
                  "failed": [
                    {
                      "name": "Use Ability Option",
                      "skillName": "Skill03"
                    }
                  ]
                }
              ]
            }
          ],
          "weight": 0.5,
          "type": "DefaultDSE",
          "check": [
            {
              "name": "Check Ability Use Condition",
              "passedValue": 0.5,
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Compare: Variable",
                    "value1": "HP_Bars_Remaining",
                    "compareType": "=",
                    "value2": 2
                  },
                  {
                    "name": "Compare: Variable",
                    "value1": "AIFlag",
                    "compareType": "=",
                    "value2": 1,
                    "contextScope": "TargetEntity"
                  }
                ]
              }
            }
          ]
        },
        {
          "name": "HANDLER OPTION",
          "option": "Decision01",
          "goal": [
            {
              "name": "Sequence Event",
              "passed": [
                {
                  "name": "Declare Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "scope": "TargetEntity",
                  "variableName": "AIFlag",
                  "value": 3
                },
                {
                  "name": "Use Ability Option",
                  "skillName": "Skill01"
                }
              ]
            }
          ],
          "weight": 0.5,
          "type": "DefaultDSE",
          "check": [
            {
              "name": "Check Ability Use Condition",
              "passedValue": 0.5,
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Compare: Variable",
                    "value1": "HP_Bars_Remaining",
                    "compareType": "=",
                    "value2": 2
                  },
                  {
                    "name": "Compare: Variable",
                    "value1": "AIFlag",
                    "compareType": "=",
                    "value2": 2,
                    "contextScope": "TargetEntity"
                  }
                ]
              }
            }
          ]
        },
        {
          "name": "HANDLER OPTION",
          "option": "Decision01",
          "goal": [
            {
              "name": "Sequence Event",
              "passed": [
                {
                  "name": "Declare Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "scope": "TargetEntity",
                  "variableName": "AIFlag",
                  "value": 4
                },
                {
                  "name": "Use Ability Option",
                  "skillName": "Skill03"
                }
              ]
            }
          ],
          "weight": 0.5,
          "type": "DefaultDSE",
          "check": [
            {
              "name": "Check Ability Use Condition",
              "passedValue": 0.5,
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Compare: Variable",
                    "value1": "HP_Bars_Remaining",
                    "compareType": "=",
                    "value2": 2
                  },
                  {
                    "name": "Compare: Variable",
                    "value1": "AIFlag",
                    "compareType": "=",
                    "value2": 3,
                    "contextScope": "TargetEntity"
                  }
                ]
              }
            }
          ]
        },
        {
          "name": "HANDLER OPTION",
          "option": "Decision01",
          "goal": [
            {
              "name": "Sequence Event",
              "passed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"763823194\">OneMore</a>"
                  },
                  "passed": [
                    {
                      "name": "Declare Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "scope": "TargetEntity",
                      "variableName": "AIFlag",
                      "value": 4
                    },
                    {
                      "name": "Use Ability Option",
                      "skillName": "Skill01"
                    }
                  ],
                  "failed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Enemy Team All}}"
                        },
                        "value1": "TeamCharacterCount",
                        "compareType": "<",
                        "value2": 3
                      },
                      "passed": [
                        {
                          "name": "Declare Custom Variable",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "scope": "TargetEntity",
                          "variableName": "AIFlag",
                          "value": 7
                        },
                        {
                          "name": "Choose Ability Target",
                          "skillName": "Skill02",
                          "target": {
                            "name": "Select by Modifier Name",
                            "modifier": "WMonster_TY_Elite01_DOT_Poison",
                            "target": null,
                            "tieBreakWithRandom": true,
                            "max": 1,
                            "sortOperator": {
                              "name": "Select by Modifier Name",
                              "modifier": "WMonster_TY_Elite01_DOT_Poison",
                              "target": null
                            }
                          }
                        },
                        {
                          "name": "Use Ability Option",
                          "skillName": "Skill02"
                        }
                      ],
                      "failed": [
                        {
                          "name": "Declare Custom Variable",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "scope": "TargetEntity",
                          "variableName": "AIFlag",
                          "value": 5
                        },
                        {
                          "name": "Use Ability Option",
                          "skillName": "Skill05"
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ],
          "weight": 0.5,
          "type": "DefaultDSE",
          "check": [
            {
              "name": "Check Ability Use Condition",
              "passedValue": 0.5,
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Compare: Variable",
                    "value1": "HP_Bars_Remaining",
                    "compareType": "=",
                    "value2": 2
                  },
                  {
                    "name": "Compare: Variable",
                    "value1": "AIFlag",
                    "compareType": "=",
                    "value2": 4,
                    "contextScope": "TargetEntity"
                  }
                ]
              }
            }
          ]
        },
        {
          "name": "HANDLER OPTION",
          "option": "Decision01",
          "goal": [
            {
              "name": "Sequence Event",
              "passed": [
                {
                  "name": "Declare Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "scope": "TargetEntity",
                  "variableName": "AIFlag",
                  "value": 6
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{All Team Members(Exclude Self)}}"
                    },
                    "value1": "TeamCharacterCount",
                    "compareType": "<",
                    "value2": 1,
                    "conditions": {
                      "name": "Check Boolean Value",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "value": "ENEMIES_OBJECT_UNUSED__63"
                    }
                  },
                  "passed": [
                    {
                      "name": "Use Ability Option",
                      "skillName": "Skill07"
                    }
                  ],
                  "failed": [
                    {
                      "name": "Use Ability Option",
                      "skillName": "Skill06"
                    }
                  ]
                }
              ]
            }
          ],
          "weight": 0.5,
          "type": "DefaultDSE",
          "check": [
            {
              "name": "Check Ability Use Condition",
              "passedValue": 0.5,
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Compare: Variable",
                    "value1": "HP_Bars_Remaining",
                    "compareType": "=",
                    "value2": 2
                  },
                  {
                    "name": "Compare: Variable",
                    "value1": "AIFlag",
                    "compareType": "=",
                    "value2": 5,
                    "contextScope": "TargetEntity"
                  }
                ]
              }
            }
          ]
        },
        {
          "name": "HANDLER OPTION",
          "option": "Decision01",
          "goal": [
            {
              "name": "Sequence Event",
              "passed": [
                {
                  "name": "Declare Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "scope": "TargetEntity",
                  "variableName": "AIFlag",
                  "value": 1
                },
                {
                  "name": "Choose Ability Target",
                  "skillName": "Skill02",
                  "target": {
                    "name": "Select by Modifier Name",
                    "modifier": "WMonster_TY_Elite01_DOT_Poison",
                    "target": null,
                    "tieBreakWithRandom": true,
                    "max": 1,
                    "sortOperator": {
                      "name": "Select by Modifier Name",
                      "modifier": "WMonster_TY_Elite01_DOT_Poison",
                      "target": null
                    }
                  }
                },
                {
                  "name": "Use Ability Option",
                  "skillName": "Skill02"
                }
              ]
            }
          ],
          "weight": 0.5,
          "type": "DefaultDSE",
          "check": [
            {
              "name": "Check Ability Use Condition",
              "passedValue": 0.5,
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Compare: Variable",
                    "value1": "HP_Bars_Remaining",
                    "compareType": "=",
                    "value2": 2
                  },
                  {
                    "name": "Compare: Variable",
                    "value1": "AIFlag",
                    "compareType": "=",
                    "value2": 6,
                    "contextScope": "TargetEntity"
                  }
                ]
              }
            }
          ]
        },
        {
          "name": "HANDLER OPTION",
          "option": "Decision01",
          "goal": [
            {
              "name": "Sequence Event",
              "passed": [
                {
                  "name": "Declare Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "scope": "TargetEntity",
                  "variableName": "AIFlag",
                  "value": 1
                },
                {
                  "name": "Use Ability Option",
                  "skillName": "Skill01"
                }
              ]
            }
          ],
          "weight": 0.5,
          "type": "DefaultDSE",
          "check": [
            {
              "name": "Check Ability Use Condition",
              "passedValue": 0.5,
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Compare: Variable",
                    "value1": "HP_Bars_Remaining",
                    "compareType": "=",
                    "value2": 2
                  },
                  {
                    "name": "Compare: Variable",
                    "value1": "AIFlag",
                    "compareType": "=",
                    "value2": 7,
                    "contextScope": "TargetEntity"
                  }
                ]
              }
            }
          ]
        },
        {
          "name": "HANDLER OPTION",
          "option": "Decision01",
          "goal": [
            {
              "name": "Sequence Event",
              "passed": [
                {
                  "name": "Declare Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "scope": "TargetEntity",
                  "variableName": "AIFlag",
                  "value": 2
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "SpecialSummon",
                    "compareType": "=",
                    "value2": 1,
                    "contextScope": "TargetEntity"
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "scope": "TargetEntity",
                      "variableName": "SpecialSummon",
                      "value": 0
                    },
                    {
                      "name": "Use Ability Option",
                      "skillName": "Skill10"
                    }
                  ],
                  "failed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Enemy Team All}}"
                        },
                        "value1": "TeamCharacterCount",
                        "compareType": "<",
                        "value2": 5
                      },
                      "passed": [
                        {
                          "name": "Use Ability Option",
                          "skillName": "Skill04"
                        }
                      ],
                      "failed": [
                        {
                          "name": "Use Ability Option",
                          "skillName": "Skill03"
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ],
          "weight": 0.5,
          "type": "DefaultDSE",
          "check": [
            {
              "name": "Check Ability Use Condition",
              "passedValue": 0.5,
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Compare: Variable",
                    "value1": "HP_Bars_Remaining",
                    "compareType": "=",
                    "value2": 3
                  },
                  {
                    "name": "Compare: Variable",
                    "value1": "AIFlag",
                    "compareType": "=",
                    "value2": 1,
                    "contextScope": "TargetEntity"
                  }
                ]
              }
            }
          ]
        },
        {
          "name": "HANDLER OPTION",
          "option": "Decision01",
          "goal": [
            {
              "name": "Sequence Event",
              "passed": [
                {
                  "name": "Declare Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "scope": "TargetEntity",
                  "variableName": "AIFlag",
                  "value": 3
                },
                {
                  "name": "Use Ability Option",
                  "skillName": "Skill01"
                }
              ]
            }
          ],
          "weight": 0.5,
          "type": "DefaultDSE",
          "check": [
            {
              "name": "Check Ability Use Condition",
              "passedValue": 0.5,
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Compare: Variable",
                    "value1": "HP_Bars_Remaining",
                    "compareType": "=",
                    "value2": 3
                  },
                  {
                    "name": "Compare: Variable",
                    "value1": "AIFlag",
                    "compareType": "=",
                    "value2": 2,
                    "contextScope": "TargetEntity"
                  }
                ]
              }
            }
          ]
        },
        {
          "name": "HANDLER OPTION",
          "option": "Decision01",
          "goal": [
            {
              "name": "Sequence Event",
              "passed": [
                {
                  "name": "Declare Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "scope": "TargetEntity",
                  "variableName": "AIFlag",
                  "value": 4
                },
                {
                  "name": "Use Ability Option",
                  "skillName": "Skill03"
                }
              ]
            }
          ],
          "weight": 0.5,
          "type": "DefaultDSE",
          "check": [
            {
              "name": "Check Ability Use Condition",
              "passedValue": 0.5,
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Compare: Variable",
                    "value1": "HP_Bars_Remaining",
                    "compareType": "=",
                    "value2": 3
                  },
                  {
                    "name": "Compare: Variable",
                    "value1": "AIFlag",
                    "compareType": "=",
                    "value2": 3,
                    "contextScope": "TargetEntity"
                  }
                ]
              }
            }
          ]
        },
        {
          "name": "HANDLER OPTION",
          "option": "Decision01",
          "goal": [
            {
              "name": "Sequence Event",
              "passed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"763823194\">OneMore</a>"
                  },
                  "passed": [
                    {
                      "name": "Declare Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "scope": "TargetEntity",
                      "variableName": "AIFlag",
                      "value": 4
                    },
                    {
                      "name": "Use Ability Option",
                      "skillName": "Skill01"
                    }
                  ],
                  "failed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Enemy Team All}}"
                        },
                        "value1": "TeamCharacterCount",
                        "compareType": "<",
                        "value2": 3
                      },
                      "passed": [
                        {
                          "name": "Declare Custom Variable",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "scope": "TargetEntity",
                          "variableName": "AIFlag",
                          "value": 7
                        },
                        {
                          "name": "Choose Ability Target",
                          "skillName": "Skill02",
                          "target": {
                            "name": "Select by Modifier Name",
                            "modifier": "WMonster_TY_Elite01_DOT_Poison",
                            "target": null,
                            "tieBreakWithRandom": true,
                            "max": 1,
                            "sortOperator": {
                              "name": "Select by Modifier Name",
                              "modifier": "WMonster_TY_Elite01_DOT_Poison",
                              "target": null
                            }
                          }
                        },
                        {
                          "name": "Use Ability Option",
                          "skillName": "Skill02"
                        }
                      ],
                      "failed": [
                        {
                          "name": "Declare Custom Variable",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "scope": "TargetEntity",
                          "variableName": "AIFlag",
                          "value": 5
                        },
                        {
                          "name": "Use Ability Option",
                          "skillName": "Skill05"
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ],
          "weight": 0.5,
          "type": "DefaultDSE",
          "check": [
            {
              "name": "Check Ability Use Condition",
              "passedValue": 0.5,
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Compare: Variable",
                    "value1": "HP_Bars_Remaining",
                    "compareType": "=",
                    "value2": 3
                  },
                  {
                    "name": "Compare: Variable",
                    "value1": "AIFlag",
                    "compareType": "=",
                    "value2": 4,
                    "contextScope": "TargetEntity"
                  }
                ]
              }
            }
          ]
        },
        {
          "name": "HANDLER OPTION",
          "option": "Decision01",
          "goal": [
            {
              "name": "Sequence Event",
              "passed": [
                {
                  "name": "Declare Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "scope": "TargetEntity",
                  "variableName": "AIFlag",
                  "value": 6
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{All Team Members(Exclude Self)}}"
                    },
                    "value1": "TeamCharacterCount",
                    "compareType": "<",
                    "value2": 1,
                    "conditions": {
                      "name": "Check Boolean Value",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "value": "ENEMIES_OBJECT_UNUSED__63"
                    }
                  },
                  "passed": [
                    {
                      "name": "Use Ability Option",
                      "skillName": "Skill07"
                    }
                  ],
                  "failed": [
                    {
                      "name": "Use Ability Option",
                      "skillName": "Skill06"
                    }
                  ]
                }
              ]
            }
          ],
          "weight": 0.5,
          "type": "DefaultDSE",
          "check": [
            {
              "name": "Check Ability Use Condition",
              "passedValue": 0.5,
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Compare: Variable",
                    "value1": "HP_Bars_Remaining",
                    "compareType": "=",
                    "value2": 3
                  },
                  {
                    "name": "Compare: Variable",
                    "value1": "AIFlag",
                    "compareType": "=",
                    "value2": 5,
                    "contextScope": "TargetEntity"
                  }
                ]
              }
            }
          ]
        },
        {
          "name": "HANDLER OPTION",
          "option": "Decision01",
          "goal": [
            {
              "name": "Sequence Event",
              "passed": [
                {
                  "name": "Declare Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "scope": "TargetEntity",
                  "variableName": "AIFlag",
                  "value": 1
                },
                {
                  "name": "Choose Ability Target",
                  "skillName": "Skill02",
                  "target": {
                    "name": "Select by Modifier Name",
                    "modifier": "WMonster_TY_Elite01_DOT_Poison",
                    "target": null,
                    "tieBreakWithRandom": true,
                    "max": 1,
                    "sortOperator": {
                      "name": "Select by Modifier Name",
                      "modifier": "WMonster_TY_Elite01_DOT_Poison",
                      "target": null
                    }
                  }
                },
                {
                  "name": "Use Ability Option",
                  "skillName": "Skill02"
                }
              ]
            }
          ],
          "weight": 0.5,
          "type": "DefaultDSE",
          "check": [
            {
              "name": "Check Ability Use Condition",
              "passedValue": 0.5,
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Compare: Variable",
                    "value1": "HP_Bars_Remaining",
                    "compareType": "=",
                    "value2": 3
                  },
                  {
                    "name": "Compare: Variable",
                    "value1": "AIFlag",
                    "compareType": "=",
                    "value2": 6,
                    "contextScope": "TargetEntity"
                  }
                ]
              }
            }
          ]
        },
        {
          "name": "HANDLER OPTION",
          "option": "Decision01",
          "goal": [
            {
              "name": "Sequence Event",
              "passed": [
                {
                  "name": "Declare Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "scope": "TargetEntity",
                  "variableName": "AIFlag",
                  "value": 1
                },
                {
                  "name": "Use Ability Option",
                  "skillName": "Skill01"
                }
              ]
            }
          ],
          "weight": 0.5,
          "type": "DefaultDSE",
          "check": [
            {
              "name": "Check Ability Use Condition",
              "passedValue": 0.5,
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Compare: Variable",
                    "value1": "HP_Bars_Remaining",
                    "compareType": "=",
                    "value2": 3
                  },
                  {
                    "name": "Compare: Variable",
                    "value1": "AIFlag",
                    "compareType": "=",
                    "value2": 7,
                    "contextScope": "TargetEntity"
                  }
                ]
              }
            }
          ]
        }
      ]
    }
  ],
  "references": []
}