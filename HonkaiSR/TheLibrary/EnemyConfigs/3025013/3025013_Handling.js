const configAbility = {
  "fileName": "3025013_Handling",
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
          "value": "W3_Sunday_00_Phase01"
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
          "optionGroupName": "Monster_W3_Sunday_00_DecisionGroup_Phase1_Boss",
          "optionGroupGoal": [
            {
              "name": "HANDLER OPTION",
              "optionName": "UseSkill01",
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
                    "value": 1,
                    "max": 12
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
                  },
                  "passedValue": 0.4
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
                    "name": "Define Custom Variable with Added Value",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "variableName": "AIFlag",
                    "context": "TargetEntity",
                    "value": 1,
                    "max": 12
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
                    "name": "OR",
                    "conditionList": [
                      {
                        "name": "Compare: Variable",
                        "value1": "AIFlag",
                        "compareType": "=",
                        "value2": 5,
                        "contextScope": "TargetEntity"
                      },
                      {
                        "name": "Compare: Variable",
                        "value1": "AIFlag",
                        "compareType": "=",
                        "value2": 11,
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
              "optionName": "UseSkill03",
              "optionGoal": {
                "name": "Sequence Event",
                "execute": [
                  {
                    "name": "IF",
                    "conditions": {
                      "name": "Compare: Variable",
                      "value1": "AIFlag",
                      "compareType": "=",
                      "value2": 6,
                      "contextScope": "TargetEntity"
                    },
                    "passed": [
                      {
                        "name": "Declare Custom Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        "scope": "TargetEntity",
                        "variableName": "AIFlag",
                        "value": 7
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
                        "variableName": "AIFlag",
                        "value": 1
                      }
                    ]
                  },
                  {
                    "name": "Use Ability Option",
                    "skillName": "Skill03"
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
                        "value2": 6,
                        "contextScope": "TargetEntity"
                      },
                      {
                        "name": "Compare: Variable",
                        "value1": "AIFlag",
                        "compareType": "=",
                        "value2": 12,
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
                    "value": 3
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
                    "name": "OR",
                    "conditionList": [
                      {
                        "name": "Compare: Variable",
                        "value1": "AIFlag",
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
                    "scope": "TargetEntity",
                    "variableName": "AIFlag",
                    "value": 4
                  },
                  {
                    "name": "Define Custom Variable with Team Count",
                    "variableName": "Skill05AssistNumber",
                    "readTarget": {
                      "name": "Target Name",
                      "target": "{{All Team Members(Exclude Self)}}"
                    },
                    "conditions": {
                      "name": "OR",
                      "conditionList": [
                        {
                          "name": "Has Flag",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "flagName": "STAT_CTRL"
                        },
                        {
                          "name": "Has Flag",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "flagName": "Break"
                        },
                        {
                          "name": "Has Flag",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "flagName": "DisableAction"
                        }
                      ],
                      "invertCondition": true
                    }
                  },
                  {
                    "name": "IF",
                    "conditions": {
                      "name": "Compare: Variable",
                      "value1": "Skill05AssistNumber",
                      "compareType": ">=",
                      "value2": 1,
                      "contextScope": "TargetEntity"
                    },
                    "passed": [
                      {
                        "name": "Use Ability Option",
                        "skillName": "Skill05"
                      }
                    ],
                    "failed": [
                      {
                        "name": "Use Ability Option",
                        "skillName": "Skill052"
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
                      }
                    ]
                  },
                  "passedValue": 0.4
                }
              ]
            },
            {
              "name": "HANDLER OPTION",
              "optionName": "UseSkill042",
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
                    "value": 9
                  },
                  {
                    "name": "Use Ability Option",
                    "skillName": "Skill042"
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
                        "value2": 8,
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
              "optionName": "UseSkill06",
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
                    "value": 10
                  },
                  {
                    "name": "Define Custom Variable with Team Count",
                    "variableName": "Skill05AssistNumber",
                    "readTarget": {
                      "name": "Target Name",
                      "target": "{{All Team Members(Exclude Self)}}"
                    },
                    "conditions": {
                      "name": "OR",
                      "conditionList": [
                        {
                          "name": "Has Flag",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "flagName": "STAT_CTRL"
                        },
                        {
                          "name": "Has Flag",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "flagName": "Break"
                        },
                        {
                          "name": "Has Flag",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "flagName": "DisableAction"
                        }
                      ],
                      "invertCondition": true
                    }
                  },
                  {
                    "name": "IF",
                    "conditions": {
                      "name": "Compare: Variable",
                      "value1": "Skill05AssistNumber",
                      "compareType": ">=",
                      "value2": 1,
                      "contextScope": "TargetEntity"
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
                        "skillName": "Skill052"
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
                        "value2": 9,
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
              "optionName": "UseSkill07",
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
                    "value": 1,
                    "max": 12
                  },
                  {
                    "name": "Use Ability Option",
                    "skillName": "Skill07"
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
                        "value2": 4,
                        "contextScope": "TargetEntity"
                      },
                      {
                        "name": "Compare: Variable",
                        "value1": "AIFlag",
                        "compareType": "=",
                        "value2": 10,
                        "contextScope": "TargetEntity"
                      }
                    ]
                  },
                  "passedValue": 0.4
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
                "value1": "HP_Bars_Remaining",
                "compareType": "=",
                "value2": 1
              },
              "passedValue": 1
            }
          ]
        },
        {
          "name": "HANDLER OPTION GROUP",
          "optionGroupName": "Monster_W3_Sunday_00_DecisionGroup_Phase2_Boss",
          "optionGroupGoal": [
            {
              "name": "HANDLER OPTION",
              "optionName": "UseSkill09",
              "optionGoal": {
                "name": "Sequence Event",
                "execute": [
                  {
                    "name": "Use Ability Option",
                    "skillName": "Skill09"
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
                        "value1": "W3_Sunday_00_TimePause_ActionCounter",
                        "compareType": ">=",
                        "value2": 1,
                        "contextScope": "TargetEntity"
                      },
                      {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"1481304918\">Enemy_W3_Sunday_Ability08_TheWorld_V4</a>[<span class=\"descriptionNumberColor\">Im Anfang war die Kraft</span>]",
                        "invertCondition": true
                      }
                    ]
                  },
                  "passedValue": 0.5
                }
              ]
            },
            {
              "name": "HANDLER OPTION",
              "optionName": "UseSkill10",
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
                    "value": 1
                  },
                  {
                    "name": "Use Ability Option",
                    "skillName": "Skill10"
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
                        "value1": "W3_Sunday_00_TimePause_ActionCounter",
                        "compareType": "<=",
                        "value2": 0,
                        "contextScope": "TargetEntity"
                      },
                      {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"-121792370\">Enemy_W3_Sunday_IF_Ability08_TheWorld_V4</a>"
                      }
                    ]
                  },
                  "passedValue": 0.6
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
                "value1": "HP_Bars_Remaining",
                "compareType": "=",
                "value2": 2
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