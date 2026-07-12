const configAbility = {
  "fileName": "2024014_Handling",
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
          "option": "UseSequenceSkill",
          "goal": [
            {
              "name": "Sequence Event",
              "passed": [
                {
                  "name": "Use Sequence Ability Option"
                }
              ]
            }
          ],
          "type": "DefaultDSE",
          "check": [
            {
              "name": "Sequence Ability Use Value",
              "valueCheck": 1
            }
          ]
        }
      ]
    }
  ],
  "references": [],
  "parsedSequence": [
    "202401405",
    "202401406",
    "202401405",
    "202401407",
    "202401405",
    "202401406"
  ]
}