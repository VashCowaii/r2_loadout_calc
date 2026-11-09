const configAbility = {
  "fileName": "4012022_Handling",
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
                "name": "Declare Custom Variable",
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "variableName": "AIFlag",
                "resetValue": 2
              },
              {
                "name": "Choose Ability Target",
                "skillName": "Skill01",
                "target": {
                  "name": "Create Selection List",
                  "passed": [
                    {
                      "name": "Select by Target Pool",
                      "target": {
                        "name": "Target Name",
                        "target": "{{All Team Members(Exclude Self)}}"
                      }
                    },
                    {
                      "name": "Select by Modifier Name",
                      "modifier": "<a class=\"gModGreen\" id=\"831434835\">MModifier_Monster_W4_Scholar_LocalLegend_Selected</a>",
                      "target": null
                    }
                  ]
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
              "conditions": {
                "name": "Compare: Variable",
                "value1": "AIFlag",
                "compareType": "=",
                "value2": 1
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
                "value1": "AIFlag",
                "compareType": "=",
                "value2": 2
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