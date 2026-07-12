const configAbility = {
  "fileName": "8012147_Handling",
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
          "value": "AML_Boss_00_Part3_IF_Phase01"
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
          "option": "UseSkill04",
          "goal": [
            {
              "name": "Sequence Event",
              "passed": [
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
              "passedValue": 1,
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"-2123264245\">Enemy_AML_Boss_Part2_IF_Enhancement</a>",
                "invertCondition": true
              }
            }
          ]
        },
        {
          "name": "HANDLER OPTION",
          "option": "UseSkill05",
          "goal": [
            {
              "name": "Sequence Event",
              "passed": [
                {
                  "name": "Use Ability Option",
                  "skillName": "Skill05"
                }
              ]
            }
          ],
          "type": "DefaultDSE",
          "check": [
            {
              "name": "Check Ability Use Condition",
              "passedValue": 1,
              "conditions": {
                "name": "Compare: Variable",
                "value1": "<a class=\"gModGreen\" id=\"-2123264245\">Enemy_AML_Boss_Part2_IF_Enhancement</a>",
                "compareType": "=",
                "value2": 1,
                "valueType": "Layer"
              }
            }
          ]
        },
        {
          "name": "HANDLER OPTION",
          "option": "UseSkill06",
          "goal": [
            {
              "name": "Sequence Event",
              "passed": [
                {
                  "name": "Use Ability Option",
                  "skillName": "Skill06"
                }
              ]
            }
          ],
          "type": "DefaultDSE",
          "check": [
            {
              "name": "Check Ability Use Condition",
              "passedValue": 1,
              "conditions": {
                "name": "Compare: Variable",
                "value1": "<a class=\"gModGreen\" id=\"-2123264245\">Enemy_AML_Boss_Part2_IF_Enhancement</a>",
                "compareType": "=",
                "value2": 2,
                "valueType": "Layer"
              }
            }
          ]
        }
      ]
    }
  ],
  "references": []
}