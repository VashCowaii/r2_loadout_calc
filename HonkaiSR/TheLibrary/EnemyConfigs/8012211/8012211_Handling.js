const configAbility = {
  "fileName": "8012211_Handling",
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
          "value": "W1_Svarog_00_Phase01"
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
          "option": "Decision5",
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
                  "variableName": "PartDecisionFlag"
                },
                {
                  "name": "Use Ability Option",
                  "skillName": "Skill02"
                }
              ]
            }
          ],
          "weight": 0.5,
          "type": "DefaultDSE",
          "check": [
            {
              "name": "Check Ability Use Condition",
              "passedValue": 0.5,
              "conditions": {
                "name": "Compare: Variable",
                "value1": "PartDecisionFlag",
                "compareType": "=",
                "value2": 0,
                "contextScope": "TargetEntity"
              }
            }
          ]
        },
        {
          "name": "HANDLER OPTION",
          "option": "Decision01",
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
                  "variableName": "PartDecisionFlag",
                  "value": 1
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Player Team All}}"
                    },
                    "value1": "TeamCharacterCount",
                    "compareType": ">=",
                    "value2": 1,
                    "conditions": {
                      "name": "AND",
                      "conditionList": [
                        {
                          "name": "Has Modifier",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"911555281\">Monster_W2_Huanlong_Sign</a>[<span class=\"descriptionNumberColor\">Lock On</span>]",
                          "invertCondition": true
                        },
                        {
                          "name": "Has Modifier",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"-1866067565\">Monster_W2_Huanlong_Sign02</a>[<span class=\"descriptionNumberColor\">Lock On</span>]",
                          "invertCondition": true
                        },
                        {
                          "name": "Has Modifier",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"-228419305\">Standard_BlackBlood</a>[<span class=\"descriptionNumberColor\">Prana-Siphoned</span>]",
                          "invertCondition": true
                        }
                      ]
                    }
                  },
                  "passed": [
                    {
                      "name": "Choose Ability Target",
                      "skillName": "Skill03",
                      "target": {
                        "name": "Create Selection List",
                        "passed": [
                          {
                            "name": "Select by Modifier Name",
                            "modifier": "Monster_W2_Huanlong_Sign[<span class=\"descriptionNumberColor\">Lock On</span>]",
                            "target": null,
                            "invertCondition": true
                          },
                          {
                            "name": "Select by Modifier Name",
                            "modifier": "Monster_W2_Huanlong_Sign02[<span class=\"descriptionNumberColor\">Lock On</span>]",
                            "target": null,
                            "invertCondition": true
                          },
                          {
                            "name": "Select by Modifier Name",
                            "modifier": "<a class=\"gModGreen\" id=\"-228419305\">Standard_BlackBlood</a>[<span class=\"descriptionNumberColor\">Prana-Siphoned</span>]",
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
                      "skillName": "Skill03",
                      "target": {
                        "name": "Create Selection List",
                        "passed": [
                          {
                            "name": "Select by Modifier Name",
                            "modifier": "Monster_W2_Huanlong_Sign[<span class=\"descriptionNumberColor\">Lock On</span>]",
                            "target": null,
                            "invertCondition": true
                          },
                          {
                            "name": "Select by Modifier Name",
                            "modifier": "Monster_W2_Huanlong_Sign02[<span class=\"descriptionNumberColor\">Lock On</span>]",
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
                  "skillName": "Skill03"
                }
              ]
            }
          ],
          "weight": 0.5,
          "type": "DefaultDSE",
          "check": [
            {
              "name": "Check Ability Use Condition",
              "passedValue": 0.5,
              "conditions": {
                "name": "Compare: Variable",
                "value1": "PartDecisionFlag",
                "compareType": "=",
                "value2": 1,
                "contextScope": "TargetEntity"
              }
            }
          ]
        },
        {
          "name": "HANDLER OPTION",
          "option": "Decision02",
          "goal": [
            {
              "name": "Sequence Event",
              "passed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "OR",
                    "conditionList": [
                      {
                        "name": "Has Flag",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster's Summoner}}"
                        },
                        "flagName": "Break"
                      },
                      {
                        "name": "Has Flag",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster's Summoner}}"
                        },
                        "flagName": "DisableAction"
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
                      "name": "Declare Custom Variable",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "scope": "TargetEntity",
                      "variableName": "PartDecisionFlag",
                      "value": 1
                    },
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Caster}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"90629678\">Monster_W2_HuanlongPart_01_Number01</a>"
                      },
                      "passed": [
                        {
                          "name": "Choose Ability Target",
                          "skillName": "Skill04",
                          "target": {
                            "name": "Select by Modifier Name",
                            "modifier": "Monster_W2_Huanlong_Sign[<span class=\"descriptionNumberColor\">Lock On</span>]",
                            "target": null
                          }
                        }
                      ],
                      "failed": [
                        {
                          "name": "Choose Ability Target",
                          "skillName": "Skill04",
                          "target": {
                            "name": "Select by Modifier Name",
                            "modifier": "Monster_W2_Huanlong_Sign02[<span class=\"descriptionNumberColor\">Lock On</span>]",
                            "target": null
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
          "weight": 0.5,
          "type": "DefaultDSE",
          "check": [
            {
              "name": "Check Ability Use Condition",
              "passedValue": 0.5,
              "conditions": {
                "name": "Compare: Variable",
                "value1": "PartDecisionFlag",
                "compareType": "=",
                "value2": 2,
                "contextScope": "TargetEntity"
              }
            }
          ]
        },
        {
          "name": "HANDLER OPTION",
          "option": "Decision01",
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
                  "variableName": "PartDecisionFlag",
                  "value": 1
                },
                {
                  "name": "Choose Ability Target",
                  "skillName": "Skill03",
                  "target": {
                    "name": "Select by Modifier Name",
                    "modifier": "Monster_W2_Huanlong_Ability13_Special",
                    "target": null
                  }
                },
                {
                  "name": "Use Ability Option",
                  "skillName": "Skill03"
                }
              ]
            }
          ],
          "weight": 0.5,
          "type": "DefaultDSE",
          "check": [
            {
              "name": "Check Ability Use Condition",
              "passedValue": 0.5,
              "conditions": {
                "name": "Compare: Variable",
                "value1": "PartDecisionFlag",
                "compareType": "=",
                "value2": 3,
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