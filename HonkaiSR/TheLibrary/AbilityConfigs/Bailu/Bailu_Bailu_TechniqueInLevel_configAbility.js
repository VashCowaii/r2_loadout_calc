const configAbility = {
  "fileName": "Bailu_Bailu_TechniqueInLevel",
  "childAbilityList": [
    "Bailu_Bailu_TechniqueInLevel"
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
      "modifier": "<a class=\"gModGreen\" id=\"1621855586\">StageAbility_Maze_Bailu_Modifier</a>"
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1621855586\">StageAbility_Maze_Bailu_Modifier</a>",
      "execute": [
        {
          "eventTrigger": "Enter Battle",
          "priorityLevel": -80,
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
                    "conditionList": "Vidyadhara Ichor Lines"
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "value": {
                        "displayLines": "1"
                      },
                      "variableName": "MDF_SkillTree02_HealCountExtra"
                    }
                  ],
                  "failed": [
                    {
                      "name": "Define Custom Variable",
                      "value": 0,
                      "variableName": "MDF_SkillTree02_HealCountExtra"
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Trace Activated",
                    "conditionList": "Aquatic Benediction"
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "value": {
                        "displayLines": "0.1"
                      },
                      "variableName": "MDF_SkillTree03_DamageResistance"
                    }
                  ],
                  "failed": [
                    {
                      "name": "Define Custom Variable",
                      "value": 0,
                      "variableName": "MDF_SkillTree03_DamageResistance"
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Eidolon Activated",
                    "eidolon": 1
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "value": {
                        "displayLines": "8"
                      },
                      "variableName": "MDF_Rank01_AddSP"
                    }
                  ],
                  "failed": [
                    {
                      "name": "Define Custom Variable",
                      "value": 0,
                      "variableName": "MDF_Rank01_AddSP"
                    }
                  ]
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{All Team Members}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"36808524\">Bailu_Heal_Mark</a>[<span class=\"descriptionNumberColor\">Invigoration</span>]",
                  "duration": {
                    "displayLines": "2"
                  },
                  "valuePerStack": {
                    "MDF__HealPercentage2": {
                      "displayLines": "0.054"
                    },
                    "MDF__HealValue2": {
                      "displayLines": "144"
                    },
                    "MDF_AddSP": {
                      "displayLines": "MDF_Rank01_AddSP"
                    },
                    "MDF_HealCount": {
                      "displayLines": "2"
                    },
                    "MDF_HealCountExtra": {
                      "displayLines": "MDF_SkillTree02_HealCountExtra"
                    }
                  },
                  "success": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Trace Activated",
                        "conditionList": "Aquatic Benediction"
                      },
                      "passed": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{All Team Members}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"249464740\">Bailu_PointB3</a>[<span class=\"descriptionNumberColor\">Aquatic Benediction</span>]",
                          "valuePerStack": {
                            "MDF_DamageResistance": {
                              "displayLines": "MDF_SkillTree03_DamageResistance"
                            }
                          }
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    }
  ],
  "targetObjectData": {
    "primaryTarget": "{{Caster}}"
  },
  "realTargetData": {
    "primaryTarget": "{{All Team Members}}"
  }
}