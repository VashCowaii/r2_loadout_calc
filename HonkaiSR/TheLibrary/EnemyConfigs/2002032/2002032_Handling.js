const configAbility = {
  "fileName": "2002032_Handling",
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
          "value": "Phase01"
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
                    "listType": "OR",
                    "passed": [
                      {
                        "name": "Create Selection List",
                        "passed": [
                          {
                            "name": "Select by Modifier Name",
                            "modifier": "<a class=\"gModGreen\" id=\"221482818\">Standard_Unstable</a>[<span class=\"descriptionNumberColor\">Reverberation</span>]",
                            "target": null,
                            "invertCondition": true
                          },
                          {
                            "name": "Select by Modifier Name",
                            "modifier": "<a class=\"gModGreen\" id=\"-315004140\">Standard_Shake</a>[<span class=\"descriptionNumberColor\">Strong Reverberation</span>]",
                            "target": null,
                            "invertCondition": true
                          }
                        ]
                      },
                      {
                        "name": "Select by Modifier Name",
                        "modifier": "<a class=\"gModGreen\" id=\"-315004140\">Standard_Shake</a>[<span class=\"descriptionNumberColor\">Strong Reverberation</span>]",
                        "target": null
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
          "type": "DefaultDSE"
        }
      ]
    }
  ],
  "references": []
}