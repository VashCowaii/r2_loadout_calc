const configAbility = {
  "fileName": "Saber_Saber_TechniqueInLevel",
  "childAbilityList": [
    "Saber_Saber_TechniqueInLevel"
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
      "modifier": "Technique_Saber_Modifier"
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "Saber_TechniqueUsage_Bonus[<span class=\"descriptionNumberColor\">Behold, the King of Knights</span>]",
      "stackType": "ReplaceByCaster",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier",
          "execute": [
            {
              "name": "Stack Target Stat Value",
              "target": {
                "name": "Target Name",
                "target": "{{Modifier Holder}}"
              },
              "statName": "&nbsp;<span class=\"descriptionNumberColor\">ATK%</span>&nbsp;",
              "value": {
                "operator": "Variables[0] (MDF_PropertyValue) || RETURN",
                "displayLines": "MDF_PropertyValue",
                "constants": [],
                "variables": [
                  "MDF_PropertyValue"
                ]
              }
            }
          ]
        }
      ],
      "description": "ATK increases by <span class=\"descriptionNumberColor\">MDF_PropertyValue</span>.",
      "type": "Buff",
      "effectName": "Behold, the King of Knights",
      "statusName": "Behold, the King of Knights"
    },
    {
      "name": "Modifier Construction",
      "for": "Technique_Saber_Modifier",
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
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "Saber_TechniqueUsage_Bonus[<span class=\"descriptionNumberColor\">Behold, the King of Knights</span>]",
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
                      "operator": "Variables[0] (0.35) || RETURN",
                      "displayLines": "0.35",
                      "constants": [],
                      "variables": [
                        0.35
                      ]
                    }
                  }
                },
                {
                  "name": "Adjust Variable Value",
                  "adjustmentType": "Add to Value (Default)",
                  "variableName": "DV_SurgePoint",
                  "on": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "value": {
                    "operator": "Variables[0] (2) || RETURN",
                    "displayLines": "2",
                    "constants": [],
                    "variables": [
                      2
                    ]
                  }
                },
                {
                  "name": "Update Displayed Energy Bar",
                  "value": {
                    "operator": "Variables[0] (DV_SurgePoint) || RETURN",
                    "displayLines": "DV_SurgePoint",
                    "constants": [],
                    "variables": [
                      "DV_SurgePoint"
                    ]
                  }
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Trace Activated",
                    "conditionList": "Crown of the Star"
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "Saber_Trace03_Bonus_02[<span class=\"descriptionNumberColor\">Crown of the Star</span>]",
                      "stackLimit": {
                        "operator": "Variables[0] (8) || RETURN",
                        "displayLines": "8",
                        "constants": [],
                        "variables": [
                          8
                        ]
                      },
                      "valuePerStack": {
                        "MDF_PropertyValue": {
                          "operator": "Variables[0] (0.04) || RETURN",
                          "displayLines": "0.04",
                          "constants": [],
                          "variables": [
                            0.04
                          ]
                        }
                      },
                      "addStacksPerTrigger": {
                        "operator": "Variables[0] (2) || RETURN",
                        "displayLines": "2",
                        "constants": [],
                        "variables": [
                          2
                        ]
                      }
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
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "Saber_Eidolon2_Bonus[<span class=\"descriptionNumberColor\">The Lost Oath of the Round Table</span>]",
                      "stackLimit": {
                        "operator": "Variables[0] (15) || RETURN",
                        "displayLines": "15",
                        "constants": [],
                        "variables": [
                          15
                        ]
                      },
                      "valuePerStack": {
                        "MDF_PropertyValue": {
                          "operator": "Variables[0] (0.01) || RETURN",
                          "displayLines": "0.01",
                          "constants": [],
                          "variables": [
                            0.01
                          ]
                        }
                      },
                      "addStacksPerTrigger": {
                        "operator": "Variables[0] (2) || RETURN",
                        "displayLines": "2",
                        "constants": [],
                        "variables": [
                          2
                        ]
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