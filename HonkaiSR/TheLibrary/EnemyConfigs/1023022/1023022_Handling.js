const configAbility = {
  "fileName": "1023022_Handling",
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
          "value": "Monster_W1_Mecha03_Phase01"
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
          "optionName": "Decision01",
          "optionGoal": {
            "name": "Sequence Event",
            "execute": [
              {
                "name": "Declare Custom Variable",
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "variableName": "Monster_W1_Mecha03_01_AICounter_01",
                "resetValue": 2,
                "scope": "TargetEntity"
              },
              {
                "name": "Use Ability Option",
                "skillName": "Skill10"
              }
            ]
          },
          "scoreType": "DefaultDSE",
          "optionWeight": 0.5,
          "optionCheck": [
            {
              "name": "Check Ability Use Condition",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "Monster_W1_Mecha03_01_AICounter_01",
                "compareType": "=",
                "value2": 1,
                "contextScope": "TargetEntity"
              },
              "passedValue": 0.5
            }
          ]
        },
        {
          "name": "HANDLER OPTION",
          "optionName": "Decision02",
          "optionGoal": {
            "name": "Sequence Event",
            "execute": [
              {
                "name": "Declare Custom Variable",
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "variableName": "Monster_W1_Mecha03_01_AICounter_01",
                "resetValue": 1,
                "scope": "TargetEntity"
              },
              {
                "name": "Use Ability Option",
                "skillName": "Skill11"
              }
            ]
          },
          "scoreType": "DefaultDSE",
          "optionWeight": 0.5,
          "optionCheck": [
            {
              "name": "Check Ability Use Condition",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "Monster_W1_Mecha03_01_AICounter_01",
                "compareType": "=",
                "value2": 2,
                "contextScope": "TargetEntity"
              },
              "passedValue": 0.5
            }
          ]
        },
        {
          "name": "HANDLER OPTION",
          "optionName": "Decision03",
          "optionGoal": {
            "name": "Sequence Event",
            "execute": [
              {
                "name": "IF",
                "conditions": {
                  "name": "Compare: Variable",
                  "value1": "Monster_SummonFlag",
                  "compareType": "=",
                  "value2": 1,
                  "contextScope": "TargetEntity"
                },
                "passed": [
                  {
                    "name": "Declare Custom Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "variableName": "Monster_SummonFlag",
                    "scope": "TargetEntity"
                  },
                  {
                    "name": "Declare Custom Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "variableName": "Monster_W1_Mecha03_01_AICounter_01",
                    "resetValue": 4,
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
                    "variableName": "Monster_W1_Mecha03_01_AICounter_01",
                    "resetValue": 8,
                    "scope": "TargetEntity"
                  }
                ]
              },
              {
                "name": "Use Ability Option",
                "skillName": "Skill01"
              }
            ]
          },
          "scoreType": "DefaultDSE",
          "optionWeight": 0.5,
          "optionCheck": [
            {
              "name": "Check Ability Use Condition",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "Monster_W1_Mecha03_01_AICounter_01",
                "compareType": "=",
                "value2": 3,
                "contextScope": "TargetEntity"
              },
              "passedValue": 0.5
            }
          ]
        },
        {
          "name": "HANDLER OPTION",
          "optionName": "Decision04",
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
                    "variableName": "Monster_W1_Mecha03_01_AICounter_01",
                    "resetValue": 8,
                    "scope": "TargetEntity"
                  },
                  {
                    "name": "Use Ability Option",
                    "skillName": "Skill06"
                  }
                ],
                "failed": [
                  {
                    "name": "IF",
                    "conditions": {
                      "name": "Compare: Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster's Minions}}"
                      },
                      "value1": "TeamCharacterCount",
                      "compareType": "<",
                      "value2": 1
                    },
                    "passed": [
                      {
                        "name": "Declare Custom Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        "variableName": "Monster_W1_Mecha03_01_AICounter_01",
                        "resetValue": 9,
                        "scope": "TargetEntity"
                      },
                      {
                        "name": "Use Ability Option",
                        "skillName": "Skill08"
                      }
                    ],
                    "failed": [
                      {
                        "name": "IF",
                        "conditions": {
                          "name": "Compare: Variable",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Caster's Minions}}"
                          },
                          "value1": "TeamCharacterCount",
                          "compareType": "<=",
                          "value2": 2
                        },
                        "passed": [
                          {
                            "name": "Declare Custom Variable",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Caster}}"
                            },
                            "variableName": "Monster_W1_Mecha03_01_AICounter_01",
                            "resetValue": 11,
                            "scope": "TargetEntity"
                          },
                          {
                            "name": "Use Ability Option",
                            "skillName": "Skill10"
                          }
                        ],
                        "failed": [
                          {
                            "name": "Declare Custom Variable",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Caster}}"
                            },
                            "variableName": "Monster_W1_Mecha03_01_AICounter_01",
                            "resetValue": 11,
                            "scope": "TargetEntity"
                          },
                          {
                            "name": "Use Ability Option",
                            "skillName": "Skill10"
                          }
                        ]
                      }
                    ]
                  }
                ]
              }
            ]
          },
          "scoreType": "DefaultDSE",
          "optionWeight": 0.5,
          "optionCheck": [
            {
              "name": "Check Ability Use Condition",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "Monster_W1_Mecha03_01_AICounter_01",
                "compareType": "=",
                "value2": 4,
                "contextScope": "TargetEntity"
              },
              "passedValue": 0.5
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
                "variableName": "Monster_W1_Mecha03_01_AICounter_01",
                "resetValue": 8,
                "scope": "TargetEntity"
              },
              {
                "name": "Use Ability Option",
                "skillName": "Skill01"
              }
            ]
          },
          "scoreType": "DefaultDSE",
          "optionWeight": 0.5,
          "optionCheck": [
            {
              "name": "Check Ability Use Condition",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "Monster_W1_Mecha03_01_AICounter_01",
                "compareType": "=",
                "value2": 9,
                "contextScope": "TargetEntity"
              },
              "passedValue": 0.5
            }
          ]
        },
        {
          "name": "HANDLER OPTION",
          "optionName": "UseSkill09",
          "optionGoal": {
            "name": "Sequence Event",
            "execute": [
              {
                "name": "Choose Ability Target",
                "skillName": "Skill09",
                "target": {
                  "name": "Select by Modifier Name",
                  "modifier": "<a class=\"gModGreen\" id=\"-1421560478\">Monster_W1_Mecha03_01_Sign</a>[<span class=\"descriptionNumberColor\">Lock On</span>]",
                  "target": null
                }
              },
              {
                "name": "Declare Custom Variable",
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "variableName": "Monster_W1_Mecha03_01_AICounter_01",
                "resetValue": 8,
                "scope": "TargetEntity"
              },
              {
                "name": "Use Ability Option",
                "skillName": "Skill09"
              }
            ]
          },
          "scoreType": "DefaultDSE",
          "optionWeight": 0.5,
          "optionCheck": [
            {
              "name": "Check Ability Use Condition",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "Monster_W1_Mecha03_01_AICounter_01",
                "compareType": "=",
                "value2": 7,
                "contextScope": "TargetEntity"
              },
              "passedValue": 0.5
            }
          ]
        },
        {
          "name": "HANDLER OPTION",
          "optionName": "UseSkill09",
          "optionGoal": {
            "name": "Sequence Event",
            "execute": [
              {
                "name": "Declare Custom Variable",
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "variableName": "Monster_W1_Mecha03_01_AICounter_01",
                "resetValue": 8,
                "scope": "TargetEntity"
              },
              {
                "name": "Use Ability Option",
                "skillName": "Skill11"
              }
            ]
          },
          "scoreType": "DefaultDSE",
          "optionWeight": 0.5,
          "optionCheck": [
            {
              "name": "Check Ability Use Condition",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "Monster_W1_Mecha03_01_AICounter_01",
                "compareType": "=",
                "value2": 11,
                "contextScope": "TargetEntity"
              },
              "passedValue": 0.5
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
                  "name": "AND",
                  "conditionList": [
                    {
                      "name": "Compare: Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{All Team Members}}"
                      },
                      "value1": "TeamCharacterCount",
                      "compareType": "<=",
                      "value2": 4
                    },
                    {
                      "name": "Compare: Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster's Minions}}"
                      },
                      "value1": "TeamCharacterCount",
                      "compareType": "=",
                      "value2": 0
                    }
                  ]
                },
                "passed": [
                  {
                    "name": "Declare Custom Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "variableName": "Monster_W1_Mecha03_01_AICounter_01",
                    "resetValue": 3,
                    "scope": "TargetEntity"
                  },
                  {
                    "name": "Declare Custom Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "variableName": "Monster_SummonFlag",
                    "resetValue": 1,
                    "scope": "TargetEntity"
                  },
                  {
                    "name": "Use Ability Option",
                    "skillName": "Skill05"
                  }
                ],
                "failed": [
                  {
                    "name": "Declare Custom Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "variableName": "Monster_W1_Mecha03_01_AICounter_01",
                    "resetValue": 3,
                    "scope": "TargetEntity"
                  },
                  {
                    "name": "Use Ability Option",
                    "skillName": "Skill06"
                  }
                ]
              }
            ]
          },
          "scoreType": "DefaultDSE",
          "optionWeight": 0.5,
          "optionCheck": [
            {
              "name": "Check Ability Use Condition",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "Monster_W1_Mecha03_01_AICounter_01",
                "compareType": "=",
                "value2": 8,
                "contextScope": "TargetEntity"
              },
              "passedValue": 0.5
            }
          ]
        }
      ]
    }
  ],
  "references": []
}