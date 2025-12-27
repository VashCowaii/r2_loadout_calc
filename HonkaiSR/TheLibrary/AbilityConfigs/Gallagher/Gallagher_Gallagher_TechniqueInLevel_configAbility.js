const configAbility = {
  "fileName": "Gallagher_Gallagher_TechniqueInLevel",
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
      "variableName": "Effect_Random_Key",
      "values": [
        1,
        2,
        3
      ]
    },
    {
      "name": "Add Events/Bonuses",
      "to": "Caster",
      "modifier": "Gallagher_PreTechniqueUsage"
    },
    {
      "name": "Add Events/Bonuses",
      "to": "Caster",
      "modifier": "Gallagher_TechniqueUsage"
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "Gallagher_TechniqueUsage",
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
                  "name": "Find New Target",
                  "from": "All Hostile Entities (AOE)",
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
                          "target": "Use Prior Target(s) Defined",
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
                          "variableName": "Effect_Random_Key",
                          "value": {
                            "operator": "Variables[0] (Effect_Random_Key) || Constants[0] (1) || ADD || RETURN",
                            "displayLines": "(Effect_Random_Key + 1)",
                            "constants": [
                              1
                            ],
                            "variables": [
                              "Effect_Random_Key"
                            ]
                          }
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
                              "target": "Use Prior Target(s) Defined",
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
                              "variableName": "Effect_Random_Key",
                              "value": {
                                "operator": "Variables[0] (Effect_Random_Key) || Constants[0] (1) || ADD || RETURN",
                                "displayLines": "(Effect_Random_Key + 1)",
                                "constants": [
                                  1
                                ],
                                "variables": [
                                  "Effect_Random_Key"
                                ]
                              }
                            }
                          ],
                          "failed": [
                            {
                              "name": "ATK Scaling DMG",
                              "target": "Use Prior Target(s) Defined",
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
                              "variableName": "Effect_Random_Key",
                              "value": 1
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
          ],
          "priorityLevel": -60
        }
      ],
      "stackData": [],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "Gallagher_PreTechniqueUsage",
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
                  "name": "Add Events/Bonuses",
                  "to": "All Hostile Entities (AOE)",
                  "modifier": "MWGallagher_Ability03_DeBonusModifier[<span class=\"descriptionNumberColor\">Besotted</span>]",
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
          ],
          "priorityLevel": -80
        }
      ],
      "stackData": [],
      "latentQueue": []
    }
  ]
}