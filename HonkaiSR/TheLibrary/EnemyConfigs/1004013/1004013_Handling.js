const configAbility = {
  "fileName": "1004013_Handling",
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
          "value": "W1_CocoliaP1_00_RL_Phase01"
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
                  "name": "Define Custom Variable",
                  "scope": "TargetEntity",
                  "variableName": "AIFlag",
                  "value": 2
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "value1": "SummonCount",
                    "compareType": "<",
                    "value2": 2,
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
          "option": "UseSkill01",
          "goal": [
            {
              "name": "Sequence Event",
              "passed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Hostile Entities(AOE)}}"
                    },
                    "value1": "TeamCharacterCount",
                    "compareType": ">",
                    "value2": 0,
                    "conditions": {
                      "name": "AND",
                      "conditionList": [
                        {
                          "name": "Has Modifier",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"-298752594\">Standard_CTRL_Frozen</a>[<span class=\"descriptionNumberColor\">Frozen</span>]",
                          "invertCondition": true
                        },
                        {
                          "name": "Has Modifier",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"-302789304\">Enemy_W1_CocoliaP1_IF_TargetLock01</a>[<span class=\"descriptionNumberColor\">Nowhere to Escape</span>]",
                          "invertCondition": true
                        },
                        {
                          "name": "Has Modifier",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"-252456447\">Enemy_W1_CocoliaP1_IF_TargetLock02</a>[<span class=\"descriptionNumberColor\">Nowhere to Escape</span>]",
                          "invertCondition": true
                        }
                      ]
                    }
                  },
                  "passed": [
                    {
                      "name": "Choose Ability Target",
                      "skillName": "Skill04",
                      "target": {
                        "name": "Create Selection List",
                        "passed": [
                          {
                            "name": "Select by Modifier Name",
                            "modifier": "<a class=\"gModGreen\" id=\"-298752594\">Standard_CTRL_Frozen</a>[<span class=\"descriptionNumberColor\">Frozen</span>]",
                            "target": null,
                            "invertCondition": true
                          },
                          {
                            "name": "Select by Modifier Name",
                            "modifier": "<a class=\"gModGreen\" id=\"-302789304\">Enemy_W1_CocoliaP1_IF_TargetLock01</a>[<span class=\"descriptionNumberColor\">Nowhere to Escape</span>]",
                            "target": null,
                            "invertCondition": true
                          },
                          {
                            "name": "Select by Modifier Name",
                            "modifier": "<a class=\"gModGreen\" id=\"-252456447\">Enemy_W1_CocoliaP1_IF_TargetLock02</a>[<span class=\"descriptionNumberColor\">Nowhere to Escape</span>]",
                            "target": null,
                            "invertCondition": true
                          }
                        ]
                      }
                    }
                  ],
                  "failed": [
                    {
                      "name": "Choose Ability Target",
                      "skillName": "Skill04",
                      "target": {
                        "name": "Create Selection List",
                        "passed": [
                          {
                            "name": "Select by Modifier Name",
                            "modifier": "<a class=\"gModGreen\" id=\"-302789304\">Enemy_W1_CocoliaP1_IF_TargetLock01</a>[<span class=\"descriptionNumberColor\">Nowhere to Escape</span>]",
                            "target": null,
                            "invertCondition": true
                          },
                          {
                            "name": "Select by Modifier Name",
                            "modifier": "<a class=\"gModGreen\" id=\"-252456447\">Enemy_W1_CocoliaP1_IF_TargetLock02</a>[<span class=\"descriptionNumberColor\">Nowhere to Escape</span>]",
                            "target": null,
                            "invertCondition": true
                          }
                        ]
                      }
                    }
                  ]
                },
                {
                  "name": "Define Custom Variable",
                  "scope": "TargetEntity",
                  "variableName": "AIFlag",
                  "value": 3
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
                "name": "Compare: Variable",
                "value1": "AIFlag",
                "compareType": "=",
                "value2": 2,
                "contextScope": "TargetEntity"
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
                  "name": "Define Custom Variable",
                  "scope": "TargetEntity",
                  "variableName": "AIFlag",
                  "value": 4
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Hostile Entities(AOE)}}"
                    },
                    "value1": "TeamCharacterCount",
                    "compareType": ">=",
                    "value2": 1,
                    "conditions": {
                      "name": "Has Modifier",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-298752594\">Standard_CTRL_Frozen</a>[<span class=\"descriptionNumberColor\">Frozen</span>]"
                    }
                  },
                  "passed": [
                    {
                      "name": "Choose Ability Target",
                      "skillName": "Skill07",
                      "target": {
                        "name": "Select by Modifier Name",
                        "modifier": "<a class=\"gModGreen\" id=\"-298752594\">Standard_CTRL_Frozen</a>[<span class=\"descriptionNumberColor\">Frozen</span>]",
                        "target": null
                      }
                    },
                    {
                      "name": "Use Ability Option",
                      "skillName": "Skill07"
                    }
                  ],
                  "failed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Hostile Entities(AOE)}}"
                        },
                        "value1": "TeamCharacterCount",
                        "compareType": ">",
                        "value2": 0,
                        "conditions": {
                          "name": "AND",
                          "conditionList": [
                            {
                              "name": "Has Modifier",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Parameter Target}}"
                              },
                              "modifier": "<a class=\"gModGreen\" id=\"-298752594\">Standard_CTRL_Frozen</a>[<span class=\"descriptionNumberColor\">Frozen</span>]",
                              "invertCondition": true
                            },
                            {
                              "name": "Has Modifier",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Parameter Target}}"
                              },
                              "modifier": "<a class=\"gModGreen\" id=\"-302789304\">Enemy_W1_CocoliaP1_IF_TargetLock01</a>[<span class=\"descriptionNumberColor\">Nowhere to Escape</span>]",
                              "invertCondition": true
                            },
                            {
                              "name": "Has Modifier",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Parameter Target}}"
                              },
                              "modifier": "<a class=\"gModGreen\" id=\"-252456447\">Enemy_W1_CocoliaP1_IF_TargetLock02</a>[<span class=\"descriptionNumberColor\">Nowhere to Escape</span>]",
                              "invertCondition": true
                            }
                          ]
                        }
                      },
                      "passed": [
                        {
                          "name": "Choose Ability Target",
                          "skillName": "Skill04",
                          "target": {
                            "name": "Create Selection List",
                            "passed": [
                              {
                                "name": "Select by Modifier Name",
                                "modifier": "<a class=\"gModGreen\" id=\"-298752594\">Standard_CTRL_Frozen</a>[<span class=\"descriptionNumberColor\">Frozen</span>]",
                                "target": null,
                                "invertCondition": true
                              },
                              {
                                "name": "Select by Modifier Name",
                                "modifier": "<a class=\"gModGreen\" id=\"-302789304\">Enemy_W1_CocoliaP1_IF_TargetLock01</a>[<span class=\"descriptionNumberColor\">Nowhere to Escape</span>]",
                                "target": null,
                                "invertCondition": true
                              },
                              {
                                "name": "Select by Modifier Name",
                                "modifier": "<a class=\"gModGreen\" id=\"-252456447\">Enemy_W1_CocoliaP1_IF_TargetLock02</a>[<span class=\"descriptionNumberColor\">Nowhere to Escape</span>]",
                                "target": null,
                                "invertCondition": true
                              }
                            ]
                          }
                        }
                      ],
                      "failed": [
                        {
                          "name": "Choose Ability Target",
                          "skillName": "Skill04",
                          "target": {
                            "name": "Create Selection List",
                            "passed": [
                              {
                                "name": "Select by Modifier Name",
                                "modifier": "<a class=\"gModGreen\" id=\"-302789304\">Enemy_W1_CocoliaP1_IF_TargetLock01</a>[<span class=\"descriptionNumberColor\">Nowhere to Escape</span>]",
                                "target": null,
                                "invertCondition": true
                              },
                              {
                                "name": "Select by Modifier Name",
                                "modifier": "<a class=\"gModGreen\" id=\"-252456447\">Enemy_W1_CocoliaP1_IF_TargetLock02</a>[<span class=\"descriptionNumberColor\">Nowhere to Escape</span>]",
                                "target": null,
                                "invertCondition": true
                              }
                            ]
                          }
                        }
                      ]
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
                "name": "Compare: Variable",
                "value1": "AIFlag",
                "compareType": "=",
                "value2": 3,
                "contextScope": "TargetEntity"
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
                  "name": "Define Custom Variable",
                  "scope": "TargetEntity",
                  "variableName": "AIFlag",
                  "value": 3
                },
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
                      "name": "Define Custom Variable",
                      "scope": "TargetEntity",
                      "variableName": "AIFlag",
                      "value": 4
                    },
                    {
                      "name": "Use Ability Option",
                      "skillName": "Skill04"
                    }
                  ],
                  "failed": [
                    {
                      "name": "Define Custom Variable",
                      "scope": "TargetEntity",
                      "variableName": "AIFlag",
                      "value": 5
                    },
                    {
                      "name": "Use Ability Option",
                      "skillName": "Skill05"
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
          "option": "UseSkill01",
          "goal": [
            {
              "name": "Sequence Event",
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "scope": "TargetEntity",
                  "variableName": "AIFlag",
                  "value": 6
                },
                {
                  "name": "Use Ability Option",
                  "skillName": "Skill03"
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
          "option": "UseSkill01",
          "goal": [
            {
              "name": "Sequence Event",
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "scope": "TargetEntity",
                  "variableName": "AIFlag",
                  "value": 1
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
                "name": "Compare: Variable",
                "value1": "AIFlag",
                "compareType": "=",
                "value2": 6,
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