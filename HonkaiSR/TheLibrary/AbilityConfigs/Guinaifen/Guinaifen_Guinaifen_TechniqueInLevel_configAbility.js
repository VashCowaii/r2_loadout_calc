const configAbility = {
  "fileName": "Guinaifen_Guinaifen_TechniqueInLevel",
  "childAbilityList": [
    "Guinaifen_Guinaifen_TechniqueInLevel"
  ],
  "skillTrigger": "SkillMaze",
  "abilityType": "Technique",
  "energy": null,
  "toughnessList": [
    20,
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
      "modifier": "Guinaifen_TechniqueUsage_Modifier"
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "Guinaifen_TechniqueUsage_Modifier",
      "execute": [
        {
          "eventTrigger": "Enter Battle",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Technique Modifies Current Wave"
                  },
                  {
                    "name": "Compare: Variable",
                    "value1": "Wave Count",
                    "compareType": "=",
                    "value2": 1
                  }
                ]
              },
              "passed": [
                {
                  "name": "Define Custom Variable",
                  "variableName": "MDF_AttackCount",
                  "value": 0
                },
                {
                  "name": "Looped Event",
                  "maxLoops": {
                    "operator": "Variables[0] (4) || RETURN",
                    "displayLines": "4",
                    "constants": [],
                    "variables": [
                      4
                    ]
                  },
                  "Event": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "MDF_AttackCount",
                      "value": {
                        "operator": "Variables[0] (MDF_AttackCount) || Constants[0] (1) || ADD || RETURN",
                        "displayLines": "(MDF_AttackCount + 1)",
                        "constants": [
                          1
                        ],
                        "variables": [
                          "MDF_AttackCount"
                        ]
                      }
                    },
                    {
                      "name": "Find New Target",
                      "from": {
                        "name": "Target Name",
                        "target": "{{Hostile Entities(AOE)}}"
                      },
                      "searchRandom": true,
                      "includeDyingTargets": true,
                      "maxTargets": 1,
                      "conditions": {
                        "name": "OR",
                        "conditionList": [
                          {
                            "name": "Enemies Still Alive",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Caster}}"
                            },
                            "invertCondition": true,
                            "includeNonTargets": true
                          },
                          {
                            "name": "Compare: Variable",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Parameter Target}}"
                            },
                            "value1": "CurrentHP",
                            "compareType": ">",
                            "value2": 0
                          }
                        ]
                      },
                      "ifTargetFound": [
                        {
                          "name": "ATK Scaling DMG",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "canPhase": true,
                          "AttackScaling": {
                            "DamageType": "Fire",
                            "Damage": {
                              "operator": "Variables[0] (0.5) || RETURN",
                              "displayLines": "0.5",
                              "constants": [],
                              "variables": [
                                0.5
                              ]
                            },
                            "Toughness": null,
                            "Tags": null,
                            "attackType": "Technique",
                            "EnergyGainPercent": "100%"
                          }
                        },
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Compare: Variable",
                            "value1": "MDF_AttackCount",
                            "compareType": "=",
                            "value2": {
                              "operator": "Variables[0] (4) || RETURN",
                              "displayLines": "4",
                              "constants": [],
                              "variables": [
                                4
                              ]
                            },
                            "contextScope": "ContextModifier"
                          },
                          "passed": [
                            "Trigger: Attack End"
                          ]
                        },
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Eidolon Activated",
                            "eidolon": 6
                          },
                          "passed": [
                            {
                              "name": "Define Custom Variable",
                              "variableName": "MDF_MaxLayer",
                              "value": {
                                "operator": "Variables[0] (3) || Variables[1] (1) || ADD || RETURN",
                                "displayLines": "(3 + 1)",
                                "constants": [],
                                "variables": [
                                  3,
                                  1
                                ]
                              }
                            }
                          ],
                          "failed": [
                            {
                              "name": "Define Custom Variable",
                              "variableName": "MDF_MaxLayer",
                              "value": {
                                "operator": "Variables[0] (3) || RETURN",
                                "displayLines": "3",
                                "constants": [],
                                "variables": [
                                  3
                                ]
                              }
                            }
                          ]
                        },
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "modifier": "Guinaifen_Oil_Sub[<span class=\"descriptionNumberColor\">Firekiss</span>]",
                          "duration": {
                            "operator": "Variables[0] (3) || RETURN",
                            "displayLines": "3",
                            "constants": [],
                            "variables": [
                              3
                            ]
                          },
                          "baseChance": {
                            "operator": "Variables[0] (1) || RETURN",
                            "displayLines": "1",
                            "constants": [],
                            "variables": [
                              1
                            ]
                          },
                          "stackLimit": {
                            "operator": "Variables[0] (MDF_MaxLayer) || RETURN",
                            "displayLines": "MDF_MaxLayer",
                            "constants": [],
                            "variables": [
                              "MDF_MaxLayer"
                            ]
                          },
                          "valuePerStack": {
                            "MDF_PropertyValue2": {
                              "operator": "Variables[0] (0.07) || RETURN",
                              "displayLines": "0.07",
                              "constants": [],
                              "variables": [
                                0.07
                              ]
                            }
                          },
                          "addStacksPerTrigger": 1
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ],
          "priorityLevel": -60
        }
      ],
      "stackData": [],
      "latentQueue": []
    }
  ]
}