const configAbility = {
  "fileName": "2004025_Handling",
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
          "value": "W2_Yanqing_00_Phase01"
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
          "optionName": "1-1",
          "optionGoal": {
            "name": "Sequence Event",
            "execute": [
              {
                "name": "Define Custom Variable",
                "variableName": "W2_Yanqing_00_AICounter",
                "value": 2,
                "scope": "TargetEntity"
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
                    "value1": "HP_Bars_Remaining",
                    "compareType": "=",
                    "value2": 1
                  },
                  {
                    "name": "Compare: Variable",
                    "value1": "W2_Yanqing_00_AICounter",
                    "compareType": "=",
                    "value2": 1,
                    "contextScope": "TargetEntity"
                  }
                ]
              },
              "passedValue": 0.4
            }
          ]
        },
        {
          "name": "HANDLER OPTION",
          "optionName": "1-2",
          "optionGoal": {
            "name": "Sequence Event",
            "execute": [
              {
                "name": "Define Custom Variable",
                "variableName": "W2_Yanqing_00_AICounter",
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
                    "value1": "W2_Yanqing_00_AICounter",
                    "compareType": "=",
                    "value2": 2,
                    "contextScope": "TargetEntity"
                  }
                ]
              },
              "passedValue": 0.4
            }
          ]
        },
        {
          "name": "HANDLER OPTION",
          "optionName": "2-1-1",
          "optionGoal": {
            "name": "Sequence Event",
            "execute": [
              {
                "name": "Define Custom Variable",
                "variableName": "W2_Yanqing_00_AICounter",
                "value": 2,
                "scope": "TargetEntity"
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
                    "value1": "HP_Bars_Remaining",
                    "compareType": "=",
                    "value2": 2
                  },
                  {
                    "name": "Compare: Variable",
                    "value1": "W2_Yanqing_00_AICounter",
                    "compareType": "=",
                    "value2": 1,
                    "contextScope": "TargetEntity"
                  }
                ]
              },
              "passedValue": 0.4
            }
          ]
        },
        {
          "name": "HANDLER OPTION",
          "optionName": "2-2",
          "optionGoal": {
            "name": "Sequence Event",
            "execute": [
              {
                "name": "Define Custom Variable",
                "variableName": "W2_Yanqing_00_AICounter",
                "value": 3,
                "scope": "TargetEntity"
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
                    "value1": "HP_Bars_Remaining",
                    "compareType": "=",
                    "value2": 2
                  },
                  {
                    "name": "Compare: Variable",
                    "value1": "W2_Yanqing_00_AICounter",
                    "compareType": "=",
                    "value2": 2,
                    "contextScope": "TargetEntity"
                  }
                ]
              },
              "passedValue": 0.4
            }
          ]
        },
        {
          "name": "HANDLER OPTION",
          "optionName": "2-3-1",
          "optionGoal": {
            "name": "Sequence Event",
            "execute": [
              {
                "name": "Define Custom Variable",
                "variableName": "W2_Yanqing_00_AICounter",
                "value": 4,
                "scope": "TargetEntity"
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
                    "value1": "HP_Bars_Remaining",
                    "compareType": "=",
                    "value2": 2
                  },
                  {
                    "name": "Compare: Variable",
                    "value1": "W2_Yanqing_00_AICounter",
                    "compareType": "=",
                    "value2": 3,
                    "contextScope": "TargetEntity"
                  },
                  {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster's Minions}}"
                    },
                    "value1": "TeamCharacterCount",
                    "compareType": "<",
                    "value2": 4
                  }
                ]
              },
              "passedValue": 0.4
            }
          ]
        },
        {
          "name": "HANDLER OPTION",
          "optionName": "2-3-2",
          "optionGoal": {
            "name": "Sequence Event",
            "execute": [
              {
                "name": "Define Custom Variable",
                "variableName": "W2_Yanqing_00_AICounter",
                "value": 4,
                "scope": "TargetEntity"
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
                    "value1": "HP_Bars_Remaining",
                    "compareType": "=",
                    "value2": 2
                  },
                  {
                    "name": "Compare: Variable",
                    "value1": "W2_Yanqing_00_AICounter",
                    "compareType": "=",
                    "value2": 3,
                    "contextScope": "TargetEntity"
                  },
                  {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster's Minions}}"
                    },
                    "value1": "TeamCharacterCount",
                    "compareType": "=",
                    "value2": 4
                  }
                ]
              },
              "passedValue": 0.4
            }
          ]
        },
        {
          "name": "HANDLER OPTION",
          "optionName": "2-4",
          "optionGoal": {
            "name": "Sequence Event",
            "execute": [
              {
                "name": "Define Custom Variable",
                "variableName": "W2_Yanqing_00_AICounter",
                "value": 5,
                "scope": "TargetEntity"
              },
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
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Compare: Variable",
                    "value1": "HP_Bars_Remaining",
                    "compareType": "=",
                    "value2": 2
                  },
                  {
                    "name": "Compare: Variable",
                    "value1": "W2_Yanqing_00_AICounter",
                    "compareType": "=",
                    "value2": 4,
                    "contextScope": "TargetEntity"
                  }
                ]
              },
              "passedValue": 0.4
            }
          ]
        },
        {
          "name": "HANDLER OPTION",
          "optionName": "2-5",
          "optionGoal": {
            "name": "Sequence Event",
            "execute": [
              {
                "name": "Define Custom Variable",
                "variableName": "W2_Yanqing_00_AICounter",
                "value": 6,
                "scope": "TargetEntity"
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
                    "value1": "HP_Bars_Remaining",
                    "compareType": "=",
                    "value2": 2
                  },
                  {
                    "name": "Compare: Variable",
                    "value1": "W2_Yanqing_00_AICounter",
                    "compareType": "=",
                    "value2": 5,
                    "contextScope": "TargetEntity"
                  }
                ]
              },
              "passedValue": 0.4
            }
          ]
        },
        {
          "name": "HANDLER OPTION",
          "optionName": "2-6",
          "optionGoal": {
            "name": "Sequence Event",
            "execute": [
              {
                "name": "Define Custom Variable",
                "variableName": "W2_Yanqing_00_AICounter",
                "value": 1,
                "scope": "TargetEntity"
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
                    "value1": "HP_Bars_Remaining",
                    "compareType": "=",
                    "value2": 2
                  },
                  {
                    "name": "Compare: Variable",
                    "value1": "W2_Yanqing_00_AICounter",
                    "compareType": "=",
                    "value2": 6,
                    "contextScope": "TargetEntity"
                  }
                ]
              },
              "passedValue": 0.4
            }
          ]
        },
        {
          "name": "HANDLER OPTION",
          "optionName": "9-1-1",
          "optionGoal": {
            "name": "Sequence Event",
            "execute": [
              {
                "name": "Define Custom Variable",
                "variableName": "W2_Yanqing_00_AICounter",
                "value": 92,
                "scope": "TargetEntity"
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
                    "value1": "HP_Bars_Remaining",
                    "compareType": "=",
                    "value2": 2
                  },
                  {
                    "name": "Compare: Variable",
                    "value1": "W2_Yanqing_00_AICounter",
                    "compareType": "=",
                    "value2": 91,
                    "contextScope": "TargetEntity"
                  }
                ]
              },
              "passedValue": 0.4
            }
          ]
        },
        {
          "name": "HANDLER OPTION",
          "optionName": "9-2-2",
          "optionGoal": {
            "name": "Sequence Event",
            "execute": [
              {
                "name": "Define Custom Variable",
                "variableName": "W2_Yanqing_00_AICounter",
                "value": 93,
                "scope": "TargetEntity"
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
                    "value1": "HP_Bars_Remaining",
                    "compareType": "=",
                    "value2": 2
                  },
                  {
                    "name": "Compare: Variable",
                    "value1": "W2_Yanqing_00_AICounter",
                    "compareType": "=",
                    "value2": 92,
                    "contextScope": "TargetEntity"
                  }
                ]
              },
              "passedValue": 0.4
            }
          ]
        },
        {
          "name": "HANDLER OPTION",
          "optionName": "9-2-3-1",
          "optionGoal": {
            "name": "Sequence Event",
            "execute": [
              {
                "name": "Define Custom Variable",
                "variableName": "W2_Yanqing_00_AICounter",
                "value": 94,
                "scope": "TargetEntity"
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
                    "value1": "HP_Bars_Remaining",
                    "compareType": "=",
                    "value2": 2
                  },
                  {
                    "name": "Compare: Variable",
                    "value1": "W2_Yanqing_00_AICounter",
                    "compareType": "=",
                    "value2": 93,
                    "contextScope": "TargetEntity"
                  },
                  {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster's Minions}}"
                    },
                    "value1": "TeamCharacterCount",
                    "compareType": "<",
                    "value2": 4
                  }
                ]
              },
              "passedValue": 0.4
            }
          ]
        },
        {
          "name": "HANDLER OPTION",
          "optionName": "9-2-3-2",
          "optionGoal": {
            "name": "Sequence Event",
            "execute": [
              {
                "name": "Define Custom Variable",
                "variableName": "W2_Yanqing_00_AICounter",
                "value": 94,
                "scope": "TargetEntity"
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
                    "value1": "HP_Bars_Remaining",
                    "compareType": "=",
                    "value2": 2
                  },
                  {
                    "name": "Compare: Variable",
                    "value1": "W2_Yanqing_00_AICounter",
                    "compareType": "=",
                    "value2": 93,
                    "contextScope": "TargetEntity"
                  },
                  {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster's Minions}}"
                    },
                    "value1": "TeamCharacterCount",
                    "compareType": "=",
                    "value2": 4
                  }
                ]
              },
              "passedValue": 0.4
            }
          ]
        },
        {
          "name": "HANDLER OPTION",
          "optionName": "9-2-4",
          "optionGoal": {
            "name": "Sequence Event",
            "execute": [
              {
                "name": "Define Custom Variable",
                "variableName": "W2_Yanqing_00_AICounter",
                "value": 95,
                "scope": "TargetEntity"
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
                    "value1": "HP_Bars_Remaining",
                    "compareType": "=",
                    "value2": 2
                  },
                  {
                    "name": "Compare: Variable",
                    "value1": "W2_Yanqing_00_AICounter",
                    "compareType": "=",
                    "value2": 94,
                    "contextScope": "TargetEntity"
                  }
                ]
              },
              "passedValue": 0.4
            }
          ]
        },
        {
          "name": "HANDLER OPTION",
          "optionName": "9-2-5",
          "optionGoal": {
            "name": "Sequence Event",
            "execute": [
              {
                "name": "Define Custom Variable",
                "variableName": "W2_Yanqing_00_AICounter",
                "value": 96,
                "scope": "TargetEntity"
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
                    "value1": "HP_Bars_Remaining",
                    "compareType": "=",
                    "value2": 2
                  },
                  {
                    "name": "Compare: Variable",
                    "value1": "W2_Yanqing_00_AICounter",
                    "compareType": "=",
                    "value2": 95,
                    "contextScope": "TargetEntity"
                  }
                ]
              },
              "passedValue": 0.4
            }
          ]
        },
        {
          "name": "HANDLER OPTION",
          "optionName": "9-2-6",
          "optionGoal": {
            "name": "Sequence Event",
            "execute": [
              {
                "name": "Define Custom Variable",
                "variableName": "W2_Yanqing_00_AICounter",
                "value": 97,
                "scope": "TargetEntity"
              },
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
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Compare: Variable",
                    "value1": "HP_Bars_Remaining",
                    "compareType": "=",
                    "value2": 2
                  },
                  {
                    "name": "Compare: Variable",
                    "value1": "W2_Yanqing_00_AICounter",
                    "compareType": "=",
                    "value2": 96,
                    "contextScope": "TargetEntity"
                  }
                ]
              },
              "passedValue": 0.4
            }
          ]
        },
        {
          "name": "HANDLER OPTION",
          "optionName": "9-2-7",
          "optionGoal": {
            "name": "Sequence Event",
            "execute": [
              {
                "name": "Define Custom Variable",
                "variableName": "W2_Yanqing_00_AICounter",
                "value": 1,
                "scope": "TargetEntity"
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
                    "value1": "HP_Bars_Remaining",
                    "compareType": "=",
                    "value2": 2
                  },
                  {
                    "name": "Compare: Variable",
                    "value1": "W2_Yanqing_00_AICounter",
                    "compareType": "=",
                    "value2": 97,
                    "contextScope": "TargetEntity"
                  }
                ]
              },
              "passedValue": 0.4
            }
          ]
        },
        {
          "name": "HANDLER OPTION",
          "optionName": "3-1-1",
          "optionGoal": {
            "name": "Sequence Event",
            "execute": [
              {
                "name": "Define Custom Variable",
                "variableName": "W2_Yanqing_00_AICounter",
                "value": 2,
                "scope": "TargetEntity"
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
                    "value1": "HP_Bars_Remaining",
                    "compareType": "=",
                    "value2": 3
                  },
                  {
                    "name": "Compare: Variable",
                    "value1": "W2_Yanqing_00_AICounter",
                    "compareType": "=",
                    "value2": 1,
                    "contextScope": "TargetEntity"
                  }
                ]
              },
              "passedValue": 0.4
            }
          ]
        },
        {
          "name": "HANDLER OPTION",
          "optionName": "3-2",
          "optionGoal": {
            "name": "Sequence Event",
            "execute": [
              {
                "name": "Define Custom Variable",
                "variableName": "W2_Yanqing_00_AICounter",
                "value": 3,
                "scope": "TargetEntity"
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
                    "value1": "HP_Bars_Remaining",
                    "compareType": "=",
                    "value2": 3
                  },
                  {
                    "name": "Compare: Variable",
                    "value1": "W2_Yanqing_00_AICounter",
                    "compareType": "=",
                    "value2": 2,
                    "contextScope": "TargetEntity"
                  }
                ]
              },
              "passedValue": 0.4
            }
          ]
        },
        {
          "name": "HANDLER OPTION",
          "optionName": "3-3-1",
          "optionGoal": {
            "name": "Sequence Event",
            "execute": [
              {
                "name": "Define Custom Variable",
                "variableName": "W2_Yanqing_00_AICounter",
                "value": 4,
                "scope": "TargetEntity"
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
                    "value1": "HP_Bars_Remaining",
                    "compareType": "=",
                    "value2": 3
                  },
                  {
                    "name": "Compare: Variable",
                    "value1": "W2_Yanqing_00_AICounter",
                    "compareType": "=",
                    "value2": 3,
                    "contextScope": "TargetEntity"
                  },
                  {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster's Minions}}"
                    },
                    "value1": "TeamCharacterCount",
                    "compareType": "<",
                    "value2": 4
                  }
                ]
              },
              "passedValue": 0.4
            }
          ]
        },
        {
          "name": "HANDLER OPTION",
          "optionName": "3-3-2",
          "optionGoal": {
            "name": "Sequence Event",
            "execute": [
              {
                "name": "Define Custom Variable",
                "variableName": "W2_Yanqing_00_AICounter",
                "value": 4,
                "scope": "TargetEntity"
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
                    "value1": "HP_Bars_Remaining",
                    "compareType": "=",
                    "value2": 3
                  },
                  {
                    "name": "Compare: Variable",
                    "value1": "W2_Yanqing_00_AICounter",
                    "compareType": "=",
                    "value2": 3,
                    "contextScope": "TargetEntity"
                  },
                  {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster's Minions}}"
                    },
                    "value1": "TeamCharacterCount",
                    "compareType": "=",
                    "value2": 4
                  }
                ]
              },
              "passedValue": 0.4
            }
          ]
        },
        {
          "name": "HANDLER OPTION",
          "optionName": "3-4",
          "optionGoal": {
            "name": "Sequence Event",
            "execute": [
              {
                "name": "Define Custom Variable",
                "variableName": "W2_Yanqing_00_AICounter",
                "value": 5,
                "scope": "TargetEntity"
              },
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
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Compare: Variable",
                    "value1": "HP_Bars_Remaining",
                    "compareType": "=",
                    "value2": 3
                  },
                  {
                    "name": "Compare: Variable",
                    "value1": "W2_Yanqing_00_AICounter",
                    "compareType": "=",
                    "value2": 4,
                    "contextScope": "TargetEntity"
                  }
                ]
              },
              "passedValue": 0.4
            }
          ]
        },
        {
          "name": "HANDLER OPTION",
          "optionName": "3-5",
          "optionGoal": {
            "name": "Sequence Event",
            "execute": [
              {
                "name": "Define Custom Variable",
                "variableName": "W2_Yanqing_00_AICounter",
                "value": 6,
                "scope": "TargetEntity"
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
                    "value1": "HP_Bars_Remaining",
                    "compareType": "=",
                    "value2": 3
                  },
                  {
                    "name": "Compare: Variable",
                    "value1": "W2_Yanqing_00_AICounter",
                    "compareType": "=",
                    "value2": 5,
                    "contextScope": "TargetEntity"
                  }
                ]
              },
              "passedValue": 0.4
            }
          ]
        },
        {
          "name": "HANDLER OPTION",
          "optionName": "3-6",
          "optionGoal": {
            "name": "Sequence Event",
            "execute": [
              {
                "name": "Define Custom Variable",
                "variableName": "W2_Yanqing_00_AICounter",
                "value": 1,
                "scope": "TargetEntity"
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
                    "value1": "HP_Bars_Remaining",
                    "compareType": "=",
                    "value2": 3
                  },
                  {
                    "name": "Compare: Variable",
                    "value1": "W2_Yanqing_00_AICounter",
                    "compareType": "=",
                    "value2": 6,
                    "contextScope": "TargetEntity"
                  }
                ]
              },
              "passedValue": 0.4
            }
          ]
        },
        {
          "name": "HANDLER OPTION",
          "optionName": "4-7",
          "optionGoal": {
            "name": "Sequence Event",
            "execute": [
              {
                "name": "Define Custom Variable",
                "variableName": "W2_Yanqing_00_AICounter",
                "value": 100,
                "scope": "TargetEntity"
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
                    "value1": "W2_Yanqing_00_AICounter",
                    "compareType": "=",
                    "value2": 100,
                    "contextScope": "TargetEntity"
                  }
                ]
              },
              "passedValue": 0.4
            }
          ]
        },
        {
          "name": "HANDLER OPTION",
          "optionName": "4-8",
          "optionGoal": {
            "name": "Sequence Event",
            "execute": [
              {
                "name": "Define Custom Variable",
                "variableName": "W2_Yanqing_00_AICounter",
                "value": 102,
                "scope": "TargetEntity"
              },
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
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Compare: Variable",
                    "value1": "W2_Yanqing_00_AICounter",
                    "compareType": "=",
                    "value2": 101,
                    "contextScope": "TargetEntity"
                  }
                ]
              },
              "passedValue": 0.4
            }
          ]
        },
        {
          "name": "HANDLER OPTION",
          "optionName": "4-9",
          "optionGoal": {
            "name": "Sequence Event",
            "execute": [
              {
                "name": "Define Custom Variable",
                "variableName": "W2_Yanqing_00_AICounter",
                "value": 101,
                "scope": "TargetEntity"
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
                    "value1": "W2_Yanqing_00_AICounter",
                    "compareType": "=",
                    "value2": 102,
                    "contextScope": "TargetEntity"
                  }
                ]
              },
              "passedValue": 0.4
            }
          ]
        }
      ]
    }
  ],
  "references": []
}