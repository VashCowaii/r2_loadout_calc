const configAbility = {
  "fileName": "3003053_Monster_W3_Figure_01_RLElite_Ability04_Part02",
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
              "execute": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-578587123\">Enemy_W3_Figure_01_Poison</a>[<span class=\"descriptionNumberColor\">Carousal of Wantonness</span>]",
                  "duration": {
                    "displayLines": "{[Skill04[1]]}"
                  },
                  "baseChance": {
                    "displayLines": "{[Skill04[0]]}"
                  },
                  "stackLimit": {
                    "displayLines": "{[Skill01[3]]}"
                  },
                  "valuePerStack": {
                    "Modifier_Poison_DamagePercentage": {
                      "displayLines": "{[Skill04[2]]}"
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
                  "execute": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"723419042\">Enemy_W3_Figure_01_Electric</a>[<span class=\"descriptionNumberColor\">Carousal of Revelry</span>]",
                      "duration": {
                        "displayLines": "{[Skill04[1]]}"
                      },
                      "baseChance": {
                        "displayLines": "{[Skill04[0]]}"
                      },
                      "stackLimit": {
                        "displayLines": "{[Skill01[4]]}"
                      },
                      "valuePerStack": {
                        "Modifier_Electric_DamagePercentage": {
                          "displayLines": "{[Skill04[2]]}"
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
                      "execute": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"-578587123\">Enemy_W3_Figure_01_Poison</a>[<span class=\"descriptionNumberColor\">Carousal of Wantonness</span>]",
                          "duration": {
                            "displayLines": "{[Skill04[1]]}"
                          },
                          "baseChance": {
                            "displayLines": "{[Skill04[0]]}"
                          },
                          "stackLimit": {
                            "displayLines": "{[Skill01[3]]}"
                          },
                          "valuePerStack": {
                            "Modifier_Poison_DamagePercentage": {
                              "displayLines": "{[Skill04[2]]}"
                            }
                          },
                          "success": []
                        }
                      ]
                    },
                    {
                      "name": "Looped Event",
                      "maxLoops": 2,
                      "execute": [
                        {
                          "name": "Add Events/Bonuses",
                          "to": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "modifier": "<a class=\"gModGreen\" id=\"723419042\">Enemy_W3_Figure_01_Electric</a>[<span class=\"descriptionNumberColor\">Carousal of Revelry</span>]",
                          "duration": {
                            "displayLines": "{[Skill04[1]]}"
                          },
                          "baseChance": {
                            "displayLines": "{[Skill04[0]]}"
                          },
                          "stackLimit": {
                            "displayLines": "{[Skill01[4]]}"
                          },
                          "valuePerStack": {
                            "Modifier_Electric_DamagePercentage": {
                              "displayLines": "{[Skill04[2]]}"
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
  "targetObjectData": {
    "primaryTarget": "{{Hostile Entities(AOE)}}"
  },
  "references": []
}