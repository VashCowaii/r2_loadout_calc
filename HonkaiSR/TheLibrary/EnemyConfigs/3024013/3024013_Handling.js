const configAbility = {
  "fileName": "3024013_Handling",
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
          "value": "Phase01"
        },
        {
          "name": "Define Handler Boolean",
          "variableName": "ForbidClearSkillUseRecord",
          "value": true
        }
      ],
      "options": [
        {
          "name": "HANDLER OPTION GROUP",
          "option": "Monster_W2_Argenti_00_IF_Phase01",
          "goal": [
            {
              "name": "HANDLER OPTION GROUP",
              "option": "Monster_W2_Argenti_00_IF_Phase01",
              "goal": [
                {
                  "name": "HANDLER OPTION",
                  "option": "UseSkill01",
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
                          "name": "Use Ability Option",
                          "skillName": "Skill11"
                        }
                      ]
                    }
                  ],
                  "type": "DefaultDSE",
                  "check": [
                    {
                      "name": "Check Ability Use Condition",
                      "passedValue": 1,
                      "conditions": {
                        "name": "AND",
                        "conditionList": [
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
                  "option": "UseSkill01",
                  "goal": [
                    {
                      "name": "Sequence Event",
                      "passed": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"763823194\">OneMore</a>"
                        },
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
                          "name": "Use Ability Option",
                          "skillName": "Skill11"
                        }
                      ]
                    }
                  ],
                  "type": "DefaultDSE",
                  "check": [
                    {
                      "name": "Check Ability Use Condition",
                      "passedValue": 1,
                      "conditions": {
                        "name": "AND",
                        "conditionList": [
                          {
                            "name": "Compare: Variable",
                            "value1": "AIFlag",
                            "compareType": "=",
                            "value2": 9,
                            "contextScope": "TargetEntity"
                          }
                        ]
                      }
                    }
                  ]
                },
                {
                  "name": "HANDLER OPTION",
                  "option": "UseSkill01",
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
                          "value": 11
                        },
                        {
                          "name": "Use Ability Option",
                          "skillName": "Skill14"
                        }
                      ]
                    }
                  ],
                  "type": "DefaultDSE",
                  "check": [
                    {
                      "name": "Check Ability Use Condition",
                      "passedValue": 1,
                      "conditions": {
                        "name": "AND",
                        "conditionList": [
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
                  "option": "UseSkill01",
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
                          "value": 12
                        },
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Compare: Target Count",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Enemy Team All}}"
                            },
                            "compareType": ">=",
                            "value2": 5,
                            "livingTargets": true
                          },
                          "passed": [
                            {
                              "name": "Use Ability Option",
                              "skillName": "Skill14"
                            }
                          ],
                          "failed": [
                            {
                              "name": "Use Ability Option",
                              "skillName": "Skill11"
                            }
                          ]
                        }
                      ]
                    }
                  ],
                  "type": "DefaultDSE",
                  "check": [
                    {
                      "name": "Check Ability Use Condition",
                      "passedValue": 1,
                      "conditions": {
                        "name": "AND",
                        "conditionList": [
                          {
                            "name": "Compare: Variable",
                            "value1": "AIFlag",
                            "compareType": "=",
                            "value2": 11,
                            "contextScope": "TargetEntity"
                          }
                        ]
                      }
                    }
                  ]
                },
                {
                  "name": "HANDLER OPTION",
                  "option": "UseSkill01",
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
                          "value": 21
                        },
                        {
                          "name": "Use Ability Option",
                          "skillName": "Skill01"
                        }
                      ]
                    }
                  ],
                  "type": "DefaultDSE",
                  "check": [
                    {
                      "name": "Check Ability Use Condition",
                      "passedValue": 1,
                      "conditions": {
                        "name": "AND",
                        "conditionList": [
                          {
                            "name": "Compare: Variable",
                            "value1": "AIFlag",
                            "compareType": "=",
                            "value2": 12,
                            "contextScope": "TargetEntity"
                          }
                        ]
                      }
                    }
                  ]
                },
                {
                  "name": "HANDLER OPTION",
                  "option": "UseSkill01",
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
                          "value": 22
                        },
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Compare: Target Count",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Enemy Team All}}"
                            },
                            "compareType": ">=",
                            "value2": 5,
                            "livingTargets": true
                          },
                          "passed": [
                            {
                              "name": "Use Ability Option",
                              "skillName": "Skill14"
                            }
                          ],
                          "failed": [
                            {
                              "name": "Use Ability Option",
                              "skillName": "Skill11"
                            }
                          ]
                        }
                      ]
                    }
                  ],
                  "type": "DefaultDSE",
                  "check": [
                    {
                      "name": "Check Ability Use Condition",
                      "passedValue": 1,
                      "conditions": {
                        "name": "AND",
                        "conditionList": [
                          {
                            "name": "Compare: Variable",
                            "value1": "AIFlag",
                            "compareType": "=",
                            "value2": 21,
                            "contextScope": "TargetEntity"
                          }
                        ]
                      }
                    }
                  ]
                },
                {
                  "name": "HANDLER OPTION",
                  "option": "UseSkill01",
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
                          "value": 31
                        },
                        {
                          "name": "Use Ability Option",
                          "skillName": "Skill01"
                        }
                      ]
                    }
                  ],
                  "type": "DefaultDSE",
                  "check": [
                    {
                      "name": "Check Ability Use Condition",
                      "passedValue": 1,
                      "conditions": {
                        "name": "AND",
                        "conditionList": [
                          {
                            "name": "Compare: Variable",
                            "value1": "AIFlag",
                            "compareType": "=",
                            "value2": 22,
                            "contextScope": "TargetEntity"
                          }
                        ]
                      }
                    }
                  ]
                },
                {
                  "name": "HANDLER OPTION",
                  "option": "UseSkill01",
                  "goal": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Target Count",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Enemy Team All}}"
                        },
                        "compareType": "=",
                        "value2": 1,
                        "livingTargets": true
                      },
                      "passed": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"763823194\">OneMore</a>"
                        },
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
                          "name": "Declare Custom Variable",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "scope": "TargetEntity",
                          "variableName": "SAIFlag",
                          "value": 2
                        },
                        {
                          "name": "Use Ability Option",
                          "skillName": "Skill01"
                        }
                      ],
                      "failed": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"763823194\">OneMore</a>"
                        },
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
                          "name": "Declare Custom Variable",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "scope": "TargetEntity",
                          "variableName": "SAIFlag",
                          "value": 2
                        },
                        {
                          "name": "Use Ability Option",
                          "skillName": "Skill16"
                        }
                      ]
                    }
                  ],
                  "type": "DefaultDSE",
                  "check": [
                    {
                      "name": "Check Ability Use Condition",
                      "passedValue": 1,
                      "conditions": {
                        "name": "AND",
                        "conditionList": [
                          {
                            "name": "Compare: Variable",
                            "value1": "AIFlag",
                            "compareType": "=",
                            "value2": 31,
                            "contextScope": "TargetEntity"
                          }
                        ]
                      }
                    }
                  ]
                }
              ],
              "type": "DefaultDSE",
              "check": [
                {
                  "name": "Check Ability Use Condition",
                  "passedValue": 1,
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Compare: Variable",
                        "value1": "SAIFlag",
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
              "name": "HANDLER OPTION GROUP",
              "option": "Monster_W2_Argenti_00_IF_Phase01",
              "goal": [
                {
                  "name": "HANDLER OPTION",
                  "option": "UseSkill01",
                  "goal": [
                    {
                      "name": "Sequence Event",
                      "passed": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"763823194\">OneMore</a>"
                        },
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
                          "name": "Use Ability Option",
                          "skillName": "Skill12"
                        }
                      ]
                    }
                  ],
                  "type": "DefaultDSE",
                  "check": [
                    {
                      "name": "Check Ability Use Condition",
                      "passedValue": 1,
                      "conditions": {
                        "name": "AND",
                        "conditionList": [
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
                  "option": "UseSkill01",
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
                          "value": 11
                        },
                        {
                          "name": "Use Ability Option",
                          "skillName": "Skill15"
                        }
                      ]
                    }
                  ],
                  "type": "DefaultDSE",
                  "check": [
                    {
                      "name": "Check Ability Use Condition",
                      "passedValue": 1,
                      "conditions": {
                        "name": "AND",
                        "conditionList": [
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
                  "option": "UseSkill01",
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
                          "value": 12
                        },
                        {
                          "name": "Use Ability Option",
                          "skillName": "Skill02"
                        }
                      ]
                    }
                  ],
                  "type": "DefaultDSE",
                  "check": [
                    {
                      "name": "Check Ability Use Condition",
                      "passedValue": 1,
                      "conditions": {
                        "name": "AND",
                        "conditionList": [
                          {
                            "name": "Compare: Variable",
                            "value1": "AIFlag",
                            "compareType": "=",
                            "value2": 11,
                            "contextScope": "TargetEntity"
                          }
                        ]
                      }
                    }
                  ]
                },
                {
                  "name": "HANDLER OPTION",
                  "option": "UseSkill01",
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
                          "value": 21
                        },
                        {
                          "name": "Use Ability Option",
                          "skillName": "Skill05"
                        }
                      ]
                    }
                  ],
                  "type": "DefaultDSE",
                  "check": [
                    {
                      "name": "Check Ability Use Condition",
                      "passedValue": 1,
                      "conditions": {
                        "name": "AND",
                        "conditionList": [
                          {
                            "name": "Compare: Variable",
                            "value1": "AIFlag",
                            "compareType": "=",
                            "value2": 12,
                            "contextScope": "TargetEntity"
                          }
                        ]
                      }
                    }
                  ]
                },
                {
                  "name": "HANDLER OPTION",
                  "option": "UseSkill01",
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
                          "value": 22
                        },
                        {
                          "name": "Use Ability Option",
                          "skillName": "Skill02"
                        }
                      ]
                    }
                  ],
                  "type": "DefaultDSE",
                  "check": [
                    {
                      "name": "Check Ability Use Condition",
                      "passedValue": 1,
                      "conditions": {
                        "name": "AND",
                        "conditionList": [
                          {
                            "name": "Compare: Variable",
                            "value1": "AIFlag",
                            "compareType": "=",
                            "value2": 21,
                            "contextScope": "TargetEntity"
                          }
                        ]
                      }
                    }
                  ]
                },
                {
                  "name": "HANDLER OPTION",
                  "option": "UseSkill01",
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
                          "value": 31
                        },
                        {
                          "name": "Use Ability Option",
                          "skillName": "Skill05"
                        }
                      ]
                    }
                  ],
                  "type": "DefaultDSE",
                  "check": [
                    {
                      "name": "Check Ability Use Condition",
                      "passedValue": 1,
                      "conditions": {
                        "name": "AND",
                        "conditionList": [
                          {
                            "name": "Compare: Variable",
                            "value1": "AIFlag",
                            "compareType": "=",
                            "value2": 22,
                            "contextScope": "TargetEntity"
                          }
                        ]
                      }
                    }
                  ]
                },
                {
                  "name": "HANDLER OPTION",
                  "option": "UseSkill01",
                  "goal": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Target Count",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Enemy Team All}}"
                        },
                        "compareType": "=",
                        "value2": 1,
                        "livingTargets": true
                      },
                      "passed": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"763823194\">OneMore</a>"
                        },
                        {
                          "name": "Declare Custom Variable",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "scope": "TargetEntity",
                          "variableName": "AIFlag",
                          "value": 9
                        },
                        {
                          "name": "Declare Custom Variable",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "scope": "TargetEntity",
                          "variableName": "SAIFlag",
                          "value": 1
                        },
                        {
                          "name": "Use Ability Option",
                          "skillName": "Skill01"
                        }
                      ],
                      "failed": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"763823194\">OneMore</a>"
                        },
                        {
                          "name": "Declare Custom Variable",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "scope": "TargetEntity",
                          "variableName": "AIFlag",
                          "value": 9
                        },
                        {
                          "name": "Declare Custom Variable",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "scope": "TargetEntity",
                          "variableName": "SAIFlag",
                          "value": 1
                        },
                        {
                          "name": "Use Ability Option",
                          "skillName": "Skill16"
                        }
                      ]
                    }
                  ],
                  "type": "DefaultDSE",
                  "check": [
                    {
                      "name": "Check Ability Use Condition",
                      "passedValue": 1,
                      "conditions": {
                        "name": "AND",
                        "conditionList": [
                          {
                            "name": "Compare: Variable",
                            "value1": "AIFlag",
                            "compareType": "=",
                            "value2": 31,
                            "contextScope": "TargetEntity"
                          }
                        ]
                      }
                    }
                  ]
                }
              ],
              "type": "DefaultDSE",
              "check": [
                {
                  "name": "Check Ability Use Condition",
                  "passedValue": 1,
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Compare: Variable",
                        "value1": "SAIFlag",
                        "compareType": "=",
                        "value2": 2,
                        "contextScope": "TargetEntity"
                      }
                    ]
                  }
                }
              ]
            }
          ],
          "type": "DefaultDSE",
          "check": [
            {
              "name": "Check Ability Use Condition",
              "passedValue": 1,
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Compare: Variable",
                    "value1": "HP_Bars_Remaining",
                    "compareType": "=",
                    "value2": 1
                  }
                ]
              }
            }
          ]
        },
        {
          "name": "HANDLER OPTION GROUP",
          "option": "Monster_W2_Argenti_00_IF_Phase01",
          "goal": [
            {
              "name": "HANDLER OPTION GROUP",
              "option": "Monster_W2_Argenti_00_IF_Phase01",
              "goal": [
                {
                  "name": "HANDLER OPTION",
                  "option": "UseSkill01",
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
                          "name": "Use Ability Option",
                          "skillName": "Skill11"
                        }
                      ]
                    }
                  ],
                  "type": "DefaultDSE",
                  "check": [
                    {
                      "name": "Check Ability Use Condition",
                      "passedValue": 1,
                      "conditions": {
                        "name": "AND",
                        "conditionList": [
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
                  "option": "UseSkill01",
                  "goal": [
                    {
                      "name": "Sequence Event",
                      "passed": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"763823194\">OneMore</a>"
                        },
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
                          "name": "Use Ability Option",
                          "skillName": "Skill11"
                        }
                      ]
                    }
                  ],
                  "type": "DefaultDSE",
                  "check": [
                    {
                      "name": "Check Ability Use Condition",
                      "passedValue": 1,
                      "conditions": {
                        "name": "AND",
                        "conditionList": [
                          {
                            "name": "Compare: Variable",
                            "value1": "AIFlag",
                            "compareType": "=",
                            "value2": 9,
                            "contextScope": "TargetEntity"
                          }
                        ]
                      }
                    }
                  ]
                },
                {
                  "name": "HANDLER OPTION",
                  "option": "UseSkill01",
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
                          "value": 11
                        },
                        {
                          "name": "Use Ability Option",
                          "skillName": "Skill14"
                        }
                      ]
                    }
                  ],
                  "type": "DefaultDSE",
                  "check": [
                    {
                      "name": "Check Ability Use Condition",
                      "passedValue": 1,
                      "conditions": {
                        "name": "AND",
                        "conditionList": [
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
                  "option": "UseSkill01",
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
                          "value": 12
                        },
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Compare: Target Count",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Enemy Team All}}"
                            },
                            "compareType": ">=",
                            "value2": 5,
                            "livingTargets": true
                          },
                          "passed": [
                            {
                              "name": "Use Ability Option",
                              "skillName": "Skill14"
                            }
                          ],
                          "failed": [
                            {
                              "name": "Use Ability Option",
                              "skillName": "Skill11"
                            }
                          ]
                        }
                      ]
                    }
                  ],
                  "type": "DefaultDSE",
                  "check": [
                    {
                      "name": "Check Ability Use Condition",
                      "passedValue": 1,
                      "conditions": {
                        "name": "AND",
                        "conditionList": [
                          {
                            "name": "Compare: Variable",
                            "value1": "AIFlag",
                            "compareType": "=",
                            "value2": 11,
                            "contextScope": "TargetEntity"
                          }
                        ]
                      }
                    }
                  ]
                },
                {
                  "name": "HANDLER OPTION",
                  "option": "UseSkill01",
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
                          "value": 21
                        },
                        {
                          "name": "Use Ability Option",
                          "skillName": "Skill01"
                        }
                      ]
                    }
                  ],
                  "type": "DefaultDSE",
                  "check": [
                    {
                      "name": "Check Ability Use Condition",
                      "passedValue": 1,
                      "conditions": {
                        "name": "AND",
                        "conditionList": [
                          {
                            "name": "Compare: Variable",
                            "value1": "AIFlag",
                            "compareType": "=",
                            "value2": 12,
                            "contextScope": "TargetEntity"
                          }
                        ]
                      }
                    }
                  ]
                },
                {
                  "name": "HANDLER OPTION",
                  "option": "UseSkill01",
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
                          "value": 22
                        },
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Compare: Target Count",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Enemy Team All}}"
                            },
                            "compareType": ">=",
                            "value2": 5,
                            "livingTargets": true
                          },
                          "passed": [
                            {
                              "name": "Use Ability Option",
                              "skillName": "Skill14"
                            }
                          ],
                          "failed": [
                            {
                              "name": "Use Ability Option",
                              "skillName": "Skill11"
                            }
                          ]
                        }
                      ]
                    }
                  ],
                  "type": "DefaultDSE",
                  "check": [
                    {
                      "name": "Check Ability Use Condition",
                      "passedValue": 1,
                      "conditions": {
                        "name": "AND",
                        "conditionList": [
                          {
                            "name": "Compare: Variable",
                            "value1": "AIFlag",
                            "compareType": "=",
                            "value2": 21,
                            "contextScope": "TargetEntity"
                          }
                        ]
                      }
                    }
                  ]
                },
                {
                  "name": "HANDLER OPTION",
                  "option": "UseSkill01",
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
                          "value": 31
                        },
                        {
                          "name": "Use Ability Option",
                          "skillName": "Skill01"
                        }
                      ]
                    }
                  ],
                  "type": "DefaultDSE",
                  "check": [
                    {
                      "name": "Check Ability Use Condition",
                      "passedValue": 1,
                      "conditions": {
                        "name": "AND",
                        "conditionList": [
                          {
                            "name": "Compare: Variable",
                            "value1": "AIFlag",
                            "compareType": "=",
                            "value2": 22,
                            "contextScope": "TargetEntity"
                          }
                        ]
                      }
                    }
                  ]
                },
                {
                  "name": "HANDLER OPTION",
                  "option": "UseSkill01",
                  "goal": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Target Count",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Enemy Team All}}"
                        },
                        "compareType": "=",
                        "value2": 1,
                        "livingTargets": true
                      },
                      "passed": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"763823194\">OneMore</a>"
                        },
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
                          "name": "Declare Custom Variable",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "scope": "TargetEntity",
                          "variableName": "SAIFlag",
                          "value": 3
                        },
                        {
                          "name": "Use Ability Option",
                          "skillName": "Skill01"
                        }
                      ],
                      "failed": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"763823194\">OneMore</a>"
                        },
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
                          "name": "Declare Custom Variable",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "scope": "TargetEntity",
                          "variableName": "SAIFlag",
                          "value": 3
                        },
                        {
                          "name": "Use Ability Option",
                          "skillName": "Skill16"
                        }
                      ]
                    }
                  ],
                  "type": "DefaultDSE",
                  "check": [
                    {
                      "name": "Check Ability Use Condition",
                      "passedValue": 1,
                      "conditions": {
                        "name": "AND",
                        "conditionList": [
                          {
                            "name": "Compare: Variable",
                            "value1": "AIFlag",
                            "compareType": "=",
                            "value2": 31,
                            "contextScope": "TargetEntity"
                          }
                        ]
                      }
                    }
                  ]
                }
              ],
              "type": "DefaultDSE",
              "check": [
                {
                  "name": "Check Ability Use Condition",
                  "passedValue": 1,
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Compare: Variable",
                        "value1": "SAIFlag",
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
              "name": "HANDLER OPTION GROUP",
              "option": "Monster_W2_Argenti_00_IF_Phase01",
              "goal": [
                {
                  "name": "HANDLER OPTION",
                  "option": "UseSkill01",
                  "goal": [
                    {
                      "name": "Sequence Event",
                      "passed": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"763823194\">OneMore</a>"
                        },
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
                          "name": "Use Ability Option",
                          "skillName": "Skill12"
                        }
                      ]
                    }
                  ],
                  "type": "DefaultDSE",
                  "check": [
                    {
                      "name": "Check Ability Use Condition",
                      "passedValue": 1,
                      "conditions": {
                        "name": "AND",
                        "conditionList": [
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
                  "option": "UseSkill01",
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
                          "value": 11
                        },
                        {
                          "name": "Use Ability Option",
                          "skillName": "Skill15"
                        }
                      ]
                    }
                  ],
                  "type": "DefaultDSE",
                  "check": [
                    {
                      "name": "Check Ability Use Condition",
                      "passedValue": 1,
                      "conditions": {
                        "name": "AND",
                        "conditionList": [
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
                  "option": "UseSkill01",
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
                          "value": 12
                        },
                        {
                          "name": "Use Ability Option",
                          "skillName": "Skill02"
                        }
                      ]
                    }
                  ],
                  "type": "DefaultDSE",
                  "check": [
                    {
                      "name": "Check Ability Use Condition",
                      "passedValue": 1,
                      "conditions": {
                        "name": "AND",
                        "conditionList": [
                          {
                            "name": "Compare: Variable",
                            "value1": "AIFlag",
                            "compareType": "=",
                            "value2": 11,
                            "contextScope": "TargetEntity"
                          }
                        ]
                      }
                    }
                  ]
                },
                {
                  "name": "HANDLER OPTION",
                  "option": "UseSkill01",
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
                          "value": 21
                        },
                        {
                          "name": "Use Ability Option",
                          "skillName": "Skill05"
                        }
                      ]
                    }
                  ],
                  "type": "DefaultDSE",
                  "check": [
                    {
                      "name": "Check Ability Use Condition",
                      "passedValue": 1,
                      "conditions": {
                        "name": "AND",
                        "conditionList": [
                          {
                            "name": "Compare: Variable",
                            "value1": "AIFlag",
                            "compareType": "=",
                            "value2": 12,
                            "contextScope": "TargetEntity"
                          }
                        ]
                      }
                    }
                  ]
                },
                {
                  "name": "HANDLER OPTION",
                  "option": "UseSkill01",
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
                          "value": 22
                        },
                        {
                          "name": "Use Ability Option",
                          "skillName": "Skill02"
                        }
                      ]
                    }
                  ],
                  "type": "DefaultDSE",
                  "check": [
                    {
                      "name": "Check Ability Use Condition",
                      "passedValue": 1,
                      "conditions": {
                        "name": "AND",
                        "conditionList": [
                          {
                            "name": "Compare: Variable",
                            "value1": "AIFlag",
                            "compareType": "=",
                            "value2": 21,
                            "contextScope": "TargetEntity"
                          }
                        ]
                      }
                    }
                  ]
                },
                {
                  "name": "HANDLER OPTION",
                  "option": "UseSkill01",
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
                          "value": 31
                        },
                        {
                          "name": "Use Ability Option",
                          "skillName": "Skill05"
                        }
                      ]
                    }
                  ],
                  "type": "DefaultDSE",
                  "check": [
                    {
                      "name": "Check Ability Use Condition",
                      "passedValue": 1,
                      "conditions": {
                        "name": "AND",
                        "conditionList": [
                          {
                            "name": "Compare: Variable",
                            "value1": "AIFlag",
                            "compareType": "=",
                            "value2": 22,
                            "contextScope": "TargetEntity"
                          }
                        ]
                      }
                    }
                  ]
                },
                {
                  "name": "HANDLER OPTION",
                  "option": "UseSkill01",
                  "goal": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Target Count",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Enemy Team All}}"
                        },
                        "compareType": "=",
                        "value2": 1,
                        "livingTargets": true
                      },
                      "passed": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"763823194\">OneMore</a>"
                        },
                        {
                          "name": "Declare Custom Variable",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "scope": "TargetEntity",
                          "variableName": "AIFlag",
                          "value": 9
                        },
                        {
                          "name": "Declare Custom Variable",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "scope": "TargetEntity",
                          "variableName": "SAIFlag",
                          "value": 1
                        },
                        {
                          "name": "Use Ability Option",
                          "skillName": "Skill01"
                        }
                      ],
                      "failed": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"763823194\">OneMore</a>"
                        },
                        {
                          "name": "Declare Custom Variable",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "scope": "TargetEntity",
                          "variableName": "AIFlag",
                          "value": 9
                        },
                        {
                          "name": "Declare Custom Variable",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "scope": "TargetEntity",
                          "variableName": "SAIFlag",
                          "value": 1
                        },
                        {
                          "name": "Use Ability Option",
                          "skillName": "Skill16"
                        }
                      ]
                    }
                  ],
                  "type": "DefaultDSE",
                  "check": [
                    {
                      "name": "Check Ability Use Condition",
                      "passedValue": 1,
                      "conditions": {
                        "name": "AND",
                        "conditionList": [
                          {
                            "name": "Compare: Variable",
                            "value1": "AIFlag",
                            "compareType": "=",
                            "value2": 31,
                            "contextScope": "TargetEntity"
                          }
                        ]
                      }
                    }
                  ]
                }
              ],
              "type": "DefaultDSE",
              "check": [
                {
                  "name": "Check Ability Use Condition",
                  "passedValue": 1,
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Compare: Variable",
                        "value1": "SAIFlag",
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
              "name": "HANDLER OPTION GROUP",
              "option": "Monster_W2_Argenti_00_IF_Phase01",
              "goal": [
                {
                  "name": "HANDLER OPTION",
                  "option": "UseSkill01",
                  "goal": [
                    {
                      "name": "Sequence Event",
                      "passed": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"763823194\">OneMore</a>"
                        },
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
                          "name": "Use Ability Option",
                          "skillName": "Skill13"
                        }
                      ]
                    }
                  ],
                  "type": "DefaultDSE",
                  "check": [
                    {
                      "name": "Check Ability Use Condition",
                      "passedValue": 1,
                      "conditions": {
                        "name": "AND",
                        "conditionList": [
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
                  "option": "UseSkill01",
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
                            "modifier": "<a class=\"gModGreen\" id=\"763823194\">OneMore</a>",
                            "invertCondition": true
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
                              "value": 3
                            },
                            {
                              "name": "Define Custom Variable",
                              "scope": "TargetEntity",
                              "variableName": "AccumulateFlag",
                              "value": 1
                            },
                            {
                              "name": "Use Ability Option",
                              "skillName": "Skill09"
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
                              "value": 2
                            },
                            {
                              "name": "Use Ability Option",
                              "skillName": "Skill01"
                            }
                          ]
                        }
                      ]
                    }
                  ],
                  "type": "DefaultDSE",
                  "check": [
                    {
                      "name": "Check Ability Use Condition",
                      "passedValue": 1,
                      "conditions": {
                        "name": "AND",
                        "conditionList": [
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
                  "option": "UseSkill01",
                  "goal": [
                    {
                      "name": "Sequence Event",
                      "passed": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"763823194\">OneMore</a>"
                        },
                        {
                          "name": "Declare Custom Variable",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "scope": "TargetEntity",
                          "variableName": "AIFlag",
                          "value": 31
                        },
                        {
                          "name": "Define Custom Variable",
                          "scope": "TargetEntity",
                          "variableName": "AccumulateFlag",
                          "value": 0
                        },
                        {
                          "name": "Use Ability Option",
                          "skillName": "Skill10"
                        }
                      ]
                    }
                  ],
                  "type": "DefaultDSE",
                  "check": [
                    {
                      "name": "Check Ability Use Condition",
                      "passedValue": 1,
                      "conditions": {
                        "name": "AND",
                        "conditionList": [
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
                  "option": "UseSkill01",
                  "goal": [
                    {
                      "name": "Sequence Event",
                      "passed": [
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Compare: Target Count",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Enemy Team All}}"
                            },
                            "compareType": "=",
                            "value2": 1,
                            "livingTargets": true
                          },
                          "passed": [
                            {
                              "name": "Add Events/Bonuses",
                              "to": {
                                "name": "Target Name",
                                "target": "{{Caster}}"
                              },
                              "modifier": "<a class=\"gModGreen\" id=\"763823194\">OneMore</a>"
                            },
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
                              "name": "IF",
                              "conditions": {
                                "name": "Compare: Variable",
                                "value1": "SAIFlag",
                                "compareType": "=",
                                "value2": 3,
                                "contextScope": "TargetEntity"
                              },
                              "passed": [
                                {
                                  "name": "Declare Custom Variable",
                                  "target": {
                                    "name": "Target Name",
                                    "target": "{{Caster}}"
                                  },
                                  "scope": "TargetEntity",
                                  "variableName": "SAIFlag",
                                  "value": 2
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
                                  "variableName": "SAIFlag",
                                  "value": 1
                                }
                              ]
                            },
                            {
                              "name": "Use Ability Option",
                              "skillName": "Skill01"
                            }
                          ],
                          "failed": [
                            {
                              "name": "Add Events/Bonuses",
                              "to": {
                                "name": "Target Name",
                                "target": "{{Caster}}"
                              },
                              "modifier": "<a class=\"gModGreen\" id=\"763823194\">OneMore</a>"
                            },
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
                              "name": "IF",
                              "conditions": {
                                "name": "Compare: Variable",
                                "value1": "SAIFlag",
                                "compareType": "=",
                                "value2": 3,
                                "contextScope": "TargetEntity"
                              },
                              "passed": [
                                {
                                  "name": "Declare Custom Variable",
                                  "target": {
                                    "name": "Target Name",
                                    "target": "{{Caster}}"
                                  },
                                  "scope": "TargetEntity",
                                  "variableName": "SAIFlag",
                                  "value": 2
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
                                  "variableName": "SAIFlag",
                                  "value": 1
                                }
                              ]
                            },
                            {
                              "name": "Use Ability Option",
                              "skillName": "Skill16"
                            }
                          ]
                        }
                      ]
                    }
                  ],
                  "type": "DefaultDSE",
                  "check": [
                    {
                      "name": "Check Ability Use Condition",
                      "passedValue": 1,
                      "conditions": {
                        "name": "AND",
                        "conditionList": [
                          {
                            "name": "Compare: Variable",
                            "value1": "AIFlag",
                            "compareType": "=",
                            "value2": 31,
                            "contextScope": "TargetEntity"
                          }
                        ]
                      }
                    }
                  ]
                }
              ],
              "type": "DefaultDSE",
              "check": [
                {
                  "name": "Check Ability Use Condition",
                  "passedValue": 1,
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Compare: Variable",
                        "value1": "SAIFlag",
                        "compareType": ">=",
                        "value2": 3,
                        "contextScope": "TargetEntity"
                      }
                    ]
                  }
                }
              ]
            }
          ],
          "type": "DefaultDSE",
          "check": [
            {
              "name": "Check Ability Use Condition",
              "passedValue": 1,
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Compare: Variable",
                    "value1": "HP_Bars_Remaining",
                    "compareType": "=",
                    "value2": 2
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