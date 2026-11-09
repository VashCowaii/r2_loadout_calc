const configAbility = {
  "fileName": "4023021_Handling",
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
          "name": "HANDLER OPTION",
          "optionName": "Decision03",
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
                "skillName": "Skill03"
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
                "scope": "TargetEntity",
                "variableName": "AIFlag",
                "value": 3
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