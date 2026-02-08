const configAbility = {
  "fileName": "Lynx_Lynx_TechniqueInLevel",
  "childAbilityList": [
    "Lynx_Lynx_TechniqueInLevel"
  ],
  "skillTrigger": "SkillMaze",
  "abilityType": "Technique",
  "energy": null,
  "toughnessList": [
    0,
    0,
    0
  ],
  "parse": [
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-872415748\">StageAbility_Maze_Lynx_Modifier</a>"
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-872415748\">StageAbility_Maze_Lynx_Modifier</a>",
      "execute": [
        {
          "eventTrigger": "Enter Battle",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "Wave Count",
                "compareType": "=",
                "value2": 1
              },
              "passed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Trace Activated",
                    "conditionList": "Survival in the Extreme"
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{All Team Members}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-704553388\">Lynx_HOT_HealByMaxHp</a>[<span class=\"descriptionNumberColor\">Healing Over Time</span>]",
                      "duration": {
                        "operator": "Variables[0] (2) || Variables[1] (1) || ADD || RETURN",
                        "displayLines": "(2 + 1)",
                        "constants": [],
                        "variables": [
                          2,
                          1
                        ]
                      },
                      "valuePerStack": {
                        "MDF_HOT_HOTPercentage": {
                          "operator": "Variables[0] (0.036) || RETURN",
                          "displayLines": "0.036",
                          "constants": [],
                          "variables": [
                            0.036
                          ]
                        },
                        "MDF_HOT_HealValue": {
                          "operator": "Variables[0] (96) || RETURN",
                          "displayLines": "96",
                          "constants": [],
                          "variables": [
                            96
                          ]
                        },
                        "MDF_HOT_AggroUp_HOTPercentage": {
                          "operator": "Variables[0] (0.044999998) || RETURN",
                          "displayLines": "0.044999998",
                          "constants": [],
                          "variables": [
                            0.044999998
                          ]
                        },
                        "MDF_HOT_AggroUp_HealValue": {
                          "operator": "Variables[0] (120) || RETURN",
                          "displayLines": "120",
                          "constants": [],
                          "variables": [
                            120
                          ]
                        }
                      }
                    }
                  ],
                  "failed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{All Team Members}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"-704553388\">Lynx_HOT_HealByMaxHp</a>[<span class=\"descriptionNumberColor\">Healing Over Time</span>]",
                      "duration": {
                        "operator": "Variables[0] (2) || RETURN",
                        "displayLines": "2",
                        "constants": [],
                        "variables": [
                          2
                        ]
                      },
                      "valuePerStack": {
                        "MDF_HOT_HOTPercentage": {
                          "operator": "Variables[0] (0.036) || RETURN",
                          "displayLines": "0.036",
                          "constants": [],
                          "variables": [
                            0.036
                          ]
                        },
                        "MDF_HOT_HealValue": {
                          "operator": "Variables[0] (96) || RETURN",
                          "displayLines": "96",
                          "constants": [],
                          "variables": [
                            96
                          ]
                        },
                        "MDF_HOT_AggroUp_HOTPercentage": {
                          "operator": "Variables[0] (0.044999998) || RETURN",
                          "displayLines": "0.044999998",
                          "constants": [],
                          "variables": [
                            0.044999998
                          ]
                        },
                        "MDF_HOT_AggroUp_HealValue": {
                          "operator": "Variables[0] (120) || RETURN",
                          "displayLines": "120",
                          "constants": [],
                          "variables": [
                            120
                          ]
                        }
                      }
                    }
                  ]
                }
              ]
            }
          ],
          "priorityLevel": -80
        }
      ],
      "stackData": [],
      "latentQueue": []
    }
  ]
}