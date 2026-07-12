const configAbility = {
  "fileName": "1002030_Handling_OVERRIDE_100203010",
  "abilityType": "Handling_100203010",
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
          "value": "W1_Soldier04_00_Phase01"
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
                  "name": "Use Ability Option",
                  "skillName": "Skill01"
                }
              ]
            }
          ],
          "type": "DefaultDSE",
          "check": [
            {
              "name": "Check Ability Use Value",
              "skillName": "Skill01",
              "firstCD": 1,
              "regCD": 1,
              "valueCheck": 0.1
            }
          ]
        },
        {
          "name": "HANDLER OPTION",
          "option": "UseSkill01-2",
          "goal": [
            {
              "name": "Sequence Event",
              "passed": [
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
              "passedValue": 0.5,
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"-929204023\">Enemy_W1_Soldier04_AbilityP01_Supported</a>[<span class=\"descriptionNumberColor\">Reinforced</span>]"
              }
            }
          ]
        },
        {
          "name": "HANDLER OPTION",
          "option": "UseSkill02",
          "goal": [
            {
              "name": "Sequence Event",
              "passed": [
                {
                  "name": "Choose Ability Target",
                  "skillName": "Skill02",
                  "target": {
                    "name": "Create Selection List",
                    "listType": "OR",
                    "passed": [
                      {
                        "name": "Create Selection List",
                        "passed": [
                          {
                            "name": "Select by Target Pool",
                            "target": {
                              "name": "Target Name",
                              "target": "{{All Team Members(Exclude Self)}}"
                            }
                          },
                          {
                            "name": "Select by Enemy ID",
                            "idList": [
                              1002030
                            ],
                            "invertCondition": true
                          },
                          {
                            "name": "Select by Modifier Name",
                            "modifier": "<a class=\"gModGreen\" id=\"-929204023\">Enemy_W1_Soldier04_AbilityP01_Supported</a>[<span class=\"descriptionNumberColor\">Reinforced</span>]",
                            "target": null,
                            "invertCondition": true
                          }
                        ]
                      },
                      {
                        "name": "Create Selection List",
                        "passed": [
                          {
                            "name": "Select by Target Pool",
                            "target": {
                              "name": "Target Name",
                              "target": "{{All Team Members(Exclude Self)}}"
                            }
                          },
                          {
                            "name": "Select by Modifier Name",
                            "modifier": "<a class=\"gModGreen\" id=\"-929204023\">Enemy_W1_Soldier04_AbilityP01_Supported</a>[<span class=\"descriptionNumberColor\">Reinforced</span>]",
                            "target": null,
                            "invertCondition": true
                          }
                        ]
                      }
                    ]
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
                "name": "Compare: Variable",
                "target": {
                  "name": "Target Name",
                  "target": "{{All Team Members(Exclude Self)}}"
                },
                "value1": "TeamCharacterCount",
                "compareType": ">=",
                "value2": 1,
                "conditions": {
                  "name": "NOT",
                  "condition": {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"-929204023\">Enemy_W1_Soldier04_AbilityP01_Supported</a>[<span class=\"descriptionNumberColor\">Reinforced</span>]"
                  }
                }
              }
            },
            {
              "name": "Check Ability Use Value",
              "skillName": "Skill02",
              "firstCD": 2,
              "regCD": 2,
              "valueCheck": 0.2
            }
          ]
        }
      ]
    }
  ],
  "references": []
}