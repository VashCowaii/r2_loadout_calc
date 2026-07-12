const configAbility = {
  "fileName": "3012040_Handling",
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
          "value": "W3_Ghost_00_Phase01"
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
                  "name": "Choose Ability Target",
                  "skillName": "Skill01",
                  "target": {
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
                        "modifier": "<a class=\"gModGreen\" id=\"-262946192\">Enemy_W3_Ghost_SelfDestory_Controller</a>",
                        "target": null,
                        "invertCondition": true
                      },
                      {
                        "name": "Select by Modifier Name",
                        "modifier": "<a class=\"gModGreen\" id=\"-892811864\">Enemy_W3_Ghost_Ability01_Parasitize_Target</a>[<span class=\"descriptionNumberColor\">Deception's Crown</span>]",
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
                  "skillName": "Skill01"
                }
              ]
            }
          ],
          "type": "DefaultDSE",
          "check": [
            {
              "name": "Check Ability Use Condition",
              "passedValue": 0.75,
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
                  "name": "AND",
                  "conditionList": [
                    {
                      "name": "Has Modifier",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-262946192\">Enemy_W3_Ghost_SelfDestory_Controller</a>",
                      "invertCondition": true
                    },
                    {
                      "name": "Has Modifier",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-892811864\">Enemy_W3_Ghost_Ability01_Parasitize_Target</a>[<span class=\"descriptionNumberColor\">Deception's Crown</span>]",
                      "invertCondition": true
                    }
                  ]
                }
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
                  "name": "Use Ability Option",
                  "skillName": "Skill02"
                }
              ]
            }
          ],
          "type": "DefaultDSE",
          "check": [
            {
              "name": "Check Ability Use Value",
              "skillName": "Skill02",
              "firstCD": 1,
              "regCD": 1,
              "valueCheck": 0.1
            }
          ]
        }
      ]
    }
  ],
  "references": []
}