const configAbility = {
  "fileName": "Bailu_Bailu_TechniqueInLevel",
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
      "to": "Caster",
      "modifier": "StageAbility_Maze_Bailu_Modifier"
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "StageAbility_Maze_Bailu_Modifier",
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
                    "conditionList": "Vidyadhara Ichor Lines"
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "MDF_SkillTree02_HealCountExtra",
                      "value": {
                        "operator": "Variables[0] (1) || RETURN",
                        "displayLines": "1",
                        "constants": [],
                        "variables": [
                          1
                        ]
                      }
                    }
                  ],
                  "failed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "MDF_SkillTree02_HealCountExtra",
                      "value": 0
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
                      "variableName": "MDF_SkillTree03_DamageResistance",
                      "value": {
                        "operator": "Variables[0] (0.1) || RETURN",
                        "displayLines": "0.1",
                        "constants": [],
                        "variables": [
                          0.1
                        ]
                      }
                    }
                  ],
                  "failed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "MDF_SkillTree03_DamageResistance",
                      "value": 0
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
                      "variableName": "MDF_Rank01_AddSP",
                      "value": {
                        "operator": "Variables[0] (8) || RETURN",
                        "displayLines": "8",
                        "constants": [],
                        "variables": [
                          8
                        ]
                      }
                    }
                  ],
                  "failed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "MDF_Rank01_AddSP",
                      "value": 0
                    }
                  ]
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": "All Team Members(In Context)",
                  "modifier": "Bailu_Heal_Mark[<span class=\"descriptionNumberColor\">Invigoration</span>]",
                  "duration": {
                    "operator": "Variables[0] (2) || RETURN",
                    "displayLines": "2",
                    "constants": [],
                    "variables": [
                      2
                    ]
                  },
                  "valuePerStack": {
                    "MDF__HealPercentage2": {
                      "operator": "Variables[0] (0.054) || RETURN",
                      "displayLines": "0.054",
                      "constants": [],
                      "variables": [
                        0.054
                      ]
                    },
                    "MDF__HealValue2": {
                      "operator": "Variables[0] (144) || RETURN",
                      "displayLines": "144",
                      "constants": [],
                      "variables": [
                        144
                      ]
                    },
                    "MDF_AddSP": {
                      "operator": "Variables[0] (MDF_Rank01_AddSP) || RETURN",
                      "displayLines": "MDF_Rank01_AddSP",
                      "constants": [],
                      "variables": [
                        "MDF_Rank01_AddSP"
                      ]
                    },
                    "MDF_HealCount": {
                      "operator": "Variables[0] (2) || RETURN",
                      "displayLines": "2",
                      "constants": [],
                      "variables": [
                        2
                      ]
                    },
                    "MDF_HealCountExtra": {
                      "operator": "Variables[0] (MDF_SkillTree02_HealCountExtra) || RETURN",
                      "displayLines": "MDF_SkillTree02_HealCountExtra",
                      "constants": [],
                      "variables": [
                        "MDF_SkillTree02_HealCountExtra"
                      ]
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
                          "to": "All Team Members(In Context)",
                          "modifier": "Bailu_PointB3[<span class=\"descriptionNumberColor\">Aquatic Benediction</span>]",
                          "valuePerStack": {
                            "MDF_DamageResistance": {
                              "operator": "Variables[0] (MDF_SkillTree03_DamageResistance) || RETURN",
                              "displayLines": "MDF_SkillTree03_DamageResistance",
                              "constants": [],
                              "variables": [
                                "MDF_SkillTree03_DamageResistance"
                              ]
                            }
                          }
                        }
                      ]
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