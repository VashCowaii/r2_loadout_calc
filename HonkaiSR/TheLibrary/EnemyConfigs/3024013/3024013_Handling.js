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
          "optionGroupName": "Monster_W2_Argenti_00_IF_Phase01",
          "optionGroupGoal": [
            {
              "name": "HANDLER OPTION GROUP",
              "optionGroupName": "Monster_W2_Argenti_00_IF_Phase01",
              "optionGroupGoal": [
                {
                  "name": "HANDLER OPTION",
                  "optionName": "UseSkill01",
                  "optionGoal": {
                    "name": "Sequence Event",
                    "execute": [
                      {
                        "name": "Declare Custom Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        "variableName": "AIFlag",
                        "resetValue": 2,
                        "scope": "TargetEntity"
                      },
                      {
                        "name": "Use Ability Option",
                        "skillName": "Skill11"
                      }
                    ]
                  },
                  "scoreType": "DefaultDSE",
                  "optionCheck": [
                    {
                      "name": "Check Ability Use Condition",
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
                      },
                      "passedValue": 1
                    }
                  ]
                },
                {
                  "name": "HANDLER OPTION",
                  "optionName": "UseSkill01",
                  "optionGoal": {
                    "name": "Sequence Event",
                    "execute": [
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
                        "variableName": "AIFlag",
                        "resetValue": 2,
                        "scope": "TargetEntity"
                      },
                      {
                        "name": "Use Ability Option",
                        "skillName": "Skill11"
                      }
                    ]
                  },
                  "scoreType": "DefaultDSE",
                  "optionCheck": [
                    {
                      "name": "Check Ability Use Condition",
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
                      },
                      "passedValue": 1
                    }
                  ]
                },
                {
                  "name": "HANDLER OPTION",
                  "optionName": "UseSkill01",
                  "optionGoal": {
                    "name": "Sequence Event",
                    "execute": [
                      {
                        "name": "Declare Custom Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        "variableName": "AIFlag",
                        "resetValue": 11,
                        "scope": "TargetEntity"
                      },
                      {
                        "name": "Use Ability Option",
                        "skillName": "Skill14"
                      }
                    ]
                  },
                  "scoreType": "DefaultDSE",
                  "optionCheck": [
                    {
                      "name": "Check Ability Use Condition",
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
                      },
                      "passedValue": 1
                    }
                  ]
                },
                {
                  "name": "HANDLER OPTION",
                  "optionName": "UseSkill01",
                  "optionGoal": {
                    "name": "Sequence Event",
                    "execute": [
                      {
                        "name": "Declare Custom Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        "variableName": "AIFlag",
                        "resetValue": 12,
                        "scope": "TargetEntity"
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
                  },
                  "scoreType": "DefaultDSE",
                  "optionCheck": [
                    {
                      "name": "Check Ability Use Condition",
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
                      },
                      "passedValue": 1
                    }
                  ]
                },
                {
                  "name": "HANDLER OPTION",
                  "optionName": "UseSkill01",
                  "optionGoal": {
                    "name": "Sequence Event",
                    "execute": [
                      {
                        "name": "Declare Custom Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        "variableName": "AIFlag",
                        "resetValue": 21,
                        "scope": "TargetEntity"
                      },
                      {
                        "name": "Use Ability Option",
                        "skillName": "Skill01"
                      }
                    ]
                  },
                  "scoreType": "DefaultDSE",
                  "optionCheck": [
                    {
                      "name": "Check Ability Use Condition",
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
                      },
                      "passedValue": 1
                    }
                  ]
                },
                {
                  "name": "HANDLER OPTION",
                  "optionName": "UseSkill01",
                  "optionGoal": {
                    "name": "Sequence Event",
                    "execute": [
                      {
                        "name": "Declare Custom Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        "variableName": "AIFlag",
                        "resetValue": 22,
                        "scope": "TargetEntity"
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
                  },
                  "scoreType": "DefaultDSE",
                  "optionCheck": [
                    {
                      "name": "Check Ability Use Condition",
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
                      },
                      "passedValue": 1
                    }
                  ]
                },
                {
                  "name": "HANDLER OPTION",
                  "optionName": "UseSkill01",
                  "optionGoal": {
                    "name": "Sequence Event",
                    "execute": [
                      {
                        "name": "Declare Custom Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        "variableName": "AIFlag",
                        "resetValue": 31,
                        "scope": "TargetEntity"
                      },
                      {
                        "name": "Use Ability Option",
                        "skillName": "Skill01"
                      }
                    ]
                  },
                  "scoreType": "DefaultDSE",
                  "optionCheck": [
                    {
                      "name": "Check Ability Use Condition",
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
                      },
                      "passedValue": 1
                    }
                  ]
                },
                {
                  "name": "HANDLER OPTION",
                  "optionName": "UseSkill01",
                  "optionGoal": {
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
                        "variableName": "AIFlag",
                        "resetValue": 1,
                        "scope": "TargetEntity"
                      },
                      {
                        "name": "Declare Custom Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        "variableName": "SAIFlag",
                        "resetValue": 2,
                        "scope": "TargetEntity"
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
                        "variableName": "AIFlag",
                        "resetValue": 1,
                        "scope": "TargetEntity"
                      },
                      {
                        "name": "Declare Custom Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        "variableName": "SAIFlag",
                        "resetValue": 2,
                        "scope": "TargetEntity"
                      },
                      {
                        "name": "Use Ability Option",
                        "skillName": "Skill16"
                      }
                    ]
                  },
                  "scoreType": "DefaultDSE",
                  "optionCheck": [
                    {
                      "name": "Check Ability Use Condition",
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
                      },
                      "passedValue": 1
                    }
                  ]
                }
              ],
              "scoreType": "DefaultDSE",
              "optionCheck": [
                {
                  "name": "Check Ability Use Condition",
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
                  },
                  "passedValue": 1
                }
              ]
            },
            {
              "name": "HANDLER OPTION GROUP",
              "optionGroupName": "Monster_W2_Argenti_00_IF_Phase01",
              "optionGroupGoal": [
                {
                  "name": "HANDLER OPTION",
                  "optionName": "UseSkill01",
                  "optionGoal": {
                    "name": "Sequence Event",
                    "execute": [
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
                        "variableName": "AIFlag",
                        "resetValue": 2,
                        "scope": "TargetEntity"
                      },
                      {
                        "name": "Use Ability Option",
                        "skillName": "Skill12"
                      }
                    ]
                  },
                  "scoreType": "DefaultDSE",
                  "optionCheck": [
                    {
                      "name": "Check Ability Use Condition",
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
                      },
                      "passedValue": 1
                    }
                  ]
                },
                {
                  "name": "HANDLER OPTION",
                  "optionName": "UseSkill01",
                  "optionGoal": {
                    "name": "Sequence Event",
                    "execute": [
                      {
                        "name": "Declare Custom Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        "variableName": "AIFlag",
                        "resetValue": 11,
                        "scope": "TargetEntity"
                      },
                      {
                        "name": "Use Ability Option",
                        "skillName": "Skill15"
                      }
                    ]
                  },
                  "scoreType": "DefaultDSE",
                  "optionCheck": [
                    {
                      "name": "Check Ability Use Condition",
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
                      },
                      "passedValue": 1
                    }
                  ]
                },
                {
                  "name": "HANDLER OPTION",
                  "optionName": "UseSkill01",
                  "optionGoal": {
                    "name": "Sequence Event",
                    "execute": [
                      {
                        "name": "Declare Custom Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        "variableName": "AIFlag",
                        "resetValue": 12,
                        "scope": "TargetEntity"
                      },
                      {
                        "name": "Use Ability Option",
                        "skillName": "Skill02"
                      }
                    ]
                  },
                  "scoreType": "DefaultDSE",
                  "optionCheck": [
                    {
                      "name": "Check Ability Use Condition",
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
                      },
                      "passedValue": 1
                    }
                  ]
                },
                {
                  "name": "HANDLER OPTION",
                  "optionName": "UseSkill01",
                  "optionGoal": {
                    "name": "Sequence Event",
                    "execute": [
                      {
                        "name": "Declare Custom Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        "variableName": "AIFlag",
                        "resetValue": 21,
                        "scope": "TargetEntity"
                      },
                      {
                        "name": "Use Ability Option",
                        "skillName": "Skill05"
                      }
                    ]
                  },
                  "scoreType": "DefaultDSE",
                  "optionCheck": [
                    {
                      "name": "Check Ability Use Condition",
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
                      },
                      "passedValue": 1
                    }
                  ]
                },
                {
                  "name": "HANDLER OPTION",
                  "optionName": "UseSkill01",
                  "optionGoal": {
                    "name": "Sequence Event",
                    "execute": [
                      {
                        "name": "Declare Custom Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        "variableName": "AIFlag",
                        "resetValue": 22,
                        "scope": "TargetEntity"
                      },
                      {
                        "name": "Use Ability Option",
                        "skillName": "Skill02"
                      }
                    ]
                  },
                  "scoreType": "DefaultDSE",
                  "optionCheck": [
                    {
                      "name": "Check Ability Use Condition",
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
                      },
                      "passedValue": 1
                    }
                  ]
                },
                {
                  "name": "HANDLER OPTION",
                  "optionName": "UseSkill01",
                  "optionGoal": {
                    "name": "Sequence Event",
                    "execute": [
                      {
                        "name": "Declare Custom Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        "variableName": "AIFlag",
                        "resetValue": 31,
                        "scope": "TargetEntity"
                      },
                      {
                        "name": "Use Ability Option",
                        "skillName": "Skill05"
                      }
                    ]
                  },
                  "scoreType": "DefaultDSE",
                  "optionCheck": [
                    {
                      "name": "Check Ability Use Condition",
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
                      },
                      "passedValue": 1
                    }
                  ]
                },
                {
                  "name": "HANDLER OPTION",
                  "optionName": "UseSkill01",
                  "optionGoal": {
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
                        "variableName": "AIFlag",
                        "resetValue": 9,
                        "scope": "TargetEntity"
                      },
                      {
                        "name": "Declare Custom Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        "variableName": "SAIFlag",
                        "resetValue": 1,
                        "scope": "TargetEntity"
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
                        "variableName": "AIFlag",
                        "resetValue": 9,
                        "scope": "TargetEntity"
                      },
                      {
                        "name": "Declare Custom Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        "variableName": "SAIFlag",
                        "resetValue": 1,
                        "scope": "TargetEntity"
                      },
                      {
                        "name": "Use Ability Option",
                        "skillName": "Skill16"
                      }
                    ]
                  },
                  "scoreType": "DefaultDSE",
                  "optionCheck": [
                    {
                      "name": "Check Ability Use Condition",
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
                      },
                      "passedValue": 1
                    }
                  ]
                }
              ],
              "scoreType": "DefaultDSE",
              "optionCheck": [
                {
                  "name": "Check Ability Use Condition",
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
                  },
                  "passedValue": 1
                }
              ]
            }
          ],
          "scoreType": "DefaultDSE",
          "optionCheck": [
            {
              "name": "Check Ability Use Condition",
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
              },
              "passedValue": 1
            }
          ]
        },
        {
          "name": "HANDLER OPTION GROUP",
          "optionGroupName": "Monster_W2_Argenti_00_IF_Phase01",
          "optionGroupGoal": [
            {
              "name": "HANDLER OPTION GROUP",
              "optionGroupName": "Monster_W2_Argenti_00_IF_Phase01",
              "optionGroupGoal": [
                {
                  "name": "HANDLER OPTION",
                  "optionName": "UseSkill01",
                  "optionGoal": {
                    "name": "Sequence Event",
                    "execute": [
                      {
                        "name": "Declare Custom Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        "variableName": "AIFlag",
                        "resetValue": 2,
                        "scope": "TargetEntity"
                      },
                      {
                        "name": "Use Ability Option",
                        "skillName": "Skill11"
                      }
                    ]
                  },
                  "scoreType": "DefaultDSE",
                  "optionCheck": [
                    {
                      "name": "Check Ability Use Condition",
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
                      },
                      "passedValue": 1
                    }
                  ]
                },
                {
                  "name": "HANDLER OPTION",
                  "optionName": "UseSkill01",
                  "optionGoal": {
                    "name": "Sequence Event",
                    "execute": [
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
                        "variableName": "AIFlag",
                        "resetValue": 2,
                        "scope": "TargetEntity"
                      },
                      {
                        "name": "Use Ability Option",
                        "skillName": "Skill11"
                      }
                    ]
                  },
                  "scoreType": "DefaultDSE",
                  "optionCheck": [
                    {
                      "name": "Check Ability Use Condition",
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
                      },
                      "passedValue": 1
                    }
                  ]
                },
                {
                  "name": "HANDLER OPTION",
                  "optionName": "UseSkill01",
                  "optionGoal": {
                    "name": "Sequence Event",
                    "execute": [
                      {
                        "name": "Declare Custom Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        "variableName": "AIFlag",
                        "resetValue": 11,
                        "scope": "TargetEntity"
                      },
                      {
                        "name": "Use Ability Option",
                        "skillName": "Skill14"
                      }
                    ]
                  },
                  "scoreType": "DefaultDSE",
                  "optionCheck": [
                    {
                      "name": "Check Ability Use Condition",
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
                      },
                      "passedValue": 1
                    }
                  ]
                },
                {
                  "name": "HANDLER OPTION",
                  "optionName": "UseSkill01",
                  "optionGoal": {
                    "name": "Sequence Event",
                    "execute": [
                      {
                        "name": "Declare Custom Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        "variableName": "AIFlag",
                        "resetValue": 12,
                        "scope": "TargetEntity"
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
                  },
                  "scoreType": "DefaultDSE",
                  "optionCheck": [
                    {
                      "name": "Check Ability Use Condition",
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
                      },
                      "passedValue": 1
                    }
                  ]
                },
                {
                  "name": "HANDLER OPTION",
                  "optionName": "UseSkill01",
                  "optionGoal": {
                    "name": "Sequence Event",
                    "execute": [
                      {
                        "name": "Declare Custom Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        "variableName": "AIFlag",
                        "resetValue": 21,
                        "scope": "TargetEntity"
                      },
                      {
                        "name": "Use Ability Option",
                        "skillName": "Skill01"
                      }
                    ]
                  },
                  "scoreType": "DefaultDSE",
                  "optionCheck": [
                    {
                      "name": "Check Ability Use Condition",
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
                      },
                      "passedValue": 1
                    }
                  ]
                },
                {
                  "name": "HANDLER OPTION",
                  "optionName": "UseSkill01",
                  "optionGoal": {
                    "name": "Sequence Event",
                    "execute": [
                      {
                        "name": "Declare Custom Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        "variableName": "AIFlag",
                        "resetValue": 22,
                        "scope": "TargetEntity"
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
                  },
                  "scoreType": "DefaultDSE",
                  "optionCheck": [
                    {
                      "name": "Check Ability Use Condition",
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
                      },
                      "passedValue": 1
                    }
                  ]
                },
                {
                  "name": "HANDLER OPTION",
                  "optionName": "UseSkill01",
                  "optionGoal": {
                    "name": "Sequence Event",
                    "execute": [
                      {
                        "name": "Declare Custom Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        "variableName": "AIFlag",
                        "resetValue": 31,
                        "scope": "TargetEntity"
                      },
                      {
                        "name": "Use Ability Option",
                        "skillName": "Skill01"
                      }
                    ]
                  },
                  "scoreType": "DefaultDSE",
                  "optionCheck": [
                    {
                      "name": "Check Ability Use Condition",
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
                      },
                      "passedValue": 1
                    }
                  ]
                },
                {
                  "name": "HANDLER OPTION",
                  "optionName": "UseSkill01",
                  "optionGoal": {
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
                        "variableName": "AIFlag",
                        "resetValue": 1,
                        "scope": "TargetEntity"
                      },
                      {
                        "name": "Declare Custom Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        "variableName": "SAIFlag",
                        "resetValue": 3,
                        "scope": "TargetEntity"
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
                        "variableName": "AIFlag",
                        "resetValue": 1,
                        "scope": "TargetEntity"
                      },
                      {
                        "name": "Declare Custom Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        "variableName": "SAIFlag",
                        "resetValue": 3,
                        "scope": "TargetEntity"
                      },
                      {
                        "name": "Use Ability Option",
                        "skillName": "Skill16"
                      }
                    ]
                  },
                  "scoreType": "DefaultDSE",
                  "optionCheck": [
                    {
                      "name": "Check Ability Use Condition",
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
                      },
                      "passedValue": 1
                    }
                  ]
                }
              ],
              "scoreType": "DefaultDSE",
              "optionCheck": [
                {
                  "name": "Check Ability Use Condition",
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
                  },
                  "passedValue": 1
                }
              ]
            },
            {
              "name": "HANDLER OPTION GROUP",
              "optionGroupName": "Monster_W2_Argenti_00_IF_Phase01",
              "optionGroupGoal": [
                {
                  "name": "HANDLER OPTION",
                  "optionName": "UseSkill01",
                  "optionGoal": {
                    "name": "Sequence Event",
                    "execute": [
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
                        "variableName": "AIFlag",
                        "resetValue": 2,
                        "scope": "TargetEntity"
                      },
                      {
                        "name": "Use Ability Option",
                        "skillName": "Skill12"
                      }
                    ]
                  },
                  "scoreType": "DefaultDSE",
                  "optionCheck": [
                    {
                      "name": "Check Ability Use Condition",
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
                      },
                      "passedValue": 1
                    }
                  ]
                },
                {
                  "name": "HANDLER OPTION",
                  "optionName": "UseSkill01",
                  "optionGoal": {
                    "name": "Sequence Event",
                    "execute": [
                      {
                        "name": "Declare Custom Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        "variableName": "AIFlag",
                        "resetValue": 11,
                        "scope": "TargetEntity"
                      },
                      {
                        "name": "Use Ability Option",
                        "skillName": "Skill15"
                      }
                    ]
                  },
                  "scoreType": "DefaultDSE",
                  "optionCheck": [
                    {
                      "name": "Check Ability Use Condition",
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
                      },
                      "passedValue": 1
                    }
                  ]
                },
                {
                  "name": "HANDLER OPTION",
                  "optionName": "UseSkill01",
                  "optionGoal": {
                    "name": "Sequence Event",
                    "execute": [
                      {
                        "name": "Declare Custom Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        "variableName": "AIFlag",
                        "resetValue": 12,
                        "scope": "TargetEntity"
                      },
                      {
                        "name": "Use Ability Option",
                        "skillName": "Skill02"
                      }
                    ]
                  },
                  "scoreType": "DefaultDSE",
                  "optionCheck": [
                    {
                      "name": "Check Ability Use Condition",
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
                      },
                      "passedValue": 1
                    }
                  ]
                },
                {
                  "name": "HANDLER OPTION",
                  "optionName": "UseSkill01",
                  "optionGoal": {
                    "name": "Sequence Event",
                    "execute": [
                      {
                        "name": "Declare Custom Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        "variableName": "AIFlag",
                        "resetValue": 21,
                        "scope": "TargetEntity"
                      },
                      {
                        "name": "Use Ability Option",
                        "skillName": "Skill05"
                      }
                    ]
                  },
                  "scoreType": "DefaultDSE",
                  "optionCheck": [
                    {
                      "name": "Check Ability Use Condition",
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
                      },
                      "passedValue": 1
                    }
                  ]
                },
                {
                  "name": "HANDLER OPTION",
                  "optionName": "UseSkill01",
                  "optionGoal": {
                    "name": "Sequence Event",
                    "execute": [
                      {
                        "name": "Declare Custom Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        "variableName": "AIFlag",
                        "resetValue": 22,
                        "scope": "TargetEntity"
                      },
                      {
                        "name": "Use Ability Option",
                        "skillName": "Skill02"
                      }
                    ]
                  },
                  "scoreType": "DefaultDSE",
                  "optionCheck": [
                    {
                      "name": "Check Ability Use Condition",
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
                      },
                      "passedValue": 1
                    }
                  ]
                },
                {
                  "name": "HANDLER OPTION",
                  "optionName": "UseSkill01",
                  "optionGoal": {
                    "name": "Sequence Event",
                    "execute": [
                      {
                        "name": "Declare Custom Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        "variableName": "AIFlag",
                        "resetValue": 31,
                        "scope": "TargetEntity"
                      },
                      {
                        "name": "Use Ability Option",
                        "skillName": "Skill05"
                      }
                    ]
                  },
                  "scoreType": "DefaultDSE",
                  "optionCheck": [
                    {
                      "name": "Check Ability Use Condition",
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
                      },
                      "passedValue": 1
                    }
                  ]
                },
                {
                  "name": "HANDLER OPTION",
                  "optionName": "UseSkill01",
                  "optionGoal": {
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
                        "variableName": "AIFlag",
                        "resetValue": 9,
                        "scope": "TargetEntity"
                      },
                      {
                        "name": "Declare Custom Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        "variableName": "SAIFlag",
                        "resetValue": 1,
                        "scope": "TargetEntity"
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
                        "variableName": "AIFlag",
                        "resetValue": 9,
                        "scope": "TargetEntity"
                      },
                      {
                        "name": "Declare Custom Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        "variableName": "SAIFlag",
                        "resetValue": 1,
                        "scope": "TargetEntity"
                      },
                      {
                        "name": "Use Ability Option",
                        "skillName": "Skill16"
                      }
                    ]
                  },
                  "scoreType": "DefaultDSE",
                  "optionCheck": [
                    {
                      "name": "Check Ability Use Condition",
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
                      },
                      "passedValue": 1
                    }
                  ]
                }
              ],
              "scoreType": "DefaultDSE",
              "optionCheck": [
                {
                  "name": "Check Ability Use Condition",
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
                  },
                  "passedValue": 1
                }
              ]
            },
            {
              "name": "HANDLER OPTION GROUP",
              "optionGroupName": "Monster_W2_Argenti_00_IF_Phase01",
              "optionGroupGoal": [
                {
                  "name": "HANDLER OPTION",
                  "optionName": "UseSkill01",
                  "optionGoal": {
                    "name": "Sequence Event",
                    "execute": [
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
                        "variableName": "AIFlag",
                        "resetValue": 2,
                        "scope": "TargetEntity"
                      },
                      {
                        "name": "Use Ability Option",
                        "skillName": "Skill13"
                      }
                    ]
                  },
                  "scoreType": "DefaultDSE",
                  "optionCheck": [
                    {
                      "name": "Check Ability Use Condition",
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
                      },
                      "passedValue": 1
                    }
                  ]
                },
                {
                  "name": "HANDLER OPTION",
                  "optionName": "UseSkill01",
                  "optionGoal": {
                    "name": "Sequence Event",
                    "execute": [
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
                            "variableName": "AIFlag",
                            "resetValue": 3,
                            "scope": "TargetEntity"
                          },
                          {
                            "name": "Define Custom Variable",
                            "variableName": "AccumulateFlag",
                            "value": 1,
                            "scope": "TargetEntity"
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
                            "variableName": "AIFlag",
                            "resetValue": 2,
                            "scope": "TargetEntity"
                          },
                          {
                            "name": "Use Ability Option",
                            "skillName": "Skill01"
                          }
                        ]
                      }
                    ]
                  },
                  "scoreType": "DefaultDSE",
                  "optionCheck": [
                    {
                      "name": "Check Ability Use Condition",
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
                      },
                      "passedValue": 1
                    }
                  ]
                },
                {
                  "name": "HANDLER OPTION",
                  "optionName": "UseSkill01",
                  "optionGoal": {
                    "name": "Sequence Event",
                    "execute": [
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
                        "variableName": "AIFlag",
                        "resetValue": 31,
                        "scope": "TargetEntity"
                      },
                      {
                        "name": "Define Custom Variable",
                        "variableName": "AccumulateFlag",
                        "value": 0,
                        "scope": "TargetEntity"
                      },
                      {
                        "name": "Use Ability Option",
                        "skillName": "Skill10"
                      }
                    ]
                  },
                  "scoreType": "DefaultDSE",
                  "optionCheck": [
                    {
                      "name": "Check Ability Use Condition",
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
                      },
                      "passedValue": 1
                    }
                  ]
                },
                {
                  "name": "HANDLER OPTION",
                  "optionName": "UseSkill01",
                  "optionGoal": {
                    "name": "Sequence Event",
                    "execute": [
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
                            "variableName": "AIFlag",
                            "resetValue": 1,
                            "scope": "TargetEntity"
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
                                "variableName": "SAIFlag",
                                "resetValue": 2,
                                "scope": "TargetEntity"
                              }
                            ],
                            "failed": [
                              {
                                "name": "Declare Custom Variable",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Caster}}"
                                },
                                "variableName": "SAIFlag",
                                "resetValue": 1,
                                "scope": "TargetEntity"
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
                            "variableName": "AIFlag",
                            "resetValue": 1,
                            "scope": "TargetEntity"
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
                                "variableName": "SAIFlag",
                                "resetValue": 2,
                                "scope": "TargetEntity"
                              }
                            ],
                            "failed": [
                              {
                                "name": "Declare Custom Variable",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Caster}}"
                                },
                                "variableName": "SAIFlag",
                                "resetValue": 1,
                                "scope": "TargetEntity"
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
                  },
                  "scoreType": "DefaultDSE",
                  "optionCheck": [
                    {
                      "name": "Check Ability Use Condition",
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
                      },
                      "passedValue": 1
                    }
                  ]
                }
              ],
              "scoreType": "DefaultDSE",
              "optionCheck": [
                {
                  "name": "Check Ability Use Condition",
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
                  },
                  "passedValue": 1
                }
              ]
            }
          ],
          "scoreType": "DefaultDSE",
          "optionCheck": [
            {
              "name": "Check Ability Use Condition",
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
              },
              "passedValue": 1
            }
          ]
        }
      ]
    }
  ],
  "references": []
}