const configAbility = {
  "fileName": "4014036_Handling",
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
          "optionGroupName": "Monster_W4_Pollux_00_IF_DecisionGroup_Phase1_Normal",
          "optionGroupGoal": [
            {
              "name": "HANDLER OPTION",
              "optionName": "UseSkill01",
              "optionGoal": {
                "name": "Sequence Event",
                "execute": [
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
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"763823194\">OneMore</a>"
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
                    "name": "Define Custom Variable",
                    "variableName": "AIFlag",
                    "value": 2
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
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"763823194\">OneMore</a>",
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
                    "name": "Define Custom Variable",
                    "variableName": "AIFlag",
                    "value": 1
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
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"763823194\">OneMore</a>",
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
                  },
                  "passedValue": 0.5
                }
              ]
            }
          ],
          "scoreType": "DefaultDSE",
          "optionCheck": [
            {
              "name": "Check Ability Use Condition",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Compare: Variable",
                    "value1": "HP_Bars_Remaining",
                    "compareType": "=",
                    "value2": 1
                  },
                  {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"1085805355\">Enemy_W4_Pollux_IF_Strengthen</a>[<span class=\"descriptionNumberColor\">Fragrance of Death</span>]",
                    "invertCondition": true
                  }
                ]
              },
              "passedValue": 1
            }
          ]
        },
        {
          "name": "HANDLER OPTION GROUP",
          "optionGroupName": "Monster_W4_Pollux_00_IF_DecisionGroup_Phase1_Strengthen",
          "optionGroupGoal": [
            {
              "name": "HANDLER OPTION",
              "optionName": "UseSkill01",
              "optionGoal": {
                "name": "Sequence Event",
                "execute": [
                  {
                    "name": "IF",
                    "conditions": {
                      "name": "Compare: Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster's Minions}}"
                      },
                      "value1": "TeamCharacterCount",
                      "compareType": ">=",
                      "value2": 1,
                      "conditions": {
                        "name": "Has Flag",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "flagName": "Break"
                      }
                    },
                    "passed": [
                      {
                        "name": "IF",
                        "conditions": {
                          "name": "Compare: Variable",
                          "value1": "AIFlagSkill04",
                          "compareType": "=",
                          "value2": 0
                        },
                        "passed": [
                          {
                            "name": "Define Custom Variable",
                            "variableName": "AIFlagSkill04",
                            "value": 1
                          },
                          {
                            "name": "Use Ability Option",
                            "skillName": "Skill04"
                          }
                        ],
                        "failed": [
                          {
                            "name": "Define Custom Variable",
                            "variableName": "AIFlagSkill04",
                            "value": 0
                          },
                          {
                            "name": "Use Ability Option",
                            "skillName": "Skill01"
                          }
                        ]
                      }
                    ],
                    "failed": [
                      {
                        "name": "Define Custom Variable",
                        "variableName": "AIFlagSkill04",
                        "value": 0
                      },
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
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"763823194\">OneMore</a>"
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
                    "name": "Define Custom Variable",
                    "variableName": "AIFlag",
                    "value": 2
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
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"763823194\">OneMore</a>",
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
                    "name": "Define Custom Variable",
                    "variableName": "AIFlag",
                    "value": 1
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
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"763823194\">OneMore</a>",
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
                  },
                  "passedValue": 0.5
                }
              ]
            }
          ],
          "scoreType": "DefaultDSE",
          "optionCheck": [
            {
              "name": "Check Ability Use Condition",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Compare: Variable",
                    "value1": "HP_Bars_Remaining",
                    "compareType": "=",
                    "value2": 1
                  },
                  {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"1085805355\">Enemy_W4_Pollux_IF_Strengthen</a>[<span class=\"descriptionNumberColor\">Fragrance of Death</span>]"
                  }
                ]
              },
              "passedValue": 1
            }
          ]
        },
        {
          "name": "HANDLER OPTION GROUP",
          "optionGroupName": "Monster_W4_Pollux_00_IF_DecisionGroup_Phase2_Normal",
          "optionGroupGoal": [
            {
              "name": "HANDLER OPTION",
              "optionName": "UseSkill01",
              "optionGoal": {
                "name": "Sequence Event",
                "execute": [
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
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"763823194\">OneMore</a>"
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
                    "name": "Define Custom Variable",
                    "variableName": "AIFlag",
                    "value": 2
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
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"763823194\">OneMore</a>",
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
                    "name": "Define Custom Variable",
                    "variableName": "AIFlag",
                    "value": 1
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
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"763823194\">OneMore</a>",
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
                  },
                  "passedValue": 0.5
                }
              ]
            }
          ],
          "scoreType": "DefaultDSE",
          "optionCheck": [
            {
              "name": "Check Ability Use Condition",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Compare: Variable",
                    "value1": "HP_Bars_Remaining",
                    "compareType": "=",
                    "value2": 2
                  },
                  {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"1085805355\">Enemy_W4_Pollux_IF_Strengthen</a>[<span class=\"descriptionNumberColor\">Fragrance of Death</span>]",
                    "invertCondition": true
                  }
                ]
              },
              "passedValue": 1
            }
          ]
        },
        {
          "name": "HANDLER OPTION GROUP",
          "optionGroupName": "Monster_W4_Pollux_00_IF_DecisionGroup_Phase2_Strengthen",
          "optionGroupGoal": [
            {
              "name": "HANDLER OPTION",
              "optionName": "UseSkill06",
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
                      "modifier": "<a class=\"gModGreen\" id=\"-822435931\">Enemy_W4_Pollux_IF_UltraReadyMark</a>"
                    },
                    "passed": [
                      {
                        "name": "Define Custom Variable",
                        "variableName": "AIFlag",
                        "value": 3
                      },
                      {
                        "name": "Use Ability Option",
                        "skillName": "Skill01"
                      }
                    ],
                    "failed": [
                      {
                        "name": "Define Custom Variable",
                        "variableName": "AIFlag",
                        "value": 1
                      },
                      {
                        "name": "Use Ability Option",
                        "skillName": "Skill06"
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
                    "value2": 3,
                    "contextScope": "TargetEntity"
                  },
                  "passedValue": 0.5
                }
              ]
            },
            {
              "name": "HANDLER OPTION",
              "optionName": "UseSkill01",
              "optionGoal": {
                "name": "Sequence Event",
                "execute": [
                  {
                    "name": "IF",
                    "conditions": {
                      "name": "Compare: Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster's Minions}}"
                      },
                      "value1": "TeamCharacterCount",
                      "compareType": ">=",
                      "value2": 1,
                      "conditions": {
                        "name": "Has Flag",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "flagName": "Break"
                      }
                    },
                    "passed": [
                      {
                        "name": "IF",
                        "conditions": {
                          "name": "Compare: Variable",
                          "value1": "AIFlagSkill04",
                          "compareType": "=",
                          "value2": 0
                        },
                        "passed": [
                          {
                            "name": "Define Custom Variable",
                            "variableName": "AIFlagSkill04",
                            "value": 1
                          },
                          {
                            "name": "Use Ability Option",
                            "skillName": "Skill04"
                          }
                        ],
                        "failed": [
                          {
                            "name": "Define Custom Variable",
                            "variableName": "AIFlagSkill04",
                            "value": 0
                          },
                          {
                            "name": "Use Ability Option",
                            "skillName": "Skill01"
                          }
                        ]
                      }
                    ],
                    "failed": [
                      {
                        "name": "Define Custom Variable",
                        "variableName": "AIFlagSkill04",
                        "value": 0
                      },
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
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"763823194\">OneMore</a>"
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
                    "name": "Define Custom Variable",
                    "variableName": "AIFlag",
                    "value": 2
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
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"763823194\">OneMore</a>",
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
                    "name": "Define Custom Variable",
                    "variableName": "AIFlag",
                    "value": 3
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
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"763823194\">OneMore</a>",
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
                  },
                  "passedValue": 0.5
                }
              ]
            }
          ],
          "scoreType": "DefaultDSE",
          "optionCheck": [
            {
              "name": "Check Ability Use Condition",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Compare: Variable",
                    "value1": "HP_Bars_Remaining",
                    "compareType": "=",
                    "value2": 2
                  },
                  {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"1085805355\">Enemy_W4_Pollux_IF_Strengthen</a>[<span class=\"descriptionNumberColor\">Fragrance of Death</span>]"
                  }
                ]
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