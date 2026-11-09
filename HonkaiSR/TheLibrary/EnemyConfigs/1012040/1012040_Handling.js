const configAbility = {
  "fileName": "1012040_Handling",
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
          "value": "W1_Svarog_00_Phase01"
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
          "optionName": "Decision1",
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
                "variableName": "PartCanUseSkill03"
              },
              {
                "name": "Declare Custom Variable",
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster's Summoner}}"
                },
                "scope": "TargetEntity",
                "variableName": "CanUseSkill03"
              },
              {
                "name": "Use Ability Option",
                "skillName": "Skill03"
              }
            ]
          },
          "scoreType": "DefaultDSE",
          "optionWeight": 0.5,
          "optionCheck": [
            {
              "name": "Check Ability Use Condition",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Compare: Variable",
                    "value1": "PartDecisionFlag",
                    "compareType": "=",
                    "value2": 1,
                    "contextScope": "TargetEntity"
                  },
                  {
                    "name": "Compare: Variable",
                    "value1": "PartCanUseSkill03",
                    "compareType": "=",
                    "value2": 1,
                    "contextScope": "TargetEntity"
                  },
                  {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster's Summoner}}"
                    },
                    "value1": "CanUseSkill03",
                    "compareType": "=",
                    "value2": 1,
                    "contextScope": "TargetEntity"
                  },
                  {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Player Team All}}.[[removeMemosprite]]"
                    },
                    "value1": "TeamCharacterCount",
                    "compareType": ">",
                    "value2": 1
                  },
                  {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Svarog's Confinement Target}}"
                    },
                    "value1": "TeamCharacterCount",
                    "compareType": "<",
                    "value2": 1
                  },
                  {
                    "name": "NOT",
                    "conditions": {
                      "name": "OR",
                      "conditionList": [
                        {
                          "name": "Has Flag",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Caster's Summoner}}"
                          },
                          "flagName": "Break"
                        },
                        {
                          "name": "Has Flag",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Caster's Summoner}}"
                          },
                          "flagName": "DisableAction"
                        }
                      ]
                    }
                  }
                ]
              },
              "passedValue": 0.5
            }
          ]
        },
        {
          "name": "HANDLER OPTION",
          "optionName": "Decision2",
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
                  "modifier": "<a class=\"gModGreen\" id=\"-733983508\">Svarog_Control_OnPart_Modifier</a>"
                },
                "passed": [
                  {
                    "name": "Use Ability Option",
                    "skillName": "Skill04"
                  }
                ],
                "failed": [
                  {
                    "name": "Use Ability Option",
                    "skillName": "Skill02"
                  }
                ]
              }
            ]
          },
          "scoreType": "DefaultDSE",
          "optionWeight": 0.5,
          "optionCheck": [
            {
              "name": "Check Ability Use Condition",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "PartDecisionFlag",
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
          "optionName": "Decision3",
          "optionGoal": {
            "name": "Sequence Event",
            "execute": [
              {
                "name": "IF",
                "conditions": {
                  "name": "OR",
                  "conditionList": [
                    {
                      "name": "Has Flag",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster's Summoner}}"
                      },
                      "flagName": "Break"
                    },
                    {
                      "name": "Has Flag",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster's Summoner}}"
                      },
                      "flagName": "DisableAction"
                    }
                  ]
                },
                "passed": [
                  {
                    "name": "Use Ability Option",
                    "skillName": "Skill02"
                  }
                ],
                "failed": [
                  {
                    "name": "Declare Custom Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "scope": "TargetEntity",
                    "variableName": "PartDecisionFlag",
                    "value": 3
                  },
                  {
                    "name": "Use Ability Option",
                    "skillName": "Skill06"
                  }
                ]
              }
            ]
          },
          "scoreType": "DefaultDSE",
          "optionWeight": 0.5,
          "optionCheck": [
            {
              "name": "Check Ability Use Condition",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "PartDecisionFlag",
                "compareType": "=",
                "value2": 2,
                "contextScope": "TargetEntity"
              },
              "passedValue": 0.5
            }
          ]
        },
        {
          "name": "HANDLER OPTION",
          "optionName": "Decision4",
          "optionGoal": {
            "name": "Sequence Event",
            "execute": [
              {
                "name": "IF",
                "conditions": {
                  "name": "OR",
                  "conditionList": [
                    {
                      "name": "Has Flag",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster's Summoner}}"
                      },
                      "flagName": "Break"
                    },
                    {
                      "name": "Has Flag",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster's Summoner}}"
                      },
                      "flagName": "DisableAction"
                    }
                  ]
                },
                "passed": [
                  {
                    "name": "Use Ability Option",
                    "skillName": "Skill02"
                  }
                ],
                "failed": [
                  {
                    "name": "Use Ability Option",
                    "skillName": "Skill05"
                  }
                ]
              }
            ]
          },
          "scoreType": "DefaultDSE",
          "optionWeight": 0.5,
          "optionCheck": [
            {
              "name": "Check Ability Use Condition",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "PartDecisionFlag",
                "compareType": "=",
                "value2": 3,
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