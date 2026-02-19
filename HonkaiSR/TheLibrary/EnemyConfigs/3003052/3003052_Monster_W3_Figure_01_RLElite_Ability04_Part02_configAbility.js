const configAbility = {
  "fileName": "3003052_Monster_W3_Figure_01_RLElite_Ability04_Part02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    "Ability Start",
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
            "name": "AND",
            "conditionList": [
              {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"-578587123\">Enemy_W3_Figure_01_Poison</a>[<span class=\"descriptionNumberColor\">Carousal of Wantonness</span>]"
                  },
                  {
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Parameter Target}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"723419042\">Enemy_W3_Figure_01_Electric</a>[<span class=\"descriptionNumberColor\">Carousal of Revelry</span>]",
                    "invertCondition": true
                  }
                ]
              }
            ]
          },
          "passed": [
            {
              "name": "Looped Event",
              "maxLoops": 2,
              "Event": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-578587123\">Enemy_W3_Figure_01_Poison</a>[<span class=\"descriptionNumberColor\">Carousal of Wantonness</span>]",
                  "duration": {
                    "operator": "Variables[0] ({[Skill04[1]]}) || RETURN",
                    "displayLines": "{[Skill04[1]]}",
                    "constants": [],
                    "variables": [
                      "{[Skill04[1]]}"
                    ]
                  },
                  "baseChance": {
                    "operator": "Variables[0] ({[Skill04[0]]}) || RETURN",
                    "displayLines": "{[Skill04[0]]}",
                    "constants": [],
                    "variables": [
                      "{[Skill04[0]]}"
                    ]
                  },
                  "stackLimit": {
                    "operator": "Variables[0] ({[Skill01[3]]}) || RETURN",
                    "displayLines": "{[Skill01[3]]}",
                    "constants": [],
                    "variables": [
                      "{[Skill01[3]]}"
                    ]
                  },
                  "valuePerStack": {
                    "Modifier_Poison_DamagePercentage": {
                      "operator": "Variables[0] ({[Skill04[2]]}) || RETURN",
                      "displayLines": "{[Skill04[2]]}",
                      "constants": [],
                      "variables": [
                        "{[Skill04[2]]}"
                      ]
                    }
                  },
                  "success": []
                }
              ]
            }
          ],
          "failed": [
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "AND",
                    "conditionList": [
                      {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"-578587123\">Enemy_W3_Figure_01_Poison</a>[<span class=\"descriptionNumberColor\">Carousal of Wantonness</span>]",
                        "invertCondition": true
                      },
                      {
                        "name": "Has Modifier",
                        "target": {
                          "name": "Target Name",
                          "target": "{{Parameter Target}}"
                        },
                        "modifier": "<a class=\"gModGreen\" id=\"723419042\">Enemy_W3_Figure_01_Electric</a>[<span class=\"descriptionNumberColor\">Carousal of Revelry</span>]"
                      }
                    ]
                  }
                ]
              },
              "passed": [
                {
                  "name": "Looped Event",
                  "maxLoops": 2,
                  "Event": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"723419042\">Enemy_W3_Figure_01_Electric</a>[<span class=\"descriptionNumberColor\">Carousal of Revelry</span>]",
                      "duration": {
                        "operator": "Variables[0] ({[Skill04[1]]}) || RETURN",
                        "displayLines": "{[Skill04[1]]}",
                        "constants": [],
                        "variables": [
                          "{[Skill04[1]]}"
                        ]
                      },
                      "baseChance": {
                        "operator": "Variables[0] ({[Skill04[0]]}) || RETURN",
                        "displayLines": "{[Skill04[0]]}",
                        "constants": [],
                        "variables": [
                          "{[Skill04[0]]}"
                        ]
                      },
                      "stackLimit": {
                        "operator": "Variables[0] ({[Skill01[4]]}) || RETURN",
                        "displayLines": "{[Skill01[4]]}",
                        "constants": [],
                        "variables": [
                          "{[Skill01[4]]}"
                        ]
                      },
                      "valuePerStack": {
                        "Modifier_Electric_DamagePercentage": {
                          "operator": "Variables[0] ({[Skill04[2]]}) || RETURN",
                          "displayLines": "{[Skill04[2]]}",
                          "constants": [],
                          "variables": [
                            "{[Skill04[2]]}"
                          ]
                        }
                      },
                      "success": []
                    }
                  ]
                }
              ],
              "failed": [
                {
                  "name": "Random Event",
                  "odds": [
                    0.5,
                    0.5
                  ],
                  "execute": [
                    {
                      "name": "Looped Event",
                      "maxLoops": 2,
                      "Event": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"-578587123\">Enemy_W3_Figure_01_Poison</a>[<span class=\"descriptionNumberColor\">Carousal of Wantonness</span>]",
                          "duration": {
                            "operator": "Variables[0] ({[Skill04[1]]}) || RETURN",
                            "displayLines": "{[Skill04[1]]}",
                            "constants": [],
                            "variables": [
                              "{[Skill04[1]]}"
                            ]
                          },
                          "baseChance": {
                            "operator": "Variables[0] ({[Skill04[0]]}) || RETURN",
                            "displayLines": "{[Skill04[0]]}",
                            "constants": [],
                            "variables": [
                              "{[Skill04[0]]}"
                            ]
                          },
                          "stackLimit": {
                            "operator": "Variables[0] ({[Skill01[3]]}) || RETURN",
                            "displayLines": "{[Skill01[3]]}",
                            "constants": [],
                            "variables": [
                              "{[Skill01[3]]}"
                            ]
                          },
                          "valuePerStack": {
                            "Modifier_Poison_DamagePercentage": {
                              "operator": "Variables[0] ({[Skill04[2]]}) || RETURN",
                              "displayLines": "{[Skill04[2]]}",
                              "constants": [],
                              "variables": [
                                "{[Skill04[2]]}"
                              ]
                            }
                          },
                          "success": []
                        }
                      ]
                    },
                    {
                      "name": "Looped Event",
                      "maxLoops": 2,
                      "Event": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"723419042\">Enemy_W3_Figure_01_Electric</a>[<span class=\"descriptionNumberColor\">Carousal of Revelry</span>]",
                          "duration": {
                            "operator": "Variables[0] ({[Skill04[1]]}) || RETURN",
                            "displayLines": "{[Skill04[1]]}",
                            "constants": [],
                            "variables": [
                              "{[Skill04[1]]}"
                            ]
                          },
                          "baseChance": {
                            "operator": "Variables[0] ({[Skill04[0]]}) || RETURN",
                            "displayLines": "{[Skill04[0]]}",
                            "constants": [],
                            "variables": [
                              "{[Skill04[0]]}"
                            ]
                          },
                          "stackLimit": {
                            "operator": "Variables[0] ({[Skill01[4]]}) || RETURN",
                            "displayLines": "{[Skill01[4]]}",
                            "constants": [],
                            "variables": [
                              "{[Skill01[4]]}"
                            ]
                          },
                          "valuePerStack": {
                            "Modifier_Electric_DamagePercentage": {
                              "operator": "Variables[0] ({[Skill04[2]]}) || RETURN",
                              "displayLines": "{[Skill04[2]]}",
                              "constants": [],
                              "variables": [
                                "{[Skill04[2]]}"
                              ]
                            }
                          },
                          "success": []
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
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"1916393494\">Monster_W3_Figure_01_RLElite_DotMarkListener</a>[<span class=\"descriptionNumberColor\">My Cup Runneth Over</span>]"
    },
    "Trigger: Ability End"
  ],
  "references": []
}