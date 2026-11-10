const configAbility = {
  "fileName": "1002021_Handling",
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
          "value": "DG_010_Phase01"
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
          "optionName": "UseSkill01",
          "optionGoal": {
            "name": "Sequence Event",
            "execute": [
              {
                "name": "IF",
                "conditions": {
                  "name": "Compare: Variable",
                  "value1": "Monster_W1_Soldier01_03_AICounter_01",
                  "compareType": "=",
                  "value2": 5,
                  "contextScope": "TargetEntity"
                },
                "passed": [
                  {
                    "name": "Define Custom Variable",
                    "value": 3,
                    "variableName": "Monster_W1_Soldier01_03_AICounter_01"
                  }
                ]
              },
              {
                "name": "IF",
                "conditions": {
                  "name": "Compare: Variable",
                  "value1": "Monster_W1_Soldier01_03_AICounter_01",
                  "compareType": "=",
                  "value2": 6,
                  "contextScope": "TargetEntity"
                },
                "passed": [
                  {
                    "name": "Define Custom Variable",
                    "value": 4,
                    "variableName": "Monster_W1_Soldier01_03_AICounter_01"
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
                "name": "OR",
                "conditionList": [
                  {
                    "name": "Compare: Variable",
                    "value1": "Monster_W1_Soldier01_03_AICounter_01",
                    "compareType": "=",
                    "value2": 2,
                    "contextScope": "TargetEntity"
                  },
                  {
                    "name": "Compare: Variable",
                    "value1": "Monster_W1_Soldier01_03_AICounter_01",
                    "compareType": "=",
                    "value2": 5,
                    "contextScope": "TargetEntity"
                  },
                  {
                    "name": "Compare: Variable",
                    "value1": "Monster_W1_Soldier01_03_AICounter_01",
                    "compareType": "=",
                    "value2": 6,
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
          "optionName": "UseSkill02",
          "optionGoal": {
            "name": "Sequence Event",
            "execute": [
              {
                "name": "Choose Ability Target",
                "skillName": "Skill02",
                "target": {
                  "name": "Select by Enemy ID",
                  "idList": [
                    101201012
                  ]
                }
              },
              {
                "name": "Define Custom Variable",
                "value": 0,
                "variableName": "Monster_W1_Soldier01_03_AICounter_01"
              },
              {
                "name": "Use Ability Option",
                "skillName": "Skill02"
              }
            ]
          },
          "scoreType": "DefaultDSE",
          "optionWeight": 0.99,
          "optionCheck": [
            {
              "name": "Check Ability Use Condition",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "Monster_W1_Soldier01_03_AICounter_01",
                "compareType": "=",
                "value2": 1,
                "contextScope": "TargetEntity"
              },
              "passedValue": 0.99
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
                "name": "Choose Ability Target",
                "skillName": "Skill02",
                "target": {
                  "name": "Select by Enemy ID",
                  "idList": [
                    101201014
                  ]
                }
              },
              {
                "name": "Define Custom Variable",
                "value": 1,
                "variableName": "Monster_W1_Soldier01_03_AICounter_01"
              },
              {
                "name": "Use Ability Option",
                "skillName": "Skill02"
              }
            ]
          },
          "scoreType": "DefaultDSE",
          "optionWeight": 0.99,
          "optionCheck": [
            {
              "name": "Check Ability Use Condition",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "Monster_W1_Soldier01_03_AICounter_01",
                "compareType": "=",
                "value2": 0,
                "contextScope": "TargetEntity"
              },
              "passedValue": 0.99
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
                "name": "Choose Ability Target",
                "skillName": "Skill02",
                "target": {
                  "name": "Select by Enemy ID",
                  "idList": [
                    101201012
                  ]
                }
              },
              {
                "name": "Define Custom Variable",
                "value": 5,
                "variableName": "Monster_W1_Soldier01_03_AICounter_01"
              },
              {
                "name": "Use Ability Option",
                "skillName": "Skill02"
              }
            ]
          },
          "scoreType": "DefaultDSE",
          "optionWeight": 0.99,
          "optionCheck": [
            {
              "name": "Check Ability Use Condition",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "Monster_W1_Soldier01_03_AICounter_01",
                "compareType": "=",
                "value2": 3,
                "contextScope": "TargetEntity"
              },
              "passedValue": 0.99
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
                "name": "Choose Ability Target",
                "skillName": "Skill02",
                "target": {
                  "name": "Select by Enemy ID",
                  "idList": [
                    101201014
                  ]
                }
              },
              {
                "name": "Define Custom Variable",
                "value": 6,
                "variableName": "Monster_W1_Soldier01_03_AICounter_01"
              },
              {
                "name": "Use Ability Option",
                "skillName": "Skill02"
              }
            ]
          },
          "scoreType": "DefaultDSE",
          "optionWeight": 0.99,
          "optionCheck": [
            {
              "name": "Check Ability Use Condition",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "Monster_W1_Soldier01_03_AICounter_01",
                "compareType": "=",
                "value2": 4,
                "contextScope": "TargetEntity"
              },
              "passedValue": 0.99
            }
          ]
        }
      ]
    }
  ],
  "references": []
}