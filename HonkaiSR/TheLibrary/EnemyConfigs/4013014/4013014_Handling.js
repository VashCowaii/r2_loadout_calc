const configAbility = {
  "fileName": "4013014_Handling",
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
                "variableName": "AIFlag",
                "value": 1
              },
              {
                "name": "Use Ability Option",
                "skillName": "Skill06"
              }
            ]
          },
          "scoreType": "DefaultDSE",
          "optionCheck": [
            {
              "name": "Check Ability Use Condition",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "AIFlag",
                "compareType": "=",
                "value2": 0
              },
              "passedValue": 0.5
            }
          ]
        },
        {
          "name": "HANDLER OPTION",
          "optionName": "Decision01",
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
                  "modifier": "<a class=\"gModGreen\" id=\"544728190\">MModifier_Monster_W4_Claymore_LocalLegend_Part3</a>",
                  "invertCondition": true
                },
                "passed": [
                  {
                    "name": "Define Custom Variable with Added Value",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "variableName": "AIFlag",
                    "value": 1,
                    "min": 1,
                    "max": 2
                  }
                ],
                "failed": [
                  {
                    "name": "Define Custom Variable with Added Value",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "variableName": "AIFlag",
                    "value": 1,
                    "min": 1,
                    "max": 4
                  }
                ]
              },
              {
                "name": "IF",
                "conditions": {
                  "name": "AND",
                  "conditionList": [
                    {
                      "name": "Compare: Target Count",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Enemy Team All}}"
                      },
                      "compareType": "<=",
                      "value2": 3,
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
                    "skillName": "Skill05"
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
                    "compareType": ">=",
                    "value2": 1
                  },
                  {
                    "name": "Compare: Variable",
                    "value1": "AIFlag",
                    "compareType": "<=",
                    "value2": 3
                  }
                ]
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
                "name": "Declare Custom Variable",
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "variableName": "AIFlag",
                "value": 5
              },
              {
                "name": "Use Ability Option",
                "skillName": "Skill03"
              }
            ]
          },
          "scoreType": "DefaultDSE",
          "optionCheck": [
            {
              "name": "Check Ability Use Condition",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "AIFlag",
                "compareType": "=",
                "value2": 4
              },
              "passedValue": 0.5
            }
          ]
        },
        {
          "name": "HANDLER OPTION",
          "optionName": "Decision05",
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
                "value1": "AIFlag",
                "compareType": "=",
                "value2": 5,
                "contextScope": "TargetEntity"
              },
              "passedValue": 0.5
            }
          ]
        },
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
                "scope": "TargetEntity",
                "variableName": "AIFlag",
                "value": 1
              },
              {
                "name": "IF",
                "conditions": {
                  "name": "AND",
                  "conditionList": [
                    {
                      "name": "Compare: Target Count",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Enemy Team All}}"
                      },
                      "compareType": "<=",
                      "value2": 3,
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
                    "skillName": "Skill05"
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
              }
            ]
          },
          "scoreType": "DefaultDSE",
          "optionCheck": [
            {
              "name": "Check Ability Use Condition",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "AIFlag",
                "compareType": "=",
                "value2": 6
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