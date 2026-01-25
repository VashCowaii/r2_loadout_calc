const configAbility = {
  "fileName": "Lingsha_Lingsha_TechniqueInLevel",
  "childAbilityList": [
    "Lingsha_Lingsha_TechniqueInLevel"
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
      "modifier": "StageAbility_Maze_Lingsha_Modifier"
    }
  ],
  "references": [
    {
      "name": "Modifier Construction",
      "for": "StageAbility_Maze_Lingsha_Modifier",
      "execute": [
        {
          "eventTrigger": "Enter Battle",
          "execute": [
            {
              "name": "IF",
              "conditions": {
                "name": "Compare: Variable",
                "value1": "Wave Count",
                "compareType": "=",
                "value2": 1
              },
              "passed": [
                {
                  "name": "Add Events/Bonuses",
                  "to": {
                    "name": "Target Name",
                    "target": "{{Hostile Entities(AOE)}}"
                  },
                  "modifier": "Lingsha_BreakDamageUp[<span class=\"descriptionNumberColor\">Befog</span>]",
                  "duration": {
                    "operator": "Variables[0] (2) || RETURN",
                    "displayLines": "2",
                    "constants": [],
                    "variables": [
                      2
                    ]
                  },
                  "valuePerStack": {
                    "MDF_PropertyValue": {
                      "operator": "Variables[0] (0.25) || RETURN",
                      "displayLines": "0.25",
                      "constants": [],
                      "variables": [
                        0.25
                      ]
                    }
                  }
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "Lingsha_AttackTime",
                  "value": {
                    "operator": "Variables[0] (Lingsha_AttackTime) || Variables[1] (3) || ADD || RETURN",
                    "displayLines": "(Lingsha_AttackTime + 3)",
                    "constants": [],
                    "variables": [
                      "Lingsha_AttackTime",
                      3
                    ]
                  }
                },
                {
                  "name": "Add Battle Event",
                  "teamName": "Player Team",
                  "eventID": 11222,
                  "variables": {
                    "BattleEvent_Lingsha_BaseSpeed": {
                      "operator": "Variables[0] (90) || RETURN",
                      "displayLines": "90",
                      "constants": [],
                      "variables": [
                        90
                      ]
                    },
                    "BattleEvent_Lingsha_AttackTime": {
                      "operator": "Variables[0] (Lingsha_AttackTime) || RETURN",
                      "displayLines": "Lingsha_AttackTime",
                      "constants": [],
                      "variables": [
                        "Lingsha_AttackTime"
                      ]
                    },
                    "BattleEvent_Lingsha_IndexID": {
                      "operator": "Variables[0] (BattleEvent_Lingsha_IndexID) || RETURN",
                      "displayLines": "BattleEvent_Lingsha_IndexID",
                      "constants": [],
                      "variables": [
                        "BattleEvent_Lingsha_IndexID"
                      ]
                    },
                    "BattleEvent_Lingsha_PointB3": 0
                  }
                },
                {
                  "name": "Update Displayed Energy Bar",
                  "value": {
                    "operator": "Variables[0] (Lingsha_AttackTime) || RETURN",
                    "displayLines": "Lingsha_AttackTime",
                    "constants": [],
                    "variables": [
                      "Lingsha_AttackTime"
                    ]
                  },
                  "maximum": {
                    "operator": "Variables[0] (5) || RETURN",
                    "displayLines": "5",
                    "constants": [],
                    "variables": [
                      5
                    ]
                  },
                  "assignState": "True",
                  "priorState": "Active",
                  "bar#": 4
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Eidolon Activated",
                    "eidolon": 6
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster}}"
                      },
                      "modifier": "Lingsha_Eidolon6_Listen"
                    }
                  ]
                },
                {
                  "name": "IF",
                  "conditions": {
                    "name": "Trace Activated",
                    "conditionList": "Ember's Echo"
                  },
                  "passed": [
                    {
                      "name": "Add Events/Bonuses",
                      "to": {
                        "name": "Target Name",
                        "target": "{{Caster's Self-Made Battle-Events}}"
                      },
                      "modifier": "Lingsha_PointB3_OnListen",
                      "valuePerStack": {
                        "MDF_HPRatio": {
                          "operator": "Variables[0] (0.6) || RETURN",
                          "displayLines": "0.6",
                          "constants": [],
                          "variables": [
                            0.6
                          ]
                        },
                        "MDF_LifeTime": {
                          "operator": "Variables[0] (2) || RETURN",
                          "displayLines": "2",
                          "constants": [],
                          "variables": [
                            2
                          ]
                        }
                      },
                      "casterAssign": "TargetSelf"
                    }
                  ]
                },
                {
                  "name": "Define Custom Variable",
                  "variableName": "Lingsha_BENum",
                  "value": {
                    "operator": "Variables[0] (Lingsha_BENum) || Constants[0] (1) || ADD || RETURN",
                    "displayLines": "(Lingsha_BENum + 1)",
                    "constants": [
                      1
                    ],
                    "variables": [
                      "Lingsha_BENum"
                    ]
                  }
                }
              ]
            }
          ],
          "priorityLevel": -80
        }
      ],
      "stackData": [],
      "latentQueue": []
    }
  ]
}