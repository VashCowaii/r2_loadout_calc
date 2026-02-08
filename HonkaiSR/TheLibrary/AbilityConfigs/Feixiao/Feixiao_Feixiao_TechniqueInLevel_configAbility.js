const configAbility = {
  "fileName": "Feixiao_Feixiao_TechniqueInLevel",
  "childAbilityList": [
    "Feixiao_Feixiao_TechniqueInLevel"
  ],
  "skillTrigger": "SkillMaze",
  "abilityType": "Technique",
  "energy": null,
  "toughnessList": [
    0,
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
      "modifier": "<a class=\"gModGreen\" id=\"-1813550053\">StageAbility_Maze_Feixiao_Modifier_Attack</a>"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-1813368649\">StageAbility_Maze_Feixiao_Modifier_GainSP</a>"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "<a class=\"gModGreen\" id=\"-182307548\">M_Feixiao_Maze_ForceCritical</a>"
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-182307548\">M_Feixiao_Maze_ForceCritical</a>",
      "execute": [
        {
          "eventTrigger": "Deal Damage Start [Owner]: Any",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "AND",
                "conditionList": [
                  {
                    "name": "Attack Type",
                    "attackTypes": [
                      "Technique"
                    ]
                  },
                  {
                    "name": "Has DMG Instance Tag",
                    "tag": "Feixiao_00_MazeAttack"
                  }
                ]
              },
              "passed": [
                {
                  "name": "Adjust Target Stats",
                  "modifiedValuesArray": [
                    {
                      "on": "AttackData",
                      "statName": "&nbsp;<span class=\"descriptionNumberColor\">CritRateOverride</span>&nbsp;",
                      "value": 1
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
    },
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-1813550053\">StageAbility_Maze_Feixiao_Modifier_Attack</a>",
      "execute": [
        {
          "eventTrigger": "When Stacking/Receiving Modifier"
        },
        {
          "eventTrigger": "Enter Battle",
          "execute": [
            {
              "name": "Define Custom Variable with Stage Wave Count",
              "scope": "ContextModifier",
              "variableName": "MDF_WaveStageCount"
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "Wave Count",
                "compareType": ">",
                "value2": 1
              }
            },
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "Wave Count",
                "compareType": ">",
                "value2": 1
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
                    "DamageType": "Wind",
                    "Damage": {
                      "operator": "Variables[0] (MIN) || Variables[1] (10) || Variables[2] (2) || Variables[3] (MDF_WaveStageCount) || Constants[0] (1) || SUB || Variables[4] (1) || MUL || ADD || PARAM_2 || FUNCTION || RETURN",
                      "displayLines": "&nbsp;<span class=\"descriptionFunctionColor\">MIN</span>(10, (2 + ((MDF_WaveStageCount - 1) * 1)))",
                      "constants": [
                        1
                      ],
                      "variables": [
                        "MIN",
                        10,
                        2,
                        "MDF_WaveStageCount",
                        1
                      ]
                    },
                    "Toughness": {
                      "displayLines": 30
                    },
                    "instanceTag": "Feixiao_00_MazeAttack",
                    "Tags": null,
                    "attackType": "Technique",
                    "EnergyGainPercent": "100%"
                  }
                }
              ],
              "failed": [
                {
                  "name": "ATK Scaling DMG",
                  "target": {
                    "name": "Target Name",
                    "target": "{{Hostile Entities(AOE)}}"
                  },
                  "canPhase": true,
                  "AttackScaling": {
                    "DamageType": "Wind",
                    "Damage": {
                      "operator": "Variables[0] (MIN) || Variables[1] (10) || Variables[2] (2) || Variables[3] (MDF_WaveStageCount) || Constants[0] (1) || SUB || Variables[4] (1) || MUL || ADD || PARAM_2 || FUNCTION || RETURN",
                      "displayLines": "&nbsp;<span class=\"descriptionFunctionColor\">MIN</span>(10, (2 + ((MDF_WaveStageCount - 1) * 1)))",
                      "constants": [
                        1
                      ],
                      "variables": [
                        "MIN",
                        10,
                        2,
                        "MDF_WaveStageCount",
                        1
                      ]
                    },
                    "Toughness": null,
                    "instanceTag": "Feixiao_00_MazeAttack",
                    "Tags": null,
                    "attackType": "Technique",
                    "EnergyGainPercent": "100%"
                  }
                }
              ]
            },
            "Trigger: Attack End"
          ],
          "priorityLevel": -60
        }
      ],
      "stackData": [],
      "latentQueue": []
    }
  ]
}