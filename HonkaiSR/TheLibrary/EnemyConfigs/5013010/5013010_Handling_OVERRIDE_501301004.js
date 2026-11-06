const configAbility = {
  "fileName": "5013010_Handling_OVERRIDE_501301004",
  "abilityType": "Handling_501301004",
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
                "scope": "TargetEntity",
                "variableName": "AIFlag",
                "value": 3
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
              "passedValue": 0.5,
              "conditions": {
                "name": "Compare: Variable",
                "value1": "AIFlag",
                "compareType": "=",
                "value2": 1,
                "contextScope": "TargetEntity"
              }
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
                "value": 1
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
              "passedValue": 0.5,
              "conditions": {
                "name": "Compare: Variable",
                "value1": "AIFlag",
                "compareType": "=",
                "value2": 5
              }
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
                "value": 5
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
              "passedValue": 0.5,
              "conditions": {
                "name": "Compare: Variable",
                "value1": "AIFlag",
                "compareType": "=",
                "value2": 2
              }
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
                  "name": "OR",
                  "conditionList": [
                    {
                      "name": "Has Modifier",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"763823194\">OneMore</a>"
                    },
                    {
                      "name": "Has Modifier",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Level Entity}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-1582140309\">MModifier_Monster_W4_Claymore_02_Ability03_Mark</a>"
                    }
                  ]
                },
                "passed": [
                  {
                    "name": "IF",
                    "conditions": {
                      "name": "Has Modifier",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Level Entity}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-1582140309\">MModifier_Monster_W4_Claymore_02_Ability03_Mark</a>"
                    },
                    "passed": [
                      {
                        "name": "Declare Custom Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        "variableName": "AIFlag",
                        "value": 5
                      }
                    ]
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
                ],
                "failed": [
                  {
                    "name": "Declare Custom Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "variableName": "AIFlag",
                    "value": 4
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
                    "name": "Remove Events/Bonuses",
                    "to": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"763823194\">OneMore</a>"
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
              "passedValue": 0.5,
              "conditions": {
                "name": "Compare: Variable",
                "value1": "AIFlag",
                "compareType": "=",
                "value2": 3
              }
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
                "scope": "TargetEntity",
                "variableName": "AIFlag",
                "value": 2
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
              "passedValue": 0.5,
              "conditions": {
                "name": "Compare: Variable",
                "value1": "AIFlag",
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