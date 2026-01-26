const configAbility = {
  "fileName": "Rappa_Rappa_TechniqueInLevel",
  "childAbilityList": [
    "Rappa_Rappa_TechniqueInLevel"
  ],
  "skillTrigger": "SkillMaze",
  "abilityType": "Technique",
  "energy": null,
  "toughnessList": [
    30,
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
      "modifier": "StageAbility_Maze_Rappa_Modifier_Dmg"
    },
    {
      "name": "Add Events/Bonuses",
      "to": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "modifier": "StageAbility_Maze_Rappa_Modifier_Bonus"
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "StageAbility_Maze_Rappa_Modifier_Bonus",
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
                    "name": "Compare: Variable",
                    "value1": "Wave Count",
                    "compareType": "=",
                    "value2": 1
                  }
                ]
              },
              "passed": [
                {
                  "name": "Update Energy",
                  "on": {
                    "name": "Target Name",
                    "target": "{{Caster}}"
                  },
                  "value": {
                    "operator": "Variables[0] (10) || RETURN",
                    "displayLines": "10",
                    "constants": [],
                    "variables": [
                      10
                    ]
                  },
                  "isFixed": "* ERR"
                }
              ]
            }
          ],
          "priorityLevel": -80
        }
      ],
      "stackData": [],
      "latentQueue": []
    },
    {
      "name": "Modifier Construction",
      "for": "StageAbility_Maze_Rappa_Modifier_Dmg",
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
                    "target": "{{Enemy Team All}}"
                  },
                  "ifTargetFound": [
                    {
                      "name": "Define Custom Variable with Stat",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "variableName": "DV_Ultra_Damage_MaxStance",
                      "value": "&nbsp;<span class=\"descriptionNumberColor\">ToughnessMax</span>&nbsp;",
                      "warningType": "MaxToughness"
                    },
                    {
                      "name": "Define Custom Variable",
                      "variableName": "DV_Ratio",
                      "value": {
                        "operator": "Constants[0] (0.5) || Variables[0] (DV_Ultra_Damage_MaxStance) || Constants[1] (30) || DIV || Constants[2] (2) || ADD || MUL || Constants[3] (4) || DIV || Variables[1] (2) || MUL || RETURN",
                        "displayLines": "(((0.5 * ((DV_Ultra_Damage_MaxStance / 30) + 2)) / 4) * 2)",
                        "constants": [
                          0.5,
                          30,
                          2,
                          4
                        ],
                        "variables": [
                          "DV_Ultra_Damage_MaxStance",
                          2
                        ]
                      }
                    },
                    {
                      "name": "ATK Scaling DMG",
                      "target": {
                        "name": "Target Name",
                        "target": "{{Parameter Target}}"
                      },
                      "canPhase": true,
                      "AttackScaling": {
                        "DamageType": "Imaginary",
                        "DamageBreak": {
                          "operator": "Variables[0] (DV_Ratio) || RETURN",
                          "displayLines": "DV_Ratio",
                          "constants": [],
                          "variables": [
                            "DV_Ratio"
                          ]
                        },
                        "dmgFormula": "Break DMG Scaling",
                        "dmgFormulaFinal": "Pure (No DMG%)",
                        "Toughness": null,
                        "Tags": null,
                        "attackType": "Break DMG"
                      }
                    },
                    {
                      "name": "Find New Target",
                      "from": {
                        "name": "Target Name",
                        "target": "{{Targets Adjacent to Parameter Target}}"
                      },
                      "maxTargets": 2,
                      "ifTargetFound": [
                        {
                          "name": "Define Custom Variable with Stat",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "variableName": "DV_Ultra_Damage_MaxStance",
                          "value": "&nbsp;<span class=\"descriptionNumberColor\">ToughnessMax</span>&nbsp;",
                          "warningType": "MaxToughness"
                        },
                        {
                          "name": "Define Custom Variable",
                          "variableName": "DV_Ratio2",
                          "value": {
                            "operator": "Constants[0] (0.5) || Variables[0] (DV_Ultra_Damage_MaxStance) || Constants[1] (30) || DIV || Constants[2] (2) || ADD || MUL || Constants[3] (4) || DIV || Variables[1] (1.8) || MUL || RETURN",
                            "displayLines": "(((0.5 * ((DV_Ultra_Damage_MaxStance / 30) + 2)) / 4) * 1.8)",
                            "constants": [
                              0.5,
                              30,
                              2,
                              4
                            ],
                            "variables": [
                              "DV_Ultra_Damage_MaxStance",
                              1.8
                            ]
                          }
                        },
                        {
                          "name": "ATK Scaling DMG",
                          "target": {
                            "name": "Target Name",
                            "target": "{{Parameter Target}}"
                          },
                          "canPhase": true,
                          "AttackScaling": {
                            "DamageType": "Imaginary",
                            "DamageBreak": {
                              "operator": "Variables[0] (DV_Ratio2) || RETURN",
                              "displayLines": "DV_Ratio2",
                              "constants": [],
                              "variables": [
                                "DV_Ratio2"
                              ]
                            },
                            "dmgFormula": "Break DMG Scaling",
                            "dmgFormulaFinal": "Pure (No DMG%)",
                            "Toughness": null,
                            "Tags": null,
                            "attackType": "Break DMG"
                          }
                        }
                      ]
                    }
                  ]
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