const configAbility = {
  "fileName": "4044011_Monster_W4_Theoroi_Part2Summon",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "WAIT FOR",
      "conditions": {
        "name": "Death Animation Completed",
        "team": "Enemy Team",
        "entityType": "Team Characters"
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
        "displayLines": "SummonLayer"
      },
      "execute": [
        {
          "name": "Define Custom Variable",
          "value": {
            "displayLines": "(SummonCount + 1)"
          },
          "variableName": "SummonCount"
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
              "value": {
                "displayLines": "{[PassiveSkill03[2]]}"
              },
              "variableName": "DelayRatio"
            }
          ],
          "failed": [
            {
              "name": "Define Custom Variable",
              "value": 0,
              "variableName": "SummonCount"
            },
            {
              "name": "Define Custom Variable",
              "value": {
                "displayLines": "{[PassiveSkill03[4]]}"
              },
              "variableName": "DelayRatio"
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
                    "displayLines": "SummonList_ADF_3"
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
                    "displayLines": "DelayRatio"
                  },
                  "enemyList": [
                    {
                      "name": "Enemy Entry",
                      "enemyID": {
                        "displayLines": "SummonList_ADF_2"
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
                    "displayLines": "DelayRatio"
                  },
                  "enemyList": [
                    {
                      "name": "Enemy Entry",
                      "enemyID": {
                        "displayLines": "SummonList_ADF_3"
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
                "displayLines": "DelayRatio"
              },
              "enemyList": [
                {
                  "name": "Enemy Entry",
                  "enemyID": {
                    "displayLines": "SummonList_ADF_2"
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
  "targetObjectData": {
    "primaryTarget": "{{Caster}}"
  },
  "references": []
}