const configAbility = {
  "fileName": "4032042_Handling",
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
                "name": "Define Custom Variable with Team Count",
                "variableName": "DarkTeamCount",
                "readTarget": {
                  "name": "Target Name",
                  "target": "{{Enemy Team All}}"
                },
                "living": true
              },
              {
                "name": "Define Custom Variable with Team Count",
                "variableName": "DarkTeamStealthCount",
                "readTarget": {
                  "name": "Target Name",
                  "target": "{{Enemy Team All}}"
                },
                "conditions": {
                  "name": "Has Flag",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "flagName": "Stealth"
                },
                "living": true
              },
              {
                "name": "Define Custom Variable",
                "value": {
                  "operator": "Variables[0] (WHOLE) || Variables[1] (DarkTeamCount) || Constants[0] (2) || DIV || PARAM_1 || FUNCTION || Variables[2] (StealthCondition) || SUB || RETURN",
                  "displayLines": "(&nbsp;<span class=\"descriptionFunctionColor\">WHOLE</span>((DarkTeamCount / 2)) - StealthCondition)",
                  "constants": [
                    2
                  ],
                  "variables": [
                    "WHOLE",
                    "DarkTeamCount",
                    "StealthCondition"
                  ]
                },
                "variableName": "StealthCondition"
              },
              {
                "name": "IF",
                "conditions": {
                  "name": "Compare: Variable",
                  "value1": "StealthCondition",
                  "compareType": ">=",
                  "value2": 1
                },
                "passed": [
                  {
                    "name": "Define Custom Variable",
                    "scope": "TargetEntity",
                    "value": 2,
                    "variableName": "AIFlag"
                  },
                  {
                    "name": "Use Ability Option",
                    "skillName": "Skill01"
                  }
                ],
                "failed": [
                  {
                    "name": "Choose Ability Target",
                    "skillName": "Skill02",
                    "target": {
                      "name": "Create Selection List",
                      "passed": [
                        {
                          "name": "Select by Target Pool",
                          "target": {
                            "name": "Target Name",
                            "target": "{{EVENT[RoT] Dark Praetor: Dark Characters}}"
                          }
                        }
                      ]
                    }
                  },
                  {
                    "name": "Use Ability Option",
                    "skillName": "Skill02"
                  }
                ]
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
                "value2": 1,
                "contextScope": "TargetEntity"
              },
              "passedValue": 0.5
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
                "name": "IF",
                "conditions": {
                  "name": "Has Modifier",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-19048827\">Enemy_W4_Scholar_01_Stealth</a>[<span class=\"descriptionNumberColor\">Lurking</span>]"
                },
                "passed": [
                  {
                    "name": "Define Custom Variable",
                    "scope": "TargetEntity",
                    "value": 1,
                    "variableName": "AIFlag"
                  },
                  {
                    "name": "Choose Ability Target",
                    "skillName": "Skill03",
                    "target": {
                      "name": "Create Selection List",
                      "passed": [
                        {
                          "name": "Select by Target Pool",
                          "target": {
                            "name": "Target Name",
                            "target": "{{EVENT[RoT] Dark Praetor: Dark Characters}}"
                          }
                        }
                      ]
                    }
                  },
                  {
                    "name": "Use Ability Option",
                    "skillName": "Skill03"
                  }
                ],
                "failed": [
                  {
                    "name": "Define Custom Variable",
                    "scope": "TargetEntity",
                    "value": 1,
                    "variableName": "AIFlag"
                  },
                  {
                    "name": "Choose Ability Target",
                    "skillName": "Skill02",
                    "target": {
                      "name": "Create Selection List",
                      "passed": [
                        {
                          "name": "Select by Target Pool",
                          "target": {
                            "name": "Target Name",
                            "target": "{{EVENT[RoT] Dark Praetor: Dark Characters}}"
                          }
                        }
                      ]
                    }
                  },
                  {
                    "name": "Use Ability Option",
                    "skillName": "Skill02"
                  }
                ]
              }
            ]
          },
          "scoreType": "DefaultDSE",
          "optionWeight": 0.8,
          "optionCheck": [
            {
              "name": "Check Ability Use Condition",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "AIFlag",
                "compareType": "=",
                "value2": 2,
                "contextScope": "TargetEntity"
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