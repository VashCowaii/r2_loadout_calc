const configAbility = {
  "fileName": "5012020_Handling",
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
      "options": [
        {
          "name": "HANDLER OPTION GROUP",
          "option": "Phase01",
          "goal": [
            {
              "name": "HANDLER OPTION",
              "option": "指挥",
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
                        "modifier": "<a class=\"gModGreen\" id=\"-1776333049\">Enemy_W2_Beast01_05_HasBoss</a>",
                        "invertCondition": true
                      },
                      "passed": [
                        {
                          "name": "Find New Target",
                          "from": {
                            "name": "Target Name",
                            "target": "{{Enemy Team All}}"
                          },
                          "maxTargets": 1,
                          "conditions": {
                            "name": "AND",
                            "conditionList": [
                              {
                                "name": "Compare: Monster Rank",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Parameter Target}}"
                                },
                                "compareType": "<=",
                                "value2": 3
                              },
                              {
                                "name": "Has Modifier",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Parameter Target}}"
                                },
                                "modifier": "<a class=\"gModGreen\" id=\"-1253957657\">Enemy_W2_Beast01_05_Boss</a>[<span class=\"descriptionNumberColor\">Fealty</span>]",
                                "invertCondition": true
                              },
                              {
                                "name": "Check Boolean Value",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Parameter Target}}"
                                },
                                "value": "UNKNOWN_OBJECT_BOOLEAN_-1541420090",
                                "invertCondition": true
                              },
                              {
                                "name": "Compare: Target",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Parameter Target}}"
                                },
                                "target2": {
                                  "name": "Target Name",
                                  "target": "{{Caster}}"
                                },
                                "invertCondition": true
                              }
                            ]
                          },
                          "ifTargetFound": [
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
                                "name": "Create Selection List",
                                "passed": [
                                  {
                                    "name": "Select by Target Pool",
                                    "target": {
                                      "name": "Target Sequence",
                                      "Sequence": [
                                        {
                                          "name": "Target Name",
                                          "target": "{{Enemy Team All}} - {{Caster}}"
                                        },
                                        {
                                          "name": "Target Filter",
                                          "conditions": {
                                            "name": "AND",
                                            "conditionList": [
                                              {
                                                "name": "Compare: Monster Rank",
                                                "target": {
                                                  "name": "Target Name",
                                                  "target": "{{Parameter Target}}"
                                                },
                                                "compareType": "<=",
                                                "value2": 3
                                              },
                                              {
                                                "name": "Check Boolean Value",
                                                "target": {
                                                  "name": "Target Name",
                                                  "target": "{{Parameter Target}}"
                                                },
                                                "value": "UNKNOWN_OBJECT_BOOLEAN_-1541420090",
                                                "invertCondition": true
                                              }
                                            ]
                                          }
                                        }
                                      ]
                                    }
                                  },
                                  {
                                    "name": "Select by Modifier Name",
                                    "modifier": "<a class=\"gModGreen\" id=\"-1253957657\">Enemy_W2_Beast01_05_Boss</a>[<span class=\"descriptionNumberColor\">Fealty</span>]",
                                    "target": null,
                                    "invertCondition": true
                                  },
                                  {
                                    "name": "Select by Target Rank",
                                    "compareType": "Max"
                                  }
                                ]
                              }
                            },
                            {
                              "name": "Use Ability Option",
                              "skillName": "Skill02"
                            }
                          ],
                          "noTargetFound": [
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
                              "skillName": "Skill01"
                            }
                          ]
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
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "value1": "AIFlag",
                    "compareType": "=",
                    "value2": 1,
                    "contextScope": "TargetEntity"
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
                    "target": {
                      "name": "Target Name",
                      "target": "{{Caster}}"
                    },
                    "value1": "HP_Bars_Remaining",
                    "compareType": "=",
                    "value2": 1
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