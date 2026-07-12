const configAbility = {
  "fileName": "3003015_Handling",
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
          "value": "TV_00_Phase01"
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
          "option": "Skill07",
          "goal": [
            {
              "name": "Sequence Event",
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "scope": "TargetEntity",
                  "variableName": "AIFlag",
                  "value": 1
                },
                {
                  "name": "Use Ability Option",
                  "skillName": "Skill07"
                }
              ]
            }
          ],
          "type": "DefaultDSE",
          "check": [
            {
              "name": "Check Ability Use Condition",
              "passedValue": 0.5,
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Compare: Variable",
                    "value1": "FlopSide",
                    "compareType": "=",
                    "value2": 1,
                    "contextScope": "TargetEntity"
                  }
                ]
              }
            }
          ]
        },
        {
          "name": "HANDLER OPTION",
          "option": "Skill02",
          "goal": [
            {
              "name": "Sequence Event",
              "passed": [
                {
                  "name": "Use Ability Option",
                  "skillName": "Skill02"
                }
              ]
            }
          ],
          "type": "DefaultDSE",
          "check": [
            {
              "name": "Check Ability Use Condition",
              "passedValue": 0.5,
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"763823194\">OneMore</a>",
                    "invertCondition": true
                  },
                  {
                    "name": "Compare: Variable",
                    "value1": "FlopSide",
                    "compareType": "=",
                    "value2": -1,
                    "contextScope": "TargetEntity"
                  }
                ]
              }
            }
          ]
        },
        {
          "name": "HANDLER OPTION",
          "option": "Skill04",
          "goal": [
            {
              "name": "Sequence Event",
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "scope": "TargetEntity",
                  "variableName": "AIFlag",
                  "value": 1
                },
                {
                  "name": "Use Ability Option",
                  "skillName": "Skill04"
                }
              ]
            }
          ],
          "type": "DefaultDSE",
          "check": [
            {
              "name": "Check Ability Use Condition",
              "passedValue": 0.5,
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"763823194\">OneMore</a>"
                  },
                  {
                    "name": "Compare: Variable",
                    "value1": "AIFlag",
                    "compareType": "=",
                    "value2": 1,
                    "contextScope": "TargetEntity"
                  },
                  {
                    "name": "Compare: Variable",
                    "value1": "FlopSide",
                    "compareType": "=",
                    "value2": -1,
                    "contextScope": "TargetEntity"
                  }
                ]
              }
            }
          ]
        }
      ]
    }
  ],
  "references": []
}