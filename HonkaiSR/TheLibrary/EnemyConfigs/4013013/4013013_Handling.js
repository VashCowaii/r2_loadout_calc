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
                  "variableName": "AIFlag",
                  "value": 2
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "OR",
                    "conditionList": [
                      {
                        "name": "Living State",
                        "state": "Mask_AliveOnly",
                        "target": {
                          "name": "Target Sequence",
                          "Sequence": [
                            {
                              "name": "Target Name",
                              "target": "{{Player Team All}}"
                            },
                            {
                              "name": "Sort by Physical Positioning"
                            },
                            {
                              "name": "Target Index",
                              "indexType": "IndexStrict"
                            }
                          ]
                        }
                      },
                      {
                        "name": "Living State",
                        "state": "Mask_AliveOnly",
                        "target": {
                          "name": "Target Sequence",
                          "Sequence": [
                            {
                              "name": "Target Name",
                              "target": "{{Player Team All}}"
                            },
                            {
                              "name": "Sort by Physical Positioning"
                            },
                            {
                              "name": "Target Index",
                              "indexType": "IndexStrict",
                              "indexValue": 1
                            }
                          ]
                        }
                      },
                      {
                        "name": "Living State",
                        "state": "Mask_AliveOnly",
                        "target": {
                          "name": "Target Sequence",
                          "Sequence": [
                            {
                              "name": "Target Name",
                              "target": "{{Player Team All}}"
                            },
                            {
                              "name": "Sort by Physical Positioning"
                            },
                            {
                              "name": "Target Index",
                              "indexType": "IndexStrict",
                              "indexValue": 2
                            }
                          ]
                        }
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
            }
          ],
          "type": "DefaultDSE",
          "check": [
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
          "option": "UseSkill05",
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
                  "variableName": "AIFlag",
                  "value": 3
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
          "option": "UseSkill02",
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
                        "state": "Mask_AliveOnly",
                        "target": {
                          "name": "Target Sequence",
                          "Sequence": [
                            {
                              "name": "Target Name",
                              "target": "{{Player Team All}}"
                            },
                            {
                              "name": "Sort by Physical Positioning",
                              "byHighest": true
                            },
                            {
                              "name": "Target Index",
                              "indexType": "IndexStrict"
                            }
                          ]
                        }
                      },
                      {
                        "name": "Living State",
                        "state": "Mask_AliveOnly",
                        "target": {
                          "name": "Target Sequence",
                          "Sequence": [
                            {
                              "name": "Target Name",
                              "target": "{{Player Team All}}"
                            },
                            {
                              "name": "Sort by Physical Positioning",
                              "byHighest": true
                            },
                            {
                              "name": "Target Index",
                              "indexType": "IndexStrict",
                              "indexValue": 1
                            }
                          ]
                        }
                      },
                      {
                        "name": "Living State",
                        "state": "Mask_AliveOnly",
                        "target": {
                          "name": "Target Sequence",
                          "Sequence": [
                            {
                              "name": "Target Name",
                              "target": "{{Player Team All}}"
                            },
                            {
                              "name": "Sort by Physical Positioning",
                              "byHighest": true
                            },
                            {
                              "name": "Target Index",
                              "indexType": "IndexStrict",
                              "indexValue": 2
                            }
                          ]
                        }
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
            }
          ],
          "type": "DefaultDSE",
          "check": [
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
          "option": "UseSkill03",
          "goal": [
            {
              "name": "Sequence Event",
              "passed": [
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
                            "state": "Mask_AliveOnly",
                            "target": {
                              "name": "Target Sequence",
                              "Sequence": [
                                {
                                  "name": "Target Name",
                                  "target": "{{Player Team All}}"
                                },
                                {
                                  "name": "Sort by Physical Positioning"
                                },
                                {
                                  "name": "Target Index",
                                  "indexType": "IndexStrict"
                                }
                              ]
                            }
                          },
                          {
                            "name": "Living State",
                            "state": "Mask_AliveOnly",
                            "target": {
                              "name": "Target Sequence",
                              "Sequence": [
                                {
                                  "name": "Target Name",
                                  "target": "{{Player Team All}}"
                                },
                                {
                                  "name": "Sort by Physical Positioning"
                                },
                                {
                                  "name": "Target Index",
                                  "indexType": "IndexStrict",
                                  "indexValue": 1
                                }
                              ]
                            }
                          },
                          {
                            "name": "Living State",
                            "state": "Mask_AliveOnly",
                            "target": {
                              "name": "Target Sequence",
                              "Sequence": [
                                {
                                  "name": "Target Name",
                                  "target": "{{Player Team All}}"
                                },
                                {
                                  "name": "Sort by Physical Positioning"
                                },
                                {
                                  "name": "Target Index",
                                  "indexType": "IndexStrict",
                                  "indexValue": 2
                                }
                              ]
                            }
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
                      "name": "Use Ability Option",
                      "skillName": "Skill03"
                    }
                  ]
                }
              ]
            }
          ],
          "type": "DefaultDSE",
          "check": [
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
          "option": "UseSkill04",
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
                  "variableName": "AIFlag",
                  "value": 1
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