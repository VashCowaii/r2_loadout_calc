const configAbility = {
  "fileName": "2004024_Handling_OVERRIDE_200402402",
  "abilityType": "Handling_200402402",
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
          "option": "UseSkill01",
          "goal": [
            {
              "name": "Sequence Event",
              "passed": [
                {
                  "name": "Define Custom Variable with Added Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "variableName": "W2_Yanqing_00_AICounter",
                  "context": "TargetEntity",
                  "value": 1,
                  "max": 20
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
              "passedValue": 0.4,
              "conditions": {
                "name": "OR",
                "conditionList": [
                  {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Compare: Variable",
                        "value1": "HP_Bars_Remaining",
                        "compareType": "<=",
                        "value2": 2
                      },
                      {
                        "name": "OR",
                        "conditionList": [
                          {
                            "name": "Compare: Variable",
                            "value1": "W2_Yanqing_00_AICounter",
                            "compareType": "=",
                            "value2": 1,
                            "contextScope": "TargetEntity"
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
                            "value1": "W2_Yanqing_00_AICounter",
                            "compareType": "=",
                            "value2": 5,
                            "contextScope": "TargetEntity"
                          }
                        ]
                      }
                    ]
                  }
                ]
              }
            }
          ]
        },
        {
          "name": "HANDLER OPTION",
          "option": "UseSkill03",
          "goal": [
            {
              "name": "Sequence Event",
              "passed": [
                {
                  "name": "Define Custom Variable with Added Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "variableName": "W2_Yanqing_00_AICounter",
                  "context": "TargetEntity",
                  "value": 1,
                  "max": 20
                },
                {
                  "name": "Use Ability Option",
                  "skillName": "Skill03"
                }
              ]
            }
          ],
          "type": "DefaultDSE",
          "check": [
            {
              "name": "Check Ability Use Condition",
              "passedValue": 0.4,
              "conditions": {
                "name": "OR",
                "conditionList": [
                  {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Compare: Variable",
                        "value1": "HP_Bars_Remaining",
                        "compareType": "<=",
                        "value2": 2
                      },
                      {
                        "name": "OR",
                        "conditionList": [
                          {
                            "name": "Compare: Variable",
                            "value1": "W2_Yanqing_00_AICounter",
                            "compareType": "=",
                            "value2": 4,
                            "contextScope": "TargetEntity"
                          }
                        ]
                      }
                    ]
                  }
                ]
              }
            }
          ]
        },
        {
          "name": "HANDLER OPTION",
          "option": "UseSkill04",
          "goal": [
            {
              "name": "Sequence Event",
              "passed": [
                {
                  "name": "Define Custom Variable with Added Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "variableName": "W2_Yanqing_00_AICounter",
                  "context": "TargetEntity",
                  "value": 1,
                  "max": 20
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
              "passedValue": 0.4,
              "conditions": {
                "name": "OR",
                "conditionList": [
                  {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Compare: Variable",
                        "value1": "HP_Bars_Remaining",
                        "compareType": "<=",
                        "value2": 2
                      },
                      {
                        "name": "OR",
                        "conditionList": [
                          {
                            "name": "Compare: Variable",
                            "value1": "W2_Yanqing_00_AICounter",
                            "compareType": "=",
                            "value2": 2,
                            "contextScope": "TargetEntity"
                          }
                        ]
                      }
                    ]
                  }
                ]
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
                  "name": "Define Custom Variable with Added Value",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "variableName": "W2_Yanqing_00_AICounter",
                  "context": "TargetEntity",
                  "value": 1,
                  "max": 20
                },
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
              "passedValue": 0.4,
              "conditions": {
                "name": "OR",
                "conditionList": [
                  {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Compare: Variable",
                        "value1": "HP_Bars_Remaining",
                        "compareType": "<=",
                        "value2": 2
                      },
                      {
                        "name": "OR",
                        "conditionList": [
                          {
                            "name": "Compare: Variable",
                            "value1": "W2_Yanqing_00_AICounter",
                            "compareType": "=",
                            "value2": 6,
                            "contextScope": "TargetEntity"
                          }
                        ]
                      }
                    ]
                  }
                ]
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
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "HP_Bars_Remaining",
                    "compareType": "<=",
                    "value2": 2
                  },
                  "passed": [
                    {
                      "name": "Declare Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "scope": "TargetEntity",
                      "variableName": "W2_Yanqing_00_AICounter",
                      "value": 1
                    }
                  ]
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
              "passedValue": 0.4,
              "conditions": {
                "name": "OR",
                "conditionList": [
                  {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Compare: Variable",
                        "value1": "HP_Bars_Remaining",
                        "compareType": "<=",
                        "value2": 2
                      },
                      {
                        "name": "OR",
                        "conditionList": [
                          {
                            "name": "Compare: Variable",
                            "value1": "W2_Yanqing_00_AICounter",
                            "compareType": "=",
                            "value2": 7,
                            "contextScope": "TargetEntity"
                          }
                        ]
                      }
                    ]
                  }
                ]
              }
            }
          ]
        },
        {
          "name": "HANDLER OPTION",
          "option": "UseSkill01",
          "goal": [
            {
              "name": "Sequence Event",
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "W2_Yanqing_00_AICounter",
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
              "passedValue": 0.4,
              "conditions": {
                "name": "OR",
                "conditionList": [
                  {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Compare: Variable",
                        "value1": "HP_Bars_Remaining",
                        "compareType": "<=",
                        "value2": 2
                      },
                      {
                        "name": "OR",
                        "conditionList": [
                          {
                            "name": "Compare: Variable",
                            "value1": "W2_Yanqing_00_AICounter",
                            "compareType": "=",
                            "value2": 20,
                            "contextScope": "TargetEntity"
                          }
                        ]
                      }
                    ]
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