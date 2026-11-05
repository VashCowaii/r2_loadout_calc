const configAbility = {
  "fileName": "4033012_Handling",
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
          "value": "XP_Elite01_01_Phase01"
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
            "passed": [
              {
                "name": "IF",
                "conditions": {
                  "name": "AND",
                  "conditionList": [
                    {
                      "name": "Compare: Target Count",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster's Minions}}"
                      },
                      "compareType": "=",
                      "value2": 0,
                      "livingTargets": true
                    },
                    {
                      "name": "Compare: Variable",
                      "value1": "HP_Bars_Remaining",
                      "compareType": "=",
                      "value2": 2
                    }
                  ]
                },
                "passed": [
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
                      "value1": "SkillStep",
                      "compareType": "=",
                      "value2": 0
                    },
                    "passed": [
                      {
                        "name": "Define Custom Variable",
                        "variableName": "SkillStep",
                        "value": 1
                      },
                      {
                        "name": "Use Ability Option",
                        "skillName": "Skill01"
                      }
                    ],
                    "failed": [
                      {
                        "name": "Define Custom Variable",
                        "variableName": "SkillStep",
                        "value": 0
                      },
                      {
                        "name": "Use Ability Option",
                        "skillName": "Skill02"
                      }
                    ]
                  }
                ]
              },
              {
                "name": "Declare Custom Variable",
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "variableName": "AIFlag",
                "value": 2
              }
            ]
          },
          "scoreType": "DefaultDSE",
          "optionCheck": [
            {
              "name": "Check Ability Use Condition",
              "passedValue": 0.5,
              "conditions": {
                "name": "Compare: Variable",
                "value1": "AIFlag",
                "compareType": "=",
                "value2": 1
              }
            }
          ]
        },
        {
          "name": "HANDLER OPTION",
          "optionName": "Decision02",
          "optionGoal": {
            "name": "Sequence Event",
            "passed": [
              {
                "name": "IF",
                "conditions": {
                  "name": "AND",
                  "conditionList": [
                    {
                      "name": "Compare: Target Count",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster's Minions}}"
                      },
                      "compareType": "=",
                      "value2": 0,
                      "livingTargets": true
                    },
                    {
                      "name": "Compare: Variable",
                      "value1": "HP_Bars_Remaining",
                      "compareType": "=",
                      "value2": 2
                    }
                  ]
                },
                "passed": [
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
                      "value1": "SkillStep",
                      "compareType": "=",
                      "value2": 0
                    },
                    "passed": [
                      {
                        "name": "Define Custom Variable",
                        "variableName": "SkillStep",
                        "value": 1
                      },
                      {
                        "name": "Use Ability Option",
                        "skillName": "Skill01"
                      }
                    ],
                    "failed": [
                      {
                        "name": "Define Custom Variable",
                        "variableName": "SkillStep",
                        "value": 0
                      },
                      {
                        "name": "Use Ability Option",
                        "skillName": "Skill02"
                      }
                    ]
                  }
                ]
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
                    "name": "Declare Custom Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "variableName": "AIFlag",
                    "value": 1
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
                    "value": 3
                  }
                ]
              }
            ]
          },
          "scoreType": "DefaultDSE",
          "optionCheck": [
            {
              "name": "Check Ability Use Condition",
              "passedValue": 0.5,
              "conditions": {
                "name": "Compare: Variable",
                "value1": "AIFlag",
                "compareType": "=",
                "value2": 2,
                "contextScope": "TargetEntity"
              }
            }
          ]
        },
        {
          "name": "HANDLER OPTION",
          "optionName": "Decision03",
          "optionGoal": {
            "name": "Sequence Event",
            "passed": [
              {
                "name": "IF",
                "conditions": {
                  "name": "AND",
                  "conditionList": [
                    {
                      "name": "Compare: Target Count",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster's Minions}}"
                      },
                      "compareType": "=",
                      "value2": 0,
                      "livingTargets": true
                    },
                    {
                      "name": "Compare: Variable",
                      "value1": "HP_Bars_Remaining",
                      "compareType": "=",
                      "value2": 2
                    }
                  ]
                },
                "passed": [
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
                      "value1": "SkillStep",
                      "compareType": "=",
                      "value2": 0
                    },
                    "passed": [
                      {
                        "name": "Define Custom Variable",
                        "variableName": "SkillStep",
                        "value": 1
                      },
                      {
                        "name": "Use Ability Option",
                        "skillName": "Skill01"
                      }
                    ],
                    "failed": [
                      {
                        "name": "Define Custom Variable",
                        "variableName": "SkillStep",
                        "value": 0
                      },
                      {
                        "name": "Use Ability Option",
                        "skillName": "Skill02"
                      }
                    ]
                  }
                ]
              },
              {
                "name": "Declare Custom Variable",
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "variableName": "AIFlag",
                "value": 4
              }
            ]
          },
          "scoreType": "DefaultDSE",
          "optionCheck": [
            {
              "name": "Check Ability Use Condition",
              "passedValue": 0.5,
              "conditions": {
                "name": "Compare: Variable",
                "value1": "AIFlag",
                "compareType": "=",
                "value2": 3
              }
            }
          ]
        },
        {
          "name": "HANDLER OPTION",
          "optionName": "Decision05",
          "optionGoal": {
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
                "skillName": "Skill05"
              }
            ]
          },
          "scoreType": "DefaultDSE",
          "optionCheck": [
            {
              "name": "Check Ability Use Condition",
              "passedValue": 0.5,
              "conditions": {
                "name": "Compare: Variable",
                "value1": "AIFlag",
                "compareType": "=",
                "value2": 4,
                "contextScope": "TargetEntity"
              }
            }
          ]
        }
      ]
    }
  ],
  "references": []
}