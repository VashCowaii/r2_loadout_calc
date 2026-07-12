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
          "option": "Monster_W4_Mascot_00_DecisionGroup_Mode1",
          "goal": [
            {
              "name": "HANDLER OPTION",
              "option": "UseSkillCondition01",
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
                      "variableName": "AIFlag"
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
                  }
                }
              ]
            },
            {
              "name": "HANDLER OPTION",
              "option": "UseSkillCondition02",
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
                      "variableName": "AIFlag"
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
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"-1085505493\">Enemy_W4_Mascot_EscapingCharge01</a>[<span class=\"descriptionNumberColor\">Brainteaser</span>]"
                      }
                    ]
                  }
                }
              ]
            },
            {
              "name": "HANDLER OPTION",
              "option": "UseSkillCondition03",
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
                      "variableName": "AIFlag"
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
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"-1068727874\">Enemy_W4_Mascot_EscapingCharge02</a>[<span class=\"descriptionNumberColor\">Brainteaser</span>]"
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
                "name": "Compare: Variable",
                "value1": "Sequence_i",
                "compareType": "=",
                "value2": 0
              }
            }
          ]
        },
        {
          "name": "HANDLER OPTION GROUP",
          "option": "Monster_W4_Mascot_00_DecisionGroup_Mode2",
          "goal": [
            {
              "name": "HANDLER OPTION",
              "option": "UseSkillCondition01",
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
                      "variableName": "AIFlag"
                    },
                    {
                      "name": "SWITCH",
                      "switchValue": {
                        "operator": "Variables[0] (ForwardReverseFlag) || RETURN",
                        "displayLines": "ForwardReverseFlag",
                        "constants": [],
                        "variables": [
                          "ForwardReverseFlag"
                        ]
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
                              "scope": "TargetEntity",
                              "variableName": "Sequence_i",
                              "value": 2
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
                              "scope": "TargetEntity",
                              "variableName": "Sequence_i",
                              "value": 2
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
                              "scope": "TargetEntity",
                              "variableName": "Sequence_i",
                              "value": 2
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
                                "operator": "Variables[0] (AIFlag) || RETURN",
                                "displayLines": "AIFlag",
                                "constants": [],
                                "variables": [
                                  "AIFlag"
                                ]
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
                                      "scope": "TargetEntity",
                                      "variableName": "Sequence_i",
                                      "value": 1
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
                                      "scope": "TargetEntity",
                                      "variableName": "Sequence_i",
                                      "value": 1
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
                                      "scope": "TargetEntity",
                                      "variableName": "Sequence_i",
                                      "value": 1
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
                }
              ],
              "type": "DefaultDSE",
              "check": [
                {
                  "name": "Check Ability Use Condition",
                  "passedValue": 1,
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "Sequence_i",
                    "compareType": "=",
                    "value2": 1,
                    "contextScope": "TargetEntity"
                  }
                }
              ]
            },
            {
              "name": "HANDLER OPTION",
              "option": "UseSkillCondition02",
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
                      "variableName": "AIFlag"
                    },
                    {
                      "name": "SWITCH",
                      "switchValue": {
                        "operator": "Variables[0] (Sequence_i) || RETURN",
                        "displayLines": "Sequence_i",
                        "constants": [],
                        "variables": [
                          "Sequence_i"
                        ]
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
                              "scope": "TargetEntity",
                              "variableName": "Sequence_i",
                              "value": 3
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
                              "scope": "TargetEntity",
                              "variableName": "Sequence_i",
                              "value": 3
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
                              "scope": "TargetEntity",
                              "variableName": "Sequence_i",
                              "value": 3
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
                                "operator": "Variables[0] (AIFlag) || RETURN",
                                "displayLines": "AIFlag",
                                "constants": [],
                                "variables": [
                                  "AIFlag"
                                ]
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
                                      "scope": "TargetEntity",
                                      "variableName": "Sequence_i",
                                      "value": 1
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
                                      "scope": "TargetEntity",
                                      "variableName": "Sequence_i",
                                      "value": 1
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
                                      "scope": "TargetEntity",
                                      "variableName": "Sequence_i",
                                      "value": 1
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
                }
              ],
              "type": "DefaultDSE",
              "check": [
                {
                  "name": "Check Ability Use Condition",
                  "passedValue": 1,
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "Sequence_i",
                    "compareType": "=",
                    "value2": 2,
                    "contextScope": "TargetEntity"
                  }
                }
              ]
            },
            {
              "name": "HANDLER OPTION",
              "option": "UseSkillCondition03",
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
                      "variableName": "AIFlag"
                    },
                    {
                      "name": "SWITCH",
                      "switchValue": {
                        "operator": "Variables[0] (AIFlag) || RETURN",
                        "displayLines": "AIFlag",
                        "constants": [],
                        "variables": [
                          "AIFlag"
                        ]
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
                              "scope": "TargetEntity",
                              "variableName": "Sequence_i",
                              "value": 1
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
                              "scope": "TargetEntity",
                              "variableName": "Sequence_i",
                              "value": 1
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
                              "scope": "TargetEntity",
                              "variableName": "Sequence_i",
                              "value": 1
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
                "name": "Compare: Variable",
                "value1": "Sequence_i",
                "compareType": ">",
                "value2": 0
              }
            }
          ]
        }
      ]
    }
  ],
  "references": []
}