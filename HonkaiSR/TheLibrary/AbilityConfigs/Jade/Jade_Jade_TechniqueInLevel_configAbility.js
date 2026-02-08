const configAbility = {
  "fileName": "Jade_Jade_TechniqueInLevel",
  "childAbilityList": [
    "Jade_Jade_TechniqueInLevel"
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
      "modifier": "<a class=\"gModGreen\" id=\"-78900852\">StageAbility_Maze_Jade_Modifier</a>",
      "valuePerStack": {
        "MDF_HitNumb_Maze": 0
      }
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "<a class=\"gModGreen\" id=\"mod__-78900852\">StageAbility_Maze_Jade_Modifier</a>",
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
                    "name": "Has Modifier",
                    "target": {
                      "name": "Target Name",
                      "target": "{{Level Entity}}"
                    },
                    "modifier": "<a class=\"gModGreen\" id=\"1904238030\">StageAbility_MazeStandard_EnterBattle_Monster_Modifier</a>",
                    "invertCondition": true
                  },
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
                  "from": {
                    "name": "Target Name",
                    "target": "{{Hostile Entities(AOE)}}"
                  },
                  "searchRandom": true,
                  "ifTargetFound": [
                    {
                      "name": "ATK Scaling DMG",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "AttackScaling": {
                        "DamageType": "Quantum",
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
                        "attackType": "Technique"
                      }
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "_RateLayer",
                      "value": {
                        "operator": "Variables[0] (_RateLayer) || Constants[0] (1) || ADD || RETURN",
                        "displayLines": "(_RateLayer + 1)",
                        "constants": [
                          1
                        ],
                        "variables": [
                          "_RateLayer"
                        ]
                      }
                    }
                  ]
                },
                "Trigger: Attack End",
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "modifier": "<a class=\"gModGreen\" id=\"-2143808418\">Jade_Passive_Rate</a>[<span class=\"descriptionNumberColor\">Pawned Asset</span>]",
                  "stackLimit": {
                    "operator": "Variables[0] (50) || RETURN",
                    "displayLines": "50",
                    "constants": [],
                    "variables": [
                      50
                    ]
                  },
                  "valuePerStack": {
                    "MDF_PropertyValue": {
                      "operator": "Variables[0] (0.024) || RETURN",
                      "displayLines": "0.024",
                      "constants": [],
                      "variables": [
                        0.024
                      ]
                    },
                    "MDF_PropertyValue2": {
                      "operator": "Variables[0] (0.005) || RETURN",
                      "displayLines": "0.005",
                      "constants": [],
                      "variables": [
                        0.005
                      ]
                    }
                  },
                  "addStacksPerTrigger": {
                    "operator": "Variables[0] (15) || RETURN",
                    "displayLines": "15",
                    "constants": [],
                    "variables": [
                      15
                    ]
                  }
                }
              ]
            }
          ],
          "priorityLevel": -60
        }
      ],
      "stackData": [
        "MDF_HitNumb_Maze"
      ],
      "latentQueue": []
    }
  ]
}