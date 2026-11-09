const configAbility = {
  "fileName": "8003040_Handling",
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
          "value": "XP_Elite02_01_Phase01"
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
                "variableName": "Monster_XP_Elite02_01_AIFlag",
                "resetValue": 1,
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
                "name": "Compare: Variable",
                "value1": "Monster_XP_Elite02_01_AIFlag",
                "compareType": "=",
                "value2": 0,
                "contextScope": "TargetEntity"
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
                "variableName": "Monster_XP_Elite02_01_AIFlag",
                "resetValue": 3,
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
                "name": "Compare: Variable",
                "value1": "Monster_XP_Elite02_01_AIFlag",
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
          "optionName": "Decision02",
          "optionGoal": {
            "name": "Sequence Event",
            "execute": [
              {
                "name": "Declare Custom Variable",
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "variableName": "Monster_XP_Elite02_01_AIFlag",
                "resetValue": 3,
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
                "name": "Compare: Variable",
                "value1": "Monster_XP_Elite02_01_AIFlag",
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
                "variableName": "Monster_XP_Elite02_01_AIFlag",
                "resetValue": 4,
                "scope": "TargetEntity"
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
                "name": "Compare: Variable",
                "value1": "Monster_XP_Elite02_01_AIFlag",
                "compareType": "=",
                "value2": 3,
                "contextScope": "TargetEntity"
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
                "variableName": "Monster_XP_Elite02_01_AIFlag",
                "resetValue": 5,
                "scope": "TargetEntity"
              },
              {
                "name": "Use Ability Option",
                "skillName": "Skill05"
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
                "value1": "Monster_XP_Elite02_01_AIFlag",
                "compareType": "=",
                "value2": 4,
                "contextScope": "TargetEntity"
              },
              "passedValue": 0.5
            }
          ]
        },
        {
          "name": "HANDLER OPTION",
          "optionName": "Decision05",
          "optionGoal": {
            "name": "Sequence Event",
            "execute": [
              {
                "name": "Declare Custom Variable",
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "variableName": "Monster_XP_Elite02_01_AIFlag",
                "resetValue": 6,
                "scope": "TargetEntity"
              },
              {
                "name": "IF",
                "conditions": {
                  "name": "Compare: Variable",
                  "value1": "EnergyLayer",
                  "compareType": "=",
                  "value2": 0
                },
                "passed": [
                  {
                    "name": "Use Ability Option",
                    "skillName": "Skill06"
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
                "name": "Compare: Variable",
                "value1": "Monster_XP_Elite02_01_AIFlag",
                "compareType": "=",
                "value2": 5,
                "contextScope": "TargetEntity"
              },
              "passedValue": 0.5
            }
          ]
        },
        {
          "name": "HANDLER OPTION",
          "optionName": "Decision06",
          "optionGoal": {
            "name": "Sequence Event",
            "execute": [
              {
                "name": "Declare Custom Variable",
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "variableName": "Monster_XP_Elite02_01_AIFlag",
                "resetValue": 1,
                "scope": "TargetEntity"
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
                "name": "Compare: Variable",
                "value1": "Monster_XP_Elite02_01_AIFlag",
                "compareType": "=",
                "value2": 6,
                "contextScope": "TargetEntity"
              },
              "passedValue": 0.5
            }
          ]
        },
        {
          "name": "HANDLER OPTION",
          "optionName": "Decision07",
          "optionGoal": {
            "name": "Sequence Event",
            "execute": [
              {
                "name": "Declare Custom Variable",
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "variableName": "Monster_XP_Elite02_01_AIFlag",
                "resetValue": 5,
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
                  "modifier": "<a class=\"gModGreen\" id=\"-412122860\">Monster_XP_Elite02_01_Battle_02</a>"
                },
                "passed": [
                  {
                    "name": "IF",
                    "conditions": {
                      "name": "Has Modifier",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-799757302\">Monster_XP_Elite02_01_Accelerate</a>[<span class=\"descriptionNumberColor\">undefined</span>]"
                    },
                    "passed": [
                      {
                        "name": "IF",
                        "conditions": {
                          "name": "Compare: Variable",
                          "value1": "<a class=\"gModGreen\" id=\"-799757302\">Monster_XP_Elite02_01_Accelerate</a>[<span class=\"descriptionNumberColor\">undefined</span>]",
                          "compareType": "<",
                          "value2": 5,
                          "valueType": "Layer"
                        },
                        "passed": [
                          {
                            "name": "Use Ability Option",
                            "skillName": "Skill02"
                          }
                        ],
                        "failed": [
                          {
                            "name": "IF",
                            "conditions": {
                              "name": "Compare: Variable",
                              "value1": "<a class=\"gModGreen\" id=\"-799757302\">Monster_XP_Elite02_01_Accelerate</a>[<span class=\"descriptionNumberColor\">undefined</span>]",
                              "compareType": "<",
                              "value2": 7,
                              "valueType": "Layer"
                            },
                            "passed": [
                              {
                                "name": "IF",
                                "conditions": {
                                  "name": "Compare: Variable",
                                  "value1": "Monster_XP_Elite02_01_AIFlag_02",
                                  "compareType": "=",
                                  "value2": 0,
                                  "contextScope": "TargetEntity"
                                },
                                "passed": [
                                  {
                                    "name": "Declare Custom Variable",
                                    "target": {
                                      "name": "Target Name",
                                      "target": "{{Caster}}"
                                    },
                                    "variableName": "Monster_XP_Elite02_01_AIFlag_02",
                                    "resetValue": 1,
                                    "scope": "TargetEntity"
                                  },
                                  {
                                    "name": "Use Ability Option",
                                    "skillName": "Skill03"
                                  }
                                ],
                                "failed": [
                                  {
                                    "name": "Use Ability Option",
                                    "skillName": "Skill02"
                                  }
                                ]
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
                      }
                    ],
                    "failed": [
                      {
                        "name": "Use Ability Option",
                        "skillName": "Skill02"
                      }
                    ]
                  }
                ],
                "failed": [
                  {
                    "name": "Use Ability Option",
                    "skillName": "Skill01"
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
                "value1": "Monster_XP_Elite02_01_AIFlag",
                "compareType": "=",
                "value2": 7,
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