const configAbility = {
  "fileName": "1004032_Handling",
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
          "value": "RO_015_Phase01"
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
                "scope": "TargetEntity",
                "variableName": "AIFlag",
                "value": 3
              },
              {
                "name": "IF",
                "conditions": {
                  "name": "Compare: Variable",
                  "target": {
                    "name": "Target Sequence",
                    "TargetList": [
                      {
                        "name": "Target Name",
                        "target": "{{All Team Members(Exclude Self)}}"
                      },
                      {
                        "name": "Target Filter",
                        "conditions": {
                          "name": "Enemy ID",
                          "ID": 100203010,
                          "target": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "characterName": "Silvermane Cannoneer"
                        }
                      }
                    ]
                  },
                  "value1": "TeamCharacterCount",
                  "compareType": "<",
                  "value2": 3
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
                    "skillName": "Skill04"
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
                "name": "AND",
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
                    "value1": "PhaseFlag",
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
                "scope": "TargetEntity",
                "variableName": "AIFlag",
                "value": 4
              },
              {
                "name": "IF",
                "conditions": {
                  "name": "Compare: Variable",
                  "target": {
                    "name": "Target Sequence",
                    "TargetList": [
                      {
                        "name": "Target Name",
                        "target": "{{All Team Members(Exclude Self)}}"
                      },
                      {
                        "name": "Target Filter",
                        "conditions": {
                          "name": "Enemy ID",
                          "ID": 100203010,
                          "target": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "characterName": "Silvermane Cannoneer"
                        }
                      }
                    ]
                  },
                  "value1": "TeamCharacterCount",
                  "compareType": ">=",
                  "value2": 1
                },
                "passed": [
                  {
                    "name": "Choose Ability Target",
                    "skillName": "Skill02",
                    "target": {
                      "name": "Select by Target Pool",
                      "target": {
                        "name": "Target Sequence",
                        "TargetList": [
                          {
                            "name": "Target Name",
                            "target": "{{All Team Members(Exclude Self)}}"
                          },
                          {
                            "name": "Target Filter",
                            "conditions": {
                              "name": "Enemy ID",
                              "ID": 100203010,
                              "target": {
                                "name": "Target Name",
                                "target": "{{Parameter Target}}"
                              },
                              "characterName": "Silvermane Cannoneer"
                            }
                          }
                        ]
                      }
                    }
                  },
                  {
                    "name": "Use Ability Option",
                    "skillName": "Skill02"
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
                    "value2": 3,
                    "contextScope": "TargetEntity"
                  },
                  {
                    "name": "Compare: Variable",
                    "value1": "PhaseFlag",
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
                "scope": "TargetEntity",
                "variableName": "AIFlag",
                "value": 5
              },
              {
                "name": "IF",
                "conditions": {
                  "name": "Compare: Variable",
                  "target": {
                    "name": "Target Sequence",
                    "TargetList": [
                      {
                        "name": "Target Name",
                        "target": "{{All Team Members(Exclude Self)}}"
                      },
                      {
                        "name": "Target Filter",
                        "conditions": {
                          "name": "Enemy ID",
                          "ID": 100203010,
                          "target": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "characterName": "Silvermane Cannoneer"
                        }
                      }
                    ]
                  },
                  "value1": "TeamCharacterCount",
                  "compareType": "<",
                  "value2": 3
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
                    "skillName": "Skill04"
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
                "name": "AND",
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
                    "value1": "PhaseFlag",
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
                "scope": "TargetEntity",
                "variableName": "AIFlag",
                "value": 6
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
                    "value1": "AIFlag",
                    "compareType": "=",
                    "value2": 5,
                    "contextScope": "TargetEntity"
                  },
                  {
                    "name": "Compare: Variable",
                    "value1": "PhaseFlag",
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
                "scope": "TargetEntity",
                "variableName": "AIFlag",
                "value": 7
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
                    "value1": "AIFlag",
                    "compareType": "=",
                    "value2": 6,
                    "contextScope": "TargetEntity"
                  },
                  {
                    "name": "Compare: Variable",
                    "value1": "PhaseFlag",
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
                "scope": "TargetEntity",
                "variableName": "AIFlag",
                "value": 2
              },
              {
                "name": "IF",
                "conditions": {
                  "name": "Compare: Variable",
                  "target": {
                    "name": "Target Sequence",
                    "TargetList": [
                      {
                        "name": "Target Name",
                        "target": "{{All Team Members(Exclude Self)}}"
                      },
                      {
                        "name": "Target Filter",
                        "conditions": {
                          "name": "Enemy ID",
                          "ID": 100203010,
                          "target": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "characterName": "Silvermane Cannoneer"
                        }
                      }
                    ]
                  },
                  "value1": "TeamCharacterCount",
                  "compareType": ">=",
                  "value2": 1
                },
                "passed": [
                  {
                    "name": "Choose Ability Target",
                    "skillName": "Skill02",
                    "target": {
                      "name": "Select by Target Pool",
                      "target": {
                        "name": "Target Sequence",
                        "TargetList": [
                          {
                            "name": "Target Name",
                            "target": "{{All Team Members(Exclude Self)}}"
                          },
                          {
                            "name": "Target Filter",
                            "conditions": {
                              "name": "Enemy ID",
                              "ID": 100203010,
                              "target": {
                                "name": "Target Name",
                                "target": "{{Parameter Target}}"
                              },
                              "characterName": "Silvermane Cannoneer"
                            }
                          }
                        ]
                      }
                    }
                  },
                  {
                    "name": "Use Ability Option",
                    "skillName": "Skill02"
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
                    "value2": 7,
                    "contextScope": "TargetEntity"
                  },
                  {
                    "name": "Compare: Variable",
                    "value1": "PhaseFlag",
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
                "scope": "TargetEntity",
                "variableName": "AIFlag",
                "value": 13
              },
              {
                "name": "IF",
                "conditions": {
                  "name": "Compare: Variable",
                  "target": {
                    "name": "Target Sequence",
                    "TargetList": [
                      {
                        "name": "Target Name",
                        "target": "{{All Team Members(Exclude Self)}}"
                      },
                      {
                        "name": "Target Filter",
                        "conditions": {
                          "name": "Enemy ID",
                          "ID": 100203010,
                          "target": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "characterName": "Silvermane Cannoneer"
                        }
                      }
                    ]
                  },
                  "value1": "TeamCharacterCount",
                  "compareType": "<",
                  "value2": 3
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
                    "skillName": "Skill04"
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
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Compare: Variable",
                    "value1": "AIFlag",
                    "compareType": "=",
                    "value2": 12,
                    "contextScope": "TargetEntity"
                  },
                  {
                    "name": "Compare: Variable",
                    "value1": "PhaseFlag",
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
                "scope": "TargetEntity",
                "variableName": "AIFlag",
                "value": 14
              },
              {
                "name": "IF",
                "conditions": {
                  "name": "Compare: Variable",
                  "target": {
                    "name": "Target Sequence",
                    "TargetList": [
                      {
                        "name": "Target Name",
                        "target": "{{All Team Members(Exclude Self)}}"
                      },
                      {
                        "name": "Target Filter",
                        "conditions": {
                          "name": "Enemy ID",
                          "ID": 100203010,
                          "target": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "characterName": "Silvermane Cannoneer"
                        }
                      }
                    ]
                  },
                  "value1": "TeamCharacterCount",
                  "compareType": ">=",
                  "value2": 1
                },
                "passed": [
                  {
                    "name": "Choose Ability Target",
                    "skillName": "Skill02",
                    "target": {
                      "name": "Select by Target Pool",
                      "target": {
                        "name": "Target Sequence",
                        "TargetList": [
                          {
                            "name": "Target Name",
                            "target": "{{All Team Members(Exclude Self)}}"
                          },
                          {
                            "name": "Target Filter",
                            "conditions": {
                              "name": "Enemy ID",
                              "ID": 100203010,
                              "target": {
                                "name": "Target Name",
                                "target": "{{Parameter Target}}"
                              },
                              "characterName": "Silvermane Cannoneer"
                            }
                          }
                        ]
                      }
                    }
                  },
                  {
                    "name": "Use Ability Option",
                    "skillName": "Skill02"
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
                    "value2": 13,
                    "contextScope": "TargetEntity"
                  },
                  {
                    "name": "Compare: Variable",
                    "value1": "PhaseFlag",
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
                "scope": "TargetEntity",
                "variableName": "AIFlag",
                "value": 12
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
                    "value1": "AIFlag",
                    "compareType": "=",
                    "value2": 14,
                    "contextScope": "TargetEntity"
                  },
                  {
                    "name": "Compare: Variable",
                    "value1": "PhaseFlag",
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
                "scope": "TargetEntity",
                "variableName": "AIFlag",
                "value": 3
              },
              {
                "name": "IF",
                "conditions": {
                  "name": "Compare: Variable",
                  "target": {
                    "name": "Target Sequence",
                    "TargetList": [
                      {
                        "name": "Target Name",
                        "target": "{{All Team Members(Exclude Self)}}"
                      },
                      {
                        "name": "Target Filter",
                        "conditions": {
                          "name": "Enemy ID",
                          "ID": 100203010,
                          "target": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "characterName": "Silvermane Cannoneer"
                        }
                      }
                    ]
                  },
                  "value1": "TeamCharacterCount",
                  "compareType": "<",
                  "value2": 3
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
                    "skillName": "Skill04"
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
                "name": "AND",
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
                    "value1": "PhaseFlag",
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
                "scope": "TargetEntity",
                "variableName": "AIFlag",
                "value": 4
              },
              {
                "name": "IF",
                "conditions": {
                  "name": "Compare: Variable",
                  "target": {
                    "name": "Target Sequence",
                    "TargetList": [
                      {
                        "name": "Target Name",
                        "target": "{{All Team Members(Exclude Self)}}"
                      },
                      {
                        "name": "Target Filter",
                        "conditions": {
                          "name": "Enemy ID",
                          "ID": 100203010,
                          "target": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "characterName": "Silvermane Cannoneer"
                        }
                      }
                    ]
                  },
                  "value1": "TeamCharacterCount",
                  "compareType": ">=",
                  "value2": 1
                },
                "passed": [
                  {
                    "name": "Choose Ability Target",
                    "skillName": "Skill02",
                    "target": {
                      "name": "Select by Target Pool",
                      "target": {
                        "name": "Target Sequence",
                        "TargetList": [
                          {
                            "name": "Target Name",
                            "target": "{{All Team Members(Exclude Self)}}"
                          },
                          {
                            "name": "Target Filter",
                            "conditions": {
                              "name": "Enemy ID",
                              "ID": 100203010,
                              "target": {
                                "name": "Target Name",
                                "target": "{{Parameter Target}}"
                              },
                              "characterName": "Silvermane Cannoneer"
                            }
                          }
                        ]
                      }
                    }
                  },
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
                "name": "AND",
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
                    "value1": "PhaseFlag",
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
                "scope": "TargetEntity",
                "variableName": "AIFlag",
                "value": 5
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
                    "value1": "AIFlag",
                    "compareType": "=",
                    "value2": 4,
                    "contextScope": "TargetEntity"
                  },
                  {
                    "name": "Compare: Variable",
                    "value1": "PhaseFlag",
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
                "scope": "TargetEntity",
                "variableName": "AIFlag",
                "value": 6
              },
              {
                "name": "IF",
                "conditions": {
                  "name": "Compare: Variable",
                  "target": {
                    "name": "Target Sequence",
                    "TargetList": [
                      {
                        "name": "Target Name",
                        "target": "{{All Team Members(Exclude Self)}}"
                      },
                      {
                        "name": "Target Filter",
                        "conditions": {
                          "name": "Enemy ID",
                          "ID": 100203010,
                          "target": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "characterName": "Silvermane Cannoneer"
                        }
                      }
                    ]
                  },
                  "value1": "TeamCharacterCount",
                  "compareType": "<",
                  "value2": 3
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
                    "skillName": "Skill04"
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
                    "value1": "PhaseFlag",
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
                "scope": "TargetEntity",
                "variableName": "AIFlag",
                "value": 7
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
                    "value1": "AIFlag",
                    "compareType": "=",
                    "value2": 6,
                    "contextScope": "TargetEntity"
                  },
                  {
                    "name": "Compare: Variable",
                    "value1": "PhaseFlag",
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
                "scope": "TargetEntity",
                "variableName": "AIFlag",
                "value": 2
              },
              {
                "name": "IF",
                "conditions": {
                  "name": "Compare: Variable",
                  "target": {
                    "name": "Target Sequence",
                    "TargetList": [
                      {
                        "name": "Target Name",
                        "target": "{{All Team Members(Exclude Self)}}"
                      },
                      {
                        "name": "Target Filter",
                        "conditions": {
                          "name": "Enemy ID",
                          "ID": 100203010,
                          "target": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "characterName": "Silvermane Cannoneer"
                        }
                      }
                    ]
                  },
                  "value1": "TeamCharacterCount",
                  "compareType": ">=",
                  "value2": 1
                },
                "passed": [
                  {
                    "name": "Choose Ability Target",
                    "skillName": "Skill02",
                    "target": {
                      "name": "Select by Target Pool",
                      "target": {
                        "name": "Target Sequence",
                        "TargetList": [
                          {
                            "name": "Target Name",
                            "target": "{{All Team Members(Exclude Self)}}"
                          },
                          {
                            "name": "Target Filter",
                            "conditions": {
                              "name": "Enemy ID",
                              "ID": 100203010,
                              "target": {
                                "name": "Target Name",
                                "target": "{{Parameter Target}}"
                              },
                              "characterName": "Silvermane Cannoneer"
                            }
                          }
                        ]
                      }
                    }
                  },
                  {
                    "name": "Use Ability Option",
                    "skillName": "Skill02"
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
                    "value2": 7,
                    "contextScope": "TargetEntity"
                  },
                  {
                    "name": "Compare: Variable",
                    "value1": "PhaseFlag",
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
                "scope": "TargetEntity",
                "variableName": "AIFlag",
                "value": 13
              },
              {
                "name": "IF",
                "conditions": {
                  "name": "Compare: Variable",
                  "target": {
                    "name": "Target Sequence",
                    "TargetList": [
                      {
                        "name": "Target Name",
                        "target": "{{All Team Members(Exclude Self)}}"
                      },
                      {
                        "name": "Target Filter",
                        "conditions": {
                          "name": "Enemy ID",
                          "ID": 100203010,
                          "target": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "characterName": "Silvermane Cannoneer"
                        }
                      }
                    ]
                  },
                  "value1": "TeamCharacterCount",
                  "compareType": "<",
                  "value2": 3
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
                    "skillName": "Skill04"
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
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Compare: Variable",
                    "value1": "AIFlag",
                    "compareType": "=",
                    "value2": 12,
                    "contextScope": "TargetEntity"
                  },
                  {
                    "name": "Compare: Variable",
                    "value1": "PhaseFlag",
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
                "scope": "TargetEntity",
                "variableName": "AIFlag",
                "value": 14
              },
              {
                "name": "IF",
                "conditions": {
                  "name": "Compare: Variable",
                  "target": {
                    "name": "Target Sequence",
                    "TargetList": [
                      {
                        "name": "Target Name",
                        "target": "{{All Team Members(Exclude Self)}}"
                      },
                      {
                        "name": "Target Filter",
                        "conditions": {
                          "name": "Enemy ID",
                          "ID": 100203010,
                          "target": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "characterName": "Silvermane Cannoneer"
                        }
                      }
                    ]
                  },
                  "value1": "TeamCharacterCount",
                  "compareType": ">=",
                  "value2": 1
                },
                "passed": [
                  {
                    "name": "Choose Ability Target",
                    "skillName": "Skill02",
                    "target": {
                      "name": "Select by Target Pool",
                      "target": {
                        "name": "Target Sequence",
                        "TargetList": [
                          {
                            "name": "Target Name",
                            "target": "{{All Team Members(Exclude Self)}}"
                          },
                          {
                            "name": "Target Filter",
                            "conditions": {
                              "name": "Enemy ID",
                              "ID": 100203010,
                              "target": {
                                "name": "Target Name",
                                "target": "{{Parameter Target}}"
                              },
                              "characterName": "Silvermane Cannoneer"
                            }
                          }
                        ]
                      }
                    }
                  },
                  {
                    "name": "Use Ability Option",
                    "skillName": "Skill02"
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
                    "value2": 13,
                    "contextScope": "TargetEntity"
                  },
                  {
                    "name": "Compare: Variable",
                    "value1": "PhaseFlag",
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
                "scope": "TargetEntity",
                "variableName": "AIFlag",
                "value": 15
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
                    "value1": "AIFlag",
                    "compareType": "=",
                    "value2": 14,
                    "contextScope": "TargetEntity"
                  },
                  {
                    "name": "Compare: Variable",
                    "value1": "PhaseFlag",
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
                "scope": "TargetEntity",
                "variableName": "AIFlag",
                "value": 16
              },
              {
                "name": "IF",
                "conditions": {
                  "name": "Compare: Variable",
                  "target": {
                    "name": "Target Sequence",
                    "TargetList": [
                      {
                        "name": "Target Name",
                        "target": "{{All Team Members(Exclude Self)}}"
                      },
                      {
                        "name": "Target Filter",
                        "conditions": {
                          "name": "Enemy ID",
                          "ID": 100203010,
                          "target": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "characterName": "Silvermane Cannoneer"
                        }
                      }
                    ]
                  },
                  "value1": "TeamCharacterCount",
                  "compareType": "<",
                  "value2": 3
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
                    "skillName": "Skill04"
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
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Compare: Variable",
                    "value1": "AIFlag",
                    "compareType": "=",
                    "value2": 15,
                    "contextScope": "TargetEntity"
                  },
                  {
                    "name": "Compare: Variable",
                    "value1": "PhaseFlag",
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
                "scope": "TargetEntity",
                "variableName": "AIFlag",
                "value": 17
              },
              {
                "name": "IF",
                "conditions": {
                  "name": "Compare: Variable",
                  "target": {
                    "name": "Target Sequence",
                    "TargetList": [
                      {
                        "name": "Target Name",
                        "target": "{{All Team Members(Exclude Self)}}"
                      },
                      {
                        "name": "Target Filter",
                        "conditions": {
                          "name": "Enemy ID",
                          "ID": 100203010,
                          "target": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "characterName": "Silvermane Cannoneer"
                        }
                      }
                    ]
                  },
                  "value1": "TeamCharacterCount",
                  "compareType": ">=",
                  "value2": 1
                },
                "passed": [
                  {
                    "name": "Choose Ability Target",
                    "skillName": "Skill02",
                    "target": {
                      "name": "Select by Target Pool",
                      "target": {
                        "name": "Target Sequence",
                        "TargetList": [
                          {
                            "name": "Target Name",
                            "target": "{{All Team Members(Exclude Self)}}"
                          },
                          {
                            "name": "Target Filter",
                            "conditions": {
                              "name": "Enemy ID",
                              "ID": 100203010,
                              "target": {
                                "name": "Target Name",
                                "target": "{{Parameter Target}}"
                              },
                              "characterName": "Silvermane Cannoneer"
                            }
                          }
                        ]
                      }
                    }
                  },
                  {
                    "name": "Use Ability Option",
                    "skillName": "Skill02"
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
                    "value2": 16,
                    "contextScope": "TargetEntity"
                  },
                  {
                    "name": "Compare: Variable",
                    "value1": "PhaseFlag",
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
                "scope": "TargetEntity",
                "variableName": "AIFlag",
                "value": 12
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
                    "value1": "AIFlag",
                    "compareType": "=",
                    "value2": 17,
                    "contextScope": "TargetEntity"
                  },
                  {
                    "name": "Compare: Variable",
                    "value1": "PhaseFlag",
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
          "optionName": "UseSkill02",
          "optionGoal": {
            "name": "Sequence Event",
            "execute": [
              {
                "name": "IF",
                "conditions": {
                  "name": "Compare: Variable",
                  "target": {
                    "name": "Target Sequence",
                    "TargetList": [
                      {
                        "name": "Target Name",
                        "target": "{{All Team Members(Exclude Self)}}"
                      },
                      {
                        "name": "Target Filter",
                        "conditions": {
                          "name": "Enemy ID",
                          "ID": 100203010,
                          "target": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "characterName": "Silvermane Cannoneer"
                        }
                      }
                    ]
                  },
                  "value1": "TeamCharacterCount",
                  "compareType": ">=",
                  "value2": 1
                },
                "passed": [
                  {
                    "name": "Choose Ability Target",
                    "skillName": "Skill02",
                    "target": {
                      "name": "Select by Target Pool",
                      "target": {
                        "name": "Target Sequence",
                        "TargetList": [
                          {
                            "name": "Target Name",
                            "target": "{{All Team Members(Exclude Self)}}"
                          },
                          {
                            "name": "Target Filter",
                            "conditions": {
                              "name": "Enemy ID",
                              "ID": 100203010,
                              "target": {
                                "name": "Target Name",
                                "target": "{{Parameter Target}}"
                              },
                              "characterName": "Silvermane Cannoneer"
                            }
                          }
                        ]
                      }
                    }
                  },
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
                "name": "Compare: Variable",
                "value1": "AIFlag",
                "compareType": "=",
                "value2": 0,
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