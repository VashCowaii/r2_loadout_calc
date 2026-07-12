const configAbility = {
  "fileName": "1002020_Handling",
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
          "weight": 0.8,
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
                          1002020
                        ],
                        "invertCondition": true
                      },
                      {
                        "name": "Select by Modifier Name",
                        "modifier": "<a class=\"gModGreen\" id=\"-1281886828\">Monster_W1_Soldier01_03_Bonus</a>[<span class=\"descriptionNumberColor\">ATK Boost</span>]",
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
              ]
            }
          ],
          "weight": 0.9,
          "type": "DefaultDSE",
          "check": [
            {
              "name": "Check Ability Use Condition",
              "passedValue": 0.9,
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
                      "name": "NOT",
                      "condition": {
                        "name": "Enemy ID",
                        "ID": 1002020,
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "characterName": "Vagrant"
                      }
                    },
                    {
                      "name": "NOT",
                      "condition": {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"-1281886828\">Monster_W1_Soldier01_03_Bonus</a>[<span class=\"descriptionNumberColor\">ATK Boost</span>]"
                      }
                    }
                  ]
                }
              }
            },
            {
              "name": "Check Ability Use Value",
              "skillName": "Skill02",
              "firstCD": 1,
              "regCD": 2,
              "valueCheck": 1
            }
          ]
        }
      ]
    }
  ],
  "references": []
}