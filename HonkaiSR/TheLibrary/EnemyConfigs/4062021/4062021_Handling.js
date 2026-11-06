const configAbility = {
  "fileName": "4062021_Handling",
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
          "value": "Common_SequenceThree_Phase01"
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
          "optionName": "UseSequenceSkill",
          "optionGoal": {
            "name": "Sequence Event",
            "execute": [
              {
                "name": "Use Sequence Ability Option"
              }
            ]
          },
          "scoreType": "DefaultDSE",
          "optionCheck": [
            {
              "name": "Sequence Ability Use Value",
              "valueCheck": 1
            }
          ]
        }
      ]
    }
  ],
  "references": []
}