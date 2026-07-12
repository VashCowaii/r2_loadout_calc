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
          "option": "UseSkill01",
          "goal": [
            {
              "name": "Sequence Event",
              "passed": [
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
                      "variableName": "Monster_W1_Soldier01_03_AICounter_01",
                      "value": 3
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
                      "variableName": "Monster_W1_Soldier01_03_AICounter_01",
                      "value": 4
                    }
                  ]
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
              }
            }
          ]
        },
        {
          "name": "HANDLER OPTION",
          "option": "UseSkill02",
          "goal": [
            {
              "name": "Sequence Event",
              "passed": [
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
                  "variableName": "Monster_W1_Soldier01_03_AICounter_01",
                  "value": 0
                },
                {
                  "name": "Use Ability Option",
                  "skillName": "Skill02"
                }
              ]
            }
          ],
          "weight": 0.99,
          "type": "DefaultDSE",
          "check": [
            {
              "name": "Check Ability Use Condition",
              "passedValue": 0.99,
              "conditions": {
                "name": "Compare: Variable",
                "value1": "Monster_W1_Soldier01_03_AICounter_01",
                "compareType": "=",
                "value2": 1,
                "contextScope": "TargetEntity"
              }
            }
          ]
        },
        {
          "name": "HANDLER OPTION",
          "option": "UseSkill02",
          "goal": [
            {
              "name": "Sequence Event",
              "passed": [
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
                  "variableName": "Monster_W1_Soldier01_03_AICounter_01",
                  "value": 1
                },
                {
                  "name": "Use Ability Option",
                  "skillName": "Skill02"
                }
              ]
            }
          ],
          "weight": 0.99,
          "type": "DefaultDSE",
          "check": [
            {
              "name": "Check Ability Use Condition",
              "passedValue": 0.99,
              "conditions": {
                "name": "Compare: Variable",
                "value1": "Monster_W1_Soldier01_03_AICounter_01",
                "compareType": "=",
                "value2": 0,
                "contextScope": "TargetEntity"
              }
            }
          ]
        },
        {
          "name": "HANDLER OPTION",
          "option": "UseSkill02",
          "goal": [
            {
              "name": "Sequence Event",
              "passed": [
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
                  "variableName": "Monster_W1_Soldier01_03_AICounter_01",
                  "value": 5
                },
                {
                  "name": "Use Ability Option",
                  "skillName": "Skill02"
                }
              ]
            }
          ],
          "weight": 0.99,
          "type": "DefaultDSE",
          "check": [
            {
              "name": "Check Ability Use Condition",
              "passedValue": 0.99,
              "conditions": {
                "name": "Compare: Variable",
                "value1": "Monster_W1_Soldier01_03_AICounter_01",
                "compareType": "=",
                "value2": 3,
                "contextScope": "TargetEntity"
              }
            }
          ]
        },
        {
          "name": "HANDLER OPTION",
          "option": "UseSkill02",
          "goal": [
            {
              "name": "Sequence Event",
              "passed": [
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
                  "variableName": "Monster_W1_Soldier01_03_AICounter_01",
                  "value": 6
                },
                {
                  "name": "Use Ability Option",
                  "skillName": "Skill02"
                }
              ]
            }
          ],
          "weight": 0.99,
          "type": "DefaultDSE",
          "check": [
            {
              "name": "Check Ability Use Condition",
              "passedValue": 0.99,
              "conditions": {
                "name": "Compare: Variable",
                "value1": "Monster_W1_Soldier01_03_AICounter_01",
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