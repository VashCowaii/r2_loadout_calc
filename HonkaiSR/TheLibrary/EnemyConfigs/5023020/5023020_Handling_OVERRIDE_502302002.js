const configAbility = {
  "fileName": "5023020_Handling_OVERRIDE_502302002",
  "abilityType": "Handling_502302002",
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
          "optionGroupName": "new phase",
          "optionGroupGoal": [
            {
              "name": "HANDLER OPTION",
              "optionName": "Skill01",
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
                    "name": "Compare: Variable",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "value1": "AIFlag",
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
              "optionName": "Skill02/Skill04",
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
                      "modifier": "<a class=\"gModGreen\" id=\"-1972425744\">Enemy_W5_Eater_Ability02_Eater</a>[<span class=\"descriptionNumberColor\">Satiated</span>]"
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
                      },
                      {
                        "name": "Use Ability Option",
                        "skillName": "Skill04"
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
                        "name": "IF",
                        "conditions": {
                          "name": "Has Flag",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Caster}}"
                          },
                          "flagName": [
                            "Taunt"
                          ]
                        },
                        "passed": [
                          {
                            "name": "IF",
                            "conditions": {
                              "name": "Compare: Target List Entities",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Enemies by Taunt OR Aggro}}.[[removeMemosprite]]"
                              },
                              "conditions": {
                                "name": "Has Modifier",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Parameter Target}}"
                                },
                                "modifier": "<a class=\"gModGreen\" id=\"-662226107\">Enemy_W5_Eater_Ability02_Ate</a>[<span class=\"descriptionNumberColor\">Devour</span>]",
                                "invertCondition": true
                              }
                            },
                            "passed": [
                              {
                                "name": "Choose Ability Target",
                                "skillName": "Skill02",
                                "target": {
                                  "name": "Select by Modifier Name",
                                  "modifier": "<a class=\"gModGreen\" id=\"-662226107\">Enemy_W5_Eater_Ability02_Ate</a>[<span class=\"descriptionNumberColor\">Devour</span>]",
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
                                "name": "Use Ability Option",
                                "skillName": "Skill04"
                              }
                            ]
                          }
                        ],
                        "failed": [
                          {
                            "name": "IF",
                            "conditions": {
                              "name": "Compare: Target List Entities",
                              "target": {
                                "name": "Target Name",
                                "target": "{{Player Team All}}.[[removeMemosprite]]"
                              },
                              "conditions": {
                                "name": "Has Modifier",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Parameter Target}}"
                                },
                                "modifier": "<a class=\"gModGreen\" id=\"-662226107\">Enemy_W5_Eater_Ability02_Ate</a>[<span class=\"descriptionNumberColor\">Devour</span>]",
                                "invertCondition": true
                              }
                            },
                            "passed": [
                              {
                                "name": "Choose Ability Target",
                                "skillName": "Skill02",
                                "target": {
                                  "name": "Select by Modifier Name",
                                  "modifier": "<a class=\"gModGreen\" id=\"-662226107\">Enemy_W5_Eater_Ability02_Ate</a>[<span class=\"descriptionNumberColor\">Devour</span>]",
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
                                "name": "Use Ability Option",
                                "skillName": "Skill04"
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
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "value1": "AIFlag",
                    "compareType": "=",
                    "value2": 2,
                    "contextScope": "TargetEntity"
                  },
                  "passedValue": 1
                }
              ]
            }
          ],
          "scoreType": "DefaultDSE"
        }
      ]
    }
  ],
  "references": []
}