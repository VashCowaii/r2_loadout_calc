const configAbility = {
  "fileName": "4032020_Handling",
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
          "optionName": "UseSkill01",
          "optionGoal": {
            "name": "Sequence Event",
            "execute": [
              {
                "name": "Choose Ability Target",
                "skillName": "Skill01",
                "target": {
                  "name": "Select by Target Pool",
                  "target": {
                    "name": "Target Sequence",
                    "TargetList": [
                      {
                        "name": "Target Name",
                        "target": "{{Player Team All}}"
                      },
                      "Sort by Physical Positioning",
                      {
                        "name": "Target Index",
                        "indexValue": 1
                      }
                    ]
                  }
                }
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
              "passedValue": 0.5,
              "conditions": {
                "name": "Compare: Variable",
                "value1": "SkillIndex",
                "compareType": "=",
                "value2": 1
              }
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
                "skillName": "Skill01",
                "target": {
                  "name": "Select by Target Pool",
                  "target": {
                    "name": "Target Sequence",
                    "TargetList": [
                      {
                        "name": "Target Name",
                        "target": "{{Player Team All}}"
                      },
                      {
                        "name": "Sort by Physical Positioning",
                        "sortByHighest": true
                      },
                      {
                        "name": "Target Index",
                        "indexValue": 1
                      }
                    ]
                  }
                }
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
              "passedValue": 0.5,
              "conditions": {
                "name": "Compare: Variable",
                "value1": "SkillIndex",
                "compareType": "=",
                "value2": 2
              }
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
                "name": "Use Ability Option",
                "skillName": "Skill03"
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
                "value1": "SkillIndex",
                "compareType": "=",
                "value2": 3
              }
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
                "name": "Use Ability Option",
                "skillName": "Skill04"
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
                "value1": "SkillIndex",
                "compareType": "=",
                "value2": 4
              }
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
                "value1": "SkillIndex",
                "compareType": "=",
                "value2": 5
              }
            }
          ]
        }
      ]
    }
  ],
  "references": []
}