const configAbility = {
  "fileName": "3014023_Handling",
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
          "optionName": "Decision1-3",
          "optionGoal": {
            "name": "Sequence Event",
            "execute": [
              {
                "name": "Define Custom Variable with Added Value",
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "variableName": "AIFlag",
                "context": "TargetEntity",
                "value": 1
              },
              {
                "name": "Use Ability Option",
                "skillName": "Skill01"
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
                    "value1": "HP_Bars_Remaining",
                    "compareType": "=",
                    "value2": 1
                  },
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
          "optionName": "Decision1-4",
          "optionGoal": {
            "name": "Sequence Event",
            "execute": [
              {
                "name": "Define Custom Variable with Added Value",
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "variableName": "AIFlag",
                "context": "TargetEntity",
                "value": 1
              },
              {
                "name": "IF",
                "conditions": {
                  "name": "Has Modifier",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1900940108\">Modifier_W3_Death_HuntingMode</a>"
                },
                "passed": [
                  {
                    "name": "Use Ability Option",
                    "skillName": "Skill01"
                  }
                ],
                "failed": [
                  {
                    "name": "Use Ability Option",
                    "skillName": "Skill04"
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
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Compare: Variable",
                    "value1": "HP_Bars_Remaining",
                    "compareType": "=",
                    "value2": 1
                  },
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
          "optionName": "Decision1-1",
          "optionGoal": {
            "name": "Sequence Event",
            "execute": [
              {
                "name": "Declare Custom Variable",
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "variableName": "UsedSkill08_Flag",
                "scope": "TargetEntity"
              },
              {
                "name": "Define Custom Variable with Added Value",
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "variableName": "AIFlag",
                "context": "TargetEntity",
                "value": 1
              },
              {
                "name": "Use Ability Option",
                "skillName": "Skill02"
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
                    "value1": "HP_Bars_Remaining",
                    "compareType": "=",
                    "value2": 1
                  },
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
        },
        {
          "name": "HANDLER OPTION",
          "optionName": "Decision1-2",
          "optionGoal": {
            "name": "Sequence Event",
            "execute": [
              {
                "name": "Define Custom Variable",
                "variableName": "AIFlag",
                "value": 1,
                "scope": "TargetEntity"
              },
              {
                "name": "IF",
                "conditions": {
                  "name": "Has Modifier",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-1900940108\">Modifier_W3_Death_HuntingMode</a>"
                },
                "passed": [
                  {
                    "name": "Use Ability Option",
                    "skillName": "Skill01"
                  }
                ],
                "failed": [
                  {
                    "name": "Use Ability Option",
                    "skillName": "Skill04"
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
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Compare: Variable",
                    "value1": "HP_Bars_Remaining",
                    "compareType": "=",
                    "value2": 1
                  },
                  {
                    "name": "Compare: Variable",
                    "value1": "AIFlag",
                    "compareType": "=",
                    "value2": 4,
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
          "optionName": "Decision2-1",
          "optionGoal": {
            "name": "Sequence Event",
            "execute": [
              {
                "name": "Define Custom Variable",
                "variableName": "AIFlag",
                "value": 2,
                "scope": "TargetEntity"
              },
              {
                "name": "Remove Events/Bonuses",
                "to": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"883139622\">OneMorePerTurn</a>"
              },
              {
                "name": "Use Ability Option",
                "skillName": "Skill06"
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
                    "value1": "HP_Bars_Remaining",
                    "compareType": ">=",
                    "value2": 2
                  },
                  {
                    "name": "OR",
                    "conditionList": [
                      {
                        "name": "Compare: Variable",
                        "value1": "AIFlag",
                        "compareType": "=",
                        "value2": 1,
                        "contextScope": "TargetEntity"
                      },
                      {
                        "name": "Compare: Variable",
                        "value1": "AIFlag",
                        "compareType": "=",
                        "value2": 7,
                        "contextScope": "TargetEntity"
                      }
                    ]
                  }
                ]
              },
              "passedValue": 0.5
            }
          ]
        },
        {
          "name": "HANDLER OPTION",
          "optionName": "Decision2-2",
          "optionGoal": {
            "name": "Sequence Event",
            "execute": [
              {
                "name": "Define Custom Variable with Added Value",
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "variableName": "AIFlag",
                "context": "TargetEntity",
                "value": 1
              },
              {
                "name": "Use Ability Option",
                "skillName": "Skill07"
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
                    "value1": "HP_Bars_Remaining",
                    "compareType": ">=",
                    "value2": 2
                  },
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
          "optionName": "Decision2-3",
          "optionGoal": {
            "name": "Sequence Event",
            "execute": [
              {
                "name": "Define Custom Variable with Added Value",
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "variableName": "AIFlag",
                "context": "TargetEntity",
                "value": 1
              },
              {
                "name": "Use Ability Option",
                "skillName": "Skill01"
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
                    "value1": "HP_Bars_Remaining",
                    "compareType": ">=",
                    "value2": 2
                  },
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
        },
        {
          "name": "HANDLER OPTION",
          "optionName": "Decision2-4",
          "optionGoal": {
            "name": "Sequence Event",
            "execute": [
              {
                "name": "Find New Target",
                "from": {
                  "name": "Target Name",
                  "target": "{{Enemy Team All}}"
                },
                "searchRandom": true,
                "conditions": {
                  "name": "Enemy ID",
                  "ID": 3012030,
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "characterName": "Sombrous Sepulcher"
                },
                "ifTargetFound": [
                  {
                    "name": "Define Custom Variable with Added Value",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "variableName": "True_Count",
                    "context": "TargetEntity",
                    "value": 1
                  }
                ]
              },
              {
                "name": "IF",
                "conditions": {
                  "name": "Compare: Variable",
                  "value1": "True_Count",
                  "compareType": ">",
                  "value2": 0
                },
                "passed": [
                  {
                    "name": "Define Custom Variable",
                    "variableName": "AIFlag",
                    "value": 3,
                    "scope": "TargetEntity"
                  },
                  {
                    "name": "Define Custom Variable",
                    "variableName": "True_Count",
                    "value": 0,
                    "scope": "TargetEntity"
                  },
                  {
                    "name": "Use Ability Option",
                    "skillName": "Skill02"
                  }
                ],
                "failed": [
                  {
                    "name": "Define Custom Variable",
                    "variableName": "AIFlag",
                    "value": 2,
                    "scope": "TargetEntity"
                  },
                  {
                    "name": "Remove Events/Bonuses",
                    "to": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"883139622\">OneMorePerTurn</a>"
                  },
                  {
                    "name": "Define Custom Variable",
                    "variableName": "True_Count",
                    "value": 0,
                    "scope": "TargetEntity"
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
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Compare: Variable",
                    "value1": "HP_Bars_Remaining",
                    "compareType": ">=",
                    "value2": 2
                  },
                  {
                    "name": "Compare: Variable",
                    "value1": "AIFlag",
                    "compareType": "=",
                    "value2": 4,
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
          "optionName": "Decision2-3",
          "optionGoal": {
            "name": "Sequence Event",
            "execute": [
              {
                "name": "Define Custom Variable",
                "variableName": "AIFlag",
                "value": 1,
                "scope": "TargetEntity"
              },
              {
                "name": "Use Ability Option",
                "skillName": "Skill01"
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
                    "value1": "HP_Bars_Remaining",
                    "compareType": ">=",
                    "value2": 2
                  },
                  {
                    "name": "Compare: Variable",
                    "value1": "AIFlag",
                    "compareType": "=",
                    "value2": 5,
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
          "optionName": "Decision4-1",
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
                "resetValue": 8,
                "scope": "TargetEntity"
              },
              {
                "name": "Use Ability Option",
                "skillName": "Skill01"
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
                    "value1": "AIFlag",
                    "compareType": "=",
                    "value2": 8,
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
          "optionName": "Decision4-2",
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
                "resetValue": 9,
                "scope": "TargetEntity"
              },
              {
                "name": "Use Ability Option",
                "skillName": "Skill02"
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
                    "value1": "AIFlag",
                    "compareType": "=",
                    "value2": 9,
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