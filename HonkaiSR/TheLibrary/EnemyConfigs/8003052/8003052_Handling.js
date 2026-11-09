const configAbility = {
  "fileName": "8003052_Handling",
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
          "value": "RO_015_Phase01"
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
          "optionName": "UseSkill03",
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
                "variableName": "Monster_AML_Elite01_01_AICounter_01",
                "value": 4
              },
              {
                "name": "Declare Custom Variable",
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "scope": "TargetEntity",
                "variableName": "Monster_AML_Elite01_01_AICounter_02",
                "value": 1
              },
              {
                "name": "Use Ability Option",
                "skillName": "Skill03"
              }
            ]
          },
          "scoreType": "DefaultDSE",
          "optionWeight": 0.5,
          "optionCheck": [
            {
              "name": "Check Ability Use Condition",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Compare: Variable",
                    "value1": "Monster_AML_Elite01_01_AICounter_01",
                    "compareType": "=",
                    "value2": 3,
                    "contextScope": "TargetEntity"
                  },
                  {
                    "name": "Compare: Variable",
                    "value1": "Monster_AML_Elite01_01_AICounter_02",
                    "compareType": "=",
                    "value2": 1,
                    "contextScope": "TargetEntity"
                  }
                ]
              },
              "passedValue": 0.5
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
                    "variableName": "Monster_AML_Elite01_01_AICounter_01",
                    "value": 4
                  },
                  {
                    "name": "Declare Custom Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "scope": "TargetEntity",
                    "variableName": "Monster_AML_Elite01_01_AICounter_02",
                    "value": 1
                  },
                  {
                    "name": "Use Ability Option",
                    "skillName": "Skill03"
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
                    "variableName": "Monster_AML_Elite01_01_AICounter_01",
                    "value": 5
                  },
                  {
                    "name": "Declare Custom Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "scope": "TargetEntity",
                    "variableName": "Monster_AML_Elite01_01_AICounter_02",
                    "value": 2
                  },
                  {
                    "name": "Use Ability Option",
                    "skillName": "Skill04"
                  }
                ]
              }
            ]
          },
          "scoreType": "DefaultDSE",
          "optionWeight": 0.9,
          "optionCheck": [
            {
              "name": "Check Ability Use Condition",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Compare: Variable",
                    "value1": "Monster_AML_Elite01_01_AICounter_01",
                    "compareType": "=",
                    "value2": 4,
                    "contextScope": "TargetEntity"
                  },
                  {
                    "name": "Compare: Variable",
                    "value1": "Monster_AML_Elite01_01_AICounter_02",
                    "compareType": "=",
                    "value2": 1,
                    "contextScope": "TargetEntity"
                  }
                ]
              },
              "passedValue": 0.5
            }
          ]
        },
        {
          "name": "HANDLER OPTION",
          "optionName": "UseSkill05",
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
                "variableName": "Monster_AML_Elite01_01_AICounter_01",
                "value": 1
              },
              {
                "name": "Declare Custom Variable",
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "scope": "TargetEntity",
                "variableName": "Monster_AML_Elite01_01_AICounter_02",
                "value": 3
              },
              {
                "name": "IF",
                "conditions": {
                  "name": "Compare: Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Player Team All}}"
                  },
                  "value1": "TeamCharacterCount",
                  "compareType": ">=",
                  "value2": 1,
                  "conditions": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"-940158065\">Enemy_AML_Elite01_01_DOTAim</a>[<span class=\"descriptionNumberColor\">Lock On</span>]"
                  }
                },
                "passed": [
                  {
                    "name": "Use Ability Option",
                    "skillName": "Skill05"
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
          },
          "scoreType": "DefaultDSE",
          "optionWeight": 0.5,
          "optionCheck": [
            {
              "name": "Check Ability Use Condition",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Compare: Variable",
                    "value1": "Monster_AML_Elite01_01_AICounter_01",
                    "compareType": "=",
                    "value2": 5,
                    "contextScope": "TargetEntity"
                  },
                  {
                    "name": "Compare: Variable",
                    "value1": "Monster_AML_Elite01_01_AICounter_02",
                    "compareType": "=",
                    "value2": 2,
                    "contextScope": "TargetEntity"
                  }
                ]
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
                "scope": "TargetEntity",
                "variableName": "Monster_AML_Elite01_01_AICounter_01",
                "value": 4
              },
              {
                "name": "Declare Custom Variable",
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "scope": "TargetEntity",
                "variableName": "Monster_AML_Elite01_01_AICounter_02",
                "value": 1
              },
              {
                "name": "Use Ability Option",
                "skillName": "Skill01"
              }
            ]
          },
          "scoreType": "DefaultDSE",
          "optionWeight": 0.9,
          "optionCheck": [
            {
              "name": "Check Ability Use Condition",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Compare: Variable",
                    "value1": "Monster_AML_Elite01_01_AICounter_01",
                    "compareType": "=",
                    "value2": 1,
                    "contextScope": "TargetEntity"
                  },
                  {
                    "name": "Compare: Variable",
                    "value1": "Monster_AML_Elite01_01_AICounter_02",
                    "compareType": "=",
                    "value2": 3,
                    "contextScope": "TargetEntity"
                  }
                ]
              },
              "passedValue": 0.5
            }
          ]
        },
        {
          "name": "HANDLER OPTION",
          "optionName": "UseSkill01-2",
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
                    "variableName": "Monster_AML_Elite01_01_AICounter_01",
                    "value": 4
                  },
                  {
                    "name": "Declare Custom Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "scope": "TargetEntity",
                    "variableName": "Monster_AML_Elite01_01_AICounter_02",
                    "value": 1
                  },
                  {
                    "name": "Use Ability Option",
                    "skillName": "Skill03"
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
                    "variableName": "Monster_AML_Elite01_01_AICounter_01",
                    "value": 4
                  },
                  {
                    "name": "Declare Custom Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "scope": "TargetEntity",
                    "variableName": "Monster_AML_Elite01_01_AICounter_02",
                    "value": 1
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
          "optionWeight": 0.9,
          "optionCheck": [
            {
              "name": "Check Ability Use Condition",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Compare: Variable",
                    "value1": "Monster_AML_Elite01_01_AICounter_01",
                    "compareType": "=",
                    "value2": 11,
                    "contextScope": "TargetEntity"
                  },
                  {
                    "name": "Compare: Variable",
                    "value1": "Monster_AML_Elite01_01_AICounter_02",
                    "compareType": "=",
                    "value2": 3,
                    "contextScope": "TargetEntity"
                  }
                ]
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