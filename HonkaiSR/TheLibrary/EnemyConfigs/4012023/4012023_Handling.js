const configAbility = {
  "fileName": "4012023_Handling",
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
          "name": "HANDLER OPTION",
          "optionName": "UseSkill02",
          "optionGoal": {
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
                        "target": "{{EVENT[RoT] Light Praetor: Light Characters}}"
                      }
                    }
                  ]
                }
              },
              {
                "name": "Use Ability Option",
                "skillName": "Skill02"
              }
            ]
          },
          "scoreType": "DefaultDSE",
          "optionWeight": 0.8,
          "optionCheck": [
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