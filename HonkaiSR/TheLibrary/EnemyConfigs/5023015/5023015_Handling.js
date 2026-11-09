const configAbility = {
  "fileName": "5023015_Handling",
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
          "name": "Define Handler Boolean",
          "variableName": "ForbidClearSkillUseRecord",
          "value": true
        }
      ],
      "options": [
        {
          "name": "HANDLER OPTION GROUP",
          "optionGroupName": "new phase",
          "optionGroupGoal": [
            {
              "name": "HANDLER OPTION",
              "optionName": "UseSkill02",
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
                        "value": 2
                      },
                      {
                        "name": "Use Ability Option",
                        "skillName": "Skill01"
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
                        "value": 3
                      },
                      {
                        "name": "Use Ability Option",
                        "skillName": "Skill02"
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
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "value1": "AIFlag",
                    "compareType": "=",
                    "value2": 2,
                    "contextScope": "TargetEntity"
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
                    "scope": "TargetEntity",
                    "variableName": "AIFlag",
                    "value": 2
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
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "value1": "AIFlag",
                    "compareType": "=",
                    "value2": 10,
                    "contextScope": "TargetEntity"
                  },
                  "passedValue": 1
                }
              ]
            },
            {
              "name": "HANDLER OPTION",
              "optionName": "UseSkill03",
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
                        "skillName": "Skill03"
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
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "value1": "AIFlag",
                    "compareType": "=",
                    "value2": 4,
                    "contextScope": "TargetEntity"
                  },
                  "passedValue": 1
                }
              ]
            },
            {
              "name": "HANDLER OPTION",
              "optionName": "UseSkill02",
              "optionGoal": {
                "name": "Sequence Event",
                "execute": [
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
                    "skillName": "Skill02"
                  }
                ]
              },
              "scoreType": "DefaultDSE",
              "optionCheck": [
                {
                  "name": "Check Ability Use Condition",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "value1": "AIFlag",
                    "compareType": "=",
                    "value2": 1,
                    "contextScope": "TargetEntity"
                  },
                  "passedValue": 1
                }
              ]
            },
            {
              "name": "HANDLER OPTION",
              "optionName": "UseSkill04",
              "optionGoal": {
                "name": "Sequence Event",
                "execute": [
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
                    "name": "Use Ability Option",
                    "skillName": "Skill04"
                  }
                ]
              },
              "scoreType": "DefaultDSE",
              "optionCheck": [
                {
                  "name": "Check Ability Use Condition",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "value1": "AIFlag",
                    "compareType": "=",
                    "value2": 5,
                    "contextScope": "TargetEntity"
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
                        "value": 8
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
                        "value": 7
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
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "value1": "AIFlag",
                    "compareType": "=",
                    "value2": 6,
                    "contextScope": "TargetEntity"
                  },
                  "passedValue": 1
                }
              ]
            },
            {
              "name": "HANDLER OPTION",
              "optionName": "UseSkill02",
              "optionGoal": {
                "name": "Sequence Event",
                "execute": [
                  {
                    "name": "Declare Custom Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "scope": "TargetEntity",
                    "variableName": "AIFlag",
                    "value": 8
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
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "value1": "AIFlag",
                    "compareType": "=",
                    "value2": 7,
                    "contextScope": "TargetEntity"
                  },
                  "passedValue": 1
                }
              ]
            },
            {
              "name": "HANDLER OPTION",
              "optionName": "UseSkill03",
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
                        "value": 8
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
                        "skillName": "Skill03"
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
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "value1": "AIFlag",
                    "compareType": "=",
                    "value2": 8,
                    "contextScope": "TargetEntity"
                  },
                  "passedValue": 1
                }
              ]
            }
          ],
          "scoreType": "DefaultDSE"
        }
      ]
    }
  ],
  "references": []
}