const configAbility = {
  "fileName": "Bailu_Bailu_Ability03_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Heal",
      "target": "All Team Members(In Context)",
      "healPercent": {
        "operator": "Variables[0] (0.135) || RETURN",
        "displayLines": "0.135",
        "constants": [],
        "variables": [
          0.135
        ]
      },
      "healFlat": {
        "operator": "Variables[0] (360) || RETURN",
        "displayLines": "360",
        "constants": [],
        "variables": [
          360
        ]
      },
      "formula": "Heal from Healer's MaxHP"
    },
    {
      "name": "Find New Target",
      "from": "Allied Team",
      "searchRandom": true,
      "ifTargetFound": [
        {
          "name": "IF",
          "conditions": {
            "name": "Has Modifier",
            "target": "Use Prior Target(s) Defined",
            "modifier": "Bailu_Heal_Mark[<span class=\"descriptionNumberColor\">Invigoration</span>]"
          },
          "passed": [
            {
              "name": "Define Modifier Variable",
              "target": "Use Prior Target(s) Defined",
              "modifierName": "Bailu_Heal_Mark[<span class=\"descriptionNumberColor\">Invigoration</span>]",
              "function": "Add",
              "value": 1,
              "valueType": "Duration"
            }
          ],
          "failed": [
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
              "to": "Use Prior Target(s) Defined",
              "modifier": "Bailu_Heal_Mark[<span class=\"descriptionNumberColor\">Invigoration</span>]",
              "duration": {
                "operator": "Variables[0] (2) || RETURN",
                "displayLines": "2",
                "constants": [],
                "variables": [
                  2
                ]
              },
              "immediateEffect": true,
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
                      "to": "Use Prior Target(s) Defined",
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
      ]
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Eidolon Activated",
        "eidolon": 2
      },
      "passed": [
        {
          "name": "Add Events/Bonuses",
          "to": "Caster",
          "modifier": "Bailu_Eidolon2[<span class=\"descriptionNumberColor\">Sylphic Slumber</span>]",
          "duration": {
            "operator": "Variables[0] (2) || RETURN",
            "displayLines": "2",
            "constants": [],
            "variables": [
              2
            ]
          },
          "valuePerStack": {
            "MDF_PropertyValue": {
              "operator": "Variables[0] (0.15) || RETURN",
              "displayLines": "0.15",
              "constants": [],
              "variables": [
                0.15
              ]
            }
          }
        }
      ]
    },
    {
      "name": "Update Energy",
      "on": "Caster",
      "valuePercent": 1,
      "ofAbilitySplit": true,
      "isFixed": "* ERR"
    },
    {
      "name": "Find New Target",
      "from": "Skill Target List",
      "searchRandom": true,
      "maxTargets": 1,
      "conditions": {
        "name": "Compare: Target",
        "target": "Use Prior Target(s) Defined",
        "target2": "Caster",
        "invertCondition": true
      }
    },
    "Trigger: Ability End"
  ],
  "references": []
}