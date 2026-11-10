const configAbility = {
  "fileName": "Kafkav0_Kafka_TechniqueInLevel",
  "childAbilityList": [
    "Kafkav0_Kafka_TechniqueInLevel"
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
          "priorityLevel": -60,
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  "Technique Modifies Current Wave",
                  "Is Stage Wave 1"
                ]
              },
              "passed": [
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
                      "displayLines": "0.5"
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
                      "value": {
                        "displayLines": "(2 + 1)"
                      },
                      "variableName": "Skill03_P3_LifeTime"
                    },
                    {
                      "name": "Define Custom Variable",
                      "value": {
                        "displayLines": "(2.9 + 1.56)"
                      },
                      "variableName": "Skill03_P4_DOTPercentage"
                    }
                  ],
                  "failed": [
                    {
                      "name": "Define Custom Variable",
                      "value": {
                        "displayLines": "2"
                      },
                      "variableName": "Skill03_P3_LifeTime"
                    },
                    {
                      "name": "Define Custom Variable",
                      "value": {
                        "displayLines": "2.9"
                      },
                      "variableName": "Skill03_P4_DOTPercentage"
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Trace Activated",
                    "conditionList": "Thorns"
                  },
                  "passed": [
                    {
                      "name": "Define Custom Variable",
                      "value": {
                        "displayLines": "(1 + 0.3)"
                      },
                      "variableName": "SkillMaze_P1_Chance"
                    }
                  ],
                  "failed": [
                    {
                      "name": "Define Custom Variable",
                      "value": {
                        "displayLines": "1"
                      },
                      "variableName": "SkillMaze_P1_Chance"
                    }
                  ]
                },
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Hostile Entities(AOE)}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"1935319413\">Standard_DOT_Electric</a>[<span class=\"descriptionNumberColor\">Shock</span>]",
                  "duration": {
                    "displayLines": "Skill03_P3_LifeTime"
                  },
                  "baseChance": {
                    "displayLines": "SkillMaze_P1_Chance"
                  },
                  "valuePerStack": {
                    "Modifier_Electric_DamagePercentage": {
                      "displayLines": "Skill03_P4_DOTPercentage"
                    }
                  },
                  "stackFlag": "CharacterSkill"
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
    "primaryTarget": "{{Hostile Entities(AOE)}}"
  }
}