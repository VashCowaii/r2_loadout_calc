const configAbility = {
  "fileName": "Gallagher_Gallagher_TechniqueInLevel",
  "childAbilityList": [
    "Gallagher_Gallagher_TechniqueInLevel"
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
      "name": "Random Value",
      "valuesList": [
        1,
        2,
        3
      ],
      "variableName": "Effect_Random_Key"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-1721745580\">Gallagher_PreTechniqueUsage</a>"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"1689555093\">Gallagher_TechniqueUsage</a>"
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1689555093\">Gallagher_TechniqueUsage</a>",
      "execute": [
        {
          "eventTrigger": "Enter Battle",
          "priorityLevel": -60,
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  "Technique Modifies Current Wave",
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
                  "name": "Find New Target",
                  "from": {
                    "name": "Target Name",
                    "target": "{{Hostile Entities(AOE)}}"
                  },
                  "searchRandom": true,
                  "ifTargetFound": [
                    {
                      "name": "IF",
                      "conditions": {
                        "name": "Compare: Variable",
                        "value1": "Effect_Random_Key",
                        "compareType": "=",
                        "value2": 1
                      },
                      "passed": [
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
                          "name": "Define Custom Variable",
                          "value": {
                            "operator": "Variables[0] (Effect_Random_Key) || Constants[0] (1) || ADD || RETURN",
                            "displayLines": "(Effect_Random_Key + 1)",
                            "constants": [
                              1
                            ],
                            "variables": [
                              "Effect_Random_Key"
                            ]
                          },
                          "variableName": "Effect_Random_Key"
                        }
                      ],
                      "failed": [
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Compare: Variable",
                            "value1": "Effect_Random_Key",
                            "compareType": "=",
                            "value2": 2
                          },
                          "passed": [
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
                              "name": "Define Custom Variable",
                              "value": {
                                "operator": "Variables[0] (Effect_Random_Key) || Constants[0] (1) || ADD || RETURN",
                                "displayLines": "(Effect_Random_Key + 1)",
                                "constants": [
                                  1
                                ],
                                "variables": [
                                  "Effect_Random_Key"
                                ]
                              },
                              "variableName": "Effect_Random_Key"
                            }
                          ],
                          "failed": [
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
                              "name": "Define Custom Variable",
                              "value": 1,
                              "variableName": "Effect_Random_Key"
                            }
                          ]
                        }
                      ]
                    }
                  ]
                },
                "Trigger: Attack End"
              ]
            }
          ]
        }
      ]
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1721745580\">Gallagher_PreTechniqueUsage</a>",
      "execute": [
        {
          "eventTrigger": "Enter Battle",
          "priorityLevel": -80,
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  "Technique Modifies Current Wave",
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
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Hostile Entities(AOE)}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-606062756\">MWGallagher_Ability03_DeBonusModifier</a>[<span class=\"descriptionNumberColor\">Besotted</span>]",
                  "duration": {
                    "operator": "Variables[0] (2) || RETURN",
                    "displayLines": "2",
                    "constants": [],
                    "variables": [
                      2
                    ]
                  },
                  "valuePerStack": {
                    "PointB3_Active": {
                      "operator": "Variables[0] (PointB3_Active) || RETURN",
                      "displayLines": "PointB3_Active",
                      "constants": [],
                      "variables": [
                        "PointB3_Active"
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
  "targetObjectData": {
    "primaryTarget": "{{Caster}}"
  },
  "realTargetData": {
    "primaryTarget": "{{Caster}}"
  }
}