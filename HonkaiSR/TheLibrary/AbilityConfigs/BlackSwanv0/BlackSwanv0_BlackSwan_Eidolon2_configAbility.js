const configAbility = {
  "fileName": "BlackSwanv0_BlackSwan_Eidolon2",
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
      "modifier": "<a class=\"gModGreen\" id=\"1490076002\">BlackSwan_Eidolon2</a>"
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__1490076002\">BlackSwan_Eidolon2</a>",
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
                        "conditions": {
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
                            "modifier": "<a class=\"gModGreen\" id=\"616609195\">M_BlackSwan_DOTFlag</a>",
                            "justAddedOrActive": true
                          },
                          {
                            "name": "Has Modifier",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Parameter Target}}"
                            },
                            "modifier": "<a class=\"gModGreen\" id=\"-658722874\">M_BlackSwan_P01_AddDOTFlag</a>",
                            "justAddedOrActive": true
                          },
                          {
                            "name": "Has Modifier",
                            "target": {
                              "name": "Target Name",
                              "target": "{{Parameter Target}}"
                            },
                            "modifier": "<a class=\"gModGreen\" id=\"375131949\">M_BlackSwan_Tree02_AddDOTFlag</a>",
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
                              "displayLines": "Rank06_Chance"
                            }
                          },
                          "passed": [
                            {
                              "name": "Define Custom Variable",
                              "value": {
                                "displayLines": "(6 + Rank06_Extra_Layer)"
                              },
                              "variableName": "Rank06_Weighted_Stack_Layer"
                            }
                          ],
                          "failed": [
                            {
                              "name": "Define Custom Variable",
                              "value": {
                                "displayLines": "6"
                              },
                              "variableName": "Rank06_Weighted_Stack_Layer"
                            }
                          ]
                        },
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"2037361233\">BlackSwan_DOT</a>[<span class=\"descriptionNumberColor\">Arcana</span>]",
                          "baseChance": {
                            "displayLines": "1"
                          },
                          "stackLimit": {
                            "displayLines": "Max_DOT_Layer"
                          },
                          "valuePerStack": {
                            "Basic_DamagePercentage": {
                              "displayLines": "2.4"
                            },
                            "ExtraLayer_DamagePercentage": {
                              "displayLines": "0.12"
                            },
                            "SecondLayer": {
                              "displayLines": "3"
                            },
                            "Spread_DamagePercentage": {
                              "displayLines": "1.8"
                            },
                            "ThirdLayer": {
                              "displayLines": "7"
                            },
                            "DefenceIgnore": {
                              "displayLines": "0.2"
                            },
                            "Cast_By_Level": 0
                          },
                          "addStacksPerTrigger": {
                            "displayLines": "Rank06_Weighted_Stack_Layer"
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
  }
}