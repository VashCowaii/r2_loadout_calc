const configAbility = {
  "fileName": "4012050_Handling",
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
          "value": "DG_010_Phase01"
        },
        {
          "name": "Define Handler Boolean",
          "variableName": "ForbidClearSkillUseRecord",
          "value": true
        }
      ],
      "options": [
        {
          "name": "HANDLER OPTION GROUP",
          "optionGroupName": "Monster_W4_Mascot_00_DecisionGroup_Mode1",
          "optionGroupGoal": [
            {
              "name": "HANDLER OPTION",
              "optionName": "UseSkillCondition01",
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
                    "scope": "TargetEntity"
                  },
                  {
                    "name": "IF",
                    "conditions": {
                      "name": "Compare: Variable",
                      "value1": "ForwardReverseFlag",
                      "compareType": "=",
                      "value2": 0,
                      "contextScope": "TargetEntity"
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
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"-1102283112\">Enemy_W4_Mascot_EscapingCharge00</a>[<span class=\"descriptionNumberColor\">Brainteaser</span>]"
                      }
                    ]
                  },
                  "passedValue": 1
                }
              ]
            },
            {
              "name": "HANDLER OPTION",
              "optionName": "UseSkillCondition02",
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
                    "scope": "TargetEntity"
                  },
                  {
                    "name": "IF",
                    "conditions": {
                      "name": "Compare: Variable",
                      "value1": "ForwardReverseFlag",
                      "compareType": "=",
                      "value2": 0,
                      "contextScope": "TargetEntity"
                    },
                    "passed": [
                      {
                        "name": "Use Ability Option",
                        "skillName": "Skill03"
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
                    "name": "OR",
                    "conditionList": [
                      {
                        "name": "Compare: Variable",
                        "value1": "AIFlag",
                        "compareType": "=",
                        "value2": 2,
                        "contextScope": "TargetEntity"
                      },
                      {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"-1085505493\">Enemy_W4_Mascot_EscapingCharge01</a>[<span class=\"descriptionNumberColor\">Brainteaser</span>]"
                      }
                    ]
                  },
                  "passedValue": 1
                }
              ]
            },
            {
              "name": "HANDLER OPTION",
              "optionName": "UseSkillCondition03",
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
                    "scope": "TargetEntity"
                  },
                  {
                    "name": "IF",
                    "conditions": {
                      "name": "Compare: Variable",
                      "value1": "ForwardReverseFlag",
                      "compareType": "=",
                      "value2": 0,
                      "contextScope": "TargetEntity"
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
                    "name": "OR",
                    "conditionList": [
                      {
                        "name": "Compare: Variable",
                        "value1": "AIFlag",
                        "compareType": "=",
                        "value2": 3,
                        "contextScope": "TargetEntity"
                      },
                      {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"-1068727874\">Enemy_W4_Mascot_EscapingCharge02</a>[<span class=\"descriptionNumberColor\">Brainteaser</span>]"
                      }
                    ]
                  },
                  "passedValue": 1
                }
              ]
            }
          ],
          "scoreType": "DefaultDSE",
          "optionCheck": [
            {
              "name": "Check Ability Use Condition",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "Sequence_i",
                "compareType": "=",
                "value2": 0
              },
              "passedValue": 1
            }
          ]
        },
        {
          "name": "HANDLER OPTION GROUP",
          "optionGroupName": "Monster_W4_Mascot_00_DecisionGroup_Mode2",
          "optionGroupGoal": [
            {
              "name": "HANDLER OPTION",
              "optionName": "UseSkillCondition01",
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
                    "scope": "TargetEntity"
                  },
                  {
                    "name": "SWITCH",
                    "switchValue": {
                      "displayLines": "Sequence_i"
                    },
                    "caseEvents": [
                      {
                        "name": "SWITCH CONDITON",
                        "caseValueIs": 1,
                        "execute": [
                          {
                            "name": "Declare Custom Variable",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Caster}}"
                            },
                            "variableName": "Sequence_i",
                            "resetValue": 2,
                            "scope": "TargetEntity"
                          },
                          {
                            "name": "Use Ability Option",
                            "skillName": "Skill01"
                          }
                        ]
                      },
                      {
                        "name": "SWITCH CONDITON",
                        "caseValueIs": 2,
                        "execute": [
                          {
                            "name": "Declare Custom Variable",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Caster}}"
                            },
                            "variableName": "Sequence_i",
                            "resetValue": 2,
                            "scope": "TargetEntity"
                          },
                          {
                            "name": "Use Ability Option",
                            "skillName": "Skill02"
                          }
                        ]
                      },
                      {
                        "name": "SWITCH CONDITON",
                        "caseValueIs": 3,
                        "execute": [
                          {
                            "name": "Declare Custom Variable",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Caster}}"
                            },
                            "variableName": "Sequence_i",
                            "resetValue": 2,
                            "scope": "TargetEntity"
                          },
                          {
                            "name": "Use Ability Option",
                            "skillName": "Skill03"
                          }
                        ]
                      },
                      {
                        "name": "SWITCH CONDITON",
                        "caseValueIs": 0,
                        "execute": [
                          {
                            "name": "SWITCH",
                            "switchValue": {
                              "displayLines": "ForwardReverseFlag"
                            },
                            "caseEvents": [
                              {
                                "name": "SWITCH CONDITON",
                                "caseValueIs": 1,
                                "execute": [
                                  {
                                    "name": "Declare Custom Variable",
                                    "target": {
                                      "name": "Target Name",
                                      "target": "{{Caster}}"
                                    },
                                    "variableName": "Sequence_i",
                                    "resetValue": 1,
                                    "scope": "TargetEntity"
                                  },
                                  {
                                    "name": "Use Ability Option",
                                    "skillName": "Skill01"
                                  }
                                ]
                              },
                              {
                                "name": "SWITCH CONDITON",
                                "caseValueIs": 2,
                                "execute": [
                                  {
                                    "name": "Declare Custom Variable",
                                    "target": {
                                      "name": "Target Name",
                                      "target": "{{Caster}}"
                                    },
                                    "variableName": "Sequence_i",
                                    "resetValue": 1,
                                    "scope": "TargetEntity"
                                  },
                                  {
                                    "name": "Use Ability Option",
                                    "skillName": "Skill02"
                                  }
                                ]
                              },
                              {
                                "name": "SWITCH CONDITON",
                                "caseValueIs": 3,
                                "execute": [
                                  {
                                    "name": "Declare Custom Variable",
                                    "target": {
                                      "name": "Target Name",
                                      "target": "{{Caster}}"
                                    },
                                    "variableName": "Sequence_i",
                                    "resetValue": 1,
                                    "scope": "TargetEntity"
                                  },
                                  {
                                    "name": "Use Ability Option",
                                    "skillName": "Skill03"
                                  }
                                ]
                              }
                            ]
                          }
                        ]
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
                    "value1": "Sequence_i",
                    "compareType": "=",
                    "value2": 1,
                    "contextScope": "TargetEntity"
                  },
                  "passedValue": 1
                }
              ]
            },
            {
              "name": "HANDLER OPTION",
              "optionName": "UseSkillCondition02",
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
                    "scope": "TargetEntity"
                  },
                  {
                    "name": "SWITCH",
                    "switchValue": {
                      "displayLines": "AIFlag"
                    },
                    "caseEvents": [
                      {
                        "name": "SWITCH CONDITON",
                        "caseValueIs": 1,
                        "execute": [
                          {
                            "name": "Declare Custom Variable",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Caster}}"
                            },
                            "variableName": "Sequence_i",
                            "resetValue": 3,
                            "scope": "TargetEntity"
                          },
                          {
                            "name": "Use Ability Option",
                            "skillName": "Skill01"
                          }
                        ]
                      },
                      {
                        "name": "SWITCH CONDITON",
                        "caseValueIs": 2,
                        "execute": [
                          {
                            "name": "Declare Custom Variable",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Caster}}"
                            },
                            "variableName": "Sequence_i",
                            "resetValue": 3,
                            "scope": "TargetEntity"
                          },
                          {
                            "name": "Use Ability Option",
                            "skillName": "Skill02"
                          }
                        ]
                      },
                      {
                        "name": "SWITCH CONDITON",
                        "caseValueIs": 3,
                        "execute": [
                          {
                            "name": "Declare Custom Variable",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Caster}}"
                            },
                            "variableName": "Sequence_i",
                            "resetValue": 3,
                            "scope": "TargetEntity"
                          },
                          {
                            "name": "Use Ability Option",
                            "skillName": "Skill03"
                          }
                        ]
                      },
                      {
                        "name": "SWITCH CONDITON",
                        "caseValueIs": 0,
                        "execute": [
                          {
                            "name": "SWITCH",
                            "switchValue": {
                              "displayLines": "ForwardReverseFlag"
                            },
                            "caseEvents": [
                              {
                                "name": "SWITCH CONDITON",
                                "caseValueIs": 1,
                                "execute": [
                                  {
                                    "name": "Declare Custom Variable",
                                    "target": {
                                      "name": "Target Name",
                                      "target": "{{Caster}}"
                                    },
                                    "variableName": "Sequence_i",
                                    "resetValue": 1,
                                    "scope": "TargetEntity"
                                  },
                                  {
                                    "name": "Use Ability Option",
                                    "skillName": "Skill01"
                                  }
                                ]
                              },
                              {
                                "name": "SWITCH CONDITON",
                                "caseValueIs": 2,
                                "execute": [
                                  {
                                    "name": "Declare Custom Variable",
                                    "target": {
                                      "name": "Target Name",
                                      "target": "{{Caster}}"
                                    },
                                    "variableName": "Sequence_i",
                                    "resetValue": 1,
                                    "scope": "TargetEntity"
                                  },
                                  {
                                    "name": "Use Ability Option",
                                    "skillName": "Skill02"
                                  }
                                ]
                              },
                              {
                                "name": "SWITCH CONDITON",
                                "caseValueIs": 3,
                                "execute": [
                                  {
                                    "name": "Declare Custom Variable",
                                    "target": {
                                      "name": "Target Name",
                                      "target": "{{Caster}}"
                                    },
                                    "variableName": "Sequence_i",
                                    "resetValue": 1,
                                    "scope": "TargetEntity"
                                  },
                                  {
                                    "name": "Use Ability Option",
                                    "skillName": "Skill03"
                                  }
                                ]
                              }
                            ]
                          }
                        ]
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
                    "value1": "Sequence_i",
                    "compareType": "=",
                    "value2": 2,
                    "contextScope": "TargetEntity"
                  },
                  "passedValue": 1
                }
              ]
            },
            {
              "name": "HANDLER OPTION",
              "optionName": "UseSkillCondition03",
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
                    "scope": "TargetEntity"
                  },
                  {
                    "name": "SWITCH",
                    "switchValue": {
                      "displayLines": "ForwardReverseFlag"
                    },
                    "caseEvents": [
                      {
                        "name": "SWITCH CONDITON",
                        "caseValueIs": 1,
                        "execute": [
                          {
                            "name": "Declare Custom Variable",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Caster}}"
                            },
                            "variableName": "Sequence_i",
                            "resetValue": 1,
                            "scope": "TargetEntity"
                          },
                          {
                            "name": "Use Ability Option",
                            "skillName": "Skill01"
                          }
                        ]
                      },
                      {
                        "name": "SWITCH CONDITON",
                        "caseValueIs": 2,
                        "execute": [
                          {
                            "name": "Declare Custom Variable",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Caster}}"
                            },
                            "variableName": "Sequence_i",
                            "resetValue": 1,
                            "scope": "TargetEntity"
                          },
                          {
                            "name": "Use Ability Option",
                            "skillName": "Skill02"
                          }
                        ]
                      },
                      {
                        "name": "SWITCH CONDITON",
                        "caseValueIs": 3,
                        "execute": [
                          {
                            "name": "Declare Custom Variable",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Caster}}"
                            },
                            "variableName": "Sequence_i",
                            "resetValue": 1,
                            "scope": "TargetEntity"
                          },
                          {
                            "name": "Use Ability Option",
                            "skillName": "Skill03"
                          }
                        ]
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
                    "name": "OR",
                    "conditionList": [
                      {
                        "name": "Compare: Variable",
                        "value1": "Sequence_i",
                        "compareType": "=",
                        "value2": 3,
                        "contextScope": "TargetEntity"
                      },
                      {
                        "name": "Compare: Variable",
                        "value1": "Sequence_i",
                        "compareType": "=",
                        "value2": 0.5,
                        "contextScope": "TargetEntity"
                      }
                    ]
                  },
                  "passedValue": 1
                }
              ]
            }
          ],
          "scoreType": "DefaultDSE",
          "optionCheck": [
            {
              "name": "Check Ability Use Condition",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "Sequence_i",
                "compareType": ">",
                "value2": 0
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