const configAbility = {
  "fileName": "4044011_Monster_W4_Theoroi_Part2Summon",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "WAIT FOR",
      "condition": {
        "name": "Death Animation Completed",
        "team": "Enemy Team",
        "type": "Team Characters"
      }
    },
    {
      "name": "Declare Custom Variable",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "variableName": "SummonLayer"
    },
    {
      "name": "Declare Custom Variable",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "variableName": "SummonCount"
    },
    {
      "name": "Declare Custom Variable",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "variableName": "DelayRatio"
    },
    {
      "name": "Define Custom Variable with Modifier Values",
      "valueType": "Layer",
      "variableName": "SummonLayer",
      "modifierName": "<a class=\"gModGreen\" id=\"1628585625\">Monster_W4_Theoroi_Summon</a>",
      "multiplier": 1
    },
    {
      "name": "Looped Event",
      "maxLoops": {
        "operator": "Variables[0] (SummonLayer) || RETURN",
        "displayLines": "SummonLayer",
        "constants": [],
        "variables": [
          "SummonLayer"
        ]
      },
      "Event": [
        {
          "name": "Define Custom Variable",
          "variableName": "SummonCount",
          "value": {
            "operator": "Variables[0] (SummonCount) || Constants[0] (1) || ADD || RETURN",
            "displayLines": "(SummonCount + 1)",
            "constants": [
              1
            ],
            "variables": [
              "SummonCount"
            ]
          }
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Compare: Variable",
            "value1": "SummonCount",
            "compareType": "=",
            "value2": 1
          },
          "passed": [
            {
              "name": "Define Custom Variable",
              "variableName": "DelayRatio",
              "value": {
                "operator": "Variables[0] ({[PassiveSkill03[2]]}) || RETURN",
                "displayLines": "{[PassiveSkill03[2]]}",
                "constants": [],
                "variables": [
                  "{[PassiveSkill03[2]]}"
                ]
              }
            }
          ],
          "failed": [
            {
              "name": "Define Custom Variable",
              "variableName": "SummonCount",
              "value": 0
            },
            {
              "name": "Define Custom Variable",
              "variableName": "DelayRatio",
              "value": {
                "operator": "Variables[0] ({[PassiveSkill03[4]]}) || RETURN",
                "displayLines": "{[PassiveSkill03[4]]}",
                "constants": [],
                "variables": [
                  "{[PassiveSkill03[4]]}"
                ]
              }
            }
          ]
        },
        {
          "name": "IF",
          "conditions": {
            "name": "Random Chance",
            "chance": 0.7
          },
          "passed": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "target": {
                  "name": "Target Name",
                  "target": "{{All Team Members}}"
                },
                "value1": "TeamCharacterCount",
                "compareType": ">=",
                "value2": 1,
                "conditions": {
                  "name": "Enemy ID",
                  "ID": {
                    "operator": "Variables[0] (ENEMIES_OBJECT_UNUSED__103) || RETURN",
                    "displayLines": "ENEMIES_OBJECT_UNUSED__103",
                    "constants": [],
                    "variables": [
                      "ENEMIES_OBJECT_UNUSED__103"
                    ]
                  },
                  "target": {
                    "name": "Target Name",
                    "target": "{{Parameter Target}}"
                  },
                  "characterName": null
                }
              },
              "passed": [
                {
                  "name": "Create Enemies",
                  "delayPercent": {
                    "operator": "Variables[0] (DelayRatio) || RETURN",
                    "displayLines": "DelayRatio",
                    "constants": [],
                    "variables": [
                      "DelayRatio"
                    ]
                  },
                  "enemyList": [
                    {
                      "name": "Enemy Entry",
                      "enemyID": {
                        "operator": "Variables[0] (ENEMIES_OBJECT_UNUSED__104) || RETURN",
                        "displayLines": "ENEMIES_OBJECT_UNUSED__104",
                        "constants": [],
                        "variables": [
                          "ENEMIES_OBJECT_UNUSED__104"
                        ]
                      },
                      "locationType": "FormationRecord"
                    }
                  ]
                }
              ],
              "failed": [
                {
                  "name": "Create Enemies",
                  "delayPercent": {
                    "operator": "Variables[0] (DelayRatio) || RETURN",
                    "displayLines": "DelayRatio",
                    "constants": [],
                    "variables": [
                      "DelayRatio"
                    ]
                  },
                  "enemyList": [
                    {
                      "name": "Enemy Entry",
                      "enemyID": {
                        "operator": "Variables[0] (ENEMIES_OBJECT_UNUSED__103) || RETURN",
                        "displayLines": "ENEMIES_OBJECT_UNUSED__103",
                        "constants": [],
                        "variables": [
                          "ENEMIES_OBJECT_UNUSED__103"
                        ]
                      },
                      "locationType": "FormationRecord"
                    }
                  ]
                }
              ]
            }
          ],
          "failed": [
            {
              "name": "Create Enemies",
              "delayPercent": {
                "operator": "Variables[0] (DelayRatio) || RETURN",
                "displayLines": "DelayRatio",
                "constants": [],
                "variables": [
                  "DelayRatio"
                ]
              },
              "enemyList": [
                {
                  "name": "Enemy Entry",
                  "enemyID": {
                    "operator": "Variables[0] (ENEMIES_OBJECT_UNUSED__104) || RETURN",
                    "displayLines": "ENEMIES_OBJECT_UNUSED__104",
                    "constants": [],
                    "variables": [
                      "ENEMIES_OBJECT_UNUSED__104"
                    ]
                  },
                  "locationType": "FormationRecord"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "name": "Remove Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"1628585625\">Monster_W4_Theoroi_Summon</a>"
    }
  ],
  "references": []
}