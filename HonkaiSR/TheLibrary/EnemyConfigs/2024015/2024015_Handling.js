const configAbility = {
  "fileName": "2024015_Handling",
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
          "name": "HANDLER OPTION GROUP",
          "option": "Monster_W2_Xuanlu_10_DecisionGroup_Phase1",
          "goal": [
            {
              "name": "HANDLER OPTION",
              "option": "UseSkill10",
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
                      "name": "Use Ability Option",
                      "skillName": "Skill10"
                    }
                  ]
                }
              ],
              "type": "DefaultDSE",
              "check": [
                {
                  "name": "Check Ability Use Condition",
                  "passedValue": 1,
                  "conditions": {
                    "name": "AND",
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
                        "target": {
                          "name": "Target Name",
                          "target": "{{All Team Members}}"
                        },
                        "value1": "TeamCharacterCount",
                        "compareType": "<=",
                        "value2": 4
                      }
                    ]
                  }
                }
              ]
            },
            {
              "name": "HANDLER OPTION",
              "option": "UseSkill11",
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
                      "value": 6
                    },
                    {
                      "name": "Use Ability Option",
                      "skillName": "Skill11"
                    }
                  ]
                }
              ],
              "type": "DefaultDSE",
              "check": [
                {
                  "name": "Check Ability Use Condition",
                  "passedValue": 1,
                  "conditions": {
                    "name": "AND",
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
                        "target": {
                          "name": "Target Name",
                          "target": "{{All Team Members}}"
                        },
                        "value1": "TeamCharacterCount",
                        "compareType": "<=",
                        "value2": 4
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
                      "variableName": "AIFlag",
                      "context": "TargetEntity",
                      "value": 1,
                      "max": 12
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
                  "passedValue": 1,
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
                        "name": "Compare: Variable",
                        "value1": "AIFlag",
                        "compareType": "=",
                        "value2": 3,
                        "contextScope": "TargetEntity"
                      },
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
                        "value2": 7,
                        "contextScope": "TargetEntity"
                      }
                    ]
                  }
                }
              ]
            },
            {
              "name": "HANDLER OPTION",
              "option": "UseSkill05_2",
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
                      "variableName": "AIFlag",
                      "context": "TargetEntity",
                      "value": 3,
                      "max": 12
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
                  "passedValue": 1,
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
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
                            "value2": 5,
                            "contextScope": "TargetEntity"
                          }
                        ]
                      },
                      {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{All Team Members}}"
                        },
                        "value1": "TeamCharacterCount",
                        "compareType": ">=",
                        "value2": 5
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
                        "value1": "AIFlag",
                        "compareType": "=",
                        "value2": 4,
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
                          "value": 5
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
                      "skillName": "Skill06"
                    }
                  ]
                }
              ],
              "type": "DefaultDSE",
              "check": [
                {
                  "name": "Check Ability Use Condition",
                  "passedValue": 1,
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
                        "value2": 8,
                        "contextScope": "TargetEntity"
                      }
                    ]
                  }
                }
              ]
            }
          ],
          "type": "DefaultDSE",
          "check": [
            {
              "name": "Check Ability Use Condition",
              "passedValue": 1,
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Compare: Variable",
                    "value1": "HP_Bars_Remaining",
                    "compareType": "=",
                    "value2": 1
                  }
                ]
              }
            }
          ]
        },
        {
          "name": "HANDLER OPTION GROUP",
          "option": "Monster_W2_Xuanlu_10_DecisionGroup_Phase2",
          "goal": [
            {
              "name": "HANDLER OPTION",
              "option": "UseSkill12",
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
                      "name": "Use Ability Option",
                      "skillName": "Skill12"
                    }
                  ]
                }
              ],
              "type": "DefaultDSE",
              "check": [
                {
                  "name": "Check Ability Use Condition",
                  "passedValue": 1,
                  "conditions": {
                    "name": "AND",
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
                        "target": {
                          "name": "Target Name",
                          "target": "{{All Team Members}}"
                        },
                        "value1": "TeamCharacterCount",
                        "compareType": "<=",
                        "value2": 4
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
                      "name": "Declare Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "scope": "TargetEntity",
                      "variableName": "AIFlag",
                      "value": 6
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
                  "passedValue": 1,
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "AIFlag",
                    "compareType": "=",
                    "value2": 5,
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
                      "skillName": "Skill05"
                    }
                  ]
                }
              ],
              "type": "DefaultDSE",
              "check": [
                {
                  "name": "Check Ability Use Condition",
                  "passedValue": 1,
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
                        "name": "Compare: Variable",
                        "value1": "AIFlag",
                        "compareType": "=",
                        "value2": 3,
                        "contextScope": "TargetEntity"
                      }
                    ]
                  }
                }
              ]
            },
            {
              "name": "HANDLER OPTION",
              "option": "UseSkill05_2",
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
                      "variableName": "AIFlag",
                      "context": "TargetEntity",
                      "value": 3,
                      "max": 12
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
                  "passedValue": 1,
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "OR",
                        "conditionList": [
                          {
                            "name": "Compare: Variable",
                            "value1": "AIFlag",
                            "compareType": "=",
                            "value2": 1,
                            "contextScope": "TargetEntity"
                          }
                        ]
                      },
                      {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{All Team Members}}"
                        },
                        "value1": "TeamCharacterCount",
                        "compareType": ">=",
                        "value2": 5
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
                        "value1": "AIFlag",
                        "compareType": "=",
                        "value2": 4,
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
                          "value": 5
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
                      "skillName": "Skill06"
                    }
                  ]
                }
              ],
              "type": "DefaultDSE",
              "check": [
                {
                  "name": "Check Ability Use Condition",
                  "passedValue": 1,
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
                        "value2": 6,
                        "contextScope": "TargetEntity"
                      }
                    ]
                  }
                }
              ]
            }
          ],
          "type": "DefaultDSE",
          "check": [
            {
              "name": "Check Ability Use Condition",
              "passedValue": 1,
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Compare: Variable",
                    "value1": "HP_Bars_Remaining",
                    "compareType": "=",
                    "value2": 2
                  }
                ]
              }
            }
          ]
        },
        {
          "name": "HANDLER OPTION GROUP",
          "option": "Monster_W2_Xuanlu_10_DecisionGroup_Phase3",
          "goal": [
            {
              "name": "HANDLER OPTION",
              "option": "UseSkill13",
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
                      "name": "Use Ability Option",
                      "skillName": "Skill13"
                    }
                  ]
                }
              ],
              "type": "DefaultDSE",
              "check": [
                {
                  "name": "Check Ability Use Condition",
                  "passedValue": 1,
                  "conditions": {
                    "name": "AND",
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
                        "target": {
                          "name": "Target Name",
                          "target": "{{All Team Members}}"
                        },
                        "value1": "TeamCharacterCount",
                        "compareType": "<=",
                        "value2": 4
                      }
                    ]
                  }
                }
              ]
            },
            {
              "name": "HANDLER OPTION",
              "option": "UseSkill07",
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
                      "value": 5
                    },
                    {
                      "name": "Use Ability Option",
                      "skillName": "Skill07"
                    }
                  ]
                }
              ],
              "type": "DefaultDSE",
              "check": [
                {
                  "name": "Check Ability Use Condition",
                  "passedValue": 1,
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "AIFlag",
                    "compareType": "=",
                    "value2": 4,
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
                      "skillName": "Skill05"
                    }
                  ]
                }
              ],
              "type": "DefaultDSE",
              "check": [
                {
                  "name": "Check Ability Use Condition",
                  "passedValue": 1,
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
                        "value2": 7,
                        "contextScope": "TargetEntity"
                      },
                      {
                        "name": "Compare: Variable",
                        "value1": "AIFlag",
                        "compareType": "=",
                        "value2": 8,
                        "contextScope": "TargetEntity"
                      }
                    ]
                  }
                }
              ]
            },
            {
              "name": "HANDLER OPTION",
              "option": "UseSkill05_2",
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
                      "variableName": "AIFlag",
                      "context": "TargetEntity",
                      "value": 7,
                      "max": 12
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
                  "passedValue": 1,
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "OR",
                        "conditionList": [
                          {
                            "name": "Compare: Variable",
                            "value1": "AIFlag",
                            "compareType": "=",
                            "value2": 1,
                            "contextScope": "TargetEntity"
                          }
                        ]
                      },
                      {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{All Team Members}}"
                        },
                        "value1": "TeamCharacterCount",
                        "compareType": ">=",
                        "value2": 5
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
                        "value1": "AIFlag",
                        "compareType": "=",
                        "value2": 9,
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
                          "value": 1
                        }
                      ],
                      "failed": [
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
                  "passedValue": 1,
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
                        "value2": 9,
                        "contextScope": "TargetEntity"
                      }
                    ]
                  }
                }
              ]
            }
          ],
          "type": "DefaultDSE",
          "check": [
            {
              "name": "Check Ability Use Condition",
              "passedValue": 1,
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
                    "value1": "FinalPhase",
                    "compareType": "=",
                    "value2": 0,
                    "contextScope": "TargetEntity"
                  }
                ]
              }
            }
          ]
        },
        {
          "name": "HANDLER OPTION GROUP",
          "option": "Monster_W2_Xuanlu_10_DecisionGroup_Skill08",
          "goal": [
            {
              "name": "HANDLER OPTION",
              "option": "UseSkill08",
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
                      "variableName": "CanUseUltra"
                    },
                    {
                      "name": "Use Ability Option",
                      "skillName": "Skill08"
                    }
                  ]
                }
              ],
              "type": "DefaultDSE",
              "check": [
                {
                  "name": "Check Ability Use Condition",
                  "passedValue": 0.9,
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Compare: Variable",
                        "value1": "CanUseUltra",
                        "compareType": "=",
                        "value2": 1,
                        "contextScope": "TargetEntity"
                      }
                    ]
                  }
                }
              ]
            }
          ],
          "weight": 99,
          "type": "DefaultDSE",
          "check": [
            {
              "name": "Check Ability Use Condition",
              "passedValue": 1,
              "conditions": {
                "name": "Compare: Variable",
                "value1": "CanUseUltra",
                "compareType": "=",
                "value2": 1,
                "contextScope": "TargetEntity"
              }
            }
          ]
        },
        {
          "name": "HANDLER OPTION GROUP",
          "option": "Monster_W2_Xuanlu_10_DecisionGroup_Phase3",
          "goal": [
            {
              "name": "HANDLER OPTION",
              "option": "UseSkill13",
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
                      "name": "Use Ability Option",
                      "skillName": "Skill13"
                    }
                  ]
                }
              ],
              "type": "DefaultDSE",
              "check": [
                {
                  "name": "Check Ability Use Condition",
                  "passedValue": 1,
                  "conditions": {
                    "name": "AND",
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
                        "target": {
                          "name": "Target Name",
                          "target": "{{All Team Members}}"
                        },
                        "value1": "TeamCharacterCount",
                        "compareType": "<=",
                        "value2": 4
                      }
                    ]
                  }
                }
              ]
            },
            {
              "name": "HANDLER OPTION",
              "option": "UseSkill07",
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
                      "value": 5
                    },
                    {
                      "name": "Use Ability Option",
                      "skillName": "Skill07"
                    }
                  ]
                }
              ],
              "type": "DefaultDSE",
              "check": [
                {
                  "name": "Check Ability Use Condition",
                  "passedValue": 1,
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "AIFlag",
                    "compareType": "=",
                    "value2": 4,
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
                      "skillName": "Skill05"
                    }
                  ]
                }
              ],
              "type": "DefaultDSE",
              "check": [
                {
                  "name": "Check Ability Use Condition",
                  "passedValue": 1,
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
                        "value2": 7,
                        "contextScope": "TargetEntity"
                      },
                      {
                        "name": "Compare: Variable",
                        "value1": "AIFlag",
                        "compareType": "=",
                        "value2": 8,
                        "contextScope": "TargetEntity"
                      }
                    ]
                  }
                }
              ]
            },
            {
              "name": "HANDLER OPTION",
              "option": "UseSkill05_2",
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
                      "variableName": "AIFlag",
                      "context": "TargetEntity",
                      "value": 7,
                      "max": 12
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
                  "passedValue": 1,
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "OR",
                        "conditionList": [
                          {
                            "name": "Compare: Variable",
                            "value1": "AIFlag",
                            "compareType": "=",
                            "value2": 1,
                            "contextScope": "TargetEntity"
                          }
                        ]
                      },
                      {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{All Team Members}}"
                        },
                        "value1": "TeamCharacterCount",
                        "compareType": ">=",
                        "value2": 5
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
                      "skillName": "Skill06"
                    }
                  ]
                }
              ],
              "type": "DefaultDSE",
              "check": [
                {
                  "name": "Check Ability Use Condition",
                  "passedValue": 1,
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
                        "value2": 9,
                        "contextScope": "TargetEntity"
                      }
                    ]
                  }
                }
              ]
            }
          ],
          "type": "DefaultDSE",
          "check": [
            {
              "name": "Check Ability Use Condition",
              "passedValue": 1,
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
                    "value1": "FinalPhase",
                    "compareType": "=",
                    "value2": 1,
                    "contextScope": "TargetEntity"
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