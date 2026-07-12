const configAbility = {
  "fileName": "1003010_Handling_OVERRIDE_100301037",
  "abilityType": "Handling_100301037",
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
          "option": "UseSkill01",
          "goal": [
            {
              "name": "Sequence Event",
              "passed": [
                {
                  "name": "Declare Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "scope": "TargetEntity",
                  "variableName": "W1_Soldier03_00_AICounter",
                  "value": 2
                },
                {
                  "name": "Use Ability Option",
                  "skillName": "Skill01"
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
                "value1": "W1_Soldier03_00_AICounter",
                "compareType": "=",
                "value2": 1,
                "contextScope": "TargetEntity"
              }
            }
          ]
        },
        {
          "name": "HANDLER OPTION",
          "option": "UseSkill08",
          "goal": [
            {
              "name": "Sequence Event",
              "passed": [
                {
                  "name": "Declare Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "scope": "TargetEntity",
                  "variableName": "W1_Soldier03_00_AICounter",
                  "value": 3
                },
                {
                  "name": "Use Ability Option",
                  "skillName": "Skill08"
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
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Compare: Variable",
                    "value1": "W1_Soldier03_00_AICounter",
                    "compareType": "=",
                    "value2": 2,
                    "contextScope": "TargetEntity"
                  },
                  {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{All Team Members(Exclude Self)}}"
                    },
                    "value1": "TeamCharacterCount",
                    "compareType": "<=",
                    "value2": 3
                  }
                ]
              }
            }
          ]
        },
        {
          "name": "HANDLER OPTION",
          "option": "UseSkill08_IF",
          "goal": [
            {
              "name": "Sequence Event",
              "passed": [
                {
                  "name": "Declare Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "scope": "TargetEntity",
                  "variableName": "W1_Soldier03_00_AICounter",
                  "value": 4
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
              "passedValue": 1,
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Compare: Variable",
                    "value1": "W1_Soldier03_00_AICounter",
                    "compareType": "=",
                    "value2": 2,
                    "contextScope": "TargetEntity"
                  },
                  {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{All Team Members(Exclude Self)}}"
                    },
                    "value1": "TeamCharacterCount",
                    "compareType": "=",
                    "value2": 4
                  }
                ]
              }
            }
          ]
        },
        {
          "name": "HANDLER OPTION",
          "option": "UseSkill07",
          "goal": [
            {
              "name": "Sequence Event",
              "passed": [
                {
                  "name": "Declare Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "scope": "TargetEntity",
                  "variableName": "W1_Soldier03_00_AICounter",
                  "value": 4
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
              "passedValue": 1,
              "conditions": {
                "name": "Compare: Variable",
                "value1": "W1_Soldier03_00_AICounter",
                "compareType": "=",
                "value2": 3,
                "contextScope": "TargetEntity"
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
                  "name": "Choose Ability Target",
                  "skillName": "Skill06",
                  "target": {
                    "name": "Select by Modifier Name",
                    "modifier": "Enemy_W1_Soldier03_ReturnAttackTarget",
                    "target": null
                  }
                },
                {
                  "name": "Declare Custom Variable",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "scope": "TargetEntity",
                  "variableName": "W1_Soldier03_00_AICounter",
                  "value": 1
                },
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
                "value1": "W1_Soldier03_00_AICounter",
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