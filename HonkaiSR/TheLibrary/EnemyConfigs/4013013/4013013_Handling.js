const configAbility = {
  "fileName": "4013013_Handling",
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
                "name": "Declare Custom Variable",
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "variableName": "AIFlag",
                "resetValue": 2,
                "scope": "TargetEntity"
              },
              {
                "name": "IF",
                "conditions": {
                  "name": "OR",
                  "conditionList": [
                    {
                      "name": "Living State",
                      "target": {
                        "name": "Target Sequence",
                        "TargetList": [
                          {
                            "name": "Target Name",
                            "target": "{{Player Team All}}"
                          },
                          "Sort by Physical Positioning",
                          {
                            "name": "Target Index",
                            "indexType": "IndexStrict"
                          }
                        ]
                      },
                      "livingState": "Mask_AliveOnly"
                    },
                    {
                      "name": "Living State",
                      "target": {
                        "name": "Target Sequence",
                        "TargetList": [
                          {
                            "name": "Target Name",
                            "target": "{{Player Team All}}"
                          },
                          "Sort by Physical Positioning",
                          {
                            "name": "Target Index",
                            "indexType": "IndexStrict",
                            "indexValue": 1
                          }
                        ]
                      },
                      "livingState": "Mask_AliveOnly"
                    },
                    {
                      "name": "Living State",
                      "target": {
                        "name": "Target Sequence",
                        "TargetList": [
                          {
                            "name": "Target Name",
                            "target": "{{Player Team All}}"
                          },
                          "Sort by Physical Positioning",
                          {
                            "name": "Target Index",
                            "indexType": "IndexStrict",
                            "indexValue": 2
                          }
                        ]
                      },
                      "livingState": "Mask_AliveOnly"
                    }
                  ]
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
          "optionName": "UseSkill05",
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
                "resetValue": 3
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
                "name": "Compare: Variable",
                "value1": "AIFlag",
                "compareType": "=",
                "value2": 5
              },
              "passedValue": 0.5
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
                "name": "Declare Custom Variable",
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "variableName": "AIFlag",
                "resetValue": 5
              },
              {
                "name": "IF",
                "conditions": {
                  "name": "OR",
                  "conditionList": [
                    {
                      "name": "Living State",
                      "target": {
                        "name": "Target Sequence",
                        "TargetList": [
                          {
                            "name": "Target Name",
                            "target": "{{Player Team All}}"
                          },
                          {
                            "name": "Sort by Physical Positioning",
                            "sortByHighest": true
                          },
                          {
                            "name": "Target Index",
                            "indexType": "IndexStrict"
                          }
                        ]
                      },
                      "livingState": "Mask_AliveOnly"
                    },
                    {
                      "name": "Living State",
                      "target": {
                        "name": "Target Sequence",
                        "TargetList": [
                          {
                            "name": "Target Name",
                            "target": "{{Player Team All}}"
                          },
                          {
                            "name": "Sort by Physical Positioning",
                            "sortByHighest": true
                          },
                          {
                            "name": "Target Index",
                            "indexType": "IndexStrict",
                            "indexValue": 1
                          }
                        ]
                      },
                      "livingState": "Mask_AliveOnly"
                    },
                    {
                      "name": "Living State",
                      "target": {
                        "name": "Target Sequence",
                        "TargetList": [
                          {
                            "name": "Target Name",
                            "target": "{{Player Team All}}"
                          },
                          {
                            "name": "Sort by Physical Positioning",
                            "sortByHighest": true
                          },
                          {
                            "name": "Target Index",
                            "indexType": "IndexStrict",
                            "indexValue": 2
                          }
                        ]
                      },
                      "livingState": "Mask_AliveOnly"
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
                    "skillName": "Skill01"
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
                "value2": 2
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
                  "modifier": "<a class=\"gModGreen\" id=\"763823194\">OneMore</a>"
                },
                "passed": [
                  {
                    "name": "IF",
                    "conditions": {
                      "name": "OR",
                      "conditionList": [
                        {
                          "name": "Living State",
                          "target": {
                            "name": "Target Sequence",
                            "TargetList": [
                              {
                                "name": "Target Name",
                                "target": "{{Player Team All}}"
                              },
                              "Sort by Physical Positioning",
                              {
                                "name": "Target Index",
                                "indexType": "IndexStrict"
                              }
                            ]
                          },
                          "livingState": "Mask_AliveOnly"
                        },
                        {
                          "name": "Living State",
                          "target": {
                            "name": "Target Sequence",
                            "TargetList": [
                              {
                                "name": "Target Name",
                                "target": "{{Player Team All}}"
                              },
                              "Sort by Physical Positioning",
                              {
                                "name": "Target Index",
                                "indexType": "IndexStrict",
                                "indexValue": 1
                              }
                            ]
                          },
                          "livingState": "Mask_AliveOnly"
                        },
                        {
                          "name": "Living State",
                          "target": {
                            "name": "Target Sequence",
                            "TargetList": [
                              {
                                "name": "Target Name",
                                "target": "{{Player Team All}}"
                              },
                              "Sort by Physical Positioning",
                              {
                                "name": "Target Index",
                                "indexType": "IndexStrict",
                                "indexValue": 2
                              }
                            ]
                          },
                          "livingState": "Mask_AliveOnly"
                        }
                      ]
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
                        "skillName": "Skill02"
                      }
                    ]
                  }
                ],
                "failed": [
                  {
                    "name": "Declare Custom Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "variableName": "AIFlag",
                    "resetValue": 4
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
                    "skillName": "Skill03"
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
                "value2": 3
              },
              "passedValue": 0.5
            }
          ]
        },
        {
          "name": "HANDLER OPTION",
          "optionName": "UseSkill04",
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
                "resetValue": 1,
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
                "name": "Compare: Variable",
                "value1": "AIFlag",
                "compareType": "=",
                "value2": 4,
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