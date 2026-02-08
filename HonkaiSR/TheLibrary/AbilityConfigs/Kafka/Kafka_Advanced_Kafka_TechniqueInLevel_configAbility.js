const configAbility = {
  "fileName": "Kafka_Advanced_Kafka_TechniqueInLevel",
  "childAbilityList": [
    "Kafka_Advanced_Kafka_TechniqueInLevel"
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
      "modifier": "<a class=\"gModGreen\" id=\"-629359028\">StageAbility_Maze_Kafka_Modifier</a>"
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-629359028\">StageAbility_Maze_Kafka_Modifier</a>",
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
                    "name": "Is Stage Wave 1"
                  }
                ]
              },
              "passed": [
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Eidolon Activated",
                    "eidolon": 1
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Hostile Entities(AOE)}}"
                      },
                      "modifier": "<a class=\"gModGreen\" id=\"1537350177\">Advanced_Kafka_PassiveDotDamage_Eidolon1</a>[<span class=\"descriptionNumberColor\">DoT Vulnerability</span>]",
                      "duration": {
                        "operator": "Variables[0] (2) || RETURN",
                        "displayLines": "2",
                        "constants": [],
                        "variables": [
                          2
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
                      "valuePerStack": {
                        "MDF_DotRatio": {
                          "operator": "Variables[0] (0.3) || RETURN",
                          "displayLines": "0.3",
                          "constants": [],
                          "variables": [
                            0.3
                          ]
                        }
                      }
                    }
                  ]
                },
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Hostile Entities(AOE)}}"
                  },
                  "canPhase": true,
                  "AttackScaling": {
                    "DamageType": "Thunder",
                    "Damage": {
                      "operator": "Variables[0] (0.5) || RETURN",
                      "displayLines": "0.5",
                      "constants": [],
                      "variables": [
                        0.5
                      ]
                    },
                    "Toughness": null,
                    "Tags": null
                  }
                },
                "Trigger: Attack End",
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Eidolon Activated",
                    "eidolon": 6
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "Skill03_P3_LifeTime",
                      "value": {
                        "operator": "Variables[0] (2) || Variables[1] (1) || ADD || RETURN",
                        "displayLines": "(2 + 1)",
                        "constants": [],
                        "variables": [
                          2,
                          1
                        ]
                      }
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "Skill03_P4_DOTPercentage",
                      "value": {
                        "operator": "Variables[0] (2.9) || Variables[1] (1.56) || ADD || RETURN",
                        "displayLines": "(2.9 + 1.56)",
                        "constants": [],
                        "variables": [
                          2.9,
                          1.56
                        ]
                      }
                    }
                  ],
                  "failed": [
                    {
                      "name": "Define Custom Variable",
                      "variableName": "Skill03_P3_LifeTime",
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
                      "name": "Define Custom Variable",
                      "variableName": "Skill03_P4_DOTPercentage",
                      "value": {
                        "operator": "Variables[0] (2.9) || RETURN",
                        "displayLines": "2.9",
                        "constants": [],
                        "variables": [
                          2.9
                        ]
                      }
                    }
                  ]
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "SkillMaze_P1_Chance",
                  "value": {
                    "operator": "Variables[0] (1) || RETURN",
                    "displayLines": "1",
                    "constants": [],
                    "variables": [
                      1
                    ]
                  }
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Hostile Entities(AOE)}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1935319413\">Standard_DOT_Electric</a>[<span class=\"descriptionNumberColor\">Shock</span>]",
                  "duration": {
                    "operator": "Variables[0] (Skill03_P3_LifeTime) || RETURN",
                    "displayLines": "Skill03_P3_LifeTime",
                    "constants": [],
                    "variables": [
                      "Skill03_P3_LifeTime"
                    ]
                  },
                  "baseChance": {
                    "operator": "Variables[0] (SkillMaze_P1_Chance) || RETURN",
                    "displayLines": "SkillMaze_P1_Chance",
                    "constants": [],
                    "variables": [
                      "SkillMaze_P1_Chance"
                    ]
                  },
                  "valuePerStack": {
                    "Modifier_Electric_DamagePercentage": {
                      "operator": "Variables[0] (Skill03_P4_DOTPercentage) || RETURN",
                      "displayLines": "Skill03_P4_DOTPercentage",
                      "constants": [],
                      "variables": [
                        "Skill03_P4_DOTPercentage"
                      ]
                    }
                  },
                  "stackFlag": "CharacterSkill"
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