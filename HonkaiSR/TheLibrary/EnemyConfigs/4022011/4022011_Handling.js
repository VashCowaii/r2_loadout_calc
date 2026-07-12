const configAbility = {
  "fileName": "4022011_Handling",
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
                    "name": "Compare: Ability Use Limit",
                    "skillName": "Skill02",
                    "value1": {
                      "operator": "Variables[0] (FREEVAR) || RETURN",
                      "displayLines": "FREEVAR",
                      "constants": [],
                      "variables": [
                        "FREEVAR"
                      ]
                    }
                  },
                  "passed": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Target Count",
                        "target": {
                          "name": "Target Name",
                          "target": "{{EVENT[RoT] Noontide Gryphon: Partner}}"
                        },
                        "compareType": ">",
                        "value2": 0,
                        "livingTargets": true
                      },
                      "passed": [
                        {
                          "name": "Random Event",
                          "odds": [
                            0.5,
                            0.5
                          ],
                          "execute": [
                            {
                              "name": "Choose Ability Target",
                              "skillName": "Skill02",
                              "target": {
                                "name": "Select by Target Pool",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{Caster's Summoner}}"
                                }
                              }
                            },
                            {
                              "name": "Choose Ability Target",
                              "skillName": "Skill02",
                              "target": {
                                "name": "Select by Target Pool",
                                "target": {
                                  "name": "Target Name",
                                  "target": "{{EVENT[RoT] Noontide Gryphon: Partner}}"
                                }
                              }
                            }
                          ]
                        }
                      ],
                      "failed": [
                        {
                          "name": "Choose Ability Target",
                          "skillName": "Skill02",
                          "target": {
                            "name": "Select by Target Pool",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Caster's Summoner}}"
                            }
                          }
                        }
                      ]
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