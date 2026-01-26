const configAbility = {
  "fileName": "BlackSwan_BlackSwan_Eidolon2",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "BlackSwan_Eidolon2"
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "BlackSwan_Eidolon2",
      "execute": [
        {
          "eventTrigger": "Entity Death [Anyone]",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Target Exists",
                "target": {
                  "name": "Target Name",
                  "target": "{{Parameter Target 2}}"
                }
              },
              "passed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Is Part Of Team",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "team": "Enemy Team"
                      },
                      {
                        "name": "NOT",
                        "condition": {
                          "name": "Is Part Of Team",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Parameter Target 2}}"
                          },
                          "team": "Enemy Team"
                        }
                      },
                      {
                        "name": "OR",
                        "conditionList": [
                          {
                            "name": "Has Modifier",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Parameter Target}}"
                            },
                            "modifier": "M_BlackSwan_DOTFlag",
                            "justAddedOrActive": true
                          },
                          {
                            "name": "Has Modifier",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Parameter Target}}"
                            },
                            "modifier": "M_BlackSwan_P01_AddDOTFlag",
                            "justAddedOrActive": true
                          },
                          {
                            "name": "Has Modifier",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Parameter Target}}"
                            },
                            "modifier": "M_BlackSwan_Tree02_AddDOTFlag",
                            "justAddedOrActive": true
                          }
                        ]
                      }
                    ]
                  },
                  "passed": [
                    {
                      "name": "Find New Target",
                      "from": {
                        "name": "Target Name",
                        "target": "{{Targets Adjacent to Parameter Target}}"
                      },
                      "searchRandom": true,
                      "maxTargets": 2,
                      "ifTargetFound": [
                        {
                          "name": "IF",
                          "conditions": {
                            "name": "Random Chance",
                            "chance": {
                              "operator": "Variables[0] (Rank06_Chance) || RETURN",
                              "displayLines": "Rank06_Chance",
                              "constants": [],
                              "variables": [
                                "Rank06_Chance"
                              ]
                            }
                          },
                          "passed": [
                            {
                              "name": "Define Custom Variable",
                              "variableName": "Rank06_Weighted_Stack_Layer",
                              "value": {
                                "operator": "Variables[0] (6) || Variables[1] (Rank06_Extra_Layer) || ADD || RETURN",
                                "displayLines": "(6 + Rank06_Extra_Layer)",
                                "constants": [],
                                "variables": [
                                  6,
                                  "Rank06_Extra_Layer"
                                ]
                              }
                            }
                          ],
                          "failed": [
                            {
                              "name": "Define Custom Variable",
                              "variableName": "Rank06_Weighted_Stack_Layer",
                              "value": {
                                "operator": "Variables[0] (6) || RETURN",
                                "displayLines": "6",
                                "constants": [],
                                "variables": [
                                  6
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
                          "modifier": "BlackSwan_DOT[<span class=\"descriptionNumberColor\">Arcana</span>]",
                          "baseChance": {
                            "operator": "Variables[0] (1) || RETURN",
                            "displayLines": "1",
                            "constants": [],
                            "variables": [
                              1
                            ]
                          },
                          "stackLimit": {
                            "operator": "Variables[0] (Max_DOT_Layer) || RETURN",
                            "displayLines": "Max_DOT_Layer",
                            "constants": [],
                            "variables": [
                              "Max_DOT_Layer"
                            ]
                          },
                          "valuePerStack": {
                            "Basic_DamagePercentage": {
                              "operator": "Variables[0] (2.4) || RETURN",
                              "displayLines": "2.4",
                              "constants": [],
                              "variables": [
                                2.4
                              ]
                            },
                            "ExtraLayer_DamagePercentage": {
                              "operator": "Variables[0] (0.12) || RETURN",
                              "displayLines": "0.12",
                              "constants": [],
                              "variables": [
                                0.12
                              ]
                            },
                            "SecondLayer": {
                              "operator": "Variables[0] (3) || RETURN",
                              "displayLines": "3",
                              "constants": [],
                              "variables": [
                                3
                              ]
                            },
                            "Spread_DamagePercentage": {
                              "operator": "Variables[0] (1.8) || RETURN",
                              "displayLines": "1.8",
                              "constants": [],
                              "variables": [
                                1.8
                              ]
                            },
                            "ThirdLayer": {
                              "operator": "Variables[0] (7) || RETURN",
                              "displayLines": "7",
                              "constants": [],
                              "variables": [
                                7
                              ]
                            },
                            "DefenceIgnore": {
                              "operator": "Variables[0] (0.2) || RETURN",
                              "displayLines": "0.2",
                              "constants": [],
                              "variables": [
                                0.2
                              ]
                            },
                            "Cast_By_Level": 0
                          },
                          "addStacksPerTrigger": {
                            "operator": "Variables[0] (Rank06_Weighted_Stack_Layer) || RETURN",
                            "displayLines": "Rank06_Weighted_Stack_Layer",
                            "constants": [],
                            "variables": [
                              "Rank06_Weighted_Stack_Layer"
                            ]
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
      ],
      "stackData": [],
      "latentQueue": []
    }
  ]
}