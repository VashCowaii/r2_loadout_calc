const configAbility = {
  "fileName": "3003043_Handling",
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
          "value": "XP_Elite02_00_Phase01"
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
                  "name": "Choose Ability Target",
                  "skillName": "Skill02",
                  "target": {
                    "name": "Select by Modifier Name",
                    "modifier": "Standard_CTRL_Sleep[<span class=\"descriptionNumberColor\">Alien Dream</span>]",
                    "target": null,
                    "invertCondition": true
                  }
                },
                {
                  "name": "Use Ability Option",
                  "skillName": "Skill02"
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
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"941590351\">Monster_W3_FigureBoss_Standard_TheChosenOne</a>[<span class=\"descriptionNumberColor\">Impresario</span>]",
                    "invertCondition": true
                  },
                  {
                    "name": "Compare: Variable",
                    "value1": "AIFlag",
                    "compareType": "=",
                    "value2": 1,
                    "contextScope": "TargetEntity"
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
                  "name": "Choose Ability Target",
                  "skillName": "Skill01",
                  "target": {
                    "name": "Select by Modifier Name",
                    "modifier": "Standard_CTRL_Sleep[<span class=\"descriptionNumberColor\">Alien Dream</span>]",
                    "target": null
                  }
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
              "passedValue": 1,
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"941590351\">Monster_W3_FigureBoss_Standard_TheChosenOne</a>[<span class=\"descriptionNumberColor\">Impresario</span>]",
                    "invertCondition": true
                  },
                  {
                    "name": "Compare: Variable",
                    "value1": "AIFlag",
                    "compareType": "=",
                    "value2": 2,
                    "contextScope": "TargetEntity"
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
                  "name": "Choose Ability Target",
                  "skillName": "Skill02",
                  "target": {
                    "name": "Select by Modifier Name",
                    "modifier": "Standard_CTRL_Sleep[<span class=\"descriptionNumberColor\">Alien Dream</span>]",
                    "target": null,
                    "invertCondition": true
                  }
                },
                {
                  "name": "Use Ability Option",
                  "skillName": "Skill02"
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
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"941590351\">Monster_W3_FigureBoss_Standard_TheChosenOne</a>[<span class=\"descriptionNumberColor\">Impresario</span>]",
                    "invertCondition": true
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
                  "value": 5
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
              "passedValue": 1,
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"941590351\">Monster_W3_FigureBoss_Standard_TheChosenOne</a>[<span class=\"descriptionNumberColor\">Impresario</span>]",
                    "invertCondition": true
                  },
                  {
                    "name": "Compare: Variable",
                    "value1": "AIFlag",
                    "compareType": "=",
                    "value2": 4,
                    "contextScope": "TargetEntity"
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
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"941590351\">Monster_W3_FigureBoss_Standard_TheChosenOne</a>[<span class=\"descriptionNumberColor\">Impresario</span>]",
                    "invertCondition": true
                  },
                  {
                    "name": "Compare: Variable",
                    "value1": "AIFlag",
                    "compareType": "=",
                    "value2": 5,
                    "contextScope": "TargetEntity"
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
                  "name": "Choose Ability Target",
                  "skillName": "Skill02",
                  "target": {
                    "name": "Select by Modifier Name",
                    "modifier": "Standard_CTRL_Sleep[<span class=\"descriptionNumberColor\">Alien Dream</span>]",
                    "target": null,
                    "invertCondition": true
                  }
                },
                {
                  "name": "Use Ability Option",
                  "skillName": "Skill02"
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
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"941590351\">Monster_W3_FigureBoss_Standard_TheChosenOne</a>[<span class=\"descriptionNumberColor\">Impresario</span>]",
                    "invertCondition": true
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
                  "value": 4
                },
                {
                  "name": "Choose Ability Target",
                  "skillName": "Skill02",
                  "target": {
                    "name": "Select by Modifier Name",
                    "modifier": "Standard_CTRL_Sleep[<span class=\"descriptionNumberColor\">Alien Dream</span>]",
                    "target": null,
                    "invertCondition": true
                  }
                },
                {
                  "name": "Use Ability Option",
                  "skillName": "Skill02"
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
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"941590351\">Monster_W3_FigureBoss_Standard_TheChosenOne</a>[<span class=\"descriptionNumberColor\">Impresario</span>]"
                  },
                  {
                    "name": "Compare: Variable",
                    "value1": "AIFlag",
                    "compareType": "=",
                    "value2": 1,
                    "contextScope": "TargetEntity"
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
                      "name": "Choose Ability Target",
                      "skillName": "Skill03",
                      "target": {
                        "name": "Select by Modifier Name",
                        "modifier": "Standard_CTRL_Sleep[<span class=\"descriptionNumberColor\">Alien Dream</span>]",
                        "target": null
                      }
                    },
                    {
                      "name": "Use Ability Option",
                      "skillName": "Skill03"
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
                      "value": 5
                    },
                    {
                      "name": "Use Ability Option",
                      "skillName": "Skill04"
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
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"941590351\">Monster_W3_FigureBoss_Standard_TheChosenOne</a>[<span class=\"descriptionNumberColor\">Impresario</span>]"
                  },
                  {
                    "name": "Compare: Variable",
                    "value1": "AIFlag",
                    "compareType": "=",
                    "value2": 4,
                    "contextScope": "TargetEntity"
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
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"941590351\">Monster_W3_FigureBoss_Standard_TheChosenOne</a>[<span class=\"descriptionNumberColor\">Impresario</span>]"
                  },
                  {
                    "name": "Compare: Variable",
                    "value1": "AIFlag",
                    "compareType": "=",
                    "value2": 5,
                    "contextScope": "TargetEntity"
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
                      "name": "Choose Ability Target",
                      "skillName": "Skill02",
                      "target": {
                        "name": "Select by Modifier Name",
                        "modifier": "Standard_CTRL_Sleep[<span class=\"descriptionNumberColor\">Alien Dream</span>]",
                        "target": null,
                        "invertCondition": true
                      }
                    },
                    {
                      "name": "Use Ability Option",
                      "skillName": "Skill02"
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
                      "value": 7
                    },
                    {
                      "name": "Choose Ability Target",
                      "skillName": "Skill02",
                      "target": {
                        "name": "Select by Modifier Name",
                        "modifier": "Standard_CTRL_Sleep[<span class=\"descriptionNumberColor\">Alien Dream</span>]",
                        "target": null
                      }
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
              "passedValue": 1,
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"941590351\">Monster_W3_FigureBoss_Standard_TheChosenOne</a>[<span class=\"descriptionNumberColor\">Impresario</span>]"
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
        },
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
                  "value": 8
                },
                {
                  "name": "Choose Ability Target",
                  "skillName": "Skill01",
                  "target": {
                    "name": "Select by Modifier Name",
                    "modifier": "Standard_CTRL_Sleep[<span class=\"descriptionNumberColor\">Alien Dream</span>]",
                    "target": null
                  }
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
              "passedValue": 1,
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"941590351\">Monster_W3_FigureBoss_Standard_TheChosenOne</a>[<span class=\"descriptionNumberColor\">Impresario</span>]"
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
          "option": "UseSkill01",
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
                      "name": "Declare Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "scope": "TargetEntity",
                      "variableName": "AIFlag",
                      "value": 8
                    },
                    {
                      "name": "Choose Ability Target",
                      "skillName": "Skill01",
                      "target": {
                        "name": "Select by Modifier Name",
                        "modifier": "Standard_CTRL_Sleep[<span class=\"descriptionNumberColor\">Alien Dream</span>]",
                        "target": null
                      }
                    },
                    {
                      "name": "Use Ability Option",
                      "skillName": "Skill01"
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
                    },
                    {
                      "name": "Choose Ability Target",
                      "skillName": "Skill02",
                      "target": {
                        "name": "Select by Modifier Name",
                        "modifier": "Standard_CTRL_Sleep[<span class=\"descriptionNumberColor\">Alien Dream</span>]",
                        "target": null,
                        "invertCondition": true
                      }
                    },
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
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"941590351\">Monster_W3_FigureBoss_Standard_TheChosenOne</a>[<span class=\"descriptionNumberColor\">Impresario</span>]"
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
      ]
    }
  ],
  "references": []
}