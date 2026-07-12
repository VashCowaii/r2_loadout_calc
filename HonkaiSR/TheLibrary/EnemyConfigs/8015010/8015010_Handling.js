const configAbility = {
  "fileName": "8015010_Handling",
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
  "references": []
}