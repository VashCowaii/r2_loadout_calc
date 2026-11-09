const configAbility = {
  "fileName": "1005014_Handling",
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
          "value": "W1_CocoliaP2_00_Phase01"
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
          "optionName": "UseSkill02",
          "optionGoal": {
            "name": "Sequence Event",
            "execute": [
              {
                "name": "Define Custom Variable",
                "scope": "TargetEntity",
                "variableName": "AIFlag",
                "value": 2
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
              "passedValue": 1
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
                "skillName": "Skill10",
                "target": {
                  "name": "Create Selection List",
                  "passed": [
                    {
                      "name": "Select by Modifier Name",
                      "modifier": "<a class=\"gModGreen\" id=\"1835614679\">Enemy_W1_CocoliaP2_IF_Rel_TargetLock01</a>",
                      "target": null,
                      "invertCondition": true
                    },
                    {
                      "name": "Select by Modifier Name",
                      "modifier": "<a class=\"gModGreen\" id=\"1852392298\">Enemy_W1_CocoliaP2_IF_Rel_TargetLock02</a>",
                      "target": null,
                      "invertCondition": true
                    },
                    {
                      "name": "Select by Modifier Name",
                      "modifier": "<a class=\"gModGreen\" id=\"1869169917\">Enemy_W1_CocoliaP2_IF_Rel_TargetLock03</a>",
                      "target": null,
                      "invertCondition": true
                    },
                    {
                      "name": "Select by Modifier Name",
                      "modifier": "<a class=\"gModGreen\" id=\"1751726584\">Enemy_W1_CocoliaP2_IF_Rel_TargetLock04</a>",
                      "target": null,
                      "invertCondition": true
                    }
                  ]
                }
              },
              {
                "name": "Define Custom Variable",
                "scope": "TargetEntity",
                "variableName": "AIFlag",
                "value": 3
              },
              {
                "name": "Define Custom Variable",
                "scope": "TargetEntity",
                "variableName": "AccumulateFlag",
                "value": 1
              },
              {
                "name": "Use Ability Option",
                "skillName": "Skill10"
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
              "passedValue": 1
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
                "skillName": "Skill06",
                "target": {
                  "name": "Select by Modifier Name",
                  "modifier": "<a class=\"gModGreen\" id=\"1281838321\">Enemy_W1_CocoliaP2_Ability10_TargetLock</a>[<span class=\"descriptionNumberColor\">Harbinger of Annihilation</span>]",
                  "target": null
                }
              },
              {
                "name": "Define Custom Variable",
                "scope": "TargetEntity",
                "variableName": "AIFlag",
                "value": 5
              },
              {
                "name": "Define Custom Variable",
                "scope": "TargetEntity",
                "variableName": "AccumulateFlag",
                "value": 0
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
              "passedValue": 1
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
                "name": "Define Custom Variable",
                "scope": "TargetEntity",
                "variableName": "AIFlag",
                "value": 12
              },
              {
                "name": "Use Ability Option",
                "skillName": "Skill11"
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
                    "value2": 5,
                    "contextScope": "TargetEntity"
                  }
                ]
              },
              "passedValue": 1
            }
          ]
        },
        {
          "name": "HANDLER OPTION",
          "optionName": "UseSkill07",
          "optionGoal": {
            "name": "Sequence Event",
            "execute": [
              {
                "name": "Choose Ability Target",
                "skillName": "Skill07",
                "target": {
                  "name": "Create Selection List",
                  "passed": [
                    {
                      "name": "Select by Modifier Name",
                      "modifier": "<a class=\"gModGreen\" id=\"1997760414\">Standard_Confine</a>[<span class=\"descriptionNumberColor\">Imprisonment</span>]",
                      "target": null,
                      "invertCondition": true
                    },
                    {
                      "name": "Select by Modifier Name",
                      "modifier": "<a class=\"gModGreen\" id=\"1835614679\">Enemy_W1_CocoliaP2_IF_Rel_TargetLock01</a>",
                      "target": null,
                      "invertCondition": true
                    },
                    {
                      "name": "Select by Modifier Name",
                      "modifier": "<a class=\"gModGreen\" id=\"1852392298\">Enemy_W1_CocoliaP2_IF_Rel_TargetLock02</a>",
                      "target": null,
                      "invertCondition": true
                    },
                    {
                      "name": "Select by Modifier Name",
                      "modifier": "<a class=\"gModGreen\" id=\"1869169917\">Enemy_W1_CocoliaP2_IF_Rel_TargetLock03</a>",
                      "target": null,
                      "invertCondition": true
                    },
                    {
                      "name": "Select by Modifier Name",
                      "modifier": "<a class=\"gModGreen\" id=\"1751726584\">Enemy_W1_CocoliaP2_IF_Rel_TargetLock04</a>",
                      "target": null,
                      "invertCondition": true
                    }
                  ]
                }
              },
              {
                "name": "Define Custom Variable",
                "scope": "TargetEntity",
                "variableName": "AIFlag",
                "value": 12
              },
              {
                "name": "Define Custom Variable",
                "variableName": "Monster_W1_CocoliaP2_00_SummonRecord",
                "value": 0
              },
              {
                "name": "Use Ability Option",
                "skillName": "Skill07"
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
                    "value2": 11,
                    "contextScope": "TargetEntity"
                  }
                ]
              },
              "passedValue": 1
            }
          ]
        },
        {
          "name": "HANDLER OPTION",
          "optionName": "UseSkill08",
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
                "value": 13
              },
              {
                "name": "Define Custom Variable",
                "scope": "TargetEntity",
                "variableName": "AccumulateFlag",
                "value": 1
              },
              {
                "name": "Use Ability Option",
                "skillName": "Skill08"
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
                    "value2": 12,
                    "contextScope": "TargetEntity"
                  }
                ]
              },
              "passedValue": 1
            }
          ]
        },
        {
          "name": "HANDLER OPTION",
          "optionName": "UseSkill09",
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
                "value": 11
              },
              {
                "name": "Define Custom Variable",
                "scope": "TargetEntity",
                "variableName": "AccumulateFlag",
                "value": 0
              },
              {
                "name": "Use Ability Option",
                "skillName": "Skill09"
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
                    "value2": 13,
                    "contextScope": "TargetEntity"
                  }
                ]
              },
              "passedValue": 1
            }
          ]
        }
      ]
    }
  ],
  "references": []
}