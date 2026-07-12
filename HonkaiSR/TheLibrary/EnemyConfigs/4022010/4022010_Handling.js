const configAbility = {
  "fileName": "4022010_Handling",
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
          "value": "W4_Harpy_00_Phase01"
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
          "option": "Decision01",
          "goal": [
            {
              "name": "Sequence Event",
              "passed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Compare: Ability Use Limit",
                        "skillName": "Skill02",
                        "value1": 12
                      },
                      {
                        "name": "Compare: Variable",
                        "value1": "_ListenSkillUsed",
                        "compareType": "=",
                        "value2": 1
                      },
                      {
                        "name": "Compare: Target Count",
                        "target": {
                          "name": "Target Sequence",
                          "Sequence": [
                            {
                              "name": "Target Name",
                              "target": "{{All Team Members(Exclude Self)}}"
                            },
                            {
                              "name": "Target Filter",
                              "conditions": {
                                "name": "AND",
                                "conditionList": [
                                  {
                                    "name": "Has Modifier",
                                    "target": {
                                      "name": "Target Name",
                                      "target": "{{Parameter Target}}"
                                    },
                                    "modifier": "<a class=\"gModGreen\" id=\"35393434\">Standard_FastAction</a>[<span class=\"descriptionNumberColor\">Stormride</span>]",
                                    "invertCondition": true
                                  },
                                  {
                                    "name": "Has Modifier",
                                    "target": {
                                      "name": "Target Name",
                                      "target": "{{Parameter Target}}"
                                    },
                                    "modifier": "<a class=\"gModGreen\" id=\"-213110193\">Standard_FastAction_Permanent</a>[<span class=\"descriptionNumberColor\">Stormride</span>]",
                                    "invertCondition": true
                                  }
                                ]
                              }
                            }
                          ]
                        },
                        "compareType": ">=",
                        "value2": 1,
                        "livingTargets": true
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Choose Ability Target",
                      "skillName": "Skill02",
                      "target": {
                        "name": "Create Selection List",
                        "passed": [
                          {
                            "name": "Select by Target Pool",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Caster}}"
                            },
                            "invertCondition": true
                          },
                          {
                            "name": "Select by Modifier Name",
                            "modifier": "<a class=\"gModGreen\" id=\"35393434\">Standard_FastAction</a>[<span class=\"descriptionNumberColor\">Stormride</span>]",
                            "target": null,
                            "invertCondition": true
                          },
                          {
                            "name": "Select by Modifier Name",
                            "modifier": "<a class=\"gModGreen\" id=\"-213110193\">Standard_FastAction_Permanent</a>[<span class=\"descriptionNumberColor\">Stormride</span>]",
                            "target": null,
                            "invertCondition": true
                          }
                        ]
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
            }
          ],
          "type": "DefaultDSE"
        }
      ]
    }
  ],
  "references": []
}